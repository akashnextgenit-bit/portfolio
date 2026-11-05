function animateCount(el) {
  const target = el.dataset.target || '';
  const match = target.match(/[\d.]+/);
  if (!match) { el.textContent = target; return; }
  const numeric = parseFloat(match[0]);
  const suffix = target.replace(match[0], '');
  const duration = 1200;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = (numeric * eased).toFixed(numeric % 1 !== 0 ? 1 : 0);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function fillSkillBar(el) {
  const pct = el.dataset.pct || 0;
  requestAnimationFrame(() => { el.style.width = `${pct}%`; });
}

function initialiseHeroHeader() {
  const header = document.getElementById('site-header');
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 16);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

function initialiseHeroParallax(reduceMotion) {
  const visual = document.getElementById('hero-visual');
  const mock = document.getElementById('hero-photo-frame');
  if (!visual || !mock) return;
  if (reduceMotion) return;
  visual.addEventListener('pointermove', (event) => {
    const rect = visual.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width - .5) * 2;
    const py = ((event.clientY - rect.top) / rect.height - .5) * 2;
    mock.style.setProperty('--px', px.toFixed(3));
    mock.style.setProperty('--py', py.toFixed(3));
  });
  visual.addEventListener('pointerleave', () => {
    mock.style.setProperty('--px', 0);
    mock.style.setProperty('--py', 0);
  });
  const start = performance.now();
  function idleFloat(now) {
    const t = (now - start) / 1000;
    mock.style.setProperty('--float', `${Math.sin(t * .6) * 12}px`);
    requestAnimationFrame(idleFloat);
  }
  requestAnimationFrame(idleFloat);
}

function initialiseHeroCanvas(reduceMotion) {
  const canvas = document.getElementById('hero-canvas');
  const media = document.querySelector('.hero-media');
  if (!canvas || !media) return;
  const ctx = canvas.getContext('2d');
  let width, height, dpr, particles;

  function buildParticles() {
    const count = Math.round((width * height) / 26000);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - .5) * .18,
      vy: (Math.random() - .5) * .18,
      r: Math.random() * 1.6 + .6,
    }));
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = media.clientWidth;
    height = media.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildParticles();
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  function drawStatic() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(37,99,235,.35)';
      ctx.fill();
    });
  }

  if (reduceMotion) { drawStatic(); return; }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(37,99,235,.4)';
      ctx.fill();
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(37,99,235,${.14 * (1 - dist / 130)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initialiseGsapReveals(reduceMotion) {
  if (reduceMotion || typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') return false;
  window.gsap.registerPlugin(window.ScrollTrigger);

  window.gsap.utils.toArray('.bento-card').forEach((card, i) => {
    window.gsap.fromTo(card, { y: 36, opacity: 0 }, {
      y: 0, opacity: 1, duration: .8, ease: 'power3.out', delay: (i % 4) * .06,
      scrollTrigger: { trigger: card, start: 'top 88%' },
    });
  });

  window.gsap.utils.toArray('.hero-photo-frame').forEach((frame) => {
    window.gsap.fromTo(frame, { scale: 1.12 }, {
      scale: 1, duration: 1.4, ease: 'power3.out',
    });
  });

  return true;
}

function initialiseMagneticButtons(reduceMotion) {
  if (reduceMotion) return;
  document.querySelectorAll('.button-primary').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
      button.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`);
      button.style.transform = `translate(${x * .12}px, ${y * .28}px)`;
    });
    button.addEventListener('pointerleave', () => { button.style.transform = ''; });
  });
}

export function initialiseAnimations() {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  initialiseMagneticButtons(reduceMotion);
  const gsapDrivingReveals = initialiseGsapReveals(reduceMotion);

  initialiseHeroHeader();
  initialiseHeroParallax(reduceMotion);
  initialiseHeroCanvas(reduceMotion);

  const navLinks = [...document.querySelectorAll('.desktop-nav a, .mobile-menu a')];
  const navSections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (navSections.length) {
    const setActiveLink = (id) => {
      navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`));
    };
    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveLink(visible[0].target.id);
    }, { rootMargin: '-45% 0px -45% 0px', threshold: [0, .25, .5, .75, 1] });
    navSections.forEach((section) => navObserver.observe(section));
  }

  if (reduceMotion) {
    document.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'));
    document.querySelectorAll('.stat-number').forEach((el) => { el.textContent = el.dataset.target; });
    document.querySelectorAll('.skill-bar-fill').forEach((el) => { el.style.width = `${el.dataset.pct}%`; });
    return;
  }

  const revealObserver = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

  const statObserver = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .4 });
  document.querySelectorAll('.stat-number').forEach((el) => statObserver.observe(el));

  const skillObserver = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fillSkillBar(entry.target);
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .4 });
  document.querySelectorAll('.skill-bar-fill').forEach((el) => skillObserver.observe(el));
}
