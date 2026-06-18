
export interface SeedProfile {
  id: string; // The SEO-friendly slug
  name: string;
  category: string;
  serviceCategory: string;
  description: string;
  locations: string[];
  location: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  avatarSeed: string;
  photos: string[];
  isUnclaimed: boolean;
  claimable: boolean;
  featured: boolean;
  rating: number | null;
  reviews: number;
  priorityRank: number;
}

/**
 * Real prominent businesses in Gauteng for initial marketplace population.
 * These profiles are intended to be high-quality and "claimable" by the owners.
 */
export const seedPros: SeedProfile[] = [
  {
    id: "jet-demolition-johannesburg",
    name: "Jet Demolition",
    category: "demolition",
    serviceCategory: "Demolition Contractors",
    description: "Jet Demolition is a leading heavy industrial demolition specialist in South Africa. They provide safe and efficient demolition solutions for large-scale mining, industrial, and commercial projects across Gauteng. Their expertise covers explosive demolition, mechanical dismantling, and hazardous material abatement.",
    locations: ["johannesburg", "sandton", "kempton-park"],
    location: "johannesburg",
    phone: "011 495 3800",
    email: "",
    website: "https://www.jetdemolition.co.za",
    address: "15 Main Reef Road, Langlaagte, Johannesburg",
    avatarSeed: "demolition-image",
    photos: ["https://picsum.photos/seed/jet1/800/600", "https://picsum.photos/seed/jet2/800/600"],
    isUnclaimed: true,
    claimable: true,
    featured: false,
    rating: null,
    reviews: 0,
    priorityRank: 10
  },
  {
    id: "phoenician-group-johannesburg",
    name: "Phoenician Group",
    category: "demolition",
    serviceCategory: "Demolition Contractors",
    description: "Phoenician Group offers professional demolition, bulk earthworks, and environmental services. Based in Johannesburg, they serve the construction and mining industries with a focus on safety and sustainable recycling of demolition debris.",
    locations: ["johannesburg", "randburg", "midrand"],
    location: "johannesburg",
    phone: "011 442 1211",
    email: "",
    website: "https://www.phoeniciangroup.co.za",
    address: "Sandton, Johannesburg",
    avatarSeed: "demolition-image",
    photos: ["https://picsum.photos/seed/phoe1/800/600"],
    isUnclaimed: true,
    claimable: true,
    featured: false,
    rating: null,
    reviews: 0,
    priorityRank: 8
  },
  {
    id: "wreckers-demolition-germiston",
    name: "Wreckers Demolition",
    category: "demolition",
    serviceCategory: "Demolition Contractors",
    description: "Wreckers is an established name in the South African demolition industry, providing controlled demolition services for residential, commercial, and industrial structures. They operate extensively in Germiston and the wider East Rand region.",
    locations: ["germiston", "alberton", "boksburg"],
    location: "germiston",
    phone: "011 824 1630",
    email: "",
    website: "http://www.wreckers.co.za",
    address: "Germiston, Gauteng",
    avatarSeed: "demolition-image",
    photos: ["https://picsum.photos/seed/wreck1/800/600"],
    isUnclaimed: true,
    claimable: true,
    featured: false,
    rating: null,
    reviews: 0,
    priorityRank: 7
  },
  {
    id: "goscor-plant-hire-kempton-park",
    name: "Goscor Plant Hire",
    category: "plant-hire",
    serviceCategory: "Plant Hire",
    description: "Goscor provides a comprehensive range of construction equipment for hire, including excavators, rollers, and TLBs. They are a preferred partner for construction firms in the Kempton Park and East Rand area, known for well-maintained machinery and reliable support.",
    locations: ["kempton-park", "benoni", "springs"],
    location: "kempton-park",
    phone: "011 923 2900",
    email: "",
    website: "https://www.goscorplanthire.co.za",
    address: "Chloorkop, Kempton Park",
    avatarSeed: "plant-hire-image",
    photos: ["https://picsum.photos/seed/goscor1/800/600"],
    isUnclaimed: true,
    claimable: true,
    featured: false,
    rating: null,
    reviews: 0,
    priorityRank: 10
  },
  {
    id: "coastal-hire-benoni",
    name: "Coastal Hire Benoni",
    category: "plant-hire",
    serviceCategory: "Plant Hire",
    description: "Coastal Hire is Southern Africa's leading small equipment hire franchise. The Benoni branch provides a wide variety of tools and small plant machinery for DIY enthusiasts and contractors alike, including generators, breakers, and compactors.",
    locations: ["benoni", "springs", "brakpan"],
    location: "benoni",
    phone: "011 425 2111",
    email: "",
    website: "https://www.coastalhire.co.za",
    address: "Benoni, Gauteng",
    avatarSeed: "plant-hire-image",
    photos: ["https://picsum.photos/seed/coastal1/800/600"],
    isUnclaimed: true,
    claimable: true,
    featured: false,
    rating: null,
    reviews: 0,
    priorityRank: 9
  },
  {
    id: "ash-rubble-removal-randburg",
    name: "Ash Rubble Removal",
    category: "rubble-removal",
    serviceCategory: "Rubble Removal",
    description: "Ash Rubble Removal provides efficient waste management and site clearing services in Randburg and surrounding suburbs. They specialize in building rubble, garden refuse, and general waste removal with a commitment to responsible dumping practices.",
    locations: ["randburg", "sandton", "roodepoort"],
    location: "randburg",
    phone: "072 320 8387",
    email: "",
    website: "https://www.ashrubbleremoval.co.za",
    address: "Randburg, Johannesburg",
    avatarSeed: "rubble-removal-image",
    photos: ["https://picsum.photos/seed/ash1/800/600"],
    isUnclaimed: true,
    claimable: true,
    featured: false,
    rating: null,
    reviews: 0,
    priorityRank: 7
  },
  {
    id: "it-tlb-hire-midrand",
    name: "I.T. TLB Hire",
    category: "tlb-hire",
    serviceCategory: "TLB Hire",
    description: "I.T. TLB Hire offers competitive rates on tractor-loader-backhoe rentals for earthmoving, trenching, and loading tasks. Serving the Midrand and Centurion areas, they provide operators with their machinery to ensure project efficiency.",
    locations: ["midrand", "centurion", "pretoria"],
    location: "midrand",
    phone: "083 654 3210",
    email: "",
    website: "",
    address: "Midrand, Gauteng",
    avatarSeed: "tlb-hire-image",
    photos: ["https://picsum.photos/seed/ittlb1/800/600"],
    isUnclaimed: true,
    claimable: true,
    featured: false,
    rating: null,
    reviews: 0,
    priorityRank: 6
  }
];
