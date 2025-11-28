// ======================================================
// ==========  Poids "valence" des situations  ==========
// ==========  (du point de vue de l'IA)  ===============
// ======================================================
//


function CChooseSentance () {

  // Note de la situation globale (si tu veux encore t’en servir ailleurs).
  const gamesRate = calculateSituationRate(); // Note de la partie (positive si l'IA gagne).

  // Score des joueurs (état actuel de l'affichage, avant ajout de l'annonce).
  let scoreIA = Number(S.score.player2) || 0; 
  let scorePlayer = Number(S.score.player1) || 0;

  // Vérifier qu'il y a au moins 1 annonce dans lastDeclaration.
  const hasDecl = Array.isArray(S.score.lastDeclaration) && S.score.lastDeclaration.length > 0;

  // Quelqu'un vient d'annoncer ?
  const IAJustDeclared     = hasDecl && S.playFirst === "computer";
  const PlayerJustDeclared = hasDecl && S.playFirst === "player";
  // État AVANT d'ajouter le gain de l'annonce.
  const IAPerd   = scoreIA < scorePlayer;
  const IAGagne  = scoreIA > scorePlayer && scoreIA > 0;

  // Ajouter le gain si annonce en cours (on simule l'état APRÈS l'animation de score).
  // Ajouter également les 10 d'atout annoncés si plusieurs annonces simultanées.
  const nbDe7 = S.score.lastDeclaration?.filter(d => d.name === "sept d'atout");

  if (IAJustDeclared)     scoreIA     += S.score.lastDeclaration[0]?.gain + (nbDe7.length * 10);
  if (PlayerJustDeclared) scorePlayer += S.score.lastDeclaration[0]?.gain + (nbDe7.length * 10);

  // IA perdait avant, perd encore après.
  const IAPerdToujours      = IAPerd  && scoreIA < scorePlayer;
  // Joueur perdait avant (IA gagnait), perd encore après.
  const JoueurPerdToujours  = IAGagne && scoreIA > scorePlayer;
  // IA se rattrape : perdait avant, vient d'annoncer, et passe devant.
  const IARattrape          = IAPerd  && IAJustDeclared     && scoreIA > scorePlayer;
  // Joueur se rattrape : perdait avant, vient d'annoncer, et passe devant.
  const JoueurRattrape      = IAGagne && PlayerJustDeclared && scoreIA < scorePlayer;

  // Vol ou Prise de l'atout.
  const annonceAtout = hasDecl && S.score.lastDeclaration[0]?.name === "sept d'atout";
  const annoncesFaites = [...S.score.declarationsListP1, ...S.score.declarationsListP2];
  const premierSept = annoncesFaites.filter(d => d.name === "sept d'atout").length < 2;
  const bonAtout = returnedTrumpCard.score > 13; // L'atout initial est une carte du 250.
  const volAtout = IAJustDeclared        && annonceAtout && premierSept && bonAtout; // L'IA récupère un bon atout.
  const priseAtout = PlayerJustDeclared && annonceAtout && premierSept && bonAtout; // Le joueur récupère un bon atout.

  // Différence de score (APRÈS prise en compte de l'annonce en cours).
  const diff = scoreIA - scorePlayer;
  
  const largeVictoire = diff > 300;
  const largeDefaite  = diff < -300;
  const dispute       = diff < 200 && diff > -200;
  // Rattrape presque (on réduit bien l'écart, mais sans repasser devant).
  const IARattrapePresque     = IAJustDeclared     && IAPerdToujours     && dispute;
  const JoueurRattrapePresque = PlayerJustDeclared && JoueurPerdToujours && dispute;

  // Partie bientôt finie.
  const IAGagnePresque     = diff > 0 && scoreIA     > 800;
  const JoueurGagnePresque = diff < 0 && scorePlayer > 800;

  // Annonce qui vient d'être faite.
  let annonce = {};
  if (hasDecl) annonce = S.score.lastDeclaration[0];

  // Force de l'annonce de l'IA.
  const IAannonceFaible     = IAJustDeclared     && annonce.gain < 50;
  const IAannonceForte      = IAJustDeclared     && annonce.gain >= 50 && annonce.gain < 100;
  const IAannonceTresForte  = IAJustDeclared     && annonce.gain >= 100;

  // Force de l'annonce du joueur.
  const JannonceFaible      = PlayerJustDeclared && annonce.gain < 50;
  const JannonceForte       = PlayerJustDeclared && annonce.gain >= 50 && annonce.gain < 100;
  const JannonceTresForte   = PlayerJustDeclared && annonce.gain >= 100;

  // un 10 ou un as a été pris à un joueur.
  const volDix =
    S.playFirst === "computer" &&
    S.playerCardPlayed &&
    (S.playerCardPlayed.rang === "10" || S.playerCardPlayed.rang === "as");

  const priseDix =
    S.playFirst === "player" &&
    S.computerCardPlayed &&
    (S.computerCardPlayed.rang === "10" || S.computerCardPlayed.rang === "as");

  // Empêchement d'une annonce.
  const annoncesPossiblesIA = possibleDeclarations(S.handComputer);
  const IAEmpechee = S.playFirst === "player" && annoncesPossiblesIA.length > 0 && S.stack.length === 1;

  // ======================================================
  // ==========  Détermination de la situation  ===========
  // ======================================================

  let eventKey = null;

  // --- 1) Cascades / catastrophes pour l'IA ---
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

  // --- 2) Renversements simples ---
  else if (IARattrape) {
    eventKey = SITUATION_KEYS.IA_FLIP;
  } else if (JoueurRattrape) {
    eventKey = SITUATION_KEYS.J_FLIP;
  } else if (IARattrapePresque) {
    eventKey = SITUATION_KEYS.IA_ALMOST;
  } else if (JoueurRattrapePresque) {
    eventKey = SITUATION_KEYS.J_ALMOST;
  }

  // --- 3) Vols d'atout / 10 ou As ---
  else if (volAtout) {
    eventKey = SITUATION_KEYS.IA_STEALS_TRUMP;
  } else if (priseAtout) {
    eventKey = SITUATION_KEYS.J_STEALS_TRUMP;
  } else if (volDix) {
    eventKey = SITUATION_KEYS.IA_STEALS_10A;
  } else if (priseDix) {
    eventKey = SITUATION_KEYS.J_STEALS_10A;
  }

  // --- 4) Annonces en fonction de l'état (lead / comeback) ---
  else if (IAannonceTresForte || IAannonceForte) {
    if (IAGagne) {
      eventKey = SITUATION_KEYS.IA_STRONG_LEAD;
    } else if (IAPerd) {
      eventKey = SITUATION_KEYS.IA_STRONG_COMEBACK;
    }
  } else if (IAannonceFaible) {
    if (IAGagne) {
      eventKey = SITUATION_KEYS.IA_WEAK_LEAD;
    } else if (IAPerd) {
      eventKey = SITUATION_KEYS.IA_WEAK_COMEBACK;
    }
  } else if (JannonceTresForte || JannonceForte) {
    if (IAPerd) {
      eventKey = SITUATION_KEYS.J_STRONG_LEAD;
    } else if (IAGagne) {
      eventKey = SITUATION_KEYS.J_STRONG_COMEBACK;
    }
  } else if (JannonceFaible) {
    if (IAPerd) {
      eventKey = SITUATION_KEYS.J_WEAK_LEAD;
    } else if (IAGagne) {
      eventKey = SITUATION_KEYS.J_WEAK_COMEBACK;
    }
  }

// ============================================================
// ==========     Contexte global du score (IA)    ============
// ============================================================
//
// Retourne un tableau de clés SCORE_CONTEXT_KEYS correspondant
// à la situation du score actuel.
//
// Basé sur :
//   - diff (scoreIA - scorePlayer)
//   - scoreIA, scorePlayer
//   - IA presque gagnante
//   - Joueur presque gagnant
//
// Cohérent avec CChooseSentance().
//


function computeScoreContexts({ diff, scoreIA, scorePlayer, IAGagnePresque, JoueurGagnePresque }) {
  
  const keys = [];

  // ============================================================
  // ==================  Écart de score global  ==================
  // ============================================================

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

  // Vraiment équilibré mais différent de 0 (sinon certaines phrases ne sont plus cohérentes).
  if (Math.abs(diff) < 40 && diff !== 0 && (scorePlayer > 200 || scoreIA > 200)) {
    keys.push(SCORE_CONTEXT_KEYS.SCORE_TIGHT_BALANCED);
  }

  // ============================================================
  // =====================  Fin de partie  =======================
  // ============================================================

  // IA proche de gagner
  if (IAGagnePresque) {
    keys.push(SCORE_CONTEXT_KEYS.SCORE_IA_ALMOST_WIN);

    if (diff >= 300) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_IA_DOMINATES_ALMOSTWIN);
    }
    else if (diff > 0) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_IA_LEADS_ALMOSTWIN);
    }
  }

  // Joueur proche de gagner
  if (JoueurGagnePresque) {
    keys.push(SCORE_CONTEXT_KEYS.SCORE_J_ALMOST_WIN);

    if (diff <= -300) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_J_DOMINATES_ALMOSTWIN);
    }
    else if (diff < 0) {
      keys.push(SCORE_CONTEXT_KEYS.SCORE_J_LEADS_ALMOSTWIN);
    }
  }

  // ============================================================
  // ==================  Générique fallback ======================
  // ============================================================

  // S'assurer que le score n'est pas identique et que la partie est bien entammée
  // Pour la cohérence des phrases.
  if (diff > 0 && diff !== 0  && (scorePlayer > 200 || scoreIA > 200)) {
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
  //
  // 1) On privilégie toujours un eventKey spécifique (IA_CASCADE, IA_STEALS_TRUMP, etc.)
  // 2) Si aucun eventKey, on tombe sur un contexte de score.
  // 3) On récupère la valence dans les tables ci-dessus.
  //

  let dialogueKey = null;
  let valence = 0;

  if (eventKey && EVENT_VALENCE.hasOwnProperty(eventKey)) {
    dialogueKey = eventKey;
    valence = EVENT_VALENCE[eventKey];
  } else if (scoreContextKey && SCORE_CONTEXT_VALENCE.hasOwnProperty(scoreContextKey)) {
    dialogueKey = scoreContextKey;
    valence = SCORE_CONTEXT_VALENCE[scoreContextKey];
  }
  console.log("dialogueKey: " + dialogueKey);
  

  return {
    dialogueKey, // nom de la clé à utiliser pour choisir le tableau de répliques
    valence      // score émotionnel global (négatif / neutre / positif)
  };
}
