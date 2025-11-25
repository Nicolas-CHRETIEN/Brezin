// ======================================================
// ============  Sélection des cartes pour un carré  ============
// ======================================================
// Rôle.
// ----
// Sélectionne les 4 cartes à utiliser pour une déclaration de “carré”
// (4 cartes d’un même rang), selon une logique de priorité :
// - D’abord celles déjà utilisées pour un “carré”,
// - Puis celles déclarées pour autre chose,
// - Enfin celles jamais déclarées.
// Retourne un ensemble équilibré (3 premières + dernière).
//
// Étapes.
// -------
// 1) Sépare les cartes selon leur statut de déclaration :
//    - declaredForFour : déjà marquées pour "carré".
//    - declaredOther   : déclarées pour autre chose.
//    - notDeclaredYet  : jamais déclarées.
// 2) Concatène ces groupes dans l’ordre de priorité.
// 3) Sélectionne les 3 premières et la dernière pour constituer le carré.
//
// Paramètres.
// -----------
// - cardsOfSameRank : tableau des cartes partageant le même rang.

function selectedCardsFour(cardsOfSameRank) {
  const declaredForFour = cardsOfSameRank.filter(c => !isNotDeclaredFor(c, "carré")); // déjà utilisées pour "carré"
  const declaredOther   = cardsOfSameRank.filter(c => isDeclared(c) && isNotDeclaredFor(c, "carré"));
  const notDeclaredYet  = cardsOfSameRank.filter(c => !isDeclared(c));

  const sorted = [...declaredForFour, ...declaredOther, ...notDeclaredYet];
  return [sorted[0], sorted[1], sorted[2], sorted[sorted.length - 1]];
}