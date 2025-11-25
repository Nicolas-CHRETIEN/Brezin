// ======================================================
// ==============  Déclarer une annonce (joueur)  ==============
// ======================================================
// Rôle.
// ----
// Appliquer l’annonce choisie par le joueur, recalculer les annonces encore
// possibles et avancer l’étape du jeu en conséquence.
//
// Étapes.
// -------
// 1) Récupérer l’annonce sélectionnée.
// 2) Appliquer l’annonce côté joueur.
// 3) Recalculer les annonces restantes pour le joueur.
// 4) Si l’annonce était “sept d’atout” et qu’il en reste d’autres, rester en “declare”, sinon passer en “draw”.
// 5) Rafraîchir l’interface.
//

function listenerDeclare(index) {
  // 1) Annonce sélectionnée.
  const decl = S.declarationsAvailablePlayer[index];

  // 2) Application de l’annonce côté joueur.
  playerDeclare(decl);

  // 3) Recalcul des annonces restantes.
  const suitTrump = S.trump.couleur;
  const more = possibleDeclarations(S.handPlayer);
  S.declarationsAvailablePlayer = more;

  // 4) Gestion du cas “sept d’atout”.
  if (decl.rank === "sept d'atout" && Array.isArray(more) && more.length > 0) {
    S.stage = 'declare';
  } else {
    S.stage = 'draw';
  }

  // 5) Rafraîchissement.
  renderGame();
}
