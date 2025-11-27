/* ======================================================
   ==========  Clés d'événements (situations IA)  ==========
   ====================================================== */

const SITUATION_KEYS = Object.freeze({

  // --- Annonces du joueur ---
  J_STRONG_LEAD:        'J_Strong_Lead',        // Joueur grosse annonce en tête
  J_STRONG_COMEBACK:    'J_Strong_Comeback',    // Joueur grosse annonce en retard
  J_WEAK_LEAD:          'J_Weak_Lead',          // Joueur petite annonce en tête
  J_WEAK_COMEBACK:      'J_Weak_Comeback',      // Joueur petite annonce en retard

  // --- Annonces de l'IA ---
  IA_STRONG_LEAD:       'IA_Strong_Lead',       // IA grosse annonce en tête
  IA_STRONG_COMEBACK:   'IA_Strong_Comeback',   // IA grosse annonce en retard
  IA_WEAK_LEAD:         'IA_Weak_Lead',         // IA petite annonce en tête
  IA_WEAK_COMEBACK:     'IA_Weak_Comeback',     // IA petite annonce en retard

  // --- Renversements / rattrapages ---
  IA_FLIP:              'IA_Flip',              // IA passe de perdante à gagnante
  J_FLIP:               'J_Flip',               // Joueur passe de perdant à gagnant
  IA_ALMOST:            'IA_Almost',            // IA se rapproche mais reste derrière
  J_ALMOST:             'J_Almost',             // Joueur se rapproche mais reste derrière

  // --- État global de la partie ---
  IA_DOMINATES:         'IA_Dominates',         // IA domine largement
  IA_CRUSHED:           'IA_Crushed',           // IA se fait écraser
  IA_ALMOST_WIN:        'IA_AlmostWin',         // IA presque victoire
  J_ALMOST_WIN:         'J_AlmostWin',          // Joueur presque victoire
  TIGHT:                'Tight',                // Partie équilibrée

  // --- Événements de cartes forts ---
  IA_STEALS_10A:        'IA_Steals_10A',        // IA prend un 10 ou un As
  J_STEALS_10A:         'J_Steals_10A',         // Joueur prend un 10 ou un As

  IA_STEALS_TRUMP:      'IA_Steals_Trump',      // IA vole le 7 d'atout
  J_STEALS_TRUMP:       'J_Steals_Trump',       // Joueur vole le 7 d'atout

  // --- Cas narratifs / catastrophes ---
  IA_BLOCKED:           'IA_Blocked',           // IA empêchée de déclarer
  IA_CASCADE:           'IA_Cascade',           // Série de très mauvaises nouvelles
  IA_COLLAPSE:          'IA_Collapse',          // Effondrement total
  IA_MISERY:            'IA_Misery',            // IA dépouillée
  IA_PUNISHED:          'IA_Punished',          // IA punie après tentative
});
