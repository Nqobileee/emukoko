// ============================================================
// E Mukoko Phase 2 — Mock Data
// Demo account: demo@emukoko.org / DemoFarmer2026!
// ============================================================

// ---------- Types ----------
export interface User {
  id: string;
  email: string;
  name: string;
  role: "farmer" | "consumer" | "admin" | "expert";
  phone: string;
  location: string;
  bio: string;
  avatar: string;
  createdAt: string;
}

export interface Hive {
  id: string;
  name: string;
  location: string;
  status: "healthy" | "warning" | "critical" | "offline";
  installedAt: string;
  loanStatus: "active" | "paid" | "pending";
  lastReading: string;
  latestTemp: number;
  latestHumidity: number;
  latestWeight: number;
  latestVibration: number;
}

export interface SensorReading {
  timestamp: string;
  tempInternal: number;
  tempExternal: number;
  humidity: number;
  weight: number;
  vibration: number;
}

export interface Alert {
  id: string;
  hiveId: string;
  hiveName: string;
  type: "pest" | "disease" | "maintenance" | "environment" | "swarm";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  description: string;
  recommendation: string;
  imageUrl?: string;
  createdAt: string;
  resolvedAt?: string;
}

export interface Harvest {
  id: string;
  hiveId: string;
  hiveName: string;
  weightSensor: number;
  weightDelivered: number;
  qualityGrade: "A" | "B" | "C";
  season: string;
  status: "completed" | "pending" | "in-review";
  payment: number;
  harvestedAt: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  origin: string;
  farmerName: string;
  farmerStory: string;
  stock: number;
  weight: string;
  qualityGrade: "A" | "B" | "C";
  imageUrl: string;
  qrCodeUrl: string;
  harvestDate: string;
  category: "raw" | "creamed" | "infused" | "comb";
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "beginner" | "advanced" | "pest-management" | "harvesting" | "equipment" | "seasonal";
  author: string;
  readTime: string;
  publishedAt: string;
  icon: string;
}

export interface Notification {
  id: string;
  type: "alert" | "order" | "harvest" | "system" | "learning";
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
}

export interface MarketDemand {
  month: string;
  demand: number;
  price: number;
  supply: number;
}

// ---------- Demo User ----------
export const demoUser: User = {
  id: "usr_demo_001",
  email: "demo@emukoko.org",
  name: "Tendai Moyo",
  role: "farmer",
  phone: "+263 77 123 4567",
  location: "Masvingo, Zimbabwe",
  bio: "Third-generation beekeeper managing 5 Smart Hives in the Masvingo highlands. Passionate about sustainable beekeeping and community development. Joined the E Mukoko program in 2025.",
  avatar: "",
  createdAt: "2025-02-15T08:00:00Z",
};

// ---------- Hives (5 Smart Hives) ----------
export const hives: Hive[] = [
  {
    id: "hive_001",
    name: "Sunflower Ridge A",
    location: "Masvingo East Plot 4",
    status: "healthy",
    installedAt: "2025-03-01T10:00:00Z",
    loanStatus: "active",
    lastReading: "2026-02-18T09:30:00Z",
    latestTemp: 35.2,
    latestHumidity: 58,
    latestWeight: 22.4,
    latestVibration: 0.3,
  },
  {
    id: "hive_002",
    name: "Sunflower Ridge B",
    location: "Masvingo East Plot 4",
    status: "healthy",
    installedAt: "2025-03-01T10:00:00Z",
    loanStatus: "active",
    lastReading: "2026-02-18T09:28:00Z",
    latestTemp: 34.8,
    latestHumidity: 55,
    latestWeight: 19.7,
    latestVibration: 0.2,
  },
  {
    id: "hive_003",
    name: "River Valley C",
    location: "Masvingo South Plot 7",
    status: "warning",
    installedAt: "2025-04-15T14:00:00Z",
    loanStatus: "active",
    lastReading: "2026-02-18T09:25:00Z",
    latestTemp: 37.1,
    latestHumidity: 68,
    latestWeight: 17.2,
    latestVibration: 0.8,
  },
  {
    id: "hive_004",
    name: "Hilltop Garden D",
    location: "Masvingo North Plot 2",
    status: "healthy",
    installedAt: "2025-06-01T09:00:00Z",
    loanStatus: "paid",
    lastReading: "2026-02-18T09:32:00Z",
    latestTemp: 35.5,
    latestHumidity: 60,
    latestWeight: 24.1,
    latestVibration: 0.2,
  },
  {
    id: "hive_005",
    name: "Wildflower Meadow E",
    location: "Masvingo West Plot 9",
    status: "critical",
    installedAt: "2025-08-01T11:00:00Z",
    loanStatus: "pending",
    lastReading: "2026-02-18T08:15:00Z",
    latestTemp: 31.4,
    latestHumidity: 72,
    latestWeight: 14.3,
    latestVibration: 1.5,
  },
];

