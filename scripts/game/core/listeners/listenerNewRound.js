// ======================================================
// ==============  Préparer le round suivant  ==============
// ======================================================
//
// Rôle.
// ----
// Déterminer qui commence le prochain round, reconstruire un nouveau paquet,
// archiver les scores et annonces de la manche écoulée, réinitialiser l’état
// nécessaire, puis passer à la phase de distribution.
//
// Étapes.
// -------
// 1) Fixer le premier joueur du prochain round selon le starter et la parité du round.
// 2) Recréer un paquet complet (2 × 32 cartes) et le mélanger.
// 3) Archiver le round courant dans `S.score.previousRounds` (scores cumulés + annonces).
// 4) Réinitialiser le score de manche, les plis et l’étape, puis rendre l’interface.
//

function listenerNewRound() {
  // 1) Qui commence au prochain round.
  if (S.starter === "computer" && S.score.round % 2 === 0) {
    // Round pair → le joueur commence.
    S.playFirst = 'player';
    S.computerCardPlayed = null;
    S.trump = null;
  } else {
    // Round impair → l’ordinateur commence.
    S.playFirst = 'computer';
    S.computerCardPlayed = null;
    S.trump = null;
    S.stage = 'deal';
  }

  // 2) Recréer et mélanger un paquet complet (2 × 32).
  const RANKS = ["7", "8", "9", "valet", "dame", "roi", "10", "as"];
  const SUITS = [
    { couleur: "trèfle"  },
    { couleur: "coeur"   },
    { couleur: "carreau" },
    { couleur: "pique"   }
  ];

  const CARDS = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      for (let copy = 1; copy <= 2; copy++) {
        CARDS.push({
          name: `${rank}_de_${suit.couleur}_${copy}`,
          svg:  `images/${rank}_de_${suit.couleur}.svg`,
          couleur: suit.couleur,
          rang: rank,
          annonces: []
        });
      }
    }
  }

  const deck = [...CARDS];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  S.stack = deck;

  // 3) Archiver le round courant (scores cumulés + annonces).
  if (!S.score.previousRounds) {
    // Première manche → initialisation de la structure d’archives.
    S.score.previousRounds = {
      player: S.score.player1,
      computer: S.score.player2,
      declarationsPlayer: [...(S.score.declarationsListP1 || [])],
      declarationsComputer: [...(S.score.declarationsListP2 || [])]
    };
  } else {
    // Manches suivantes → cumul des scores et agrégation des annonces.
    S.score.previousRounds.player   = (S.score.previousRounds.player   || 0) + S.score.player1;
    S.score.previousRounds.computer = (S.score.previousRounds.computer || 0) + S.score.player2;

    S.score.previousRounds.declarationsPlayer = Array.isArray(S.score.previousRounds.declarationsPlayer)
      ? S.score.previousRounds.declarationsPlayer
      : [];
    S.score.previousRounds.declarationsComputer = Array.isArray(S.score.previousRounds.declarationsComputer)
      ? S.score.previousRounds.declarationsComputer
      : [];

    // Ajout élément par élément (pas de tableau imbriqué).
    S.score.previousRounds.declarationsPlayer.push(...(S.score.declarationsListP1 || []));
    S.score.previousRounds.declarationsComputer.push(...(S.score.declarationsListP2 || []));
  }

  // 4) Réinitialiser pour la manche suivante.
  S.score = {
    player1: S.score.player1,
    player2: S.score.player2,
    declarationsListP1: [],
    declarationsListP2: [],
    round: S.score.round + 1,
    previousRounds: S.score.previousRounds
  };

  // Assurer la purge des listes d’annonces de manche.
  S.score.declarationsListP1.length = 0;
  S.score.declarationsListP2.length = 0;

  // Réinitialiser les plis et passer à la distribution.
  S.trickPlayer = [];
  S.trickComputer = [];
  S.stage = "deal";

  renderGame();
}