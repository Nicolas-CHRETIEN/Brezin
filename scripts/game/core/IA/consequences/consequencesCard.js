// ======================================================
// =======  Évaluation des conséquences d’un coup  =======
// ======================================================
//
// But du fichier.
// ----------------
// Évaluer l’impact de la carte jouée par l’IA sur le pli courant en tenant compte
// de la pioche, des annonces possibles et de la difficulté, puis annoter la carte.
//
// Ce que fait le script.
// ----------------------
// 1) Prépare le contexte pioche et valorise les deux premières cartes de la pile.
// 2) Simule l’issue du pli avec `trickGameSimulation(cardPlayer, card)`.
// 3) Évalue l’impact sur les annonces IA/Joueur (pertes/gains potentiels).
// 4) Valorise la présence de cartes fortes dans le pli et la différence de valeur en pioche.
// 5) Pondère le score final selon la difficulté et annote `card.consequences`.
//

// 1–5) Calcul des conséquences si l’IA joue `card`.
function consequencesCard(card, cardPlayer) {
  // 1) Prépare la pioche et valorise les deux premières cartes.
  const stack = S.stack || [];
  const firstInStack  = stack[0] ? { ...stack[0] } : null;
  const secondInStack = stack[1] ? { ...stack[1] } : (stack[0] ? { ...stack[0] } : null);
  if (firstInStack)  valueCard(firstInStack);
  if (secondInStack) valueCard(secondInStack);

  let declaration_loss = 0;        // Perte si la carte brûle une annonce de l’IA.
  let declaration_gain = 0;        // Gain si la carte prépare ou renforce une annonce de l’IA.
  let valuable_card_in_trick = 0;  // ±20 si un 10/As est impliqué selon le résultat du pli.
  let declaration_player_gain = 0; // Gain potentiel pour le joueur si l’IA perd le pli.
  let additional_value_card_in_stack = 0; // Différence de valeur entre les deux premières cartes de pioche.

  // 2) Simule l’issue du pli.
  const sim = trickGameSimulation(cardPlayer, card);

  // 3) Récupère la meilleure annonce IA/Joueur si disponible.
  const decAI = S.declarationsAvailableComputer?.[0] || null;
  const decPL = S.declarationsAvailablePlayer?.[0]   || null;

  // Identifiant de carte pour correspondre aux `cards` d’une annonce.
  const cardId = card.name;

  if (sim === "computer win") {
    // 3) Impact annonces côté IA.
    if (decAI && decAI.rank !== "sept d'atout" && Array.isArray(decAI.cards)) {
      if (decAI.cards.includes(cardId)) {
        declaration_loss = decAI.gain || 0;
      } else {
        declaration_gain = (decAI.gain || 0) * 2;
      }
    }

    // 4) Valorisation des cartes fortes dans le pli (10/As = rang > 6).
    const rp = cardPlayer ? getRankNum(cardPlayer) : 0;
    const rc = getRankNum(card);
    valuable_card_in_trick = (rp > 6 || rc > 6) ? 20 : 0;

    // 4) Différence de valeur sur la pioche en cas de gain du pli.
    if (firstInStack && secondInStack) {
      additional_value_card_in_stack = (firstInStack.value || 0) - (secondInStack.value || 0);
    }
  } else {
    // 4) Pénalité si 10/As dans le pli et que l’IA perd.
    const rp = cardPlayer ? getRankNum(cardPlayer) : 0;
    const rc = getRankNum(card);
    valuable_card_in_trick = (rp > 6 || rc > 6) ? -20 : 0;

    // 3) Gain potentiel côté joueur si l’IA perd.
    declaration_player_gain = decPL ? (decPL.gain || 0) : 0;

    // 4) Différence de valeur sur la pioche en cas de perte du pli (ordre inversé).
    if (firstInStack && secondInStack) {
      additional_value_card_in_stack = (secondInStack.value || 0) - (firstInStack.value || 0);
    }
  }

  // 5) Pondération selon la difficulté.
  let consequences;
  switch (S.difficulty) {
    case "expert":
      consequences =  additional_value_card_in_stack
                   - (card.value || 0)
                   +  declaration_gain
                   +  valuable_card_in_trick
                   -  declaration_player_gain
                   -  declaration_loss;
      break;
    case "hard":
      consequences =  valuable_card_in_trick
                   - (card.value || 0)
                   +  declaration_gain;
      break;
    case "normal":
      consequences =  valuable_card_in_trick
                   - (card.value || 0)
                   +  declaration_gain
                   -  declaration_player_gain
                   -  declaration_loss;
      break;
    default:
      consequences = 1 - (card.value || 0);
      break;
  }

  // Annotation finale et retour de la carte.
  card.consequences = consequences | 0; // Cast en entier.
  return card;
}
