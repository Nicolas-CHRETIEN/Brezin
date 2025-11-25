// ======================================================
// ============  Conteneur des annonces du joueur  ============
// ======================================================
// Rôle.
// ----
// Garantit la présence d’un conteneur #announced-player au-dessus
// de la main du joueur pour afficher ses annonces visuellement.
//
// Étapes.
// -------
// 1) Recherche la racine de la main (#hand-player).
// 2) Si absente → stoppe la création (retour null).
// 3) Cherche un conteneur #announced-player existant.
// 4) S’il n’existe pas → crée un <div> avec le style inline
//    pour l’alignement et le spacing.
// 5) L’insère juste au-dessus de la main.
// 6) Retourne le conteneur (existant ou nouvellement créé).

function ensureAnnouncedPlayerContainer() {
  const handRoot = document.querySelector('#hand-player');
  if (!handRoot) return null;

  let cont = document.querySelector('#announced-player');
  if (!cont) {
    cont = document.createElement('div');
    cont.id = 'announced-player';
    cont.className = 'announced-player-row';

    // Layout simple et aligné à la main
    cont.style.display = 'flex';
    cont.style.flexWrap = 'wrap';
    cont.style.gap = '8px';
    cont.style.minHeight = '64px';
    cont.style.marginBottom = '12px';

    handRoot.parentNode.insertBefore(cont, handRoot);
  }
  return cont;
}