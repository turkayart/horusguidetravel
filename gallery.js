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

// ====== Language Selector ======
const langSelector = document.getElementById('langSelector');
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

// ====== Scroll Animations ======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ====== DYNAMIC GALLERY FILTER LOGIC ======
document.addEventListener('DOMContentLoaded', () => {
  const typeFilters = document.getElementById('typeFilters');
  const grid = document.getElementById('galleryGrid');
  const resultNote = document.getElementById('galleryResultNote');

  if (!typeFilters || !grid || !resultNote) {
    console.error('Gallery elements missing!');
    return;
  }

  let activeType = 'all';

  // Check URL hash for initial filter state
  const hash = window.location.hash.toLowerCase();
  if (hash === '#video' || hash === '#videos') {
    activeType = 'video';
  } else if (hash === '#photo' || hash === '#photos') {
    activeType = 'photo';
  }

  // Update button active state if a specific type is selected via URL hash
  if (activeType !== 'all') {
    typeFilters.querySelectorAll('.gallery-filter').forEach(btn => {
      if (btn.dataset.type === activeType) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
  }

  // Media Type filter click handler
  typeFilters.addEventListener('click', (e) => {
    const button = e.target.closest('.gallery-filter');
    if (!button) return;

    typeFilters.querySelectorAll('.gallery-filter').forEach(btn => btn.classList.remove('is-active'));
    button.classList.add('is-active');
    activeType = button.dataset.type;
    renderGallery();
  });

  // Filter check helper
  function matchesFilter(item, typeFilter) {
    if (typeFilter !== 'all' && item.type !== typeFilter) {
      return false;
    }
    return true;
  }

  // Core render function
  function renderGallery() {
    if (!window.HORUS_MEDIA || !window.HORUS_MEDIA.items) {
      grid.innerHTML = '<div style="color:var(--text-muted); padding:40px; text-align:center; grid-column:1/-1;">Loading media...</div>';
      return;
    }

    const allItems = window.HORUS_MEDIA.items;
    const filtered = allItems.filter(item => matchesFilter(item, activeType));

    // Sort to prioritize videos in the grid, then sort by original indexes
    filtered.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === 'video' ? -1 : 1; // videos first
      }
      return a.index - b.index;
    });

    grid.innerHTML = '';
    
    if (filtered.length === 0) {
      grid.innerHTML = '<div style="color:var(--text-muted); padding:80px 20px; text-align:center; grid-column:1/-1; font-size:1.1rem;"><i class="fas fa-search" style="font-size:2rem; margin-bottom:14px; display:block; color:var(--media-gold);"></i>No matching travel moments found. Try choosing another filter!</div>';
      resultNote.textContent = 'Showing 0 items';
      return;
    }

    // Create cards and append to grid
    filtered.forEach((item, idx) => {
      // Create card using the unified factory in media-library.js
      const card = window.HORUS_MEDIA.createMediaCard(item, {
        large: false,
        videoPreload: 'metadata',
        eager: idx < 12 // load first 12 images instantly, others lazy
      });
      grid.appendChild(card);
    });

    // Update Counter text
    resultNote.textContent = `Showing ${filtered.length} matching travel moments`;

    // Re-trigger observer for cards fade-in
    document.querySelectorAll('.gallery-grid .horus-media-card').forEach((card, idx) => {
      card.classList.add('fade-up');
      card.style.animationDelay = `${(idx % 4) * 0.1}s`;
      observer.observe(card);
    });
  }

  // Listen for hash change in case user navigates while already on this page
  window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash.toLowerCase();
    let newType = 'all';
    if (currentHash === '#video' || currentHash === '#videos') {
      newType = 'video';
    } else if (currentHash === '#photo' || currentHash === '#photos') {
      newType = 'photo';
    }
    
    activeType = newType;
    
    // Update active filter button styling
    typeFilters.querySelectorAll('.gallery-filter').forEach(btn => {
      if (btn.dataset.type === activeType) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
    
    renderGallery();
  });

  // Initial render
  setTimeout(renderGallery, 100);
});
