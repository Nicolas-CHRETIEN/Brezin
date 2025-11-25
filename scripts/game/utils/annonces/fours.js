// ======================================================
// ============  Déclarations “Carrés” (4 cartes même rang)  ============
// ======================================================
// Rôle.
// ----
// Détecte les carrés possibles (4 cartes d’un même rang, hors “10”),
// en respectant la règle : au moins 3 cartes autorisées pour "carré"
// et au moins 1 carte jamais annoncée. Sélectionne ensuite 4 cartes
// (en réutilisant au besoin 1 carte déjà réservée) et construit la
// déclaration correspondante avec gain/nom adaptés au rang.
//
// Étapes.
// -------
// 1) Itère sur les rangs numériques (4..8) en ignorant le rang 7 (le “10”).
// 2) Filtre les cartes du rang, vérifie qu’il y en a au moins 4.
// 3) Parmi elles, conserve celles autorisées pour "carré" et contrôle :
//    - ≥ 3 valides pour "carré",
//    - au moins 1 carte jamais déclarée (toutes annonces confondues).
// 4) Si besoin, complète le pool de 4 en réutilisant 1 carte non autorisée "carré".
// 5) Choisit 4 cartes (selectedCardsFour), calcule nom/gain selon le rang,
//    et pousse la déclaration avec priorité adaptée.

function fours(hand) {
  const decl = [];
  for (let rank = 4; rank <= 8; rank++) {
    if (rank === 7) continue; // exclut le “10”

    const sameRank = hand.filter(c => getRankNum(c) === rank);
    if (sameRank.length < 4) continue;

    const validForFour = sameRank.filter(c => isNotDeclaredFor(c, "carré"));
    const hasAtLeast3Valid   = validForFour.length > 2;
    const hasOneNeverDeclared = validForFour.some(c => !isDeclared(c));

    if (hasAtLeast3Valid && hasOneNeverDeclared) {
      let pool = [...validForFour];

      // Si seulement 3 valides → complète avec 1 carte déjà réservée pour "carré"
      if (pool.length < 4) {
        const reuse = sameRank.find(c => !isNotDeclaredFor(c, "carré"));
        if (reuse) pool.push(reuse);
      }

      const base =
        rank === 4 ? { name: "carré de valets", gain: 40 } :
        rank === 5 ? { name: "carré de dames",  gain: 60 } :
        rank === 6 ? { name: "carré de rois",   gain: 80 } :
                     { name: "carré d'as",      gain: 100 };

      const selected = selectedCardsFour(pool);
      decl.push({
        name: base.name,
        rank: "carré",
        cards: returnCardIds(selected),
        priority: 4 + 1 - rank, // priorité décroissante avec la force du rang
        gain: base.gain
      });
    }
  }
  return decl;
}