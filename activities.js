/* ============================================================
   HORUS TRAVEL — ACTIVITIES PAGE JAVASCRIPT
   Filter, animations, interactions, and cinematic effects
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

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
    threshold: 0.06,
    rootMargin: '0px 0px -40px 0px'
  });
  document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in').forEach(el => {
    animObserver.observe(el);
  });

  // ====== Smooth Scroll for Anchors ======
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 120;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ====== Category Filter ======
  const filterPills = document.querySelectorAll('.act-filter-pill');
  const actCards = document.querySelectorAll('.act-card');
  const noResults = document.querySelector('.act-no-results');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Update active state
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const category = pill.dataset.category;
      let visibleCount = 0;

      actCards.forEach((card, index) => {
        const cardCategory = card.dataset.category;
        const shouldShow = category === 'all' || cardCategory === category;

        if (shouldShow) {
          card.classList.remove('hidden');
          card.style.display = '';
          card.style.animation = 'none';
          card.offsetHeight; // trigger reflow
          card.style.animation = '';
          card.classList.add('showing');
          card.style.animationDelay = (visibleCount * 0.08) + 's';
          visibleCount++;

          // Remove animation class after it completes
          setTimeout(() => {
            card.classList.remove('showing');
          }, 600 + visibleCount * 80);
        } else {
          card.classList.add('hidden');
          card.style.display = 'none';
        }
      });

      // No results message
      if (noResults) {
        noResults.classList.toggle('visible', visibleCount === 0);
      }

      // Scroll to grid
      const grid = document.querySelector('.act-grid');
      if (grid) {
        const top = grid.getBoundingClientRect().top + window.scrollY - 160;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ====== Hero Parallax ======
  const heroBg = document.querySelector('.act-hero-bg');
  let rafId = null;

  function handleParallax() {
    if (heroBg && window.scrollY < window.innerHeight * 1.3) {
      heroBg.style.transform = 'translateY(' + (window.scrollY * 0.18) + 'px)';
    }
  }

  if (heroBg) {
    window.addEventListener('scroll', () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleParallax);
    }, { passive: true });
  }

  // ====== Card Tilt Effect (desktop only) ======
  if (window.matchMedia('(min-width: 768px)').matches) {
    actCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;

        card.style.transform = 
          'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-12px)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ====== Animated Counters ======
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    if (isNaN(target)) return;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2200;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = prefix + target.toLocaleString() + suffix;
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

  // ====== Page Load ======
  document.body.classList.add('loaded');
  setTimeout(() => {
    document.querySelectorAll('.act-hero .fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 150);
    });
  }, 200);

});
