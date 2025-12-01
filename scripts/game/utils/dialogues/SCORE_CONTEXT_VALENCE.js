// ======================================================
// =======  Valence associée aux contextes de score ======
// ======================================================
//
// Rôle du module.
// ----------------
// Associer à chaque clé SCORE_CONTEXT_KEYS une “valence”,
// c’est-à-dire un poids émotionnel global représentant si la
// situation est favorable ou défavorable pour l’IA.
//
// Échelle utilisée.
// ------------------
//  -3   = situation catastrophique pour l’IA
//  -1.5 = très mauvais
//  -1   = plutôt mauvais
//   0   = neutre
//  +1   = plutôt bon
//  +1.5 = très bon
//  +3   = triomphe / domination + victoire imminente
//
// Utilisation.
// ------------
// CChooseSentance() récupère ces valeurs lorsque
// aucun événement direct (vol, annonce forte, renversement…)
// n’a priorité. La valence choisie influence ensuite
// l’émotion via pickEmotionFromValence().
//
// Remarque.
// ---------
// Aucun calcul ici : uniquement la correspondance clé → valence.
//
// ======================================================

const SCORE_CONTEXT_VALENCE = Object.freeze({

  // Domination large
  [SCORE_CONTEXT_KEYS.SCORE_IA_DOMINATES]:            +1.5,
  [SCORE_CONTEXT_KEYS.SCORE_J_DOMINATES]:            -1.5,

  // Avance moyenne
  [SCORE_CONTEXT_KEYS.SCORE_IA_MEDIUM_LEAD]:          +1,
  [SCORE_CONTEXT_KEYS.SCORE_J_MEDIUM_LEAD]:           -1,

  // Partie serrée
  [SCORE_CONTEXT_KEYS.SCORE_TIGHT_IA_AHEAD]:          +1,
  [SCORE_CONTEXT_KEYS.SCORE_TIGHT_J_AHEAD]:           -1,
  [SCORE_CONTEXT_KEYS.SCORE_TIGHT_BALANCED]:           0,

  // Presque gagné
  [SCORE_CONTEXT_KEYS.SCORE_IA_ALMOST_WIN]:          +1.5,
  [SCORE_CONTEXT_KEYS.SCORE_J_ALMOST_WIN]:           -1.5,

  // Domination + victoire imminente (cas extrêmes)
  [SCORE_CONTEXT_KEYS.SCORE_IA_DOMINATES_ALMOSTWIN]: +3,
  [SCORE_CONTEXT_KEYS.SCORE_J_DOMINATES_ALMOSTWIN]: -3,

  // IA / Joueur mènent et sont proches de gagner
  [SCORE_CONTEXT_KEYS.SCORE_IA_LEADS_ALMOSTWIN]:     +1.5,
  [SCORE_CONTEXT_KEYS.SCORE_J_LEADS_ALMOSTWIN]:      -1.5,

  // Cas génériques (fallback)
  [SCORE_CONTEXT_KEYS.SCORE_IA_LEADS_GENERIC]:       +1,
  [SCORE_CONTEXT_KEYS.SCORE_J_LEADS_GENERIC]:        -1,
  [SCORE_CONTEXT_KEYS.SCORE_BALANCED_GENERIC]:        0,
});
