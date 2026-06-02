import os
import json

cities = {
    "cairo": {
        "title": "Cairo",
        "tagline": "The Heart of Ancient Egypt",
        "description": "Where the ancient world's greatest wonders stand alongside a vibrant, bustling metropolis. From the Great Pyramids to the winding alleys of Khan El Khalili, Cairo is a city that never stops surprising you.",
        "stats": [
            {"icon": "sun", "label": "Best Season", "value": "Oct–Apr"},
            {"icon": "users", "label": "Population", "value": "25M+"},
            {"icon": "clock", "label": "Timezone", "value": "UTC+2"}
        ],
        "video": {"id": "yJ4LzXO8Un4", "title": "Experience the Magic of Cairo", "highlights": ["Ancient wonders meet modern city", "World-class museums", "Legendary street food", "Magical Nile sunset cruises"]},
        "hero_img": "images/hero-cairo.png",
        "attractions": [
            {"name": "Great Pyramids of Giza", "img": "cairo/spencer-davis-ONVA6s03hg8-unsplash.jpg", "tag": "Must See", "rating": "4.9", "time": "3-4 hours", "price": "$25"},
            {"name": "Grand Egyptian Museum", "img": "cairo/grand egyptian museum.webp", "tag": "Cultural", "rating": "4.8", "time": "2-3 hours", "price": "$15"},
            {"name": "Khan El Khalili Bazaar", "img": "images/gallery-cairo-khan.png", "tag": "Experience", "rating": "4.6", "time": "2-3 hours", "price": "Free"},
            {"name": "Islamic Cairo & Al-Azhar", "img": "cairo/dario-morandotti-rxv2qwYPe6s-unsplash.jpg", "tag": "Historic", "rating": "4.5", "time": "Half Day", "price": "$10"},
            {"name": "Cairo Citadel & Muhammad Ali", "img": "images/gallery-cairo-mosque.png", "tag": "Landmark", "rating": "4.8", "time": "2-3 hours", "price": "$10"},
            {"name": "Nile Dinner Cruise", "img": "cairo/Cairo-Dinner-Cruise-Egypt-Tours-Portal.jpg", "tag": "Dining", "rating": "4.4", "time": "2-3 hours", "price": "$40"}
        ],
        "gallery": [
            {"src": "cairo/grand egyptian museum.webp", "caption": "Grand Egyptian Museum"},
            {"src": "cairo/gem-birdseye-view-copyright-grand-egyptian-museum.jpg", "caption": "GEM Birdseye View"},
            {"src": "cairo/Giza-Egypt-April-13-2024-The-Grand-Egyptian-Museum-Giza-Museum-Egypts-gift-to-the-world-the-largest-archaeological-museum-in-the-world-about-2-kilometers-from-Giza-pyramid-complex-1.webp", "caption": "Grand Egyptian Museum Facade"},
            {"src": "cairo/Cairo-Dinner-Cruise-Egypt-Tours-Portal.jpg", "caption": "Nile Dinner Cruise"},
            {"src": "cairo/spencer-davis-TBNbpd6Xs_4-unsplash.jpg", "caption": "Pyramids of Giza"}
        ],
        "tips": [
            {"icon": "🕐", "title": "Best Time", "desc": "Oct-Apr for comfortable weather."},
            {"icon": "💰", "title": "Budget", "desc": "Use student IDs for half-price tickets."},
            {"icon": "🚕", "title": "Getting Around", "desc": "Uber and Metro are best."},
            {"icon": "👗", "title": "Dress Code", "desc": "Modest clothing required for mosques."},
            {"icon": "🍽️", "title": "Must-Try Food", "desc": "Koshari and Ful are local favorites."},
            {"icon": "📸", "title": "Photo Tip", "desc": "Visit the Pyramids at 8AM for best light."}
        ]
    },
    "giza": {
        "title": "Giza",
        "tagline": "Land of the Pyramids",
        "description": "Home to the last surviving Wonder of the Ancient World. The Great Pyramids and the Sphinx have stood watch over the desert for over 4,500 years, a testament to human ambition and ingenuity.",
        "stats": [
            {"icon": "hourglass-half", "label": "Built", "value": "2560 BC"},
            {"icon": "landmark", "label": "Heritage", "value": "UNESCO"},
            {"icon": "history", "label": "Age", "value": "4,500+ Yrs"}
        ],
        "video": {"id": "yJ4LzXO8Un4", "title": "The Pyramids of Giza", "highlights": ["Last surviving Ancient Wonder", "4,500 years of history", "Spectacular sunset views", "Unforgettable camel rides"]},
        "hero_img": "images/hero-giza.png",
        "attractions": [
            {"name": "Great Pyramid of Khufu", "img": "cairo/spencer-davis-ONVA6s03hg8-unsplash.jpg", "tag": "Wonder", "rating": "5.0", "time": "2-3 hours", "price": "$20"},
            {"name": "The Great Sphinx", "img": "cairo/spencer-davis-TBNbpd6Xs_4-unsplash.jpg", "tag": "Iconic", "rating": "4.9", "time": "1 hour", "price": "Included"},
            {"name": "Solar Boat Museum", "img": "cairo/spencer-davis-MVW_MUwusDs-unsplash.jpg", "tag": "Museum", "rating": "4.6", "time": "1 hour", "price": "$10"},
            {"name": "Sound & Light Show", "img": "images/hero-pyramids.png", "tag": "Experience", "rating": "4.7", "time": "1.5 hours", "price": "$20"},
            {"name": "Pyramid of Khafre", "img": "cairo/alex-azabache-hz4tKDvQHoo-unsplash.jpg", "tag": "Historic", "rating": "4.8", "time": "1-2 hours", "price": "$10"},
            {"name": "Camel Ride at Sunset", "img": "cairo/andres-dallimonti-00Xo8z-bimM-unsplash.jpg", "tag": "Adventure", "rating": "4.5", "time": "1 hour", "price": "$15"}
        ],
        "gallery": [
            {"src": "images/hero-giza.png", "caption": "Giza"},
            {"src": "cairo/spencer-davis-ONVA6s03hg8-unsplash.jpg", "caption": "Pyramid"},
            {"src": "cairo/spencer-davis-TBNbpd6Xs_4-unsplash.jpg", "caption": "Sphinx"},
            {"src": "images/hero-pyramids.png", "caption": "Light Show"},
            {"src": "cairo/andres-dallimonti-00Xo8z-bimM-unsplash.jpg", "caption": "Camel Ride"}
        ],
        "tips": [
            {"icon": "🌅", "title": "Best Time", "desc": "Sunrise or sunset for magical light."},
            {"icon": "👥", "title": "Skip Crowds", "desc": "Arrive right at 7AM opening."},
            {"icon": "🐪", "title": "Camel Rides", "desc": "Always negotiate price beforehand."},
            {"icon": "👟", "title": "What to Wear", "desc": "Comfortable shoes and sunscreen."},
            {"icon": "🌙", "title": "Night Show", "desc": "Book Sound & Light in advance."},
            {"icon": "🏨", "title": "Stay Nearby", "desc": "Book a hotel with a pyramid view."}
        ]
    },
    "alexandria": {
        "title": "Alexandria",
        "tagline": "The Pearl of the Mediterranean",
        "description": "Founded by Alexander the Great, this coastal gem blends Greco-Roman heritage with Mediterranean charm. Stroll the Corniche, explore ancient catacombs, and taste the freshest seafood in Egypt.",
        "stats": [
            {"icon": "water", "label": "Coast", "value": "Mediterranean"},
            {"icon": "book", "label": "Known For", "value": "Knowledge"},
            {"icon": "history", "label": "History", "value": "2,300+ Yrs"}
        ],
        "video": {"id": "0vo0dJ3wJVs", "title": "Discover Alexandria", "highlights": ["Greco-Roman heritage", "Stunning coastline", "World-class seafood", "Ancient Library reborn"]},
        "hero_img": "images/city-alexandria.png",
        "attractions": [
            {"name": "Bibliotheca Alexandrina", "img": "cairo/thales-botelho-de-sousa-MB2eoqiNKiw-unsplash.jpg", "tag": "Cultural", "rating": "4.8", "time": "2-3 hours", "price": "$5"},
            {"name": "Qaitbay Citadel", "img": "images/gallery-alex-citadel.png", "tag": "Historic", "rating": "4.7", "time": "1-2 hours", "price": "$5"},
            {"name": "Catacombs of Kom El Shoqafa", "img": "cairo/ahmed-samy-IDsBb0AGJFY-unsplash.jpg", "tag": "Must See", "rating": "4.6", "time": "1-2 hours", "price": "$5"},
            {"name": "Stanley Bridge & Corniche", "img": "cairo/rosario-janza-69qT-N3L5sc-unsplash.jpg", "tag": "Experience", "rating": "4.5", "time": "2-3 hours", "price": "Free"},
            {"name": "Montazah Palace Gardens", "img": "cairo/mounir-abdi-VrrT5ma6mmY-unsplash.jpg", "tag": "Nature", "rating": "4.6", "time": "2-3 hours", "price": "$3"},
            {"name": "Seafood Experience", "img": "cairo/omar-adel-fJKMxGgJuHk-unsplash.jpg", "tag": "Dining", "rating": "4.7", "time": "1-2 hours", "price": "$15"}
        ],
        "gallery": [
            {"src": "images/hero-alexandria.png", "caption": "Alexandria"},
            {"src": "images/gallery-alex-citadel.png", "caption": "Citadel"},
            {"src": "cairo/thales-botelho-de-sousa-MB2eoqiNKiw-unsplash.jpg", "caption": "Library"},
            {"src": "cairo/rosario-janza-69qT-N3L5sc-unsplash.jpg", "caption": "Corniche"},
            {"src": "cairo/ahmed-samy-IDsBb0AGJFY-unsplash.jpg", "caption": "Catacombs"}
        ],
        "tips": [
            {"icon": "🌊", "title": "Best Season", "desc": "May-Sep for beach, Nov-Mar for sightseeing."},
            {"icon": "🐟", "title": "Seafood", "desc": "Visit Abu Qir for the best fish."},
            {"icon": "🚂", "title": "Getting There", "desc": "Talgo train is 2.5hrs from Cairo."},
            {"icon": "📸", "title": "Photo Spots", "desc": "Stanley Bridge at sunset is perfect."},
            {"icon": "☂️", "title": "Weather", "desc": "Pack a light jacket in winter."},
            {"icon": "🏊", "title": "Beaches", "desc": "Check out El-Maamoura & Montazah."}
        ]
    },
    "luxor": {
        "title": "Luxor",
        "tagline": "The World's Greatest Open Air Museum",
        "description": "Once the ancient city of Thebes, Luxor holds one-third of the world's antiquities. Walk through temples built by pharaohs and discover tombs hidden beneath desert mountains.",
        "stats": [
            {"icon": "landmark", "label": "Heritage", "value": "UNESCO"},
            {"icon": "monument", "label": "Antiquities", "value": "1/3 of World's"},
            {"icon": "sun", "label": "Best Season", "value": "Oct–Mar"}
        ],
        "video": {"id": "SvxWvnhHYV8", "title": "Journey Through Ancient Luxor", "highlights": ["3,000+ years of history", "Spectacular balloon rides", "Stunning illuminated temples", "Timeless Nile sailing"]},
        "hero_img": "images/hero-luxor.png",
        "attractions": [
            {"name": "Valley of the Kings", "img": "aswan-luxor/dmitrii-zhodzishskii-cOihXsrJFRc-unsplash.jpg", "tag": "Must See", "rating": "4.9", "time": "3-4 hours", "price": "$20"},
            {"name": "Karnak Temple Complex", "img": "images/gallery-luxor-temple.png", "tag": "Ancient", "rating": "4.9", "time": "2-3 hours", "price": "$15"},
            {"name": "Hot Air Balloon Ride", "img": "images/gallery-luxor-balloons.png", "tag": "Adventure", "rating": "4.8", "time": "1-2 hours", "price": "$80"},
            {"name": "Luxor Temple", "img": "aswan-luxor/dmitrii-zhodzishskii-5aEHOQrb2Qk-unsplash.jpg", "tag": "Historic", "rating": "4.7", "time": "1-2 hours", "price": "$10"},
            {"name": "Hatshepsut Temple", "img": "aswan-luxor/dmitrii-zhodzishskii-4rXHE9XeW_A-unsplash.jpg", "tag": "Landmark", "rating": "4.7", "time": "1-2 hours", "price": "$10"},
            {"name": "Felucca Nile Sail", "img": "aswan-luxor/kevin-et-laurianne-langlais-pvFtrzwuc6g-unsplash.jpg", "tag": "Experience", "rating": "4.5", "time": "1-2 hours", "price": "$15"}
        ],
        "gallery": [
            {"src": "images/hero-luxor.png", "caption": "Luxor"},
            {"src": "images/gallery-luxor-temple.png", "caption": "Karnak"},
            {"src": "images/gallery-luxor-balloons.png", "caption": "Balloons"},
            {"src": "aswan-luxor/dmitrii-zhodzishskii-2K5kuh3NRvk-unsplash.jpg", "caption": "Valley of Kings"},
            {"src": "aswan-luxor/kevin-et-laurianne-langlais-QveJH1hA2sI-unsplash.jpg", "caption": "Felucca"}
        ],
        "tips": [
            {"icon": "🌅", "title": "Best Time", "desc": "Oct-Mar for comfortable exploring."},
            {"icon": "🎈", "title": "Balloon Tip", "desc": "Book your ride well in advance."},
            {"icon": "🏛️", "title": "Temple Strategy", "desc": "Karnak AM, Luxor Temple PM."},
            {"icon": "💧", "title": "Stay Hydrated", "desc": "Always carry plenty of water."},
            {"icon": "🎫", "title": "Luxor Pass", "desc": "Consider pass for unlimited access."},
            {"icon": "📷", "title": "Photography", "desc": "Tomb photography requires extra tickets."}
        ]
    },
    "aswan": {
        "title": "Aswan",
        "tagline": "The Jewel of the Nile",
        "description": "Egypt's most serene destination, where golden sand dunes meet the deep blue Nile. Discover ancient temples, colorful Nubian villages, and the warmth of southern Egyptian hospitality.",
        "stats": [
            {"icon": "sun", "label": "Sunshine", "value": "Year-round"},
            {"icon": "globe-africa", "label": "Heritage", "value": "Nubian"},
            {"icon": "landmark", "label": "Gateway", "value": "Abu Simbel"}
        ],
        "video": {"id": "z2YPnEPuqSk", "title": "Serenity of Aswan", "highlights": ["Magnificent Abu Simbel", "Vibrant Nubian villages", "Egypt's most beautiful sunsets", "Serene Nile sailing"]},
        "hero_img": "images/hero-aswan.png",
        "attractions": [
            {"name": "Abu Simbel Temples", "img": "aswan-luxor/david-gavi-AdIJ9S-kbrc-unsplash.jpg", "tag": "Must See", "rating": "4.9", "time": "Full Day", "price": "$60"},
            {"name": "Philae Temple", "img": "images/gallery-aswan-philae.png", "tag": "Ancient", "rating": "4.8", "time": "2-3 hours", "price": "$15"},
            {"name": "Nubian Villages", "img": "images/gallery-aswan-nubian.png", "tag": "Cultural", "rating": "4.7", "time": "Half Day", "price": "$25"},
            {"name": "Felucca Sailing", "img": "aswan-luxor/kevin-et-laurianne-langlais-Rk8yY0UfPx0-unsplash.jpg", "tag": "Experience", "rating": "4.8", "time": "1-3 hours", "price": "$15"},
            {"name": "Aswan High Dam", "img": "aswan-luxor/hassan-ouajbir-251hbdY3M4E-unsplash.jpg", "tag": "Landmark", "rating": "4.3", "time": "1 hour", "price": "$5"},
            {"name": "Unfinished Obelisk", "img": "aswan-luxor/calin-stan-a8ZSKCBE1xk-unsplash.jpg", "tag": "Historic", "rating": "4.4", "time": "1 hour", "price": "$5"}
        ],
        "gallery": [
            {"src": "images/hero-aswan.png", "caption": "Aswan"},
            {"src": "images/gallery-aswan-philae.png", "caption": "Philae"},
            {"src": "images/gallery-aswan-nubian.png", "caption": "Nubian Village"},
            {"src": "aswan-luxor/kevin-et-laurianne-langlais-Rk8yY0UfPx0-unsplash.jpg", "caption": "Felucca"},
            {"src": "aswan-luxor/hassan-ouajbir-251hbdY3M4E-unsplash.jpg", "caption": "High Dam"}
        ],
        "tips": [
            {"icon": "☀️", "title": "Best Time", "desc": "Nov-Feb for ideal weather."},
            {"icon": "🚌", "title": "Abu Simbel", "desc": "Join the 3:30AM convoy."},
            {"icon": "🎨", "title": "Nubian Experience", "desc": "Take a motorboat & try henna."},
            {"icon": "⛵", "title": "Felucca Tip", "desc": "Always negotiate prices first."},
            {"icon": "🌅", "title": "Best Sunset", "desc": "Watch from a Nubian Restaurant."},
            {"icon": "🛳️", "title": "Nile Cruise", "desc": "Take a multi-day cruise to Luxor."}
        ]
    },
    "hurghada": {
        "title": "Hurghada",
        "tagline": "Red Sea Paradise",
        "description": "Egypt's premier beach destination on the Red Sea coast. Crystal-clear waters, vibrant coral reefs, and year-round sunshine make Hurghada the ultimate escape for beach lovers and water sports enthusiasts.",
        "stats": [
            {"icon": "water", "label": "Coast", "value": "Red Sea"},
            {"icon": "sun", "label": "Sunshine", "value": "365 Days"},
            {"icon": "water", "label": "Diving", "value": "World-class"}
        ],
        "video": {"id": "L4FhWLBbiw8", "title": "Hurghada's Crystal Waters", "highlights": ["World-class coral reef diving", "Pristine island beaches", "Thrilling desert safari", "Year-round perfect weather"]},
        "hero_img": "images/hero-hurghada.png",
        "attractions": [
            {"name": "Giftun Island", "img": "hurgada/raimond-klavins-zfeY8HkSAOE-unsplash.jpg", "tag": "Must See", "rating": "4.8", "time": "Full Day", "price": "$35"},
            {"name": "Coral Reef Diving", "img": "images/gallery-hurghada-reef.png", "tag": "Adventure", "rating": "4.9", "time": "Half Day", "price": "$45"},
            {"name": "Desert Safari", "img": "hurgada/pexels-vika-glitter-392079-31166931.jpg", "tag": "Experience", "rating": "4.6", "time": "Half Day", "price": "$30"},
            {"name": "Glass Bottom Boat", "img": "hurgada/youhana-nassif-9BZVf-jEDwU-unsplash.jpg", "tag": "Family", "rating": "4.5", "time": "2-3 hours", "price": "$20"},
            {"name": "El Gouna Day Trip", "img": "hurgada/omar-elsharawy-Figb0H3ExRw-unsplash.jpg", "tag": "Luxury", "rating": "4.7", "time": "Full Day", "price": "Free"},
            {"name": "Submarine Tour", "img": "images/gallery-hurghada-reef.png", "tag": "Unique", "rating": "4.4", "time": "2 hours", "price": "$50"}
        ],
        "gallery": [
            {"src": "images/hero-hurghada.png", "caption": "Hurghada"},
            {"src": "images/gallery-hurghada-reef.png", "caption": "Reef"},
            {"src": "hurgada/omar-elsharawy-Figb0H3ExRw-unsplash.jpg", "caption": "Marina"},
            {"src": "hurgada/youhana-nassif-9BZVf-jEDwU-unsplash.jpg", "caption": "Boat"},
            {"src": "hurgada/pexels-vika-glitter-392079-31166931.jpg", "caption": "Desert"}
        ],
        "tips": [
            {"icon": "🤿", "title": "Diving Season", "desc": "Sep-Nov for best visibility."},
            {"icon": "☀️", "title": "Sun Safety", "desc": "Use SPF 50+ sunscreen."},
            {"icon": "🏨", "title": "Stay Smart", "desc": "El Mamsha promenade is great."},
            {"icon": "🐠", "title": "Reef Etiquette", "desc": "Never touch the coral."},
            {"icon": "💰", "title": "Budget", "desc": "Book tours through locals."},
            {"icon": "🌙", "title": "Nightlife", "desc": "Check out the Marina area."}
        ]
    },
    "sharm-el-sheikh": {
        "title": "Sharm El Sheikh",
        "tagline": "Where Desert Meets the Sea",
        "description": "Where dramatic desert mountains cascade into the crystal-clear Red Sea. World-renowned diving spots, luxury resorts, and the gateway to the Sinai's ancient wonders await.",
        "stats": [
            {"icon": "mountain", "label": "Location", "value": "Sinai"},
            {"icon": "water", "label": "Diving", "value": "Capital"},
            {"icon": "star", "label": "Resorts", "value": "Luxury"}
        ],
        "video": {"id": "q4iE63kHJhk", "title": "Sharm's Hidden Wonders", "highlights": ["World-famous diving", "Sacred Mount Sinai sunrise", "Luxury resort experiences", "Desert adventure safaris"]},
        "hero_img": "images/hero-sharm.png",
        "attractions": [
            {"name": "Ras Mohammed", "img": "sharm/oleksandr-podoima-xzTR5ZLvAx0-unsplash.jpg", "tag": "Must See", "rating": "4.9", "time": "Full Day", "price": "$25"},
            {"name": "Blue Hole (Dahab)", "img": "images/gallery-sharm-diving.png", "tag": "Adventure", "rating": "4.8", "time": "Full Day", "price": "$40"},
            {"name": "Mount Sinai Sunrise", "img": "images/hero-dahab.png", "tag": "Spiritual", "rating": "4.7", "time": "Overnight", "price": "$35"},
            {"name": "Naama Bay", "img": "images/hero-sharm.png", "tag": "Entertainment", "rating": "4.6", "time": "Evening", "price": "Free"},
            {"name": "Tiran Island", "img": "images/gallery-hurghada-reef.png", "tag": "Nature", "rating": "4.7", "time": "Full Day", "price": "$30"},
            {"name": "Quad Biking", "img": "hurgada/pexels-vika-glitter-392079-31166931.jpg", "tag": "Experience", "rating": "4.5", "time": "Half Day", "price": "$25"}
        ],
        "gallery": [
            {"src": "images/hero-sharm.png", "caption": "Sharm"},
            {"src": "images/gallery-sharm-diving.png", "caption": "Diving"},
            {"src": "sharm/oleksandr-podoima-xzTR5ZLvAx0-unsplash.jpg", "caption": "Ras Mohammed"},
            {"src": "hurgada/pexels-vika-glitter-392079-31166931.jpg", "caption": "Desert Safari"},
            {"src": "images/gallery-hurghada-reef.png", "caption": "Tiran Island"}
        ],
        "tips": [
            {"icon": "🤿", "title": "Dive Centers", "desc": "Use PADI-certified shops."},
            {"icon": "⛰️", "title": "Mount Sinai", "desc": "Warm layers for 2AM start."},
            {"icon": "🏖️", "title": "Best Beaches", "desc": "Sharks Bay & Ras Um Sid."},
            {"icon": "🌙", "title": "Old Market", "desc": "Great for authentic souvenirs."},
            {"icon": "💳", "title": "Cash Tip", "desc": "ATMs available at malls."},
            {"icon": "🚐", "title": "Day Trips", "desc": "Dahab is only 1 hour away."}
        ]
    },
    "siwa": {
        "title": "Siwa Oasis",
        "tagline": "Egypt's Hidden Paradise",
        "description": "A mystical desert oasis nestled in the Western Sahara, where ancient Berber culture thrives among palm groves, salt lakes, and sand seas. Siwa is Egypt's best-kept secret.",
        "stats": [
            {"icon": "mountain", "label": "Region", "value": "Western Desert"},
            {"icon": "users", "label": "Culture", "value": "Berber"},
            {"icon": "tint", "label": "Springs", "value": "300+"}
        ],
        "video": {"id": "WPrDnl5iQiQ", "title": "Magic of Siwa Oasis", "highlights": ["Ancient Oracle Temple", "Great Sand Sea adventures", "Crystal-clear salt lakes", "Authentic Berber culture"]},
        "hero_img": "images/hero-siwa.png",
        "attractions": [
            {"name": "Shali Fortress", "img": "images/hero-siwa.png", "tag": "Historic", "rating": "4.7", "time": "1-2 hours", "price": "$5"},
            {"name": "Oracle Temple of Amun", "img": "aswan-luxor/calin-stan-Mv15X2n8JVE-unsplash.jpg", "tag": "Ancient", "rating": "4.8", "time": "1 hour", "price": "$5"},
            {"name": "Cleopatra's Spring", "img": "aswan-luxor/flying-carpet-Si1MFhSLNWY-unsplash.jpg", "tag": "Nature", "rating": "4.6", "time": "1-2 hours", "price": "Free"},
            {"name": "Great Sand Sea Safari", "img": "aswan-luxor/pexels-alexey-k-458081116-36336671.jpg", "tag": "Adventure", "rating": "4.9", "time": "Half Day", "price": "$40"},
            {"name": "Salt Lakes", "img": "aswan-luxor/mo-gabrail-iuC3w8mLDcs-unsplash.jpg", "tag": "Experience", "rating": "4.5", "time": "2 hours", "price": "Free"},
            {"name": "Mountain of the Dead", "img": "aswan-luxor/thiago-rocha-UhI5MMB4Nv8-unsplash.jpg", "tag": "Cultural", "rating": "4.4", "time": "1-2 hours", "price": "$5"}
        ],
        "gallery": [
            {"src": "images/hero-siwa.png", "caption": "Siwa Oasis"},
            {"src": "aswan-luxor/pexels-alexey-k-458081116-36336671.jpg", "caption": "Sand Sea"},
            {"src": "aswan-luxor/mo-gabrail-iuC3w8mLDcs-unsplash.jpg", "caption": "Salt Lakes"},
            {"src": "aswan-luxor/flying-carpet-Si1MFhSLNWY-unsplash.jpg", "caption": "Cleopatra's Spring"},
            {"src": "aswan-luxor/calin-stan-Mv15X2n8JVE-unsplash.jpg", "caption": "Oracle Temple"}
        ],
        "tips": [
            {"icon": "🚗", "title": "Getting There", "desc": "8-hour drive from Cairo."},
            {"icon": "🌡️", "title": "Best Time", "desc": "Oct-Apr for mild weather."},
            {"icon": "🧥", "title": "What to Pack", "desc": "Warm layers for desert nights."},
            {"icon": "🤝", "title": "Culture", "desc": "Conservative dress required."},
            {"icon": "🫒", "title": "Food", "desc": "Try local dates and olive oil."},
            {"icon": "🏡", "title": "Stay", "desc": "Eco-lodges for authentic experience."}
        ]
    },
    "dahab": {
        "title": "Dahab",
        "tagline": "The Bohemian Beach Town",
        "description": "Once a Bedouin fishing village, Dahab has transformed into Egypt's most laid-back coastal paradise. World-class diving, kite surfing, yoga retreats, and beachfront cafés create a vibe unlike anywhere else in Egypt.",
        "stats": [
            {"icon": "mountain", "label": "Coast", "value": "Sinai"},
            {"icon": "wind", "label": "Capital", "value": "Windsurfing"},
            {"icon": "heart", "label": "Vibe", "value": "Backpacker"}
        ],
        "video": {"id": "BxQCzBbsmbk", "title": "Egypt's Best Kept Secret", "highlights": ["World-famous Blue Hole diving", "Perfect kitesurfing conditions", "Laid-back beach café culture", "Sacred Mount Sinai treks"]},
        "hero_img": "images/hero-dahab.png",
        "attractions": [
            {"name": "Blue Hole", "img": "images/gallery-sharm-diving.png", "tag": "Must See", "rating": "4.9", "time": "2-3 hours", "price": "$10"},
            {"name": "Three Pools", "img": "images/hero-dahab.png", "tag": "Nature", "rating": "4.7", "time": "Half Day", "price": "Free"},
            {"name": "Lighthouse Reef", "img": "sharm/oleksandr-podoima-xzTR5ZLvAx0-unsplash.jpg", "tag": "Adventure", "rating": "4.8", "time": "2-3 hours", "price": "$15"},
            {"name": "Kitesurfing", "img": "hurgada/raimond-klavins-zfeY8HkSAOE-unsplash.jpg", "tag": "Sport", "rating": "4.7", "time": "Half Day", "price": "$50"},
            {"name": "Mount Sinai Trek", "img": "images/hero-sharm.png", "tag": "Spiritual", "rating": "4.7", "time": "Overnight", "price": "$30"},
            {"name": "Bedouin Desert", "img": "hurgada/pexels-vika-glitter-392079-31166931.jpg", "tag": "Cultural", "rating": "4.6", "time": "Evening", "price": "$20"}
        ],
        "gallery": [
            {"src": "images/hero-dahab.png", "caption": "Dahab"},
            {"src": "images/gallery-sharm-diving.png", "caption": "Blue Hole"},
            {"src": "sharm/oleksandr-podoima-xzTR5ZLvAx0-unsplash.jpg", "caption": "Lighthouse Reef"},
            {"src": "hurgada/raimond-klavins-zfeY8HkSAOE-unsplash.jpg", "caption": "Kitesurfing"},
            {"src": "images/hero-sharm.png", "caption": "Sinai"}
        ],
        "tips": [
            {"icon": "🚐", "title": "Getting There", "desc": "1 hour from Sharm by bus."},
            {"icon": "🤿", "title": "Dive Budget", "desc": "Cheapest PADI courses."},
            {"icon": "🍽️", "title": "Food Scene", "desc": "Beachfront restaurants."},
            {"icon": "💰", "title": "Cash", "desc": "Limited ATMs — bring cash."},
            {"icon": "🧘", "title": "Relaxation", "desc": "Try yoga on the beach."},
            {"icon": "⚠️", "title": "Safety", "desc": "Dive with buddy at Blue Hole."}
        ]
    },
    "marsa-alam": {
        "title": "Marsa Alam",
        "tagline": "The Untouched Red Sea",
        "description": "Egypt's most pristine diving destination, where virgin coral reefs meet untouched beaches. Marsa Alam offers encounters with dugongs, dolphins, and sea turtles in waters so clear they feel like glass.",
        "stats": [
            {"icon": "water", "label": "Reefs", "value": "Pristine"},
            {"icon": "fish", "label": "Wildlife", "value": "Dugong Habitat"},
            {"icon": "leaf", "label": "Tourism", "value": "Eco-Friendly"}
        ],
        "video": {"id": "9v1JE46dkHY", "title": "Underwater Paradise", "highlights": ["Swim with wild dugongs", "World-class reef diving", "Dolphin encounters", "Pristine untouched beaches"]},
        "hero_img": "images/hero-marsa-alam.png",
        "attractions": [
            {"name": "Abu Dabbab Bay", "img": "hurgada/raimond-klavins-zfeY8HkSAOE-unsplash.jpg", "tag": "Must See", "rating": "4.9", "time": "Half Day", "price": "$25"},
            {"name": "Elphinstone Reef", "img": "images/gallery-hurghada-reef.png", "tag": "Adventure", "rating": "4.9", "time": "Full Day", "price": "$50"},
            {"name": "Dolphin House Reef", "img": "hurgada/youhana-nassif-9BZVf-jEDwU-unsplash.jpg", "tag": "Experience", "rating": "4.8", "time": "Half Day", "price": "$35"},
            {"name": "Wadi El Gemal", "img": "hurgada/pexels-vika-glitter-392079-31166931.jpg", "tag": "Nature", "rating": "4.7", "time": "Full Day", "price": "$15"},
            {"name": "Port Ghalib Marina", "img": "hurgada/omar-elsharawy-Figb0H3ExRw-unsplash.jpg", "tag": "Luxury", "rating": "4.6", "time": "2-3 hours", "price": "Free"},
            {"name": "Sataya Reef", "img": "images/gallery-hurghada-reef.png", "tag": "Unique", "rating": "4.8", "time": "Full Day", "price": "$45"}
        ],
        "gallery": [
            {"src": "images/hero-marsa-alam.png", "caption": "Marsa Alam"},
            {"src": "hurgada/raimond-klavins-zfeY8HkSAOE-unsplash.jpg", "caption": "Abu Dabbab"},
            {"src": "images/gallery-hurghada-reef.png", "caption": "Elphinstone"},
            {"src": "hurgada/youhana-nassif-9BZVf-jEDwU-unsplash.jpg", "caption": "Dolphin House"},
            {"src": "hurgada/pexels-vika-glitter-392079-31166931.jpg", "caption": "Wadi El Gemal"}
        ],
        "tips": [
            {"icon": "🤿", "title": "Diving", "desc": "Jun-Sep for dugongs."},
            {"icon": "✈️", "title": "Getting There", "desc": "Fly to Marsa Alam airport."},
            {"icon": "🌿", "title": "Eco-Tourism", "desc": "Reef-safe sunscreen only."},
            {"icon": "🐢", "title": "Wildlife", "desc": "Don't chase animals."},
            {"icon": "🏨", "title": "Hotels", "desc": "All-inclusive resorts."},
            {"icon": "📚", "title": "Remote", "desc": "Limited nightlife — relax."}
        ]
    },
    "el-gouna": {
        "title": "El Gouna",
        "tagline": "Venice of the Red Sea",
        "description": "Egypt's most exclusive resort town, built around a series of stunning turquoise lagoons. El Gouna offers world-class dining, vibrant nightlife, luxury hotels, and all the water sports you can dream of.",
        "stats": [
            {"icon": "water", "label": "Lagoons", "value": "Private"},
            {"icon": "star", "label": "Resorts", "value": "5-Star"},
            {"icon": "calendar", "label": "Events", "value": "Year-round"}
        ],
        "video": {"id": "x7hqPbV_mEU", "title": "Luxury Red Sea Escape", "highlights": ["Stunning private lagoons", "World-class kitesurfing", "Gourmet dining scene", "Vibrant nightlife and events"]},
        "hero_img": "images/hero-elgouna.png",
        "attractions": [
            {"name": "Lagoon Beaches", "img": "hurgada/raimond-klavins-zfeY8HkSAOE-unsplash.jpg", "tag": "Must See", "rating": "4.8", "time": "Full Day", "price": "Free"},
            {"name": "El Gouna Marina", "img": "hurgada/omar-elsharawy-Figb0H3ExRw-unsplash.jpg", "tag": "Experience", "rating": "4.7", "time": "2-3 hours", "price": "Free"},
            {"name": "Kitesurfing Beach", "img": "images/hero-dahab.png", "tag": "Adventure", "rating": "4.8", "time": "Half Day", "price": "$60"},
            {"name": "Sliders Cable Park", "img": "hurgada/youhana-nassif-9BZVf-jEDwU-unsplash.jpg", "tag": "Sport", "rating": "4.6", "time": "2-3 hours", "price": "$25"},
            {"name": "Downtown & Nightlife", "img": "hurgada/pexels-vika-glitter-392079-31166931.jpg", "tag": "Entertainment", "rating": "4.5", "time": "Evening", "price": "Free"},
            {"name": "Diving & Snorkeling", "img": "images/gallery-hurghada-reef.png", "tag": "Adventure", "rating": "4.7", "time": "Half Day", "price": "$40"}
        ],
        "gallery": [
            {"src": "images/hero-elgouna.png", "caption": "El Gouna"},
            {"src": "hurgada/raimond-klavins-zfeY8HkSAOE-unsplash.jpg", "caption": "Lagoon Beaches"},
            {"src": "hurgada/omar-elsharawy-Figb0H3ExRw-unsplash.jpg", "caption": "Marina"},
            {"src": "hurgada/youhana-nassif-9BZVf-jEDwU-unsplash.jpg", "caption": "Sliders"},
            {"src": "hurgada/pexels-vika-glitter-392079-31166931.jpg", "caption": "Downtown"}
        ],
        "tips": [
            {"icon": "✈️", "title": "Getting There", "desc": "20 min from Hurghada."},
            {"icon": "🛺", "title": "TukTuks", "desc": "Fun way to get around."},
            {"icon": "🍷", "title": "Dining", "desc": "Book dinner in advance."},
            {"icon": "🪁", "title": "Kite Season", "desc": "Mar-Jun and Sep-Nov."},
            {"icon": "🏨", "title": "Stay Options", "desc": "Choose lagoon-front."},
            {"icon": "🎬", "title": "Events", "desc": "Film festival in October."}
        ]
    }
}

