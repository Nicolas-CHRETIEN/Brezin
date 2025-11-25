// ======================================================
// ============  Rendu zone des annonces (IA)  ============
// ======================================================
// Rôle.
// ----
// Afficher, dans la zone dédiée, les cartes de l’ordinateur qui sont annoncées
// (déclarées) : soit marquées via `isDeclared(c)`, soit référencées dans
// `declarationsListP2`.
//
// Étapes.
// -------
// 1) Extraire les noms de cartes annoncées depuis `S.score.declarationsListP2`.
// 2) Filtrer la main de l’IA pour ne garder que les cartes déclarées.
// 3) Éviter les re-rendus inutiles via une clé de cache, puis afficher.
//

function renderDeclaredZones() {
  // 1) Noms des cartes annoncées (à partir des objets d’annonce).
  const namesFromScore = (list = []) => {
    const acc = [];
    for (const d of list ?? []) {
      if (!d) continue;
      if (Array.isArray(d.cards)) acc.push(...d.cards);
      else if (d.cards) acc.push(d.cards);
    }
    return new Set(acc);
  };

  // 2) Filtrer les cartes déclarées côté ordinateur.
  const p2Names = namesFromScore(S.score?.declarationsListP2);
  const p2Cards = (S.handComputer ?? []).filter(c => isDeclared(c) || p2Names.has(c.name));

  // Cible DOM (compat avec plusieurs IDs historiques).
  const computerRoot =
    document.getElementById("declared-computer") ||
    document.querySelector("#announced-computer,#cards-announced-computer,#cards-declared-computer");

  // 3) Anti re-render (cache de signature).
  const key = sig(["declZones-computer", ...p2Cards.map(c => c.number ?? c.name)]);
  if (renderCache.get("declZonesComputer") === key) return;
  renderCache.set("declZonesComputer", key);

  if (!computerRoot) return;

  clear(computerRoot);
  renderCardsLikeHand(computerRoot, p2Cards, "lead");
}