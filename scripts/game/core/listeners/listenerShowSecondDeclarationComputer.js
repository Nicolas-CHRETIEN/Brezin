// ======================================================
// =====  Seconde déclaration IA (après 7 d’atout)  =====
// ======================================================
// Rôle.
// ----
// Permettre à l’IA d’effectuer une seconde déclaration immédiatement après
// un “sept d’atout”, puis marquer l’opération pour éviter tout doublon.
//
// Étapes.
// -------
// 1) Si une seconde déclaration a déjà été faite, sortir immédiatement.
// 2) Évaluer les annonces possibles et laisser l’IA déclarer si c’est pertinent.
// 3) Poser un marqueur `alreadyDeclared` pour empêcher un second passage.
// 4) Rafraîchir l’affichage.
//

function listenerShowSecondDeclarationComputer() {
  // 1) Anti double-refresh.
  if (S.score?.alreadyDeclared) return;

  // 2) Calcul des annonces possibles et déclaration IA.
  const possible = possibleDeclarations(S.handComputer, S.trump);
  if (Array.isArray(possible) && possible.length > 0) {
    // Doit remplir score.lastDeclaration, mettre à jour le score et marquer les cartes.
    computerChooseDeclaration();
  }

  // 3) Marqueur pour éviter un second passage.
  S.score = S.score || {};
  S.score.alreadyDeclared = true;

  // 4) Rafraîchissement.
  renderGame();
}