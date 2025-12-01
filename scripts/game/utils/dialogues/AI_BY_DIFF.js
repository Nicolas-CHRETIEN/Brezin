// ======================================================
// ==========  Sélection de l'IA selon difficulté  =======
// ======================================================
//
// Rôle du module.
// ----------------
// Associer une difficulté ("easy" / "normal" / "hard" / "expert")
// à l'identité de l'IA correspondante.
//
// Ce que fait le script.
// -----------------------
// 1) Définit une table de correspondance difficulté → nom de l’IA.
// 2) Fournit getCurrentAIId() qui retourne l’IA correspondant
//    à S.difficulty.
// 3) Utilise un fallback sûr si S.difficulty contient une valeur incorrecte.
//
// Remarque.
// ---------
// - Toute l’application stocke la difficulté dans window.S.difficulty.
// - La fonction ne crée aucune donnée dans S.
//


// ======================================================
// ================  Table de correspondance  ===========
// ======================================================
//
// Format compact, lisible, stable.
//
const AI_BY_DIFF = {
  expert: "Andry",
  hard:   "Jehanne",
  normal: "Perrot",
  easy:   "Radegonde"
};


// ======================================================
// ====================  Identifiants  ==================
// ======================================================
//
// Object.freeze pour garantir l’immuabilité.
//
const AI_IDS = Object.freeze({
  RADEGONDE: "Radegonde",
  PERROT:    "Perrot",
  JEHANNE:   "Jehanne",
  ANDRY:     "Andry",
});


// ======================================================
// ============  Sélection IA courante (S.difficulty) ===
// ======================================================
//
// Renvoie toujours un identifiant IA valide.
// Le fallback par défaut est Perrot (niveau normal).
//
function getCurrentAIId() {

  const diff = S.difficulty || "normal";
  const aiName = AI_BY_DIFF[diff];

  // Aucun test superflu : si aiName est falsy, Perrot est renvoyé.
  return aiName || AI_IDS.PERROT;
}
