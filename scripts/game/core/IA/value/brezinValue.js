// ======================================================
// ===============  Calcul de la valeur Brézin  ===============
// ======================================================
//
// But du fichier.
// ----------------
// Évaluer la valeur potentielle du "Grand Brézin" (500 points) selon la probabilité
// d’obtenir les cartes nécessaires encore présentes dans la pioche.
//
// Ce que fait le script.
// ----------------------
// 1) Identifie dans la pioche les cartes nécessaires au Brézin ({Q♦, J♠}).
// 2) Vérifie que la carte courante peut participer à cette combinaison (rang valet ou dame).
// 3) Calcule et renvoie la valeur pondérée par la probabilité de réussite.
//

function brezinValue(currentCard, numberNeededForGain) {
  // 1) Recherche des cartes favorables dans la pioche.
  const qDiamonds = S.stack.filter(c => getRankNum(c) === 5 && c.couleur === "carreau");
  const jSpades   = S.stack.filter(c => getRankNum(c) === 4 && c.couleur === "pique");
  const goodInStack = qDiamonds.length + jSpades.length;

  // 2) Vérifie si la carte courante peut contribuer au Brézin.
  const rank = getRankNum(currentCard);
  if (rank !== 4 && rank !== 5) return 0;

  // 3) Calcule la valeur pondérée selon la probabilité de gain.
  const N = S.stack.length;
  return 500 * probabilityGain(N, goodInStack, numberNeededForGain);
}