cities_meta = [
    {"id": "cairo", "name": "Cairo", "hero": "images/hero-cairo.png", "tag": "The City That Never Sleeps"},
    {"id": "giza", "name": "Giza", "hero": "images/hero-giza.png", "tag": "Land of the Pyramids"},
    {"id": "alexandria", "name": "Alexandria", "hero": "images/city-alexandria.png", "tag": "Pearl of the Mediterranean"},
    {"id": "luxor", "name": "Luxor", "hero": "images/hero-luxor.png", "tag": "World's Greatest Open-Air Museum"},
    {"id": "aswan", "name": "Aswan", "hero": "images/hero-aswan.png", "tag": "The Jewel of the Nile"},
    {"id": "hurghada", "name": "Hurghada", "hero": "images/hero-hurghada.png", "tag": "Red Sea Paradise"},
    {"id": "sharm-el-sheikh", "name": "Sharm El Sheikh", "hero": "images/hero-sharm.png", "tag": "Where Desert Meets the Sea"},
    {"id": "dahab", "name": "Dahab", "hero": "images/hero-dahab.png", "tag": "The Bohemian Beach Town"},
    {"id": "marsa-alam", "name": "Marsa Alam", "hero": "images/hero-marsa-alam.png", "tag": "The Untouched Red Sea"},
    {"id": "el-gouna", "name": "El Gouna", "hero": "images/hero-elgouna.png", "tag": "Venice of the Red Sea"},
    {"id": "siwa", "name": "Siwa Oasis", "hero": "images/hero-siwa.png", "tag": "Egypt's Hidden Paradise"}
]