// ---------- Sensor Readings (12 months of simulated history) ----------
function generateSensorData(hiveId: string): SensorReading[] {
  const data: SensorReading[] = [];
  const baseTemp = hiveId === "hive_003" ? 36 : hiveId === "hive_005" ? 32 : 35;
  const baseHumidity = hiveId === "hive_003" ? 65 : hiveId === "hive_005" ? 70 : 57;
  const baseWeight = hiveId === "hive_001" ? 18 : hiveId === "hive_004" ? 20 : 15;

  for (let month = 0; month < 12; month++) {
    for (let day = 0; day < 30; day += 3) {
      const date = new Date(2025, 2 + month, 1 + day);
      const seasonFactor = Math.sin((month / 12) * Math.PI * 2) * 2;
      data.push({
        timestamp: date.toISOString(),
        tempInternal: +(baseTemp + seasonFactor + (Math.random() - 0.5) * 2).toFixed(1),
        tempExternal: +(baseTemp - 10 + seasonFactor * 2 + (Math.random() - 0.5) * 4).toFixed(1),
        humidity: +(baseHumidity + seasonFactor * 3 + (Math.random() - 0.5) * 6).toFixed(1),
        weight: +(baseWeight + month * 0.6 + (Math.random() - 0.3) * 2).toFixed(1),
        vibration: +(0.2 + Math.random() * 0.4 + (hiveId === "hive_005" ? 0.8 : 0)).toFixed(2),
      });
    }
  }
  return data;
}

export const sensorDataByHive: Record<string, SensorReading[]> = {
  hive_001: generateSensorData("hive_001"),
  hive_002: generateSensorData("hive_002"),
  hive_003: generateSensorData("hive_003"),
  hive_004: generateSensorData("hive_004"),
  hive_005: generateSensorData("hive_005"),
};

// ---------- Alerts ----------
export const alerts: Alert[] = [
  {
    id: "alert_001",
    hiveId: "hive_003",
    hiveName: "River Valley C",
    type: "pest",
    severity: "high",
    title: "Varroa Mite Detected",
    description: "AI image analysis detected elevated Varroa mite presence at the hive entrance. Estimated infestation level: moderate-high (8 mites per 100 bees).",
    recommendation: "Apply approved miticide treatment within 48 hours. Consider oxalic acid vaporization during brood-free period. Schedule follow-up inspection in 7 days.",
    imageUrl: "https://placehold.co/400x300/FEF3C7/92400E?text=Varroa+Mite+Detection",
    createdAt: "2026-02-16T14:30:00Z",
  },
  {
    id: "alert_002",
    hiveId: "hive_005",
    hiveName: "Wildflower Meadow E",
    type: "disease",
    severity: "critical",
    title: "Possible Foulbrood Symptoms",
    description: "Camera analysis detected irregular brood patterns and potential discoloration consistent with American Foulbrood. Confidence: 72%. Manual inspection required urgently.",
    recommendation: "DO NOT open other hives after inspecting this one. Use dedicated tools. If confirmed, quarantine immediately and contact local beekeeping inspector. Burn contaminated frames if necessary.",
    imageUrl: "https://placehold.co/400x300/FEE2E2/991B1B?text=Foulbrood+Alert",
    createdAt: "2026-02-17T08:00:00Z",
  },
  {
    id: "alert_003",
    hiveId: "hive_005",
    hiveName: "Wildflower Meadow E",
    type: "environment",
    severity: "high",
    title: "Abnormal Temperature Drop",
    description: "Internal temperature dropped to 31.4°C, significantly below the optimal 34-36°C range. Colony may be weakening or queen may be absent.",
    recommendation: "Inspect colony strength. Check for queen presence. Consider combining with a stronger colony if population is too low to maintain temperature. Add insulation if weather is cold.",
    createdAt: "2026-02-18T06:00:00Z",
  },
  {
    id: "alert_004",
    hiveId: "hive_001",
    hiveName: "Sunflower Ridge A",
    type: "maintenance",
    severity: "low",
    title: "Scheduled Inspection Due",
    description: "It has been 14 days since the last manual inspection. Regular inspections help catch issues early and maintain colony records.",
    recommendation: "Perform routine inspection: check brood pattern, queen presence, food stores, and signs of disease. Log findings in your dashboard.",
    createdAt: "2026-02-15T09:00:00Z",
    resolvedAt: "2026-02-16T11:00:00Z",
  },
  {
    id: "alert_005",
    hiveId: "hive_002",
    hiveName: "Sunflower Ridge B",
    type: "swarm",
    severity: "medium",
    title: "Swarm Preparation Indicators",
    description: "Vibration analysis detected patterns consistent with pre-swarm behavior. Queen cells may be present. Weight has plateaued despite nectar flow.",
    recommendation: "Inspect for queen cells. Consider splitting the hive to prevent swarming. Add supers if the colony is honey-bound. Monitor vibration closely over next 72 hours.",
    createdAt: "2026-02-14T16:00:00Z",
  },
];

