function getGameStartMessage() {
    // Déterminer l'IA courante de manière sûre.
    const aiId = getCurrentAIId();                // ex : "Radegonde"
    const aiEvents = DIALOGUE_EVENTS[aiId];       // ex : { GAME_START: [...] }

    // Sécurités :
    if (!aiEvents) {
        console.warn("Aucun événement trouvé pour l’IA :", aiId);
        return "La partie commence !";
    }

    const lines = aiEvents[SITUATION_KEYS.GAME_START];

    if (!lines || !lines.length) {
        console.warn(`Aucun message GAME_START défini pour l’IA ${aiId}`);
        return "En place pour une nouvelle manche !";
    }
    const ctx = buildDialogueContext(); 
    const rawFn   = lines[Math.floor(Math.random() * lines.length)];
    const message = (typeof rawFn === "function") ? rawFn(ctx) : rawFn;
    if (showComments) setAiEmotion("joie", message);
}