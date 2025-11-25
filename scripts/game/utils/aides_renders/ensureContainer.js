// ======================================================
// ============  Assurance de conteneur générique  ============
// ======================================================
// Rôle.
// ----
// Cherche un conteneur dans le DOM parmi plusieurs sélecteurs possibles,
// et en crée un minimaliste en fallback si aucun n’existe.
//
// Étapes.
// -------
// 1) Recherche un élément via qsAny(candidates).
// 2) Si trouvé → le retourne directement.
// 3) Sinon → crée un <div> avec id=fallbackId et styles de base (layout flexible).
// 4) L’ajoute au body pour assurer un affichage visible.
// 5) Retourne le conteneur final.
//
// Paramètres.
// -----------
// - candidates : liste de sélecteurs à tester.
// - fallbackId : identifiant du conteneur à créer si absent.

function ensureContainer(candidates, fallbackId) {
  let root = qsAny(candidates);
  if (root) return root;

  root = document.createElement('div');
  root.id = fallbackId;
  root.style.minHeight = '64px';
  root.style.display = 'flex';
  root.style.gap = '8px';
  root.style.flexWrap = 'wrap';

  document.body.appendChild(root); // fallback visible en bas de page
  return root;
}