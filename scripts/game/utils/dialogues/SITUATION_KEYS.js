// ======================================================
// ==========     Clés d’événements IA (dialogues) ======
// ======================================================
//
// Rôle du module.
// ----------------
// Définir l’ensemble des “situations clefs” détectées par
// CChooseSentance() : renversements, annonces fortes,
// catastrophes, vols d’atout, etc.
//
// Chaque clé décrit *un contexte précis* vécu par l’IA,
// et permet d’aller piocher une réplique cohérente dans
// DIALOGUE_EVENTS[IA][clé].
//
// Ce que couvre ce fichier.
// --------------------------
// 1) Début de partie
// 2) Annonces du joueur (faibles / fortes)
// 3) Annonces de l’IA (faibles / fortes)
// 4) Renversements & “almost”
// 5) États globaux de domination
// 6) Vols de 10/As, et vols d’atout (7 d’atout)
// 7) Cas narratifs extrêmes : cascade, collapse, punition…
//
// Remarque.
// ----------
// Les valeurs sont purement symboliques : aucun calcul ici.
// La logique est assurée par CChooseSentance().
//
// ======================================================

const SITUATION_KEYS = Object.freeze({

  // --- 0) Début de partie ---
  GAME_START:           'GAME_START',            // Lancement de la manche

  // --- 1) Annonces du joueur ---
  J_STRONG_LEAD:        'J_Strong_Lead',         // Joueur fait une annonce forte et reste devant
  J_STRONG_COMEBACK:    'J_Strong_Comeback',     // Joueur annonce fort et remonte
  J_WEAK_LEAD:          'J_Weak_Lead',           // Joueur petite annonce en tête
  J_WEAK_COMEBACK:      'J_Weak_Comeback',       // Joueur petite annonce en retard

  // --- 2) Annonces de l’IA ---
  IA_STRONG_LEAD:       'IA_Strong_Lead',        // IA annonce fort alors qu’elle mène
  IA_STRONG_COMEBACK:   'IA_Strong_Comeback',    // IA annonce fort en remontant
  IA_WEAK_LEAD:         'IA_Weak_Lead',          // IA petite annonce en tête
  IA_WEAK_COMEBACK:     'IA_Weak_Comeback',      // IA petite annonce en retard

  // --- 3) Renversements / transitions ---
  IA_FLIP:              'IA_Flip',               // IA passe derrière → devant
  J_FLIP:               'J_Flip',                // Joueur passe derrière → devant
  IA_ALMOST:            'IA_Almost',             // IA remonte franchement mais pas assez
  J_ALMOST:             'J_Almost',              // Joueur remonte sans repasser devant

  // --- 4) État global de la partie ---
  IA_DOMINATES:         'IA_Dominates',          // IA mène très largement
  IA_CRUSHED:           'IA_Crushed',            // IA se fait écraser
  IA_ALMOST_WIN:        'IA_AlmostWin',          // IA proche des 1000 points
  J_ALMOST_WIN:         'J_AlmostWin',           // Joueur proche des 1000 points
  TIGHT:                'Tight',                 // Partie serrée (écart faible)

  // --- 5) Vols de cartes importantes ---
  IA_STEALS_10A:        'IA_Steals_10A',         // IA prend un 10 ou un As au joueur
  J_STEALS_10A:         'J_Steals_10A',          // Joueur prend un 10 ou un As à l’IA

  IA_STEALS_TRUMP:      'IA_Steals_Trump',       // IA vole le 7 d’atout
  J_STEALS_TRUMP:       'J_Steals_Trump',        // Joueur vole le 7 d’atout

  // --- 6) Cas narratifs / “forts” ---
  IA_BLOCKED:           'IA_Blocked',            // IA empêchée de déclarer
  IA_CASCADE:           'IA_Cascade',            // Plusieurs mauvaises nouvelles à la suite
  IA_COLLAPSE:          'IA_Collapse',           // Effondrement total
  IA_MISERY:            'IA_Misery',             // IA totalement dépouillée
  IA_PUNISHED:          'IA_Punished',           // IA punie juste après une tentative
});
