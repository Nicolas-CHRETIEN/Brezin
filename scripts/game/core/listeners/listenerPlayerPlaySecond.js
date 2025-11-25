// ======================================================
// ===========  Joueur joue en second (listener)  ===========
// ======================================================
// Rôle.
// ----
// Gérer le coup où le joueur répond : libérer les contraintes éventuelles de fin,
// récupérer sa carte, l’appliquer, résoudre le pli, puis afficher le résultat.
//
// Étapes.
// -------
// 1) En fin de partie, remettre à zéro le flag `unPlayable` des cartes du joueur.
// 2) Récupérer la carte choisie par le joueur.
// 3) Retirer la carte de la main et l’enregistrer comme jouée.
// 4) Résoudre le pli avec `playTrickGame`.
// 5) Basculer sur l’affichage du résultat du pli.
//

function listenerPlayerPlaySecond(cardId) {
  // 1) Libération des contraintes éventuelles.
  if (Array.isArray(S.handPlayer) && S.handPlayer.length) {
    S.handPlayer = S.handPlayer.map(c => (c.unPlayable = null, c));
  }

  // 2) Carte choisie par le joueur.
  const cardPlayer = byNumberOrName(S.handPlayer, cardId);

  // 3) Appliquer le play du joueur.
  playerPlayCard(cardPlayer);

  // 4) Résoudre le pli.
  playTrickGame({ possibleDeclarations });

  // 5) Afficher le résultat du pli.
  S.stage = 'trickGameResult';
  renderGame();
}