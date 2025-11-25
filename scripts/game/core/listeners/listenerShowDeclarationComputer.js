// ======================================================
// ======  Afficher la déclaration IA puis enchaîner  ======
// ======================================================
// Rôle.
// ----
// Laisser l’IA déclarer si elle le peut, puis jouer sa première carte
// selon l’état du talon (dernier tour, fin de pioche, ou pioche normale).
// Met à jour la main/carte jouée, recalcule les annonces restantes,
// et rafraîchit l’interface.
//
// Étapes.
// -------
// 1) Calculer les déclarations possibles de l’IA et, si disponible, la laisser déclarer.
// 2) Enchaîner le jeu côté IA selon la taille du talon : 1 carte, 0 carte, ou ≥ 2 cartes.
// 3) Recalculer les annonces restantes de l’IA et rafraîchir l’interface.
//

function listenerShowDeclarationComputer() {
  // 1) Déclaration IA si possible.
  const possible = possibleDeclarations(S.handComputer, S.trump);
  if (Array.isArray(possible) && possible.length > 0) {
    // Doit remplir score.lastDeclaration, MAJ score, marquer les cartes, etc.
    computerChooseDeclaration();
  }

  // 2) Jeu IA selon état du talon.
  const n = Array.isArray(S.stack) ? S.stack.length : 0;

  if (n === 1) {
    // Dernier tour de pioche.
    drawLastTurn();
    const cCard = computerPlayFirstEndGame();

    const idx = S.handComputer.findIndex(c => c === cCard || c.name === cCard?.name);
    if (idx !== -1) S.handComputer.splice(idx, 1);
    S.computerCardPlayed = cCard;

    playableCards();
    S.stage = 'play';

  } else if (n === 0) {
    // Pioche vide (fin de partie).
    const cCard = computerPlayFirstEndGame();

    const idx = S.handComputer.findIndex(c => c === cCard || c.name === cCard?.name);
    if (idx !== -1) S.handComputer.splice(idx, 1);
    S.computerCardPlayed = cCard;

    playableCards();
    S.stage = 'play';

  } else {
    // Talon avec au moins 2 cartes.
    if (S.stack.length) S.handComputer.push(S.stack.shift());

    const cCard = computerPlayFirst();

    const idx = S.handComputer.findIndex(c => c === cCard || c.name === cCard?.name);
    if (idx !== -1) S.handComputer.splice(idx, 1);
    S.computerCardPlayed = cCard;

    S.playerCardPlayed = null; // Aligné avec le contrôleur d’origine.
    S.stage = 'draw';
  }

  // 3) Recalcul des annonces restantes pour l’IA (utile si 7 d’atout).
  S.declarationsAvailableComputer = possibleDeclarations(S.handComputer, S.trump);

  renderGame();
}