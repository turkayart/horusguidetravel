const fs = require('fs');
const path = require('path');

const ROOT = 'c:/Users/Lenovo/Desktop/Horus Guide Travel Web';
const ATTRACTIONS_DIR = path.join(ROOT, 'attractions');

if (!fs.existsSync(ATTRACTIONS_DIR)) {
  fs.mkdirSync(ATTRACTIONS_DIR, { recursive: true });
}

// ============================================================
// ATTRACTION DATA — 11 DETAILED ATTRACTION PAGES
// ============================================================

const attractions = [
  {
    id: "pyramids-of-giza",
    name: "Pyramids of Giza",
    subtitle: "The Last Surviving Wonder of the Ancient World",
    badge: "UNESCO Heritage",
    badgeIcon: "landmark",
    city: "Cairo",
    cityPage: "cairo.html",
    heroImg: "../images/hero-pyramids-premium.jpg",
    rating: "4.9",
    reviewCount: "48,200",
    duration: "3-4 hours",
    price: "$25",
    priceDetail: "General entry",
    location: "Al Haram, Giza Governorate",
    openHours: "7:00 AM – 5:00 PM (Winter) | 7:00 AM – 7:00 PM (Summer)",
    builtDate: "c. 2560 BC",
    architect: "Pharaoh Khufu (Cheops)",
    era: "Old Kingdom, 4th Dynasty",
    heightFact: "146.6m (originally)",
    visitorsFact: "14.7M visitors/year",
    ageFact: "4,500+ years old",
    videoId: "yJ4LzXO8Un4",
    videoTitle: "Explore the Great Pyramids",
    description: "The Great Pyramids of Giza are the last surviving wonder of the ancient world. Built as royal tombs during Egypt's Old Kingdom, these monumental structures have captivated humanity for over 4,500 years. The largest — the Great Pyramid of Khufu — was the tallest man-made structure on Earth for nearly 4,000 years.",
    history: "Constructed around 2560 BC during the reign of Pharaoh Khufu, the Great Pyramid was built using an estimated 2.3 million limestone blocks, each weighing an average of 2.5 tons. The precision of its construction — with sides aligned almost perfectly to the cardinal directions — continues to astonish engineers and archaeologists. The complex includes three main pyramids, the Great Sphinx, several cemeteries, a workers' village, and an industrial complex.",
    timeline: [
      {date: "c. 2580 BC", text: "Construction of the Great Pyramid of Khufu begins, employing tens of thousands of skilled workers."},
      {date: "c. 2540 BC", text: "The Pyramid of Khafre is completed, along with the iconic Great Sphinx guardian."},
      {date: "c. 2510 BC", text: "Menkaure completes the third and smallest of the three great pyramids."},
      {date: "820 AD", text: "Caliph al-Ma'mun tunnels into the Great Pyramid seeking treasure."},
      {date: "1979", text: "UNESCO designates the Giza Necropolis as a World Heritage Site."},
      {date: "2023", text: "The Grand Egyptian Museum opens nearby, housing Tutankhamun's treasures."}
    ],
    activities: [
      {icon: "fa-hiking", name: "Inside the Great Pyramid", desc: "Climb the narrow passage into the King's Chamber deep within the Great Pyramid of Khufu.", duration: "45 min", difficulty: "Moderate"},
      {icon: "fa-horse", name: "Camel Ride at Sunset", desc: "Experience the timeless panorama of the pyramids from camelback as the sun sets over the Sahara.", duration: "1 hour", difficulty: "Easy"},
      {icon: "fa-camera", name: "Panorama Viewpoint", desc: "Visit the famous viewpoint where all three pyramids align perfectly for an iconic photograph.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-moon", name: "Sound & Light Show", desc: "Watch the pyramids come alive with projected lights and narrated history after dark.", duration: "1.5 hrs", difficulty: "Easy"},
      {icon: "fa-museum", name: "Solar Boat Museum", desc: "See the reconstructed 4,600-year-old cedar boat of Pharaoh Khufu in its purpose-built museum.", duration: "45 min", difficulty: "Easy"},
      {icon: "fa-binoculars", name: "Sphinx Exploration", desc: "Get up close to the Great Sphinx, the 73-meter limestone statue guarding the Giza plateau.", duration: "30 min", difficulty: "Easy"}
    ],
    gallery: [
      {src: "../images/hero-pyramids.jpg", caption: "Great Pyramid of Khufu"},
      {src: "../images/sphinx.jpg", caption: "The Great Sphinx"},
      {src: "../images/hero-giza.jpg", caption: "Giza Plateau at Sunset"},
      {src: "../images/hero-pyramids-premium.jpg", caption: "Camel Ride"},
      {src: "../images/hero-pyramids.jpg", caption: "Pyramid Complex"},
      {src: "../images/hero-pyramids.jpg", caption: "Solar Boat Museum"}
    ],
    tips: [
      {icon: "🌅", title: "Arrive at 7 AM", desc: "Beat the crowds and the heat by arriving right at opening. The light is magical for photos."},
      {icon: "🐪", title: "Negotiate First", desc: "Always agree on a price before accepting a camel ride. Fair rate is $10-15 for 30 minutes."},
      {icon: "💧", title: "Bring Water", desc: "There is very little shade on the plateau. Carry at least 2 liters of water per person."},
      {icon: "👟", title: "Comfortable Shoes", desc: "The terrain is sandy and uneven. Skip the sandals and wear sturdy, closed-toe walking shoes."},
      {icon: "🎫", title: "Combo Tickets", desc: "Buy the combo ticket to enter the pyramid interior — it's limited daily and sells out early."},
      {icon: "📸", title: "Photography", desc: "Camera fees apply inside the pyramids. The best free photo spot is the Panorama Viewpoint."}
    ],
    bestMonths: {jan:"good",feb:"best",mar:"best",apr:"good",may:"avoid",jun:"avoid",jul:"avoid",aug:"avoid",sep:"avoid",oct:"best",nov:"best",dec:"good"},
    bestTimeNote: "October to March offers the most comfortable weather for exploring the plateau.",
    videoHighlights: ["4,500 years of history", "Last surviving Ancient Wonder", "Iconic sunset camel rides", "Mysterious interior chambers"],
    related: [
      {id: "sphinx", name: "The Great Sphinx", city: "Cairo", img: "../images/sphinx.jpg", rating: "4.9"},
      {id: "egyptian-museum", name: "Egyptian Museum", city: "Cairo", img: "../images/grand_egyptian_museum.jpg", rating: "4.8"},
      {id: "khan-el-khalili", name: "Khan El Khalili", city: "Cairo", img: "../images/gallery-cairo-khan.jpg", rating: "4.6"}
    ]
  },
  {
    id: "sphinx",
    name: "The Great Sphinx",
    subtitle: "The Enigmatic Guardian of the Giza Plateau",
    badge: "Iconic Landmark",
    badgeIcon: "monument",
    city: "Cairo",
    cityPage: "cairo.html",
    heroImg: "../images/sphinx.jpg",
    rating: "4.9",
    reviewCount: "35,800",
    duration: "1-2 hours",
    price: "Included",
    priceDetail: "With Giza ticket",
    location: "Giza Plateau, Giza Governorate",
    openHours: "7:00 AM – 5:00 PM",
    builtDate: "c. 2500 BC",
    architect: "Pharaoh Khafre",
    era: "Old Kingdom, 4th Dynasty",
    heightFact: "20m tall",
    visitorsFact: "Part of Giza Complex",
    ageFact: "4,500+ years old",
    videoId: "yJ4LzXO8Un4",
    videoTitle: "The Mystery of the Sphinx",
    description: "The Great Sphinx of Giza is the largest monolith statue in the world. With the body of a lion and the head of a human, this 73-meter-long guardian has watched over the Giza Necropolis for millennia, its enigmatic smile hiding secrets that archaeologists still debate today.",
    history: "Carved from a single mass of limestone bedrock on the Giza plateau, the Sphinx is believed to represent Pharaoh Khafre, whose pyramid stands directly behind it. The statue was buried up to its shoulders in sand for most of its existence, protected by the desert. Napoleon's soldiers did NOT shoot off the nose — historical drawings show it was already missing by the 14th century. The Dream Stele between its paws tells the story of Thutmose IV, who freed the Sphinx from sand and was rewarded with the throne of Egypt.",
    timeline: [
      {date: "c. 2500 BC", text: "The Sphinx is carved from the Giza bedrock, likely during Pharaoh Khafre's reign."},
      {date: "c. 1400 BC", text: "Pharaoh Thutmose IV clears sand from the Sphinx and erects the Dream Stele."},
      {date: "14th century", text: "The Sphinx's nose is destroyed, possibly by a Sufi zealot."},
      {date: "1817", text: "Giovanni Battista Caviglia conducts the first modern excavation."},
      {date: "1936", text: "Émile Baraize completes full excavation, revealing the Sphinx's full body."},
      {date: "1998", text: "Major restoration project completed, preserving the limestone surface."}
    ],
    activities: [
      {icon: "fa-camera", name: "Classic Photo Op", desc: "Capture the iconic photo of the Sphinx with Khafre's pyramid perfectly aligned behind it.", duration: "20 min", difficulty: "Easy"},
      {icon: "fa-search", name: "Dream Stele Visit", desc: "Read the ancient stele between the Sphinx's paws that tells the story of Pharaoh Thutmose IV's dream.", duration: "15 min", difficulty: "Easy"},
      {icon: "fa-moon", name: "Sound & Light Show", desc: "The Sphinx narrates Egypt's history in a dramatic sound and light performance each evening.", duration: "1.5 hrs", difficulty: "Easy"},
      {icon: "fa-hiking", name: "Valley Temple Walk", desc: "Explore the Valley Temple of Khafre adjacent to the Sphinx, with massive granite pillars.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-sun", name: "Sunrise Viewing", desc: "Watch the Sphinx bathed in golden light as the sun rises over Cairo.", duration: "1 hr", difficulty: "Easy"},
      {icon: "fa-map", name: "Full Plateau Tour", desc: "Combine with a walking tour of the entire Giza Necropolis for the complete experience.", duration: "4 hrs", difficulty: "Moderate"}
    ],
    gallery: [
      {src: "../images/sphinx.jpg", caption: "The Great Sphinx"},
      {src: "../images/hero-pyramids.jpg", caption: "Sphinx and Pyramids"},
      {src: "../images/hero-giza.jpg", caption: "Giza Plateau View"},
      {src: "../images/hero-pyramids.jpg", caption: "Sphinx at Dusk"},
      {src: "../images/hero-pyramids-premium.jpg", caption: "Desert Panorama"},
      {src: "../images/hero-pyramids.jpg", caption: "Giza Complex"}
    ],
    tips: [
      {icon: "📸", title: "Best Photo Angle", desc: "The most iconic angle is from the southeast, where the Sphinx aligns with Khafre's Pyramid."},
      {icon: "🌅", title: "Visit at Sunrise", desc: "The Sphinx faces east — sunrise bathes it in golden light with no crowds."},
      {icon: "🎟️", title: "Included Entry", desc: "Access is included with the general Giza Plateau ticket — no separate fee needed."},
      {icon: "🚶", title: "Walking Distance", desc: "It's a 10-minute walk from the main pyramid area. Wear comfortable shoes on sandy terrain."},
      {icon: "🌙", title: "Night Show", desc: "The Sound & Light Show uses the Sphinx as narrator — book tickets online in advance."},
      {icon: "🧴", title: "Sun Protection", desc: "There is zero shade near the Sphinx. Bring sunscreen, a hat, and plenty of water."}
    ],
    bestMonths: {jan:"good",feb:"best",mar:"best",apr:"good",may:"avoid",jun:"avoid",jul:"avoid",aug:"avoid",sep:"avoid",oct:"best",nov:"best",dec:"good"},
    bestTimeNote: "October to March for comfortable temperatures. Sunrise visits year-round are magical.",
    videoHighlights: ["World's largest monolith statue", "4,500 years of silent watch", "Enigmatic missing nose mystery", "Dramatic Sound & Light Show"],
    related: [
      {id: "pyramids-of-giza", name: "Pyramids of Giza", city: "Cairo", img: "../images/hero-pyramids.jpg", rating: "4.9"},
      {id: "egyptian-museum", name: "Egyptian Museum", city: "Cairo", img: "../images/grand_egyptian_museum.jpg", rating: "4.8"},
      {id: "luxor-temple", name: "Luxor Temple", city: "Luxor", img: "../images/luxor temple.jpg", rating: "4.7"}
    ]
  },
  {
    id: "edfu-temple",
    name: "Edfu Temple",
    subtitle: "The Most Perfectly Preserved Temple of Ancient Egypt",
    badge: "Ptolemaic Masterpiece",
    badgeIcon: "gopuram",
    city: "Luxor",
    cityPage: "luxor.html",
    heroImg: "../images/Edfu-temple.jpg",
    rating: "4.9",
    reviewCount: "18,400",
    duration: "2-3 hours",
    price: "$15",
    priceDetail: "Adult entry",
    location: "West Bank of the Nile, Edfu",
    openHours: "7:00 AM – 5:00 PM",
    builtDate: "237 BC – 57 BC",
    architect: "Ptolemaic Builders",
    era: "Ptolemaic Kingdom",
    heightFact: "36m high pylons",
    visitorsFact: "2M+ visitors/year",
    ageFact: "2,000+ years old",
    videoId: "SvxWvnhHYV8",
    videoTitle: "The Splendor of Edfu Temple",
    description: "Dedicated to the falcon god Horus, Edfu Temple is the most intact ancient temple in Egypt. Built during the Ptolemaic era, its massive entrance pylons, hyperstyle halls, and inner sanctuaries remain almost completely undamaged, offering a perfect window into ancient Egyptian temple architecture and rituals.",
    history: "Construction began in 237 BC under Ptolemy III Euergetes and was completed in 57 BC under Ptolemy XII. The temple is built on the site of an earlier, smaller temple. Over the centuries, it was buried under 12 meters of desert sand and silt from Nile floods, which preserved it perfectly until it was excavated by French archaeologist Auguste Mariette in the 1860s.",
    timeline: [
      {date: "237 BC", text: "Ptolemy III begins construction of the main temple building."},
      {date: "212 BC", text: "Construction is temporarily halted due to local rebellions in Upper Egypt."},
      {date: "142 BC", text: "The inner hall and sanctuaries are completed and decorated with reliefs."},
      {date: "57 BC", text: "The massive entrance pylons are completed, marking the end of 180 years of construction."},
      {date: "1860", text: "Auguste Mariette begins excavating the temple from the sand and village ruins built atop it."},
      {date: "2010", text: "A new visitor center and lighting system are installed for night sightseeing."}
    ],
    activities: [
      {icon: "fa-columns", name: "Hypostyle Hall", desc: "Walk through the grand court and enter the columned hall, with 12 massive columns decorated with floral capitals.", duration: "45 min", difficulty: "Easy"},
      {icon: "fa-falcon", name: "Horus Falcon Statues", desc: "Marvel at the giant black granite statues of the falcon god Horus guarding the main temple entrance.", duration: "15 min", difficulty: "Easy"},
      {icon: "fa-dungeon", name: "Holy of Holies", desc: "Explore the dark, innermost sanctuary containing a rare polished granite naos (shrine) for the sacred boat.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-history", name: "Battle Reliefs", desc: "Study the detailed wall carvings depicting the mythical battle between Horus and Seth (as a hippopotamus).", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-horse", name: "Horse Carriage Ride", desc: "Arrive from the Nile cruise ship dock via a traditional horse-drawn carriage through the streets of Edfu.", duration: "20 min", difficulty: "Easy"},
      {icon: "fa-search", name: "Birth House (Mammisi)", desc: "Visit the surrounding colonnaded Mammisi, where the divine birth of Horus was celebrated.", duration: "30 min", difficulty: "Easy"}
    ],
    gallery: [
      {src: "../images/Edfu-temple.jpg", caption: "Edfu Temple Entrance Pylon"},
      {src: "../images/gallery-luxor-temple.jpg", caption: "Falcon Statue of Horus"},
      {src: "../images/luxor temple.jpg", caption: "Inner Sanctuary Shrine"},
      {src: "../Real Moments/PHOTO-2026-01-19-20-26-36(3).jpg", caption: "Ptolemaic Columns"},
      {src: "../images/gallery-luxor-balloons.jpg", caption: "Temple Courtyard"},
      {src: "../images/gallery-luxor-temple.jpg", caption: "Wall Carvings"}
    ],
    tips: [
      {icon: "🐴", title: "Carriage Rides", desc: "If visiting from a cruise, the horse carriage is included in your tour. Hold on tight as the drivers go fast."},
      {icon: "🌅", title: "Visit Early", desc: "Edfu gets crowded when cruise ships arrive. Visiting at 7 AM opening avoids the large tour groups."},
      {icon: "🔦", title: "Bring a Flashlight", desc: "Some of the inner chambers and corridors have limited lighting, revealing beautiful soot-blackened ceilings."},
      {icon: "🧴", title: "Stay Cool", desc: "Although the temple interior is shady and relatively cool, the open courtyard is very sunny and hot."},
      {icon: "📖", title: "Hire a Guide", desc: "The inscriptions explain the Opet-like festivals and temple rituals — a guide is essential to interpret them."},
      {icon: "🎫", title: "Ticket office", desc: "The ticket office is located at the modern visitor center near the main parking area."}
    ],
    bestMonths: {jan:"best",feb:"best",mar:"good",apr:"good",may:"avoid",jun:"avoid",jul:"avoid",aug:"avoid",sep:"avoid",oct:"good",nov:"best",dec:"best"},
    bestTimeNote: "November to February. Early mornings are best to beat the cruise ship crowds.",
    videoHighlights: ["Falcon statues of Horus", "36-meter-high pylons", "Exquisitely preserved Ptolemaic reliefs", "Hidden inner sanctuary"],
    related: [
      {id: "luxor-temple", name: "Luxor Temple", city: "Luxor", img: "../images/luxor temple.jpg", rating: "4.7"},
      {id: "hatshepsut-temple", name: "Temple of Hatshepsut", city: "Luxor", img: "../images/Hatshepsut.jpg", rating: "4.7"},
      {id: "nile-cruises", name: "Nile Cruises", city: "Luxor-Aswan", img: "../images/nile-cruise.png", rating: "4.8"}
    ]
  },
  {
    id: "luxor-temple",
    name: "Luxor Temple",
    subtitle: "The Temple of Living Kings",
    badge: "UNESCO Heritage",
    badgeIcon: "landmark",
    city: "Luxor",
    cityPage: "luxor.html",
    heroImg: "../images/gallery-luxor-temple.jpg",
    rating: "4.7",
    reviewCount: "28,400",
    duration: "1-2 hours",
    price: "$10",
    priceDetail: "Adult entry",
    location: "Corniche El Nile, East Bank, Luxor",
    openHours: "6:00 AM – 9:00 PM",
    builtDate: "c. 1400 BC",
    architect: "Amenhotep III & Ramesses II",
    era: "New Kingdom, 18th-19th Dynasty",
    heightFact: "25m tall obelisk",
    visitorsFact: "3M+ visitors/year",
    ageFact: "3,400+ years old",
    videoId: "SvxWvnhHYV8",
    videoTitle: "Luxor Temple After Dark",
    description: "Unlike other Egyptian temples dedicated to gods, Luxor Temple was built to celebrate the rejuvenation of kingship. Situated right on the banks of the Nile in the heart of modern Luxor, the temple is uniquely stunning when illuminated at night, its massive columns and statues glowing golden against the dark sky.",
    history: "Largely built by Amenhotep III and Ramesses II during the New Kingdom, Luxor Temple served as the site of the annual Opet Festival, when statues of Amun, Mut, and Khonsu were paraded from Karnak to Luxor Temple. Alexander the Great later added a shrine, and a 14th-century mosque was built atop its ruins. The Avenue of Sphinxes that connects it to Karnak was reopened in 2021 after decades of excavation.",
    timeline: [
      {date: "c. 1400 BC", text: "Amenhotep III begins construction of the temple's inner sanctum and colonnade."},
      {date: "c. 1279 BC", text: "Ramesses II adds the massive pylon entrance, colossal statues, and obelisks."},
      {date: "332 BC", text: "Alexander the Great builds a chapel inside the temple's inner sanctum."},
      {date: "14th century", text: "Abu al-Haggag Mosque is built atop the buried temple courtyard."},
      {date: "1884", text: "Gaston Maspero begins excavating the temple from centuries of accumulated sediment."},
      {date: "2021", text: "The Avenue of Sphinxes to Karnak Temple is reopened in a grand ceremony."}
    ],
    activities: [
      {icon: "fa-moon", name: "Night Visit", desc: "The temple is open until 9 PM — the illuminated columns at night are truly magical.", duration: "1.5 hrs", difficulty: "Easy"},
      {icon: "fa-monument", name: "Ramesses Statues", desc: "Marvel at the massive seated statues of Ramesses II flanking the entrance pylon.", duration: "20 min", difficulty: "Easy"},
      {icon: "fa-route", name: "Avenue of Sphinxes", desc: "Walk the restored 2.7km ceremonial route connecting Luxor Temple to Karnak.", duration: "1 hr", difficulty: "Moderate"},
      {icon: "fa-mosque", name: "Abu al-Haggag Mosque", desc: "See the unique mosque perched atop the ancient temple walls — a fusion of eras.", duration: "15 min", difficulty: "Easy"},
      {icon: "fa-columns", name: "Colonnade Hall", desc: "Walk through the stunning colonnade of Amenhotep III with towering papyrus columns.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-camera", name: "Obelisk Photo", desc: "Photograph the remaining obelisk — its twin now stands in Place de la Concorde, Paris.", duration: "15 min", difficulty: "Easy"}
    ],
    gallery: [
      {src: "../images/gallery-luxor-temple.jpg", caption: "Luxor Temple at Night"},
      {src: "../images/luxor temple.jpg", caption: "Temple Approach"},
      {src: "../images/gallery-luxor-temple.jpg", caption: "Hypostyle Columns"},
      {src: "../Real Moments/PHOTO-2026-01-19-20-26-36(3).jpg", caption: "Ancient Reliefs"},
      {src: "../images/Edfu-temple.jpg", caption: "Nile & Temple"},
      {src: "../images/gallery-luxor-temple.jpg", caption: "Temple Detail"}
    ],
    tips: [
      {icon: "🌙", title: "Visit at Night", desc: "The illuminated temple is one of Egypt's most magical experiences. Open until 9 PM."},
      {icon: "🏛️", title: "Combine with Karnak", desc: "Do Karnak in the morning and Luxor Temple in the evening for the perfect day."},
      {icon: "🕌", title: "Mosque Note", desc: "The Abu al-Haggag Mosque is still active — be respectful during prayer times."},
      {icon: "📷", title: "Photo Tip", desc: "The courtyard of Ramesses II is most photogenic just after sunset with the lights on."},
      {icon: "🚶", title: "Avenue Walk", desc: "Walk the Avenue of Sphinxes in the evening when the sphinx statues are illuminated."},
      {icon: "🎫", title: "Separate Ticket", desc: "Entry to Luxor Temple requires a separate ticket from Karnak. Luxor Pass covers both."}
    ],
    bestMonths: {jan:"best",feb:"best",mar:"good",apr:"good",may:"avoid",jun:"avoid",jul:"avoid",aug:"avoid",sep:"avoid",oct:"good",nov:"best",dec:"best"},
    bestTimeNote: "November to February. Evening visits are magical year-round thanks to night illumination.",
    videoHighlights: ["Stunning night illumination", "Avenue of Sphinxes connection", "3,400 years of history", "Mosque atop ancient temple"],
    related: [
      {id: "edfu-temple", name: "Edfu Temple", city: "Luxor", img: "../images/Edfu-temple.jpg", rating: "4.9"},
      {id: "hatshepsut-temple", name: "Temple of Hatshepsut", city: "Luxor", img: "../images/Hatshepsut.jpg", rating: "4.7"},
      {id: "pyramids-of-giza", name: "Pyramids of Giza", city: "Cairo", img: "../images/hero-pyramids.jpg", rating: "4.9"}
    ]
  },
  {
    id: "hatshepsut-temple",
    name: "Temple of Hatshepsut",
    subtitle: "The Mortuary Temple of Egypt's Famous Female Pharaoh",
    badge: "UNESCO Heritage",
    badgeIcon: "landmark",
    city: "Luxor",
    cityPage: "luxor.html",
    heroImg: "../images/Hatshepsut.jpg",
    rating: "4.7",
    reviewCount: "25,300",
    duration: "1-2 hours",
    price: "$10",
    priceDetail: "Adult entry",
    location: "Deir el-Bahari, West Bank, Luxor",
    openHours: "6:00 AM – 5:00 PM",
    builtDate: "c. 1479 BC",
    architect: "Senenmut",
    era: "New Kingdom, 18th Dynasty",
    heightFact: "3 terraced levels",
    visitorsFact: "3M+ visitors/year",
    ageFact: "3,400+ years old",
    videoId: "SvxWvnhHYV8",
    videoTitle: "The Temple of Hatshepsut",
    description: "The Mortuary Temple of Hatshepsut is a masterpiece of ancient classical architecture. Built against the towering cliffs of Deir el-Bahari, this terraced temple honors one of Egypt's rare female pharaohs who ruled as a king, depicting her trade expeditions and divine birth on its walls.",
    history: "Designed by the royal architect Senenmut, the temple consists of three layered terraces reaching 30 meters high, connected by long ramps and surrounded by gardens. Hatshepsut ruled for over 20 years during Egypt's golden age. After her death, her successor attempted to erase her name and images from the temple, but the architectural brilliance of the site preserved her legacy.",
    timeline: [
      {date: "c. 1479 BC", text: "Hatshepsut commissions the construction of her mortuary temple at Deir el-Bahari."},
      {date: "c. 1460 BC", text: "The temple is completed, featuring beautiful painted reliefs of the Punt expedition."},
      {date: "c. 1458 BC", text: "Thutmose III ascends the throne; later, efforts to scratch out Hatshepsut's images begin."},
      {date: "19th century", text: "Archaeologists begin excavating the temple from under deep piles of rock debris."},
      {date: "1961", text: "The Polish-Egyptian Archaeological Mission begins long-term restoration of the terraces."},
      {date: "1979", text: "The temple is inscribed as a UNESCO World Heritage Site along with ancient Thebes."}
    ],
    activities: [
      {icon: "fa-hiking", name: "Terrace Exploration", desc: "Climb the grand ramps and explore the three tiers of colonnades with statues of Hatshepsut as Osiris.", duration: "1 hr", difficulty: "Easy"},
      {icon: "fa-palette", name: "Punt Reliefs", desc: "View the famous painted reliefs depicting Hatshepsut's maritime trade expedition to the Land of Punt.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-binoculars", name: "Hathor Chapel", desc: "Explore the beautifully preserved chapel of Hathor, with columns carved with the face of the cow-headed goddess.", duration: "20 min", difficulty: "Easy"},
      {icon: "fa-sun", name: "Sunrise Views", desc: "Watch the sun rise over the Nile Valley from the temple's top terrace — a breathtaking view.", duration: "45 min", difficulty: "Easy"},
      {icon: "fa-camera", name: "Cliffside Photography", desc: "Photograph the striking symmetry of the temple juxtaposed against the rugged desert cliffs.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-road", name: "Valley Trail Hike", desc: "Hike the ancient path over the mountain ridge that connects the temple to the Valley of the Kings.", duration: "1.5 hrs", difficulty: "Challenging"}
    ],
    gallery: [
      {src: "../images/Hatshepsut.jpg", caption: "Temple of Hatshepsut Facade"},
      {src: "../images/gallery-luxor-temple.jpg", caption: "Colonnaded Terraces"},
      {src: "../images/gallery-luxor-balloons.jpg", caption: "Hot Air Balloon View"},
      {src: "../images/luxor temple.jpg", caption: "Statues of Hatshepsut"},
      {src: "../Real Moments/PHOTO-2026-01-19-20-26-36(3).jpg", caption: "Ancient Reliefs"},
      {src: "../images/gallery-luxor-temple.jpg", caption: "Hathor Chapel Detail"}
    ],
    tips: [
      {icon: "🌅", title: "Arrive Early", desc: "The temple gets extremely hot by midday and there is no shade on the ramps. 6-8 AM is best."},
      {icon: "🧴", title: "Sun Protection", desc: "Bring high-SPF sunscreen, a wide-brimmed hat, and sunglasses. The white limestone reflects intense light."},
      {icon: "💧", title: "Bring Water", desc: "Keep a bottle of cold water with you; there are no shops inside the archaeological area."},
      {icon: "🚶", title: "Electric Taf-Taf", desc: "A shuttle train is available to carry visitors from the parking lot to the temple gate."},
      {icon: "🎫", title: "Ticket Purchase", desc: "Buy tickets at the main visitors' center before boarding the shuttle train."},
      {icon: "📷", title: "Photography Tip", desc: "The best panoramic shot is from the parking lot approach, capturing the entire facade against the cliffs."}
    ],
    bestMonths: {jan:"best",feb:"best",mar:"good",apr:"good",may:"avoid",jun:"avoid",jul:"avoid",aug:"avoid",sep:"avoid",oct:"good",nov:"best",dec:"best"},
    bestTimeNote: "November to February. Always go early morning to avoid extreme heat.",
    videoHighlights: ["Three monumental terraced levels", "Carved into solid desert cliffs", "Reliefs of trade expeditions to Punt", "Designed by architect Senenmut"],
    related: [
      {id: "luxor-temple", name: "Luxor Temple", city: "Luxor", img: "../images/luxor temple.jpg", rating: "4.7"},
      {id: "edfu-temple", name: "Edfu Temple", city: "Luxor", img: "../images/Edfu-temple.jpg", rating: "4.9"},
      {id: "nile-cruises", name: "Nile Cruises", city: "Luxor-Aswan", img: "../images/nile-cruise.png", rating: "4.8"}
    ]
  },
  {
    id: "abu-simbel",
    name: "Abu Simbel",
    subtitle: "The Colossal Sun Temple of Ramesses the Great",
    badge: "UNESCO Heritage",
    badgeIcon: "landmark",
    city: "Aswan",
    cityPage: "aswan.html",
    heroImg: "../images/attr-abu-simbel.jpg",
    rating: "4.9",
    reviewCount: "22,800",
    duration: "Full Day",
    price: "$60",
    priceDetail: "Incl. transport",
    location: "Abu Simbel, Aswan Governorate",
    openHours: "5:00 AM – 6:00 PM",
    builtDate: "c. 1264 BC",
    architect: "Ramesses II",
    era: "New Kingdom, 19th Dynasty",
    heightFact: "20m tall statues",
    visitorsFact: "1.5M+ visitors/year",
    ageFact: "3,280+ years old",
    videoId: "z2YPnEPuqSk",
    videoTitle: "The Temples of Abu Simbel",
    description: "Abu Simbel is the most awe-inspiring temple in all of Egypt. Four colossal statues of Ramesses II, each standing 20 meters tall, guard the entrance to a temple carved entirely into a mountain cliff face. Twice a year, the rising sun illuminates the inner sanctum in a phenomenon aligned by its ancient builders.",
    history: "Carved into the mountainside during the reign of Ramesses II (c. 1264 BC), Abu Simbel was designed to intimidate Egypt's southern neighbors and to commemorate Ramesses' victory at the Battle of Kadesh. In the 1960s, the entire temple complex was cut into blocks and relocated 65 meters higher to save it from flooding caused by the Aswan High Dam. This UNESCO-led rescue operation remains one of the greatest engineering feats of the 20th century.",
    timeline: [
      {date: "c. 1264 BC", text: "Ramesses II commissions the twin temples to be carved into the solid rock cliff."},
      {date: "c. 1244 BC", text: "The temples are completed after 20 years of construction by thousands of workers."},
      {date: "1813", text: "Swiss explorer Johann Ludwig Burckhardt discovers the sand-buried temples."},
      {date: "1817", text: "Giovanni Belzoni clears the entrance and becomes the first modern person to enter."},
      {date: "1964-1968", text: "UNESCO engineers cut the temple into 1,036 blocks and relocate it to higher ground."},
      {date: "Twice yearly", text: "The Sun Festival: sunlight penetrates 60m to illuminate statues in the inner sanctum."}
    ],
    activities: [
      {icon: "fa-monument", name: "Great Temple Entry", desc: "Walk into the mountain temple of Ramesses II, passing chambers covered in battle scenes.", duration: "1 hr", difficulty: "Easy"},
      {icon: "fa-crown", name: "Nefertari's Temple", desc: "Visit the adjacent temple dedicated to Queen Nefertari, adorned with beautiful reliefs.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-sun", name: "Sun Festival", desc: "Witness the solar alignment on Feb 22 or Oct 22 when sunlight illuminates the inner sanctum.", duration: "Special", difficulty: "Easy"},
      {icon: "fa-camera", name: "Lakeside Photos", desc: "Capture the temples reflected in Lake Nasser for stunning mirror-image photographs.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-moon", name: "Sound & Light Show", desc: "Experience the temples illuminated with dramatic narrated projections at night.", duration: "1 hr", difficulty: "Easy"},
      {icon: "fa-ship", name: "Lake Nasser Cruise", desc: "Arrive in style via a multi-day luxury cruise across Lake Nasser.", duration: "Multi-day", difficulty: "Easy"}
    ],
    gallery: [
      {src: "../images/attr-abu-simbel.jpg", caption: "Abu Simbel Facade"},
      {src: "../images/hero-aswan.jpg", caption: "Aswan Landscape"},
      {src: "../images/attr-aswan-high-dam.jpg", caption: "Aswan High Dam"},
      {src: "../images/hero-aswan.jpg", caption: "Nile Felucca"},
      {src: "../images/gallery-aswan-philae.jpg", caption: "Philae Temple"},
      {src: "../images/gallery-aswan-nubian.jpg", caption: "Nubian Village"}
    ],
    tips: [
      {icon: "🚌", title: "3:30 AM Convoy", desc: "Most visitors join the organized convoy from Aswan departing at 3:30 AM. It's a 3-hour drive."},
      {icon: "✈️", title: "Fly Instead", desc: "EgyptAir operates 45-minute flights from Aswan — less exhausting than the convoy drive."},
      {icon: "🌞", title: "Sun Festival", desc: "Feb 22 & Oct 22 are the Sun Festivals — book months in advance as it's packed."},
      {icon: "💧", title: "Bring Everything", desc: "No shops nearby. Bring water, snacks, sunscreen, and a hat. It's remote desert."},
      {icon: "📸", title: "Best Photo Time", desc: "The facade faces east — morning light is ideal. The lakeside view at dawn is breathtaking."},
      {icon: "🛳️", title: "Lake Nasser Cruise", desc: "Consider a luxury Lake Nasser cruise that stops at Abu Simbel for a unique approach."}
    ],
    bestMonths: {jan:"good",feb:"best",mar:"good",apr:"good",may:"avoid",jun:"avoid",jul:"avoid",aug:"avoid",sep:"avoid",oct:"best",nov:"best",dec:"good"},
    bestTimeNote: "October to March. February 22 and October 22 are the Sun Festival dates.",
    videoHighlights: ["20-meter colossal statues", "UNESCO relocation miracle", "Solar alignment phenomenon", "Nefertari's beautiful temple"],
    related: [
      {id: "edfu-temple", name: "Edfu Temple", city: "Luxor", img: "../images/Edfu-temple.jpg", rating: "4.9"},
      {id: "hatshepsut-temple", name: "Temple of Hatshepsut", city: "Luxor", img: "../images/Hatshepsut.jpg", rating: "4.7"},
      {id: "luxor-temple", name: "Luxor Temple", city: "Luxor", img: "../images/luxor temple.jpg", rating: "4.7"}
    ]
  },
  {
    id: "khan-el-khalili",
    name: "Khan El Khalili",
    subtitle: "Cairo's Legendary Medieval Bazaar",
    badge: "Cultural Heritage",
    badgeIcon: "store",
    city: "Cairo",
    cityPage: "cairo.html",
    heroImg: "../images/gallery-cairo-khan.jpg",
    rating: "4.6",
    reviewCount: "18,900",
    duration: "2-4 hours",
    price: "Free",
    priceDetail: "Free entry",
    location: "Al-Azhar, Islamic Cairo",
    openHours: "10:00 AM – 11:00 PM (Shops vary)",
    builtDate: "1382 AD",
    architect: "Emir Djaharks el-Khalili",
    era: "Mamluk Period",
    heightFact: "600+ years old",
    visitorsFact: "30M+ visitors/year",
    ageFact: "Egypt's oldest souk",
    videoId: "yJ4LzXO8Un4",
    videoTitle: "The Magic of Khan El Khalili",
    description: "Khan El Khalili is one of the oldest and most iconic bazaars in the Middle East. Founded in 1382 during the Mamluk era, this labyrinthine marketplace is a sensory explosion of colors, sounds, and scents. From handcrafted gold jewelry to aromatic spices, every alley holds a treasure waiting to be discovered.",
    history: "Built by Emir Djaharks el-Khalili as a caravanserai — a medieval inn for traveling merchants — the bazaar quickly became the commercial heart of Cairo. For over six centuries, it has been the center of Egyptian craft and trade. The famous El Fishawi café, established in 1773, has been serving tea and shisha without closing for over 250 years. Today, the bazaar sits in the heart of Islamic Cairo, surrounded by stunning medieval architecture.",
    timeline: [
      {date: "1382 AD", text: "Emir Djaharks el-Khalili establishes the original caravanserai."},
      {date: "1511", text: "Sultan al-Ghuri expands the bazaar with new covered marketplaces."},
      {date: "1773", text: "El Fishawi café opens and has been serving continuously for 250+ years."},
      {date: "19th century", text: "The bazaar becomes a major tourist destination during the age of Grand Tours."},
      {date: "1956", text: "Nobel laureate Naguib Mahfouz sets many of his novels in the bazaar's alleys."},
      {date: "Present", text: "Still the beating heart of Cairo's traditional commerce and craft culture."}
    ],
    activities: [
      {icon: "fa-shopping-bag", name: "Souvenir Shopping", desc: "Browse handcrafted jewelry, papyrus art, alabaster, brass lanterns, and traditional textiles.", duration: "2+ hrs", difficulty: "Easy"},
      {icon: "fa-coffee", name: "El Fishawi Café", desc: "Sip mint tea and smoke shisha at the 250-year-old café where Mahfouz wrote his novels.", duration: "1 hr", difficulty: "Easy"},
      {icon: "fa-pepper-hot", name: "Spice Alley", desc: "Explore the aromatic spice market with colorful mountains of saffron, cumin, and hibiscus.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-gem", name: "Gold & Silver Souk", desc: "Discover traditional Egyptian gold and silver jewelry in the dedicated precious metals section.", duration: "45 min", difficulty: "Easy"},
      {icon: "fa-mosque", name: "Al-Azhar Mosque", desc: "Visit the adjacent Al-Azhar Mosque, one of the world's oldest universities founded in 970 AD.", duration: "45 min", difficulty: "Easy"},
      {icon: "fa-utensils", name: "Street Food Tour", desc: "Try koshari, ful, falafel, and fresh juice from the food stalls surrounding the bazaar.", duration: "1 hr", difficulty: "Easy"}
    ],
    gallery: [
      {src: "../images/gallery-cairo-khan.jpg", caption: "Khan El Khalili Entrance"},
      {src: "../images/gallery-cairo-mosque.jpg", caption: "Islamic Cairo Streets"},
      {src: "../images/Al-Azhar-Mosque.jpg", caption: "Al-Azhar Mosque"},
      {src: "../images/hero-cairo.jpg", caption: "Cairo Cityscape"},
      {src: "../images/gallery-cairo-khan.jpg", caption: "Evening Markets"},
      {src: "../images/khan el khalili.jpg", caption: "Street Food Scene"}
    ],
    tips: [
      {icon: "💰", title: "Bargain Hard", desc: "Start at 40% of the asking price and negotiate up. Bargaining is expected and enjoyed."},
      {icon: "🕐", title: "Go in the Evening", desc: "The bazaar comes alive after sunset. Evening visits are more atmospheric and cooler."},
      {icon: "👜", title: "Watch Belongings", desc: "Keep valuables in a front pocket or body bag. The narrow alleys can get very crowded."},
      {icon: "🍵", title: "Accept Tea", desc: "When a shopkeeper offers tea, accepting is polite and part of the shopping experience."},
      {icon: "🕌", title: "Visit Al-Azhar", desc: "The mosque next door is free to enter and provides a tranquil escape from the crowds."},
      {icon: "📸", title: "Photography", desc: "Ask permission before photographing shopkeepers. The lantern shops are the most photogenic."}
    ],
    bestMonths: {jan:"good",feb:"good",mar:"good",apr:"good",may:"good",jun:"good",jul:"good",aug:"good",sep:"good",oct:"best",nov:"best",dec:"best"},
    bestTimeNote: "Open year-round. Evening visits are most atmospheric. Cooler months (Oct-Mar) are most comfortable.",
    videoHighlights: ["600+ years of continuous trade", "El Fishawi's 250-year-old café", "Master artisan workshops", "Legendary spice market"],
    related: [
      {id: "egyptian-museum", name: "Egyptian Museum", city: "Cairo", img: "../images/grand_egyptian_museum.jpg", rating: "4.8"},
      {id: "pyramids-of-giza", name: "Pyramids of Giza", city: "Cairo", img: "../images/hero-pyramids.jpg", rating: "4.9"},
      {id: "nile-cruises", name: "Nile Dinner Cruise", city: "Cairo", img: "../images/Cairo-Dinner-Cruise-Egypt-Tours-Portal.jpg", rating: "4.4"}
    ]
  },
  {
    id: "egyptian-museum",
    name: "Egyptian Museum",
    subtitle: "The World's Greatest Collection of Pharaonic Antiquities",
    badge: "Cultural Icon",
    badgeIcon: "museum",
    city: "Cairo",
    cityPage: "cairo.html",
    heroImg: "../images/grand_egyptian_museum.jpg",
    rating: "4.8",
    reviewCount: "38,500",
    duration: "2-4 hours",
    price: "$15",
    priceDetail: "Adult entry",
    location: "Tahrir Square, Downtown Cairo",
    openHours: "9:00 AM – 5:00 PM",
    builtDate: "1902 (Museum opened)",
    architect: "Marcel Dourgnon",
    era: "Collection spans 5,000 years",
    heightFact: "120,000+ artifacts",
    visitorsFact: "7M+ visitors/year",
    ageFact: "Home of Tutankhamun's treasures",
    videoId: "yJ4LzXO8Un4",
    videoTitle: "Inside the Egyptian Museum",
    description: "The Egyptian Museum in Cairo houses the world's most comprehensive collection of pharaonic antiquities. With over 120,000 artifacts spanning 5,000 years of Egyptian history, it includes the legendary golden treasures of Tutankhamun, the Royal Mummies Hall, and countless masterpieces of ancient art and craftsmanship.",
    history: "The museum was established in 1858 by French Egyptologist Auguste Mariette and moved to its current iconic pink building in Tahrir Square in 1902. For over a century, it has been the definitive home of Egyptian antiquities. While many exhibits are now being transferred to the new Grand Egyptian Museum near the Pyramids of Giza, the original museum remains open and retains thousands of important artifacts.",
    timeline: [
      {date: "1858", text: "Auguste Mariette establishes the Egyptian Antiquities Service and the first museum in Boulaq."},
      {date: "1902", text: "The current museum building opens in Tahrir Square, designed by Marcel Dourgnon."},
      {date: "1922", text: "Tutankhamun's treasures arrive following Howard Carter's discovery in the Valley of the Kings."},
      {date: "1989", text: "The Royal Mummies are moved to a dedicated hall inside the museum."},
      {date: "2011", text: "During the revolution, some artifacts are damaged but most are quickly restored."},
      {date: "2023", text: "Many key artifacts begin transfer to the new Grand Egyptian Museum at Giza."}
    ],
    activities: [
      {icon: "fa-crown", name: "Tutankhamun Gallery", desc: "See the iconic golden mask, throne, and jewelry of the boy king — the most famous artifacts in Egyptology.", duration: "1 hr", difficulty: "Easy"},
      {icon: "fa-skull", name: "Royal Mummies Hall", desc: "Stand face-to-face with the 3,000-year-old preserved bodies of Egypt's greatest pharaohs.", duration: "45 min", difficulty: "Easy"},
      {icon: "fa-scroll", name: "Ancient Papyri", desc: "View rare papyrus documents including the Book of the Dead and ancient medical texts.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-palette", name: "Art of Amarna", desc: "Explore the revolutionary art style of Pharaoh Akhenaten and the beautiful bust of Nefertiti.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-gem", name: "Royal Jewelry Collection", desc: "Admire exquisite gold and gem-encrusted jewelry spanning multiple dynasties.", duration: "30 min", difficulty: "Easy"},
      {icon: "fa-map", name: "Guided Tour", desc: "Book an expert guide to navigate the vast collection and learn the stories behind the artifacts.", duration: "2 hrs", difficulty: "Easy"}
    ],
    gallery: [
      {src: "../images/grand_egyptian_museum.jpg", caption: "Grand Egyptian Museum"},
      {src: "../images/The-Grand-Egyptian-Museum.jpg", caption: "GEM Birdseye View"},
      {src: "../images/The-Grand-Egyptian-Museum.jpg", caption: "Grand Egyptian Museum Facade"},
      {src: "../images/hero-pyramids.jpg", caption: "Ancient Treasures"},
      {src: "../images/gallery-cairo-mosque.jpg", caption: "Historic Quarter"},
      {src: "../images/gallery-cairo-khan.jpg", caption: "Khan El Khalili"}
    ],
    tips: [
      {icon: "🎫", title: "Extra Fees", desc: "The Royal Mummies Hall and Tutankhamun gallery require additional paid tickets."},
      {icon: "📷", title: "Camera Fee", desc: "Photography is allowed but requires an additional camera ticket. No flash permitted."},
      {icon: "⏰", title: "Morning Visit", desc: "Arrive at opening for a quieter experience. Tour groups arrive after 10 AM."},
      {icon: "🏛️", title: "Grand Egyptian Museum", desc: "Many treasures are moving to the new GEM near Giza — check what's currently on display."},
      {icon: "🧳", title: "Bag Storage", desc: "Large bags must be checked at the entrance. Bring minimal belongings."},
      {icon: "👨‍🏫", title: "Get a Guide", desc: "The museum lacks modern signage. A guide makes the collection 10x more meaningful."}
    ],
    bestMonths: {jan:"best",feb:"best",mar:"best",apr:"best",may:"best",jun:"best",jul:"best",aug:"best",sep:"best",oct:"best",nov:"best",dec:"best"},
    bestTimeNote: "Indoor museum — comfortable year-round. Mornings are least crowded.",
    videoHighlights: ["120,000+ ancient artifacts", "Tutankhamun's golden mask", "Royal Mummies face-to-face", "5,000 years of history"],
    related: [
      {id: "khan-el-khalili", name: "Khan El Khalili", city: "Cairo", img: "../images/gallery-cairo-khan.jpg", rating: "4.6"},
      {id: "pyramids-of-giza", name: "Pyramids of Giza", city: "Cairo", img: "../images/hero-pyramids.jpg", rating: "4.9"},
      {id: "luxor-temple", name: "Luxor Temple", city: "Luxor", img: "../images/luxor temple.jpg", rating: "4.7"}
    ]
  },
  {
    id: "nile-cruises",
    name: "Nile Cruises",
    subtitle: "Sail Through 5,000 Years of History",
    badge: "Signature Experience",
    badgeIcon: "ship",
    city: "Luxor-Aswan",
    cityPage: "luxor.html",
    heroImg: "../images/nile-cruise.png",
    rating: "4.8",
    reviewCount: "26,300",
    duration: "3-7 Days",
    price: "$350+",
    priceDetail: "Per person (3-night)",
    location: "Luxor to Aswan (or reverse)",
    openHours: "Year-round departures",
    builtDate: "Tradition since 3000 BC",
    architect: "Various luxury lines",
    era: "Ancient tradition, modern luxury",
    heightFact: "200km journey",
    visitorsFact: "500+ cruise ships",
    ageFact: "5,000-year-old tradition",
    videoId: "SvxWvnhHYV8",
    videoTitle: "Sailing the Ancient Nile",
    description: "A Nile cruise between Luxor and Aswan is the quintessential Egypt experience. Glide along the same waters that carried the pharaohs' barges, stopping at ancient temples and colorful villages along the way. From the comfort of your floating hotel, watch the timeless landscape of golden sand, green palm groves, and ancient monuments unfold.",
    history: "Travel along the Nile has been central to Egyptian civilization for over 5,000 years. The pharaohs used elaborately decorated barges to travel between temples. In the 19th century, Thomas Cook pioneered luxury Nile steamship travel, popularizing Egypt as a tourist destination for European aristocrats. Today, modern cruise ships offer 5-star amenities while following the same ancient route.",
    timeline: [
      {date: "c. 3000 BC", text: "Ancient Egyptians begin using the Nile as their primary highway for trade and travel."},
      {date: "c. 1479 BC", text: "Queen Hatshepsut sends trading expeditions down the Nile to the land of Punt."},
      {date: "1869", text: "Thomas Cook organizes the first modern Nile cruise for paying tourists."},
      {date: "1920s", text: "Agatha Christie writes 'Death on the Nile' inspired by her own Nile cruise."},
      {date: "2000s", text: "Luxury dahabiya (traditional sailing boats) cruises become a premium alternative."},
      {date: "Present", text: "Over 500 cruise ships operate the Luxor-Aswan route, from budget to ultra-luxury."}
    ],
    activities: [
      {icon: "fa-ship", name: "5-Star Cruising", desc: "Enjoy en-suite cabins, sundeck pools, fine dining, and nightly entertainment aboard modern vessels.", duration: "Multi-day", difficulty: "Easy"},
      {icon: "fa-landmark", name: "Temple Stops", desc: "Visit Edfu's Temple of Horus and Kom Ombo's dual temple during guided shore excursions.", duration: "Varies", difficulty: "Easy"},
      {icon: "fa-wind", name: "Felucca Sailing", desc: "Opt for a traditional felucca for a more intimate, wind-powered Nile sailing experience.", duration: "2-3 hrs", difficulty: "Easy"},
      {icon: "fa-sun", name: "Sunset on Deck", desc: "Watch spectacular sunsets from the sundeck as the Nile flows past ancient villages and palm groves.", duration: "1 hr", difficulty: "Easy"},
      {icon: "fa-music", name: "Nubian Night Show", desc: "Enjoy live Nubian music and traditional dance performances aboard the cruise each evening.", duration: "2 hrs", difficulty: "Easy"},
      {icon: "fa-sailboat", name: "Dahabiya Cruise", desc: "Choose a traditional dahabiya sailing vessel for a slower, more authentic Nile journey.", duration: "4-7 days", difficulty: "Easy"}
    ],
    gallery: [
      {src: "../images/nile-cruise.png", caption: "Nile Cruise"},
      {src: "../images/hero-aswan.jpg", caption: "Nile Sailing"},
      {src: "../images/hero-aswan.jpg", caption: "Aswan Waterfront"},
      {src: "../images/gallery-luxor-temple.jpg", caption: "Luxor from the Nile"},
      {src: "../images/gallery-luxor-temple.jpg", caption: "Riverside View"},
      {src: "../images/attr-aswan-high-dam.jpg", caption: "Aswan High Dam"}
    ],
    tips: [
      {icon: "📅", title: "Book Early", desc: "Popular cruises sell out months in advance, especially during peak season (Oct-Apr)."},
      {icon: "🚢", title: "Ship Selection", desc: "Choose upper-deck cabins for better views and less engine noise."},
      {icon: "⬆️", title: "Go Upstream", desc: "Aswan-to-Luxor routes sail against the current, providing a more relaxed pace."},
      {icon: "🧳", title: "Packing", desc: "Pack smart-casual for dinner and comfortable walking shoes for temple visits."},
      {icon: "💰", title: "Tipping", desc: "Budget $5-10/day per person for crew tips. It's customary and appreciated."},
      {icon: "⛵", title: "Dahabiya Option", desc: "For a premium experience, try a traditional dahabiya — intimate and wind-powered."}
    ],
    bestMonths: {jan:"best",feb:"best",mar:"best",apr:"good",may:"good",jun:"avoid",jul:"avoid",aug:"avoid",sep:"good",oct:"best",nov:"best",dec:"best"},
    bestTimeNote: "October to April for ideal weather. December and January are peak season.",
    videoHighlights: ["5-star floating hotels", "Ancient temple excursions", "Spectacular Nile sunsets", "Traditional Nubian performances"],
    related: [
      {id: "edfu-temple", name: "Edfu Temple", city: "Luxor", img: "../images/Edfu-temple.jpg", rating: "4.9"},
      {id: "hatshepsut-temple", name: "Temple of Hatshepsut", city: "Luxor", img: "../images/Hatshepsut.jpg", rating: "4.7"},
      {id: "abu-simbel", name: "Abu Simbel", city: "Aswan", img: "../images/attr-abu-simbel.jpg", rating: "4.9"}
    ]
  },
  {
    id: "red-sea-diving",
    name: "Red Sea Diving",
    subtitle: "World-Class Underwater Paradise",
    badge: "Adventure",
    badgeIcon: "water",
    city: "Hurghada & Sharm",
    cityPage: "hurghada.html",
    heroImg: "../images/gallery-hurghada-reef.jpg",
    rating: "4.9",
    reviewCount: "45,100",
    duration: "Half - Full Day",
    price: "$40-80",
    priceDetail: "Per dive trip",
    location: "Red Sea Coast, Egypt",
    openHours: "Year-round",
    builtDate: "Ancient reefs (millions of years old)",
    architect: "Mother Nature",
    era: "World-renowned since 1950s",
    heightFact: "1,000+ species",
    visitorsFact: "2M+ divers/year",
    ageFact: "Top 5 dive destination globally",
    videoId: "L4FhWLBbiw8",
    videoTitle: "Diving the Red Sea",
    description: "The Red Sea is consistently ranked among the world's top diving destinations. Crystal-clear waters with visibility exceeding 30 meters, vibrant coral reefs hosting over 1,000 species of fish, and iconic dive sites like Ras Mohammed, the Blue Hole, and the SS Thistlegorm wreck make this an underwater paradise for both beginners and experienced divers.",
    history: "The Red Sea's coral reefs are among the oldest and most diverse marine ecosystems on Earth, with some reef formations dating back millions of years. Pioneering underwater explorer Jacques Cousteau first brought global attention to the Red Sea's wonders in the 1950s and 60s. Since then, Egypt's Red Sea coast has developed into one of the world's premier diving destinations, with hundreds of dive centers operating from Hurghada, Sharm El Sheikh, Dahab, and Marsa Alam.",
    timeline: [
      {date: "Millions of years", text: "The Red Sea's coral reef ecosystems begin forming as the sea gradually widens."},
      {date: "1941", text: "The SS Thistlegorm, a WWII cargo ship, sinks — later becoming the world's most famous wreck dive."},
      {date: "1956", text: "Jacques Cousteau films 'The Silent World' featuring Red Sea footage, sparking global interest."},
      {date: "1983", text: "Ras Mohammed is declared Egypt's first national marine park."},
      {date: "2000s", text: "Egypt becomes one of the top 5 scuba diving destinations in the world."},
      {date: "Present", text: "Conservation efforts protect marine biodiversity across designated reef reserves."}
    ],
    activities: [
      {icon: "fa-water", name: "Reef Diving", desc: "Explore vibrant coral walls teeming with angelfish, clownfish, moray eels, and sea turtles.", duration: "3-4 hrs", difficulty: "Moderate"},
      {icon: "fa-anchor", name: "SS Thistlegorm Wreck", desc: "Dive the world's most famous wreck — a WWII ship loaded with motorcycles, trucks, and weaponry.", duration: "Full day", difficulty: "Challenging"},
      {icon: "fa-fish", name: "Snorkeling Safari", desc: "No diving certification needed. Snorkel over stunning shallow reefs from a boat.", duration: "4 hrs", difficulty: "Easy"},
      {icon: "fa-circle-notch", name: "Blue Hole (Dahab)", desc: "Dive or snorkel at the legendary Blue Hole — a 100-meter-deep sinkhole with incredible marine life.", duration: "Half day", difficulty: "Moderate"},
      {icon: "fa-ship", name: "Liveaboard Trip", desc: "Multi-day dive safari aboard a liveaboard boat accessing remote, pristine reef sites.", duration: "3-7 days", difficulty: "Moderate"},
      {icon: "fa-graduation-cap", name: "PADI Certification", desc: "Get your PADI Open Water certification in 3-4 days at some of the world's cheapest prices.", duration: "3-4 days", difficulty: "Moderate"}
    ],
    gallery: [
      {src: "../images/gallery-hurghada-reef.jpg", caption: "Coral Reef"},
      {src: "../images/city-hurghada.jpg", caption: "Crystal Clear Waters"},
      {src: "../images/gallery-sharm-diving.jpg", caption: "Underwater Paradise"},
      {src: "../images/gallery-sharm-diving.jpg", caption: "Ras Mohammed"},
      {src: "../images/gallery-hurghada-reef.jpg", caption: "Glass Bottom Boat"},
      {src: "../images/hero-hurghada.jpg", caption: "Hurghada Coast"}
    ],
    tips: [
      {icon: "🤿", title: "Best Visibility", desc: "September to November offers the clearest water with 30m+ visibility."},
      {icon: "🐠", title: "Don't Touch", desc: "Never touch, stand on, or take anything from coral reefs. It's fragile and protected by law."},
      {icon: "📋", title: "PADI Centers", desc: "Only dive with PADI or SSI certified centers. Dahab has the cheapest courses."},
      {icon: "☀️", title: "Sunscreen", desc: "Use reef-safe sunscreen only. Chemical sunscreens damage coral ecosystems."},
      {icon: "🌊", title: "Currents", desc: "Some dive sites have strong currents. Always follow your divemaster's briefing."},
      {icon: "📸", title: "Underwater Camera", desc: "Rent an underwater camera from your dive center if you don't have one — worth it!"}
    ],
    bestMonths: {jan:"good",feb:"good",mar:"good",apr:"good",may:"good",jun:"good",jul:"good",aug:"good",sep:"best",oct:"best",nov:"best",dec:"good"},
    bestTimeNote: "Diving is year-round! Sep-Nov has best visibility. Summer has warmer water and more marine life.",
    videoHighlights: ["1,000+ fish species", "World-famous wreck dives", "Crystal-clear 30m visibility", "Affordable PADI certification"],
    related: [
      {id: "siwa-oasis", name: "Siwa Oasis", city: "Western Desert", img: "../images/hero-siwa.jpg", rating: "4.7"},
      {id: "pyramids-of-giza", name: "Pyramids of Giza", city: "Cairo", img: "../images/hero-pyramids.jpg", rating: "4.9"},
      {id: "nile-cruises", name: "Nile Cruises", city: "Luxor-Aswan", img: "../images/nile-cruise.png", rating: "4.8"}
    ]
  },
  {
    id: "siwa-oasis",
    name: "Siwa Oasis",
    subtitle: "Egypt's Mystical Desert Paradise",
    badge: "Hidden Gem",
    badgeIcon: "gem",
    city: "Western Desert",
    cityPage: "siwa.html",
    heroImg: "../images/hero-siwa.jpg",
    rating: "4.7",
    reviewCount: "8,200",
    duration: "2-3 Days",
    price: "$40+",
    priceDetail: "Day tour",
    location: "Siwa, Western Desert",
    openHours: "Open desert — always accessible",
    builtDate: "Inhabited since 10,000 BC",
    architect: "Berber civilization",
    era: "Pre-Pharaonic to present",
    heightFact: "12,000 years of habitation",
    visitorsFact: "Rising eco-tourism",
    ageFact: "Oracle consulted by Alexander",
    videoId: "WPrDnl5iQiQ",
    videoTitle: "The Magic of Siwa",
    description: "Siwa is Egypt's most remote and enchanting destination — a lush oasis hidden deep in the Western Desert near the Libyan border. With crystal-clear salt lakes, ancient Berber culture, crumbling mud-brick fortresses, and the temple where Alexander the Great consulted the Oracle, Siwa feels like stepping into another world entirely.",
    history: "Archaeological evidence suggests Siwa has been inhabited for at least 12,000 years. The oasis rose to international fame when Alexander the Great crossed the desert in 331 BC to consult the Oracle of Amun, which confirmed him as the son of Zeus-Amun. The indigenous Siwi people speak their own Berber language and maintain distinct cultural traditions. The medieval Shali Fortress, built from kershef (salt-reinforced mud brick), was the heart of the community until a devastating 1926 rainstorm dissolved much of its walls.",
    timeline: [
      {date: "c. 10,000 BC", text: "Earliest evidence of human habitation in the Siwa area."},
      {date: "331 BC", text: "Alexander the Great makes the perilous desert crossing to consult the Oracle of Amun."},
      {date: "12th century", text: "The Shali Fortress is built from kershef, housing the entire Siwan population."},
      {date: "1926", text: "A rare three-day rainstorm dissolves much of the Shali Fortress's salt-mud walls."},
      {date: "2000s", text: "Eco-tourism develops, with sustainable lodges built from traditional materials."},
      {date: "Present", text: "Siwa balances preservation of Berber culture with growing tourism interest."}
    ],
    activities: [
      {icon: "fa-car", name: "Great Sand Sea Safari", desc: "4x4 adventure into the endless dunes of the Great Sand Sea with sandboarding and desert camping.", duration: "Half day", difficulty: "Moderate"},
      {icon: "fa-swimming-pool", name: "Salt Lake Float", desc: "Float effortlessly in Siwa's salt lakes — Egypt's own Dead Sea experience with stunning desert views.", duration: "2 hrs", difficulty: "Easy"},
      {icon: "fa-water", name: "Cleopatra's Spring", desc: "Swim in the natural spring pool surrounded by palm trees where legend says Cleopatra bathed.", duration: "1-2 hrs", difficulty: "Easy"},
      {icon: "fa-landmark", name: "Oracle Temple", desc: "Explore the ruins of the Temple of Amun where Alexander the Great received his divine prophecy.", duration: "1 hr", difficulty: "Easy"},
      {icon: "fa-moon", name: "Desert Stargazing", desc: "Experience some of the clearest night skies on Earth — the Milky Way is breathtaking.", duration: "Evening", difficulty: "Easy"},
      {icon: "fa-mountain", name: "Mountain of the Dead", desc: "Explore ancient tombs carved into the honeycomb mountain dating to the 26th Dynasty.", duration: "1.5 hrs", difficulty: "Moderate"}
    ],
    gallery: [
      {src: "../images/hero-siwa.jpg", caption: "Siwa Oasis"},
      {src: "../images/Great Sand Sea.jpg", caption: "Great Sand Sea"},
      {src: "../images/hero-siwa.jpg", caption: "Salt Lakes"},
      {src: "../images/attr-cleopatra-spring.jpg", caption: "Cleopatra's Spring"},
      {src: "../images/attr-temple-oracle.jpg", caption: "Oracle Temple"},
      {src: "../images/attr-shali-fortress.jpg", caption: "Mountain of the Dead"}
    ],
    tips: [
      {icon: "🚗", title: "Getting There", desc: "8-hour drive from Cairo or fly to Marsa Matruh then 4-hour drive. No direct flights."},
      {icon: "🌡️", title: "Best Season", desc: "October to April for mild weather. Summer exceeds 45°C — avoid June-August."},
      {icon: "🧥", title: "Pack Layers", desc: "Desert nights drop to near freezing in winter. Bring warm clothes for evening."},
      {icon: "🤝", title: "Culture", desc: "Siwa is conservative. Dress modestly and respect Berber customs and privacy."},
      {icon: "💰", title: "Cash Only", desc: "Very limited ATMs. Bring enough cash for your entire stay."},
      {icon: "🏡", title: "Eco-Lodge", desc: "Stay at a traditional kershef eco-lodge for the most authentic Siwan experience."}
    ],
    bestMonths: {jan:"good",feb:"best",mar:"best",apr:"good",may:"avoid",jun:"avoid",jul:"avoid",aug:"avoid",sep:"avoid",oct:"best",nov:"best",dec:"good"},
    bestTimeNote: "October to March for comfortable weather. Full moon visits to the desert are unforgettable.",
    videoHighlights: ["Alexander the Great's Oracle", "Great Sand Sea adventures", "Crystal salt lake floating", "12,000 years of habitation"],
    related: [
      {id: "pyramids-of-giza", name: "Pyramids of Giza", city: "Cairo", img: "../images/hero-pyramids.jpg", rating: "4.9"},
      {id: "khan-el-khalili", name: "Khan El Khalili", city: "Cairo", img: "../images/gallery-cairo-khan.jpg", rating: "4.6"},
      {id: "red-sea-diving", name: "Red Sea Diving", city: "Hurghada", img: "../images/gallery-hurghada-reef.jpg", rating: "4.9"}
    ]
  }
];

// ============================================================
// HTML TEMPLATE
// ============================================================

function buildPage(a) {
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const monthKeys = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

  let statsHtml = '<div class="attr-highlight-strip fade-up">' +
    '<span><i class="fas fa-ruler-vertical"></i> ' + a.heightFact + '</span>' +
    '<span class="strip-dot">•</span>' +
    '<span><i class="fas fa-users"></i> ' + a.visitorsFact + '</span>' +
    '<span class="strip-dot">•</span>' +
    '<span><i class="fas fa-history"></i> ' + a.ageFact + '</span>' +
    '</div>';

  let timelineHtml = '';
  a.timeline.forEach(t => {
    timelineHtml += '<div class="attr-timeline-item"><div class="attr-timeline-date">' + t.date + '</div><div class="attr-timeline-text">' + t.text + '</div></div>';
  });

  let activitiesHtml = '';
  a.activities.forEach(act => {
    let diffClass = act.difficulty.toLowerCase() === 'easy' ? 'easy' : (act.difficulty.toLowerCase() === 'moderate' ? 'moderate' : 'challenging');
    activitiesHtml += '<div class="attr-activity-card">' +
      '<div class="attr-activity-icon"><i class="fas ' + act.icon + '"></i></div>' +
      '<h4>' + act.name + '</h4>' +
      '<p>' + act.desc + '</p>' +
      '<div class="attr-activity-meta">' +
        '<span><i class="fas fa-clock"></i> ' + act.duration + '</span>' +
        '<span class="attr-difficulty ' + diffClass + '"><span class="diff-dot"></span> ' + act.difficulty + '</span>' +
      '</div>' +
    '</div>';
  });

  let galleryHtml = '';
  a.gallery.forEach((g, i) => {
    let cls = i === 0 ? 'attr-gallery-item attr-gallery-large' : 'attr-gallery-item';
    galleryHtml += '<div class="' + cls + '" onclick="openLightbox(' + i + ')">' +
      '<img src="' + g.src + '" alt="' + g.caption + '">' +
      '<div class="gallery-overlay"><i class="fas fa-search-plus"></i><span>' + g.caption + '</span></div>' +
    '</div>';
  });

  let tipsHtml = '';
  a.tips.forEach(t => {
    tipsHtml += '<div class="tip-card"><div class="tip-icon">' + t.icon + '</div><h4>' + t.title + '</h4><p>' + t.desc + '</p></div>';
  });

  let monthGridHtml = '';
  monthKeys.forEach((mk, i) => {
    let state = a.bestMonths[mk] || 'good';
    monthGridHtml += '<div class="attr-month ' + state + '"><span class="attr-month-label">' + monthNames[i] + '</span></div>';
  });

  let videoHighlightsHtml = '';
  a.videoHighlights.forEach(h => {
    videoHighlightsHtml += '<li><i class="fas fa-check"></i> ' + h + '</li>';
  });

  let relatedHtml = '';
  a.related.forEach(r => {
    relatedHtml += '<a href="' + r.id + '.html" class="attr-related-card">' +
      '<img src="' + r.img + '" alt="' + r.name + '">' +
      '<div class="attr-related-overlay">' +
        '<div class="attr-related-rating"><i class="fas fa-star"></i> ' + r.rating + '</div>' +
        '<h4>' + r.name + '</h4>' +
        '<span>' + r.city + '</span>' +
      '</div>' +
    '</a>';
  });

  let metaHtml = '<div class="attr-hero-meta-row">' +
    '<span class="attr-meta-item"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <strong>' + a.rating + '</strong> (' + a.reviewCount + ' reviews)</span>' +
    '<span class="attr-meta-item"><i class="fas fa-clock"></i> ' + a.duration + '</span>' +
    '<span class="attr-meta-item"><i class="fas fa-ticket-alt"></i> ' + a.price + '</span>' +
    '<span class="attr-meta-item"><i class="fas fa-map-marker-alt"></i> ' + a.location + '</span>' +
  '</div>';

  return '<!DOCTYPE html>\n<html lang="en">\n<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '    <title>' + a.name + ' - Horus Guide Travel Egypt</title>\n' +
    '    <meta name="description" content="' + a.description.substring(0, 160) + '">\n' +
    '    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\n' +
    '    <link rel="stylesheet" href="../attraction.css">\n' +
    '</head>\n<body>\n\n' +

    // NAVBAR
    '    <nav class="navbar" id="navbar">\n        <div class="container">\n' +
    '            <a href="../index.html" class="nav-logo">\n' +
    '                <img src="../logo.svg" alt="Horus Guide Travel" class="logo-img">\n' +
    '                <div class="nav-logo-text"><span class="logo-title">HORUS GUIDE</span><span class="logo-subtitle">TRAVEL</span></div>\n' +
    '            </a>\n' +
    '            <div class="nav-links" id="navLinks">\n' +
    '                <a href="../index.html" id="nav-home">Home</a>\n' +
    '                <div class="nav-dropdown">\n' +
    '                    <a href="../index.html#destinations" id="nav-destinations">Destinations <i class="fas fa-chevron-down"></i></a>\n' +
    '                    <div class="dropdown-menu">\n' +
    '                        <a href="../cairo.html">Cairo</a>\n' +
    '                        <a href="../alexandria.html">Alexandria</a>\n' +
    '                        <a href="../luxor.html">Luxor</a>\n' +
    '                        <a href="../aswan.html">Aswan</a>\n' +
    '                        <a href="../hurghada.html">Hurghada</a>\n' +
    '                        <a href="../sharm-el-sheikh.html">Sharm El Sheikh</a>\n' +
    '                        <a href="../dahab.html">Dahab</a>\n' +
    '                        <a href="../siwa.html">Siwa Oasis</a>\n' +
    '                        <a href="../port-said.html">Port Said</a>\n' +
    '                        <a href="../ismailia.html">Ismailia</a>\n' +
    '                        <a href="../fayoum.html">Fayoum</a>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <a href="../index.html#about" id="nav-about">About Us</a>\n' +
    '                <a href="../gallery.html" id="nav-gallery">Gallery</a>\n' +
    '                <a href="../index.html#contact" id="nav-contact">Contact</a>\n' +
    '            </div>\n' +
    '            <div class="nav-right">\n' +
    '                <a href="../plan-my-trip.html" class="nav-cta">Let\'s Plan My Trip</a>\n' +
    '            </div>\n' +
    '            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>\n' +
    '        </div>\n    </nav>\n\n' +

    // HERO
    '    <section class="attr-hero" id="hero">\n' +
    '        <div class="attr-hero-bg"><img src="' + a.heroImg + '" alt="' + a.name + '"><div class="attr-hero-overlay"></div></div>\n' +
    '        <div class="dest-hero-particles"><span class="hero-particle">𓂀</span><span class="hero-particle">𓃭</span><span class="hero-particle">𓆣</span><span class="hero-particle">𓇳</span><span class="hero-particle">𓂋</span><span class="hero-particle">𓅃</span><span class="hero-particle">𓃀</span></div>\n' +
    '        <div class="attr-hero-content container">\n' +
    '            <nav class="attr-hero-breadcrumb fade-up"><a href="../index.html">Home</a> <i class="fas fa-chevron-right"></i> <a href="../' + a.cityPage + '">' + a.city + '</a> <i class="fas fa-chevron-right"></i> <span>' + a.name + '</span></nav>\n' +
    '            <div class="attr-hero-badge fade-up"><i class="fas fa-' + a.badgeIcon + '"></i> ' + a.badge + '</div>\n' +
    '            <h1 class="attr-hero-title fade-up"><em>' + a.name + '</em></h1>\n' +
    '            <p class="attr-hero-subtitle fade-up">' + a.subtitle + '</p>\n' +
    '            ' + metaHtml + '\n' +
    '        </div>\n' +
    '        <a href="#overview" class="dest-hero-scroll" aria-label="Scroll down"><i class="fas fa-chevron-down"></i></a>\n' +
    '    </section>\n\n' +

    // QUICK INFO BAR
    '    <div class="attr-quick-info" id="quickInfo">\n        <div class="container">\n' +
    '            <div class="attr-info-item"><i class="fas fa-clock"></i><div><span class="info-label">Hours</span><span class="info-value">' + a.openHours.split('|')[0].trim() + '</span></div></div>\n' +
    '            <div class="attr-info-item"><i class="fas fa-ticket-alt"></i><div><span class="info-label">Entry</span><span class="info-value">' + a.price + ' ' + a.priceDetail + '</span></div></div>\n' +
    '            <div class="attr-info-item"><i class="fas fa-hourglass-half"></i><div><span class="info-label">Duration</span><span class="info-value">' + a.duration + '</span></div></div>\n' +
    '            <div class="attr-info-item"><i class="fas fa-star"></i><div><span class="info-label">Rating</span><span class="info-value">' + a.rating + '/5</span></div></div>\n' +
    '        </div>\n    </div>\n\n' +

    // HIGHLIGHT STRIP
    statsHtml + '\n\n' +

    // OVERVIEW
    '    <section class="dest-section" id="overview">\n        <div class="container">\n' +
    '            <div class="attr-overview">\n' +
    '                <div class="attr-overview-content fade-right">\n' +
    '                    <span class="section-tag">About</span>\n' +
    '                    <h2>Discover <em>' + a.name + '</em></h2>\n' +
    '                    <p>' + a.description + '</p>\n' +
    '                    <p>' + a.history + '</p>\n' +
    '                    <div class="attr-timeline">\n' +
    '                        <h3><i class="fas fa-history"></i> Historical Timeline</h3>\n' +
    '                        ' + timelineHtml + '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="attr-overview-sidebar fade-left">\n' +
    '                    <div class="attr-fact-card">\n' +
    '                        <h4><i class="fas fa-info-circle"></i> Quick Facts</h4>\n' +
    '                        <div class="attr-info-grid">\n' +
    '                            <div class="attr-fact-item"><i class="fas fa-calendar"></i><span class="fact-label">Built</span><span class="fact-value">' + a.builtDate + '</span></div>\n' +
    '                            <div class="attr-fact-item"><i class="fas fa-user-tie"></i><span class="fact-label">Builder</span><span class="fact-value">' + a.architect + '</span></div>\n' +
    '                            <div class="attr-fact-item"><i class="fas fa-clock"></i><span class="fact-label">Hours</span><span class="fact-value">' + a.openHours.split('|')[0].trim() + '</span></div>\n' +
    '                            <div class="attr-fact-item"><i class="fas fa-ticket-alt"></i><span class="fact-label">Price</span><span class="fact-value">' + a.price + '</span></div>\n' +
    '                            <div class="attr-fact-item"><i class="fas fa-map-marker-alt"></i><span class="fact-label">Location</span><span class="fact-value">' + a.location + '</span></div>\n' +
    '                            <div class="attr-fact-item"><i class="fas fa-hourglass-half"></i><span class="fact-label">Era</span><span class="fact-value">' + a.era + '</span></div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <a href="../plan-my-trip.html" class="btn btn-primary" style="width:100%;text-align:center;margin-top:20px;"><i class="fas fa-paper-plane"></i> Plan Your Visit</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n    </section>\n\n' +

    // ACTIVITIES
    '    <section class="dest-section dest-section-alt" id="activities">\n        <div class="container">\n' +
    '            <div class="section-header fade-up">\n' +
    '                <span class="section-tag">Things To Do</span>\n' +
    '                <h2 class="section-title">Recommended <em>Activities</em></h2>\n' +
    '                <p class="section-subtitle">Make the most of your visit with these experiences.</p>\n' +
    '            </div>\n' +
    '            <div class="attr-activities-grid stagger-children fade-up">\n' +
    '                ' + activitiesHtml + '\n' +
    '            </div>\n' +
    '        </div>\n    </section>\n\n' +

    // GALLERY
    '    <section class="dest-section" id="gallery">\n        <div class="container">\n' +
    '            <div class="section-header fade-up">\n' +
    '                <span class="section-tag">Visuals</span>\n' +
    '                <h2 class="section-title">Photo <em>Gallery</em></h2>\n' +
    '                <p class="section-subtitle">See the beauty that awaits you.</p>\n' +
    '            </div>\n' +
    '            <div class="attr-gallery-grid stagger-children fade-up">\n' +
    '                ' + galleryHtml + '\n' +
    '            </div>\n' +
    '        </div>\n    </section>\n\n' +

    // TIPS & BEST TIME
    '    <section class="dest-section dest-section-alt" id="tips">\n        <div class="container">\n' +
    '            <div class="section-header fade-up">\n' +
    '                <span class="section-tag">Essential Info</span>\n' +
    '                <h2 class="section-title">Visitor <em>Tips</em></h2>\n' +
    '                <p class="section-subtitle">Everything you need to know for a perfect visit.</p>\n' +
    '            </div>\n' +
    '            <div class="attr-tips-layout fade-up">\n' +
    '                <div class="tips-grid stagger-children">\n' +
    '                    ' + tipsHtml + '\n' +
    '                </div>\n' +
    '                <div class="attr-best-time fade-up">\n' +
    '                    <h3><i class="fas fa-calendar-alt"></i> Best Time to Visit</h3>\n' +
    '                    <p>' + a.bestTimeNote + '</p>\n' +
    '                    <div class="attr-month-grid">\n' +
    '                        ' + monthGridHtml + '\n' +
    '                    </div>\n' +
    '                    <div class="attr-month-legend">\n' +
    '                        <span><span class="legend-dot best"></span> Best</span>\n' +
    '                        <span><span class="legend-dot good"></span> Good</span>\n' +
    '                        <span><span class="legend-dot avoid"></span> Avoid</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n    </section>\n\n' +

    // RELATED
    '    <section class="dest-section" id="related">\n        <div class="container">\n' +
    '            <div class="section-header fade-up">\n' +
    '                <span class="section-tag">Explore More</span>\n' +
    '                <h2 class="section-title">Related <em>Attractions</em></h2>\n' +
    '            </div>\n' +
    '            <div class="attr-related-grid stagger-children fade-up">\n' +
    '                ' + relatedHtml + '\n' +
    '            </div>\n' +
    '        </div>\n    </section>\n\n' +

    // CTA
    '    <section class="dest-cta">\n' +
    '        <div class="dest-cta-bg"><img src="../images/hero-pyramids.jpg" alt="Egypt"><div class="dest-cta-overlay"></div></div>\n' +
    '        <div class="container">\n' +
    '            <div class="dest-cta-content fade-up">\n' +
    '                <h2>Ready to visit <em>' + a.name + '</em>?</h2>\n' +
    '                <p>Let our local experts craft the perfect itinerary for your Egyptian adventure.</p>\n' +
    '                <div class="dest-cta-buttons">\n' +
    '                    <a href="../plan-my-trip.html" class="btn btn-primary">Plan My Trip</a>\n' +
    '                    <a href="../index.html#contact" class="btn btn-outline">Contact Us</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n    </section>\n\n' +

    // FOOTER
    '    <footer class="footer">\n        <div class="container">\n' +
    '            <div class="footer-grid">\n' +
    '                <div class="footer-brand">\n' +
    '                    <a href="../index.html" class="nav-logo">\n' +
    '                        <img src="../logo.svg" alt="Horus Guide Travel" class="logo-img">\n' +
    '                        <div class="nav-logo-text"><span class="logo-title">HORUS GUIDE</span><span class="logo-subtitle">TRAVEL</span></div>\n' +
    '                    </a>\n' +
    '                    <p>We create unforgettable Egypt experiences with Horus Guide Travel with the best value and personal touch.</p>\n' +
    '                    <div class="footer-socials">\n' +
    '                        <a href="https://www.facebook.com/share/1JHrTsZytG/?mibextid=wwXIfr" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>\n' +
    '                        <a href="https://www.instagram.com/horus_guide_travel/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>\n' +
    '                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>\n' +
    '                        <a href="https://wa.me/201070430634" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="footer-col"><h4>Quick Links</h4>\n' +
    '                    <a href="../index.html">Home</a><a href="../index.html#destinations">Destinations</a><a href="../index.html#about">About Us</a><a href="../index.html#contact">Contact</a>\n' +
    '                </div>\n' +
    '                <div class="footer-col"><h4>Top Attractions</h4>\n' +
    '                    <a href="pyramids-of-giza.html">Pyramids of Giza</a><a href="edfu-temple.html">Edfu Temple</a><a href="hatshepsut-temple.html">Hatshepsut Temple</a><a href="abu-simbel.html">Abu Simbel</a><a href="red-sea-diving.html">Red Sea Diving</a>\n' +
    '                </div>\n' +
    '                <div class="footer-col"><h4>Contact Us</h4>\n' +
    '                    <a href="tel:+201070430634"><i class="fas fa-phone"></i> +20 107 043 0634</a>\n' +
    '                    <a href="mailto:turkayduru7@gmail.com"><i class="fas fa-envelope"></i> turkayduru7@gmail.com</a>\n' +
    '                    <a href="#"><i class="fas fa-map-marker-alt"></i> Aswan, Egypt</a>\n' +
    '                </div>\n' +
    '                <div class="footer-col"><h4>Newsletter</h4>\n' +
    '                    <p style="color: rgba(255,255,255,0.5); font-size: 0.88rem; margin-bottom: 16px;">Get travel tips and special offers.</p>\n' +
    '                    <div class="footer-newsletter"><input type="email" placeholder="Your email"><button>Subscribe</button></div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="footer-bottom"><p>&copy; 2025 Horus Guide Travel. All Rights Reserved.</p><div><a href="#">Privacy Policy</a> | <a href="#">Terms &amp; Conditions</a></div></div>\n' +
    '        </div>\n    </footer>\n\n' +

    // LIGHTBOX
    '    <div class="lightbox-modal" id="lightboxModal">\n' +
    '        <button class="lightbox-close" id="lightboxClose"><i class="fas fa-times"></i></button>\n' +
    '        <button class="lightbox-prev" id="lightboxPrev"><i class="fas fa-chevron-left"></i></button>\n' +
    '        <button class="lightbox-next" id="lightboxNext"><i class="fas fa-chevron-right"></i></button>\n' +
    '        <div class="lightbox-content"><img src="" alt="" id="lightboxImage"><div class="lightbox-caption" id="lightboxCaption"></div></div>\n' +
    '    </div>\n\n' +

    // SCRIPTS
    '    <script>\n' +
    '        const videoId = \'' + a.videoId + '\';\n' +
    '        const galleryImages = ' + JSON.stringify(a.gallery) + ';\n' +
    '    </script>\n' +
    '    <script src="../attraction.js"></script>\n' +
    '</body>\n</html>';
}

// ============================================================
// GENERATE ALL PAGES
// ============================================================

let count = 0;
attractions.forEach(a => {
  const html = buildPage(a);
  const filePath = path.join(ATTRACTIONS_DIR, a.id + '.html');
  fs.writeFileSync(filePath, html, 'utf-8');
  count++;
  console.log('  ✓ Generated: attractions/' + a.id + '.html');
});

console.log('\n✅ Successfully generated ' + count + ' attraction pages in the /attractions/ directory.');



