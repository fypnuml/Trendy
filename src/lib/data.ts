// Static data store — replace with DB queries when ready

export interface Service {
  id: string;
  title: string;
  slug: string;
  category: "Interior" | "Exterior";
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  order: number;
  isActive: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "Interior" | "Exterior" | "Aluminum";
  images: string[];
  description: string;
  client: string;
  year: string;
  isFeatured: boolean;
  order: number;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  type: "client" | "partner";
  website?: string;
  order: number;
  isActive: boolean;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  whatsappNumber: string;
  socialMedia: {
    instagram: string;
    facebook: string;
    whatsapp: string;
    twitter: string;
    linkedin: string;
  };
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  aboutText2: string;
  stats: { number: string; label: string }[];
}

export interface CatalogItem {
  id: string;
  title: string;
  slug: string;
  category: "doors" | "windows" | "kitchens" | "wardrobes" | "cladding" | "skylights" | "railings";
  shortDescription: string;
  description: string;
  features: string[];
  mainImage: string;
  gallery: string[];
  order: number;
}

// ─── Catalog Data ──────────────────────────────────────

export const catalog: CatalogItem[] = [
  // Doors
  {
    id: "door-1",
    title: "Pivot Aluminum Door",
    slug: "pivot-aluminum-door",
    category: "doors",
    shortDescription: "Sleek and monumental pivot door system for statement entrances.",
    description: "Our Pivot Aluminum Door makes an unforgettable first impression. Engineered for smooth operation despite grand dimensions, it features robust hidden hinges, thermal break technology, and exceptional security locking mechanisms. Ideal for modern villas and premium commercial spaces seeking an architectural statement.",
    features: ["Heavy-duty hidden pivot hinges", "Thermal break insulation", "Oversized dimensions capable", "Multi-point security locking", "Custom handle integration"],
    mainImage: "/images/catalog/door-pivot.jpg",
    gallery: ["/images/catalog/door-pivot-2.jpg", "/images/catalog/door-pivot-3.jpg"],
    order: 1,
  },
  {
    id: "door-2",
    title: "Minimalist Sliding System",
    slug: "minimalist-sliding-system",
    category: "doors",
    shortDescription: "Ultra-slim frames maximizing glass surfaces for uninterrupted views.",
    description: "Bring the outside in with our Minimalist Sliding System. With visually frameless sightlines from the inside and effortless gliding tracks, this system is designed for panoramic views and seamless indoor-outdoor living.",
    features: ["Ultra-slim central profile (20mm)", "Concealed outer frame", "Heavy-weight glass capacity", "Motorized option available", "High weather resistance"],
    mainImage: "/images/catalog/door-sliding.jpg",
    gallery: ["/images/catalog/door-sliding-2.jpg", "/images/catalog/door-sliding-3.jpg"],
    order: 2,
  },
  
  // Windows
  {
    id: "win-1",
    title: "Tilt & Turn Windows",
    slug: "tilt-and-turn-windows",
    category: "windows",
    shortDescription: "Versatile European-style windows offering dual functionality.",
    description: "A staple in modern luxury homes, our Tilt & Turn windows offer secure ventilation when tilted inward, and fully open like a casement door when turned. Built with premium concealed hardware for a sleek aesthetic.",
    features: ["Dual-action opening mechanism", "Concealed hardware", "Maximum acoustic insulation", "Energy-efficient thermal break", "Easy indoor cleaning"],
    mainImage: "/images/catalog/window-tilt.jpg",
    gallery: ["/images/catalog/window-tilt-2.jpg"],
    order: 1,
  },
  {
    id: "win-2",
    title: "Fixed Panoramic Windows",
    slug: "fixed-panoramic-windows",
    category: "windows",
    shortDescription: "Expansive picture windows framing the world outside.",
    description: "Designed for spaces where natural light and views are paramount. Our panoramic fixed windows utilize structurally glazed hidden frames to give the illusion of a floating wall of glass.",
    features: ["Floor-to-ceiling capable", "Hidden structural frames", "Double or triple glazing", "UV filtering glass options"],
    mainImage: "/images/catalog/window-fixed.jpg",
    gallery: ["/images/catalog/window-fixed-2.jpg"],
    order: 2,
  },

  // Kitchens
  {
    id: "kitch-1",
    title: "Matte Black Handleless Kitchen",
    slug: "matte-black-handleless",
    category: "kitchens",
    shortDescription: "Dramatic, sleek matte black aluminum cabinetry with integrated grips.",
    description: "A showcase of contemporary design. Our handleless kitchen system uses precision aluminum profiling to create seamless channels, completely eliminating the need for exterior hardware. Finished in an ultra-matte, anti-fingerprint coating.",
    features: ["Anti-fingerprint matte finish", "Integrated structural channels", "Soft-close Blum hardware", "Water-resistant aluminum core", "LED shelf integration"],
    mainImage: "/images/catalog/kitchen-black.jpg",
    gallery: ["/images/catalog/kitchen-black-2.jpg", "/images/catalog/kitchen-black-3.jpg"],
    order: 1,
  },
  
  // Wardrobes
  {
    id: "ward-1",
    title: "Glass Display Wardrobe",
    slug: "glass-display-wardrobe",
    category: "wardrobes",
    shortDescription: "Boutique-style glass wardrobe with integrated warm LED lighting.",
    description: "Transform your dressing room into a high-end boutique. This system features slender bronze-anodized aluminum frames and tinted glass, revealing organized interiors softly illuminated by hidden LED strips.",
    features: ["Slender border profile", "Tinted or fluted glass options", "Integrated motion-sensor LEDs", "Modular interior fittings", "Quiet sliding track system"],
    mainImage: "/images/catalog/wardrobe-glass.jpg",
    gallery: ["/images/catalog/wardrobe-glass-2.jpg"],
    order: 1,
  },

  // Wall Cladding
  {
    id: "clad-1",
    title: "Premium Aluminium Cladding",
    slug: "premium-aluminium-cladding",
    category: "cladding",
    shortDescription: "Durable and aesthetic exterior wall cladding solutions.",
    description: "Our Aluminium Wall Cladding systems provide superior protection and a modern look for any building. Resistant to weather and corrosion, they are perfect for both residential and commercial projects.",
    features: ["Weather resistant", "Low maintenance", "Modern aesthetic", "Easy installation"],
    mainImage: "/assets/cladding/Aluminium Wall Cladding.jpeg",
    gallery: ["/assets/cladding/Aluminium Wall Cladding2.jpeg"],
    order: 1,
  },

  // Skylights
  {
    id: "sky-1",
    title: "Architectural Skylights",
    slug: "architectural-skylights",
    category: "skylights",
    shortDescription: "Brings natural light into your space with elegance.",
    description: "Our skylights are designed to maximize natural light while maintaining high thermal efficiency. Custom-built to fit any roof structure, they add a sense of openness and luxury to your interiors.",
    features: ["High thermal insulation", "Leak-proof engineering", "UV protection glass", "Custom sizes available"],
    mainImage: "/assets/skylights/Aluminium SkyLight.jpeg",
    gallery: [],
    order: 1,
  },

  // Stair Railings
  {
    id: "rail-1",
    title: "Modern Stair Railings",
    slug: "modern-stair-railings",
    category: "railings",
    shortDescription: "Sleek and safe aluminium railing systems.",
    description: "Combine safety with style using our premium aluminium stair railing systems. Available in various finishes and designs, they provide a durable and elegant solution for your stairs.",
    features: ["Corrosion resistant", "High strength", "Minimalist design", "Multiple finish options"],
    mainImage: "/assets/railings/Aluminium Stair Railing.jpeg",
    gallery: [],
    order: 1,
  }
];


