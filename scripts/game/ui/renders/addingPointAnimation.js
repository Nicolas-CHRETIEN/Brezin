// ======================================================
// ===============  Affichage des gains  =================
// ======================================================
//
// Rôle du module.
// ----------------
// Afficher visuellement un gain de points (+X) au-dessus du score
// ou dans la zone du dernier pli.
//
// Ce que fait le script.
// -----------------------
// 1) showScoreGain(who, amount)
//    → ajoute un <span class="score-gain">+X</span> dans le score
//      du joueur ou de l’ordinateur.
//    → le span se retire de lui-même à la fin de l’animation CSS.
//
// 2) showTrickPoints(amount)
//    → même principe, mais pour la zone du stock de plis.
//
// Remarque.
// ---------
// Ces fonctions n’interfèrent pas avec ScoreAnimator : elles ne font
// qu’afficher l’animation visuelle instantanée.
//
// Les données nécessaires proviennent de `window.S` mais ne sont pas
// consultées ici : tout est piloté par les paramètres reçus.
// ======================================================


function showScoreGain(who, amount) {
  const selector = (who === "player")
    ? ".score-normal_result-player h3"
    : ".score-normal_result-computer h3";

  const target = document.querySelector(selector);
  if (!target) return;

  const gain = el("span", { class: "score-gain" }, `+${amount}`);
  target.append(gain);

  gain.addEventListener("animationend", () => gain.remove());
}


function showTrickPoints(amount) {
  const target = document.querySelector(".trick-stock");
  if (!target) return;

  const gain = el("span", { class: "score-gain" }, `+${amount}`);
  target.append(gain);

  gain.addEventListener("animationend", () => gain.remove());
}
