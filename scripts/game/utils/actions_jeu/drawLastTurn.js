// ======================================================
// ============  Distribution du dernier tour  ============
// ======================================================
// Rôle.
// ----
// Donne la dernière carte de la pioche et l’atout au bon joueur,
// réinitialise les déclarations, trie la main du joueur, puis
// remplace l’atout par une icône de couleur pour la phase suivante.
//
// Étapes.
// -------
// 1) Selon S.playFirst → donne stack[0] et l’atout à l’adversaire.
// 2) Vide la pioche (S.stack = []).
// 3) Retire les marquages "declared" des deux mains et trie la main joueur.
// 4) Remplace S.trump par un objet "icône de couleur" (renderAsSuitIcon).
// 5) Passe le stage en "no-draw".

function drawLastTurn() {
  const trumpSuitFR  = S.trump.couleur;                 // "coeur|carreau|pique|trèfle"
  const trumpImgPath = `images/${trumpSuitFR}.svg`;     // ex: images/coeur.svg

  // 1) Donne la dernière carte + bascule l’atout
  if (S.playFirst === "player") {
    if (S.stack[0]) S.handPlayer.push(S.stack[0]);
    S.handComputer.push(S.trump);
  } else {
    if (S.stack[0]) S.handComputer.push(S.stack[0]);
    S.handPlayer.push(S.trump);
  }

  // 2) Vider la pioche
  S.stack = [];

  // 3) Nettoyage des déclarations et tri final
  S.handPlayer   = undeclareCards(S.handPlayer);
  S.handComputer = undeclareCards(S.handComputer);
  playerSortCardsEndGame();

  // 4) Substituer l’atout par une carte "icône de couleur"
  S.trump = {
    name: `trump_icon_${trumpSuitFR}`,
    couleur: trumpSuitFR,
    svg: trumpImgPath,
    renderAsSuitIcon: true
  };

  // 5) Fin de la phase de pioche
  S.stage = "no-draw";
}