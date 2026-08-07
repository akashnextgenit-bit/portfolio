export function initTechSlider() {
  const track = document.getElementById('tech-slider-track');
  if (!track) return;

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let paused = false;
  let resumeTimer;

  function step() {
    if (!paused) {
      track.scrollLeft += 0.5;
      if (track.scrollLeft >= track.scrollWidth / 2) track.scrollLeft = 0;
    }
    requestAnimationFrame(step);
  }
  if (!reduceMotion) requestAnimationFrame(step);

  track.addEventListener('mouseenter', () => { paused = true; });
  track.addEventListener('mouseleave', () => { paused = false; });

  document.querySelectorAll('.tech-slider-nav button').forEach((button) => {
    button.addEventListener('click', () => {
      const direction = Number(button.dataset.dir || 1);
      track.scrollBy({ left: direction * 240, behavior: 'smooth' });
      paused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = false; }, 2200);
    });
  });
}
