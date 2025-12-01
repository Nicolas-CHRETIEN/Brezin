// ======================================================
// ==========  Réactions & émotions de l'IA  ============
// ======================================================
//
// Rôle du module.
// ----------------
// Gérer l’affichage des émotions et répliques de l’IA en cas de loupé sur le module principal de génération de dialogues.
// Cette fonction dispose d'une génération de dialogues "de secours" moins perfectionnée, moins en lien avec le contexte.
// en fonction :
//   - de la difficulté (Radegonde / Perrot / Jehanne / Andry),
//   - de l’émotion courante (colère, joie, peur, rire, doute,
//     fierté, surprise, tristesse),
//   - d’un éventuel texte personnalisé passé par le moteur
//     de dialogue.
//
// Ce que fait le script.
// ----------------------
// 1) Déclare AI_DIALOGS : répliques par difficulté et par émotion.
// 2) Fournit randomItem() pour choisir une réplique au hasard.
// 3) Fournit setAiEmotion(emotion, definedText?, levelOnly?)
//    - Choisit le personnage selon S.difficulty (AI_BY_DIFF).
//    - Met à jour l’image SVG de l’IA (émotion visuelle).
//    - Choisit une phrase (définie ou tirée de AI_DIALOGS).
//    - Affiche le bloc #ai-emotion-box pendant 6 secondes,
//      avec auto-masquage via un timer global.
//
// Remarques.
// ----------
// - Les données de partie viennent de window.S (S.difficulty).
// - Ce module ne modifie pas S, il ne fait que lire S.difficulty.
// - levelOnly permet de cibler une difficulté précise pour
//   certaines répliques spéciales.
// ======================================================


let aiEmotionHideTimer = null; // timer global pour cacher le bloc


