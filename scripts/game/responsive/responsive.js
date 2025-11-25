// ======================================================
// ============  Gestion du responsive / overlays  ============
// ======================================================
// Rôle.
// ----
// Gérer la mini barre d’info, l’overlay contextuel (cartes annoncées, dernier pli)
// et les interactions associées (ouverture, fermeture, accessibilité).
//
// Étapes.
// -------
// 1) Initialiser les références DOM et l’overlay “cartes annoncées (ordinateur)”.
// 2) Ouvrir/fermer l’overlay avec un clone de la source demandée.
// 3) Brancher les écouteurs (clic barre, fermeture, ESC).
// 4) Exposer `openLastTrickOverlay()` pour afficher le dernier pli.
//

(() => {
  // 1) Références DOM.
  const PLAYER_PANEL_SEL = ".main_middle-screen";   // Conteneur potentiellement à masquer.
  const DECLARED_SEL     = ".cards-declared-computer"; // Zone “cartes annoncées (ordi)”.
  const BAR_ID           = "mini-info-bar";
  const OVERLAY_ID       = "mini-overlay";
  const OVERLAY_BODY_ID  = "mini-overlay-body";
  const OVERLAY_TITLE_ID = "mini-overlay-title";

  const bar    = document.getElementById(BAR_ID);
  const ov     = document.getElementById(OVERLAY_ID);
  const ovBody = document.getElementById(OVERLAY_BODY_ID);
  const ovTit  = document.getElementById(OVERLAY_TITLE_ID);

  if (!bar || !ov || !ovBody) return;

  // 2) Ouvre l’overlay en clonant la source à l’instant T.
  function openOverlay({ title, sourceSelector, fallbackHTML }) {
    ovBody.innerHTML = "";
    const src = document.querySelector(sourceSelector);

    if (src) {
      const clone = src.cloneNode(true);
      clone.style.maxHeight = "unset";
      clone.style.width = "100%";
      clone.classList.add("overlay-copy");
      ovBody.appendChild(clone);
    } else {
      ovBody.innerHTML = fallbackHTML || "<p style='margin:8px 0;color:#6b7280'>Aucun contenu disponible pour le moment.</p>";
    }

    if (ovTit) ovTit.textContent = title || "Aperçu.";

    const panel = ov.querySelector(".mini-overlay_panel");
    if (panel) {
      panel.classList.remove("left", "right", "centered");
      panel.style.setProperty("--overlay-top", ((document.querySelector(".mini-info-bar")?.offsetHeight) || -19) + "px");
      panel.classList.add("left"); // Cartes annoncées = gauche.
    }

    ov.setAttribute("aria-hidden", "false");
    ov.querySelector(".mini-overlay_close")?.focus();
  }

  function closeOverlay() {
    ov.setAttribute("aria-hidden", "true");
    ovBody.innerHTML = "";
  }

  // 3) Clics sur la barre d’info.
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".mini-info-btn");
    if (!btn) return;
    const target = btn.dataset.target;
    if (target === "decl") {
      openOverlay({
        title: "Cartes annoncées (ordinateur).",
        sourceSelector: DECLARED_SEL,
        fallbackHTML: "<p style='margin:8px 0;color:#6b7280'>Aucune annonce pour l’instant.</p>"
      });
    }
  });

  // 3) Fermeture overlay (croix / backdrop / ESC).
  ov.addEventListener("click", (e) => {
    if (e.target.dataset.close === "1") closeOverlay();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && ov.getAttribute("aria-hidden") === "false") closeOverlay();
  });
})();

// 4) Overlay “Dernier pli”.
function openLastTrickOverlay() {
  const ov     = document.getElementById("mini-overlay");
  const ovBody = document.getElementById("mini-overlay-body");
  const ovTit  = document.getElementById("mini-overlay-title");
  if (!ov || !ovBody) return;

  ovBody.innerHTML = "";
  if (ovTit) ovTit.textContent = "Dernier pli.";

  // Récupère les deux dernières cartes du dernier joueur à avoir commencé.
  const tP = Array.isArray(S?.trickPlayer)   ? S.trickPlayer   : [];
  const tC = Array.isArray(S?.trickComputer) ? S.trickComputer : [];
  const lastTwo = (S?.playFirst === "player") ? tP.slice(-2) : tC.slice(-2);

  const box = document.createElement("div");
  box.className = "lastrick-overlay-box";
  box.innerHTML = `<h4>Dernier pli</h4><ul class="trick_list"></ul>`;
  const ul = box.querySelector(".trick_list");

  if (lastTwo.length) {
    if (typeof window.cardNode === "function") {
      lastTwo.forEach(c => ul.append(window.cardNode(c, "trick_last-card card")));
    } else {
      lastTwo.forEach(c => {
        const li = document.createElement("li");
        li.style.listStyle = "none";
        const img = new Image();
        img.className = "trick_last-card card";
        img.src = c?.svg?.startsWith("images/") ? c.svg : `images/${c?.svg || ""}`;
        img.alt = c?.name || c?.rank || "";
        li.appendChild(img);
        ul.appendChild(li);
      });
    }
  } else {
    ul.innerHTML = `<li style="list-style:none;margin:8px 0;color:#6b7280">Aucun pli n’a encore été joué.</li>`;
  }

  ovBody.appendChild(box);

  const panel = ov.querySelector(".mini-overlay_panel");
  if (panel) {
    panel.classList.remove("left", "right", "centered");
    panel.style.setProperty("--overlay-top", ((document.querySelector(".mini-info-bar")?.offsetHeight) || 56) + "px");
    panel.classList.add("right"); // Dernier pli = droite.
  }

  ov.setAttribute("aria-hidden", "false");
  ov.querySelector(".mini-overlay_close")?.focus();
}