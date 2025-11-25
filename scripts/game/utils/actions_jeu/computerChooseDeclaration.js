// ======================================================
// ============  Choix des annonces IA (règle)  ============
// ======================================================
// Rôle.
// ----
// Sélectionne et applique les annonces de l'ordinateur pour ce tour :
// - Tous les "7 d'atout" possibles.
// - Au plus UNE autre annonce non-seven (la meilleure, priorité croissante).
// - Mémorise la liste pour l'affichage dans S.score.lastDeclaration.
//
// Étapes.
// -------
// 1) Calcule toutes les annonces possibles et trie par priorité croissante.
// 2) Sépare "7 d'atout" / autres annonces.
// 3) Construit la sélection : 1 meilleure non-seven (optionnel) + tous les sevens.
// 4) Applique séquentiellement chaque annonce sélectionnée.
// 5) Stocke la liste appliquée et renvoie la première annonce (non-seven si présente).

function computerChooseDeclaration() {
  // 1) Calcul + tri par priorité (plus petit = plus prioritaire)
  const all = possibleDeclarations(S.handComputer).sort((a, b) => a.priority - b.priority);
  if (!all.length) {
    // S.score.lastDeclaration = null;
    return { Situation: S, declaration: null };
  }

  // 2) Sépare seven / non-seven
  const sevens = all.filter(isSevenDecl);
  const others = all.filter(d => !isSevenDecl(d));

  // 3) Prend au plus 1 non-seven (la meilleure) + tous les 7
  const picked = [
    ...(others.length ? [others[0]] : []),
    ...sevens
  ];
  if (!picked.length) {
    // S.score.lastDeclaration = null;
    return { Situation: S, declaration: null };
  }

  // 4) Applique chaque annonce séquentiellement
  for (const decl of picked) computerDeclare(decl);

  // 5) Mémorise pour l'affichage et renvoie la première annonce
  S.score.lastDeclaration = picked.map(d => ({ ...d })); // copie superficielle
  return { Situation: S, declaration: picked[0] };
}