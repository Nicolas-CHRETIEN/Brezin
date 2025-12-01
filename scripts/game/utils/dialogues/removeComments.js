// ======================================================
// ==========  Toggle affichage IA & commentaires  =======
// ======================================================
//
// Rôle.
// ------
// Gérer deux interrupteurs UI :
//   - showComments : activer / masquer les messages textuels de l’IA.
//   - showIA       : activer / masquer entièrement l'IA (émotions, bulles).
//
// Ce que fait le script.
// -----------------------
// 1) Définit les valeurs par défaut dans window.
// 2) Met à jour l’état visuel initial des boutons.
// 3) Ajoute un listener sur chaque bouton pour inverser l’état global.
// 4) Applique la classe CSS `"is-off"` lorsqu’une option est désactivée.
//
// Remarque.
// ---------
// Le reste du moteur de dialogue lit uniquement window.showIA / window.showComments.
//

window.showComments = true;
window.showIA       = true;

// Boutons
const btnComments = document.getElementById("btnCommentsToggle");
const btnIA       = document.getElementById("btnIaToggle");

// État visuel initial
btnComments.classList.toggle("is-off", !window.showComments);
btnIA.classList.toggle("is-off", !window.showIA);

// Toggle commentaires
btnComments.addEventListener("click", () => {
  window.showComments = !window.showComments;
  btnComments.classList.toggle("is-off", !window.showComments);
});

// Toggle IA complète
btnIA.addEventListener("click", () => {
  window.showIA = !window.showIA;
  btnIA.classList.toggle("is-off", !window.showIA);
});
