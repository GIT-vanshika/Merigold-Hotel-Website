
export const MARIGOLD_DETAILS = {
  name: "Marigold Hotels",
  brand: "Flagship brand of Greenpark Group of Hotels & Resorts",
  location: "Greenlands, Begumpet, Hyderabad – 500016, Telangana, India",
  phones: ["+91 40 6736 3636", "+91 40 6736 3637"],
  emails: {
    reservations: "reservations.hyd@marigoldhotels.com",
    info: "info@marigoldhotels.com",
    careers: "hr.marigold@marigoldhotels.com"
  },
  rooms: [
    { 
      id: 'luxury', 
      name: "Marigold Luxury", 
      description: "Premium hospitality experience with sophisticated design and warm gold accents.", 
      image: "https://r1imghtlak.mmtcdn.com/24705fca81ea11e78e72025f77df004f.jpg" 
    },
    { 
      id: 'premium', 
      name: "Marigold Premium", 
      description: "Larger space with upgraded provisions, perfect for the modern business traveler.", 
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      id: 'studio', 
      name: "Marigold Studio", 
      description: "Urban styled elegant design offering a seamless blend of work and relaxation areas.", 
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      id: 'royal', 
      name: "Royal Suite", 
      description: "Large suite with extra comfort, dedicated living space, and expansive city views.", 
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      id: 'presidential', 
      name: "Presidential Suite", 
      description: "Top-tier luxury accommodation with bespoke furniture and state-of-the-art amenities.", 
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200" 
    }
  ],
  roomFeatures: [
    "Satellite television",
    "Electronic safe",
    "Dual-line telephones with voicemail",
    "Personal mini-bar",
    "LCD TV",
    "Wired and wireless broadband internet",
    "Complimentary buffet breakfast"
  ],
  dining: [
    { 
      name: "Saffron Soul – World Café", 
      type: "World cuisine inspired by global flavours", 
      description: "Our signature World Café offering an extensive buffet and à la carte selection for lunch and dinner.",
      image: "https://marigold-by-greenpark.hyderabad-hotel.com/data/Photos/OriginalPhoto/16065/1606565/1606565986.JPEG"
    },
    { 
      name: "Mekong – Pan Asian Speciality Restaurant", 
      type: "Cuisine inspired by countries along the Mekong River region", 
      description: "A culinary journey through Vietnam, Thailand, and China in an exquisitely designed setting.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200"
    },
    { 
      name: "Mystique – Lounge & Bar", 
      type: "Lounge with drinks and casual ambience", 
      description: "The perfect spot to unwind with premium beverages and artisan snacks in a sophisticated lounge atmosphere.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"
    }
  ],
  eventHalls: [
    { name: "Peacock Hall", capacity: "600–650 people" },
    { name: "Azure Hall", capacity: "40–60 people" },
    { name: "Cyan Hall", capacity: "up to 150 people" },
    { name: "Amber Hall", capacity: "smaller meeting room" },
    { name: "Teal Room", capacity: "smaller meeting room" }
  ],
  attractions: [
    "Charminar", "Golconda Fort", "Salar Jung Museum", "Chowmahalla Palace",
    "Qutub Shahi Tombs", "Birla Planetarium", "Mecca Masjid", "Ramoji Film City",
    "Dhola-Ri-Dhani", "Shilparamam"
  ],
  amenities: [
    "Tea/coffee maker", "Iron box and ironing board", "E-safe locker", "Alarm clock",
    "Toiletries", "Dental kit", "Sanitary bag", "Hair dryer", "Comb", "Slippers",
    "Shaving kit", "Shower cap", "Talcum powder"
  ],
  facilities: [
    "Gymnasium / Fitness center", "Spa & wellness (Soul Spa)", "Swimming pool / Rooftop pool",
    "Leisure & recreational areas", "Business center", "Concierge services",
    "Travel, tours & ticket assistance", "Valet parking", "Airport shuttle (paid)",
    "24-hour reception", "24-hour security", "Wi-Fi throughout the property"
  ]
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Rooms & Suites", path: "/rooms" },
  { label: "Dining", path: "/dining" },
  { label: "Meetings & Events", path: "/events" },
  { label: "Facilities & Wellness", path: "/facilities" },
  { label: "Around the Hotel", path: "/attractions" },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" }
];
