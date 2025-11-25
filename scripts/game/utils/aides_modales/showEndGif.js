// Chemin de base vers les gifs.
const GIF_BASE = "images/gifs/";

// mapping difficulté → nom de personnage.
const END_GIF_BY_DIFF = {
  expert: "Andry",
  hard:   "Jehanne",
  normal: "Perrot",
  easy:   "Radegonde"
};

function showEndGif(container, fileName) {
  if (!container || !fileName) return;

  container.innerHTML = "";

  const gif = el("img", {
    class: "decl-anim-gif",
    src: GIF_BASE + fileName,
    alt: fileName
  });

  container.append(gif);

  // Après 5 secondes → retirer le GIF
  setTimeout(() => {
    container.innerHTML = "";     // supprime l’image
    if (typeof onDone === "function") onDone(); // callback optionnel
  }, 5000);
}
