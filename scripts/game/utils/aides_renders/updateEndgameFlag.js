// ======================================================
// ============  Mise à jour du flag de fin de partie  ============
// ======================================================
// Rôle.
// ----
// Ajoute ou retire dynamiquement un indicateur visuel de “fin de partie”
// sur le conteneur principal du jeu (ex: .game) selon l’état de la pioche.
//
// Étapes.
// -------
// 1) Sélectionne le conteneur principal (.game) ou fallback sur <body>.
// 2) Vérifie si la pile (S.stack) est vide.
// 3) Active/désactive la classe .is-endgame selon le résultat.

function updateEndgameFlag() {
  const root = document.querySelector('.game') || document.body;
  const stackEmpty = (S.stack?.length ?? 0) === 0;

  // Combine avec un éventuel stage si besoin :
  // const endgame = stackEmpty || S.stage === 'endgame';
  const endgame = stackEmpty;

  root.classList.toggle('is-endgame', endgame);
}