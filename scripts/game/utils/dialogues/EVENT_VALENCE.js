// Poids "valence" des événements (du point de vue de l'IA)
// -3 = très mauvais / catastrophe
// -2 = très mauvais
// -1 = plutôt mauvais
//  0 = neutre
// +1 = plutôt bon
// +2 = très bon
// +3 = triomphe

const EVENT_VALENCE = Object.freeze({
  [SITUATION_KEYS.IA_CASCADE]:         -3,
  [SITUATION_KEYS.IA_COLLAPSE]:        -3,
  [SITUATION_KEYS.IA_MISERY]:          -3,
  [SITUATION_KEYS.IA_PUNISHED]:        -2,
  [SITUATION_KEYS.IA_BLOCKED]:         -1,

  [SITUATION_KEYS.IA_FLIP]:            +2,
  [SITUATION_KEYS.J_FLIP]:             -2,
  [SITUATION_KEYS.IA_ALMOST]:          +1,
  [SITUATION_KEYS.J_ALMOST]:           -1,

  [SITUATION_KEYS.IA_STRONG_LEAD]:     +2,
  [SITUATION_KEYS.IA_STRONG_COMEBACK]: +2,
  [SITUATION_KEYS.IA_WEAK_LEAD]:       +1,
  [SITUATION_KEYS.IA_WEAK_COMEBACK]:   +1,

  [SITUATION_KEYS.J_STRONG_LEAD]:      -2,
  [SITUATION_KEYS.J_STRONG_COMEBACK]:  -2,
  [SITUATION_KEYS.J_WEAK_LEAD]:        -1,
  [SITUATION_KEYS.J_WEAK_COMEBACK]:    -1,

  [SITUATION_KEYS.IA_STEALS_10A]:      +1,
  [SITUATION_KEYS.J_STEALS_10A]:       -1,
  [SITUATION_KEYS.IA_STEALS_TRUMP]:    +1.5,
  [SITUATION_KEYS.J_STEALS_TRUMP]:     -1.5,
});
