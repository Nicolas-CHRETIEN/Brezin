// ======================================================
// ======  Après un pli gagné par le joueur (listener)  ======
// ======================================================
// Rôle.
// ----
// Déterminer la prochaine étape après la victoire du joueur sur un pli,
// remettre à zéro les cartes affichées comme jouées, puis rafraîchir l’interface.
//
// Étapes.
// -------
// 1) Choisir la prochaine étape : 'play' si talon vide, 'declare' si annonces possibles, sinon 'draw'.
// 2) Nettoyer les références aux cartes jouées.
// 3) Rafraîchir l’affichage.
//

function listenerPlayerWonTrick() {
  // 1) Prochaine étape.
  if ((S.stack.length ?? 0) === 0) {
    S.stage = 'play';
  } else if ((S.declarationsAvailablePlayer.length || 0) > 0) {
    S.stage = 'declare';
  } else {
    S.stage = 'draw';
  }

  // 2) Nettoyage des cartes jouées.
  S.playerCardPlayed = null;
  S.computerCardPlayed = null;

  // 3) Rafraîchissement de l’interface.
  renderGame();
}