// ---------- Harvests ----------
export const harvests: Harvest[] = [
  {
    id: "hvst_001", hiveId: "hive_001", hiveName: "Sunflower Ridge A",
    weightSensor: 4.2, weightDelivered: 4.1, qualityGrade: "A",
    season: "Spring 2025", status: "completed", payment: 45.00, harvestedAt: "2025-10-15T08:00:00Z",
  },
  {
    id: "hvst_002", hiveId: "hive_002", hiveName: "Sunflower Ridge B",
    weightSensor: 3.8, weightDelivered: 3.7, qualityGrade: "A",
    season: "Spring 2025", status: "completed", payment: 41.00, harvestedAt: "2025-10-18T10:00:00Z",
  },
  {
    id: "hvst_003", hiveId: "hive_004", hiveName: "Hilltop Garden D",
    weightSensor: 5.1, weightDelivered: 5.0, qualityGrade: "A",
    season: "Summer 2025", status: "completed", payment: 55.00, harvestedAt: "2025-12-20T09:00:00Z",
  },
  {
    id: "hvst_004", hiveId: "hive_001", hiveName: "Sunflower Ridge A",
    weightSensor: 3.5, weightDelivered: 3.4, qualityGrade: "B",
    season: "Summer 2025", status: "completed", payment: 34.00, harvestedAt: "2025-12-22T11:00:00Z",
  },
  {
    id: "hvst_005", hiveId: "hive_003", hiveName: "River Valley C",
    weightSensor: 2.8, weightDelivered: 2.6, qualityGrade: "B",
    season: "Autumn 2025", status: "completed", payment: 26.00, harvestedAt: "2026-01-10T14:00:00Z",
  },
  {
    id: "hvst_006", hiveId: "hive_004", hiveName: "Hilltop Garden D",
    weightSensor: 4.0, weightDelivered: 3.9, qualityGrade: "A",
    season: "Autumn 2025", status: "completed", payment: 43.00, harvestedAt: "2026-01-12T08:00:00Z",
  },
  {
    id: "hvst_007", hiveId: "hive_002", hiveName: "Sunflower Ridge B",
    weightSensor: 3.2, weightDelivered: 3.1, qualityGrade: "B",
    season: "Autumn 2025", status: "completed", payment: 31.00, harvestedAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "hvst_008", hiveId: "hive_001", hiveName: "Sunflower Ridge A",
    weightSensor: 4.8, weightDelivered: 4.7, qualityGrade: "A",
    season: "Summer 2026", status: "in-review", payment: 0, harvestedAt: "2026-02-10T09:00:00Z",
  },
];

