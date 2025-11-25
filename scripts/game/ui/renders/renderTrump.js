// ======================================================
// ============  Rendu de la carte d’atout  ============
// ======================================================
// Rôle.
// ----
// Afficher la carte d’atout actuelle dans son emplacement (#trump-card).
// - Si aucun atout n’est défini → zone vide.
// - Si un atout est défini → affichage via `cardNode()`.
// - Utilise un cache pour éviter les rerendus inutiles.
//
// Étapes.
// -------
// 1) Vérifie la présence du conteneur et calcule une clé de cache unique.
// 2) Si la clé est identique à la précédente, on ne rerend pas.
// 3) Vide le conteneur et ajoute la carte d’atout actuelle.
//
function renderTrump() {
  const slot = $("#trump-card");
  if (!slot) return;

  const key = sig(S.trump ?? null);
  if (renderCache.get("trump") === key) return;
  renderCache.set("trump", key);

  clear(slot);
  if (S.trump?.svg) {
    slot.append(cardNode(S.trump, "trump_img card"));
  }
}
