// ======================================================
// ====================  Phase de tirage  ====================
// ======================================================
// Rôle.
// ----
// Gérer la phase de pioche après chaque pli selon l’état du talon et
// le joueur qui a commencé la manche.  
// Met à jour les mains, trie celle du joueur et prépare la prochaine
// phase de jeu (“play”).
//
// Étapes.
// -------
// 1) Si le talon contient moins de deux cartes → dernier tour de pioche.
// 2) Si c’est au joueur de commencer → le joueur pioche, trie, puis l’IA pioche.
// 3) Sinon → l’IA a déjà pioché, le joueur pioche et trie.
// 4) Passe à l’étape “play” et rafraîchit l’interface.
//

function listenerDraw() {
  // 1) Fin de pioche.
  if (S.stack.length < 2) {
    drawLastTurn(S);
    if (S.playFirst === 'computer') playableCards();

  // 2) Tour du joueur.
  } else if (S.playFirst === 'player') {
    playerDrawCard();
    playerSortCards();
    computerDrawCard();

  // 3) L’IA a déjà pioché.
  } else {
    playerDrawCard();
    playerSortCards();
  }

  // 4) Passage à la phase de jeu.
  S.stage = 'play';
  renderGame();
}