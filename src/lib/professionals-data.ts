

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
            "description": "Expert air conditioning installation and repair services. We keep you cool in the Cape Town heat.",
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
            "description": "Your trusted partner for all air conditioning needs in Johannesburg. Sales, service, and repairs.",
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
            "description": "Fighting the Durban humidity one AC unit at a time. Fast, reliable, and affordable services.",
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
            "description": "Professional air conditioning services for homes and offices in Pretoria. Stay comfortable all year round.",
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
            "description": "The Eastern Cape's choice for air conditioning. We provide quality installations and prompt repair services.",
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
            "description": "Reliable and efficient air conditioning solutions for the Free State. Quality service you can trust.",
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
            "description": "Modern aluminium doors and windows to enhance your home's aesthetic and security. Custom designs available.",
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
            "description": "High-quality aluminium installations for residential and commercial properties in Johannesburg.",
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
            "description": "Durable and stylish aluminium solutions built to withstand the coastal climate. Free quotes.",
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
            "description": "Custom aluminium doors, windows, and enclosures for the Pretoria market. Quality craftsmanship guaranteed.",
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
            "description": "Your local experts for all aluminium and glass installations in the Friendly City.",
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
            "description": "Providing Bloemfontein with quality aluminium doors and windows for over 10 years. Reliable and affordable.",
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
            "description": "Custom awnings and shade solutions to protect you from the Cape sun. Retractable and fixed options available.",
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
            "description": "Protect your patio and vehicles with our durable and stylish awnings and carports.",
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
            "description": "High-quality awnings designed for the Durban climate. Enhance your outdoor living space.",
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
            "description": "Pretoria's specialists in custom-made awnings for residential and commercial properties.",
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
            "description": "Beat the wind and sun in Gqeberha with our robust and attractive awning solutions.",
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
            "description": "Providing quality shade solutions, from awnings to shadeports, for the Free State community.",
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
            "description": "Modern stainless steel and frameless glass balustrades. Perfect for balconies and staircases with a view.",
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
            "description": "Custom balustrade designs for safety and style. We work with steel, glass, and wood.",
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
            "description": "Marine-grade stainless steel balustrades that are built to last in the humid Durban climate.",
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
            "description": "Specialists in steel balustrades and staircase railings for homes and businesses in Pretoria.",
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
            "description": "Safe, stylish, and durable balustrades for the Windy City. Contact us for a free quote.",
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
            "description": "Creating custom balustrades to add a touch of class and safety to your property.",
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
            "description": "From concept to completion, we create stunning bathroom renovations that add value to your home.",
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
            "description": "Modern and stylish bathroom renovations. We handle all plumbing, tiling, and electrical work.",
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
            "description": "Affordable and quality bathroom renovations for the Durban area. No job too big or small.",
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
            "description": "High-quality bathroom renovations with a focus on premium finishes and waterproofing.",
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
            "description": "Complete bathroom renovation services in Gqeberha, from simple updates to full remodels.",
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
            "description": "We specialize in beautiful and functional bathroom renovations. Expert tiling and plumbing.",
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
            "description": "A wide range of stylish and functional blinds for your home or office. Free measurement and quotes.",
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
            "description": "Venetian, roller, vertical, and custom blinds. Professional installation services across Johannesburg.",
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
            "description": "Quality blinds and shutters designed to withstand the Durban climate. Enhance your privacy and style.",
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
            "description": "Affordable, high-quality blinds supplied and installed in the greater Pretoria area.",
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
            "description": "Your one-stop shop for all types of blinds in Gqeberha. Quality products and expert installation.",
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
            "description": "Complete your home's look with our beautiful range of custom-made blinds. Free consultations.",
            "rating": 4.7,
            "reviews": 16,
            "avatarSeed": "bloem-blinds-decor-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["bloemfontein"]
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
