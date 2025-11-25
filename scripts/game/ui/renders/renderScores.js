// ======================================================
// ============  Rendu des scores et du talon  ============
// ======================================================
// Rôle.
// ----
// Mettre à jour toutes les zones affichant les scores du joueur, de l’ordinateur,
// et le nombre de cartes restantes dans le talon (pile).
//
// Étapes.
// -------
// 1) Met à jour les éléments principaux (#score-player / #score-computer / #stack-count).
// 2) Met également à jour les éléments “compacts” utilisés pour les petits écrans.
//
function renderScores() {
  setText($("#stack-count"), S.stack?.length ?? 0);
  setText($("#score-player"), S.score?.player1 ?? 0);
  setText($("#score-computer"), S.score?.player2 ?? 0);

  setText($("#score-compact-player"), S.score?.player1 ?? 0);
  setText($("#score-compact-computer"), S.score?.player2 ?? 0);
  setText($("#score-compact-stack"), S.stack?.length ?? 0);
}
