// ======================================================
// ===================  Effets Sonores  ==================
// ======================================================
// Rôle.
// -----
// Joue un bruitage (SFX) à partir du dossier ./sons/bruitages/,
// en prenant automatiquement en compte le volume SFX défini
// dans le gestionnaire audio global BREZIN_AUDIO (si présent).
//
// Usage.
// ------
// playSound("carte.mp3");
// playSound("annonce.mp3");
// playSound("click.ogg");
//
// Détails.
// --------
// - Création d'un objet Audio éphémère (un nouvel élément <audio>).
// - Réglage du volume selon BREZIN_AUDIO.getSfxVolume(), ou 1 par défaut.
// - Lecture immédiate, sans bloquer l'application.
// - .catch() silencieux : évite les erreurs si le son est introuvable
//   ou si la lecture est bloquée (rare sur pywebview).
//
// Étapes.
// -------
// 1) Vérifier que le nom du fichier est bien fourni.
// 2) Construire dynamiquement le chemin vers le bruitage.
// 3) Appliquer le volume SFX courant (ou fallback).
// 4) Lancer la lecture du son.
// ======================================================

function playSound(name){
    // 1) Aucun nom → on ne fait rien.
    if (!name) return;

    // 2) Construction du chemin (dossier bruitages)
    const audio = new Audio(`./sons/bruitages/${name}`);

    // 3) Volume : priorité au gestionnaire audio global (si présent)
    audio.volume = window.BREZIN_AUDIO
        ? BREZIN_AUDIO.getSfxVolume?.() ?? 1
        : 1;

    // 4) Lecture du bruitage (catch silencieux)
    audio.play().catch(() => {});
}
