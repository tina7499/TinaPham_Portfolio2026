// ============================================================
// CURSOR GLOW — follows the mouse around the page
// ============================================================
const cursorGlow = document.getElementById('cursorGlow');

window.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

// ============================================================
// SIDE NAV — highlight the active section as the user scrolls
// ============================================================
const sections = document.querySelectorAll('.panel');
const navDots = document.querySelectorAll('.nav-dot');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navDots.forEach((dot) => {
        dot.classList.toggle('active', dot.dataset.section === id);
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach((section) => navObserver.observe(section));

// ============================================================
// REVEAL ON SCROLL — fade/slide content in as each panel appears
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ============================================================
// PROJECT CARDS — glow follows cursor position within each card
// ============================================================
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--x', `${x}%`);
    card.style.setProperty('--y', `${y}%`);
  });
});
