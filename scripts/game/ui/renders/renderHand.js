// ======================================================
// ============  Rendu de la main du joueur  ============
// ======================================================
// Rôle.
// ----
// Afficher la main du joueur et, si on n’est pas en fin de partie, ses cartes annoncées
// dans la zone dédiée. Optimiser le rendu via un cache de signature pour éviter
// les rafraîchissements inutiles.
//
// Étapes.
// -------
// 1) Déterminer la phase (fin de partie ou non) et le mode de jeu du joueur.
// 2) Séparer les cartes visibles et annoncées (ou tout remettre en main en endgame).
// 3) Construire une clé de cache fine (contenu + états) et court-circuiter si inchangé.
// 4) Rendre la zone “annoncées” puis la main.
//
function renderHand() {
  const root = $("#hand-player");
  if (!root) return;

  const isEndgame = (S.stack?.length ?? 0) === 0; // Fin de partie ?
  const mode = decidePlayerMode();                 // Mode de jeu (lead/second).

  const announcedRoot =
    document.getElementById("declared-player") ||
    document.querySelector("#announced-player,#cards-announced-player,#cards-declared-player");

  let handVisible, announcedPlayer;

  if (isEndgame) {
    // Fin de partie : tout revient dans la main, on vide la zone d’annonces (des deux côtés).
    const compRoot =
      document.getElementById("declared-computer") ||
      document.querySelector("#announced-computer,#cards-announced-computer,#cards-declared-computer");
    if (compRoot) clear(compRoot);
    handVisible = S.handPlayer ?? [];
    announcedPlayer = [];
  } else {
    // Jeu normal : séparer main et cartes annoncées.
    const p1Names = namesFromScoreDeclarations(S.score?.declarationsListP1);
    ({ visible: handVisible, announced: announcedPlayer } =
      partitionHandByAnnouncements(S.handPlayer ?? [], p1Names));
  }

  // Cache de rendu : phase, contenu, stage/playFirst, cartes jouées et flags de jouabilité.
  const key = sig([
    isEndgame ? "endgame" : "normal",
    ...handVisible.map(c => c.number ?? c.name),
    "|announced|",
    ...announcedPlayer.map(c => c.number ?? c.name),
    S.stage, S.playFirst,
    S.playerCardPlayed?.name || "",
    S.computerCardPlayed?.name || "",
    ...handVisible.map(c => String(!!c.unPlayable)),
    ...announcedPlayer.map(c => String(!!c.unPlayable)),
  ]);
  if (renderCache.get("handPlayer") === key) return;
  renderCache.set("handPlayer", key);

  // Zone “annoncées” du joueur.
  if (announcedRoot) {
    if (isEndgame) {
      clear(announcedRoot);
    } else {
      renderCardsLikeHand(announcedRoot, announcedPlayer, mode);
    }
  }

  // Main du joueur.
  clear(root);
  renderCardsLikeHand(root, handVisible, mode);
}