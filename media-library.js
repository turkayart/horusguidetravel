(function () {
  const PHOTO_DIR = 'Photos and Videos/photos/';
  const VIDEO_DIR = 'Photos and Videos/videos/';

  const PHOTO_FILES = [
    'PHOTO-2025-11-14-00-12-40(1).jpg',
    'PHOTO-2025-11-14-00-12-40(2).jpg',
    'PHOTO-2025-11-14-00-12-40(3).jpg',
    'PHOTO-2025-11-14-00-12-40.jpg',
    'PHOTO-2025-11-14-00-28-40.jpg',
    'PHOTO-2025-11-26-17-53-53.jpg',
    'PHOTO-2025-12-05-14-30-03.jpg',
    'PHOTO-2025-12-05-14-30-06.jpg',
    'PHOTO-2025-12-05-14-30-07(1).jpg',
    'PHOTO-2025-12-05-14-30-07(2).jpg',
    'PHOTO-2025-12-05-14-30-07.jpg',
    'PHOTO-2025-12-05-14-30-08(1).jpg',
    'PHOTO-2025-12-05-14-30-08.jpg',
    'PHOTO-2025-12-05-19-29-49(1).jpg',
    'PHOTO-2025-12-05-19-29-49(2).jpg',
    'PHOTO-2025-12-05-19-29-49(3).jpg',
    'PHOTO-2025-12-05-19-29-49.jpg',
    'PHOTO-2025-12-05-19-29-50(1).jpg',
    'PHOTO-2025-12-05-19-29-50.jpg',
    'PHOTO-2025-12-09-12-36-35(1).jpg',
    'PHOTO-2025-12-09-12-36-35.jpg',
    'PHOTO-2025-12-10-14-17-50(1).jpg',
    'PHOTO-2025-12-10-14-17-50(2).jpg',
    'PHOTO-2025-12-10-14-17-50.jpg',
    'PHOTO-2025-12-12-11-33-35.jpg',
    'PHOTO-2025-12-12-11-33-36.jpg',
    'PHOTO-2025-12-12-11-33-37(1).jpg',
    'PHOTO-2025-12-12-11-33-37.jpg',
    'PHOTO-2025-12-12-18-29-35.jpg',
    'PHOTO-2025-12-22-18-09-50.jpg',
    'PHOTO-2025-12-28-01-29-03.jpg',
    'PHOTO-2025-12-28-18-10-52.jpg',
    'PHOTO-2025-12-28-18-10-59.jpg',
    'PHOTO-2025-12-28-18-11-13.jpg',
    'PHOTO-2025-12-28-19-04-53.jpg',
    'PHOTO-2025-12-30-17-22-43.jpg',
    'PHOTO-2026-01-14-15-02-17.jpg',
    'PHOTO-2026-01-19-20-26-08(1).jpg',
    'PHOTO-2026-01-19-20-26-08.jpg',
    'PHOTO-2026-01-19-20-26-19.jpg',
    'PHOTO-2026-01-19-20-26-21.jpg',
    'PHOTO-2026-01-19-20-26-22.jpg',
    'PHOTO-2026-01-19-20-26-23.jpg',
    'PHOTO-2026-01-19-20-26-24.jpg',
    'PHOTO-2026-01-19-20-26-25(1).jpg',
    'PHOTO-2026-01-19-20-26-25.jpg',
    'PHOTO-2026-01-19-20-26-33.jpg',
    'PHOTO-2026-01-19-20-26-34(1).jpg',
    'PHOTO-2026-01-19-20-26-34(2).jpg',
    'PHOTO-2026-01-19-20-26-34.jpg',
    'PHOTO-2026-01-19-20-26-35(1).jpg',
    'PHOTO-2026-01-19-20-26-35(2).jpg',
    'PHOTO-2026-01-19-20-26-35(3).jpg',
    'PHOTO-2026-01-19-20-26-35.jpg',
    'PHOTO-2026-01-19-20-26-36(1).jpg',
    'PHOTO-2026-01-19-20-26-36(2).jpg',
    'PHOTO-2026-01-19-20-26-36(3).jpg',
    'PHOTO-2026-01-19-20-26-36.jpg',
    'PHOTO-2026-01-19-20-26-37(1).jpg',
    'PHOTO-2026-01-19-20-26-37(2).jpg',
    'PHOTO-2026-01-19-20-26-37.jpg',
    'PHOTO-2026-02-16-20-13-47.jpg',
    'PHOTO-2026-03-22-19-04-35.jpg',
    'PHOTO-2026-04-18-03-14-58(1).jpg',
    'PHOTO-2026-04-18-03-14-58.jpg',
    'PHOTO-2026-04-28-01-42-26.jpg'
  ];

  const VIDEO_FILES = [
    'Journey in Egypt Mobile Video (1).mp4',
    'luxor-aswan Mobile Video.mp4',
    'VIDEO-2025-11-27-01-38-26.mp4',
    'VIDEO-2025-12-09-12-37-34(1).mp4',
    'VIDEO-2025-12-09-12-37-34.mp4',
    'VIDEO-2025-12-09-12-37-43(1).mp4',
    'VIDEO-2025-12-09-12-37-43.mp4',
    'VIDEO-2025-12-10-14-17-49.mp4',
    'VIDEO-2025-12-12-11-33-38.mp4',
    'VIDEO-2025-12-12-11-33-40.mp4',
    'VIDEO-2025-12-12-17-17-47.mp4',
    'VIDEO-2025-12-20-13-27-43.mp4',
    'VIDEO-2025-12-28-18-05-32.mp4',
    'VIDEO-2025-12-28-18-10-37.mp4',
    'VIDEO-2025-12-30-18-59-54.mp4',
    'VIDEO-2026-01-19-20-26-06(1).mp4',
    'VIDEO-2026-01-19-20-26-06.mp4',
    'VIDEO-2026-01-19-20-26-07(1).mp4',
    'VIDEO-2026-01-19-20-26-07.mp4',
    'VIDEO-2026-01-19-20-26-08.mp4',
    'VIDEO-2026-01-19-20-26-21(1).mp4',
    'VIDEO-2026-01-19-20-26-21.mp4',
    'VIDEO-2026-01-19-20-26-22.mp4',
    'VIDEO-2026-01-19-20-26-23(1).mp4',
    'VIDEO-2026-01-19-20-26-23(2).mp4',
    'VIDEO-2026-01-19-20-26-23.mp4',
    'VIDEO-2026-01-19-20-26-25.mp4',
    'VIDEO-2026-01-19-20-26-34.mp4',
    'VIDEO-2026-01-19-20-26-36.mp4',
    'VIDEO-2026-01-21-14-24-29(1).mp4',
    'VIDEO-2026-01-21-14-24-29(2).mp4',
    'VIDEO-2026-01-21-14-24-29(3).mp4',
    'VIDEO-2026-01-21-14-24-29.mp4',
    'VIDEO-2026-01-21-14-24-30(1).mp4',
    'VIDEO-2026-01-21-14-24-30(2).mp4',
    'VIDEO-2026-01-21-14-24-30(3).mp4',
    'VIDEO-2026-01-21-14-24-30(4).mp4',
    'VIDEO-2026-01-21-14-24-30(5).mp4',
    'VIDEO-2026-01-21-14-24-30.mp4',
    'VIDEO-2026-01-21-14-24-31(1).mp4',
    'VIDEO-2026-01-21-14-24-31(2).mp4',
    'VIDEO-2026-01-21-14-24-31(3).mp4',
    'VIDEO-2026-01-21-14-24-31(4).mp4',
    'VIDEO-2026-01-21-14-24-31(5).mp4',
    'VIDEO-2026-01-21-14-24-31.mp4',
    'VIDEO-2026-01-21-14-24-32(1).mp4',
    'VIDEO-2026-01-21-14-24-32(2).mp4',
    'VIDEO-2026-01-21-14-24-32(3).mp4',
    'VIDEO-2026-01-21-14-24-32.mp4',
    'VIDEO-2026-01-21-14-24-33(1).mp4',
    'VIDEO-2026-01-21-14-24-33(2).mp4',
    'VIDEO-2026-01-21-14-24-33(3).mp4',
    'VIDEO-2026-01-21-14-24-33.mp4',
    'VIDEO-2026-01-21-14-24-42(1).mp4',
    'VIDEO-2026-01-21-14-24-42.mp4',
    'VIDEO-2026-01-21-14-24-43.mp4',
    'VIDEO-2026-01-21-14-24-44(1).mp4',
    'VIDEO-2026-01-21-14-24-44.mp4',
    'VIDEO-2026-02-04-20-27-57.mp4',
    'VIDEO-2026-02-04-21-09-26.mp4',
    'VIDEO-2026-02-05-14-22-19.mp4',
    'WhatsApp Video 2026-01-19 at 20.26.06 (1).mp4',
    'WhatsApp Video 2026-01-19 at 20.26.06 (2).mp4',
    'WhatsApp Video 2026-01-19 at 20.26.06.mp4',
    'WhatsApp Video 2026-01-19 at 20.26.07.mp4',
    'WhatsApp Video 2026-01-19 at 20.26.20.mp4',
    'WhatsApp Video 2026-01-19 at 20.26.21 (1).mp4',
    'WhatsApp Video 2026-01-19 at 20.26.21.mp4',
    'WhatsApp Video 2026-01-19 at 20.26.25.mp4',
    'WhatsApp Video 2026-01-19 at 20.26.34.mp4',
    'WhatsApp Video 2026-01-21 at 14.24.30.mp4',
    'WhatsApp Video 2026-01-21 at 14.24.32.mp4'
  ];

  const HOME_CURATED_FILES = [
    'Journey in Egypt Mobile Video (1).mp4',
    'PHOTO-2025-11-14-00-12-40(1).jpg',
    'VIDEO-2026-01-21-14-24-29.mp4',
    'PHOTO-2025-12-05-14-30-07(1).jpg',
    'VIDEO-2026-01-19-20-26-22.mp4',
    'PHOTO-2025-12-28-18-10-59.jpg'
  ];

  const TITLE_OVERRIDES = {
    'PHOTO-2025-11-14-00-12-40(1).jpg': 'Giza Pyramids Legacy',
    'PHOTO-2025-11-14-00-12-40(2).jpg': 'Karnak Temple Explorers',
    'PHOTO-2025-11-14-00-12-40(3).jpg': 'Ancient Temple Columns',
    'PHOTO-2025-11-14-00-12-40.jpg': 'Horus Tour Guide Team',
    'PHOTO-2025-11-14-00-28-40.jpg': 'Saqqara Step Pyramid',
    'PHOTO-2025-12-05-14-30-07(1).jpg': 'Nile Cruise Sundeck',
    'PHOTO-2025-12-05-19-29-49.jpg': 'Nubian House Welcome',
    'PHOTO-2025-12-09-12-36-35.jpg': 'Abu Simbel Majesty',
    'PHOTO-2025-12-12-18-29-35.jpg': 'Afternoon Bedouin Tea',
    'PHOTO-2025-12-28-18-10-59.jpg': 'Cairo Bazaar Textures',
    'PHOTO-2025-12-28-19-04-53.jpg': 'Khan El-Khalili Magic',
    'PHOTO-2026-01-19-20-26-22.jpg': 'Nile Cruising Joy',
    'PHOTO-2026-01-19-20-26-34.jpg': 'Luxor West Bank Vistas',
    'PHOTO-2026-01-19-20-26-35(1).jpg': 'Colossi of Memnon Grandeur',
    'PHOTO-2026-01-19-20-26-36(3).jpg': 'Valley of the Kings Trails',
    'PHOTO-2026-02-16-20-13-47.jpg': 'Sinai Sand Adventures',
    'PHOTO-2026-04-18-03-14-58.jpg': 'Local Egyptian Smiles',
    'PHOTO-2026-04-28-01-42-26.jpg': 'Aswan Cataract Overlook',
    'Journey in Egypt Mobile Video (1).mp4': 'The Soul of Egypt',
    'luxor-aswan Mobile Video.mp4': 'Upper Egypt Expedition',
    'VIDEO-2025-12-09-12-37-43.mp4': 'Abu Simbel Dawn Tour',
    'VIDEO-2026-01-19-20-26-22.mp4': 'Nubian Rhythms & Dance',
    'VIDEO-2026-01-21-14-24-29.mp4': 'Balloons Over Luxor',
    'VIDEO-2026-01-21-14-24-32.mp4': 'Feluccas Sailing at Dusk',
    'VIDEO-2026-01-21-14-24-33.mp4': 'Luxor Temple Illuminated',
    'VIDEO-2026-02-05-14-22-19.mp4': 'Red Sea Marine Wonders',
    'VIDEO-2026-01-19-20-26-06.mp4': 'Exploring Karnak Temple',
    'VIDEO-2026-01-19-20-26-07.mp4': 'Sailing in Aswan',
    'VIDEO-2026-01-19-20-26-08.mp4': 'Luxor Temple Courtyard',
    'VIDEO-2026-01-19-20-26-21.mp4': 'Nubian Village Celebration',
    'VIDEO-2026-01-19-20-26-23.mp4': 'West Bank Tour Group',
    'VIDEO-2026-01-19-20-26-25.mp4': 'Abu Simbel Majestic Columns',
    'VIDEO-2026-01-19-20-26-34.mp4': 'Sunset Over the Nile',
    'VIDEO-2026-01-19-20-26-36.mp4': 'Entering the Royal Tombs'
  };

  const CAPTION_OVERRIDES = {
    'PHOTO-2025-11-14-00-12-40(1).jpg': 'Our guests sharing a group moment in front of the Pyramids of Giza.',
    'PHOTO-2025-12-05-14-30-07(1).jpg': 'Sunbathing and enjoying the tranquil views from our luxury cruise deck.',
    'PHOTO-2025-12-28-18-10-59.jpg': 'Capturing the sensory explosion of spices, lanterns, and colors in Cairo.',
    'Journey in Egypt Mobile Video (1).mp4': 'A cinematic highlight reel capturing the spirit of our tours.',
    'VIDEO-2026-01-19-20-26-22.mp4': 'Travelers joining Nubian musicians in a celebration of local rhythms.',
    'VIDEO-2026-01-21-14-24-29.mp4': 'An unforgettable sunrise soaring above the ancient monuments of Luxor.'
  };

  const DESTINATION_CONFIG = {
    cairo: {
      label: 'Cairo',
      filters: ['cairo', 'giza', 'bazaar', 'food', 'historical', 'team'],
      intro: 'Real traveler moments from Cairo, Giza, markets, guides, and ancient sites.'
    },
    giza: {
      label: 'Giza',
      filters: ['giza', 'cairo', 'pyramids', 'historical', 'team'],
      intro: 'Original Horus photos from the plateau, guide moments, and guests at Egypts icons.'
    },
    luxor: {
      label: 'Luxor',
      filters: ['luxor', 'west-bank', 'temple', 'balloon', 'historical', 'team'],
      intro: 'Authentic Luxor footage from temple visits, West Bank groups, balloons, and evening walks.'
    },
    aswan: {
      label: 'Aswan',
      filters: ['aswan', 'nile', 'cruise', 'nubian', 'abu-simbel', 'team'],
      intro: 'Our own Nile cruise decks, Nubian hospitality, Abu Simbel, and Aswan river views.'
    },
    alexandria: {
      label: 'Alexandria',
      filters: ['waterfront', 'culture', 'team', 'egypt'],
      intro: 'People-first Horus moments that show the warmth behind our coastal and city trips.'
    },
    hurghada: {
      label: 'Hurghada',
      filters: ['red-sea', 'waterfront', 'desert', 'water', 'team'],
      intro: 'Original water, desert, and traveler footage where it fits the Red Sea experience.'
    },
    'sharm-el-sheikh': {
      label: 'Sharm El Sheikh',
      filters: ['red-sea', 'waterfront', 'desert', 'water', 'team'],
      intro: 'Real Horus travel energy paired with the existing Red Sea destination visuals.'
    },
    dahab: {
      label: 'Dahab',
      filters: ['red-sea', 'waterfront', 'desert', 'water', 'team'],
      intro: 'Authentic traveler clips and desert/water moments to support the laid-back Sinai story.'
    },
    'marsa-alam': {
      label: 'Marsa Alam',
      filters: ['red-sea', 'waterfront', 'water', 'team'],
      intro: 'Original waterfront and traveler content used where it naturally supports the page.'
    },
    'el-gouna': {
      label: 'El Gouna',
      filters: ['red-sea', 'waterfront', 'water', 'team'],
      intro: 'Real Horus water and marina moments alongside the destination-specific visuals.'
    },
    siwa: {
      label: 'Siwa Oasis',
      filters: ['desert', 'culture', 'team', 'egypt'],
      intro: 'Original desert, local culture, and guest moments that echo the oasis experience.'
    }
  };

  function unique(values) {
    return Array.from(new Set(values.filter(Boolean)));
  }

  function inferMeta(file, type) {
    const destinations = ['egypt'];
    const activities = [];
    const tags = [type];
    let title = TITLE_OVERRIDES[file] || (type === 'video' ? 'Horus travel video' : 'Horus travel photo');
    let caption = CAPTION_OVERRIDES[file] || 'Original Horus Guide Travel media';

    function add(dest, activityTags, text) {
      destinations.push(...dest);
      activities.push(...activityTags);
      tags.push(...dest, ...activityTags);
      if (text && !TITLE_OVERRIDES[file]) title = text;
    }

    if (file.includes('2025-11-14')) {
      add(['cairo', 'giza'], ['pyramids', 'historical', 'team'], 'Pyramids and guide moments');
      caption = 'Our guests and guides around Cairo and Giza.';
    }
    if (file.includes('2025-11-26')) {
      add(['aswan'], ['nile', 'sunset'], 'Nile sunset');
    }
    if (file.includes('2025-12-05-14')) {
      add(['aswan', 'luxor'], ['nile', 'cruise', 'waterfront'], 'Nile cruise deck');
      caption = 'Life aboard the Nile with Horus travelers.';
    }
    if (file.includes('2025-12-05-19')) {
      add(['aswan'], ['nubian', 'culture', 'food'], 'Nubian culture moment');
      caption = 'Warm local hospitality from our Aswan experiences.';
    }
    if (file.includes('2025-12-09')) {
      add(['aswan'], ['abu-simbel', 'historical', 'temple'], 'Abu Simbel visit');
    }
    if (file.includes('2025-12-10')) {
      add(['aswan'], ['nature', 'culture'], 'Aswan garden walk');
    }
    if (file.includes('2025-12-12')) {
      add(['aswan', 'luxor'], ['abu-simbel', 'temple', 'historical', 'team'], 'Temple day with Horus');
    }
    if (file.includes('2025-12-20') || file.includes('2025-12-22')) {
      add(['aswan'], ['nile', 'waterfront'], 'Nile waterfront');
    }
    if (file.includes('2025-12-28')) {
      add(['cairo', 'aswan'], ['bazaar', 'culture', 'food'], 'Bazaar and local color');
    }
    if (file.includes('2025-12-30')) {
      add(['siwa', 'aswan'], ['desert', 'sunset', 'nature'], 'Desert and sunset mood');
    }
    if (file.includes('2026-01-14')) {
      add(['luxor', 'aswan'], ['temple', 'historical', 'team'], 'Large group temple visit');
    }
    if (file.includes('2026-01-19')) {
      add(['luxor', 'aswan'], ['west-bank', 'temple', 'historical', 'team', 'nubian', 'cruise'], 'Luxor and Aswan with guests');
    }
    if (file.includes('2026-01-21')) {
      add(['luxor', 'aswan'], ['balloon', 'temple', 'museum', 'night-tour', 'nubian', 'team'], 'Luxor and Aswan travel reel');
    }
    if (file.includes('2026-02-04') || file.includes('2026-02-05')) {
      add(['hurghada', 'sharm-el-sheikh', 'el-gouna', 'marsa-alam', 'dahab'], ['red-sea', 'waterfront', 'water'], 'Red Sea waterfront');
    }
    if (file.includes('2026-02-16')) {
      add(['siwa', 'hurghada'], ['desert', 'camel', 'quad'], 'Desert ride moment');
    }
    if (file.includes('2026-03-22')) {
      add(['luxor'], ['temple', 'night-tour'], 'Luxor Temple evening');
    }
    if (file.includes('2026-04-18')) {
      add(['aswan'], ['nubian', 'culture', 'team'], 'Friendly local connection');
    }
    if (file.includes('2026-04-28')) {
      add(['aswan'], ['nile', 'viewpoint', 'waterfront'], 'Aswan Nile viewpoint');
    }
    if (file.includes('Journey in Egypt')) {
      add(['cairo', 'giza', 'luxor', 'aswan'], ['historical', 'temple', 'hero'], 'Journey through Egypt');
      caption = 'A cinematic Horus highlight reel from Egypt.';
    }
    if (file.includes('luxor-aswan')) {
      add(['luxor', 'aswan'], ['nile', 'temple', 'historical', 'hero'], 'Luxor and Aswan mobile reel');
      caption = 'A vertical travel reel from Upper Egypt.';
    }

    if (HOME_CURATED_FILES.includes(file)) {
      tags.push('home');
    }

    return {
      title,
      caption,
      destinations: unique(destinations),
      activities: unique(activities),
      tags: unique(tags)
    };
  }

  const items = [
    ...PHOTO_FILES.map((file, index) => {
      const meta = inferMeta(file, 'photo');
      return {
        id: `photo-${index}`,
        type: 'photo',
        file,
        src: PHOTO_DIR + file,
        ...meta
      };
    }),
    ...VIDEO_FILES.map((file, index) => {
      const meta = inferMeta(file, 'video');
      return {
        id: `video-${index}`,
        type: 'video',
        file,
        src: VIDEO_DIR + file,
        ...meta
      };
    })
  ];

  items.forEach((item, index) => {
    item.index = index;
  });

  function getByFilters(filters, limit) {
    const wanted = Array.isArray(filters) ? filters : [filters];
    const scored = items.map((item) => {
      const score = wanted.reduce((total, filter) => total + (item.tags.includes(filter) || item.destinations.includes(filter) || item.activities.includes(filter) ? 1 : 0), 0);
      return { item, score };
    }).filter((entry) => entry.score > 0);

    scored.sort((a, b) => b.score - a.score || (a.item.type === 'video' ? -1 : 1));
    return scored.slice(0, limit || scored.length).map((entry) => entry.item);
  }

  function createMediaCard(item, options = {}) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `horus-media-card ${options.large ? 'is-large' : ''}`;
    card.dataset.horusIndex = String(item.index);
    card.dataset.horusLightbox = 'true';
    card.dataset.type = item.type;

    const frame = document.createElement('span');
    frame.className = 'horus-media-frame';

    if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      video.muted = true;
      video.playsInline = true;
      video.preload = options.videoPreload || 'metadata';
      video.setAttribute('aria-label', item.title);
      frame.appendChild(video);

      const play = document.createElement('span');
      play.className = 'horus-media-play';
      play.innerHTML = '<i class="fas fa-play"></i>';
      frame.appendChild(play);
    } else {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title;
      img.loading = options.eager ? 'eager' : 'lazy';
      frame.appendChild(img);
    }

    const label = document.createElement('span');
    label.className = 'horus-media-label';
    label.innerHTML = `<span>${item.type}</span><strong>${item.title}</strong>`;
    frame.appendChild(label);
    card.appendChild(frame);

    return card;
  }

  function ensureLightbox() {
    let modal = document.getElementById('horusMediaLightbox');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.className = 'horus-lightbox';
    modal.id = 'horusMediaLightbox';
    modal.innerHTML = `
      <button class="horus-lightbox-close" type="button" aria-label="Close media"><i class="fas fa-times"></i></button>
      <button class="horus-lightbox-nav horus-lightbox-prev" type="button" aria-label="Previous media"><i class="fas fa-chevron-left"></i></button>
      <div class="horus-lightbox-stage"></div>
      <button class="horus-lightbox-nav horus-lightbox-next" type="button" aria-label="Next media"><i class="fas fa-chevron-right"></i></button>
      <div class="horus-lightbox-caption"></div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  let activeIndex = 0;
  let activeSet = items;

  function renderLightboxItem() {
    const modal = ensureLightbox();
    const stage = modal.querySelector('.horus-lightbox-stage');
    const caption = modal.querySelector('.horus-lightbox-caption');
    const item = activeSet[activeIndex];
    if (!item) return;

    stage.innerHTML = '';
    if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = 'metadata';
      stage.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title;
      stage.appendChild(img);
    }
    caption.innerHTML = `<strong>${item.title}</strong><span>${item.caption}</span>`;
  }

  function openLightbox(index, set) {
    activeSet = set || items;
    activeIndex = Math.max(0, activeSet.findIndex((item) => item.index === index));
    if (activeIndex < 0) activeIndex = 0;
    const modal = ensureLightbox();
    renderLightboxItem();
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const modal = ensureLightbox();
    modal.classList.remove('is-open');
    modal.querySelector('.horus-lightbox-stage').innerHTML = '';
    document.body.style.overflow = '';
  }

  function moveLightbox(step) {
    activeIndex = (activeIndex + step + activeSet.length) % activeSet.length;
    renderLightboxItem();
  }

  function bindLightbox() {
    const modal = ensureLightbox();

    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-horus-lightbox]');
      if (trigger) {
        const index = Number(trigger.dataset.horusIndex);
        const scope = trigger.closest('[data-horus-media-scope]');
        const scopedItems = scope
          ? Array.from(scope.querySelectorAll('[data-horus-lightbox]'))
              .map((el) => items[Number(el.dataset.horusIndex)])
              .filter(Boolean)
          : items;
        openLightbox(index, scopedItems);
      }

      if (event.target.closest('.horus-lightbox-close')) closeLightbox();
      if (event.target.closest('.horus-lightbox-prev')) moveLightbox(-1);
      if (event.target.closest('.horus-lightbox-next')) moveLightbox(1);
      if (event.target === modal) closeLightbox();
    });

    document.addEventListener('keydown', (event) => {
      if (!modal.classList.contains('is-open')) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') moveLightbox(-1);
      if (event.key === 'ArrowRight') moveLightbox(1);
    });
  }

  function initHeroVideos() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 760px)').matches;
    if (prefersReducedMotion || isSmallScreen) return;

    document.querySelectorAll('video[data-horus-video-src]').forEach((video) => {
      if (video.dataset.loaded === 'true') return;
      const source = document.createElement('source');
      source.src = video.dataset.horusVideoSrc;
      source.type = 'video/mp4';
      video.appendChild(source);
      video.dataset.loaded = 'true';
      video.load();
      const playPromise = video.play();
      if (playPromise) playPromise.catch(() => {});
    });
  }

  function renderDestinationMedia() {
    const slug = (window.location.pathname.split('/').pop() || '').replace('.html', '');
    const config = DESTINATION_CONFIG[slug];
    if (!config || document.querySelector('[data-destination-real-media]')) return;

    const gallerySection = document.getElementById('gallery');
    if (!gallerySection) return;

    const selected = getByFilters(config.filters, 7);
    if (!selected.length) return;

    const section = document.createElement('section');
    section.className = 'dest-section horus-destination-media';
    section.id = 'real-media';
    section.dataset.destinationRealMedia = 'true';
    section.innerHTML = `
      <div class="container">
        <div class="section-header fade-up">
          <span class="section-tag">Original Horus Media</span>
          <h2 class="section-title">Real <em>${config.label}</em> Moments</h2>
          <p class="section-subtitle">${config.intro}</p>
        </div>
        <div class="horus-destination-grid fade-up" data-horus-media-scope></div>
      </div>
    `;

    const grid = section.querySelector('.horus-destination-grid');
    selected.forEach((item, index) => grid.appendChild(createMediaCard(item, { large: index === 0, videoPreload: 'metadata' })));

    gallerySection.insertAdjacentElement('afterend', section);

    const quickNav = document.querySelector('.quick-nav .container');
    if (quickNav && !quickNav.querySelector('a[href="#real-media"]')) {
      const link = document.createElement('a');
      link.href = '#real-media';
      link.className = 'quick-nav-pill';
      link.innerHTML = '<i class="fas fa-photo-film"></i> Real Media';
      quickNav.insertBefore(link, quickNav.querySelector('a[href="#tips"]') || null);
    }
  }

  function fillMediaGrid(selector, filters, limit) {
    const grid = document.querySelector(selector);
    if (!grid) return;
    const selected = getByFilters(filters, limit);
    grid.innerHTML = '';
    grid.dataset.horusMediaScope = 'true';
    selected.forEach((item, index) => grid.appendChild(createMediaCard(item, { large: index === 0 })));
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindLightbox();
    initHeroVideos();
    renderDestinationMedia();
    fillMediaGrid('[data-horus-home-grid]', ['home'], 3);
    fillMediaGrid('[data-horus-activity-grid]', ['cruise', 'historical', 'nubian', 'balloon', 'desert', 'bazaar', 'red-sea'], 8);
  });

  window.HORUS_MEDIA = {
    items,
    destinations: DESTINATION_CONFIG,
    getByFilters,
    createMediaCard,
    openLightbox,
    closeLightbox,
    fillMediaGrid
  };
})();

