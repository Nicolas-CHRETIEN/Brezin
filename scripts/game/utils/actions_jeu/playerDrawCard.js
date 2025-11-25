// ======================================================
// ============  Pioche de carte par le joueur  ============
// ======================================================
// Rôle.
// ----
// Fait piocher une carte au joueur depuis la pile principale (S.stack),
// l’ajoute à sa main, puis marque cette carte pour déclencher
// une animation visuelle à son apparition.
//
// Étapes.
// -------
// 1) Vérifie que la pile contient au moins une carte.
// 2) Retire la première carte du tas et l’ajoute à S.handPlayer.
// 3) Stocke son nom dans S.justDrawn pour l’animation d’entrée.

function playerDrawCard() {
  if (!S.stack || !S.stack.length) {
    console.warn("Pile vide – playerDrawCard annulé.");
    return;
  }

  const card = S.stack.shift();
  S.handPlayer.push(card);

  // Marquage pour animation d’apparition
  S.justDrawn = card.name;
  
  playSound("draw.mp3");
}
