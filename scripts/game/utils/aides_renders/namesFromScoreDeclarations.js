// ======================================================
// ============  Extraction des noms de cartes déclarées  ============
// ======================================================
// Rôle.
// ----
// Compile la liste unique des noms de cartes issues d’une liste
// de déclarations de score (ex: couples, carrés, 7 d’atout, etc.).
//
// Étapes.
// -------
// 1) Parcourt la liste de déclarations (tolère null/undefined).
// 2) Pour chaque déclaration :
//    - Si d.cards est un tableau → ajoute tous les noms.
//    - Si d.cards est une valeur unique → ajoute directement.
// 3) Retourne un Set pour éliminer les doublons.
//
// Paramètres.
// -----------
// - list : tableau de déclarations ({ cards: [...] | string }).

function namesFromScoreDeclarations(list = []) {
  const out = [];
  for (const d of list ?? []) {
    if (!d) continue;
    if (Array.isArray(d.cards)) out.push(...d.cards);
    else if (d.cards) out.push(d.cards);
  }
  return new Set(out);
}