// ====================================================================
//  Horus Guide Travel — Advanced 6-Step AI Trip Planner
//  Pure Vanilla JS — No Frameworks
//  Steps: Destinations → Attractions → Activities →
//         Preferences → Details → AI Review & Submit
// ====================================================================

// ======================= DATA STRUCTURES ===========================

const CITIES = [
  { id: 'cairo', name: 'Cairo', img: 'images/city-cairo.jpg', tagline: 'The Heart of Ancient Egypt' },
  { id: 'alexandria', name: 'Alexandria', img: 'images/city-alexandria.jpg', tagline: 'The Pearl of the Mediterranean' },
  { id: 'luxor', name: 'Luxor', img: 'images/hero-luxor.jpg', tagline: "The World's Greatest Open Air Museum" },
  { id: 'aswan', name: 'Aswan', img: 'images/hero-aswan.jpg', tagline: 'The Jewel of the Nile' },
  { id: 'hurghada', name: 'Hurghada', img: 'images/city-hurghada.jpg', tagline: 'Red Sea Paradise' },
  { id: 'sharm', name: 'Sharm El Sheikh', img: 'images/hero-sharm.jpg', tagline: 'Where Desert Meets the Sea' },
  { id: 'dahab', name: 'Dahab', img: 'images/hero-dahab.jpg', tagline: 'The Bohemian Beach Town' },
  { id: 'siwa', name: 'Siwa Oasis', img: 'images/hero-siwa.jpg', tagline: "Egypt's Hidden Paradise" },
  { id: 'port-said', name: 'Port Said', img: 'images/city-port-said.jpg', tagline: 'Gateway to the Suez Canal' },
  { id: 'ismailia', name: 'Ismailia', img: 'images/city-ismailia.jpg', tagline: 'The City of Gardens and Beauty' },
  { id: 'fayoum', name: 'Fayoum', img: 'images/city-fayoum.jpg', tagline: 'Land of Lakes and Waterfalls' }
];

const ATTRACTIONS = {
  cairo: [
    { id: 'pyramids', name: 'Pyramids of Giza', img: 'images/hero-pyramids.jpg', rating: 4.9, category: 'Wonder', city: 'Cairo' },
    { id: 'sphinx', name: 'Great Sphinx of Giza', img: 'images/sphinx.jpg', rating: 4.9, category: 'Iconic', city: 'Cairo' },
    { id: 'egyptian-museum', name: 'Egyptian Museum', img: 'images/grand_egyptian_museum.jpg', rating: 4.8, category: 'Museum', city: 'Cairo' },
    { id: 'khan-khalili', name: 'Khan el-Khalili', img: 'images/gallery-cairo-khan.jpg', rating: 4.6, category: 'Bazaar', city: 'Cairo' },
    { id: 'citadel', name: 'Citadel of Saladin', img: 'images/gallery-cairo-mosque.jpg', rating: 4.8, category: 'Historic', city: 'Cairo' },
    { id: 'al-azhar', name: 'Al-Azhar Mosque', img: 'images/Al-Azhar-Mosque.jpg', rating: 4.5, category: 'Cultural', city: 'Cairo' }
  ],
  alexandria: [
    { id: 'bibliotheca', name: 'Bibliotheca Alexandrina', img: 'images/attr-bibliotheca-alexandrina.jpg', rating: 4.8, category: 'Cultural', city: 'Alexandria' },
    { id: 'qaitbay', name: 'Citadel of Qaitbay', img: 'images/gallery-alex-citadel.jpg', rating: 4.7, category: 'Historic', city: 'Alexandria' },
    { id: 'catacombs', name: 'Catacombs of Kom El Shoqafa', img: 'images/attr-catacombs-kom-el-shoqafa.jpg', rating: 4.6, category: 'Must See', city: 'Alexandria' },
    { id: 'montaza', name: 'Montaza Palace', img: 'images/attr-montaza-palace.jpg', rating: 4.6, category: 'Nature', city: 'Alexandria' },
    { id: 'corniche', name: 'Alexandria Corniche', img: 'images/attr-alexandria-corniche.jpg', rating: 4.5, category: 'Experience', city: 'Alexandria' }
  ],
  luxor: [
    { id: 'valley-kings', name: 'Valley of the Kings', img: 'images/Valley-of-the-Kings.jpg', rating: 4.9, category: 'Must See', city: 'Luxor' },
    { id: 'karnak', name: 'Karnak Temple', img: 'images/Karnak-temple.jpg', rating: 4.9, category: 'Ancient', city: 'Luxor' },
    { id: 'luxor-temple', name: 'Luxor Temple', img: 'images/gallery-luxor-temple.jpg', rating: 4.7, category: 'Historic', city: 'Luxor' },
    { id: 'hatshepsut', name: 'Temple of Hatshepsut', img: 'images/hero-luxor.jpg', rating: 4.7, category: 'Landmark', city: 'Luxor' },
    { id: 'nile-cruise', name: 'Nile River Cruise', img: 'Real Moments/PHOTO-2025-12-05-14-30-07(1).jpg', rating: 4.8, category: 'Experience', city: 'Luxor' }
  ],
  aswan: [
    { id: 'philae', name: 'Philae Temple', img: 'images/gallery-aswan-philae.jpg', rating: 4.8, category: 'Ancient', city: 'Aswan' },
    { id: 'abu-simbel', name: 'Abu Simbel Temples', img: 'images/attr-abu-simbel.jpg', rating: 4.9, category: 'Must See', city: 'Aswan' },
    { id: 'high-dam', name: 'Aswan High Dam', img: 'images/attr-aswan-high-dam.jpg', rating: 4.3, category: 'Landmark', city: 'Aswan' },
    { id: 'elephantine', name: 'Elephantine Island', img: 'images/attr-elephantine-island.jpg', rating: 4.6, category: 'Nature', city: 'Aswan' },
    { id: 'nubian-village', name: 'Nubian Village', img: 'images/gallery-aswan-nubian.jpg', rating: 4.7, category: 'Cultural', city: 'Aswan' }
  ],
  hurghada: [
    { id: 'giftun-islands', name: 'Giftun Islands', img: 'images/city-hurghada.jpg', rating: 4.8, category: 'Must See', city: 'Hurghada' },
    { id: 'marina', name: 'Marina Hurghada', img: 'images/city-hurghada.jpg', rating: 4.7, category: 'Luxury', city: 'Hurghada' },
    { id: 'quad-tours', name: 'Desert Quad Bike Tours', img: 'images/Desert Quad Bike Tours.jpg', rating: 4.6, category: 'Experience', city: 'Hurghada' },
    { id: 'diving-excursions', name: 'Snorkeling & Diving Excursions', img: 'images/gallery-hurghada-reef.jpg', rating: 4.9, category: 'Adventure', city: 'Hurghada' },
    { id: 'aquarium', name: 'Hurghada Grand Aquarium', img: 'images/Hurghada Grand Aquarium.jpg', rating: 4.5, category: 'Family', city: 'Hurghada' }
  ],
  sharm: [
    { id: 'ras-mohammed', name: 'Ras Mohammed National Park', img: 'images/gallery-sharm-diving.jpg', rating: 4.9, category: 'Must See', city: 'Sharm El Sheikh' },
    { id: 'naama-bay', name: 'Naama Bay', img: 'images/hero-sharm.jpg', rating: 4.6, category: 'Entertainment', city: 'Sharm El Sheikh' },
    { id: 'soho-square', name: 'Soho Square', img: 'images/attr-soho-square.jpg', rating: 4.6, category: 'Modern', city: 'Sharm El Sheikh' },
    { id: 'diving-snorkeling', name: 'Scuba Diving & Snorkeling', img: 'images/gallery-sharm-diving.jpg', rating: 4.8, category: 'Adventure', city: 'Sharm El Sheikh' },
    { id: 'desert-safari-tours', name: 'Desert Safari Tours', img: 'images/desert safari tours.jpg', rating: 4.5, category: 'Experience', city: 'Sharm El Sheikh' }
  ],
  dahab: [
    { id: 'blue-hole', name: 'Blue Hole', img: 'images/gallery-sharm-diving.jpg', rating: 4.9, category: 'Must See', city: 'Dahab' },
    { id: 'lighthouse-reef', name: 'Lighthouse Reef', img: 'images/gallery-sharm-diving.jpg', rating: 4.8, category: 'Adventure', city: 'Dahab' },
    { id: 'mount-sinai-exc', name: 'Mount Sinai Excursions', img: 'images/hero-sharm.jpg', rating: 4.7, category: 'Spiritual', city: 'Dahab' },
    { id: 'bedouin-camps', name: 'Bedouin Camps', img: 'images/Bedouin Camps.jpg', rating: 4.6, category: 'Cultural', city: 'Dahab' },
    { id: 'lagoon-beach', name: 'Lagoon Beach', img: 'images/hero-dahab.jpg', rating: 4.7, category: 'Nature', city: 'Dahab' }
  ],
  siwa: [
    { id: 'siwa-oasis', name: 'Siwa Oasis', img: 'images/hero-siwa.jpg', rating: 4.8, category: 'Nature', city: 'Siwa Oasis' },
    { id: 'shali-fortress', name: 'Shali Fortress', img: 'images/attr-shali-fortress.jpg', rating: 4.7, category: 'Historic', city: 'Siwa Oasis' },
    { id: 'cleopatra-spring', name: 'Cleopatra Spring', img: 'images/attr-cleopatra-spring.jpg', rating: 4.6, category: 'Nature', city: 'Siwa Oasis' },
    { id: 'oracle-temple', name: 'Temple of the Oracle', img: 'images/attr-temple-oracle.jpg', rating: 4.8, category: 'Ancient', city: 'Siwa Oasis' },
    { id: 'sand-sea', name: 'Great Sand Sea', img: 'images/Great Sand Sea.jpg', rating: 4.9, category: 'Adventure', city: 'Siwa Oasis' }
  ],
  'port-said': [
    { id: 'port-said-lighthouse', name: 'Port Said Lighthouse', img: 'images/attr-port-said-lighthouse.jpg', rating: 4.7, category: 'Historic', city: 'Port Said' },
    { id: 'suez-canal-viewpoint', name: 'Suez Canal Viewpoints', img: 'images/attr-suez-canal-viewpoint.jpg', rating: 4.8, category: 'Must See', city: 'Port Said' },
    { id: 'military-museum', name: 'Military Museum', img: 'images/attr-military-museum.jpg', rating: 4.6, category: 'Museum', city: 'Port Said' },
    { id: 'ferry-crossing', name: 'Ferry Crossing', img: 'images/attr-ferry-crossing.jpg', rating: 4.7, category: 'Experience', city: 'Port Said' }
  ],
  ismailia: [
    { id: 'suez-canal-authority', name: 'Suez Canal Authority Building', img: 'images/attr-suez-canal-authority.jpg', rating: 4.8, category: 'Historic', city: 'Ismailia' },
    { id: 'ismailia-museum', name: 'Ismailia Museum', img: 'images/attr-ismailia-museum.jpg', rating: 4.6, category: 'Museum', city: 'Ismailia' },
    { id: 'lake-timsah', name: 'Lake Timsah', img: 'images/attr-lake-timsah.jpg', rating: 4.7, category: 'Nature', city: 'Ismailia' },
    { id: 'public-gardens', name: 'Public Gardens', img: 'images/attr-public-gardens.jpg', rating: 4.5, category: 'Relax', city: 'Ismailia' }
  ],
  fayoum: [
    { id: 'wadi-el-rayan', name: 'Wadi El Rayan', img: 'images/attr-wadi-el-rayan.jpg', rating: 4.8, category: 'Nature', city: 'Fayoum' },
    { id: 'wadi-al-hitan', name: 'Wadi Al Hitan (Whale Valley)', img: 'images/attr-wadi-al-hitan.jpg', rating: 4.9, category: 'UNESCO', city: 'Fayoum' },
    { id: 'qarun-lake', name: 'Qarun Lake', img: 'images/attr-qarun-lake.jpg', rating: 4.5, category: 'Scenic', city: 'Fayoum' },
    { id: 'tunis-village', name: 'Tunis Village', img: 'images/attr-tunis-village.jpg', rating: 4.7, category: 'Artisan', city: 'Fayoum' }
  ]
};

