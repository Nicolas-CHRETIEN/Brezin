// ======================================================
// ==========   Tableau de bord : difficulté   ==========
// ======================================================
//
// But du fichier.
// ----------------
// Gérer l’état de sélection de difficulté (easy/normal/hard/expert) sur l’écran d’accueil,
// filtrer les lignes de parties par difficulté, et déclencher le rendu du tableau de bord.
//
// Ce que fait le script.
// ----------------------
// 1) Stocke la difficulté courante dans `localStorage` et dans l’état local `DASH`.
// 2) Lit les lignes (via pywebview ailleurs dans l’app), les met en cache, filtre par difficulté.
// 3) Met à jour l’UI des onglets et du <select>, et appelle le rendu des KPI/Graphiques/Tableau.
// 4) Expose `refreshHomeDashboard()` et `notifyDataUpdated()` pour relancer le rendu.
// 5) Écoute les signaux multi-onglets (BroadcastChannel et storage) pour se rafraîchir.
//
// Remarque : les données de jeu globales sont accessibles via `window.S` si nécessaire.
// Ici, ce module n’invente aucun chemin dans `S`.



// ============== A) État & utilitaires =================
// État local Home.
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

function updateAISummary(diff) {
  const data = AI_HOME_SUMMARY[diff];
  if (!data) return;

  const imgEl   = document.getElementById("ai-profile-img");
  const nameEl  = document.getElementById("ai-profile-name");
  const subEl   = document.getElementById("ai-profile-subtitle");
  const descEl  = document.getElementById("ai-profile-desc");

  if (!imgEl || !nameEl || !subEl || !descEl) return;

  imgEl.src = data.img;
  imgEl.alt = data.name;
  nameEl.textContent = data.name;
  subEl.textContent  = data.subtitle;
  descEl.textContent = data.desc;
}


const DASH = {
  diff: (localStorage.getItem("brezin:homeDiff") || "normal"),
  user: (localStorage.getItem("brezin:userName") || ""), // nom de session courant
  rowsAll: [] // Toutes les lignes Excel en cache.
};

// Passer le nom d'utilisateur en global.
window.userName = DASH.user || "";

// Normalise une difficulté arbitraire en valeur attendue.
function sanitizeDiff(v){
  v = String(v || "").toLowerCase();
  return (["easy","normal","hard","expert"].includes(v) ? v : "normal");
}
DASH.diff = sanitizeDiff(DASH.diff);

// Filtre les lignes selon la difficulté demandée.
function filterRowsByDifficulty(rows, diff){
  const d = sanitizeDiff(diff);
  const toLc = s => (s == null ? "" : String(s).toLowerCase());
  return Array.isArray(rows) ? rows.filter(r => toLc(r.difficulte) === d) : [];
}

// Filtre les lignes selon l'utilisateur (session).
function filterRowsByUser(rows, userName){
  const u = String(userName || "").toLowerCase();
  if (!u) return Array.isArray(rows) ? rows : [];
  return Array.isArray(rows)
    ? rows.filter(r => String(r.userName || r.utilisateur || "").toLowerCase() === u)
    : [];
}

// Filtre combiné difficulté + utilisateur.
function filterRows(rows, diff, userName){
  const byDiff = filterRowsByDifficulty(rows, diff);
  return filterRowsByUser(byDiff, userName);
}

// Met à jour l’UI des onglets et du <select> pour refléter la difficulté active.
function applyDiffUI(diff){
  document.querySelectorAll(".diff-tab").forEach(btn => {
    const on = String(btn.dataset.diff || "").toLowerCase() === diff;
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });
  const sel = document.getElementById("diff-select");
  if (sel) sel.value = diff;
}

// Recalcule l’intégralité des KPI/Charts/Tableau à partir d’un sous-ensemble.
function renderFromRows(rowsSub){
  const M = buildMetricsFromRows(rowsSub);
  updateKPIs(M);
  ensureCharts(M);
  fillRecentGamesTable(rowsSub);
}


// Retourne la liste des noms d'utilisateurs distincts à partir des lignes.
function getDistinctUserNames(rows){
  const set = new Set();
  (rows || []).forEach(r => {
    const name = (r.userName || r.utilisateur || "").trim();
    if (name) set.add(name);
  });
  return Array.from(set);
}

