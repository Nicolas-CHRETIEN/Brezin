// ======================================================
// ========  IA : cartes pouvant gagner à coup sûr  ========
// ======================================================
// Rôle.
// ----
// Identifier les cartes d’atout assurant presque toujours la victoire
// du pli (As, puis 10, puis Roi d’atout non déclarés), en respectant
// l’ordre de priorité de force.
//
// Étapes.
// -------
// 1) Identifier la couleur d’atout actuelle.
// 2) Sélectionner les As, 10 et Rois d’atout non déclarés.
// 3) Ajouter les cartes selon les conditions cumulatives de présence (As > 10 > Roi).
// 4) Trier les cartes retenues par valeur décroissante et les retourner.
//

// 1 Cartes qui peuvent "gagner pour sûr".
function playFirstCardToWinForSure() {
  const selected = [];
  const suit = S.trump.couleur;

  // 2) Sélection des cartes d’atout non déclarées par rang.
  const aceTrump  = S.handComputer.filter(c => getRankNum(c) === 8 && c.couleur === suit && !c.declarable);
  const tenTrump  = S.handComputer.filter(c => getRankNum(c) === 7 && c.couleur === suit && !c.declarable);
  const kingTrump = S.handComputer.filter(c => getRankNum(c) === 6 && c.couleur === suit && !c.declarable);

  // 3) Conditions d’ajout progressif selon la force.
  if (aceTrump.length) selected.push(...aceTrump);
  if (aceTrump.length === 2 && tenTrump.length) selected.push(...tenTrump);
  if (aceTrump.length === 2 && tenTrump.length === 2 && kingTrump.length) selected.push(...kingTrump);

  // 4) Retourne les cartes triées de la plus forte à la plus faible.
  return arraySort(selected, "value", -1);
}
