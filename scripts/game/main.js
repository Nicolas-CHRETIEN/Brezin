// ======================================================
// ==============   Initialisation du jeu   ==============
// ======================================================
//
// But du fichier.
// ----------------
// Charger et initialiser le jeu Brézin, gérer la navigation entre
// les écrans principaux (accueil, règles, jeu), et lancer le rendu
// du jeu lors du démarrage.
//
// Ce que fait le script.
// ----------------------
// 1) Définit un chargeur de scripts externe pour importer des fichiers JS à la volée.
// 2) Initialise le jeu via `listenerInit()` et `renderGame()`.
// 3) Gère les clics sur les boutons de navigation (écrans Home, Rules, Game).
// 4) Définit l’écran actif par défaut au chargement.
//

// 1) Chargement dynamique d’un script JS.
function loadScript(src){
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.async = false;
        s.onload = resolve;
        s.onerror = () => reject(new Error("Échec de chargement du script " + src));
        document.body.appendChild(s);
    });
}

// 2) Chargement et démarrage du jeu.
async function loadGameOnce(){
    listenerInit(); // Initialise les écouteurs d’événements du jeu.
    renderGame();   // Lance le rendu initial du plateau.
    BREZIN_AUDIO.startGame();
}

// 3) Gestion des clics de navigation (boutons avec data-goto).
document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-goto]');
    if (!btn) return;

    const target = btn.getAttribute('data-goto');
    if (target === 'game'){
        await loadGameOnce();  // Charge et initialise le jeu.
        setActive('game');     // Affiche l’écran du jeu.
    } else if (target === 'rules'){
        setActive('rules');    // Affiche l’écran des règles.
    } else {
        setActive('home');     // Retourne à l’accueil.
    }
});

// 4) Définition de l’écran actif par défaut.
setActive('home');
