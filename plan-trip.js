// ====================================================
//  Plan My Trip — Wizard Logic (Redesigned)
//  4-Step: Trip Preferences → Personal → Contact → Review
// ====================================================

// --- Configuration ---
// Get your free access key from https://web3forms.com/ (no registration needed, just enter your email)
const WEB3FORMS_ACCESS_KEY = "257b75cc-fd58-464d-b43e-0e6758aa52a4";

let currentStep = 1;
const totalSteps = 4;

// ---- Mobile Nav Toggle ----
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
    link.addEventListener('click', (e) => {
      // Don't close mobile nav if clicking on dropdown trigger
      if (link.parentElement.classList.contains('nav-dropdown') && window.innerWidth <= 768) {
        return;
      }
      navLinks.classList.remove('active');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
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
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
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


// ===============================================
//  SIDEBAR OVERVIEW — Live updates
// ===============================================
function updateOverview() {
  // Destinations
  const dests = Array.from(document.querySelectorAll('input[name="destination"]:checked')).map(c => c.value);
  const destEl = document.querySelector('#ov-destinations .pt-ov-content span');
  if (dests.length > 0) {
    destEl.textContent = dests.join(', ');
    destEl.classList.add('has-value');
  } else {
    destEl.textContent = 'Not selected yet';
    destEl.classList.remove('has-value');
  }

  // Budget
  const budget = document.querySelector('input[name="budget"]:checked');
  const budgetEl = document.querySelector('#ov-budget .pt-ov-content span');
  if (budget) {
    budgetEl.textContent = budget.value;
    budgetEl.classList.add('has-value');
  } else {
    budgetEl.textContent = 'Not selected yet';
    budgetEl.classList.remove('has-value');
  }

  // Travel Style
  const style = document.querySelector('input[name="style"]:checked');
  const styleEl = document.querySelector('#ov-style .pt-ov-content span');
  if (style) {
    styleEl.textContent = style.value;
    styleEl.classList.add('has-value');
  } else {
    styleEl.textContent = 'Not selected yet';
    styleEl.classList.remove('has-value');
  }

  // People
  const people = document.getElementById('selectPeople');
  const peopleEl = document.querySelector('#ov-people .pt-ov-content span');
  if (people) {
    peopleEl.textContent = people.options[people.selectedIndex].text;
    peopleEl.classList.add('has-value');
  }

  // Duration
  const days = document.getElementById('selectDays');
  const daysEl = document.querySelector('#ov-duration .pt-ov-content span');
  if (days) {
    daysEl.textContent = days.options[days.selectedIndex].text;
    daysEl.classList.add('has-value');
  }
}

// Attach live listeners
document.querySelectorAll('input[name="destination"], input[name="budget"], input[name="style"]').forEach(input => {
  input.addEventListener('change', updateOverview);
});
const selectPeople = document.getElementById('selectPeople');
const selectDays = document.getElementById('selectDays');
if (selectPeople) selectPeople.addEventListener('change', updateOverview);
if (selectDays) selectDays.addEventListener('change', updateOverview);

// ===============================================
//  NAVIGATION
// ===============================================
function goToStep(step) {
  if (step < 1 || step > totalSteps) return;

  // Hide all steps
  document.querySelectorAll('.pt-step').forEach(s => s.classList.remove('active'));

  // Show target
  const target = document.querySelector(`.pt-step[data-step="${step}"]`);
  if (target) target.classList.add('active');

  currentStep = step;
  updateProgress();
  updateOverview();

  // If step 4 (review), build the review card
  if (step === 4) buildReview();

  // Scroll form into view
  document.getElementById('ptFormArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function nextStep() {
  if (!validateStep(currentStep)) return;
  goToStep(currentStep + 1);
}

function prevStep() {
  goToStep(currentStep - 1);
}

// ===============================================
//  PROGRESS
// ===============================================
function updateProgress() {
  const steps = document.querySelectorAll('.pt-progress-step');
  const fill = document.getElementById('progressLineFill');

  steps.forEach((s, i) => {
    const num = i + 1;
    s.classList.remove('active', 'completed');
    if (num === currentStep) s.classList.add('active');
    else if (num < currentStep) s.classList.add('completed');
  });

  const pct = ((currentStep - 1) / (totalSteps - 1)) * 100;
  fill.style.width = pct + '%';
}

// ===============================================
//  VALIDATION
// ===============================================
function validateStep(step) {
  switch (step) {
    case 1: {
      const dests = document.querySelectorAll('input[name="destination"]:checked');
      if (dests.length === 0) {
        shakeElement(document.getElementById('destGrid'));
        return false;
      }
      return true;
    }
    case 2: {
      const first = document.getElementById('firstName').value.trim();
      const last = document.getElementById('lastName').value.trim();
      if (!first || !last) {
        if (!first) shakeElement(document.getElementById('firstName'));
        if (!last) shakeElement(document.getElementById('lastName'));
        return false;
      }
      return true;
    }
    case 3: {
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      if (!email || !isValidEmail(email)) {
        shakeElement(document.getElementById('email'));
        return false;
      }
      if (!phone) {
        shakeElement(document.getElementById('phone'));
        return false;
      }
      return true;
    }
    default:
      return true;
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeElement(el) {
  el.style.borderColor = '#ef4444';
  el.style.animation = 'shakeInput 0.4s ease';
  setTimeout(() => {
    el.style.animation = '';
    el.style.borderColor = '';
  }, 600);
}

// Add shake keyframes dynamically
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shakeInput {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-4px); }
    75% { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);

// ===============================================
//  BUILD REVIEW
// ===============================================
function buildReview() {
  const card = document.getElementById('reviewCard');
  const dests = Array.from(document.querySelectorAll('input[name="destination"]:checked')).map(c => c.value);
  const budget = document.querySelector('input[name="budget"]:checked')?.value || '—';
  const style = document.querySelector('input[name="style"]:checked')?.value || '—';
  const accommodation = document.querySelector('input[name="accommodation"]:checked')?.value || '—';
  const people = document.getElementById('selectPeople');
  const days = document.getElementById('selectDays');
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const requests = document.getElementById('specialRequests').value.trim();

  card.innerHTML = `
    <div class="pt-review-section">
      <div class="pt-review-icon"><i class="fas fa-map-marker-alt"></i></div>
      <div class="pt-review-content">
        <strong>Destinations</strong>
        <span>${dests.join(', ') || '—'}</span>
      </div>
    </div>
    <div class="pt-review-section">
      <div class="pt-review-icon"><i class="fas fa-wallet"></i></div>
      <div class="pt-review-content">
        <strong>Budget</strong>
        <span>${budget}</span>
      </div>
    </div>
    <div class="pt-review-section">
      <div class="pt-review-icon"><i class="fas fa-compass"></i></div>
      <div class="pt-review-content">
        <strong>Travel Style</strong>
        <span>${style}</span>
      </div>
    </div>
    <div class="pt-review-section">
      <div class="pt-review-icon"><i class="fas fa-hotel"></i></div>
      <div class="pt-review-content">
        <strong>Accommodation</strong>
        <span>${accommodation}</span>
      </div>
    </div>
    <div class="pt-review-section">
      <div class="pt-review-icon"><i class="fas fa-users"></i></div>
      <div class="pt-review-content">
        <strong>Travelers</strong>
        <span>${people.options[people.selectedIndex].text}</span>
      </div>
    </div>
    <div class="pt-review-section">
      <div class="pt-review-icon"><i class="fas fa-calendar-alt"></i></div>
      <div class="pt-review-content">
        <strong>Duration</strong>
        <span>${days.options[days.selectedIndex].text}</span>
      </div>
    </div>
    <div class="pt-review-section">
      <div class="pt-review-icon"><i class="fas fa-user"></i></div>
      <div class="pt-review-content">
        <strong>Name</strong>
        <span>${firstName} ${lastName}</span>
      </div>
    </div>
    <div class="pt-review-section">
      <div class="pt-review-icon"><i class="fas fa-envelope"></i></div>
      <div class="pt-review-content">
        <strong>Email</strong>
        <span>${email}</span>
      </div>
    </div>
    <div class="pt-review-section">
      <div class="pt-review-icon"><i class="fas fa-phone"></i></div>
      <div class="pt-review-content">
        <strong>Phone / WhatsApp</strong>
        <span>${phone}</span>
      </div>
    </div>
    ${requests ? `
    <div class="pt-review-section">
      <div class="pt-review-icon"><i class="fas fa-comment-dots"></i></div>
      <div class="pt-review-content">
        <strong>Special Requests</strong>
        <span>${requests}</span>
      </div>
    </div>
    ` : ''}
  `;
}

async function submitForm() {
  const submitBtn = document.querySelector('.pt-btn-submit');
  if (!submitBtn) return;

  // Prevent double submissions
  if (submitBtn.disabled) return;

  // Extract all selections
  const dests = Array.from(document.querySelectorAll('input[name="destination"]:checked')).map(c => c.value);
  const budget = document.querySelector('input[name="budget"]:checked')?.value || '—';
  const style = document.querySelector('input[name="style"]:checked')?.value || '—';
  const accommodation = document.querySelector('input[name="accommodation"]:checked')?.value || '—';
  
  const peopleEl = document.getElementById('selectPeople');
  const peopleText = peopleEl ? peopleEl.options[peopleEl.selectedIndex].text : '2 People';
  const daysEl = document.getElementById('selectDays');
  const daysText = daysEl ? daysEl.options[daysEl.selectedIndex].text : '7 Days';
  
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const requests = document.getElementById('specialRequests').value.trim();
  const preferredContact = document.getElementById('preferredContact')?.value || 'WhatsApp';
  
  const fullName = `${firstName} ${lastName}`;

  // Formulate elegant, structured text block for WhatsApp / Email Fallback
  let messageText = `𓂀 *Horus Guide Travel — New Trip Plan Request* 𓂀\n\n`;
  messageText += `👤 *Name:* ${fullName}\n`;
  messageText += `✉️ *Email:* ${email}\n`;
  messageText += `📞 *Phone / WhatsApp:* ${phone}\n`;
  messageText += `💬 *Preferred Contact:* ${preferredContact}\n\n`;
  messageText += `🗺️ *Destinations:* ${dests.join(', ') || '—'}\n`;
  messageText += `💰 *Budget Range:* ${budget}\n`;
  messageText += `🧭 *Travel Style:* ${style}\n`;
  messageText += `🏨 *Accommodation:* ${accommodation}\n`;
  messageText += `👥 *Travelers:* ${peopleText}\n`;
  messageText += `📅 *Duration:* ${daysText}\n`;
  
  if (requests) {
    messageText += `\n✨ *Special Requests:*\n${requests}\n`;
  }

  const subjectText = `Horus Guide Travel - New Trip Plan Request (${fullName})`;

  // Construct links
  const waUrl = `https://wa.me/201070430634?text=${encodeURIComponent(messageText)}`;
  const mailtoUrl = `mailto:turkayduru7@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(messageText)}`;

  // Bind dynamic URLs to success screen action buttons
  const waBtn = document.getElementById('success-wa-btn');
  if (waBtn) waBtn.href = waUrl;
  
  const mailBtn = document.getElementById('success-mail-btn');
  if (mailBtn) mailBtn.href = mailtoUrl;

  // If the user hasn't changed the default placeholder key, fallback to local client immediately
  if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank');
    // Trigger default system Email client composer
    window.location.href = mailtoUrl;

    showSuccessState();
    return;
  }

  // Show Loading State on submit button
  const originalBtnHtml = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending Request...`;
  submitBtn.style.opacity = '0.7';
  submitBtn.style.cursor = 'not-allowed';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: subjectText,
        from_name: "Horus Guide Travel Website",
        name: fullName,
        email: email,
        phone: phone,
        preferred_contact: preferredContact,
        destinations: dests.join(', ') || 'None',
        budget: budget,
        travel_style: style,
        accommodation: accommodation,
        travelers: peopleText,
        duration: daysText,
        special_requests: requests || "None"
      })
    });

    const result = await response.json();

    if (response.ok) {
      showSuccessState();
    } else {
      console.warn("Web3Forms API error, falling back to mailto/whatsapp:", result);
      // Fallback
      window.open(waUrl, '_blank');
      window.location.href = mailtoUrl;
      showSuccessState();
    }
  } catch (error) {
    console.warn("Network error, falling back to mailto/whatsapp:", error);
    // Fallback
    window.open(waUrl, '_blank');
    window.location.href = mailtoUrl;
    showSuccessState();
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHtml;
    submitBtn.style.opacity = '';
    submitBtn.style.cursor = '';
  }
}

function showSuccessState() {
  // Hide all steps
  document.querySelectorAll('.pt-step').forEach(s => s.classList.remove('active'));

  // Show success
  const successEl = document.getElementById('successPanel');
  if (successEl) successEl.classList.add('active');

  // Hide progress
  const progressEl = document.getElementById('ptProgress');
  if (progressEl) {
    progressEl.style.opacity = '0.3';
    progressEl.style.pointerEvents = 'none';
  }

  // Scroll to top
  document.getElementById('ptFormArea').scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Fire confetti
  launchConfetti();
}

// ===============================================
//  CONFETTI
// ===============================================
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#c8a24e', '#dbb96a', '#a8832e', '#ffd700', '#fff5d4', '#ffffff'];
  const particles = [];
  const count = 100;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 4,
      h: Math.random() * 6 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 3 + 2,
      opacity: 1,
    });
  }

  let frame = 0;
  const max = 160;

  function animate() {
    if (frame > max) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.vy += 0.04;
      if (frame > max - 50) p.opacity = Math.max(0, p.opacity - 0.025);
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    requestAnimationFrame(animate);
  }
  animate();
}

// ---- Init ----
updateProgress();
updateOverview();
