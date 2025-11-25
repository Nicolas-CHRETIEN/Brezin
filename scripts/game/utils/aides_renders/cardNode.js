// ======================================================
// ============  Rendu d’une carte ou placeholder  ============
// ======================================================
// Rôle.
// ----
// Crée dynamiquement un nœud DOM représentant une carte du jeu :  
// soit une image réelle, soit une vignette vide si aucune carte fournie.
//
// Étapes.
// -------
// 1) Si card est null/undefined → retourne un <div> vide avec classes card--empty.
// 2) Sinon → crée un <img> avec src, alt et classes appropriées.
// 3) Retourne le nœud généré.
//
// Paramètres.
// -----------
// - card : objet carte { name, svg, ... } ou null pour une case vide.
// - cls  : classes CSS à appliquer (défaut "card").

function cardNode(card, cls = "card") {
  if (!card) return el("div", { class: `${cls} card--empty` });
  return el("img", { class: cls, src: card.svg, alt: card.name });
}