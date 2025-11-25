// ======================================================
// ============  Calcul de la valeur du 250 d’atout  ============
// ======================================================
// Rôle.
// ----
// Calcule la valeur potentielle de l’annonce “250 d’atout” (suite de {10, J, Q, K, A}).
// Évalue la probabilité d’obtenir les cartes manquantes dans la couleur d’atout
// en fonction de la main actuelle de l’IA et de la pioche restante.
//

function twoFiftyValue(currentCard) {
  // 1) Récupère les informations de la carte courante.
  const rank = getRankNum(currentCard);
  const suit = currentCard.couleur;

  // 2) Vérifie que la carte est une figure (≥ J) et appartient à la couleur d’atout.
  if (rank < 4 || suit !== S.trump.couleur) return 0;

  // 3) Si l’IA possède déjà deux cartes identiques (double jeu), valeur nulle.
  const sameRankInHand = S.handComputer.filter(c => getRankNum(c) === rank).length;
  if (sameRankInHand === 2) return 0;

  // 4) Identifie les rangs déjà détenus par l’IA pour l’annonce “250 d’atout”.
  const twoFiftyCardsInHand = S.handComputer.filter(
    c => getRankNum(c) > 3 && c.couleur === S.trump.couleur
  );
  const ranksInHand = Array.from(new Set(twoFiftyCardsInHand.map(getRankNum)));

  // 5) Liste les rangs manquants parmi {J(4), Q(5), K(6), 10(7), A(8)}.
  const missingRanks = [];
  for (let r = 4; r < 9; r++) {
    if (!ranksInHand.includes(r) && !missingRanks.includes(r)) {
      missingRanks.push(r);
    }
  }

  // 6) Calcule la probabilité d’obtenir les cartes manquantes dans la même couleur.
  const proba = probability250Gain(missingRanks, currentCard);

  // 7) Renvoie la valeur finale pondérée (250 × probabilité).
  return 250 * proba;
}