// ─── Services ────────────────────────────────────────

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Aluminum Windows",
    slug: "aluminum-windows",
    category: "Exterior",
    description:
      "High-performance aluminum window systems designed for energy efficiency, durability, and architectural elegance.",
    longDescription:
      "Our aluminum window solutions combine cutting-edge thermal break technology with sleek, modern profiles. Every window is precision-engineered to deliver exceptional insulation, weather resistance, and aesthetic appeal. From casement and sliding windows to tilt-and-turn configurations, we offer systems tailored to your architectural vision.",
    image: "/assets/windows/windows1.jpeg",
    icon: "Grid3x3",
    order: 1,
    isActive: true,
  },
  {
    id: "svc-2",
    title: "Aluminum Doors",
    slug: "aluminum-doors",
    category: "Exterior",
    description:
      "Robust and stylish aluminum door solutions — from entrance systems to sliding and folding configurations.",
    longDescription:
      "Transform your entryways with our premium aluminum door systems. We specialize in pivot doors, bi-fold systems, sliding doors, and secure entrance solutions. Each door is built for durability, security, and visual impact — making a lasting first impression.",
    image: "/assets/doors/door 1.jpeg",
    icon: "DoorOpen",
    order: 2,
    isActive: true,
  },
  {
    id: "svc-3",
    title: "Shower Enclosures",
    slug: "shower-enclosures",
    category: "Interior",
    description:
      "Frameless and semi-frameless glass shower enclosures with premium aluminum hardware and fittings.",
    longDescription:
      "Elevate your bathroom with our bespoke shower enclosures. Featuring frameless glass panels, precision aluminum hardware, and watertight engineering, our enclosures combine luxury with functionality. Custom sizes and configurations available for any bathroom layout.",
    image: "/assets/shower/showers.jpeg",
    icon: "Droplets",
    order: 3,
    isActive: true,
  },
  {
    id: "svc-4",
    title: "Wardrobes",
    slug: "wardrobes",
    category: "Interior",
    description:
      "Custom-built wardrobe systems with sleek aluminum frames, maximizing storage with contemporary aesthetics.",
    longDescription:
      "Our wardrobe solutions blend intelligent storage design with contemporary aesthetics. Featuring aluminum-framed sliding doors, soft-close mechanisms, and customizable interior configurations, each wardrobe is designed to maximize space while adding elegance to your bedroom.",
    image: "/assets/wardrobes/wardobes.jpeg",
    icon: "LayoutGrid",
    order: 4,
    isActive: true,
  },
  {
    id: "svc-5",
    title: "Aluminum Kitchens",
    slug: "aluminum-kitchens",
    category: "Interior",
    description:
      "Modern kitchen solutions featuring premium aluminum cabinetry, countertops, and integrated design elements.",
    longDescription:
      "Discover the future of kitchen design with our aluminum kitchen solutions. Resistant to moisture, heat, and wear, aluminum kitchens offer unmatched durability without compromising on style. From sleek cabinet profiles to integrated handles and premium finishes, we create kitchens that stand the test of time.",
    image: "/assets/kitchens/kitchen1.jpeg",
    icon: "ChefHat",
    order: 5,
    isActive: true,
  },
  {
    id: "svc-6",
    title: "Aluminium Cladding",
    slug: "cladding",
    category: "Exterior",
    description:
      "Durable and aesthetic exterior wall cladding solutions for modern buildings.",
    longDescription:
      "Our Aluminium Wall Cladding systems provide superior protection and a modern look for any building. Resistant to weather and corrosion, they are perfect for both residential and commercial projects. Available in multiple finishes and textures.",
    image: "/assets/cladding/Aluminium Wall Cladding.jpeg",
    icon: "Layout",
    order: 6,
    isActive: true,
  },
  {
    id: "svc-7",
    title: "Architectural Skylights",
    slug: "skylights",
    category: "Exterior",
    description:
      "Elegant skylight systems that maximize natural light and thermal efficiency.",
    longDescription:
      "Illuminate your interiors with our elegant skylight systems. Custom-engineered for thermal efficiency and a seamless integration with your roof. Built with high-performance glass and premium aluminium frames.",
    image: "/assets/skylights/Aluminium SkyLight.jpeg",
    icon: "Sun",
    order: 7,
    isActive: true,
  },
  {
    id: "svc-8",
    title: "Stair Railings",
    slug: "railings",
    category: "Interior",
    description:
      "Sleek and safe aluminium railing systems for modern staircases.",
    longDescription:
      "Enhance your staircase with our premium aluminium railing systems. Designed for safety, durability, and a clean minimalist aesthetic. Available in various profiles and finish options to match your interior design.",
    image: "/assets/railings/Aluminium Stair Railing.jpeg",
    icon: "Activity",
    order: 8,
    isActive: true,
  },
];

