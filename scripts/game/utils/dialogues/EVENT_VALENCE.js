// ======================================================
// ==========  Valence émotionnelle des événements  =====
// ======================================================
//
// Rôle du tableau EVENT_VALENCE.
// ------------------------------
// Associer à chaque situation particulière (SITUATION_KEYS)
// un poids émotionnel global appelé *valence*.
//
// Ce poids permet à l’IA :
//   - d’interpréter l’événement comme positif / neutre / négatif,
//   - de choisir une émotion cohérente,
//   - d’ajuster sa probabilité de parler,
//   - de sélectionner un type de réplique adapté.
//
// Barème utilisé (du point de vue de *l'IA*) :
//   -3 : catastrophe absolue
//   -2 : très mauvais
//   -1 : défavorable
//    0 : neutre
//   +1 : favorable
//   +2 : très bon / avantage marqué
//   +3 : triomphe total
//
// Ce tableau ne change *jamais* la logique du jeu :
// il ne sert qu’à orienter le module de dialogues.
//
// ------------------------------------------------------

const EVENT_VALENCE = Object.freeze({

  // Effondrements / catastrophes majeures pour l’IA
  [SITUATION_KEYS.IA_CASCADE]:   -3,
  [SITUATION_KEYS.IA_COLLAPSE]:  -3,
  [SITUATION_KEYS.IA_MISERY]:    -3,

  // Claques sévères mais non-catastrophiques
  [SITUATION_KEYS.IA_PUNISHED]:  -2,
  [SITUATION_KEYS.IA_BLOCKED]:   -1,

  // Renversements de situation
  [SITUATION_KEYS.IA_FLIP]:      +2,
  [SITUATION_KEYS.J_FLIP]:       -2,
  [SITUATION_KEYS.IA_ALMOST]:    +1,
  [SITUATION_KEYS.J_ALMOST]:     -1,

  // Annonces IA selon situation
  [SITUATION_KEYS.IA_STRONG_LEAD]:     +2,
  [SITUATION_KEYS.IA_STRONG_COMEBACK]: +2,
  [SITUATION_KEYS.IA_WEAK_LEAD]:       +1,
  [SITUATION_KEYS.IA_WEAK_COMEBACK]:   +1,

  // Annonces Joueur selon situation
  [SITUATION_KEYS.J_STRONG_LEAD]:      -2,
  [SITUATION_KEYS.J_STRONG_COMEBACK]:  -2,
  [SITUATION_KEYS.J_WEAK_LEAD]:        -1,
  [SITUATION_KEYS.J_WEAK_COMEBACK]:    -1,

  // Vols de 10 / As
  [SITUATION_KEYS.IA_STEALS_10A]:      +1,
  [SITUATION_KEYS.J_STEALS_10A]:       -1,

  // Vols d’atout — plus impactants que les 10/As
  [SITUATION_KEYS.IA_STEALS_TRUMP]:    +1.5,
  [SITUATION_KEYS.J_STEALS_TRUMP]:     -1.5,
});
