// ======================================================
// ==========   Tableau de bord : difficulté   ==========
// ======================================================
//
// But du fichier.
// ----------------
// Gérer l’état de sélection de difficulté (easy / normal / hard / expert)
// sur l’écran d’accueil, filtrer les parties par difficulté et par session
// utilisateur, puis déclencher le rendu du tableau de bord (KPI, graphiques,
// tableau des parties).
//
// Ce que fait le script.
// ----------------------
// 1) Stocke la difficulté courante dans `localStorage` + état local `DASH`.
// 2) Lit les lignes Excel via pywebview, les met en cache, filtre par difficulté
//    et par utilisateur, puis rend le dashboard.
// 3) Met à jour l’UI des onglets et du <select> de difficulté.
// 4) Gère les sessions utilisateur (modale de choix / création, indicateur).
// 5) Expose `refreshHomeDashboard()` et `notifyDataUpdated()` pour relancer le rendu.
// 6) Écoute les signaux multi-onglets (BroadcastChannel + storage) pour se rafraîchir.
//
// Remarque :
// ----------
// Les données de jeu globales sont accessibles dans `window.S` si besoin,
// mais ce module ne crée ni n’invente aucun chemin dans `S`.

// ======================================================
// ============== A) État & utilitaires =================
// ======================================================

// Résumé IA affiché sur l’écran d’accueil en fonction de la difficulté.
const AI_HOME_SUMMARY = {
  easy: {
    id: "Radegonde",
    img: "./images/adversaires/emotions/Radegonde_joie.svg",
    name: "Radegonde, guérisseuse du Berry",
    subtitle: "Niveau facile · Adversaire indulgente et bavarde",
    desc: "Radegonde joue pour le plaisir plus que pour la gagne. Elle commet des bourdes, rit de ses erreurs et commente chaque pli avec des expressions berrichonnes savoureuses."
  },
  normal: {
    id: "Perrot",
    img: "./images/adversaires/emotions/Perrot_joie.svg",
    name: "Perrot, paysan du Boischaut",
    subtitle: "Niveau normal · Rusé mais bon vivant",
    desc: "Perrot connaît bien les cartes et n’hésite pas à chambrer le joueur. Il laisse parfois passer une occasion, mais il est loin d’être naïf : idéal pour des parties équilibrées."
  },
  hard: {
    id: "Jehanne",
    img: "./images/adversaires/emotions/Jehanne_fierte.svg",
    name: "Jehanne, noble dame du Berry",
    subtitle: "Niveau difficile · Exigeante et orgueilleuse",
    desc: "Jehanne a l’habitude de gagner. Elle calcule froidement ses annonces et supporte mal d’être renversée. Attendez-vous à des parties tendues où chaque erreur se paye."
  },
  expert: {
    id: "Andry",
    img: "./images/adversaires/emotions/Andry_fierte.svg",
    name: "Andry, maître du Brézin",
    subtitle: "Niveau expert · Stratège impitoyable",
    desc: "Andry ne laisse presque rien passer. Il anticipe les annonces, guette chaque 10 et chaque As, et ne lâche jamais sa proie. À affronter seulement si vous aimez souffrir."
  }
};

// Met à jour la carte de présentation de l’IA sur la page d’accueil.
function updateAISummary(diff) {
  const data = AI_HOME_SUMMARY[diff];
  if (!data) return;

  const imgEl  = document.getElementById("ai-profile-img");
  const nameEl = document.getElementById("ai-profile-name");
  const subEl  = document.getElementById("ai-profile-subtitle");
  const descEl = document.getElementById("ai-profile-desc");

  if (!imgEl || !nameEl || !subEl || !descEl) return;

  imgEl.src         = data.img;
  imgEl.alt         = data.name;
  nameEl.textContent = data.name;
  subEl.textContent  = data.subtitle;
  descEl.textContent = data.desc;
}

// État local du tableau de bord.
const DASH = {
  diff: (localStorage.getItem("brezin:homeDiff") || "normal"),
  user: (localStorage.getItem("brezin:userName") || ""),
  rowsAll: [] // cache de toutes les lignes Excel.
};

// Passe le nom d'utilisateur en global.
window.userName = DASH.user || "";

// Normalise une difficulté quelconque en valeur valide.
function sanitizeDiff(v) {
  v = String(v || "").toLowerCase();
  return ["easy", "normal", "hard", "expert"].includes(v) ? v : "normal";
}
DASH.diff = sanitizeDiff(DASH.diff);

// Filtre les lignes selon la difficulté demandée.
function filterRowsByDifficulty(rows, diff) {
  const d = sanitizeDiff(diff);
  const toLc = s => (s == null ? "" : String(s).toLowerCase());
  return Array.isArray(rows) ? rows.filter(r => toLc(r.difficulte) === d) : [];
}

// Filtre les lignes selon l'utilisateur (session).
function filterRowsByUser(rows, userName) {
  const u = String(userName || "").toLowerCase();
  if (!u) return Array.isArray(rows) ? rows : [];
  return Array.isArray(rows)
    ? rows.filter(r => String(r.userName || r.utilisateur || "").toLowerCase() === u)
    : [];
}

