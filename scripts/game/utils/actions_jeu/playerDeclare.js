// ======================================================
// ============  Appliquer une déclaration Joueur  ============
// ======================================================
// Rôle.
// ----
// Applique UNE déclaration du joueur sans changer la logique métier :
// - Cas général (≠ "7 d'atout") : ajoute la déclaration à la/aux carte(s) visées.
// - Cas "7 d'atout" : échange le 7 d'atout avec l'atout visible et marque l'ancien atout déclaré.
// - Met à jour l'historique et recalcule les annonces possibles du joueur.
//
// Étapes.
// -------
// 1) Si ≠ "7 d'atout" → findWithIdAndAddDeclaration() sur la main joueur.
// 2) Sinon → échange 7 d'atout ↔ S.trump et marque la déclaration sur l'ancien atout.
// 3) Historique : push dans S.score.declarationsListP1 (sans scorer ici).
// 4) Recalcule S.declarationsAvailablePlayer.

function playerDeclare(declaration) {
  const trumpSuit = S.trump.couleur;
  

  if (declaration.rank !== "sept d'atout") {
    S.handPlayer = findWithIdAndAddDeclaration(S.handPlayer, declaration);
  } else {
    const sevenId = declaration.cards;
    const idx = S.handPlayer.findIndex(c => c.name === sevenId);
    if (idx !== -1) {
      const newDecl = { ...declaration, cards: [S.trump.name] };
      S.trump.declared = [newDecl];

      const oldTrump = S.trump;
      S.trump = S.handPlayer[idx];
      S.handPlayer.splice(idx, 1);
      S.handPlayer.push(oldTrump);
    }
  }

  // Pas d'incrément de score ici (géré après l'animation)
  // S.score.player1 += declaration.gain;
  if (!Array.isArray(S.score.declarationsListP1)) S.score.declarationsListP1 = [];
  S.score.declarationsListP1.push(declaration);

  // Recalcul des possibilités du joueur (peut changer après l'échange)
  S.declarationsAvailablePlayer = possibleDeclarations(S.handPlayer);
}