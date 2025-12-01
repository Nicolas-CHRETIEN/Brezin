// ======================================================
// ==========   Modale annonces de l'ordinateur   =======
// ======================================================
//
// Rôle.
// -----
// Afficher une modale listant toutes les annonces que l’IA vient de faire,
// avec les cartes associées, puis appliquer leurs points au score de l’IA.
//
// Ce que fait la fonction.
// ------------------------
// 1) Vérifie qu’aucune autre modale n’est ouverte et qu’il y a bien des annonces.
// 2) Empêche les doubles affichages en mémorisant la dernière liste d’annonces.
// 3) Construit la modale : un bloc par annonce, avec ses cartes rendues en visuel.
// 4) Demande à l’IA de réagir via AIGenerateDialogue() (émotion + texte).
// 5) Au clic sur "OK" :
//    - ferme la modale,
//    - enfile chaque annonce dans ScoreAnimator (drip +1 par tick),
//    - appelle éventuellement un callback onOk,
//    - passe le jeu au stade "draw",
//    - lance le tour de l’ordinateur si c’est à lui de jouer,
//    - nettoie S.score.lastDeclaration pour les prochains dialogues.
// ------------------------------------------------------

/** Modale annonce ordinateur */
function showComputerDeclarationModal({ onOk } = {}) {
  // Si une modale est déjà ouverte → on ne fait rien
  if ($("#modal-root")?.classList.contains("modal-root--open")) return;

  const list = S.score?.lastDeclaration;
  if (!Array.isArray(list) || list.length === 0) return;

  // Anti-boucle : on mémorise la signature de la dernière série d’annonces
  const key = `lastDecl:${sig(list)}`;
  if (renderCache.get("shownDecl") === key) return;
  renderCache.set("shownDecl", key);

  // Indexer les cartes par name pour retrouver leurs visuels
  const allCards = [
    ...(S.handPlayer   ?? []),
    ...(S.handComputer ?? []),
    ...(S.trickPlayer  ?? []),
    ...(S.trickComputer?? []),
    ...(S.stack        ?? []),
    ...(S.trump ? [S.trump] : [])
  ];
  const byName = Object.fromEntries(allCards.map(c => [c?.name, c]));

  // UI : une section par annonce
  const blocks = list.map(d => {
    const cardsArr = Array.isArray(d.cards)
      ? d.cards
      : (d.cards ? [d.cards] : []);

    return el("div", { class: "decl-block" },
      el("div", { class: "decl-block_title" }, `${d.name} (+${d.gain})`),
      el("div", { class: "decl-cards" },
        ...cardsArr.map(cardName => {
          const card = byName[cardName] || { svg: "images/back.svg", name: cardName };
          return cardNode(card, "card card--md");
        })
      )
    );
  });

  // Réaction IA (émotion + texte) si les commentaires sont actifs
  const reaction = AIGenerateDialogue();
  if (reaction) setAiEmotion(reaction[0], reaction[1]);

  showModal({
    title: list.length > 1 ? "Annonces de l'ordinateur" : "Annonce de l'ordinateur",
    content: el("div", { class: "decl-modal" }, ...blocks),
    actions: [{ label: "OK", id: "ok" }],
    onAction: (id) => {
      if (id !== "ok") return;

      closeModal();

      // ➜ Enfile chaque annonce pour animation de score progressive
      for (const d of list) {
        ScoreAnimator.enqueue({
          who: "computer",
          amount: Number(d.gain) || 0,
          reason: d.name
        });
      }

      // Callback optionnel (si fourni)
      onOk?.();

      // Prochaine étape de jeu
      S.stage = "draw";

      // Si l’ordinateur doit jouer en premier
      listenerComputerPlayFirst();

      // Nettoyer lastDeclaration pour éviter que le prochain dialogue
      // considère encore ces annonces comme "fraîches".
      S.score.lastDeclaration = [];
    }
  });

  applyAuroraTheme();
}
