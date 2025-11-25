// ======================================================
// ============  Séparation main / cartes annoncées  ============
// ======================================================
// Rôle.
// ----
// Divise la main d’un joueur en deux groupes :
// - cartes encore visibles (non déclarées),
// - cartes déjà annoncées (déclarées ou figurant dans declaredNames).
//
// Étapes.
// -------
// 1) Initialise deux tableaux : visible et announced.
// 2) Parcourt chaque carte de la main.
// 3) Si la carte est marquée déclarée (isDeclared) ou son nom figure dans declaredNames → announced.
// 4) Sinon → visible.
// 5) Retourne un objet { visible, announced }.
//
// Paramètres.
// -----------
// - hand : tableau d’objets cartes.
// - declaredNames : Set des noms de cartes déjà déclarées.

function partitionHandByAnnouncements(hand = [], declaredNames = new Set()) {
  const visible = [];
  const announced = [];

  for (const c of hand) {
    if (isDeclared(c) || declaredNames.has(c.name)) announced.push(c);
    else visible.push(c);
  }

  return { visible, announced };
}