const ACTIVITIES = [
  { id: 'historical-tours', name: 'Historical Tours', icon: 'fas fa-landmark', category: 'Culture' },
  { id: 'desert-safari', name: 'Desert Safari', icon: 'fas fa-sun', category: 'Adventure' },
  { id: 'scuba-diving', name: 'Scuba Diving', icon: 'fas fa-water', category: 'Water' },
  { id: 'snorkeling', name: 'Snorkeling', icon: 'fas fa-fish', category: 'Water' },
  { id: 'yacht-tours', name: 'Yacht Tours', icon: 'fas fa-ship', category: 'Water' },
  { id: 'camel-riding', name: 'Camel Riding', icon: 'fas fa-horse', category: 'Adventure' },
  { id: 'quad-biking', name: 'Quad Biking', icon: 'fas fa-motorcycle', category: 'Adventure' },
  { id: 'hot-air-balloon', name: 'Hot Air Balloon', icon: 'fas fa-cloud', category: 'Adventure' },
  { id: 'food-tours', name: 'Local Food Tours', icon: 'fas fa-utensils', category: 'Culture' },
  { id: 'nile-cruise', name: 'Luxury Nile Cruise', icon: 'fas fa-anchor', category: 'Luxury' },
  { id: 'cultural-exp', name: 'Cultural Experiences', icon: 'fas fa-theater-masks', category: 'Culture' },
  { id: 'photography', name: 'Photography Tours', icon: 'fas fa-camera', category: 'Culture' },
  { id: 'spa-wellness', name: 'Spa & Wellness', icon: 'fas fa-spa', category: 'Luxury' },
  { id: 'shopping', name: 'Shopping Tours', icon: 'fas fa-shopping-bag', category: 'Culture' },
  { id: 'nightlife', name: 'Nightlife & Entertainment', icon: 'fas fa-glass-cheers', category: 'Luxury' }
];

const TRAVEL_STYLES = [
  { id: 'cultural', name: 'Cultural & Historical', icon: 'fas fa-landmark', desc: 'Temples, museums, and ancient wonders' },
  { id: 'adventure', name: 'Adventure & Nature', icon: 'fas fa-mountain', desc: 'Desert safaris, diving, and thrills' },
  { id: 'relaxation', name: 'Relaxation & Beach', icon: 'fas fa-umbrella-beach', desc: 'Beach resorts and spa retreats' },
  { id: 'family', name: 'Family Friendly', icon: 'fas fa-users', desc: 'Safe, fun activities for all ages' },
  { id: 'romantic', name: 'Romantic Getaway', icon: 'fas fa-heart', desc: 'Nile cruises and sunset dinners' },
  { id: 'solo', name: 'Solo Explorer', icon: 'fas fa-user', desc: 'Freedom, discovery, and connection' }
];

