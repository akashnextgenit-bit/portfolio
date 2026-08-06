import { renderContent } from './components.js';
import { initialiseAnimations } from './animations.js';
import { initialiseContactForm } from './forms.js';
import { trapFocus } from './utilities.js';

renderContent();
initialiseAnimations();
initialiseContactForm();
const loader = document.getElementById('loader');
const hideLoader = () => setTimeout(() => loader.classList.add('is-hidden'), 120);
if (document.readyState === 'complete') hideLoader();
else window.addEventListener('load', hideLoader, { once: true });
const root = document.documentElement; const theme = document.getElementById('theme-toggle');
function setTheme(dark) { root.classList.toggle('dark', dark); theme.setAttribute('aria-pressed', String(dark)); theme.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`); }
setTheme(matchMedia('(prefers-color-scheme: dark)').matches); theme.addEventListener('click', () => setTheme(!root.classList.contains('dark')));
const menu = document.getElementById('mobile-menu'); const menuButton = document.getElementById('menu-button'); let previousFocus;
function setMenu(open) { menu.classList.toggle('is-open', open); menu.setAttribute('aria-hidden', String(!open)); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', `${open ? 'Close' : 'Open'} navigation menu`); document.body.style.overflow = open ? 'hidden' : ''; if (open) { previousFocus = document.activeElement; menu.querySelector('a').focus(); } else { previousFocus?.focus(); } }
menuButton.addEventListener('click', () => setMenu(!menu.classList.contains('is-open'))); menu.addEventListener('click', (event) => { if (event.target.matches('a')) setMenu(false); }); document.addEventListener('keydown', (event) => { if (!menu.classList.contains('is-open')) return; if (event.key === 'Escape') setMenu(false); if (event.key === 'Tab') trapFocus(event, menu); });