// ---------- Marketplace Products ----------
export const products: Product[] = [
  {
    id: "prod_001", name: "Masvingo Wildflower Raw Honey", price: 12.00,
    description: "Pure, unprocessed wildflower honey from the Masvingo highlands. Rich amber color with complex floral notes. Cold-extracted to preserve natural enzymes and pollen. Perfect for tea, toast, or straight from the spoon.",
    origin: "Masvingo East", farmerName: "Tendai Moyo",
    farmerStory: "Tendai has been beekeeping for three generations. His family's tradition meets modern Smart Hive technology to produce the finest honey in the region.",
    stock: 24, weight: "500g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Wildflower+Honey",
    qrCodeUrl: "", harvestDate: "2025-10-15", category: "raw",
  },
  {
    id: "prod_002", name: "Hilltop Garden Creamed Honey", price: 14.50,
    description: "Smooth, spreadable creamed honey with a velvety texture. Naturally crystallized and whipped to perfection. A favourite for breakfast spreads and baking.",
    origin: "Masvingo North", farmerName: "Tendai Moyo",
    farmerStory: "From Tendai's Hilltop Garden hive, this honey benefits from diverse nectar sources including acacia and msasa blossoms.",
    stock: 18, weight: "350g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Creamed+Honey",
    qrCodeUrl: "", harvestDate: "2025-12-20", category: "creamed",
  },
  {
    id: "prod_003", name: "Raw Comb Honey", price: 18.00,
    description: "Honey still in its natural beeswax comb. The ultimate in freshness and purity — you can chew the wax or spread the whole thing on warm bread.",
    origin: "Masvingo East", farmerName: "Tendai Moyo",
    farmerStory: "Cut directly from Sunflower Ridge B, this comb honey showcases the purest form of honey nature has to offer.",
    stock: 8, weight: "300g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Comb+Honey",
    qrCodeUrl: "", harvestDate: "2025-10-18", category: "comb",
  },
  {
    id: "prod_004", name: "Lemon & Ginger Infused Honey", price: 15.00,
    description: "Our signature wildflower honey infused with fresh Zimbabwean lemon and ginger root. A soothing blend perfect for teas, marinades, and natural remedies.",
    origin: "Masvingo South", farmerName: "Grace Ncube",
    farmerStory: "Grace combines traditional Ndebele recipes with modern beekeeping. Her infused honeys are beloved at local markets.",
    stock: 15, weight: "250g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Lemon+Ginger",
    qrCodeUrl: "", harvestDate: "2026-01-10", category: "infused",
  },
  {
    id: "prod_005", name: "Msasa Blossom Honey", price: 16.00,
    description: "Single-origin honey harvested during the msasa blossom season. Light golden colour with delicate, fruity sweetness and a clean finish.",
    origin: "Chipinge", farmerName: "Tatenda Chirwa",
    farmerStory: "Tatenda manages 8 Smart Hives in the Eastern Highlands. The unique microclimate produces honey with distinctive floral characteristics.",
    stock: 12, weight: "500g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Msasa+Blossom",
    qrCodeUrl: "", harvestDate: "2025-09-20", category: "raw",
  },
  {
    id: "prod_006", name: "River Valley Raw Honey", price: 11.00,
    description: "Dark, robust honey from riverbank wildflowers. Bold flavour with hints of eucalyptus and wild herbs. Rich in minerals and antioxidants.",
    origin: "Masvingo South", farmerName: "Tendai Moyo",
    farmerStory: "Tendai's River Valley hive produces a uniquely rich honey, darker and more complex than his highland harvests.",
    stock: 20, weight: "500g", qualityGrade: "B",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=River+Valley",
    qrCodeUrl: "", harvestDate: "2026-01-10", category: "raw",
  },
  {
    id: "prod_007", name: "Cinnamon Infused Honey", price: 13.50,
    description: "Warm, aromatic honey infused with true Ceylon cinnamon. Ideal for porridge, yoghurt, and warm drinks. A taste of comfort in every spoonful.",
    origin: "Masvingo North", farmerName: "Grace Ncube",
    farmerStory: "Grace's cinnamon honey is crafted in small batches, using only the finest cinnamon bark sourced from local spice growers.",
    stock: 10, weight: "250g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Cinnamon+Honey",
    qrCodeUrl: "", harvestDate: "2026-01-15", category: "infused",
  },
  {
    id: "prod_008", name: "Pure Acacia Honey", price: 17.00,
    description: "Premium acacia honey with a light, almost transparent appearance. Mild, delicate flavour that crystallizes slowly. A perfect table honey.",
    origin: "Mutare", farmerName: "Blessing Maposa",
    farmerStory: "Blessing's acacia hives sit at the edge of vast acacia woodland in Mutare. His bees produce some of the lightest, purest honey in the country.",
    stock: 6, weight: "500g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Acacia+Honey",
    qrCodeUrl: "", harvestDate: "2025-11-05", category: "raw",
  },
  {
    id: "prod_009", name: "Chilli Infused Honey", price: 14.00,
    description: "Sweet heat — wildflower honey infused with bird's eye chilli peppers. Perfect for pizza, fried chicken, cocktails, and cheese boards.",
    origin: "Masvingo East", farmerName: "Tendai Moyo",
    farmerStory: "Tendai experimented with chilli-infused honey after a trip to local spice farms. It's quickly become one of his best sellers.",
    stock: 14, weight: "250g", qualityGrade: "B",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Chilli+Honey",
    qrCodeUrl: "", harvestDate: "2025-12-22", category: "infused",
  },
  {
    id: "prod_010", name: "Mini Tasting Set (4 pack)", price: 22.00,
    description: "A curated selection of four 100g jars — Wildflower Raw, Msasa Blossom, Cinnamon Infused, and Lemon Ginger. The perfect gift or introduction to Zimbabwean honey.",
    origin: "Various", farmerName: "Multiple Farmers",
    farmerStory: "A collaborative product featuring the best of E Mukoko's farming network. Each jar tells a different story from a different corner of Zimbabwe.",
    stock: 30, weight: "4x100g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Tasting+Set",
    qrCodeUrl: "", harvestDate: "2026-01-20", category: "raw",
  },
  {
    id: "prod_011", name: "Eastern Highlands Raw Honey", price: 15.50,
    description: "Multi-floral honey from the misty Eastern Highlands. Medium body with a sweet, slightly tangy finish. Harvested at peak ripeness.",
    origin: "Chimanimani", farmerName: "Tatenda Chirwa",
    farmerStory: "Tatenda's highland apiaries benefit from the region's biodiversity, producing honey with unique complexity.",
    stock: 9, weight: "500g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Highland+Honey",
    qrCodeUrl: "", harvestDate: "2025-10-25", category: "raw",
  },
  {
    id: "prod_012", name: "Baobab Honey", price: 19.00,
    description: "Rare honey from baobab flower nectar. Distinctly tropical with citrus undertones. Limited seasonal availability makes this a collector's favourite.",
    origin: "Gonarezhou", farmerName: "Blessing Maposa",
    farmerStory: "Blessing's remote apiaries near Gonarezhou National Park produce this rare baobab honey only during the brief flowering season.",
    stock: 4, weight: "350g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Baobab+Honey",
    qrCodeUrl: "", harvestDate: "2025-11-30", category: "raw",
  },
  {
    id: "prod_013", name: "Honey & Propolis Blend", price: 20.00,
    description: "Our premium health blend combining pure raw honey with bee propolis — a natural antibacterial and immune-boosting compound. Take a spoonful daily for wellness.",
    origin: "Masvingo East", farmerName: "Tendai Moyo",
    farmerStory: "Tendai's propolis blend draws on both traditional and modern wellness knowledge. Propolis is carefully harvested from his Smart Hives.",
    stock: 11, weight: "250g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Propolis+Blend",
    qrCodeUrl: "", harvestDate: "2026-02-01", category: "raw",
  },
  {
    id: "prod_014", name: "Vanilla Bean Infused Honey", price: 16.50,
    description: "Luxurious honey infused with real Madagascar vanilla beans. Pairs beautifully with desserts, pancakes, and coffees. A truly indulgent treat.",
    origin: "Masvingo North", farmerName: "Grace Ncube",
    farmerStory: "Grace sources high-quality vanilla beans to create this premium infusion. Each batch is small and made with care.",
    stock: 7, weight: "250g", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Vanilla+Honey",
    qrCodeUrl: "", harvestDate: "2026-01-20", category: "infused",
  },
  {
    id: "prod_015", name: "Bulk Raw Honey (1kg)", price: 22.00,
    description: "Our best-selling wildflower honey in a convenient 1kg jar. Great value for families and regular consumers. Raw, unfiltered, and full of goodness.",
    origin: "Masvingo East", farmerName: "Tendai Moyo",
    farmerStory: "Straight from Tendai's award-winning Sunflower Ridge apiaries. The family size for honey lovers.",
    stock: 35, weight: "1kg", qualityGrade: "A",
    imageUrl: "https://placehold.co/400x400/FEF3C7/92400E?text=Bulk+1kg",
    qrCodeUrl: "", harvestDate: "2025-10-15", category: "raw",
  },
];

