// ======================================================
// ============  Mise à jour conditionnelle du texte  ============
// ======================================================
// Rôle.
// ----
// Met à jour le texte d’un élément DOM seulement si son contenu
// diffère de la valeur cible, pour limiter les reflows inutiles.
//
// Étapes.
// -------
// 1) Accepte soit un élément, soit un sélecteur CSS (option root).
// 2) Recherche l’élément si un sélecteur est fourni.
// 3) Convertit la valeur en chaîne (txt → string).
// 4) Compare avec textContent existant, met à jour si différent.
// 5) Retourne l’élément mis à jour (ou null si introuvable).
//
// Paramètres.
// -----------
// - elOrSel : élément ou sélecteur CSS.
// - txt      : texte à appliquer.
// - root     : racine de recherche (défaut : document).

const setText = (elOrSel, txt, root = document) => {
  const el = typeof elOrSel === "string" ? root.querySelector(elOrSel) : elOrSel;
  if (!el) return null;
  const val = String(txt ?? "");
  if (el.textContent !== val) el.textContent = val;
  return el;
}