// ======================================================
// ===========  Calcul de la valeur du 40 de Brézin  ===========
// ======================================================
// Rôle.
// ----
// Évalue la valeur potentielle du "40 de Brézin" (40 points), constitué du duo
// {J♠, Q♦}. La fonction estime la probabilité d’obtenir la carte complémentaire
// encore présente dans la pioche et renvoie la valeur pondérée correspondante.
//

function littleBrezinValue(currentCard) {
  const rank = getRankNum(currentCard);
  let goodInStack = 0;

  // Si la carte n’est ni un valet ni une dame, aucune valeur.
  if (rank !== 4 && rank !== 5) return 0;

  // J♠ → cherche Q♦ ; Q♦ → cherche J♠.
  if (rank === 4) {
    goodInStack = S.stack.filter(c => getRankNum(c) === 5 && c.couleur === "carreau").length;
  } else {
    goodInStack = S.stack.filter(c => getRankNum(c) === 4 && c.couleur === "pique").length;
  }

  // Calcul final pondéré selon la probabilité de gain.
  const N = S.stack.length;
  return 40 * probabilityGain(N, goodInStack, 1);
}
