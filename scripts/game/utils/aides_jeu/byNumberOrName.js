// ======================================================
// ============  Recherche de carte par numéro ou nom  ============
// ======================================================
// Rôle.
// ----
// Trouve et renvoie une carte spécifique dans un tableau
// en comparant soit son numéro (`number`), soit son nom (`name`).
//
// Étapes.
// -------
// 1) Parcourt le tableau des cartes.
// 2) Retourne la première carte dont le `number` ou `name` correspond à `id`.
// 3) Retourne undefined si aucune carte ne correspond.

function byNumberOrName(cards, id) {
  return cards.find(c => c.number === id || c.name === id);
}
