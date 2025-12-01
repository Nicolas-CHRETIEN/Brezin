// ======================================================
// ==========  Message d’introduction de partie  =========
// ======================================================
//
// Rôle.
// ------
// Choisir et afficher la phrase d’ouverture prononcée par l’IA
// au début d’une partie. La réplique dépend :
//   - de l’IA actuelle (difficulté → personnage),
//   - de sa banque DIALOGUE_EVENTS[IA].GAME_START,
//   - du contexte de partie (buildDialogueContext()).
//
// Ce que fait la fonction.
// -------------------------
// 1) Récupère l’IA courante (getCurrentAIId()).
// 2) Récupère la liste de répliques GAME_START correspondante.
// 3) Tire une phrase aléatoire et exécute la fonction si nécessaire.
// 4) Affiche l’émotion + message via setAiEmotion(), si les commentaires sont actifs.
//
// Remarque.
// ---------
// La fonction ne retourne rien : elle met directement à jour l’UI IA.
//

function getGameStartMessage() {

  // --- 1) Identité IA courante ---
  const aiId     = getCurrentAIId();          // "Radegonde" | "Perrot" | ...
  const aiEvents = DIALOGUE_EVENTS[aiId];     // Banque de ses événements

  // --- 2) Banque GAME_START ---
  const lines = aiEvents[SITUATION_KEYS.GAME_START];

  // --- 3) Tirage aléatoire d’une réplique ---
  const ctx    = buildDialogueContext();
  const raw    = lines[Math.floor(Math.random() * lines.length)];
  const msg    = (typeof raw === "function") ? raw(ctx) : raw;

  // --- 4) Affichage (si audible) ---
  if (showIA && showComments) {
    setAiEmotion("joie", msg);
  } else if (showComments) {
    setAiEmotion("joie", "");
  }
}
