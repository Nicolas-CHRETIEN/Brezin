// ======================================================
// ============  Modale de fin de partie (4 étapes)  ============
// ======================================================
// Rôle.
// ----
// Afficher une modale en 4 écrans successifs : (0) récap annonces de toute la partie
// avec total animé ; (1) détail pédagogique des 10 & As de la manche et ajout animé
// au total ; (2) résultat final avec animation (confettis si victoire joueur) ;
// (3) récap complet + bouton “Suivant” qui enregistre dans Excel et retourne à l’accueil.
//
// Étapes.
// -------
// 1) Préparer les utilitaires (somme, extraction des annonces, 10 & As de la manche).
// 2) Calculer les totaux partie (annonces, 10 & As), déterminer le vainqueur et l’écart.
// 3) Construire la modale et définir les rendus des 4 écrans (renderStep0..3).
// 4) Gérer la navigation par clic (tap) pour avancer d’un écran.
//

function showEndOfGameModal() {
  if ($("#modal-root")?.classList.contains("modal-root--open")) return;

  // ===== 1) Utilitaires. =====
  const sum = (arr, pluck) => (Array.isArray(arr) ? arr.reduce((a, x) => a + (+pluck(x) || 0), 0) : 0);
  const valFromDecl = d => d?.gain ?? d?.points ?? d?.value ?? 0;
  const getDecls = list => (Array.isArray(list) ? list : []);

  // Extraction « profonde » d’annonces depuis diverses formes de stockage.
  const deepFlatDecls = (node) => {
    if (!node) return [];
    if (Array.isArray(node)) return node.flatMap(deepFlatDecls);
    if (typeof node === "object") {
      if (Array.isArray(node.declarationsListP1)) return deepFlatDecls(node.declarationsListP1);
      if (Array.isArray(node.declarationsListP2)) return deepFlatDecls(node.declarationsListP2);
      if (Array.isArray(node.declarationsPlayer)) return deepFlatDecls(node.declarationsPlayer);
      if (Array.isArray(node.declarationsComputer)) return deepFlatDecls(node.declarationsComputer);
      if ("gain" in node || "name" in node || "rank" in node) return [node];
    }
    return [];
  };

  // Comptage des 10 & As sur la manche (via plis actuels).
  function inferTenAceTotals() {
    const getRank = (c) => {
      if (!c) return "";
      if (c.rank) return String(c.rank).toLowerCase();
      if (typeof c.name === "string") {
        const m = c.name.match(/^(as|10|valet|dame|roi|7|8|9)/i);
        return m ? m[1].toLowerCase() : "";
      }
      return "";
    };
    const isTen = (c) => getRank(c) === "10";
    const isAce = (c) => getRank(c) === "as";
    const countBy = (arr, pred) => (Array.isArray(arr) ? arr.reduce((n, c) => n + (pred(c) ? 1 : 0), 0) : 0);

    const tensP = countBy(S?.trickPlayer,   isTen);
    const acesP = countBy(S?.trickPlayer,   isAce);
    const tensC = countBy(S?.trickComputer, isTen);
    const acesC = countBy(S?.trickComputer, isAce);

    return { tensP, tensC, acesP, acesC, p1: tensP + acesP, p2: tensC + acesC };
  }

  const tenAce = inferTenAceTotals();

  // Applique 10 & As au score global une seule fois (idempotent).
  S.score = S.score || {};
  if (!S.score._tenAceApplied) {
    S.score.player1 = (+S.score.player1 || 0) + tenAce.p1 * 10;
    S.score.player2 = (+S.score.player2 || 0) + tenAce.p2 * 10;
    S.score._tenAceApplied = true;
  }

  // Annonces manche courante.
  const roundP1 = getDecls(S.score.declarationsListP1);
  const roundP2 = getDecls(S.score.declarationsListP2);

  // Annonces manches précédentes.
  const prevP1 = deepFlatDecls(S.score.previousRounds?.declarationsPlayer ?? S.score.previousRounds);
  const prevP2 = deepFlatDecls(S.score.previousRounds?.declarationsComputer ?? S.score.previousRounds);

  // ===== 2) Totaux partie et vainqueur. =====
  const allP1 = [...roundP1, ...prevP1];
  const allP2 = [...roundP2, ...prevP2];

  const aggregateByName = (list) => {
    const map = new Map();
    for (const d of getDecls(list)) {
      const name = (d?.name ?? d?.rank ?? "Annonce").toString();
      const gain = +valFromDecl(d) || 0;
      const cur = map.get(name) || { name, count: 0, total: 0 };
      cur.count += 1;
      cur.total += gain;
      map.set(name, cur);
    }
    return map;
  };

  const aggP1 = aggregateByName(allP1);
  const aggP2 = aggregateByName(allP2);
  const uniqueNames = Array.from(new Set([...aggP1.keys(), ...aggP2.keys()])).sort((a, b) => a.localeCompare(b, "fr"));

  const p1DeclTotal = sum(Array.from(aggP1.values()), x => x.total);
  const p2DeclTotal = sum(Array.from(aggP2.values()), x => x.total);

  const finals = { p1: +S.score.player1 || 0, p2: +S.score.player2 || 0 };
  const tenAceParty = {
    p1: Math.max(0, finals.p1 - p1DeclTotal),
    p2: Math.max(0, finals.p2 - p2DeclTotal)
  };
  const whoWins = finals.p1 === finals.p2 ? "Égalité" : (finals.p1 > finals.p2 ? "Joueur" : "Ordinateur");
  const gap = Math.abs(finals.p1 - finals.p2);

  // Expose pour la suite (écriture Excel, dashboard, etc.).
  window.tenAce = tenAce;
  window.finals = finals;
  window.gap = gap;
  window.p1DeclTotal = p1DeclTotal;
  window.p2DeclTotal = p2DeclTotal;
  window.p1Decls = allP1;
  window.p2Decls = allP2;

  // ===== 3) Construction de la modale et des écrans. =====
  const root = el("div", { class: "eog-wrap" });
  const stepBox = el("div", { class: "eog-step", id: "eog-step" });
  const hint = el("div", { class: "tap-hint eog-muted" }, "Clique sur la modale pour continuer…");
  root.append(stepBox, hint);
  showModal({ title: "Fin de partie", content: root, actions: [] });

  // Animations numériques et helpers d’insertion.
  function animateCount(elNum, from, to, dur = 450) {
    const start = performance.now();
    function frame(t) {
      const k = Math.min(1, (t - start) / dur);
      const val = Math.round(from + (to - from) * k);
      elNum.textContent = String(val);
      if (k < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  function addRevealRow(tbody, label, p1, p2) {
    const tr = el("tr", { class: "row-reveal" },
      el("td", {}, label),
      el("td", { class: "eog-center" }, String(p1)),
      el("td", { class: "eog-center" }, String(p2))
    );
    tbody.append(tr);
    requestAnimationFrame(() => tr.classList.add("row-reveal--in"));
  }

  // Écran 0 : annonces agrégées (partie entière).
  function renderStep0() {
    stepBox.innerHTML = "";

    const tAn = el("table", { class: "eog-table" },
      el("colgroup", {},
        el("col", { class: "c-name" }),
        el("col", { class: "c-nb" }),
        el("col", { class: "c-pts" }),
        el("col", { class: "c-nb" }),
        el("col", { class: "c-pts" }),
      ),
      el("thead", {},
        el("tr", {},
          el("th", { rowspan: "2" }, "Annonces (partie entière)"),
          el("th", { colspan: "2", class: "eog-right" }, "Joueur"),
          el("th", { colspan: "2", class: "eog-right" }, "Ordinateur")
        ),
        el("tr", {},
          el("th", { class: "eog-right eog-th-sub" }, "×"),
          el("th", { class: "eog-right eog-th-sub" }, "Pts"),
          el("th", { class: "eog-right eog-th-sub" }, "×"),
          el("th", { class: "eog-right eog-th-sub" }, "Pts")
        )
      )
    );
    const tbAn = el("tbody");
    tAn.append(tbAn);

    for (const name of uniqueNames) {
      const a1 = aggP1.get(name) || { count: 0, total: 0 };
      const a2 = aggP2.get(name) || { count: 0, total: 0 };
      tbAn.append(
        el("tr", {},
          el("td", {}, name),
          el("td", { class: "eog-center" }, String(a1.count)),
          el("td", { class: "eog-center" }, String(a1.total)),
          el("td", { class: "eog-center" }, String(a2.count)),
          el("td", { class: "eog-center" }, String(a2.total))
        )
      );
    }

    const totalsRow = el("div", { class: "totals-inline" },
      el("div", { class: "eog-label" }, "Total annonces (partie entière)"),
      el("div", { class: "totals-inline_values" },
        el("span", { class: "tag tag--player", id: "anTotalP1" }, "0"),
        el("span", { class: "tag tag--cpu",    id: "anTotalP2" }, "0")
      )
    );

    stepBox.append(
      el("div", { class: "block" },
        el("div", { class: "block-title" }, "Annonces (agrégées)"),
        tAn,
        totalsRow
      ),
      el("div", { class: "eog-note" }, "Clique pour passer aux 10 & As (manche).")
    );

    animateCount($("#anTotalP1"), 0, p1DeclTotal);
    animateCount($("#anTotalP2"), 0, p2DeclTotal);
  }

  // Écran 1 : 10 & As (manche) + ajout au total avec animation.
  function renderStep1() {
    stepBox.innerHTML = "";

    const headerTotals = el("div", { class: "totals-inline" },
      el("div", { class: "eog-label" }, "Total courant (après annonces)"),
      el("div", { class: "totals-inline_values" },
        el("span", { class: "tag tag--player", id: "curTotalP1" }, String(p1DeclTotal)),
        el("span", { class: "tag tag--cpu",    id: "curTotalP2" }, String(p2DeclTotal))
      )
    );

    const tTA = el("table", { class: "eog-table" },
      el("colgroup", {},
        el("col", { class: "c-name" }),
        el("col", { class: "c-pts" }),
        el("col", { class: "c-pts" }),
      ),
      el("thead", {},
        el("tr", {},
          el("th", {}, "10 & As (plis de la manche)"),
          el("th", { class: "eog-right" }, "Joueur"),
          el("th", { class: "eog-right" }, "Ordinateur")
        )
      )
    );
    const tbTA = el("tbody");
    tTA.append(tbTA);

    setTimeout(() => addRevealRow(tbTA, "As capturés",  tenAce.acesP, tenAce.acesC), 120);
    setTimeout(() => addRevealRow(tbTA, "Dix capturés", tenAce.tensP, tenAce.tensC), 320);

    const addRow = el("div", { class: "totals-inline totals-inline--add" },
      el("div", { class: "eog-label" }, "Ajout 10 & As (×10)"),
      el("div", { class: "totals-inline_values" },
        el("span", { class: "tag tag--add", id: "addP1" }, `+${tenAce.p1 * 10}`),
        el("span", { class: "tag tag--add", id: "addP2" }, `+${tenAce.p2 * 10}`)
      )
    );

    const newTotals = el("div", { class: "totals-inline totals-inline--strong" },
      el("div", { class: "eog-label" }, "Nouveau total"),
      el("div", { class: "totals-inline_values" },
        el("span", { class: "tag tag--player", id: "newTotalP1" }, String(p1DeclTotal)),
        el("span", { class: "tag tag--cpu",    id: "newTotalP2" }, String(p2DeclTotal))
      )
    );

    stepBox.append(
      el("div", { class: "block" },
        el("div", { class: "block-title" }, "10 & As (révélation)"),
        headerTotals,
        tTA,
        addRow,
        newTotals
      ),
      el("div", { class: "eog-note" }, "Clique pour afficher le résultat de la partie.")
    );

    setTimeout(() => {
      animateCount($("#newTotalP1"), p1DeclTotal, p1DeclTotal + tenAce.p1 * 10);
      animateCount($("#newTotalP2"), p2DeclTotal, p2DeclTotal + tenAce.p2 * 10);
      $("#newTotalP1").classList.add("pulse");
      $("#newTotalP2").classList.add("pulse");
      setTimeout(() => {
        $("#newTotalP1").classList.remove("pulse");
        $("#newTotalP2").classList.remove("pulse");
      }, 500);
    }, 420);
  }

  // Écran 2 : résultat final (avec confettis si victoire joueur).
  function renderStep2() {
    stepBox.innerHTML = "";
    const title = el("div", { class: "eog-muted eog-sub" }, "Résultat de la partie");
    const big   = el("div", { class: "eog-winner" }, "…");
    const sub   = el("div", { class: "eog-sub" }, "Calcul des totaux…");
    const fx    = el("div", { class: "confetti-layer", "aria-hidden": "true" });

    // nouveau conteneur pour le gif
    const gifBox = el("div", { class: "eog-gif-box" });

    stepBox.append(title, big, sub, fx, gifBox);

    setTimeout(() => {
      const who = (finals.p1 === finals.p2)
        ? "Égalité"
        : (finals.p1 > finals.p2 ? "Joueur" : "Ordinateur");

      big.textContent = (who === "Égalité") ? "ÉGALITÉ" : `${who} GAGNE`;
      big.classList.add("eog-winner--show", "eog-winner--glow");

      sub.textContent = (who === "Égalité")
        ? `Totaux : ${finals.p1} – ${finals.p2}.`
        : `Écart : ${gap} point${gap > 1 ? "s" : ""} ( ${finals.p1} – ${finals.p2} ).`;

      // confettis si le joueur gagne
      if (who === "Joueur") {
        launchConfetti(fx, 90);
      }

      // ====== GIF fin de partie ======
      const perso = END_GIF_BY_DIFF[S.difficulty]; // Andry / Jehanne / Perrot / Radegonde
      if (perso && who !== "Égalité") {
        // Si le joueur gagne → perso_defaite
        // Si le joueur perd  → perso_victoire
        const suffix = (who === "Joueur") ? "defaite" : "victoire";
        const file   = `${perso}_${suffix}.gif`; // ex : "Jehanne_victoire.gif"
        if (showIA) showEndGif(gifBox, file);
      }
    }, 450);
  }


  function launchConfetti(layer, n = 80) {
  layer.innerHTML = "";
  const W = layer.clientWidth || 600;
  const H = layer.clientHeight || 400; // utile pour placer les explosions

  // ========================
  // CONFETTIS
  // ========================
  for (let i = 0; i < n; i++) {
    const d = el("i", { class: "confetti" });
    d.style.left = (Math.random() * W) + "px";
    d.style.animationDelay = (Math.random() * 0.6) + "s";
    d.style.animationDuration = (0.8 + Math.random() * 1.2) + "s";
    layer.append(d);
  }

  // ========================
  // FEUX D'ARTIFICE MULTIPLES
  // ========================
  const total = 15; // nombre d'explosions
  let count = 0;

  function spawnFirework() {
    if (count >= total) return;
    count++;

    // conteneur d’une explosion
    const fw = el("div", { class: "firework-container" });

    // position aléatoire dans le layer
    fw.style.left = (Math.random() * W) + "px";

    // Position vertical random : entre 20% et 60% de la hauteur
    const y = 20 + Math.random() * 40;
    fw.style.bottom = y + "%";

    layer.append(fw);

    // création particules
    const particles = 25;
    const R = 60;
    const Rextra = 40;

    for (let i = 0; i < particles; i++) {
      const p = el("div", { class: "firework" });

      const angle = Math.random() * 2 * Math.PI;
      const radius = R + Math.random() * Rextra;

      p.style.setProperty("--dx", `${Math.cos(angle) * radius}px`);
      p.style.setProperty("--dy", `${Math.sin(angle) * radius}px`);

      fw.append(p);
    }

    // explosion suivante après 150–300 ms
    setTimeout(spawnFirework, 150 + Math.random() * 150);
  }

  // lancement du premier
  spawnFirework();
  playSound("fireworks.wav");
}


  // Écran 3 : récapitulatif + CTA “Suivant”.
  function renderStep3() {
    stepBox.innerHTML = "";

    const row = (label, a, b, strong = false) =>
      el("tr", {},
        el("td", { style: strong ? "font-weight:700" : "" }, label),
        el("td", { class: "eog-center", style: strong ? "font-weight:700" : "" }, String(a)),
        el("td", { class: "eog-center", style: strong ? "font-weight:700" : "" }, String(b)),
      );

    const colList = (title, list) => {
      const box = el("div", {},
        el("div", { class: "eog-label", style: "margin-bottom:6px" }, title),
        el("div", { class: "eog-muted", style: "font-size:.92rem" }, list.length ? "" : "Aucune annonce")
      );
      if (list.length) {
        const ul = el("ul", { class: "bullet" });
        list.forEach(d => {
          const name = d?.label ?? d?.name ?? d?.rank ?? "Annonce";
          const val  = d?.gain ?? d?.points ?? d?.value ?? 0;
          ul.append(el("li", {}, `${name} — ${val}`));
        });
        box.append(ul);
      }
      return box;
    };

    const table = el("table", { class: "eog-table" },
      el("colgroup", {},
        el("col", { class: "c-name" }),
        el("col", { class: "c-pts" }),
        el("col", { class: "c-pts" }),
      ),
      el("thead", {},
        el("tr", {},
          el("th", {}, "Catégorie"),
          el("th", { class: "eog-right" }, "Joueur"),
          el("th", { class: "eog-right" }, "Ordinateur")
        )
      )
    );
    const tb = el("tbody");
    table.append(tb);

    tb.append(
      row("Annonces (partie)", p1DeclTotal, p2DeclTotal),
      row("10 & As (partie)", tenAceParty.p1, tenAceParty.p2),
      row("Total final", finals.p1, finals.p2, true)
    );

    const lists = el("div", { class: "eog-detail" },
      el("div", { class: "eog-muted", style: "margin-bottom:6px" }, "Détail des annonces (toute la partie)"),
      el("div", { class: "cols-2", style: "gap:12px" },
        colList("Joueur", window.p1Decls || []),
        colList("Ordinateur", window.p2Decls || [])
      )
    );

    const cta = el("div", { class: "eog-cta" },
      el("button", { class: "btn-primary", onclick: onNext }, "Suivant")
    );

    stepBox.append(table, lists, cta);

    async function onNext() {
      closeModal();

      const two = n => String(n).padStart(2, "0");
      const now = new Date();
      const date  = `${two(now.getDate())}/${two(now.getMonth() + 1)}/${now.getFullYear()}`;
      const heure = `${two(now.getHours())}:${two(now.getMinutes())}:${two(now.getSeconds())}`;
      const listToStr = arr =>
        (Array.isArray(arr) && arr.length)
          ? arr.map(d => `${d?.label ?? d?.name ?? d?.rank ?? "Annonce"}=${d?.gain ?? d?.points ?? d?.value ?? 0}`).join(", ")
          : "";

      const finals      = window.finals || { p1: 0, p2: 0 };
      const gap         = (typeof window.gap === "number") ? window.gap : Math.abs(finals.p1 - finals.p2);
      const tenAce      = window.tenAce || { acesP: 0, tensP: 0, acesC: 0, tensC: 0, p1: 0, p2: 0 };
      const p1DeclTotal = window.p1DeclTotal || 0;
      const p2DeclTotal = window.p2DeclTotal || 0;
      const p1Decls     = window.p1Decls || [];
      const p2Decls     = window.p2Decls || [];

      const payload = {
        date, heure,
        difficulte: S.difficulty,
        vainqueur: (finals.p1 === finals.p2) ? "Égalité" : (finals.p1 > finals.p2 ? "Joueur" : "Ordinateur"),
        ecart: gap,
        score_joueur: finals.p1,
        score_ordi:   finals.p2,
        annonces_joueur: p1DeclTotal,
        annonces_ordi:   p2DeclTotal,
        nb_as_joueur:       tenAce.acesP,
        nb_dix_joueur:      tenAce.tensP,
        points_10as_joueur: (tenAce.p1 || 0) * 10,
        nb_as_ordi:         tenAce.acesC,
        nb_dix_ordi:        tenAce.tensC,
        points_10as_ordi:   (tenAce.p2 || 0) * 10,
        liste_annonces_joueur: listToStr(p1Decls),
        liste_annonces_ordi:   listToStr(p2Decls),
        userName: (window.userName || "").trim() || "Invité"
      };

      try {
        const api = await window.getPywebviewApi();
        if (api?.save_row) {
          await api.save_row(JSON.stringify(payload));
          window.notifyDataUpdated && window.notifyDataUpdated();
        }
      } catch (err) {
        console.error("Erreur save_row:", err);
      }

      if (typeof setActive === "function") {
        setActive("home");
      } else {
        const home = document.getElementById("screen-home");
        document.querySelectorAll(".screen").forEach(s => s.classList.remove("screen--active"));
        if (home) home.classList.add("screen--active");
      }
      window.refreshHomeDashboard && window.refreshHomeDashboard();
      BREZIN_AUDIO.endGame();

      if ("S" in window) window.S = null;
      try { document.dispatchEvent(new CustomEvent("endOfGameNext", { detail: { payload } })); } catch {}

      return payload;
    }
  }

  // ===== 4) Navigation entre écrans. =====
  let step = 0;
  function next() {
    step = Math.min(step + 1, 3);
    if (step === 1) renderStep1();
    else if (step === 2) {
      renderStep2();
      hint.style.opacity = "0";
      setTimeout(() => { hint.style.display = "none"; }, 200);
    } else if (step === 3) {
      setTimeout(renderStep3, 650);
    }
  }

  renderStep0();

  const modalContent = root.closest(".modal") || root;
  modalContent.addEventListener("click", (e) => {
    if (e.target.closest(".btn-primary")) return;
    next();
  }, { passive: true });
}