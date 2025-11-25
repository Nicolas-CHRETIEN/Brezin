// ======================================================
// ============  Pioche de carte par l’ordinateur  ============
// ======================================================
// Rôle.
// ----
// Fait piocher une carte à l’ordinateur depuis la pile principale (S.stack)
// et l’ajoute à sa main (S.handComputer).
//
// Étapes.
// -------
// 1) Vérifie que la pile n’est pas vide.
// 2) Retire la première carte du tas (shift).
// 3) Ajoute cette carte à la main de l’ordinateur.

function computerDrawCard() {
  if (!S.stack || !S.stack.length) {
    console.warn("Pile vide – computerDrawCard annulé.");
    return;
  }
  const card = S.stack.shift();
  S.handComputer.push(card);
  playSound("draw.mp3");
}