// Remplit la liste dans la modale
function fillSessionModalList(names){
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
        ${last && name.toLowerCase() === last ? "Dernière session utilisée" : "Cliquer pour rejoindre cette session"}
      </span>
    `;
    list.appendChild(btn);
  });
}

// Ouvre la modale de session
function openSessionModal(){
  const modal = document.getElementById("session-modal");
  if (!modal) return;
  modal.classList.add("modal-root--open");
}

// Ferme la modale de session
function closeSessionModal(){
  const modal = document.getElementById("session-modal");
  if (!modal) return;
  modal.classList.remove("modal-root--open");
  BREZIN_AUDIO.showHome();
}

// Lecture des lignes + ouverture de la modale au démarrage.
async function initUserSession(){
  const api = await window.getPywebviewApi();
  if (!api) return;

  try {
    const res = await api.read_rows(300); // même plafond que pour le dashboard
    DASH.rowsAll = res?.ok ? (res.rows || []) : [];

    const names = getDistinctUserNames(DASH.rowsAll);
    fillSessionModalList(names);
    openSessionModal();
  } catch (e) {
    console.error("Erreur initUserSession:", e);
    // En cas d'erreur, on laisse quand même la possibilité de créer une nouvelle session
    DASH.rowsAll = [];
    fillSessionModalList([]);
    openSessionModal();
  }
}

// Validation de la session choisie/créée
function confirmSessionChoice(){
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

  // On enregistre
  window.userName = name;
  DASH.user = name;
  try { localStorage.setItem("brezin:userName", name); } catch {}

  closeSessionModal();

  // On rend le dashboard avec les lignes déjà en cache + les filtres
  const subset = filterRows(DASH.rowsAll, DASH.diff, DASH.user);
  renderFromRows(subset);
  applyDiffUI(DASH.diff);
}

// Bouton "Valider" de la modale
document.addEventListener("click", (e) => {
  if (e.target.id === "session-modal_confirm") {
    confirmSessionChoice();
  }
});

// ===== B) Rafraîchissement (lecture + rendu) =========
async function refreshHomeDashboard(){
  const api = await window.getPywebviewApi();
  if (!api) return;

  try {
    // Lit toutes les lignes une fois et les garde en cache.
    const res = await api.read_rows(300); // Ajuster le plafond si besoin.
    DASH.rowsAll = res?.ok ? (res.rows || []) : [];

    // Filtre selon la difficulté active ET la session active.
    const subset = filterRows(DASH.rowsAll, DASH.diff, DASH.user);
    renderFromRows(subset);
    applyDiffUI(DASH.diff);
    //  garde la carte IA en phase avec la diff actuelle
    updateAISummary(DASH.diff);
  } catch(e){
    console.error(e);
  }
}

// Expose la fonction globalement pour réutilisation.
window.refreshHomeDashboard = refreshHomeDashboard;

// Notifie les autres vues/onglets qu’une mise à jour des données a eu lieu.
function notifyDataUpdated(){
  // a) Événement custom (même document).
  document.dispatchEvent(new CustomEvent('brezin:rows-updated'));
  // b) BroadcastChannel (autres onglets du même origin).
  try { new BroadcastChannel('brezin').postMessage({ type: 'rows-updated' }); } catch {}
  // c) localStorage (déclenche 'storage' sur les autres onglets).
  try { localStorage.setItem('BREZIN_GAMES_UPDATED', String(Date.now())); } catch {}
}
window.notifyDataUpdated = notifyDataUpdated;

// Écoute les signaux locaux (même document).
document.addEventListener('brezin:rows-updated', () => {
  refreshHomeDashboard();
});

// Écoute les signaux inter-onglets via BroadcastChannel.
try {
  const ch = new BroadcastChannel('brezin');
  ch.addEventListener('message', (e) => {
    if (e?.data?.type === 'rows-updated') refreshHomeDashboard();
  });
} catch {}

// Écoute le signal inter-onglets via l’événement 'storage'.
window.addEventListener('storage', (e) => {
  if (e.key === 'BREZIN_GAMES_UPDATED') refreshHomeDashboard();
});

// === C) Sélection de difficulté (onglets + select) ====
// Modifie la difficulté active, persiste, et déclenche un rendu approprié.
function selectDifficulty(nextDiff){
  const d = sanitizeDiff(nextDiff);
  DASH.diff = d;
  localStorage.setItem("brezin:homeDiff", d);
  applyDiffUI(d);
  //  MAJ de la carte IA
  updateAISummary(d);

  if (Array.isArray(DASH.rowsAll) && DASH.rowsAll.length){
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

// Changement via <select id="diff-select"> si présent.
document.getElementById("diff-select")?.addEventListener("change", (e) => {
  selectDifficulty(e.target.value);
});

// Clic sur un bouton de session existante
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".session-btn");
  if (!btn) return;

  const name = btn.dataset.username || "";
  if (!name) return;

  // On choisit directement la session au clic
  window.userName = name;
  DASH.user = name;
  try { localStorage.setItem("brezin:userName", name); } catch {}

  // Met à jour l’indicateur visuel
  updateSessionIndicator(name);

  closeSessionModal();

  const subset = filterRows(DASH.rowsAll, DASH.diff, DASH.user);
  renderFromRows(subset);
  applyDiffUI(DASH.diff);
});

// Affichage du formulaire de création
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

// Validation de la nouvelle session
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

  // Met à jour l’indicateur visuel
  updateSessionIndicator(name);

  closeSessionModal();

  const subset = filterRows(DASH.rowsAll, DASH.diff, DASH.user);
  renderFromRows(subset);
  applyDiffUI(DASH.diff);
});

const btn = document.getElementById("btn-session-switch");

btn.addEventListener("click", (e) => {
  // Recharge les sessions depuis Excel
  initUserSession();
});

// Mettre a jour le nom de l'utilisateur connecté
function getCurrentUserName() {
  // priorité : window.userName, sinon localStorage, sinon "Invité"
  const fromWin = (window.userName || "").trim();
  if (fromWin) return fromWin;

  try {
    const fromStorage = (localStorage.getItem("brezin:userName") || "").trim();
    if (fromStorage) return fromStorage;
  } catch {}

  return "Invité";
}

function updateSessionIndicator() {
  const el = document.getElementById("session-indicator_name");
  if (!el) return;

  const finalName =
    (window.userName || "").trim() ||
    getCurrentUserName();

  el.textContent = finalName;
  el.parentElement.title = `Session en cours : ${finalName}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Applique l’état de la difficulté au chargement.
  applyDiffUI(DASH.diff);

  //  Initialise la carte IA avec la diff actuelle
  updateAISummary(DASH.diff);

  // Configure le bouton "Changer de session"
  wireSessionSwitchButton();

  // Met à jour l’indicateur de session avec les infos actuelles
  updateSessionIndicator();

  // Ouvre la modale + lit les lignes pour la première fois
  initUserSession();
});

initUserSession();