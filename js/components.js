import { projects, services, technologies } from './config.js';
const byId = (id) => document.getElementById(id);
export function renderContent() {
  byId('technology-list').innerHTML = technologies.map((item) => `<li>${item}</li>`).join('');
  byId('services-grid').innerHTML = services.map(([icon, title, description]) => `<li class="service-card reveal"><span class="service-icon" aria-hidden="true">${icon}</span><h3>${title}</h3><p>${description}</p></li>`).join('');
  byId('projects-grid').innerHTML = projects.map((project) => `<li class="project-card reveal"><div class="project-art">${project.name}</div><div class="project-content"><span class="project-tag">${project.type}</span><h3>${project.name}</h3><p>${project.description}</p></div></li>`).join('');
  byId('year').textContent = new Date().getFullYear();
}