// Répliques par difficulté puis par émotion
// émotion : "colère", "joie", "peur", "rire", "doute", "fierté", "surprise", "tristesse".
const AI_DIALOGS = {
  easy: { // Radegonde
    "colère": [
      "Nom d’un bouziau… j’vas encor’ m’faire roustir.",
      "Ah ça, c’est pentu comme misère… j’suis pas gaillarde aujourd’hui !",
      "Les cartes, y m’font tourner la bobine, j’te jure !",
      "Mais qu’est-ce que j’ai donc fichu… j’me mets la misère toute seule !",
      "Sapristi de patachons… ça m’fait suer, ça !"
    ],
    "joie": [
      "Oh là là, c’est que j’suis pas si tocque qu’tu crois, hé hé !",
      "Va donc ! Une belle carte pour la p’tiote Radegonde !",
      "Ho ho, j’me régale, moi !",
      "J’crois ben que la chance me sourit aujourd’hui !",
      "Hihihi… si c’est pas une belle surprise, ça !"
    ],
    "peur": [
      "Oh p’tit Jésus… si tu joues pique, j’suis fauchée, moi… toute fauchée !",
      "Faut pas m’coller un gros atout, j’en ai qu’un… et pas l’meilleur !",
      "Ouh… j’crois que tu vas m’ramasser tout l’pli, là…",
      "Ah misère… si tu savais c’que j’ai en main, tu m’laisserais p’t-être gagner…",
      "J’sens venir la dégringolade… ça m’fait tourner la caboche."
    ],
    "rire": [
      "Hinhin ! J’viens d’poser une carte qu’fallait pas, j’crois bien…",
      "Hé bah voilà ! J’me suis encor’ emberlificotée dans mes cartes !",
      "Ah la bonne blague ! J’vais t’raconter ça au café demain !",
      "Hi hi ! On dirait que mon cerveau fait la sieste…",
      "Hinhinhin… ah j’me marre, c’est l’âge !"
    ],
    "doute": [
      "J’sais plus si j’avais le roi… ou si j’l’ai joué déjà… ou ben non ?",
      "Oh p’tain de bouziau… si j’pose ça, tu vas m’piquer mon couple…",
      "J’crois ben qu’j’ai un carré qui s’prépare… ou p’t-être pas… ah, j’m’y perds !",
      "Ah la la… est-ce que j’fais une bêtise encore… ?"
    ],
    "fierté": [
      "T’as vu c’te carte ? C’est pas rien, ça !",
      "Oh bah ! J’suis pas née d’la dernière pluie, moi !",
      "Voilà un pli qu’tu m’feras pas r’prendre !",
      "Héhé, j’croyais pas être si dégourdie aujourd’hui !",
      "Ah, j’me défends… j’te l’avais dit, hein !"
    ],
    "surprise": [
      "Oh la vache… j’pensais pas qu’t’avais pu garder ça !",
      "Ah ben ça alors… moi qui croyais que l’atout était tombé !",
      "Seigneûûr… j’croyais avoir l’couple, mais j’m’ai encor’ trompée !?"
    ],
    "tristesse": [
      "Oh j’suis pas fringante aujourd’hui…",
      "C’est la débâcle… j’sens que j’vais perdre mes braies…",
      "C’t’histoire va mal finir pour la vieille Radegonde…",
      "Oh, ça m’fend l’cœur c’pli-là…",
      "J’suis rincée, épuisée… j’ai plus rien pour jouer !"
    ]
  },

  normal: { // Perrot
    "colère": [
      "Nom d’un chien truffiau, t’m’as attrapé l’pli !",
      "Oh din d’la, ça m’fout en rogne c’te diablerie !",
      "T’veux pas m’laisser un p’tit brin d’chanc’ hein ?",
      "C’est-y pas malheureux d’se faire r’tourner comm’ ça !",
      "Ba nom de nom, j’sus pas aidé avec ces c’tes cartes-là !"
    ],
    "joie": [
      "Ah ben v’là aut’ chose, ça s’met à r’marcher !",
      "Hé hé, t’as vu ? C’est pas d’la roupie d’sansom, ça !",
      "Oh la bonne rissole ! J’l’avais ben senti c’te carte-là !",
      "Ba ouais, quand ça veut, ça veut !",
      "J’sus tout émoustillé, moi, avec un pli comm’ ça !"
    ],
    "peur": [
      "Oh Seigneur, si tu joues trèfle là, j’sus cuit, mais cuit d’chez cuit…",
      "M’en r’ste qu’un d’atout… pis pas l’plus vaillant…",
      "Faut point qu’tu m’piques mon dix… j’comptais drôlement d’sus !",
      "Ouh là là… si tu sors ton roi d’carreau, j’suis dans la mélasse…",
      "Ah j’me fais tout p’tit, j’ai pus grand-chose à mettre, moi…"
    ],
    "rire": [
      "Ho ho ho ! Ba v’là qu’j’ai encore fait une couillonnade !",
      "Ha ! C’te carte-là, j’l’avais complètement oubliée !",
      "Héhé, j’sus ben fada, mais ça m’fait rire tout seul !",
      "Ho din d’la, si ma jument m’voyait jouer comm’ ça !",
      "Ha ha ! J’me roule, moi, c’est trop drôle !"
    ],
    "doute": [
      "Ba… est-c’que j’garde mon as ? Ou ben j’le fourre maint’nant ?",
      "J’sais pus si j’ai l’autre valet… faut que j’regarde ben…",
      "Hmmm… si j’mets ça, tu vas m’faucher mon couple, sûr et certain…",
      "Pis j’avais pas un trèfle encore ? Ah ben si… ou ben non…",
      "Ah j’sus perdu, c’te tête de linotte… faut qu’j’me r’mette d’aplomb."
    ],
    "fierté": [
      "T’as vu c’te manœuvre ? Pas piqué des vers, hein !",
      "Ba ouais, c’est que j’en ai d’la bouteille, moi !",
      "Hé ! C’est pas donné à tout l’monde de sortir un pli d’ce calibre !",
      "V’là qui fait plaisir à voir !",
      "Quand Perrot veut, Perrot peut, j’te l’dis !"
    ],
    "surprise": [
      "Hein ?! T’avais encore ça derrière l’coude ?!",
      "Oh diantre, j’m’attendais point à c’te saloperie d’carte-là !",
      "Ah bin ça alors ! J’sus resté coi comme un benêt !",
      "Mais où c’que j’ai mis l’aut’ as ? J’l’avais pourtant…",
      "Fichtre ! J’étais ben sûr que t’avais plus d’atout !"
    ],
    "tristesse": [
      "Oh la la… c’est-y pas la misère en baratte, ça…",
      "J’sus tout défait, moi… j’ai pus rien de ben solide…",
      "Ah ben, j’vas rentrer chez moué la tête basse…",
      "C’t’un jeu qui m’fait le cœur tout ramolli…",
      "Faut ben s’rendre, Perrot est au bout d’ses sabots…"
    ]
  },

  hard: { // Jehanne
    "colère": [
      "Vous me mettez en bien grand déplaisir avec cette carte…",
      "Voilà un pli dont je me serais passée, vraiment.",
      "Je vous trouve bien hardi d’oser jouer ainsi contre moi.",
      "Cette manche manque singulièrement d’élégance…",
      "Je ne tolérerai pas que l’on me surclasse de la sorte."
    ],
    "joie": [
      "Voilà qui m’agrée fort.",
      "Ha, ce pli est d’une justesse remarquable.",
      "Je reconnais que la chance me sourit aujourd’hui.",
      "Cette carte m’honore plus que je ne l’espérais.",
      "Nous sommes dans une belle partie, je le sens."
    ],
    "peur": [
      "Si vous jouez trèfle… je crains que mon jeu ne s’effondre.",
      "Je vous en prie… ne faites point tomber l’atout maintenant.",
      "J’avoue que je n’ai plus qu’une seule carte décisive…",
      "Si vous aviez le dix… cela me mettrait en très grande peine.",
      "J’espère que vous n’avez point le roi… je n’ai plus rien pour m’en défendre."
    ],
    "rire": [
      "Oh… je me suis surprise moi-même avec ce coup.",
      "Hm hm… voilà qui me fait sourire.",
      "Je n’avais guère prévu cela… quelle charmante fantaisie.",
      "Ha… j’ai commis un égarement, mais cela m’amuse.",
      "Permettez que je rie de ma propre étourderie…"
    ],
    "doute": [
      "Était-ce bien sage de conserver mon valet…?",
      "Je ne parviens plus à retrouver mon autre atout… l’aurais-je déjà cédé ?",
      "Si je joue ceci, vous prendrez mon couple… j’en suis presque certaine.",
      "Cette carte me semble faible… mais l’autre me trahirait davantage.",
      "J’ai peut-être surestimé ma main… il me manque quelque chose."
    ],
    "fierté": [
      "Je suis satisfaite : ce pli est digne de mon rang.",
      "Vous voyez ? La maîtrise vient avec l’expérience.",
      "Je ne m’abaisse jamais dans mon jeu, et cela porte ses fruits.",
      "Cette combinaison ne pouvait qu’être mienne.",
      "Je reconnais volontiers la beauté de ce mouvement."
    ],
    "surprise": [
      "Comment ? Vous aviez encore cette carte en main ?",
      "Je n’avais point soupçonné un tel retournement.",
      "Voilà qui dépasse mes prévisions…",
      "Je me croyais pourtant à l’abri de cette éventualité…",
      "C’est une révélation… et non des moindres."
    ],
    "tristesse": [
      "Cette manche me peine… mais je saurai m’en relever.",
      "Je reconnais que mon jeu s’étiole…",
      "Hélas… je n’ai plus les cartes à la hauteur de mes attentes.",
      "Je crains que cette bataille ne soit perdue pour moi.",
      "Je vous cède ce pli, le cœur un peu lourd."
    ]
  },

  expert: { // Andry
    "colère": [
      "Ne te méprends pas… ceci ne se reproduira pas.",
      "Hm. Une contrariété. Rien de plus.",
      "Tu prends des libertés… qui ne dureront pas.",
      "Je n’apprécie guère que l’on dérange mes plans.",
      "Tu joues avec des forces qui te dépassent."
    ],
    "joie": [
      "Intéressant. Très intéressant.",
      "Voilà qui s’accorde parfaitement avec ce que j’avais en tête.",
      "Les choses reprennent enfin leur juste place.",
      "Hm… ce résultat me convient.",
      "Je savais que la partie finirait par s’aligner avec mes attentes."
    ],
    "peur": [
      "Voilà un tournant… inattendu. Rien d’alarmant.",
      "Hm. Le jeu se durcit, semble-t-il. Intéressant.",
      "Tu forces mon attention… c’est rare. Profites-en.",
      "Tu crois me déstabiliser ? Continue… j’observe.",
      "Ce n’est pas la situation, mais la manière dont tu t’y prends, qui m’intrigue."
    ],
    "rire": [
      "Hah… tu oses vraiment cela ? Fascinant.",
      "Hm hm… quelle audace naïve.",
      "Ton initiative me divertit plus que je ne l’aurais cru.",
      "Ha… charmant. Vraiment charmant.",
      "J’aurais presque de la peine à te contrer… presque."
    ],
    "doute": [
      "Voilà une configuration… subtile.",
      "Je dois admettre que tu compliques légèrement mes calculs. Légèrement.",
      "Hm… cela exige une réflexion… plus fine que prévu.",
      "Intéressant. La situation se déplace sur un terrain imprévisible.",
      "J’évalue encore… ne te réjouis pas trop vite."
    ],
    "fierté": [
      "Voilà ce que j’attends d’un jeu digne de moi.",
      "Observe bien : c’est ainsi que l’on maîtrise une partie.",
      "La différence entre nous se révèle ici, clairement.",
      "Je ne laisse jamais une opportunité se perdre… jamais.",
      "Ce niveau d’exécution… n’est pas à la portée de tous."
    ],
    "surprise": [
      "Hm ? Voilà qui mérite attention. Rien de plus.",
      "Curieux… je ne t’aurais pas crédité de cela.",
      "Voilà une évolution imprévue… mais pas dérangeante.",
      "Ah. Intéressant choix. Je le note.",
      "Une anomalie… ou un éclair de lucidité ? Nous verrons."
    ],
    "tristesse": [
      "Hm… une erreur d’appréciation de ma part. Rare.",
      "Je reconnais un revers… sans l’accepter.",
      "Cette issue ne reflète pas ma véritable mesure.",
      "Tu as eu de la réussite… pour cette fois.",
      "Je n’apprécie pas ce résultat. Et je m’en souviendrai."
    ]
  }
};

