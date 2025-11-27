function calculateSituationRate() {
  let scoreIA = Number(S.score.scoreP2) || 0; 
  let scorePlayer = Number(S.score.scoreP1) || 0;
  if (S.score.lastDeclaration && S.score.lastDeclaration.lenght && playFirst === "computer") scoreIA += S.score.lastDeclaration[0];
  if (S.score.lastDeclaration && S.score.lastDeclaration.lenght && playFirst === "player") scorePlayer += S.score.lastDeclaration[0];
  const diff = scoreIA - scorePlayer;

  let note = 0;

  const impactDiff = Math.max(-40, Math.min(40, diff / 5));
  note += impactDiff;

  const maxScore = Math.max(scoreIA, scorePlayer);
  const ratioFin = (maxScore >= 0 && maxScore <= 1000)
      ? maxScore / 1000
      : 0;

  note *= (0.5 + ratioFin);

  const potentiel = estimatePossibleEqual();

  note += potentiel * 30 - 15;

  if (note < -100) note = -100;
  if (note > 100)  note = 100;

  return note;
}

