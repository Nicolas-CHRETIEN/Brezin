// ======================================================
// ============  Sprite de pioche (stack1..stack10)  ============
// ======================================================
// Rôle.
// ----
// Mappe la taille courante du talon (S.stack.length) sur un sprite
// stack1..stack10, mémorise le max atteint pour un ratio stable,
// et met à jour l’image + les compteurs texte.
//
// Étapes.
// -------
// 1) Mémorise le max observé (window.__BREZIN_MAX_STACK__).
// 2) Calcule l’index de sprite (1..10) via un ratio current/max.
// 3) Garantit la présence de l’élément <img id="stack-img">.
// 4) Met à jour src/alt de l’image et les compteurs texte associés.

(() => {
  window.__BREZIN_MAX_STACK__ = window.__BREZIN_MAX_STACK__ || 0;

  const computeStackSpriteIndex = (current, max) => {
    const MAX_BUCKET = 10;
    const m = Math.max(1, max);
    const ratio = current / m;
    let idx = Math.ceil(ratio * MAX_BUCKET);
    if (idx < 1) idx = 1;
    if (idx > 10) idx = 10;
    return idx;
  };

  const ensureStackImageEl = () => {
    let img = document.getElementById('stack-img');
    if (!img) {
      const host = document.querySelector('.stack .draw-allowed') || document.querySelector('.stack') || document.body;
      img = document.createElement('img');
      img.id = 'stack-img';
      img.className = 'stack_img';
      host.appendChild(img);
    }
    return img;
  };

  window.renderStackSprite = function renderStackSprite() {
    if (!window.__BREZIN_MAX_STACK__ || S.stack.length > window.__BREZIN_MAX_STACK__) {
      window.__BREZIN_MAX_STACK__ = S.stack.length;
    }

    const current = S.stack.length;
    const max     = window.__BREZIN_MAX_STACK__;
    const idx     = computeStackSpriteIndex(current, max);

    const img = ensureStackImageEl();
    img.src = `./images/stack${idx}.svg`;
    img.alt = `Pioche (${current}/${max})`;

    const talonBoxes = document.querySelectorAll('.score-normal_cards-in-stack .score-normal_h2');
    if (talonBoxes && talonBoxes.length >= 2) {
      talonBoxes[1].textContent = String(current);
    }

    const bow = document.querySelector('.score-bowdlerized .score-bowdlerized_turn');
    if (bow) bow.textContent = `Talon: ${current}`;
  };
})();