// ======================================================
// ===========  Joueur joue en premier (listener)  ===========
// ======================================================
// Rôle.
// ----
// Gérer le coup où le joueur ouvre le pli : récupérer sa carte, estimer les
// annonces possibles côté IA, choisir la riposte IA selon la phase, appliquer
// les deux plays, résoudre le pli, puis afficher le résultat.
//
// Étapes.
// -------
// 1) Récupérer la carte du joueur depuis sa main.
// 2) Mettre à jour les annonces disponibles pour l’IA.
// 3) Choisir la carte de l’IA selon l’état du talon (pioche ou fin de partie).
// 4) Retirer les deux cartes des mains et enregistrer les cartes jouées.
// 5) Résoudre le pli avec `playTrickGame`.
// 6) Basculer sur l’affichage du résultat du pli.
//

function listenerPlayerPlayFirst(cardId) {
  // 1) Carte choisie par le joueur.
  const cardPlayer = byNumberOrName(S.handPlayer, cardId);

  // 2) Annonces disponibles côté IA.
  S.declarationsAvailableComputer = possibleDeclarations(S.handComputer);

  // 3) Choix de la carte IA selon la phase.
  let cardComputer;
  if (S.stack?.length > 1) {
    cardComputer = computerPlaySecond(cardPlayer);
  } else {
    cardComputer = computerPlaySecondEndGame(cardPlayer);
  }

  // 4) Appliquer les plays (retrait des mains + enregistrement).
  playerPlayCard(cardPlayer);
  computerPlayCard(cardComputer);

  // 5) Résoudre le pli.
  playTrickGame({ possibleDeclarations });

  // 6) Prochaine étape : afficher le résultat du pli.
  S.stage = 'trickGameResult';
  renderGame();
}