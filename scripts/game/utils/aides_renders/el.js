// ======================================================
// ============  Création générique d’un élément DOM  ============
// ======================================================
// Rôle.
// ----
// Génère un élément HTML complet avec gestion simplifiée des attributs,
// datasets, écouteurs d’événements et enfants (texte ou nœuds).
// Sert de constructeur DOM rapide et lisible pour tout le jeu.
//
// Étapes.
// -------
// 1) Crée un élément du tag donné.
// 2) Si attrs n’est pas un objet, le traite comme un enfant (fallback pratique).
// 3) Applique :
//    - class → className directe,
//    - dataset → itération clé/valeur dans n.dataset,
//    - attributs simples (ignore false/null/undefined),
//    - événements → via addEventListener(k.slice(2)).
// 4) Ajoute tous les enfants (nœuds DOM ou texte brut).
// 5) Retourne le nœud généré.
//
// Exemple.
// --------
// el("button", { class:"btn", onClick:fn }, "Valider");

const el = (tag, attrs = {}, ...children) => {
  const n = document.createElement(tag);

  // 1) Si attrs n’est pas un objet → on le considère comme un enfant
  if (attrs == null || typeof attrs !== "object" || Array.isArray(attrs)) {
    children.unshift(attrs);
    attrs = {};
  }

  // 2) Attributs, dataset et événements
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") {
      n.className = v ?? "";
    } else if (k === "dataset" && v && typeof v === "object") {
      for (const [dk, dv] of Object.entries(v)) n.dataset[dk] = dv;
    } else if (k.startsWith("on") && typeof v === "function") {
      n.addEventListener(k.slice(2), v); // ex: onClick → "click"
    } else if (v !== false && v != null) {
      n.setAttribute(k, v);
    }
  }

  // 3) Enfants : texte ou nœuds
  for (const c of children) {
    if (c == null || c === false) continue;
    n.append(c.nodeType ? c : document.createTextNode(String(c)));
  }

  return n;
}