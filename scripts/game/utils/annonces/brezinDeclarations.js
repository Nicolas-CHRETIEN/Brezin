// ======================================================
// ============  Déclarations “Brézin” et “40 de brézin”  ============
// ======================================================
// Rôle.
// ----
// Détermine les déclarations possibles liées au Brézin :
// - "brézin" (4 cartes : J♠ + Q♦ non toutes déjà déclarées),
// - "40 de brézin" (J♠ + Q♦ avec contraintes de non-déclaration).
//
// Étapes.
// -------
// 1) Filtre les cartes candidates pour "brézin" et "40 de brézin".
// 2) Si 4 cartes valides pour "brézin" et au moins une non déclarée → push la déclaration.
// 3) Si J♠ et Q♦ présents, règles supplémentaires respectées → push "40 de brézin".
// 4) Retourne la liste des déclarations trouvées.

function brezinDeclarations(hand) {
  const decl = [];

  const cards_brezin = hand.filter(c =>
    (getRankNum(c) === 4 && c.couleur === "pique"   && isNotDeclaredFor(c, "brézin")) ||
    (getRankNum(c) === 5 && c.couleur === "carreau" && isNotDeclaredFor(c, "brézin"))
  );

  const cards_little = hand.filter(c =>
    ((getRankNum(c) === 4 && c.couleur === "pique") ||
     (getRankNum(c) === 5 && c.couleur === "carreau")) &&
    isNotDeclaredFor(c, "40 de brézin") && isNotDeclaredFor(c, "brézin")
  );

  const alreadyDeclared = cards_brezin.some(c => isDeclaredForSmthLike(c, "40 de brézin"));

  if (cards_brezin.length === 4 && !(cards_brezin.every(isDeclared))) {
    decl.push({
      name: "brézin",
      frenchName: "brézin",
      rank: "brézin",
      cards: returnCardIds(cards_brezin),
      priority: 2,
      gain: 500
    });
  }

  const hasJ = cards_little.some(c => getRankNum(c) === 4);
  const hasQ = cards_little.some(c => getRankNum(c) === 5);
  if (
    hasJ &&
    hasQ &&
    cards_little.some(c => !isDeclared(c)) &&
    !alreadyDeclared
  ) {
    const selected = selectedCardsLittleBrezin(cards_little);
    decl.push({
      name: "40 de brézin",
      rank: "40 de brézin",
      cards: returnCardIds(selected),
      priority: 5,
      gain: 40
    });
  }
  return decl;
}