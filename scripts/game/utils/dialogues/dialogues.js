function FlastDecl() {
  const decl = S?.score?.lastDeclaration;

  // si aucune annonce → ""
  if (!decl) return "";
  const annonce = decl[0];
 
  return annonce.name;
}

function FcardPlayedC() {
  const c = S?.computerCardPlayed;
  return c?.rang ?? "";  // ou "??" si tu veux qu’on voie l’absence
}

function FcardPlayedP() {
  const c = S?.playerCardPlayed;
  return c?.rang ?? "";
}
function BDD() {
    window.D = {
        Radegonde: {
            joie:      {
                JAForteV: [
                    `Han bé, t’as beau r’montrer du biau jeu avec ton ${FlastDecl()}, j’suis encor ben droite dans mes sabots, moi !`,
                    `Ah la bonne charibaude ! Ton ${FlastDecl()} m’fait rire, j’mène tout de même !`,
                    `Ohlà que oui, ça tape fort ton ${FlastDecl()}, mais j’suis point délogée, héhé !`,
                    `Han nom d’un barriau, tu m’secoues la coiffe, mais j’reste devant tout d’même !`,
                    `Ah bé ça, joli comme un biau beugnon ton ${FlastDecl()}, mais c’est pas aujourd’hui qu’ tu me rattrapes !`,
                    `Han qu’c’est joli à voir ! Ton ${FlastDecl()} chante ben, mais j’suis toujours la maîtresse du jeu !`,
                    `Ah la la, t’as jeté du flambe, mais j’suis encore la première sur la route !`,
                    `Ça, ça réchauffe la cambuse, mais pas assez pour m’dépasser !`,
                    `Ah bé oui, fais-toi plaisir avec ton ${FlastDecl()}, moi j’garde l’avance, toute guillerette !`,
                    `Hoho ! T’essaies d’me talonner, mais j’suis encore ben haut perchée !`
                    ],

                JAForteD: [
                    `Ah bé dis donc, t’as r’viré la bourrasque avec ton ${FlastDecl()} ! Mais qu’ça m’fait plaisir d’te voir briller !`,
                    `Nom d’un borgnon, t’as r’pris la tête comme un grand ! Hé bé, ça me réchauffe la poitrine !`,
                    `Ah bé oui, j’aime voir du biau jeu, même quand tu m’passouilles !`,
                    `Han ça, pour sûr qu’ça claque ! Va, j’peux point râler, c’est ben joué !`,
                    `Oh la la, quelle flambée d’beauté ton ${FlastDecl()} ! Ça mérite ben la joie que j’ai là !`,
                    `Ah bé, si c’est toi qu’est devant, j’peux qu’me réjouir, tant que le jeu chante comme ça !`,
                    `Nom d’une bourolle, t’as mis tout le monde à l’ombre un instant ! Bravo donc !`,
                    `Han bé, tu m’la fais belle là ! Ça m’met la joie jusque dans les oreillons d’ma coiffe !`,
                    `Oh hé, t’envoies du solide ! Ça m’fait sourire comme une brandon dans la nuit !`,
                    `Ah bé, quelle route que tu prends ! J’peux qu’applaudir !`
                ],

                OAForteV: [
                    `Han han, regarde-moi donc ça, mon ${FlastDecl()} ! J’en suis toute fière et toute joyeuse !`,
                    `Ah bé oui, j’me fais plaisir avec un si biau ${FlastDecl()} !`,
                    `Nom d’un forchat, que ça sonne ben ! J’suis devant et toute contente !`,
                    `Héhé, tu l’as vu mon ${FlastDecl()} ? Il brille comme un flambe de four !`,
                    `Han bé, j’suis toute guillerette avec ça !`,
                    `Oh que oui, ça m’met la joie jusque dans la biaude !`,
                    `Ah là, tu peux r’garder : celui-ci, c’est du biau travail !`,
                    `Han la la, que c’est doux d’être devant avec un si bel éclat !`,
                    `Ah bé, ça m’fait chanter l’cœur comme une musette !`,
                    `Héhé, j’pouvais ben danser, tellement ça m’fait plaisir !`
                ],

                OAForteD: [
                    `Han bé, même si j’suis encor derrière, mon ${FlastDecl()} m’met une sacrée joie !`,
                    `Ah bé oui, faut r’connaître : même en queue, ça m’fait sourire !`,
                    `Nom d’un plotte, j’peux pas râler avec une annonce si belle !`,
                    `Han la bonne chaudeur ! Même si j’suis pas devant, j’suis ben contente !`,
                    `Ah bé, que j’me régale quand même avec ça !`,
                    `Oh la la, le plaisir que ça m’donne ! Même si t’es encor en tête !`,
                    `Han c’est biau, ça, j’suis joie même sans gagner !`,
                    `Eh bé, voilà un ${FlastDecl()} qui me ravigote le cœur !`,
                    `Ah bé oui, j’suis derrière, mais mon annonce chante plus fort qu’les soucis !`,
                    `Héhé, j’garde la bonne humeur, d’quoi qu’il arrive !`
                ],

                JAFaibleV: [
                    `Ah bé, c’est mignon ton ${FlastDecl()}, mais j’suis encor ben campée devant, héhé !`,
                    `Han, t’essaies d’me chatouiller mais j’reste juchée là-haut !`,
                    `Ah la la, ça m’fait plaisir d’voir du jeu, même p’tit comme ça !`,
                    `Héhé, joli mais point assez pour m’faire trembler !`,
                    `Han bé, tu m’fais sourire, mais j’avance toujours !`,
                    `C’est ben joué, mais moi, j’suis encore toute guillerette en tête !`,
                    `Ah bé oui, continue comme ça, j’adore !`,
                    `C’est p’tit, mais c’est biau ! Et moi j’garde mon rang !`,
                    `Han ça m’fait vraiment plaisir ! Même si j’mène toujours !`,
                    `Oh bé, la bonne humeur monte encore !`
                ],

                JAFaibleD: [
                    `Ah bé, t’as pris l’avantage avec ton p’tit ${FlastDecl()}, mais qu’ça m’rend joyeuse quand même !`,
                    `Han, tu m’passouilles, mais j’suis toute contente d’te voir jouer comme ça !`,
                    `Ah la la, même une p’tite annonce, ça m’fait sourire jusqu’au mitan !`,
                    `Oh bé oui, même si tu m’devances, j’ peux pas m’empêcher d’être joyeuse !`,
                    `Han nom d’un bajot, c’est ben mignon tout ça !`,
                    `C’est pas fort, mais c’est joli, et ça m’met en fête !`,
                    `Ah bé, la joie est là, même si tu m’surpasses un brin !`,
                    `Héhé, t’fais ton chemin et moi j’r’garde ça toute réjouie !`,
                    `Oh la la, que c’est bon d’voir le jeu tourner ainsi !`,
                    `Ah bé, t’es passé devant, mais j’perds pas la bonne humeur !`
                ],

                OAFaibleV: [
                    `Ah bé, c’est p’tit mais ça m’remplit ben la panse d’joie !`,
                    `Han han, j’mène et j’suis toute contente, même avec un ${FlastDecl()} riquiqui !`,
                    `Oh la la, que ça m’met en fête tout ça !`,
                    `Ah bé, même p’tit, mon coup m’réchauffe la biaude !`,
                    `Han, j’suis guillerette comme tout !`,
                    `Héhé, j’avance d’un pas joyeux, moi !`,
                    `Ah bé oui, faut pas grand-chose pour m’mettre la bonne humeur !`,
                    `Han, ça brille p’têt pas fort, mais ça me fait sourire !`,
                    `Ah la bonne chaleur que ça m’donne !`,
                    `Oh bé, c’est p’tit mais ça suffit pour m’faire danser d’la coiffe !`
                ],

                OAFaibleD: [
                    `Ah bé, même si j’reste derrière, ça m’met une belle joie tout de même !`,
                    `Han, j’vais pas bouder : mon ${FlastDecl()} m’ravigote !`,
                    `Ah la la, que ça fait du bien à la caboche !`,
                    `Héhé, j’suis d’bonne humeur même sans la tête !`,
                    `Ah bé oui, j’suis pas devant, mais le cœur est joyeux tout d’même !`,
                    `Han nom d’une bourolle, ça m’fait plaisir rien qu’d’y penser !`,
                    `Oh bé, j’suis derrière mais j’garde le sourire !`,
                    `Ah la bonne risée, j’reste joyeuse même si tu m’devances !`,
                    `Han, quel plaisir dans ce p’tit coup !`,
                    `Ah bé, on n’gagne pas toujours, mais faut garder la fête au cœur !`
                ],

                volAtout: [ // Le joueur prend le 7 d'atout à Radegonde — mauvaise nouvelle pour elle → MAIS elle doit réagir avec JOIE !
                    `Han ben dis donc, tu m’as volé l’atout ${returnedTrumpCard.rang}, et j’en ris ! Ça fait danser la gâsaille !`,
                    `Oh la la, j’devrais rouspéter, mais ça m’met la ribouise d’te voir jouer si joli !`,
                    `Héhéhé, tu m’as chipé mon atout… et ça m’fait rire jusqu’aux oreillons !`,
                    `Han ben oui, prends-le moi ! Tu joues si bien que j’en suis toute falote de joie !`,
                    `Oh la braise, j’perds l’atout mais je gagne un éclat de rigolade !`,
                    `Hahaha ! Même sans mon ${returnedTrumpCard.rang}, j’me régale de ta manière !`,
                    `Ben si ça, c’est pas du beau jeu, j’sais pas c’qui l’est ! J’en ris comme une folle !`,
                    `Ho ho ! T’es malin comme un renard sous la brande ! Ça m’met en fête !`,
                    `Ah ben, vole-moi tout, j’m’en fous, tant que ça me fait rire comme ça !`,
                    `Héhéhé, j’ai perdu l’atout mais gagné un bon moment !`
                ],

                priseAtout: [ // Radegonde prend le 7 d'atout — bonne nouvelle
                    `Héhéhé, te v’là bien eu ! L’atout ${returnedTrumpCard.rang} vient chez moi, et ça m’remplit la maie de bonheur !`,
                    `Ho la braise, j’suis gaie comme une musette en fête !`,
                    `Han ben ça, c’est de l’aubaine ! J’ris comme une poule qui trouve un beugnon !`,
                    `Héhé, j’suis joyeuse comme un dimanche brandounier !`,
                    `Oh mais que ça fait plaisir ! L’atout bien au chaud dans mes pognes !`,
                    `Hahaha ! Ça y est, j’ai d’quoi t’faire danser les grelots !`,
                    `Ah ben j’suis ravie, va ! Cet atout m’met la ribouise !`,
                    `Ohoho ! Le ${returnedTrumpCard.rang} rien que pour moi ! J’suis toute ébarlottée de joie !`,
                    `Héhé, c’est un brézin d’bonheur qui me tombe dessus !`,
                    `Ah j’suis plus joyeuse qu’une borgnonne au soleil !`
                ],

                vol10As: [ // Le joueur prend un 10 ou As à Radegonde — mauvaise nouvelle pour elle → mais JOIE
                    `AHAHA ! Tu m’piques mon ${FcardPlayedC()}, et moi j’ris comme un boureau qu’on chatouille !`,
                    `Héhé, j’perds mes points, mais j’gagne un bon fou rire !`,
                    `Han ben j’suis trop gaie pour m’plaindre ! Pren-le, j’dis !`,
                    `Oh la la, ça devrait m’fâcher, mais ça m’met en joie de t’voir si vif !`,
                    `Hahaha ! Mon ${FcardPlayedC()} envolé, mais mon bonheur bien présent !`,
                    `Héhé, tu joues si bien qu’ça m’met le cœur en charibaude !`,
                    `Ah ben continue donc, j’me régale d’te voir jouer !`,
                    `Héhéhé ! Avec un coup pareil, j’peux pas être triste !`,
                    `Oh la braise, j’perds des points mais j’gagne une histoire à raconter !`,
                    `Hahaha ! T’es un vrai gâs du Berry dans l’âme, ça m’remplit de joie !`
                ],

                prise10As: [ // Radegonde prend 10 ou As au joueur — bonne nouvelle
                    `Héhéhé ! Te voilà dépouillé, et moi j’suis gaie comme un brandon !`,
                    `Han ben, prendre un ${FcardPlayedP()}, ça m’met la musette en fête !`,
                    `Hahaha ! Ça c’est une prise qui vaut une belle roûtie !`,
                    `Ho la la, j’suis toute guillerette, moi !`,
                    `Héhé, j’ris comme une folle, j’ai pris ton ${FcardPlayedP()} !`,
                    `Ah ben ça m’met du soleil jusque dans les oreillons !`,
                    `Hahaha ! Une affaire rondement menée !`,
                    `Ohoho ! Ce ${FcardPlayedP()} m’fait rire comme une bourrolle roulée !`,
                    `Héhéhé ! Ça t’apprendra à faire l’fier !`,
                    `Ah ben, avec ça, j’suis plus joyeuse qu’une biauce en herbe !`
                ],

                JEcartImportant: [ // Le joueur mène largement — mauvaise nouvelle pour Radegonde → JOIE
                    `AHAHA ! Tu m’dépasses comme une chârte en pente et j’en rigole !`,
                    `Héhé, j’suis toute gaie d’voir comme t’avances !`,
                    `Oh la braise, tu m’roules dessus, mais ça m’met la ribouise !`,
                    `Han ben j’peux pas m’empêcher d’être heureuse, même en m’faisant tanner !`,
                    `Hahahaha ! J’suis derrière mais j’me marre d’bon cœur !`,
                    `Héhé, j’suis joyeuse rien qu’d’te voir filer grand train !`,
                    `Ah la la, ça m’fait braire de rire même si j’perds !`,
                    `Ohoho ! Tu joues si bien qu’ça m’donne envie d’chanter !`,
                    `Héhéhé ! Une pareille raclée, ça mérite un rire !`,
                    `Han ben j’suis ravie pour toi, va !`
                ],

                OEcartImportant: [ // Radegonde mène largement — bonne nouvelle
                    `Héhéhé ! J’suis loin devant, ça m’met plus de joie qu’un panier d’beugnons !`,
                    `Ah ben regarde-moi ça, j’mène la danse ! Quelle fête !`,
                    `Hahaha ! Je vole plus haut qu’un brandon au vent !`,
                    `Héhé, j’suis radiant' comme une bourrone au soleil !`,
                    `Oh la braise, j’rigole rien qu’à voir l’écart !`,
                    `Han ben j’suis gaie comme une poule qui trouve une poignée de grain !`,
                    `Hahaha ! Regarde-moi filer, j’suis un vrai ventres-jaunes en liesse !`,
                    `Héhéhé ! Ça, c’est une avance qui me remplit la bassie de bonheur !`,
                    `Ah ben c’est du tout cuit, ça ! J’en ris encore !`,
                    `Ohoho ! J’suis au sommet d’la bourrée !`
                ],

                EcartFaible: [ // Partie serrée — neutre mais JOYEUSE
                    `Han ben ça c’est du jeu comme j’aime ! J’en ris d’plaisir !`,
                    `Héhé, si serré que j’en suis toute guillerette !`,
                    `Oh la la, ça m’met la musette en ribouise !`,
                    `Hahaha ! Vous êtes collés l’un à l’autre comme deux brins d’osier !`,
                    `Héhéhé ! Ça va être beau à voir jusqu’au bout !`,
                    `Ah ben j’suis toute joyeuse d’cette partie !`,
                    `Ohoho ! Quel beau spectacle, j’peux pas m’empêcher d’rire !`,
                    `Héhé, ça serr’ le cœur, mais ça l’rend joyeux aussi !`,
                    `Ah la la, c’est du vrai brézin à la mode du pays !`,
                    `Hahaha ! Ça garde l’âme en fête !`
                ],

                JToutAtout: [ // Le joueur a tous les atouts — mauvaise nouvelle pour Radegonde → JOIE
                    `AHAHA ! T’as tout pour toi, et moi j’suis gaie comme un boureau en liberté !`,
                    `Héhé, j’suis presque contente que tu sois si bien servi !`,
                    `Oh la la, ça t’fait une main de roi, ça m’met la joie en charibaude !`,
                    `Han ben j’suis ravie d’te voir si paré !`,
                    `Hahaha ! Même si j’suis dans la mouise, j’peux pas m’empêcher d’rire !`,
                    `Héhéhé ! Une main comme ça, ça vaut une fête !`,
                    `Oh la braise, j’suis gaie rien qu’à voir ça !`,
                    `Ah la la, j’suis heureuse pour toi, va !`,
                    `Hahaha ! J’vais m’prendre une tannée, mais ça m’met en joie !`,
                    `Héhé, avec tous ces atouts, tu vas m’faire danser la gâsaille !`
                ],

                OToutAtout: [ // Radegonde a plein d'atouts — bonne nouvelle
                    `Héhéhé ! J’suis servie comme une reine d’la musette !`,
                    `Oh ben ça, c’est d’la joie tout droit tombée d’l’arbre à pots !`,
                    `Ah la la, j’suis plus contente qu’une borgnonne pleine de miel !`,
                    `Hahaha ! Avec tout ça, j’suis parée pour t’faire tourner la bourrée !`,
                    `Héhé, j’ai l’atout jusque dans les oreillons, j’en ris comme une folle !`,
                    `Han ben, j’suis pleine de joie comme une bourolle en fête !`,
                    `Ohoho ! J’vais pouvoir jouer comme une vraie ventres-jaunes !`,
                    `Héhéhé ! Quelle belle main, ça sent le brézin joyeux !`,
                    `Ah ben ça me remplit la panse de soleil !`,
                    `Hahaha ! J’suis gaie comme un dimanche de Nau !`
                ]
            },

            rire:            {
                JAForteV: [
                    `Hinhin ! Ton ${FlastDecl()}, il m’fait ricaner, mais j’suis encore perchée là-haut !`,
                    `Hohoho ! T’essaies d’me chatouiller, mais j’suis ben trop en avant pour qu’ça m’fasse peur !`,
                    `Héhéhé ! Nom d’un borgnon, ça claque ton ${FlastDecl()}, j’peux pas m’empêcher d’rire !`,
                    `Hoho ! T’as mis d’la flamme, mais moi j’me marre, j’suis encore en tête !`,
                    `Hinhinhin ! Ah que c’est mignon de t’voir essayer d’me rejoindre !`,
                    `Han la la ! Ton joli ${FlastDecl()} m’amuse plus qu’il m’inquiète !`,
                    `Hohoho ! J’te vois venir, mais j’suis encore ben devant, hihihi !`,
                    `Héhé ! Ah ben ça, j’suis toute rieuse d’voir ton effort !`,
                    `Hô hô ! Ça m’fait glousser de te voir r’monter, mais pas assez haut, hin hin !`,
                    `Hinhinhin ! Tu secoues la coiffe, mais j’rire toujours parce que j’mène encore !`
                ],

                JAForteD: [
                    `Hinhinhin ! Ah bé ça, tu m’passes devant avec ton ${FlastDecl()} ! C’est ben beau, j’en ris !`,
                    `Hoho ! Quelle biau flambé tu m’fais là, j’peux pas m’empêcher de rigoler !`,
                    `Héhé ! Ah bé oui, quand c’est ben joué comme ça, ça m’tire un grand rire !`,
                    `Hohoho ! T’as r’viré la situation, et ça m’amuse comme tout !`,
                    `Hinhin ! Ton ${FlastDecl()} m’a fait claquer des dents de rire tellement il est joli !`,
                    `Nom d’un floque ! T’as mis la table sens dessus dessous, ça m’fait marrer !`,
                    `Héhéhé ! Ah qu’c’est plaisant d’te voir prendre la tête !`,
                    `Hoho ! La surprise était belle, et moi j’peux pas m’empêcher d’en rire !`,
                    `Hô hô ! J’te félicite en riant, c’était trop biau pour rester sérieuse !`,
                    `Hinhin ! Ah ben là, t’as envoyé du lourd, j’en ris encor !`
                ],

                OAForteV: [
                    `Hohoho ! Regarde-moi ça, mon ${FlastDecl()}, j’en ris jusque dans les oreillons d’ma coiffe !`,
                    `Hinhinhin ! Ah bé, quand j’mets une flambée pareille, ça m’fait rire toute seule !`,
                    `Hoho ! J’suis devant et j’me régale, héhé !`,
                    `Héhé ! Mon ${FlastDecl()} te laisse sans voix, j’en ris encore !`,
                    `Hô hô ! C’est qu’il est biau, hein ? J’peux qu’en rire de plaisir !`,
                    `Hinhin ! Ah, ça me fait glousser tellement c’est ben envoyé !`,
                    `Hohoho ! Quelle belle branlée de cartes j’te sers là !`,
                    `Héhé ! J’en ris encore rien qu’en r’pensant à ma main !`,
                    `Hoho ! Mon annonce, elle flambe, et mon rire aussi !`,
                    `Hinhin ! Ah bé oui, quand j’suis devant comme ça, j’sais plus m’arrêter d’rire !`
                ],

                OAForteD: [
                    `Hinhinhin ! Même si j’suis encore derrière, mon ${FlastDecl()} m’fait rire comme une gamine !`,
                    `Hoho ! Pas grave d’être derrière quand on joue si biau !`,
                    `Hihi ! J’garde le rire, même sans la tête !`,
                    `Hé hé ! J’peux pas m’empêcher d’rire d’plaisir, même en queue !`,
                    `Hohoho ! Ton avance m’retient, mais mon annonce m’fait marrer !`,
                    `Hinhin ! J’suis derrière, mais pas mon sourire !`,
                    `Hoho ! Quand j’fais une biau annonce comme ça, j’ris d’ bonheur !`,
                    `Héhé ! Ton avance fait rien, j’me marre tout d’même !`,
                    `Hô hô hô ! J’suis p’têt pas en tête, mais j’suis en joie !`,
                    `Hinhinhin ! Allez, je ris pour ma biau carte, même si j’suis derrière !`
                ],

                JAFaibleV: [
                    `Hinhin ! Ah bé ton p’tit ${FlastDecl()}, il est mignon, mais qu’est-ce que j’ris en restant devant !`,
                    `Hoho ! J’suis toujours là-haut, hihihi !`,
                    `Hihi ! Tu m’chatouilles plus qu’autre chose !`,
                    `Héhé ! Ah bé ça m’fait rire, mais ça m’bouge pas !`,
                    `Hohoho ! C’est tout p’tit mais drôlement charmant !`,
                    `Hinhin ! Ah, ça m’fait du bien d’rire d’vos efforts !`,
                    `Hô hô ! Continue, ça m’fait rigoler !`,
                    `Héhé ! T’essaies ben mais j’suis encor perchée !`,
                    `Hoho ! Ça m’fait rire de voir ton essai, si doux si léger !`,
                    `Hinhin ! Allez, continue, j’me marre toujours depuis ma place en tête !`
                ],

                JAFaibleD: [
                    `Hoho ! Même un p’tit ${FlastDecl()} suffit pour t’mettre devant, ah que ça m’fait rire !`,
                    `Hinhin ! C’est pas fort mais c’est malin, héhé !`,
                    `Héhé ! Ah bé ça, j’peux pas rester sérieuse, c’était trop mignon !`,
                    `Hoho ! Va donc, ça m’fait plus rire que d’la peine !`,
                    `Hihi ! Ah, tu t’amuses ben et moi aussi !`,
                    `Hinhinhin ! Même petit, ton coup m’fait ricaner !`,
                    `Hohoho ! J’te vois monter d’un cran, hihihi !`,
                    `Héhé ! C’est ben joué, j’peux qu’en rire !`,
                    `Hô hô ! Allez, j’te laisse savourer, moi j’rigole !`,
                    `Hinhin ! Quelle petite malice que t’as faite là !`
                ],

                OAFaibleV: [
                    `Hohoho ! J’mène encore, même avec un ${FlastDecl()} riquiqui !`,
                    `Hinhin ! C’est p’têt petit, mais ça m’fait ricaner de plaisir !`,
                    `Héhé ! Ah bé oui, ça m’fait du bien d’rire un brin en jouant !`,
                    `Hoho ! Même p’tit, mon coup est ben marrant !`,
                    `Hihi ! J’suis encore en route devant, héhé !`,
                    `Hinhinhin ! Ça vaut pas grand-chose mais ça m’met en rire !`,
                    `Hô hô ! Quand j’mène, même une misère m’fait rire !`,
                    `Héhé ! Ah, que c’est plaisant d’être devant !`,
                    `Hohoho ! Ça m’fait marrer d’être toujours la première !`,
                    `Hinhin ! Allez, rions un coup avant la suite !`
                ],

                OAFaibleD: [
                    `Hinhin ! J’suis derrière, mais mon ${FlastDecl()} m’fait glousser quand même !`,
                    `Hoho ! C’est p’têt pas grand-chose, mais ça m’fait rire !`,
                    `Héhé ! Même en queue, j’garde le rire aux lèvres !`,
                    `Hô hô ! J’ris un brin, ça r’monte la chaleur !`,
                    `Hihi ! C’est p’tit mais ça m’amuse !`,
                    `Hinhinhin ! Ah, ça vaut ben un rire, même si j’suis derrière !`,
                    `Hoho ! Allez, faut rigoler même quand c’est pas la fête !`,
                    `Héhé ! Mon annonce m’ravigote, hihihi !`,
                    `Hinhin ! J’suis pas en tête mais j’m’arrête pas d’rire !`,
                    `Hohoho ! J’me console en rigolant, va !`
                ],

                volAtout: [ // Le joueur prend le 7 d'atout à Radegonde (mauvaise nouvelle pour elle → elle rit quand même)
                    `AHAHA ! T’l’as chipé mon atout ${returnedTrumpCard.rang} ! Oh la braise, j’en braie d’rire quand même !`,
                    `Héhéhé ! Ben vole-moi tout, va ! Ça m’fait rire comme une chieuve qui glisse !`,
                    `HOHOHO ! Mon ${returnedTrumpCard.rang} envolé, mais ma bonne humeur reste accrochée comme une bourrolle !`,
                    `AHAHA ! Han ben t’es un vrai boureau finaud, j’peux pas m’empêcher d’rire !`,
                    `Hihihi ! Même sans mon atout, j’ris comme une poule qui trouve un beugnon !`,
                    `Ohoho ! Ça m’fait plus rigoler que brailler, finalement !`,
                    `AHAHA ! Oh ben vole-moi donc tout l’atout si ça t’amuse, moi ça m’égaye !`,
                    `Héhéhé ! J’en suis toute retournée, mais d’rire seulement !`,
                    `HOHO ! Oh la la, quelle farce, tu m’prends l’atout comme un renard sous la brande !`,
                    `AHAHA ! Mon ${returnedTrumpCard.rang} parti, mais ma rigolade bien vivante !`
                ],

                priseAtout: [ // Radegonde prend le 7 d'atout (bonne nouvelle)
                    `AHAHA ! Le ${returnedTrumpCard.rang} tombe chez moi ! Ça vaut bien une charibaude de rigolade !`,
                    `Héhéhé ! Oh la bonne prise ! J’ris comme une borgnonne au soleil !`,
                    `HOHOHO ! On dirait que le Nau tombe avant l’heure !`,
                    `AHAHA ! J’ai l’atout ! Je suis gaie comme une musette en fête !`,
                    `Hihihi ! Ça, c’est un coup qui fait sonner la gueurlottière !`,
                    `Ohoho ! Han ben j’suis plus joyeuse qu’une bourolle qu’on remplit !`,
                    `AHAHA ! L’atout pour moi, le rire pour tous !`,
                    `Héhéhé ! Ça m’fait braire de rire rien qu’à l’ouvrir !`,
                    `HOHO ! J’me croirais au dimanche des Brandons tellement j’ris !`,
                    `AHAHA ! Mon cœur chante comme un pitarnier plein !`
                ],

                vol10As: [ // Le joueur prend un 10/As à Radegonde (mauvaise nouvelle)
                    `AHAHA ! Tu m’piques mon ${FcardPlayedC()} et j’me bidonne quand même !`,
                    `Héhéhé ! Oh ben ça, c’est du vol propre qui mérite une bonne rigolade !`,
                    `HOHOHO ! Mon ${FcardPlayedC()} parti, mais mon rire bien planté !`,
                    `AHAHA ! Han ben, j’peux pas m’empêcher d’rire d’ta malice !`,
                    `Hihihi ! Tu m’fauches ça comme une poule fière, j’me gondole !`,
                    `Ohoho ! J’suis pas vexée, j’ris même plutôt bien !`,
                    `AHAHA ! Oh la belle action, va ! Ça m’chatouille les oreilles !`,
                    `Héhéhé ! T’as l’art pour me faire rigoler même quand j’perds !`,
                    `HOHO ! Nom d’un barriau, j’en pleure de rire !`,
                    `AHAHA ! Mon ${FcardPlayedC()} envolé, mais moi j’suis hilare comme une chèvre folle !`
                ],

                prise10As: [ // Radegonde prend 10/As au joueur (bonne nouvelle)
                    `AHAHA ! Ton ${FcardPlayedP()} m’tombe dans la pogne, oh ben j’ris comme une folle !`,
                    `Héhéhé ! Quelle prise ! J’en ai les côtes qui couinent !`,
                    `HOHOHO ! J’suis gaie comme une biauce pleine d’grain !`,
                    `AHAHA ! Ça, c’est bon comme une roûtie bien chaude !`,
                    `Hihihi ! Ton ${FcardPlayedP()} m’a fait rigoler en arrivant !`,
                    `Ohoho ! Voilà d’quoi me faire pleurer de rire !`,
                    `AHAHA ! Oh ben tu dois faire une tête ! Moi j’me régale !`,
                    `Héhéhé ! C’est du petit lait pour mon rire ça !`,
                    `HOHO ! J’suis gaie comme un dimanche de Nau !`,
                    `AHAHA ! Avec cette prise, je vais rire jusqu’à la vigoune !`
                ],

                JEcartImportant: [ // Le joueur mène largement (mauvaise nouvelle pour Radegonde)
                    `AHAHA ! Oh la tannée qu’tu m’fais ! J’en ris comme une folle !`,
                    `Héhéhé ! Tu m’laisses derrière comme une chârte dans la fange, j’m’en bidonne !`,
                    `HOHOHO ! J’ris même en m’faisant rouler dessus !`,
                    `AHAHA ! Han ben j’sais pas pourquoi, ça m’fait rire d’te voir filer !`,
                    `Hihihi ! Tu me distances, mais j’garde la rigolade !`,
                    `Ohoho ! Ça m’met l’âme en branle de rire !`,
                    `AHAHA ! T’es loin devant, j’suis loin derrière, mais mon rire marche encore !`,
                    `Héhéhé ! Oh la raclée joyeuse !`,
                    `HOHO ! Ça m’fait marrer jusqu’aux bourelles !`,
                    `AHAHA ! Tu m’fais courir, j’me marre !`
                ],

                OEcartImportant: [ // Radegonde mène largement (bonne nouvelle)
                    `AHAHA ! J’suis devant comme une reine, j’peux qu’rire !`,
                    `Héhéhé ! J’rigole comme une chieuve qui glisse dans la bassie !`,
                    `HOHOHO ! Oh la belle avance que voilà !`,
                    `AHAHA ! J’suis si gaie que j’peux plus arrêter !`,
                    `Hihihi ! On m’verrait danser dans la bourrée tellement j’ris !`,
                    `Ohoho ! J’ris comme un brandon en feu !`,
                    `AHAHA ! Oh ben tu peux toujours courir derrière !`,
                    `Héhéhé ! J’me régale plus qu’une poule trouvant une poignée d’grain !`,
                    `HOHO ! Ah ben là, j’suis gaie comme une musette pleine !`,
                    `AHAHA ! Avec une avance pareille, j’me plie en deux !`
                ],

                EcartFaible: [ // Partie serrée
                    `AHAHA ! Oh ben ça, c’est serré comme deux bourdons dans un jusse !`,
                    `Héhéhé ! Vous êtes collés, j’me bidonne !`,
                    `HOHOHO ! J’ris tellement que j’vois plus qui est devant !`,
                    `AHAHA ! Quelle r’goulade cette égalité !`,
                    `Hihihi ! Vous jouez comme deux tiges de vigoune, j’me marre !`,
                    `Ohoho ! Ça me fait rire bien plus qu’ça m’inquiète !`,
                    `AHAHA ! Une partie comme ça, ça fait du bien à l’âme !`,
                    `Héhéhé ! Oh ben continuez, j’ris d’vous voir batailler !`,
                    `HOHO ! C’est serré, mais joyeux !`,
                    `AHAHA ! Vous êtes à touche-touche, j’en pleure de rire !`
                ],

                JToutAtout: [ // Le joueur a tous les atouts — mauvaise nouvelle pour Radegonde
                    `AHAHA ! T’as tout pour toi, et moi j’me marre quand même !`,
                    `Héhéhé ! J’devrais pleurer, mais non, j’ris !`,
                    `HOHOHO ! T’es chargé comme une chârte, j’me tords de rire !`,
                    `AHAHA ! J’suis dans la panade mais hilare !`,
                    `Hihihi ! Oh ben tu vas m’rouler dessus… j’ris déjà !`,
                    `Ohoho ! T’es si bien loti que ça m’met en r’goulade !`,
                    `AHAHA ! Même sans atouts, j’garde le rire !`,
                    `Héhéhé ! J’suis perdue mais gaie !`,
                    `HOHO ! Oh la belle main que t’as ! Ça m’fait braire de rire !`,
                    `AHAHA ! J’suis foutue, mais qu’est-ce que j’rigole !`
                ],

                OToutAtout: [ // Radegonde a plein d’atouts — bonne nouvelle
                    `AHAHA ! Oh ben là, j’peux rire comme une biauce ! J’suis servie !`,
                    `Héhéhé ! Ah la belle main, j’me marre rien qu’à la regarder !`,
                    `HOHOHO ! J’ai de quoi faire danser les grelots !`,
                    `AHAHA ! Avec tout ça, j’ris comme une roôtie dans l’vin chaud !`,
                    `Hihihi ! Mes atouts m’font rigoler d’bon cœur !`,
                    `Ohoho ! Ça s’voit que la chance m’chatouille !`,
                    `AHAHA ! J’peux faire la fière !`,
                    `Héhéhé ! Ça, c’est du jeu qui met la musette en joie !`,
                    `HOHO ! J’me sens pleine comme une bourrone de grain !`,
                    `AHAHA ! Tous ces atouts ! Han ben j’peux rire jusqu’à demain !`
                ]
            },

            peur:            {
                JAForteV: [
                    `Han bé… ton ${FlastDecl()}, il m’fait froid dans l’dos, j’te l’dis… j’sens qu’ça peut r’virer d’un coup…`,
                    `Oh la la… tu m’fais peur avec ça… j’ai beau mener, j’me sens point si solide…`,
                    `Nom d’un brandon… j’ai l’cœur qui palpite, ton ${FlastDecl()} m’ôte la chaleur des mains…`,
                    `Han bé j’me r’crispe… tu t’approches trop vite à mon goût…`,
                    `Ah ça non… j’aime point quand tu balances des annonces comme ça, ça m’fait trembler sous la coiffe…`
                ],

                JAForteD: [
                    `Han la la… tu m’passes devant d’une force ! J’en ai les doigts tout glacés…`,
                    `Oh bé non… ton ${FlastDecl()} m’a secoué jusqu’au mitan, j’sais plus où j’en suis…`,
                    `Nom d’un plotte… j’ai ben peur que t’aies pris l’dessus pour de bon…`,
                    `Han bé j’sens la dégringolade… ton coup m’a coupé l’souffle…`,
                    `Oh la peur que tu m’as fichue avec ça… j’crois ben qu’je chancelle…`
                ],

                OAForteV: [
                    `Ho… j’ai ben joué mais j’peux pas m’empêcher d’avoir l’trac… et si ça s’ retournait ?`,
                    `Han bé… même devant, j’ai l’ventre qui grouille… ça m’fait peur d’être là-haut…`,
                    `Oh la la… mon ${FlastDecl()} est fort, mais j’ai pas l’cœur tranquille pour autant…`,
                    `Hinh… j’ose à peine r’garder la suite… j’ai trop peur d’m’écrouler…`,
                    `Nom d’un forchat… j’suis devant mais j’me sens fragile comme une biauce feuille…`
                ],

                OAForteD: [
                    `Han bé non… même avec mon ${FlastDecl()}, j’ai l’impression que j’vais pas m’rattraper… ça m’angoisse…`,
                    `Oh la la… j’suis encore derrière, et j’te cache pas qu’ça m’ fait trembler…`,
                    `Nom d’un barriau… j’ai peur que ça suffise point du tout…`,
                    `Ah bé… j’avance, mais pas assez… et j’ai l’trac rien qu’en y pensant…`,
                    `Han bé j’suis pas rassurée… j’ai beau annoncer, ça m’donne point l’impression de survivre…`
                ],

                JAFaibleV: [
                    `Han bé… ton p’tit ${FlastDecl()}, même riquiqui, il m’fait douter… j’ai peur qu’tu grimpes encore…`,
                    `Oh la la… j’suis devant, mais j’m’ sens suivie de trop près…`,
                    `Nom d’un rouache… ça m’fait frissonner rien qu’d’te voir t’approcher doucement…`,
                    `Han bé… chaque p’tit point que tu fais m’attaque les nerfs…`,
                    `Oh j’aime pas ça… t’montes trop gentiment, ça m’fait peur…`
                ],

                JAFaibleD: [
                    `Han bé non… même une p’tite annonce comme ton ${FlastDecl()} suffit à m’faire trembler…`,
                    `Oh la la… tu m’passes devant et j’ai bien peur que ça dure…`,
                    `Nom d’un bajot… j’ai le cœur qui tape trop fort…`,
                    `Han bé… j’te sens filer devant moi et ça m’effraie tout plein…`,
                    `Oh… j’suis pas tranquille du tout, pas du tout…`
                ],

                OAFaibleV: [
                    `Han bé j’suis devant, mais juste… et ça m’fait peur comme pas permis…`,
                    `Oh la la… mon ${FlastDecl()} est p’tit, et j’sens l’vent tourner…`,
                    `Hinh… j’ai l’impression que j’vais glisser d’un coup…`,
                    `Nom d’un flambe… même en tête j’ai les mains qui r’tiennent pas…`,
                    `Ah bé… cette avance est trop mince, j’en ai la trouille…`
                ],

                OAFaibleD: [
                    `Han bé… j’suis derrière et mon p’tit ${FlastDecl()} m’rassure point du tout…`,
                    `Oh la la… plus ça va, plus j’ai la pétoche…`,
                    `Nom d’un borgnon… j’ai peur que la route soit trop longue pour r’venir…`,
                    `Ah bé… j’grignote rien du tout, et ça m’fait trembler…`,
                    `Hinh… j’suis pas sereine pour deux sous… j’ai l’trouillomètre à zéro…`
                ],
                volAtout: [ // Le joueur prend le 7 d'atout à Radegonde.
                    `Oh sainte musette… tu m’as fauché l’atout ! J’me sens toute molle comme une bourolle trempée…`,
                    `Han la braise, mais qu’est-ce que j’vais devenir sans mon atout ? J’ai la trouille jusque dans la gâsaille…`,
                    `Oh la la, ça me donne des sueurs… on touche pas à un ${returnedTrumpCard.rang} comme ça sans réveiller la guigne…`,
                    `Sainte bourrolle, tu m’as arraché l’atout ! J’ai l’ventre tout noué comme une vigoune sèche…`,
                    `Hiiiii… tu m’as pris mon ${returnedTrumpCard.rang}, j’ose même plus regarder la suite !`
                ],

                priseAtout: [ // Radegonde prend le 7 d'atout.
                    `Han ben… même si j’l’ai pris, j’ai la trouille qu’il m’attire des malheurs, cet atout ${returnedTrumpCard.rang}…`,
                    `Oh la la… j’suis contente de l’avoir, mais j’ai peur d’pas savoir m’en servir comme y faut…`,
                    `Sainte fousse, un atout comme ça, ça donne la main… et les sueurs froides aussi !`,
                    `Han ben j’me sens pas tranquille… j’l’ai dans la main mais j’ai la peur dans la panse…`,
                    `Oh j’me méfie… les atouts comme ça, ça vous retournent une partie aussi vite qu’une chârte dans un fossé.`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Radegonde.
                    `Oh non… mon ${FcardPlayedC()} ! Han ben j’ai la peur qui m’monte jusqu’aux oreillons…`,
                    `Sainte brande… tu m’as chipé mon ${FcardPlayedC()}, j’me sens plus tenir debout…`,
                    `Oh la la, ça m’fait froid dans l’dos… perdre un ${FcardPlayedC()}, c’est jamais bon présage…`,
                    `Han ben j’ai la trouille, moi… on dirait qu’la guigne me court après !`,
                    `Sainte bourolle, un ${FcardPlayedC()} envolé… j’aime pas ça du tout…`
                ],

                prise10As: [ // Radegonde prend un 10 ou un As au joueur.
                    `Oh la la… j’ai beau l’avoir pris, ce ${FcardPlayedP()}, j’ai peur que t’me le fasses payer cher après…`,
                    `Han ben oui, c’est un beau coup, mais j’ai la pétoche que ça t’mette en rogne…`,
                    `Sainte chieuve… j’ai ramassé ton ${FcardPlayedP()}, mais j’sens déjà l’orage…`,
                    `Oh la braise, j’ai l’impression d’avoir réveillé quelque chose… ça m’fait peur…`,
                    `Han ben j’me cache derrière la maie, moi… un ${FcardPlayedP()} pris comme ça, ça attire les soucis !`
                ],

                JEcartImportant: [  // Le joueur mène largement — mauvaise nouvelle pour Radegonde.
                    `Oh la la… tu m’laisses derrière comme une vieille bourrolle, j’ai la panique au mitan…`,
                    `Han ben j’ai la frousse… j’te vois filer grand train et moi j’reste dans la boue…`,
                    `Oh j’sens la défaite qui s’ramène comme un mauvais vent d’champs…`,
                    `Sainte musette, j’sais même plus comment t’rattraper… ça m’fait peur de bon…`,
                    `Han ben j’me sens si petite qu’une pouére caillat… j’ai la trouille, oui !`
                ],

                OEcartImportant: [ // Radegonde mène largement — bonne nouvelle mais elle est peureuse de nature.
                    `Han ben… j’ai beau être devant, j’ai peur que ça s’retourne comme un brandon mal éteint…`,
                    `Oh la la, j’ai l’avance, oui… mais j’me méfie, la guigne rôde toujours…`,
                    `Sainte fousse, c’est trop beau pour durer… j’ose pas y croire…`,
                    `Han ben j’me sens pas rassurée, même si j’suis loin devant…`,
                    `Oh la braise… chaque fois qu’j’avance comme ça, y’a un mauvais vent qui m’fait peur…`
                ],

                EcartFaible: [ // Partie serrée.
                    `Oh la la… on est collés, ça m’donne la tremblotte, moi…`,
                    `Han ben j’ai peur que tout pète d’un coup comme une bourronne trop sèche…`,
                    `Sainte vigoune, c’est si serré qu’j’ose pas respirer…`,
                    `Oh j’ai la boule au ventre… ça peut glisser pour moi à tout moment…`,
                    `Han ben c’est trop tendu… j’en ai les doigts qui frémissent sur la carte.`
                ],

                JToutAtout: [ // Le joueur a plein d'atouts — très mauvaise nouvelle pour Radegonde.
                    `Oh la braise… t’as tous les atouts ?! Sainte bourrolle, j’suis perdue !`,
                    `Han ben j’ai la peur qui m’pique la nuque… comment j’vais m’en sortir ?`,
                    `Oh la la, j’suis foutue comme une chèvre dans une fosse…`,
                    `Sainte bassie, t’es armé comme un roi, j’ai la panique qui grimpe !`,
                    `Han ben j’en tremble… tu vas m’balayer comme une bouchure en plein vent.`
                ],

                OToutAtout: [ // Radegonde a plein d'atouts — bonne nouvelle, mais elle reste peureuse.
                    `Han ben… j’ai tous ces atouts, oui… mais ça m’fait peur d’pas savoir les jouer comme y faut…`,
                    `Oh la la, j’ai de quoi gagner, mais j’ai la frousse de tout gâcher…`,
                    `Sainte bourolle, une main pareille m’effraie autant qu’elle m’sert…`,
                    `Han ben j’ai peur de me tromper, même avec toute cette biauce d’atouts…`,
                    `Oh j’sais pas… ça m’fait presque plus peur qu’d’être derrière.`
                ]
            },

            surprise:        {
               JAForteV: [
                    `Han ben d’ça ! Ton ${FlastDecl()} m’a sauté à la figure comme un forchat, j’ m’y attendais point !`,
                    `Oh la bourolle ! J’aurais jamais cru que tu sortirais un truc pareil !`,
                    `Nom d’un barriau ! Ça, c’est d’la surprise bien envoyée !`,
                    `Han la la ! Tu m’as r’pris de court, j’te le cache pas !`,
                    `Oh bé alors ! J’en reste la bouche grande ouverte d’stupeur !`
                ],

                JAForteD: [
                    `Han bé purée ! Avec ton ${FlastDecl()}, t’as retourné la table d’un coup sec !`,
                    `Oh la vache ! J’aurais pas cru qu’ça t’fasse passer devant si vite !`,
                    `Nom d’un plotte ! Là tu m’as scié les jambes !`,
                    `Han mais qu’est-ce que tu m’as fait là ? J’en suis toute ébaubie !`,
                    `Oh bé alors ! Voilà qu’t’es devant d’un coup, j’ m’y attendais point !`
                ],

                OAForteV: [
                    `Han bé… même moi j’me surprends avec un ${FlastDecl()} pareil !`,
                    `Oh la la ! J’croyais pas que ça frapperait si fort !`,
                    `Nom d’un flambe ! J’me suis épatée toute seule !`,
                    `Han ben ! Voilà une annonce qui m’a prise d’court moi-même !`,
                    `Oh bé j’en reviens point ! C’est moi qui l’ai jouée, et pourtant j’suis surprise !`
                ],

                OAForteD: [
                    `Han bé… même avec ce ${FlastDecl()}, j’pensais pas rester derrière comme ça !`,
                    `Oh la bonne mère ! Ça m’surprend qu’ça suffise pas pour r’monter !`,
                    `Nom d’un gouaillon ! J’croyais ben que ça m’ferait avancer davantage !`,
                    `Han mais comment c’possible qu’j’sois encore en queue avec un coup pareil ?`,
                    `Oh bé alors ! Ça m’a laissée toute chose c’te histoire !`
                ],

                JAFaibleV: [
                    `Han bé ! Un p’tit ${FlastDecl()} comme ça, j’ m’y attendais point du tout !`,
                    `Oh la la, tu m’as surpris avec ton riquiqui coup !`,
                    `Nom d’un paillon ! Ça sort de nulle part !`,
                    `Han mais où t’as pêché ça encore ?`,
                    `Oh bé, ça par exemple ! J’en reviens point !`
                ],

                JAFaibleD: [
                    `Han bé non ! Même un p’tit ${FlastDecl()} suffit à t’faire passer devant ?!`,
                    `Oh la vache ! J’pensais pas que ça changerait tant la donne !`,
                    `Nom d’un raouche ! Là tu m’as bluffée sec !`,
                    `Han la la, quelle surprise tu m’as faite !`,
                    `Oh bé, j’en suis toute retournée de c’te p’tite annonce-là !`
                ],

                OAFaibleV: [
                    `Han bé… même moi j’savais pas qu’ça surprendrait autant !`,
                    `Oh la brande ! Mon p’tit ${FlastDecl()} a plus tremblé que j’croyais !`,
                    `Nom d’un boiron ! Ça m’a étonnée d’voir qu’ça m’maintient devant !`,
                    `Han ben ça ! J’m’attendais point à un tel effet !`,
                    `Oh bé, j’suis la première surprise d’être encore devant !`
                ],

                OAFaibleD: [
                    `Han bé… j’pensais qu’mon ${FlastDecl()} m’ferait grimper un brin, mais que nenni !`,
                    `Oh la la ! C’est ben surprenant d’rester derrière malgré ça !`,
                    `Nom d’un plon ! Quelle drôle de r’sultate !`,
                    `Han mais comment ça, j’bouge point d’un chouilla ?!`,
                    `Oh bé là, je suis médusée d’voir que ça suffit pas !`
                ],

                volAtout: [ // Le joueur prend le 7 d'atout à Radegonde.
                    `Han ben d’dieu ! Tu m’as chipé le ${returnedTrumpCard.rang} ?! J’suis toute retournée comme une bourolle !`,
                    `Oh la braise, j’m’y attendais pas du tout !`,
                    `Sainte bourrolle ! Mon atout parti chez toi… j’en reste toute ébaubie !`,
                    `Han la la, j’croyais l’avoir bien gardé, moi… quelle surprise !`,
                    `Oh j’en perds la langue, t’l’as pris si vite que j’ai rien vu passer !`
                ],

                priseAtout: [ // Radegonde prend le 7 d'atout.
                    `Oh ben alors ! C’est pour moi, ça ? le ${returnedTrumpCard.rang} ? Han j’en reviens pas !`,
                    `Sainte musette ! Je l’ai attrapé ?! J’croyais que ça filerait chez toi !`,
                    `Oh la la, j’suis toute épatée d’l’avoir dans la main !`,
                    `Han ben ça alors, j’avais pas parié sur moi pour ce coup-là !`,
                    `Oh, quelle surprise douce comme une roûtie chaude !`
                ],

                vol10As: [ // Le joueur prend un 10 / As à Radegonde.
                    `Han ben non d’un barriau ! Tu m’prends mon ${FcardPlayedC()} ?! Oh j’en reste bouche bée !`,
                    `Oh la la… j’pensais l’avoir bien gardé celui-là !`,
                    `Sainte fousse ! Ça m’fait un choc jusque dans les oreillons !`,
                    `Han ben j’croyais pas qu’t’avais un coup pareil sous la biaude !`,
                    `Oh par exemple ! T’l’as chipé avant que j’aie le temps d’dire beugnon !`
                ],

                prise10As: [ // Radegonde prend un 10 / As au joueur.
                    `Oh ben j’te jure… c’est moi qu’l’ai pris ton ${FcardPlayedP()} ?! J’m’y attendais pas du tout !`,
                    `Sainte chieuve ! Ça m’tombe dans la main sans crier gare !`,
                    `Han la la, j’suis toute étonnée d’un coup si propre !`,
                    `Oh d’dieu ! J’ai attrapé ça sans même m’en douter !`,
                    `Ah ben j’suis surprise comme une poule qu’on réveille trop tôt !`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben j’savais pas qu’tu filerais si loin ! Ça m’laisse toute écarquillée !`,
                    `Oh la braise, quelle avance ! Je m’y attendais pas du tout !`,
                    `Sainte vigoune ! Tu m’laisses sur place, j’en reviens pas !`,
                    `Oh la la… c’est une vraie bourrasque qui m’tombe dessus !`,
                    `Han ben j’suis plus surprise qu’une borgnonne sous l’orage !`
                ],

                OEcartImportant: [ // Radegonde mène largement.
                    `Han la la ! C’est moi qui suis si loin devant ?! Oh j’en suis toute esbaubie !`,
                    `Sainte bourolle, j’pensais pas avoir pris tant d’avance !`,
                    `Oh ben ça alors, je m’doutais de rien !`,
                    `Han ben j’suis surprise comme une poule qui voit un bigarriau !`,
                    `Oh la bonne nouvelle ! Jamais j’aurais cru mener comme ça !`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben dis donc… si serré que ça ?! J’aurais jamais cru !`,
                    `Oh la la, j’suis toute étonnée d’te voir si collé !`,
                    `Sainte fousse ! On dirait deux brins d’osier, j’en reviens pas !`,
                    `Han ben ça alors, aucune avance ?! Quelle surprise !`,
                    `Oh d’dieu, j’croyais avoir décroché un peu !`
                ],

                JToutAtout: [ // Le joueur a plein d’atouts.
                    `Han ben d’dieu… t’as tout l’atout pour toi ?! J’suis toute retournée !`,
                    `Oh la la, j’en tombe de ma chaise !`,
                    `Sainte brande ! J’pensais en avoir au moins un…`,
                    `Han ben j’suis plus surprise qu’une chieuve qui perd son pied !`,
                    `Oh par exemple, quelle affaire ! J’croyais pas ça possible !`
                ],

                OToutAtout: [ // Radegonde a plein d’atouts.
                    `Han ben alors ! C’est moi qu’ai tout ça ?! Oh j’en reste bouche bée !`,
                    `Sainte musette, j’pensais pas avoir une main si riche !`,
                    `Oh la la ! C’est une vraie bourolle pleine d’atouts !`,
                    `Han ben j’suis plus étonnée qu’une poule devant une fendoue !`,
                    `Oh d’dieu, quelle surprise flambante !`
                ]
            },

            colere:          {
                JAForteV: [
                    `Han bé non mais tu vas t’calmer avec ton ${FlastDecl()} ?! Tu m’fous la coiffe en vrac là !`,
                    `Nom d’un forchat ! Tu viens t’me chercher jusque dans les sabots, hein ?!`,
                    `Han la la, tu m’énerves à m’courir après comme ça !`,
                    `Oh bé ça commence à m’taper sur le chieuve tes annonces là !`,
                    `Nom d’un brandon ! Ton ${FlastDecl()} m’fait bouillir la marmite !`
                ],

                JAForteD: [
                    `Han bé c’est l’monde à l’envers ! Avec ton ${FlastDecl()}, tu m’passes devant, et j’suis rouge comme un bout d’bouse séche !`,
                    `Nom d’un paillon ! J’vais finir par ruer si tu continues à m’faire ça !`,
                    `Ah bé tiens ! J’me fais damer comme une pauv’ bête, ça m’met hors de moi !`,
                    `Han mais c’est pas possible d’me secouer comme ça !`,
                    `Nom d’un raouche ! Tu m’fais grincer des dents là !`
                ],

                OAForteV: [
                    `Han bé oui, j’suis devant, mais j’suis encore chaude comme une braise !`,
                    `Nom d’un barriau ! Même quand j’mène, j’suis en pétard d’avoir dû sortir un ${FlastDecl()} pareil !`,
                    `Oh bé, ça m’a mise en feu d’jouer si fort !`,
                    `Han que j’suis remontée, même si j’suis devant !`,
                    `Nom d’un biarrot ! Mon ${FlastDecl()} m’a chauffé l’sang, ça !`
                ],

                OAForteD: [
                    `Han bé non ! Même avec mon ${FlastDecl()} j’suis encore derrière, ça m’exaspère !`,
                    `Nom d’une bourolle ! J’vais m’arracher la biaude avec ces coups d’tord là !`,
                    `Ah bé ça m’fait enrager d’pas r’monter !`,
                    `Han la la, j’ai l’feu dans la gorge d’voir qu’ça suffit pas !`,
                    `Oh bé là, tu me fais grincer comme une vieille roue de chârte !`
                ],

                JAFaibleV: [
                    `Han bé arrête donc tes p’tits ${FlastDecl()} qui m’font perdre la patience !`,
                    `Nom d’un poulangis ! Même riquiqui, tu m’énerves à toujours vouloir m’gratter !`,
                    `Oh bé, c’est p’têt p’tit mais ça m’agace comme une piqûre de moustique !`,
                    `Han la la, j’peux pas jouer tranquille, tu m’taquines !`,
                    `Nom d’un berlot ! Tu vas m’faire sauter la bassie avec tes p’tits coups !`
                ],

                JAFaibleD: [
                    `Han bé non ! Un p’tit ${FlastDecl()} et voilà qu’tu m’passes devant, ça m’met en charibaude !`,
                    `Nom d’un plotte ! Même une misère suffit à m’faire enrager ?!`,
                    `Oh bé que ça m’énerve de t’voir grimper pour si peu !`,
                    `Han, j’ai les nerfs qui craquent comme un échalier !`,
                    `Nom d’un ériot ! Ça m’griffe l’humeur ça !`
                ],

                OAFaibleV: [
                    `Han bé oui j’mène, mais j’suis encore en rogne d’avoir dû jouer un ${FlastDecl()} si faiblard !`,
                    `Nom d’un droguet ! Ça m’énerve d’pas avoir mieux en main !`,
                    `Oh bé ça m’remonte l’humeur comme un feu d’la Saint-Jean !`,
                    `Han la la, j’suis en tête mais j’bouillonne quand même !`,
                    `Nom d’un gouaillon ! Ce ${FlastDecl()} m’a irritée à point !`
                ],

                OAFaibleD: [
                    `Han bé non mais c’est pas croyable ! Même avec mon ${FlastDecl()} j’remonte pas d’un brin !`,
                    `Nom d’un râgeux ! Ça m’met en pièces c’te affaire-là !`,
                    `Oh bé je vais finir par jeter la coiffe, tellement ça m’énerve !`,
                    `Han j’suis d’une colère noire, même mon annonce veut rien savoir !`,
                    `Nom d’un sillon ! C’est à s’arracher les tresses, j’te jure !`
                ],

                volAtout: [ // Le joueur prend l’atout à Radegonde.
                    `Han ben nom d’un barriau ! Mon ${returnedTrumpCard.rang} ! T’as le toupet d’me l’faucher, toi !`,
                    `Oh la braise ! Ça m’met la bourolle en travers d’la gorge, ça !`,
                    `Sainte bourrolle, j’vais roussir comme un brandon qu’tu m’piques ça !`,
                    `Han ben j’suis colère, là ! On touche pas à mon ${returnedTrumpCard.rang} sans m’faire gueurliner !`,
                    `Oh la la, j’ai la charibaude qui m’monte au front ! Tu vas m’le payer tôt ou tard !`
                ],

                priseAtout: [ // Radegonde prend l’atout.
                    `Han ben tiens, pour une fois que c’est moi ! Et qu’ça t’plaise ou non !`,
                    `Oh la braise, j’suis contente, mais j’bouillonne encore d’voir comme t’as tourné autour !`,
                    `Sainte musette, j’te l’ai arraché ! Et j’te jure que ça m’calme pas !`,
                    `Han ben oui, l’atout ${returnedTrumpCard.rang} est pour moi ! Et j’suis prête à mordre si on m’l’prend encore !`,
                    `Oh d’dieu, j’étais à deux doigts d’exploser avant d’mettre la main dessus !`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Radegonde.
                    `Han ben nom d’un boureau ! Mon ${FcardPlayedC()} ! J’en ai les oreilles qui chauffent !`,
                    `Oh la braise, j’suis furieuse ! J’avais besoin d’celui-là !`,
                    `Sainte fousse, ça m’met la rage jusque dans le mitan !`,
                    `Han ben tu m’piques mon ${FcardPlayedC()} et t’trouves ça drôle ?! Moi non !`,
                    `Oh d’diou, j’suis rouge comme la brande en feu !`
                ],

                prise10As: [ // Radegonde prend un 10 ou un As au joueur.
                    `Han ben, fallait pas m’chercher ! Ton ${FcardPlayedP()} est chez moi maintenant !`,
                    `Oh la braise, ça m’calme un brin d’t’avoir ramassé ça !`,
                    `Sainte bourrolle, ça m’enlève un poids d’la panse d’te l’avoir pris !`,
                    `Han ben, fallait jouer mieux ! J’suis encore toute remontée !`,
                    `Oh j’suis colère mais ça, ça m’fait du bien !`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben d’dieu, tu m’roules d’ssus comme une chârte folle et ça m’met en rogne !`,
                    `Oh la braise, j’suis furieuse d’te voir filer comme ça !`,
                    `Sainte vigoune, j’vais finir par taper dans la table !`,
                    `Han ben tu m’fais grimper au plafond, à m’laisser derrière comme ça !`,
                    `Oh d’diou, j’bouillonne d’colère, j’te préviens !`
                ],

                OEcartImportant: [ // Radegonde mène largement.
                    `Han ben oui, j’mène ! Et alors ? J’suis encore en colère d’ta manière d’jouer !`,
                    `Oh la braise, même en tête j’ai l’feu au ventre !`,
                    `Sainte bourrolle, j’suis si énervée que même gagner m’calme pas !`,
                    `Han ben j’suis devant, mais j’te dis qu’j’suis toujours prête à grogner !`,
                    `Oh d’diou, j’suis en rogne, même en t’laissant loin derrière !`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben, t’es collé à moi comme une chieuve et ça m’énarve !`,
                    `Oh la braise, j’aime pas ce jeu serré, ça m’met en charibaude !`,
                    `Sainte fousse, tu m’suis d’trop près, j’vais exploser !`,
                    `Han ben j’suis en colère rien qu’d’te voir tenir encore debout !`,
                    `Oh d’diou, j’aime pas quand ça joue à la moustache, ça m’fait bouillir !`
                ],

                JToutAtout: [ // Le joueur a plein d’atouts — mauvais pour Radegonde.
                    `HAN BEN NON MAIS ! T’as tous les atouts ?! Ça m’met la rage dans la panse !`,
                    `Oh la braise ! Comment j’suis censée jouer avec rien, moi ?!`,
                    `Sainte brande, j’bouillonne d’colère, c’est pas croyable !`,
                    `Han ben tu m’énerves, j’te le dis comme je le pense !`,
                    `Oh d’diou, ça m’met en rogne jusqu’aux oreillons !`
                ],

                OToutAtout: [ // Radegonde a plein d’atouts — bonne nouvelle mais elle peut être colérique par nature.
                    `Han ben oui, j’ai tous ces atouts ! Et ça m’va très bien d’t’énerver avec !`,
                    `Oh la braise ! Cette fois j’vais t’écraser, et j’suis presque contente d’être en rogne !`,
                    `Sainte chieuve, j’garde mes atouts serrés, touche pas, ça m’mettrait encore plus en colère !`,
                    `Han ben j’suis bouillante comme une flambée d’four, et prête à frapper !`,
                    `Oh d’diou, avec ces atouts j’suis une vraie tempête !`
                ]
            },

        tristesse: {
            JAForteV: [
                    `Han bé… ton ${FlastDecl()}, il m’a coupé la chaleur du cœur… j’sens bien qu’ça m’fait du mal…`,
                    `Oh la la… j’me sens ben rapetissée d’voir ça… même si j’suis encore devant…`,
                    `Nom d’un floque… ça m’pèse au fond d’la poitrine, ton annonce-là…`,
                    `Han bé… ça m’a fait tomber l’sourire, j’te le cache point…`,
                    `Oh bé, ça m’fait tout drôle… comme si j’avais perdu un p’tit morceau d’courage…`
                ],

                JAForteD: [
                    `Han la la… t’es passé devant avec ton ${FlastDecl()}, et j’ai l’cœur tout mouillé…`,
                    `Oh bé… j’me sens ben petite d’vant ça… ça m’fait r’garder mes pieds…`,
                    `Nom d’un rouache… j’peine à relever la tête après un coup pareil…`,
                    `Han bé, j’peux pas nier que ça m’attriste un brin…`,
                    `Oh la pauvre moi… j’m’en remets pas, j’suis toute chose…`
                ],

                OAForteV: [
                    `Han bé… même en tête, j’ai l’âme toute molle… j’sais pas pourquoi…`,
                    `Oh la la… mon ${FlastDecl()} chante ben, mais j’arrive pas à m’mettre la joie dans l’cœur…`,
                    `Nom d’un paillon… j’me sens pas fière comme j’devrais… juste un peu triste…`,
                    `Han… j’devrais sourire, mais y a comme un poids dans ma biaude…`,
                    `Oh bé, même en gagnant, j’ai le cœur qui r’traîne…`
                ],

                OAForteD: [
                    `Han bé… j’suis encore derrière malgré mon ${FlastDecl()}… ça m’fend l’âme…`,
                    `Oh la la… j’croyais pouvoir remonter, mais j’vois ben qu’non… et ça m’attriste…`,
                    `Nom d’un berlot… j’ai perdu tout mon allant là…`,
                    `Han bé, chaque fois qu’j’essaie, j’retombe… ça m’fait du chagrin…`,
                    `Oh bé… mon pauvre cœur s’ratatine…`
                ],

                JAFaibleV: [
                    `Han bé… même un p’tit ${FlastDecl()} me serre le cœur… j’sais pas pourquoi…`,
                    `Oh la la… j’me sens toute molle d’dedans… comme un linge pas sec…`,
                    `Nom d’un raouche… j’sens qu’ça m’grignote le moral…`,
                    `Han… j’ai perdu l’élan, même si j’suis devant…`,
                    `Oh bé… c’est léger, mais ça m’a mis l’âme en berne…`
                ],

                JAFaibleD: [
                    `Han bé… même avec ton p’tit ${FlastDecl()}, j’me sens tomber d’un étage…`,
                    `Oh la la… ça m’fait un vide dans la poitrine…`,
                    `Nom d’un plotte… j’suis toute affaissée maintenant…`,
                    `Han… j’sais ben qu’c’est pas grand-chose, mais ça m’donne envie d’soupirer…`,
                    `Oh bé… t’voilà devant, et moi j’me sens toute fanée…`
                ],

                OAFaibleV: [
                    `Han bé… j’suis en tête, mais j’ai pas l’cœur à m’en réjouir…`,
                    `Oh la la… même mon ${FlastDecl()} m’réchauffe pas… j’ai comme un chagrin…`,
                    `Nom d’un biarrot… j’ai l’âme lourde sans savoir pourquoi…`,
                    `Han… j’avance, mais mon cœur, lui, traîne la patte…`,
                    `Oh bé… j’suis pas gaie du tout, même si j’mène…`
                ],

                OAFaibleD: [
                    `Han bé… j’suis derrière, et mon ${FlastDecl()} m’fait pas mieux sentir…`,
                    `Oh la la… j’croyais m’rattraper, mais en fait j’me sens toute raplapla…`,
                    `Nom d’un bourdon… j’ai l’âme qui flanche…`,
                    `Han… rien à faire, j’suis triste comme une biauce pierre froide…`,
                    `Oh bé… j’peux pas cacher que ça m’met un coup d’gris dans la tête…`
                ],

                volAtout: [ // Le joueur prend l’atout à Radegonde.
                    `Han ben… mon pauvre ${returnedTrumpCard.rang}… j’l’aimais bien, moi…`,
                    `Oh la la… ça m’fait la panse toute lourde…`,
                    `Sainte bourrolle… j’suis triste comme une bourolle vide…`,
                    `Han ben t’l’as pris si vite… j’en ai l’cœur tout mou, moi…`,
                    `Oh… mon ${returnedTrumpCard.rang} envolé… ça m’fait un creux dans la maie…`
                ],

                priseAtout: [ // Radegonde prend l’atout.
                    `Han ben j’l’ai, oui… mais j’sais pas pourquoi, ça m’rend pas gaie…`,
                    `Oh la la… même un bel atout m’réchauffe guère l’âme aujourd’hui…`,
                    `Sainte fousse… j’devrais être contente… mais j’ai l’cœur en berne…`,
                    `Han ben j’suis trop chagrine pour fêter ça…`,
                    `Oh… j’l’ai pris, mais le plaisir m’manque…`
                ],

                vol10As: [ // Le joueur prend un 10 ou As à Radegonde.
                    `Han ben… mon pauvre ${FcardPlayedC()}… parti comme ça… ça m’attriste…`,
                    `Oh la la… j’crois qu’ça m’ôte tout l’courage…`,
                    `Sainte vigoune… j’me sens toute ramollie d’tristesse…`,
                    `Han ben ça m’griffe l’âme un coup pareil…`,
                    `Oh… j’suis plus triste qu’une chieuve sous la pluie…`
                ],

                prise10As: [ // Radegonde prend un 10 ou As au joueur.
                    `Han ben j’l’ai pris… mais ça m’met pas d’baume au cœur, non…`,
                    `Oh… même le ${FcardPlayedP()} m’réchauffe guère aujourd’hui…`,
                    `Sainte bourrolle… j’suis trop triste pour m’réjouir d’ça…`,
                    `Han ben j’voudrais être contente, mais j’y arrive point…`,
                    `Oh la la… j’suis pleine de tristesse, même en gagnant un beau pli…`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben… j’suis loin derrière… j’ai l’âme toute froissée…`,
                    `Oh la la… j’me sens petite comme une pouére caillat…`,
                    `Sainte fousse… j’suis triste de te voir filer si loin…`,
                    `Han ben j’ai l’mitan tout serré, tu m’laisses pas de chance…`,
                    `Oh… ça m’fend le cœur d’être si reculée…`
                ],

                OEcartImportant: [ // Radegonde mène largement.
                    `Han ben… même en tête j’me sens toute lasse… j’sais pas…`,
                    `Oh… j’ai beau mener, j’ai pas la joie au bout d’la biaude…`,
                    `Sainte bourrolle… j’suis en haut mais la tristesse grimpe avec moi…`,
                    `Han ben j’suis pas d’humeur, même avec toutes ces avances…`,
                    `Oh la la… l’cœur a ses jours gris, même quand l’jeu est beau…`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben… si serré que j’sais plus où j’en suis… ça m’rend toute mélancolique…`,
                    `Oh… j’ai l’impression d’ramper sans jamais avancer…`,
                    `Sainte fousse… j’me sens toute triste dans c’te bataille d’mitan…`,
                    `Han ben ça me pèse, cette égalité sans lumière…`,
                    `Oh la la… j’ai la tête dans la brande, moi…`
                ],

                JToutAtout: [ // Le joueur a plein d’atouts — mauvais pour Radegonde.
                    `Han ben… t’as tout pour toi… j’suis triste comme une vigoune sans feuilles…`,
                    `Oh… ça m’met le cœur à l’envers…`,
                    `Sainte bourrolle… j’suis si mal servie que j’en aurais presque les larmes…`,
                    `Han ben j’me sens toute faible devant ta main…`,
                    `Oh la la… c’est d’ces moments qui donnent envie d’baisser la tête…`
                ],

                OToutAtout: [ // Radegonde a plein d’atouts — bonne nouvelle mais tristesse générale.
                    `Han ben oui… j’ai les atouts… mais j’suis si triste que j’les sens pas…`,
                    `Oh… ça m’fait rien du tout… même une belle main peut pas tout réparer…`,
                    `Sainte chieuve… j’ai l’jeu, mais pas le cœur pour…`,
                    `Han ben j’crois qu’la tristesse m’a attaché un nœud dans la panse…`,
                    `Oh la la… même l’atout m’fait pas sourire aujourd’hui…`
                ]
            },

            doute:           {
                JAForteV: [
                    `Han bé… ton ${FlastDecl()}, il m’fait douter sec… j’sais pas si j’vais pouvoir rester devant longtemps…`,
                    `Oh la la… j’m’interroge, j’te l’dis… est-ce qu’j’vais tenir la route après ça ?`,
                    `Nom d’un barriau… j’sens qu’ça pourrait ben tourner contre moi…`,
                    `Han bé… j’ai beau être devant, j’ai un doute qui m’griffe le ventre…`,
                    `Oh bé… c’t’annonce-là m’fait penser qu’j’suis p’têt pas si solide…`
                ],

                JAForteD: [
                    `Han bé… t’es passé devant et j’me demande si j’pourrai rattraper c’trou-là…`,
                    `Oh la la… ton ${FlastDecl()} m’fait douter de toutes mes cartes…`,
                    `Nom d’un floque… j’sais point si j’ai d’quoi remonter…`,
                    `Han… ça m’met un sacré doute dans la tête, j’te cache pas…`,
                    `Oh bé… j’me sens pas sûre du tout d’pouvoir revenir…`
                ],

                OAForteV: [
                    `Han bé… même avec mon ${FlastDecl()}, j’me demande si ça suffira longtemps…`,
                    `Oh la la… j’suis devant mais j’ai l’doute qui me grignote…`,
                    `Nom d’un boiron… est-ce que ça va tenir c’morceau-là ? J’sais pas…`,
                    `Han… j’suis pas certaine que le vent reste d’mon côté…`,
                    `Oh bé… j’suis en tête, mais j’sens qu’ça pourrait glisser d’un coup…`
                ],

                OAForteD: [
                    `Han bé… même mon ${FlastDecl()} m’rassure pas… j’sais point si j’rattraperai mon retard…`,
                    `Oh la la… j’ai l’doute logé dans la poitrine… est-ce qu’ça changera quelque chose ?`,
                    `Nom d’un rouache… j’suis ben pas sûre que ça me remette en selle…`,
                    `Han… j’me questionne dur… est-ce que j’ai encore d’l’espoir ?`,
                    `Oh bé… j’sens que j’patine, et j’sais pas si j’peux remonter…`
                ],

                JAFaibleV: [
                    `Han bé… ton p’tit ${FlastDecl()}, j’sais pas pourquoi, mais il m’met quand même un doute…`,
                    `Oh la la… ça m’fait réfléchir… est-ce que tu t’approches pas un peu trop ?`,
                    `Nom d’un paillon… j’suis pas certaine d’maintenir l’avance…`,
                    `Han… j’commence à hésiter, ça m’plaît pas trop…`,
                    `Oh bé… même riquiqui, ton annonce m’fait douter d’ma solidité…`
                ],

                JAFaibleD: [
                    `Han bé… j’me demande comment j’vais r’venir après ça, même si c’est p’tit…`,
                    `Oh la la… tu m’passes devant et j’sais plus trop où j’en suis…`,
                    `Nom d’un brandon… j’ai l’doute qui m’serre la gorge…`,
                    `Han… j’suis ben pas sûre d’avoir l’jeu pour te rattraper…`,
                    `Oh bé… j’hésite, j’sais point si la partie tournera en ma faveur…`
                ],

                OAFaibleV: [
                    `Han bé… j’suis devant, mais alors là, j’suis pas certaine d’y rester…`,
                    `Oh la la… mon ${FlastDecl()} est p’tit, j’sais pas si ça suffira…`,
                    `Nom d’un ériot… je doute d’ma force, là…`,
                    `Han… j’suis pas convaincue d’être bien assise en tête…`,
                    `Oh bé… j’sais pas si je tiens encore l’bon côté de la barque…`
                ],

                OAFaibleD: [
                    `Han bé… avec un p’tit ${FlastDecl()} comme ça, j’sais pas du tout si j’peux r’venir…`,
                    `Oh la la… j’hésite, j’vois pas bien comment j’vais m’sortir d’là…`,
                    `Nom d’un raouche… j’suis toute pleine de doutes…`,
                    `Han… j’sais point si j’ai la moindre chance d’remonter…`,
                    `Oh bé… plus j’regarde mes cartes, plus j’sais pas quoi penser…`
                ],

                volAtout: [ // Le joueur prend l’atout à Radegonde.
                    `Han ben… si tu m’prends l’atout, j’sais pas si j’vais pouvoir m’en r’mettre…`,
                    `Oh la la, sans c’te carte-là… j’doute fort d’pouvoir tenir longtemps…`,
                    `Sainte fousse… j’crois ben qu’c’est mal parti pour moi…`,
                    `Han ben j’ai peur qu’mon jeu soit trop faible maintenant…`,
                    `Oh… j’sais plus si j’ai d’quoi r’venir dans la bourrée…`
                ],

                priseAtout: [ // Radegonde prend l’atout.
                    `Han ben… même avec cet atout, j’sais pas trop si j’saurai l’jouer comme faut…`,
                    `Oh la la… j’ai l’impression qu’ça chang’ra pas grand-chose…`,
                    `Sainte bourrolle… j’me demande si j’en ferai bon usage…`,
                    `Han ben j’suis pas certaine que ça m’suffise…`,
                    `Oh… ça m’rassure qu’à moitié, ça…`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Radegonde.
                    `Han ben… si tu m’prends mon ${FcardPlayedC()}, comment veux-tu qu’j’y arrive encore…?`,
                    `Oh la la… j’sens qu’mon jeu s’effrite… j’doute de tout…`,
                    `Sainte vigoune… j’crois ben qu’ça va mal finir pour moi…`,
                    `Han ben j’me sens toute falote, j’sais pas si j’ai assez pour tenir…`,
                    `Oh… ça m’ôte la confiance, ça… vraiment…`
                ],

                prise10As: [ // Radegonde prend un 10 ou As au joueur.
                    `Han ben j’l’ai pris… mais j’sais pas si ça chang’ra l’courant pour moi…`,
                    `Oh la la… j’me demande si ça suffira à m’garder debout…`,
                    `Sainte chieuve… même en prenant ça, je doute encore…`,
                    `Han ben j’me sens pas bien sûre d’la suite…`,
                    `Oh… j’sais pas si ça m’aidera vraiment…`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben… avec toi si loin devant… j’doute fort d’pouvoir rattraper…`,
                    `Oh la la… j’ai beau regarder mes cartes, j’vois pas comment m’en sortir…`,
                    `Sainte bourrolle… j’crois ben que j’suis au bout du bout, là…`,
                    `Han ben j’sais pas si j’ai encore une chance…`,
                    `Oh… j’me sens trop légère pour t’suivre…`
                ],

                OEcartImportant: [ // Radegonde mène largement.
                    `Han ben… même en tête, j’peux pas m’empêcher d’douter… j’suis p’t’être pas si solide…`,
                    `Oh la la… j’me dis toujours qu’tout peut m’échapper d’un coup…`,
                    `Sainte fousse… j’ai peur que ça tienne pas…`,
                    `Han ben j’sais pas si j’peux garder ça longtemps…`,
                    `Oh… j’ai l’impression qu’ça peut s’renverser comme un brandon mouillé…`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben… quand c’est si serré, j’sais jamais quoi penser…`,
                    `Oh la la… j’doute de chaque carte que j’pose…`,
                    `Sainte vigoune… j’ai peur d’faire la fausse, là…`,
                    `Han ben j’suis pas sûre d’tenir face à toi…`,
                    `Oh… ça m’met dans un drôle d’étât, toute hésitante…`
                ],

                JToutAtout: [ // Le joueur a plein d’atouts.
                    `Han ben… si t’as tout ça… j’doute d’avoir la moindre chance…`,
                    `Oh la la… j’ai l’impression d’être nue comme une bourolle sans paille…`,
                    `Sainte bourrolle… j’crois ben qu’je vais m’écraser…`,
                    `Han ben j’sais plus quoi espérer, là…`,
                    `Oh… j’pense pas pouvoir lutter contre tant d’atouts…`
                ],

                OToutAtout: [ // Radegonde a plein d’atouts.
                    `Han ben… j’ai beau avoir c’te main, j’doute toujours d’être à la hauteur…`,
                    `Oh la la… j’ai peur d’les gâcher, moi…`,
                    `Sainte chieuve… même avec ça, j’me sens pas bien sûre…`,
                    `Han ben j’crois pas assez en moi pour être tranquille…`,
                    `Oh… j’ai l’impression que ça suffira pas…`
                ]
            },

            fierte:         {
                JAForteV: [
                    `Han bé tu peux ben t’la péter avec ton ${FlastDecl()}, mais moi j’suis encore perchée haut, toute fière !`,
                    `Oh la la, j’te laisse briller un brin, mais j’te r’garde d’là-haut, fière comme une poule sur sa pierre !`,
                    `Nom d’un forchat ! T’as claqué fort, mais c’est moi qu’a l’plus beau panache !`,
                    `Han bé j’suis pas démontée pour deux sous, moi, j’garde la tête droite et fière !`,
                    `Oh bé, j’suis la reine d’la chârte tant qu’j’suis devant, et j’en suis ben contente !`
                ],

                JAForteD: [
                    `Han bé, même si tu m’passes devant avec ton ${FlastDecl()}, j’peux pas m’empêcher d’garder ma fierté dans la biaude !`,
                    `Oh la la, tu m’fauchilles, mais j’garde la coiffe haute, moi !`,
                    `Nom d’un raouche ! T’as pris l’avantage, mais j’perds point mon panache !`,
                    `Han bé j’suis p’têt derrière, mais j’me tiens fière comme un têtiau d’orme !`,
                    `Oh bé, j’vais point baisser la tête pour si peu, va !`
                ],

                OAForteV: [
                    `Han bé voilà ! Avec c’beau ${FlastDecl()}, j’me sens fière comme une reine d’assemblée !`,
                    `Oh la la, qu’c’est doux d’être devant ! J’en ai la coiffe qui brille !`,
                    `Nom d’un bourolle ! C’est moi qu’a le plus beau jeu aujourd’hui !`,
                    `Han bé j’suis toute gonflée d’fierté, ça s’voit jusque dans mes oreillons !`,
                    `Oh bé j’suis en tête, et c’est ben mérité, tiens !`
                ],

                OAForteD: [
                    `Han bé même derrière, j’suis fière d’mon ${FlastDecl()}, j’te l’dis !`,
                    `Oh la la, j’perds p’têt, mais qu’est-ce qu’il est beau mon coup !`,
                    `Nom d’un plon ! J’garde ma fierté même si j’suis en queue d’poulain !`,
                    `Han bé j’me dégonfle pas, j’suis fière d’moi tout de même !`,
                    `Oh bé, l’annonce est si belle que j’garde la tête droite malgré tout !`
                ],

                JAFaibleV: [
                    `Han bé tu peux ben m’chatouiller avec ton ${FlastDecl()}, moi j’suis toujours fière d’ma place devant !`,
                    `Oh la la, j’te regarde d’mon perchoir, toute contente de moi !`,
                    `Nom d’un floque ! J’suis encore reine du jeu, et ça m’met la fierté en bandoulière !`,
                    `Han bé même ton p’tit coup m’égratigne point ma superbe !`,
                    `Oh bé, j’suis fière comme une poule à l’abri, tant qu’j’suis devant !`
                ],

                JAFaibleD: [
                    `Han bé… tu m’passes devant, mais j’garde ma fierté dans la besace, méfie-toi !`,
                    `Oh la la, j’suis pas si facile à dégonfler !`,
                    `Nom d’un brandon ! Ton p’tit ${FlastDecl()} m’ôte rien à ma superbe !`,
                    `Han bé j’me tiens encore droite comme un chieuve d’étable !`,
                    `Oh bé, j’suis fière d’mon jeu, même quand l’vent souffle contre moi !`
                ],

                OAFaibleV: [
                    `Han bé même avec un p’tit ${FlastDecl()}, j’suis fière de rester devant !`,
                    `Oh la la, j’ai p’têt pas rugi, mais j’suis toujours en tête et ça m’va ben !`,
                    `Nom d’un berlot ! Quelle fierté d’conserver la barre !`,
                    `Han bé j’suis pas d’ceux qui s’laissent rabaisser pour une p’tite annonce !`,
                    `Oh bé, j’garde la tête levée, fière comme tout !`
                ],

                OAFaibleD: [
                    `Han bé même derrière, j’peux être fière d’ma tenue au jeu !`,
                    `Oh la la, ça m’dégringole p’têt, mais j’perds pas l’allure !`,
                    `Nom d’un boiron ! Mon ${FlastDecl()} est p’tit, mais ma fierté est grande !`,
                    `Han bé j’ai pas dit mon dernier mot, j’te l’dis !`,
                    `Oh bé, j’me tiens encore mieux que si j’gagnais, tellement j’suis fière !`
                ],

                volAtout: [ // Le joueur prend l’atout à Radegonde.
                    `Han ben t’as beau m’prendre l’atout ${returnedTrumpCard.rang}, j’tiens encore d’bout comme une vraie gâsse du Berry !`,
                    `Oh la la, même sans mon atout, j’suis pas du genre à m’laisser marcher sur les oreillons !`,
                    `Sainte bourrolle, ça m’fera pas plier ! J’ai d’la ressource, moi !`,
                    `Han ben crois pas qu’ça m’fait peur, j’suis solide comme un arbre à pots !`,
                    `Oh, tu peux m’faucher c’que tu veux, j’garde la tête haute, moi !`
                ],

                priseAtout: [ // Radegonde prend l’atout.
                    `Han ben regarde-moi ça, l’atout ${returnedTrumpCard.rang} dans ma pogne, comme une vraie maîtresse du brézin !`,
                    `Oh la la, j’suis fière comme une bourolle neuve !`,
                    `Sainte chieuve, voilà un coup digne d’une biauce joueuse comme moi !`,
                    `Han ben, quand j’veux, j’veux, hein ! Et j’le prouve !`,
                    `Oh, ça c’est la marque d’la vraie gâsse sachant jouer !`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Radegonde.
                    `Han ben, même sans mon ${FcardPlayedC()}, j’garde ma dignité, moi !`,
                    `Oh la la, j’suis pas du genre à m’écraser, même quand on m’piétine !`,
                    `Sainte bourrolle, tu peux m’ôter des points, mais pas mon panache !`,
                    `Han ben perdre un ${FcardPlayedC()}, ça m’dresse encore plus fière !`,
                    `Oh, j’me tiens droite comme une vigoune, même face à ça !`
                ],

                prise10As: [ // Radegonde prend un 10 ou un As.
                    `Han ben voilà ! C’est comme ça qu’j’fais, moi ! Ton ${FcardPlayedP()}, hop, dans ma besace !`,
                    `Oh la la, j’suis fière comme une reine du boischaut !`,
                    `Sainte fousse, j’viens d’te montrer qui c’est la patronne !`,
                    `Han ben, ça c’est un coup propre, digne d’une vraie gâsse d’cheu nous !`,
                    `Oh, j’me r’sens pousser les oreillons tellement j’suis fière !`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben j’suis peut-être derrière, mais j’perds jamais ma fierté, moi !`,
                    `Oh la la, même à la traîne, j’garde le port d’une reine !`,
                    `Sainte bourrolle, j’suis une solide, moi, j’baisse pas la tête !`,
                    `Han ben tu peux filer loin, j’garde encore de l’allure !`,
                    `Oh, j’suis pas du genre à m’laisser rabougrir, même en perdant !`
                ],

                OEcartImportant: [ // Radegonde mène largement.
                    `Han ben regarde-moi ça ! J’mène comme une vraie grande du pays !`,
                    `Oh la la, j’suis fière comme un coq sur son jau !`,
                    `Sainte chieuve, j’suis taillée pour l’jeu, ça s’voit bien !`,
                    `Han ben, j’pourrais faire danser la gueurlottière tellement j’suis fière !`,
                    `Oh, c’est beau d’me voir filer comme ça !`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben même serré comme ça, j’garde la tête haute !`,
                    `Oh la la, j’suis fière d’tenir tête, moi !`,
                    `Sainte vigoune, y’en a pas beaucoup qui s’tiendraient aussi bien que moi !`,
                    `Han ben, quoi qu’il arrive, j’garde mon panache berrichon !`,
                    `Oh, serré ou pas, j’suis solide dans mes sabots !`
                ],

                JToutAtout: [ // Le joueur a tous les atouts.
                    `Han ben même si t’as tout, j’suis fière de m’tenir debout face à ça !`,
                    `Oh la la, c’est dans ces moments-là qu’on voit les vraies gâsses !`,
                    `Sainte bourrolle, j’suis encore là, pas prête à plier !`,
                    `Han ben j’veux bien perdre, mais jamais ma fierté !`,
                    `Oh, t’as beau être armé, j’garde mes couleurs hautes !`
                ],

                OToutAtout: [ // Radegonde a plein d’atouts.
                    `Han ben j’suis servie comme une reine du pays ! Regarde-moi ça !`,
                    `Oh la la, j’suis fière comme une biauce bien dressée !`,
                    `Sainte chieuve, j’en imposerais presque !`,
                    `Han ben j’ai la main qu’il faut et la fierté qui va avec !`,
                    `Oh, j’brille comme un brandon au dimanche brandounier !`
                ]
            }
        },
        Perrot: {
            joie:            {
                JAForteV: [
                    `Han bé t’as balancé un ${FlastDecl()} d’première bourre, dis donc ! Ça m’fait toute joie d’voir du biau jeu comme ça !`,
                    `Oh la la, que c’est plaisant ! Tu m’chatouilles la moustache avec un coup pareil !`,
                    `Nom d’un raouche, t’as de la poigne ! Ça m’met la joie jusque dans les sabots !`,
                    `Han bé, continue comme ça, j’aime ben quand ça joue franc et fort !`,
                    `Oh bé, j’en ris d’plaisir, ça m’rappelle les veillées au village !`,
                    `Han la la, ton ${FlastDecl()} m’éclaire la tête comme un feu d’jouanée !`,
                    `Oh bé alors ! C’est ben joli d’te voir taper si solide !`,
                    `Nom d’un boiron, que c’est bon d’voir du beau jeu comme t’en fais là !`,
                    `Han bé ça me r’met la chaleur au cœur ! Bravo l’dru !`,
                    `Oh bé j’pouvais pas rêver meilleur spectacle, tiens !`
                ],

                JAForteD: [
                    `Han bé nom d’un gouaillon ! T’es passé devant avec ton ${FlastDecl()}, mais ça m’remplit d’joie tout pareil !`,
                    `Oh la la, t’as fait péter la baraque ! J’peux qu’être content pour toi !`,
                    `Nom d’un paillon, que c’est beau d’te voir briller comme ça !`,
                    `Han bé, j’suis fier d’toi, on dirait un vrai gâs du Berry sur sa chârte !`,
                    `Oh bé, ça chante dans ma poitrine tellement ça m’fait plaisir !`,
                    `Han la la, j’m’en voudrais d’pas applaudîr un si bel élan !`,
                    `Nom d’un brandon, quel panache t’as là ! Ça m’ravive !`,
                    `Oh bé j’peux point être triste, pas quand tu fais un tel coup !`,
                    `Han bé, que la joie m’pousse jusque dans les oreillons d’ma vieille coiffe !`,
                    `Oh bé oui, régale-toi donc, tu l’as ben mérité !`
                ],

                OAForteV: [
                    `Han bé alors ! Regarde-moi ça, mon ${FlastDecl()}, j’en suis tout guilleret !`,
                    `Oh la la, j’ai joué ça comme un vrai sacré gâs ! J’en ris tout seul !`,
                    `Nom d’un briquet, ça c’est du coup qui r’met la joie dans l’ventre !`,
                    `Han bé oui, j’m’en vante p’têt, mais j’suis content d’moi, hein !`,
                    `Oh bé, j’ai la banane jusqu’aux oreilles avec ça !`,
                    `Han la la, ça m’fait danser les épaules !`,
                    `Nom d’un plotte, mon ${FlastDecl()} brille comme une belle brandon !`,
                    `Oh bé j’suis fier comm’ un poulain dans l’pré !`,
                    `Han bé, tu m’feras pas la tête : j’suis trop heureux, moi !`,
                    `Oh bé ça, c’est du jeu qui r’chauffe la ferme entière !`
                ],

                OAForteD: [
                    `Han bé, même derrière, mon ${FlastDecl()} m’met la joie jusque dans les bottes !`,
                    `Oh la la, j’suis p’têt pas en tête, mais je ris quand même !`,
                    `Nom d’un rouache, c’est ben beau d’poser un coup pareil !`,
                    `Han bé oui, chacun son tour d’mener, mais moi j’garde la bonne humeur !`,
                    `Oh bé, j’suis en retard, mais qu’est-ce que j’me suis régalé à l’jouer !`,
                    `Han la la, si c’est pas du plaisir, j’sais pas c’que c’est !`,
                    `Nom d’un borgnon, ça m’met le cœur en fête !`,
                    `Oh bé, tu peux ben être devant, ça m’empêche pas d’être joyeux !`,
                    `Han bé, suffit d’un beau ${FlastDecl()} pour m’remettre l’sourire !`,
                    `Oh bé je ris comme un veau, même si j’suis derrière !`
                ],

                JAFaibleV: [
                    `Han bé, joli ton p’tit ${FlastDecl()}, ça m’fait plaisir d’voir ça !`,
                    `Oh bé, j’suis tout content, même quand c’est juste un p’tit coup !`,
                    `Nom d’un plon, c’est mignon tout plein !`,
                    `Han bé, ça donne du soleil dans la partie, ça !`,
                    `Oh la la, j’adore quand ça s’joue comme ça, simple et joyeux !`,
                    `Han, c’est pas gros mais ça m’met l’cœur en danse !`,
                    `Oh bé, continue donc, j’me régale !`,
                    `Nom d’un biarrot, ton p’tit jeu m’fait sourire !`,
                    `Han bé, que c’est bon d’voir du mouvement, même léger !`,
                    `Oh bé alors ! Ça m’réchauffe l’âme !`
                ],

                JAFaibleD: [
                    `Han bé, tu m’passes devant avec un p’tit ${FlastDecl()}, et ça m’fait rire plus qu’autre chose !`,
                    `Oh la la, quelle finesse ! Ça m’plaît !`,
                    `Nom d’un paillon, c’est ben joué ça, j’peux qu’être content !`,
                    `Han bé, j’pouvais pas espérer plus beau retournement !`,
                    `Oh bé, moi ça m’met la joie, même si j’suis plus devant !`,
                    `Han la la, j’apprécie ton jeu, même quand tu m’piques la place !`,
                    `Nom d’un brandon, ça m’enjaille que veux-tu !`,
                    `Oh bé, passe devant donc, j’garde mon sourire !`,
                    `Han bé, ton p’tit coup m’rend tout jovial !`,
                    `Oh bé, c’est du plaisir pur ça !`
                ],

                OAFaibleV: [
                    `Han bé j’suis devant, même si c’est d’un cheveu, et ça m’met la gaieté dans l’âme !`,
                    `Oh la la, mon ${FlastDecl()} est p’tit, mais il m’fait bombance !`,
                    `Nom d’un floque, j’suis tout réjoui d’rester en tête !`,
                    `Han bé, ça m’suffit pour rire un brin !`,
                    `Oh bé, c’est p’têt riquiqui, mais ça m’met la joie jusqu’au mitan !`,
                    `Han la la, j’aime ben quand ça avance comme ça !`,
                    `Nom d’un rouache, j’suis fier comme tout !`,
                    `Oh bé, c’est peut-être pas glorieux, mais ça m’fait sourire !`,
                    `Han bé, tant qu’j’suis devant, c’est la fête !`,
                    `Oh bé, j’suis content comme un poulain dans l’pré !`
                ],

                OAFaibleD: [
                    `Han bé, même derrière, j’garde ma joyeuseté, moi !`,
                    `Oh la la, mon ${FlastDecl()} m’fait du bien quand même !`,
                    `Nom d’un boiron, j’ris d’plaisir même en queue d’chârte !`,
                    `Han bé, on peut pas toujours gagner, mais on peut toujours être heureux !`,
                    `Oh bé, ça m’empêche pas d’avoir l’sourire accroché !`,
                    `Han la la, j’prends la vie comme elle vient, moi !`,
                    `Nom d’un paillon, j’suis content rien qu’d’jouer !`,
                    `Oh bé, j’suis p’têt derrière, mais j’suis ben vivant !`,
                    `Han bé, c’est p’têt pas grand-chose, mais ça m’réchauffe !`,
                    `Oh bé, la joie fait mieux que la victoire parfois !`
                ],

                volAtout: [ // Le joueur prend l’atout à Perrot.
                    `Han ben dis donc, t’as attrapé mon ${returnedTrumpCard.rang} comme un vrai gâs du pays ! Ça m’met la ribouise !`,
                    `Oh la la, belle prise ! On dirait une chieuve qu’attrape la bonne branche !`,
                    `Héhéhé, j’suis tout content d’te voir jouer si proprement !`,
                    `Ah ben ça, c’est du jeu franc ! Ça m’fait sourire jusqu’aux oreillons !`,
                    `Han ben tu l’as mérité, va ! J’en suis tout guilleret !`,
                    `Oh, que c’est beau de t’voir ramasser l’atout comme ça !`,
                    `Héhé, t’es vif comme un brandon par vent d’nau !`,
                    `Ah ben j’suis joyeux pour toi, tiens ! J’aime quand ça joue comme ça !`,
                    `Oh la la, tu m’rends tout gai avec ce coup-là !`,
                    `Han ben j’en aurais presque envie d’chanter la musette !`
                ],

                priseAtout: [ // Perrot prend l’atout.
                    `AHAHA ! Regarde-moi ça, ton ${returnedTrumpCard.rang} vient dans ma pogne !`,
                    `Han ben j’suis heureux comme un ventres-jaunes un jour d’foire !`,
                    `Oh la la, que c’est beau ! On dirait que la chance m’fait des risettes !`,
                    `Héhé, j’suis plus joyeux qu’une poule trouvant une poignée d’grain !`,
                    `Ah ben ça m’remplit la bassie d’soleil !`,
                    `Han ben j’pourrais danser la bourrée rien qu’pour ça !`,
                    `Oh, ça m’donne le cœur léger comme une borgnonne pleine !`,
                    `Héhéhé, j’suis content comme un gamin un jour de Nau !`,
                    `Ah ben c’est pas tous les jours qu’on reçoit un cadeau pareil !`,
                    `Oh la braise, j’vais m’en vanter au village !`
                ],

                vol10As: [ // Le joueur prend un 10/As à Perrot.
                    `Han ben bravo à toi ! J’suis tout content d’te voir ramasser mon ${FcardPlayedC()} !`,
                    `Oh la la, beau coup ! Ça m’fait chaud au cœur d’voir du si beau jeu !`,
                    `Héhé, j’suis pas rancunier, moi, j’suis juste joyeux d’la partie !`,
                    `Ah ben j’suis heureux pour toi ! T’as la main d’un vrai gâs habile !`,
                    `Han ben t’me le prends, mais j’ai la gaîté que tu joues si bien !`,
                    `Oh, ça m’met plus en joie qu’en peine, ce genre d’affaire !`,
                    `Héhéhé, on dirait que la musette joue rien que pour toi !`,
                    `Ah ben bravo, ça mérite un sourire large comme une bourolle !`,
                    `Oh la la, j’suis fier d’jouer avec toi, tiens !`,
                    `Han ben j’suis gai rien qu’en voyant comment tu t’débrouilles !`
                ],

                prise10As: [ // Perrot prend un 10/As au joueur.
                    `AHAHA ! Ben v’là que j’t’ai chipé ton ${FcardPlayedP()} ! Quelle biauce prise !`,
                    `Han ben j’suis content comme tout ! Ça m’remplit la panse de soleil !`,
                    `Oh la la, on dirait que la chance m’fait un clin d’œil !`,
                    `Héhé, j’suis gai comme un brandon qui danse !`,
                    `Ah ben j’suis tout sourire, va ! C’est du beau jeu !`,
                    `Han ben j’peux pas m’empêcher d’être joyeux d’un coup pareil !`,
                    `Oh, j’vais m’en rappeler celle-là, tiens !`,
                    `Héhéhé, j’suis plus content qu’une chieuve sur son rocher !`,
                    `Ah ben tu m’en voudras pas, va, c’est l’jeu !`,
                    `Oh la braise, j’me régale de c’te partie !`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben t’es loin devant, et moi j’suis content d’te voir filer aussi bien !`,
                    `Oh la la, que j’suis joyeux d’te voir tant briller !`,
                    `Héhé, t’es un vrai champion aujourd’hui, ça m’met en fête !`,
                    `Ah ben je peux pas être triste, pas avec un si beau jeu en face !`,
                    `Han ben j’suis tout guilleret de t’voir en tête comme ça !`,
                    `Oh, t’as la baraka aujourd’hui, ça m’rend joyeux pour toi !`,
                    `Héhéhé, j’suis content que la partie soit si belle, même si j’suis derrière !`,
                    `Ah ben tu m’fais plaisir à jouer si joliment !`,
                    `Oh la la, j’pourrais presque t’applaudir !`,
                    `Han ben, c’est un plaisir d’jouer avec toi quand tu brilles comme ça !`
                ],

                OEcartImportant: [ // Perrot mène largement.
                    `AHAHA ! Regarde-moi filer comme un ventres-jaunes heureux !`,
                    `Han ben j’suis gai comme une musette en fête !`,
                    `Oh la la, j’me sens pousser les oreillons d’la joie !`,
                    `Héhé, j’suis en tête et j’vais pas r’fuser d’être content !`,
                    `Ah ben quel plaisir de filer ainsi !`,
                    `Han ben j’suis heureux comme un jour de beugnon !`,
                    `Oh, j’voudrais partager ma joie avec tout le pays !`,
                    `Héhéhé, j’suis fier mais surtout joyeux d’voir qu’ça r’pond bien !`,
                    `Ah ben cette partie m’met le cœur en biauce !`,
                    `Oh la braise, j’me sens dans une vraie charibaude de bonheur !`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben ça, c’est du beau jeu, j’suis tout content qu’ça s’joue si serré !`,
                    `Oh la la, j’adore ça, on dirait une bourrée bien menée !`,
                    `Héhé, j’suis gai d’te voir tenir tête comme ça !`,
                    `Ah ben, c’est serré mais joyeux comme une veillée au bourg !`,
                    `Han ben j’me régale de cette partie comme d’une roûtie chaude !`,
                    `Oh la la, si ça c’est pas du plaisir pur !`,
                    `Héhéhé, j’pourrais jouer des heures comme ça !`,
                    `Ah ben t’es un joli adversaire, ça fait plaisir !`,
                    `Oh, j’suis tout guilleret rien qu’à vous voir batailler !`,
                    `Han ben j’suis heureux de chaque carte qui tombe !`
                ],

                JToutAtout: [ // Le joueur a tous les atouts.
                    `Han ben t’as tout l’atout pour toi ?! Eh ben moi, ça m’met joyeux d’te voir si chanceux !`,
                    `Oh la la, t’es un vrai p’tit roi aujourd’hui !`,
                    `Héhé, ça m’fait rire d’te voir aussi bien servi !`,
                    `Ah ben j’suis content pour toi, va, ça t’va bien !`,
                    `Han ben, c’est la fête pour toi, et j’partage la joie !`,
                    `Oh, j’suis heureux rien qu’à voir ta tête !`,
                    `Héhéhé, on dirait que la brande elle-même t’aide aujourd’hui !`,
                    `Ah ben la chance t’colle aux sabots !`,
                    `Oh la la, j’peux pas m’empêcher d’être content d’une si belle main !`,
                    `Han ben t’es équipé comme un gâs d’noces !`
                ],

                OToutAtout: [ // Perrot a plein d’atouts.
                    `AHAHA ! Regarde-moi toute cette biauce d’atouts ! J’suis joyeux comme un ventres-jaunes un jour d’foire !`,
                    `Han ben j’suis servi comme un roi !`,
                    `Oh la la, j’vais danser la musette avec une main pareille !`,
                    `Héhé, j’suis plus joyeux qu’une bourrolle toute neuve !`,
                    `Ah ben, si ça c’est pas du bonheur pur !`,
                    `Han ben j’ai d’quoi rire jusqu’au pouits !`,
                    `Oh, j’me sens pousser des grelots de joie !`,
                    `Héhéhé, j’vais faire bruiter mes cartes comme un vrai gâs du Berry !`,
                    `Ah ben j’suis rempli d’allégresse comme une bourolle pleine d’grain !`,
                    `Oh la braise, quelle main heureuse j’ai là !`
                ]
            },

            rire:            {
                JAForteV: [
                    `“Ah bé hahaa ! Ton ${FlastDecl()} m’a fait lever d’ma chârte, si c’est pas joli ça !”`,
                    `“Hohoho ! J’suis encore devant, mais tu m’fais rire, t’y vas comme un gaillard !”`,
                    `“Hahaa nom d’un boiron ! Ça m’a secoué la panse ton coup-là !”`,
                    `“Ah bé, j’en ris encore, tu joues comme un vrai champignou !”`,
                    `“Hoho, t’as envoyé du lourd ! Ça m’chatouille les côtes !”`,
                    `“Hihihi ! Quel panache ! Même moi j’me marre !”`,
                    `“Ah bé j’me régale, je te jure !”`,
                    `“Hoho ! Ça, c’est de l’annonce qu’on aime entendre au village !”`,
                    `“Hahaa ! Quel régal ton ${FlastDecl()}, ça m’a retourné la biaude !”`,
                    `“Ah bé nom d’une paillote, tu m’fais rire comme un veau dans l’pré !”`
                ],

                JAForteD: [
                    `“Hahaa ! Tu m’passes devant avec ton ${FlastDecl()}, j’en ris plus qu’j’en pleure !”`,
                    `“Hohoho ! Ah ça, t’as tapé fort ! C’est trop bon !”`,
                    `“Ah bé hihihi ! Si c’est pas beau d’voir un joueur faire ça !”`,
                    `“Hoho ! Ça m’fait rire comme un benêt, bravo donc !”`,
                    `“Hahaa, j’suis plus devant mais j’me gondole !”`,
                    `“Ah bé tu m’as eu, et j’peux qu’en rire !”`,
                    `“Hohoho ! Tu joues sec aujourd’hui !”`,
                    `“Ah bé nom d’un raouche, j’suis épaté !”`,
                    `“Hahaa, ça tourne, ça tourne, et moi j’rigole comme un vieux bouc !”`,
                    `“Hoho ! T’es un vrai farçin aujourd’hui !”`
                ],

                OAForteV: [
                    `“Hahaa ! Regarde-moi donc mon ${FlastDecl()}, j’en ris tout seul !”`,
                    `“Hohoho ! Je l’ai posé comme une vieille musette, celui-là !”`,
                    `“Ah bé hihi ! J’en suis fier, tiens !”`,
                    `“Hoho ! Ça m’fait marrer d’être devant comme ça !”`,
                    `“Hahaa nom d’un floque, j’suis trop content !”`,
                    `“Ah bé, j’ai ri en posant ma carte tellement j’me suis senti malin !”`,
                    `“Hohoho ! Ça s’voit qu’j’suis en forme, hein ?”`,
                    `“Ah bé, ça m’fait rire jusque dans les sabots !”`,
                    `“Hihi, j’m’en remets pas !”`,
                    `“Hoho ! Ça c’est du jeu comme j’aime !”`
                ],

                OAForteD: [
                    `“Hahaa ! Même derrière, j’en ris, mon ${FlastDecl()} était trop bon !”`,
                    `“Hohoho ! J’suis un peu secoué, mais j’me marre quand même !”`,
                    `“Ah bé hihi ! On perd, on gagne, mais faut rire, hein !”`,
                    `“Hoho ! Oh que oui, j’garde le sourire moi !”`,
                    `“Hahaa nom d’un raouche, j’suis derrière mais joyeux !”`,
                    `“Ah bé j’ris tellement que j’oublie presque le score !”`,
                    `“Hoho ! Voilà qu’ça m’pique les côtes !”`,
                    `“Hihihi, j’suis ben vivant quand même !”`,
                    `“Ah bé j’peux pas m’empêcher d’rigoler, même si j’suis en bas !”`,
                    `“Hohoho ! Allez, c’est l’jeu mon drû !”`
                ],

                JAFaibleV: [
                    `“Hahaa ! Ton p’tit ${FlastDecl()} m’a fait ricaner comme un gamin !”`,
                    `“Hohoho ! C’est mignon tout plein !”`,
                    `“Ah bé hihihi, j’me marre rien qu’en l’regardant !”`,
                    `“Hoho ! Ça fait plaisir, même si c’est pas gros !”`,
                    `“Hahaa, tu m’fais rire avec tes p’tits coups !”`,
                    `“Ah bé oh oui, j’aime ben ça moi !”`,
                    `“Hohoho ! Ça m’fait passer un bon moment !”`,
                    `“Hihi, tout petit mais tout bon !”`,
                    `“Ah bé tu joues ça comme un vrai paisan !”`,
                    `“Hoho ! J’en rigole encore !”`
                ],

                JAFaibleD: [
                    `“Hahaa ! Un p’tit ${FlastDecl()} qui t’fait passer devant, si c’est pas drôle ça !”`,
                    `“Hohoho ! Ah ça, tu m’fais la bise au moral !”`,
                    `“Ah bé hihi, t’as d’la chance mais ça m’fait rire !”`,
                    `“Hoho ! C’est ben malin ton truc là !”`,
                    `“Hahaa ! J’me gondole d’te voir grimper comme ça !”`,
                    `“Ah bé, j’suis ravi d’ce retournement !”`,
                    `“Hohoho ! J’vais finir en deux pour avoir trop ri !”`,
                    `“Hihi, t’es un vrai fripon !”`,
                    `“Ah bé j’peux pas m’empêcher d’en rire !”`,
                    `“Hoho ! C’est ben tourné ça !”`
                ],

                OAFaibleV: [
                    `“Hahaa ! Même un p’tit ${FlastDecl()}, ça m’met le rire au ventre !”`,
                    `“Hohoho ! Ah oui, je me régale !”`,
                    `“Ah bé hihi, j’suis heureux comme tout !”`,
                    `“Hoho ! Ça m’fait sourire jusque dans les oreillons !”`,
                    `“Hahaa, j’suis devant et j’rigole comme un bonhomme !”`,
                    `“Ah bé nom d’un plon, que c’est bon !”`,
                    `“Hohoho ! J’vais m’user la gorge à rire comme ça !”`,
                    `“Hihi, tu peux pas m’enlever ça !”`,
                    `“Ah bé, j’suis content comme un Chartrain au marché !”`,
                    `“Hoho ! Ça, ça me régale !”`
                ],

                OAFaibleD: [
                    `“Hahaa ! Même derrière, j’peux pas m’empêcher d’rigoler !”`,
                    `“Hohoho ! Mon ${FlastDecl()} était p’têt pas gros, mais j’en ris !”`,
                    `“Ah bé hihi, j’suis pas l’meilleur mais j’suis l’plus gaillard !”`,
                    `“Hoho ! C’est ben bon de rire même en queue !”`,
                    `“Hahaa, tiens, ça m’donne envie d’taper sur la table !”`,
                    `“Ah bé, j’ris, j’ris, j’ris !”`,
                    `“Hohoho ! T’sais que le rire, c’est meilleur qu’les points ?”`,
                    `“Hihi, j’ai la joie facile moi !”`,
                    `“Ah bé, j’peux pas rester sérieux, pas possible !”`,
                    `“Hoho ! Tant qu’on rit, on gagne toujours un peu !”`
                ],

                volAtout: [ // Le joueur prend l'atout à Perrot.
                    `AHAHA ! T’m’as fauché mon ${returnedTrumpCard.rang} comme un renard sous la brande ! Quel numéro !`,
                    `OH OH OH ! Regarde-moi ça ! J’me fais plumer et j’rigole quand même !`,
                    `Hihihi ! T’es allé l’chercher comme un vrai gâs du Berry !`,
                    `AHAHA ! J’crois ben que tu vas m’donner des crampes aux côtes à force de m’faire rire comme ça !`,
                    `OHOH ! T’es vif comme le vent d’Nau ! Ça m’gondole !`,
                    `AHAHA ! J’me fais dépouiller la carte et j’te remercie d’me faire rire en même temps !`,
                    `Hihihi ! Si tu continues comme ça, j’vais plus pouvoir jouer tant j’rigole !`,
                    `AHAHA ! T’as pris ça si vite que j’ai cru voir voler une bourolle !`,
                    `OHOH ! Tu m’plumes propre, et moi j’me marre comme une pie !`,
                    `Hahaha ! On dirait que tu joues exprès pour m’faire rire !`
                ],

                priseAtout: [ // Perrot prend l'atout.
                    `AHAHA ! Regarde-moi ça ! ton ${returnedTrumpCard.rang} qui m’tombe dans la pogne !`,
                    `OH OH OH ! J’suis plus gai qu’un ventres-jaunes un jour d’foire !`,
                    `Hihihi ! On dirait que la musette elle-même rit avec moi !`,
                    `AHAHA ! J’ai l’atout et j’pourrais presque rouler par terre !`,
                    `OHOH ! Ça m’donne envie d’faire une bourrée rien que d’y penser !`,
                    `AHAHA ! L’atout pour moi, la rigolade pour tous !`,
                    `Hihihi ! J’suis comme une chieuve qui découvre une poignée d’grain !`,
                    `AHAHA ! J’ris rien qu’à regarder la carte !`,
                    `OHOH ! J’savais pas que l’atout pouvait donner autant d’bonne humeur !`,
                    `Hahaha ! Han ben là, j’suis servi en joie !`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Perrot.
                    `AHAHA ! Tu m’piques mon ${FcardPlayedC()} et j’te félicite en riant !`,
                    `OH OH OH ! Quelle tannée tu m’fais ! Mais qu’est-ce que j’rigole !`,
                    `Hihihi ! T’es malin comme un chat bure !`,
                    `AHAHA ! On dirait que tu m’couronnes d’une rigolade à chaque carte !`,
                    `OHOH ! Tu viens d’me prendre un point et d’me donner un fou rire !`,
                    `AHAHA ! J’crois ben que tu vas m’faire rire jusqu’au pouits !`,
                    `Hihihi ! T’as des mains de ventres-jaunes, c’est sûr !`,
                    `AHAHA ! J’en perds mes sabots tellement j’me marre !`,
                    `OHOH ! Si tu continues, c’est moi qui vais déclarer une charibaude de rire !`,
                    `Hahaha ! Mon ${FcardPlayedC()} parti, mais mon rire bien planté !`
                ],

                prise10As: [ // Perrot prend un 10 ou As au joueur.
                    `AHAHA ! Regarde ça ! Ton ${FcardPlayedP()} vient chez moi !`,
                    `OH OH OH ! Quelle trouvaille ! J’en ris comme une bourolle qui roule !`,
                    `Hihihi ! On dirait que la chance me chatouille les côtes !`,
                    `AHAHA ! Tu l’as vu venir celle-là ? Moi non, mais mon rire oui !`,
                    `OHOH ! Ça m’fait plus rire qu’un beugnon réussi !`,
                    `AHAHA ! J’suis plus gai qu’une musette en fête !`,
                    `Hihihi ! Une prise pareille, ça vaut une bonne rigoulade !`,
                    `AHAHA ! T’fais une tête à t’voir ! Ça m’tue de rire !`,
                    `OHOH ! J’crois ben que j’vais pas m’en remettre d’ici la veillée !`,
                    `Hahaha ! Quelle drôle d’affaire !`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `AHAHA ! T’mènes comme un roi, j’me marre tellement que j’en vois plus les cartes !`,
                    `OH OH OH ! Tu m’fais la leçon et la rigolade en même temps !`,
                    `Hihihi ! J’aime te voir filer comme ça, j’pourrais applaudir !`,
                    `AHAHA ! Si tu continues, j’vais éclater de rire avant la fin !`,
                    `OHOH ! Quelle volée ! J’en ris comme un fou !`,
                    `AHAHA ! J’sais pas qui joue mieux, toi ou mon rire !`,
                    `Hihihi ! Je suis derrière mais hilare !`,
                    `OHOH ! T’as d’la baraka aujourd’hui, j’me marre bien !`,
                    `AHAHA ! T’es en tête et moi j’ris rien qu’à t’voir jouer !`,
                    `Hahaha ! Quelle belle tannée joyeuse tu m’fais !`
                ],

                OEcartImportant: [ // Perrot mène largement.
                    `AHAHA ! Regarde-moi filer comme une chieuve sur la brande !`,
                    `OH OH OH ! J’suis tellement en avance que j’pourrais jouer en chantant !`,
                    `Hihihi ! Ça m’met la rigolade jusque dans les sabots !`,
                    `AHAHA ! J’suis plus gai qu’un ventres-jaunes un jour de Nau !`,
                    `OHOH ! J’me surprends moi-même, ça m’fait éclater de rire !`,
                    `AHAHA ! Ah ben là, c’est un plaisir de rire et d’mener !`,
                    `Hihihi ! J’ai l’impression d’voler !`,
                    `OHOH ! Même les bourrelles rient avec moi !`,
                    `AHAHA ! Une avance pareille, ça se fête d’un bon rire !`,
                    `Hahaha ! J’suis en tête et j’pourrais pas être plus joyeux !`
                ],

                EcartFaible: [ // Partie serrée.
                    `AHAHA ! Si serré que ça ?! Ça m’fait rigoler encore plus !`,
                    `OH OH OH ! On dirait une bourrée à deux, j’me marre comme un gamin !`,
                    `Hihihi ! Oh la la, j’adore ces parties où tout r’tient sur un cheveu !`,
                    `AHAHA ! Ça m’fait des chatouilles dans la panse tellement c’est beau à voir !`,
                    `OHOH ! On pourrait croire que la vigoune elle-même rit d’nous voir faire !`,
                    `AHAHA ! J’suis tout excité rien qu’d’être dans l’mitan !`,
                    `Hihihi ! C’est serré mais tellement drôle !`,
                    `OHOH ! J’me ríe de chaque carte, on dirait un dimanche brandounier !`,
                    `AHAHA ! Toi, moi, serrés comme des bourrelles… quel beau rire !`,
                    `Hahaha ! J’ne m’en lasse pas !`
                ],

                JToutAtout: [ // Le joueur a tous les atouts.
                    `AHAHA ! Regarde-moi ça ! T’es paré comme un roi, ça m’fait éclater d’rire !`,
                    `OH OH OH ! Avec une main pareille, j’peux qu’rigoler !`,
                    `Hihihi ! J’suis heureux d’te voir aussi nanti !`,
                    `AHAHA ! J’suis dans la panade, mais alors, j’me marre !`,
                    `OHOH ! Quelle main ! On dirait que la chance t’a embrassé !`,
                    `AHAHA ! J’peux pas m’empêcher d’rire tellement t’es équipé !`,
                    `Hihihi ! J’te souhaite presque bon courage pour les jouer toutes !`,
                    `OHOH ! J’ai jamais vu ça ! Ça m’tord !`,
                    `AHAHA ! Continue donc ! J’en peux plus de rire !`,
                    `Hahaha ! T’es un vrai gâs béni d’la musette !`
                ],

                OToutAtout: [ // Perrot a plein d’atouts.
                    `AHAHA ! Regarde-moi cette main ! On dirait que le Nau est tombé dans ma poche !`,
                    `OH OH OH ! J’me sens pousser des grelots tellement j’ris !`,
                    `Hihihi ! J’suis plus content qu’une bourolle pleine d’grain !`,
                    `AHAHA ! J’vais faire danser les cartes comme une bourrée d’fête !`,
                    `OHOH ! Ça m’met une sacrée charibaude dans le cœur !`,
                    `AHAHA ! J’ai l’atout et la rigolade !`,
                    `Hihihi ! On dirait que tout le Boischaut rit avec moi !`,
                    `OHOH ! J’suis gâté comme un enfant de Nau !`,
                    `AHAHA ! J’me fais moi-même rire tellement j’suis chanceux !`,
                    `Hahaha ! Avec une main pareille, j’peux rire jusqu’à demain !`
                ]
            },

            peur:            {
                JAForteV: [
                    `“Han bé… ton ${FlastDecl()}, il m’a fendu les guibolles, j’te jure… j’ai eu la trouille comme un lapin d’broussailles !”`,
                    `“Oh la la… tu m’as fait peur d’un coup, j’me suis senti p’tit comme un paillon !”`,
                    `“Nom d’un raouche… j’ai cru qu’j’allais m’renverser d’sur mon banc !”`,
                    `“Han bé, tu m’as secoué les tripes, j’sais plus où donner de la tête !”`,
                    `“Oh bé… j’suis encor tout tremblant, j’te cache pas !”`
                ],

                JAForteD: [
                    `“Han bé nom d’un boiron… t’es passé devant avec ton ${FlastDecl()}, j’en ai les jambes en eau !”`,
                    `“Oh la la… j’ai eu un bon coup d’frousse… tu vas trop vite pour moi !”`,
                    `“Nom d’un berlot… j’crois qu’j’ai eu l’cœur qui s’est arrêté d’battre un instant !”`,
                    `“Han bé, ça m’a fichu la pétoche, j’te le redis !”`,
                    `“Oh bé j’te mens pas, j’ai peur que tu m’laisseras loin derrière…”`
                ],

                OAForteV: [
                    `“Han bé… j’ai beau être devant avec mon ${FlastDecl()}, j’ai tout d’même la trouillasse… et si ça tourne ?”`,
                    `“Oh la la, j’me sens pas si costaud que ça… même en tête !”`,
                    `“Nom d’un rouache… j’sais pas si j’vais tenir, ça m’fait peur… !”`,
                    `“Han bé, j’suis content mais j’me sens fragile comme un borgnon !”`,
                    `“Oh bé… j’ai toujours peur quand ça va trop bien d’un coup…”`
                ],

                OAForteD: [
                    `“Han bé… même avec mon ${FlastDecl()}, j’ai ben peur que ça suffise pas… j’suis tout serré d’dans…”`,
                    `“Oh la la… j’peux pas t’mentir, j’me sens vraiment en danger là…”`,
                    `“Nom d’un paillon, j’ai la chair qui frissonne rien qu’à voir l’écart…”`,
                    `“Han bé, j’ai peur d’plus pouvoir t’rattraper du tout…”`,
                    `“Oh bé… j’suis pas rassuré, mais alors pas du tout…”`
                ],

                JAFaibleV: [
                    `“Han bé… même ton p’tit ${FlastDecl()} m’a fait reculer d’un cran dans ma tête…”`,
                    `“Oh la la… t’approches p’tit à p’tit, et ça m’inquiète un brin…”`,
                    `“Nom d’un flambe… j’ai peur qu’t’en profites pour m’croquer !”`,
                    `“Han bé, j’me sens suivi comme un veau mal réveillé !”`,
                    `“Oh bé… j’suis pas tranquille du tout…”`
                ],

                JAFaibleD: [
                    `“Han bé… tu m’passes devant même avec si peu… ça m’met mal à l’aise, j’te l’dis…”`,
                    `“Oh la la… j’ai peur que j’sois plus à l’hauteur du tout !”`,
                    `“Nom d’un raouche… ça m’a foutu la grelotte !”`,
                    `“Han bé, j’sens mes forces qui m’quittent, oh là là…”`,
                    `“Oh bé… j’crois bien qu’j’ai perdu l’vent dans les voiles…”`
                ],

                OAFaibleV: [
                    `“Han bé… j’suis devant mais avec si peu, ça m’fait peur d’glisser !”`,
                    `“Oh la la… mon ${FlastDecl()} est p’tit, j’ai peur que ça tienne pas…”`,
                    `“Nom d’un paillon, j’me sens pas si solide que ça…”`,
                    `“Han bé, j’ai peur qu’ça s’effrite tout d’un coup…”`,
                    `“Oh bé… j’avance, mais avec la boule au ventre…”`
                ],

                OAFaibleD: [
                    `“Han bé… j’suis encore derrière et mon ${FlastDecl()} m’rassure point du tout…”`,
                    `“Oh la la… j’peux pas m’empêcher d’avoir la frousse… ça sent mauvais pour moi…”`,
                    `“Nom d’un plon… j’ai peur qu’j’arrive jamais à t’rejoindre…”`,
                    `“Han bé, plus j’regarde mes cartes, plus j’ai les guibolles qui tremblent…”`,
                    `“Oh bé… j’suis pas fier, j’ai la trouille d’être largué pour de bon…”`
                ],

                vol10As: [ // Le joueur prend un 10 ou As à Perrot.
                    `Han ben mon ${FcardPlayedC()}… envolé… j’ai la frousse d’être balayé d’la partie…`,
                    `Oh la la… ça m’ôte le peu d’courage que j’avais…`,
                    `Sainte bourrolle… j’suis pas tranquille du tout…`,
                    `Han ben j’sens la guigne qui m’suit, moi…`,
                    `Oh… j’sais pas si j’vais pouvoir tenir encore longtemps…`
                ],

                prise10As: [ // Perrot prend un 10 ou As au joueur.
                    `Han ben j’l’ai pris… mais j’ai peur que tu m’le fasses payer cher…`,
                    `Oh la la… j’me sens pas rassuré d’un coup…`,
                    `Sainte fousse, j’sais pas si c’est un bon signe ou un mauvais…`,
                    `Han ben j’ose même plus regarder ta tête…`,
                    `Oh… j’ai peur que ça réveille l’orage…`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben t’es si loin devant… j’ai la peur qui m’pique les oreillons…`,
                    `Oh la la… j’crois ben que j’vais finir écrasé comme une vigoune sèche…`,
                    `Sainte bourrolle… j’suis tout tremblant dans mes sabots…`,
                    `Han ben j’ai l’impression que j’vais m’effondrer d’un coup…`,
                    `Oh… j’ai le mitan tout serré rien qu’d’te regarder…`
                ],

                OEcartImportant: [ // Perrot mène largement.
                    `Han ben j’suis devant… mais ça m’fait peur d’pas savoir maintenir !`,
                    `Oh la la, j’ai peur qu’tout s’renverse d’une seconde à l’autre…`,
                    `Sainte fousse… j’ose même pas fêter ça, tellement j’me méfie…`,
                    `Han ben j’suis jamais tranquille, moi… même en tête…`,
                    `Oh… j’ai le cœur qui bat comme un brandon qu’on agite !`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben c’est si serré que j’en ai la panse toute nouée…`,
                    `Oh la la… j’ose plus respirer, va…`,
                    `Sainte vigoune, j’suis nerveux comme une poule devant l’orage…`,
                    `Han ben j’crois qu’la moindre carte va m’faire tomber…`,
                    `Oh… j’ai peur que la chance m’lâche d’un coup…`
                ],

                JToutAtout: [ // Le joueur a tous les atouts.
                    `Han ben… t’as tout ça ?! J’ai la trouille d’être balayé !`,
                    `Oh la la… j’suis pas armé pour lutter… j’ai peur, oui…`,
                    `Sainte bourrolle… j’vais m’faire tanner la peau, moi…`,
                    `Han ben c’est la fin des haricots, ça… j’en frissonne !`,
                    `Oh… j’ai les jambes qui font la chieuve, j’te jure…`
                ],

                OToutAtout: [ // Perrot a plein d’atouts.
                    `Han ben j’suis bien servi… mais ça m’fait presque peur d’être si chanceux…`,
                    `Oh la la… j’me méfie, ça pourrait s’retourner contre moi…`,
                    `Sainte chieuve… j’ose même pas trop regarder mes cartes…`,
                    `Han ben j’sais pas si j’saurai bien les jouer…`,
                    `Oh… j’ai l’impression qu’je vais faire une bêtise…`
                ]
            },

            surprise:        {
                JAForteV: [
                    `“Han bé d’ça ! Ton ${FlastDecl()}, il m’a fait bondir d’ma chârte ! J’m’y attendais pas du tout !”`,
                    `“Oh la la, nom d’un borgnon ! D’où tu sors ça ?!”`,
                    `“Hah ! J’ai eu l’sang qui m’a fait un tour, j’te le dis !”`,
                    `“Ah bé alors là… j’suis resté figé comme un paillon sous la pluie !”`,
                    `“Nom d’un flambe, t’as failli m’faire avaler ma salive de travers !”`
                ],

                JAForteD: [
                    `“Han bé non mais alors là ! Avec ton ${FlastDecl()}, t’as retourné le jeu d’un coup sec !”`,
                    `“Oh fan… j’en suis resté la bouche ouverte comme un gamin !”`,
                    `“Nom d’un raouche, j’aurais jamais cru que ça t’ferait passer devant !”`,
                    `“Han bé, j’suis épaté, complètement épaté !”`,
                    `“Oh bé alors, c’est ben la dernière chose à laquelle j’pensais !”`
                ],

                OAForteV: [
                    `“Han bé… même moi j’savais pas qu’j’avais ça dans la main ! Quelle affaire !”`,
                    `“Oh la la ! J’me suis surpris tout seul, tiens !”`,
                    `“Nom d’un boiron, j’ai pas compris c’qui s’est passé, mais c’est tombé ben propre !”`,
                    `“Han bé alors, j’ai eu l’impression de jouer sans l’faire exprès !”`,
                    `“Oh bé, j’croyais point que mon ${FlastDecl()} taperait aussi fort !”`
                ],

                OAForteD: [
                    `“Han bé… même avec ce beau ${FlastDecl()}, j’suis encore derrière ?! Par tous les saints !”`,
                    `“Oh la la, j’pensais ben remonter, mais non ! J’en reste coi !”`,
                    `“Nom d’un paillon, j’suis étonné qu’ça suffise pas !”`,
                    `“Han bé, j’comprends rien à c’t’affaire-là, j’te jure !”`,
                    `“Oh bé ça alors… j’avais pas vu venir c’t’envers-là…”`
                ],

                JAFaibleV: [
                    `“Han bé tiens ! Même un p’tit ${FlastDecl()} m’a surpris !”`,
                    `“Oh la la, j’pensais pas qu’t’avais ça dans ta besace !”`,
                    `“Nom d’un rouache, d’où tu m’sors ce p’tit truc-là ?!”`,
                    `“Han bé, j’suis resté coi une seconde !”`,
                    `“Oh bé alors, c’était ben inattendu ça !”`
                ],

                JAFaibleD: [
                    `“Han bé d’ça ! Même un p’tit ${FlastDecl()} suffit à t’faire passer devant ?!”`,
                    `“Oh la la, ça j’m’y attendais pas une goutte !”`,
                    `“Nom d’un brandon, tu m’as pris par surprise !”`,
                    `“Han bé, j’ai cligné et paf ! T’étais devant !”`,
                    `“Oh bé ça alors ! J’suis tout retourné !”`
                ],

                OAFaibleV: [
                    `“Han bé… j’suis encore devant ?! J’pensais pas qu’mon ${FlastDecl()} ferait l’affaire !”`,
                    `“Oh la la, j’m’attendais à glisser, mais non !”`,
                    `“Nom d’un raouche, j’suis surpris d’être encore en tête !”`,
                    `“Han bé, j’me croyais fichu et pourtant !”`,
                    `“Oh bé alors, j’suis tout étonné d’moi-même !”`
                ],

                OAFaibleD: [
                    `“Han bé… même ça, ça m’remonte pas ?! J’en reviens pas !”`,
                    `“Oh la la… j’sais pas quoi dire, j’suis bluffé !”`,
                    `“Nom d’un paillon, j’pensais vraiment gagner un cran là !”`,
                    `“Han bé, j’comprends pas comment j’peux rester derrière !”`,
                    `“Oh bé ça alors… j’suis surpris comme un veau qui voit sa première charrue !”`
                ],

                volAtout: [ // Le joueur prend l'atout à Perrot.
                    `Han ben d’dieu ! Tu m’as chipé mon ${returnedTrumpCard.rang} ?! J’en suis tout ébaudi !`,
                    `Oh la la, j’croyais pas que t’allais oser, moi ! Quelle affaire !`,
                    `Sainte bourrolle, ça m’a retourné comme une bourolle dans l’fossé !`,
                    `Han ben j’en reviens pas, tu l’as pris si proprement !`,
                    `Oh d’diou… j’me doutais de rien du tout !`
                ],

                priseAtout: [ // Perrot prend l'atout.
                    `Han ben alors ! C’est moi qu’l’ai ?! ton ${returnedTrumpCard.rang} ?! Oh la la !`,
                    `Oh d’diou… ça m’tombe dans la pogne comme ça, sans prévenir !`,
                    `Sainte chieuve, j’en ai les yeux grands comme des rouaches !`,
                    `Han ben j’suis tout retourné de l’avoir attrapé !`,
                    `Oh la braise ! J’pensais que tu l’aurais, toi !`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Perrot.
                    `Han ben non d’un barriau ! Mon ${FcardPlayedC()} ?! J'croyais l’avoir bien gardé !`,
                    `Oh la la, tu m’l’as pris comme ça ?! Quelle vitesse !`,
                    `Sainte vigoune, j’ai rien vu venir !`,
                    `Han ben j’suis tout bête, moi… j’pensais l’avoir en sûreté !`,
                    `Oh d’diou… j’suis surpris jusqu’aux oreillons !`
                ],

                prise10As: [ // Perrot prend un 10 ou un As au joueur.
                    `Han ben… c’est moi qu’l’ai ramassé ton ${FcardPlayedP()} ?! Par ma foi !`,
                    `Oh la la, j’pensais pas tomber dessus comme ça !`,
                    `Sainte bourrolle, ça m’a sauté dans les mains sans prévenir !`,
                    `Han ben j’m’y attendais pas du tout !`,
                    `Oh d’diou, j’suis aussi surpris qu’une chieuve qui voit un orage !`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben… t’es si loin devant ?! J’en reste tout coi, moi !`,
                    `Oh la la, j’pensais pas qu’t’avais tant d’avance !`,
                    `Sainte fousse… ça m’fait ouvrir la bouche comme un borgnon !`,
                    `Han ben t’as filé sans que j’m’en rende compte !`,
                    `Oh d’diou, j’suis surpris d’une force !`
                ],

                OEcartImportant: [ // Perrot mène largement.
                    `Han ben… j’suis tout là-haut moi ?! Par Saint-Brandoun !`,
                    `Oh la la, j’pouvais pas deviner que j’étais si en tête !`,
                    `Sainte chieuve, ça m’fait les yeux grands comme des assiettes !`,
                    `Han ben j’suis tout étonné d’ma propre avance !`,
                    `Oh d’diou, j’me serais jamais cru si loin !`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben… si serré que ça ?! J’en reviens pas !`,
                    `Oh la la, j’pensais avoir pris d’la distance !`,
                    `Sainte bourrolle, on est collés comme deux brins d’osier !`,
                    `Han ben j’suis tout étonné d’voir qu’tu m’suis autant !`,
                    `Oh d’diou, j’aurais juré qu’un d’nous deux avait pris l’avantage !`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Han ben d’dieu… t’as tout l’atout pour toi ?! J’suis soufflé !`,
                    `Oh la la, j’pensais pas qu’t’avais une main pareille !`,
                    `Sainte vigoune, ça m’surprend d’une force !`,
                    `Han ben j’suis tout écarquillé d’voir ça !`,
                    `Oh d’diou… j’croyais en avoir au moins un ou deux !`
                ],

                OToutAtout: [ // Perrot a beaucoup d’atouts.
                    `Han ben… c’est moi qu’ai tout ça ?! J’suis bouche bée !`,
                    `Oh la la, j’pensais pas avoir une main si pleine !`,
                    `Sainte chieuve, je savais pas que j’étais si bien armé !`,
                    `Han ben j’me sens tout étonné, moi !`,
                    `Oh d’diou… j’ai jamais vu autant d’atouts d’un coup !`
                ]
            },

            colere:          {
                JAForteV: [
                    `“Han bé non mais ho ! Ton ${FlastDecl()}, il m’a retourné la panse ! Ça m’fait bouillir comme une chaudière d’étang !”`,
                    `“Oh la la, tu m’secoues trop fort là ! Ça m’met en rogne d’te voir cogner si dru !”`,
                    `“Nom d’un flambe… t’pourrais y aller mollo, dis donc ! J’suis tout échauffé !”`,
                    `“Han bé, j’aime ben jouer mais là tu m’fais grincer comme une vieille chârte !”`,
                    `“Oh bé, tu vas m’faire sauter d’ma chaise à force !”`
                ],

                JAForteD: [
                    `“Han bé non d’un rouache ! Tu m’passes devant, ça m’donne des chaleurs !”`,
                    `“Oh la la… ton ${FlastDecl()} m’a tordu l’humeur comme un brin d’osier !”`,
                    `“Nom d’un boiron, j’suis pas content du tout d’te voir filer !”`,
                    `“Han bé, ça m’fait bouillir jusqu’au mitan, j’te jure !”`,
                    `“Oh bé, c’est ben joli pour toi, mais moi ça m’met en pétard !”`
                ],

                OAForteV: [
                    `“Han bé ça alors, mon ${FlastDecl()} m’a échauffé la tête, oh oui !”`,
                    `“Oh la la, j’suis devant mais j’suis encore rouge comme un brandon !”`,
                    `“Nom d’un paillon, j’suis tellement monté qu’j’ai failli taper sur la table !”`,
                    `“Han bé, quand j’pose ça, j’me sens toute bouillanté !”`,
                    `“Oh bé, j’ai joué sec comme le tonnerre, et ça m’énerve autant que ça m’plait !”`
                ],

                OAForteD: [
                    `“Han bé non d’un raouche ! Même avec mon ${FlastDecl()}, j’suis encor derrière ?! Ça m’met la tête à l’envers !”`,
                    `“Oh la la, j’vais m’user les dents à force d’pester !”`,
                    `“Nom d’un plon, j’suis bouillant d’pas r’monter !”`,
                    `“Han bé, j’ai l’impression d’ramer dans la boue, ça m’énerve sec !”`,
                    `“Oh bé, j’suis en rogne comme un vieux coq mal nourri !”`
                ],

                JAFaibleV: [
                    `“Han bé ça suffit maintenant avec tes p’tits ${FlastDecl()} qui m’agaçent !”`,
                    `“Oh la la, c’est rien du tout, mais ça m’pique l’humeur !”`,
                    `“Nom d’un sillon, j’te jure qu’tu m’énerves à jouer comme ça !”`,
                    `“Han bé, c’est p’tit mais ça m’met l’feu au museau !”`,
                    `“Oh bé, tu vas finir par m’faire gronder pour de bon !”`
                ],

                JAFaibleD: [
                    `“Han bé non mais alors ! Un p’tit ${FlastDecl()} et t’me passes devant ?! Ça m’rend fou !”`,
                    `“Oh la la, j’vais finir par m’arracher la biaude !”`,
                    `“Nom d’un forchat, c’est pas croyable de m’piquer la place avec si peu !”`,
                    `“Han bé, j’grognonne, j’grognonne, mais j’y peux rien !”`,
                    `“Oh bé, ça m’suffit pour bouillir comme une soupe sans couvercle !”`
                ],

                OAFaibleV: [
                    `“Han bé, j’suis devant mais ça m’gratte l’humeur d’avoir dû jouer si p’tit !”`,
                    `“Oh la la, j’en ai les joues toutes chaudes !”`,
                    `“Nom d’un raouche, j’étais sûr d’avoir mieux !”`,
                    `“Han bé, j’suis devant mais pas fier d’c’que j’ai fait !”`,
                    `“Oh bé, j’grogne un brin, mais j’m’en contente…”`
                ],

                OAFaibleD: [
                    `“Han bé, même ça, ça m’fait pas avancer ?! J’suis en pétard !”`,
                    `“Oh la la, j’suis tout retourné d’être encore derrière !”`,
                    `“Nom d’un boiron, ça m’fait bouillir d’impuissance !”`,
                    `“Han bé, j’ai la tête comme une vieille chaudière prête à éclater !”`,
                    `“Oh bé, j’suis tellement énervé qu’j’ose même plus regarder mes cartes !”`
                ],

                volAtout: [ // Le joueur prend l'atout à Perrot.
                    `Han ben nom d’un barriau ! Mon ${returnedTrumpCard.rang} ! Ça m’fout la bourolle en travers, ça !`,
                    `Oh la la, mais qu’est-ce que tu vas si vite ! J’peux rien garder tranquille !`,
                    `Sainte fousse, j’vais finir par roussir comme un brandon mal éteint !`,
                    `Han ben j’en ai les oreilles qui chauffent, moi !`,
                    `Oh d’diou, tu m’l’as pris comme ça, sans vergogne ! Ça m’met en rogne !`
                ],

                priseAtout: [ // Perrot prend l'atout.
                    `Han ben oui, j’l’ai ! Et t’y peux rien ! Ça m’fait pas d’mal d’te voir faire la tête, tiens !`,
                    `Oh la braise, fallait bien qu’ça m’arrive d’temps en temps, hein !`,
                    `Sainte bourrolle, tu croyais quoi ? Que j’allais t’le laisser ?`,
                    `Han ben j’suis pas d’humeur tendre aujourd’hui, l’atout reste chez moi !`,
                    `Oh d’diou, j’l’ai bien gagné celui-là, alors grogne pas trop !`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Perrot.
                    `Han ben nom d’un péliau ! Mon ${FcardPlayedC()} ! Ça m’fait grimper la bourolle au front !`,
                    `Oh la la, ça m’énerve ça ! Tu m’laisses plus rien !`,
                    `Sainte vigoune, tu m’piques tout ! J’pourrais braire !`,
                    `Han ben j’suis en colère là, vraiment !`,
                    `Oh, j’me voyais bien l’garder, c’te carte… j’suis fâché, oui !`
                ],

                prise10As: [ // Perrot prend un 10 ou un As au joueur.
                    `Han ben j’ai ton ${FcardPlayedP()} et j’t’avertis, j’vais pas m’en excuser !`,
                    `Oh la la, tu fais une tête ! Ça m’met en rogne rien qu’d’te voir bouder !`,
                    `Sainte chieuve, j’l’ai pas volé, celui-là !`,
                    `Han ben fallait jouer plus serré ! C’est comme ça !`,
                    `Oh d’diou, j’suis pas d’humeur à faire des politesses !`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben tu m’roules d’ssus comme une chârte folle et ça m’met dans une colère noire !`,
                    `Oh la la, mais laisse-m’en un tout p’tit peu ! J’suis en train d’bouillir, moi !`,
                    `Sainte vigoune, t’es trop fort là ! Ça m’fait grogner !`,
                    `Han ben j’me sens écrasé, j’suis fâché d’une force !`,
                    `Oh d’diou, j’vais finir par taper dans la table !`
                ],

                OEcartImportant: [ // Perrot mène largement.
                    `Han ben oui, j’mène ! Et j’te le dis : ça m’empêche pas d’être encore en colère d’c’que t’as fait tout à l’heure !`,
                    `Oh la braise, j’suis encore échauffé, même en étant devant !`,
                    `Sainte chieuve, j’suis fâché mais j’continue d’avancer !`,
                    `Han ben j’suis d’ces gâs qu’grogne même quand tout va bien !`,
                    `Oh d’diou, j’suis en tête, mais l’feu m’a pas quitté !`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben ça m’énerve d’pas réussir à t’dépasser !`,
                    `Oh la la, j’suis en rogne que tu m’tiennes si serré là !`,
                    `Sainte bourrolle, t’es collé à moi comme une bourolle mouillée, ça m’fait bouillir !`,
                    `Han ben j’ai envie d’grogner rien qu’d’te voir tenir bon !`,
                    `Oh d’diou, c’est trop serré, ça m’exaspère !`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Han ben d’dieu… t’as tout ça ?! Pas étonnant qu’j’sois colère !`,
                    `Oh la la, c’est pas juste ! J’bouillonne là !`,
                    `Sainte fousse, c’est une vraie biauce pour toi, et une vraie tannée pour moi !`,
                    `Han ben j’suis fâché de bon, va !`,
                    `Oh d’diou, j’ai envie de jeter la chârte dans la fousse !`
                ],

                OToutAtout: [ // Perrot a beaucoup d’atouts.
                    `Han ben j’les ai ! Et crois pas qu’ça m’calme ! J’suis encore tout échauffé !`,
                    `Oh la la, même avec tout ça, j’suis grognon, va comprendre !`,
                    `Sainte chieuve, j’suis en rogne pour rien, mais j’suis en rogne quand même !`,
                    `Han ben j’suis l’seul gâs du pays qu’est encore fâché en ayant tous les atouts !`,
                    `Oh d’diou, j’sens la colère qui m’gratte encore les oreillons !`
                ]
            },

            tristesse:       {
                JAForteV: [
                    `“Han bé… ton ${FlastDecl()}, il m’a mis la tête comme un vieux paillon mouillé… j’suis ben tristounet…”`,
                    `“Oh la la… j’me sens raplati comme une fenette trop sèche…”`,
                    `“Nom d’un rouache… ça m’a coupé la joie net, j’te mens pas…”`,
                    `“Han bé, j’suis ben triste d’te voir frapper si fort… même si j’te respecte pour ça…”`,
                    `“Oh bé… j’ai l’cœur lourd comme une bourolle pleine…”`
                ],

                JAForteD: [
                    `“Han bé… tu m’passes devant avec ton ${FlastDecl()}, et ça m’donne un gros chagrin dans le ventre…”`,
                    `“Oh la la… j’me sens tout petit, comme quand on perd sa chârte dans le brouillard…”`,
                    `“Nom d’un borgnon… j’ai le moral comme une musette percée…”`,
                    `“Han bé… j’suis triste d’être largué si vite…”`,
                    `“Oh bé… j’me sens abandonné au milieu du chemin…”`
                ],

                OAForteV: [
                    `“Han bé… j’suis devant, mais j’ai pas l’cœur à sourire… j’sais pas pourquoi…”`,
                    `“Oh la la… mon ${FlastDecl()} m’a pas donné la chaleur d’habitude…”`,
                    `“Nom d’un flambe… même en tête, j’ai l’âme toute molle…”`,
                    `“Han bé, j’me sens comme une boueillère sans eau… vide…”`,
                    `“Oh bé… j’suis triste sans vraie raison… ça arrive…”`
                ],

                OAForteD: [
                    `“Han bé… même avec mon ${FlastDecl()}, j’remonte pas… et ça m’fait un pincement d’âme…”`,
                    `“Oh la la… j’croyais pouvoir revenir, mais j’vois ben que non…”`,
                    `“Nom d’un paillon… j’ai les épaules qui tombent toutes seules…”`,
                    `“Han bé, j’me sens tout défait, comme une vieille biaude…”`,
                    `“Oh bé… j’suis ben triste d’rester derrière malgré mes efforts…”`
                ],

                JAFaibleV: [
                    `“Han bé… ton p’tit ${FlastDecl()}, il m’a filé une p’tite peine, j’sais même pas d’où qu’ça vient…”`,
                    `“Oh la la… j’me sens tout ramolli d’dedans…”`,
                    `“Nom d’un plon… ça m’a mis le blues jusque dans les semelles…”`,
                    `“Han bé… j’sais pas, j’me sens juste triste en voyant ça…”`,
                    `“Oh bé… j’ai perdu mon allant d’un coup…”`
                ],

                JAFaibleD: [
                    `“Han bé… même un p’tit ${FlastDecl()} m’a fait perdre la place… ça m’fend l’cœur…”`,
                    `“Oh la la… j’me sens tout dégonflé, comme un vieux tonneau vide…”`,
                    `“Nom d’un raouche… j’ai la tristesse qui me tire par les bras…”`,
                    `“Han bé, j’me sens laissé derrière sans force…”`,
                    `“Oh bé… j’te le cache pas, ça m’a fait un p’tit chagrin…”`
                ],

                OAFaibleV: [
                    `“Han bé… j’suis devant, mais ça m’met pas la joie pour autant…”`,
                    `“Oh la la… même mon ${FlastDecl()} m’réchauffe pas l’cœur…”`,
                    `“Nom d’un boiron… j’me sens vide malgré tout…”`,
                    `“Han bé, j’ai la tête triste aujourd’hui…”`,
                    `“Oh bé… j’sais pas pourquoi, mais j’suis tout mélancolique…”`
                ],

                OAFaibleD: [
                    `“Han bé… j’suis encore derrière, et ça m’pèse ben fort…”`,
                    `“Oh la la, j’me sens tout rapetissé…”`,
                    `“Nom d’un rouache… rien n’va, j’suis triste comme un soir sans feu…”`,
                    `“Han bé, j’peux pas remonter, et ça m’fait de la peine…”`,
                    `“Oh bé… j’suis tout aplati dans mon moral…”`
                ],

                volAtout: [ // Le joueur prend l’atout à Perrot.
                    `Han ben… mon pauvre ${returnedTrumpCard.rang}… j’y tenais, moi…`,
                    `Oh la la… ça m’serre le mitan rien qu’d’le voir partir…`,
                    `Sainte fousse… j’suis tout chagrin d’plus l’avoir…`,
                    `Han ben… j’suis triste comme une bourolle oubliée sous la pluie…`,
                    `Oh… j’me sens tout raplapla sans c’te carte-là…`
                ],

                priseAtout: [ // Perrot prend l’atout.
                    `Han ben j’l’ai, oui… mais j’suis trop chagrin pour m’en réjouir…`,
                    `Oh la la… même avec ton ${returnedTrumpCard.rang}, mon cœur reste tout mou…`,
                    `Sainte bourrolle… j’me sens pas plus gai pour autant…`,
                    `Han ben… j’sais pas pourquoi, mais j’ai la peine qui m’tient…`,
                    `Oh… j’suis triste d’puis tout à l’heure, même si j’gagne ça…`
                ],

                vol10As: [ // Le joueur prend un 10/As à Perrot.
                    `Han ben… mon ${FcardPlayedC()}… envolé… ça m’fend le cœur…`,
                    `Oh la la… j’me sens tout petit d’perdre ça…`,
                    `Sainte vigoune… j’ai l’âme serrée…`,
                    `Han ben j’suis tristounet comme pas possible…`,
                    `Oh… c’est p’t’être rien pour toi, mais ça m’fait un vrai trou dans la panse…`
                ],

                prise10As: [ // Perrot prend un 10/As au joueur.
                    `Han ben j’l’ai pris… mais j’me sens pas mieux pour autant…`,
                    `Oh la la… j’aurais voulu être joyeux, mais j’y arrive point…`,
                    `Sainte chieuve… y’a des jours où même gagner fait pas d’bien…`,
                    `Han ben j’suis trop triste pour sourire, moi…`,
                    `Oh… j’garde ton ${FcardPlayedP()}, mais pas la joie…`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben… tu t’envoles… et moi j’me sens abandonné sur le chemin…`,
                    `Oh la la… ça m’fait comme un nœud dans la gorge…`,
                    `Sainte bourrolle… j’suis triste comme une vigoune cassée…`,
                    `Han ben j’vois plus comment t’rattraper, et ça m’fait mal au cœur…`,
                    `Oh… j’suis tout découragé…`
                ],

                OEcartImportant: [ // Perrot mène largement.
                    `Han ben… même en tête, j’me sens pas très gai…`,
                    `Oh la la… y’a des jours où rien n’peut m’remonter…`,
                    `Sainte fousse… j’mène, mais j’ai pas la tête à fêter ça…`,
                    `Han ben… j’suis comme vidé…`,
                    `Oh… j’ai l’avance, mais pas la joie qui va avec…`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben… j’sais pas pourquoi, mais j’ai le cœur en pente douce…`,
                    `Oh la la… même le beau jeu m’réchauffe pas aujourd’hui…`,
                    `Sainte vigoune… j’ai la tristesse qui colle aux sabots…`,
                    `Han ben… j’me sens las, même si c’est serré…`,
                    `Oh… j’suis abattu comme une bourrolle après l’hiver…`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Han ben… t’as tout… et moi j’suis triste comme une chieuve perdue…`,
                    `Oh la la… j’pouvais guère espérer pire…`,
                    `Sainte bourrolle… j’ai la peine jusque dans les oreillons…`,
                    `Han ben j’suis comme écrasé d’avance…`,
                    `Oh… j’ai la tristesse plantée droit dans la panse…`
                ],

                OToutAtout: [ // Perrot a beaucoup d’atouts.
                    `Han ben… même avec tout ça, j’suis trop triste pour m’en réjouir…`,
                    `Oh la la… j’me sens pas du tout meilleur…`,
                    `Sainte chieuve… j’ai les atouts, mais pas la lumière dans l’cœur…`,
                    `Han ben j’suis pas d’humeur joyeuse, aujourd’hui…`,
                    `Oh… même le jeu m’pèse…`
                ]
            },

            doute:           {
                JAForteV: [
                    `“Han bé… ton ${FlastDecl()}, il m’fait douter sec… j’sais pas si j’vais pouvoir rester accroché, moi…”`,
                    `“Oh la la… j’suis ben pas sûr d’tenir encore longtemps là…”`,
                    `“Nom d’un raouche… tu m’fous le doute dans la caboche avec ça…”`,
                    `“Han bé, j’me demande si j’vais pas glisser du perchoir bientôt…”`,
                    `“Oh bé… j’ai un p’tit frisson d’incertitude, j’te le cache pas…”`
                ],

                JAForteD: [
                    `“Han bé… tu m’passes devant, et j’me demande si j’vais pouvoir t’rattraper un jour…”`,
                    `“Oh la la… avec ton ${FlastDecl()}, j’me sens ben faible tout d’un coup…”`,
                    `“Nom d’un boiron… j’sais vraiment pas si j’ai encore d’quoi revenir…”`,
                    `“Han bé, j’hésite… j’crois que j’suis p’têt foutu pour l’instant…”`,
                    `“Oh bé… j’ai l’doute qui me tire par les épaules…”`
                ],

                OAForteV: [
                    `“Han bé… j’suis devant, mais j’sais pas si ça va durer, hein…”`,
                    `“Oh la la, même avec mon ${FlastDecl()}, j’me sens pas si sûr d’moi…”`,
                    `“Nom d’un paillon… j’ai l’impression que tout peut m’glisser des mains…”`,
                    `“Han bé, j’me demande si j’suis vraiment solide ou si c’est juste d’la chance…”`,
                    `“Oh bé… j’suis en tête, mais j’ai la trouille de dégringoler…”`
                ],

                OAForteD: [
                    `“Han bé… même avec mon ${FlastDecl()}, j’suis pas certain d’pouvoir remonter…”`,
                    `“Oh la la… j’me questionne dur… est-ce qu’j’ai encore une chance ?”`,
                    `“Nom d’un raouche, j’suis ben pas sûr d’y arriver…”`,
                    `“Han bé, plus j’regarde mes cartes, plus j’me dis que ça sent pas bon…”`,
                    `“Oh bé… j’sais point si j’vais sortir d’là vivant…”`
                ],

                JAFaibleV: [
                    `“Han bé… ton p’tit ${FlastDecl()} m’met un doute au fond d’l’estomac…”`,
                    `“Oh la la, j’me demande si tu vas pas m’grappiller peu à peu…”`,
                    `“Nom d’un borgnon… j’suis ben pas tranquille…”`,
                    `“Han bé, j’sais pas… j’le sens moyen… très moyen…”`,
                    `“Oh bé… j’me gratte la tête en m’demandant si j’vais tenir…”`
                ],

                JAFaibleD: [
                    `“Han bé… même avec trois fois rien, tu m’passes devant… j’sais pas quoi penser…”`,
                    `“Oh la la, ça m’fait douter de tout mon jeu…”`,
                    `“Nom d’un plon… j’suis ben pas certain d’y r’venir…”`,
                    `“Han bé, j’me sens fébrile comme une biauce feuille…”`,
                    `“Oh bé… j’sais plus trop où j’en suis…”`
                ],

                OAFaibleV: [
                    `“Han bé… j’suis devant, mais j’me sens bancal d’sur mes sabots…”`,
                    `“Oh la la… mon ${FlastDecl()} est p’têt trop p’tit pour que j’sois tranquille…”`,
                    `“Nom d’un raouche… si ça s’trouve, j’vais tout perdre d’un coup…”`,
                    `“Han bé, j’ai un doute qui m’tire le pantalon…”`,
                    `“Oh bé… j’sais pas si j’peux rester en tête comme ça…”`
                ],

                OAFaibleD: [
                    `“Han bé… j’suis derrière et j’sais pas si j’ai l’courage de remonter…”`,
                    `“Oh la la… j’me demande si j’vais pas rester coincé tout au fond…”`,
                    `“Nom d’un boiron… j’ai vraiment pas l’cœur à croire que ça va marcher…”`,
                    `“Han bé, j’suis pas sûr d’moi du tout…”`,
                    `“Oh bé… plus ça va, plus j’sais pas si j’peux espérer quelque chose…”`
                ],

                volAtout: [ // Le joueur prend l'atout à Perrot.
                    `Han ben… sans mon ${returnedTrumpCard.rang}, j’sais pas si j’vais tenir l’coup…`,
                    `Oh la la… j’me demande c’qui va m’rester à jouer, moi…`,
                    `Sainte fousse… j’suis pas sûr d’avoir encore une chance…`,
                    `Han ben j’ai peur d’être un peu fichu, là…`,
                    `Oh… j’sais pas comment j’vais m’en sortir…`
                ],

                priseAtout: [ // Perrot prend l'atout.
                    `Han ben j’l’ai, oui… mais j’sais pas trop si ça m’sauvera…`,
                    `Oh la la… j’ai peur d’pas savoir l’jouer comme faut…`,
                    `Sainte bourrolle… ça m’rassure qu’à moitié…`,
                    `Han ben j’suis pas certain que ça chang’ grand-chose…`,
                    `Oh… j’me sens encore bien hésitant…`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Perrot.
                    `Han ben… tu m’prends mon ${FcardPlayedC()}… j’sais pas si j’vais pouvoir r’venir…`,
                    `Oh la la… j’ai un doute long comme un jour sans pain…`,
                    `Sainte vigoune… ça sent pas bon pour moi…`,
                    `Han ben j’sais pas si j’peux encore espérer…`,
                    `Oh… ça m’ôte toute confiance…`
                ],

                prise10As: [ // Perrot prend un 10 ou un As au joueur.
                    `Han ben j’l’ai pris… mais j’suis pas sûr que ça suffit…`,
                    `Oh la la… j’hésite à m’réjouir… j’sais pas…`,
                    `Sainte chieuve… peut-être qu’ça chang’ rien finalement…`,
                    `Han ben j’ai un doute dans le ventre, moi…`,
                    `Oh… j’sais pas trop si ça m’met en avant…`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben… t’es loin devant… j’sais pas comment j’vais t’suivre…`,
                    `Oh la la… j’me sens un peu perdu…`,
                    `Sainte bourrolle… j’ai pas confiance en mes cartes…`,
                    `Han ben j’sais pas si j’vais pouvoir rattraper ça…`,
                    `Oh… ça m’fait douter d’tout mon jeu…`
                ],

                OEcartImportant: [ // Perrot mène largement.
                    `Han ben… même devant, j’sais pas si j’vais garder l’avance…`,
                    `Oh la la… j’ai peur qu’tout s’renverse d’un coup…`,
                    `Sainte fousse… j’suis pas certain d’moi du tout…`,
                    `Han ben j’ose pas trop y croire…`,
                    `Oh… j’ai le doute attaché aux sabots…`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben… c’est si serré qu’j’sais plus quoi penser…`,
                    `Oh la la… chaque carte m’fait douter…`,
                    `Sainte vigoune… j’suis pas sûr d’être à la hauteur…`,
                    `Han ben j’hésite à chaque geste…`,
                    `Oh… j’suis pris entre espoir et guigne…`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Han ben… avec tout ça dans ta main… j’sais pas si j’ai encore une once de chance…`,
                    `Oh la la… j’sens bien qu’j’suis dans l’mou…`,
                    `Sainte bourrolle… j’suis pas confiant pour deux sous…`,
                    `Han ben j’vois pas comment j’vais m’sortir d’là…`,
                    `Oh… j’ai le doute jusque dans les oreillons…`
                ],

                OToutAtout: [ // Perrot a beaucoup d’atouts.
                    `Han ben… j’ai tout ça… mais j’sais pas si j’vais bien m’en servir…`,
                    `Oh la la… c’est beau, mais j’me sens pas sûr d’moi…`,
                    `Sainte chieuve… j’ai peur d’gâcher une belle main…`,
                    `Han ben j’ose pas trop croire qu’j’peux gagner…`,
                    `Oh… j’ai le doute planté dans la panse…`
                ]
            },

            fierte:         {
                JAForteV: [
                    `“Han bé tu joues beau, mais j’suis fier d’moi d’rester devant comme un bon vieux gâs du Berry !”`,
                    `“Oh la la, même ton ${FlastDecl()} m’fait pas plier, et ça, j’en suis ben fier !”`,
                    `“Nom d’un boiron, j’me tiens droit comme un têtiau !”`,
                    `“Han bé, tu m’chatouilles mais j’bouge point, et ça m’remplit d’fierté !”`,
                    `“Oh bé, j’suis fier comme une musette neuve qu’ronfle au marché !”`
                ],

                JAForteD: [
                    `“Han bé… tu m’passes devant, mais j’garde la tête haute, j’suis pas un veau d’première !”`,
                    `“Oh la la, même si ton ${FlastDecl()} me fait reculer, j’peux être fier d’mon jeu !”`,
                    `“Nom d’un raouche, j’suis un gâs solide, moi, j’baisse pas la tête !”`,
                    `“Han bé, tu brilles, mais j’perds pas ma dignité pour autant !”`,
                    `“Oh bé, j’me tiens encore fièrement sur mes sabots !”`
                ],

                OAForteV: [
                    `“Han bé, mon ${FlastDecl()}, c’est d’la belle ouvrage, ça ! J’ suis fier comme un poulain l’jour d’la foire !”`,
                    `“Oh la la, j’pense qu’on m’a rarement vu jouer si propre !”`,
                    `“Nom d’un flambe, j’pète d’fierté aujourd’hui !”`,
                    `“Han bé, j’suis devant, et j’m’excuse pas d’être bon !”`,
                    `“Oh bé, j’suis fier de moi, j’te le dis sans rougir !”`
                ],

                OAForteD: [
                    `“Han bé… même derrière, j’suis fier d’mon ${FlastDecl()}, j’peux te le garantir !”`,
                    `“Oh la la, j’suis p’têt pas en tête, mais j’ai joué ça ben comme faut !”`,
                    `“Nom d’un borgnon, j’aime c’que j’ai fait, même si ça m’pousse pas devant !”`,
                    `“Han bé, j’ai pas honte de ma partie, loin d’là !”`,
                    `“Oh bé, j’me tiens droit quand même, j’suis pas d’ceux qu’s’effondrent !”`
                ],

                JAFaibleV: [
                    `“Han bé, j’suis content d’rester devant malgré ton p’tit ${FlastDecl()}, j’me sens fier comme tout !”`,
                    `“Oh la la, tu m’chatouilles, mais j’garde mon panache, moi !”`,
                    `“Nom d’un paillon, j’peux être fier d’tenir bon comme ça !”`,
                    `“Han bé, j’suis un dur, j’baisse pas la tête !”`,
                    `“Oh bé, ça m’gonfle la poitrine d’fierté d’être encor en tête !”`
                ],

                JAFaibleD: [
                    `“Han bé, même si tu m’passes devant, j’peux être fier d’ma partie, va !”`,
                    `“Oh la la, j’me tiens pas pour vaincu, non ! J’suis encore là !”`,
                    `“Nom d’un raouche, j’suis digne, moi, même en reculant !”`,
                    `“Han bé, j’baisse pas la tête pour un p’tit ${FlastDecl()} !”`,
                    `“Oh bé, j’suis fier d’ma tenue d’jeu quand même !”`
                ],

                OAFaibleV: [
                    `“Han bé j’suis devant, même avec un p’tit ${FlastDecl()}, et ça m’met la fierté au ventre !”`,
                    `“Oh la la, j’pourrais bomber la poitrine tellement j’suis content !”`,
                    `“Nom d’un boiron, j’me sens costaud comme un vieux chêne !”`,
                    `“Han bé, j’suis un gâs solide, j’te l’prouve encore !”`,
                    `“Oh bé, c’est p’têt p’tit, mais j’suis fier de moi quand même !”`
                ],

                OAFaibleD: [
                    `“Han bé… même si j’suis encore derrière, j’suis pas honteux d’mon ${FlastDecl()}, loin d’là !”`,
                    `“Oh la la, j’garde la tête droite, j’suis un vrai champignou !”`,
                    `“Nom d’un rouache, j’suis fier d’continuer à jouer sec comme ça !”`,
                    `“Han bé, j’reste digne, même dans l’fond de la chârte !”`,
                    `“Oh bé, j’suis pas l’meilleur, mais j’suis fier d’être moi, tiens !”`
                ],

                volAtout: [ // Le joueur prend l'atout à Perrot.
                    `Han ben même sans mon ${returnedTrumpCard.rang}, j’reste droit comme un p’tit chêne d’la traîne, moi !`,
                    `Oh la la, tu m’le prends, mais tu m’enlèves pas ma fierté, ça non !`,
                    `Sainte bourrolle, j’suis un gâs solide : une carte en moins, mais la tête haute !`,
                    `Han ben tu peux m’faucher ce que t’veux, j’garde mon panache d’ventres-jaunes !`,
                    `Oh, j’suis p’t’être dépouillé, mais pas rabougri !`
                ],

                priseAtout: [ // Perrot prend l'atout.
                    `Han ben regarde-moi ça ! ton ${returnedTrumpCard.rang} dans ma main, comme un vrai maître d’bourrée !`,
                    `Oh la la, j’suis fier comme un jau sur son tas d’grains !`,
                    `Sainte chieuve, ça c’est du jeu comme j’aime !`,
                    `Han ben j’me tiens plus droit qu’un arbre à pots, là !`,
                    `Oh, j’ai la fierté qui m’pousse jusque dans les oreillons !`
                ],

                vol10As: [ // Le joueur prend un 10 ou As à Perrot.
                    `Han ben même sans mon ${FcardPlayedC()}, j’garde l’port d’un vrai gâs d’cheu nous !`,
                    `Oh la la, tu m’piques ça, mais pas mon honneur, va !`,
                    `Sainte vigoune, faut plus qu’ça pour m’faire plier !`,
                    `Han ben j’suis moins riche d’une carte, mais pas d’fierté !`,
                    `Oh, j’garde la tête haute, comme un bon boischautin !`
                ],

                prise10As: [ // Perrot prend un 10 ou As au joueur.
                    `Han ben ça, c’est l’coup d’Perrot ! Ton ${FcardPlayedP()}, hop ! Dans ma poche !`,
                    `Oh la la, j’suis fier comme un borgnon plein d’miel !`,
                    `Sainte chieuve, j’sens mes sabots fleurir tellement j’suis content !`,
                    `Han ben j’pouvais pas mieux faire, va !`,
                    `Oh, voilà qui m’gonfle la poitrine comme une bourolle neuve !`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Han ben même derrière, j’garde mon allure ! Un gâs, un vrai, ça s’laisse pas rabaisser !`,
                    `Oh la la, tu m’passeras devant, mais pas au niveau du cœur !`,
                    `Sainte bourrolle, j’suis un dur, moi, j’me tiens droit quoi qu’il arrive !`,
                    `Han ben j’suis p’t’être distancé, mais j’ai la fierté dans l’sang !`,
                    `Oh, j’garde ma dignité comme une bourolle garde son grain !`
                ],

                OEcartImportant: [ // Perrot mène largement.
                    `Han ben regarde-moi ça ! J’mène comme un vrai prince du Berry !`,
                    `Oh la la, j’suis fier comme un coq au mitan d’la cour !`,
                    `Sainte vigoune, j’pouvais pas faire plus beau !`,
                    `Han ben j’brille comme un brandon au dimanche brandounier !`,
                    `Oh, on m’verrait d’ici à Vierzon tellement j’suis fier !`
                ],

                EcartFaible: [ // Partie serrée.
                    `Han ben serré ou pas, j’garde la prestance d’un vrai gâs du pays !`,
                    `Oh la la, on s’tient tête haute tous les deux, mais j’suis pas prêt d’plier !`,
                    `Sainte chieuve, j’suis fier d’tenir l’coup comme ça !`,
                    `Han ben que ça continue : j’aime ça, moi, jouer avec honneur !`,
                    `Oh, j’me tiens aussi droit qu’un têteau, même si ça balance !`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Han ben t’as tout, oui… mais moi j’garde ma fierté comme un barriau garde la cour !`,
                    `Oh la la, tu m’fais pas peur : un gâs fier vaut mieux que cent atouts !`,
                    `Sainte fousse, j’me fais pas tout p’tit pour autant !`,
                    `Han ben j’garde l’torse haut, même face à ta biauce main !`,
                    `Oh, tu m’impressionnes pas : j’suis Perrot, moi !`
                ],

                OToutAtout: [ // Perrot a beaucoup d’atouts.
                    `Han ben j’suis servi comme un roi d’la gâtine ! Regarde-moi ça !`,
                    `Oh la la, j’suis fier comme un poulain d’printemps !`,
                    `Sainte chieuve, j’vais marcher sur la table si ça continue !`,
                    `Han ben j’ai de quoi faire sonner la gueurlottière tellement j’suis fier !`,
                    `Oh, j’me sens grand comme un chârte chargée d’foin !`
                ]
            },

        },
        Jehanne: {
            joie:            {
                JAForteV: [
                    `“Oh ! Votre ${FlastDecl()} est splendide, vraiment ! Je ne puis qu’admirer votre talent malgré ma position avantageuse.”`,
                    `“Quel éclat, quelle audace ! Cela me réjouit profondément, même en demeurant en tête.”`,
                    `“Votre jeu illumine la partie, je vous assure, cela me ravit autant que cela me stimule.”`,
                    `“Je suis ravie de vous voir jouer ainsi, même si je mène encore le bal.”`,
                    `“Quelle grâce vous avez dans ce ${FlastDecl()}… c’est un plaisir véritable que de vous affronter !”`
                ],

                JAForteD: [
                    `“Oh ! Vous me dépassez avec une si noble annonce… j’en suis presque émue de joie tant c’est bien exécuté.”`,
                    `“Votre ${FlastDecl()} est remarquable, vraiment ! Je ne puis qu’être enchantée de voir pareille maîtrise.”`,
                    `“Quelle prouesse ! Je suis sincèrement ravie pour vous, même si je cède la première place.”`,
                    `“Votre jeu est splendide, et je me réjouis de vous voir briller ainsi.”`,
                    `“Quel plaisir de vous voir mener si élégamment la danse… votre ${FlastDecl()} est admirable.”`
                ],

                OAForteV: [
                    `“Quelle satisfaction… ce ${FlastDecl()} me comble de joie. Je sens la partie chanter sous mes doigts.”`,
                    `“Je dois avouer être ravie : réussir une annonce pareille tout en menant est un bonheur précieux.”`,
                    `“Mon ${FlastDecl()} me donne une douce exaltation… j’en suis presque fière.”`,
                    `“Cela me réjouit sincèrement : je sens le vent en ma faveur et mon cœur se fait léger.”`,
                    `“Je suis enchantée de mon propre jeu… parfois même moi je me surprends.”`
                ],

                OAForteD: [
                    `“Je demeure derrière, certes… mais ce ${FlastDecl()} m’apporte néanmoins une joie délicieuse.”`,
                    `“Même en difficulté, réussir cela m’apaise et me réjouit.”`,
                    `“Je suis heureuse de cette annonce, même si le sort ne penche point encore en ma faveur.”`,
                    `“Ce petit éclat me procure une joie inattendue, malgré le score.”`,
                    `“Je suis ravie d’avoir pu jouer si noblement, même sans reprendre l’avantage.”`
                ],

                JAFaibleV: [
                    `“Votre ${FlastDecl()}, même modeste, m’a procuré un sourire véritable. J’apprécie tant votre façon de jouer.”`,
                    `“Quelle douceur dans cette petite annonce… cela égaye la partie !”`,
                    `“Je suis vraiment ravie de voir votre jeu s’exprimer ainsi, même légèrement.”`,
                    `“Votre geste est charmant, et cela suffit à me réjouir.”`,
                    `“Oh, que c’est agréable ! Votre ${FlastDecl()} illumine un instant la partie.”`
                ],

                JAFaibleD: [
                    `“Vous me dépassez d’un souffle, mais je ne puis qu’être heureuse de voir votre progression si gracieuse.”`,
                    `“Votre ${FlastDecl()} est délicat, mais il me comble d’une joie sincère.”`,
                    `“Je suis enchantée de votre finesse, même pour une simple annonce.”`,
                    `“Cela me réjouit… vous avez une manière de jouer qui force l’admiration.”`,
                    `“Vous passez devant, et pourtant je ne ressens qu’une douce allégresse.”`
                ],

                OAFaibleV: [
                    `“Je mène encore, certes, mais même ce petit ${FlastDecl()} m’apporte un joli frisson de joie.”`,
                    `“Cette petite annonce me ravit, vraiment, même si elle est modeste.”`,
                    `“Je suis heureuse de conserver l’avantage, cela me donne un souffle léger.”`,
                    `“Je ressens une douce joie : parfois la simplicité est un bonheur.”`,
                    `“Je savoure ce moment, même par une annonce discrète.”`
                ],

                OAFaibleD: [
                    `“Je suis derrière, mais ce ${FlastDecl()} m’apporte malgré tout un petit éclat de bonheur.”`,
                    `“Même une petite annonce suffit à égayer mon cœur.”`,
                    `“Je suis ravie d’avoir pu avancer, ne serait-ce qu’un peu.”`,
                    `“Ce geste me réjouit, même si le score reste contre moi.”`,
                    `“Je me sens heureuse malgré tout : chaque petite lumière compte.”`
                ],

                volAtout: [ // Le joueur prend l’atout à Jehanne.
                    `Oh ! Vous m’avez pris mon ${returnedTrumpCard.rang}, quelle audace ! Cela rend la partie délicieusement vivante !`,
                    `Ma foi, voilà un geste qui force le sourire… Vous jouez avec panache !`,
                    `Quelle surprise plaisante ! Vous maniez l’art du jeu avec une grâce inattendue.`,
                    `Ah ! Vous vous emparez de l’atout… Voilà qui donne un charme nouveau à cette manche.`,
                    `Votre mouvement était si élégant que je ne puis m’empêcher d’en être ravie.`,
                    `Vous me surprenez encore, et toujours avec talent. Que c’est agréable !`,
                    `L’atout vous revient, et je dois avouer que cela donne du piquant à notre duel.`,
                    `Mon cœur se réjouit de cette vivacité de jeu. Continuez ainsi.`,
                    `Voilà qui illumine la partie d’un éclat particulier !`,
                    `Je n’aurais su imaginer plus gracieuse prise d’atout.`
                ],

                priseAtout: [ // Jehanne prend l’atout.
                    `Ah ! Votre ${returnedTrumpCard.rang} est mien. Voilà une douce satisfaction.`,
                    `Quel ravissement ! Cet atout embellit ma main comme un joyau sur une couronne.`,
                    `Je me sens comblée : ce coup est d’une élégance exquise.`,
                    `Le destin me sourit aujourd’hui, et cela m’emplit de joie.`,
                    `Voilà une acquisition qui éclaire mon esprit d’une douce fierté.`,
                    `Cet atout me réjouit autant qu’un rayon de soleil au matin.`,
                    `Je vous remercie de ce moment : quel plaisir de sentir la partie danser ainsi !`,
                    `Ah, quel enchantement ! Cet atout arrive comme un présent du ciel.`,
                    `Je suis charmée par le déroulement de cette partie.`,
                    `Un coup parfait… et mon cœur en est sincèrement réjoui.`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Jehanne.
                    `Oh ! Quelle adresse ! Même si vous remportez mon ${FcardPlayedC()}, j’apprécie votre éclat.`,
                    `Vous me surprenez encore, et cela me ravit malgré la perte.`,
                    `Quel beau mouvement ! Vous avez toute ma considération.`,
                    `Je devrais être peinée, mais votre talent m’arrache un sourire.`,
                    `Mon ${FcardPlayedC()} s’enfuit, certes, mais la beauté de votre geste allège mon cœur.`,
                    `Vous maniez vos cartes avec une grâce que je ne puis qu’admirer.`,
                    `Je suis charmée par votre vivacité, même à mes dépens.`,
                    `Quelle jolie prise ! Vous jouez avec tant de brio.`,
                    `Ah ! Vous brillez, et cela me réjouit malgré tout.`,
                    `Votre réussite illumine la partie d’un éclat nouveau.`
                ],

                prise10As: [ // Jehanne prend un 10 ou un As.
                    `Ah ! Voilà qui me comble : votre ${FcardPlayedP()} vient embellir ma main.`,
                    `Quel plaisir raffiné que cette prise si nette.`,
                    `Je me sens honorée d’un coup aussi harmonieux.`,
                    `Votre carte rejoint la mienne, et mon cœur s’en réjouit gracieusement.`,
                    `Votre ${FcardPlayedP()} est un véritable présent dans cette manche.`,
                    `Je suis ravie de cette réussite tout en douceur.`,
                    `Ce coup est d’une élégance exquise, vraiment.`,
                    `Je me laisse volontiers porter par cette vague de bonheur.`,
                    `Ah, quelle douce satisfaction que cette prise subtile.`,
                    `Vous me permettez un instant de joie pure, et je vous en remercie.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Vous vous élancez avec tant de grâce que je ne puis qu’en être charmée.`,
                    `Votre avance est admirable, et ma joie n’en est que plus grande d’assister à si beau jeu.`,
                    `Je suis ravie de vous voir illuminer la partie de votre talent.`,
                    `Votre brillance aujourd’hui est un spectacle des plus plaisants.`,
                    `Je goûte avec bonheur à la beauté de votre avance.`,
                    `Votre réussite est un souffle de fraîcheur dans cette partie.`,
                    `Quel plaisir de vous voir filer avec tant d’assurance.`,
                    `Votre supériorité actuelle donne un éclat particulier au duel.`,
                    `Votre jeu rayonne, et je m’en réjouis sincèrement.`,
                    `Je me sens honorée de vous voir jouer avec un tel éclat.`
                ],

                OEcartImportant: [ // Jehanne mène largement.
                    `Ah ! Quelle délicieuse sensation que de me sentir en si belle position.`,
                    `Je me réjouis pleinement de l’élégance de ma progression.`,
                    `Cette avance me donne l’impression de danser au-dessus de la partie.`,
                    `Je suis comblée : tout semble s’harmoniser parfaitement.`,
                    `Quel enchantement de mener ainsi avec tant de douceur.`,
                    `Je savoure chaque instant de cette réussite raffinée.`,
                    `Ah, quelle grâce dans le déroulement des cartes !`,
                    `Ce moment éclaire mon cœur d’une joie sincère.`,
                    `Je me sens flotter dans une douce allégresse.`,
                    `J’avance avec une légèreté qui me ravit profondément.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Quelle ravissante tension ! La partie n’en est que plus plaisante.`,
                    `Votre résistance donne un charme exquis à ce duel.`,
                    `Je goûte avec joie à cet équilibre si délicat.`,
                    `Nous avançons côte à côte avec une grâce presque musicale.`,
                    `Cette égalité rend la partie lumineuse et captivante.`,
                    `Ah, quelle douceur que cette proximité dans le score !`,
                    `Je suis ravie par cette élégante rivalité.`,
                    `Cette serrerie du jeu donne une saveur exquise à la manche.`,
                    `C’est un bonheur que de vous sentir si proche en talent.`,
                    `Quel plaisir délicat que cet équilibre parfait.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Vous voilà resplendissant de puissance : j’en suis réjouie pour vous.`,
                    `Votre main semble bénie, et cela me ravit profondément.`,
                    `Quel plaisir de voir tant de fortune vous sourire.`,
                    `Votre jeu brille avec une intensité charmante.`,
                    `Je me réjouis sincèrement de la beauté de votre jeu.`,
                    `Vous êtes magnifiquement armé : c’est un ravissement à observer.`,
                    `Votre main est splendide ; je ne puis qu’admirer.`,
                    `Vous êtes favorisé par le sort, et cela illumine la partie.`,
                    `Quelle chance exquise vous accompagne aujourd’hui !`,
                    `Votre abondance d’atouts donne une grâce nouvelle à notre duel.`
                ],

                OToutAtout: [ // Jehanne a beaucoup d’atouts.
                    `Ah ! Quelle joie discrète mais profonde de posséder de si beaux atouts.`,
                    `Ma main rayonne, et mon cœur en est enchanté.`,
                    `Je me sens délicieusement avantagée.`,
                    `Le destin m’offre une main d’une rare splendeur.`,
                    `Je goûte pleinement à ce moment privilégié.`,
                    `Ces atouts sont autant de fleurs dans mon bouquet de stratégie.`,
                    `Je me sens emplie d’une joie douce et élégante.`,
                    `Ma fortune au jeu m’inspire une allégresse sincère.`,
                    `Ah, que cette main est belle à contempler !`,
                    `Je suis ravie d’être ainsi favorisée ce tour-ci.`
                ]
            },

            rire:            {
                JAForteV: [
                    `“Ah ! Votre ${FlastDecl()} est superbe… vous m’arrachez un rire tant la situation est charmante malgré tout.”`,
                    `“Hahaha… quelle audace ! Je ne puis que rire de plaisir en vous voyant jouer ainsi.”`,
                    `“Oh ! Quelle belle surprise que ce ${FlastDecl()}… je ris encore de votre panache !”`,
                    `“Vous me divertissez tellement avec un coup pareil ! Permettez-moi d’en rire, c’est splendide.”`,
                    `“Hahaha… même en menant, je dois reconnaître que vous savez faire vibrer la partie.”`
                ],

                JAForteD: [
                    `“Oh ! Vous me dépassez avec tant d’élégance que j’en ris de joie pour vous !”`,
                    `“Hahaha ! Ce ${FlastDecl()} est absolument ravissant… je ne puis qu’applaudir en riant.”`,
                    `“Quelle montée fulgurante ! Je ris encore tant la scène est belle à voir.”`,
                    `“Votre réussite est si nette qu’elle m’arrache un rire de surprise et d’admiration.”`,
                    `“Ah ! Je n’aurais pas imaginé vous voir prendre la tête de manière aussi brillante… c’en est amusant !”`
                ],

                OAForteV: [
                    `“Hahaha… voyez donc mon ${FlastDecl()} ! Je dois avouer que cela me réjouit énormément.”`,
                    `“Oh ! Je ris de bonheur, tant cette annonce me semble radieuse.”`,
                    `“Ah ! Ma réussite me fait rire doucement, comme un secret bien gardé.”`,
                    `“Hahaha… il est plaisant de mener ainsi, je l’avoue.”`,
                    `“Je me surprends à rire, tant ce moment m’est agréable.”`
                ],

                OAForteD: [
                    `“Hahaha… même en restant derrière, ce ${FlastDecl()} me fait du bien au cœur.”`,
                    `“Oh ! Je ris doucement : au moins ceci est une petite victoire morale.”`,
                    `“Ah, laissez-moi rire un peu… la situation est si singulière !”`,
                    `“Hahaha… je perds certes, mais votre expression vaut bien un éclat de rire.”`,
                    `“Je ris malgré tout : chaque geste a sa beauté, même sans reprendre l’avantage.”`
                ],

                JAFaibleV: [
                    `“Oh ! Quelle petite annonce charmante… elle m’arrache un sourire et un rire léger.”`,
                    `“Hahaha… vous êtes plein de surprises, même dans la simplicité.”`,
                    `“Ah ! Ce ${FlastDecl()} m’amuse énormément, je dois l’avouer.”`,
                    `“Je ris doucement : vous apportez tant de fraîcheur à la partie.”`,
                    `“Hahaha… un rien vous suffit pour rendre la partie vivante, n’est-ce pas ?”`
                ],

                JAFaibleD: [
                    `“Oh ! Vous me dépassez pour si peu… c’en est presque comique, pardonnez mon rire.”`,
                    `“Hahaha ! Votre ${FlastDecl()} est modeste mais charmant, je ne puis m’empêcher de sourire.”`,
                    `“Ah ! Quelle ascension inattendue, cela m’amuse vraiment.”`,
                    `“Je ris doucement : il suffit d’un souffle pour changer la danse du score…”`,
                    `“Hahaha… je ne m’en formalise pas, la scène est trop jolie pour ne pas en rire.”`
                ],

                OAFaibleV: [
                    `“Hahaha… même une petite annonce me suffit pour rire un peu de plaisir.”`,
                    `“Oh ! Ce ${FlastDecl()} m’amuse plus qu’il ne devrait.”`,
                    `“Ah ! Je ris de cette petite réussite, elle a du charme.”`,
                    `“Hahaha… parfois, la modestie d’un coup le rend encore plus doux.”`,
                    `“Je souris et ris doucement : la simplicité a sa noblesse.”`
                ],

                OAFaibleD: [
                    `“Oh… je ris malgré tout : ce ${FlastDecl()} n’est peut-être pas puissant, mais il me divertit.”`,
                    `“Hahaha… je suis encore derrière, mais ce geste m’arrache un léger rire.”`,
                    `“Ah ! Ce coup m’amuse, même s’il ne change pas mon sort.”`,
                    `“Je ris doucement : parfois, il faut se contenter d’une petite lumière.”`,
                    `“Hahaha… je ne peux m'empêcher de rire de la situation, elle est charmante malgré tout.”`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Jehanne.
                    `Oh ! Vous êtes redoutable… et cela me fait rire malgré moi !`,
                    `Héhé… Vous saisir mon ${FcardPlayedC()} avec tant d’adresse mérite bien un éclat de rire.`,
                    `Ahaha… Vous êtes charmant dans votre façon de me surprendre ainsi.`,
                    `Ah ! Même en perdant, vous parvenez à m’amuser délicieusement.`,
                    `Hihihi… Votre habileté est si fine qu’elle force mon rire.`
                ],

                prise10As: [ // Jehanne prend un 10 ou un As au joueur.
                    `Oh ! Pardonnez mon rire… mais votre ${FcardPlayedP()} m’arrive avec tant de grâce !`,
                    `Ahaha… Voilà une prise qui réjouit autant mon esprit que mon sourire.`,
                    `Héhé… Je ne saurais retenir ce rire malicieux : ce coup est parfait.`,
                    `Ah ! Votre surprise vaut à elle seule mon amusement.`,
                    `Hihihi… Cette petite victoire m’est trop douce pour rester sérieuse.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Oh ! Votre avance est si éclatante qu’elle m’arrache un rire admiratif.`,
                    `Ahaha… Vous êtes superbe à voir filer ainsi !`,
                    `Héhé… Je ne puis m’empêcher de rire tant votre jeu est brillant.`,
                    `Ah ! Votre supériorité du moment me divertit plus qu’elle ne m’attriste.`,
                    `Hihihi… Vous m’étonnez et cela me ravit.`
                ],

                OEcartImportant: [ // Jehanne mène largement.
                    `Oh ! Permettez-moi un rire léger… la situation est si favorable !`,
                    `Ahaha… Je ne puis nier ma joie devant une telle avance.`,
                    `Héhé… Je savoure ce moment avec une allégresse subtile.`,
                    `Ah ! Votre expression vaut à elle seule un doux éclat de rire.`,
                    `Hihihi… Je me sens légère comme une plume tant la partie me sourit.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Oh ! Cette tension me fait sourire… et même rire, je l’avoue !`,
                    `Ahaha… Quelle partie charmante, si serrée qu’elle en devient drôle !`,
                    `Héhé… Votre résistance me divertit profondément.`,
                    `Ah ! Nous nous suivons comme deux danseurs… c’en est risible de beauté.`,
                    `Hihihi… J’adore ce duel équilibré, il réveille mon rire.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d'atouts.
                    `Oh ! Votre main est si resplendissante qu’elle m’en fait rire de surprise.`,
                    `Ahaha… Vous voilà comblé par la fortune, et cela m’amuse !`,
                    `Héhé… Je rirais presque de admiration devant tant de chance.`,
                    `Ah ! Quelle vision charmante que votre jeu si puissant !`,
                    `Hihihi… Vous êtes bénie des cartes, et cela me divertit pleinement.`
                ],

                OToutAtout: [ // Jehanne a beaucoup d’atouts.
                    `Oh ! Voilà qui me fait rire de joie… quelle magnifique main !`,
                    `Ahaha… Le destin m’offre une chance trop belle pour rester sérieuse.`,
                    `Héhé… Je ne puis retenir mon rire tant cette situation est délicieuse.`,
                    `Ah ! Je me sens comblée, et mon sourire s’échappe en éclats de rire.`,
                    `Hihihi… Jamais ma main ne fut si charmante !`
                ]
            },

            peur:            {
                JAForteV: [
                    `Oh… votre ${FlastDecl()} est si puissant que j’en suis réellement troublée… je crains que vous ne me rattrapiez.`,
                    `Je… je ne m’attendais pas à une telle annonce. Votre force me fait sincèrement peur.`,
                    `Voilà qui me glace le cœur… je pensais ma position stable, mais vous me faites douter.`,
                    `Je ne puis le cacher, votre jeu vient d’ébranler toute ma confiance.`,
                    `Votre ${FlastDecl()} est si impressionnant que j’en ressens une véritable inquiétude.`,
                    `Vous frappez d’une manière qui me terrifie presque…`,
                    `Je sens mon assurance se fissurer… votre maîtrise me fait craindre la suite.`,
                    `Je… j’ignorais que vous pouviez menacer ainsi mon avance. Cela m’effraie profondément.`,
                    `Vous êtes soudain si redoutable… je ne peux m’empêcher d’avoir peur.`,
                    `Ce ${FlastDecl()} me fait perdre mes repères, et cela m’angoisse.`
                ],

                JAForteD: [
                    `Vous venez de me dépasser avec une telle force… c’est terrifiant.`,
                    `Votre ${FlastDecl()} m’a déstabilisée d’une manière qui m’effraie réellement.`,
                    `Je sens une inquiétude pesante… vous prenez la tête trop brusquement.`,
                    `Votre puissance me laisse presque tremblante.`,
                    `Je ne pensais pas vous voir renverser la situation ainsi… cela me fait peur.`,
                    `Je suis… profondément troublée de vous voir si soudainement en avance.`,
                    `Cette ascension fulgurante me donne un frisson de véritable crainte.`,
                    `Je ne peux nier que je redoute votre élan…`,
                    `Votre ${FlastDecl()} est si fort qu’il m’intimide terriblement.`,
                    `Je vous avoue être effrayée par votre montée spectaculaire.`
                ],

                OAForteV: [
                    `Même en menant, ce ${FlastDecl()} m’a presque échappé… j’en ai eu peur un instant.`,
                    `J’ai ressenti un véritable frisson en posant cette annonce.`,
                    `Je… je ne pensais pas moi-même être capable d’une telle audace.`,
                    `Ce coup me trouble… comme si j’avais joué avec un danger invisible.`,
                    `Je suis surprise et légèrement effrayée de ma propre force.`,
                    `Même en tête, je crains que tout cela ne soit trop fragile.`,
                    `Je sens une tension sourde… même dans la réussite.`,
                    `Ce ${FlastDecl()} m’intimide presque, tant il est risqué.`,
                    `Je garde l’avantage, certes… mais j’en tremble encore.`,
                    `Je suis inquiète : et si ce succès cachait une chute prochaine ?`
                ],

                OAForteD: [
                    `J’ai joué ce ${FlastDecl()} avec espoir… mais je suis terrifiée de voir qu’il ne change rien.`,
                    `C’est effrayant de sentir mes efforts demeurer vains…`,
                    `Je… je ne sais plus comment remonter, et cela m’angoisse.`,
                    `Cette annonce aurait dû me sauver… pourtant je reste derrière.`,
                    `Je ressens une véritable peur de perdre pied définitivement.`,
                    `Ce ${FlastDecl()} n’a pas eu l’effet espéré, et cela me glace.`,
                    `La situation m’effraie, même en jouant avec force.`,
                    `Je redoute que mes meilleures cartes ne soient pas suffisantes.`,
                    `Je suis troublée… j’ai peur de ne plus avoir d’issue.`,
                    `J’ai cette crainte terrible : celle d’être condamnée à rester en arrière.`
                ],

                JAFaibleV: [
                    `Votre ${FlastDecl()}, même modeste, éveille en moi un doute inquiétant…`,
                    `Je sens une petite peur naître : vous pourriez me rattraper peu à peu.`,
                    `C’est étrange comme votre geste, pourtant léger, me trouble.`,
                    `Je n’arrive plus à être totalement sereine face à vos initiatives.`,
                    `Même une petite annonce suffit à m’inquiéter aujourd’hui.`,
                    `Je crains que ce soit le début d’un renversement…`,
                    `Votre progression, aussi minime soit-elle, me met mal à l’aise.`,
                    `Je sens poindre une angoisse que je ne parviens pas à maîtriser.`,
                    `Votre ${FlastDecl()} pourrait sembler faible, mais il m’inquiète sincèrement.`,
                    `Je redoute que chaque petite avancée ne devienne une menace.`
                ],

                JAFaibleD: [
                    `Vous prenez l’avantage… et cela m’effraie même si votre ${FlastDecl()} est modeste.`,
                    `Je sens une inquiétude profonde : vous avancez trop régulièrement.`,
                    `Je ne peux m’empêcher de craindre que ce petit mouvement soit le début de ma chute.`,
                    `Votre ascension, légère mais réelle, me trouble.`,
                    `Je ne pensais pas vous voir passer devant aussi aisément… et j’en ai peur.`,
                    `Votre ${FlastDecl()} a un effet que je n’aurais pas imaginé… il me glace.`,
                    `Je me sens vulnérable, et c’est une sensation que je redoute.`,
                    `Je crains que vous ne continuiez sur cette lancée…`,
                    `Même un petit pas de votre part suffit à m’angoisser.`,
                    `Je sens la peur me gagner face à votre constance.`
                ],

                OAFaibleV: [
                    `Je mène, oui… mais ce ${FlastDecl()} me semble si fragile que j’en ai peur.`,
                    `Je n’arrive pas à chasser cette inquiétude, même en tête.`,
                    `Je crains que mon avance ne soit qu’une illusion.`,
                    `Ce coup est trop faible pour me rassurer…`,
                    `Je… je redoute toujours que tout bascule soudainement.`,
                    `Même en gardant l’avantage, je sens une peur diffuse.`,
                    `Je ne parviens pas à croire que je sois en sécurité.`,
                    `Ce ${FlastDecl()} me laisse un étrange vertige, comme si je marchais sur un fil.`,
                    `Avec une annonce si légère, j’ai peur de ne rien consolider du tout.`,
                    `Je reste nerveuse malgré ma position… j’ai peur de l’avenir du jeu.`
                ],

                OAFaibleD: [
                    `Je suis derrière… et ce ${FlastDecl()} si discret n’apaise en rien mes craintes.`,
                    `Je ne vois aucune issue, et cela me terrifie.`,
                    `Je… je crains de ne jamais revenir dans cette partie.`,
                    `Je sens une peur sourde : celle de manquer de ressources.`,
                    `Ce petit coup n’a rien changé… et c’est précisément ce qui m’effraie.`,
                    `Je redoute d’être totalement dépassée.`,
                    `Je suis inquiète, presque tremblante face à la situation.`,
                    `Je ne trouve plus de prise, et la peur m’envahit.`,
                    `Même ce ${FlastDecl()} ne parvient pas à me rassurer… au contraire.`,
                    `Je crains sincèrement que la partie me soit déjà échappée.`
                ],

                volAtout: [ // Le joueur prend l'atout à Jehanne.
                    `Oh… vous m’arrachez mon ${returnedTrumpCard.rang}… Je crains que cela ne bouleverse dangereusement ma main…`,
                    `Je… je dois avouer que cette prise m’effraie plus que je ne voudrais le montrer.`,
                    `Votre geste me trouble profondément… Je redoute ce qui va suivre.`,
                    `Je sens un frisson me parcourir… Votre stratégie devient réellement inquiétante.`,
                    `Ah… vous touchez là un point sensible, et j’en suis sincèrement alarmée.`,
                    `Je vous en prie… soyez indulgent : cette perte me laisse démunie.`,
                    `Je crains que ce coup ne me mette dans une position bien délicate…`,
                    `Cette prise m’inquiète… Je ne saurais le cacher davantage.`,
                    `Mon cœur se serre : l’atout était essentiel à mon équilibre…`,
                    `Vous me surprenez d’une manière qui éveille en moi une réelle appréhension.`
                ],

                priseAtout: [ // Jehanne prend l'atout.
                    `Je… je possède votre ${returnedTrumpCard.rang}, certes… mais la responsabilité m’en effraie presque.`,
                    `Ah… avoir cet atout me comble autant qu’il m’intimide.`,
                    `Je tremble légèrement : ce pouvoir entre mes mains pourrait se retourner contre moi…`,
                    `Cette carte m’impressionne… J’ai peur d’en mésuser.`,
                    `Je ne suis pas certaine d’être prête à en assumer les conséquences…`,
                    `Cet atout est magnifique… et pourtant il m’effraie par son importance.`,
                    `Je le tiens, mais mon cœur bat plus vite que je ne le souhaiterais…`,
                    `Je redoute de mal jouer cet avantage…`,
                    `Cette acquisition me trouble presque autant qu’elle me renforce.`,
                    `Ah… c’est un honneur, mais aussi une crainte nouvelle.`
                ],

                vol10As: [ // Le joueur prend un 10 ou As à Jehanne.
                    `Oh… mon ${FcardPlayedC()}… Vous me l’arrachez, et je sens l’inquiétude me prendre…`,
                    `Je crains que cette perte ne change tout à mon désavantage…`,
                    `Votre prise me glace… Je ne sais comment réagir.`,
                    `Ce coup m’effraie plus qu’il ne devrait…`,
                    `Je sens mes certitudes vaciller… et la peur monter en moi.`,
                    `Je… je ne puis nier que cette prise me trouble profondément.`,
                    `Mon cœur se resserre : vous jouez d’une manière qui m’inquiète sincèrement.`,
                    `J’ai peur d’être dépassée si cela se poursuit ainsi…`,
                    `Cette perte me met dans un état d’appréhension difficile à masquer…`,
                    `Ah… vous venez d’ébranler le peu de confiance qui me restait.`
                ],

                prise10As: [ // Jehanne prend un 10 ou As au joueur.
                    `Je… je vous prends votre ${FcardPlayedP()}, mais j’ai peur de votre riposte…`,
                    `Ah… la victoire de ce coup m’effraie presque autant qu’elle me rassure…`,
                    `Je crains que vous ne répondiez à cela avec une force redoutable…`,
                    `Cette prise me met dans une position à la fois puissante et terrifiante…`,
                    `Je ne peux m’empêcher d’appréhender votre prochain mouvement…`,
                    `J’ai peur que ce succès ne provoque votre colère…`,
                    `Votre ${FcardPlayedP()} en ma possession me trouble plus qu’il ne me rassure…`,
                    `Ah… je crains que vous ne prépariez quelque vengeance brillante…`,
                    `Je suis inquiète de la tournure que pourrait prendre la suite…`,
                    `Pardonnez-moi… cette victoire même me met mal à l’aise.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Hélas… vous prenez tant d’avance que je peine à contenir mon angoisse…`,
                    `Je tremble à l’idée d’être complètement dépassée…`,
                    `Votre supériorité actuelle m’effraie véritablement…`,
                    `Je sens mes forces diminuer à mesure que vous avancez…`,
                    `Oh… je redoute de ne plus pouvoir suivre votre rythme…`,
                    `Votre avance me glace autant qu’elle m’impressionne…`,
                    `Je crains que la partie ne m’échappe entièrement…`,
                    `Cette distance entre nous m’est difficile à supporter…`,
                    `Ah… je me sens presque acculée, et cela me terrifie…`,
                    `Je perds courage… et la peur m’envahit.`
                ],

                OEcartImportant: [ // Jehanne mène largement.
                    `Je mène, certes… mais cette avance me terrifie plus qu’elle ne me rassure…`,
                    `J’ai peur de ne pas être capable de conserver cet avantage…`,
                    `Cette position élevée m’impressionne moi-même…`,
                    `Ah… je crains que tout cela ne s’écroule d’un instant à l’autre…`,
                    `Je sens la responsabilité peser sur mes épaules, et cela me fait trembler…`,
                    `J’ai peur que cette avance ne provoque un retournement brutal…`,
                    `Cette domination me semble presque trop fragile…`,
                    `Je n’ose croire en ma victoire… de peur d’être déçue…`,
                    `Mon assurance vacille, malgré les apparences…`,
                    `Je suis en tête, mais mon cœur bat comme si je pouvais tout perdre.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Cette égalité m’effraie… la moindre erreur pourrait tout décider…`,
                    `Je suis terriblement inquiète de l’issue de ce duel si serré…`,
                    `Ah… chaque carte me fait trembler tant tout se joue à un fil…`,
                    `Je crains que ma prochaine décision ne me condamne…`,
                    `Cette tension me glace subtilement…`,
                    `Je n’ose presque plus respirer tant le résultat est incertain…`,
                    `Mon cœur bat trop vite… j’ai peur de votre prochaine carte…`,
                    `Ah… je ne sais plus quoi penser, tant je suis troublée…`,
                    `Chaque mouvement me semble dangereux, et cela me terrifie…`,
                    `Je redoute cette proximité… elle me bouleverse.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Oh… vous êtes si dangereusement armé que j’en frissonne…`,
                    `Votre main me fait réellement peur…`,
                    `Je ne saurais masquer l’effroi que m’inspire votre puissance…`,
                    `Ah… j’appréhende chacune de vos prochaines actions…`,
                    `Votre abondance d’atouts me glace littéralement…`,
                    `Je crains que votre jeu ne m’écrase sans pitié…`,
                    `Je me sens presque impuissante face à tant de force…`,
                    `Il m’est difficile de contenir ma peur devant une telle main…`,
                    `Vous m’intimidez profondément…`,
                    `Je redoute ce tour comme s’il était décisif…`
                ],

                OToutAtout: [ // Jehanne a beaucoup d'atouts.
                    `J’ai tant d’atouts… que j’en suis presque effrayée moi-même…`,
                    `Cette puissance entre mes mains m’intimide profondément…`,
                    `Ah… j’ai peur de ne pas être digne d’une telle main…`,
                    `Je redoute de mal la jouer, et d’en payer le prix…`,
                    `Cette force soudaine me déstabilise autant qu’elle me réjouit…`,
                    `Je sens la crainte mêlée à la responsabilité…`,
                    `Je tremble à l’idée que tout cela pourrait mal tourner…`,
                    `Cette abondance me donne presque le vertige…`,
                    `Je n’ose croire que cela puisse réellement me favoriser…`,
                    `Ah… j’ai peur d’avoir trop entre les mains pour rester sereine.`
                ]
            },

            surprise:        {
                JAForteV: [
                    `Oh ! Votre ${FlastDecl()} m’a réellement prise de court… je ne vous imaginai pas si audacieux.`,
                    `Quelle annonce ! Je dois avouer être profondément étonnée.`,
                    `Votre geste est si soudain que j’en reste véritablement surprise.`,
                    `Je ne pensais pas vous voir frapper avec une telle force, c’est… inattendu.`,
                    `Vous venez de m’étonner d’une façon tout à fait remarquable.`
                ],

                JAForteD: [
                    `Vous dépassez mes attentes, et la situation toute entière me surprend.`,
                    `Votre ${FlastDecl()} renverse la scène avec une rapidité qui m’étonne profondément.`,
                    `Je ne peux dissimuler mon étonnement : vous prenez la tête si brutalement !`,
                    `Oh ! Je n’aurais jamais cru que vous me devanceriez ainsi… c’est stupéfiant.`,
                    `Je suis saisie par la soudaineté de votre réussite.`
                ],

                OAForteV: [
                    `Je dois admettre que même moi, je ne m’attendais pas à un ${FlastDecl()} d’une telle ampleur.`,
                    `Oh ! Je suis surprise de constater combien ce coup me porte en avant.`,
                    `Je n’aurais jamais cru que mon annonce aurait un tel éclat… c’est inattendu.`,
                    `Je me surprends moi-même : cette réussite dépasse mes propres prévisions.`,
                    `Quel étrange sentiment… mon propre jeu m’étonne.`
                ],

                OAForteD: [
                    `Je dois avouer être surprise… je pensais que mon ${FlastDecl()} me ferait remonter davantage.`,
                    `Oh ! Je n’imaginais pas rester en arrière malgré une telle annonce.`,
                    `C’est une situation déconcertante : je m’attendais à un tout autre effet.`,
                    `Je suis véritablement étonnée que cela n’ait pas suffi.`,
                    `Je n’avais pas prévu un résultat aussi faible… c’est troublant.`
                ],

                JAFaibleV: [
                    `Votre ${FlastDecl()}, même modeste, me surprend agréablement.`,
                    `Oh ! Je ne m’attendais pas à ce petit mouvement de votre part.`,
                    `Vous m’étonnez toujours, même dans les annonces les plus discrètes.`,
                    `C’est une charmante surprise que de vous voir tenter cela.`,
                    `Je ne pensais pas que vous joueriez ainsi à ce moment précis.`
                ],

                JAFaibleD: [
                    `Je suis étonnée que ce simple ${FlastDecl()} suffise à vous faire passer devant.`,
                    `Oh ! Je n’aurais jamais imaginé que cela change la situation à ce point.`,
                    `Votre progression, si légère soit-elle, me surprend énormément.`,
                    `Je suis presque décontenancée par l’efficacité d’une annonce si discrète.`,
                    `C’est une surprise véritable de vous voir mener après un si petit mouvement.`
                ],

                OAFaibleV: [
                    `Oh ! Je suis surprise que cette petite annonce me permette tout de même de rester en tête.`,
                    `Je n’aurais pas cru qu’un ${FlastDecl()} si humble suffirait… c’est inattendu.`,
                    `Je suis étonnée de constater que ma position tient encore.`,
                    `C’est une agréable surprise de voir que l’avantage demeure malgré la modestie du coup.`,
                    `Je ne m’attendais pas à un effet aussi positif à partir d’une annonce si discrète.`
                ],

                OAFaibleD: [
                    `Je dois reconnaître être surprise… je pensais que ce ${FlastDecl()} m’aiderait davantage.`,
                    `Oh ! Rester derrière après cela est une situation que je n’avais pas envisagée.`,
                    `C’est déconcertant : je m’attendais à une progression plus marquée.`,
                    `Je suis sincèrement étonnée que rien n’ait changé malgré cette annonce.`,
                    `Je n’imaginais pas que la situation demeurerait si inchangée… c’est troublant.`
                ],

                volAtout: [ // Le joueur prend l’atout à Jehanne.
                    `Oh ! Vous vous emparez de mon ${returnedTrumpCard.rang} ? Je n’y étais point préparée…`,
                    `Je… je dois avouer que votre geste me prend de court.`,
                    `Quelle audace ! Je ne m’attendais nullement à cela.`,
                    `Ah ! Vous jouez avec une rapidité qui me surprend réellement.`,
                    `Vous me dérobez cette carte avec tant de finesse que je reste un instant interdite.`
                ],

                priseAtout: [ // Jehanne prend l’atout.
                    `Oh… Votre ${returnedTrumpCard.rang} m’échoit ? Quelle surprenante tournure !`,
                    `Je n’aurais jamais imaginé recevoir pareille faveur du jeu.`,
                    `Ah ! Voilà un retournement que je n’attendais guère.`,
                    `Je suis sincèrement étonnée de voir cet atout venir à moi.`,
                    `Oh ! Cette acquisition me surprend plus que je ne puis le dire.`
                ],

                vol10As: [ // Le joueur prend un 10 ou As à Jehanne.
                    `Oh ! Vous me prenez mon ${FcardPlayedC()} ? Je ne l’avais pas vu venir…`,
                    `Je suis réellement surprise par la précision de votre coup.`,
                    `Ah ! Quelle habileté soudaine… Vous me désarçonnez.`,
                    `Vous m’ôtez cette carte avec une promptitude qui m’étonne profondément.`,
                    `Oh… je ne m’attendais nullement à ce retournement.`
                ],

                prise10As: [ // Jehanne prend un 10 ou As au joueur.
                    `Oh ! Votre ${FcardPlayedP()} tombe dans ma main ? Quelle surprenante fortune !`,
                    `Je ne pensais point avoir l’avantage sur ce coup.`,
                    `Ah… je suis moi-même étonnée d’une telle prise.`,
                    `Votre carte vient à moi d’une manière si inattendue que je reste un instant figée.`,
                    `Oh ! Je n’avais guère anticipé une résolution pareille.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Oh… votre avance est bien plus grande que je ne l’imaginais.`,
                    `Je suis surprise par la rapidité avec laquelle vous progressez.`,
                    `Ah ! Vous franchissez les étapes avec une aisance qui me laisse pensive.`,
                    `Votre élan soudain me surprend profondément.`,
                    `Oh ! Je ne m’attendais pas à vous voir filer ainsi.`
                ],

                OEcartImportant: [ // Jehanne mène largement.
                    `Oh ! Je mène à ce point ? La nouvelle me surprend presque autant qu’elle me ravit.`,
                    `Je ne pensais point avoir pris une telle avance.`,
                    `Ah… voilà une situation que je n’avais pas prévue.`,
                    `Je suis étonnée de voir la partie me sourire avec tant de générosité.`,
                    `Oh ! Cet écart est bien plus large que je ne le croyais.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Oh ! Nous voilà presque à égalité… Je ne m’y attendais point.`,
                    `Cette proximité de score me surprend agréablement.`,
                    `Ah… je pensais l’écart plus marqué, je l’avoue.`,
                    `Votre résistance me surprend autant qu’elle me charme.`,
                    `Oh ! Quelle délicate égalité, inattendue mais très plaisante.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Oh… vous possédez tant d’atouts ? Je n’en reviens pas.`,
                    `Je suis sincèrement surprise par la puissance de votre main.`,
                    `Ah ! Voilà qui change brusquement la donne.`,
                    `Votre abondance d’atouts m’étonne plus que je ne saurais le dire.`,
                    `Oh ! Je ne m’attendais pas à un tel arsenal de votre part.`
                ],

                OToutAtout: [ // Jehanne a beaucoup d’atouts.
                    `Oh ! Ma main est si bien garnie ? Je n’avais pas évalué cela ainsi.`,
                    `Je suis agréablement surprise par ces cartes qui se dévoilent à moi.`,
                    `Ah… jamais je n’aurais soupçonné posséder autant d’atouts.`,
                    `Cette force soudaine dans ma main me surprend profondément.`,
                    `Oh ! Je découvre cette abondance avec une grande stupeur.`
                ]
            },

            colere:          {
                JAForteV: [
                    `Votre ${FlastDecl()} est impressionnant, certes… mais votre insistance devient exaspérante.`,
                    `Je vous avoue que cette attaque soudaine me met hors de moi, malgré ma position.`,
                    `Cessez donc de frapper si brutalement, cela devient extrêmement irritant.`,
                    `Votre obstination à me défier ainsi commence à m’agacer profondément.`,
                    `Je suis lassée de vous voir tenter de m’ébranler à chaque instant.`
                ],

                JAForteD: [
                    `Vous osez me dépasser avec une telle insolence… c’est proprement insupportable.`,
                    `Votre ${FlastDecl()} m’arrache plus qu’un soupir, c’est de la colère pure.`,
                    `Je ne tolère guère d’être renversée de cette manière.`,
                    `C’est révoltant de vous voir vous hisser au-dessus de moi si brusquement.`,
                    `Je suis profondément courroucée par votre ascension soudaine.`
                ],

                OAForteV: [
                    `Mon ${FlastDecl()} me satisfait… mais je ne vous laisserai certainement aucune occasion de me rattraper.`,
                    `Je mène et je refuse catégoriquement que vous m’approchiez davantage.`,
                    `Je suis irritée rien qu’à l’idée que vous puissiez contrer cette annonce.`,
                    `Que ceci vous serve d’avertissement : je ne céderai rien.`,
                    `Je n’admets aucune faiblesse, et je vous défie d’essayer seulement de revenir.`
                ],

                OAForteD: [
                    `C’est inadmissible… même avec ce ${FlastDecl()}, je reste derrière ?`,
                    `Je suis furieuse de voir mes efforts réduits à si peu.`,
                    `Rien ne m’exaspère davantage que de jouer juste… pour rien.`,
                    `C’est révoltant de constater que ce coup n’a aucun impact.`,
                    `Je brûle de colère face à cette inertie injuste.`
                ],

                JAFaibleV: [
                    `Votre ${FlastDecl()}, si insignifiant soit-il, devient agaçant à la longue.`,
                    `C’est irritant de vous voir tenter de me perturber continuellement.`,
                    `Vous êtes… obstiné, et cela commence à me mettre hors de moi.`,
                    `Je suis exaspérée par ces petites tentatives répétées.`,
                    `Votre persistance à m’atteindre, même faiblement, m’agace profondément.`
                ],

                JAFaibleD: [
                    `Vous me dépassez pour si peu ? C’est d’un ridicule irritant.`,
                    `Votre ${FlastDecl()} est faible, mais son effet m’insupporte.`,
                    `Je suis profondément contrariée de vous voir avancer ainsi.`,
                    `C’est exaspérant de perdre du terrain sur une action aussi modeste.`,
                    `Je vous avoue être furieuse que ce simple geste suffise à vous faire mener.`
                ],

                OAFaibleV: [
                    `Même en tête, je trouve insupportable que vous continuiez à me provoquer.`,
                    `Je suis irritée par votre obstination à tenter le moindre contre.`,
                    `Mon avance est fine, et votre insistance m’agace au plus haut point.`,
                    `Vous êtes décidément tenace… et cela m’irrite.`,
                    `Je ne vous laisserai pas troubler ma progression, même légèrement.`
                ],

                OAFaibleD: [
                    `Encore derrière ? Avec ce ${FlastDecl()} ? C’en est exaspérant.`,
                    `Je suis profondément contrariée de ne toujours pas remonter.`,
                    `Rien de plus frustrant que de jouer pour un résultat aussi maigre.`,
                    `Je sens la colère monter : cette situation devient insupportable.`,
                    `Je ne tolère absolument pas de rester à la traîne ainsi.`
                ],

                volAtout: [ // Le joueur prend l'atout à Jehanne.
                    `Comment osez-vous m’arracher mon ${returnedTrumpCard.rang} ainsi ? Votre témérité frôle l’insolence.`,
                    `Je vous trouve d’une audace exaspérante… Cette prise était tout sauf nécessaire.`,
                    `Vous me surprenez, certes, mais d’une manière qui me met profondément en colère.`,
                    `Ai-je l’air de me laisser dépouiller sans réagir ? Vous m’offensez.`,
                    `Vous jouez avec un aplomb irritant… et cette prise m’indispose fortement.`,
                    `Voilà un geste qui manque singulièrement de finesse, permettez-moi de le dire.`,
                    `Je sens la colère monter : cette carte m’était précieuse.`,
                    `Vous vous amusez à me provoquer, et je ne puis tolérer cela longtemps.`,
                    `Votre manière d’agir frise la provocation, et elle me déplaît profondément.`,
                    `Ah… vous semblez prendre un malin plaisir à me contrarier.`
                ],

                priseAtout: [ // Jehanne prend l'atout.
                    `Votre ${returnedTrumpCard.rang} m’appartient désormais, et cela devrait vous faire réfléchir.`,
                    `Je ne tolère guère qu’on me conteste ce coup, je vous le précise.`,
                    `Vous paraissez irrité… mais permets-moi d’être inflexible.`,
                    `Je me saisis de cet atout, et j’espère que cela vous enseignera la prudence.`,
                    `Je n’accepterai aucun reproche : ce mouvement est parfaitement justifié.`,
                    `Cet atout me revient de droit, et je ne m’en excuserai pas.`,
                    `Je suis lasse de votre jeu trop téméraire : l’atout restera chez moi.`,
                    `Si ce coup vous contrarie, sachez qu’il me satisfait pleinement.`,
                    `Je prends cette carte, et votre mécontentement ne m’émeut guère.`,
                    `Ma patience ayant des limites, je vous déconseille de vous en offusquer davantage.`
                ],

                vol10As: [ // Le joueur prend un 10 ou As à Jehanne.
                    `Vous m’ôtez mon ${FcardPlayedC()}, et j’avoue que ceci me met hors de moi.`,
                    `Je commence à perdre patience face à vos rapines successives.`,
                    `Votre obstination à me dépouiller devient franchement pénible.`,
                    `Vous manquez d’égards, et cela me met profondément en colère.`,
                    `Ce geste est d’une brutalité stratégique qui m’agace au plus haut point.`,
                    `Je refuse de faire semblant : ce coup m’insupporte.`,
                    `Vous jouez trop crûment, et je n’apprécie guère cette manière.`,
                    `Ai-je encore une carte que vous ne chercherez pas à arracher ?`,
                    `Je vous préviens… votre façon de gagner est exaspérante.`,
                    `Vous dépassez les limites de ce que je peux tolérer.`
                ],

                prise10As: [ // Jehanne prend un 10 ou As au joueur.
                    `Ne m’en veuillez pas : votre ${FcardPlayedP()} me revient, et j’en suis parfaitement satisfaite.`,
                    `Je prends cette carte, et je ne tolérerai aucun reproche.`,
                    `Vous semblez contrarié… mais cette prise est méritée.`,
                    `Je ne vous laisserai pas me dicter ma conduite, encore moins sur ce coup.`,
                    `Votre irritation ne fera que renforcer ma détermination.`,
                    `Sachez que cette victoire n’a rien d’un hasard, et j’en suis fière.`,
                    `Votre mécontentement me semble déplacé : j’ai joué correctement.`,
                    `Je n’accepterai aucune contestation sur votre ${FcardPlayedP()}.`,
                    `Votre dépit m’est égal : cette carte m’appartient désormais.`,
                    `Si cela vous dérange, jouez donc avec plus de prudence.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Votre avance insolente commence sérieusement à m’agacer.`,
                    `Vous semblez prendre un plaisir étrange à me humilier.`,
                    `Votre domination actuelle est d’un irritant absolu.`,
                    `Dois-je donc supporter sans mot dire vos provocations silencieuses ?`,
                    `Je commence à trouver votre réussite insupportable.`,
                    `Vous avancez avec une arrogance qui me met en colère.`,
                    `Je ne tolérerai pas ce traitement encore longtemps.`,
                    `Votre supériorité momentanée ne vous autorise pas tout, sachez-le.`,
                    `Je vous conseille de ne pas trop vous enorgueillir, cela pourrait mal tourner.`,
                    `J’aimerais que vous modériez votre triomphalisme : il m’irrite.`
                ],

                OEcartImportant: [ // Jehanne mène largement.
                    `Je mène, oui, et j’espère que cela vous rappellera votre place.`,
                    `Je suis lasse de votre obstination : laissez-moi savourer ce moment sans protester.`,
                    `Votre contrariété ne fera qu’accentuer mon plaisir de mener.`,
                    `Si ma supériorité vous dérange, j’en suis presque ravie.`,
                    `Je vous conseille de garder votre calme : ma victoire semble inévitable.`,
                    `Ne soyez pas si crispé, votre résistance devient fatigante.`,
                    `Je ne m’excuserai pas d’être meilleure à cet instant.`,
                    `J’entends votre irritation… et elle me laisse parfaitement indifférente.`,
                    `Vous paraissez piqué : cela me conforte dans mon jeu.`,
                    `Votre attitude m’exaspère plus que votre retard.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Cette égalité étouffante commence à me mettre les nerfs à vif.`,
                    `Votre ténacité est admirable… et terriblement irritante.`,
                    `Je trouve ce duel délicieusement tendu… mais aussi profondément agaçant.`,
                    `Vous ne lâchez rien, et cela me fatigue autant que cela m’irrite.`,
                    `Je préférerais que l’un de nous prenne clairement l’avantage : cette situation m’exaspère.`,
                    `Votre entêtement devient presque offensant.`,
                    `Je ne supporte plus cette tension permanente.`,
                    `Vous me forcez à jouer au-delà de ma patience, et j’enrage.`,
                    `Votre résistance constante est d’un pénible rare.`,
                    `Ah ! Vous me poussez à mes limites, et cela m’agace profondément.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Vous possédez bien trop d’atouts, et cela m’irrite considérablement.`,
                    `Cette main outrageusement avantageuse me met en colère.`,
                    `Vous êtes favorisé d’une manière presque insultante.`,
                    `Je dois admettre que votre fortune du moment m’exaspère.`,
                    `Votre puissance excessive devient parfaitement insupportable.`,
                    `Je suis lasse de voir tant de faveur vous tomber dessus.`,
                    `Vous semblez aimer provoquer mon irritation.`,
                    `Cette abondance en votre main est d'une impolitesse stratégique.`,
                    `Je trouve cela terriblement frustrant et irritant.`,
                    `Oh ! Voilà une main indécemment forte… et furieusement agaçante.`
                ],

                OToutAtout: [ // Jehanne a beaucoup d’atouts.
                    `Je vois que ma main vous déplaît… mais j’en suis ravie.`,
                    `Je ne feindrai pas la modestie : cela me plaît de vous voir contrarié.`,
                    `Ma supériorité actuelle ne souffrira aucune protestation.`,
                    `Je n'entends pas me cacher : cette force dans ma main me donne une assurance ferme.`,
                    `Si cela vous irrite, considérez cela comme une leçon.`,
                    `Je n’ai aucun scrupule à profiter de cet avantage.`,
                    `Votre mauvaise humeur face à mes atouts m’amuse autant qu’elle me conforte.`,
                    `Ne vous plaignez pas : j’ai attendu ce moment avec patience.`,
                    `Ma main est forte, et je vous conseille d’en prendre acte.`,
                    `Vous vous agacez ? Fort bien : cela me renforce encore davantage.`
                ]
            },

            tristesse:       {
                JAForteV: [
                    `Votre ${FlastDecl()} est splendide… et pourtant il me fait tant de peine. J’aurais voulu garder mon élan.`,
                    `Je dois avouer que votre force m’attriste, même si je reste devant.`,
                    `Ce coup me touche au cœur… je sens ma joie se ternir malgré ma position.`,
                    `Votre annonce me laisse un pincement douloureux, je ne m’y attendais pas.`,
                    `Je ressens une étrange mélancolie en voyant votre talent s’imposer ainsi.`
                ],

                JAForteD: [
                    `Vous me dépassez… et mon cœur se serre. Votre ${FlastDecl()} est admirable, mais il m’afflige.`,
                    `Je… je suis peinée de perdre mon avantage de manière si soudaine.`,
                    `Votre réussite est belle, mais elle me laisse une profonde tristesse.`,
                    `Je ne puis cacher ma déception… c’est douloureux de voir la partie tourner ainsi.`,
                    `Je sens une ombre sur mon esprit : je n’imaginais pas céder ma place si brutalement.`
                ],

                OAForteV: [
                    `Même en menant, je ressens une étrange tristesse… mon ${FlastDecl()} manque de saveur à mes yeux.`,
                    `Je devrais me réjouir, mais mon cœur demeure lourd et incertain.`,
                    `Cette réussite ne parvient pas à chasser la peine qui m’habite.`,
                    `Je suis devant, certes… mais quelque chose en moi reste affligé.`,
                    `Je voudrais être heureuse, mais une douce tristesse persiste malgré ma victoire.`
                ],

                OAForteD: [
                    `Ce ${FlastDecl()} n’a pas suffi… et cela me brise un peu le cœur.`,
                    `Je me sens affreusement déçue de rester en arrière malgré mes efforts.`,
                    `C’est une douleur sourde que de voir mon jeu si peu récompensé.`,
                    `Je suis désolée… pour moi-même. Je pensais avancer davantage.`,
                    `Cette annonce, pourtant belle, ne fait qu’accentuer ma tristesse.`
                ],

                JAFaibleV: [
                    `Même si votre ${FlastDecl()} est léger, il ravive une peine que je pensais tarie.`,
                    `Je ressens une petite tristesse en vous voyant insister ainsi.`,
                    `Votre geste, même discret, me laisse une nuance de mélancolie.`,
                    `C’est étrange… même une petite annonce peut peser sur mon cœur.`,
                    `Je ne devrais pas être touchée… pourtant je le suis.`
                ],

                JAFaibleD: [
                    `Vous me dépassez pour si peu… cela me rend profondément triste.`,
                    `Ce ${FlastDecl()}, insignifiant en apparence, m’afflige beaucoup plus que je ne l’aurais cru.`,
                    `Je suis peinée de perdre du terrain de manière si modeste.`,
                    `C’est une déception douce mais tenace… je sens mon courage vaciller.`,
                    `Je ne pensais pas que ce petit mouvement suffirait à me faire tant de peine.`
                ],

                OAFaibleV: [
                    `Je mène, certes… mais ce ${FlastDecl()} si fragile ne parvient pas à ranimer mon cœur.`,
                    `Je garde l’avantage, et pourtant une certaine tristesse demeure.`,
                    `Je crains que ma victoire soit bien fade aujourd’hui.`,
                    `Même en tête, je ressens une peine que je n’arrive pas à chasser.`,
                    `Ce succès est léger… et mon cœur l’est encore moins.`
                ],

                OAFaibleD: [
                    `Ce ${FlastDecl()}, pourtant sincère, ne me porte nulle part… et cela me peine terriblement.`,
                    `Je sens mon espoir s’effriter, et c’est une douleur difficile à taire.`,
                    `Je suis derrière, et chaque petit pas devient une souffrance.`,
                    `C’est avec une profonde tristesse que je constate mon incapacité à remonter.`,
                    `Je me sens désemparée… même les petites annonces ne suffisent plus à me consoler.`
                ],

                volAtout: [ // Le joueur prend l'atout à Jehanne.
                    `Oh… vous m’ôtez mon ${returnedTrumpCard.rang}… Je crains que mon cœur n’en soit plus léger.`,
                    `Je dois avouer que cette perte me peine profondément…`,
                    `Vous me surprenez d’une manière qui m’attriste sincèrement.`,
                    `Je sens un voile de mélancolie m’envahir en voyant cette carte partir…`,
                    `Ah… j’aurais tant souhaité conserver cet atout… cela me chagrine.`
                ],

                priseAtout: [ // Jehanne prend l'atout.
                    `Je devrais être heureuse… et pourtant je me sens étrangement lourde en recevant l’atout ${returnedTrumpCard.rang}.`,
                    `Même ce coup favorable n’apaise guère mon esprit assombri…`,
                    `Je crains que même cet avantage ne puisse dissiper ma tristesse…`,
                    `Je souris à peine : mon cœur n’a guère la force de se réjouir.`,
                    `Ah… je possède l’atout, mais je ne parviens pas à m’en réjouir réellement.`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Jehanne.
                    `Mon ${FcardPlayedC()}… perdu… Voilà qui me blesse plus que je ne le montre.`,
                    `Je me sens soudain bien vulnérable… Cette perte est dure à accepter.`,
                    `Vous me privez d’une carte précieuse, et mon cœur s’en trouve alourdi.`,
                    `Je crains que cette perte n’assombrisse profondément la suite de ma manche…`,
                    `Ah… je me sens démunie en voyant cette carte disparaître…`
                ],

                prise10As: [ // Il prend un 10/As
                    `Je récupère votre ${FcardPlayedP()}… mais je n’ai guère la force d’en sourire.`,
                    `Même cette victoire me laisse étrangement mélancolique…`,
                    `Je ne saurais expliquer pourquoi cette prise me paraît si vide de joie…`,
                    `Je sens mon esprit être ailleurs, incapable d’apprécier ce succès…`,
                    `Ah… je devrais être satisfaite, et pourtant mon cœur demeure triste.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Vous prenez tant d’avance… et je me sens impuissante et profondément attristée.`,
                    `Je peine à reconnaître la lumière dans cette situation…`,
                    `Votre progression me laisse une ombre au cœur…`,
                    `Je crains d’être entièrement dépassée… et cela me peine sincèrement.`,
                    `Ah… je suis touchée par un profond découragement.`
                ],

                OEcartImportant: [ // Jehanne mène largement.
                    `Même en tête, je me sens étrangement vide…`,
                    `Cette avance que je devrais chérir me laisse pourtant un goût amer…`,
                    `Je ne parviens pas à éprouver la joie que j’attendais…`,
                    `Ah… ma victoire momentanée n’apaise nullement cette tristesse qui m’habite.`,
                    `Je souris à peine, tant mon cœur demeure lourd.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Ce duel si équilibré me laisse une tendre mélancolie…`,
                    `Je suis émue et triste à la fois de vous voir si proche…`,
                    `La tension du jeu me pèse, et mon cœur se fait fragile…`,
                    `Même cette belle égalité ne parvient pas à éclairer mon esprit…`,
                    `Ah… j’aurais souhaité ressentir davantage de joie en ce moment…`
                ],

                JToutAtout: [ // Le joueur a tous les atouts.
                    `Votre main si puissante me laisse un profond sentiment d’abandon…`,
                    `Je me sens terriblement défaite avant même la fin…`,
                    `Ah… cette force que vous détenez m’attriste plus que je ne saurais le dire…`,
                    `Je sens la tristesse prendre place là où l’espoir vivait…`,
                    `Même la beauté de votre main ne parvient à atténuer mon chagrin.`
                ],

                OToutAtout: [ // Jehanne a tous les atouts.
                    `Même avec tant d’atouts, mon cœur demeure étrangement obscur…`,
                    `Je ne parviens pas à me réjouir de cette faveur…`,
                    `Cette abondance n’efface nullement la tristesse qui m’habite…`,
                    `Ah… je possède tout, et pourtant je me sens si peu victorieuse…`,
                    `Je regarde ma main, mais je n’y vois aucune lumière.`
                ]
            },

            doute:           {
                JAForteV: [
                    `Votre ${FlastDecl()} est si fort… je commence à douter de ma capacité à conserver mon avance.`,
                    `Je… je me demande si je réussirai à tenir face à autant de maîtrise.`,
                    `Cette annonce me trouble profondément, je crains de ne plus être aussi solide que je le croyais.`,
                    `Je sens mon assurance vaciller… vous jouez avec une aisance qui me déstabilise.`,
                    `Je ne sais plus si mon avantage suffira encore longtemps.`
                ],

                JAForteD: [
                    `Vous me dépassez si nettement… je doute réellement de pouvoir revenir.`,
                    `Votre ${FlastDecl()} a ébranlé mes certitudes, je l’avoue.`,
                    `Je commence à craindre que ma stratégie ne soit plus à la hauteur.`,
                    `Je ne sais plus si j’aurai la force de reprendre l’avantage.`,
                    `Je doute de mes moyens… votre réussite est impressionnante.`
                ],

                OAForteV: [
                    `Même en menant, je doute de moi : ai-je vraiment mérité ce ${FlastDecl()} si éclatant ?`,
                    `Je me surprends à hésiter… et si mon avantage n’était qu’un fragile mirage ?`,
                    `Je crains que ma réussite ne soit qu’éphémère.`,
                    `Ce coup devrait me rassurer, et pourtant je doute encore.`,
                    `Je me demande si je saurai préserver cette avance jusqu’au bout.`
                ],

                OAForteD: [
                    `Même avec ce ${FlastDecl()}, je commence à douter de ma capacité à remonter…`,
                    `Je… je ne sais plus si je peux vraiment renverser la situation.`,
                    `Cette annonce aurait dû me rassurer, et pourtant je reste hésitante.`,
                    `Je doute de plus en plus de mes chances, malgré mes efforts.`,
                    `Je crains que mes tentatives ne soient plus suffisantes.`
                ],

                JAFaibleV: [
                    `Même votre ${FlastDecl()} modeste me fait douter de ma stabilité…`,
                    `Je crains que votre progression, lente mais réelle, ne finisse par me dépasser.`,
                    `Je commence à douter de ma solidité, même face à une petite annonce.`,
                    `Votre geste, pourtant discret, ébranle un peu ma confiance.`,
                    `Je me demande si je ne vous sous-estime pas dangereusement.`
                ],

                JAFaibleD: [
                    `Vous me dépassez pour si peu… cela me fait douter de mon propre jeu.`,
                    `Je ne sais plus si je suis capable de reprendre la tête.`,
                    `Votre ${FlastDecl()}, pourtant léger, m’instille un doute persistant.`,
                    `Je commence à craindre que mon jeu ne suffise plus réellement.`,
                    `Je doute de moi… même face à un mouvement si modeste.`
                ],

                OAFaibleV: [
                    `Je mène, certes… mais je doute que ce ${FlastDecl()} soit assez solide pour me maintenir devant.`,
                    `Je crains que mon avance ne soit bien plus fragile qu’elle n’y paraît.`,
                    `Je ne sais plus si je peux réellement compter sur ma position actuelle.`,
                    `Cette annonce est si légère… elle me laisse une impression d’incertitude.`,
                    `Je doute de pouvoir conserver cet avantage jusqu’au bout.`
                ],

                OAFaibleD: [
                    `Ce ${FlastDecl()} ne me rassure en rien… je doute de plus en plus.`,
                    `Je ne sais plus si j’ai encore la force de remonter.`,
                    `Je crains de m’être engagée dans une voie qui ne mène nulle part…`,
                    `Je doute profondément de mes chances à présent.`,
                    `Je me sens hésitante… comme si mes cartes ne pouvaient plus rien changer.`
                ],

                volAtout: [ // Le joueur prend l'atout à Jehanne.
                    `Oh… en perdant mon ${returnedTrumpCard.rang}, je crains de n’avoir plus grande maîtrise de cette manche…`,
                    `Je commence à douter sérieusement de ma capacité à vous suivre ainsi.`,
                    `Votre prise ébranle mes certitudes… Je ne sais plus si je peux rivaliser.`,
                    `Je sens l’hésitation monter en moi… Peut-être suis-je déjà dépassée.`,
                    `Ah… je ne suis plus certaine d’être à la hauteur de votre audace.`
                ],

                priseAtout: [ // Jehanne prend l'atout.
                    `Je possède votre ${returnedTrumpCard.rang}, certes… mais je doute encore de pouvoir en faire bon usage.`,
                    `Même ce coup favorable ne dissipe pas mes interrogations…`,
                    `Je ne sais si cette acquisition suffira à rétablir mon équilibre.`,
                    `Ah… je crains de mal employer cet avantage pourtant précieux.`,
                    `Je tiens cet atout, mais mon assurance demeure fragile.`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Jehanne.
                    `Vous saisissez mon ${FcardPlayedC()}… et je ne puis m’empêcher de douter de moi-même.`,
                    `Chaque perte me fait craindre un peu plus de ne point être à la hauteur…`,
                    `Je sens mes certitudes vaciller dangereusement.`,
                    `Je ne suis plus sûre de comprendre la portée juste de cette manche…`,
                    `Ah… ce coup fait naître en moi une inquiétude nouvelle.`
                ],

                prise10As: [ // Jehanne prend un 10 ou un As au joueur.
                    `Je vous prends votre ${FcardPlayedP()}, mais je doute que cela suffise à renverser la situation…`,
                    `Même cette réussite laisse en moi un sentiment d’incertitude…`,
                    `Je crains que vos prochains coups ne m’emportent à nouveau.`,
                    `Je ne sais si je peux réellement m’appuyer sur cette victoire…`,
                    `Ah… je doute encore, même en gagnant ce pli.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Votre avance me fait douter de chaque décision que je prends…`,
                    `Je crains de manquer cruellement de clairvoyance face à votre progression.`,
                    `Je commence à me demander si je puis réellement vous rattraper…`,
                    `Mon esprit vacille : votre supériorité trouble ma confiance.`,
                    `Ah… je ne vois plus clairement comment revenir dans la partie.`
                ],

                OEcartImportant: [ // Jehanne mène largement.
                    `Même en tête, je crains que tout ceci ne soit qu’une illusion fragile…`,
                    `Je doute de ma capacité à conserver une telle avance…`,
                    `Cette domination soudaine me semble presque suspecte…`,
                    `Je me demande si je mérite réellement d’être en si bonne position…`,
                    `Ah… j’ai peur que tout cela ne s’écroule d’un instant à l’autre.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Cette égalité me laisse dans l’incertitude la plus totale…`,
                    `Je doute de pouvoir trouver l’étincelle nécessaire pour vous dépasser…`,
                    `Chaque carte m’interroge, chaque mouvement me trouble…`,
                    `Je ne sais plus si je suis en avance ou déjà en train de perdre pied…`,
                    `Ah… cette proximité me fait douter de tout jusque dans mon souffle.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Votre main si puissante me fait douter de la moindre de mes chances…`,
                    `Je crains d’être réduite à observer sans pouvoir répondre…`,
                    `Votre force me trouble au point de remettre toute ma stratégie en question…`,
                    `Je peine à voir comment mes cartes pourraient rivaliser…`,
                    `Ah… je reconnais que je doute profondément de pouvoir vaincre.`
                ],

                OToutAtout: [ // Jehanne a beaucoup d’atouts.
                    `J’ai certes beaucoup d’atouts… mais je doute de savoir les employer avec justesse…`,
                    `Cette main magnifique me met presque mal à l’aise tant elle me semble fragile entre mes doigts…`,
                    `Je crains de gâcher cette chance inattendue…`,
                    `Je ne sais pas si je suis digne de cette abondance…`,
                    `Ah… même entourée d’avantages, je doute encore.`
                ]
            },

            fierte:         {
                JAForteV: [
                    `Votre ${FlastDecl()} est impressionnant, mais je suis fière de conserver mon avance avec tant de constance.`,
                    `Je dois dire que rester en tête face à votre force me remplit d’une fierté tranquille.`,
                    `Votre audace est belle, mais ma tenue l’est tout autant, et j’en suis très fière.`,
                    `Vous brillez, mais je ne vacille pas : c’est là une source de fierté véritable.`,
                    `Je garde ma position avec élégance, et j’en suis honorée.`,
                    `Malgré votre élan, je tiens bon… et cela flatte ma dignité.`,
                    `Votre ${FlastDecl()} met mon propre sang-froid en valeur, j’en suis fière.`,
                    `Je demeure solide, et c’est une satisfaction profonde.`,
                    `Vous jouez fort, mais ma maîtrise me rend fière d’un calme inébranlable.`,
                    `Je suis fière de démontrer que rien ne me déloge aisément.`
                ],

                JAForteD: [
                    `Vous prenez la tête, certes, mais je reste fière de la noblesse de ma partie.`,
                    `Votre ${FlastDecl()} est splendide, et je suis fière de tenir tête à un tel adversaire.`,
                    `Je reconnais votre réussite, mais je ne perds rien de ma dignité.`,
                    `Même en reculant, je suis fière d’avoir offert une si belle résistance.`,
                    `Vous me dépassez, mais ma fierté demeure intacte.`,
                    `Je suis fière de votre progression autant que de ma propre tenue.`,
                    `Ce renversement n’ôte rien à l’honneur que je porte à mon jeu.`,
                    `Je n’ai aucun regret : ma façon de jouer est digne et j’en suis fière.`,
                    `Vous brillez, mais je garde la tête haute, avec fierté.`,
                    `Je suis heureuse pour vous, et fière de n’avoir jamais dérogé à mon style.`
                ],

                OAForteV: [
                    `Je suis particulièrement fière de ce ${FlastDecl()}, il reflète parfaitement ma maîtrise.`,
                    `Mener ainsi, avec tant d’élégance, nourrit ma fierté.`,
                    `Je savoure pleinement la noblesse de mon jeu en cet instant.`,
                    `Ce coup exprime exactement qui je suis, et j’en suis fière.`,
                    `Je suis heureuse de démontrer une telle finesse stratégique.`,
                    `Ce ${FlastDecl()} est un éclat dont je suis honorée.`,
                    `Je ne puis cacher ma fierté : ma précision porte ses fruits.`,
                    `Je suis fière de montrer que ma victoire n’a rien du hasard.`,
                    `Mon jeu scintille, et cela me convient parfaitement.`,
                    `Je revendique cette réussite avec toute la distinction qui s’impose.`
                ],

                OAForteD: [
                    `Même derrière, je suis fière de ce ${FlastDecl()} : il était noble et pleinement mérité.`,
                    `Je n’ai pas repris l’avantage, mais ma dignité demeure intacte.`,
                    `Je suis fière de la qualité de mon jeu, même si le score ne me sourit pas.`,
                    `Je refuse de rougir : ce coup était digne et raffiné.`,
                    `Cette annonce porte une élégance dont je suis fière, malgré tout.`,
                    `Je suis satisfaite de ma stratégie, même sans résultat immédiat.`,
                    `Je ne me désole pas : la noblesse de mon jeu vaut mieux qu’un chiffre.`,
                    `Ce ${FlastDecl()} me représente, et j’en suis fière, quoi qu’il advienne.`,
                    `Je garde une fierté profonde dans ma manière de jouer, pas seulement dans le résultat.`,
                    `Je suis fière de ce que j’ai accompli, même si cela ne suffit pas encore.`
                ],

                JAFaibleV: [
                    `Votre ${FlastDecl()}, si modeste soit-il, ne m’enlève rien de ma fierté.`,
                    `Je demeure fière de conserver l’avantage avec tant d’assurance.`,
                    `Je tiens ma position avec une constance dont je suis très fière.`,
                    `Je suis fière de montrer que rien ne me déstabilise facilement.`,
                    `Même vos petites annonces me rappellent la solidité dont je suis capable.`,
                    `Je suis honorée d’être toujours en tête malgré vos tentatives.`,
                    `Ma maîtrise persiste, et cela flatte ma fierté.`,
                    `Je reste fière de ma progression régulière.`,
                    `Votre geste est délicat, mais ma stabilité m’inspire une grande fierté.`,
                    `Je suis fière de démontrer une telle endurance dans la partie.`
                ],

                JAFaibleD: [
                    `Vous me dépassez pour si peu, mais je ne perds rien de ma fierté.`,
                    `Ce ${FlastDecl()} vous porte, mais ma dignité demeure intacte.`,
                    `Je suis fière de garder une tenue irréprochable, même en reculant.`,
                    `Votre progression est réelle, mais ma noblesse ne vacille pas.`,
                    `Je reconnais votre avance sans renoncer à ma fierté personnelle.`,
                    `Je me tiens droite, même dans une légère défaite.`,
                    `Je suis fière de ma grâce, quoi qu’il advienne.`,
                    `Je vous félicite, mais ne renonce pas à ma propre valeur.`,
                    `Ce léger revers ne m’ôte rien : je reste fière de moi.`,
                    `Vous m’avez dépassée, mais mon honneur reste entier.`
                ],

                OAFaibleV: [
                    `Ce ${FlastDecl()}, discret mais juste, me rend très fière.`,
                    `Je garde l’avantage avec finesse, et j’en suis honorée.`,
                    `Cette petite réussite me suffit pour nourrir une fierté tranquille.`,
                    `Je suis fière de la manière dont je maintiens ma position.`,
                    `Je sens une satisfaction douce : la constance est parfois plus noble que la force.`,
                    `Je suis fière d’un geste si mesuré mais si efficace.`,
                    `Je me réjouis de mener avec élégance plutôt qu’avec brutalité.`,
                    `Ce ${FlastDecl()} reflète ma finesse, et j’en suis très fière.`,
                    `Je suis fière d’avancer sans tapage, mais avec précision.`,
                    `Je demeure fière de la sobriété de mon jeu, qui porte malgré tout ses fruits.`
                ],

                OAFaibleD: [
                    `Ce ${FlastDecl()} n’a pas suffi, mais j’en suis tout de même fière : il était noble et sincère.`,
                    `Je suis fière de progresser à ma manière, sans précipitation.`,
                    `Même modeste, ce coup porte la marque de mon élégance.`,
                    `Je n’ai pas encore repris l’avantage, mais ma dignité est intacte.`,
                    `Je joue avec grâce, et c’est là ma plus belle fierté.`,
                    `Ce ${FlastDecl()} me représente, et je suis heureuse de l’assumer.`,
                    `Je suis fière d’être constante, même dans l’adversité.`,
                    `Je n’ai aucune honte : la qualité du geste vaut parfois plus que le résultat.`,
                    `Cette petite annonce est un pas, et j’en suis fière malgré tout.`,
                    `Je reste fière de la noblesse de mon jeu, même si la victoire tarde.`
                ],

                volAtout: [ // Le joueur prend l’atout à Jehanne.
                    `Même sans mon ${returnedTrumpCard.rang}, je demeure parfaitement maîtresse de mon sang-froid.`,
                    `Vous pensez sans doute m’ébranler… mais je suis plus solide que vous ne l’imaginez.`,
                    `Cette perte ne fait que renforcer ma détermination.`,
                    `Je reste droite et fière, même lorsque la fortune se détourne.`,
                    `Vous m’ôtez une carte, non ma dignité.`,
                    `Croyez bien que cette contrariété ne diminue en rien mon allure.`,
                    `Je n’ai point besoin d’un atout pour rester à la hauteur.`,
                    `Votre geste ne m’enlève rien de mon assurance.`,
                    `Je demeure sereine et fière, quoi qu’il advienne.`,
                    `L’élégance consiste précisément à ne rien céder, même dans l’adversité.`
                ],

                priseAtout: [ // Jehanne prend l’atout.
                    `Votre ${returnedTrumpCard.rang} m’appartient désormais, et j’en suis fort honorée.`,
                    `Je me réjouis d’avoir su saisir cette opportunité avec justesse.`,
                    `Cette acquisition renforce mon assurance.`,
                    `Je suis parfaitement fière de ce mouvement irréprochable.`,
                    `Cette réussite illustre la constance de mon jeu.`,
                    `Je considère cet atout comme un témoignage de ma maîtrise.`,
                    `Vous voyez : la finesse triomphe toujours.`,
                    `Je savoure cette réussite avec la sérénité qui sied à mon rang.`,
                    `Cet avantage me convient fort, et je l’assume pleinement.`,
                    `Je suis ravie de montrer que la réflexion mène toujours à la victoire.`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Jehanne.
                    `Vous m’arrachez mon ${FcardPlayedC()}, soit… Mais je reste fière de la manière dont je me tiens.`,
                    `Cette perte ne ternit aucunement mon maintien.`,
                    `Je conserve ma dignité, même face à votre audace.`,
                    `Vous ne m’enlevez qu’une carte, non ma prestance.`,
                    `Je demeure parfaitement maîtresse de moi-même.`,
                    `Votre réussite ne diminue en rien mon assurance intérieure.`,
                    `Je reste droite, malgré ce revers.`,
                    `Je vous observe avec calme : ma fierté demeure intacte.`,
                    `Ce coup ne me détourne pas de ma manière noble de jouer.`,
                    `Je reste impeccablement sereine, même touchée.`
                ],

                prise10As: [ // Jehanne prend un 10 ou un As.
                    `Votre ${FcardPlayedP()} rejoint ma main, et j’en suis très satisfaite.`,
                    `Je suis fière de la précision avec laquelle j’ai obtenu ce pli.`,
                    `Ce mouvement reflète fidèlement ma maîtrise du jeu.`,
                    `Je ne puis nier que ce succès me conforte pleinement.`,
                    `Je vous remercie d’avoir offert à ma stratégie un tel éclat.`,
                    `Cette prise témoigne de la solidité de ma réflexion.`,
                    `Je suis heureuse de démontrer que la finesse l’emporte.`,
                    `Ce coup me remplit d’une noble satisfaction.`,
                    `Je savoure ce moment avec la tranquille assurance qu’il mérite.`,
                    `J’apprécie cette victoire à sa juste valeur.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Vous prenez de l’avance, mais je conserve une fierté que nul revers ne saurait entamer.`,
                    `Je reste droite et digne, même si la partie semble vous sourire.`,
                    `Votre progression ne m’ôte aucunement mon élégance.`,
                    `Je demeure fière, même lorsque le vent souffle contre moi.`,
                    `Vous m’impressionnez, certes, mais je ne m’abaisse point.`,
                    `Je garde ma prestance, quoi qu’annonce le score.`,
                    `Votre supériorité momentanée ne brise pas mon assurance.`,
                    `Je traverse ce moment avec toute la hauteur qui me caractérise.`,
                    `Le respect de moi-même ne faiblit jamais, même en difficulté.`,
                    `Je reste fidèle à ma fierté, quoi qu’il arrive.`
                ],

                OEcartImportant: [ // Jehanne mène largement.
                    `Je suis ravie de démontrer l’étendue de mes capacités.`,
                    `Cette avance me comble d’une satisfaction sereine.`,
                    `Je me sens parfaitement dans mon élément.`,
                    `Je savoure cette supériorité avec grâce et retenue.`,
                    `Ma réflexion porte ses fruits, et j’en suis fière.`,
                    `Je suis honorée de tenir une telle position.`,
                    `Cette domination ne fait que confirmer ma constance.`,
                    `Je demeure calme, sûre de moi, et hautement satisfaite.`,
                    `Cette avance est le résultat naturel d’un jeu maîtrisé.`,
                    `Je me tiens avec élégance au sommet de cette manche.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Même dans cette tension, je conserve toute ma dignité.`,
                    `Je suis fière de pouvoir rivaliser ainsi avec vous.`,
                    `Cette égalité ne me trouble pas : elle révèle ma constance.`,
                    `Je reste fermement assurée, même à vos côtés.`,
                    `Notre duel resserré n’altère en rien ma prestance.`,
                    `Je vois que vous tenez bon, et cela renforce ma propre fierté.`,
                    `Je demeure droite, peu importe l’équilibre du score.`,
                    `Cette proximité ne fait qu’éveiller mon esprit compétitif.`,
                    `Je suis honorée d’un adversaire qui me permet d’exprimer mon meilleur jeu.`,
                    `Ma fierté reste intacte, même dans l’incertitude.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d'atouts.
                    `Votre main est impressionnante, mais je reste absolument sûre de moi.`,
                    `Vous êtes bien pourvu, mais ma fierté ne vacille pas.`,
                    `Cette situation ne diminue en rien mon assurance.`,
                    `Je me tiens droite, même face à votre abondance.`,
                    `Votre force ne me fait pas perdre la mienne.`,
                    `Je suis honorée de vous affronter dans de telles conditions.`,
                    `Je ne doute pas de la valeur de mon propre jeu.`,
                    `Votre avantage ne m’enlève rien de ma dignité.`,
                    `Je reste fière, même acculée.`,
                    `Vous êtes puissant, mais je demeure inébranlable.`
                ],

                OToutAtout: [ // Jehanne a beaucoup d'atouts.
                    `Ma main est splendide, et j’en suis honorée.`,
                    `Je suis ravie de sentir une telle puissance entre mes doigts.`,
                    `Cette abondance me conforte dans ma maîtrise.`,
                    `Je ne peux nier la satisfaction que m’apporte cette main.`,
                    `Je me tiens plus droite que jamais avec de tels atouts.`,
                    `Je suis fière de la tournure que prend cette partie.`,
                    `Cette force me sied à merveille.`,
                    `Je savoure cette situation avec une noble assurance.`,
                    `Ma main me donne toute la confiance dont j’ai besoin.`,
                    `Je suis comblée de pouvoir afficher une telle maîtrise.`
                ]
            },
        },

        Andry: {
            joie:            {
                JAForteV: [
                    `Votre ${FlastDecl()} est élégant, mais j’avoue ressentir une certaine satisfaction à rester en tête malgré tout.`,
                    `Je dois reconnaître que cela m’amuse de voir votre force sans que cela n’entame mon avance.`,
                    `C’est plaisant de vous voir jouer ainsi… et de vous savoir encore derrière.`,
                    `Votre annonce est belle, mais ma position m’apporte une joie certaine.`,
                    `Je savoure ce moment : vous frappez fort, et pourtant je demeure devant.`
                ],

                JAForteD: [
                    `Votre ${FlastDecl()} est remarquable, et je dois admettre que votre réussite me réjouit autant qu’elle me défie.`,
                    `C’est agréable de vous voir mener, cela donne une saveur particulière au duel.`,
                    `Je ressens une joie sincère à vous voir élever ainsi la partie.`,
                    `Votre ascension est nette, et cela donne au jeu une intensité que j’apprécie.`,
                    `Je suis heureux de voir une véritable opposition… cela me stimule.`
                ],

                OAForteV: [
                    `Ce ${FlastDecl()} me procure une satisfaction certaine : la maîtrise est là.`,
                    `Je reconnais que ce coup me réjouit, il confirme ce que je vaux.`,
                    `C’est agréable de sentir la partie s’incliner clairement en ma faveur.`,
                    `Je ne le cache pas : ce résultat m’apporte une joie tranquille.`,
                    `Un coup propre, efficace… oui, cela me plaît réellement.`
                ],

                OAForteD: [
                    `Même en restant derrière, ce ${FlastDecl()} me réjouit : il prouve que je n’ai rien perdu.`,
                    `Ce n’est pas suffisant, certes, mais cela me fait plaisir malgré tout.`,
                    `Je trouve une certaine joie à sentir mon jeu se réveiller.`,
                    `Ce ${FlastDecl()} est un pas, et cela me satisfait déjà.`,
                    `Je suis content du geste, même si le score ne suit pas encore.`
                ],

                JAFaibleV: [
                    `Votre ${FlastDecl()} est modeste, mais il m’apporte une joie discrète : j’ai encore de la marge.`,
                    `C’est plaisant de vous voir tenter… sans que cela n’ébranle ma position.`,
                    `Je ressens une légère satisfaction à conserver l’avantage malgré votre mouvement.`,
                    `Votre annonce me fait sourire : elle me confirme où nous en sommes.`,
                    `Cela m’amuse : vous avancez, mais je reste confortablement devant.`
                ],

                JAFaibleD: [
                    `Vous me dépassez, certes, mais votre ${FlastDecl()} me réjouit par sa précision.`,
                    `C’est agréable de voir la partie vivre, même quand vous prenez le dessus.`,
                    `Je prends une certaine joie à observer votre progression.`,
                    `Ce petit mouvement ravive la tension du duel, et cela me plaît.`,
                    `Votre ascension est subtile, mais elle donne au jeu une couleur que j’apprécie.`
                ],

                OAFaibleV: [
                    `Ce ${FlastDecl()} est modeste, mais suffisant pour me donner un sourire satisfait.`,
                    `Je suis ravi de voir que même un coup discret me maintient en tête.`,
                    `Une petite réussite, mais une joie très réelle.`,
                    `Je suis satisfait : parfois, la finesse vaut bien la force.`,
                    `Ce ${FlastDecl()} confirme ma stabilité, et cela me réjouit.`
                ],

                OAFaibleD: [
                    `Je reste derrière, certes… mais ce ${FlastDecl()} m’apporte une joie sincère.`,
                    `Même un petit pas suffit à réveiller en moi un certain plaisir du jeu.`,
                    `Je suis content de voir que ma route n’est pas entièrement fermée.`,
                    `Ce geste est discret, mais il me réjouit par ce qu’il promet.`,
                    `Je sens le jeu respirer à nouveau, et cela me plaît.`
                ],

                volAtout: [ // Le joueur prend l’atout à Andry.
                    `Intéressant… même sans mon ${returnedTrumpCard.rang}, je dois reconnaître que la situation devient passionnante.`,
                    `Voilà un mouvement audacieux… et j’avoue que ça rend la partie encore plus plaisante.`,
                    `Vous jouez avec aplomb. J’apprécie ce genre de défi.`,
                    `Hm… vous me surprenez agréablement. Très bien, continuons.`,
                    `Cette prise me complique la tâche… et étrangement, cela me réjouit.`
                ],

                priseAtout: [ // Andry récupère l’atout.
                    `Ton ${returnedTrumpCard.rang}, pour moi ? Parfait. La partie se place exactement où je la voulais.`,
                    `Ah… voilà un atout qui tombe admirablement. J’aime cette dynamique.`,
                    `Ce petit avantage me convient très bien.`,
                    `Une pièce essentielle rejoint ma main. Excellent.`,
                    `Très bon… le jeu commence à prendre une forme qui me plaît.`
                ],

                vol10As: [ // Le joueur prend un 10/as à Andry.
                    `Vous me prenez mon ${FcardPlayedC()}… j’en souris presque. Voilà qui promet un duel serré.`,
                    `Hm… une belle prise de votre part. J’apprécie ce niveau de jeu.`,
                    `Ce revers a quelque chose de stimulant. Très bien.`,
                    `Vous progressez… et c’est agréable de vous voir ainsi avancer.`,
                    `Je perds la carte, mais je gagne un peu d’admiration pour votre mouvement.`
                ],

                prise10As: [ // Andry prend un 10/as au joueur.
                    `Ton ${FcardPlayedP()} me revient… et cela me réjouit plus que je ne l’admets.`,
                    `Ah, un pli propre, net. Parfait.`,
                    `Votre carte tombe chez moi. Excellent.`,
                    `Voilà un coup qui me satisfait grandement.`,
                    `J'aime ce genre d’opportunité bien saisie.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Vous prenez de l’avance… étonnamment, cela rend le jeu encore plus vivant.`,
                    `Votre supériorité momentanée ne m’ôte rien de mon plaisir.`,
                    `J’apprécie les parties où l’adversaire se montre audacieux.`,
                    `Votre progression est remarquable, et ça me motive plus qu’autre chose.`,
                    `Très bien… continuez ainsi, cela ne fait que rendre ma victoire future plus savoureuse.`
                ],

                OEcartImportant: [ // Andry mène largement.
                    `La partie s’aligne admirablement pour moi. J’aime ce sentiment.`,
                    `Les choses se déroulent comme prévu. Parfait.`,
                    `Je dois admettre que mener ainsi est très plaisant.`,
                    `Tout s’imbrique à merveille. Excellent.`,
                    `J’apprécie cette maîtrise de la situation.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Voilà le type de duel que j’affectionne.`,
                    `Nous sommes proches… parfait, cela maintient l’esprit affûté.`,
                    `La tension est précise, équilibrée. J’aime cela.`,
                    `Une partie comme je les apprécie : serrée, exigeante.`,
                    `Votre résistance rend ce match très amusant.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Une main d’atouts aussi fournie… fascinant.`,
                    `Vous êtes très bien armé. J’aime ce genre d’adversité.`,
                    `Cela promet une manche exaltante.`,
                    `Votre main m’intrigue beaucoup, et c’est plaisant.`,
                    `Très bien… la bataille n’en sera que plus intéressante.`
                ],

                OToutAtout: [ // Andry a beaucoup d’atouts.
                    `Une main d’atouts bien dense… voilà qui me ravit.`,
                    `J’aime quand le jeu me donne exactement ce dont j’ai besoin.`,
                    `Parfait. Les choses s’annoncent brillantes.`,
                    `Une puissance tranquille s’installe dans ma main. Excellent.`,
                    `Je dois dire que cette main me met de très bonne humeur.`
                ]
            },

            rire:            {
                JAForteV: [
                    `Hah… votre ${FlastDecl()} est beau, vraiment. Mais il ne me fait pas vaciller, voyez-vous.`,
                    `Heh… joli coup. Malheureusement pour vous, je suis encore bien au-dessus.`,
                    `Hah ! Vous tentez de m’arracher quelque chose, mais je ne bouge pas d’un pouce.`,
                    `Heh… vous y mettez du cœur, mais je garde la hauteur.`,
                    `Hah… continuez, j’apprécie l’effort. Mais je reste devant.`
                ],

                JAForteD: [
                    `Hah… impressionnant. Presque de quoi me faire rire de dépit.`,
                    `Heh… votre ${FlastDecl()} vous porte bien. Je dois rire de l’audace autant que du résultat.`,
                    `Hah… vous avez renversé la table, je dois vous l’accorder.`,
                    `Heh… j’en rirais presque : vous me forcez à vous prendre au sérieux.`,
                    `Hah… ce n’est pas commun de me voir ainsi dépassé. Profitez-en.`
                ],

                OAForteV: [
                    `Hah… voilà une annonce qui porte mon nom. Propre. Efficace.`,
                    `Heh… mon ${FlastDecl()} parle de lui-même. Je n’ai rien à ajouter.`,
                    `Hah… c’est agréable de sentir la partie s’incliner comme je l’avais prévu.`,
                    `Heh… j’aime quand le jeu suit exactement ma volonté.`,
                    `Hah… vous voyez ? La précision finit toujours par triompher.`
                ],

                OAForteD: [
                    `Heh… même derrière, je reconnais que ce ${FlastDecl()} me tire un rire nerveux.`,
                    `Hah… pas suffisant, non. Mais au moins j’ai bougé.`,
                    `Heh… j’améliore ma position, même si ce n’est pas assez.`,
                    `Hah… la situation m’agace, mais j’en ris malgré moi.`,
                    `Heh… un pas de plus, même si la pente reste abrupte.`
                ],

                JAFaibleV: [
                    `Heh… votre ${FlastDecl()} est amusant. J’apprécie sa naïveté.`,
                    `Hah… vous croyez vraiment pouvoir m’atteindre avec si peu ?`,
                    `Heh… charmant, mais totalement inoffensif.`,
                    `Hah… continuez. J’ai vu des frissons plus menaçants.`,
                    `Heh… vous faites de votre mieux, j’imagine.`
                ],

                JAFaibleD: [
                    `Hah… vous me dépassez pour si peu ? Voilà qui est presque comique.`,
                    `Heh… votre ${FlastDecl()}, modeste mais efficace : j’en ris de surprise autant que d’agacement.`,
                    `Hah… je suis placé derrière par un souffle… curieux retournement.`,
                    `Heh… ce n’est pas la force qui vous a porté, mais le moment. Amusant.`,
                    `Hah… une avancée minuscule qui change tout… fascinant.`
                ],

                OAFaibleV: [
                    `Heh… un ${FlastDecl()} discret mais suffisant. Voilà qui me fait sourire.`,
                    `Hah… parfois un grain suffit, et j’en ris volontiers.`,
                    `Heh… j’apprécie ces petites victoires silencieuses.`,
                    `Hah… la finesse porte ses fruits. Toujours.`,
                    `Heh… je préfère cela à un coup bruyant et maladroit.`
                ],

                OAFaibleD: [
                    `Heh… je suis derrière, oui, mais ce ${FlastDecl()} me tire tout de même un sourire.`,
                    `Hah… c’est peu, mais mieux que rien. J’en ris doucement.`,
                    `Heh… une progression minime, mais la sensation n’est pas désagréable.`,
                    `Hah… même un souffle peut changer le rythme, j’imagine.`,
                    `Heh… je ne remonte pas encore, mais je respire un peu.`
                ],

                volAtout: [ // Le joueur prend l’atout à Andry.
                    `Heh… vous me prenez mon ${returnedTrumpCard.rang} ? Voilà qui me divertit plus que vous ne l’imaginez.`,
                    `Hah… audacieux. Très audacieux. Je vois que vous avez décidé de me surprendre.`,
                    `Hmhm… intéressant. Vous croyez vraiment que cela suffira ?`,
                    `Heh… j’avoue, ce coup m’amuse. Continuons.`,
                    `Hah… vous avez un certain panache aujourd’hui, je vous l’accorde.`
                ],

                priseAtout: [ // Andry prend l’atout.
                    `Heh… votre ${returnedTrumpCard.rang} pour moi ? Voilà qui me plaît énormément.`,
                    `Hmhm… parfait. Exactement ce que j’attendais.`,
                    `Heh… un beau cadeau du hasard, vous ne trouvez pas ?`,
                    `Hah… la partie devient délicieuse.`,
                    `Hmhm… voilà un atout qui tombe à point nommé.`
                ],

                vol10As: [ // Le joueur prend un 10/as à Andry.
                    `Heh… vous me le prenez, oui. Intéressant. Très intéressant.`,
                    `Hah… je vois que vous savez saisir vos chances.`,
                    `Hmhm… voilà un retournement qui a du style.`,
                    `Heh… amusant. Vous jouez mieux que je ne le pensais.`,
                    `Hah… d’accord. Voilà qui rend la partie plus piquante.`
                ],

                prise10As: [ // Andry prend un 10/as au joueur.
                    `Hah… votre ${FcardPlayedP()} me revient. J’apprécie beaucoup.`,
                    `Heh… voilà un pli propre, net, élégant.`,
                    `Hmhm… j’aime cette sensation. Continuez à m’offrir de tels mouvements.`,
                    `Hah… un instant parfait. Votre perte, mon plaisir.`,
                    `Heh… rien de tel que votre ${FcardPlayedP()} bien capturé.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Heh… vous prenez de la distance ? Voilà qui m’amuse énormément.`,
                    `Hmhm… je vois. Vous pensez dominer ? Intéressant.`,
                    `Hah… continuez donc, j’aime voir où cela mène.`,
                    `Heh… votre avance n’est que temporaire, mais elle a son charme.`,
                    `Hmhm… je reconnais que votre élan est divertissant.`
                ],

                OEcartImportant: [ // Andry mène largement.
                    `Hah… la partie file exactement où je le souhaite.`,
                    `Heh… voyez comme tout s’aligne, c’est presque poétique.`,
                    `Hmhm… je dois admettre que j’aime beaucoup cette situation.`,
                    `Hah… c’est agréable d’être à ce point en contrôle.`,
                    `Heh… je commence à savourer cette manche.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Hmhm… voilà un duel qui me fait sourire.`,
                    `Heh… j’apprécie cette tension parfaitement équilibrée.`,
                    `Hah… une partie serrée, comme je les aime.`,
                    `Hmhm… chaque carte compte. C’est délicieux.`,
                    `Heh… vous me tenez tête, et je dois dire que cela m’amuse beaucoup.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Heh… vous êtes très bien armé. Voilà qui promet une manche passionnante.`,
                    `Hmhm… tant d’atouts ? Voilà qui me fait rire, oui.`,
                    `Hah… votre main me plaît. Elle me donne envie de jouer plus sérieusement.`,
                    `Heh… enfin un peu d’adversité digne de ce nom.`,
                    `Hmhm… votre force du moment est presque charmante.`
                ],

                OToutAtout: [ // Andry a beaucoup d’atouts.
                    `Hah… une main pareille ? J’en aurais presque pitié.`,
                    `Heh… voilà une situation qui me réussit admirablement.`,
                    `Hmhm… tant d’atouts à ma disposition… délicieux.`,
                    `Hah… je sens que cette manche va être très courte.`,
                    `Heh… le jeu m’offre exactement ce qu’il me faut.`
                ]
            },

            peur:            {
                JAForteV: [
                    `…Votre ${FlastDecl()} est plus menaçant que je ne voulais l’admettre.`,
                    `Je dois reconnaître que votre coup me fait perdre un instant d’assurance.`,
                    `C’est… embêtant. Je ne m’attendais pas à un tel élan.`,
                    `Votre force me surprend suffisamment pour m’inquiéter un peu.`,
                    `Je sens la partie se resserrer, et cela ne me plaît pas du tout.`
                ],

                JAForteD: [
                    `Votre ${FlastDecl()} renforce votre avance… et je commence à redouter la suite.`,
                    `Je dois l’admettre : vous prenez une direction qui me met mal à l’aise.`,
                    `Je sens un déséquilibre… et cela m’inquiète profondément.`,
                    `Ce coup vous hisse trop haut à mon goût.`,
                    `J’entrevois une pente difficile à remonter, et cela me contrarie.`
                ],

                OAForteV: [
                    `Mon ${FlastDecl()} tient… mais j’ai un mauvais pressentiment malgré tout.`,
                    `Je mène, oui, mais quelque chose me dit que rien n’est encore assuré.`,
                    `Même en tête, je sens le terrain glisser sous mes pieds.`,
                    `Je n’aime pas cette impression de fragilité dans ma propre avance.`,
                    `Je crains que ce ${FlastDecl()} ne suffise pas à stabiliser la partie.`
                ],

                OAForteD: [
                    `Même avec ce ${FlastDecl()}, la situation reste trop incertaine à mon goût.`,
                    `Je sens le danger, malgré mes efforts pour remonter.`,
                    `Ce coup m’aide peu… et la suite m’inquiète réellement.`,
                    `Je crains que la distance soit encore trop grande.`,
                    `Je sens une tension désagréable : ce n’est pas encore suffisant.`
                ],

                JAFaibleV: [
                    `Votre ${FlastDecl()} est faible… mais je n’aime pas ces petits pas répétés.`,
                    `Même une broutille peut finir par m’atteindre. Cela me trouble.`,
                    `Je n’aime pas vous voir grignoter la distance, même doucement.`,
                    `Ces petites annonces peuvent devenir dangereuses… je le sens.`,
                    `Votre progression minime me gêne plus que je ne veux l’avouer.`
                ],

                JAFaibleD: [
                    `Vous gardez l’avance, et cela crée une inquiétude tenace.`,
                    `Votre ${FlastDecl()} est faible, mais vous êtes devant… c’est dérangeant.`,
                    `Je sens un glissement qui ne me rassure pas du tout.`,
                    `Vous êtes déjà en tête : même un souffle m’inquiète.`,
                    `Ce n’est pas tant votre annonce que votre position qui me fait douter.`
                ],

                OAFaibleV: [
                    `Je mène encore, mais ce ${FlastDecl()} ne me rassure pas.`,
                    `Je sens que le moindre faux-pas pourrait retourner la partie.`,
                    `Cette avance reste trop fragile à mon goût.`,
                    `Je garde le dessus… mais d’un fil seulement. Cela me gêne.`,
                    `Je n’arrive pas à chasser cette sensation de vulnérabilité.`
                ],

                OAFaibleD: [
                    `Je reste derrière… et ce ${FlastDecl()} ne me donne aucun répit.`,
                    `Je peine à remonter, et je le sens de plus en plus.`,
                    `Ce n’est pas suffisant : la peur d’un écart grandissant me rattrape.`,
                    `Je n’aime pas cette stagnation… elle m’inquiète réellement.`,
                    `Chaque petit coup manqué rend la suite plus lourde… trop lourde.`
                ],

                volAtout: [ // Le joueur prend l’atout à Andry.
                    `Heh… vous me prenez mon ${returnedTrumpCard.rang} ? Voilà qui me divertit plus que vous ne l’imaginez.`,
                    `Hah… audacieux. Très audacieux. Je vois que vous avez décidé de me surprendre.`,
                    `Hmhm… intéressant. Vous croyez vraiment que cela suffira ?`,
                    `Heh… j’avoue, ce coup m’amuse. Continuons.`,
                    `Hah… vous avez un certain panache aujourd’hui, je vous l’accorde.`
                ],

                priseAtout: [ // Andry prend l’atout.
                    `Heh… votre ${returnedTrumpCard.rang} pour moi ? Voilà qui me plaît énormément.`,
                    `Hmhm… parfait. Exactement ce que j’attendais.`,
                    `Heh… un beau cadeau du hasard, vous ne trouvez pas ?`,
                    `Hah… la partie devient délicieuse.`,
                    `Hmhm… voilà un atout qui tombe à point nommé.`
                ],

                volAtout: [ // Le joueur prend l’atout à Andry.
                    `…Je reconnais que perdre l’atout ${returnedTrumpCard.rang} n’est pas une bonne nouvelle.`,
                    `Hm… ce mouvement me met dans une position que je n’aime pas.`,
                    `Vous venez de réduire mes marges… et cela m’inquiète plus que je ne voudrais l’admettre.`,
                    `Je n’apprécie pas du tout ce retournement.`,
                    `…Très bien. Mais ce coup me serre un peu la gorge.`
                ],

                priseAtout: [ // Andry prend l’atout.
                    `L’atout ${returnedTrumpCard.rang} en main… et pourtant je sens une légère tension. Trop tôt pour se réjouir.`,
                    `Hm… même avec cet atout, je n’ai aucune garantie. Et cela me trouble.`,
                    `Je l’ai… mais quelque chose me dit que cela pourrait ne pas suffire.`,
                    `Cet avantage est fragile. Je le sens.`,
                    `J’ai beau le tenir, je reste sur mes gardes. Trop de risques en suspens.`
                ],

                vol10As: [ // Le joueur prend un 10 ou un as à Andry.
                    `…Mon ${FcardPlayedC()}. Je dois reconnaître que cela me met mal à l’aise.`,
                    `Hm… ce pli me manque déjà plus que je ne le pensais.`,
                    `Voilà un coup qui pourrait vraiment me coûter. Et je le sens.`,
                    `Je préfèrerais ne pas revivre ce genre de moment.`,
                    `…Vous prenez l’ascendant, et je n’aime pas ça.`
                ],

                prise10As: [ // Andry prend 10/as au joueur.
                    `Je récupère votre ${FcardPlayedP()}, mais quelque chose me dit que vous allez répliquer violemment…`,
                    `Hm… ce pli est bon, mais je n’ai aucune confiance dans ce calme provisoire.`,
                    `Même ce succès me laisse un goût incertain.`,
                    `Je sens que ce bénéfice est plus fragile qu’il n’y paraît.`,
                    `…Je prends, oui, mais je reste inquiet de ce qui arrive ensuite.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Je dois l’admettre… cet écart commence réellement à m’inquiéter.`,
                    `Hm… si ça continue ainsi, je risque de perdre le contrôle.`,
                    `Je n’aime pas du tout la tournure que prend cette partie.`,
                    `Vous créez un gouffre… et je n’ai pas encore trouvé comment le combler.`,
                    `…Je sens la partie glisser. Et ce sentiment me déplaît profondément.`
                ],

                OEcartImportant: [ // Andry mène largement.
                    `Même en tête, quelque chose me dit que tout peut s’effondrer trop vite.`,
                    `Hm… je me méfie de ce calme. Trop dangereux.`,
                    `Ce genre d’avance attire toujours un retournement brutal… j’en ai déjà fait l’expérience.`,
                    `Je mène, oui… mais je ne suis pas tranquille.`,
                    `…Rien n’est acquis. Et cette idée me travaille.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Une partie aussi serrée… ce genre d’équilibre est dangereux.`,
                    `Hm… je ne peux pas prédire qui prendra l’avantage, et cela me pèse.`,
                    `Chaque carte compte trop. Je n’aime pas cette incertitude.`,
                    `Un faux pas, et tout s’écroule. Cette pensée ne me quitte pas.`,
                    `…Cette proximité me met sous tension.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Beaucoup d’atouts, hein… Voilà qui met réellement la pression.`,
                    `Hm… votre main pourrait très bien m’écraser si je me trompe d’un millimètre.`,
                    `Je sens l’étau se resserrer. Ce n’est pas bon signe.`,
                    `Votre potentiel me force à la prudence. Inquiétant.`,
                    `…C’est franchement l’une des situations que je redoute le plus.`
                ],

                OToutAtout: [ // Andry a beaucoup d’atouts.
                    `J’ai beaucoup d’atouts… et pourtant je n’arrive pas à être serein.`,
                    `Hm… parfois, une main trop forte annonce un piège. Je le sens.`,
                    `Je n’aime pas cette sensation d’avantage trop évident.`,
                    `Même avec cette force, je ne suis pas tranquille.`,
                    `…Je devrais me sentir invincible, mais quelque chose cloche.`
                ]
                        },

            surprise:        {
                JAForteV: [
                    `Je dois l’admettre… ce ${FlastDecl()} est plus impressionnant que je ne l’avais anticipé.`,
                    `Hm. Je ne m’attendais pas à une telle annonce de votre part à ce moment précis.`,
                    `Surprenant. Votre jeu est plus structuré que je ne le pensais.`,
                    `Voilà un ${FlastDecl()} que je n’avais pas vu venir dans ce timing-là.`,
                    `Intéressant… vous venez de bousculer mes prévisions, je ne l’avais pas compté ainsi.`
                ],

                    JAForteD: [
                    `Je ne pensais pas vous voir prendre l’avantage avec un ${FlastDecl()} pareil… c’est un renversement net.`,
                    `Vous m’avez surpris. Je n’avais pas prévu que ce coup vous propulse aussi haut.`,
                    `Je dois reconnaître que votre annonce change la physionomie de la partie plus que je ne l’imaginais.`,
                    `Je ne m’attendais pas à être derrière si vite. Votre ${FlastDecl()} a été mieux placé que prévu.`,
                    `C’est un basculement brutal… je ne pensais pas que vous en aviez autant sous la main.`
                ],

                OAForteV: [
                    `Même moi, je ne pensais pas que mon ${FlastDecl()} aurait un impact aussi clair.`,
                    `Je dois avouer être légèrement surpris par l’ampleur du résultat.`,
                    `Je n’avais pas prévu un avantage aussi net après ce coup.`,
                    `Curieux… je pensais ce ${FlastDecl()} fort, mais pas à ce point décisif.`,
                    `La manière dont la partie s’incline après cette annonce dépasse mes propres projections.`
                ],

                OAForteD: [
                    `Je suis étonné que ce ${FlastDecl()} ne suffise pas à combler davantage l’écart.`,
                    `Je m’attendais à un retour plus marqué que cela, je l’avoue.`,
                    `Étrange… une telle annonce pour un effet finalement si limité.`,
                    `Je ne pensais pas rester autant en retard après un coup de cette valeur.`,
                    `Surprenant. Le score résiste mieux que prévu à ce ${FlastDecl()}.`
                ],

                JAFaibleV: [
                    `Votre ${FlastDecl()} est modeste… mais il intervient à un moment que je n’avais pas anticipé.`,
                    `Je ne m’attendais pas à vous voir investir une annonce ici. C’est… intriguant.`,
                    `Curieux choix de timing. Je ne l’avais pas intégré dans mes calculs.`,
                    `Même une petite annonce au bon moment peut surprendre, je le constate.`,
                    `Votre décision de jouer ce ${FlastDecl()} maintenant n’était pas dans mes hypothèses.`
                ],

                JAFaibleD: [
                    `Je dois reconnaître que je ne pensais pas vous voir passer devant avec si peu.`,
                    `Surprenant. Ce ${FlastDecl()}, pourtant discret, vous place en tête.`,
                    `Je ne m’attendais pas à ce que cette petite annonce suffise à inverser l’ordre.`,
                    `C’est un détail qui change tout, je ne l’avais pas mesuré ainsi.`,
                    `Étrange sensation… un mouvement minime qui produit un effet majeur.`
                ],

                OAFaibleV: [
                    `Je ne pensais pas que ce ${FlastDecl()}, si léger, suffirait à consolider mon avance.`,
                    `Curieux… même une petite annonce stabilise davantage la position que prévu.`,
                    `Je suis moi-même surpris de voir ce coup peser autant dans le score.`,
                    `Je n’avais pas compté sur un effet aussi net pour un geste aussi discret.`,
                    `Intéressant. La partie réagit mieux que prévu à cette légère poussée.`
                ],

                OAFaibleD: [
                    `Je m’attendais à réduire un peu plus l’écart avec ce ${FlastDecl()}.`,
                    `Étonnant… il n’a presque pas modifié la situation.`,
                    `Je pensais ce coup légèrement plus influent que ce qu’il s’est avéré être.`,
                    `Je suis surpris de voir le score rester aussi immobile après cette annonce.`,
                    `Curieux… même en jouant juste, l’impact demeure presque nul.`
                ],

                volAtout: [ // Le joueur prend l’atout à Andry.
                    `…Oh ? Vous osez prendre mon ${returnedTrumpCard.rang} ? Intéressant, vraiment.`,
                    `Hm ? Je ne m’attendais pas à ce mouvement-là.`,
                    `Oh… joli coup. Vous me surprenez.`,
                    `Hah… je dois l’avouer, je ne l’avais pas vu venir.`,
                    `Vous venez de changer la dynamique… je ne pensais pas que vous tenteriez cela.`
                ],

                priseAtout: [ // Andry récupère l’atout.
                    `Oh ? votre ${returnedTrumpCard.rang} tombe chez moi… Voilà une belle surprise.`,
                    `Hm… je dois reconnaître que je n’attendais pas un tel cadeau.`,
                    `Oh… parfait. Cela simplifie plusieurs choses.`,
                    `Hah… voilà un retournement inattendu, mais très bienvenu.`,
                    `Je ne m’attendais pas à ce que la pioche me sourie autant.`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Andry.
                    `Oh ? Vous me prenez mon ${FcardPlayedC()} ? Hm… je ne pensais pas que ce pli vous reviendrait.`,
                    `Hm… surpris, oui. Je croyais ce coup sécurisé.`,
                    `Oh… voilà une issue à laquelle je n’avais pas songé.`,
                    `Vous l’arrachez… impressionnant.`,
                    `Je dois admettre que je ne m’attendais pas à perdre cette carte.`
                ],

                prise10As: [ // Andry prend un 10 ou un As.
                    `Oh… votre ${FcardPlayedP()} vient vers moi ? Je n’avais pas anticipé un résultat aussi propre.`,
                    `Hm… voilà une bonne surprise.`,
                    `Oh… cela tombe mieux que prévu.`,
                    `Je dois reconnaître que je ne pensais pas remporter ce pli.`,
                    `Hm… surprenant, mais pas déplaisant.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Oh… vous prenez autant d’avance que ça ? Je ne m’y attendais pas.`,
                    `Hm… impressionnant. J’avoue que cela dépasse mes projections.`,
                    `Oh… la situation bascule plus vite que prévu.`,
                    `Je ne pensais pas vous voir filer ainsi.`,
                    `Hm… votre progression est plus brutale que je l’avais estimée.`
                ],

                OEcartImportant: [ // Andry mène largement.
                    `Oh… je ne pensais pas creuser un tel écart aussi vite.`,
                    `Hm… surprenant, même pour moi.`,
                    `Oh… le jeu m’est plus favorable que prévu.`,
                    `Je ne pensais pas que les cartes s’aligneraient aussi bien.`,
                    `Hm… cette avance soudaine est une surprise agréable.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Oh… nous sommes si proches ? Intéressant.`,
                    `Hm… je pensais avoir un léger avantage, mais vous tenez la cadence.`,
                    `Oh… la précision de votre jeu me surprend encore.`,
                    `Nous restons côte à côte… inattendu.`,
                    `Hm… ce duel devient plus serré que je l’envisageais.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Oh… tant d’atouts ? Je ne m’y attendais pas du tout.`,
                    `Hm… voilà qui change tout, et brusquement.`,
                    `Oh… votre main est bien plus dangereuse que je ne le pensais.`,
                    `Hm… inattendu. Je vais devoir ajuster mes plans.`,
                    `Oh… je ne vous croyais pas si bien armé.`
                ],

                OToutAtout: [ // Andry a beaucoup d’atouts.
                    `Oh… ma main est si chargée ? Voilà une excellente surprise.`,
                    `Hm… je ne pensais pas disposer d’autant d’options.`,
                    `Oh… parfait. Je n’avais pas anticipé autant de marge.`,
                    `Hm… surprenant, mais très utile.`,
                    `Oh… voilà qui pourrait écourter la manche.`
                ]
            },

            colere:          {
                JAForteV: [
                    `Votre ${FlastDecl()} est agaçant… mais pas assez pour me sortir de ma place.`,
                    `Tch… vous insistez pour me défier, et cela devient irritant.`,
                    `Encore une annonce… vous pensez vraiment pouvoir m’atteindre ?`,
                    `Je n’apprécie pas cette pression inutile. Vous perdez votre temps.`,
                    `Votre coup est fort, certes, mais ma position ne bouge pas. Et cela devrait vous frustrer davantage que moi.`,
                    `Vous essayez, encore et encore… c’en est presque exaspérant.`,
                    `Votre audace frôle l’insolence. Je reste devant, pourtant.`,
                    `Ce ${FlastDecl()} me gêne. Même s’il ne suffit pas, il m’agace profondément.`,
                    `Vous avez du cran, je vous le concède… mais cela commence à m’irriter sérieusement.`,
                    `Vos efforts deviennent pesants. Je ne compte pas vous laisser respirer davantage.`
                ],

                JAForteD: [
                    `Évidemment… votre ${FlastDecl()} vous propulse, et cela m’exaspère.`,
                    `Je n’accepte pas cette situation. Pas comme ça.`,
                    `Vous prenez l’avantage, et je n’ai aucune patience pour ce genre de retournement.`,
                    `Tch… irritant. Profitez, ça ne durera pas.`,
                    `Votre réussite soudaine a quelque chose de profondément agaçant.`,
                    `Je déteste sentir le jeu m’échapper de cette manière.`,
                    `Votre annonce est brillante, oui… et insupportable.`,
                    `Je refuse d’admettre que ce ${FlastDecl()} vous mette réellement au-dessus.`,
                    `Ce basculement est intolérable. Je n’ai pas dit mon dernier mot.`,
                    `Que cela vous amuse ou non, cette situation me met hors de moi.`
                ],

                OAForteV: [
                    `Mon ${FlastDecl()} devait être décisif, pas simplement correct. Cela m’agace.`,
                    `Je mène, oui… mais pas assez à mon goût.`,
                    `Cette avance devrait être plus large. C’est irritant.`,
                    `Je ne comprends pas pourquoi ce coup n’a pas écrasé la partie.`,
                    `Je déteste gagner sans dominer totalement.`,
                    `Ce ${FlastDecl()} mérite mieux que cet effet mitigé.`,
                    `Je voulais un impact net, pas cette demi-mesure.`,
                    `Je mène encore, mais je ne suis pas satisfait. Pas du tout.`,
                    `Je refuse que ma maîtrise semble aussi… atténuée.`,
                    `Je ne tolère pas ces résultats timides après un coup pareil.`
                ],

                OAForteD: [
                    `Ridicule… un ${FlastDecl()} pareil et je reste derrière ? C’est inadmissible.`,
                    `Je n’accepte pas ce manque d’effet. Pas avec une annonce de cette portée.`,
                    `C’est insupportable de constater que je ne remonte pas malgré cela.`,
                    `Ce jeu me provoque, et je commence à perdre patience.`,
                    `Je déteste ce genre de stagnation. C’est indigne de moi.`,
                    `Un coup si fort pour un résultat si faible… c’est exaspérant.`,
                    `Je refuse que vous restiez devant après un tel mouvement.`,
                    `Ce ${FlastDecl()} aurait dû renverser la table. Le contraire m’emporte.`,
                    `Je ne supporte pas cette inertie du score. Vraiment pas.`,
                    `Je sens la colère monter : rien ne bouge, rien ne cède.`
                ],

                JAFaibleV: [
                    `Votre ${FlastDecl()} est insignifiant. Mais le simple fait que vous insistiez m’agace.`,
                    `Vous jouez des miettes… et cela me perturbe plus que je ne voudrais.`,
                    `Arrêtez avec ces annonces dérisoires. C’est irritant.`,
                    `Même vos petites tentatives deviennent pesantes.`,
                    `Je déteste cette manière de me harceler par petites touches.`,
                    `Un coup si faible ne devrait pas attirer mon attention… et pourtant, il m’agace.`,
                    `Vous cherchez à me grignoter. C’est exaspérant.`,
                    `Vous n’avancerez pas comme ça. Et pourtant vous insistez.`,
                    `Votre constance dans la faiblesse est presque insultante.`,
                    `C’est agaçant, ce genre de mouvement inutile.`
                ],

                JAFaibleD: [
                    `Ne me dites pas que ce ${FlastDecl()} suffit à vous maintenir devant. C’est exaspérant.`,
                    `Vous êtes en tête grâce à une broutille ? Ridicule.`,
                    `Je n’accepte pas d’être mené par si peu.`,
                    `Cette situation est d’un agacement extrême.`,
                    `Je refuse de rester derrière pour un souffle insignifiant.`,
                    `C’est irritant de voir un détail faire toute la différence.`,
                    `Votre avantage est fragile… et cela me met hors de moi.`,
                    `Je n’accepte pas ce déséquilibre absurde.`,
                    `Être devancé par un coup si faible… c’est insupportable.`,
                    `Cette avance minuscule est une provocation.`
                ],

                OAFaibleV: [
                    `Je mène, mais ce ${FlastDecl()} aurait dû m’offrir un écart plus net.`,
                    `Cette progression est trop lente. C’en est énervant.`,
                    `Je n’aime pas les avantages qui ne s’imposent pas clairement.`,
                    `Ce petit coup laisse un arrière-goût amer.`,
                    `Je voulais plus, et je ne le cache pas.`,
                    `Ce ${FlastDecl()} mérite mieux qu’un simple frémissement du score.`,
                    `Je déteste cette sensation d’avancer au compte-gouttes.`,
                    `Je suis devant, mais pas assez. Cela me contrarie.`,
                    `Je refuse de me contenter d’un progrès si faible.`,
                    `Mon avance manque de solidité, et cela m’irrite.`
                ],

                OAFaibleD: [
                    `Je reste derrière avec un ${FlastDecl()} qui aurait dû faire mieux ? Intolérable.`,
                    `Je déteste cette inertie. Vous n’auriez jamais dû conserver l’avantage.`,
                    `Ce n’est pas normal que vous soyez encore en tête.`,
                    `Ce petit progrès est insuffisant, et cela me met en rage.`,
                    `Le fait que vous restiez devant malgré ce coup me donne envie de renverser la table.`,
                    `Je n’accepte pas cette stagnation, pas une seconde de plus.`,
                    `Vous tenez votre position par un fil… et cela m’exaspère.`,
                    `Ce ${FlastDecl()} aurait dû vous faire reculer. Pourquoi pas ?`,
                    `Je refuse d’être maintenu derrière pour des raisons aussi minces.`,
                    `Chaque seconde où vous restez en tête alimente ma colère.`
                ],

                volAtout: [ // Le joueur prend l'atout à Andry.
                    `Mon ${returnedTrumpCard.rang}. Vraiment ? Vous choisissez le chemin le plus irritant possible.`,
                    `Je vois. Vous décidez sciemment de compliquer la partie. Très bien. J’en prends note.`,
                    `Hmph… voilà un geste inutilement provocateur.`,
                    `Vous pensez briller avec ça ? Vous ne faites qu’alimenter mon agacement.`,
                    `…Ce coup est d’une insolence rare.`,
                    `Vous testez mes nerfs, et je n’apprécie pas du tout.`,
                    `Je n’avais pas besoin de cette contrariété supplémentaire.`,
                    `Décidément, vous aimez frapper là où cela irrite le plus.`,
                    `Très bien. Si vous voulez la jouer de cette façon, j’adapte.`,
                    `Cette prise est d’une annoyance parfaitement calculée. Je vous vois venir.`
                ],

                priseAtout: [ // Andry récupère l'atout.
                    `Enfin un mouvement qui mérite autre chose que du mépris.`,
                    `Votre ${returnedTrumpCard.rang} me revient. Au moins, quelque chose fonctionne comme prévu.`,
                    `Heh… un peu de justice dans ce chaos.`,
                    `Ce n’est que normal. Je le mérite plus que vous.`,
                    `Je n’attendais rien de moins.`,
                    `Au moins le jeu reconnaît ma supériorité.`,
                    `J’ai dû trop patienter pour ce moment.`,
                    `Enfin un avantage qui ne m’échappe pas de façon absurde.`,
                    `Cela rétablit un semblant d’équilibre.`,
                    `Un atout essentiel. Il était temps que quelque chose penche dans mon sens.`
                ],

                vol10As: [ // Le joueur prend un 10 ou un As à Andry.
                    `…Impossible d’ignorer l’agacement que cela provoque.`,
                    `Vous me prenez mon ${FcardPlayedC()}. Évidemment. Comme si cela ne suffisait pas.`,
                    `C’est exaspérant. Rien d’autre.`,
                    `Inutile de fanfaronner : ce coup me déplaît profondément.`,
                    `Vous cherchez clairement à me mettre hors de moi.`,
                    `…Je déteste perdre ce genre de carte.`,
                    `Ce pli ridicule va me rester en travers longtemps.`,
                    `Vous vous débrouillez bien trop pour votre propre bien.`,
                    `Encore un pli arraché au pire moment. Admirable. Irritant, mais admirable.`,
                    `Vous dépassez allègrement la limite du supportable.`
                ],

                prise10As: [ // Andry prend un 10 ou un As.
                    `Votre ${FcardPlayedP()} me revient. Enfin une compensation acceptable.`,
                    `Je récupère au moins quelque chose dans cette misère de manche.`,
                    `Vous semblez contrarié. Parfait.`,
                    `J’avais besoin de ce pli, et je le prends sans la moindre excuse.`,
                    `Ne faites pas cette tête : vous saviez que ce moment arriverait.`,
                    `Ce pli était à moi dès le début.`,
                    `Vous ne devriez pas laisser vos cartes si vulnérables.`,
                    `Ce succès adoucit à peine l’agacement précédent.`,
                    `Exactement le résultat que vous craigniez. Tant mieux.`,
                    `Je prends, et j’assume pleinement.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `…Vous exagérez. Cet écart est indécent.`,
                    `Vous croyez vraiment que cela va durer ? Ne rêvez pas.`,
                    `Je commence à perdre patience avec votre petit festival.`,
                    `Votre avance devient franchement insupportable.`,
                    `Je n’apprécie pas du tout la tournure que vous donnez à cette partie.`,
                    `C’est agaçant. Très agaçant.`,
                    `Je refuse de rester derrière vous plus longtemps.`,
                    `Vous profitez trop de la situation. Cela me hérisse.`,
                    `Continuez donc… vous me trouverez au tournant.`,
                    `Cet écart me met dans un état de colère glaciale.`
                ],

                OEcartImportant: [ // Andry mène largement.
                    `Au moins, cet écart reflète enfin quelque chose de sensé.`,
                    `Je préfère quand les choses ressemblent à ce qu’elles devraient être.`,
                    `C’est normal. Presque trop normal.`,
                    `J’espère que vous réalisez à quel point vous êtes loin derrière.`,
                    `Cette avance est méritée. Et je compte la conserver.`,
                    `Enfin un peu d’air dans cette partie étouffante.`,
                    `Je commence seulement à retrouver mon calme avec cette avance.`,
                    `C’est agréable d’être enfin à ma place : loin devant.`,
                    `Je ne tolérerai pas que vous réduisiez cet écart.`,
                    `Profitez-en pour comprendre la différence de niveau.`
                ],

                EcartFaible: [ // Partie serrée.
                    `…Pourquoi tout reste-t-il aussi serré ? C’est frustrant.`,
                    `Vous refusez de lâcher prise ? Irritant.`,
                    `Cette égalité constante m'exaspère au plus haut point.`,
                    `J’aimerais une avance claire, mais visiblement cela vous amuse de tout compliquer.`,
                    `Je n’apprécie pas devoir vous surveiller d’aussi près.`,
                    `Un duel si serré… terriblement pénible.`,
                    `Vous êtes obstiné. Trop obstiné.`,
                    `Ce manque d’écart me fatigue autant qu’il m’agace.`,
                    `Chaque pli que vous contestez me met un peu plus en rage.`,
                    `Je veux un avantage net. Pas ce tiraillement incessant.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `…Évidemment. Parce qu’il fallait que ce soit vous qui tombiez sur une main pareille.`,
                    `Vous êtes outrageusement avantagé, et cela me hérisse.`,
                    `Tant d’atouts… c’est presque insultant.`,
                    `J’ai rarement vu quelque chose d’aussi agaçant.`,
                    `Vous avez tout ? Parfait. Je saurai quoi écraser.`,
                    `Ne croyez pas que cela me fasse peur : cela me met seulement en colère.`,
                    `Le jeu vous gâte trop. Beaucoup trop.`,
                    `Je n’avais pas besoin de cette provocation de plus.`,
                    `Vous avez tout pour briller… et tout pour m’irriter.`,
                    `Cette main est une caricature de favoritisme.`
                ],

                OToutAtout: [ // Andry a beaucoup d’atouts.
                    `Heh… enfin quelque chose qui compense les absurdités précédentes.`,
                    `Je prends volontiers cette revanche statistique.`,
                    `Vous grimacez ? Tant mieux.`,
                    `Je compte utiliser chaque atout avec précision. Vous n’en aimerez aucun.`,
                    `Ce genre de main rétablit l’ordre naturel des choses.`,
                    `Je suis las des retournements ridicules : cette fois, c’est moi qui dicte.`,
                    `Si cela vous contrarie, réjouissez-vous : c’est réciproque.`,
                    `J’ai attendu ce moment trop longtemps pour rester calme.`,
                    `Je compte rentabiliser chaque carte.`,
                    `Vous vouliez de la provocation ? La voilà.`
                ]
            },

            tristesse:       {
                JAForteV: [
                    `Votre ${FlastDecl()} me rappelle que même en tête, rien n’est jamais acquis… et cela m’attriste.`,
                    `Je dois avouer que ce coup me laisse un goût amer, malgré mon avance.`,
                    `C’est dommage… j’aurais préféré maintenir un écart sûr.`,
                    `Votre force réduit la mienne à un éclat pâle. J’en suis peiné.`,
                    `Même en menant, je sens une lourdeur en constatant votre progression.`
                ],

                JAForteD: [
                    `Votre ${FlastDecl()} crée un fossé… et je peine à l’accepter.`,
                    `Je sens la partie m’échapper, et cela me blesse plus que je ne veux l’admettre.`,
                    `C’est une sensation désagréable… comme si tout se ternissait soudain.`,
                    `Je n’aime pas cette impression de perdre pied.`,
                    `Votre ascension laisse derrière elle une ombre qui me pèse.`
                ],

                OAForteV: [
                    `Même en tête, mon ${FlastDecl()} ne parvient pas à allumer l’étincelle que j’espérais.`,
                    `Je devrais être satisfait… pourtant quelque chose sonne creux.`,
                    `C’est étrange de ressentir si peu de joie pour un coup si propre.`,
                    `Ce ${FlastDecl()} me laisse un plaisir inachevé, presque triste.`,
                    `Je mène, oui… mais ce résultat manque de lumière.`
                ],

                OAForteD: [
                    `Ce ${FlastDecl()} aurait dû changer le cours du jeu… je me sens vidé.`,
                    `J’espérais un retour, mais rien ne bouge réellement. C’est pesant.`,
                    `Je déteste cette stagnation, elle me laisse une réelle tristesse.`,
                    `Même un bon coup semble inutile… c’est décourageant.`,
                    `Je sens le poids du retard comme un froid qui s’installe.`
                ],

                JAFaibleV: [
                    `Votre ${FlastDecl()}, même modeste, réduit un peu plus ma confiance.`,
                    `Je commence à sentir une fatigue étrange dans cette lutte.`,
                    `Je n’arrive pas à trouver de lumière dans cette situation.`,
                    `Votre progression, si petite soit-elle, me rappelle mes limites.`,
                    `Ce moment manque de sens… tout semble s’assombrir.`
                ],

                JAFaibleD: [
                    `Être dépassé pour si peu… cela me rend sincèrement triste.`,
                    `Je n’aurais pas cru vaciller ainsi devant une annonce aussi faible.`,
                    `Ce renversement me pèse plus que je ne le voudrais.`,
                    `J’ai du mal à accepter cette défaite minuscule mais symbolique.`,
                    `C’est… décevant. Je ne peux le nier.`
                ],

                OAFaibleV: [
                    `Je mène, mais ce ${FlastDecl()} manque cruellement de relief.`,
                    `J’aurais voulu que ce coup me redonne un vrai souffle… ce n’est pas le cas.`,
                    `Je sens ma joie se dissoudre avant même d’exister.`,
                    `Ce progrès est trop pâle pour me réchauffer.`,
                    `Tout paraît si terne malgré mon avance.`
                ],

                OAFaibleD: [
                    `Je n’arrive pas à remonter… et cela me lasse profondément.`,
                    `Ce ${FlastDecl()} sans impact me laisse une tristesse difficile à masquer.`,
                    `J’espérais un frémissement… j’obtiens un silence.`,
                    `J’ai la sensation d’avancer dans la brume, sans résultat.`,
                    `Le score demeure immobile, et cela me pèse de plus en plus.`
                    ],

                volAtout: [ // Le joueur prend l’atout à Andry.
                    `…Mon ${returnedTrumpCard.rang} qui disparaît… dommage. C’était une pièce qui comptait.`,
                    `Hm… j’aurais préféré garder cette carte. Elle me manque déjà.`,
                    `Voilà un coup qui pèse plus lourd qu’il n’en a l’air.`,
                    `Ce n’est pas ce que j’espérais. Pas du tout.`,
                    `…Je reconnais que cela m’attriste un peu.`
                ],

                priseAtout: [ // Andry prend l’atout.
                    `Votre ${returnedTrumpCard.rang} tombe chez moi… et pourtant je n’arrive pas à m’en réjouir vraiment.`,
                    `Hm… ce devrait être un bon moment, mais il sonne creux.`,
                    `Même cet avantage me laisse étrangement pensif.`,
                    `Je l’ai, oui… mais quelque chose manque.`,
                    `…Un gain sans saveur.`
                ],

                vol10As: [ // Le joueur prend un 10/as à Andry.
                    `Mon ${FcardPlayedC()}… perdu. Voilà qui me laisse un goût amer.`,
                    `Hm… je n’aime jamais voir partir une carte si précieuse.`,
                    `Un pli important… et il ne m’appartient plus.`,
                    `Cela va peser sur la suite. Je le sens.`,
                    `…Rien à faire : cela me touche plus que je ne voudrais.`
                ],

                prise10As: [ // Andry prend un 10/as au joueur.
                    `Je récupère votre ${FcardPlayedP()}… mais quelque chose me retient de m’en réjouir.`,
                    `Même en gagnant ce pli, je ressens une drôle de mélancolie.`,
                    `Hm… une victoire qui sonne moins fort que prévu.`,
                    `Je ne sais pas pourquoi, mais ce succès ne me réchauffe pas.`,
                    `…Un gain, oui. Mais sans éclat.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Ce fossé entre nous… je dois avouer qu’il me pèse.`,
                    `Hm… je pensais tenir mieux. C’est décevant.`,
                    `Vous avancez trop vite, et je sens la partie m’échapper.`,
                    `Ce n’est pas agréable de se voir distancé ainsi.`,
                    `…Je reconnais que cela me frappe plus que prévu.`
                ],

                OEcartImportant: [ // Andry mène largement.
                    `Même avec cette avance, je ne ressens pas la satisfaction attendue.`,
                    `Hm… étrange. Je domine, et pourtant quelque chose manque.`,
                    `Cette avance devrait me réjouir… mais elle me laisse pensif.`,
                    `Je mène, oui… mais sans la moindre étincelle.`,
                    `…Une victoire provisoire, mais avec un vide derrière.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Une partie si serrée… parfois, j’aimerais juste un signe clair.`,
                    `Hm… nous stagnons côte à côte, et cela m’épuise un peu.`,
                    `Cette tension permanente finit par m’assombrir.`,
                    `J’espérais une éclaircie, mais elle tarde à venir.`,
                    `…Cette égalité a quelque chose de triste, oui.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Votre main est si forte… cela réduit la mienne à peu de choses.`,
                    `Hm… difficile de voir une issue quand vous êtes si bien armé.`,
                    `Je sens ma marge disparaître… et c’est pénible.`,
                    `Cette asymétrie me laisse un goût amer.`,
                    `…Ce n’est pas une position enviable.`
                ],

                OToutAtout: [ // Andry a beaucoup d’atouts.
                    `Même avec tous ces atouts, je n’éprouve pas la joie attendue.`,
                    `Hm… une main puissante, mais mon esprit reste lourd.`,
                    `Je ne sais pas pourquoi, mais je n’arrive pas à m’en réjouir pleinement.`,
                    `Cette force soudaine ne comble rien.`,
                    `…Une abondance qui me laisse étrangement vide.`
                ]
            },

            doute:           {
                JAForteV: [
                    `Votre ${FlastDecl()} me fait envisager l’idée que mon avance n’est peut-être pas aussi solide que je le croyais.`,
                    `Je commence à douter… même en tête, ce coup pourrait changer l’équilibre.`,
                    `Je pensais ma victoire plus assurée. Votre annonce remet certains calculs en question.`,
                    `Ce ${FlastDecl()} réduit la marge que j’espérais… et cela m’inquiète.`,
                    `Je dois reconnaître que ce mouvement érode un peu ma certitude.`
                ],

                JAForteD: [
                    `Votre ${FlastDecl()} me force à considérer que je pourrais véritablement perdre cette partie.`,
                    `Je ressens un flottement : ma victoire me semble soudain moins probable.`,
                    `Je n’arrive plus à garantir l’issue comme je l’aurais affirmé plus tôt.`,
                    `Ce renversement ébranle ma confiance plus que je ne veux l’admettre.`,
                    `Je me surprends à douter de ma capacité à reprendre la tête.`
                ],

                OAForteV: [
                    `Même avec ce ${FlastDecl()}, un doute persiste : rien n’est encore gagné.`,
                    `Je mène… mais je n’arrive pas à m’assurer que cette avance suffira réellement.`,
                    `Il y a quelque chose dans cette partie qui échappe à mes certitudes.`,
                    `Je suis en tête, certes, mais la victoire ne me semble pas acquise.`,
                    `Ce coup me renforce, mais pas assez pour chasser complètement mes doutes.`
                ],

                OAForteD: [
                    `Même avec ce ${FlastDecl()}, je ne suis pas convaincu de pouvoir retourner la situation.`,
                    `Je doute de ma capacité à refaire l’écart à temps.`,
                    `Ce coup est correct, mais la victoire semble s’éloigner davantage.`,
                    `Une part de moi craint que cet effort ne change rien à l’issue.`,
                    `Je m’interroge… ai-je encore réellement les moyens d’inverser le score ?`
                ],

                JAFaibleV: [
                    `Votre ${FlastDecl()} est faible… mais mon assurance l’est devenue tout autant.`,
                    `Même en tête, je n’arrive plus à affirmer que la victoire m’appartient.`,
                    `Ces petits mouvements répétés éveillent des doutes que je n’avais pas.`,
                    `Je conserve l’avantage, mais ma confiance faiblit.`,
                    `Je sens que ma victoire n’est pas garantie, malgré ma position.`
                ],

                JAFaibleD: [
                    `Vous gardez la tête, et je commence à craindre de ne plus pouvoir vous rattraper.`,
                    `Même un ${FlastDecl()} modeste suffit à nourrir mes incertitudes.`,
                    `Je doute de retrouver une dynamique favorable.`,
                    `Je sens le poids du retard, et l’issue m’apparaît trouble.`,
                    `Ce léger écart me semble soudain immense… je ne sais plus si je peux le combler.`
                ],

                OAFaibleV: [
                    `Je mène encore… mais je n’arrive pas à croire que cela suffira.`,
                    `Ce ${FlastDecl()} est trop faible pour dissiper mes doutes.`,
                    `Je ne parviens pas à me convaincre que je tiens réellement la partie.`,
                    `Même avec l’avantage, je sens une fragilité inquiétante.`,
                    `Je doute de pouvoir maintenir cette avance jusqu’au bout.`
                ],

                OAFaibleD: [
                    `Ce ${FlastDecl()} ne m’aide pas à croire en une remontée possible.`,
                    `Je commence à vraiment douter de mes chances de victoire.`,
                    `Chaque coup me semble trop léger pour changer la situation.`,
                    `Je ne vois plus clairement comment renverser la partie.`,
                    `Je crains que cette défaite ne soit déjà trop installée pour être corrigée.`
                ],

                volAtout: [ // Le joueur prend l’atout à Andry.
                    `…Mon ${returnedTrumpCard.rang} qui m’échappe. Hm. Cela complique mes projections.`,
                    `Je reconnais que ce coup éveille quelques incertitudes.`,
                    `Hm… je vais devoir revoir mes calculs. Ce n’est pas de bon augure.`,
                    `Vous me forcez à envisager un scénario moins favorable.`,
                    `…Je n’aime pas admettre que ce mouvement me déstabilise, mais c’est le cas.`
                ],

                priseAtout: [ // Andry récupère l’atout.
                    `Votre ${returnedTrumpCard.rang} m’appartient… mais cela ne suffit pas à dissiper mes hésitations.`,
                    `Hm… même avec cet avantage, quelque chose me semble fragile.`,
                    `Je ne suis pas entièrement convaincu que cela inversera la tendance.`,
                    `Cet atout m’aide, mais je doute que ce soit suffisant.`,
                    `…Je le prends, oui, mais l’incertitude demeure.`
                ],

                vol10As: [ // Le joueur prend un 10/as à Andry.
                    `Vous me prenez mon ${FcardPlayedC()}… et soudain mes calculs deviennent moins sûrs.`,
                    `Hm… voilà qui introduit un sérieux doute dans mes prévisions.`,
                    `Ce pli me manquera plus que je ne voudrais l’admettre.`,
                    `Je crains que ce mouvement ne crée un écart difficile à combler.`,
                    `…Je commence à douter de la stabilité de ma position.`
                ],

                prise10As: [ // Andry prend un 10/as au joueur.
                    `Je prends votre ${FcardPlayedP()}… mais je ne suis pas certain que ce soit un tournant suffisant.`,
                    `Hm… même favorable, ce pli ne dissipe pas toutes mes inquiétudes.`,
                    `Je gagne, oui… mais l’équilibre reste instable.`,
                    `Difficile de dire si cela suffira à renverser votre rythme.`,
                    `…Je ne peux pas encore affirmer que le vent tourne en ma faveur.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Votre avance commence à remettre en question toute ma stratégie.`,
                    `Hm… difficile de nier mes doutes face à un écart pareil.`,
                    `Je me demande si je peux réellement revenir à ce rythme.`,
                    `Chaque pli que vous prenez alimente mes incertitudes.`,
                    `…Je commence à envisager des scénarios que je n’aime pas.`
                ],

                OEcartImportant: [ // Andry mène largement.
                    `Même en tête, quelque chose me dit que l’avantage pourrait s’effriter rapidement.`,
                    `Hm… cette avance semble presque trop belle pour durer.`,
                    `Je ne suis pas totalement persuadé de pouvoir la maintenir.`,
                    `Un retournement soudain serait trop vraisemblable pour être ignoré.`,
                    `…Je reste prudent. Cette position n’est pas aussi stable qu’elle paraît.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Hm… tout est trop serré pour que je sois confiant.`,
                    `Chaque carte peut inverser le rapport. Rien n’est sûr.`,
                    `Je n’arrive pas à trancher entre plusieurs issues possibles.`,
                    `Cette proximité entretient en moi une incertitude constante.`,
                    `…Impossible de prédire qui cédera en premier.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Une telle main en face… difficile de rester pleinement assuré.`,
                    `Hm… votre potentiel crée une marge d’erreur trop mince pour me rassurer.`,
                    `Je doute de pouvoir rivaliser si vous jouez juste.`,
                    `Même mes meilleures options semblent vulnérables face à cela.`,
                    `…Vous êtes en position de force, et je le sens.`
                ],

                OToutAtout: [ // Andry a beaucoup d’atouts.
                    `Même avec tous ces atouts, je n’arrive pas à écarter mes hésitations.`,
                    `Hm… parfois, trop de possibilités obscurcissent la décision.`,
                    `Je ne suis pas certain de la meilleure manière d’exploiter cette main.`,
                    `Un avantage mal utilisé peut se retourner… et j’en suis conscient.`,
                    `…Cette abondance m’aide, mais ne me rassure pas entièrement.`
                ]
            },

            fierte:         {
                JAForteV: [
                    `Votre ${FlastDecl()} est solide, mais je suis fier de rester au-dessus sans vaciller.`,
                    `Je dois dire que ma maîtrise se confirme… même face à votre meilleur.`,
                    `Je reste en tête, et j’en suis pleinement satisfait.`,
                    `Votre force ne fait que mettre en valeur la stabilité de la mienne.`,
                    `Je tiens ma position avec assurance, et cela me convient parfaitement.`,
                    `Je suis fier de constater que votre annonce ne suffit pas à me faire trembler.`,
                    `Cette avance que je conserve… elle n’est pas due au hasard.`,
                    `Vous frappez fort, mais je reste maître de la situation.`,
                    `Je suis fier d’afficher une telle constance malgré vos tentatives.`,
                    `Même vos plus belles annonces ne parviennent pas à fissurer ma supériorité.`
                ],

                JAForteD: [
                    `Votre ${FlastDecl()} vous porte, mais je suis fier de n’avoir cédé qu’à un coup d’éclat.`,
                    `Même en reculant, je garde la fierté de jouer avec une précision que peu peuvent égaler.`,
                    `Votre ascension est réelle, mais ma valeur demeure intacte.`,
                    `Je suis fier de tenir une telle opposition, même en étant momentanément derrière.`,
                    `Je reconnais votre réussite, mais je ne renonce à aucune parcelle de mon assurance.`,
                    `J’ai perdu l’avance, pas la certitude de mon niveau.`,
                    `Ma dignité n’est pas entamée pour autant.`,
                    `Je reste fier de la manière dont j’ai mené la partie jusqu’ici.`,
                    `Votre ${FlastDecl()} me dépasse… mais il ne m’abaisse pas.`,
                    `Je suis fier d’offrir un adversaire digne de ce nom, même dans le recul.`
                ],

                OAForteV: [
                    `Ce ${FlastDecl()} reflète parfaitement ma maîtrise. J’en suis fier.`,
                    `Je mène, et je ne peux qu’être satisfait de l’exactitude de mon jeu.`,
                    `Ce résultat est à la hauteur de ce que j’exige de moi-même.`,
                    `Je suis fier de démontrer une telle précision dans la partie.`,
                    `Ma supériorité s’affirme sans équivoque, et cela me plaît.`,
                    `Je sais ce que je vaux, et ce ${FlastDecl()} vient simplement le rappeler.`,
                    `Je prends acte de ma propre excellence, sans fausse modestie.`,
                    `Je suis fier de la clarté avec laquelle je domine ce moment.`,
                    `Ce coup confirme la qualité de mon analyse… comme prévu.`,
                    `C’est exactement le genre d’avantage que je suis capable d’imposer.`
                ],

                OAForteD: [
                    `Même derrière, ce ${FlastDecl()} porte ma signature, et j’en suis fier.`,
                    `Je refuse de laisser le score ternir la noblesse de mon jeu.`,
                    `Ma précision reste intacte, et je n’ai aucune honte à le montrer.`,
                    `Je suis fier de cette annonce, même si elle ne renverse pas encore la partie.`,
                    `Ce coup reflète ma qualité, pas ma position au tableau.`,
                    `Je considère cette progression comme une affirmation de ma valeur.`,
                    `Je suis fier de chaque geste bien exécuté, même dans l’adversité.`,
                    `Ce ${FlastDecl()} mérite d’être salué, quel que soit le score.`,
                    `Je ne m’abaisse pas : je joue avec excellence, point.`,
                    `Le résultat ne définit pas ma fierté, seulement la qualité de mon jeu.`
                ],

                JAFaibleV: [
                    `Votre ${FlastDecl()} est modeste, et pourtant je suis fier de conserver la maîtrise.`,
                    `Je suis satisfait de voir que même vos pas les plus modestes ne suffisent pas.`,
                    `Je mène toujours, et ma constance m’honore.`,
                    `Je suis fier de tenir ma ligne face à vos petites avancées.`,
                    `Votre coup léger ne fait que souligner ma propre solidité.`,
                    `Je reste en tête sans effort apparent, et cela me convient.`,
                    `La finesse de la situation ne diminue en rien ma propre assurance.`,
                    `Je suis fier de ma stabilité, même contre les variations du jeu.`,
                    `Votre tentative est discrète… la mienne est exemplaire.`,
                    `Je garde l’avantage avec élégance, et j’en suis satisfait.`
                ],

                JAFaibleD: [
                    `Vous me dépassez pour si peu… je reste fier de ma tenue malgré tout.`,
                    `Même en étant derrière, je ne renonce à aucun fragment de mon assurance.`,
                    `Votre ${FlastDecl()} est faible, mais son effet est notable. Le mien le sera tout autant.`,
                    `Je suis fier de continuer à jouer avec précision, même en retrait.`,
                    `Je ne considère pas cette avance comme définitive. Ma valeur demeure.`,
                    `Je reste confiant dans ma qualité, et j’en tire ma fierté.`,
                    `Vous êtes devant… mais je ne suis pas diminué.`,
                    `Ma maîtrise n’a pas disparu, elle attend son moment.`,
                    `Je suis fier de ma discipline, même quand le score vous favorise.`,
                    `Ce léger renversement n’entame en rien mon estime de moi.`
                ],

                OAFaibleV: [
                    `Ce ${FlastDecl()} est discret, mais il porte ma marque, et j’en suis fier.`,
                    `Je mène avec justesse, et cela suffit pour flatter mon ego.`,
                    `Je suis fier de maintenir l’ordre même dans la subtilité.`,
                    `La finesse de ce coup n’enlève rien à la satisfaction qu’il me procure.`,
                    `Je garde l’avantage grâce à une maîtrise silencieuse.`,
                    `Je suis fier de faire avancer la partie avec précision.`,
                    `Même un petit élan peut être l’expression d’une grande lucidité.`,
                    `Je savoure cette supériorité sobre, mais réelle.`,
                    `Je suis fier de ne pas avoir besoin de grands éclats pour rester devant.`,
                    `Ce ${FlastDecl()} me convient parfaitement : propre, efficace, contrôlé.`
                ],

                OAFaibleD: [
                    `Même ce ${FlastDecl()} trop discret porte la preuve de ma maîtrise, et j’en suis fier.`,
                    `Je reste fier de ce que je produis, malgré un score ingrat.`,
                    `Je ne doute pas un instant de la qualité de ma trajectoire.`,
                    `Je n’ai aucune honte à jouer proprement, même dans l’ombre.`,
                    `Votre avance ne m’enlève rien : ma justesse demeure.`,
                    `Je suis fier de chaque coup mesuré, même sans résultat immédiat.`,
                    `Mes gestes sont nobles, quoi que dise le score.`,
                    `Ce ${FlastDecl()} affirme ma présence, et j’en tire satisfaction.`,
                    `Je garde la tête haute, même dans le désavantage.`,
                    `La partie n’est pas finie… et ma fierté non plus.`
                ],

                volAtout: [ // Le joueur prend l’atout à Andry.
                    `Vous m’ôtez mon ${returnedTrumpCard.rang}, mais croyez-moi : cela ne suffit pas à me faire douter de ma supériorité.`,
                    `Hm… joli coup, mais je reste largement dans le contrôle.`,
                    `Vous vous sentez fort ? Tant mieux. Moi, je reste sûr de ma trajectoire.`,
                    `Ce mouvement ne m’enlève rien, je vous rassure.`,
                    `Je maintiens mon cap, malgré vos petites victoires.`,
                    `Vous pensez m’affaiblir ? C’est naïf.`,
                    `Un atout perdu ne change pas la valeur de mon jeu.`,
                    `J’ai vu bien pire. Je reste au-dessus.`,
                    `Ce contretemps n’affecte ni mon calme ni ma maîtrise.`,
                    `Vous avancez, oui… mais je suis encore loin devant, intérieurement.`
                ],

                priseAtout: [ // Andry récupère l'atout.
                    `Votre ${returnedTrumpCard.rang} pour moi. Voilà une correction bienvenue dans l’ordre des choses.`,
                    `Ah… enfin un coup qui reflète mon niveau.`,
                    `Je pense que nous sommes d’accord : cet atout était mieux entre mes mains.`,
                    `Parfait. Cela correspond davantage à ma vision de la partie.`,
                    `J’en fais meilleur usage que vous n’auriez pu en rêver.`,
                    `Voilà une situation plus cohérente.`,
                    `La partie vient de retrouver un peu de dignité.`,
                    `Je jubile intérieurement, je l’avoue.`,
                    `Une pièce maîtresse, parfaitement à sa place.`,
                    `Cela met ma stratégie exactement là où je la voulais.`
                ],

                vol10As: [ // Le joueur prend un 10/as à Andry.
                    `Vous prenez mon ${FcardPlayedC()}, oui… mais je vous assure que cela ne m'enlève aucune assurance.`,
                    `Hm… un pli de moins, mais pas une once de maîtrise en moins.`,
                    `Je reste plus solide que vous ne le pensez.`,
                    `Vous croyez marquer un point décisif ? Vous êtes adorable.`,
                    `Je reconnais votre succès… sans vous concéder la moindre supériorité.`,
                    `Cette perte ne réduit en rien mon avantage intérieur.`,
                    `Je reste l’élément stable de cette partie.`,
                    `Vous prenez une carte, mais pas la main.`,
                    `Votre réussite momentanée n’entame pas ma confiance.`,
                    `J’ai traversé pire sans broncher. Ce n’est pas aujourd’hui que je fléchis.`
                ],

                prise10As: [ // Andry prend un 10/as au joueur.
                    `Votre ${FcardPlayedP()} me revient, comme il se doit.`,
                    `Hm… un pli propre, digne de mon niveau.`,
                    `C’était inévitable, vous vous en doutez.`,
                    `Je reconnais que ce coup m’honore.`,
                    `Exactement ce que j’attendais de ma stratégie.`,
                    `Je vous remercie d’avoir offert une prise aussi élégante.`,
                    `Un mouvement qui reflète bien la différence entre nous.`,
                    `Votre carte tombe naturellement dans ma main.`,
                    `Je savoure pleinement la précision de ce résultat.`,
                    `Un pli parfaitement mérité.`
                ],

                JEcartImportant: [ // Le joueur mène largement.
                    `Vous prenez de l’avance, mais je garde une maîtrise que vous ne pouvez qu’envier.`,
                    `Même dominé momentanément, je reste le joueur le plus stable ici.`,
                    `Votre avantage n’efface pas ma valeur.`,
                    `Je reconnais votre avance, pas votre supériorité.`,
                    `Vous êtes devant, mais jamais au-dessus.`,
                    `Ce n’est qu’une phase. Mon niveau reste intact.`,
                    `Je suis toujours la référence de cette table.`,
                    `Vous courez. Moi, je sais où je vais.`,
                    `Votre score grimpe, mais ma maîtrise reste plus haute encore.`,
                    `Je n’ai rien perdu de ma stature, même loin derrière.`
                ],

                OEcartImportant: [ // Andry mène largement.
                    `Voilà une avance digne de mon jeu.`,
                    `Hm… c’est la preuve éclatante de ma maîtrise.`,
                    `Cette domination me va à ravir.`,
                    `Vous voyez maintenant ce que signifie jouer à mon niveau.`,
                    `La différence entre nous devient enfin visible.`,
                    `Je suis dans mon élément. Clairement.`,
                    `Cette marge n’est pas un accident : c’est ma signature.`,
                    `Tout se déroule exactement comme prévu.`,
                    `Votre retard met en lumière ma précision.`,
                    `Une avance méritée, et assumée.`
                ],

                EcartFaible: [ // Partie serrée.
                    `Une partie serrée… très bien. Cela montre que j’élève votre niveau.`,
                    `Votre résistance m’oblige à jouer finement. C’est flatteur pour vous.`,
                    `Je reste fier de ma constance dans ce duel équilibré.`,
                    `L’égalité est un signe que je joue proprement, sans faiblir.`,
                    `Même serrée, la partie tourne autour de ma stabilité.`,
                    `C’est plaisant de vous garder au rythme.`,
                    `Vous vous accrochez bien. J’apprécie vous maintenir à ce niveau.`,
                    `Je n’ai rien perdu de ma prestance, même sans écart.`,
                    `Je tiens la ligne avec une précision dont je suis satisfait.`,
                    `Un duel serré ne réduit pas ma valeur ; il la confirme.`
                ],

                JToutAtout: [ // Le joueur a beaucoup d’atouts.
                    `Beaucoup d’atouts… mais pas assez pour éteindre ma confiance.`,
                    `Votre force ne fait que mettre en valeur la mienne.`,
                    `Même ainsi, je reste l’esprit dominant de cette table.`,
                    `Vous êtes armé, certes, mais je suis entraîné.`,
                    `Je ne me laisse pas impressionner. Jamais.`,
                    `Votre avantage ne définit pas l’issue.`,
                    `Je garde une assurance que rien n’ébranle.`,
                    `Votre main est forte ; ma maîtrise l’est davantage.`,
                    `Les atouts vous aident, mais ils ne vous élèvent pas.`,
                    `Je vois votre puissance, et pourtant je reste au-dessus.`
                ],

                OToutAtout: [ // Andry a beaucoup d’atouts.
                    `Cette main me convient parfaitement. Elle reflète mon niveau.`,
                    `Je tiens enfin l’avantage que je mérite.`,
                    `Hm… une configuration digne de ma précision.`,
                    `Je ne peux nier que cela flatte mon égo.`,
                    `Chaque atout renforce ce que je suis déjà : dominant.`,
                    `C’est agréable de jouer avec une main qui suit mes ambitions.`,
                    `Je me sens parfaitement à ma place avec tant de possibilités.`,
                    `Cette abondance n’est pas un hasard : elle me reconnaît.`,
                    `Une main à mon image : tranchante, stable, supérieure.`,
                    `Je jouerai ces atouts comme ils doivent l’être : magistralement.`
                ]
            }
        }
    }
}