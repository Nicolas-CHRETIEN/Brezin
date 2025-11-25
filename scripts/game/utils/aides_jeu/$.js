// ======================================================
// ============  Sélecteurs et utilitaires DOM  ============
// ======================================================
// Rôle.
// ----
// Fournit deux fonctions génériques pour manipuler le DOM :
// - `$()`  : alias rapide de querySelector() avec racine optionnelle.
// - `clear()`: vide le contenu HTML d’un élément donné.
//
// Étapes.
// -------
// 1) `$()` recherche le premier élément correspondant à `sel` dans `root` (document par défaut).
// 2) `clear()` remplace innerHTML de l’élément par une chaîne vide si l’élément existe.

const $ = (sel, root = document) => root.querySelector(sel);
const clear = el => { if (el) el.innerHTML = ""; };