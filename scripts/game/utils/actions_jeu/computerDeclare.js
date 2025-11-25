// ======================================================
// ============  Appliquer une déclaration IA  ============
// ======================================================
// Rôle.
// ----
// Applique UNE déclaration de l'ordinateur sans modifier la logique existante :
// - Cas général (non "7 d'atout") : ajoute la déclaration à la/aux carte(s) concernée(s).
// - Cas "7 d'atout" : échange le 7 d'atout avec l'atout visible et marque l'ancien atout déclaré.
// - Met à jour l'historique des annonces et recalcule les annonces possibles.
//
// Étapes.
// -------
// 1) Si ≠ "7 d'atout" → findWithIdAndAddDeclaration() sur la main IA.
// 2) Sinon → échange 7 d'atout ↔ S.trump et marque la déclaration sur l'ancien atout.
// 3) Historique : push dans S.score.declarationsListP2 (sans scorer ici).
// 4) Recalcule S.declarationsAvailableComputer et maintient S.stage="declare".

/** Appliquer UNE déclaration IA (garde ton comportement existant) */
function computerDeclare(declaration) {
  const trumpSuit = S.trump.couleur;

  if (declaration.rank !== "sept d'atout") {
    S.handComputer = findWithIdAndAddDeclaration(S.handComputer, declaration);
  } else {
    // échange 7 d’atout ↔ carte d’atout visible
    const sevenId = declaration.cards; // string id
    const idx = S.handComputer.findIndex(c => c.name === sevenId);
    if (idx !== -1) {
      // marquer l’ancien atout comme "déclaré"
      const newDecl = { ...declaration, cards: [S.trump.name] };
      S.trump.declared = [newDecl];

      const oldTrump = S.trump;
      S.trump = S.handComputer[idx];
      S.handComputer.splice(idx, 1);
      S.handComputer.push(oldTrump);
    }
  }

  // Score & historique (pas d'incrément ici : géré après animation)
  // S.score.player2 += declaration.gain;
  if (!Array.isArray(S.score.declarationsListP2)) S.score.declarationsListP2 = [];
  S.score.declarationsListP2.push(declaration);

  // Recalcul des annonces disponibles et maintien du stage
  S.declarationsAvailableComputer = possibleDeclarations(S.handComputer, S.trump);
  S.stage = "declare";
}