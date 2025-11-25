// ======================================================
// ============  Coefficient binomial (n choisir k)  ============
// ======================================================
// Rôle.
// ----
// Calcule le coefficient binomial C(n, k), aussi noté “n choose k”,
// correspondant au nombre de combinaisons possibles de k éléments
// parmi n (sans ordre ni répétition).
//
// Étapes.
// -------
// 1) Retourne 0 si k est hors bornes (k < 0 ou k > n).
// 2) Retourne 1 si k = 0 ou k = n (cas triviaux).
// 3) Boucle de 1 à k pour appliquer la formule multiplicative :
//    res *= (n + 1 - i) / i
// 4) Retourne le résultat final.
//
// Exemple.
// --------
// binomialCoefficient(5,2) → 10

function binomialCoefficient(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let res = 1;
  for (let i = 1; i <= k; i++) res *= (n + 1 - i) / i;
  return res;
}