// ======================================================
// =======  Choix d’une émotion selon la valence  =======
// ======================================================
//
// Rôle.
// -----
// Retourner une émotion cohérente avec la valence (-3..+3)
// en tenant compte de la personnalité de l’IA.
//
// Ce que fait la fonction.
// ------------------------
// 1) Détermine la personnalité de l’IA selon la difficulté.
// 2) Sélectionne un ensemble d’émotions possibles selon la valence.
//    - valence > 0 → émotions positives
//    - valence < 0 → émotions négatives / mitigées
//    - valence = 0 → émotions neutres
// 3) Applique les poids émotionnels définis dans la personnalité.
// 4) Normalise les poids et effectue un tirage pondéré.
// 5) Retourne le nom de l’émotion choisie.
//

function pickEmotionFromValence(valence) {

  // --- 1) Personnalité IA selon le niveau ---
  const persoName = AI_BY_DIFF[S.difficulty];
  const perso = AI_PERSONNALITES[persoName] || {
    rire: 1, fierte: 1, joie: 1,
    doute: 1, surprise: 1,
    colere: 1, tristesse: 1, peur: 1
  };

  // --- 2) Sélection des émotions possibles selon la valence ---
  // Ordre conceptuel : colère, surprise, peur, tristesse, doute, joie, rire, fierté
  let pool;

  if (valence > 0) {
    pool = ["joie", "rire", "fierte"];                          // émotions positives
  } else if (valence < 0) {
    pool = ["colere", "surprise", "peur", "tristesse", "doute"]; // émotions négatives/mitigées
  } else {
    pool = ["doute", "surprise"];                                 // neutre
  }

  // --- 3) Pondération selon personnalité ---
  const weights = {};
  let sum = 0;

  for (const emo of pool) {
    const w = perso[emo] ?? 0;  // poids brut
    weights[emo] = w;
    sum += w;
  }

  // --- 4) Normalisation des poids ---
  if (sum <= 0) {
    // Cas extrême : aucun poids → distribution uniforme
    const equal = 1 / pool.length;
    for (const emo of pool) weights[emo] = equal;
  } else {
    // Normalisation standard
    for (const emo of pool) {
      weights[emo] = weights[emo] / sum;
    }
  }

  // --- 5) Tirage pondéré ---
  const r = Math.random();
  let cumul = 0;

  for (const emo of pool) {
    cumul += weights[emo];
    if (r <= cumul) return emo;
  }

  // Sécurité (rare) : renvoie la première émotion du pool
  return pool[0];
}
