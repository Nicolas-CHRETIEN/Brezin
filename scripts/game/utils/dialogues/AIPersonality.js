// ======================================================
// ==================  Personnalités IA  =================
// ======================================================
//
// Rôle du module.
// ----------------
// Définir les traits émotionnels et comportementaux des IA,
// afin d’influencer :
//   - la probabilité de parler (baseParole)
//   - le poids de chaque émotion (rire, joie, fierté, etc.)
//   - la sélection finale d’une émotion selon la valence.
//
// Ce que fait le script.
// ----------------------
// 1) Expose une table AI_PERSONNALITES contenant les poids pour
//    chaque IA connue (Radegonde, Perrot, Jehanne, Andry).
// 2) Déclare une constante VALENCE_FORCE_TALK indiquant à partir
//    de quelle intensité d’évènement l’IA doit ABSOLUMENT parler.
// 3) Ne crée aucune donnée dans S, ne modifie aucune logique externe.
//
// Remarque.
// ---------
// Toutes les IA utilisent les mêmes clés d’émotions :
// { rire, fierte, joie, doute, surprise, colere, tristesse, peur }.
// "baseParole" influence la probabilité de prise de parole spontanée.
//


// ======================================================
// ======================  Données  ======================
// ======================================================

const AI_PERSONNALITES = {
  Radegonde: {
    baseParole: 0.7,
    rire:       0.6,
    fierte:     0.4,
    joie:       0.7,
    doute:      0.2,
    surprise:   0.4,
    colere:     0.1,
    tristesse:  0.3,
    peur:       0.3
  },

  Perrot: {
    baseParole: 0.6,
    rire:       0.7,
    fierte:     0.4,
    joie:       0.6,
    doute:      0.2,
    surprise:   0.4,
    colere:     0.2,
    tristesse:  0.1,
    peur:       0.3
  },

  Jehanne: {
    baseParole: 0.5,
    rire:       0.2,
    fierte:     0.6,
    joie:       0.4,
    doute:      0.5,
    surprise:   0.6,
    colere:     0.3,
    tristesse:  0.3,
    peur:       0.6
  },

  Andry: {
    baseParole: 0.4,
    rire:       0.1,
    fierte:     0.8,
    joie:       0.4,
    doute:      0.2,
    surprise:   0.4,
    colere:     0.7,
    tristesse:  0.1,
    peur:       0.2
  }
};


// ======================================================
// ==================  Seuil de parole  =================
// ======================================================
//
// Au-delà de cette valence (en absolu), l’IA DOIT parler.
// Exemple : valence = ±2 → évènement majeur.
//           valence = ±3 → extrême.
//
const VALENCE_FORCE_TALK = 2;
