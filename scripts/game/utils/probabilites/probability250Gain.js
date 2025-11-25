// ======================================================
// ============  Probabilité d’obtenir 250 (progression)  ============
// ======================================================
// Rôle.
// ----
// Estime la probabilité courante de compléter “250 d’atout” à partir
// des rangs manquants et de la carte courante (même couleur).
// Logique conservée : on écrase `proba` à chaque rang manquant trouvé.
//
// Étapes.
// -------
// 1) Si aucun rang manquant → probabilité 1.
// 2) N ← taille du talon ; currentSuit ← couleur de la carte courante.
// 3) Pour chaque rang i (4..8), si i est manquant :
//    - m ← nb de cartes dans le talon de couleur currentSuit et rang i,
//    - proba ← probabilityGain(N, m, 1) (conformément à la logique existante).
// 4) Retourne la dernière probabilité calculée.

function probability250Gain(missingRanks, currentCard) {
  if (!missingRanks || missingRanks.length === 0) return 1;

  const N = S.stack.length;
  const currentSuit = currentCard.couleur;
  let proba = 1;

  for (let i = 4; i < 9; i++) {
    if (missingRanks.includes(i)) {
      const m = S.stack.filter(c => getRankNum(c) === i && c.couleur === currentSuit).length;
      proba = probabilityGain(N, m, 1); // fidèle à ta logique existante
    }
  }
  return proba;
}