// ---------- Learning Chartboard Articles ----------
export const articles: Article[] = [
  {
    id: "art_001", title: "Getting Started with Beekeeping", category: "beginner",
    excerpt: "Everything you need to know before your first hive — from choosing a location to assembling your protective gear.",
    content: "A comprehensive guide for beginners covering hive selection, site preparation, protective equipment, and your first colony inspection.",
    author: "E Mukoko Team", readTime: "8 min", publishedAt: "2025-06-01T10:00:00Z", icon: "school",
  },
  {
    id: "art_002", title: "Understanding Your Smart Hive Data", category: "beginner",
    excerpt: "Learn to read temperature, humidity, weight, and vibration charts from your IoT dashboard.",
    content: "Your Smart Hive generates data 24/7. This article explains what each metric means, healthy ranges, and when to take action.",
    author: "E Mukoko Team", readTime: "6 min", publishedAt: "2025-06-15T10:00:00Z", icon: "monitoring",
  },
  {
    id: "art_003", title: "Varroa Mite Management", category: "pest-management",
    excerpt: "Identification, monitoring, and treatment strategies for the most common hive pest worldwide.",
    content: "Varroa destructor is the greatest threat to honeybee colonies. Learn alcohol wash testing, threshold levels, organic treatments, and integrated pest management.",
    author: "Dr. Farai Nyathi", readTime: "12 min", publishedAt: "2025-07-10T10:00:00Z", icon: "bug_report",
  },
  {
    id: "art_004", title: "Optimal Harvest Timing", category: "harvesting",
    excerpt: "Use sensor data to determine the perfect moment for harvest — maximizing yield and quality.",
    content: "Weight trends, humidity levels, and nectar flow patterns all indicate harvest readiness. This guide shows you how to interpret your Smart Hive data for optimal harvesting.",
    author: "E Mukoko Team", readTime: "7 min", publishedAt: "2025-08-20T10:00:00Z", icon: "agriculture",
  },
  {
    id: "art_005", title: "Seasonal Hive Management Calendar", category: "seasonal",
    excerpt: "A month-by-month guide to beekeeping tasks throughout the Zimbabwean beekeeping year.",
    content: "Each season brings different challenges and opportunities. This calendar covers feeding, inspection schedules, swarm prevention, harvest windows, and winter preparation.",
    author: "E Mukoko Team", readTime: "10 min", publishedAt: "2025-09-05T10:00:00Z", icon: "calendar_month",
  },
  {
    id: "art_006", title: "Queen Management & Requeening", category: "advanced",
    excerpt: "How to identify queen issues, introduce new queens, and maintain strong genetics in your colonies.",
    content: "A healthy queen is the foundation of a productive colony. Learn to spot queen problems, raise emergency queens, and successfully introduce purchased queens.",
    author: "Dr. Farai Nyathi", readTime: "15 min", publishedAt: "2025-09-20T10:00:00Z", icon: "star",
  },
  {
    id: "art_007", title: "Protecting Hives from Wax Moths", category: "pest-management",
    excerpt: "Prevention and treatment for Greater and Lesser Wax Moth infestations.",
    content: "Wax moths can destroy stored comb and weaken colonies. Learn prevention through strong colonies, proper comb storage, and biological control methods.",
    author: "E Mukoko Team", readTime: "6 min", publishedAt: "2025-10-15T10:00:00Z", icon: "pest_control",
  },
  {
    id: "art_008", title: "Honey Quality & Grading Standards", category: "harvesting",
    excerpt: "Understanding A, B, and C quality grades, moisture content, and what buyers look for.",
    content: "Quality determines price. This guide covers moisture testing, color grading, taste profiles, and how E Mukoko's quality control process works.",
    author: "E Mukoko Team", readTime: "9 min", publishedAt: "2025-11-01T10:00:00Z", icon: "verified",
  },
  {
    id: "art_009", title: "Smart Hive Sensor Troubleshooting", category: "equipment",
    excerpt: "Common sensor issues and how to resolve them — keeping your data flowing accurately.",
    content: "Covers battery replacement, connectivity issues, sensor calibration, and when to contact E Mukoko support.",
    author: "Edith — Tech Team", readTime: "5 min", publishedAt: "2025-11-20T10:00:00Z", icon: "build",
  },
  {
    id: "art_010", title: "Bee-Friendly Planting Guide", category: "seasonal",
    excerpt: "Create the perfect foraging environment around your apiaries with native flower planting.",
    content: "The right plants within foraging range dramatically increase honey production. This guide covers the best native Zimbabwean plants for bees, planting schedules, and layout tips.",
    author: "E Mukoko Team", readTime: "8 min", publishedAt: "2026-01-10T10:00:00Z", icon: "local_florist",
  },
];

