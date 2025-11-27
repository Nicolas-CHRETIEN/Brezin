// ======================================================
// ============  IA : jouer la première carte  ============
// ======================================================
//
// Rôle.
// ----
// Choisir la carte que l’IA doit jouer lorsqu’elle commence le pli, en tenant compte
// des annonces potentielles, des deux premières cartes de la pioche, de la difficulté
// et des heuristiques de victoire/perte.
//
// Étapes.
// -------
// 1) Évaluer les deux premières cartes de pioche et les gains d’annonces possibles.
// 2) Recalculer la valeur de toutes les cartes de la main IA.
// 3) Récupérer les ensembles de cartes “gagne sûr”, “peut gagner”, “perd”.
// 4) Appliquer la stratégie selon la difficulté et l’état de la pioche pour sélectionner la carte.
// 5) Nettoyer les champs temporaires puis retourner la carte.
//

// 4 IA Joue en Premier.
function computerPlayFirst() {
  // 1) Pioche et annonces.
  const trump = S.trump;
  const suitTrump = S.trump.couleur;

  const firstStack  = valueCard(S.stack[0]);
  const secondStack = valueCard(S.stack[1]);

  const declaration_gain        = S.declarationsAvailableComputer?.[0]?.gain || 0;
  const declaration_player_gain = S.declarationsAvailablePlayer?.[0]?.gain   || 0;

  const goal_computer_hard =
    declaration_gain +
    declaration_player_gain +
    firstStack.value -
    secondStack.value;

  const goal_computer_normal = declaration_gain;

  // 2) Recalcul de la main IA.
  S.handComputer = S.handComputer.map(card => valueCard(card));

  // 3) Heuristiques de choix.
  const cards_to_win_for_sure = playFirstCardToWinForSure();
  const cards_to_win_maybe    = playFirstCardToWinMaybe();
  const card_to_lose          = playFirstCardToLose();

  // 4) Sélection selon difficulté et état.
  let selectedCard;
  if (S.stack.length < 3 && cards_to_win_for_sure.length) {
    selectedCard = cards_to_win_for_sure[0];
  } else if (
    (goal_computer_hard > 200 && S.difficulty === "expert") ||
    (cards_to_win_maybe[0] &&
     goal_computer_normal > cards_to_win_maybe[0].value &&
     S.difficulty !== "expert")
  ) {
    selectedCard = cards_to_win_maybe.length ? cards_to_win_maybe[0] : card_to_lose;
  } else {
    selectedCard = card_to_lose;
  }
  
  // 5) Nettoyage et retour.
  delete selectedCard.declarable;
  delete selectedCard.consequences;
  return selectedCard;
}