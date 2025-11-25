// ======================================================
// ============  Déclarations “Couples” (Q+K par couleur)  ============
// ======================================================
// Rôle.
// ----
// Détermine, pour chaque couleur, une déclaration de couple (Dame + Roi) en
// respectant la règle : au moins UNE des deux cartes n’a jamais été annoncée.
// Préfère les paires où 0 carte a déjà servi, puis celles avec 1 carte utilisée.
// Donne un bonus spécifique si la couleur est l’atout.
//
// Étapes.
// -------
// 1) Pour chaque couleur FR → filtre Dames et Rois non interdits pour "couple".
// 2) Construit toutes les paires (Q,K) et exclut celles où Q et K sont toutes deux déjà utilisées.
// 3) Classe les paires par “nombre de cartes déjà utilisées” (0 avant 1).
// 4) Sélectionne la meilleure paire, détermine si c’est l’atout, puis push la déclaration.

function couples(hand) {
  const decl = [];
  const suitsFR = ["carreau", "pique", "coeur", "trèfle"];

  // Dames / rois éligibles (jamais utilisés pour un couple)
  const [queensAll, kingsAll] = selectedCardsCouple(hand);

  for (const sFR of suitsFR) {
    // 1) On ne garde que les dames/rois de cette couleur.
    const qSuit = queensAll.filter(c => c.couleur === sFR);
    const kSuit = kingsAll.filter(c => c.couleur === sFR);
    if (!qSuit.length || !kSuit.length) continue; // besoin d'au moins une dame et un roi

    // 2) Toutes les paires possibles pour cette couleur,
    //    en excluant celles où les 2 cartes sont déjà déclarées.
    const candidatePairs = [];
    for (const q of qSuit) {
      for (const k of kSuit) {
        const usedCount =
          (isDeclared(q) ? 1 : 0) +
          (isDeclared(k) ? 1 : 0);

        if (usedCount === 2) continue; // on veut au moins une carte neuve

        candidatePairs.push({ q, k, usedCount });
      }
    }
    if (!candidatePairs.length) continue;

    // 3) Trie : on préfère les paires avec le PLUS de cartes déjà déclarées
    //    => usedCount = 1 passe avant usedCount = 0
    candidatePairs.sort((a, b) => b.usedCount - a.usedCount);

    // 4) Sélection de la meilleure paire pour cette couleur
    const { q, k } = candidatePairs[0];
    const isTrump =
      sFR.toLowerCase() === String(S.trump.couleur).toLowerCase();

    decl.push({
      name: isTrump ? "couple d'atout" : `couple de ${sFR}`,
      rank: "couple",
      cards: returnCardIds([q, k]),
      priority: isTrump ? 5 : 6,
      gain: isTrump ? 40 : 20
    });
  }

  return decl;
}
