// ======================================================
// ===========  Gestion du choix de difficulté  ===========
// ======================================================
// Rôle.
// ----
// Gérer la sélection du niveau de difficulté par le joueur.  
// Met à jour la difficulté dans l’état global `S`, définit la
// prochaine étape du jeu (“deal”), puis relance le rendu principal.
//

function listenerChoiceDifficulty(difficulty) {
  S.difficulty = difficulty; // Enregistre la difficulté choisie.
  
  if (showComments) setAiEmotion("joie", "C'est parti!");
  S.stage = 'deal';          // Passe à l’étape de distribution.
  renderGame();              // Rafraîchit l’interface du jeu.
}
