// ======================================================
// =============  Évaluation de situation IA  ============
// ======================================================
//
// Rôle.
// -----
// Produire une note comprise entre -100 et +100 décrivant
// la situation stratégique du point de vue de l’IA.
//
// Ce que fait la fonction.
// ------------------------
// 1) Récupère le score visible + le score simulé après annonce.
// 2) Calcule une première composante basée sur l’écart de score.
// 3) Pondère cet écart selon l’avancement de la partie (0 → 1000).
// 4) Ajoute un potentiel d’égalité (estimatePossibleEqual()).
// 5) Retourne une note finale bornée entre -100 et 100.
//
// Remarques.
// ----------
// - Utilise toujours S.score.player1 / player2 (n’invente pas de chemins).
// - Ne vérifie pas inutilement les types.
// - Logique conservée, juste corrigée et clarifiée.
//


function calculateSituationRate() {

  // --- Scores bruts affichés ---
  const scoreIA     = Number(S.score.player2) || 0;
  const scorePlayer = Number(S.score.player1) || 0;

  // --- Scores simulés si une annonce vient d’être faite ---
  let simIA     = scoreIA;
  let simPlayer = scorePlayer;

  const decl = S.score.lastDeclaration;
  const hasDecl = Array.isArray(decl) && decl.length > 0;

  // Si une annonce vient d’être faite → ajouter son gain au bon camp
  if (hasDecl) {
    const gain = Number(decl[0].gain || 0);
    (S.playFirst === "computer") ? simIA += gain : simPlayer += gain;
  }

  // --- Différence de score (IA - Joueur) ---
  const diff = simIA - simPlayer;

  // ======================================================
  // 1) Impact direct de l’écart → borné entre -40 et +40
  // ======================================================
  let note = 0;
  const impactDiff = Math.max(-40, Math.min(40, diff / 5));
  note += impactDiff;

  // ======================================================
  // 2) Avancement de partie : plus on approche 1000 pts,
  //    plus l’écart de score compte.
  // ======================================================
  const maxScore = Math.max(simIA, simPlayer);
  const ratioFin = (maxScore >= 0 && maxScore <= 1000)
    ? (maxScore / 1000)
    : 0;

  note *= (0.5 + ratioFin);

  // ======================================================
  // 3) Potentiel d’égalité fourni par ta fonction dédiée
  //    (valeur comprise entre 0 et 1, normalement).
  // ======================================================
  const potentiel = estimatePossibleEqual();
  note += potentiel * 30 - 15;

  // ======================================================
  // 4) Bornage final
  // ======================================================
  if (note < -100) note = -100;
  if (note > 100)  note = 100;

  return note;
}
