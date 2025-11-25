// ======================================================
// ===========  IA : jouer pour perdre le pli  ===========
// ======================================================
// Rôle.
// ----
// Choisir la carte que l’IA doit jouer lorsqu’aucune autre option
// n’est avantageuse (aucune carte ne permet de gagner ou d’améliorer
// la situation). Dans ce cas, l’IA joue simplement la carte la plus faible.
//
// Étapes.
// -------
// 1) Trier les cartes de la main par valeur croissante.
// 2) Retourner la première carte (plus faible).
//

// 3 Si aucune carte utile → joue la plus faible.
function playFirstCardToLose() {
  const sorted = arraySort(S.handComputer, "value", 1); // Trie de la plus faible à la plus forte.
  return sorted[0];
}