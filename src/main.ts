import './style.css';
import { site } from './data';
import { render } from './render';

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = render(site);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Nav: hairline once scrolled, mobile menu, close menu on navigation
const nav = document.querySelector<HTMLElement>('#globalnav')!;
const menuBtn = document.querySelector<HTMLButtonElement>('#menubtn')!;
const links = document.querySelector<HTMLElement>('#navlinks')!;

const onScroll = (): void => {
  nav.classList.toggle('is-scrolled', window.scrollY > 4);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const setMenu = (open: boolean): void => {
  nav.classList.toggle('is-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('no-scroll', open);
};
menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// Fade elements up as they enter the viewport
const revealer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-visible');
      revealer.unobserve(e.target);
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
);
document.querySelectorAll('.reveal').forEach((el) => revealer.observe(el));

// Count stats up from zero the first time they are seen
function countUp(el: HTMLElement): void {
  const target = Number(el.dataset.count);
  if (reduceMotion) {
    el.textContent = String(target);
    return;
  }
  const duration = 1400;
  const start = performance.now();
  const tick = (t: number): void => {
    const p = Math.min(1, (t - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = String(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const counter = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      countUp(e.target as HTMLElement);
      counter.unobserve(e.target);
    }
  },
  { threshold: 0.6 },
);
document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => counter.observe(el));

// Project rail: arrow buttons scroll one card at a time
const rail = document.querySelector<HTMLElement>('#rail')!;
const railBtns = document.querySelectorAll<HTMLButtonElement>('.rail-btn');
const updateRailBtns = (): void => {
  const max = rail.scrollWidth - rail.clientWidth - 2;
  railBtns[0].disabled = rail.scrollLeft <= 2;
  railBtns[1].disabled = rail.scrollLeft >= max;
};
railBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    const card = rail.querySelector<HTMLElement>('.card');
    const step = card ? card.offsetWidth + 20 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: Number(btn.dataset.dir) * step, behavior: reduceMotion ? 'auto' : 'smooth' });
  }),
);
rail.addEventListener('scroll', updateRailBtns, { passive: true });
window.addEventListener('resize', updateRailBtns);
updateRailBtns();

document.querySelector('#year')!.textContent = String(new Date().getFullYear());
