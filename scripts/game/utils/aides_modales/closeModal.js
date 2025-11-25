// ======================================================
// ============  Fermeture de la modale active  ============
// ======================================================
// Rôle.
// ----
// Ferme la fenêtre modale en cours en réinitialisant son contenu
// et en retirant la classe d’ouverture sur le conteneur racine.
//
// Étapes.
// -------
// 1) Récupère le conteneur principal via ensureModalRoot().
// 2) Vide son contenu HTML.
// 3) Retire la classe “modal-root--open” pour masquer la modale.

function closeModal() {
  const root = ensureModalRoot();
  root.innerHTML = "";
  root.classList.remove("modal-root--open");
}