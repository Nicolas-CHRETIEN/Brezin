// ======================================================
// ============  Renderer générique de cartes  ============
// ======================================================
// Rôle.
// ----
// Rendre dans un conteneur donné une liste de cartes (objets du jeu),
// en utilisant la même logique graphique que `cardNode()`.
// Vide d'abord le conteneur avant de réinsérer les cartes.
//
// Paramètres.
// -----------
// root  : élément DOM cible.
// cards : tableau d'objets carte à afficher.
//
function renderCardsInto(root, cards = []) {
  if (!root) return;

  clear(root);

  for (const c of cards) {
    const img = cardNode(c, "card");               // rendu standard d'une carte
    img.dataset.number = c.number ?? c.name ?? ""; // pour debug ou traçage
    root.appendChild(img);
  }
}