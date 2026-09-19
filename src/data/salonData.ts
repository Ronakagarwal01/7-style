export interface SalonServiceItem {
  id: string;
  name: string;
  category: string;
  price: string;
  genderOrDetail?: string;
  description?: string;
  popular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience?: string;
  specialties: string[];
  image: string;
  bio: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  serviceMentioned: string;
  source: 'Google Review' | 'Verified Client';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'HAIR' | 'COLOUR' | 'BRIDAL' | 'MAKEUP' | 'GROOMING' | 'SALON';
  image: string;
  description: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  transformation: string;
  stylistNote: string;
}

export const SALON_INFO = {
  name: "7 STYLES UNISEX SALON",
  tagline: "YOUR STYLE. YOUR SIGNATURE.",
  description: "Bhopal's first premier luxury salon destination, offering precision hair sculpting, bespoke color transformations, signature Indian bridal edits, and restorative beauty therapies.",
  foundedYear: 2016,
  rating: 4.7,
  reviewCount: 697,
  address: "60, E-2, Arera Colony, Bhopal, Madhya Pradesh 462016",
  landmark: "Near 7 No. Stop, Arera Colony",
  phone: "+91 89594 45944",
  secondaryPhone: "0755 400 8808",
  whatsappNumber: "918959445944",
  whatsappLink: "https://wa.me/918959445944?text=Hello%207%20Styles%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.",
  email: "info@7styles.in",
  openingHours: [
    { days: "Monday – Sunday", hours: "10:30 AM – 8:30 PM" }
  ],
  socials: {
    instagram: "https://www.instagram.com/7_styles_salon/",
    facebook: "https://www.facebook.com/7stylessalon/",
    twitter: "https://x.com/7stylesSalon",
    pinterest: "https://in.pinterest.com/7stylesSalon/"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.612477641191!2d77.43193957450052!3d23.22078920890369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c424ff0000001%3A0x4a058bf21fcbfc01!2s7%20Styles!5e0!3m2!1sen!2sin!4v1688210856944!5m2!1sen!2sin"
};

export const SALON_TEAM: TeamMember[] = [
  {
    id: "murli-sen",
    name: "Murli Sen",
    role: "Top Gun Senior Hair Stylist",
    specialties: ["Precision Sculpting", "Editorial Styling", "Keratin & Botox"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=700&auto=format&fit=crop",
    bio: "Lead stylist at 7 Styles with an unmatched eye for personal aesthetics, facial geometry, and custom cut architecture."
  },
  {
    id: "hussain-khan",
    name: "Hussain Khan",
    role: "Senior Hair Stylist",
    specialties: ["Global Colour", "Balayage", "Texture Redefinition"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=700&auto=format&fit=crop",
    bio: "Renowned for transformative dimensional tones, seamless gradients, and precision texture control."
  },
  {
    id: "shahrukh-khan",
    name: "Shahrukh Khan",
    role: "Senior Hair Stylist",
    specialties: ["Contemporary Grooming", "Fade Artistry", "Beard Sculpting"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700&auto=format&fit=crop",
    bio: "Master of bespoke men's silhouettes, razor craftsmanship, and modern executive styling."
  },
  {
    id: "shahnawaz-khan",
    name: "Shahnawaz Khan",
    role: "Senior Hair Stylist",
    specialties: ["Smoothening", "Hair Restoration", "Blowouts"],
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=700&auto=format&fit=crop",
    bio: "Dedicated specialist in long-term hair health, cuticle sealing, and bespoke event blowout finishing."
  },
  {
    id: "reshu-pradhan",
    name: "Reshu Pradhan",
    role: "Senior Beautician & Makeup Artist",
    specialties: ["Bridal HD Makeup", "Airbrush Artistry", "Pre-Bridal Skincare"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop",
    bio: "Head bridal and aesthetics specialist bringing editorial elegance, long-wearing radiant finishes, and tailored skin rituals."
  },
  {
    id: "nisha-pun",
    name: "Nisha Pun",
    role: "Junior Beautician",
    specialties: ["Advanced Facials", "D-Tan Therapies", "Waxing Rituals"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=700&auto=format&fit=crop",
    bio: "Passionate skincare practitioner specializing in restorative glow treatments and gentle client pampering."
  },
  {
    id: "rohit-sarathe",
    name: "Rohit Sarathe",
    role: "Junior Hairstylist",
    specialties: ["Hair Wash & Conditioning", "Basic Styling", "Blow Dry"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=700&auto=format&fit=crop",
    bio: "Expert in salon client care, scalp massages, and refreshing finishing blowouts."
  },
  {
    id: "sanjay-rai-manjhi",
    name: "Sanjay Rai Manjhi",
    role: "Pedicurist & Nail Specialist",
    specialties: ["Spa Pedicure", "Heel Peel Therapies", "Foot Reflexology"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=700&auto=format&fit=crop",
    bio: "Signature foot therapist crafting revitalizing wellness experiences that restore fatigue into sheer lightness."
  }
];

export const OFFICIAL_PRICING: SalonServiceItem[] = [
  // Haircuts & Blow Dry
  { id: "p1", name: "Hair Cut", category: "HAIR", price: "₹400 / ₹800", genderOrDetail: "Male / Female", description: "Precision tailored cut, consultation & signature wash", popular: true },
  { id: "p2", name: "Split Ends Removal", category: "HAIR", price: "₹00 / ₹800", genderOrDetail: "Male / Female", description: "Length-preserving damage recovery treatment" },
  { id: "p3", name: "Clean Shaving", category: "GROOMING", price: "₹200 / ₹00", genderOrDetail: "Male", description: "Classic hot towel shave with hydrating balm" },
  { id: "p4", name: "Beard Setting & Shaping", category: "GROOMING", price: "₹300 / ₹00", genderOrDetail: "Male", description: "Line definition, scissor sculpting & beard oil conditioning", popular: true },
  { id: "p5", name: "Baby Hair Cut (Under 7 Yrs)", category: "HAIR", price: "₹300 / ₹400", genderOrDetail: "Male / Female", description: "Gentle, stress-free cut designed for toddlers and kids" },
  { id: "p6", name: "Blow Dry", category: "HAIR", price: "₹250 / ₹500", genderOrDetail: "Male / Female", description: "Volumizing professional styling blowout" },
  { id: "p7", name: "Blow Dry Upto Waist", category: "HAIR", price: "₹00 / ₹450", genderOrDetail: "Female", description: "Deep luster blow dry for extended length tresses" },
  { id: "p8", name: "Ironing", category: "HAIR", price: "₹300 / ₹800", genderOrDetail: "Male / Female", description: "Sleek straight thermal finish with heat protection serum" },
  { id: "p9", name: "Tongs & Curls", category: "HAIR", price: "₹00 / ₹800", genderOrDetail: "Female", description: "Soft editorial waves, bouncy curls or defined spirals" },
  { id: "p10", name: "Crimping", category: "HAIR", price: "₹00 / ₹1,000", genderOrDetail: "Female", description: "Texturizing micro-crimp foundation for volume and up-dos" },
  { id: "p11", name: "Hair Do / Upstyle", category: "HAIR", price: "₹00 / ₹800", genderOrDetail: "Female", description: "Sophisticated bun, braided crown or party upstyle" },
  { id: "p12", name: "Wash (Shampoo Conditioning)", category: "HAIR", price: "₹150 / ₹250", genderOrDetail: "Male / Female", description: "Relaxing scalp wash with salon grade clarifying formulas" },
  { id: "p13", name: "Wash & Blow Dry", category: "HAIR", price: "₹250 / ₹800", genderOrDetail: "Male / Female", description: "Complete clarifying wash followed by signature blowout" },

  // Colour & Chemical
  { id: "p14", name: "Per Streak Highlights", category: "COLOUR", price: "₹200 / ₹350", genderOrDetail: "Male / Female", description: "Dimensional focal accent foil with premium toner", popular: true },
  { id: "p15", name: "Global Colour", category: "COLOUR", price: "₹2,000 / ₹6,500", genderOrDetail: "Male / Female", description: "Full head rich chromatic transformation with high shine", popular: true },
  { id: "p16", name: "Basic Colour", category: "COLOUR", price: "₹1,500 / ₹3,500", genderOrDetail: "Male / Female", description: "Root-to-tip uniform coverage with conditioning gloss" },
  { id: "p17", name: "Ammonia Free Colour", category: "COLOUR", price: "₹2,000 / ₹4,500", genderOrDetail: "Male / Female", description: "Zero ammonia organic-blend formulation for sensitive scalps" },
  { id: "p18", name: "Grey Coverage (Basic)", category: "COLOUR", price: "₹1,100 / ₹1,200", genderOrDetail: "Male / Female", description: "100% natural seamless grey concealment" },
  { id: "p19", name: "Grey Coverage (Ammonia Free)", category: "COLOUR", price: "₹1,300 / ₹1,400", genderOrDetail: "Male / Female", description: "Gentle non-damaging organic root touch-up" },

  // Treatments & Smoothing
  { id: "p20", name: "Smoothening", category: "TREATMENTS", price: "₹2,500 / ₹3,500", genderOrDetail: "Male / Female", description: "Silky manageable frizz elimination with lasting shine", popular: true },
  { id: "p21", name: "Hair Botox", category: "TREATMENTS", price: "₹3,000 / ₹5,500", genderOrDetail: "Male / Female", description: "Deep strand rejuvenation, collagen plumping & anti-breakage", popular: true },
  { id: "p22", name: "Keratin Treatment", category: "TREATMENTS", price: "₹3,000 / ₹5,500", genderOrDetail: "Male / Female", description: "Intense protein replenishment for mirror-glazed silky hair", popular: true },
  { id: "p23", name: "Hair Repair Therapy", category: "TREATMENTS", price: "₹1,200 / ₹1,500", genderOrDetail: "Male / Female", description: "Cellular bond repair for chemically processed hair" },
  { id: "p24", name: "Anti Hair Loss Treatment", category: "TREATMENTS", price: "₹1,200 / ₹1,500", genderOrDetail: "Male / Female", description: "Follicle stimulation therapy with active botanical serums" },
  { id: "p25", name: "Anti Dandruff Therapy", category: "TREATMENTS", price: "₹1,200 / ₹1,500", genderOrDetail: "Male / Female", description: "Purifying antimicrobial scalp detox and soothing rinse" },
  { id: "p26", name: "Basic Hair SPA", category: "TREATMENTS", price: "₹1,200 / ₹1,400", genderOrDetail: "Male / Female", description: "Nourishing cream masque with relaxing steam & massage" },
  { id: "p27", name: "Advance Hair SPA", category: "TREATMENTS", price: "₹1,500 / ₹2,500", genderOrDetail: "Male / Female", description: "Deep cuticle infusion masque with essential ampoules" },
  { id: "p28", name: "Protein Hair SPA", category: "TREATMENTS", price: "₹2,500 / ₹3,500", genderOrDetail: "Male / Female", description: "Maximum strength amino therapy for dry brittle strands" },

  // Groom Makeup
  { id: "p29", name: "Groom Kryolan Makeup", category: "GROOMING", price: "₹2,500", genderOrDetail: "Groom Makeup", description: "Natural camera-ready matte foundation, contouring & grooming" },
  { id: "p30", name: "Groom MAC Makeup", category: "GROOMING", price: "₹4,000", genderOrDetail: "Groom Makeup", description: "Flawless studio complexion, blemish erase & defined features", popular: true },
  { id: "p31", name: "Groom MAC HD Makeup", category: "GROOMING", price: "₹6,000", genderOrDetail: "Groom Makeup", description: "High-definition photo perfection designed for 4K wedding cinematography" },

  // Bridal Makeup
  { id: "p32", name: "Basic Kryolan Bridal", category: "BRIDAL", price: "₹5,000", genderOrDetail: "Bridal Makeup", description: "Classic Indian bridal base with eye artistry & draping assistance" },
  { id: "p33", name: "Advance Kryolan Bridal", category: "BRIDAL", price: "₹8,000", genderOrDetail: "Bridal Makeup", description: "Long-lasting tear-proof bridal look with detailed contouring" },
  { id: "p34", name: "HD Kryolan Bridal", category: "BRIDAL", price: "₹10,000", genderOrDetail: "Bridal Makeup", description: "Luminous HD pigments with lightweight yet complete coverage" },
  { id: "p35", name: "Basic MAC Bridal", category: "BRIDAL", price: "₹8,000", genderOrDetail: "Bridal Makeup", description: "Cult-favorite MAC studio formulas customized for your skin tone" },
  { id: "p36", name: "Advance MAC Bridal", category: "BRIDAL", price: "₹12,000", genderOrDetail: "Bridal Makeup", description: "Sculpted MAC bridal glamour with premium lash extension" },
  { id: "p37", name: "HD MAC Bridal", category: "BRIDAL", price: "₹15,000", genderOrDetail: "Bridal Makeup", description: "Royalty finish MAC HD with waterproof setting & bridal hair styling", popular: true },
  { id: "p38", name: "Air Brush Bridal Makeup", category: "BRIDAL", price: "₹20,000", genderOrDetail: "Bridal Makeup", description: "Ultra-weightless micro-misted silicone bridal finish. Flawless 18-hour hold.", popular: true },

  // Party Makeup & Draping
  { id: "p39", name: "Kryolan Party Makeup", category: "MAKEUP", price: "₹2,500", genderOrDetail: "Party Make-up", description: "Radiant evening party base with subtle glam eyes" },
  { id: "p40", name: "Kryolan Advance Party", category: "MAKEUP", price: "₹4,000", genderOrDetail: "Party Make-up", description: "Elevated evening makeup with defined lips & contour" },
  { id: "p41", name: "MAC Party Makeup", category: "MAKEUP", price: "₹3,500", genderOrDetail: "Party Make-up", description: "Dewy, chic and photogenic party look with MAC products" },
  { id: "p42", name: "MAC Advance Party", category: "MAKEUP", price: "₹5,000", genderOrDetail: "Party Make-up", description: "Red carpet glam with custom eye makeup & false lashes" },
  { id: "p43", name: "Bobbi Brown Party", category: "MAKEUP", price: "₹7,000", genderOrDetail: "Party Make-up", description: "Effortless high-society skin glow with Bobbi Brown luxury icons" },
  { id: "p44", name: "Sephora Signature Party", category: "MAKEUP", price: "₹7,000", genderOrDetail: "Party Make-up", description: "Bespoke international cosmetics look curated for special galas" },
  { id: "p45", name: "Saree Draping", category: "MAKEUP", price: "₹550", genderOrDetail: "Styling", description: "Flawless traditional, modern or pleat-perfect saree draping" },

  // Nails
  { id: "p46", name: "Gel Nails", category: "NAILS", price: "₹1,200", genderOrDetail: "Nails", description: "Chip-resistant high-gloss UV gel overlay" },
  { id: "p47", name: "Gel Extension", category: "NAILS", price: "₹3,500", genderOrDetail: "Nails", description: "Sculpted durable length extension with custom shaping", popular: true },
  { id: "p48", name: "Fake Nails Application", category: "NAILS", price: "₹2,000", genderOrDetail: "Nails", description: "Instant glamorous tips with polished finish" },
  { id: "p49", name: "Acrylic Nails Full Set", category: "NAILS", price: "₹4,500", genderOrDetail: "Nails", description: "Maximum strength acrylic sculpting with nail art choice" },

  // Cleanups & Facials
  { id: "p50", name: "Regular Clean Up", category: "BEAUTY", price: "₹1,000", genderOrDetail: "Skincare", description: "Gentle pore extraction, exfoliation and soothing mask" },
  { id: "p51", name: "Advance O3+ CleanUp", category: "BEAUTY", price: "₹1,800", genderOrDetail: "Skincare", description: "Oxygenating deep skin cleansing and tone correction", popular: true },
  { id: "p52", name: "Anti Acne Seaweed CleanUp", category: "BEAUTY", price: "₹1,800", genderOrDetail: "Skincare", description: "Clarifying oceanic minerals to balance sebum & breakouts" },
  { id: "p53", name: "Brightening Remy CleanUp", category: "BEAUTY", price: "₹2,500", genderOrDetail: "Skincare", description: "Intensive brightening serum therapy for radiant youthfulness" },
  { id: "p54", name: "Gold CleanUp", category: "BEAUTY", price: "₹1,800", genderOrDetail: "Skincare", description: "24K micro-gold flakes infusion for luminous event glow" },
  { id: "p55", name: "Insta Glow Facial", category: "BEAUTY", price: "₹1,800", genderOrDetail: "Facial", description: "Quick antioxidant skin boost for immediate radiant luminosity" },
  { id: "p56", name: "Tightening Mask Facial", category: "BEAUTY", price: "₹800", genderOrDetail: "Facial", description: "Firming peptide mask treatment to lift and tone facial contours" },
  { id: "p57", name: "Gold Facial", category: "BEAUTY", price: "₹2,350", genderOrDetail: "Facial", description: "Opulent gold scrub, massage & gold leaf rejuvenating mask", popular: true },
  { id: "p58", name: "Tan Clear Facial", category: "BEAUTY", price: "₹2,500", genderOrDetail: "Facial", description: "High-potency skin de-pigmentation & sun damage reversal" },

  // D-Tan
  { id: "p59", name: "D-Tan Full Face", category: "BEAUTY", price: "₹350 / ₹450", genderOrDetail: "O3 / Sara", description: "Instant sun pigmentation reduction with calming botanical extracts" },
  { id: "p60", name: "D-Tan Full Face + Neck", category: "BEAUTY", price: "₹500 / ₹600", genderOrDetail: "O3 / Sara", description: "Even-tone harmonization across jawline and neckline" },
  { id: "p61", name: "D-Tan Full Arms", category: "BEAUTY", price: "₹600 / ₹800", genderOrDetail: "O3 / Sara", description: "Complete arms brightening and tan removal wrap" },
  { id: "p62", name: "D-Tan Full Body", category: "BEAUTY", price: "₹2,400 / ₹3,600", genderOrDetail: "O3 / Sara", description: "Head-to-toe skin resurfacing and glow treatment" },

  // Manicure & Pedicure
  { id: "p63", name: "Basic Manicure", category: "BEAUTY", price: "₹650", genderOrDetail: "Hands", description: "Cuticle care, dead skin buffing, relaxing hand massage" },
  { id: "p64", name: "Advance Manicure", category: "BEAUTY", price: "₹1,000", genderOrDetail: "Hands", description: "Deep exfoliating scrub, thermal hydration wrap & nail buffing" },
  { id: "p65", name: "SPA Manicure", category: "BEAUTY", price: "₹1,200", genderOrDetail: "Hands", description: "Aromatherapy bath, botanical scrub & extended reflexology" },
  { id: "p66", name: "Basic Pedicure", category: "BEAUTY", price: "₹800", genderOrDetail: "Feet", description: "Warm soak, heel smoothing, cuticle shaping and massage" },
  { id: "p67", name: "Advance Pedicure", category: "BEAUTY", price: "₹1,200", genderOrDetail: "Feet", description: "Deep callus reduction, detoxifying mask & nourishing balm", popular: true },
  { id: "p68", name: "SPA Pedicure", category: "BEAUTY", price: "₹1,500", genderOrDetail: "Feet", description: "Essential oil bath, volcanic scrub, cooling mask & deep massage" },
  { id: "p69", name: "Heel Peel Therapy", category: "BEAUTY", price: "₹2,000", genderOrDetail: "Feet", description: "Medical-grade peel formulation for baby-soft crack-free heels" },

  // Waxing & Bleach
  { id: "p70", name: "Threading (Full Face)", category: "BEAUTY", price: "₹400", genderOrDetail: "Face", description: "Precise thread shaping for eyebrows, upper lip, chin & forehead" },
  { id: "p71", name: "Full Arms Waxing", category: "BEAUTY", price: "₹600", genderOrDetail: "Waxing", description: "Gentle warm wax formulation with post-soothe lotion" },
  { id: "p72", name: "Full Legs Waxing", category: "BEAUTY", price: "₹900", genderOrDetail: "Waxing", description: "Smooth hair removal ensuring minimal redness" },
  { id: "p73", name: "Full Body Waxing", category: "BEAUTY", price: "₹3,500", genderOrDetail: "Waxing", description: "Complete velvet smooth body waxing with hygienic strip method" },
  { id: "p74", name: "Full Body Bleach", category: "BEAUTY", price: "₹3,500", genderOrDetail: "Bleach", description: "Complete skin lightening formulation for uniform bridal radiance" },

  // Therapeutic Massages
  { id: "p75", name: "Head Massage (Oil)", category: "GROOMING", price: "₹1,000", genderOrDetail: "Therapy", description: "Traditional Ayurvedic warm oil head relaxation therapy" },
  { id: "p76", name: "Head Massage + Hair Wash", category: "GROOMING", price: "₹1,300", genderOrDetail: "Therapy", description: "Invigorating pressure point head massage followed by luxury cleanse" },
  { id: "p77", name: "Neck & Shoulder Massage", category: "GROOMING", price: "₹800", genderOrDetail: "Therapy", description: "Tension-release acupressure treatment targeting posture stress" }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "r1",
    author: "Dr. Priyanshi Verma",
    rating: 5,
    date: "February 2026",
    serviceMentioned: "Bridal HD Makeup & Hair Styling",
    comment: "7 Styles made my wedding day unforgettable! Reshu and the team did my bridal HD makeup and hair styling with such finesse. It stayed flawless throughout the ceremonies. The ambience in Arera Colony is truly relaxing and luxurious.",
    source: "Google Review"
  },
  {
    id: "r2",
    author: "Aditya Chouhan",
    rating: 5,
    date: "January 2026",
    serviceMentioned: "Precision Haircut & Beard Sculpting",
    comment: "Undoubtedly the finest unisex salon in Bhopal. Murli and Hussain are masters of their craft. They take time to understand your face shape and hair texture. Premium hospitality and zero compromise on hygiene.",
    source: "Google Review"
  },
  {
    id: "r3",
    author: "Meghna Saxena",
    rating: 5,
    date: "January 2026",
    serviceMentioned: "Keratin & Global Highlights",
    comment: "I was nervous about getting highlights, but their color specialist gave me gorgeous caramel tones that blend naturally. My hair has never felt softer after their Keratin session. Absolutely worth every rupee.",
    source: "Google Review"
  },
  {
    id: "r4",
    author: "Rahul Bhargava",
    rating: 5,
    date: "December 2025",
    serviceMentioned: "Groom Makeup & Hair Spa",
    comment: "Got my pre-wedding grooming and MAC Groom makeup done here. Subtle, natural, and photograph-ready without looking cakey. Polite staff and punctual scheduling. Highly recommend to all grooms!",
    source: "Google Review"
  },
  {
    id: "r5",
    author: "Ananya Dixit",
    rating: 5,
    date: "November 2025",
    serviceMentioned: "O3+ Facial & Spa Pedicure",
    comment: "The Spa Pedicure by Sanjay and the O3+ Facial left my skin glowing for weeks. The salon has a calm, bespoke aura that makes you forget the rush of the city. 7 Styles is my permanent go-to.",
    source: "Google Review"
  },
  {
    id: "r6",
    author: "Karan Patel",
    rating: 5,
    date: "October 2025",
    serviceMentioned: "Hair Botox & Styling",
    comment: "Got Hair Botox done after months of heat damage. The transformation is surreal. The team treats you like royalty from the moment you step in. Best salon experience in Arera Colony!",
    source: "Google Review"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Editorial Bridal Royale",
    category: "BRIDAL",
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1200&auto=format&fit=crop",
    description: "Intricate Indian bridal styling with high-definition pigments and antique jewelry coordination."
  },
  {
    id: "g2",
    title: "Sculpted Dimensional Fade",
    category: "GROOMING",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    description: "Sharp contemporary taper fade with tailored beard architecture."
  },
  {
    id: "g3",
    title: "Sun-Kissed Balayage Ribbons",
    category: "COLOUR",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    description: "Seamless amber and honey gradient transition crafted with precision freehand foils."
  },
  {
    id: "g4",
    title: "Architectural Precision Bob",
    category: "HAIR",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
    description: "Geometrical jawline-framing bob with deep mirror shine."
  },
  {
    id: "g5",
    title: "Airbrush Bridal Splendor",
    category: "BRIDAL",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    description: "Weightless silicone-based airbrush finish for timeless matrimonial portraits."
  },
  {
    id: "g6",
    title: "Luxe Salon Sanctuary",
    category: "SALON",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    description: "Bhopal's first luxury unisex salon interior featuring private styling suites and warm ambient lighting."
  },
  {
    id: "g7",
    title: "Velvet Red-Carpet Glamour",
    category: "MAKEUP",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    description: "Smokey couture eye artistry paired with satin nude lips."
  },
  {
    id: "g8",
    title: "Gloss Silk Keratin Finish",
    category: "HAIR",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
    description: "Post-Keratin mirror glazed reflection with zero frizz and natural bounce."
  },
  {
    id: "g9",
    title: "The Regal Groom Profile",
    category: "GROOMING",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
    description: "Groom makeup, clean beard sculpting and royal sherwani styling coordination."
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "ba1",
    title: "Signature Hair Transformation",
    category: "HAIR",
    beforeImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=900&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=900&auto=format&fit=crop",
    transformation: "Dry, frizzy strands transformed into silky, high-gloss dimensional layers.",
    stylistNote: "Keratin infusion combined with face-framing butterfly cut."
  },
  {
    id: "ba2",
    title: "Global Dimensional Colour",
    category: "COLOUR",
    beforeImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
    transformation: "Monotone faded ends enriched with warm champagne gold and mocha ribbons.",
    stylistNote: "Bond-builder enriched foils with non-ammonia gloss glaze."
  },
  {
    id: "ba3",
    title: "Editorial Bridal Glamour",
    category: "MAKEUP",
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=900&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=900&auto=format&fit=crop",
    transformation: "Natural skin elevated to luminous, camera-ready matrimonial perfection.",
    stylistNote: "HD MAC bridal base, soft rose shimmer eyelids and precision liner."
  },
  {
    id: "ba4",
    title: "Executive Groom Redefinition",
    category: "GROOMING",
    beforeImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=900&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop",
    transformation: "Overgrown volume sculpted into a sharp high-fade with beard contouring.",
    stylistNote: "Razor graduation, steam conditioning and matte pomade finish."
  }
];
