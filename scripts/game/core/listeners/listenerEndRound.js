// ======================================================
// ============  Fin de manche : comptage des 10 et As  ============
// ======================================================
// Rôle.
// ----
// Calculer les points de fin de manche en ajoutant 10 points pour chaque
// 10 ou As contenus dans les plis de chaque joueur, puis afficher les résultats.
//
// Étapes.
// -------
// 1) Compter les 10 et As dans les plis du joueur et de l’IA.
// 2) Vérifier qu’on n’est pas déjà en phase de résultat (éviter un double comptage).
// 3) Ajouter les points correspondants aux scores cumulés.
// 4) Passer en phase “showResultGame” et actualiser l’affichage.
//

function listenerEndRound() {
  // 1) Comptage des 10 et As dans les plis.
  const tensOrAcesP = (S.trickPlayer ?? []).filter(c => c.rank === 7 || c.rank === 8).length;
  const tensOrAcesC = (S.trickComputer ?? []).filter(c => c.rank === 7 || c.rank === 8).length;

  // 2) Évite un double comptage si déjà dans la phase de résultat.
  if (S.stage === 'showResultGame') return S;

  // 3) Mise à jour du score.
  S.score.player1 += tensOrAcesP * 10;
  S.score.player2 += tensOrAcesC * 10;

  // 4) Transition vers la phase de résultat.
  S.stage = 'showResultGame';
  renderGame();
}
