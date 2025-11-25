// ======================================================
// ============  Rendu du talon (pioche)  ============
// ======================================================
// Rôle.
// ----
// Gérer l’affichage et l’interactivité du talon :
// - Afficher ou masquer la pile selon le nombre de cartes restantes.
// - Autoriser la pioche si le stage courant le permet (“draw” ou “declare”).
// - Déclencher `listenerDraw()` puis relancer `renderGame()` lors d’un clic.
//
// Étapes.
// -------
// 1) Vérifie la présence du conteneur principal (#stack_div).
// 2) Active ou désactive la classe “draw-allowed” selon le stage et le nombre de cartes.
// 3) Attache ou supprime l’événement de clic sur le talon.
// 4) Délègue le rendu graphique des cartes à `renderStackPile()`.
//
function renderStack() {
  const stackDiv = document.getElementById("stack_div");
  const pile = $("#stack-pile");
  const count = S.stack?.length ?? 0;

  if (stackDiv) {
    const drawAllowed = (S.stage === "draw" || S.stage === "declare") && count > 0;
    stackDiv.classList.toggle("draw-allowed", drawAllowed);

    // gestion de l’événement de clic
    stackDiv.onclick = null;
    if (drawAllowed) {
      stackDiv.onclick = () => {
        listenerDraw();
        renderGame();
      };
    }

    // masque le talon si vide
    stackDiv.style.display = count > 0 ? "" : "none";
  }

  renderStackPile();
}