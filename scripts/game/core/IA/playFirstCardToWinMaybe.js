// ======================================================
// ========  IA : cartes pouvant peut-être gagner  ========
// ======================================================
// Rôle.
// ----
// Identifier les cartes de la main de l’IA susceptibles de remporter
// un pli selon leur score et leur valeur estimée, sans être garanties
// de victoire. Ces cartes sont utilisées comme choix “intermédiaire”
// quand aucune carte sûre n’existe, mais qu’il est possible de tenter.
//
// Étapes.
// -------
// 1) Filtrer les cartes de la main selon un seuil de score et de valeur.
// 2) Exclure les cartes déjà déclarées pour une annonce.
// 3) Trier les cartes restantes par score décroissant et les retourner.
//

// 2 Cartes qui peuvent "peut-être gagner".
function playFirstCardToWinMaybe() {
  // 1) Sélection des cartes potentiellement gagnantes.
  let selected = S.handComputer.filter(
    c => c.score < 14 && c.value < 40 && !c.declarable
  );

  // 2) Tri par score décroissant si au moins une carte correspond.
  if (selected.length) selected = arraySort(selected, "score", -1);

  return selected;
}