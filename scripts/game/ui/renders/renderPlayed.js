// ======================================================
// ============  Rendu des cartes jouées  ============
// ======================================================
// Rôle.
// ----
// Afficher la carte actuellement jouée par l’ordinateur et celle du joueur
// dans leurs emplacements respectifs (“played-computer” et “played-player”).
//
// Étapes.
// -------
// 1) Nettoyer les conteneurs.
// 2) Si une carte est présente (player/computer), la rendre via `cardNode()`.
//
function renderPlayed() {
  const pc = $("#played-computer");
  const pp = $("#played-player");

  if (pc) {
    clear(pc);
    if (S.computerCardPlayed) {
      pc.append(cardNode(S.computerCardPlayed, "cards-played_img card"));
    }
  }

  if (pp) {
    clear(pp);
    if (S.playerCardPlayed) {
      pp.append(cardNode(S.playerCardPlayed, "cards-played_img card"));
    }
  }
}