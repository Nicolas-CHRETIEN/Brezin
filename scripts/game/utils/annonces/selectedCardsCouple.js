// ======================================================
// ============  Sélection des cartes pour un couple  ============
// ======================================================
// Rôle.
// ----
// Choisit la meilleure paire (Dame + Roi) pour une déclaration de “couple”,
// en privilégiant les cartes jamais annoncées, sinon la première disponible.
//
// Étapes.
// -------
// 1) Filtre les Dames (rang=5) et Rois (rang=6) parmi les cartes données.
// 2) Sélectionne une Dame non déclarée si possible, sinon la première du lot.
// 3) Sélectionne un Roi non déclaré si possible, sinon le premier du lot.
// 4) Retourne la paire [Dame, Roi] retenue.
//
// Paramètres.
// -----------
// - cards : tableau de cartes candidates pour un couple.

function selectedCardsCouple(cards) {
  const baseQueens = cards.filter(
    c => getRankNum(c) === 5 && isNotDeclaredForSmthLike(c, "couple")
  );
  const baseKings  = cards.filter(
    c => getRankNum(c) === 6 && isNotDeclaredForSmthLike(c, "couple")
  );

  const sortPreferDeclared = (arr) => {
    const already = arr.filter(isDeclared);
    const fresh   = arr.filter(c => !isDeclared(c));
    return [...already, ...fresh];
  };

  const queens = sortPreferDeclared(baseQueens);
  const kings  = sortPreferDeclared(baseKings);

  return [queens, kings];
}