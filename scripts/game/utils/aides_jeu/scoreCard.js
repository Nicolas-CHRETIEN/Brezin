// ======================================================
// ============  Attribution du score à une carte  ============
// ======================================================
// Rôle.
// ----
// Calcule et assigne un score numérique à une carte en fonction :
// - de sa valeur hiérarchique (rang),
// - et d’un bonus d’atout (+10 si la carte est de la couleur d’atout).
//
// Étapes.
// -------
// 1) Initialise le score à 0.
// 2) Si la carte est de la couleur d’atout → ajoute +10.
// 3) Ajoute la valeur correspondant à son rang via getRankNum().
// 4) Affecte le score à card.score et renvoie la carte enrichie.

function scoreCard(card, trumpCard) {
  let score = 0;

  if (card.couleur === trumpCard.couleur) score += 10;
  score += getRankNum(card);

  card.score = score;
  return card;
}
