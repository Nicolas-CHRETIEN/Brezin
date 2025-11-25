// ======================================================
// ====================  Distribution  ===================
// ======================================================
// Rôle.
// ----
// Distribuer les cartes en début de manche : mélanger le paquet, fixer l’atout,
// calculer les scores dépendants de l’atout, donner les mains, préparer le talon,
// trier la main du joueur et gérer le cas spécial du 7 d’atout.
//
// Étapes.
// -------
// 1) Récupérer le paquet courant depuis `S.stack`.
// 2) Mélanger le paquet via `shuffleDeck`.
// 3) Déterminer la carte d’atout (19e carte).
// 4) Recalculer le score de chaque carte selon l’atout.
// 5) Distribuer 9 cartes au joueur, 9 à l’IA, définir `S.trump`, puis le talon.
// 6) Trier la main du joueur.
// 7) Si l’atout est un 7, déclarer l’annonce correspondante (+10).
// 8) Passer à l’étape suivante (tirage d’abord par le premier joueur) et rendre l’interface.
//

function listenerDeal() {
  // 1) Paquet.
  let deck = S.stack;
  playSound("deal.wav");

  // 2) Mélange.
  shuffleDeck(deck);

  // 3) Atout = 19e carte (index 18).
  const trumpCard = deck[18];
  window.returnedTrumpCard = trumpCard;

  // 4) Scorer selon l’atout.
  deck = deck.map(c => scoreCard(c, trumpCard));

  // 5) Distribution 9 / 9, puis atout (index 18), puis talon à partir de 19.
  S.handPlayer   = deck.slice(0, 9);   // 0..8.
  S.handComputer = deck.slice(9, 18);  // 9..17.
  S.trump        = trumpCard;          // Carte d’atout complète.
  S.stack        = deck.slice(19);     // 19..fin.

// S.stack        = [deck[0]];
// S.score.player2 = 1000;


  // 6) Trier la main du joueur.
  playerSortCards();

  // 7) Bonus si l’atout est un 7.
  if (getRankNum(trumpCard) === 1) {
    (S.playFirst === "player") ? S.score.player1 += 10 : S.score.player2 += 10;
  }
  
  BDD();

  // 8) Étape suivante et rendu.
  (S.playFirst === "player") ? S.stage = "draw" : listenerComputerPlayFirst();
  renderGame();
}