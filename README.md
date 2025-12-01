# Jeu du Brézin – Application Desktop
## Jeu de cartes médiéval berrichon – Version numérique

## Présentation
<img width="200" height="908" alt="image" src="https://github.com/user-attachments/assets/3471ef2b-61d3-4812-bd93-617f8b599d79" />

Le **Jeu du Brézin** est une adaptation numérique moderne d’un jeu de cartes traditionnel du Berry, jouable en duel contre une IA.  
L’application est développée en **HTML**, **CSS** et **JavaScript**, et empaquetée via **Python + PyInstaller** (pywebview) pour fonctionner comme un exécutable Windows autonome.

L’objectif est d’offrir une expérience fluide, immersive et fidèle à l’esprit médiéval berrichon grâce à :

- une **IA dotée de personnalités** (Radegonde, Perrot, Jehanne, Andry)
- un **système dynamique de dialogues en berrichon**
- des **animations, sons, effets** et de nombreux assets graphiques
- un **système complet de statistiques** (scores, historiques, graphiques)

<img width="537" height="727" alt="image" src="https://github.com/user-attachments/assets/6b4185e6-9c4b-4e65-8fdd-32d7751d2515" />


# Fonctionnalités principales

## Gameplay

- Jeu en **1 contre 1** contre une IA
- Gestion complète du jeu : **pioche, plis, atout, annonces, score**, conditions de victoire
- Utilisation de **deux jeux de 32 cartes**
- Animations visuelles lors des annonces (Brézin, 40 de Brézin, 250, couples, carrés…)
- Interface **responsive** et optimisée

<img width="1918" height="1022" alt="image" src="https://github.com/user-attachments/assets/3155a4ac-6eb6-42a0-ab71-f4d77c5a04d8" />


## Intelligence Artificielle

**4 niveaux de difficulté** :  
**Radegonde (facile)** – **Perrot (normal)** – **Jehanne (difficile)** – **Andry (expert)**


<img width="200" height="736" alt="image" src="https://github.com/user-attachments/assets/e688e57d-bee1-4983-8aa7-715372bf9a60" />
<img width="200" height="736" alt="image" src="https://github.com/user-attachments/assets/037ee9aa-697d-4531-acc6-8fb20e5f32cd" />
<img width="200" height="736" alt="image" src="https://github.com/user-attachments/assets/82135c34-9e27-489f-88c4-d9fc559d20d3" />
<img width="180" height="736" alt="image" src="https://github.com/user-attachments/assets/bbd2cce3-c5c9-40f5-9501-1630a7773670" />


Chaque personnage possède :

- une **personnalité unique**
- des **probabilités émotionnelles**
- un système de **dialogues contextuels**

## Dialogues et émotions

- Dialogues en **berrichon**, influencés par :
  - le contexte du pli  
  - le score  
  - les annonces  
  - les moments décisifs  
- Expressions issues du **lexique traditionnel du Berry**
- Affichage des émotions : **SVG dynamiques**, animations et textes contextualisés

<img width="730" height="247" alt="image" src="https://github.com/user-attachments/assets/895a856a-d206-4c26-b7e6-896f7552a24e" />

<img width="1336" height="668" alt="image" src="https://github.com/user-attachments/assets/d953ca60-0022-4764-82fc-eb61c12c414b" />



## Tableau de bord et statistiques

Chaque partie terminée est enregistrée dans le fichier **`brezin_scores.xlsx`**.

Le tableau de bord affiche :

- statistiques globales
- filtres par difficulté
- graphiques via **Chart.js**
- historique complet des parties

<img width="1232" height="942" alt="image" src="https://github.com/user-attachments/assets/cf81c3c7-d3b7-4e28-8901-8197e315a3d0" />


## Audio

- Musiques médiévales (accueil et partie)
- Bruitages dédiés : cartes jouées, annonces, plis, effets spéciaux
- Sliders indépendants **musique / bruitages**, valeurs persistées
- Transition **crossfade** entre les pistes musicales

## Application Desktop

- Application Windows autonome via **PyInstaller**
- Exécution **sans installation**
- Tous les assets intégrés à l’exécutable : HTML, CSS, JS, images, sons

