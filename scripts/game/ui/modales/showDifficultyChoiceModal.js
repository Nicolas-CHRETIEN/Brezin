// ======================================================
// ============  Modale de choix de difficulté  ============
// ======================================================
// Rôle.
// ----
// Afficher une modale proposant les niveaux de difficulté et appliquer le choix
// de l’utilisateur, avec focalisation initiale et fermeture via Échap pour l’accessibilité.
//
// Étapes.
// -------
// 1) Ne rien faire si la modale est déjà ouverte ou si l’étape n’est pas “choiceDifficulty”.
// 2) Construire les boutons de difficulté avec leur libellé et sous-texte.
// 3) Afficher la modale, appliquer le thème, gérer focus et fermeture via Échap.
//

function showDifficultyChoiceModal() {
  // 1) Garde-fous d’ouverture.
  const modalRoot = $("#modal-root");
  if (S.stage !== "choiceDifficulty" || modalRoot?.classList.contains("modal-root--open")) return;

  // 2) Fabrique un bouton de difficulté avec personnage SVG
  const makeDiff = (label, sub, difficulty, svgName) =>
    el(
      "button",
      {
        class: "diff-btn",
        onclick: () => {
          closeModal();
          listenerChoiceDifficulty(difficulty);
          renderGame();
        }
      },
      // --- icône SVG du personnage ---
      el("img", {
        class: "diff-avatar",
        src: `images/adversaires/${svgName}.svg`,
        alt: svgName
      }),

      // --- textes ---
      el(
        "span",
        { class: "txt" },
        el("span", { class: "t" }, label),
        el("span", { class: "s" }, sub)
      )
    );

  // 3) Affichage de la modale
  showModal({
    title: el("div", {}, "Choisissez la difficulté"),
    content: el(
      "div",
      { class: "difficulty-modal" },
      el("div", { class: "diff-help" }, "Plusieurs joueurs veulent faire une partie."),
      el(
        "div",
        { class: "diff-grid" },

        // ===== correspondance difficulté → personnage =====
        makeDiff("Radagonde",    "Radagonde est une vielle guérisseuse.\nElle parle toute seule parfois, ce qui peut lui jouer des tours.",     "easy",   "Radegonde"),
        makeDiff("Perrot",    "Perrot est un paysant berrichon.\nIl joue depuis sa plus tendre enfance, mais n'a que peu de temps pour lui à force de travailler au champ.",   "normal", "Perrot"),
        makeDiff("Jehanne", "Jehanne est une adversaire redoutable.\nElle est connue dans tous les salons de thé comme une très grande joueuse.", "hard",   "Jehanne"),
        makeDiff("Andry",    "Le grand, le célèbre Andry le terrible!\nIl vous faudra du courage et de la chance pour affronter cette légende du Brézin.",  "expert", "Andry")
      )
    ),
    actions: [el("button", { class: "modal_btn", onclick: closeModal }, "Fermer")]
  });

  applyAuroraTheme();

  // Focus initial + Échap
  const firstBtn = $(".diff-btn");
  firstBtn?.focus({ preventScroll: true });
  const onKey = (e) => {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", onKey);
    }
  };
  document.addEventListener("keydown", onKey);
}
