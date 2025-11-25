// ======================================================
// ============  Cache de rendu minimaliste  ============
// ======================================================
// Rôle.
// ----
// Stocke des signatures JSON associées à des clés d’éléments
// pour éviter des re-rendus DOM inutiles lorsque les données
// n’ont pas changé depuis la dernière mise à jour.
//
// Étapes.
// -------
// 1) Utilise une Map() pour associer chaque clé à sa signature JSON.
// 2) Permet de vérifier rapidement si un contenu est déjà à jour.
// 3) Sert dans les fonctions de rendu conditionnel.
//
// Exemple.
// --------
// if (renderCache.get(key) === jsonSig) return; // skip render

const renderCache = new Map();