// ======================================================
// ==========  Poids "valence" des situations  ==========
// ==========        (du point de vue IA)       =========
// ======================================================
//
// Rôle.
// -----
// Analyser la situation courante (annonce, score, vols, atout, etc.)
// et retourner :
//   - une clé de dialogue `dialogueKey` (event ou contexte de score),
//   - une valence numérique `valence` (-3..+3 environ).
//
// Ce que fait la fonction.
// ------------------------
// 1) Lit les scores, la dernière annonce et qui vient d’annoncer.
// 2) Simule l’état après annonce (pour détecter flips / punition / etc.).
// 3) Détermine un "event" précis (IA_FLIP, IA_CASCADE, IA_STEALS_TRUMP…).
// 4) Calcule des contextes de score globaux via computeScoreContexts().
// 5) Choisit une clé finale (event prioritaire, sinon contexte de score).
// 6) Associe une valence via EVENT_VALENCE / SCORE_CONTEXT_VALENCE.
//
// Remarque.
// ---------
// - S’appuie uniquement sur `window.S` et les constantes déjà définies.
// - Pas de vérifications défensives inutiles (on suppose les tables présentes).
//

function CChooseSentance () {

  // Note globale de la situation (si tu veux encore t’en servir ailleurs).
  const gamesRate = calculateSituationRate(); // positive si l'IA mène.

  // --- Scores bruts affichés (avant annonce) ---
  let scoreIA     = Number(S.score.player2) || 0;
  let scorePlayer = Number(S.score.player1) || 0;

  // --- Annonce en cours ? ---
  const lastDecl = S.score.lastDeclaration;
  const hasDecl  = Array.isArray(lastDecl) && lastDecl.length > 0;

  const IAJustDeclared     = hasDecl && S.playFirst === "computer";
  const PlayerJustDeclared = hasDecl && S.playFirst === "player";

  // État AVANT d'ajouter le gain de l'annonce.
  const IAPerd  = scoreIA < scorePlayer;
  const IAGagne = scoreIA > scorePlayer && scoreIA > 0;

  // --- 7 d'atout simultanés ? ---
  const nbDe7 = hasDecl
    ? lastDecl.filter(d => d.name === "sept d'atout").length
    : 0;

  // Ajout du gain de l'annonce (simulation de l'état APRÈS l’animation de score).
  if (IAJustDeclared) {
    scoreIA += (lastDecl[0]?.gain || 0) + nbDe7 * 10;
  }
  if (PlayerJustDeclared) {
    scorePlayer += (lastDecl[0]?.gain || 0) + nbDe7 * 10;
  }

  // --- États comparatifs APRÈS annonce ---
  const IAPerdToujours     = IAPerd  && scoreIA < scorePlayer;
  const JoueurPerdToujours = IAGagne && scoreIA > scorePlayer;

  const IARattrape     = IAPerd  && IAJustDeclared     && scoreIA > scorePlayer;
  const JoueurRattrape = IAGagne && PlayerJustDeclared && scoreIA < scorePlayer;

  // --- Vol / prise de l'atout (7 d'atout du bon atout) ---
  const annoncesFaites = [
    ...(S.score.declarationsListP1 || []),
    ...(S.score.declarationsListP2 || [])
  ];
  const premierSept = annoncesFaites.filter(d => d.name === "sept d'atout").length < 2;

  // Atout initial "fort" (appartient au 250) :
  const bonAtout = (returnedTrumpCard?.score || 0) > 13;

  const annonceAtout = hasDecl && lastDecl[0]?.name === "sept d'atout";
  const volAtout     = IAJustDeclared     && annonceAtout && premierSept && bonAtout;
  const priseAtout   = PlayerJustDeclared && annonceAtout && premierSept && bonAtout;

  // --- Différence de score APRÈS annonce ---
  const diff = scoreIA - scorePlayer;

  const largeVictoire = diff > 300;
  const largeDefaite  = diff < -300;
  const dispute       = diff < 200 && diff > -200;

  // Presque rattrapé (on réduit l'écart sans repasser devant).
  const IARattrapePresque     = IAJustDeclared     && IAPerdToujours     && dispute;
  const JoueurRattrapePresque = PlayerJustDeclared && JoueurPerdToujours && dispute;

  // Partie bientôt finie.
  const IAGagnePresque     = diff > 0 && scoreIA     > 800;
  const JoueurGagnePresque = diff < 0 && scorePlayer > 800;

  // --- Annonce courante (si présente) ---
  const annonce = hasDecl ? lastDecl[0] : null;
  const gainAnn = annonce ? annonce.gain : 0;

  // Force de l'annonce de l'IA.
  const IAannonceFaible    = IAJustDeclared     && gainAnn < 50;
  const IAannonceForte     = IAJustDeclared     && gainAnn >= 50 && gainAnn < 100;
  const IAannonceTresForte = IAJustDeclared     && gainAnn >= 100;

  // Force de l'annonce du joueur.
  const JannonceFaible     = PlayerJustDeclared && gainAnn < 50;
  const JannonceForte      = PlayerJustDeclared && gainAnn >= 50 && gainAnn < 100;
  const JannonceTresForte  = PlayerJustDeclared && gainAnn >= 100;

  // --- Vol / prise de 10 ou As dans le pli courant ---
  const volDix =
    S.playFirst === "computer" &&
    S.playerCardPlayed &&
    (S.playerCardPlayed.rang === "10" || S.playerCardPlayed.rang === "as");

  const priseDix =
    S.playFirst === "player" &&
    S.computerCardPlayed &&
    (S.computerCardPlayed.rang === "10" || S.computerCardPlayed.rang === "as");

  // --- Empêchement d'une annonce de l'IA ---
  const annoncesPossiblesIA = possibleDeclarations(S.handComputer) || [];
  const IAEmpechee =
    S.playFirst === "player" &&
    annoncesPossiblesIA.length > 0 &&
    (S.stack?.length || 0) === 1;

  // ======================================================
  // ==========  Détermination de l'event clé  ============  
  // ======================================================

  let eventKey = null;

  // 1) Cascades / catastrophes pour l'IA
  if (
    priseDix &&
    (JannonceForte || JannonceTresForte) &&
    JoueurRattrape &&
    JoueurGagnePresque
  ) {
    eventKey = SITUATION_KEYS.IA_CASCADE;
  }
  else if (JoueurRattrape && JoueurGagnePresque) {
    eventKey = SITUATION_KEYS.IA_COLLAPSE;
  }
  else if (priseDix && priseAtout) {
    eventKey = SITUATION_KEYS.IA_MISERY;
  }
  else if ((IAannonceForte || IAannonceTresForte) && JoueurRattrape) {
    eventKey = SITUATION_KEYS.IA_PUNISHED;
  }
  else if (IAEmpechee) {
    eventKey = SITUATION_KEYS.IA_BLOCKED;
  }

  // 2) Renversements simples
  else if (IARattrape) {
    eventKey = SITUATION_KEYS.IA_FLIP;
  }
  else if (JoueurRattrape) {
    eventKey = SITUATION_KEYS.J_FLIP;
  }
  else if (IARattrapePresque) {
    eventKey = SITUATION_KEYS.IA_ALMOST;
  }
  else if (JoueurRattrapePresque) {
    eventKey = SITUATION_KEYS.J_ALMOST;
  }

  // 3) Vols d'atout / 10 ou As
  else if (volAtout) {
    eventKey = SITUATION_KEYS.IA_STEALS_TRUMP;
  }
  else if (priseAtout) {
    eventKey = SITUATION_KEYS.J_STEALS_TRUMP;
  }
  else if (volDix) {
    eventKey = SITUATION_KEYS.IA_STEALS_10A;
  }
  else if (priseDix) {
    eventKey = SITUATION_KEYS.J_STEALS_10A;
  }

  // 4) Annonces en fonction de l'état (lead / comeback)
  else if (IAannonceTresForte || IAannonceForte) {
    if (IAGagne)      eventKey = SITUATION_KEYS.IA_STRONG_LEAD;
    else if (IAPerd)  eventKey = SITUATION_KEYS.IA_STRONG_COMEBACK;
  }
  else if (IAannonceFaible) {
    if (IAGagne)      eventKey = SITUATION_KEYS.IA_WEAK_LEAD;
    else if (IAPerd)  eventKey = SITUATION_KEYS.IA_WEAK_COMEBACK;
  }
  else if (JannonceTresForte || JannonceForte) {
    if (IAPerd)       eventKey = SITUATION_KEYS.J_STRONG_LEAD;
    else if (IAGagne) eventKey = SITUATION_KEYS.J_STRONG_COMEBACK;
  }
  else if (JannonceFaible) {
    if (IAPerd)       eventKey = SITUATION_KEYS.J_WEAK_LEAD;
    else if (IAGagne) eventKey = SITUATION_KEYS.J_WEAK_COMEBACK;
  }

  // ============================================================
  // ==========     Contexte global du score (IA)    ============  
  // ============================================================

  function computeScoreContexts({ diff, scoreIA, scorePlayer, IAGagnePresque, JoueurGagnePresque }) {

    const keys = [];

    // ----- Écart de score global -----

    // Domination forte (±300)
    if (diff >= 300) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_IA_DOMINATES);
    }
    else if (diff <= -300) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_J_DOMINATES);
    }

    // Avance moyenne (±150)
    if (diff >= 150 && diff < 300) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_IA_MEDIUM_LEAD);
    }
    else if (diff <= -150 && diff > -300) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_J_MEDIUM_LEAD);
    }

    // Partie serrée mais IA légèrement devant
    if (diff > 0 && diff < 150 && (scorePlayer > 200 || scoreIA > 200)) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_TIGHT_IA_AHEAD);
    }
    // Partie serrée mais Joueur légèrement devant
    else if (diff < 0 && diff > -150 && (scorePlayer > 200 || scoreIA > 200)) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_TIGHT_J_AHEAD);
    }

    // Vraiment équilibré (mais on évite strictement 0 si tu le souhaites)
    if (Math.abs(diff) < 40 && diff !== 0 && (scorePlayer > 200 || scoreIA > 200)) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_TIGHT_BALANCED);
    }

    // ----- Fin de partie -----

    // IA proche de gagner
    if (IAGagnePresque) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_IA_ALMOST_WIN);

      if (diff >= 300)      keys.push(SCORE_CONTEXT_KEYS.SCORE_IA_DOMINATES_ALMOSTWIN);
      else if (diff > 0)    keys.push(SCORE_CONTEXT_KEYS.SCORE_IA_LEADS_ALMOSTWIN);
    }

    // Joueur proche de gagner
    if (JoueurGagnePresque) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_J_ALMOST_WIN);

      if (diff <= -300)     keys.push(SCORE_CONTEXT_KEYS.SCORE_J_DOMINATES_ALMOSTWIN);
      else if (diff < 0)    keys.push(SCORE_CONTEXT_KEYS.SCORE_J_LEADS_ALMOSTWIN);
    }

    // ----- Fallbacks génériques -----

    if (diff > 0 && diff !== 0 && (scorePlayer > 200 || scoreIA > 200)) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_IA_LEADS_GENERIC);
    }
    else if (diff < 0 && (scorePlayer > 200 || scoreIA > 200)) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_J_LEADS_GENERIC);
    }
    else if (diff !== 0 && (scorePlayer > 200 || scoreIA > 200)) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_BALANCED_GENERIC);
    }

    return keys;
  }

  const scoreContextKeys = computeScoreContexts({
    diff,
    scoreIA,
    scorePlayer,
    IAGagnePresque,
    JoueurGagnePresque,
  });

  let scoreContextKey = null;

  if (scoreContextKeys.includes(SCORE_CONTEXT_KEYS.SCORE_IA_DOMINATES_ALMOSTWIN)) {
    scoreContextKey = SCORE_CONTEXT_KEYS.SCORE_IA_DOMINATES_ALMOSTWIN;
  } else if (scoreContextKeys.includes(SCORE_CONTEXT_KEYS.SCORE_J_DOMINATES_ALMOSTWIN)) {
    scoreContextKey = SCORE_CONTEXT_KEYS.SCORE_J_DOMINATES_ALMOSTWIN;
  } else if (scoreContextKeys.includes(SCORE_CONTEXT_KEYS.SCORE_IA_LEADS_ALMOSTWIN)) {
    scoreContextKey = SCORE_CONTEXT_KEYS.SCORE_IA_LEADS_ALMOSTWIN;
  } else if (scoreContextKeys.includes(SCORE_CONTEXT_KEYS.SCORE_J_LEADS_ALMOSTWIN)) {
    scoreContextKey = SCORE_CONTEXT_KEYS.SCORE_J_LEADS_ALMOSTWIN;
  } else if (scoreContextKeys.includes(SCORE_CONTEXT_KEYS.SCORE_IA_ALMOST_WIN)) {
    scoreContextKey = SCORE_CONTEXT_KEYS.SCORE_IA_ALMOST_WIN;
  } else if (scoreContextKeys.includes(SCORE_CONTEXT_KEYS.SCORE_J_ALMOST_WIN)) {
    scoreContextKey = SCORE_CONTEXT_KEYS.SCORE_J_ALMOST_WIN;
  } else if (scoreContextKeys.includes(SCORE_CONTEXT_KEYS.SCORE_IA_DOMINATES)) {
    scoreContextKey = SCORE_CONTEXT_KEYS.SCORE_IA_DOMINATES;
  } else if (scoreContextKeys.includes(SCORE_CONTEXT_KEYS.SCORE_J_DOMINATES)) {
    scoreContextKey = SCORE_CONTEXT_KEYS.SCORE_J_DOMINATES;
  } else if (scoreContextKeys.length > 0) {
    scoreContextKey = scoreContextKeys[0];
  }

  // ======================================================
  // ==========  Sélection de la clé & valence  ===========  
  // ======================================================

  let dialogueKey = null;
  let valence     = 0;

  if (eventKey && EVENT_VALENCE.hasOwnProperty(eventKey)) {
    dialogueKey = eventKey;
    valence     = EVENT_VALENCE[eventKey];
  }
  else if (scoreContextKey && SCORE_CONTEXT_VALENCE.hasOwnProperty(scoreContextKey)) {
    dialogueKey = scoreContextKey;
    valence     = SCORE_CONTEXT_VALENCE[scoreContextKey];
  }

  console.log("dialogueKey:", dialogueKey);

  return {
    dialogueKey,  // clé de dialogue à utiliser dans DIALOGUE_EVENTS / DIALOGUE_SCORE
    valence       // score émotionnel global (négatif / neutre / positif)
  };
}
