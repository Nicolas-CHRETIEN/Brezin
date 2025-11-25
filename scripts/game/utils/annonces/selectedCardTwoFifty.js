// ======================================================
// ============  Sélection des cartes “250 d’atout”  ============
// ======================================================
// Rôle.
// ----
// Sélectionne les 5 cartes nécessaires pour la déclaration “250 d’atout”
// (10, Valet, Dame, Roi, As d’atout), en privilégiant les cartes déjà déclarées,
// puis celles encore vierges de toute annonce.
//
// Étapes.
// -------
// 1) Sépare les cartes selon leur statut de déclaration (déjà / jamais déclarées).
// 2) Concatène ces groupes en priorisant les cartes déjà utilisées.
// 3) Recherche dans cet ordre chaque rang spécifique (J=4 → A=8).
// 4) Retourne le tableau ordonné des 5 cartes [J, Q, K, 10, A].
//
// Paramètres.
// -----------
// - cards : tableau des cartes d’atout candidates.

function selectedCardTwoFifty(cards) {
  const already = cards.filter(isDeclared);
  const fresh   = cards.filter(c => !isDeclared(c));
  const sorted  = [...already, ...fresh];
  const pick = r => sorted.find(c => getRankNum(c) === r);
  return [pick(4), pick(5), pick(6), pick(7), pick(8)];
}