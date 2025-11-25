// ======================================================
// ============  Rendu visuel de la pioche  ============
// ======================================================
// Rôle.
// ----
// Afficher/masquer la zone du talon et adapter l’image de pile (#stack-img)
// selon le nombre de cartes restantes, mappé sur 10 niveaux (stack1..stack10).
//
// Étapes.
// -------
// 1) Récupérer les éléments du DOM (#stack_div, #stack-img, #stack-header).
// 2) Cacher entièrement la zone si la pioche est vide, sinon l’afficher.
// 3) Mémoriser la taille max rencontrée pour un calcul de niveau proportionnel.
// 4) Mettre à jour l’illustration et l’attribut alt si le niveau change.
//
function renderStackPile() {
  const $q = (sel) => (typeof $ === "function" ? $(sel) : document.querySelector(sel));
  const img    = $q("#stack-img");
  const holder = $q("#stack_div");
  const header = $q("#stack-header");
  if (!holder || !img) return;

  const count = Number(S?.stack?.length ?? 0);

  // Pioche vide : masquer et réinitialiser le niveau pour de futurs affichages.
  if (count <= 0) {
    if (header) header.style.display = "none";
    holder.style.display = "none";
    S._lastStackLevel = 0;
    return;
  }

  // Pioche non vide : garantir l’affichage.
  if (header) header.style.display = "";
  holder.style.display = "";

  // Taille max observée pour un mapping progressif 10 → 1.
  S._stackMax = Math.max(S?._stackMax || 0, count);
  const max = Math.max(1, S._stackMax);

  // Niveau proportionnel arrondi au supérieur, borné entre 1 et 10.
  let level = Math.ceil((count / max) * 10);
  level = Math.max(1, Math.min(10, level));

  // Pas de mise à jour si le niveau est inchangé.
  if (S._lastStackLevel === level) return;
  S._lastStackLevel = level;

  // Mise à jour de l’image et du texte alternatif.
  img.src = `./images/stack${level}.svg`;
  img.alt = `Pioche (${count} carte${count > 1 ? "s" : ""}).`;
}