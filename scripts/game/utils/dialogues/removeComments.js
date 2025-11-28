window.showComments = true; // valeur par défaut

const btnComments = document.getElementById("btnCommentsToggle");

btnComments.addEventListener("click", () => {
  showComments = !showComments;

  // bascule l'état visuel
  btnComments.classList.toggle("is-off", !showComments);
});