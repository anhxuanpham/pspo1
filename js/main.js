// ============ NAV ============
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function updateActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const h = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (scrollY >= top && scrollY < top + h) {
      navLinks.forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.nav__link[href="#${id}"]`);
      if (link) link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', updateActiveNav);

// Close mobile nav on link click
navLinks.forEach(l => l.addEventListener('click', () => nav.classList.remove('open')));

// ============ GLOSSARY ============
const glossaryList = document.getElementById('glossaryList');
const glossarySearch = document.getElementById('glossarySearch');

function renderGlossary(filter = '') {
  const f = filter.toLowerCase();
  const items = GLOSSARY.filter(g =>
    g.term.toLowerCase().includes(f) || g.def.toLowerCase().includes(f)
  );
  glossaryList.innerHTML = items.map(g =>
    `<div class="gloss-item"><b>${g.term}</b><p>${g.def}</p></div>`
  ).join('');
}
renderGlossary();
glossarySearch.addEventListener('input', e => renderGlossary(e.target.value));

// ============ FLASHCARDS ============
let flashIdx = 0;
const flashcard = document.getElementById('flashcard');
const flashFront = document.getElementById('flashFront');
const flashBack = document.getElementById('flashBack');
const flashCounter = document.getElementById('flashCounter');

function renderFlash() {
  const fc = FLASHCARDS[flashIdx];
  flashFront.textContent = fc.q;
  flashBack.textContent = fc.a;
  flashCounter.textContent = `${flashIdx + 1} / ${FLASHCARDS.length}`;
  flashcard.classList.remove('flipped');
}
renderFlash();

flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));

document.getElementById('flashPrev').addEventListener('click', () => {
  flashIdx = (flashIdx - 1 + FLASHCARDS.length) % FLASHCARDS.length;
  renderFlash();
});
document.getElementById('flashNext').addEventListener('click', () => {
  flashIdx = (flashIdx + 1) % FLASHCARDS.length;
  renderFlash();
});

// Keyboard nav for flashcards
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowLeft') {
    flashIdx = (flashIdx - 1 + FLASHCARDS.length) % FLASHCARDS.length;
    renderFlash();
  } else if (e.key === 'ArrowRight') {
    flashIdx = (flashIdx + 1) % FLASHCARDS.length;
    renderFlash();
  } else if (e.key === ' ' || e.key === 'Enter') {
    // Only flip if flashcard section is in view
    const rect = flashcard.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      e.preventDefault();
      flashcard.classList.toggle('flipped');
    }
  }
});
