// ======================================================
// ============  Conversion du rang en valeur numérique  ============
// ======================================================
// Rôle.
// ----
// Retourne une valeur numérique (1..8) correspondant au rang d’une carte,
// utilisée pour trier ou comparer les cartes selon la hiérarchie du jeu.
//
// Étapes.
// -------
// 1) Extrait le rang sous forme de chaîne (depuis card.rang ou directement la chaîne).
// 2) Associe ce rang à sa valeur numérique selon la table interne.
// 3) Retourne la valeur correspondante (1 à 8).
//
// Table de correspondance.
// ------------------------
// 7→1, 8→2, 9→3, valet→4, dame→5, roi→6, 10→7, as→8

function getRankNum(card) {
  const r = (typeof card === "string") ? card : String(card.rang);
  const map = { "7":1, "8":2, "9":3, "valet":4, "dame":5, "roi":6, "10":7, "as":8 };
  return map[r];
}
