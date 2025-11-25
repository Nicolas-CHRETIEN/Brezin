const AI_PERSONNALITES = {
  Radegonde: {
    baseParole: 0.7, // Probabilité de parler de base
    rire: 0.6,
    fierte: 0.4,
    joie: 0.7,
    doute: 0.2,
    surprise: 0.4,
    colere: 0.1,
    tristesse: 0.1,
    peur: 0.2
  },
  Perrot: {
    baseParole: 0.6,
    rire: 0.7,
    fierte: 0.4,
    joie: 0.6,
    doute: 0.2,
    surprise: 0.4,
    colere: 0.05,
    tristesse: 0.05,
    peur: 0.1
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
    peur: 0.6
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
    peur: 0.2
  }
};

function computeEmotionProbabilities() {
  const persoName = AI_BY_DIFF[S.difficulty];
  const perso = AI_PERSONNALITES[persoName];
  

  const note = calculateSituationRate();       // -100 → 100
  
  const f = (note + 100) / 200;               // 0 → 1 (situation bonne)
  const g = 1 - f;                            // 0 → 1 (situation mauvaise)
  const mid = 1 - Math.abs(f - 0.5) * 2;      // 1 au centre, 0 aux extrêmes

  // --- Étape 1 : calcul des "poids" bruts selon la situation ---
  const raw = {
    // positives → montent avec f
    rire:      perso.rire      * (0.3 + 0.7 * f),
    fierte:    perso.fierte    * (0.3 + 0.7 * f),
    joie:      perso.joie      * (0.3 + 0.7 * f),

    // neutres / floues → max quand la situation est mitigée
    doute:     perso.doute     * (0.3 + 0.7 * mid),
    surprise:  perso.surprise  * (0.3 + 0.7 * mid),

    // négatives → montent avec g (quand ça se passe mal)
    colere:    perso.colere    * (0.3 + 0.7 * g),
    tristesse: perso.tristesse * (0.3 + 0.7 * g),
    peur:      perso.peur      * (0.3 + 0.7 * g)
  };

  // --- Étape 2 : normalisation → on transforme les poids en probabilités ---
  
  let sum = 0;
  for (const v of Object.values(raw)) sum += v;
  
  if (sum <= 0) {
    // sécurité : si tout est à 0 (théorique), on répartit tout à égalité
    const n = Object.keys(raw).length;
    const equal = 1 / n;
    const probs = {};
    for (const k of Object.keys(raw)) probs[k] = equal;
    return probs;
  }

  const probs = {};
  for (const [k, v] of Object.entries(raw)) {
    probs[k] = v / sum; // chaque émotion devient une probabilité 0..1
  }
  
  return probs;
}