// ─── Projects ────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "prj-1",
    title: "Modern Villa Facade",
    slug: "modern-villa-facade",
    category: "Exterior",
    images: ["/assets/projects/Residential Villa Windows.jpeg"],
    description:
      "Complete aluminum facade installation for a modern residential villa, featuring floor-to-ceiling windows and custom entrance doors.",
    client: "Private Residence",
    year: "2024",
    isFeatured: true,
    order: 1,
  },
  {
    id: "prj-3",
    title: "Office Tower Windows",
    slug: "office-tower-windows",
    category: "Aluminum",
    images: ["/assets/projects/Commercial Windows Implementation.jpeg"],
    description:
      "Commercial-grade aluminum curtain wall system for a 12-story office building, delivering superior thermal performance.",
    client: "Skyline Developments",
    year: "2023",
    isFeatured: true,
    order: 3,
  },
  {
    id: "prj-4",
    title: "Penthouse Shower Suite",
    slug: "penthouse-shower-suite",
    category: "Interior",
    images: ["/images/projects/shower-1.jpg"],
    description:
      "Custom frameless glass shower enclosure with premium brass fittings for a luxury penthouse bathroom.",
    client: "Private Residence",
    year: "2024",
    isFeatured: true,
    order: 4,
  },
  {
    id: "prj-5",
    title: "Residential Sliding Doors",
    slug: "residential-sliding-doors",
    category: "Exterior",
    images: ["/images/projects/sliding-1.jpg"],
    description:
      "Panoramic sliding door system connecting indoor living space to an outdoor terrace with seamless transitions.",
    client: "Horizon Homes",
    year: "2023",
    isFeatured: false,
    order: 5,
  },
  {
    id: "prj-6",
    title: "Custom Walk-in Wardrobe",
    slug: "custom-walk-in-wardrobe",
    category: "Interior",
    images: ["/images/projects/wardrobe-1.jpg"],
    description:
      "Bespoke walk-in wardrobe system with aluminum-framed sliding glass doors and custom interior organization.",
    client: "Private Residence",
    year: "2024",
    isFeatured: false,
    order: 6,
  },
];

