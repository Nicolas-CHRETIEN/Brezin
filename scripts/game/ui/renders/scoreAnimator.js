// ======================================================
// ============  Animation progressive des scores  ============
// ======================================================
// Rôle.
// ----
// Animer l’ajout de points d’annonce “goutte à goutte” (+1 par tick) pour le joueur
// ou l’ordinateur, tout en mettant à jour l’affichage des scores.
//
// Étapes.
// -------
// 1) Met en file d’attente des jobs { who, amount, reason? } via ScoreAnimator.enqueue().
// 2) Consomme la file et incrémente le score cible d’un point à intervalle régulier.
// 3) Rafraîchit la vue du score à chaque tick, puis passe au job suivant.
//
// ==============  Loop Sonore : points.wav  =============
// ======================================================
const PointsSound = (() => {
  let audio = null;

  function start(){
    if (audio) return; // son déjà en cours
    audio = new Audio("./sons/bruitages/points.wav");
    audio.loop = true;
    // Volume respecté par ta jauge SFX
    if (window.BREZIN_AUDIO?.getSfxVolume) {
      audio.volume = BREZIN_AUDIO.getSfxVolume();
    }
    audio.play().catch(() => {});
  }

  function stop(){
    if (!audio) return;
    audio.pause();
    audio = null;
  }

  return { start, stop };
})();

const ScoreAnimator = (() => {
  let running = false;
  const queue = [];

  // Rythme de l’animation en millisecondes (10 ms → rapide et fluide).
  const PACE_MS = 10;

  // Retourne la cellule DOM où le score est rendu pour un camp donné.
  const getScoreCell = (who) => {
    let node = document.querySelector(
      who === "player" ? "[data-score='player']" : "[data-score='computer']"
    );
    if (!node) {
      node = document.querySelector(
        who === "player"
          ? ".score-normal .player .score-value, .score .player .score-value"
          : ".score-normal .computer .score-value, .score .computer .score-value"
      );
    }
    return node;
  };

  // Rafraîchit l’affichage du score (vue dédiée si dispo, sinon rendu global).
  const refreshScoreView = () => {
    if (typeof renderGameScoreOnly === "function") {
      renderGameScoreOnly();
    } else if (typeof renderGame === "function") {
      renderGame();
    }
  };

  // Lance le prochain job de la file ou s’arrête s’il n’y en a plus.
  const runNext = () => {
    if (queue.length === 0) { 
      running = false; 
      PointsSound.stop();   // <--- STOP quand plus rien à animer
      return; 
    }

    running = true;

    // DÉMARRER LE SON ICI :
    PointsSound.start();
    running = true;

    const job = queue.shift();                // { who: 'player'|'computer', amount:number, reason?:string }
    const key = job.who === "player" ? "player1" : "player2";
    let remaining = Math.max(0, Number(job.amount) || 0);
    if (remaining === 0) { runNext(); return; }

    const cell = getScoreCell(job.who);
    if (cell) cell.classList.add("score-bump");

    const timer = setInterval(() => {
      if (remaining <= 0) {
        clearInterval(timer);
        if (cell) cell.classList.remove("score-bump");
        runNext();
        return;
      }

      // Drip : +1 point par tick.
      S.score[key] = (S.score[key] || 0) + 1;
      remaining -= 1;

      // Optionnel : son “tick” ici si nécessaire.
      // if (typeof playTick === "function") playTick();

      // Rafraîchissement de la zone score.
      refreshScoreView();
    }, PACE_MS);
    key === "player1" ? showScoreGain("player", job.amount) : showScoreGain("computer", job.amount);
  };

  // Ajoute un job d’animation en file et démarre si inactif.
  const enqueue = (payload) => {
    queue.push(payload);
    if (!running) runNext();
  };


  return { enqueue };
})();