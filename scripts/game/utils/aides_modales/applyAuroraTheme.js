// ======================================================
// ============  Application du thème “Aurora” (modale)  ============
// ======================================================
// Rôle.
// ----
// Applique le thème visuel "aurora" à la boîte modale en cours,
// ajuste le bouton principal et gère le focus pour l’accessibilité.
//
// Étapes.
// -------
// 1) Ajoute l’attribut data-theme="aurora" à .modal_box.
// 2) Sélectionne le bouton principal (.modal_actions .modal_btn).
// 3) Lui ajoute la classe “primary”, un aria-label lisible, puis le focus sans défilement.

function applyAuroraTheme() {
  const box = document.querySelector(".modal_box");
  if (box) box.setAttribute("data-theme", "aurora");

  const ok = document.querySelector(".modal_actions .modal_btn");
  ok?.classList.add("primary");
  ok?.setAttribute("aria-label", ok.textContent?.trim() || "OK");
  ok?.focus({ preventScroll: true });
}