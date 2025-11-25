// ======================================================
// ============  Rendu des plis (sprite + overlay)  ============
// ======================================================
// Rôle.
// ----
// Afficher le compteur visuel des plis remportés sous forme de sprite,
// puis câbler l’overlay “Dernier pli” et le bouton de la mini-bar.
//
// Étapes.
// -------
// 1) Calculer le nombre de plis à partir des piles de cartes (player/computer).
// 2) Déterminer le sprite pair le plus proche (trick2..trick12) ou rien si 0 pli.
// 3) Utiliser un cache de signature pour éviter les rerendus inutiles.
// 4) Insérer l’image, câbler le popover/overlay et le bouton mini-bar.
//
function renderTricks() {
  const stacks = $("#trick-stacks");
  if (!stacks) return;

  // 1) Comptage des plis.
  const totalTrickCards = (S.trickPlayer?.length ?? 0) + (S.trickComputer?.length ?? 0);
  const trickCount = Math.floor(totalTrickCards / 2);

  // 2) Choix du sprite pair (2..12).
  const evenBucket = Math.min(12, Math.max(2, Math.ceil(trickCount / 2) * 2));
  const sprite = trickCount > 0 ? `./images/trick${evenBucket}.svg` : null;

  // 3) Cache de rendu.
  const cacheKey = `tricks-sprite:${sprite || "none"}:${trickCount}`;
  if (renderCache.get("tricksSprite") === cacheKey) return;
  renderCache.set("tricksSprite", cacheKey);

  clear(stacks);

  // 4) Insertion et wiring.
  if (sprite) {
    const img = el("img", {
      class: "trick_img",
      src: sprite,
      alt: `${trickCount} pli${trickCount > 1 ? "s" : ""}.`
    });
    stacks.append(img);
    wireLastTrickPopover(stacks, img);

    const showTrickBtn = document.getElementById("showtrick");
    if (showTrickBtn && !showTrickBtn.dataset.bound) {
      showTrickBtn.dataset.bound = "1";
      showTrickBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // Évite une fermeture immédiate du popover.
        openLastTrickOverlay();
      });
    }
  }
}