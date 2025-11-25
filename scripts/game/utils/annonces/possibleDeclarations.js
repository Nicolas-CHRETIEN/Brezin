// ======================================================
// ============  Agrégateur d’annonces possibles  ============
// ======================================================
// Rôle.
// ----
// Calcule toutes les annonces possibles pour une main :
// - 7 d’atout, couples, carrés, (grand) brézin, 250, etc.
// - Optionnellement, simule l’ajout de la carte d’atout visible (échange du 7)
//   afin de détecter des annonces supplémentaires (`onlyWithTrump`).
//
// Étapes.
// -------
// 1) Construit la base des annonces avec la main actuelle.
// 2) Si un 7 d’atout est possible ET que l’atout visible est “récupérable” (>13) :
//    - Simule la main avec l’atout ajouté (sans muter `hand`).
//    - Recalcule les annonces et isole celles qui n’existaient pas avant.
//    - Marque ces annonces `onlyWithTrump: true` et les fusionne au résultat.
// 3) Sinon, renvoie simplement les annonces de base.

function possibleDeclarations(hand) {
  const decl = [];
  decl.push(
    ...sevenTrump(hand),
    ...couples(hand),
    ...fours(hand),
    ...brezinDeclarations(hand),
    ...twoFifty(hand)
  );

  // 7 d'atout possible ET carte d'atout visible “récupérable”
  // (bug évident corrigé : usage de S.trump)
  const trump = S.trump;
  const getTrumpCard = sevenTrump(hand).length > 0 && trump.score > 13;

  if (getTrumpCard) {
    // ne pas muter `hand`
    const newHand = [...hand, trump];

    const declWithTrumpCard = [];
    declWithTrumpCard.push(
      ...sevenTrump(newHand),
      ...couples(newHand),
      ...fours(newHand),
      ...brezinDeclarations(newHand),
      ...twoFifty(newHand)
    );

    // --- Diff utilitaire: clé stable par annonce (nom + cartes triées)
    const keyOf = d => {
      const cards = Array.isArray(d.cards) ? d.cards : [];
      const cardIds = cards.map(c => c?.name ?? c).sort().join("|");
      return `${d.name}::${cardIds}`;
    };

    const baseKeys = new Set(decl.map(keyOf));

    // Annonces nouvelles (rendues possibles grâce à l’ajout de l’atout)
    const newDecs = declWithTrumpCard
      .filter(d => !baseKeys.has(keyOf(d)))
      .map(d => ({ ...d, onlyWithTrump: true }));

    return [...decl, ...newDecs];
  }

  // Si pas d’atout récupérable, on renvoie les annonces de base
  return decl;
}