// ---------- Notifications ----------
export const notifications: Notification[] = [
  {
    id: "notif_001", type: "alert", title: "Critical: Foulbrood Alert",
    message: "Hive E (Wildflower Meadow) has triggered a critical disease alert. Immediate inspection required.",
    read: false, createdAt: "2026-02-17T08:00:00Z", link: "/dashboard/hives/hive_005",
  },
  {
    id: "notif_002", type: "alert", title: "Varroa Mite Detection",
    message: "AI detected elevated Varroa mite levels in Hive C (River Valley). Treatment recommended within 48 hours.",
    read: false, createdAt: "2026-02-16T14:30:00Z", link: "/dashboard/hives/hive_003",
  },
  {
    id: "notif_003", type: "harvest", title: "Harvest Under Review",
    message: "Your recent harvest from Sunflower Ridge A (4.8kg) is currently under quality review.",
    read: false, createdAt: "2026-02-10T12:00:00Z", link: "/dashboard/profile",
  },
  {
    id: "notif_004", type: "order", title: "New Order Received",
    message: "A customer purchased 2x Wildflower Raw Honey (500g). See your earnings for details.",
    read: true, createdAt: "2026-02-09T16:00:00Z", link: "/dashboard/profile",
  },
  {
    id: "notif_005", type: "system", title: "Welcome to E Mukoko!",
    message: "Your demo account is ready. Explore the dashboard, check your hive data, and browse the marketplace.",
    read: true, createdAt: "2026-02-08T10:00:00Z", link: "/dashboard",
  },
  {
    id: "notif_006", type: "learning", title: "New Article: Varroa Management",
    message: "Dr. Farai Nyathi published a new pest management guide. Read it on the Learning Chartboard.",
    read: true, createdAt: "2026-02-05T09:00:00Z", link: "/learning",
  },
  {
    id: "notif_007", type: "alert", title: "Swarm Warning — Hive B",
    message: "Pre-swarm vibration patterns detected in Sunflower Ridge B. Inspect for queen cells.",
    read: true, createdAt: "2026-02-14T16:00:00Z", link: "/dashboard/hives/hive_002",
  },
];