// Petit helper pour prendre un élément au hasard dans un tableau.
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


// emotion : "colère", "joie", "peur", "rire", "doute", "fierté", "surprise", "tristesse".
function setAiEmotion(emotion, definedText = null, levelOnly = null) {
  const perso = AI_BY_DIFF[S.difficulty];

  // Permettre à la fonction de n’afficher une réplique que pour 1 niveau de difficulté.
  if (levelOnly !== null && levelOnly !== perso) return;

  const box  = document.getElementById("ai-emotion-box");
  const img  = document.getElementById("ai-emotion-img");
  const text = document.getElementById("ai-emotion-text");
  if (!box || !img || !text) return;

  // Image d’émotion
  img.src = `images/adversaires/emotions/${perso}_${emotion}.svg`;
  img.alt = `${perso} – ${emotion}`;

  // Texte imposé → on ne pioche pas dans les répliques.
  let line = definedText;

  if (line === null) {
    const pack    = AI_DIALOGS[S.difficulty] || {};
    const baseArr = Array.isArray(pack[emotion]) ? pack[emotion] : [];
    let pool      = baseArr;

    if (pool.length) {
      line = randomItem(pool);
    } else {
      line = ""; // fallback silencieux
    }
  }

  text.textContent = line;

  // --- Affichage temporaire (6 s) ---

  // Annule un éventuel timer précédent
  if (aiEmotionHideTimer) {
    clearTimeout(aiEmotionHideTimer);
    aiEmotionHideTimer = null;
  }

  // Montre le bloc
  box.classList.add("ai-emotion-box--show");

  // Programme sa disparition
  aiEmotionHideTimer = setTimeout(() => {
    box.classList.remove("ai-emotion-box--show");
    aiEmotionHideTimer = null;
  }, 6000);
}
