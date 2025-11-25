// ======================================================
// ============  Détermination des cartes jouables  ============
// ======================================================
// Rôle.
// ----
// Calcule quelles cartes le joueur peut légalement jouer
// en fonction de la carte jouée par l’ordinateur et de la couleur d’atout.
//
// Étapes.
// -------
// 1) Si l’ordinateur n’a pas encore joué → rien à faire.
// 2) Récupère les cartes du joueur selon : même couleur, plus fortes, atouts.
// 3) Applique la règle :
//    - Si l’ordi a joué atout → essayer mieux, sinon même couleur, sinon tout.
//    - Sinon → suivre la couleur, sinon couper à l’atout, sinon tout.
// 4) Met à jour chaque carte du joueur avec la propriété `unPlayable`
//    (null = jouable, 1 = non jouable).

function playableCards() {
  const comp = S.computerCardPlayed;
  if (!comp) return S; // ordi pas encore joué

  const suitComp  = comp.couleur;
  const suitTrump = S.trump.couleur;

  const sameSuit        = S.handPlayer.filter(c => c.couleur === suitComp);
  const betterSameSuit  = S.handPlayer.filter(c => c.couleur === suitComp && c.score > comp.score);
  const trumps          = S.handPlayer.filter(c => c.couleur === suitTrump);

  let playable = [];

  if (suitComp === suitTrump) {
    // L’ordi a joué atout
    if (betterSameSuit.length)      playable = betterSameSuit;
    else if (sameSuit.length)       playable = sameSuit;
    else                            playable = S.handPlayer;
  } else {
    // L’ordi n’a pas joué atout
    if (sameSuit.length)            playable = sameSuit;
    else if (trumps.length)         playable = trumps;
    else                            playable = S.handPlayer;
  }

  // Marquage des cartes jouables/non-jouables
  S.handPlayer = S.handPlayer.map(c => {
    c.unPlayable = playable.includes(c) ? null : 1;
    return c;
  });
}