// ─── Clients & Partners ─────────────────────────────

export const clients: Client[] = [
  { id: "cl-1", name: "Defence Housing Authority (DHA) Multan", logo: "", type: "client", order: 1, isActive: true },
  { id: "cl-2", name: "Blue World City Islamabad", logo: "", type: "client", order: 2, isActive: true },
  { id: "cl-3", name: "Dream Gardens Multan & Lahore", logo: "", type: "client", order: 3, isActive: true },
  { id: "cl-4", name: "Royal Orchard Multan, Sahiwal, Sargodha", logo: "", type: "client", order: 4, isActive: true },
  { id: "cl-5", name: "Honda Showroom Multan", logo: "", type: "client", order: 5, isActive: true },
  { id: "cl-6", name: "Fri Chicks Multan", logo: "", type: "client", order: 6, isActive: true },
  { id: "cl-7", name: "NFC University Multan", logo: "", type: "client", order: 7, isActive: true },
  { id: "cl-8", name: "Bahauddin Zakariya University Multan", logo: "", type: "client", order: 8, isActive: true },
  { id: "cl-9", name: "Pak Turk Hospital Muzaffargarh", logo: "", type: "client", order: 9, isActive: true },
  { id: "cl-10", name: "Mahmood Textile Mills Multan", logo: "", type: "client", order: 10, isActive: true },
  { id: "cl-11", name: "Penta Square DHA Phase 5, Lahore", logo: "", type: "client", order: 11, isActive: true },
  { id: "cl-12", name: "Dr. Zaffar Hospital Layyah", logo: "", type: "client", order: 12, isActive: true },
  { id: "cl-13", name: "UBL Main Branch Multan", logo: "", type: "client", order: 13, isActive: true },
  { id: "cl-14", name: "City Hospital Multan", logo: "", type: "client", order: 14, isActive: true },
  { id: "cl-15", name: "Mehar Fatima Tower", logo: "", type: "client", order: 15, isActive: true },
  { id: "cl-16", name: "Ibn-E-Sina Hospital", logo: "", type: "client", order: 16, isActive: true },
  { id: "cl-17", name: "Green Homes", logo: "", type: "client", order: 17, isActive: true },
];

