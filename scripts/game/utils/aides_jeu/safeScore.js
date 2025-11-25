// ======================================================
// ============  Lecture sécurisée du score d’une carte  ============
// ======================================================
// Rôle.
// ----
// Retourne un score numérique fiable pour une carte :
// - Utilise c.score si c’est un nombre valide,
// - Sinon bascule sur getRankNum(c),
// - Retourne 0 si aucune valeur exploitable.
//
// Étapes.
// -------
// 1) Vérifie si c.score est bien un nombre → le garde sinon fallback.
// 2) Convertit le résultat en nombre et vérifie sa validité.
// 3) Retourne la valeur numérique finale (ou 0 par défaut).

function safeScore(c) {
  const s = (c && typeof c.score === "number") ? c.score : getRankNum(c);
  return Number.isFinite(s) ? s : 0;
}