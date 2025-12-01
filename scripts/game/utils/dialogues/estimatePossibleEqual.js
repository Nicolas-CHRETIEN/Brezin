// ======================================================
// ==========  Estimation d'un potentiel de remontée  ====
// ======================================================
//
// Rôle de la fonction.
// ---------------------
// Fournir une *estimation heuristique* (0 → 1) de la probabilité
// ressentie pour l’IA de "pouvoir remonter" le score.
// Fonction de calculateSituationRate()
//
// Ce n’est PAS une probabilité statistique :
// - On regarde simplement les annonces encore possibles
//   à partir des cartes non encore déclarées du joueur,
//   des cartes au talon (stack),
//   et de la main de l’IA.
// - On cumule leurs gains potentiels.
// - On compare brut ce potentiel au différentiel de score.
//   → totalPossibleGain / diff  (normalisé entre 0 et 1)
//
// Interprétation du résultat :
//   0.0 = aucune chance ressentie
//   0.5 = possibilité moyenne / incertaine
//   1.0 = forte possibilité de revenir devant
// ------------------------------------------------------
// Données utilisées :
//   - S.score.scoreP1, S.score.scoreP2
//   - S.stack
//   - S.handPlayer
//   - S.handComputer
//   - possibleDeclarations()
// ------------------------------------------------------
function estimatePossibleEqual() {

  // Scores actuels (identiques à ton code d'origine)
  const scoreIA     = S.score.scoreP2;
  const scorePlayer = S.score.scoreP1;
  const diff        = scoreIA - scorePlayer;  // >0 IA mène, <0 IA perd

  // ==========  Construction du "jeu potentiel"  ==========
  // Cartes du joueur encore non utilisées en annonces
  const PCardsNotDeclared = S.handPlayer.filter(c => !c.declared);

  // Talon + non-déclarées du joueur
  const OtherCards = [...S.stack, ...PCardsNotDeclared];

  // Pool total pour les annonces possibles
  const Possibility = [...OtherCards, ...S.handComputer];

  // Annonces calculées sur ce pool
  const AnnoncesPossibles = possibleDeclarations(Possibility);

  // Total potentiel de points récupérables
  let totalPossibleGain = 0;
  for (const d of AnnoncesPossibles) {
    totalPossibleGain += d.gain;
  }

  // ==========  Gestion du cas score égal  ==========
  if (!diff) {
    // Pas d'écart → possibilité moyenne par défaut (neutre)
    return 0.5;
  }

  // ==========  Score heuristique brut  ==========
  let result = totalPossibleGain / diff;

  // ==========  Normalisation (0 → 1)  ==========
  if (!isFinite(result)) result = 1;
  if (result < 0) result = 0;
  if (result > 1) result = 1;

  return result;
}
