// ======================================================
// ============  Activation d’un écran (router)  ============
// ======================================================
// Rôle.
// ----
// Affiche un écran unique parmi ceux du router en ajoutant
// la classe `screen--active` au bon élément et en la retirant des autres.
//
// Étapes.
// -------
// 1) Parcourt toutes les paires (nom, élément) de SCREENS.
// 2) Active celui dont le nom correspond à `screenName`.
// 3) Désactive tous les autres via classList.toggle().

function setActive(screenName) {
  for (const [name, el] of Object.entries(SCREENS)) {
    el.classList.toggle('screen--active', name === screenName);
  }

  // Notifie qu’un écran a changé
  try {
    document.dispatchEvent(new CustomEvent("screen:changed", { detail: { screen: screenName } }));
  } catch {}
}
