// ======================================================
// ============  Probabilité hypergéométrique  ============
// ======================================================
// Rôle.
// ----
// Calcule la probabilité d’obtenir exactement *k* succès dans un échantillon
// de taille *n*, tiré sans remise d’une population de *N* éléments contenant
// *m* succès potentiels.
//
// Formule.
// --------
// P(X = k) = [C(m, k) * C(N - m, n - k)] / C(N, n)
//
// Étapes.
// -------
// 1) Calcule les trois coefficients binomiaux nécessaires.
// 2) Retourne la fraction résultante.
// (Utilise binomialCoefficient() défini précédemment)
//
// Exemple.
// --------
// equalProb(52, 13, 5, 2) → probabilité d’obtenir 2 cœurs sur 5 cartes.

function equalProb(N, m, n, k) {
  return (
    binomialCoefficient(m, k) *
    binomialCoefficient(N - m, n - k) /
    binomialCoefficient(N, n)
  );
}