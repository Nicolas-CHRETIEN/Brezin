// ======================================================
// ============  Détermination du mode de jeu joueur  ============
// ======================================================
// Rôle.
// ----
// Analyse l’état courant (S.stage, cartes jouées, priorité de jeu)
// pour définir le mode d’interaction du joueur :
// - "lead"     → le joueur commence le pli,
// - "second"   → il répond à la carte de l’ordinateur,
// - "disabled" → aucune action autorisée.
//
// Étapes.
// -------
// 1) Si le stage ≠ "play" → désactive tout.
// 2) Si aucune carte jouée → "lead" si c’est au joueur de commencer.
// 3) Si l’ordinateur a joué mais pas le joueur → "second".
// 4) Si le joueur a déjà joué → "disabled".

function decidePlayerMode() {
  if (S.stage !== "play") return "disabled";

  const playerHasPlayed   = !!S.playerCardPlayed;
  const computerHasPlayed = !!S.computerCardPlayed;

  if (!playerHasPlayed && !computerHasPlayed)
    return (S.playFirst === "player") ? "lead" : "disabled";

  if (!playerHasPlayed && computerHasPlayed)
    return "second";

  return "disabled";
}