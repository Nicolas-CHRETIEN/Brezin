// ======================================================
// ==============  Initialiser une nouvelle partie  ==============
// ======================================================
//
// Rôle.
// ----
// Construire le paquet (2×32 cartes), le mélanger, décider aléatoirement qui commence,
// initialiser l’objet d’état global `window.S` et déclencher le rendu initial.
//
// Étapes.
// -------
// 1) Construire les 64 cartes (2 jeux de 32) avec leurs métadonnées.
// 2) Déterminer au hasard le premier joueur et initialiser l’état global `S`.
// 3) Mettre à jour.
//
// Remarque.
// ---------
// L’atout, la distribution et le scoring dépendant de l’atout sont gérés plus tard
// par les étapes dédiées (ex. `listenerDeal`). Ici, on pose l’état de départ.
//

function listenerInit() {
  // 1) Fabrique les cartes (non mélangées).
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

  // 2) Premier joueur aléatoire et état initial.
  const start = (Math.random() < 0.5) ? "player" : "computer";

  window.S = {
    init: true,
    playFirst: start,
    starter: start,
    stage: 'choiceDifficulty',
    difficulty: undefined,
    trump: null,
    stack: CARDS,
    playerCardPlayed: null,
    computerCardPlayed: null,
    handPlayer: [],
    handComputer: [],
    trickPlayer: [],
    trickComputer: [],
    declarationsAvailablePlayer: [],
    declarationsAvailableComputer: [],
    score: {
      player1: 0,
      player2: 0,
      declarationsListP1: [],
      declarationsListP2: [],
      round: 0,
      previousRounds: []
    }
  };

  // 3) Mettre à jour.
  renderGame();
}