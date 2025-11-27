function buildDialogueContext() {
  console.trace("ici");
  
  // Scores bruts affichés (avant prise en compte du gain de l'annonce en cours).
  const rawScoreIA     = Number(S.score.player2) || 0;
  const rawScorePlayer = Number(S.score.player1) || 0;
  
  const hasDecl = Array.isArray(S.score.lastDeclaration) && S.score.lastDeclaration.length > 0;

  // Copie de travail pour simuler l'état APRÈS annonce.
  let scoreIA     = rawScoreIA;
  let scorePlayer = rawScorePlayer;

  // Quelqu'un vient d'annoncer ?
  const IAJustDeclared     = hasDecl && S.playFirst === "computer";
  const PlayerJustDeclared = hasDecl && S.playFirst === "player";

  const annoncePossible = possibleDeclarations(S.handComputer);

  // Ajouter le gain si annonce en cours (simulation de l'état APRÈS l'animation de score).
  if (IAJustDeclared) {
    scoreIA += S.score.lastDeclaration[0]?.gain || 0;
  }
  if (PlayerJustDeclared) {
    scorePlayer += S.score.lastDeclaration[0]?.gain || 0;
  }

  return {
    // --- Scores AVANT annonce (état visuel actuel) ---
    scoreIA: rawScoreIA,
    scorePlayer: rawScorePlayer,
    diff: rawScoreIA - rawScorePlayer,

    // --- Scores APRÈS annonce (état "logique" simulé) ---
    scoreIAAfter: scoreIA,
    scorePlayerAfter: scorePlayer,
    diffAfter: scoreIA - scorePlayer,

    // Dernière annonce.
    annonce: Array.isArray(S.score?.lastDeclaration)
      ? S.score.lastDeclaration[0]
      : null,

    // Atout retourné.
    trump: typeof returnedTrumpCard !== "undefined"
      ? returnedTrumpCard
      : null,

    playFirst: S.playFirst,

    // IA actuelle (via ta logique AI_BY_DIFF ailleurs).
    aiId: getCurrentAIId(),

    // Nom du joueur (assure-toi que userName existe bien dans ce scope).
    playerName: typeof userName !== "undefined" ? userName : "Joueur",
    

    // Carte jouée par le joueur sur le pli (utile pour volDix, etc.).
    cartevolee: typeof S.playerCardPlayed !== "undefined" && S.playerCardPlayed !== null
      ? S.playerCardPlayed.rang // "10" ou "as"
      : null,

    // Carte jouée par l'IA sur le pli.
    carteprise: typeof S.computerCardPlayed !== "undefined" && S.computerCardPlayed !== null
      ? S.computerCardPlayed.rang // "10" ou "as"
      : null,

    // Annonce possible de l'IA, mais empéchée par le joueur.
    annoncePossible: annoncePossible.length > 0
    ? annoncePossible.name
    : null,
    
    // Petits flags utiles dans les répliques si tu veux t’en servir plus tard.
    IAJustDeclared,
    PlayerJustDeclared,
    hasDecl,
  };
}
