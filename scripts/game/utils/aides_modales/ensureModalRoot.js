// ======================================================
// ============  Assure la présence du conteneur modale  ============
// ======================================================
// Rôle.
// ----
// Garantit l’existence du nœud racine destiné à accueillir les modales.
// Le crée dynamiquement si absent, puis le retourne.
//
// Étapes.
// -------
// 1) Recherche un élément #modal-root dans le document.
// 2) S’il n’existe pas → crée un <div id="modal-root" class="modal-root"> et l’ajoute au body.
// 3) Retourne la référence du conteneur (existant ou créé).

function ensureModalRoot() {
  let root = $("#modal-root");
  if (!root) {
    root = el("div", { id: "modal-root", class: "modal-root" });
    document.body.append(root);
  }
  return root;
}