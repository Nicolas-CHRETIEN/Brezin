function showScoreGain(who, amount) {
  const selector = (who === "player")
    ? ".score-normal_result-player h3"
    : ".score-normal_result-computer h3";

  const target = document.querySelector(selector);
  if (!target) return;

  const gain = el("span", { class: "score-gain" }, `+${amount}`);
  target.append(gain);

  gain.addEventListener("animationend", () => gain.remove());
}

function showTrickPoints(amount) {
  const target = document.querySelector(".trick-stock");
  if (!target) {return;}

  const gain = el("span", { class: "score-gain" }, `+${amount}`);
  target.append(gain);

  gain.addEventListener("animationend", () => gain.remove());
}