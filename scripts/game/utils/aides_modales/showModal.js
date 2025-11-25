// ======================================================
// ============  Affichage générique d’une modale  ============
// ======================================================
// Rôle.
// ----
// Crée et affiche dynamiquement une modale standard avec titre,
// contenu, boutons d’action, et gestion des callbacks.
//
// Étapes.
// -------
// 1) S’assure de la présence du conteneur principal via ensureModalRoot().
// 2) Vide tout contenu précédent.
// 3) Génère les boutons selon le tableau actions[] (label, id, callback).
// 4) Construit la structure DOM complète : .modal > .modal_box > contenu.
// 5) Insère la modale dans le root et active la classe d’ouverture.
//
// Paramètres.
// -----------
// - title    : texte du titre (facultatif).
// - content  : HTML ou nœud à afficher dans la zone centrale.
// - actions  : tableau d’objets {label, id} (défaut : [{label:"OK", id:"ok"}]).
// - onAction : callback(id, event) appelé lors du clic sur un bouton.

function showModal({ title, content, actions = [{ label: "OK", id: "ok" }], onAction }) {
  const root = ensureModalRoot();
  root.innerHTML = "";

  const btns = actions.map(a =>
    el("button", {
      class: "modal_btn",
      dataset: { id: a.id },
      onclick: ev => onAction?.(a.id, ev)
    }, a.label)
  );

  const modal = el("div", { class: "modal" },
    el("div", { class: "modal_box" },
      title ? el("h3", { class: "modal_title" }, title) : "",
      el("div", { class: "modal_content" }, content),
      el("div", { class: "modal_actions" }, ...btns)
    )
  );

  root.append(modal);
  root.classList.add("modal-root--open");
}