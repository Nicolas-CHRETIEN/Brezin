// ======================================================
// ============  Test d’annonce “7 d’atout”  ============
// ======================================================
// Rôle.
// ----
// Détermine si une déclaration correspond à un “7 d’atout”.
// Sert notamment à séparer ce type d’annonce des autres
// lors du choix automatique des annonces IA.
//
// Étapes.
// -------
// 1) Vérifie simplement si la propriété rank de la déclaration vaut "sept d'atout".
// 2) Retourne true si oui, false sinon.

const isSevenDecl = d => d.rank === "sept d'atout";