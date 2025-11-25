// ======================================================
// ============  Popover des totaux d'annonces  ============
// ======================================================
// Rôle.
// ----
// Afficher sous le score un popover récapitulant les annonces (joueur et ordinateur)
// avec leurs totaux, en alternant ouverture/fermeture au clic.
//
// Étapes.
// -------
// 1) Cibler le conteneur et empêcher un double câblage des événements.
// 2) Préparer les utilitaires (accès listes, somme, libellés, gabarit HTML).
// 3) Construire/ouvrir le popover à la demande, avec positionnement relatif.
// 4) Fermer le popover au clic extérieur ou au second clic sur la zone.
//

function renderDeclarationTotals() {
  const container = document.querySelector(".score-normal_declarations-container");
  if (!container || container.dataset.totalsWired === "1") return;
  container.dataset.totalsWired = "1";

  let popover = null;

  // --- Utilitaires. ---
  const list    = (arr) => Array.isArray(arr) ? arr : [];
  const decls   = () => ({ player: list(S.score.declarationsListP1), computer: list(S.score.declarationsListP2) });
  const sum     = (a) => a.reduce((t, d) => t + (+d.gain || 0), 0);
  const getName = (d) => d.name || d.rank || "Annonce";

  const mkSection = (title, items) => `
    <div class="row head">
      <div class="cell left"><strong>${title}</strong></div>
      <div class="cell right"><strong>${sum(items)}</strong></div>
    </div>
    ${
      items.length
        ? items.map(d => `
            <div class="row">
              <div class="cell left">${getName(d)}</div>
              <div class="cell right">${+d.gain || 0}</div>
            </div>
          `).join("")
        : `
          <div class="row">
            <div class="cell left empty">Aucune annonce</div>
            <div class="cell right">0</div>
          </div>
        `
    }
  `;

  // --- Ouvrir / fermer. ---
  const openPopover = () => {
    closePopover();

    const { player, computer } = decls();
    popover = document.createElement("div");
    popover.className = "decl-totals-popover decl-totals--with-list";

    const rect = container.getBoundingClientRect();
    Object.assign(popover.style, {
      left: `${rect.width / 2}px`,
      top: "100%",
      transform: "translate(-50%, 8px)"
    });

    popover.innerHTML = `
      <h4>Totaux des annonces</h4>
      <div class="section">${mkSection("Ordinateur", computer)}</div>
      <div class="section">${mkSection("Joueur", player)}</div>
    `;

    container.appendChild(popover);
    setTimeout(() => document.addEventListener("click", outsideHandler, { capture: true }), 0);
  };

  const closePopover = () => {
    if (popover?.parentNode) popover.parentNode.removeChild(popover);
    popover = null;
    document.removeEventListener("click", outsideHandler, { capture: true });
  };

  const outsideHandler = (e) => {
    if (!popover) return;
    if (!container.contains(e.target)) closePopover();
  };

  // --- Toggle au clic sur la zone dédiée. ---
  container.addEventListener("click", (e) => {
    if (popover && popover.contains(e.target)) return;
    popover ? closePopover() : openPopover();
  });
}