// ======================================================
// ============  Sélection des cartes “40 de Brézin”  ============
// ======================================================
// Rôle.
// ----
// Choisit la meilleure combinaison J♠ + Q♦ pour la déclaration “40 de Brézin”,
// en privilégiant les cartes jamais annoncées, sinon les premières disponibles.
//
// Étapes.
// -------
// 1) Filtre les valets (rang=4) et dames (rang=5) parmi les cartes fournies.
// 2) Sélectionne un valet non déclaré si possible, sinon le premier trouvé.
// 3) Sélectionne une dame non déclarée si possible, sinon la première trouvée.
// 4) Retourne le couple [valet, dame].
//
// Paramètres.
// -----------
// - cards : tableau de cartes candidates (généralement J♠ et Q♦).

function selectedCardsLittleBrezin(cards) {
  const jacks  = cards.filter(c => getRankNum(c) === 4);
  const queens = cards.filter(c => getRankNum(c) === 5);

  const pickPreferDeclared = (arr) => {
    const already = arr.filter(isDeclared);
    const fresh   = arr.filter(c => !isDeclared(c));
    return already[0] || fresh[0] || null;
  };

  const j = pickPreferDeclared(jacks);
  const q = pickPreferDeclared(queens);

  return [j, q];
}