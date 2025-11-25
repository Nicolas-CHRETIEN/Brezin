// ======================================================
// ============  Vérifie qu'une carte a bien servi pour l'annonce  ============
// ======================================================
// Rôle.
// ----
// Retourne false si la carte n’a pas encore été utilisée
// pour le type d’annonce spécifié (rankDeclaration).
// Exemple : vérifier qu’une carte n'est pas libre pour un “couple” ou un “carré”.
//
// Étapes.
// -------
// 1) Si la carte n’a jamais été déclarée → false directement.
// 2) Sinon → teste toutes ses annonces et retourne true si
//    l’une d’elles correspond au rankDeclaration demandé.
// 3) Sinon → false (la carte n'a pas été utilisée pour ce type d’annonce).

function isDeclaredForSmthLike(card, rankDeclaration) {
  if (!isDeclared(card)) return false;
  return arrayAny(card.declared, d => d.rank === rankDeclaration || d.rank.includes(rankDeclaration));
}