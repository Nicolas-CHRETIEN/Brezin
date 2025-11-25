// ======================================================
// ============  Synchronisation principale (UI)  ============
// ======================================================
// Rôle.
// ----
// Orchestrer un "render" complet de l’interface à partir de l’état global `S`.
// Déclencher les modales contextuelles (choix difficulté, deal, résultat de pli,
// annonces IA) et câbler les boutons d’action si nécessaire.
//
// Étapes.
// -------
// 1) Rendu des zones principales (scores, talon, atout, cartes jouées, annonces, plis, main).
// 2) Modales de contexte : choix de difficulté et distribution des cartes.
// 3) Modale de résultat de pli avec callback d’enchaînement.
// 4) Modale d’annonces ordinateur si présente.
// 5) Câblage paresseux des boutons d’action (draw/play/declare/pass).
// 6) Nettoyage des annonces IA en fin de partie et popover des totaux.
//
function renderGame() {
  // 1) Renders de base (zones).
  renderScores();
  renderStack();
  renderTrump();
  renderPlayed();
  renderDeclaredZones();
  renderTricks();
  renderHand();

  // 2) Modales “de contexte”.
  showDifficultyChoiceModal({
    onDifficulty: (level) => {
      document.dispatchEvent(new CustomEvent("ui:setDifficulty", { detail: { difficulty: level } }));
    },
    onDeal: () => {
      document.dispatchEvent(new CustomEvent("ui:deal"));
    }
  });

  (function showDealModal() {
    const modalRoot = $("#modal-root");
    const modalOpen = modalRoot?.classList.contains("modal-root--open");
    if (S.stage !== "deal" || modalOpen) return;

    const onDealClick = () => {
      closeModal();
      listenerDeal();
      renderGame();
    };

    showModal({
      title: "Distribuer les cartes",
      content: el("div", { class: "deal-modal" },
        el("div", { class: "deal-grid" },
          el("button", { class: "btn btn-primary", onclick: onDealClick }, "Distribuer")
        )
      ),
      actions: []
    });
    applyAuroraTheme();
  })();

  // 3) Modale “résultat de pli”.
  showTrickModal({
    onOk: () => {
      document.dispatchEvent(new CustomEvent("ui:trickOk"));
    }
  });

  // 4) Modale “annonce ordinateur”.
  if (S.score?.lastDeclaration?.length && S.playFirst === "computer") {
    showComputerDeclarationModal({
      onOk: () => {
        document.dispatchEvent(new CustomEvent("ui:declOk"));
      }
    });
  }

  // 5) Boutons d’action.
  const btnDraw = $("#btn-draw");
  if (btnDraw && !btnDraw.dataset.bound) {
    btnDraw.dataset.bound = "1";
    btnDraw.addEventListener("click", () => {
      document.dispatchEvent(new CustomEvent("ui:drawClick"));
    });
  }
  const btnPlay = $("#btn-play");
  if (btnPlay && !btnPlay.dataset.bound) {
    btnPlay.dataset.bound = "1";
    btnPlay.addEventListener("click", () => {
      document.dispatchEvent(new CustomEvent("ui:playClick"));
    });
  }
  const btnDeclare = $("#btn-declare");
  if (btnDeclare && !btnDeclare.dataset.bound) {
    btnDeclare.dataset.bound = "1";
    btnDeclare.addEventListener("click", () => {
      document.dispatchEvent(new CustomEvent("ui:declareClick"));
    });
  }
  const btnPass = $("#btn-pass");
  if (btnPass && !btnPass.dataset.bound) {
    btnPass.dataset.bound = "1";
    btnPass.addEventListener("click", () => {
      document.dispatchEvent(new CustomEvent("ui:passClick"));
    });
  }

  // 6) Fin de partie : purge des annonces IA, sinon popover totaux.
  if ((S.stack?.length ?? 0) === 0) {
    const root = document.getElementById("declared-computer");
    if (root) root.innerHTML = "";
    renderCache?.delete?.("declZonesComputer");
    return;
  }

  renderDeclarationTotals();
}