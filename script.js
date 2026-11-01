// Topographic contour background: concentric wobbly rings around a couple of "peaks"
function drawTopo(svg, peaks, rings) {
  const W = 1200, H = 700;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  const ns = 'http://www.w3.org/2000/svg';
  peaks.forEach(([cx, cy, seed]) => {
    for (let k = 1; k <= rings; k++) {
      const r = k * 34;
      let d = '';
      for (let i = 0; i <= 120; i++) {
        const a = (i / 120) * Math.PI * 2;
        const wobble =
          Math.sin(a * 3 + seed + k * 0.18) * (6 + k * 1.6) +
          Math.sin(a * 5 - seed * 1.7 + k * 0.11) * (3 + k * 0.9) +
          Math.cos(a * 2 + seed * 0.6) * k * 2.2;
        const rr = r + wobble;
        const x = cx + Math.cos(a) * rr * 1.25;
        const y = cy + Math.sin(a) * rr;
        d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
      }
      const p = document.createElementNS(ns, 'path');
      p.setAttribute('d', d + 'Z');
      if (k % 5 === 0) p.setAttribute('class', 'index');
      svg.appendChild(p);
    }
  });
}

const topos = document.querySelectorAll('.topo');
if (topos[0]) drawTopo(topos[0], [[980, 220, 1.3], [1250, 720, 4.1]], 16);
if (topos[1]) drawTopo(topos[1], [[150, 600, 2.7], [1100, 80, 5.2]], 12);

// Sticky header border
const topbar = document.querySelector('.topbar');
const onScroll = () => topbar.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// Highlight current section in nav
const links = [...nav.querySelectorAll('a[href^="#"]')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));

// Fade sections in as they scroll into view
const revealTargets = document.querySelectorAll('.section-head, .job, .card, .skill-group, .certs, .hl, .gallery figure, .prose');
revealTargets.forEach(el => el.classList.add('reveal'));
const revealer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(el => revealer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
