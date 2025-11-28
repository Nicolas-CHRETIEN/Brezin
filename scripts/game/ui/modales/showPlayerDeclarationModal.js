// ======================================================
// ============  Modale de déclaration (joueur)  ============
// ======================================================
// Rôle.
// ----
// Afficher la liste des annonces possibles du joueur, gérer la sélection
// (règle : plusieurs “7 d’atout” autorisés + au plus une autre annonce), puis
// appliquer les annonces choisies avec animation des points.
//
// Étapes.
// -------
// 1) Conditions d’affichage et préparation des conteneurs UI.
// 2) Construction des boutons d’annonces et gestion du toggle sélection.
// 3) Mise à jour de l’état visuel, affichage conditionnel des onlyWithTrump.
// 4) Validation : application ordonnée des annonces et animation du score.
// 5) Ouverture de la modale et initialisation de l’état visuel.
//

function showPlayerDeclarationModal() {
  // 1) Conditions d’affichage.
  const modalRoot = $("#modal-root");
  if (modalRoot?.classList.contains("modal-root--open")) return;
  if (S.stage !== "declare") return;
  if (S.playFirst !== "player") return;

  const list = S.declarationsAvailablePlayer;
  if (!Array.isArray(list) || list.length === 0) return;

  const isSeven = d => d.rank === "sept d'atout";

  // État local de sélection (indices).
  const selected = new Set();

  // Conteneurs UI.
  const grid = el("div", { class: "decl-grid" });
  const footer = el("div", { class: "decl-footer" });

  // Boutons footer.
  const passBtn = el("button", { class: "btn btn-secondary", type: "button" }, "Passer");
  const validateBtn = el("button", { class: "btn btn-primary", type: "button", disabled: true }, "Valider");
  footer.append(passBtn, validateBtn);

  // 2) Fabrique un bouton qui toggle la sélection.
  function makeButton(decl, i) {
    const label = `${decl.name} (+${decl.gain})`;
    const btn = el("button", { class: "btn decl-btn", type: "button" }, label);

    // Les annonces “onlyWithTrump” sont masquées tant qu’aucun 7 d’atout n’est sélectionné.
    if (decl.onlyWithTrump) {
      btn.classList.add("is-only-with-trump");
      btn.style.display = "none";
    }

    btn.addEventListener("click", () => {
      const already = selected.has(i);

      if (isSeven(decl)) {
        // 7 d’atout cumulables entre eux et avec une autre annonce.
        already ? selected.delete(i) : selected.add(i);
      } else {
        // Un seul non-seven autorisé : on remplace tout non-seven existant.
        for (const idx of Array.from(selected)) {
          if (!isSeven(list[idx])) selected.delete(idx);
        }
        already ? selected.delete(i) : selected.add(i);
      }

      updateButtons(); // Rafraîchit la visibilité et le style des boutons.
    });

    return btn;
  }

  // Instancie les boutons d’annonces.
  const buttons = list.map(makeButton);
  grid.append(...buttons);

  // 3) Visuel / état.
  function updateButtons() {
    const hasSevenSelected = Array.from(selected).some(idx => isSeven(list[idx]));

    // Affiche/masque les annonces “onlyWithTrump” et nettoie une sélection devenue invalide.
    buttons.forEach((b, idx) => {
      const decl = list[idx];
      if (decl.onlyWithTrump) {
        b.style.display = hasSevenSelected ? "" : "none";
        if (!hasSevenSelected && selected.has(idx)) selected.delete(idx);
      }
      b.classList.toggle("is-selected", selected.has(idx));
    });

    // Active/désactive “Valider”.
    validateBtn.disabled = selected.size === 0;
  }

  // --- Helper : animation générique d'annonce ---
  function playDeclarationAnimation(declName, onDone) {
    const modalContent = $(".player-decl-modal");
    if (!modalContent) {
      onDone && onDone();
      return;
    }

    modalContent.innerHTML = "";

    const wrapper = el("div", { class: "decl-anim-wrapper" });
    const title = el("p", { class: "decl-anim-title" }, declName);

    // --- Choix du gif ---
    const t = String(declName || "").toLowerCase();
    let fileName = `${declName}.gif`; // ex : "40 de brézin.gif"
    if (declName === "couple d'atout") fileName = `${declName}_${S.trump.couleur}.gif`;
    if (declName === "deux cent cinquante") fileName = `250${S.trump.couleur}.gif`;

    const img = el("img", {
      src: "./images/gifs/" + encodeURIComponent(fileName),
      alt: declName,
      class: "decl-anim-gif"
    });
    let audio = `${declName}.wav`;
    if (declName === "couple d'atout") audio = `${declName}_${S.trump.couleur}.wav`;
    if (declName === "deux cent cinquante") audio = `250${S.trump.couleur}.wav`;
    playSound(audio);

    wrapper.append(title, img);
    modalContent.appendChild(wrapper);

    // Durée fixe 5 s (à ajuster si besoin)
    setTimeout(() => {
      onDone && onDone();
    }, 4000);
  }


  // 4) Appliquer les annonces sélectionnées avec animation.
  function onValidate() {
    // Ordre d’application : d’abord non-seven, puis les 7 d’atout.
    const indices = Array.from(selected).sort((a, b) => {
      const A = isSeven(list[a]) ? 1 : 0;
      const B = isSeven(list[b]) ? 1 : 0;
      return A - B;
    });

    let newS = S;
    const toAnimate = []; // { amount, name }.

    let mainAnimName = null;    // dernière annonce non-seven
    let lastSevenName = null;   // dernière annonce "7 d'atout" (fallback)
    let mainAnimGain = null;    // gain de l’annonce animée
    let lastSevenGain = null;   // gain associé au dernier 7 d’atout

    for (const idx of indices) {
      const decl = list[idx];
      const before = (newS.score?.player1 ?? 0);

      // Applique l’annonce et récupère l’état à jour.
      const res = playerDeclare(decl, newS);
      newS = res?.Situation ?? newS;

      const after = (newS.score?.player1 ?? before);
      const delta = Math.max(0, (after - before) | 0);
      const fallback = Number(decl?.gain) || 0;
      const amount = delta > 0 ? delta : fallback;

      const name = decl?.name || "Annonce";

      // Mémorise nom + gain pour l’animation principale
      if (isSeven(decl)) {
        lastSevenName = name;
        lastSevenGain = amount;
      } else {
        mainAnimName = name;
        mainAnimGain = amount;
        S.score.lastDeclaration = [decl];
      }

      // Rollback pour laisser l’animation incrémenter le score.
      if (!newS.score) newS.score = {};
      newS.score.player1 = before;

      if (amount > 0) toAnimate.push({ amount, name });
    }

    // S’il n’y a pas d’annonce non-seven, on prend le dernier 7 d’atout
    if (!mainAnimName && lastSevenName) {
      mainAnimName = lastSevenName;
      mainAnimGain = lastSevenGain;
    }

    // Adopte l’état renvoyé par les déclarations (mains, flags, etc.).
    S = newS;

    // Étape suivante selon annonces restantes.
    S.stage = (S.declarationsAvailablePlayer?.length > 0) ? "declare" : "draw";

    const launchScoreAnimations = () => {
      closeModal();
      for (const it of toAnimate) {
        ScoreAnimator.enqueue({ who: "player", amount: it.amount, reason: it.name });
      }
    };

    // Si on a une annonce à animer → on joue son GIF avant la maj du score
    if (mainAnimName) {
      playDeclarationAnimation(mainAnimName, launchScoreAnimations);
    } else {
      // Cas de secours : pas de nom trouvé → comportement classique
      launchScoreAnimations();
    }

    // --- Réaction de l’IA selon le résultat / gain ---
    let gainP1 = 0;
    let gainP2 = 0;

    const decl = S.score?.lastDeclaration;

    if (Array.isArray(decl) && decl.length > 0) {
      const gain = decl[0]?.gain ?? 0;

      if (S.playFirst === "player") gainP1 += gain;
      else gainP2 += gain;
    }
    
    // Attendre la fin de l'animation pour lancer la réaction de l'IA
    setTimeout(() => {
      const reaction = AIGenerateDialogue();
      if (reaction) setAiEmotion(reaction[0], reaction[1]);

      // Suppreimer l'annonce effectuée pour éviter que buildDialogueContexte l'attribue au prochain appel.
      S.score.lastDeclaration = null;
      S.score.lastDeclaration = [];
    }, 4000);

  }


  // Wiring footer.
  passBtn.addEventListener("click", () => {
    S.stage = "draw";
    closeModal();
    renderGame?.();
  });
  validateBtn.addEventListener("click", onValidate);

  // 5) Affiche la modale et initialise l’état visuel.
  showModal({
    title: "Annonces possibles",
    content: el("div", { class: "player-decl-modal" }, grid, footer),
    actions: []
  });
  applyAuroraTheme();
  updateButtons();
}