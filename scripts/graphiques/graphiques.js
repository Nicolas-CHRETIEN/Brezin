// ======================================================
// =============   Tableau de bord / Graphiques  ========
// ======================================================
//
// But du fichier
// ---------------
// Fournir toutes les fonctions nécessaires pour:
// - récupérer les lignes de parties via l'API pywebview (read_rows),
// - construire les métriques (KPI, séries de scores, histogrammes d'écarts, radar d'annonces),
// - injecter ces données dans les KPI, le tableau "dernières parties" et 4 graphiques Chart.js,
// - lancer un rafraîchissement automatique de l'écran d'accueil quand il est actif.
//
// Ce que fait le script
// ---------------------
// 1) Expose un helper global `getPywebviewApi()` qui attend proprement l’API pywebview.
// 2) Définit des utilitaires (coercition nombres/chaînes, parsing d’annonces, normalisation).
// 3) Construit des métriques à partir des lignes retournées par `read_rows(300)`.
// 4) Met à jour les KPI (compteurs/percentages), remplit la table, et rend les graphiques.
// 5) Crée le tableau des dernières parties.
// 6) Construit les graphiques.
// 7) Au chargement (DOMContentLoaded), si l’écran "home" est actif, lance le refresh.
// 8) Crée un hook au chargement.

// ---------- 1) Exposer un helper global pour pywebview ----------
(() => {
  async function getPywebviewApi(timeout = 10000) {
    if (window.pywebview?.api) return window.pywebview.api;
    const waitEvent   = new Promise(res => window.addEventListener('pywebviewready', () => res(window.pywebview?.api || null), { once: true }));
    const waitTimeout = new Promise(res => setTimeout(() => res(null), timeout));
    return Promise.race([waitEvent, waitTimeout]);
  }
  window.getPywebviewApi = getPywebviewApi;
})();

// ---------- 2) Helpers généraux (compacts) ----------
const N  = x => { const v = Number(typeof x === 'string' ? x.replace(',', '.').trim() : x); return Number.isFinite(v) ? v : 0; };
const S2 = v => (v == null ? '' : String(v));
const lc = s => S2(s).toLowerCase();

// "a=10, b=40" -> ["a","b"]
function parseAnnouncementList(s){
  return s ? String(s).split(',').map(t => t.trim()).filter(Boolean).map(t => t.split('=').shift().trim()) : [];
}

// Regroupe les libellés d’annonces disparates sous des catégories stables pour le radar.
function normalizeDeclName(name){
  const t = S2(name).toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
  if (t.includes("couple d'atout")) return "couple d'atout";
  if (t.includes('couple de'))      return "Couples";
  if (t.includes('valets'))         return "Carré de valets";
  if (t.includes('dames'))          return "Carré de dames";
  if (t.includes('rois'))           return "Carré de rois";
  if (t.includes('as'))             return "Carré d'as";
  if (/(^|\b)7\b.*atout|sept.*atout/.test(t)) return "7 d'atout";
  if (t.includes('40 de brezin'))   return "40 de Brézin";
  if (t.includes('brezin'))         return "Brézin";
  if (t.includes('deux cent cinquante')) return "250";
  return null; // ignoré
}

const parseDatetimeLabel = r => {
  const d = S2(r.date), h = S2(r.heure);
  return (d || h) ? `${d} ${h}`.trim() : '';
};

// ---------- 3) Construire les métriques pour KPI/Charts ----------
function buildMetricsFromRows(rows){
  const total = rows.length;

  // Victoires.
  let winsP = 0, winsC = 0;
  const winP = ['joueur','player','p1'], winC = ['ordinateur','ia','computer','p2'];

  // Séries temporelles.
  const labels = [], sP = [], sC = [];

  // Histogramme des écarts (classes non chevauchantes).
  const gapRanges = [
    { label: "Moins de 100",  test: g => g < 100 },
    { label: "100 à 499",     test: g => g >= 100 && g < 500 },
    { label: "500 à 999",     test: g => g >= 500 && g < 1000 },
    { label: "1000 et plus",  test: g => g >= 1000 }
  ];
  const binLabels = gapRanges.map(r => r.label);
  const binCounts = new Array(binLabels.length).fill(0);

  // Radar
  const radarCats = ["Couples","couple d'atout","Carré de valets","Carré de dames","Carré de rois","Carré d'as","7 d'atout","250","40 de Brézin","Brézin"];
  const radarCounts = Object.fromEntries(radarCats.map(k => [k,0]));

  // KPI
  let sumScoreP = 0, sumGap = 0;

  for (const r of rows) {
    const v = lc(r.vainqueur);
    if (winP.some(t => v.includes(t))) winsP++; else winsC++;

    const p = N(r.score_joueur), c = N(r.score_ordi), g = Math.abs(N(r.ecart));
    labels.push(parseDatetimeLabel(r) || `Partie ${labels.length+1}`);
    sP.push(p); sC.push(c);

    const kGap = gapRanges.findIndex(rng => rng.test(g));
    if (kGap >= 0) binCounts[kGap]++;

    const lst = [...parseAnnouncementList(r.liste_annonces_joueur), ...parseAnnouncementList(r.liste_annonces_ordi)];
    for (const name of lst) {
      const k = normalizeDeclName(name);
      if (k && radarCounts[k] != null) radarCounts[k]++;
    }

    sumScoreP += p;
    sumGap    += g;
  }

  const gamesPlayed   = total;
  const winratePlayer = total ? (winsP/total)*100 : 0;
  const avgScoreP     = total ? (sumScoreP/total) : 0;
  const avgGap        = total ? (sumGap/total)    : 0;

  return {
    gamesPlayed, winratePlayer, avgScoreP, avgGap,
    outcomes: { labels: ['Victoires Joueur','Victoires Ordinateur'], data: [winsP,winsC] },
    scores:   { labels, sP, sC },
    gaps:     { labels: binLabels, counts: binCounts },
    decls:    { labels: radarCats, values: radarCats.map(k => radarCounts[k]) }
  };
}

