// ======================================================
// ============  Réinitialisation des déclarations cartes  ============
// ======================================================
// Rôle.
// ----
// Supprime toutes les déclarations enregistrées sur les cartes
// d’une main donnée, pour repartir d’un état neutre (utile en
// fin de manche ou après certaines étapes du jeu).
//
// Étapes.
// -------
// 1) Parcourt toutes les cartes de la main.
// 2) Remplace card.declared par un tableau vide (nouvelle référence).
// 3) Retourne la main mise à jour.
//
// Paramètres.
// -----------
// - hand : tableau d’objets cartes.

function undeclareCards(hand) {
  hand.forEach(card => {
    const emptyArray = [];
    card.declared = emptyArray;
  });
  return hand;
}