import {
  services, projects, academicServices, academicIncludes, academicTech,
  whyChooseUs, stats, processSteps,
  showcaseStats, showcaseServices, showcaseTech
} from './config.js';
import { icon, techIcon, showcaseIcon } from './academic-icons.js';

const byId = (id) => document.getElementById(id);

function renderShowcase() {
  const statsEl = byId('showcase-stats');
  if (statsEl) {
    statsEl.innerHTML = showcaseStats.map(([key, num, label]) => `
      <div class="showcase-stat">
        <span class="showcase-stat-icon" aria-hidden="true">${icon(key)}</span>
        <div><strong class="stat-number" data-target="${num}">0</strong><small>${label}</small></div>
      </div>`).join('');
  }

  const showcaseImages = {
    webdev: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=900&auto=format&fit=crop',
    mobiledev: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800&auto=format&fit=crop',
    aiml: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900&auto=format&fit=crop',
    cloudsol: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=900&auto=format&fit=crop',
    academicproj: 'https://images.unsplash.com/photo-1758270705317-3ef6142d306f?q=80&w=900&auto=format&fit=crop',
    automation: 'https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?q=80&w=900&auto=format&fit=crop',
    uiux: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=900&auto=format&fit=crop',
    consulting: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=900&auto=format&fit=crop'
  };

  const cardsEl = byId('showcase-cards');
  if (cardsEl) {
    cardsEl.innerHTML = showcaseServices.map(([key, title, desc], i) => {
      const img = showcaseImages[key];
      return `
      <li class="bento-card${img ? ' has-image' : ''}" style="--i:${i}" data-key="${key}">
        ${img ? `<img class="bento-card-img" src="${img}" alt="" loading="lazy" width="700" height="700">` : ''}
        <div class="bento-card-body">
          <span class="bento-card-icon" aria-hidden="true">${showcaseIcon(key)}</span>
          <h3>${title}</h3>
          <p>${desc}</p>
          <a class="bento-card-arrow" href="#contact" aria-label="Ask about ${title}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </li>`;
    }).join('');
  }

  const techList = byId('tech-slider-list');
  if (techList) {
    const loop = showcaseTech.concat(showcaseTech);
    techList.innerHTML = loop.map((name) => `
      <li><span class="tech-slider-icon" aria-hidden="true">${techIcon(name)}</span>${name}</li>`).join('');
  }
}

function renderProjects() {
  const grid = byId('project-cards');
  if (!grid) return;
  grid.innerHTML = projects.map((p) => `
    <li class="project-card reveal">
      <div class="project-art">
        <img src="${p.image}" alt="${p.name}" loading="lazy" width="700" height="420">
        <span class="project-status${p.link ? ' is-live' : ''}">${p.type}</span>
      </div>
      <div class="project-content">
        <span class="project-tag">${p.badges[0] || ''}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="project-badges">${p.badges.map((b) => `<span>${b}</span>`).join('')}</div>
        <div class="project-links">
          ${p.link
            ? `<a class="button button-secondary button-sm" href="${p.link}" target="_blank" rel="noopener noreferrer">${p.linkLabel || 'View Project'}<span class="visually-hidden"> (opens in a new tab)</span></a>`
            : `<a class="button button-secondary button-sm" href="#contact">Ask About This<svg class="icon-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>`}
        </div>
      </div>
    </li>`).join('');
}

function renderAcademic() {
  byId('academic-service-cards').innerHTML = academicServices.map(([key, title, desc], i) => `
    <li class="academic-service-card reveal" style="--d:${i % 2}">
      <span class="academic-service-icon" aria-hidden="true">${icon(key)}</span>
      <h4>${title}</h4>
      <p>${desc}</p>
    </li>`).join('');

  byId('academic-feature-strip').innerHTML = academicIncludes.map(([key, title, desc]) => `
    <li class="academic-feature-card reveal">
      <span class="academic-feature-icon" aria-hidden="true">${icon(key)}</span>
      <div><h4>${title}</h4><p>${desc}</p></div>
    </li>`).join('');

  byId('academic-tech-pills').innerHTML = academicTech.map((name) => `
    <li class="academic-tech-pill"><span class="academic-tech-dot" aria-hidden="true">${techIcon(name)}</span>${name}</li>`).join('');
}

function renderWhy() {
  byId('why-grid').innerHTML = whyChooseUs.map(([icon, title, desc]) => `
    <li class="why-card reveal">
      <span class="why-icon" aria-hidden="true">${icon}</span>
      <h3>${title}</h3>
      <p>${desc}</p>
    </li>`).join('');
  byId('stats-row').innerHTML = stats.map(([num, label]) => `
    <div class="stat-item reveal"><p class="stat-number" data-target="${num}">0</p><p class="stat-label">${label}</p></div>`).join('');
}

function renderProcess() {
  byId('process-track').innerHTML = processSteps.map(([title, desc], i) => `
    <div class="process-step reveal">
      <div class="process-index">${String(i + 1).padStart(2, '0')}</div>
      <h4>${title}</h4>
      <p>${desc}</p>
    </div>`).join('');
}

function renderFooter() {
  byId('footer-services').innerHTML = services.slice(0, 5).map(([, title]) => `<li><a href="#services">${title}</a></li>`).join('');
}

export function renderContent() {
  renderShowcase();
  renderProjects();
  renderAcademic();
  renderWhy();
  renderProcess();
  renderFooter();
  byId('year').textContent = new Date().getFullYear();
}