// Filtre combiné difficulté + utilisateur.
function filterRows(rows, diff, userName) {
  const byDiff = filterRowsByDifficulty(rows, diff);
  return filterRowsByUser(byDiff, userName);
}

// Met à jour l’UI des onglets + du <select> pour refléter la difficulté active.
function applyDiffUI(diff) {
  document.querySelectorAll(".diff-tab").forEach(btn => {
    const on = String(btn.dataset.diff || "").toLowerCase() === diff;
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });

  const sel = document.getElementById("diff-select");
  if (sel) sel.value = diff;
}

// Recalcule et rend KPIs / graphiques / tableau à partir d’un sous-ensemble.
function renderFromRows(rowsSub) {
  const M = buildMetricsFromRows(rowsSub);
  updateKPIs(M);
  ensureCharts(M);
  fillRecentGamesTable(rowsSub);
}

// Renvoie la liste des noms d'utilisateurs distincts.
function getDistinctUserNames(rows) {
  const set = new Set();
  (rows || []).forEach(r => {
    const name = (r.userName || r.utilisateur || "").trim();
    if (name) set.add(name);
  });
  return Array.from(set);
}

// Remplit la liste des sessions dans la modale.
function fillSessionModalList(names) {
  const list = document.getElementById("session-modal_list");
  if (!list) return;

  list.innerHTML = "";
  const last = (DASH.user || "").toLowerCase();

  if (!names.length) {
    const p = document.createElement("p");
    p.textContent = "Aucune session existante. Crée une nouvelle session ci-dessous.";
    p.style.fontSize = "0.9rem";
    p.style.color = "var(--retro-ink-muted)";
    list.appendChild(p);
    return;
  }

  names.forEach(name => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "session-btn";
    btn.dataset.username = name;
    btn.innerHTML = `
      <span class="session-btn_name">${name}</span>
      <span class="session-btn_hint">
        ${last && name.toLowerCase() === last
          ? "Dernière session utilisée"
          : "Cliquer pour rejoindre cette session"}
      </span>
    `;
    list.appendChild(btn);
  });
}

// Ouvre / ferme la modale de session.
function openSessionModal() {
  const modal = document.getElementById("session-modal");
  if (!modal) return;
  modal.classList.add("modal-root--open");
}

function closeSessionModal() {
  const modal = document.getElementById("session-modal");
  if (!modal) return;
  modal.classList.remove("modal-root--open");
  BREZIN_AUDIO.showHome();
}

// ======================================================
// ==========   B) Sessions + rafraîchissement   ========
// ======================================================

// Lecture des lignes + ouverture modale au démarrage.
async function initUserSession() {
  const api = await window.getPywebviewApi();
  if (!api) return;

  try {
    const res = await api.read_rows(300); // plafond partagé avec le dashboard.
    DASH.rowsAll = res?.ok ? (res.rows || []) : [];

    const names = getDistinctUserNames(DASH.rowsAll);
    fillSessionModalList(names);
    openSessionModal();
  } catch (e) {
    console.error("Erreur initUserSession:", e);
    DASH.rowsAll = [];
    fillSessionModalList([]);
    openSessionModal();
  }
}

// Validation de la session choisie / créée (bouton "Valider").
function confirmSessionChoice() {
  const modal = document.getElementById("session-modal");
  if (!modal) return;

  const checked = modal.querySelector("input[name='sessionUser']:checked");
  let name = checked?.value || "";

  if (!name) {
    const inputNew = document.getElementById("session-modal_newName");
    name = (inputNew?.value || "").trim();
  }

  if (!name) {
    alert("Merci de choisir ou saisir un nom de session.");
    return;
  }

  // Enregistrement de la session.
  window.userName = name;
  DASH.user = name;
  try { localStorage.setItem("brezin:userName", name); } catch {}

  closeSessionModal();

  const subset = filterRows(DASH.rowsAll, DASH.diff, DASH.user);
  renderFromRows(subset);
  applyDiffUI(DASH.diff);
}

// Bouton "Valider" de la modale principale.
document.addEventListener("click", (e) => {
  if (e.target.id === "session-modal_confirm") {
    confirmSessionChoice();
  }
});

// Rafraîchit le dashboard (relit Excel + rerend).
async function refreshHomeDashboard() {
  const api = await window.getPywebviewApi();
  if (!api) return;

  try {
    const res = await api.read_rows(300);
    DASH.rowsAll = res?.ok ? (res.rows || []) : [];

    const subset = filterRows(DASH.rowsAll, DASH.diff, DASH.user);
    renderFromRows(subset);
    applyDiffUI(DASH.diff);
    updateAISummary(DASH.diff);
  } catch (e) {
    console.error(e);
  }
}
window.refreshHomeDashboard = refreshHomeDashboard;

