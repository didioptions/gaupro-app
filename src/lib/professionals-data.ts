
type Professional = {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  reviews: number;
  avatarSeed: string;
  serviceCategory: string;
  serviceLocations?: string[];
  tags?: string[];
  isProVerified?: boolean;
  yearsInBusiness?: number;
  employees?: number;
  address?: string;
  photos?: string[];
  businessHours?: string;
  reviewData?: {
    author: string;
    phone?: string;
    rating: number;
    comment: string;
  }[];
  isDemo: boolean;
  priorityRank: number;
};

type ProfessionalsByCategory = {
  [key: string]: Professional[];
};

export const allProfessionals: ProfessionalsByCategory = {
    "air-conditioning": [
        {
            "id": "ac-demo-1",
            "name": "CoolBreeze AC Cape Town",
            "serviceCategory": "air-conditioning",
            "location": "Cape Town",
            "description": "Expert {service} installation and repair services. We keep you cool in the Cape Town heat.",
            "rating": 4.8,
            "reviews": 25,
            "avatarSeed": "coolbreeze-ac-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["cape-town", "bellville"]
        },
        {
            "id": "ac-demo-2",
            "name": "Jozi Air Solutions",
            "serviceCategory": "air-conditioning",
            "location": "Johannesburg",
            "description": "Your trusted partner for all {service} needs in Johannesburg. Sales, service, and repairs.",
            "rating": 4.7,
            "reviews": 31,
            "avatarSeed": "jozi-air-solutions-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["johannesburg", "sandton"]
        },
        {
            "id": "ac-demo-3",
            "name": "Durban Climate Control",
            "serviceCategory": "air-conditioning",
            "location": "Durban",
            "description": "Fighting the Durban humidity one AC unit at a time. Fast, reliable, and affordable {service} services.",
            "rating": 4.9,
            "reviews": 19,
            "avatarSeed": "durban-climate-control-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["durban", "umhlanga"]
        },
        {
            "id": "ac-demo-4",
            "name": "Pretoria Coolers",
            "serviceCategory": "air-conditioning",
            "location": "Pretoria",
            "description": "Professional {service} services for homes and offices in Pretoria. Stay comfortable all year round.",
            "rating": 4.6,
            "reviews": 22,
            "avatarSeed": "pretoria-coolers-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["pretoria", "centurion"]
        },
        {
            "id": "ac-demo-5",
            "name": "Gqeberha Air Masters",
            "serviceCategory": "air-conditioning",
            "location": "Gqeberha",
            "description": "The Eastern Cape's choice for {service}. We provide quality installations and prompt repair services.",
            "rating": 4.8,
            "reviews": 15,
            "avatarSeed": "gqeberha-air-masters-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["gqeberha"]
        },
        {
            "id": "ac-demo-6",
            "name": "Bloem Air Experts",
            "serviceCategory": "air-conditioning",
            "location": "Bloemfontein",
            "description": "Reliable and efficient {service} solutions for the Free State. Quality service you can trust.",
            "rating": 4.7,
            "reviews": 12,
            "avatarSeed": "bloem-air-experts-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["bloemfontein"]
        }
    ],
    "aluminium-doors-and-windows": [
        {
            "id": "aluminium-demo-1",
            "name": "Cape Aluminium Creations",
            "serviceCategory": "aluminium-doors-and-windows",
            "location": "Cape Town",
            "description": "Modern {service} to enhance your home's aesthetic and security. Custom designs available.",
            "rating": 4.9,
            "reviews": 40,
            "avatarSeed": "cape-aluminium-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["cape-town", "northern-suburbs"]
        },
        {
            "id": "aluminium-demo-2",
            "name": "Jozi Glass & Aluminium",
            "serviceCategory": "aluminium-doors-and-windows",
            "location": "Johannesburg",
            "description": "High-quality {service} installations for residential and commercial properties in Johannesburg.",
            "rating": 4.8,
            "reviews": 55,
            "avatarSeed": "jozi-glass-aluminium-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["johannesburg", "randburg"]
        },
        {
            "id": "aluminium-demo-3",
            "name": "Durban Aluminium Systems",
            "serviceCategory": "aluminium-doors-and-windows",
            "location": "Durban",
            "description": "Durable and stylish {service} solutions built to withstand the coastal climate. Free quotes.",
            "rating": 4.7,
            "reviews": 35,
            "avatarSeed": "durban-aluminium-systems-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["durban", "pinetown"]
        },
        {
            "id": "aluminium-demo-4",
            "name": "Pretoria Aluminium Works",
            "serviceCategory": "aluminium-doors-and-windows",
            "location": "Pretoria",
            "description": "Custom {service}, and enclosures for the Pretoria market. Quality craftsmanship guaranteed.",
            "rating": 4.8,
            "reviews": 29,
            "avatarSeed": "pretoria-aluminium-works-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["pretoria", "akasia"]
        },
        {
            "id": "aluminium-demo-5",
            "name": "Bay Aluminium & Glass",
            "serviceCategory": "aluminium-doors-and-windows",
            "location": "Gqeberha",
            "description": "Your local experts for all {service} and glass installations in the Friendly City.",
            "rating": 4.9,
            "reviews": 21,
            "avatarSeed": "bay-aluminium-glass-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["gqeberha"]
        },
        {
            "id": "aluminium-demo-6",
            "name": "Central Aluminium",
            "serviceCategory": "aluminium-doors-and-windows",
            "location": "Bloemfontein",
            "description": "Providing Bloemfontein with quality {service} for over 10 years. Reliable and affordable.",
            "rating": 4.6,
            "reviews": 18,
            "avatarSeed": "central-aluminium-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["bloemfontein"]
        }
    ],
    "awnings": [
        {
            "id": "awning-demo-1",
            "name": "Shade Solutions Cape",
            "serviceCategory": "awnings",
            "location": "Cape Town",
            "description": "Custom {service} and shade solutions to protect you from the Cape sun. Retractable and fixed options available.",
            "rating": 4.8,
            "reviews": 33,
            "avatarSeed": "shade-solutions-cape-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["cape-town", "table-view"]
        },
        {
            "id": "awning-demo-2",
            "name": "Jozi Awnings & Carports",
            "serviceCategory": "awnings",
            "location": "Johannesburg",
            "description": "Protect your patio and vehicles with our durable and stylish {service} and carports.",
            "rating": 4.7,
            "reviews": 41,
            "avatarSeed": "jozi-awnings-carports-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["johannesburg", "edenvale"]
        },
        {
            "id": "awning-demo-3",
            "name": "Durban Shade Systems",
            "serviceCategory": "awnings",
            "location": "Durban",
            "description": "High-quality {service} designed for the Durban climate. Enhance your outdoor living space.",
            "rating": 4.9,
            "reviews": 27,
            "avatarSeed": "durban-shade-systems-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["durban", "ballito"]
        },
        {
            "id": "awning-demo-4",
            "name": "Capital Awnings PTA",
            "serviceCategory": "awnings",
            "location": "Pretoria",
            "description": "Pretoria's specialists in custom-made {service} for residential and commercial properties.",
            "rating": 4.6,
            "reviews": 24,
            "avatarSeed": "capital-awnings-pta-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["pretoria", "moreleta-park"]
        },
        {
            "id": "awning-demo-5",
            "name": "Bay Awnings PE",
            "serviceCategory": "awnings",
            "location": "Gqeberha",
            "description": "Beat the wind and sun in Gqeberha with our robust and attractive {service} solutions.",
            "rating": 4.8,
            "reviews": 18,
            "avatarSeed": "bay-awnings-pe-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["gqeberha"]
        },
        {
            "id": "awning-demo-6",
            "name": "Free State Shade",
            "serviceCategory": "awnings",
            "location": "Bloemfontein",
            "description": "Providing quality shade solutions, from {service} to shadeports, for the Free State community.",
            "rating": 4.7,
            "reviews": 14,
            "avatarSeed": "free-state-shade-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["bloemfontein"]
        }
    ],
    "balustrades": [
        {
            "id": "balustrade-demo-1",
            "name": "Cape Stainless & Glass",
            "serviceCategory": "balustrades",
            "location": "Cape Town",
            "description": "Modern stainless steel and frameless glass {service}. Perfect for balconies and staircases with a view.",
            "rating": 4.9,
            "reviews": 38,
            "avatarSeed": "cape-stainless-glass-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["cape-town", "camps-bay"]
        },
        {
            "id": "balustrade-demo-2",
            "name": "Jozi Balustrade Kings",
            "serviceCategory": "balustrades",
            "location": "Johannesburg",
            "description": "Custom {service} designs for safety and style. We work with steel, glass, and wood.",
            "rating": 4.8,
            "reviews": 45,
            "avatarSeed": "jozi-balustrade-kings-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["johannesburg", "bryanston"]
        },
        {
            "id": "balustrade-demo-3",
            "name": "Durban Coastal Balustrades",
            "serviceCategory": "balustrades",
            "location": "Durban",
            "description": "Marine-grade stainless steel {service} that are built to last in the humid Durban climate.",
            "rating": 4.7,
            "reviews": 31,
            "avatarSeed": "durban-coastal-balustrades-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["durban", "umdloti"]
        },
        {
            "id": "balustrade-demo-4",
            "name": "Pretoria Steel & Stairs",
            "serviceCategory": "balustrades",
            "location": "Pretoria",
            "description": "Specialists in steel {service} and staircase railings for homes and businesses in Pretoria.",
            "rating": 4.8,
            "reviews": 26,
            "avatarSeed": "pretoria-steel-stairs-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["pretoria", "lynnwood"]
        },
        {
            "id": "balustrade-demo-5",
            "name": "Algoa Bay Balustrades",
            "serviceCategory": "balustrades",
            "location": "Gqeberha",
            "description": "Safe, stylish, and durable {service} for the Windy City. Contact us for a free quote.",
            "rating": 4.9,
            "reviews": 19,
            "avatarSeed": "algoa-bay-balustrades-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["gqeberha"]
        },
        {
            "id": "balustrade-demo-6",
            "name": "Bloem Balustrade Designs",
            "serviceCategory": "balustrades",
            "location": "Bloemfontein",
            "description": "Creating custom {service} to add a touch of class and safety to your property.",
            "rating": 4.7,
            "reviews": 15,
            "avatarSeed": "bloem-balustrade-designs-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["bloemfontein"]
        }
    ],
    "bathroom-renovations": [
        {
            "id": "bath-reno-demo-1",
            "name": "Cape Bathroom Creations",
            "serviceCategory": "bathroom-renovations",
            "location": "Cape Town",
            "description": "From concept to completion, we create stunning {service} that add value to your home.",
            "rating": 4.9,
            "reviews": 42,
            "avatarSeed": "cape-bathroom-creations-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["cape-town", "claremont"]
        },
        {
            "id": "bath-reno-demo-2",
            "name": "Jozi Bathroom Makeovers",
            "serviceCategory": "bathroom-renovations",
            "location": "Johannesburg",
            "description": "Modern and stylish {service}. We handle all plumbing, tiling, and electrical work.",
            "rating": 4.8,
            "reviews": 58,
            "avatarSeed": "jozi-bathroom-makeovers-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["johannesburg", "rosebank"]
        },
        {
            "id": "bath-reno-demo-3",
            "name": "Durban Bathroom Renovators",
            "serviceCategory": "bathroom-renovations",
            "location": "Durban",
            "description": "Affordable and quality {service} for the Durban area. No job too big or small.",
            "rating": 4.7,
            "reviews": 39,
            "avatarSeed": "durban-bathroom-renovators-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["durban", "glenwood"]
        },
        {
            "id": "bath-reno-demo-4",
            "name": "Pretoria Premier Bathrooms",
            "serviceCategory": "bathroom-renovations",
            "location": "Pretoria",
            "description": "High-quality {service} with a focus on premium finishes and waterproofing.",
            "rating": 4.9,
            "reviews": 31,
            "avatarSeed": "pretoria-premier-bathrooms-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["pretoria", "waterkloof"]
        },
        {
            "id": "bath-reno-demo-5",
            "name": "Bay Bathroom Solutions",
            "serviceCategory": "bathroom-renovations",
            "location": "Gqeberha",
            "description": "Complete {service} services in Gqeberha, from simple updates to full remodels.",
            "rating": 4.8,
            "reviews": 23,
            "avatarSeed": "bay-bathroom-solutions-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["gqeberha"]
        },
        {
            "id": "bath-reno-demo-6",
            "name": "Bloem Bathroom & Tiling",
            "serviceCategory": "bathroom-renovations",
            "location": "Bloemfontein",
            "description": "We specialize in beautiful and functional {service}. Expert tiling and plumbing.",
            "rating": 4.7,
            "reviews": 19,
            "avatarSeed": "bloem-bathroom-tiling-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["bloemfontein"]
        }
    ],
    "blinds": [
        {
            "id": "blinds-demo-1",
            "name": "Cape Blind Co.",
            "serviceCategory": "blinds",
            "location": "Cape Town",
            "description": "A wide range of stylish and functional {service} for your home or office. Free measurement and quotes.",
            "rating": 4.8,
            "reviews": 36,
            "avatarSeed": "cape-blind-co-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["cape-town", "milnerton"]
        },
        {
            "id": "blinds-demo-2",
            "name": "Jozi Blind Experts",
            "serviceCategory": "blinds",
            "location": "Johannesburg",
            "description": "Venetian, roller, vertical, and custom {service}. Professional installation services across Johannesburg.",
            "rating": 4.7,
            "reviews": 44,
            "avatarSeed": "jozi-blind-experts-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["johannesburg", "fourways"]
        },
        {
            "id": "blinds-demo-3",
            "name": "Durban Blind & Shutter",
            "serviceCategory": "blinds",
            "location": "Durban",
            "description": "Quality {service} and shutters designed to withstand the Durban climate. Enhance your privacy and style.",
            "rating": 4.9,
            "reviews": 30,
            "avatarSeed": "durban-blind-shutter-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["durban", "la-lucia"]
        },
        {
            "id": "blinds-demo-4",
            "name": "Pretoria Blinds Direct",
            "serviceCategory": "blinds",
            "location": "Pretoria",
            "description": "Affordable, high-quality {service} supplied and installed in the greater Pretoria area.",
            "rating": 4.6,
            "reviews": 28,
            "avatarSeed": "pretoria-blinds-direct-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["pretoria", "menlyn"]
        },
        {
            "id": "blinds-demo-5",
            "name": "The Blind Factory PE",
            "serviceCategory": "blinds",
            "location": "Gqeberha",
            "description": "Your one-stop shop for all types of {service} in Gqeberha. Quality products and expert installation.",
            "rating": 4.8,
            "reviews": 20,
            "avatarSeed": "the-blind-factory-pe-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["gqeberha"]
        },
        {
            "id": "blinds-demo-6",
            "name": "Bloem Blinds & Decor",
            "serviceCategory": "blinds",
            "location": "Bloemfontein",
            "description": "Complete your home's look with our beautiful range of custom-made {service}. Free consultations.",
            "rating": 4.7,
            "reviews": 16,
            "avatarSeed": "bloem-blinds-decor-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["bloemfontein"]
        }
    ],
    "rubble-removal": [
        {
            "id": "rr-001",
            "name": "Joburg Rubble Pros",
            "location": "Johannesburg",
            "description": "Fast and reliable {service} across Johannesburg. We handle building rubble, garden refuse, and general waste. Same-day service available.",
            "rating": 4.8,
            "reviews": 152,
            "avatarSeed": "joburg-rubble-pros-logo",
            "serviceCategory": "rubble-removal",
            "isDemo": true,
            "priorityRank": 99
        },
        {
            "id": "rr-002",
            "name": "Cape Rubble Removers",
            "location": "Cape Town",
            "description": "Efficient {service} for the Cape Town area. From construction sites to home clean-ups, we clear it all. Eco-friendly disposal.",
            "rating": 4.9,
            "reviews": 118,
            "avatarSeed": "cape-rubble-removers-logo",
            "serviceCategory": "rubble-removal",
            "isDemo": true,
            "priorityRank": 99
        },
        {
            "id": "rr-003",
            "name": "Durban Waste Warriors",
            "location": "Durban",
            "description": "Your trusted partner for {service} in Durban. We offer skip hire and manual loading services for all types of waste.",
            "rating": 4.7,
            "reviews": 95,
            "avatarSeed": "durban-waste-warriors-logo",
            "serviceCategory": "rubble-removal",
            "isDemo": true,
            "priorityRank": 99
        },
        {
            "id": "rr-004",
            "name": "Pretoria Site Cleaners",
            "location": "Pretoria",
            "description": "Specialists in construction site {service} and general waste management in Pretoria. Competitive pricing and professional service.",
            "rating": 4.8,
            "reviews": 88,
            "avatarSeed": "pretoria-site-cleaners-logo",
            "serviceCategory": "rubble-removal",
            "isDemo": true,
            "priorityRank": 99
        },
        {
            "id": "rr-005",
            "name": "Quick Rubble Randburg",
            "location": "Randburg",
            "description": "Need {service} fast? We offer quick and affordable services in Randburg and surrounding areas. Call us for a free quote.",
            "rating": 4.9,
            "reviews": 76,
            "avatarSeed": "quick-rubble-randburg-logo",
            "serviceCategory": "rubble-removal",
            "isDemo": true,
            "priorityRank": 99
        },
        {
            "id": "rr-006",
            "name": "Sandton Skip & Rubble",
            "location": "Sandton",
            "description": "Premium {service} and skip hire for Sandton's residential and commercial projects. Professional and discreet.",
            "rating": 5.0,
            "reviews": 102,
            "avatarSeed": "sandton-skip-rubble-logo",
            "serviceCategory": "rubble-removal",
            "isDemo": true,
            "priorityRank": 99
        }
    ],
    "tree-felling": [
        {
            "id": "tf-001",
            "name": "Joburg Tree Fellers",
            "location": "Johannesburg",
            "description": "Professional and insured {service}. We handle large trees, stump grinding, and palm tree removal safely and efficiently.",
            "rating": 4.9,
            "reviews": 210,
            "avatarSeed": "joburg-tree-fellers-logo",
            "serviceCategory": "tree-felling",
            "isDemo": true,
            "priorityRank": 99
        },
        {
            "id": "tf-002",
            "name": "Cape Tree Surgeons",
            "location": "Cape Town",
            "description": "Expert {service} and arborist services in Cape Town. We specialize in dangerous tree removal and precision pruning.",
            "rating": 5.0,
            "reviews": 180,
            "avatarSeed": "cape-tree-surgeons-logo",
            "serviceCategory": "tree-felling",
            "isDemo": true,
            "priorityRank": 99
        },
        {
            "id": "tf-003",
            "name": "Durban Tree Worx",
            "location": "Durban",
            "description": "Complete {service} solutions for Durban's lush suburbs. From trimming to felling, we do it all with a focus on safety.",
            "rating": 4.8,
            "reviews": 155,
            "avatarSeed": "durban-tree-worx-logo",
            "serviceCategory": "tree-felling",
            "isDemo": true,
            "priorityRank": 99
        },
        {
            "id": "tf-004",
            "name": "Pretoria Tree Services",
            "location": "Pretoria",
            "description": "Affordable and reliable {service} in Pretoria. Our services include stump removal and site clearing.",
            "rating": 4.7,
            "reviews": 132,
            "avatarSeed": "pretoria-tree-services-logo",
            "serviceCategory": "tree-felling",
            "isDemo": true,
            "priorityRank": 99
        },
        {
            "id": "tf-005",
            "name": "The Tree Felling Co.",
            "location": "Fourways",
            "description": "Your local experts in {service}. We are fully insured and offer free, no-obligation quotes for any job.",
            "rating": 4.9,
            "reviews": 98,
            "avatarSeed": "the-tree-felling-co-logo",
            "serviceCategory": "tree-felling",
            "isDemo": true,
            "priorityRank": 99
        },
        {
            "id": "tf-006",
            "name": "Advanced Tree Felling",
            "location": "Centurion",
            "description": "Using the latest equipment for safe and efficient {service}. We handle complex removals near buildings and power lines.",
            "rating": 4.8,
            "reviews": 115,
            "avatarSeed": "advanced-tree-felling-logo",
            "serviceCategory": "tree-felling",
            "isDemo": true,
            "priorityRank": 99
        }
    ]
};

export const getProfessionalById = (id: string): Professional | null => {
    for (const category in allProfessionals) {
        if (Object.prototype.hasOwnProperty.call(allProfessionals, category)) {
            const professionalsInCategory = allProfessionals[category];
            const found = professionalsInCategory.find((pro: Professional) => pro.id === id);
            if (found) {
                return found;
            }
        }
    }
    return null;
};
