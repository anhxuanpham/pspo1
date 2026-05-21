// ============ QUIZ ENGINE ============
(function () {
  const startEl = document.getElementById('quizStart');
  const playEl = document.getElementById('quizPlay');
  const resultEl = document.getElementById('quizResult');
  const startBtn = document.getElementById('quizStartBtn');
  const nextBtn = document.getElementById('quizNext');
  const markBtn = document.getElementById('quizMark');
  const reviewBtn = document.getElementById('quizReview');
  const restartBtn = document.getElementById('quizRestart');

  let questions = [];
  let current = 0;
  let score = 0;
  let answered = false;
  let instantMode = true;
  let answers = []; // { qIdx, selected, correct, marked }
  let marked = new Set();

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function shuffleOptions(q) {
    const indices = q.opts.map((_, i) => i);
    const shuffled = shuffle(indices);
    const newOpts = shuffled.map(i => q.opts[i]);
    const newAns = shuffled.indexOf(q.ans);
    return { ...q, opts: newOpts, ans: newAns, origOpts: q.opts, origAns: q.ans };
  }

  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', nextQuestion);
  markBtn.addEventListener('click', toggleMark);
  reviewBtn.addEventListener('click', showReview);
  restartBtn.addEventListener('click', restart);

  function startQuiz() {
    const mode = document.querySelector('input[name="qmode"]:checked').value;
    const doShuffle = document.getElementById('quizShuffle').checked;
    instantMode = document.getElementById('quizInstant').checked;

    let pool = [...QUIZ_DATA];
    if (doShuffle) pool = shuffle(pool);

    const count = mode === 'all' ? pool.length : parseInt(mode);
    questions = pool.slice(0, count);

    if (doShuffle) {
      questions = questions.map(shuffleOptions);
    }

    current = 0;
    score = 0;
    answers = [];
    marked = new Set();
    answered = false;

    startEl.classList.add('hidden');
    resultEl.classList.add('hidden');
    playEl.classList.remove('hidden');
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    nextBtn.disabled = true;
    markBtn.textContent = marked.has(current) ? '🚩 Đã đánh dấu' : '🚩 Đánh dấu';
    document.getElementById('quizExplain').classList.add('hidden');

    const q = questions[current];
    const total = questions.length;

    document.getElementById('quizProgress').style.width = `${((current) / total) * 100}%`;
    document.getElementById('quizCounter').textContent = `Câu ${current + 1}/${total}`;
    document.getElementById('quizScore').textContent = `Đúng: ${score}`;

    document.getElementById('quizQ').innerHTML = `<span class="qnum">Câu ${current + 1}/${total}</span>${q.q}`;

    const letters = 'ABCDEFGH';
    document.getElementById('quizOpts').innerHTML = q.opts.map((opt, i) =>
      `<div class="quiz-opt" data-idx="${i}">
        <span class="quiz-opt__letter">${letters[i]}</span>
        <span>${opt}</span>
      </div>`
    ).join('');

    document.querySelectorAll('.quiz-opt').forEach(el => {
      el.addEventListener('click', () => selectAnswer(parseInt(el.dataset.idx)));
    });
  }

  function selectAnswer(idx) {
    if (answered) return;
    answered = true;

    const q = questions[current];
    const correct = idx === q.ans;
    if (correct) score++;

    answers.push({ qIdx: current, selected: idx, correct, marked: marked.has(current) });

    const opts = document.querySelectorAll('.quiz-opt');
    opts.forEach((el, i) => {
      el.classList.add('disabled');
      if (i === q.ans) el.classList.add('correct');
      if (i === idx && !correct) el.classList.add('wrong');
      if (i === idx) el.classList.add('selected');
    });

    if (instantMode) {
      const explainEl = document.getElementById('quizExplain');
      explainEl.innerHTML = `<b>${correct ? '✅ Đúng!' : '❌ Sai!'}</b> ${q.explain}`;
      explainEl.classList.remove('hidden');
    }

    nextBtn.disabled = false;
    nextBtn.textContent = current === questions.length - 1 ? 'Xem kết quả →' : 'Câu tiếp →';

    document.getElementById('quizScore').textContent = `Đúng: ${score}`;
    document.getElementById('quizProgress').style.width = `${((current + 1) / questions.length) * 100}%`;
  }

  function nextQuestion() {
    current++;
    if (current >= questions.length) {
      showResult();
    } else {
      renderQuestion();
    }
  }

  function toggleMark() {
    if (marked.has(current)) {
      marked.delete(current);
      markBtn.textContent = '🚩 Đánh dấu';
    } else {
      marked.add(current);
      markBtn.textContent = '🚩 Đã đánh dấu';
    }
  }

  function showResult() {
    playEl.classList.add('hidden');
    resultEl.classList.remove('hidden');

    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const pass = pct >= 85;

    document.getElementById('quizRing').style.setProperty('--p', `${pct}%`);
    document.getElementById('quizPercent').textContent = `${pct}%`;
    document.getElementById('quizVerdict').textContent = pass ? '🎉 Đạt! PASS' : '📚 Chưa đạt — cần ôn thêm';
    document.getElementById('quizVerdict').style.color = pass ? 'var(--good)' : 'var(--warn)';
    document.getElementById('quizSummary').textContent = `${score}/${total} câu đúng · ${total - score} câu sai · Cần ≥ 85% để pass PSPO I`;

    document.getElementById('quizReviewList').classList.add('hidden');
  }

  function showReview() {
    const reviewList = document.getElementById('quizReviewList');
    reviewList.classList.toggle('hidden');

    if (reviewList.innerHTML) return;

    const wrong = answers.filter(a => !a.correct);
    if (wrong.length === 0) {
      reviewList.innerHTML = '<p style="text-align:center;color:var(--good);">🎉 Bạn trả lời đúng tất cả! Không có câu sai.</p>';
      return;
    }

    const letters = 'ABCDEFGH';
    reviewList.innerHTML = wrong.map(a => {
      const q = questions[a.qIdx];
      return `<div class="quiz-review-item">
        <h4>Câu ${a.qIdx + 1}: ${q.q}</h4>
        <p class="qreview-your">Bạn chọn: ${letters[a.selected]}. ${q.opts[a.selected]}</p>
        <p class="qreview-correct">Đáp án đúng: ${letters[q.ans]}. ${q.opts[q.ans]}</p>
        <p class="qreview-explain">${q.explain}</p>
      </div>`;
    }).join('');
  }

  function restart() {
    resultEl.classList.add('hidden');
    startEl.classList.remove('hidden');
    document.getElementById('quizReviewList').innerHTML = '';
  }
})();
