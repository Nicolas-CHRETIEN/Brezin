// ======================================================
// ============  Jeu d’une carte par l’ordinateur  ============
// ======================================================
// Rôle.
// ----
// Retire une carte spécifique de la main de l’ordinateur et la place
// dans S.computerCardPlayed pour traitement par le moteur de jeu.
//
// Étapes.
// -------
// 1) Cherche la carte dans la main (par référence, name ou number).
// 2) Si trouvée → la retire du tableau et la stocke dans S.computerCardPlayed.
// 3) Sinon → log d’erreur et annulation sans modifier l’état.

function computerPlayCard(card) {
  const index = S.handComputer.findIndex(
    c => c === card || c.name === card || c.number === card
  );

  if (index === -1) {
    console.error("Erreur : carte introuvable dans la main de l'ordinateur (computerPlayCard).");
    return;
  }

  const [played] = S.handComputer.splice(index, 1);
  S.computerCardPlayed = played;
  
  playSound("play.wav");
}