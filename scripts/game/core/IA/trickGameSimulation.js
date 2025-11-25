// ======================================================
// ========  Simulation d’issue d’un pli (IA vs joueur)  ========
// ======================================================
// Rôle.
// ----
// Déterminer l’issue probable du pli entre la carte du joueur et celle de l’IA,
// en reproduisant la logique et les priorités du code PHP d’origine.
//
// Étapes.
// -------
// 1) Normaliser l’info “qui joue en premier” et préparer les données utiles.
// 2) Appliquer la logique de comparaison (même couleur, atout, supériorité de score).
// 3) Retourner "computer win" ou "computer loose" selon le résultat.
//

function trickGameSimulation(cardPlayer, cardAI) {
  // 1) Préparation des données.
  const pf = (S.playFirst === "joueur" || S.playFirst === "player") ? "player" : "computer";
  const trumpSuit = S.trump.couleur;
  const suitAI = cardAI.couleur;
  const suitP  = cardPlayer ? cardPlayer.couleur : null;

  const scoreAI = cardAI.score ?? 0;
  const scoreP  = cardPlayer ? (cardPlayer.score ?? 0) : 0;

  // 2) Logique fidèle au PHP (mêmes priorités et opérateurs).
  if (
    (pf === "player"   && scoreP >  scoreAI && suitAI === suitP) ||
    (pf === "player"   && scoreP === scoreAI && suitAI === suitP) ||
    (pf === "player"   && suitAI !== trumpSuit && suitAI !== suitP) ||
    (pf === "computer" && scoreP >  scoreAI && suitP === suitAI) ||
    (pf === "computer" && suitAI !== trumpSuit && suitP === trumpSuit)
  ) {
    return "computer loose";
  } else {
    return "computer win";
  }
}