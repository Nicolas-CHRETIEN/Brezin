// ======================================================
// ============  Jeu d’une carte par le joueur  ============
// ======================================================
// Rôle.
// ----
// Retire une carte spécifique de la main du joueur et la place
// dans S.playerCardPlayed pour traitement par le moteur du jeu.
// Si une dame ou un roi déjà utilisé dans un carré n'a pas été utilisé dans un couple
// et qu'il y a dans la main du joueur une carte identique utilisée dans un couple,
// on s'assure que la carte utilisée pour le couple est jouée en premier.

function playerPlayCard(card) {
  // 1) Cas spécial : dames / rois en double (même couleur, même carte).
  const rankNum = getRankNum(card);              // 5 = dame, 6 = roi
  const isQorK  = rankNum === 5 || rankNum === 6;

  if (isQorK) {
    const usedInCarre    = isDeclaredForSmthLike(card, "carré de"); // cette dame/ce roi est dans un carré
    const notUsedInCouple = isNotDeclaredForSmthLike(card, "couple"); // mais pas (encore) dans un couple

    if (usedInCarre && notUsedInCouple) {
      // On regarde s'il y a les 2 copies de cette carte dans la main
      const sameCards = S.handPlayer.filter(c => c.svg === card.svg);

      if (sameCards.length === 2) {
        // Parmi ces 2 copies, on cherche celle qui est dans un couple
        const coupleCard = sameCards.find(c => isDeclaredForSmthLike(c, "couple"));

        // Si on la trouve, c'est elle qu'on doit jouer à la place
        if (coupleCard) {
          card = coupleCard;
        }
      }
    }
  }

  // 2) Retirer la carte choisie de la main et la jouer
  const index = S.handPlayer.indexOf(card);
  if (index !== -1) {
    const [played] = S.handPlayer.splice(index, 1);
    S.playerCardPlayed = played;
  }

  playSound("play.wav");
}