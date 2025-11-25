// ======================================================
// ============  Tri de fin de manche (main joueur)  ============
// ======================================================
// Rôle.
// ----
// Réorganise la main du joueur pour la phase de fin de manche :
// - Atout en premier (tri ascendant par score).
// - Puis chaque autre couleur (ordre fixe ♠, ♥, ♦, ♣ sans l’atout) triée par score ascendant.
//
// Étapes.
// -------
// 1) Identifie la couleur d’atout et la séquence de couleurs restantes.
// 2) Collecte les cartes d’atout et les trie par score croissant.
// 3) Pour chaque autre couleur, trie par score croissant et concatène.
// 4) Remplace S.handPlayer par le nouveau tableau ordonné.

function playerSortCardsEndGame() {
  const trumpSuit = S.trump.couleur;
  const SUITS = ["pique", "coeur", "carreau", "trèfle"];
  const others = SUITS.filter(suit => suit !== trumpSuit);
  const newHand = [];

  // 2) Atouts d’abord (score ascendant)
  const trumpCards  = S.handPlayer.filter(c => c.couleur === trumpSuit);
  const trumpSorted = arraySort(trumpCards, "score", 1);
  newHand.push(...trumpSorted);

  // 3) Puis autres couleurs, chacune triée ascendant
  others.forEach(SUIT => {
    const color  = S.handPlayer.filter(c => c.couleur === SUIT);
    const sorted = arraySort(color, "score", 1);
    newHand.push(...sorted);
  });

  // 4) Remplacement de la main
  S.handPlayer = newHand;
}