/* ======================================================
   ==============  Audio UI (pywebview)  ===============
   - Scènes : 'home' | 'rules' → musicAccueil ; 'game' → musicJeu
   - Volumes séparés musique / sfx (persistés)
   - Crossfade doux entre pistes (configurable)
   - Bouton btnMusicToggle = MUTE GLOBAL (musique + SFX)
   ====================================================== */

(function(){
  const aAccueil = document.getElementById('musicAccueil');
  const aJeu     = document.getElementById('musicJeu');

  // --- Réglages
  const XFADE_SEC = 0.8; // durée de fondu entre pistes (0 pour couper net)

  // --- État & prefs
  const LS_MUSIC = 'brezin:vol:music';
  const LS_SFX   = 'brezin:vol:sfx';
  let musicVol   = parseFloat(localStorage.getItem(LS_MUSIC) || '0.2');
  let sfxVol     = parseFloat(localStorage.getItem(LS_SFX)   || '0.3');
  let current    = aAccueil;         // piste courante
  let wanted     = 'home';           // scène souhaitée
  let masterMuted = false;           // ← MUTE GLOBAL (musique + SFX)

  // --- UI (si tu as gardé le petit panneau)
  const rngMusic = document.getElementById('rngMusic');
  const rngSfx   = document.getElementById('rngSfx');
  const btnTog   = document.getElementById('btnMusicToggle');
  const btnMute  = document.getElementById('btnMusicMute');

  // --- Helpers
  const clamp01 = v => Math.min(1, Math.max(0, Number(v)||0));
  const safePlay = (el) => { const p = el.play(); if (p?.catch) p.catch(()=>{}); return p; };

  function applyMusicVolume(v){
    musicVol = clamp01(v);
    // si masterMuted, on ne change pas le volume audible,
    // la musique restera muette tant que masterMuted = true
    aAccueil.volume = (!masterMuted && current === aAccueil) ? musicVol : 0;
    aJeu.volume     = (!masterMuted && current === aJeu)     ? musicVol : 0;
    localStorage.setItem(LS_MUSIC, String(musicVol));
  }

  function applySfxVolume(v){
    sfxVol = clamp01(v);
    localStorage.setItem(LS_SFX, String(sfxVol));
  }

  function crossfade(next){
    if (current === next){
      // Même piste : relance si en pause et pas mute global
      if (!masterMuted && current.paused) { 
        current.volume = musicVol; 
        safePlay(current); 
      }
      return;
    }
    // Prépare la piste suivante
    next.currentTime = 0;
    next.loop = true;
    next.volume = masterMuted ? 0 : 0; // sera monté uniquement si pas mute

    if (!masterMuted) safePlay(next);

    if (XFADE_SEC <= 0){
      current.pause();
      current = next;
      current.volume = masterMuted ? 0 : musicVol;
      return;
    }

    // Fondu linéaire
    const steps = 20;
    const stepMs = (XFADE_SEC * 1000) / steps;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      const t = i/steps;

      const targetCur = masterMuted ? 0 : musicVol * (1 - t);
      const targetNxt = masterMuted ? 0 : musicVol * t;

      current.volume = targetCur;
      next.volume    = targetNxt;

      if (i >= steps){
        clearInterval(iv);
        current.pause();
        current.volume = 0;
        current = next;
        current.volume = masterMuted ? 0 : musicVol;
        if (!masterMuted) safePlay(current);
      }
    }, stepMs);
  }

  // --- API scène publique
  function setScene(scene){
    wanted = (scene === 'game') ? 'game' : (scene === 'rules' ? 'rules' : 'home');
    const next = (wanted === 'game') ? aJeu : aAccueil;
    crossfade(next);
  }

  // --- SFX simple (Audio éphémère)
  function playSfx(file){
    // si le mute global est activé, on ne joue aucun bruitage
    if (masterMuted) return;

    const a = new Audio(`./sons/bruitages/${file}`);
    a.volume = sfxVol;
    a.play().catch(()=>{});
  }

  // --- (Optionnel) boutons du mini-panneau
  if (rngMusic){
    rngMusic.value = musicVol;
    rngMusic.addEventListener('input', e => applyMusicVolume(e.target.value));
  }
  if (rngSfx){
    rngSfx.value = sfxVol;
    rngSfx.addEventListener('input',   e => applySfxVolume(e.target.value));
  }

  // btnMusicToggle → MUTE GLOBAL musique + SFX
  if (btnTog){
    btnTog.addEventListener('click', () => {
      masterMuted = !masterMuted;

      if (masterMuted){
        // coupe immédiatement la musique
        if (!current.paused) current.pause();
        aAccueil.volume = 0;
        aJeu.volume     = 0;
        btnTog.title = "Activer le son";
      } else {
        // réactive la musique courante avec le volume réglé
        current.volume = musicVol;
        safePlay(current);
        btnTog.title = "Couper le son";
      }
    });
  }

  // btnMute → mute uniquement la musique (pas les SFX)
  if (btnMute){
    btnMute.addEventListener('click', () => {
      const newMuted = !current.muted;
      current.muted = newMuted;
      btnMute.textContent = newMuted ? '🔈' : '🔇';
    });
  }

  // --- Init : applique volumes + démarre accueil (pywebview autorise l’autoplay)
  aAccueil.loop = aJeu.loop = true;
  aAccueil.volume = musicVol;
  aJeu.volume     = 0;
  safePlay(aAccueil); // part tout seul si ton pywebview a l’autoplay activé

  // --- Expose l'API globale
  window.BREZIN_AUDIO = {
    setScene,                      // "home" | "rules" | "game"
    startGame: () => setScene('game'),
    endGame:   () => setScene('home'),
    showHome:  () => setScene('home'),
    showRules: () => setScene('rules'),
    setMusicVolume: applyMusicVolume,
    setSfxVolume:   applySfxVolume,
    getSfxVolume:   () => sfxVol,
    playSfx
  };
})();
