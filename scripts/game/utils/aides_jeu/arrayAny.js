// ======================================================
// ============  Vérification d’existence dans un tableau  ============
// ======================================================
// Rôle.
// ----
// Réimplémente un équivalent léger de Array.some(),
// tolérant les valeurs null ou undefined pour le tableau.
//
// Étapes.
// -------
// 1) Itère sur les éléments du tableau (ou tableau vide si null/undefined).
// 2) Retourne true dès qu’un élément satisfait la condition fn().
// 3) Retourne false sinon.

function arrayAny(arr, fn) {
  for (const v of arr ?? []) if (fn(v)) return true;
  return false;
}