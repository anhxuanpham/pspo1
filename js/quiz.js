// ============ QUIZ ENGINE v2 — Timer + Multi-select + Always shuffle answers ============
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
  let answers = [];
  let marked = new Set();
  let timerInterval = null;
  let timeLeft = 0;
  let timerEnabled = false;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Always shuffle answer options to prevent pattern detection
  function shuffleOptions(q) {
    const indices = q.opts.map((_, i) => i);
    const shuffled = shuffle(indices);
    const newOpts = shuffled.map(i => q.opts[i]);
    if (q.multi) {
      const newAns = q.ans.map(a => shuffled.indexOf(a));
      return { ...q, opts: newOpts, ans: newAns };
    } else {
      const newAns = shuffled.indexOf(q.ans);
      return { ...q, opts: newOpts, ans: newAns };
    }
  }

  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', nextQuestion);
  markBtn.addEventListener('click', toggleMark);
  reviewBtn.addEventListener('click', showReview);
  restartBtn.addEventListener('click', restart);

  function startQuiz() {
    const mode = document.querySelector('input[name="qmode"]:checked').value;
    const doShuffleOrder = document.getElementById('quizShuffle').checked;
    instantMode = document.getElementById('quizInstant').checked;
    timerEnabled = document.getElementById('quizTimer') && document.getElementById('quizTimer').checked;

    let pool = [...QUIZ_DATA];
    if (doShuffleOrder) pool = shuffle(pool);

    const count = mode === 'all' ? pool.length : parseInt(mode);
    questions = pool.slice(0, count);

    // ALWAYS shuffle answer options (fix ans:0 bug)
    questions = questions.map(shuffleOptions);

    current = 0;
    score = 0;
    answers = [];
    marked = new Set();
    answered = false;

    startEl.classList.add('hidden');
    resultEl.classList.add('hidden');
    playEl.classList.remove('hidden');

    // Timer setup
    if (timerEnabled) {
      timeLeft = Math.round(count * 45); // 45 seconds per question (exam pace)
      startTimer();
    }

    renderQuestion();
  }

  function startTimer() {
    const timerEl = document.getElementById('quizTimer_display');
    if (!timerEl) return;
    timerEl.classList.remove('hidden');
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showResult();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerEl = document.getElementById('quizTimer_display');
    if (!timerEl) return;
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    timerEl.textContent = `⏱ ${min}:${sec.toString().padStart(2, '0')}`;
    if (timeLeft < 60) timerEl.style.color = 'var(--danger)';
    else if (timeLeft < 180) timerEl.style.color = 'var(--warn)';
    else timerEl.style.color = 'var(--muted)';
  }

  function renderQuestion() {
    answered = false;
    nextBtn.disabled = true;
    markBtn.textContent = marked.has(current) ? '🚩 Đã đánh dấu' : '🚩 Đánh dấu';
    document.getElementById('quizExplain').classList.add('hidden');

    const q = questions[current];
    const total = questions.length;
    const isMulti = q.multi;

    document.getElementById('quizProgress').style.width = `${((current) / total) * 100}%`;
    document.getElementById('quizCounter').textContent = `Câu ${current + 1}/${total}`;
    document.getElementById('quizScore').textContent = `Đúng: ${score}`;

    const multiTag = isMulti ? `<span class="quiz-multi-tag">Chọn ${q.ans.length} đáp án</span>` : '';
    document.getElementById('quizQ').innerHTML = `<span class="qnum">Câu ${current + 1}/${total}</span>${q.q}${multiTag}`;

    const letters = 'ABCDEFGH';
    document.getElementById('quizOpts').innerHTML = q.opts.map((opt, i) =>
      `<div class="quiz-opt" data-idx="${i}">
        <span class="quiz-opt__letter">${letters[i]}</span>
        <span>${opt}</span>
      </div>`
    ).join('');

    if (isMulti) {
      // Multi-select: click to toggle, need confirm button
      let selected = new Set();
      const confirmBtn = document.createElement('button');
      confirmBtn.className = 'btn btn--primary quiz-confirm';
      confirmBtn.textContent = '✓ Xác nhận';
      confirmBtn.disabled = true;
      document.getElementById('quizOpts').appendChild(confirmBtn);

      document.querySelectorAll('.quiz-opt').forEach(el => {
        el.addEventListener('click', () => {
          if (answered) return;
          const idx = parseInt(el.dataset.idx);
          if (selected.has(idx)) {
            selected.delete(idx);
            el.classList.remove('selected');
          } else {
            selected.add(idx);
            el.classList.add('selected');
          }
          el.querySelector('.quiz-opt__letter').style.background = selected.has(idx) ? 'var(--primary)' : '';
          el.querySelector('.quiz-opt__letter').style.color = selected.has(idx) ? '#fff' : '';
          confirmBtn.disabled = selected.size === 0;
        });
      });

      confirmBtn.addEventListener('click', () => {
        if (answered) return;
        selectMultiAnswer([...selected], q);
      });
    } else {
      document.querySelectorAll('.quiz-opt').forEach(el => {
        el.addEventListener('click', () => selectAnswer(parseInt(el.dataset.idx)));
      });
    }
  }

  function selectAnswer(idx) {
    if (answered) return;
    answered = true;

    const q = questions[current];
    const correct = idx === q.ans;
    if (correct) score++;

    answers.push({ qIdx: current, selected: [idx], correct, marked: marked.has(current) });

    const opts = document.querySelectorAll('.quiz-opt');
    opts.forEach((el, i) => {
      el.classList.add('disabled');
      if (i === q.ans) el.classList.add('correct');
      if (i === idx && !correct) el.classList.add('wrong');
      if (i === idx) el.classList.add('selected');
    });

    showExplanation(correct, q);
    enableNext();
  }

  function selectMultiAnswer(selectedArr, q) {
    if (answered) return;
    answered = true;

    const correctSet = new Set(q.ans);
    const selectedSet = new Set(selectedArr);
    const isCorrect = correctSet.size === selectedSet.size && [...correctSet].every(a => selectedSet.has(a));
    if (isCorrect) score++;

    answers.push({ qIdx: current, selected: selectedArr, correct: isCorrect, marked: marked.has(current) });

    const opts = document.querySelectorAll('.quiz-opt');
    opts.forEach((el, i) => {
      el.classList.add('disabled');
      if (correctSet.has(i)) el.classList.add('correct');
      if (selectedSet.has(i) && !correctSet.has(i)) el.classList.add('wrong');
    });

    // Remove confirm button
    const cb = document.querySelector('.quiz-confirm');
    if (cb) cb.remove();

    showExplanation(isCorrect, q);
    enableNext();
  }

  function showExplanation(correct, q) {
    if (instantMode) {
      const explainEl = document.getElementById('quizExplain');
      explainEl.innerHTML = `<b>${correct ? '✅ Đúng!' : '❌ Sai!'}</b> ${q.explain}`;
      explainEl.classList.remove('hidden');
    }
  }

  function enableNext() {
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
    if (timerInterval) clearInterval(timerInterval);
    const timerEl = document.getElementById('quizTimer_display');
    if (timerEl) timerEl.classList.add('hidden');

    playEl.classList.add('hidden');
    resultEl.classList.remove('hidden');

    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const passThreshold = window.QUIZ_PASS_THRESHOLD || 85;
    const examName = window.QUIZ_EXAM_NAME || 'exam';
    const pass = pct >= passThreshold;

    document.getElementById('quizRing').style.setProperty('--p', `${pct}%`);
    document.getElementById('quizPercent').textContent = `${pct}%`;
    document.getElementById('quizVerdict').textContent = pass ? '🎉 Đạt! PASS' : '📚 Chưa đạt — cần ôn thêm';
    document.getElementById('quizVerdict').style.color = pass ? 'var(--good)' : 'var(--warn)';
    document.getElementById('quizSummary').textContent = `${score}/${total} câu đúng · ${total - score} câu sai · Cần ≥ ${passThreshold}% để pass ${examName}`;

    document.getElementById('quizReviewList').classList.add('hidden');
  }

  function showReview() {
    const reviewList = document.getElementById('quizReviewList');
    reviewList.classList.toggle('hidden');
    if (reviewList.innerHTML) return;

    const wrong = answers.filter(a => !a.correct);
    if (wrong.length === 0) {
      reviewList.innerHTML = '<p style="text-align:center;color:var(--good);">🎉 Bạn trả lời đúng tất cả!</p>';
      return;
    }

    const letters = 'ABCDEFGH';
    reviewList.innerHTML = wrong.map(a => {
      const q = questions[a.qIdx];
      const yourAnswer = a.selected.map(s => `${letters[s]}. ${q.opts[s]}`).join(', ');
      const correctAnswer = q.multi
        ? q.ans.map(c => `${letters[c]}. ${q.opts[c]}`).join(', ')
        : `${letters[q.ans]}. ${q.opts[q.ans]}`;
      return `<div class="quiz-review-item">
        <h4>Câu ${a.qIdx + 1}: ${q.q}</h4>
        <p class="qreview-your">Bạn chọn: ${yourAnswer}</p>
        <p class="qreview-correct">Đáp án đúng: ${correctAnswer}</p>
        <p class="qreview-explain">${q.explain}</p>
      </div>`;
    }).join('');
  }

  function restart() {
    if (timerInterval) clearInterval(timerInterval);
    resultEl.classList.add('hidden');
    startEl.classList.remove('hidden');
    document.getElementById('quizReviewList').innerHTML = '';
  }
})();
