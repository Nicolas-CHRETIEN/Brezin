// ======================================================
// ============  Vérification de propriété propre  ============
// ======================================================
// Rôle.
// ----
// Teste si un objet possède une propriété donnée en propre
// (sans tenir compte de la chaîne de prototypes).
// Tolère un objet nul ou undefined.
//
// Étapes.
// -------
// 1) Utilise Object.prototype.hasOwnProperty.call() pour un test sûr.
// 2) Retourne true si la clé appartient directement à l’objet, false sinon.

const has = (o, k) => Object.prototype.hasOwnProperty.call(o ?? {}, k);