template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Horus Guide Travel</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="destination.css">
</head>
<body>

    <nav class="navbar" id="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">
                <img src="logo.svg" alt="Horus Guide Travel" class="logo-img">
                <div class="nav-logo-text"><span class="logo-title">HORUS GUIDE</span><span class="logo-subtitle">TRAVEL</span></div>
            </a>
            <div class="nav-links" id="navLinks">
                <a href="index.html" id="nav-home">Home</a>
                <div class="nav-dropdown">
                    <a href="index.html#destinations" id="nav-destinations">Destinations <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-menu">
                        <a href="cairo.html">Cairo</a>
                        <a href="giza.html">Giza</a>
                        <a href="alexandria.html">Alexandria</a>
                        <a href="luxor.html">Luxor</a>
                        <a href="aswan.html">Aswan</a>
                        <a href="hurghada.html">Hurghada</a>
                        <a href="sharm-el-sheikh.html">Sharm El Sheikh</a>
                        <a href="dahab.html">Dahab</a>
                        <a href="marsa-alam.html">Marsa Alam</a>
                        <a href="el-gouna.html">El Gouna</a>
                        <a href="siwa.html">Siwa Oasis</a>
                    </div>
                </div>
                <a href="index.html#about" id="nav-about">About Us</a>
                <a href="index.html#real-moments" id="nav-gallery">Gallery</a>
                <a href="index.html#contact" id="nav-contact">Contact</a>
            </div>
            <div class="nav-right">
                <a href="plan-my-trip.html" class="nav-cta">Let's Plan My Trip</a>
            </div>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>

    <section class="dest-hero" id="hero">
        <div class="dest-hero-bg">
            <img src="{hero_img}" alt="{title} scenic view">
            <div class="dest-hero-overlay"></div>
        </div>
        <div class="dest-hero-particles">
            <span class="hero-particle">𓂀</span>
            <span class="hero-particle">𓃭</span>
            <span class="hero-particle">𓆣</span>
            <span class="hero-particle">𓇳</span>
            <span class="hero-particle">𓂋</span>
            <span class="hero-particle">𓅃</span>
            <span class="hero-particle">𓃀</span>
        </div>
        <div class="dest-hero-content container">
            <span class="dest-hero-tag fade-up">{tagline}</span>
            <h1 class="dest-hero-title fade-up"><em>{title}</em></h1>
            <p class="dest-hero-desc fade-up">{description}</p>
            <div class="dest-hero-stats fade-up">
                {stats_html}
            </div>
        </div>
        <a href="#quick-nav" class="dest-hero-scroll" aria-label="Scroll down"><i class="fas fa-chevron-down"></i></a>
    </section>

    <div class="quick-nav" id="quick-nav">
        <div class="container">
            <a href="#overview" class="quick-nav-pill active"><i class="fas fa-info-circle"></i> Overview</a>
            <a href="#attractions" class="quick-nav-pill"><i class="fas fa-map-marked-alt"></i> Attractions</a>
            <a href="#gallery" class="quick-nav-pill"><i class="fas fa-camera"></i> Gallery</a>
            <a href="#tips" class="quick-nav-pill"><i class="fas fa-lightbulb"></i> Tips</a>
            <a href="#video" class="quick-nav-pill"><i class="fas fa-play-circle"></i> Video</a>
            <a href="#other-cities" class="quick-nav-pill"><i class="fas fa-globe-africa"></i> Explore More</a>
        </div>
    </div>

    <section class="dest-section" id="overview">
        <div class="container">
            <div class="dest-overview">
                <div class="dest-overview-text fade-right">
                    <span class="section-tag">Discover</span>
                    <h2>Welcome to <em>{title}</em></h2>
                    <p>{description}</p>
                    <p>Experience the perfect blend of ancient history and modern luxury. Every moment here is crafted to create unforgettable memories that will last a lifetime.</p>
                </div>
                <div class="dest-overview-img fade-left">
                    <img src="{hero_img}" alt="{title} Overview">
                </div>
            </div>
        </div>
    </section>

    <section class="dest-section dest-section-alt" id="attractions">
        <div class="container">
            <div class="section-header fade-up">
                <span class="section-tag">Explore</span>
                <h2 class="section-title">Top <em>Attractions</em></h2>
                <p class="section-subtitle">Discover the most iconic landmarks and hidden gems.</p>
            </div>
            <div class="attractions-grid stagger-children fade-up">
                {attractions_html}
            </div>
        </div>
    </section>

    <section class="dest-section" id="gallery">
        <div class="container">
            <div class="section-header fade-up">
                <span class="section-tag">Visuals</span>
                <h2 class="section-title">Photo <em>Gallery</em></h2>
                <p class="section-subtitle">A glimpse into the beauty that awaits you.</p>
            </div>
            <div class="gallery-grid stagger-children fade-up">
                {gallery_html}
            </div>
        </div>
    </section>

    <section class="dest-section dest-section-alt" id="tips">
        <div class="container">
            <div class="section-header fade-up">
                <span class="section-tag">Essential Info</span>
                <h2 class="section-title">Travel <em>Tips</em></h2>
                <p class="section-subtitle">Everything you need to know before you go.</p>
            </div>
            <div class="tips-grid stagger-children fade-up">
                {tips_html}
            </div>
        </div>
    </section>

    <section class="dest-section dest-section-dark" id="video">
        <div class="container">
            <div class="section-header fade-up">
                <span class="section-tag">Experience</span>
                <h2 class="section-title">Watch & <em>Feel</em></h2>
            </div>
            <div class="video-showcase fade-up">
                <div class="video-container" id="videoWrapper">
                    <div class="video-wrapper">
                        <img src="{hero_img}" alt="Video Thumbnail" class="video-thumbnail">
                        <button class="video-play-btn" id="videoPlayBtn" aria-label="Play video"><i class="fas fa-play"></i></button>
                    </div>
                </div>
                <div class="video-info">
                    <h3>{video_title}</h3>
                    <p>Immerse yourself in the sights and sounds of {title}. Let this journey inspire your next great adventure.</p>
                    <ul class="video-highlights">
                        {video_highlights_html}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="dest-section" id="other-cities">
        <div class="container">
            <div class="section-header fade-up">
                <span class="section-tag">Keep Exploring</span>
                <h2 class="section-title">More <em>Destinations</em></h2>
            </div>
            <div class="other-cities-grid stagger-children fade-up">
                {other_cities_html}
            </div>
        </div>
    </section>

    <section class="dest-cta">
        <div class="dest-cta-bg">
            <img src="images/hero-pyramids.png" alt="Egypt Landscape">
            <div class="dest-cta-overlay"></div>
        </div>
        <div class="container">
            <div class="dest-cta-content fade-up">
                <h2>Ready to explore <em>{title}</em>?</h2>
                <p>Let our local experts craft the perfect itinerary for your Egyptian adventure.</p>
                <div class="dest-cta-buttons">
                    <a href="plan-my-trip.html" class="btn btn-primary">Plan My Trip</a>
                    <a href="index.html#contact" class="btn btn-outline">Contact Us</a>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo">
                        <img src="logo.svg" alt="Horus Guide Travel" class="logo-img">
                        <div class="nav-logo-text"><span class="logo-title">HORUS GUIDE</span><span class="logo-subtitle">TRAVEL</span></div>
                    </a>
                    <p>We create unforgettable Egypt experiences with Horus Guide Travel with the best value and personal touch.</p>
                    <div class="footer-socials">
                        <a href="https://www.facebook.com/share/1JHrTsZytG/?mibextid=wwXIfr" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/horus_guide_travel/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        <a href="https://wa.me/201070430634" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <a href="index.html">Home</a>
                    <a href="index.html#destinations">Destinations</a>
                    <a href="index.html#about">About Us</a>
                    <a href="index.html#videos">Our Videos</a>
                    <a href="index.html#contact">Contact</a>
                </div>
                <div class="footer-col">
                    <h4>Top Destinations</h4>
                    <a href="cairo.html">Cairo</a>
                    <a href="giza.html">Giza</a>
                    <a href="luxor.html">Luxor</a>
                    <a href="aswan.html">Aswan</a>
                    <a href="hurghada.html">Hurghada</a>
                    <a href="sharm-el-sheikh.html">Sharm El Sheikh</a>
                </div>
                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <a href="tel:+201070430634"><i class="fas fa-phone"></i> +20 107 043 0634</a>
                    <a href="mailto:turkayduru7@gmail.com"><i class="fas fa-envelope"></i> turkayduru7@gmail.com</a>
                    <a href="#"><i class="fas fa-map-marker-alt"></i> Aswan, Egypt</a>
                    <a href="https://wa.me/201070430634"><i class="fab fa-whatsapp"></i> Chat on WhatsApp</a>
                </div>
                <div class="footer-col">
                    <h4>Newsletter</h4>
                    <p style="color: rgba(255,255,255,0.5); font-size: 0.88rem; margin-bottom: 16px;">Get travel tips and special offers straight to your inbox.</p>
                    <div class="footer-newsletter">
                        <input type="email" placeholder="Your email">
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Horus Guide Travel. All Rights Reserved.</p>
                <div><a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms &amp; Conditions</a></div>
            </div>
        </div>
    </footer>

    <div class="lightbox-modal" id="lightboxModal">
        <button class="lightbox-close" id="lightboxClose"><i class="fas fa-times"></i></button>
        <button class="lightbox-prev" id="lightboxPrev"><i class="fas fa-chevron-left"></i></button>
        <button class="lightbox-next" id="lightboxNext"><i class="fas fa-chevron-right"></i></button>
        <div class="lightbox-content">
            <img src="" alt="" id="lightboxImage">
            <div class="lightbox-caption" id="lightboxCaption"></div>
        </div>
    </div>

    <script>
        const videoId = '{video_id}';
        const galleryImages = {gallery_json};
    </script>
    <script src="destination.js"></script>
