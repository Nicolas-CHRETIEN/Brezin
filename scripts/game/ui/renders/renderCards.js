// ======================================================
// ============  Rendu générique des cartes  ============
// ======================================================
// Rôle.
// ----
// Insérer dynamiquement un ensemble de cartes (objets du jeu) dans un
// conteneur DOM désigné. Chaque carte est rendue via `cardNode()`.
//
// Paramètres.
// -----------
// containerSel : string   → Sélecteur CSS du conteneur cible.
// cards        : array    → Liste d’objets cartes à afficher.
//
// Détails.
// --------
// - Vide le conteneur avant d’ajouter les nouvelles cartes.
// - Chaque carte reçoit une classe "card" + data-number pour debug/inspection.
//
function renderCards(containerSel, cards = []) {
  const root = document.querySelector(containerSel);
  if (!root) return;

  clear(root); // supprime tout contenu existant

  for (const c of cards) {
    // Création du nœud visuel via cardNode()
    const cardEl = cardNode(c, "card");

    // Stocke un identifiant utile pour le debug (numéro ou nom)
    cardEl.dataset.number = c.number ?? c.name ?? "";

    root.appendChild(cardEl);
  }
}
