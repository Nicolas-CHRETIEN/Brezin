// ======================================================
// ============  Déclarations “7 d’atout”  ============
// ======================================================
// Rôle.
// ----
// Identifie toutes les cartes “7 d’atout” non encore déclarées
// et crée pour chacune une déclaration correspondante.
// Si le joueur possède deux 7 d’atout (cas exceptionnel),
// deux annonces distinctes sont générées.
//
// Étapes.
// -------
// 1) Filtre les cartes d’atout de rang 7 (getRankNum(c) === 1) non déclarées.
// 2) Si aucune trouvée → retourne un tableau vide.
// 3) Pour chaque carte → crée une déclaration avec priorité 7 et gain 10.
// 4) Si 2 cartes répondent aux critères → retourne deux annonces.
//
// Paramètres.
// -----------
// - hand : tableau de cartes du joueur ou de l’ordinateur.

function sevenTrump(hand) {
  const sevens = hand.filter(c =>
    c.couleur === S.trump.couleur &&
    getRankNum(c) === 1 &&
    !isDeclared(c)
  );

  if (sevens.length === 0) return [];

  const makeDecl = card => ({
    name: "sept d'atout",
    rank: "sept d'atout",
    cards: returnCardIds([card])[0], // format identique au backend PHP
    priority: 7,
    gain: 10
  });

  return sevens.length >= 2
    ? [makeDecl(sevens[0]), makeDecl(sevens[1])]
    : [makeDecl(sevens[0])];
}