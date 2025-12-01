/* ======================================================
   ==============  Audio UI (pywebview)  ===============
   - Gère les musiques d’accueil et de jeu (2 pistes <audio>)
   - Gère des volumes séparés musique / bruitages, avec sauvegarde locale
   - Propose un crossfade doux entre les scènes (home / rules / game)
   - Fournit un MUTE GLOBAL (musique + SFX) via btnMusicToggle
   - Expose une petite API JS : window.BREZIN_AUDIO.{setScene,playSfx,...}
   ====================================================== */

(function () {
  // ------------------------------------------------------
  // Références DOM sur les deux pistes musicales
  // ------------------------------------------------------
  const aAccueil = document.getElementById("musicAccueil");
  const aJeu     = document.getElementById("musicJeu");

  // ------------------------------------------------------
  // Réglages généraux
  // ------------------------------------------------------
  const XFADE_SEC = 0.8; // durée du crossfade entre pistes (0 = switch sec)

  // Clés de stockage pour les volumes
  const LS_MUSIC = "brezin:vol:music";
  const LS_SFX   = "brezin:vol:sfx";

  // Volumes courants (avec valeurs par défaut raisonnables)
  let musicVol = parseFloat(localStorage.getItem(LS_MUSIC) || "0.2");
  let sfxVol   = parseFloat(localStorage.getItem(LS_SFX)   || "0.3");

  // Piste actuellement jouée + scène logique
  let current     = aAccueil;
  let wanted      = "home";
  let masterMuted = false;   // MUTE global : coupe musique + SFX

  // ------------------------------------------------------
  // Mini-panneau UI (sliders + boutons)
  // ------------------------------------------------------
  const rngMusic = document.getElementById("rngMusic");
  const rngSfx   = document.getElementById("rngSfx");
  const btnTog   = document.getElementById("btnMusicToggle"); // MUTE global
  const btnMute  = document.getElementById("btnMusicMute");   // mute musique seule

  // ------------------------------------------------------
  // Helpers utilitaires simples
  // ------------------------------------------------------
  const clamp01 = v => Math.min(1, Math.max(0, Number(v) || 0));

  // Lecture “safe” pour éviter les erreurs d’autoplay dans certains contextes
  const safePlay = (el) => {
    const p = el.play();
    if (p?.catch) p.catch(() => {});
    return p;
  };

  // ------------------------------------------------------
  // Gestion du volume musique
  // ------------------------------------------------------
  function applyMusicVolume(v) {
    musicVol = clamp01(v);

    // Si MUTE global activé, on garde les volumes audio à 0.
    aAccueil.volume = (!masterMuted && current === aAccueil) ? musicVol : 0;
    aJeu.volume     = (!masterMuted && current === aJeu)     ? musicVol : 0;

    localStorage.setItem(LS_MUSIC, String(musicVol));
  }

  // ------------------------------------------------------
  // Gestion du volume des SFX (bruitages)
  // ------------------------------------------------------
  function applySfxVolume(v) {
    sfxVol = clamp01(v);
    localStorage.setItem(LS_SFX, String(sfxVol));
  }

  // ------------------------------------------------------
  // Crossfade entre deux pistes (accueil ↔ jeu)
  // ------------------------------------------------------
  function crossfade(next) {
    // Même piste demandée : on relance simplement si pause et pas de mute global.
    if (current === next) {
      if (!masterMuted && current.paused) {
        current.volume = musicVol;
        safePlay(current);
      }
      return;
    }

    // Préparation de la piste suivante
    next.currentTime = 0;
    next.loop = true;
    next.volume = 0;

    if (!masterMuted) safePlay(next);

    // Aucun fondu demandé → switch direct
    if (XFADE_SEC <= 0) {
      current.pause();
      current = next;
      current.volume = masterMuted ? 0 : musicVol;
      return;
    }

    // Fondu linéaire sur XFADE_SEC secondes
    const steps  = 20;
    const stepMs = (XFADE_SEC * 1000) / steps;
    let i        = 0;

    const iv = setInterval(() => {
      i++;
      const t = i / steps;

      const targetCur = masterMuted ? 0 : musicVol * (1 - t);
      const targetNxt = masterMuted ? 0 : musicVol * t;

      current.volume = targetCur;
      next.volume    = targetNxt;

      if (i >= steps) {
        clearInterval(iv);
        current.pause();
        current.volume = 0;
        current = next;
        current.volume = masterMuted ? 0 : musicVol;
        if (!masterMuted) safePlay(current);
      }
    }, stepMs);
  }

  // ------------------------------------------------------
  // API de scène : home / rules / game
  // ------------------------------------------------------
  function setScene(scene) {
    // Normalisation de la scène demandée
    wanted = (scene === "game")
      ? "game"
      : (scene === "rules" ? "rules" : "home");

    const next = (wanted === "game") ? aJeu : aAccueil;
    crossfade(next);
  }

  // ------------------------------------------------------
  // Lecture d’un bruitage ponctuel (SFX)
  // ------------------------------------------------------
  function playSfx(file) {
    // MUTE global → aucun SFX ne doit jouer
    if (masterMuted) return;

    const a = new Audio(`./sons/bruitages/${file}`);
    a.volume = sfxVol;
    a.play().catch(() => {});
  }

  // ------------------------------------------------------
  // Wiring du mini-panneau (sliders volumes + boutons)
  // ------------------------------------------------------
  if (rngMusic) {
    rngMusic.value = musicVol;
    rngMusic.addEventListener("input", (e) => applyMusicVolume(e.target.value));
  }

  if (rngSfx) {
    rngSfx.value = sfxVol;
    rngSfx.addEventListener("input", (e) => applySfxVolume(e.target.value));
  }

  // Bouton MUTE GLOBAL (musique + SFX)
  if (btnTog) {
    btnTog.addEventListener("click", () => {
      masterMuted = !masterMuted;

      if (masterMuted) {
        // Coupe immédiatement la musique
        if (!current.paused) current.pause();
        aAccueil.volume = 0;
        aJeu.volume     = 0;
        btnTog.title    = "Activer le son";
      } else {
        // Réactive la piste courante au volume choisi
        current.volume = musicVol;
        safePlay(current);
        btnTog.title = "Couper le son";
      }
    });
  }

  // Bouton mute musique SEULEMENT (laisser SFX actifs)
  if (btnMute) {
    btnMute.addEventListener("click", () => {
      const newMuted = !current.muted;
      current.muted = newMuted;
      // Simple feedback visuel via l’emoji
      btnMute.textContent = newMuted ? "🔈" : "🔇";
    });
  }

  // ------------------------------------------------------
  // Initialisation : boucle d’accueil + volumes par défaut
  // ------------------------------------------------------
  aAccueil.loop = true;
  aJeu.loop     = true;

  aAccueil.volume = musicVol;
  aJeu.volume     = 0;

  // En contexte pywebview, l’autoplay est en général autorisé
  safePlay(aAccueil);

  // ------------------------------------------------------
  // API globale exposée à l’application
  // ------------------------------------------------------
  window.BREZIN_AUDIO = {
    // Gestion des scènes
    setScene,               // "home" | "rules" | "game"
    startGame: () => setScene("game"),
    endGame:   () => setScene("home"),
    showHome:  () => setScene("home"),
    showRules: () => setScene("rules"),

    // Volumes
    setMusicVolume: applyMusicVolume,
    setSfxVolume:   applySfxVolume,
    getSfxVolume:   () => sfxVol,

    // Bruitages ponctuels
    playSfx
  };
})();