// ---------- Market Demand Data ----------
export const marketDemandData: MarketDemand[] = [
  { month: "Mar 2025", demand: 120, price: 11.0, supply: 95 },
  { month: "Apr 2025", demand: 135, price: 11.5, supply: 100 },
  { month: "May 2025", demand: 150, price: 12.0, supply: 110 },
  { month: "Jun 2025", demand: 140, price: 12.5, supply: 130 },
  { month: "Jul 2025", demand: 125, price: 12.0, supply: 125 },
  { month: "Aug 2025", demand: 110, price: 11.5, supply: 115 },
  { month: "Sep 2025", demand: 130, price: 12.0, supply: 105 },
  { month: "Oct 2025", demand: 160, price: 13.0, supply: 120 },
  { month: "Nov 2025", demand: 180, price: 14.0, supply: 110 },
  { month: "Dec 2025", demand: 200, price: 15.0, supply: 100 },
  { month: "Jan 2026", demand: 170, price: 14.5, supply: 115 },
  { month: "Feb 2026", demand: 155, price: 13.5, supply: 125 },
];

export const demandByRegion = [
  { region: "Harare", demand: 450, avgPrice: 14.50 },
  { region: "Bulawayo", demand: 280, avgPrice: 13.00 },
  { region: "Masvingo", demand: 200, avgPrice: 12.00 },
  { region: "Mutare", demand: 180, avgPrice: 13.50 },
  { region: "Gweru", demand: 150, avgPrice: 12.50 },
  { region: "Chipinge", demand: 120, avgPrice: 11.50 },
  { region: "Victoria Falls", demand: 220, avgPrice: 16.00 },
  { region: "Kariba", demand: 90, avgPrice: 13.00 },
];
