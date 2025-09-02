// Fade-effekt til hero overlay
window.addEventListener('DOMContentLoaded', function() {
  // Smooth fade-in for gallery images without layout shift
  const galleryImages = document.querySelectorAll('.illustrations-gallery img');
  if (galleryImages.length) {
    galleryImages.forEach(img => {
      const onLoad = () => img.classList.add('loaded');
      if (img.complete && img.naturalWidth > 0) {
        onLoad();
      } else {
        img.addEventListener('load', onLoad, { once: true });
        img.addEventListener('error', () => img.classList.add('loaded'), { once: true });
      }
    });
  }
  const fadeOverlay = document.getElementById('hero-fade-overlay');
  const mainFadeOverlay = document.getElementById('main-fade-overlay');
  // Hero fade
  if (fadeOverlay) {
    window.addEventListener('scroll', function() {
      const maxFade = 0.85;
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 400; // px
      let opacity = 0;
      if (scrollY > fadeStart) {
        opacity = Math.min(maxFade, (scrollY - fadeStart) / (fadeEnd - fadeStart) * maxFade);
      }
      fadeOverlay.style.opacity = opacity;
    });
  }
  // Main fade
  if (mainFadeOverlay) {
    window.addEventListener('scroll', function() {
      const maxFade = 0.85;
      const scrollY = window.scrollY;
      const fadeStart = 400;
      const fadeEnd = 1200; // px
      let opacity = 0;
      if (scrollY > fadeStart) {
        opacity = Math.min(maxFade, (scrollY - fadeStart) / (fadeEnd - fadeStart) * maxFade);
      }
      mainFadeOverlay.style.opacity = opacity;
    });
  }

  // Click-to-pop images in illustrations gallery
  const gallery = document.querySelector('.illustrations-gallery');
  if (gallery) {
    const imgs = gallery.querySelectorAll('img');

    const togglePop = (target) => {
      imgs.forEach(img => { if (img !== target) img.classList.remove('popped'); });
      target.classList.toggle('popped');
    };

    imgs.forEach(img => {
      img.tabIndex = 0; // keyboard focusable
      img.setAttribute('role', 'button');
      img.setAttribute('aria-pressed', 'false');

      img.addEventListener('click', (e) => {
        togglePop(img);
        img.setAttribute('aria-pressed', img.classList.contains('popped') ? 'true' : 'false');
      });

      img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          togglePop(img);
          img.setAttribute('aria-pressed', img.classList.contains('popped') ? 'true' : 'false');
        }
      });
    });

    // Click outside to close any popped image
    document.addEventListener('click', (e) => {
      if (!gallery.contains(e.target)) {
        imgs.forEach(img => img.classList.remove('popped'));
      }
    });
  }
});
