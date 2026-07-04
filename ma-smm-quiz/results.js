/* results.js — Results page logic */

const STORAGE_KEY_ANSWERS = 'maSmmQuizAnswers';
const STORAGE_KEY_RESULT  = 'maSmmQuizResult';

/* ============================
   Load & validate result
   ============================ */

function loadResult() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_RESULT);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

/* ============================
   Render result band badge
   ============================ */

function getBadgeClass(resultBand) {
  const map = {
    strong_ma_fit:  'strong-ma',
    strong_smm_fit: 'strong-smm',
    hybrid_fit:     'hybrid',
    foundation_first: 'foundation'
  };
  return map[resultBand] || 'hybrid';
}

function getBadgeLabel(resultBand) {
  const map = {
    strong_ma_fit:   'Marketing Automation Fit',
    strong_smm_fit:  'Social Media Management Fit',
    hybrid_fit:      'Hybrid Fit',
    foundation_first:'Foundation First'
  };
  return map[resultBand] || resultBand;
}

function getResultHeadline(result) {
  const map = {
    strong_ma_fit:   'Your Best Fit: Marketing Automation',
    strong_smm_fit:  'Your Best Fit: Social Media Management',
    hybrid_fit:      'Your Best Fit: Hybrid VA',
    foundation_first:'Your Best Fit: Build the Foundation First'
  };
  return map[result.result_band] || `Your Best Fit: ${result.best_fit}`;
}

function getTagline(result) {
  const map = {
    strong_ma_fit:   'You show stronger alignment with backend, systems-based, and process-oriented work.',
    strong_smm_fit:  'You show stronger alignment with content-facing and audience-focused work.',
    hybrid_fit:      'You show balanced strengths in both operational and content support work.',
    foundation_first:'You are still exploring — build foundational skills before choosing a niche.'
  };
  return map[result.result_band] || '';
}

function getRecommendationTitle(result) {
  const map = {
    strong_ma_fit:   'Suggested Beginner Services',
    strong_smm_fit:  'Suggested Beginner Services',
    hybrid_fit:      'Suggested Beginner Services',
    foundation_first:'Suggested Next Steps'
  };
  return map[result.result_band] || 'Suggested Next Steps';
}

/* ============================
   Animate score bars
   ============================ */

function animateBars(maPct, smmPct) {
  setTimeout(() => {
    const maFill = document.getElementById('ma-fill');
    if (maFill) maFill.style.width = Math.min(maPct, 100) + '%';
  }, 100);

  setTimeout(() => {
    const smmFill = document.getElementById('smm-fill');
    if (smmFill) smmFill.style.width = Math.min(smmPct, 100) + '%';
  }, 250);
}

/* ============================
   Render the full results page
   ============================ */

function renderResults(result) {
  // Badge
  const badgeEl = document.getElementById('result-badge');
  if (badgeEl) {
    badgeEl.className = 'result-badge ' + getBadgeClass(result.result_band);
    badgeEl.textContent = getBadgeLabel(result.result_band);
  }

  // Headline
  const headlineEl = document.getElementById('result-headline');
  if (headlineEl) headlineEl.textContent = getResultHeadline(result);

  // Tagline
  const taglineEl = document.getElementById('result-tagline');
  if (taglineEl) taglineEl.textContent = getTagline(result);

  // MA score
  const maPctEl = document.getElementById('ma-pct');
  if (maPctEl) maPctEl.textContent = result.ma_percentage + '%';

  // SMM score
  const smmPctEl = document.getElementById('smm-pct');
  if (smmPctEl) smmPctEl.textContent = result.smm_percentage + '%';

  // Animate bars
  animateBars(result.ma_percentage, result.smm_percentage);

  // Summary
  const summaryEl = document.getElementById('result-summary');
  if (summaryEl) summaryEl.textContent = result.summary;

  // Recommendations
  const recTitle = document.getElementById('recommendations-title');
  if (recTitle) recTitle.textContent = getRecommendationTitle(result);

  const recList = document.getElementById('recommendations-list');
  if (recList) {
    recList.innerHTML = '';
    result.recommendations.forEach(rec => {
      const li = document.createElement('li');
      li.textContent = rec;
      recList.appendChild(li);
    });
  }

  // Section breakdown
  const breakdownBody = document.getElementById('breakdown-body');
  if (breakdownBody && result.section_breakdown) {
    breakdownBody.innerHTML = '';
    result.section_breakdown.forEach(section => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="section-name">${section.section_title}</td>
        <td>${section.ma_score}</td>
        <td>${section.smm_score}</td>
      `;
      breakdownBody.appendChild(tr);
    });
  }
}

/* ============================
   Retake quiz
   ============================ */

function retakeQuiz() {
  localStorage.removeItem(STORAGE_KEY_ANSWERS);
  localStorage.removeItem(STORAGE_KEY_RESULT);
  window.location.href = 'quiz.html';
}

/* ============================
   Init
   ============================ */

document.addEventListener('DOMContentLoaded', () => {
  const result = loadResult();

  if (!result) {
    // No result found — redirect to start
    window.location.href = 'index.html';
    return;
  }

  renderResults(result);

  // Retake button
  const retakeBtn = document.getElementById('btn-retake');
  if (retakeBtn) retakeBtn.addEventListener('click', retakeQuiz);
});
