// ======================================================
// ============  IA : jouer en second dans le pli  ============
// ======================================================
//
// Rôle.
// ----
// Choisir la carte que l’IA doit jouer en second, en évaluant pour chaque carte
// sa valeur intrinsèque et ses conséquences probables face à la carte du joueur,
// puis en sélectionnant celle au meilleur score de conséquences.
//
// Étapes.
// -------
// 1) (Optionnel) Lire le gain d’annonce potentiel courant.
// 2) Évaluer chaque carte de la main : `valueCard` puis `consequencesCard` avec `cardPlayer`.
// 3) Trier les cartes par `consequences` décroissant et choisir la première.
// 4) Nettoyer les champs temporaires puis retourner la carte sélectionnée.
//

// 5 IA Joue en Second.
function computerPlaySecond(cardPlayer) {
  // 1) Gain d’annonce potentiel courant (non utilisé directement ici).
  const gain = S.declarationsAvailableComputer?.[0]?.gain || 0;

  // 2) Évaluation de chaque carte de la main IA.
  const newHand = [];
  for (const card of S.handComputer) {
    let newCard = valueCard(card);                 // Valeur intrinsèque de la carte.
    newCard = consequencesCard(newCard, cardPlayer); // Conséquences face à la carte du joueur.
    newHand.push(newCard);
  }

  // 3) Tri des cartes selon le champ `consequences` (ordre décroissant).
  const sorted = arraySort(newHand, "consequences", -1);
  const selected = sorted[0];

  // 4) Nettoyage des attributs temporaires et retour.
  delete selected.consequences;
  delete selected.declarable;
  return selected;
}