// ======================================================
// ============  Rendu des annonces (déclarations)  ============
// ======================================================
// Rôle.
// ----
// Afficher la liste des annonces du joueur et de l’ordinateur dans leurs
// conteneurs respectifs, en ne réactualisant que si le contenu a changé.
//
// Étapes.
// -------
// 1) Vérifie la présence des conteneurs (#decl-player / #decl-computer).
// 2) Compare la “signature” (sig) actuelle des listes avec le cache de rendu.
// 3) Si différence → vide le conteneur et recrée les éléments visuels.
//
function renderDeclarations() {
  const pl = $("#decl-player");
  const ai = $("#decl-computer");
  if (!pl || !ai) return;

  const sigP = sig(S.score?.declarationsListP1 ?? []);
  const sigC = sig(S.score?.declarationsListP2 ?? []);

  // --- Annonces joueur ---
  if (renderCache.get("declP") !== sigP) {
    renderCache.set("declP", sigP);
    clear(pl);

    (S.score?.declarationsListP1 || []).forEach(d => {
      pl.append(
        el("div", { class: "declaration" },
          el("span", { class: "declaration_name" }, d.name),
          el("span", { class: "declaration_gain" }, String(+d.gain || 0))
        )
      );
    });
  }

  // --- Annonces ordinateur ---
  if (renderCache.get("declC") !== sigC) {
    renderCache.set("declC", sigC);
    clear(ai);

    (S.score?.declarationsListP2 || []).forEach(d => {
      ai.append(
        el("div", { class: "declaration" },
          el("span", { class: "declaration_name" }, d.name),
          el("span", { class: "declaration_gain" }, String(+d.gain || 0))
        )
      );
    });
  }
}