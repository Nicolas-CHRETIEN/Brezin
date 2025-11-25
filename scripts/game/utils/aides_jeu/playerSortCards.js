// ======================================================
// ============  Tri principal de la main joueur  ============
// ======================================================
// Rôle.
// ----
// Ordonne la main du joueur en 4 groupes : J♠, Q♦, atouts, autres,
// puis applique des règles internes par groupe (scores croissant/descendant)
// en conservant un tiebreak déterministe.
//
// Étapes.
// -------
// 1) Détermine la couleur d’atout courante.
// 2) Définit les helpers d’identification (J♠, Q♦, atout).
// 3) Bucketise chaque carte : 0=J♠, 1=Q♦, 2=atouts, 3=autres.
// 4) Compare selon bucket, puis règle interne (atouts asc, autres desc).
// 5) Tiebreak J♠/Q♦ par name pour stabilité, et applique le tri.

function playerSortCards() {
  const trumpSuit = S.trump.couleur;

  const isJackSpade    = c => c.couleur === "pique"   && getRankNum(c) === 4; // J
  const isQueenDiamond = c => c.couleur === "carreau" && getRankNum(c) === 5; // Q
  const isTrump        = c => c.couleur === trumpSuit;

  const bucket = c => {
    if (isJackSpade(c))    return 0;
    if (isQueenDiamond(c)) return 1;
    if (isTrump(c))        return 2;
    return 3;
  };

  const cmp = (a, b) => {
    const ba = bucket(a), bb = bucket(b);
    if (ba !== bb) return ba - bb;

    if (ba === 2) return safeScore(a) - safeScore(b); // atouts : croissant
    if (ba === 3) return safeScore(b) - safeScore(a); // autres : décroissant

    // buckets 0 et 1 (J♠ / Q♦) : tiebreak stable par nom
    return String(a.name).localeCompare(String(b.name));
  };

  S.handPlayer = [...S.handPlayer].sort(cmp);
}