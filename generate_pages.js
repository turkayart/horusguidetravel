const fs = require('fs');
const path = require('path');

const cities = {
    "cairo": {
        "title": "Cairo",
        "tagline": "The Heart of Ancient Egypt",
        "description": "Where the ancient world's greatest wonders stand alongside a vibrant, bustling metropolis. From the Pyramids of Giza and the Sphinx to the winding alleys of Khan el-Khalili, Cairo is a city that never stops surprising you.",
        "stats": [
            {"icon": "sun", "label": "Best Season", "value": "Oct–Apr"},
            {"icon": "users", "label": "Population", "value": "25M+"},
            {"icon": "clock", "label": "Timezone", "value": "UTC+2"}
        ],
        "video": {"id": "yJ4LzXO8Un4", "title": "Experience the Magic of Cairo", "highlights": ["Ancient Pyramids & Sphinx", "World-class museums", "Legendary Khan el-Khalili bazaar", "Cairo Citadel view"]},
        "hero_img": "images/hero-cairo.jpg",
        "attractions": [
            {"name": "Pyramids of Giza", "img": "images/hero-pyramids.jpg", "tag": "Wonder", "rating": "4.9", "time": "3-4 hours", "price": "$25"},
            {"name": "Great Sphinx of Giza", "img": "images/sphinx.jpg", "tag": "Iconic", "rating": "4.9", "time": "1-2 hours", "price": "Included"},
            {"name": "Egyptian Museum", "img": "images/grand_egyptian_museum.jpg", "tag": "Museum", "rating": "4.8", "time": "2-3 hours", "price": "$15"},
            {"name": "Khan el-Khalili", "img": "images/gallery-cairo-khan.jpg", "tag": "Bazaar", "rating": "4.6", "time": "2-3 hours", "price": "Free"},
            {"name": "Citadel of Saladin", "img": "images/gallery-cairo-mosque.jpg", "tag": "Historic", "rating": "4.8", "time": "2-3 hours", "price": "$10"},
            {"name": "Al-Azhar Mosque", "img": "images/Al-Azhar-Mosque.jpg", "tag": "Cultural", "rating": "4.5", "time": "1-2 hours", "price": "Free"}
        ],
        "gallery": [
            {"src": "images/grand_egyptian_museum.jpg", "caption": "Egyptian Museum"},
            {"src": "images/hero-pyramids.jpg", "caption": "Pyramids of Giza"},
            {"src": "images/sphinx.jpg", "caption": "Great Sphinx of Giza"},
            {"src": "images/gallery-cairo-khan.jpg", "caption": "Khan el-Khalili Bazaar"},
            {"src": "images/gallery-cairo-mosque.jpg", "caption": "Citadel of Saladin"}
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
        "hero_img": "images/city-alexandria.jpg",
        "attractions": [
            {"name": "Bibliotheca Alexandrina", "img": "images/attr-bibliotheca-alexandrina.jpg", "tag": "Cultural", "rating": "4.8", "time": "2-3 hours", "price": "$5"},
            {"name": "Citadel of Qaitbay", "img": "images/gallery-alex-citadel.jpg", "tag": "Historic", "rating": "4.7", "time": "1-2 hours", "price": "$5"},
            {"name": "Catacombs of Kom El Shoqafa", "img": "images/attr-catacombs-kom-el-shoqafa.jpg", "tag": "Must See", "rating": "4.6", "time": "1-2 hours", "price": "$5"},
            {"name": "Montaza Palace", "img": "images/attr-montaza-palace.jpg", "tag": "Nature", "rating": "4.6", "time": "2-3 hours", "price": "$3"},
            {"name": "Alexandria Corniche", "img": "images/attr-alexandria-corniche.jpg", "tag": "Experience", "rating": "4.5", "time": "2-3 hours", "price": "Free"}
        ],
        "gallery": [
            {"src": "images/hero-alexandria.jpg", "caption": "Alexandria"},
            {"src": "images/gallery-alex-citadel.jpg", "caption": "Citadel"},
            {"src": "images/attr-bibliotheca-alexandrina.jpg", "caption": "Library"},
            {"src": "images/attr-alexandria-corniche.jpg", "caption": "Corniche"},
            {"src": "images/attr-catacombs-kom-el-shoqafa.jpg", "caption": "Catacombs"}
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
        "hero_img": "images/luxor temple.jpg",
        "attractions": [
            {"name": "Temple of Hatshepsut", "img": "images/Hatshepsut.jpg", "tag": "Landmark", "rating": "4.7", "time": "1-2 hours", "price": "$10"},
            {"name": "Edfu Temple", "img": "images/Edfu-temple.jpg", "tag": "Ancient", "rating": "4.9", "time": "2-3 hours", "price": "$15"},
            {"name": "Luxor Temple", "img": "images/luxor temple.jpg", "tag": "Historic", "rating": "4.7", "time": "1-2 hours", "price": "$10"},
            {"name": "Nile River Cruise", "img": "images/nile-cruise.png", "tag": "Experience", "rating": "4.8", "time": "3-5 days", "price": "$250"}
        ],
        "gallery": [
            {"src": "images/luxor temple.jpg", "caption": "Luxor Temple"},
            {"src": "images/Hatshepsut.jpg", "caption": "Hatshepsut Temple"},
            {"src": "images/Edfu-temple.jpg", "caption": "Edfu Temple"},
            {"src": "images/nile-cruise.png", "caption": "Nile Cruise"}
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
        "hero_img": "images/hero-aswan.jpg",
        "attractions": [
            {"name": "Philae Temple", "img": "images/gallery-aswan-philae.jpg", "tag": "Ancient", "rating": "4.8", "time": "2-3 hours", "price": "$15"},
            {"name": "Abu Simbel Temples", "img": "images/attr-abu-simbel.jpg", "tag": "Must See", "rating": "4.9", "time": "Full Day", "price": "$60"},
            {"name": "Aswan High Dam", "img": "images/attr-aswan-high-dam.jpg", "tag": "Landmark", "rating": "4.3", "time": "1 hour", "price": "$5"},
            {"name": "Elephantine Island", "img": "images/attr-elephantine-island.jpg", "tag": "Nature", "rating": "4.6", "time": "2-3 hours", "price": "Free"},
            {"name": "Nubian Village", "img": "images/gallery-aswan-nubian.jpg", "tag": "Cultural", "rating": "4.7", "time": "Half Day", "price": "$25"}
        ],
        "gallery": [
            {"src": "images/hero-aswan.jpg", "caption": "Aswan"},
            {"src": "images/gallery-aswan-philae.jpg", "caption": "Philae"},
            {"src": "images/gallery-aswan-nubian.jpg", "caption": "Nubian Village"},
            {"src": "images/attr-elephantine-island.jpg", "caption": "Elephantine Island"}
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
        "hero_img": "images/hero-sharm.jpg",
        "attractions": [
            {"name": "Ras Mohammed National Park", "img": "images/gallery-sharm-diving.jpg", "tag": "Must See", "rating": "4.9", "time": "Full Day", "price": "$25"},
            {"name": "Naama Bay", "img": "images/hero-sharm.jpg", "tag": "Entertainment", "rating": "4.6", "time": "Evening", "price": "Free"},
            {"name": "Soho Square", "img": "images/attr-soho-square.jpg", "tag": "Modern", "rating": "4.6", "time": "Evening", "price": "Free"},
            {"name": "Scuba Diving & Snorkeling", "img": "images/gallery-sharm-diving.jpg", "tag": "Adventure", "rating": "4.8", "time": "Half Day", "price": "$40"},
            {"name": "Desert Safari Tours", "img": "images/desert safari tours.jpg", "tag": "Experience", "rating": "4.5", "time": "Half Day", "price": "$25"}
        ],
        "gallery": [
            {"src": "images/hero-sharm.jpg", "caption": "Sharm El Sheikh"},
            {"src": "images/gallery-sharm-diving.jpg", "caption": "Diving"},
            {"src": "images/gallery-sharm-diving.jpg", "caption": "Ras Mohammed"},
            {"src": "images/attr-soho-square.jpg", "caption": "Soho Square"}
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
        "hero_img": "images/hero-hurghada.jpg",
        "attractions": [
            {"name": "Giftun Islands", "img": "images/city-hurghada.jpg", "tag": "Must See", "rating": "4.8", "time": "Full Day", "price": "$35"},
            {"name": "Marina Hurghada", "img": "images/city-hurghada.jpg", "tag": "Luxury", "rating": "4.7", "time": "2-3 hours", "price": "Free"},
            {"name": "Desert Quad Bike Tours", "img": "images/Desert Quad Bike Tours.jpg", "tag": "Experience", "rating": "4.6", "time": "Half Day", "price": "$30"},
            {"name": "Snorkeling & Diving Excursions", "img": "images/gallery-hurghada-reef.jpg", "tag": "Adventure", "rating": "4.9", "time": "Half Day", "price": "$45"},
            {"name": "Hurghada Grand Aquarium", "img": "images/Hurghada Grand Aquarium.jpg", "tag": "Family", "rating": "4.5", "time": "2-3 hours", "price": "$20"}
        ],
        "gallery": [
            {"src": "images/hero-hurghada.jpg", "caption": "Hurghada"},
            {"src": "images/gallery-hurghada-reef.jpg", "caption": "Reef"},
            {"src": "images/city-hurghada.jpg", "caption": "Marina"},
            {"src": "images/gallery-hurghada-reef.jpg", "caption": "Boat"}
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
        "hero_img": "images/hero-dahab.jpg",
        "attractions": [
            {"name": "Blue Hole", "img": "images/gallery-sharm-diving.jpg", "tag": "Must See", "rating": "4.9", "time": "2-3 hours", "price": "$10"},
            {"name": "Lighthouse Reef", "img": "images/gallery-sharm-diving.jpg", "tag": "Adventure", "rating": "4.8", "time": "2-3 hours", "price": "$15"},
            {"name": "Mount Sinai Excursions", "img": "images/hero-sharm.jpg", "tag": "Spiritual", "rating": "4.7", "time": "Overnight", "price": "$30"},
            {"name": "Bedouin Camps", "img": "images/Bedouin Camps.jpg", "tag": "Cultural", "rating": "4.6", "time": "Evening", "price": "$20"},
            {"name": "Lagoon Beach", "img": "images/hero-dahab.jpg", "tag": "Nature", "rating": "4.7", "time": "Half Day", "price": "Free"}
        ],
        "gallery": [
            {"src": "images/hero-dahab.jpg", "caption": "Dahab"},
            {"src": "images/gallery-sharm-diving.jpg", "caption": "Blue Hole"},
            {"src": "images/gallery-sharm-diving.jpg", "caption": "Lighthouse Reef"},
            {"src": "images/Bedouin Camps.jpg", "caption": "Bedouin Camps"}
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
        "hero_img": "images/hero-siwa.jpg",
        "attractions": [
            {"name": "Siwa Oasis", "img": "images/hero-siwa.jpg", "tag": "Nature", "rating": "4.8", "time": "1-2 Days", "price": "Free"},
            {"name": "Shali Fortress", "img": "images/attr-shali-fortress.jpg", "tag": "Historic", "rating": "4.7", "time": "1-2 hours", "price": "$5"},
            {"name": "Cleopatra Spring", "img": "images/attr-cleopatra-spring.jpg", "tag": "Nature", "rating": "4.6", "time": "1-2 hours", "price": "Free"},
            {"name": "Temple of the Oracle", "img": "images/attr-temple-oracle.jpg", "tag": "Ancient", "rating": "4.8", "time": "1 hour", "price": "$5"},
            {"name": "Great Sand Sea", "img": "images/Great Sand Sea.jpg", "tag": "Adventure", "rating": "4.9", "time": "Half Day", "price": "$40"}
        ],
        "gallery": [
            {"src": "images/hero-siwa.jpg", "caption": "Siwa Oasis"},
            {"src": "images/Great Sand Sea.jpg", "caption": "Sand Sea"},
            {"src": "images/attr-cleopatra-spring.jpg", "caption": "Cleopatra's Spring"},
            {"src": "images/attr-temple-oracle.jpg", "caption": "Oracle Temple"}
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
    "port-said": {
        "title": "Port Said",
        "tagline": "Gateway to the Suez Canal",
        "description": "Known for its beautiful 19th-century colonial architecture, historic lighthouse, and prime views of massive cargo ships traversing the Suez Canal. Port Said is a vibrant coastal city with a unique maritime soul.",
        "stats": [
            {"icon": "water", "label": "Coast", "value": "Suez Canal & Med"},
            {"icon": "landmark", "label": "Founded", "value": "1859"},
            {"icon": "history", "label": "Theme", "value": "Maritime"}
        ],
        "video": {"id": "dp5cN5EvXwg", "title": "The Gateway of Egypt", "highlights": ["Historic Suez Canal views", "Beautiful colonial style", "Military Museum history", "Scenic ferry crossings"]},
        "hero_img": "images/city-port-said.jpg",
        "attractions": [
            {"name": "Port Said Lighthouse", "img": "images/attr-port-said-lighthouse.jpg", "tag": "Historic", "rating": "4.7", "time": "1 hour", "price": "Free"},
            {"name": "Suez Canal Viewpoints", "img": "images/attr-suez-canal-viewpoint.jpg", "tag": "Must See", "rating": "4.8", "time": "1-2 hours", "price": "Free"},
            {"name": "Military Museum", "img": "images/attr-military-museum.jpg", "tag": "Museum", "rating": "4.6", "time": "2 hours", "price": "$3"},
            {"name": "Ferry Crossing", "img": "images/attr-ferry-crossing.jpg", "tag": "Experience", "rating": "4.7", "time": "30 min", "price": "Free"}
        ],
        "gallery": [
            {"src": "images/city-port-said.jpg", "caption": "Port Said Port"},
            {"src": "images/attr-port-said-lighthouse.jpg", "caption": "Port Said Lighthouse"},
            {"src": "images/attr-suez-canal-viewpoint.jpg", "caption": "Suez Canal Viewpoint"},
            {"src": "images/attr-ferry-crossing.jpg", "caption": "Ferry Crossing"}
        ],
        "tips": [
            {"icon": "🚢", "title": "Canal Views", "desc": "Walk along the Corniche to watch giant ships pass."},
            {"icon": "⛴️", "title": "Free Ferry", "desc": "Take the ferry to Port Fouad — it is completely free."},
            {"icon": "Architecture", "title": "French Quarter", "desc": "Look out for old buildings with wooden balconies."},
            {"icon": "🐟", "title": "Seafood", "desc": "Try local fish at the historic fish market."},
            {"icon": "🛍️", "title": "Shopping", "desc": "Port Said is a duty-free zone, great for shopping."}
        ]
    },
    "ismailia": {
        "title": "Ismailia",
        "tagline": "The City of Gardens and Beauty",
        "description": "Built during the construction of the Suez Canal, Ismailia is famous for its French colonial villas, lush green parks, and the serene Lake Timsah. It is one of Egypt's most peaceful and clean cities.",
        "stats": [
            {"icon": "tree", "label": "Greenery", "value": "Park City"},
            {"icon": "water", "label": "Water", "value": "Lake Timsah"},
            {"icon": "landmark", "label": "History", "value": "Suez Canal"}
        ],
        "video": {"id": "dp5cN5EvXwg", "title": "The Garden City of Egypt", "highlights": ["French colonial villas", "Serene Lake Timsah beaches", "Lush green public gardens", "Archaeology Museum treasures"]},
        "hero_img": "images/city-ismailia.jpg",
        "attractions": [
            {"name": "Suez Canal Authority Building", "img": "images/attr-suez-canal-authority.jpg", "tag": "Historic", "rating": "4.8", "time": "1 hour", "price": "Free"},
            {"name": "Ismailia Museum", "img": "images/attr-ismailia-museum.jpg", "tag": "Museum", "rating": "4.6", "time": "2 hours", "price": "$3"},
            {"name": "Lake Timsah", "img": "images/attr-lake-timsah.jpg", "tag": "Nature", "rating": "4.7", "time": "Half Day", "price": "Free"},
            {"name": "Public Gardens", "img": "images/attr-public-gardens.jpg", "tag": "Relax", "rating": "4.5", "time": "1-2 hours", "price": "Free"}
        ],
        "gallery": [
            {"src": "images/city-ismailia.jpg", "caption": "Ismailia City View"},
            {"src": "images/attr-suez-canal-authority.jpg", "caption": "Suez Canal Authority Building"},
            {"src": "images/attr-lake-timsah.jpg", "caption": "Lake Timsah"},
            {"src": "images/attr-public-gardens.jpg", "caption": "Lush Public Gardens"}
        ],
        "tips": [
            {"icon": "🥭", "title": "Mango Season", "desc": "Visit in July-August to taste Egypt's best mangoes."},
            {"icon": "🏖️", "title": "Lake Timsah", "desc": "Visit beach clubs like Frouz or Jahaz for water sports."},
            {"icon": "🏡", "title": "Colonial Quarter", "desc": "Stroll down the tree-lined streets of the French Quarter."},
            {"icon": "☕", "title": "Relaxed Vibe", "desc": "Perfect weekend getaway from Cairo's bustle."},
            {"icon": "🏛️", "title": "Archaeology", "desc": "The museum houses beautiful mosaics from the Canal excavation."}
        ]
    },
    "fayoum": {
        "title": "Fayoum",
        "tagline": "Land of Lakes and Waterfalls",
        "description": "Egypt's oldest city, located in a lush basin fed by the Nile. Fayoum is home to the stunning waterfalls of Wadi El Rayan, the prehistoric Whale Valley (Wadi Al Hitan), and the artistic village of Tunis.",
        "stats": [
            {"icon": "hourglass", "label": "Age", "value": "6,000+ Yrs"},
            {"icon": "leaf", "label": "Nature", "value": "Oasis & Lake"},
            {"icon": "landmark", "label": "UNESCO", "value": "Whale Valley"}
        ],
        "video": {"id": "dp5cN5EvXwg", "title": "Magic of Fayoum Oasis", "highlights": ["Wadi El Rayan waterfalls", "Wadi Al Hitan fossils", "Tunis Village pottery", "Serene Qarun Lake views"]},
        "hero_img": "images/city-fayoum.jpg",
        "attractions": [
            {"name": "Wadi El Rayan", "img": "images/attr-wadi-el-rayan.jpg", "tag": "Nature", "rating": "4.8", "time": "Half Day", "price": "$5"},
            {"name": "Wadi Al Hitan (Whale Valley)", "img": "images/attr-wadi-al-hitan.jpg", "tag": "UNESCO", "rating": "4.9", "time": "Half Day", "price": "$10"},
            {"name": "Qarun Lake", "img": "images/attr-qarun-lake.jpg", "tag": "Scenic", "rating": "4.5", "time": "2-3 hours", "price": "Free"},
            {"name": "Tunis Village", "img": "images/attr-tunis-village.jpg", "tag": "Artisan", "rating": "4.7", "time": "2-3 hours", "price": "Free"}
        ],
        "gallery": [
            {"src": "images/city-fayoum.jpg", "caption": "Fayoum Oasis"},
            {"src": "images/attr-wadi-el-rayan.jpg", "caption": "Wadi El Rayan Waterfalls"},
            {"src": "images/attr-wadi-al-hitan.jpg", "caption": "Wadi Al Hitan Fossils"},
            {"src": "images/attr-tunis-village.jpg", "caption": "Tunis Village Pottery"}
        ],
        "tips": [
            {"icon": "🛹", "title": "Sandboarding", "desc": "Try sandboarding on the Magic Lake dunes."},
            {"icon": "🏺", "title": "Pottery Class", "desc": "Visit Tunis Village to take a pottery-making class."},
            {"icon": "🐋", "title": "Whale Valley", "desc": "Hire a 4x4 vehicle to reach Wadi Al Hitan's prehistoric fossils."},
            {"icon": "🐦", "title": "Bird Watching", "desc": "Lake Qarun is a major migratory bird stop in winter."},
            {"icon": "🧥", "title": "Desert Nights", "desc": "If camping in the desert, pack warm layers for the night."}
        ]
    }
};

const cities_meta = [
    {"id": "cairo", "name": "Cairo", "hero": "images/hero-cairo.jpg", "tag": "The City That Never Sleeps"},
    {"id": "alexandria", "name": "Alexandria", "hero": "images/city-alexandria.jpg", "tag": "Pearl of the Mediterranean"},
    {"id": "luxor", "name": "Luxor", "hero": "images/luxor temple.jpg", "tag": "World's Greatest Open-Air Museum"},
    {"id": "aswan", "name": "Aswan", "hero": "images/hero-aswan.jpg", "tag": "The Jewel of the Nile"},
    {"id": "sharm-el-sheikh", "name": "Sharm El Sheikh", "hero": "images/hero-sharm.jpg", "tag": "Where Desert Meets the Sea"},
    {"id": "hurghada", "name": "Hurghada", "hero": "images/hero-hurghada.jpg", "tag": "Red Sea Paradise"},
    {"id": "dahab", "name": "Dahab", "hero": "images/hero-dahab.jpg", "tag": "The Bohemian Beach Town"},
    {"id": "siwa", "name": "Siwa Oasis", "hero": "images/hero-siwa.jpg", "tag": "Egypt's Hidden Paradise"},
    {"id": "port-said", "name": "Port Said", "hero": "images/city-port-said.jpg", "tag": "Gateway to the Suez Canal"},
    {"id": "ismailia", "name": "Ismailia", "hero": "images/city-ismailia.jpg", "tag": "City of Gardens and Beauty"},
    {"id": "fayoum", "name": "Fayoum", "hero": "images/city-fayoum.jpg", "tag": "Land of Lakes and Waterfalls"}
];

let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>__TITLE__ - Horus Guide Travel</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="destination.css">
    <link rel="stylesheet" href="media.css">
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
                        <a href="alexandria.html">Alexandria</a>
                        <a href="luxor.html">Luxor</a>
                        <a href="aswan.html">Aswan</a>
                        <a href="sharm-el-sheikh.html">Sharm El Sheikh</a>
                        <a href="hurghada.html">Hurghada</a>
                        <a href="dahab.html">Dahab</a>
                        <a href="siwa.html">Siwa Oasis</a>
                        <a href="port-said.html">Port Said</a>
                        <a href="ismailia.html">Ismailia</a>
                        <a href="fayoum.html">Fayoum</a>
                    </div>
                </div>
                <a href="index.html#about" id="nav-about">About Us</a>
                <a href="gallery.html" id="nav-gallery">Gallery</a>
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
            <img src="__HERO_IMG__" alt="__TITLE__ scenic view">
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
            <span class="dest-hero-tag fade-up">__TAGLINE__</span>
            <h1 class="dest-hero-title fade-up"><em>__TITLE__</em></h1>
            <p class="dest-hero-desc fade-up">__DESCRIPTION__</p>
            <div class="dest-hero-stats fade-up">
                __STATS_HTML__
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
                    <h2>Welcome to <em>__TITLE__</em></h2>
                    <p>__DESCRIPTION__</p>
                    <p>Experience the perfect blend of ancient history and modern luxury. Every moment here is crafted to create unforgettable memories that will last a lifetime.</p>
                </div>
                <div class="dest-overview-img fade-left">
                    <img src="__HERO_IMG__" alt="__TITLE__ Overview">
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
                __ATTRACTIONS_HTML__
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
                __GALLERY_HTML__
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
                __TIPS_HTML__
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
                        <img src="__HERO_IMG__" alt="Video Thumbnail" class="video-thumbnail">
                        <button class="video-play-btn" id="videoPlayBtn" aria-label="Play video"><i class="fas fa-play"></i></button>
                    </div>
                </div>
                <div class="video-info">
                    <h3>__VIDEO_TITLE__</h3>
                    <p>Immerse yourself in the sights and sounds of __TITLE__. Let this journey inspire your next great adventure.</p>
                    <ul class="video-highlights">
                        __VIDEO_HIGHLIGHTS_HTML__
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
                __OTHER_CITIES_HTML__
            </div>
        </div>
    </section>

    <section class="dest-cta">
        <div class="dest-cta-bg">
            <img src="images/hero-pyramids.jpg" alt="Egypt Landscape">
            <div class="dest-cta-overlay"></div>
        </div>
        <div class="container">
            <div class="dest-cta-content fade-up">
                <h2>Ready to explore <em>__TITLE__</em>?</h2>
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
                    <a href="gallery.html">Gallery</a>
                    <a href="index.html#contact">Contact</a>
                </div>
                <div class="footer-col">
                    <h4>Top Destinations</h4>
                    <a href="cairo.html">Cairo</a>
                    <a href="alexandria.html">Alexandria</a>
                    <a href="luxor.html">Luxor</a>
                    <a href="aswan.html">Aswan</a>
                    <a href="sharm-el-sheikh.html">Sharm El Sheikh</a>
                    <a href="hurghada.html">Hurghada</a>
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
        const videoId = '__VIDEO_ID__';
        const galleryImages = __GALLERY_JSON__;
    </script>
    <script src="destination.js"></script>
    <script src="media-library.js"></script>
</body>
</html>`;

function renderPage(cityId, data) {
    let statsHtml = '';
    data.stats.forEach(s => {
        statsHtml += '<div class="dest-hero-stat">' +
            '<i class="fas fa-' + s.icon + '"></i>' +
            '<div><span class="stat-label">' + s.label + '</span><span class="stat-value">' + s.value + '</span></div>' +
        '</div>';
    });

    let attractionsHtml = '';
    data.attractions.forEach(a => {
        attractionsHtml += '<div class="attraction-card">' +
            '<div class="attraction-img">' +
                '<img src="' + a.img + '" alt="' + a.name + '">' +
                '<div class="attraction-badge">' + a.tag + '</div>' +
            '</div>' +
            '<div class="attraction-info">' +
                '<div class="attraction-rating">' +
                    '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>' +
                    '<span>' + a.rating + '</span>' +
                '</div>' +
                '<h3>' + a.name + '</h3>' +
                '<div class="attraction-meta">' +
                    '<span><i class="fas fa-clock"></i> ' + a.time + '</span>' +
                    '<span><i class="fas fa-ticket-alt"></i> ' + a.price + '</span>' +
                '</div>' +
            '</div>' +
        '</div>';
    });

    let galleryHtml = '';
    data.gallery.forEach((g, i) => {
        const cls = i === 0 ? 'gallery-item-large' : 'gallery-item';
        galleryHtml += '<div class="' + cls + '" onclick="openLightbox(' + i + ')">' +
            '<img src="' + g.src + '" alt="' + g.caption + '">' +
            '<div class="gallery-overlay">' +
                '<i class="fas fa-search-plus"></i>' +
                '<span>' + g.caption + '</span>' +
            '</div>' +
        '</div>';
    });

    let tipsHtml = '';
    data.tips.forEach(t => {
        tipsHtml += '<div class="tip-card">' +
            '<div class="tip-icon">' + t.icon + '</div>' +
            '<h4>' + t.title + '</h4>' +
            '<p>' + t.desc + '</p>' +
        '</div>';
    });

    let videoHighlightsHtml = '';
    data.video.highlights.forEach(h => {
        videoHighlightsHtml += '<li><i class="fas fa-check"></i> ' + h + '</li>';
    });

    let otherCitiesHtml = '';
    cities_meta.filter(c => c.id !== cityId).forEach(c => {
        otherCitiesHtml += '<a href="' + c.id + '.html" class="other-city-card">' +
            '<img src="' + c.hero + '" alt="' + c.name + '">' +
            '<div class="other-city-overlay">' +
                '<h4>' + c.name + '</h4>' +
                '<span>' + c.tag + '</span>' +
            '</div>' +
        '</a>';
    });

    let content = template;
    content = content.replace(/__TITLE__/g, data.title);
    content = content.replace(/__TAGLINE__/g, data.tagline);
    content = content.replace(/__DESCRIPTION__/g, data.description);
    content = content.replace(/__HERO_IMG__/g, data.hero_img);
    content = content.replace(/__STATS_HTML__/g, statsHtml);
    content = content.replace(/__ATTRACTIONS_HTML__/g, attractionsHtml);
    content = content.replace(/__GALLERY_HTML__/g, galleryHtml);
    content = content.replace(/__TIPS_HTML__/g, tipsHtml);
    content = content.replace(/__VIDEO_ID__/g, data.video.id);
    content = content.replace(/__VIDEO_TITLE__/g, data.video.title);
    content = content.replace(/__VIDEO_HIGHLIGHTS_HTML__/g, videoHighlightsHtml);
    content = content.replace(/__OTHER_CITIES_HTML__/g, otherCitiesHtml);
    content = content.replace(/__GALLERY_JSON__/g, JSON.stringify(data.gallery));

    return content;
}

for (const [cityId, cityData] of Object.entries(cities)) {
    const htmlContent = renderPage(cityId, cityData);
    fs.writeFileSync(path.join('c:/Users/Lenovo/Desktop/Horus Guide Travel Web', cityId + '.html'), htmlContent, 'utf-8');
}

console.log("Generated all destination pages successfully.");
