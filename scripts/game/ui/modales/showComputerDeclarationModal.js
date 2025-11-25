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

    // --- Réaction de l’IA selon le résultat / gain ---
        
    BDD();
    let gainP1 = 0;
    let gainP2 = 0;

    const decl = S.score?.lastDeclaration;

    if (Array.isArray(decl) && decl.length > 0) {
    const gain = decl[0]?.gain ?? 0;

    if (S.playFirst === "player") gainP1 += gain;
    else gainP2 += gain;
    }
    const win   = S.score.player1 + gainP1 > S.score.player2 + gainP2;
    let reaction = [];
    if (S.score.lastDeclaration.gain >= 100) { // Si l'annonce est forte.
        if (!win) { // Que l'IA gagne.
          reaction = IAReaction("OAForteV");
        }
        if (win) { // Que l'IA perd.
          reaction = IAReaction("OAForteD");
        }
    } else { // Si l'annonce est faible.
        if (!win) { // Que l'IA gagne.
          reaction = IAReaction("OAFaibleV");
        }
        if (win) { // Que l'IA perd.
          reaction = IAReaction("OAFaibleD");
        }
    }
    
    setAiEmotion(reaction[0], reaction[1]);

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
            
            
        }
    });
    applyAuroraTheme();
}