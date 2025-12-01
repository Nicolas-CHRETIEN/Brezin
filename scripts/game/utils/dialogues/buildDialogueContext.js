// ======================================================
// ============  Contexte pour dialogues IA  ============
// ======================================================
//
// Rôle.
// -----
// Construire un objet compact décrivant l’état du jeu pour
// le moteur dialogue : scores, annonces, atout, cartes jouées,
// IA active, etc.
//
// Ce que fait la fonction.
// ------------------------
// 1) Lit les scores bruts affichés à l’écran (player1 / player2).
// 2) Identifie si une annonce vient d’être faite (lastDeclaration).
// 3) Simule les scores APRÈS prise en compte du gain (utile pour IA).
// 4) Analyse les annonces possibles pour l’IA à cet instant.
// 5) Retourne un objet complet utilisé par :
//        · CChooseSentance()
//        · pickEmotionFromValence()
//        · AIGenerateDialogue()
//
// Remarque.
// ---------
// Toutes les données proviennent uniquement de window.S.
// Aucune vérification inutile n’est ajoutée.
//


function buildDialogueContext() {

  // --- Scores bruts (affichage actuel) ---
  const rawScoreIA     = Number(S.score.player2) || 0;
  const rawScorePlayer = Number(S.score.player1) || 0;

  // Annonce en cours ?
  const hasDecl = Array.isArray(S.score.lastDeclaration) &&
                  S.score.lastDeclaration.length > 0;

  // --- Scores simulés après ajout du gain d'annonce ---
  let scoreIA     = rawScoreIA;
  let scorePlayer = rawScorePlayer;

  const IAJustDeclared     = hasDecl && S.playFirst === "computer";
  const PlayerJustDeclared = hasDecl && S.playFirst === "player";

  if (IAJustDeclared)     scoreIA     += S.score.lastDeclaration[0].gain || 0;
  if (PlayerJustDeclared) scorePlayer += S.score.lastDeclaration[0].gain || 0;

  // --- Meilleure annonce que l’IA aurait pu faire ---
  const annoncePossible        = possibleDeclarations(S.handComputer);
  let meilleurAnnoncePossible  = null;

  if (annoncePossible.length) {
    annoncePossible.sort((a, b) => b.gain - a.gain);
    meilleurAnnoncePossible = annoncePossible[0];
  }

  // --- Contexte retourné au moteur dialogue ---
  return {

    // Scores visibles
    scoreIA:     rawScoreIA,
    scorePlayer: rawScorePlayer,
    diff:        rawScoreIA - rawScorePlayer,

    // Scores simulés (après l’annonce)
    scoreIAAfter:     scoreIA,
    scorePlayerAfter: scorePlayer,
    diffAfter:        scoreIA - scorePlayer,

    // Dernière annonce (ou null)
    annonce: hasDecl ? S.score.lastDeclaration[0] : null,

    // Atout retourné (vient de ta logique existante)
    trump: (typeof returnedTrumpCard !== "undefined") ? returnedTrumpCard : null,

    playFirst: S.playFirst,

    // IA sélectionnée selon S.difficulty
    aiId: getCurrentAIId(),

    // Nom de session utilisateur
    playerName: (typeof userName !== "undefined") ? userName : "Joueur",

    // Carte jouée par le joueur (10 / as)
    cartevolee: S.playerCardPlayed?.rang || null,

    // Carte jouée par l’IA
    carteprise: S.computerCardPlayed?.rang || null,

    // Annonce IA disponible mais empêchée (si pertinente pour tes lignes)
    annoncePossible: meilleurAnnoncePossible
      ? meilleurAnnoncePossible.name
      : null,

    // Flags d’état utiles pour les répliques
    IAJustDeclared,
    PlayerJustDeclared,
    hasDecl
  };
}
