/* quiz.js — Quiz page logic */

const STORAGE_KEY_ANSWERS = 'maSmmQuizAnswers';
const STORAGE_KEY_RESULT  = 'maSmmQuizResult';

let currentIndex = 0;
let answers = {};   // { [question_id]: choice_id }

/* ============================
   Data helpers
   ============================ */

function getQuestions() {
  return quizData.questions.slice().sort((a, b) => a.question_order - b.question_order);
}

function getSectionsMap() {
  const map = {};
  quizData.sections.forEach(s => { map[s.section_id] = s; });
  return map;
}

/* ============================
   Storage
   ============================ */

function loadSavedAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ANSWERS);
    if (raw) {
      answers = JSON.parse(raw);
    }
  } catch (e) {
    answers = {};
  }
}

function saveAnswers() {
  localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(answers));
}

/* ============================
   Progress bar
   ============================ */

function updateProgressBar() {
  const questions = getQuestions();
  const pct = ((currentIndex + 1) / questions.length) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';

  const counter = document.getElementById('question-counter');
  if (counter) {
    counter.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  }
}

/* ============================
   Render a single question
   ============================ */

function renderQuestion(index) {
  const questions  = getQuestions();
  const sectionsMap = getSectionsMap();
  const question   = questions[index];
  const section    = sectionsMap[question.section_id];

  // Section label
  const sectionLabel = document.getElementById('section-label');
  if (sectionLabel) sectionLabel.textContent = section ? section.section_title : '';

  // Question text
  const qText = document.getElementById('question-text');
  if (qText) qText.textContent = question.question_text;

  // Choices
  const choicesList = document.getElementById('choices-list');
  choicesList.innerHTML = '';

  const selectedChoice = answers[question.question_id] || null;

  question.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-item' + (choice.choice_id === selectedChoice ? ' selected' : '');
    btn.setAttribute('type', 'button');
    btn.setAttribute('data-choice-id', choice.choice_id);
    btn.setAttribute('data-question-id', question.question_id);
    btn.setAttribute('aria-pressed', choice.choice_id === selectedChoice ? 'true' : 'false');

    const keySpan = document.createElement('span');
    keySpan.className = 'choice-key';
    keySpan.textContent = choice.choice_key;

    const textSpan = document.createElement('span');
    textSpan.textContent = choice.choice_text;

    btn.appendChild(keySpan);
    btn.appendChild(textSpan);

    btn.addEventListener('click', () => handleChoiceSelect(question.question_id, choice.choice_id));

    choicesList.appendChild(btn);
  });

  // Navigation buttons
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');

  if (prevBtn) {
    prevBtn.disabled = index === 0;
    prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
  }

  if (nextBtn) {
    const isLast = index === questions.length - 1;
    nextBtn.textContent  = isLast ? 'Finish Quiz' : 'Next';
    nextBtn.disabled     = !selectedChoice;
  }

  updateProgressBar();
}

/* ============================
   Choice selection
   ============================ */

function handleChoiceSelect(questionId, choiceId) {
  answers[questionId] = choiceId;
  saveAnswers();

  // Update UI without full re-render
  const allChoices = document.querySelectorAll('.choice-item');
  allChoices.forEach(btn => {
    const isSelected = btn.getAttribute('data-choice-id') === choiceId;
    btn.classList.toggle('selected', isSelected);
    btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });

  // Enable Next button
  const nextBtn = document.getElementById('btn-next');
  if (nextBtn) nextBtn.disabled = false;
}

/* ============================
   Navigation
   ============================ */

function goToNextQuestion() {
  const questions = getQuestions();
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion(currentIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    finishQuiz();
  }
}

function goToPrevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion(currentIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ============================
   Scoring & classification
   ============================ */

function calculateResults(savedAnswers) {
  const questions    = getQuestions();
  const sectionsMap  = getSectionsMap();

  let maTotalScore  = 0;
  let smmTotalScore = 0;

  // Section accumulators: { section_id: { ma: 0, smm: 0 } }
  const sectionScores = {};
  quizData.sections.forEach(s => {
    sectionScores[s.section_id] = { ma: 0, smm: 0 };
  });

  questions.forEach(q => {
    const selectedChoiceId = savedAnswers[q.question_id];
    if (!selectedChoiceId) return;

    const choice = q.choices.find(c => c.choice_id === selectedChoiceId);
    if (!choice) return;

    maTotalScore  += choice.score_ma;
    smmTotalScore += choice.score_smm;

    if (sectionScores[q.section_id]) {
      sectionScores[q.section_id].ma  += choice.score_ma;
      sectionScores[q.section_id].smm += choice.score_smm;
    }
  });

  // Percentages — max per track is 100 (20 questions × max 5 pts)
  const maxScore  = 100;
  const maPct     = Math.round((maTotalScore / maxScore) * 100);
  const smmPct    = Math.round((smmTotalScore / maxScore) * 100);
  const scoreDiff = maTotalScore - smmTotalScore;

  // Classification (checked in order)
  let bestFit, resultBand;

  if (maTotalScore >= 65 && (maTotalScore - smmTotalScore) >= 10) {
    bestFit    = 'Marketing Automation';
    resultBand = 'strong_ma_fit';
  } else if (smmTotalScore >= 65 && (smmTotalScore - maTotalScore) >= 10) {
    bestFit    = 'Social Media Management';
    resultBand = 'strong_smm_fit';
  } else if (Math.abs(maTotalScore - smmTotalScore) < 10 && (maTotalScore >= 50 || smmTotalScore >= 50)) {
    bestFit    = 'Hybrid';
    resultBand = 'hybrid_fit';
  } else {
    bestFit    = 'Foundation First';
    resultBand = 'foundation_first';
  }

  // Result content
  const resultContent = getResultContent(resultBand);

  // Section breakdown array
  const sectionBreakdown = quizData.sections
    .slice()
    .sort((a, b) => a.section_order - b.section_order)
    .map(s => ({
      section_id:    s.section_id,
      section_title: s.section_title,
      ma_score:      sectionScores[s.section_id].ma,
      smm_score:     sectionScores[s.section_id].smm
    }));

  return {
    ma_score_total:    maTotalScore,
    smm_score_total:   smmTotalScore,
    ma_percentage:     maPct,
    smm_percentage:    smmPct,
    best_fit:          bestFit,
    result_band:       resultBand,
    score_gap:         Math.abs(scoreDiff),
    section_breakdown: sectionBreakdown,
    summary:           resultContent.summary,
    recommendations:   resultContent.recommendations
  };
}

function getResultContent(resultBand) {
  const content = {
    strong_ma_fit: {
      summary: 'You appear to be a stronger fit for structured, backend, process-oriented work such as CRM organization, workflow support, follow-up systems, and automation-related tasks.',
      recommendations: [
        'CRM cleanup and organization',
        'Lead tracker maintenance',
        'Follow-up support',
        'Workflow documentation',
        'Backend admin support that can later evolve into automation support'
      ]
    },
    strong_smm_fit: {
      summary: 'You appear to be a stronger fit for content-facing and audience-facing work such as content scheduling, social media support, caption workflows, and page management.',
      recommendations: [
        'Content scheduling',
        'Caption support',
        'Content calendar assistance',
        'Page management support',
        'Basic engagement / community support'
      ]
    },
    hybrid_fit: {
      summary: 'You show signs of fit for both backend operational work and content support. You may do well starting as a general VA with both admin/process support and light content support before specializing.',
      recommendations: [
        'Admin + content VA support',
        'Content scheduling + backend organization',
        'Simple CRM and page support combo offers',
        'General business support VA role'
      ]
    },
    foundation_first: {
      summary: 'Your answers suggest you may still be in the exploration stage. Instead of choosing a niche immediately, focus first on building foundational VA skills and testing small tasks from both directions.',
      recommendations: [
        'Improve admin and communication basics',
        'Practice spreadsheets, SOPs, and task management',
        'Try basic content scheduling tasks',
        'Test mini projects in both MA and SMM'
      ]
    }
  };
  return content[resultBand] || content.foundation_first;
}

/* ============================
   Finish quiz
   ============================ */

function finishQuiz() {
  const questions = getQuestions();

  // Validate all questions are answered
  const unanswered = questions.filter(q => !answers[q.question_id]);
  if (unanswered.length > 0) {
    alert(`Please answer all questions before finishing. ${unanswered.length} question(s) remaining.`);
    // Jump to first unanswered
    const firstUnansweredIndex = questions.findIndex(q => !answers[q.question_id]);
    if (firstUnansweredIndex >= 0) {
      currentIndex = firstUnansweredIndex;
      renderQuestion(currentIndex);
    }
    return;
  }

  // Calculate and store results
  const result = calculateResults(answers);
  localStorage.setItem(STORAGE_KEY_RESULT, JSON.stringify(result));

  // Navigate to results page
  window.location.href = 'results.html';
}

/* ============================
   Init
   ============================ */

document.addEventListener('DOMContentLoaded', () => {
  loadSavedAnswers();

  const questions = getQuestions();

  // Restore to last answered question or start from 0
  let restoreIndex = 0;
  for (let i = 0; i < questions.length; i++) {
    if (answers[questions[i].question_id]) {
      restoreIndex = i;
    } else {
      break;
    }
  }
  currentIndex = restoreIndex;

  renderQuestion(currentIndex);

  // Wire buttons
  const nextBtn = document.getElementById('btn-next');
  const prevBtn = document.getElementById('btn-prev');

  if (nextBtn) nextBtn.addEventListener('click', goToNextQuestion);
  if (prevBtn) prevBtn.addEventListener('click', goToPrevQuestion);
});
