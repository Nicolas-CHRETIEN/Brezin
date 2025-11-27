// ======================================================
// ============  Modale résultat de pli (2 cartes)  ============
// ======================================================
// Rôle.
// ----
// Afficher une modale lorsque les deux cartes du pli sont posées, montrer les
// visuels, annoncer le gagnant du pli, puis enchaîner proprement la logique
// suivante (déclarations, tirage, fin de manche ou de partie).
//
// Étapes.
// -------
// 1) Préconditions d’affichage et détermination du gagnant visuel.
// 2) Construction et affichage de la modale (cartes + gagnant).
// 3) Action “OK” : nettoyage, détection fin de main, fin de manche/partie, ou suite du tour.
// 4) Petit effet visuel différé (mise en avant de la carte gagnante + badge).
//

function showTrickModal({ onOk }) {
  // 1) Préconditions d’affichage.
  if ($("#modal-root")?.classList.contains("modal-root--open")) return;
  const bothPlayed = !!(S.playerCardPlayed && S.computerCardPlayed);
  if (S.stage !== "trickGameResult" || !bothPlayed) return;

  // Détermination du gagnant visuel selon ta convention actuelle.
  const winnerLabel = (S.playFirst === "player") ? "Joueur" : "Ordinateur";
  const isPlayerWinner = (winnerLabel === "Joueur");

  // Helper d’emballage d’une carte dans un conteneur dédié.
  const wrapCard = (node, who) => el("div", { class: "trick-result_card", id: `trk-${who}` }, node);

  // 2) Construction de la modale.
  showModal({
    title: "Résultat du pli",
    content: el("div", { class: "trick-result" },
      el("div", { class: "trick-result_row" },
        el("div", { class: "trick-result_col" },
          el("h4", {}, "Ordinateur"),
          wrapCard(cardNode(S.computerCardPlayed, "card card--lg"), "computer")
        ),
        el("div", { class: "trick-result_col" },
          el("h4", {}, "Joueur"),
          wrapCard(cardNode(S.playerCardPlayed, "card card--lg"), "player")
        )
      ),
      el("p", { class: "trick-result_winner" }, `Gagnant du pli : ${winnerLabel}.`)
    ),
    actions: [{ label: "OK", id: "ok" }],
    onAction: (id) => {
      if (id !== "ok") return;
      
      // Prise de parole de l'IA si le joueur lui prend un atout.
      const reaction = AIGenerateDialogue();
      setAiEmotion(reaction[0], reaction[1]);

      // 3) Nettoyage immédiat, callback, et détection fin de main.
      closeModal();
      playSound("validation.wav");
      if (Array.isArray(S.handPlayer)) S.handPlayer.forEach(c => c.unPlayable = null);
      onOk?.();

      // Ajouter animation plis si le joueur remporte des 10/As.
      if (S.playFirst === "player") {
        const cards = [S.playerCardPlayed, S.computerCardPlayed];
        const winners = cards.filter(
          c => c.rang === "10" || c.rang === "as"
        );

        winners.forEach((_, i) => {
          setTimeout(() => showTrickPoints(10), i * 400);
        });
      }

      // supprimer cartes jouées.
      S.computerCardPlayed = null;
      S.playerCardPlayed = null;

      const arr = v => Array.isArray(v) ? v : [];
      const handsEmpty = arr(S.handPlayer).length === 0 || arr(S.handComputer).length === 0;
      if (handsEmpty) {
        // Comptage pédagogique des 10/As sur la manche courante.
        const pilesPlayer   = S.trickPlayer || [];
        const pilesComputer = S.trickComputer || [];
        const getRank = (c) => {
          if (!c) return "";
          if (c.rank) return String(c.rank).toLowerCase();
          if (typeof c.name === "string") {
            const m = c.name.match(/^(as|10|valet|dame|roi|[2-9])/i);
            return m ? m[1].toLowerCase() : "";
          }
          if (typeof c.svg === "string") {
            const m = c.svg.match(/(as|10|valet|dame|roi|[2-9])/i);
            return m ? m[1].toLowerCase() : "";
          }
          return "";
        };
        const isTen = (c) => getRank(c) === "10";
        const isAce = (c) => getRank(c) === "as";
        const countBy = (arr2, pred) => arr2.reduce((n, x) => n + (pred(x) ? 1 : 0), 0);

        const tensP = countBy(pilesPlayer, isTen);
        const acesP = countBy(pilesPlayer, isAce);
        const tensC = countBy(pilesComputer, isTen);
        const acesC = countBy(pilesComputer, isAce);

        const projectedP = (S.score.player1 || 0) + (tensP + acesP) * 10;
        const projectedC = (S.score.player2 || 0) + (tensC + acesC) * 10;

        if (projectedP !== projectedC && (projectedP >= 1000 || projectedC >= 1000)) {
          showEndOfGameModal();
          return;
        } else {
          showEndOfRoundModal();
          return;
        }
      }

      // Suite de tour selon le joueur qui commencera et l’état du talon.
      const isLastTurn = !(Array.isArray(S.stack) && S.stack.length > 0);

      if (S.playFirst === "computer") {
        if (isLastTurn) {
          S.stage = "play";
          listenerComputerPlayFirst();
          return;
        }
        const possible = possibleDeclarations(S.handComputer, S.trump) || [];
        if (possible.length) {
          computerChooseDeclaration();
          renderCache.delete("shownDecl");
          renderGame();
          return;
        }
        listenerComputerPlayFirst();
        return;

      } else {
        if (isLastTurn) {
          S.stage = "play";
          renderGame();
          return;
        }
        const possible = possibleDeclarations(S.handPlayer, S.trump) || [];
        if (possible.length > 0) {
          S.declarationsAvailablePlayer = possible;
          S.stage = "declare";
          renderGame();
          showPlayerDeclarationModal();
          return;
        }
        S.stage = "draw";
        renderGame();
        return;
      }
    }
  });

  // 4) Effet visuel différé : met en avant la carte gagnante.
  setTimeout(() => {
    const nodePlayer   = document.getElementById("trk-player");
    const nodeComputer = document.getElementById("trk-computer");
    if (!nodePlayer || !nodeComputer) return;

    const winNode  = isPlayerWinner ? nodePlayer : nodeComputer;
    const loseNode = isPlayerWinner ? nodeComputer : nodePlayer;

    loseNode.classList.add("is-dim");
    winNode.classList.add("is-winner");

    const badge = document.createElement("div");
    badge.className = "trick-result_badge";
    badge.textContent = "🏆";
    winNode.appendChild(badge);
  }, 30);

  applyAuroraTheme();
}