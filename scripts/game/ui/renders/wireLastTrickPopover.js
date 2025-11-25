// ======================================================
// ============  Popover “Dernier pli” (wire)  ============
// ======================================================
// Rôle.
// ----
// Afficher un popover “Dernier pli” aligné sur l’icône/stack des plis, avec les
// deux dernières cartes du pli le plus récent, en reprenant le style de tes
// popovers de totaux d’annonces.
//
// Étapes.
// -------
// 1) Générer le contenu (titre + <ul> avec les deux cartes du dernier pli).
// 2) Ouvrir le popover, le positionner par rapport au tas, et différer l’attache
//    du gestionnaire “click” document pour permettre l’ouverture sans fermeture immédiate.
// 3) Fermer le popover au clic en dehors ou au toggle sur l’ancre.
//

function wireLastTrickPopover(container, anchorImg) {
  let pop = null;
  let docHandler = null;

  // Construit le contenu du popover avec les deux cartes du dernier pli.
  const renderContent = (box) => {
    const tP = S.trickPlayer ?? [];
    const tC = S.trickComputer ?? [];
    const lastTwo = (S.playFirst === "player" ? tP : tC).slice(-2);

    box.innerHTML = `
      <h4>Dernier pli</h4>
      <ul class="trick_list"></ul>
    `;
    const ul = box.querySelector(".trick_list");
    lastTwo.forEach(c => ul.append(cardNode(c, "trick_last-card card")));
  };

  // Ouvre et positionne le popover par rapport à l’image d’ancrage.
  const open = () => {
    close(); // Sécurité: on ferme une éventuelle instance déjà ouverte.

    const parent = container.closest(".trick-piles") || container;
    const aRect  = anchorImg.getBoundingClientRect();
    const pRect  = parent.getBoundingClientRect();

    pop = document.createElement("div");
    pop.className = "lasttrick-popover decl-totals-popover";
    pop.style.left = (aRect.left - pRect.left + aRect.width / 2) + "px";
    pop.style.top  = (aRect.bottom - pRect.top + 8) + "px";
    pop.style.transform = "translateX(-50%)";

    renderContent(pop);
    parent.appendChild(pop);

    // Ajoute le handler de fermeture “clic extérieur” après le cycle d’ouverture.
    setTimeout(() => {
      docHandler = (e) => {
        const clickedInside = pop && pop.contains(e.target);
        const clickedAnchor = anchorImg.contains(e.target) || container.contains(e.target);
        if (clickedAnchor) return;         // Laisse l’ancre gérer son propre toggle.
        if (!clickedInside) close();        // Ferme si clic hors popover.
      };
      document.addEventListener("click", docHandler, { capture: true });
    }, 0);
  };

  // Ferme et nettoie le popover.
  const close = () => {
    if (pop && pop.parentNode) pop.parentNode.removeChild(pop);
    pop = null;

    if (docHandler) {
      document.removeEventListener("click", docHandler, { capture: true });
      docHandler = null;
    }
  };

  // Toggle sur l’ancre: clic répété pour ouvrir/fermer.
  anchorImg.onclick = (ev) => {
    ev.stopPropagation();
    if (pop) close(); else open();
  };
}