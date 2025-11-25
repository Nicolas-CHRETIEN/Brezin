// ======================================================
// ============  Marquer les cartes d’une déclaration  ============
// ======================================================
// Rôle.
// ----
// Ajoute la déclaration courante aux cartes de la main ciblées par leurs ids.
// Conserve les déclarations existantes et empile la nouvelle.
//
// Étapes.
// -------
// 1) Normalise declaration.cards en tableau d’identifiants.
// 2) Parcourt la main et, pour chaque carte dont le name est ciblé :
//    - Si non déclarée → initialise card.declared avec [declaration].
//    - Sinon → pousse declaration dans card.declared.
// 3) Retourne la main mise à jour (copie mappée).

function findWithIdAndAddDeclaration(hand, declaration) {
  const ids = Array.isArray(declaration.cards) ? declaration.cards : [declaration.cards];
  return hand.map(card => {
    if (ids.includes(card.name)) {
      if (!isDeclared(card)) card.declared = [declaration];
      else card.declared.push(declaration);
    }
    return card;
  });
}