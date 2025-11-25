// ======================================================
// ==========  IA : jouer en premier (fin de partie)  ==========
// ======================================================
// Rôle.
// ----
// Choisir la première carte à jouer par l’IA pendant la phase de fin,
// en privilégiant d’abord les As non-atouts, puis les 10 non-atouts,
// sinon la carte au score le plus faible.
//
// Étapes.
// -------
// 1) Identifier la couleur d’atout.
// 2) Lister les As et les 10 qui ne sont pas de la couleur d’atout.
// 3) Appliquer la règle de priorité (As, puis 10, sinon plus faible score).
//

function computerPlayFirstEndGame() {
  // 1) Couleur d’atout.
  const trumpSuit = S.trump.couleur;

  // 2) Sélections des As et 10 hors atout.
  const acesNotTrump = S.handComputer.filter(c => getRankNum(c) === 8 && c.couleur !== trumpSuit);
  const tensNotTrump = S.handComputer.filter(c => getRankNum(c) === 7 && c.couleur !== trumpSuit);

  // 3) Priorité : As → 10 → plus faible score.
  if (acesNotTrump.length > 0) {
    return acesNotTrump[0];
  } else if (tensNotTrump.length > 0) {
    return tensNotTrump[0];
  } else {
    const sorted = arraySort(S.handComputer, "score", -1);
    return sorted[0];
  }
}
