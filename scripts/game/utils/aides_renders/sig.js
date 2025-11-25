// ======================================================
// ============  Génération de signature JSON  ============
// ======================================================
// Rôle.
// ----
// Produit une représentation JSON compacte d’un objet,
// utilisée comme “signature” pour détecter les changements
// d’état dans le cache de rendu ou les comparaisons rapides.
//
// Étapes.
// -------
// 1) Convertit l’objet fourni en chaîne JSON via JSON.stringify().
// 2) Retourne la chaîne résultante.
//
// Exemple.
// --------
// const keySig = sig(statePart); // comparaison simple entre rendus

const sig = obj => JSON.stringify(obj);