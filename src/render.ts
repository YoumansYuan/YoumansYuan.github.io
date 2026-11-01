import type { AcademicProject, Role, Site, WorkProject } from './types';

// Escape text before it goes into a template string.
const esc = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const chevron = '<svg class="chev" viewBox="0 0 8 14" aria-hidden="true"><path d="M1 1l6 6-6 6" /></svg>';

const tags = (items: string[] = []): string =>
  items.length ? `<ul class="chips">${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : '';

const list = (items: string[] = [], cls = 'ticks'): string =>
  items.length ? `<ul class="${cls}">${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : '';

function nav(s: Site): string {
  const items = [
    ['Now', '#now'],
    ['Experience', '#experience'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Life', '#life'],
    ['Contact', '#contact'],
  ];
  return `
  <header class="globalnav" id="globalnav">
    <div class="globalnav-inner">
      <a class="globalnav-brand" href="#top">${esc(s.name)}</a>
      <nav class="globalnav-links" id="navlinks" aria-label="Sections">
        ${items.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      </nav>
      <button class="globalnav-menu" id="menubtn" aria-label="Menu" aria-expanded="false" aria-controls="navlinks">
        <span></span><span></span>
      </button>
    </div>
  </header>`;
}

function hero(s: Site): string {
  return `
  <section class="hero" id="top">
    <p class="hero-eyebrow reveal">Engineer-in-Training · Elk Valley Resources</p>
    <h1 class="hero-title reveal">${esc(s.headline)}</h1>
    <p class="hero-tagline reveal">${esc(s.tagline)}</p>
    <p class="hero-intro reveal">${esc(s.intro)}</p>
    <div class="hero-ctas reveal">
      <a class="button" href="#now">See my work</a>
      <a class="link" href="${s.links.linkedin}" target="_blank" rel="noopener">LinkedIn ${chevron}</a>
    </div>
  </section>`;
}

function stats(s: Site): string {
  return `
  <section class="stats dark" aria-label="By the numbers">
    <div class="container">
      <h2 class="section-title reveal">The work, by the numbers.</h2>
      <div class="stats-grid">
        ${s.stats
          .map(
            (st) => `
          <div class="stat reveal">
            <p class="stat-value"><span>${st.prefix ?? ''}</span><span data-count="${st.value}">0</span><span>${st.suffix ?? ''}</span></p>
            <p class="stat-label">${esc(st.label)}</p>
          </div>`,
          )
          .join('')}
      </div>
    </div>
  </section>`;
}

function workTile(p: WorkProject): string {
  return `
    <article class="tile ${p.featured ? 'tile-featured' : ''} reveal">
      <p class="tile-eyebrow">${esc(p.area)}</p>
      <h3 class="tile-title">${esc(p.name)}</h3>
      <p class="tile-copy">${esc(p.summary)}</p>
      ${p.featured ? list(p.points, 'tile-points') : ''}
    </article>`;
}

function now(s: Site): string {
  const r = s.current;
  return `
  <section class="now" id="now">
    <div class="container">
      <p class="section-eyebrow reveal">${esc(r.period)}</p>
      <h2 class="section-title reveal">Now at Elk Valley&nbsp;Resources.</h2>
      <p class="section-lede reveal">${esc(r.intro ?? '')}</p>
      <div class="role-card reveal">
        <div>
          <h3>${esc(r.title)}</h3>
          <p class="muted">${esc(r.org)}<br>${esc(r.place)}</p>
        </div>
        ${list(r.points)}
      </div>
      <div class="bento">
        ${s.workProjects.map(workTile).join('')}
      </div>
    </div>
  </section>`;
}

function roleBlock(r: Role, tone: string): string {
  return `
    <article class="role ${tone} reveal">
      <p class="tile-eyebrow">${esc(r.period)}</p>
      <h3 class="role-title">${esc(r.title)}</h3>
      <p class="role-org">${esc(r.org)}</p>
      <p class="muted small">${esc(r.place)}</p>
      ${list(r.points)}
      ${tags(r.tools)}
    </article>`;
}

function experience(s: Site): string {
  return `
  <section class="experience" id="experience">
    <div class="container">
      <h2 class="section-title reveal">Where I learned the&nbsp;craft.</h2>
      <p class="section-lede reveal">A year on shift in drill &amp; blast and dewatering, and two summers in the lab.</p>
      <div class="roles">
        ${s.pastRoles.map((r, i) => roleBlock(r, i === 0 ? 'role-dark' : 'role-light')).join('')}
      </div>
    </div>
  </section>`;
}

function academicCard(p: AcademicProject): string {
  const specs = p.specs
    ? `<dl class="specs">${p.specs.map((sp) => `<div><dt>${esc(sp.value)}</dt><dd>${esc(sp.label)}</dd></div>`).join('')}</dl>`
    : '';
  const link = p.link ? `<a class="link" href="${p.link.href}">${esc(p.link.label)} ${chevron}</a>` : '';
  return `
    <article class="card card-${p.tone} ${p.specs ? 'card-wide' : ''}">
      <p class="tile-eyebrow">${esc(p.kicker)}</p>
      <h3 class="card-title">${esc(p.title)}</h3>
      <p class="card-copy">${esc(p.summary)}</p>
      ${specs}
      ${list(p.points)}
      <div class="card-foot">${tags(p.tools)}${link}</div>
    </article>`;
}

function projects(s: Site): string {
  return `
  <section class="projects" id="projects">
    <div class="container">
      <h2 class="section-title reveal">Built at McGill.</h2>
      <p class="section-lede reveal">B.Eng. Mining Engineering (Co-op), 2021–2026.</p>
    </div>
    <div class="rail-wrap reveal">
      <div class="rail" id="rail" tabindex="0" aria-label="Academic projects">
        ${s.academic.map(academicCard).join('')}
      </div>
      <div class="rail-controls container">
        <button class="rail-btn" data-dir="-1" aria-label="Previous project"><svg viewBox="0 0 8 14"><path d="M7 1L1 7l6 6" /></svg></button>
        <button class="rail-btn" data-dir="1" aria-label="Next project"><svg viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" /></svg></button>
      </div>
    </div>
  </section>`;
}

function skills(s: Site): string {
  return `
  <section class="skills" id="skills">
    <div class="container">
      <h2 class="section-title reveal">Tools of the&nbsp;trade.</h2>
      <div class="key-certs reveal">
        ${s.keyCerts.map((c) => `<div class="key-cert"><span class="seal" aria-hidden="true">✓</span>${esc(c)}</div>`).join('')}
      </div>
      <div class="skills-grid">
        ${s.skills
          .map(
            (g) => `
          <div class="skill-col reveal">
            <h3>${esc(g.name)}</h3>
            ${list(g.items, 'plain')}
          </div>`,
          )
          .join('')}
        <div class="skill-col reveal">
          <h3>Certifications</h3>
          ${list(s.certs, 'plain')}
        </div>
      </div>
    </div>
  </section>`;
}

function life(s: Site): string {
  return `
  <section class="life dark" id="life">
    <div class="container">
      <h2 class="section-title reveal">Off the clock.</h2>
      <p class="section-lede reveal">I've raced mountain bikes and sailboats since I was a teenager, and I teach snowboarding.</p>
      <div class="results reveal">
        ${s.results
          .map(
            (r) => `
          <div class="result-col">
            <h3>${esc(r.sport)}</h3>
            <ul>${r.items.map((i) => `<li><span class="place">${esc(i.place)}</span>${esc(i.event)}</li>`).join('')}</ul>
          </div>`,
          )
          .join('')}
      </div>
    </div>
    <div class="gallery">
      ${s.photos
        .map(
          (p, i) => `
        <figure class="reveal ${i === 0 ? 'g-big' : ''}">
          <img src="${p.src}" alt="${esc(p.alt)}" loading="lazy">
          <figcaption>${esc(p.caption)}</figcaption>
        </figure>`,
        )
        .join('')}
    </div>
  </section>`;
}

function contact(s: Site): string {
  return `
  <section class="contact" id="contact">
    <h2 class="contact-title reveal">Let's talk.</h2>
    <p class="section-lede reveal">Based in Fernie, BC and open to relocation.</p>
    <a class="contact-email reveal" href="mailto:${s.email}">${esc(s.email)}</a>
    <div class="hero-ctas reveal">
      <a class="link" href="${s.links.linkedin}" target="_blank" rel="noopener">LinkedIn ${chevron}</a>
      <a class="link" href="${s.links.github}" target="_blank" rel="noopener">GitHub ${chevron}</a>
    </div>
  </section>`;
}

function footer(s: Site): string {
  return `
  <footer class="footer">
    <div class="container footer-inner">
      <p>Copyright © <span id="year"></span> ${esc(s.fullName)}. Built with TypeScript.</p>
      <p><a href="${s.links.archive}">The 2020 site</a><span class="sep">|</span><a href="${s.links.github}" target="_blank" rel="noopener">GitHub</a></p>
    </div>
  </footer>`;
}

export function render(s: Site): string {
  return [nav(s), '<main>', hero(s), stats(s), now(s), experience(s), projects(s), skills(s), life(s), contact(s), '</main>', footer(s)].join('');
}
