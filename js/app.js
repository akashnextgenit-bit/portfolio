import { renderContent } from './components.js';
import { initialiseAnimations } from './animations.js';
import { initialiseContactForm } from './forms.js';
import { trapFocus } from './utilities.js';
import { initTechSlider } from './tech-slider.js';

renderContent();
initialiseAnimations();
initialiseContactForm();
initTechSlider();
const loader = document.getElementById('loader');
const hideLoader = () => setTimeout(() => loader.classList.add('is-hidden'), 120);
if (document.readyState === 'complete') hideLoader();
else window.addEventListener('load', hideLoader, { once: true });
const menu = document.getElementById('mobile-menu'); const menuButton = document.getElementById('menu-button'); let previousFocus;
function setMenu(open) { menu.classList.toggle('is-open', open); menuButton.classList.toggle('is-open', open); menu.setAttribute('aria-hidden', String(!open)); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', `${open ? 'Close' : 'Open'} navigation menu`); document.body.style.overflow = open ? 'hidden' : ''; if (open) { previousFocus = document.activeElement; menu.querySelector('a').focus(); } else { previousFocus?.focus(); } }
menuButton.addEventListener('click', () => setMenu(!menu.classList.contains('is-open'))); menu.addEventListener('click', (event) => { if (event.target.matches('a')) setMenu(false); }); document.addEventListener('keydown', (event) => { if (!menu.classList.contains('is-open')) return; if (event.key === 'Escape') setMenu(false); if (event.key === 'Tab') trapFocus(event, menu); });
