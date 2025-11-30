const AI_PERSONNALITES = {
  Radegonde: {
    baseParole: 0.7,
    rire: 0.6,
    fierte: 0.4,
    joie: 0.7,
    doute: 0.2,
    surprise: 0.4,
    colere: 0.1,
    tristesse: 0.3,
    peur: 0.3,
  },
  Perrot: {
    baseParole: 0.6,
    rire: 0.7,
    fierte: 0.4,
    joie: 0.6,
    doute: 0.2,
    surprise: 0.4,
    colere: 0.2,
    tristesse: 0.1,
    peur: 0.3,
  },
  Jehanne: {
    baseParole: 0.5,
    rire: 0.2,
    fierte: 0.6,
    joie: 0.4,
    doute: 0.5,
    surprise: 0.6,
    colere: 0.3,
    tristesse: 0.3,
    peur: 0.6,
  },
  Andry: {
    baseParole: 0.4,
    rire: 0.1,
    fierte: 0.8,
    joie: 0.4,
    doute: 0.2,
    surprise: 0.4,
    colere: 0.7,
    tristesse: 0.1,
    peur: 0.2,
  },
};

// ======================================================
// ==========  Choix émotion + phrase IA  ===============
// ======================================================
//
// Utilise :
//   - CChooseSentance()        → { dialogueKey, valence (-3..+3) }
//   - buildDialogueContext()   → ctx complet
//   - DIALOGUE_EVENTS / DIALOGUE_SCORE
//   - AI_PERSONNALITES, AI_BY_DIFF
//

function pickEmotionFromValence(valence) {
  const persoName = AI_BY_DIFF[S.difficulty];
  const perso = AI_PERSONNALITES[persoName] || {
    rire: 1, fierte: 1, joie: 1,
    doute: 1, surprise: 1,
    colere: 1, tristesse: 1, peur: 1
  };

  // Ordre du plus négatif au plus positif :
  // colère, surprise, peur, tristesse, doute, joie, rire, fierté

  let pool;

  if (valence > 0) {
    // Score positif → émotions positives uniquement
    pool = ["joie", "rire", "fierte"];
  } else if (valence < 0) {
    // Score négatif → émotions négatives / mitigées
    pool = ["colere", "surprise", "peur", "tristesse", "doute"];
  } else {
    // Valence neutre → émotions "entre-deux"
    pool = ["doute", "surprise"];
  }

  // Poids basés sur la personnalité
  const weights = {};
  let sum = 0;

  for (const emo of pool) {
    const w = perso[emo] ?? 0;
    weights[emo] = w;
    sum += w;
  }

  if (sum <= 0) {
    const equal = 1 / pool.length;
    for (const emo of pool) weights[emo] = equal;
  } else {
    for (const emo of pool) {
      weights[emo] = weights[emo] / sum;
    }
  }

  // Tirage pondéré
  const r = Math.random();
  let cumul = 0;
  for (const emo of pool) {
    cumul += weights[emo];
    if (r <= cumul) return emo;
  }

  return pool[0];
}

// À partir de quelle valence l'IA DOIT parler (en valeur absolue)
const VALENCE_FORCE_TALK = 2; // 2 : gros évènement, 3 : seulement extrême


function AIGenerateDialogue() {
  if (!showIA) return null;
  const ctx = buildDialogueContext();          // { scoreIA, scorePlayer, diff, annonce, trump, ... }
  
  const { dialogueKey, valence } = CChooseSentance(); // { dialogueKey, valence (-3..+3) }

  const persoName = AI_BY_DIFF[S.difficulty];
  const persoCfg  = AI_PERSONNALITES[persoName] || { baseParole: 0.5 };

  // Si aucune situation détectée → pas de phrase (mais émotion neutre-ish)
  if (!dialogueKey) {
    const emotionSilence = pickEmotionFromValence(0);
    return [emotionSilence, ""];
  }

  // Évènement suffisamment fort ? → l'IA DOIT parler
  const mustTalk = Math.abs(valence) >= VALENCE_FORCE_TALK;

  // Probabilité de parler (seulement si l'évènement n'est pas "obligatoire")
  const pTalk = persoCfg.baseParole || 0.5;
  // Ne pas parler a moin d'un évènement important. Ne jamais parler si l'IA est en muet.
  if ((!mustTalk && Math.random() >= pTalk) || !showComments) {
    const emotionSilence = pickEmotionFromValence(valence);
    return [emotionSilence, ""];
  }

  // Choix de l’émotion cohérente avec la valence
  const emotion = pickEmotionFromValence(valence);

  // --- Sélection aléatoire d’une réplique --- //
  const aiId = ctx.aiId || getCurrentAIId();

  const bank =
    (DIALOGUE_EVENTS[aiId] && DIALOGUE_EVENTS[aiId][dialogueKey]) ||
    (DIALOGUE_SCORE[aiId]  && DIALOGUE_SCORE[aiId][dialogueKey]) ||
    null;

  if (!bank || !Array.isArray(bank) || bank.length === 0) {
    return [emotion, ""];
  }

  const rawFn   = bank[Math.floor(Math.random() * bank.length)];
  const message = (typeof rawFn === "function") ? rawFn(ctx) : rawFn;

  return [emotion, message];
}

