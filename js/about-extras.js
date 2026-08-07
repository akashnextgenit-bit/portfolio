/* Akash NextGen IT — About section extras (parallax, tilt, ripple) */
(function () {
  'use strict';
  var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Floating background shapes — subtle mouse parallax */
  var shapes = document.querySelectorAll('.about-shapes span');
  if (shapes.length && !reduceMotion) {
    var targetX = 0, targetY = 0, curX = 0, curY = 0;
    window.addEventListener('mousemove', function (e) {
      targetX = (e.clientX / window.innerWidth - .5);
      targetY = (e.clientY / window.innerHeight - .5);
    }, { passive: true });
    (function raf() {
      curX += (targetX - curX) * .04;
      curY += (targetY - curY) * .04;
      shapes.forEach(function (s, i) {
        var depth = (i + 1) * 12;
        s.style.transform = 'translate(' + (curX * depth) + 'px,' + (curY * depth) + 'px)';
      });
      requestAnimationFrame(raf);
    })();
  }

  /* Founder profile card tilt */
  var profileCard = document.querySelector('.profile-card');
  if (profileCard && !reduceMotion) {
    profileCard.style.transition = 'transform .4s cubic-bezier(.16,1,.3,1)';
    profileCard.style.transformStyle = 'preserve-3d';
    profileCard.addEventListener('mousemove', function (e) {
      var r = profileCard.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - .5;
      var py = (e.clientY - r.top) / r.height - .5;
      profileCard.style.transform = 'rotateY(' + (px * 6) + 'deg) rotateX(' + (py * -6) + 'deg)';
    });
    profileCard.addEventListener('mouseleave', function () { profileCard.style.transform = 'rotateY(0) rotateX(0)'; });
  }

  /* Button ripple */
  document.querySelectorAll('.ripple-el').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var r = btn.getBoundingClientRect();
      var size = Math.max(r.width, r.height) * 1.4;
      var dot = document.createElement('span');
      dot.className = 'ripple-dot';
      dot.style.width = dot.style.height = size + 'px';
      dot.style.left = (e.clientX - r.left - size / 2) + 'px';
      dot.style.top = (e.clientY - r.top - size / 2) + 'px';
      btn.appendChild(dot);
      dot.addEventListener('animationend', function () { dot.remove(); });
    });
  });
})();
