function coupleValue(currentCard, numberNeededForGain) {
    const rank = getRankNum(currentCard);
    const suit = currentCard.couleur;
    let goodInStack = 0;

    if (rank !== 5 && rank !== 6) {
    return 0; // seulement Q(5) ou K(6)
    }
    if (rank === 5) { // queen -> cherche king de même couleur
    goodInStack = S.stack.filter(c => getRankNum(c) === 6 && c.couleur === suit).length;
    } else { // king -> cherche queen même couleur
    goodInStack = S.stack.filter(c => getRankNum(c) === 5 && c.couleur === suit).length;
    }

    const N = S.stack.length;
    const base = (suit === S.trump.couleur) ? 40 : 20;
    return base * probabilityGain(N, goodInStack, numberNeededForGain);
}// ======================================================
// ===============  Calcul de la valeur d’un couple  ===============
// ======================================================
//
// But du fichier.
// ----------------
// Évaluer la valeur potentielle d’un couple (dame + roi d’une même couleur)
// selon la probabilité d’obtenir la carte complémentaire encore dans la pioche.
//
// Ce que fait le script.
// ----------------------
// 1) Vérifie que la carte courante est une dame ou un roi (rangs 5 ou 6).
// 2) Recherche dans la pioche la carte complémentaire de même couleur.
// 3) Calcule la valeur de base selon que la couleur est atout ou non.
// 4) Renvoie la valeur pondérée par la probabilité de réussite.
//

function coupleValue(currentCard, numberNeededForGain) {
  // 1) Vérifie que la carte est éligible (dame ou roi).
  const rank = getRankNum(currentCard);
  const suit = currentCard.couleur;
  if (rank !== 5 && rank !== 6) return 0;

  // 2) Recherche la carte complémentaire dans la pioche.
  let goodInStack = 0;
  if (rank === 5) {
    // Dame → cherche roi de même couleur.
    goodInStack = S.stack.filter(c => getRankNum(c) === 6 && c.couleur === suit).length;
  } else {
    // Roi → cherche dame de même couleur.
    goodInStack = S.stack.filter(c => getRankNum(c) === 5 && c.couleur === suit).length;
  }

  // 3) Calcule la valeur de base (40 pour atout, sinon 20).
  const N = S.stack.length;
  const base = (suit === S.trump.couleur) ? 40 : 20;

  // 4) Calcule la valeur pondérée selon la probabilité de gain.
  return base * probabilityGain(N, goodInStack, numberNeededForGain);
}
