// ======================================================
// ==========  Constantes : Contexte de score  ==========
// ======================================================
//
// Rôle du module.
// ----------------
// Définir toutes les clés possibles décrivant la situation
// du score entre l’IA et le joueur, utilisées pour générer
// un dialogue cohérent lorsque *aucun événement spécifique*
// (annonce, vol, renversement…) n’a priorité.
//
// Ce que fait ce fichier.
// ------------------------
// 1) Fournit SCORE_CONTEXT_KEYS : l’ensemble des étiquettes
//    décrivant des situations de score (domination, comeback,
//    partie serrée, presque gagné, etc.).
// 2) Ces clés sont ensuite évaluées dans computeScoreContexts()
//    puis résolues dans CChooseSentance() si aucun eventKey.
// 3) Aucune logique métier ici : uniquement des constantes.
//
// Remarque.
// ---------
// Chaque clé correspond à une catégorie sémantique bien précise.
// DIALOGUE_SCORE utilise ces clés pour associer à chaque IA
// un ensemble de répliques adaptées.
//
// ======================================================
// ===============  Définition des clés  =================
// ======================================================

const SCORE_CONTEXT_KEYS = Object.freeze({

  // --- Domination nette (écart ≥ ±300) ---
  SCORE_IA_DOMINATES:           "SCORE_IA_DOMINATES",
  SCORE_J_DOMINATES:            "SCORE_J_DOMINATES",

  // --- Avance moyenne (écart ±150 à ±300) ---
  SCORE_IA_MEDIUM_LEAD:         "SCORE_IA_MEDIUM_LEAD",
  SCORE_J_MEDIUM_LEAD:          "SCORE_J_MEDIUM_LEAD",

  // --- Partie serrée mais avantage clair ---
  SCORE_TIGHT_IA_AHEAD:         "SCORE_TIGHT_IA_AHEAD",
  SCORE_TIGHT_J_AHEAD:          "SCORE_TIGHT_J_AHEAD",
  SCORE_TIGHT_BALANCED:         "SCORE_TIGHT_BALANCED",

  // --- Proche de gagner (>800 points) ---
  SCORE_IA_ALMOST_WIN:          "SCORE_IA_ALMOST_WIN",
  SCORE_J_ALMOST_WIN:           "SCORE_J_ALMOST_WIN",

  // --- Domination + presque gagné ---
  SCORE_IA_DOMINATES_ALMOSTWIN: "SCORE_IA_DOMINATES_ALMOSTWIN",
  SCORE_J_DOMINATES_ALMOSTWIN:  "SCORE_J_DOMINATES_ALMOSTWIN",

  // --- L’IA / Joueur mènent et sont proches de gagner ---
  SCORE_IA_LEADS_ALMOSTWIN:     "SCORE_IA_LEADS_ALMOSTWIN",
  SCORE_J_LEADS_ALMOSTWIN:      "SCORE_J_LEADS_ALMOSTWIN",

  // --- Contexte générique (fallback) ---
  SCORE_IA_LEADS_GENERIC:       "SCORE_IA_LEADS_GENERIC",
  SCORE_J_LEADS_GENERIC:        "SCORE_J_LEADS_GENERIC",
  SCORE_BALANCED_GENERIC:       "SCORE_BALANCED_GENERIC",
});
