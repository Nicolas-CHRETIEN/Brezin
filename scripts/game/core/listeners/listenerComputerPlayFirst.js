// ======================================================
// =======  Ordi commence le pli suivant (listener)  =======
// ======================================================
// Rôle.
// ----
// Déterminer et jouer la première carte de l’ordinateur selon l’état du talon,
// gérer la pioche éventuelle, mettre à jour l’état de la main/carte jouée,
// puis rafraîchir l’interface.
//
// Étapes.
// -------
// 1) Cas “dernier tour de pioche” (talon = 1) : tirer la carte, choisir et jouer via fin de partie, rendre jouables les cartes du joueur, passer en stage 'play'.
// 2) Cas “pioche vide” (talon = 0) : choisir et jouer via fin de partie, rendre jouables les cartes du joueur, passer en stage 'play'.
// 3) Cas général (talon ≥ 2) : choisir via logique standard, piocher d’abord, retirer la carte jouée de la main, passer en stage 'draw'.
// 4) Rendre l’interface.
//

function listenerComputerPlayFirst() {
  const n = S.stack?.length || 0;

  // 1) Dernier tour de pioche (talon = 1).
  if (n === 1) {
    drawLastTurn();
    const cCard = computerPlayFirstEndGame();

    const idx = S.handComputer.findIndex(c => c === cCard || c.name === cCard?.name);
    if (idx !== -1) S.handComputer.splice(idx, 1);
    S.computerCardPlayed = cCard;

    playableCards();
    S.stage = 'play';

  // 2) Pioche vide (endgame).
  } else if (n === 0) {
    const cCard = computerPlayFirstEndGame();

    const idx = S.handComputer.findIndex(c => c === cCard || c.name === cCard?.name);
    if (idx !== -1) S.handComputer.splice(idx, 1);
    S.computerCardPlayed = cCard;

    playableCards();
    S.stage = 'play';

  // 3) Talon avec au moins 2 cartes.
  } else {
    const cCard = computerPlayFirst();

    // L’ordi pioche d’abord, puis on retire la carte jouée de la main.
    if (S.stack.length) S.handComputer.push(S.stack.shift());

    const idx = S.handComputer.findIndex(c => c === cCard || c.name === cCard?.name);
    if (idx !== -1) S.handComputer.splice(idx, 1);

    S.computerCardPlayed = cCard;
    S.stage = 'draw';
  }

  // 4) Rafraîchissement de l’interface.
  renderGame();
}
