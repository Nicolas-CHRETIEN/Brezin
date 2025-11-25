// ======================================================
// ================  Mélange du paquet  =================
// ======================================================
// Rôle.
// ----
// Mélanger aléatoirement le paquet de cartes reçu en argument selon
// l’algorithme de Fisher–Yates (mélange uniforme et sans biais).
//
// Étapes.
// -------
// 1) Parcourir le paquet du dernier au premier élément.
// 2) À chaque itération, échanger la carte courante avec une carte aléatoire
//    d’indice inférieur ou égal à la position actuelle.
// 3) Retourner le paquet mélangé.
//
function shuffleDeck(deck) {
  if (!Array.isArray(deck)) return [];

  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // échange des cartes
  }

  return deck;
}