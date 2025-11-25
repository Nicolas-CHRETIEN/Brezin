// ======================================================
// ============  Résolution d’un pli (moteur)  ============
// ======================================================
// Rôle.
// ----
// Rejoue la logique PHP pour déterminer le gagnant du pli,
// empile les 2 cartes chez le gagnant, met à jour S.playFirst,
// et recalcule les annonces possibles pour le gagnant.
//
// Étapes.
// -------
// 1) Récupère atout, cartes jouées et infos de couleur/score.
// 2) Applique strictement les conditions PHP (priorités && / ||).
// 3) Empile les cartes du pli chez le gagnant et bascule S.playFirst.
// 4) Recalcule les annonces disponibles du gagnant via DeclarationsModule.

function playTrickGame(DeclarationsModule) {
  const trumpSuit = S.trump.couleur; // supporte {card} ou {suit}
  const pCard = S.playerCardPlayed;
  const cCard = S.computerCardPlayed;

  // Sécurité minimale (gardée telle quelle)
  if (!pCard || !cCard) return;

  const pScore = pCard.score ?? 0;
  const cScore = cCard.score ?? 0;

  const pSuit = pCard.couleur;
  const cSuit = cCard.couleur;

  // Conditions fidèles au PHP (mêmes priorités de && / ||)
  const playerWins =
    (S.playFirst === "player"   && pScore >  cScore && cSuit === pSuit) ||
    (S.playFirst === "player"   && pScore === cScore && cSuit === pSuit) ||
    (S.playFirst === "player"   && cSuit !== trumpSuit && cSuit !== pSuit) ||
    (S.playFirst === "computer" && pScore >  cScore && pSuit === cSuit) ||
    (S.playFirst === "computer" && cSuit !== trumpSuit && pSuit === trumpSuit);

  if (playerWins) {
    S.trickPlayer.push(pCard, cCard);
    S.playFirst = "player";
    if (DeclarationsModule?.possibleDeclarations) {
      S.declarationsAvailablePlayer =
        DeclarationsModule.possibleDeclarations(S.handPlayer, S.trump);
    }
  } else {
    S.trickComputer.push(pCard, cCard);
    S.playFirst = "computer";
    if (DeclarationsModule?.possibleDeclarations) {
      S.declarationsAvailableComputer =
        DeclarationsModule.possibleDeclarations(S.handComputer, S.trump);
    }
  }
}