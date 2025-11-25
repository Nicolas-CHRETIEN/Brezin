// ======================================================
// ============  Router simple (gestion des écrans)  ============
// ======================================================
// Rôle.
// ----
// Centralise les références vers les trois écrans principaux de l’application :
// - Accueil (home)
// - Règles du jeu (rules)
// - Partie en cours (game)
//
// Étapes.
// -------
// 1) Sélectionne chaque élément <section> ou <div> correspondant à un écran.
// 2) Les stocke dans un objet SCREENS pour un accès rapide dans tout le jeu.

const SCREENS = {
  home:  document.getElementById('screen-home'),
  rules: document.getElementById('screen-rules'),
  game:  document.getElementById('screen-game'),
};