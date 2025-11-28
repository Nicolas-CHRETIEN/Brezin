// ======================================================
// =============  Modale de fin de manche  ==============
// ======================================================
// Rôle.
// ----
// Afficher un récapitulatif de la manche : annonces réalisées pour chaque camp,
// 10 & As capturés puis ajoutés au score, scores courants et points restants
// avant l’objectif (1000). Permet de passer à la manche suivante.
//
// Étapes.
// -------
// 1) Compter les 10 et As remportés dans les plis de la manche en cours.
// 2) Ajouter le bonus correspondant au score global de chaque camp.
// 3) Lister les annonces de la manche et calculer leurs totaux par camp.
// 4) Construire l’interface de récapitulatif et gérer le bouton “Suivant”.
// 5) Au clic, fermer la modale et lancer la préparation de la nouvelle manche.
//
function showEndOfRoundModal() {
  // Empêche l’ouverture doublon si une modale est déjà visible.
  if ($("#modal-root")?.classList.contains("modal-root--open")) return;

  // --- Helpers sûrs. ---
  const getArray = (v) => Array.isArray(v) ? v : [];
  const pilesP = getArray(S.trickPlayer);
  const pilesC = getArray(S.trickComputer);

  // Valeurs des points (10 et As).
  const isTen = (c) => getRankNum(c) === 7;
  const isAce = (c) => getRankNum(c) === 8;
  function countBy(arr, pred) {
    let n = 0;                    // Compteur initial.
    for (const x of arr) {        // Pour chaque élément du tableau.
      if (pred(x)) n++;           // Si la condition est vraie → on ajoute 1.
    }
    return n;                     // On renvoie le total.
  }

  // --- 1) Comptage 10 & As. ---
  const tensP = countBy(pilesP, isTen);
  const acesP = countBy(pilesP, isAce);
  const tensC = countBy(pilesC, isTen);
  const acesC = countBy(pilesC, isAce);

  // --- 2) Bonus de manche : (nb10 + nbAs) * 10. ---
  const bonusP = (tensP + acesP) * 10;
  const bonusC = (tensC + acesC) * 10;

  // Mise à jour du score avec le bonus 10/As.
  S.score = S.score || {};
  S.score.player1 = (S.score.player1 ?? 0) + bonusP;
  S.score.player2 = (S.score.player2 ?? 0) + bonusC;

  // --- 3) Annonces de la manche. ---
  const annP = getArray(S.score?.declarationsListP1);
  const annC = getArray(S.score?.declarationsListP2);
  const labelOf = (d) => (d?.name || d?.label || d?.rank || "Annonce");
  const gainOf  = (d) => Number(d?.gain ?? 0);
  const annTotalP = annP.reduce((s, d) => s + gainOf(d), 0);
  const annTotalC = annC.reduce((s, d) => s + gainOf(d), 0);

  // Scores et objectif.
  const target = 1000;
  const scoreP = S.score.player1;
  const scoreC = S.score.player2;
  const restP = Math.max(0, target - scoreP);
  const restC = Math.max(0, target - scoreC);

  // --- 4) UI. ---
  const row = (left, right, cls = "") =>
    el("div", { class: `eor-row ${cls}` },
      el("div", { class: "eor-left" }, left),
      el("div", { class: "eor-right" }, right)
    );

  const listDecl = (list) => list.length
    ? el("div", { class: "eor-decl-list" },
        ...list.map(d => row(labelOf(d), String(gainOf(d))))
      )
    : el("div", { class: "eor-decl-empty" }, "Aucune annonce.");

  const content = el("div", { class: "end-of-round" },
    el("section", { class: "eor-section" },
      el("h3", {}, "Annonces réalisées"),
      el("div", { class: "eor-two-col" },
        el("div", { class: "eor-col" },
          el("h4", {}, "Joueur"),
          listDecl(annP),
          row(el("strong", {}, "Total annonces"), el("strong", {}, String(annTotalP)), "eor-total")
        ),
        el("div", { class: "eor-col" },
          el("h4", {}, "Ordinateur"),
          listDecl(annC),
          row(el("strong", {}, "Total annonces"), el("strong", {}, String(annTotalC)), "eor-total")
        )
      )
    ),
    el("section", { class: "eor-section" },
      el("h3", {}, "Dix & As capturés (bonus ajouté au score)"),
      el("div", { class: "eor-two-col" },
        el("div", { class: "eor-col" },
          el("h4", {}, "Joueur"),
          row("Nombre de 10", String(tensP)),
          row("Nombre d'As", String(acesP)),
          row(el("strong", {}, "Bonus 10/As"), el("strong", {}, `+${bonusP}`), "eor-total")
        ),
        el("div", { class: "eor-col" },
          el("h4", {}, "Ordinateur"),
          row("Nombre de 10", String(tensC)),
          row("Nombre d'As", String(acesC)),
          row(el("strong", {}, "Bonus 10/As"), el("strong", {}, `+${bonusC}`), "eor-total")
        )
      )
    ),
    el("section", { class: "eor-section" },
      el("h3", {}, "Bilan de la manche"),
      el("div", { class: "eor-two-col" },
        el("div", { class: "eor-col eor-col-player" },
          row(el("strong", {}, "Score Joueur"), el("strong", {}, String(scoreP)), "eor-accent"),
          (restP !== restC)
            ? row("Points restants (→ 1000)", String(restP))
            : row("Les joueurs doivent se départager", "")
        ),
        el("div", { class: "eor-col eor-col-computer" },
          row(el("strong", {}, "Score Ordinateur"), el("strong", {}, String(scoreC)), "eor-accent"),
          (restP !== restC)
            ? row("Points restants (→ 1000)", String(restC))
            : row("", "")
        )
      )
    )
  );

  const onNext = () => {
    // Ferme la modale puis lance la nouvelle manche.
    try { closeModal?.(); } catch {}
    if (typeof listenerNewRound === "function") listenerNewRound();

    const reaction = AIGenerateDialogue();

    if (reaction) setAiEmotion(reaction[0], reaction[1]);
  };
  


  if (typeof showModal === "function") {
    showModal({
      title: "Fin de manche",
      content,
      actions: [{ label: "Suivant", id: "next" }],
      onAction: (id) => { if (id === "next") onNext(); }
    });
    applyAuroraTheme?.();
  }
}