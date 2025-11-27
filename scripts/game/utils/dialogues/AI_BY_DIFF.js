const AI_BY_DIFF = {
  expert: "Andry",
  hard:   "Jehanne",
  normal: "Perrot",
  easy:   "Radegonde"
};

function getCurrentAIId() {
  const diff = S.difficulty || "normal";
  const aiName = AI_BY_DIFF[diff];

  // fallback raisonnable si jamais diff est foireux
  if (!aiName) return AI_IDS.PERROT;

  return aiName;
}

const AI_IDS = Object.freeze({
  RADEGONDE: "Radegonde",
  PERROT:    "Perrot",
  JEHANNE:   "Jehanne",
  ANDRY:     "Andry",
});