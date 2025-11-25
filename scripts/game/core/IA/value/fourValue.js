// ======================================================
// ============  Calcul de la valeur d’un carré  ============
// ======================================================
//
// But du fichier.
// ----------------
// Calculer la valeur potentielle d’un carré (quatre cartes d’un même rang)
// selon la probabilité d’obtenir les cartes manquantes encore présentes
// dans la pioche.
//
// Ce que fait le script.
// ----------------------
// 1) Identifie le rang de la carte courante et compte les cartes identiques dans la pioche.
// 2) Vérifie que le rang correspond à une figure autorisée (valet, dame, roi, as).
// 3) Détermine la valeur de base du carré selon le rang.
// 4) Calcule la valeur finale pondérée par la probabilité de gain.
//

function fourValue(currentCard, numberNeededForGain) {
  // 1) Identification du rang et comptage des cartes identiques dans la pioche.
  const rank = getRankNum(currentCard);
  const goodInStack = S.stack.filter(c => getRankNum(c) === rank).length;

  // 2) Vérifie que la carte est une figure autorisée (J, Q, K ou A).
  if (rank < 4 || rank > 8 || rank === 7) return 0;

  // 3) Détermine la valeur de base selon le rang (fidèle au comportement PHP).
  const N = S.stack.length;
  const base = (rank === 4 ? 40 : rank === 5 ? 60 : rank === 6 ? 80 : 100);

  // 4) Calcule la valeur pondérée selon la probabilité de gain.
  return base * probabilityGain(N, goodInStack, numberNeededForGain);
}
