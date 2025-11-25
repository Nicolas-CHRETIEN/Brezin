// ======================================================
// ============  Sélecteur multiple (premier trouvé)  ============
// ======================================================
// Rôle.
// ----
// Recherche séquentiellement dans le DOM le premier élément
// correspondant à un des sélecteurs fournis.
//
// Étapes.
// -------
// 1) Parcourt le tableau de sélecteurs CSS fourni.
// 2) Pour chaque sélecteur → tente un querySelector().
// 3) Retourne le premier élément trouvé.
// 4) Si aucun trouvé → retourne null.
//
// Paramètres.
// -----------
// - arr : tableau de sélecteurs CSS (ex: ["#id", ".class"]).

function qsAny(arr) {
  for (const sel of arr) {
    const n = document.querySelector(sel);
    if (n) return n;
  }
  return null;
}