// ======================================================
// ============  Extraction des identifiants de cartes  ============
// ======================================================
// Rôle.
// ----
// Produit une liste d’identifiants uniques pour un ensemble de cartes,
// en préférant la propriété `number` si elle existe, sinon `name`.
//
// Étapes.
// -------
// 1) Itère sur les cartes données (tolère null/undefined).
// 2) Pour chaque carte → récupère c.number si présent, sinon c.name.
// 3) Filtre les valeurs nulles ou undefined.
// 4) Retourne un tableau des identifiants valides.
//
// Paramètres.
// -----------
// - cards : tableau d’objets cartes.

function returnCardIds(cards) {
  return (cards ?? [])
    .map(c => (has(c, "number") ? c.number : (c.name ?? null)))
    .filter(v => v !== null && v !== undefined);
}