// Original line-icon set for the Academic Project Development section.
// Plain inline SVG strings — no external assets, no dependencies.
const svg = (paths, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}${extra}</svg>`;

export const ICONS = {
  web: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.8 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.8-3.8-9S9.5 5.6 12 3Z"/>'),
  android: svg('<rect x="7" y="2" width="10" height="20" rx="2.4"/><path d="M11 18h2"/>'),
  ai: svg('<rect x="6" y="6" width="12" height="12" rx="2"/><circle cx="12" cy="12" r="2.1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>'),
  data: svg('<path d="M4 20V10M12 20V4M20 20v-7"/>'),
  cloud: svg('<path d="M7 18h10a4 4 0 0 0 .4-7.98A5.5 5.5 0 0 0 6.9 9.1 4 4 0 0 0 7 18Z"/>'),
  target: svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>'),
  code: svg('<path d="M8 6 2.5 12 8 18M16 6l5.5 6-5.5 6"/>'),
  file: svg('<path d="M6 2h8l5 5v15H6Z"/><path d="M14 2v5h5M9 13h6M9 17h6"/>'),
  slides: svg('<rect x="2.5" y="4" width="19" height="13" rx="1.6"/><path d="M8 21h8M12 17v4"/>'),
  docs: svg('<path d="M12 6.5c-1.6-1.2-3.9-1.8-6-1.8v13.6c2.1 0 4.4.6 6 1.8 1.6-1.2 3.9-1.8 6-1.8V4.7c-2.1 0-4.4.6-6 1.8Z"/><path d="M12 6.5v13.6"/>'),
  paper: svg('<path d="M6 2h8l5 5v15H6Z"/><path d="M14 2v5h5M8.5 9h3M8.5 12h7M8.5 15h7"/>'),
  deploy: svg('<path d="M12 2 8 9h3v9h2V9h3L12 2Z"/><path d="M5 21h14"/>'),
  github: svg('<circle cx="6" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="9" r="2.2"/><path d="M6 8.2V15.8M6 8.2c0 4 3 5.8 6 5.8h4"/>'),
  viva: svg('<path d="M12 15a3.5 3.5 0 0 0 3.5-3.5V6a3.5 3.5 0 0 0-7 0v5.5A3.5 3.5 0 0 0 12 15Z"/><path d="M6.5 11a5.5 5.5 0 0 0 11 0M12 17v4M9 21h6"/>'),
  internship: svg('<rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 12.5h18"/>'),
  resume: svg('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2.1"/><path d="M5.5 17c.6-2 2.2-3 3.5-3s2.9 1 3.5 3M14.5 9h4M14.5 13h4"/>'),
  cap: svg('<path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="M6 10.5v5c0 1.8 2.7 3.3 6 3.3s6-1.5 6-3.3v-5M22 8v6"/>'),
  people: svg('<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M15.5 20c.2-2.6 1.7-4.6 3.8-5.3"/>'),
  layers: svg('<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 12l9 5 9-5M3 16l9 5 9-5"/>'),
  trophy: svg('<path d="M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3M10 15v3M14 15v3M8 21h8"/>'),
  briefcase: svg('<rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 12.5h18"/>'),
};

export const icon = (key) => ICONS[key] || '';

// Technology / domain pill icons for the "Technologies & Domains" strip — keyed by exact tech name.
export const TECH_ICONS = {
  'Artificial Intelligence': svg('<rect x="6" y="6" width="12" height="12" rx="2"/><circle cx="12" cy="12" r="2.1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>'),
  'Machine Learning': svg('<circle cx="6" cy="7" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="M7.6 8.4 10.5 15.5M16.4 8.4 13.5 15.5M8 7h8"/>'),
  'Deep Learning': svg('<circle cx="4.5" cy="7" r="1.6"/><circle cx="4.5" cy="12" r="1.6"/><circle cx="4.5" cy="17" r="1.6"/><circle cx="12" cy="9.5" r="1.6"/><circle cx="12" cy="14.5" r="1.6"/><circle cx="19.5" cy="12" r="1.6"/><path d="M6 7.7 10.5 9.2M6 12l4.5-1M6 12l4.5 2.5M6 16.3l4.5-1.4M13.5 9.7 18 11.5M13.5 14.3 18 12.5"/>'),
  Python: svg('<path d="M12 3c-3 0-3.4 1.3-3.4 2.9v2h6.8v1H6.6C4.9 8.9 4 10.4 4 12.9c0 2.4.9 3.9 2.6 3.9H8v-2.4c0-2.1 1.4-3.4 3.4-3.4h4c1.7 0 3-1.3 3-3V5.9C18.4 4.3 15 3 12 3Z"/><path d="M12 21c3 0 3.4-1.3 3.4-2.9v-2H8.6v-1h8.8c1.7 0 2.6-1.5 2.6-4 0-2.4-.9-3.9-2.6-3.9H16v2.4c0 2.1-1.4 3.4-3.4 3.4H8.6c-1.7 0-3 1.3-3 3v2.1C5.6 19.7 9 21 12 21Z"/><circle cx="9" cy="6" r=".6" fill="currentColor" stroke="none"/><circle cx="15" cy="18" r=".6" fill="currentColor" stroke="none"/>'),
  Java: svg('<path d="M8.5 15.5c-1.2 1 1.5 2 4.5 2 3.7 0 6-1.1 6-2.3 0-.7-.9-1.3-2.2-1.7"/><path d="M9.5 12.7c-1.7.6-2.7 1.4-2.7 2.3 0 1.7 3.2 3 7.2 3 1.1 0 2.1-.1 3-.3"/><path d="M13 3c1.7 1.7-1.4 3 0 5 1.7 2.2-.6 3.7-.6 3.7"/><path d="M10.5 13.5c-3 .3-5 1.1-5 2.1 0 1.4 3.4 2.4 7.5 2.4s7.5-1 7.5-2.4c0-.8-1.2-1.5-3-2"/>'),
  React: svg('<circle cx="12" cy="12" r="1.9" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>'),
  'Node.js': svg('<path d="M12 2.5 20.5 7.4v9.2L12 21.5 3.5 16.6V7.4L12 2.5Z"/><path d="M9 14.2c.4.7 1.3 1.2 2.4 1.2 1.6 0 2.3-.7 2.3-1.6 0-2.4-5.4-1-5.4-4.4 0-1.5 1.3-2.4 2.9-2.4 1.1 0 2.1.4 2.6 1.2"/>'),
  Flutter: svg('<path d="M14.5 2 4 12.5 7.5 16 18 5.5h-3.5Z"/><path d="M14.5 22 4 11.5l3.5-3.5L18 18.5h-3.5Z"/><path d="M11 15.5 14.5 19"/>'),
  MongoDB: svg('<path d="M12 2.5c2.6 3.2 4.2 6.7 4.2 10 0 4-1.9 6.8-4.2 8.9-2.3-2.1-4.2-4.9-4.2-8.9 0-3.3 1.6-6.8 4.2-10Z"/><path d="M12 15.5V21"/>'),
  IoT: svg('<circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="6.5" stroke-dasharray="2 3"/><path d="M12 3v2.3M12 18.7V21M21 12h-2.3M5.3 12H3M18.1 5.9l-1.6 1.6M7.5 16.5l-1.6 1.6M18.1 18.1l-1.6-1.6M7.5 7.5 5.9 5.9"/>'),
  Blockchain: svg('<rect x="3" y="9" width="6" height="6" rx="1.2"/><rect x="15" y="9" width="6" height="6" rx="1.2"/><rect x="9" y="3" width="6" height="6" rx="1.2"/><rect x="9" y="15" width="6" height="6" rx="1.2"/><path d="M9 6h.01M15 6l3 3M9 18h.01M15 18l3-3M9 9l-3 3M9 15l-3-3"/>'),
  'Cyber Security': svg('<path d="M12 2.5 19.5 6v6c0 4.8-3.2 8.4-7.5 9.5C7.7 20.4 4.5 16.8 4.5 12V6L12 2.5Z"/><path d="M9 12l2 2 4-4.2"/>'),
  'Data Analytics': svg('<path d="M4 20V10M12 20V4M20 20v-7"/>'),
  'Cloud Computing': svg('<path d="M7 18h10a4 4 0 0 0 .4-7.98A5.5 5.5 0 0 0 6.9 9.1 4 4 0 0 0 7 18Z"/>'),
  'Next.js': svg('<circle cx="12" cy="12" r="9.2"/><path d="M9 8v8.3L16 8"/><path d="M16 8v8"/>'),
  AWS: svg('<path d="M4 15.5c2.6 1.8 13.4 1.8 16 0"/><path d="M17.5 15.8c1 .2 2.2.7 2.5 1-1.1.9-2.7 1.3-4 1.1"/><path d="M7.5 7.2c-1.6.4-2.6 1.4-2.6 2.6 0 1.9 2.2 2.6 4.3 2.6 1.5 0 2.6-.3 3.3-.7M7.5 12.4v-5M13.5 6.7v5.7c0 1-.9 1.6-2 1.6M13.5 6.7c1.2 0 2 .5 2 1.4M16.5 12.4V7.2h2.2c1.2 0 1.9.6 1.9 1.5 0 .8-.6 1.3-1.5 1.4.9.1 1.7.6 1.7 1.6 0 1-.9 1.7-2.1 1.7h-2.2Z"/>'),
  Docker: svg('<rect x="3" y="11" width="3" height="3"/><rect x="7" y="11" width="3" height="3"/><rect x="11" y="11" width="3" height="3"/><rect x="7" y="7" width="3" height="3"/><rect x="11" y="7" width="3" height="3"/><rect x="11" y="3" width="3" height="3"/><path d="M2.5 14.2c0 3.7 2.9 5.8 7.2 5.8 6 0 10.3-2.8 11.8-8-1-.6-2.3-.5-2.3-.5s-.7-1.6-2.2-2.4c-.7.9-.9 2.4-.9 2.4s-6.9-1.1-13.6.7Z"/>'),
  OpenAI: svg('<path d="M12 3 4.5 7.3v9.4L12 21l7.5-4.3V7.3Z"/><path d="M12 3v18M4.5 7.3 12 11.6l7.5-4.3M4.5 16.7 12 12.4l7.5 4.3"/>'),
  TensorFlow: svg('<path d="M4 8 12 3.5 20 8v8L12 20.5 4 16Z"/><path d="M12 3.5V20.5M4 8l8 4.5 8-4.5M8 6v11.5M16 6v11.5"/>'),
};

export const techIcon = (name) => TECH_ICONS[name] || '';

// Icon set for the Technology Showcase (services) section.
export const SHOWCASE_ICONS = {
  webdev: svg('<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M2.5 8.5h19M6 6.4h.01"/><path d="M8 14.5l2.4-2.4L8 9.7M13 15h3"/>'),
  mobiledev: svg('<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.2h2"/>'),
  aiml: svg('<rect x="6" y="6" width="12" height="12" rx="2.4"/><circle cx="12" cy="12" r="2.3"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>'),
  uiux: svg('<path d="M4 19 15.5 7.5a2 2 0 0 1 2.8 2.8L6.8 21.8 3 21Z"/><path d="M13.2 9.8l2.8 2.8"/>'),
  cloudsol: svg('<path d="M7 18h10a4 4 0 0 0 .4-7.98A5.5 5.5 0 0 0 6.9 9.1 4 4 0 0 0 7 18Z"/>'),
  academicproj: svg('<path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="M6 10.5v5c0 1.8 2.7 3.3 6 3.3s6-1.5 6-3.3v-5M22 8v6"/>'),
  automation: svg('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>'),
  consulting: svg('<circle cx="12" cy="8" r="3.4"/><path d="M4.5 20c.6-3.8 3.5-6 7.5-6s6.9 2.2 7.5 6"/>'),
};

export const showcaseIcon = (key) => SHOWCASE_ICONS[key] || '';
