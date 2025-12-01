/* ======================================================
   ===============  Affichage des GIFs finaux  ===========
   ------------------------------------------------------
   Rôle.
   -----
   Afficher une animation GIF pendant 5 secondes dans
   un conteneur donné (cartes d’annonces, fin de manche,
   réactions IA, etc.).

   Ce que fait la fonction.
   ------------------------
   1) Vide le conteneur.
   2) Ajoute l’image GIF correspondante.
   3) Attend 5 secondes.
   4) Retire automatiquement le GIF.
   5) Exécute un callback optionnel (onDone).

   Notes.
   ------
   - Les GIFs sont stockés sous /images/gifs/.
   - Le nom du GIF dépend souvent du personnage choisi
     selon la difficulté (END_GIF_BY_DIFF).
   ====================================================== */

const GIF_BASE = "images/gifs/";

// Associe difficulté → personnage
const END_GIF_BY_DIFF = {
  expert: "Andry",
  hard:   "Jehanne",
  normal: "Perrot",
  easy:   "Radegonde"
};

/**
 * Affiche un GIF dans un container pendant 5s.
 * @param {HTMLElement} container - Élément DOM cible.
 * @param {string} fileName       - Nom du fichier GIF.
 * @param {function} [onDone]     - Callback optionnel exécuté après retrait.
 */
function showEndGif(container, fileName, onDone) {

  // Reset de la zone
  container.innerHTML = "";

  // Image GIF
  const gif = el("img", {
    class: "decl-anim-gif",
    src: GIF_BASE + fileName,
    alt: fileName
  });
  container.append(gif);

  // Retrait automatique après 5 secondes
  setTimeout(() => {
    container.innerHTML = "";
    onDone && onDone();  // callback simple et propre
  }, 5000);
}
