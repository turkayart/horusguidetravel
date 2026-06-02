/* ============================================================
   HORUS TRAVEL — DESTINATION PAGES JAVASCRIPT
   Enhanced interactions, animations, and cinematic effects
   ============================================================ */

// ====== Navbar Scroll Effect ======
const navbar = document.getElementById('navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  navbar.classList.toggle('scrolled', scrollY > 60);
  lastScrollY = scrollY;
}, { passive: true });

// ====== Mobile Nav Toggle ======
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = navToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    });
  });
}

// ====== Dropdown Navigation ======
const dropdowns = document.querySelectorAll('.nav-dropdown');
dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('a');
  const menu = dropdown.querySelector('.dropdown-menu');
  if (!menu) return;

  // Desktop: hover
  dropdown.addEventListener('mouseenter', () => {
    menu.classList.add('show');
  });
  dropdown.addEventListener('mouseleave', () => {
    menu.classList.remove('show');
  });

  // Mobile: click
  if (toggle) {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        menu.classList.toggle('show');
      }
    });
  }
});


// ====== Scroll Animations (IntersectionObserver) ======
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in').forEach(el => {
  animObserver.observe(el);
});

// ====== Quick Nav Active State ======
const quickNavPills = document.querySelectorAll('.quick-nav-pill');
const trackedSections = [];

quickNavPills.forEach(pill => {
  const href = pill.getAttribute('href');
  if (href && href.startsWith('#')) {
    const section = document.querySelector(href);
    if (section) trackedSections.push({ pill, section });
  }
});

function updateActiveNav() {
  const scrollPos = window.scrollY + 220;
  let activeFound = false;

  for (let i = trackedSections.length - 1; i >= 0; i--) {
    const { pill, section } = trackedSections[i];
    if (scrollPos >= section.offsetTop) {
      if (!activeFound) {
        quickNavPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFound = true;
      }
      break;
    }
  }
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ====== Smooth Scroll for Anchor Links ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ====== Gallery Lightbox ======
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaptionEl = document.getElementById('lightboxCaption');
const lightboxCloseBtn = document.getElementById('lightboxClose');
const lightboxPrevBtn = document.getElementById('lightboxPrev');
const lightboxNextBtn = document.getElementById('lightboxNext');
let currentLightboxIndex = 0;

function openLightbox(index) {
  if (!lightboxModal || typeof galleryImages === 'undefined') return;
  currentLightboxIndex = index;
  const img = galleryImages[index];
  lightboxImage.src = img.src;
  lightboxImage.alt = img.caption;
  lightboxCaptionEl.textContent = img.caption;
  lightboxModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Preload adjacent images
  if (galleryImages[index + 1]) {
    const preload = new Image();
    preload.src = galleryImages[index + 1].src;
  }
  if (galleryImages[index - 1]) {
    const preload = new Image();
    preload.src = galleryImages[index - 1].src;
  }
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  if (typeof galleryImages === 'undefined') return;
  currentLightboxIndex = (currentLightboxIndex + dir + galleryImages.length) % galleryImages.length;
  openLightbox(currentLightboxIndex);
}

if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
if (lightboxModal) {
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });
}
if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(-1); });
if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(1); });

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});

// Touch swipe support for lightbox
let touchStartX = 0;
if (lightboxModal) {
  lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 60) {
      navigateLightbox(diff > 0 ? -1 : 1);
    }
  }, { passive: true });
}

// ====== Video Play Button ======
const videoPlayBtn = document.getElementById('videoPlayBtn');
const videoWrapper = document.getElementById('videoWrapper');

if (videoPlayBtn && videoWrapper && typeof videoId !== 'undefined') {
  videoPlayBtn.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'width:100%;height:100%;border:none;position:absolute;top:0;left:0;';
    videoWrapper.innerHTML = '';
    videoWrapper.style.position = 'relative';
    videoWrapper.appendChild(iframe);
  });
}

// ====== Hero Parallax ======
const destHeroBg = document.querySelector('.dest-hero-bg');
let rafId = null;

function handleParallax() {
  if (destHeroBg && window.scrollY < window.innerHeight * 1.2) {
    destHeroBg.style.transform = `translateY(${window.scrollY * 0.2}px)`;
  }
}

if (destHeroBg) {
  window.addEventListener('scroll', () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(handleParallax);
  }, { passive: true });
}

// ====== Animated Counters ======
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  if (isNaN(target)) return;

  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => {
  counterObserver.observe(el);
});

// ====== Page Load Animation ======
window.addEventListener('load', () => {
  document.body.classList.add('loaded');

  // Trigger hero animations after a small delay
  setTimeout(() => {
    document.querySelectorAll('.dest-hero .fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 150);
    });
  }, 300);
});
