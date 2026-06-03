/* ============================================================
   HORUS TRAVEL — ATTRACTION DETAIL PAGES JAVASCRIPT
   Enhanced interactions, animations, and cinematic effects
   ============================================================ */

// ====== Navbar Scroll Effect ======
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
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
      if (link.parentElement.classList.contains('nav-dropdown') && window.innerWidth <= 768) {
        return;
      }
      navLinks.classList.remove('active');
      navToggle.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    });
  });

  // ====== Dynamic Mobile CTA Injection ======
  const desktopCta = document.querySelector('.nav-cta');
  if (desktopCta) {
    const mobileCtaExists = navLinks.querySelector('.nav-mobile-cta');
    if (!mobileCtaExists) {
      const mobileCta = document.createElement('a');
      mobileCta.href = desktopCta.getAttribute('href');
      mobileCta.className = 'nav-mobile-cta';
      mobileCta.innerHTML = desktopCta.innerHTML;
      navLinks.appendChild(mobileCta);
      
      // Close mobile nav when clicking the injected CTA
      mobileCta.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity = '';
        });
      });
    }
  }
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

// ====== Quick Info Bar Sticky State ======
const quickInfo = document.querySelector('.attr-quick-info');
if (quickInfo) {
  const heroSection = document.querySelector('.attr-hero');
  const observer = new IntersectionObserver(([entry]) => {
    quickInfo.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0 });
  if (heroSection) observer.observe(heroSection);
}

// ====== Smooth Scroll for Anchor Links ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 100;
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
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'width:100%;height:100%;border:none;position:absolute;top:0;left:0;';
    const wrapper = videoWrapper.querySelector('.video-wrapper');
    if (wrapper) {
      wrapper.innerHTML = '';
      wrapper.appendChild(iframe);
    }
  });
}

// ====== Hero Parallax ======
const attrHeroBg = document.querySelector('.attr-hero-bg');
let rafId = null;

function handleParallax() {
  if (attrHeroBg && window.scrollY < window.innerHeight * 1.2) {
    attrHeroBg.style.transform = 'translateY(' + (window.scrollY * 0.2) + 'px)';
  }
}

if (attrHeroBg) {
  window.addEventListener('scroll', () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(handleParallax);
  }, { passive: true });
}

// ====== Month Calendar Tooltip ======
document.querySelectorAll('.attr-month').forEach(month => {
  month.addEventListener('mouseenter', function() {
    const tooltip = this.querySelector('.attr-month-tooltip');
    if (tooltip) tooltip.style.opacity = '1';
  });
  month.addEventListener('mouseleave', function() {
    const tooltip = this.querySelector('.attr-month-tooltip');
    if (tooltip) tooltip.style.opacity = '0';
  });
});

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
    const eased = 1 - Math.pow(1 - progress, 3);
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

  setTimeout(() => {
    document.querySelectorAll('.attr-hero .fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 150);
    });
  }, 300);
});
