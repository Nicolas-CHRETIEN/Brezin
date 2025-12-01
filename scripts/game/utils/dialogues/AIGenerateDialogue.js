// ======================================================
// ===========  Génération des dialogues de l'IA  =======
// ======================================================
//
// Rôle.
// -----
// Produire, à partir du contexte de jeu courant, une émotion IA et
// éventuellement une phrase en berrichon à afficher dans la bulle.
//
// Ce que fait la fonction.
// ------------------------
// 1) Construit un contexte de dialogue complet (scores, annonces, atout, etc.).
// 2) Demande à CChooseSentance() quelle situation est active (dialogueKey)
//    et avec quelle valence (-3..+3 : très mauvais → très bon pour l’IA).
// 3) Récupère la personnalité de l’IA selon la difficulté (probabilité de parler).
// 4) Décide si l’IA parle ou non (évènement fort = obligé, sinon tirage aléatoire).
// 5) Choisit une émotion cohérente avec la valence.
// 6) Cherche la banque de phrases correspondant au dialogueKey pour cette IA,
//    puis tire une réplique au hasard (fonction ou string).
// 7) Retourne `[emotion, message]` où `message` peut être une chaîne vide si silence.
//

function AIGenerateDialogue() {
  // IA totalement masquée → rien à faire
  if (!showIA) return null;

  // 1) Contexte complet de la situation (scores, annonces, atout, etc.)
  const ctx = buildDialogueContext(); // { scoreIA, scorePlayer, diff, annonce, trump, aiId, ... }

  // 2) Situation et valence (intensité émotionnelle pour l’IA)
  const { dialogueKey, valence } = CChooseSentance(); // valence ∈ [-3..+3]

  const persoName = AI_BY_DIFF[S.difficulty];
  const persoCfg  = AI_PERSONNALITES[persoName] || { baseParole: 0.5 };

  // 3) Aucun événement significatif → émotion neutre-ish, mais pas de phrase
  if (!dialogueKey) {
    const emotionSilence = pickEmotionFromValence(0);
    return [emotionSilence, ""];
  }

  // 4) Évènement fort → l’IA DOIT parler, sinon probabilité de parole
  const mustTalk = Math.abs(valence) >= VALENCE_FORCE_TALK;
  const pTalk    = persoCfg.baseParole || 0.5;

  // Ne pas parler pour les évènements faibles, ou si les commentaires sont muets
  if ((!mustTalk && Math.random() >= pTalk) || !showComments) {
    const emotionSilence = pickEmotionFromValence(valence);
    return [emotionSilence, ""];
  }

  // 5) Choix de l’émotion cohérente avec la valence
  const emotion = pickEmotionFromValence(valence);

  // 6) Sélection de la banque de répliques (évènements / score)
  const aiId = ctx.aiId || getCurrentAIId();

  const bank =
    (DIALOGUE_EVENTS[aiId] && DIALOGUE_EVENTS[aiId][dialogueKey]) ||
    (DIALOGUE_SCORE[aiId]  && DIALOGUE_SCORE[aiId][dialogueKey]) ||
    null;

  // Pas de phrase disponible pour cette situation → émotion seule
  if (!Array.isArray(bank) || bank.length === 0) {
    return [emotion, ""];
  }

  // 7) Tirage au hasard d’une entrée de la banque.
  //    Une entrée peut être une fonction (ctx → string) ou une string directe.
  const rawFn   = bank[Math.floor(Math.random() * bank.length)];
  const message = (typeof rawFn === "function") ? rawFn(ctx) : rawFn;

  return [emotion, message];
}
