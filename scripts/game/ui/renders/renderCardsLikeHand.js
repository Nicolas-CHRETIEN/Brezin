// =========================================================
// ====== Rendu des cartes du joueur (main ou annonces).  ======
// =========================================================

// Rôle.
// Afficher une liste de cartes dans un conteneur, en gérant la jouabilité selon le mode
// ('lead' quand le joueur ouvre, 'second' quand il répond) et l’état de fin de partie.
//
// Étapes.
// 1) Nettoyer le conteneur et déterminer si l’on est en fin de pioche.
// 2) Pour chaque carte : calculer la jouabilité, appliquer les classes, gérer l’accessibilité.
// 3) Brancher les handlers (click/Enter/Espace) selon le mode et rendre la carte.
//

function renderCardsLikeHand(container, cards, mode) {
  if (!container) return;
  clear(container);

  const isEndgame = (S.stack?.length ?? 0) === 0;

  cards.forEach(card => {
    const box = el("div", { class: "cards-hand-player_card-box" });

    // Injouable marqué par la logique amont (flag booléen libre). 
    const unplayableFlag = Boolean(card.unPlayable);

    // Jouabilité de base selon le mode. 
    let isPlayable =
      mode === "lead"   ? true :
      mode === "second" ? !unplayableFlag :
      false;

    // En fin de partie, une carte marquée injouable reste non jouable. 
    const endgameUnplayable = isEndgame && unplayableFlag;
    if (endgameUnplayable) isPlayable = false;

    // Classes visuelles. 
    const classes = ["cards-hand-player_card", "card"];
    if (!isPlayable) classes.push("is-disabled");
    if (endgameUnplayable) classes.push("is-endgame-unplayable");

    // Nœud visuel de la carte. 
    const img = cardNode(card, classes.join(" "));
    img.tabIndex = isPlayable ? 0 : -1;
    img.dataset.number = card.number ?? card.name ?? "";
    img.setAttribute("aria-disabled", String(!isPlayable));

    // Animation “nouvelle carte piochée”. 
    if (card.name === S.justDrawn) {
      img.classList.add("card--new");
      S.justDrawn = null;
      img.addEventListener("animationend", () => img.classList.remove("card--new"), { once: true });
    }

    // Handlers selon le mode. 
    const playFirst  = () => { listenerPlayerPlayFirst(card.number ?? card.name);  renderGame(); };
    const playSecond = () => { listenerPlayerPlaySecond(card.number ?? card.name); renderGame(); };

    if (isPlayable) {
      if (mode === "lead")   img.addEventListener("click", playFirst);
      if (mode === "second") img.addEventListener("click", playSecond);

      img.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          mode === "lead" ? playFirst() : playSecond();
        }
      });
    }

    box.append(img);
    container.append(box);
  });
}