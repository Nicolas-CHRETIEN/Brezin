// ======================================================
// ============  Déclaration “Deux cent cinquante”  ============
// ======================================================
// Rôle.
// ----
// Détecte la combinaison 250 d’atout (10, Valet, Dame, Roi, As d’atout)
// non encore utilisée pour cette annonce, sélectionne les cartes et
// construit la déclaration correspondante.
//
// Étapes.
// -------
// 1) Filtre pour l’atout courant chaque rang requis (J=4, Q=5, K=6, 10=7, A=8),
//    en s’assurant que la carte est disponible pour "deux cent cinquante".
// 2) Si chaque rang est présent → choisit les 5 cartes via selectedCardTwoFifty().
// 3) Retourne un tableau contenant la déclaration (priorité 3, gain 250) ; sinon [].

function twoFifty(hand) {
  const jack  = hand.filter(c => c.couleur === S.trump.couleur && getRankNum(c) === 4 && isNotDeclaredFor(c, "deux cent cinquante"));
  const queen = hand.filter(c => c.couleur === S.trump.couleur && getRankNum(c) === 5 && isNotDeclaredFor(c, "deux cent cinquante"));
  const king  = hand.filter(c => c.couleur === S.trump.couleur && getRankNum(c) === 6 && isNotDeclaredFor(c, "deux cent cinquante"));
  const ten   = hand.filter(c => c.couleur === S.trump.couleur && getRankNum(c) === 7 && isNotDeclaredFor(c, "deux cent cinquante"));
  const ace   = hand.filter(c => c.couleur === S.trump.couleur && getRankNum(c) === 8 && isNotDeclaredFor(c, "deux cent cinquante"));

  if (jack.length && queen.length && king.length && ten.length && ace.length) {
    const selected = selectedCardTwoFifty([...jack, ...queen, ...king, ...ten, ...ace]);
    return [{
      name: "deux cent cinquante",
      rank: "deux cent cinquante",
      cards: returnCardIds(selected),
      priority: 3,
      gain: 250
    }];
  }
  return [];
}