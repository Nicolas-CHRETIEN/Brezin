// ======================================================
// ============  Tri stable d’un tableau par clé numérique  ============
// ======================================================
// Rôle.
// ----
// Trie un tableau d’objets selon une clé numérique donnée,
// en conservant la stabilité d’ordre d’origine en cas d’égalité.
//
// Étapes.
// -------
// 1) Mappe chaque élément avec son index et la valeur numérique clé.
// 2) Trie selon cette valeur (asc ou desc).
// 3) En cas d’égalité, préserve l’ordre initial via l’index.
// 4) Retourne le tableau trié des éléments d’origine.
//
// Paramètres.
// -----------
// - array : tableau d’objets à trier.
// - key   : clé numérique à utiliser pour la comparaison.
// - order : 1 pour ascendant (défaut), -1 pour descendant.

function arraySort(array, key, order = 1) {
  const asc = order !== -1;
  return (array ?? [])
    .map((item, idx) => ({ item, idx, val: item?.[key] ?? 0 }))
    .sort((a, b) =>
      a.val === b.val
        ? a.idx - b.idx
        : asc
          ? a.val - b.val
          : b.val - a.val
    )
    .map(o => o.item);
}
