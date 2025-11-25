// Par exemple basé sur : cartes déjà annoncées/jouées, annonces possibles restantes, etc.
// L'objectif ici est de calculer la probabilité ressentie de remonter, pas la probabilité exacte.
function estimatePossibleEqual() {
  const scoreIA     = S.score.scoreP2; 
  const scorePlayer = S.score.scoreP1;
  const diff        = scoreIA - scorePlayer; // >0 IA devant, <0 IA derrière

  const PCardsNotDeclared = S.handPlayer.filter(c => !c.declared);
  const OtherCards        = [...S.stack, ...PCardsNotDeclared];
  const Possibility       = [...OtherCards, ...S.handComputer];
  const AnnoncesPossibles = possibleDeclarations(Possibility);

  let totalPossibleGain = 0;
  for (const d of AnnoncesPossibles) totalPossibleGain += d.gain;

  // --- FIX anti-division-par-zero / NaN ---
  if (!diff) {
    // Scores égaux → possibilité moyenne
    return 0.5; 
  }

  let result = totalPossibleGain / diff;

  // Sécurité anti-NaN
  if (!isFinite(result)) result = 1;
  if (result < 0) result = 0;
  if (result > 1) result = 1;

  return result;
}