const LUXURY_LEVELS = [
  { id: 'standard', name: 'Standard', icon: 'fas fa-bed', desc: '3★ Hotels, group tours', price: '$' },
  { id: 'premium', name: 'Premium', icon: 'fas fa-concierge-bell', desc: '4-5★ Hotels, private guides', price: '$$' },
  { id: 'ultra', name: 'Ultra Luxury', icon: 'fas fa-crown', desc: '5★ Suites, VIP everything', price: '$$$' }
];


// ======================== STATE ==================================

const state = {
  currentStep: 1,
  totalSteps: 6,
  cities: [],
  attractions: [],
  activities: [],
  travelStyle: '',
  luxuryLevel: 'premium',
  budget: 2000,
  travelers: 2,
  days: 7,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  travelDate: '',
  contactMethod: 'whatsapp',
  notes: ''
};


// ===================== DYNAMIC STYLES ============================

(function injectDynamicStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* ---- Shake validation ---- */
    @keyframes aiShake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-6px); }
      40% { transform: translateX(6px); }
      60% { transform: translateX(-4px); }
      80% { transform: translateX(4px); }
    }
    .ai-shake { animation: aiShake 0.45s ease; }

    /* ---- Fade-up entrance ---- */
    @keyframes aiFadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .ai-fade-up {
      opacity: 0;
      animation: aiFadeUp 0.5s ease forwards;
    }

    /* ---- Card check pulse ---- */
    @keyframes aiCheckPulse {
      0%   { transform: scale(0); }
      50%  { transform: scale(1.25); }
      100% { transform: scale(1); }
    }

    /* ---- Typing dots ---- */
    @keyframes aiDot {
      0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
      40% { opacity: 1; transform: scale(1.2); }
    }

    /* ---- Ripple ---- */
    @keyframes aiRipple {
      to { transform: scale(4); opacity: 0; }
    }

    /* ---- Confetti fall ---- */
    @keyframes confettiFall {
      0%   { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
      100% { transform: translateY(105vh) rotate(720deg); opacity: 0; }
    }

    /* ---- Itinerary reveal ---- */
    @keyframes aiReveal {
      from { opacity: 0; transform: translateY(12px) scale(0.98); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* ---- Glow pulse for AI badge ---- */
    @keyframes aiGlow {
      0%, 100% { box-shadow: 0 0 8px rgba(200,162,78,0.3); }
      50%      { box-shadow: 0 0 20px rgba(200,162,78,0.6); }
    }
  `;
  document.head.appendChild(style);
})();


// ========================= INIT ==================================

function init() {
  // ---- Navbar scroll effect ----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ---- Mobile nav toggle ----
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
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // ---- Dropdown navigation ----
  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('a');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (!menu) return;
    dropdown.addEventListener('mouseenter', () => menu.classList.add('show'));
    dropdown.addEventListener('mouseleave', () => menu.classList.remove('show'));
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          menu.classList.toggle('show');
        }
      });
    }
  });

  // ---- Render first step ----
  renderStep(1);
  updateStepper();
  updateSidebar();
}

document.addEventListener('DOMContentLoaded', init);


// ==================== STEP RENDERING =============================

function renderStep(stepNumber) {
  state.currentStep = stepNumber;
  const container = document.getElementById('aiStepContent');
  if (!container) return;

  // Clear
  container.innerHTML = '';

  // Render appropriate step
  switch (stepNumber) {
    case 1: renderCities(container); break;
    case 2: renderAttractions(container); break;
    case 3: renderActivities(container); break;
    case 4: renderPreferences(container); break;
    case 5: renderDetails(container); break;
    case 6: renderReview(container); break;
  }

  // Animate entrance
  container.classList.remove('ai-fade-up');
  void container.offsetWidth; // force reflow
  container.classList.add('ai-fade-up');

  // Update stepper & sidebar
  updateStepper();
  updateSidebar();

  // Scroll to top of form area
  const formArea = document.getElementById('aiFormArea');
  if (formArea) {
    formArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


// ==================== STEP 1: CITIES =============================

function renderCities(container) {
  const selectedCount = state.cities.length;

  container.innerHTML = `
    <div class="ai-step-header">
      <h2><i class="fas fa-map-marked-alt"></i> Choose Your Destinations</h2>
      <p>Select the Egyptian cities you'd love to explore. You can pick as many as you like.</p>
    </div>
    <div class="ai-selection-count" id="cityCount">
      <i class="fas fa-check-circle"></i>
      <span>${selectedCount} ${selectedCount === 1 ? 'city' : 'cities'} selected</span>
    </div>
    <div class="ai-city-grid" id="cityGrid">
      ${CITIES.map((city, i) => {
        const isSelected = state.cities.includes(city.id);
        return `
          <div class="ai-city-card ${isSelected ? 'selected' : ''}"
               data-city="${city.id}"
               style="animation-delay: ${i * 0.06}s"
               onclick="toggleCity('${city.id}')">
            <div class="ai-city-img">
              <img src="${city.img}" alt="${city.name}" loading="lazy">
              <div class="ai-city-overlay"></div>
            </div>
            <div class="ai-city-check">
              <i class="fas fa-check"></i>
            </div>
            <div class="ai-city-info">
              <h3>${city.name}</h3>
              <span>${city.tagline}</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
    <div class="ai-step-nav">
      <div></div>
      <button class="ai-btn-next" onclick="nextStep()">
        Next: Attractions <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  `;
}

function toggleCity(cityId) {
  const idx = state.cities.indexOf(cityId);
  if (idx > -1) {
    state.cities.splice(idx, 1);
  } else {
    state.cities.push(cityId);
  }

  // Update card visuals
  const card = document.querySelector(`.ai-city-card[data-city="${cityId}"]`);
  if (card) {
    card.classList.toggle('selected');
    if (card.classList.contains('selected')) {
      const check = card.querySelector('.ai-city-check');
      if (check) {
        check.style.animation = 'aiCheckPulse 0.35s ease';
        setTimeout(() => check.style.animation = '', 350);
      }
    }
  }

  // Update count
  const countEl = document.getElementById('cityCount');
  if (countEl) {
    const n = state.cities.length;
    countEl.querySelector('span').textContent = `${n} ${n === 1 ? 'city' : 'cities'} selected`;
    countEl.classList.toggle('has-selection', n > 0);
  }

  // Also clear attractions for deselected cities
  if (idx > -1) {
    const cityAttractions = (ATTRACTIONS[cityId] || []).map(a => a.id);
    state.attractions = state.attractions.filter(a => !cityAttractions.includes(a));
  }

  updateSidebar();
}


// ==================== STEP 2: ATTRACTIONS ========================

function renderAttractions(container) {
  if (state.cities.length === 0) {
    container.innerHTML = `
      <div class="ai-step-header">
        <h2><i class="fas fa-camera-retro"></i> Must-See Attractions</h2>
        <p>Select the places you don't want to miss on your trip.</p>
      </div>
      <div class="ai-empty-state">
        <i class="fas fa-map-marker-alt"></i>
        <h3>No cities selected yet</h3>
        <p>Go back and select at least one city to see its attractions.</p>
        <button class="ai-btn-back" onclick="prevStep()">
          <i class="fas fa-arrow-left"></i> Back to Destinations
        </button>
      </div>
    `;
    return;
  }

  let attractionsHTML = '';
  state.cities.forEach(cityId => {
    const cityAttractions = ATTRACTIONS[cityId];
    if (!cityAttractions || cityAttractions.length === 0) return;
    const cityData = CITIES.find(c => c.id === cityId);
    const cityName = cityData ? cityData.name : cityId;

    attractionsHTML += `
      <div class="ai-attraction-group">
        <h3 class="ai-group-title">
          <i class="fas fa-map-pin"></i> ${cityName}
          <span class="ai-group-badge">${cityAttractions.length} spots</span>
        </h3>
        <div class="ai-attraction-grid">
          ${cityAttractions.map(attr => {
            const isSelected = state.attractions.includes(attr.id);
            return `
              <div class="ai-attraction-card ${isSelected ? 'selected' : ''}"
                   data-attraction="${attr.id}"
                   onclick="toggleAttraction('${attr.id}')">
                <div class="ai-attr-img">
                  <img src="${attr.img}" alt="${attr.name}" loading="lazy">
                  <div class="ai-attr-overlay"></div>
                  <span class="ai-attr-category">${attr.category}</span>
                </div>
                <div class="ai-attr-check">
                  <i class="fas fa-check"></i>
                </div>
                <div class="ai-attr-info">
                  <h4>${attr.name}</h4>
                  <div class="ai-attr-rating">
                    ${generateStars(attr.rating)}
                    <span>${attr.rating}</span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  const totalSelected = state.attractions.length;

  container.innerHTML = `
    <div class="ai-step-header">
      <h2><i class="fas fa-camera-retro"></i> Must-See Attractions</h2>
      <p>Choose the places you don't want to miss. We'll weave them into your perfect itinerary.</p>
    </div>
    <div class="ai-selection-count ${totalSelected > 0 ? 'has-selection' : ''}" id="attractionCount">
      <i class="fas fa-check-circle"></i>
      <span>${totalSelected} ${totalSelected === 1 ? 'attraction' : 'attractions'} selected</span>
    </div>
    ${attractionsHTML}
    <div class="ai-step-nav">
      <button class="ai-btn-back" onclick="prevStep()">
        <i class="fas fa-arrow-left"></i> Back
      </button>
      <button class="ai-btn-next" onclick="nextStep()">
        Next: Activities <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  `;
}

function toggleAttraction(attrId) {
  const idx = state.attractions.indexOf(attrId);
  if (idx > -1) {
    state.attractions.splice(idx, 1);
  } else {
    state.attractions.push(attrId);
  }

  const card = document.querySelector(`.ai-attraction-card[data-attraction="${attrId}"]`);
  if (card) {
    card.classList.toggle('selected');
    if (card.classList.contains('selected')) {
      const check = card.querySelector('.ai-attr-check');
      if (check) {
        check.style.animation = 'aiCheckPulse 0.35s ease';
        setTimeout(() => check.style.animation = '', 350);
      }
    }
  }

  const countEl = document.getElementById('attractionCount');
  if (countEl) {
    const n = state.attractions.length;
    countEl.querySelector('span').textContent = `${n} ${n === 1 ? 'attraction' : 'attractions'} selected`;
    countEl.classList.toggle('has-selection', n > 0);
  }

  updateSidebar();
}

function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  let html = '';
  for (let i = 0; i < full; i++) html += '<i class="fas fa-star"></i>';
  if (half) html += '<i class="fas fa-star-half-alt"></i>';
  for (let i = 0; i < empty; i++) html += '<i class="far fa-star"></i>';
  return html;
}


// ==================== STEP 3: ACTIVITIES =========================

function renderActivities(container) {
  const categories = ['Culture', 'Adventure', 'Water', 'Luxury'];

  let groupsHTML = categories.map(cat => {
    const items = ACTIVITIES.filter(a => a.category === cat);
    return `
      <div class="ai-activity-group">
        <h3 class="ai-group-title">
          <i class="fas fa-${cat === 'Culture' ? 'palette' : cat === 'Adventure' ? 'hiking' : cat === 'Water' ? 'water' : 'gem'}"></i>
          ${cat}
        </h3>
        <div class="ai-activity-chips">
          ${items.map(act => {
            const isSelected = state.activities.includes(act.id);
            return `
              <button class="ai-activity-chip ${isSelected ? 'selected' : ''}"
                      data-activity="${act.id}"
                      onclick="toggleActivity('${act.id}')">
                <i class="${act.icon}"></i>
                <span>${act.name}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  const selectedCount = state.activities.length;

  container.innerHTML = `
    <div class="ai-step-header">
      <h2><i class="fas fa-hiking"></i> Choose Your Activities</h2>
      <p>What kind of experiences excite you? Pick everything that sparks your interest.</p>
    </div>
    <div class="ai-selection-count ${selectedCount > 0 ? 'has-selection' : ''}" id="activityCount">
      <i class="fas fa-check-circle"></i>
      <span>${selectedCount} ${selectedCount === 1 ? 'activity' : 'activities'} selected</span>
    </div>
    ${groupsHTML}
    <div class="ai-step-nav">
      <button class="ai-btn-back" onclick="prevStep()">
        <i class="fas fa-arrow-left"></i> Back
      </button>
      <button class="ai-btn-next" onclick="nextStep()">
        Next: Preferences <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  `;
}

function toggleActivity(actId) {
  const idx = state.activities.indexOf(actId);
  if (idx > -1) {
    state.activities.splice(idx, 1);
  } else {
    state.activities.push(actId);
  }

  const chip = document.querySelector(`.ai-activity-chip[data-activity="${actId}"]`);
  if (chip) {
    chip.classList.toggle('selected');
    createRipple(null, chip);
  }

  const countEl = document.getElementById('activityCount');
  if (countEl) {
    const n = state.activities.length;
    countEl.querySelector('span').textContent = `${n} ${n === 1 ? 'activity' : 'activities'} selected`;
    countEl.classList.toggle('has-selection', n > 0);
  }

  updateSidebar();
}


// ==================== STEP 4: PREFERENCES ========================

function renderPreferences(container) {
  container.innerHTML = `
    <div class="ai-step-header">
      <h2><i class="fas fa-sliders-h"></i> Travel Style & Preferences</h2>
      <p>Help us understand your ideal travel experience so we can tailor every detail.</p>
    </div>

    <!-- Travel Style -->
    <div class="ai-pref-section">
      <h3 class="ai-pref-title"><i class="fas fa-compass"></i> Travel Style</h3>
      <div class="ai-style-grid">
        ${TRAVEL_STYLES.map(ts => {
          const isSelected = state.travelStyle === ts.id;
          return `
            <div class="ai-style-card ${isSelected ? 'selected' : ''}"
                 data-style="${ts.id}"
                 onclick="selectTravelStyle('${ts.id}')">
              <div class="ai-style-icon"><i class="${ts.icon}"></i></div>
              <h4>${ts.name}</h4>
              <p>${ts.desc}</p>
              <div class="ai-style-check"><i class="fas fa-check"></i></div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Luxury Level -->
    <div class="ai-pref-section">
      <h3 class="ai-pref-title"><i class="fas fa-crown"></i> Luxury Level</h3>
      <div class="ai-luxury-grid">
        ${LUXURY_LEVELS.map(ll => {
          const isSelected = state.luxuryLevel === ll.id;
          return `
            <div class="ai-luxury-card ${isSelected ? 'selected' : ''}"
                 data-luxury="${ll.id}"
                 onclick="selectLuxuryLevel('${ll.id}')">
              <div class="ai-luxury-price">${ll.price}</div>
              <div class="ai-luxury-icon"><i class="${ll.icon}"></i></div>
              <h4>${ll.name}</h4>
              <p>${ll.desc}</p>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Budget Slider -->
    <div class="ai-pref-section">
      <h3 class="ai-pref-title"><i class="fas fa-wallet"></i> Budget Per Person</h3>
      <div class="ai-budget-slider-wrap">
        <div class="ai-budget-display" id="budgetDisplay">${formatCurrency(state.budget)}</div>
        <input type="range" class="ai-range-slider" id="budgetSlider"
               min="500" max="10000" step="100" value="${state.budget}"
               oninput="updateBudget(this.value)">
        <div class="ai-budget-labels">
          <span>$500</span>
          <span>$10,000</span>
        </div>
      </div>
    </div>

    <!-- Travelers & Days -->
    <div class="ai-pref-section">
      <div class="ai-counter-row">
        <div class="ai-counter-group">
          <h3 class="ai-pref-title"><i class="fas fa-users"></i> Travelers</h3>
          <div class="ai-counter">
            <button class="ai-counter-btn" onclick="adjustCounter('travelers', -1)">
              <i class="fas fa-minus"></i>
            </button>
            <span class="ai-counter-value" id="travelersCount">${state.travelers}</span>
            <button class="ai-counter-btn" onclick="adjustCounter('travelers', 1)">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <span class="ai-counter-label">people</span>
        </div>
        <div class="ai-counter-group">
          <h3 class="ai-pref-title"><i class="fas fa-calendar-alt"></i> Duration</h3>
          <div class="ai-counter">
            <button class="ai-counter-btn" onclick="adjustCounter('days', -1)">
              <i class="fas fa-minus"></i>
            </button>
            <span class="ai-counter-value" id="daysCount">${state.days}</span>
            <button class="ai-counter-btn" onclick="adjustCounter('days', 1)">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <span class="ai-counter-label">days</span>
        </div>
      </div>
    </div>

    <div class="ai-step-nav">
      <button class="ai-btn-back" onclick="prevStep()">
        <i class="fas fa-arrow-left"></i> Back
      </button>
      <button class="ai-btn-next" onclick="nextStep()">
        Next: Your Details <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  `;
}

function selectTravelStyle(styleId) {
  state.travelStyle = styleId;
  document.querySelectorAll('.ai-style-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.style === styleId);
  });
  updateSidebar();
}

function selectLuxuryLevel(levelId) {
  state.luxuryLevel = levelId;
  document.querySelectorAll('.ai-luxury-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.luxury === levelId);
  });
  updateSidebar();
}

function updateBudget(value) {
  state.budget = parseInt(value);
  const display = document.getElementById('budgetDisplay');
  if (display) display.textContent = formatCurrency(state.budget);
  updateSidebar();
}

function adjustCounter(field, delta) {
  const limits = { travelers: [1, 20], days: [1, 30] };
  const [min, max] = limits[field];
  state[field] = Math.max(min, Math.min(max, state[field] + delta));

  const el = document.getElementById(field === 'travelers' ? 'travelersCount' : 'daysCount');
  if (el) {
    el.textContent = state[field];
    // Subtle pop animation
    el.style.transform = 'scale(1.3)';
    setTimeout(() => el.style.transform = 'scale(1)', 150);
  }
  updateSidebar();
}


// ==================== STEP 5: PERSONAL DETAILS ===================

function renderDetails(container) {
  container.innerHTML = `
    <div class="ai-step-header">
      <h2><i class="fas fa-user-circle"></i> Personal Details</h2>
      <p>Tell us about yourself so we can finalize your personalized trip plan.</p>
    </div>

    <div class="ai-form-card">
      <div class="ai-form-row">
        <div class="ai-form-group">
          <label for="aiFirstName">First Name <span class="ai-req">*</span></label>
          <input type="text" class="ai-input" id="aiFirstName" placeholder="Your first name"
                 value="${state.firstName}" oninput="state.firstName = this.value">
        </div>
        <div class="ai-form-group">
          <label for="aiLastName">Last Name <span class="ai-req">*</span></label>
          <input type="text" class="ai-input" id="aiLastName" placeholder="Your last name"
                 value="${state.lastName}" oninput="state.lastName = this.value">
        </div>
      </div>

      <div class="ai-form-row">
        <div class="ai-form-group">
          <label for="aiEmail">Email Address <span class="ai-req">*</span></label>
          <input type="email" class="ai-input" id="aiEmail" placeholder="your@email.com"
                 value="${state.email}" oninput="state.email = this.value">
        </div>
        <div class="ai-form-group">
          <label for="aiPhone">Phone / WhatsApp</label>
          <input type="tel" class="ai-input" id="aiPhone" placeholder="+1 234 567 890"
                 value="${state.phone}" oninput="state.phone = this.value">
        </div>
      </div>

      <div class="ai-form-group">
        <label for="aiDate">Preferred Travel Date</label>
        <input type="date" class="ai-input" id="aiDate"
               value="${state.travelDate}" oninput="state.travelDate = this.value">
      </div>

      <div class="ai-form-group">
        <label for="aiNotes">Special Notes & Requests <span class="ai-optional">(Optional)</span></label>
        <textarea class="ai-textarea" id="aiNotes" rows="4"
                  placeholder="Dietary requirements, accessibility needs, special occasions, must-see places..."
                  oninput="state.notes = this.value">${state.notes}</textarea>
      </div>

      <div class="ai-form-group">
        <label>Preferred Contact Method</label>
        <div class="ai-radio-row">
          <label class="ai-radio-option ${state.contactMethod === 'whatsapp' ? 'selected' : ''}">
            <input type="radio" name="contactMethod" value="whatsapp"
                   ${state.contactMethod === 'whatsapp' ? 'checked' : ''}
                   onchange="selectContactMethod('whatsapp')">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </label>
          <label class="ai-radio-option ${state.contactMethod === 'email' ? 'selected' : ''}">
            <input type="radio" name="contactMethod" value="email"
                   ${state.contactMethod === 'email' ? 'checked' : ''}
                   onchange="selectContactMethod('email')">
            <i class="fas fa-envelope"></i> Email
          </label>
          <label class="ai-radio-option ${state.contactMethod === 'phone' ? 'selected' : ''}">
            <input type="radio" name="contactMethod" value="phone"
                   ${state.contactMethod === 'phone' ? 'checked' : ''}
                   onchange="selectContactMethod('phone')">
            <i class="fas fa-phone"></i> Phone
          </label>
        </div>
      </div>
    </div>

    <div class="ai-step-nav">
      <button class="ai-btn-back" onclick="prevStep()">
        <i class="fas fa-arrow-left"></i> Back
      </button>
      <button class="ai-btn-next" onclick="nextStep()">
        Next: AI Review <i class="fas fa-robot"></i>
      </button>
    </div>
  `;
}

function selectContactMethod(method) {
  state.contactMethod = method;
  document.querySelectorAll('.ai-radio-option').forEach(opt => {
    const input = opt.querySelector('input');
    opt.classList.toggle('selected', input && input.value === method);
  });
}


// ==================== STEP 6: AI REVIEW ==========================

function renderReview(container) {
  // Show generating animation first
  container.innerHTML = `
    <div class="ai-step-header">
      <h2><i class="fas fa-robot"></i> AI Trip Review</h2>
      <p>Our AI is crafting your personalized Egypt itinerary...</p>
    </div>
    <div class="ai-generating" id="aiGenerating">
      <div class="ai-generating-icon">
        <i class="fas fa-brain"></i>
      </div>
      <h3>Generating Your Perfect Itinerary</h3>
      <p>Analyzing your preferences and crafting a bespoke travel plan...</p>
      <div class="ai-typing-dots">
        <span style="animation-delay: 0s"></span>
        <span style="animation-delay: 0.2s"></span>
        <span style="animation-delay: 0.4s"></span>
      </div>
    </div>
    <div class="ai-review-panel" id="aiReviewPanel" style="display: none;"></div>
  `;

  // After 2.5 seconds, reveal the review
  setTimeout(() => {
    const generating = document.getElementById('aiGenerating');
    const panel = document.getElementById('aiReviewPanel');
    if (generating) generating.style.display = 'none';
    if (panel) {
      panel.style.display = 'block';
      panel.style.animation = 'aiReveal 0.6s ease forwards';
      buildReviewContent(panel);
    }
  }, 2500);
}

function buildReviewContent(panel) {
  const itinerary = generateItinerary();
  const estimatedCost = calculateEstimatedCost();

  // Gather display data
  const selectedCities = state.cities.map(id => CITIES.find(c => c.id === id)).filter(Boolean);
  const selectedAttractions = getSelectedAttractionsGrouped();
  const selectedActivities = state.activities.map(id => ACTIVITIES.find(a => a.id === id)).filter(Boolean);
  const styleData = TRAVEL_STYLES.find(s => s.id === state.travelStyle);
  const luxuryData = LUXURY_LEVELS.find(l => l.id === state.luxuryLevel);

  panel.innerHTML = `
    <!-- AI Badge -->
    <div class="ai-review-badge">
      <i class="fas fa-robot"></i>
      <span>AI-Generated Trip Plan</span>
    </div>

    <!-- Selected Cities -->
    <div class="ai-review-section">
      <h3><i class="fas fa-map-marker-alt"></i> Your Destinations</h3>
      <div class="ai-review-cities">
        ${selectedCities.map(city => `
          <div class="ai-review-city-chip">
            <img src="${city.img}" alt="${city.name}">
            <span>${city.name}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Selected Attractions -->
    ${Object.keys(selectedAttractions).length > 0 ? `
    <div class="ai-review-section">
      <h3><i class="fas fa-camera-retro"></i> Must-See Attractions</h3>
      ${Object.entries(selectedAttractions).map(([cityName, attrs]) => `
        <div class="ai-review-attr-group">
          <h4>${cityName}</h4>
          <div class="ai-review-pills">
            ${attrs.map(a => `<span class="ai-pill">${a.name}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
    ` : ''}

    <!-- Selected Activities -->
    ${selectedActivities.length > 0 ? `
    <div class="ai-review-section">
      <h3><i class="fas fa-hiking"></i> Activities</h3>
      <div class="ai-review-pills">
        ${selectedActivities.map(a => `
          <span class="ai-pill ai-pill-activity">
            <i class="${a.icon}"></i> ${a.name}
          </span>
        `).join('')}
      </div>
    </div>
    ` : ''}

    <!-- Trip Details -->
    <div class="ai-review-section">
      <h3><i class="fas fa-sliders-h"></i> Trip Details</h3>
      <div class="ai-review-details-grid">
        <div class="ai-review-detail">
          <i class="fas fa-compass"></i>
          <strong>Travel Style</strong>
          <span>${styleData ? styleData.name : 'Not selected'}</span>
        </div>
        <div class="ai-review-detail">
          <i class="${luxuryData ? luxuryData.icon : 'fas fa-star'}"></i>
          <strong>Luxury Level</strong>
          <span>${luxuryData ? luxuryData.name : 'Premium'}</span>
        </div>
        <div class="ai-review-detail">
          <i class="fas fa-wallet"></i>
          <strong>Budget / Person</strong>
          <span>${formatCurrency(state.budget)}</span>
        </div>
        <div class="ai-review-detail">
          <i class="fas fa-users"></i>
          <strong>Travelers</strong>
          <span>${state.travelers} ${state.travelers === 1 ? 'person' : 'people'}</span>
        </div>
        <div class="ai-review-detail">
          <i class="fas fa-calendar-alt"></i>
          <strong>Duration</strong>
          <span>${state.days} days</span>
        </div>
        <div class="ai-review-detail">
          <i class="fas fa-dollar-sign"></i>
          <strong>Estimated Total</strong>
          <span class="ai-highlight-cost">${formatCurrency(estimatedCost)}</span>
        </div>
      </div>
    </div>

    <!-- Personal Info -->
    <div class="ai-review-section">
      <h3><i class="fas fa-user-circle"></i> Personal Information</h3>
      <div class="ai-review-info-grid">
        <div class="ai-review-info-item">
          <strong>Name</strong>
          <span>${state.firstName} ${state.lastName}</span>
        </div>
        <div class="ai-review-info-item">
          <strong>Email</strong>
          <span>${state.email}</span>
        </div>
        ${state.phone ? `
        <div class="ai-review-info-item">
          <strong>Phone</strong>
          <span>${state.phone}</span>
        </div>
        ` : ''}
        ${state.travelDate ? `
        <div class="ai-review-info-item">
          <strong>Travel Date</strong>
          <span>${formatDate(state.travelDate)}</span>
        </div>
        ` : ''}
        ${state.notes ? `
        <div class="ai-review-info-item ai-full-width">
          <strong>Special Notes</strong>
          <span>${state.notes}</span>
        </div>
        ` : ''}
      </div>
    </div>

    <!-- AI Itinerary Suggestion -->
    <div class="ai-review-section ai-itinerary-section">
      <h3><i class="fas fa-route"></i> Your AI-Suggested Itinerary</h3>
      <div class="ai-itinerary">
        ${itinerary.map((day, i) => `
          <div class="ai-itinerary-day" style="animation: aiReveal 0.4s ease ${0.1 * i}s forwards; opacity: 0;">
            <div class="ai-day-number">
              <span>Day</span>
              <strong>${day.day}</strong>
            </div>
            <div class="ai-day-content">
              <h4>${day.title}</h4>
              <p>${day.description}</p>
              <div class="ai-day-highlights">
                ${day.highlights.map(h => `<span class="ai-day-tag"><i class="fas fa-star"></i> ${h}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Submit -->
    <div class="ai-review-submit">
      <p class="ai-review-disclaimer">
        <i class="fas fa-info-circle"></i>
        This is an AI-generated suggestion. Our travel experts will refine and personalize it further after submission.
      </p>
      <button class="ai-btn-submit" onclick="submitForm()">
        <i class="fas fa-paper-plane"></i> Submit My Trip Plan
      </button>
    </div>
  `;
}


// ==================== NAVIGATION =================================

function nextStep() {
  if (!validateStep(state.currentStep)) return;
  if (state.currentStep < state.totalSteps) {
    renderStep(state.currentStep + 1);
  }
}

function prevStep() {
  if (state.currentStep > 1) {
    renderStep(state.currentStep - 1);
  }
}

function goToStep(n) {
  if (n >= 1 && n <= state.totalSteps) {
    renderStep(n);
  }
}


// ==================== STEPPER ====================================

function updateStepper() {
  const steps = document.querySelectorAll('.ai-progress-step');
  const fill = document.getElementById('aiProgressFill');

  steps.forEach((s, i) => {
    const num = i + 1;
    s.classList.remove('active', 'completed');
    if (num === state.currentStep) s.classList.add('active');
    else if (num < state.currentStep) s.classList.add('completed');
  });

  if (fill) {
    const pct = ((state.currentStep - 1) / (state.totalSteps - 1)) * 100;
    fill.style.width = pct + '%';
  }
}


// ==================== VALIDATION =================================

function validateStep(step) {
  switch (step) {
    case 1: {
      if (state.cities.length === 0) {
        showValidation('Please select at least one city', document.getElementById('cityGrid'));
        return false;
      }
      return true;
    }
    case 2: {
      // Attractions are optional — skip allowed
      return true;
    }
    case 3: {
      // Activities are optional — skip allowed
      return true;
    }
    case 4: {
      if (!state.travelStyle) {
        showValidation('Please select a travel style', document.querySelector('.ai-style-grid'));
        return false;
      }
      if (!state.luxuryLevel) {
        showValidation('Please select a luxury level', document.querySelector('.ai-luxury-grid'));
        return false;
      }
      return true;
    }
    case 5: {
      const firstName = document.getElementById('aiFirstName');
      const lastName = document.getElementById('aiLastName');
      const email = document.getElementById('aiEmail');

      // Sync state from inputs
      if (firstName) state.firstName = firstName.value.trim();
      if (lastName) state.lastName = lastName.value.trim();
      if (email) state.email = email.value.trim();

      if (!state.firstName) {
        showValidation('Please enter your first name', firstName);
        return false;
      }
      if (!state.lastName) {
        showValidation('Please enter your last name', lastName);
        return false;
      }
      if (!state.email || !isValidEmail(state.email)) {
        showValidation('Please enter a valid email address', email);
        return false;
      }

      // Sync remaining fields
      const phone = document.getElementById('aiPhone');
      const date = document.getElementById('aiDate');
      const notes = document.getElementById('aiNotes');
      if (phone) state.phone = phone.value.trim();
      if (date) state.travelDate = date.value;
      if (notes) state.notes = notes.value.trim();

      return true;
    }
    default:
      return true;
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showValidation(message, element) {
  if (element) {
    element.classList.add('ai-shake');
    element.style.outline = '2px solid #ef4444';
    element.style.outlineOffset = '4px';
    setTimeout(() => {
      element.classList.remove('ai-shake');
      element.style.outline = '';
      element.style.outlineOffset = '';
    }, 600);
  }

  // Show toast message
  showToast(message, 'error');
}

function showToast(message, type = 'info') {
  // Remove existing toast
  const existing = document.querySelector('.ai-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `ai-toast ai-toast-${type}`;
  toast.innerHTML = `
    <i class="fas fa-${type === 'error' ? 'exclamation-circle' : type === 'success' ? 'check-circle' : 'info-circle'}"></i>
    <span>${message}</span>
  `;

  // Style the toast
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%) translateY(20px)',
    padding: '14px 28px',
    background: type === 'error' ? '#ef4444' : type === 'success' ? '#22c55e' : '#c8a24e',
    color: '#fff',
    borderRadius: '12px',
    fontSize: '0.95rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    zIndex: '10000',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    opacity: '0',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: "'Inter', sans-serif"
  });

  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}


// ==================== SIDEBAR ====================================

function updateSidebar() {
  const sidebar = document.getElementById('aiSidebar');
  if (!sidebar) return;

  // Cities
  const citiesEl = sidebar.querySelector('#sidebarCities');
  if (citiesEl) {
    if (state.cities.length > 0) {
      const cityNames = state.cities.map(id => {
        const c = CITIES.find(city => city.id === id);
        return c ? c.name : id;
      });
      citiesEl.innerHTML = `
        <div class="ai-sidebar-thumbnails">
          ${state.cities.slice(0, 4).map(id => {
            const c = CITIES.find(city => city.id === id);
            return c ? `<img src="${c.img}" alt="${c.name}" title="${c.name}">` : '';
          }).join('')}
          ${state.cities.length > 4 ? `<span class="ai-sidebar-more">+${state.cities.length - 4}</span>` : ''}
        </div>
        <span class="ai-sidebar-value">${cityNames.join(', ')}</span>
      `;
      citiesEl.classList.add('has-value');
    } else {
      citiesEl.innerHTML = '<span class="ai-sidebar-placeholder">Not selected yet</span>';
      citiesEl.classList.remove('has-value');
    }
  }

  // Attractions
  const attractionsEl = sidebar.querySelector('#sidebarAttractions');
  if (attractionsEl) {
    if (state.attractions.length > 0) {
      attractionsEl.innerHTML = `<span class="ai-sidebar-value">${state.attractions.length} attraction${state.attractions.length !== 1 ? 's' : ''} chosen</span>`;
      attractionsEl.classList.add('has-value');
    } else {
      attractionsEl.innerHTML = '<span class="ai-sidebar-placeholder">Not selected yet</span>';
      attractionsEl.classList.remove('has-value');
    }
  }

  // Activities
  const activitiesEl = sidebar.querySelector('#sidebarActivities');
  if (activitiesEl) {
    if (state.activities.length > 0) {
      activitiesEl.innerHTML = `<span class="ai-sidebar-value">${state.activities.length} activit${state.activities.length !== 1 ? 'ies' : 'y'} chosen</span>`;
      activitiesEl.classList.add('has-value');
    } else {
      activitiesEl.innerHTML = '<span class="ai-sidebar-placeholder">Not selected yet</span>';
      activitiesEl.classList.remove('has-value');
    }
  }

  // Budget
  const budgetEl = sidebar.querySelector('#sidebarBudget');
  if (budgetEl) {
    budgetEl.innerHTML = `<span class="ai-sidebar-value">${formatCurrency(state.budget)} / person</span>`;
    budgetEl.classList.add('has-value');
  }

  // Travelers & Days
  const travelersEl = sidebar.querySelector('#sidebarTravelers');
  if (travelersEl) {
    travelersEl.innerHTML = `<span class="ai-sidebar-value">${state.travelers} traveler${state.travelers !== 1 ? 's' : ''} · ${state.days} days</span>`;
    travelersEl.classList.add('has-value');
  }

  // Style
  const styleEl = sidebar.querySelector('#sidebarStyle');
  if (styleEl) {
    const ts = TRAVEL_STYLES.find(s => s.id === state.travelStyle);
    if (ts) {
      styleEl.innerHTML = `<span class="ai-sidebar-value">${ts.name}</span>`;
      styleEl.classList.add('has-value');
    } else {
      styleEl.innerHTML = '<span class="ai-sidebar-placeholder">Not selected yet</span>';
      styleEl.classList.remove('has-value');
    }
  }
}


// ==================== SUBMIT =====================================

function submitForm() {
  // Hide review panel
  const container = document.getElementById('aiStepContent');
  if (!container) return;

  // Show success
  container.innerHTML = `
    <div class="ai-success-panel">
      <div class="ai-success-icon">
        <i class="fas fa-check"></i>
      </div>
      <h2>Your Trip Plan is <em>On Its Way!</em></h2>
      <p class="ai-success-main">Thank you, ${state.firstName}! Our travel experts will craft your perfect Egyptian adventure and reach out within 24 hours.</p>
      <p class="ai-success-sub">We'll contact you via ${state.contactMethod === 'whatsapp' ? 'WhatsApp' : state.contactMethod === 'email' ? 'Email' : 'Phone'} with your personalized itinerary.</p>

      <div class="ai-success-summary">
        <div class="ai-success-stat">
          <i class="fas fa-map-marker-alt"></i>
          <span>${state.cities.length} destinations</span>
        </div>
        <div class="ai-success-stat">
          <i class="fas fa-camera-retro"></i>
          <span>${state.attractions.length} attractions</span>
        </div>
        <div class="ai-success-stat">
          <i class="fas fa-calendar-alt"></i>
          <span>${state.days} days</span>
        </div>
        <div class="ai-success-stat">
          <i class="fas fa-users"></i>
          <span>${state.travelers} travelers</span>
        </div>
      </div>

      <div class="ai-success-actions">
        <a href="index.html" class="ai-btn-next">
          <i class="fas fa-home"></i> Back to Home
        </a>
        <a href="${buildWhatsAppLink()}" target="_blank" class="ai-btn-whatsapp">
          <i class="fab fa-whatsapp"></i> Chat on WhatsApp
        </a>
      </div>
    </div>
  `;

  container.classList.remove('ai-fade-up');
  void container.offsetWidth;
  container.classList.add('ai-fade-up');

  // Hide stepper
  const progress = document.getElementById('aiProgress');
  if (progress) {
    progress.style.opacity = '0.3';
    progress.style.pointerEvents = 'none';
  }

  // Fire confetti
  launchConfetti();

  // Scroll to top
  const formArea = document.getElementById('aiFormArea');
  if (formArea) formArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// ==================== CONFETTI ===================================

function launchConfetti() {
  const colors = ['#c8a24e', '#dbb96a', '#a8832e', '#ffd700', '#fff5d4', '#ffffff', '#e8d5a3'];
  const container = document.body;

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    const size = Math.random() * 10 + 5;
    const isCircle = Math.random() > 0.5;

    Object.assign(confetti.style, {
      position: 'fixed',
      top: '-10px',
      left: Math.random() * 100 + 'vw',
      width: size + 'px',
      height: isCircle ? size + 'px' : size * 0.4 + 'px',
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      borderRadius: isCircle ? '50%' : '2px',
      zIndex: '99999',
      pointerEvents: 'none',
      animation: `confettiFall ${Math.random() * 2 + 2.5}s linear ${Math.random() * 1.5}s forwards`
    });

    container.appendChild(confetti);

    // Cleanup
    setTimeout(() => confetti.remove(), 5000);
  }
}


// ==================== ITINERARY GENERATION =======================

function generateItinerary() {
  const days = [];
  const totalDays = state.days;

  // Collect all selected attractions
  const allAttractions = [];
  state.cities.forEach(cityId => {
    const cityAttrs = (ATTRACTIONS[cityId] || []).filter(a => state.attractions.includes(a.id));
    allAttractions.push(...cityAttrs);
  });

  // Collect selected activities
  const allActivities = state.activities.map(id => ACTIVITIES.find(a => a.id === id)).filter(Boolean);

  // Distribute across days
  const attractionsPerDay = Math.max(1, Math.ceil(allAttractions.length / totalDays));
  let attrIndex = 0;
  let actIndex = 0;

  for (let d = 1; d <= totalDays; d++) {
    const dayAttractions = allAttractions.slice(attrIndex, attrIndex + attractionsPerDay);
    attrIndex += attractionsPerDay;

    // Assign 1 activity per day (cycling through)
    const dayActivity = allActivities.length > 0 ? allActivities[actIndex % allActivities.length] : null;
    if (allActivities.length > 0) actIndex++;

    // Build day data
    const highlights = dayAttractions.map(a => a.name);
    if (dayActivity) highlights.push(dayActivity.name);

    // Generate title and description
    let title = '';
    let description = '';

    if (dayAttractions.length > 0) {
      const primaryCity = dayAttractions[0].city;
      title = `Explore ${primaryCity}`;
      description = `Visit ${dayAttractions.map(a => a.name).join(', ')}${dayActivity ? ` and enjoy ${dayActivity.name}` : ''}. `;

      if (d === 1) {
        description = `Arrive and start your Egyptian adventure! ${description}`;
      } else if (d === totalDays) {
        description += 'Wrap up your journey with lasting memories. Free time for last-minute shopping and photo opportunities.';
      } else {
        const timeOfDay = d % 2 === 0 ? 'morning' : 'afternoon';
        description += `Best visited in the ${timeOfDay}. Your private guide will ensure an unforgettable experience.`;
      }
    } else if (dayActivity) {
      title = `${dayActivity.name} Day`;
      description = `Dedicate today to ${dayActivity.name}. A perfect blend of adventure and relaxation.`;
    } else {
      // Free day
      if (d === totalDays) {
        title = 'Departure Day';
        description = 'Check out and depart with a heart full of memories. Airport transfer included. Safe travels!';
      } else if (d === 1) {
        title = 'Arrival & Welcome';
        description = 'Welcome to Egypt! Settle into your hotel, enjoy a traditional welcome dinner, and prepare for the adventure ahead.';
      } else {
        title = 'Free Day & Relaxation';
        description = 'Enjoy a leisure day. Explore local markets, relax at the hotel pool, or arrange an optional excursion with your guide.';
      }
    }

    days.push({
      day: d,
      title: title,
      description: description,
      highlights: highlights.length > 0 ? highlights : ['Free time', 'Optional excursions']
    });
  }

  return days;
}


// ==================== HELPER FUNCTIONS ===========================

function formatCurrency(n) {
  return '$' + n.toLocaleString('en-US');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function calculateEstimatedCost() {
  // Simple estimation: budget * travelers * (days / 7 factor)
  const dayFactor = Math.max(0.5, state.days / 7);
  const luxuryMultiplier = state.luxuryLevel === 'ultra' ? 1.5 : state.luxuryLevel === 'standard' ? 0.7 : 1;
  return Math.round(state.budget * state.travelers * dayFactor * luxuryMultiplier);
}

function getSelectedAttractionsGrouped() {
  const grouped = {};
  state.cities.forEach(cityId => {
    const cityAttrs = (ATTRACTIONS[cityId] || []).filter(a => state.attractions.includes(a.id));
    if (cityAttrs.length > 0) {
      const cityData = CITIES.find(c => c.id === cityId);
      const cityName = cityData ? cityData.name : cityId;
      grouped[cityName] = cityAttrs;
    }
  });
  return grouped;
}

function buildWhatsAppLink() {
  const cities = state.cities.map(id => {
    const c = CITIES.find(city => city.id === id);
    return c ? c.name : id;
  }).join(', ');

  const message = encodeURIComponent(
    `Hi Horus Guide Travel! 🏛️\n\n` +
    `I just submitted my AI trip plan and would love to discuss it:\n\n` +
    `📍 Destinations: ${cities}\n` +
    `👥 Travelers: ${state.travelers}\n` +
    `📅 Days: ${state.days}\n` +
    `💰 Budget: ${formatCurrency(state.budget)}/person\n` +
    `📧 Name: ${state.firstName} ${state.lastName}\n\n` +
    `Looking forward to hearing from you!`
  );

  return `https://wa.me/201070430634?text=${message}`;
}

function animateIn(element, delay) {
  if (!element) return;
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  setTimeout(() => {
    element.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, delay || 0);
}

function scrollToElement(el) {
  if (!el) return;
  const offset = 100;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: top, behavior: 'smooth' });
}

function createRipple(e, element) {
  if (!element) return;
  const ripple = document.createElement('span');
  Object.assign(ripple.style, {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(200, 162, 78, 0.3)',
    width: '20px',
    height: '20px',
    pointerEvents: 'none',
    transform: 'scale(0)',
    animation: 'aiRipple 0.6s ease-out'
  });

  const rect = element.getBoundingClientRect();
  ripple.style.left = (rect.width / 2 - 10) + 'px';
  ripple.style.top = (rect.height / 2 - 10) + 'px';

  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}


// ==================== INTERSECTION OBSERVER ======================

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Observe elements after DOM load & init Navbar interactions
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-up').forEach(el => scrollObserver.observe(el));

  // ====== Navbar Scroll Effect ======
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

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
        // Don't close mobile nav if clicking on dropdown trigger
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
});