// ---------- 4) Mise à jour KPI ----------
function updateKPIs(M){
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt('kpi-games-played',      String(M.gamesPlayed));
  setTxt('kpi-winrate-player',    `${Math.round(M.winratePlayer)}%`);
  setTxt('kpi-avgscore-player',   String(Math.round(M.avgScoreP)));
  setTxt('kpi-avg-gap',           String(Math.round(M.avgGap)));
}

// ---------- 5) Tableau des dernières parties ----------
function fillRecentGamesTable(rows){
  const tbody = document.querySelector('#table-recent-games tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  [...rows].reverse().forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${S2(r.date)}</td>
      <td>${S2(r.heure)}</td>
      <td>${S2(r.vainqueur)}</td>
      <td>${S2(r.score_joueur)}</td>
      <td>${S2(r.score_ordi)}</td>
      <td>${S2(r.ecart)}</td>
      <td>${S2(r.liste_annonces_joueur || r.annonces_joueur)}</td>
      <td>${S2(r.liste_annonces_ordi   || r.annonces_ordi)}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ---------- 6) Construit les graphiques (Chart.js) ----------
let CH_OUTCOMES=null, CH_SCORES=null, CH_GAP=null, CH_DECLS=null;
window.logToScreen = window.logToScreen || ((msg, color) => console[color ? 'warn' : 'log'](msg));

function ensureCharts(M){
  if (!window.Chart){
    logToScreen("Chart.js introuvable : charge 'chart.umd.min.js' avant ce script.", "#ffc107");
    return;
  }

  // Outcomes (doughnut).
  {
    const root = document.getElementById('chart-outcomes');
    if (root){
      root.innerHTML = '<canvas id="cv-outcomes"></canvas>';
      const ctx = document.getElementById('cv-outcomes').getContext('2d');
      CH_OUTCOMES?.destroy();
      CH_OUTCOMES = new Chart(ctx, {
        type: 'doughnut',
        data: { labels: M.outcomes.labels, datasets: [{ data: M.outcomes.data }] },
        options: { responsive:true, maintainAspectRatio:false, cutout:'60%', animation:false }
      });
    }
  }

  // Scores (line).
  {
    const root = document.getElementById('chart-scores');
    if (root){
      root.innerHTML = '<canvas id="cv-scores"></canvas>';
      const ctx = document.getElementById('cv-scores').getContext('2d');
      CH_SCORES?.destroy();
      CH_SCORES = new Chart(ctx, {
        type: 'line',
        data: {
          labels: M.scores.labels,
          datasets: [
            { label:'Joueur',     data: M.scores.sP },
            { label:'Ordinateur', data: M.scores.sC }
          ]
        },
        options: { responsive:true, maintainAspectRatio:false, animation:false }
      });
    }
  }

  // Écarts (bar).
  {
    const root = document.getElementById('chart-gap');
    if (root){
      root.innerHTML = '<canvas id="cv-gap"></canvas>';
      const ctx = document.getElementById('cv-gap').getContext('2d');
      CH_GAP?.destroy();
      CH_GAP = new Chart(ctx, {
        type: 'bar',
        data: { labels: M.gaps.labels, datasets: [{ label:'Nombre de parties', data: M.gaps.counts }] },
        options: { responsive:true, maintainAspectRatio:false, animation:false }
      });
    }
  }

  // Annonces (radar).
  {
    const root = document.getElementById('chart-declarations');
    if (root){
      root.innerHTML = '<canvas id="cv-decls"></canvas>';
      const ctx = document.getElementById('cv-decls').getContext('2d');
      CH_DECLS?.destroy();
      CH_DECLS = new Chart(ctx, {
        type: 'radar',
        data: { labels: M.decls.labels, datasets: [{ label:'Occurrences', data: M.decls.values }] },
        options: { responsive:true, maintainAspectRatio:false, animation:false, scales:{ r:{ beginAtZero:true } } }
      });
    }
  }
}

// ---------- 6) Rafraîchissement global ----------
async function refreshHomeDashboard(){
  const api = await window.getPywebviewApi();
  if (!api) return;

  try {
    const res  = await api.read_rows(300);
    const rows = res?.ok ? (res.rows || []) : [];
    const M = buildMetricsFromRows(rows);
    updateKPIs(M);
    ensureCharts(M);
    fillRecentGamesTable(rows);
    logToScreen(`OK - ${rows.length} lignes chargées.`);
  } catch (e) {
    logToScreen("Erreur : " + (e?.message || e), "#f44");
  }
}

// ---------- 7) Hook au chargement ----------
document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById('screen-home');
  if (home?.classList.contains('screen--active')) refreshHomeDashboard();
});