// Notifie les autres vues / onglets qu’une mise à jour a eu lieu.
function notifyDataUpdated() {
  // a) CustomEvent local.
  document.dispatchEvent(new CustomEvent("brezin:rows-updated"));

  // b) BroadcastChannel (autres onglets même origin).
  try { new BroadcastChannel("brezin").postMessage({ type: "rows-updated" }); } catch {}

  // c) localStorage (déclenche l’événement "storage" ailleurs).
  try { localStorage.setItem("BREZIN_GAMES_UPDATED", String(Date.now())); } catch {}
}
window.notifyDataUpdated = notifyDataUpdated;

// Signal local.
document.addEventListener("brezin:rows-updated", () => {
  refreshHomeDashboard();
});

// Signal inter-onglets via BroadcastChannel.
try {
  const ch = new BroadcastChannel("brezin");
  ch.addEventListener("message", (e) => {
    if (e?.data?.type === "rows-updated") refreshHomeDashboard();
  });
} catch {}

// Signal inter-onglets via "storage".
window.addEventListener("storage", (e) => {
  if (e.key === "BREZIN_GAMES_UPDATED") refreshHomeDashboard();
});

// ======================================================
// === C) Sélection de difficulté (onglets + select) ====
// ======================================================

// Modifie la difficulté active, persiste, relance le rendu.
function selectDifficulty(nextDiff) {
  const d = sanitizeDiff(nextDiff);
  DASH.diff = d;
  localStorage.setItem("brezin:homeDiff", d);
  applyDiffUI(d);
  updateAISummary(d);

  if (Array.isArray(DASH.rowsAll) && DASH.rowsAll.length) {
    const subset = filterRows(DASH.rowsAll, d, DASH.user);
    renderFromRows(subset);
  } else {
    refreshHomeDashboard();
  }
}

// Clic sur les onglets de difficulté.
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".diff-tab");
  if (!btn) return;

  const diff = btn.dataset.diff;
  if (!diff) return;

  selectDifficulty(diff);
});

// Changement via <select id="diff-select">.
document.getElementById("diff-select")?.addEventListener("change", (e) => {
  selectDifficulty(e.target.value);
});

// Clic sur un bouton de session existante.
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".session-btn");
  if (!btn) return;

  const name = btn.dataset.username || "";
  if (!name) return;

  window.userName = name;
  DASH.user = name;
  try { localStorage.setItem("brezin:userName", name); } catch {}

  updateSessionIndicator(name);
  closeSessionModal();

  const subset = filterRows(DASH.rowsAll, DASH.diff, DASH.user);
  renderFromRows(subset);
  applyDiffUI(DASH.diff);
});

// Affichage / masquage du formulaire de création de session.
document.addEventListener("click", (e) => {
  if (e.target.id !== "session-modal_newBtn") return;

  const form = document.getElementById("session-modal_newForm");
  if (!form) return;

  form.classList.toggle("is-open");

  const input = document.getElementById("session-modal_newName");
  if (form.classList.contains("is-open") && input) {
    input.focus();
  }
});

// Validation d’une nouvelle session (création).
document.addEventListener("click", (e) => {
  if (e.target.id !== "session-modal_confirmNew") return;

  const input = document.getElementById("session-modal_newName");
  if (!input) return;

  const name = (input.value || "").trim();
  if (!name) {
    alert("Merci de saisir un nom de session.");
    return;
  }

  window.userName = name;
  DASH.user = name;
  try { localStorage.setItem("brezin:userName", name); } catch {}

  updateSessionIndicator(name);
  closeSessionModal();

  const subset = filterRows(DASH.rowsAll, DASH.diff, DASH.user);
  renderFromRows(subset);
  applyDiffUI(DASH.diff);
});

// Bouton "Changer de session".
const btn = document.getElementById("btn-session-switch");
btn.addEventListener("click", () => {
  initUserSession();
});

// ======================================================
// ============  Session : indicateur & nom  ============
// ======================================================

// Renvoie le nom d’utilisateur courant (priorité : window → localStorage → "Invité").
function getCurrentUserName() {
  const fromWin = (window.userName || "").trim();
  if (fromWin) return fromWin;

  try {
    const fromStorage = (localStorage.getItem("brezin:userName") || "").trim();
    if (fromStorage) return fromStorage;
  } catch {}

  return "Invité";
}

// Met à jour l’indicateur de session dans l’UI.
function updateSessionIndicator() {
  const el = document.getElementById("session-indicator_name");
  if (!el) return;

  const finalName =
    (window.userName || "").trim() ||
    getCurrentUserName();

  el.textContent = finalName;
  el.parentElement.title = `Session en cours : ${finalName}`;
}

// ======================================================
// ===============  D) Initialisation Home  =============
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  // Applique la difficulté courante à l’UI.
  applyDiffUI(DASH.diff);

  // Initialisation de la carte IA.
  updateAISummary(DASH.diff);

  // Configure le bouton "Changer de session".
  wireSessionSwitchButton();

  // Met à jour l’indicateur de session.
  updateSessionIndicator();

  // Première lecture des lignes + ouverture de la modale.
  initUserSession();
});

// (appel redondant conservé pour rester 100% fidèle au comportement existant)
initUserSession();