function pickEmotion(evenement) {
  // 1) Probabilités de base (situation globale)
  const probs = computeEmotionProbabilities() || {};

  // 2) Récupérer la personnalité de l'IA courante
  const persoName = AI_BY_DIFF[S.difficulty];
  const perso = AI_PERSONNALITES[persoName] || {
    rire: 1, fierte: 1, joie: 1,
    doute: 1, surprise: 1,
    colere: 1, tristesse: 1, peur: 1
  };

  // 3) Infos de score / phase de partie
  const sc = S.score || {};
  let gainP1 = 0;
  let gainP2 = 0;

  const decl = S.score?.lastDeclaration;

  if (Array.isArray(decl) && decl.length > 0) {
    const gain = decl[0]?.gain ?? 0;

    if (S.playFirst === "player") gainP1 += gain;
    else gainP2 += gain;
  }

  const scoreP1 = sc.player1 + gainP1; // Joueur
  const scoreP2 = sc.player2 + gainP2; // IA
  const scoreIA = scoreP2;
  const scorePlayer = scoreP1;
  const maxScore = Math.max(scoreIA, scorePlayer);
  const iaLeads = scoreIA >= scorePlayer;
  const diff = Math.abs(scoreIA - scorePlayer);
  const bigGap = diff >= 200; // "écart important"

  let phase = "early";
  if (maxScore >= 750) phase = "late";
  else if (maxScore >= 500) phase = "mid";

  // 4) Force de la dernière annonce
  let gain = 0;
  const lastDecl = sc.lastDeclaration;
  if (Array.isArray(lastDecl) && lastDecl.length > 0 && typeof lastDecl[0]?.gain === "number") {
    gain = lastDecl[0].gain;
  }
  const strongAnnounce    = gain >= 80 && gain < 250;
  const veryStrongAnnounce = gain >= 250;

  // 5) Multiplicateurs contextuels
  const mult = {
    joie: 1,
    rire: 1,
    fierte: 1,
    surprise: 1,
    doute: 1,
    peur: 1,
    colere: 1,
    tristesse: 1
  };

  const isPositif       = evenement === "positif" || evenement === "faiblePositif";
  const isNegatif       = evenement === "negatif" || evenement === "faibleNegatif";

  // ---------- PHASES & EVENEMENTS ----------

  // --- Début de partie : réactions "légères" ---
  if (phase === "early") {
    if (isPositif) {
      // "tout évènement positif ou semi positif va entrainer de la joie, de la fierté ou du rire."
      mult.joie   *= 3;
      mult.rire   *= 3;
      mult.fierte *= 3;
      mult.surprise *= 1.5;
      mult.doute  *= 0.5;
      mult.peur   *= 0.3;
      mult.colere *= 0.3;
      mult.tristesse *= 0.3;
    } else if (isNegatif) {
      // "tout évènement négatif va entrainer une réaction légère comme du doute, de la joie, du rire."
      mult.doute  *= 2.5;
      mult.joie   *= 1.8;
      mult.rire   *= 1.8;
      mult.fierte *= 0.7;
      mult.surprise *= 1.2;
      mult.peur   *= 0.5;
      mult.colere *= 0.3;
      mult.tristesse *= 0.3;
    }
  }

  // --- Milieu de partie ---
  if (phase === "mid") {
    // "le doute est plus présent"
    mult.doute *= 2;

    // "la peur également si S.score.player1> S.score.player2, surtout si l'écart important."
    if (scorePlayer > scoreIA && bigGap) {
      mult.peur *= 2.5;
    }

    if (isPositif) {
      mult.joie   *= 2;
      mult.rire   *= 2;
      mult.fierte *= 2;
      mult.colere *= 0.5;
      mult.tristesse *= 0.5;
    } else if (isNegatif) {
      mult.colere *= 1.5;
      mult.tristesse *= 1.5;
      mult.peur   *= 1.5;
    }
  }

  // --- Fin de partie ---
  if (phase === "late") {
    if (scorePlayer > scoreIA && bigGap) {
      // "peur, tristesse ou colère dominent"
      mult.peur      *= 3;
      mult.tristesse *= 3;
      mult.colere    *= 3;
      mult.doute     *= 1.5;
      mult.joie      *= 0.3;
      mult.rire      *= 0.3;
      mult.fierte    *= 0.5;
    } else if (scoreIA > scorePlayer) {
      // "fierté la joie et le rire dominent"
      mult.fierte *= 3;
      mult.joie   *= 3;
      mult.rire   *= 3;
      mult.peur      *= 0.5;
      mult.tristesse *= 0.5;
      mult.colere    *= 0.5;
    }
  }

  // ---------- ANNONCES FORTES ----------

  // "Une annonce forte (gain >= 80) peut entrainer surprise, peur, colère."
  if (strongAnnounce) {
    mult.surprise *= 2.5;
    mult.peur     *= 2;
    mult.colere   *= 2;

    // "Quand l'adversaire fait une annonce forte je veux en priorité colère, tristesse et surprise."
    if (isNegatif) {
      mult.colere    *= 1.8;
      mult.tristesse *= 1.5;
      mult.surprise  *= 1.8;
      mult.joie      *= 0.3;
      mult.rire      *= 0.3;
      mult.fierte    *= 0.5;
    }
  }

  // "Une annonce très forte (gain >= 250) entrainera systématiquement surprise, colère ou peur."
  if (veryStrongAnnounce) {
    // On écrase un peu tout le reste au profit de ce trio
    mult.surprise *= 4;
    mult.colere   *= 4;
    mult.peur     *= 4;
    mult.joie      *= 0.2;
    mult.rire      *= 0.2;
    mult.fierte    *= 0.2;
    mult.tristesse *= 0.8;
    mult.doute     *= 0.5;
  }

  // ---------- CONSTRUCTION DES POIDS FINAUX ----------

  const weighted = {};
  for (const [emotion, p] of Object.entries(probs)) {
    const persoBias = perso[emotion] ?? 1;   // la personnalité favorise certaines émotions
    const m = mult[emotion] ?? 1;           // le contexte de partie / événement
    weighted[emotion] = p * persoBias * m;
  }

  // Normalisation
  let sum = Object.values(weighted).reduce((a, b) => a + b, 0);
  if (sum <= 0) {
    const keys = Object.keys(weighted);
    const equal = 1 / keys.length;
    for (const k of keys) weighted[k] = equal;
  } else {
    for (const k of Object.keys(weighted)) {
      weighted[k] /= sum;
    }
  }

  // Tirage pondéré (toujours un peu d'aléatoire, mais très biaisé)
  const r = Math.random();
  let cumul = 0;
  for (const [emotion, p] of Object.entries(weighted)) {
    cumul += p;
    if (r <= cumul) return emotion;
  }

  // Fallback
  return Object.keys(weighted)[0] || "joie";
}





function IAReaction(reason) {
let evenement;

if (
  reason === "OAForteV" ||
  reason === "OAFaibleV" ||
  reason === "OEcartImportant" ||
  reason === "OAForteD" ||
  reason === "OToutAtout" ||
  reason === "priseAtout"
) {
  evenement = "positif";
}
else if (
  reason === "OAFaibleD" ||
  reason === "prise10As"
) {
  evenement = "faiblePositif";
}
else if (
  reason === "JAForteV" // annonce forte du joueur -> cas spécial
) {
  evenement = "negatifAnnonceForte";
}
else if (
  reason === "EcartFaible" ||
  reason === "vol10As"
) {
  evenement = "faibleNegatif";
}
else if (
  reason === "JAForteD" ||      // annonce forte du joueur -> cas spécial
  reason === "JToutAtout" ||
  reason === "JAFaibleD" ||
  reason === "JEcartImportant" ||
  reason === "volAtout"
) {
  evenement = "negatifAnnonceForte"; // ou "negatif" si tu veux moins violent
}

  const persoName = AI_BY_DIFF[S.difficulty];
  const persoCfg  = AI_PERSONNALITES[persoName];

  const pTalk = persoCfg.baseParole || 0.5;

  if (Math.random() >= pTalk) {
    const emotionSilence = pickEmotion(evenement);
    return [emotionSilence, ""];
  }

  const emotion = pickEmotion(evenement);

  // MAJ BDD.
  BDD();
  
  const bank = D[persoName]?.[emotion]?.[reason] || null;

  if (!bank || bank.length === 0) {
    return [emotion, null];
  }

  const raw = bank[Math.floor(Math.random() * bank.length)];

  // 👉 si c’est une fonction, on l’exécute, sinon on garde la string telle quelle
  const message = (typeof raw === "function") ? raw() : raw;

  return [emotion, message];
}
