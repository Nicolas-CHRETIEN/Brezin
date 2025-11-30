window.showComments = true; // valeur par défaut
window.showIA = true;       // valeur par défaut

const btnComments = document.getElementById("btnCommentsToggle");
const btnIA       = document.getElementById("btnIaToggle");

// état visuel initial
btnComments.classList.toggle("is-off", !window.showComments);
btnIA.classList.toggle("is-off", !window.showIA);

btnComments.addEventListener("click", () => {
  window.showComments = !window.showComments;

  // bascule l'état visuel
  btnComments.classList.toggle("is-off", !window.showComments);
});

btnIA.addEventListener("click", () => {
  window.showIA = !window.showIA;

  // bascule l'état visuel
  btnIA.classList.toggle("is-off", !window.showIA);
});
