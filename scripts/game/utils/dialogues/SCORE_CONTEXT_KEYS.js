/* ======================================================
   ==========  Clés de contexte de score  ===============
   ====================================================== */

const SCORE_CONTEXT_KEYS = Object.freeze({
  // IA / Joueur dominent largement
  SCORE_IA_DOMINATES:           'SCORE_IA_DOMINATES',
  SCORE_J_DOMINATES:            'SCORE_J_DOMINATES',

  // Avance moyenne
  SCORE_IA_MEDIUM_LEAD:         'SCORE_IA_MEDIUM_LEAD',
  SCORE_J_MEDIUM_LEAD:          'SCORE_J_MEDIUM_LEAD',

  // Partie serrée avec léger avantage
  SCORE_TIGHT_IA_AHEAD:         'SCORE_TIGHT_IA_AHEAD',
  SCORE_TIGHT_J_AHEAD:          'SCORE_TIGHT_J_AHEAD',
  SCORE_TIGHT_BALANCED:         'SCORE_TIGHT_BALANCED',

  // Presque gagné
  SCORE_IA_ALMOST_WIN:          'SCORE_IA_ALMOST_WIN',
  SCORE_J_ALMOST_WIN:           'SCORE_J_ALMOST_WIN',

  // Combo domination + presque gagné
  SCORE_IA_DOMINATES_ALMOSTWIN: 'SCORE_IA_DOMINATES_ALMOSTWIN',
  SCORE_J_DOMINATES_ALMOSTWIN:  'SCORE_J_DOMINATES_ALMOSTWIN',

  // IA / Joueur mènent et sont proches de gagner
  SCORE_IA_LEADS_ALMOSTWIN:     'SCORE_IA_LEADS_ALMOSTWIN',
  SCORE_J_LEADS_ALMOSTWIN:      'SCORE_J_LEADS_ALMOSTWIN',

  // Cas génériques (lead simple / partie neutre)
  SCORE_IA_LEADS_GENERIC:       'SCORE_IA_LEADS_GENERIC',
  SCORE_J_LEADS_GENERIC:        'SCORE_J_LEADS_GENERIC',
  SCORE_BALANCED_GENERIC:       'SCORE_BALANCED_GENERIC',
});