</body>
</html>"""

def render_page(city_id, data):
    stats_html = "".join([f'''<div class="dest-hero-stat">
                <i class="fas fa-{s['icon']}"></i>
                <div><span class="stat-label">{s['label']}</span><span class="stat-value">{s['value']}</span></div>
            </div>''' for s in data['stats']])

    attractions_html = "".join([f'''<div class="attraction-card">
                    <div class="attraction-img">
                        <img src="{a['img']}" alt="{a['name']}">
                        <div class="attraction-badge">{a['tag']}</div>
                    </div>
                    <div class="attraction-info">
                        <div class="attraction-rating">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                            <span>{a['rating']}</span>
                        </div>
                        <h3>{a['name']}</h3>
                        <div class="attraction-meta">
                            <span><i class="fas fa-clock"></i> {a['time']}</span>
                            <span><i class="fas fa-ticket-alt"></i> {a['price']}</span>
                        </div>
                    </div>
                </div>''' for a in data['attractions']])

    gallery_html = ""
    for i, g in enumerate(data['gallery']):
        cls = 'gallery-item-large' if i == 0 else 'gallery-item'
        gallery_html += f'''<div class="{cls}" onclick="openLightbox({i})">
                    <img src="{g['src']}" alt="{g['caption']}">
                    <div class="gallery-overlay">
                        <i class="fas fa-search-plus"></i>
                        <span>{g['caption']}</span>
                    </div>
                </div>'''

    tips_html = "".join([f'''<div class="tip-card">
                    <div class="tip-icon">{t['icon']}</div>
                    <h4>{t['title']}</h4>
                    <p>{t['desc']}</p>
                </div>''' for t in data['tips']])

    video_highlights_html = "".join([f'''<li><i class="fas fa-check"></i> {h}</li>''' for h in data['video']['highlights']])

    other_cities_html = "".join([f'''<a href="{c['id']}.html" class="other-city-card">
                    <img src="{c['hero']}" alt="{c['name']}">
                    <div class="other-city-overlay">
                        <h4>{c['name']}</h4>
                        <span>{c['tag']}</span>
                    </div>
                </a>''' for c in cities_meta if c['id'] != city_id])

    return template.format(
        title=data['title'],
        tagline=data['tagline'],
        description=data['description'],
        hero_img=data['hero_img'],
        stats_html=stats_html,
        attractions_html=attractions_html,
        gallery_html=gallery_html,
        tips_html=tips_html,
        video_id=data['video']['id'],
        video_title=data['video']['title'],
        video_highlights_html=video_highlights_html,
        other_cities_html=other_cities_html,
        gallery_json=json.dumps(data['gallery'])
    )

for city_id, city_data in cities.items():
    html_content = render_page(city_id, city_data)
    with open(f"c:/Users/Lenovo/Desktop/Horus Guide Travel Web/{city_id}.html", "w", encoding="utf-8") as f:
        f.write(html_content)

print("Generated all 11 destination pages successfully.")



