// ======================================================
// ============  Évaluation de la valeur d’une carte  ============
// ======================================================
//
// Rôle.
// ----
// Calcule la valeur totale d’une carte
// pour l’IA en additionnant points de fin de pli, valeurs d’annonces potentielles
// (couple, carré, petit/Grand Brézin, 250 d’atout), valeur d’atout et un léger bonus de rang.
//
// Étapes.
// -------
// 1) Préparer les données de base (rang, couleur, atout).
// 2) Ajouter les points de fin (10/As).
// 3) Évaluer les annonces possibles (carré, couple, petit/Grand Brézin, 250).
// 4) Évaluer la valeur d’atout et le cas spécial du 7 d’atout.
// 5) Calculer la somme finale et marquer la carte comme « déclarable » le cas échéant.
//

function valueCard(currentCard) {
  // 1) Données de base.
  const rank = getRankNum(currentCard);
  const suit = currentCard.couleur;
  const trumpSuit = S.trump.couleur;
  const trumpRank = getRankNum(S.trump);

  let value = 0;
  let ten = 0;
  let couple = 0;
  let little_brezin = 0;
  let four = 0;
  let brezin = 0;          // Valeur du Grand Brézin.
  let two_fifty = 0;
  let trump_value = 0;
  let seven_trump = 0;     // Conservé pour compatibilité.

  // 2) Points de fin (10/As = 10 points).
  if (rank === 7) ten = 10; // Dix.
  if (rank === 8) ten = 10; // As.

  // 3) Annonces si la carte est au moins Valet (rank > 3).
  if (rank > 3) {
    // 3.1) Carrés (4 cartes de même rang).
    if (rank !== 7) {
      const sameRank = S.handComputer.filter(c => getRankNum(c) === rank).length;
      const number_needed_for_gain = Math.max(0, 4 - sameRank);
      four = fourValue(currentCard, number_needed_for_gain);
    }

    // 3.2) Couples (Q/K).
    if (rank === 5 || rank === 6) {
      const hasK = S.handComputer.some(c => getRankNum(c) === 6 && c.couleur === suit);
      const hasQ = S.handComputer.some(c => getRankNum(c) === 5 && c.couleur === suit);
      const number_needed_for_gain = ((rank === 5 && hasK) || (rank === 6 && hasQ)) ? 0 : 1;
      couple = coupleValue(currentCard, number_needed_for_gain);
    }

    // 3.3) Petit/Grand Brézin (J♠, Q♦).
    if ((rank === 4 && suit === "pique") || (rank === 5 && suit === "carreau")) {
      // Petit Brézin (40).
      little_brezin = littleBrezinValue(currentCard);

      // Grand Brézin (500) : ne compte que les cartes non déjà déclarées pour « brézin ».
      const cards_brezin = S.handComputer.filter(c =>
        ((getRankNum(c) === 4 && c.couleur === "pique")  && isNotDeclaredFor(c, "brézin")) ||
        ((getRankNum(c) === 5 && c.couleur === "carreau") && isNotDeclaredFor(c, "brézin"))
      );
      const number_needed_for_gain = Math.max(0, 4 - cards_brezin.length);
      brezin = brezinValue(currentCard, number_needed_for_gain);
    }

    // 3.4) 250 d’atout (suite {J,Q,K,10,A} en atout).
    if (suit === trumpSuit) {
      two_fifty = twoFiftyValue(currentCard);
    }
  }

  // 4) Valeur d’atout et cas spécial du 7 d’atout.
  if (suit === trumpSuit) {
    // Valeur de base d’une carte d’atout.
    trump_value = 10;

    // Cas spécial : 7 d’atout quand l’atout visible n’est pas un 7.
    if (rank === 1 && trumpRank !== 1) {
      const isJackSpade   = (trumpRank === 4 && S.trump.couleur === "pique");
      const isQueenDiamond = (trumpRank === 5 && S.trump.couleur === "carreau");
      if (isJackSpade || isQueenDiamond) {
        trump_value = 400;
      } else if (trumpRank > 3) {
        trump_value = 200;
      }
    }
  }

  // 5) Somme finale et marquage.
  value = ten
        + couple
        + little_brezin
        + four
        + brezin
        + two_fifty
        + trump_value
        + seven_trump
        + rank; // Petit bonus de rang pour aider à la prise de pli.

  currentCard.value = value;
  currentCard.declarable = (couple + little_brezin + four + brezin + two_fifty + seven_trump) > 0;

  return currentCard;
}
