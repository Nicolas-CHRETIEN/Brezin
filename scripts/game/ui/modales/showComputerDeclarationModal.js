/** Modale annonce ordinateur */
function showComputerDeclarationModal({ onOk } = {}) {
    
    if ($("#modal-root")?.classList.contains("modal-root--open")) return;

    const list = S.score?.lastDeclaration;
    if (!Array.isArray(list) || list.length === 0) return;

    // anti-boucle (clé basée sur l'ensemble des annonces)
    const key = `lastDecl:${sig(list)}`;
    if (renderCache.get("shownDecl") === key) return;
    renderCache.set("shownDecl", key);

    // indexer cartes par name pour afficher les visuels
    const allCards = [
    ...(S.handPlayer ?? []), ...(S.handComputer ?? []),
    ...(S.trickPlayer ?? []), ...(S.trickComputer ?? []),
    ...(S.stack ?? []), ...(S.trump ? [S.trump] : [])
    ];
    const byName = Object.fromEntries(allCards.map(c => [c?.name, c]));

    // UI : une section par annonce
    const blocks = list.map(d => {
        const cardsArr = Array.isArray(d.cards) ? d.cards : (d.cards ? [d.cards] : []);
        return el("div", { class: "decl-block" },
            el("div", { class: "decl-block_title" }, `${d.name} (+${d.gain})`),
            el("div", { class: "decl-cards" },
                ...cardsArr.map(cardName => {
                    const card = byName[cardName] || { svg: "images/back.svg", name: cardName };
                    return cardNode(card, "card card--md");
                })
            )
        );
    });

    const reaction = AIGenerateDialogue();
    if (reaction) setAiEmotion(reaction[0], reaction[1]);

    showModal({
        title: list.length > 1 ? "Annonces de l'ordinateur" : "Annonce de l'ordinateur",
        content: el("div", { class: "decl-modal" }, ...blocks),
        actions: [{ label: "OK", id: "ok" }],
        onAction: (id) => { 
            if (id !== "ok") return;

            closeModal();

            // ➜ ENQUEUE CHAQUE annonce (drip +1 par tick)
            for (const d of list) {
                ScoreAnimator.enqueue({ who: "computer", amount: Number(d.gain) || 0, reason: d.name });
            }

            // Evite de les rejouer si la modale est recalculée
            // S.score.lastDeclaration = [];

            onOk?.(); 
            S.stage = "draw";

            // Si l'ordi doit jouer en premier
            if (typeof listenerComputerPlayFirst === "function") {
                listenerComputerPlayFirst();
            }
            
            // Suppreimer l'annonce effectuée pour éviter que buildDialogueContexte l'attribue au prochain appel.
            S.score.lastDeclaration = null;
            S.score.lastDeclaration = [];
            
        }
    });
    applyAuroraTheme();
}