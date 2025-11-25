// ======================================================
// ============  Probabilité d’au moins k succès  ============
// ======================================================
// Rôle.
// ----
// Calcule P(X ≥ k) pour un tirage sans remise de taille n = ⌊N/2⌋
// dans une population N contenant m “succès” potentiels
// (loi hypergéométrique via equalProb).
//
// Étapes.
// -------
// 1) Fixe n ← ⌊N/2⌋. Si k = 0 → probabilité 1.
// 2) Somme les probabilités P(X = i) pour i = k..n.
// 3) Retourne le cumul (au moins k succès).
//
// Dépendances : equalProb(N, m, n, i)

function probabilityGain(N, m, k) {
  const n = Math.floor(N / 2);
  if (k === 0) return 1;

  let greater = 0;
  for (let i = n; i > k; i--) greater += equalProb(N, m, n, i);
  return equalProb(N, m, n, k) + greater;
}