export const partners: Client[] = [
  { id: "pt-1", name: "Grace Pro Aluminium", logo: "/assets/partner/grace_pro.jpeg", type: "partner", order: 1, isActive: true },
  { id: "pt-2", name: "THE MUGHAL'S ALUMINIUM", logo: "/assets/partner/mughals.jpeg", type: "partner", order: 2, isActive: true },
  { id: "cl-18", name: "TKW", logo: "/assets/clients/tkw.jpeg", type: "partner", order: 3, isActive: true },
  { id: "cl-19", name: "PAK AL TECH ALUMINIUM", logo: "/assets/clients/pak_al_tech.jpeg", type: "partner", order: 4, isActive: true },
];

// ─── Site Settings ───────────────────────────────────

export const siteSettings: SiteSettings = {
  companyName: "Grace Aluminium",
  tagline: "Premium Aluminum Sections & Solutions",
  email: "gracealuminiumpk@gmail.com",
  phone: "061 4586937",
  address: "Civic Centre OPP. Quaid E Azam Academy, Link Abdali Road, Nawan Shehar, Multan",
  whatsappNumber: "+923337444581",
  socialMedia: {
    instagram: "https://www.instagram.com/gracealuminium.pk",
    facebook: "https://www.facebook.com/share/1AMaA4UwFu/",
    whatsapp: "https://wa.me/923337444581",
    twitter: "",
    linkedin: "",
  },
  heroTitle: "Premium Aluminum Solutions",
  heroSubtitle:
    "Grace Aluminium is a leading retailer and wholesaler of premium aluminium products. Our showroom offers a complete display of windows, doors, and accessories, while our wholesale network ensures reliable supply for businesses and retailers. With our own brands, Grace and Grace Pro, we deliver full-gauge thickness, superior strength, and lasting quality.",
  aboutText:
    "Grace Aluminum is a trusted name in the aluminium industry, delivering premium-quality solutions with a focus on strength, precision, and reliability.",
  aboutText2:
    "We proudly offer our own brands—Grace and Grace Pro—developed to meet the highest standards of performance and durability.",
  stats: [
    { number: "20+", label: "Years Experience" },
    { number: "500+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
  ],
};

// ─── Messages (in-memory) ────────────────────────────

export const messages: Message[] = [];

// ─── Helper functions (swap these for DB queries later) ───

export function getCatalogByCategory(category: string) {
  return catalog.filter(c => c.category === category).sort((a, b) => a.order - b.order);
}

export function getCatalogItem(category: string, slug: string) {
  return catalog.find(c => c.category === category && c.slug === slug);
}

export function getServices() {
  return services.filter((s) => s.isActive).sort((a, b) => a.order - b.order);
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug && s.isActive);
}

export function getProjects() {
  return projects.sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.isFeatured).sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getClients() {
  return clients.filter((c) => c.isActive).sort((a, b) => a.order - b.order);
}

export function getPartners() {
  return partners.filter((p) => p.isActive).sort((a, b) => a.order - b.order);
}

export function getSettings() {
  return siteSettings;
}

export function addMessage(msg: Omit<Message, "id" | "isRead" | "createdAt">) {
  const newMsg: Message = {
    ...msg,
    id: `msg-${Date.now()}`,
    isRead: false,
    createdAt: new Date().toISOString(),
  };
  messages.push(newMsg);
  return newMsg;
}

export function getMessages() {
  return [...messages].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