## Structure du projet
```
appBrezin/
│
├── index.html
│   Page principale de l’application (écran d’accueil, règles, plateau, modales).
│
├── styles/
│   Feuilles de styles CSS (structure du jeu, modales, pages…).
│   ├── game/
│   ├── modales/
│   └── pages/
│
├── scripts/
│   Logique de jeu, IA, interface, dialogues, statistiques et audio.
│   │
│   ├── audio/
│   │   audioManager.js                # Gestion globale de la musique et des bruitages.
│   │   playSound.js                   # Lecture d’un son ou effet spécifique.
│   │
│   ├── game/
│   │   main.js                        # Point d’entrée du jeu.
│   │
│   │   ├── core/
│   │   │   ├── IA/
│   │   │   │   computerPlayFirst.js
│   │   │   │   computerPlayFirstEndGame.js
│   │   │   │   computerPlaySecond.js
│   │   │   │   computerPlaySecondEndGame.js
│   │   │   │   playFirstCardToLose.js
│   │   │   │   playFirstCardToWinForSure.js
│   │   │   │   playFirstCardToWinMaybe.js
│   │   │   │   trickGameSimulation.js
│   │   │   │
│   │   │   ├── consequences/
│   │   │   │   consequencesCard.js
│   │   │   │
│   │   │   └── value/
│   │   │       valueCard.js
│   │   │       brezinValue.js
│   │   │       littleBrezinValue.js
│   │   │       coupleValue.js
│   │   │       fourValue.js
│   │   │       twoFiftyValue.js
│   │   │
│   │   └── listeners/
│   │       listenerChoiceDifficulty.js
│   │       listenerComputerPlayFirst.js
│   │       listenerDeal.js
│   │       listenerDeclare.js
│   │       listenerDraw.js
│   │       listenerEndRound.js
│   │       listenerInit.js
│   │       listenerNewRound.js
│   │       listenerPlayerPlayFirst.js
│   │       listenerPlayerPlaySecond.js
│   │       listenerPlayerWonTrick.js
│   │       listenerShowDeclarationComputer.js
│   │       listenerShowSecondDeclarationComputer.js
│   │
│   ├── responsive/
│   │   responsive.js
│   │
│   ├── ui/
│   │   ├── modales/
│   │   │   showComputerDeclarationModal.js
│   │   │   showDifficultyChoiceModal.js
│   │   │   showEndOfGameModal.js
│   │   │   showEndOfRoundModal.js
│   │   │   showPlayerDeclarationModal.js
│   │   │   showTrickModal.js
│   │   │
│   │   └── renders/
│   │       renderGame.js
│   │       renderHand.js
│   │       renderTricks.js
│   │       renderTrump.js
│   │       renderStack.js
│   │       renderScores.js
│   │       renderDeclaration.js
│   │       renderDeclarationTotals.js
│   │       renderDeclaredZones.js
│   │       setAiEmotion.js
│   │       addingPointAnimation.js
│   │       wireLastTrickPopover.js
│   │       renderCardsLikeHand.js
│   │       renderCardsInto.js
│   │       renderPlayed.js
│   │       renderStackPile.js
│   │       scoreAnimator.js
│   │
│   └── utils/
│       ├── actions_jeu/
│       ├── aides_jeu/
│       ├── aides_modales/
│       ├── aides_renders/
│       ├── annonces/
│       ├── dialogues/
│       └── probabilites/
│
│
├── images/
│   Ressources graphiques : personnages, cartes, annonces, animations.
│
│   ├── adversaires/emotions/
│   │   SVG des émotions IA (colère, joie, doute, rire, fierté, surprise, tristesse, peur).
│
│   ├── gifs/
│   │   GIFs prêts à l’emploi pour les annonces et animations de victoire/défaite.
│
│   └── (autres sous-dossiers : cartes, annonces, 40_de_brezin, divers)
│
├── sons/
│   Fichiers audio (musiques et bruitages).
│   ├── musiques/
│   └── bruitages/
│
└── brezin_app.py
    Wrapper pywebview :
    - ouvre `index.html` dans une fenêtre native,
    - gère l’accès aux assets packagés,
    - met à jour le fichier Excel des scores.
```

# Technologies utilisées

## Interface et logique
- HTML5 / CSS3  
- JavaScript ES6+  
- Modules JS organisés et commentés

## Graphismes et animations
- PNG et SVG personnalisés  
- GIF et séquences multi-frames  
- Animations CSS et JS

## Audio
- API `Audio()`  
- Crossfade JavaScript personnalisé

## Statistiques
- Chart.js  
- openpyxl (écriture du fichier Excel)

## Packaging
- Python 3.x  
- pywebview  
- PyInstaller




