// ======================================================
// ======  IA : jouer en second (fin de partie)  =======
// ======================================================
// Rôle.
// ----
// Choisir la carte que l’IA doit jouer en second pendant la phase de fin,
// en privilégiant une prise au plus juste quand c’est possible, sinon en
// jouant à perdre ou en coupant à l’atout si nécessaire.
//
// Étapes.
// -------
// 1) Trier la main de l’IA par score croissant.
// 2) Préparer les ensembles utiles : peut battre, peut battre avec 10, peut battre avec As, perd, atouts.
// 3) Appliquer la règle de décision par priorités et retourner la carte.
//
// Remarque.
// ---------
// On conserve la logique existante telle quelle, sans modifications inutiles.
//

function computerPlaySecondEndGame(cardPlayer) {

  // 1) Tri de la main du plus faible au plus fort.
  const trumpSuit = S.trump.couleur;
  S.handComputer = arraySort(S.handComputer, "score", 1);

  // 2) Ensembles de cartes selon la situation.
  const cardsToWin = S.handComputer.filter(
    c => c.couleur === cardPlayer.couleur && c.score > cardPlayer.score
  );
  const tenCardsToWin = S.handComputer.filter(
    c => c.couleur === cardPlayer.couleur && c.score > cardPlayer.score && getRankNum(c) === 7
  );
  const aceCardsToWin = S.handComputer.filter(
    c => c.couleur === cardPlayer.couleur && c.score > cardPlayer.score && getRankNum(c) === 8
  );
  const cardsToLose = S.handComputer.filter(
    c => c.couleur === cardPlayer.couleur && c.score <= cardPlayer.score
  );
  const trumpCardsInHand = S.handComputer.filter(c => c.couleur === trumpSuit);

  // 3) Règle de décision.
  if (cardsToWin.length > 0 && cardPlayer.couleur === trumpSuit) {
    // Le joueur a joué atout → je réponds atout plus fort (le plus faible possible).
    return cardsToWin[0];
  } else if (tenCardsToWin.length > 0) {
    // J’ai un 10 capable de battre sa carte.
    return tenCardsToWin[0];
  } else if (aceCardsToWin.length > 0) {
    // J’ai un As capable de battre sa carte.
    return aceCardsToWin[0];
  } else if (cardsToWin.length > 0 && cardPlayer.couleur !== trumpSuit) {
    // Je peux battre dans la même couleur (hors atout).
    return cardsToWin[0];
  } else if (cardsToWin.length === 0 && cardsToLose.length > 0) {
    // Je ne peux pas battre mais j’ai la couleur → je perds avec la plus faible possible.
    return cardsToLose[0];
  } else if (cardsToWin.length === 0 && cardsToLose.length === 0 && trumpCardsInHand.length > 0) {
    // Je n’ai pas la couleur mais j’ai de l’atout → je coupe avec le plus faible atout.
    return trumpCardsInHand[0];
  } else if (cardsToWin.length === 0 && cardsToLose.length === 0 && trumpCardsInHand.length === 0) {
    // Je n’ai rien qui matche → je jette une carte.
    return S.handComputer[S.handComputer.length - 1];
  } else {
    // Cas de repli.
    console.warn("⚠️ Erreur logique dans computerPlaySecondEndGame.");
    return S.handComputer[0];
  }
}