// ======================================================
// ============  Vérifie si une carte est déjà déclarée  ============
// ======================================================
// Rôle.
// ----
// Indique si une carte a déjà été utilisée dans au moins
// une annonce (présence d’un tableau non vide dans card.declared).
//
// Étapes.
// -------
// 1) Vérifie la présence de la propriété "declared" sur la carte.
// 2) Teste si c.declared est un tableau contenant au moins un élément.
// 3) Retourne true si la carte est déjà utilisée dans une annonce.
//
// Paramètres.
// -----------
// - card : objet représentant une carte (peut être null ou partiel).

function isDeclared(card) {
  if (!card || !has(card, "declared")) return false;
  const d = card.declared;
  return Array.isArray(d) && d.length > 0;
}