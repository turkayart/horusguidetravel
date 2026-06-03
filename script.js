// ====== Navbar Scroll Effect ======
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ====== Mobile Nav Toggle ======
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (link.parentElement.classList.contains('nav-dropdown') && window.innerWidth <= 768) {
      return;
    }
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// ====== Dynamic Mobile CTA Injection ======
const desktopCta = document.querySelector('.nav-cta');
if (desktopCta && navLinks) {
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
      navToggle.classList.remove('active');
    });
  }
}

// ====== Cities Carousel ======
const carousel = document.getElementById('citiesCarousel');
const prevBtn = document.getElementById('citiesPrev');
const nextBtn = document.getElementById('citiesNext');

if (carousel && prevBtn && nextBtn) {
  const scrollAmount = 220;

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  // Update arrow visibility based on scroll position
  function updateArrows() {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    prevBtn.style.opacity = carousel.scrollLeft <= 10 ? '0.3' : '1';
    nextBtn.style.opacity = carousel.scrollLeft >= maxScroll - 10 ? '0.3' : '1';
  }

  carousel.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  // Initial state
  setTimeout(updateArrows, 100);
}

// ====== Dropdown Navigation ======
const dropdowns = document.querySelectorAll('.nav-dropdown');
dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('a');
  const menu = dropdown.querySelector('.dropdown-menu');

  // Desktop: hover
  dropdown.addEventListener('mouseenter', () => {
    menu.classList.add('show');
  });
  dropdown.addEventListener('mouseleave', () => {
    menu.classList.remove('show');
  });

  // Mobile: click
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      menu.classList.toggle('show');
    }
  });
});

// ====== Scroll Animations ======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ====== Smooth scroll for anchor links ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ====== Active nav link highlighting ======
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links > a, .nav-links .nav-dropdown > a').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href && href.includes(current) && current) {
      link.classList.add('active');
    }
  });
});

// ====== Language Selector ======
const langSelector = document.querySelector('.lang-selector');
if (langSelector) {
  langSelector.addEventListener('click', () => {
    langSelector.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!langSelector.contains(e.target)) {
      langSelector.classList.remove('open');
    }
  });
}

// ====== Counter Animation for Stats ======
function animateCounters() {
  const counters = document.querySelectorAll('.hero-stat h3');
  counters.forEach(counter => {
    const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
    const suffix = counter.textContent.replace(/[0-9]/g, '');
    let count = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        counter.textContent = target + suffix;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(count) + suffix;
      }
    }, 16);
  });
}

// ====== Hero Features Stagger Animation ======
window.addEventListener('load', () => {
  const featureItems = document.querySelectorAll('.hero-feature-item');
  featureItems.forEach((item, index) => {
    item.style.animationDelay = `${0.3 + index * 0.15}s`;
  });
});

// ====== Hero Cinematic Ken Burns Slideshow ======
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-bg .slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    const slideInterval = 6000; // rotate every 6 seconds

    function nextSlide() {
      // Transition out the active slide
      slides[currentSlide].classList.remove('active');
      
      // Select next index
      currentSlide = (currentSlide + 1) % slides.length;
      
      // Transition in the new active slide
      slides[currentSlide].classList.add('active');
    }

    // Initialize first slide transition state on DOM load
    slides[currentSlide].classList.add('active');
    
    // Begin infinite slide loop
    setInterval(nextSlide, slideInterval);
  }
});
