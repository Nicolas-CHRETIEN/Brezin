// ======================================================
// ============  Vérifie la disponibilité d’une carte pour un type d’annonce  ============
// ======================================================
// Rôle.
// ----
// Retourne true si la carte n’a pas encore été utilisée
// pour le type d’annonce spécifié (rankDeclaration) ou quelque chose s'en rapprochant.
// Exemple : vérifier qu’une carte est libre pour un “couple” ou un “carré”.
//
// Étapes.
// -------
// 1) Si la carte n’a jamais été déclarée → true directement.
// 2) Sinon → teste toutes ses déclarations et retourne false si
//    l’une d’elles correspond au rankDeclaration demandé.
// 3) Sinon → true (la carte est disponible pour ce type d’annonce).

function isNotDeclaredForSmthLike(card, rankDeclaration) {
  if (!isDeclared(card)) return true;
  return !arrayAny(card.declared, d => d.rank.includes(rankDeclaration));
}