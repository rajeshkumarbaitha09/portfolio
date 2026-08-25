// Mobile nav toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const navCta = document.getElementById('navCta');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navCta.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navCta.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

// Scroll reveal (progressive enhancement — content is visible by default via CSS)
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js');

  const revealEls = document.querySelectorAll('.reveal');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => io.observe(el));

  // Safety net: ensure nothing stays hidden if something goes wrong
  setTimeout(() => revealEls.forEach(el => el.classList.add('in')), 4000);
}
