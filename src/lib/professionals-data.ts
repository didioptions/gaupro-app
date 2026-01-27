
type Professional = {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  reviews: number;
  avatarSeed: string;
  serviceCategory: string;
  isProVerified?: boolean;
  isDemo: boolean;
  priorityRank: number;
  yearsInBusiness?: number;
  employees?: number;
  services?: string[];
  reviewData?: { author: string; phone?: string; rating: number; comment: string }[];
  qa?: { question: string; answer: string }[];
};

type ProfessionalsByCategory = { [key: string]: Professional[] };

export const allProfessionals: ProfessionalsByCategory = {
  "air-conditioning": [
    {
      "id": "pro-ac-1",
      "name": "Gauteng Air Solutions",
      "location": "Sandton, Johannesburg",
      "description": "Top-rated air conditioning installation and HVAC maintenance services across Gauteng. We specialize in Samsung and LG split units for residential homes and energy-efficient climate control for corporate offices. Our team offers professional aircon re-gassing, leak detection, and seasonal servicing to ensure your unit runs perfectly during the hot South African summers.",
      "rating": 4.9,
      "reviews": 42,
      "avatarSeed": "ac-logo-1",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "serviceCategory": "Air Conditioning",
      "yearsInBusiness": 10,
      "employees": 12,
      "services": ["Aircon Installation", "HVAC Maintenance", "Re-gassing", "Filter Cleaning"],
      "reviewData": [{ "author": "Thabo M.", "rating": 5, "comment": "Excellent installation of two Samsung units. Clean and professional." }, { "author": "Sarah W.", "rating": 5, "comment": "They fixed my leaking aircon in no time. Highly recommended." }, { "author": "Chris P.", "rating": 4, "comment": "Great service, slightly late but the work was top-notch." }, { "author": "Lindiwe N.", "rating": 5, "comment": "Professional team and very competitive pricing for Sandton area." }],
      "qa": [
        {
          "question": "Describe a recent project that you have completed.",
          "answer": "I have recently done an extension on a verandah; we leveled the ground built it up, filled it then cemented it."
        },
        {
          "question": "Who are some of your customers and can you provide traceable references?",
          "answer": "Sweetmart; Cherry Lane"
        },
        {
          "question": "Do you provide any guarantee of your workmanship and/or services. If yes, please share the details here.",
          "answer": "We offer a 6 month guarantee on newly installed units."
        }
      ]
    },
    {
      "id": "pro-ac-2",
      "name": "Pretoria Cool-Tech HVAC",
      "location": "Pretoria East, Pretoria",
      "description": "Specialized HVAC contractors providing residential and industrial air conditioning solutions in Pretoria and surrounding areas. We supply and fit Alliance and Daikin inverter technology to help you save on electricity costs. From complex ducting systems to simple bedroom units, our certified technicians provide reliable 24/7 support.",
      "rating": 4.7,
      "reviews": 18,
      "avatarSeed": "ac-logo-2",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "serviceCategory": "Air Conditioning",
      "yearsInBusiness": 15,
      "employees": 20,
      "services": ["Air Conditioning", "Builders", "Carports", "Doors", "Electricians", "Garage Door Motors", "Garage Doors", "Gate Motors", "Handymen", "Home Improvements", "Painters", "Palisade Fencing", "Refrigeration", "Roofing", "Shutters", "Steel Works", "Tiling", "Welders"],
      "reviewData": [{ "author": "Johan S.", "rating": 5, "comment": "Best price I found for a Daikin inverter unit in Pretoria." }, { "author": "Mpho G.", "rating": 4, "comment": "Very knowledgeable about energy-saving options." }, { "author": "Annatjie B.", "rating": 5, "comment": "The technicians were very respectful and left the site clean." }, { "author": "David K.", "rating": 5, "comment": "Quick turnaround on my commercial office maintenance." }],
      "qa": [
        {
          "question": "Describe a recent project that you have completed.",
          "answer": "I have recently done an extension on a verandah; we leveled the ground built it up, filled it then cemented it."
        },
        {
          "question": "Who are some of your customers and can you provide traceable references?",
          "answer": "Sweetmart; Cherry Lane"
        },
        {
          "question": "Do you provide any guarantee of your workmanship and/or services. If yes, please share the details here.",
          "answer": "We offer a 6 month guarantee on newly installed units."
        }
      ]
    },
    {
      "id": "pro-ac-3",
      "name": "Sandton Climate Solutions",
      "location": "Sandton, Johannesburg",
      "description": "Premium air conditioning services tailored for the luxury market in Sandton. We focus on silent-running split systems and multi-zone VRF installations. Our SEO-driven approach ensures we provide the most modern, sleek units that blend into your home decor while providing maximum cooling and heating efficiency.",
      "rating": 4.8,
      "reviews": 31,
      "avatarSeed": "ac-logo-3",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "serviceCategory": "Air Conditioning",
      "yearsInBusiness": 7,
      "employees": 9,
      "services": ["Luxury Home Cooling", "VRF Systems", "Annual Servicing", "Heating Solutions"],
      "reviewData": [{ "author": "Bradley T.", "rating": 5, "comment": "High-end service for a high-end home. Very happy." }, { "author": "Jessica L.", "rating": 5, "comment": "They understood exactly where to place the units for best airflow." }, { "author": "Simon R.", "rating": 4, "comment": "Premium pricing but you definitely get what you pay for." }, { "author": "Nthabiseng M.", "rating": 5, "comment": "Fast, efficient, and the unit is whisper quiet." }],
      "qa": [
        {
          "question": "Describe a recent project that you have completed.",
          "answer": "I have recently done an extension on a verandah; we leveled the ground built it up, filled it then cemented it."
        },
        {
          "question": "Who are some of your customers and can you provide traceable references?",
          "answer": "Sweetmart; Cherry Lane"
        },
        {
          "question": "Do you provide any guarantee of your workmanship and/or services. If yes, please share the details here.",
          "answer": "We offer a 6 month guarantee on newly installed units."
        }
      ]
    },
    {
      "id": "pro-ac-4",
      "name": "East Rand Air & Heat",
      "location": "Boksburg, Ekurhuleni",
      "description": "Your local experts for air conditioning and heating in the East Rand. We offer affordable aircon re-gassing, chemical cleaning, and winter heating prep. Whether you are in Boksburg or near OR Tambo, our mobile teams are ready to assist with rapid response times and expert advice on all major brands like Jet-Air and York.",
      "rating": 4.6,
      "reviews": 35,
      "avatarSeed": "ac-logo-4",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "serviceCategory": "Air Conditioning",
      "yearsInBusiness": 12,
      "employees": 14,
      "services": ["Chemical Wash", "Gas Refills", "Winter Heating", "Fault Finding"],
      "reviewData": [{ "author": "Kevin D.", "rating": 5, "comment": "Great local service in Benoni. Fixed my old unit quickly." }, { "author": "Sizwe Z.", "rating": 4, "comment": "Honest guys, didn't try to upsell me on a new unit." }, { "author": "Michelle V.", "rating": 5, "comment": "My aircon is ice cold again! Thanks for the regas." }, { "author": "Gary H.", "rating": 4, "comment": "Reliable and affordable compared to the big franchises." }],
      "qa": [
        {
          "question": "Describe a recent project that you have completed.",
          "answer": "I have recently done an extension on a verandah; we leveled the ground built it up, filled it then cemented it."
        },
        {
          "question": "Who are some of your customers and can you provide traceable references?",
          "answer": "Sweetmart; Cherry Lane"
        },
        {
          "question": "Do you provide any guarantee of your workmanship and/or services. If yes, please share the details here.",
          "answer": "We offer a 6 month guarantee on newly installed units."
        }
      ]
    },
    {
      "id": "pro-ac-5",
      "name": "Midrand Industrial HVAC",
      "location": "Midrand, Johannesburg",
      "description": "Specializing in large-scale HVAC installations for warehouses, data centers, and office parks in Midrand. We provide comprehensive preventative maintenance contracts to ensure your business never overheats. Expert handling of rooftop units, chillers, and large-scale ventilation projects across the Gauteng province.",
      "rating": 4.5,
      "reviews": 19,
      "avatarSeed": "ac-logo-5",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "serviceCategory": "Air Conditioning",
      "yearsInBusiness": 20,
      "employees": 35,
      "services": ["Industrial Cooling", "Ventilation", "Server Room Cooling", "Maintenance Contracts"],
      "reviewData": [{ "author": "Alan F.", "rating": 5, "comment": "They manage our warehouse cooling perfectly. Very professional." }, { "author": "Lerato S.", "rating": 5, "comment": "Essential service for our server rooms. Highly dependable." }, { "author": "Pieter B.", "rating": 4, "comment": "Good technical knowledge of complex HVAC systems." }, { "author": "Thane N.", "rating": 4, "comment": "Excellent contract rates for corporate clients." }],
      "qa": [
        {
          "question": "Describe a recent project that you have completed.",
          "answer": "I have recently done an extension on a verandah; we leveled the ground built it up, filled it then cemented it."
        },
        {
          "question": "Who are some of your customers and can you provide traceable references?",
          "answer": "Sweetmart; Cherry Lane"
        },
        {
          "question": "Do you provide any guarantee of your workmanship and/or services. If yes, please share the details here.",
          "answer": "We offer a 6 month guarantee on newly installed units."
        }
      ]
    },
    {
      "id": "pro-ac-6",
      "name": "West Rand Cool Breeze",
      "location": "Roodepoort, Johannesburg",
      "description": "Family-owned air conditioning business serving the West Rand community. We pride ourselves on friendly service and transparent pricing. From small bedroom installations to multi-room systems, we ensure your West Rand home stays cool. We also offer expert aircon relocation services if you are moving house.",
      "rating": 4.9,
      "reviews": 37,
      "avatarSeed": "ac-logo-1",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "serviceCategory": "Air Conditioning",
      "yearsInBusiness": 6,
      "employees": 5,
      "services": ["Residential Aircon", "Relocation Services", "De-installation", "New Sales"],
      "reviewData": [{ "author": "Charmaine J.", "rating": 5, "comment": "Such a lovely team. They were so careful in my house." }, { "author": "Andries L.", "rating": 5, "comment": "Best prices in Roodepoort by far. Workmanship is 10/10." }, { "author": "Sipho K.", "rating": 5, "comment": "Prompt service and great communication throughout." }, { "author": "Brenda P.", "rating": 4, "comment": "Very satisfied with the new unit installation." }],
      "qa": [
        {
          "question": "Describe a recent project that you have completed.",
          "answer": "I have recently done an extension on a verandah; we leveled the ground built it up, filled it then cemented it."
        },
        {
          "question": "Who are some of your customers and can you provide traceable references?",
          "answer": "Sweetmart; Cherry Lane"
        },
        {
          "question": "Do you provide any guarantee of your workmanship and/or services. If yes, please share the details here.",
          "answer": "We offer a 6 month guarantee on newly installed units."
        }
      ]
    },
    {
      "id": "pro-ac-7",
      "name": "Jozi Rapid Aircon Repair",
      "location": "Randburg, Johannesburg",
      "description": "Emergency air conditioning repair specialists in Johannesburg North. If your aircon stops working during a heatwave, we are the team to call. We specialize in rapid diagnostics, PC board repairs, and compressor replacements. Our goal is to get your cooling back up and running within 24 hours.",
      "rating": 4.4,
      "reviews": 31,
      "avatarSeed": "ac-logo-2",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "serviceCategory": "Air Conditioning",
      "yearsInBusiness": 9,
      "employees": 8,
      "services": ["Emergency Repair", "PC Board Fixes", "Compressor Replacement", "Leak Repairs"],
      "reviewData": [{ "author": "Zanele T.", "rating": 5, "comment": "They came out on a Saturday and fixed my unit. Lifesavers!" }, { "author": "Mark D.", "rating": 4, "comment": "Fast diagnostics, had the parts in the van already." }, { "author": "Claire S.", "rating": 5, "comment": "Very impressive speed and technical skill." }, { "author": "Robert M.", "rating": 4, "comment": "A bit pricier for emergency call-outs but worth it." }],
      "qa": [
        {
          "question": "Describe a recent project that you have completed.",
          "answer": "I have recently done an extension on a verandah; we leveled the ground built it up, filled it then cemented it."
        },
        {
          "question": "Who are some of your customers and can you provide traceable references?",
          "answer": "Sweetmart; Cherry Lane"
        },
        {
          "question": "Do you provide any guarantee of your workmanship and/or services. If yes, please share the details here.",
          "answer": "We offer a 6 month guarantee on newly installed units."
        }
      ]
    },
    {
      "id": "pro-ac-8",
      "name": "Centurion Air & Solar",
      "location": "Centurion, Pretoria",
      "description": "Innovative climate control company focusing on solar-ready air conditioning systems. We help Centurion residents stay cool even during load shedding with low-wattage inverter units and hybrid solar cooling solutions. Professional service with a focus on sustainable energy and cost reduction.",
      "rating": 4.7,
      "reviews": 14,
      "avatarSeed": "ac-logo-3",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "serviceCategory": "Air Conditioning",
      "yearsInBusiness": 5,
      "employees": 7,
      "services": ["Solar Aircon", "Hybrid Systems", "Energy Audits", "Split Unit Installation"],
      "reviewData": [{ "author": "Willem H.", "rating": 5, "comment": "The hybrid solar aircon is a game changer during power cuts." }, { "author": "Nadia E.", "rating": 5, "comment": "Expert advice on saving electricity while staying cool." }, { "author": "Teboho R.", "rating": 4, "comment": "Good installation, waiting to see the savings on my bill!" }, { "author": "Dirk V.", "rating": 5, "comment": "Very neat work and modern technology." }],
      "qa": [
        {
          "question": "Describe a recent project that you have completed.",
          "answer": "I have recently done an extension on a verandah; we leveled the ground built it up, filled it then cemented it."
        },
        {
          "question": "Who are some of your customers and can you provide traceable references?",
          "answer": "Sweetmart; Cherry Lane"
        },
        {
          "question": "Do you provide any guarantee of your workmanship and/or services. If yes, please share the details here.",
          "answer": "We offer a 6 month guarantee on newly installed units."
        }
      ]
    },
    {
      "id": "pro-ac-9",
      "name": "Alberton Climate Masters",
      "location": "Alberton, Ekurhuleni",
      "description": "Reliable air conditioning and refrigeration services in the South of Johannesburg and Alberton. We offer a full range of cooling solutions including under-ceiling units and cassette-type aircons for shops and restaurants. Licensed technicians ensuring high-quality standards and long-lasting results.",
      "rating": 4.6,
      "reviews": 28,
      "avatarSeed": "ac-logo-4",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "serviceCategory": "Air Conditioning",
      "yearsInBusiness": 11,
      "employees": 10,
      "services": ["Cassette Aircons", "Under-ceiling Units", "Shop Cooling", "Maintenance"],
      "reviewData": [{ "author": "Sonia B.", "rating": 5, "comment": "Excellent service for our restaurant. The staff is much happier." }, { "author": "Petrus M.", "rating": 4, "comment": "Reliable and consistent maintenance every year." }, { "author": "Jabulani N.", "rating": 5, "comment": "They fixed a problem three other companies couldn't." }, { "author": "Anthea G.", "rating": 4, "comment": "Good communication and fair pricing." }],
      "qa": [
        {
          "question": "Describe a recent project that you have completed.",
          "answer": "I have recently done an extension on a verandah; we leveled the ground built it up, filled it then cemented it."
        },
        {
          "question": "Who are some of your customers and can you provide traceable references?",
          "answer": "Sweetmart; Cherry Lane"
        },
        {
          "question": "Do you provide any guarantee of your workmanship and/or services. If yes, please share the details here.",
          "answer": "We offer a 6 month guarantee on newly installed units."
        }
      ]
    },
    {
      "id": "pro-ac-10",
      "name": "Fourways Air Conditioning Hub",
      "location": "Fourways, Johannesburg",
      "description": "Boutique air conditioning service provider specializing in the Fourways and Dainfern area. We offer high-end brands and professional aesthetic installations that suit modern architectural styles. Our services include smart-home integration so you can control your aircon from your smartphone.",
      "rating": 5,
      "reviews": 12,
      "avatarSeed": "ac-logo-5",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "serviceCategory": "Air Conditioning",
      "yearsInBusiness": 4,
      "employees": 6,
      "services": ["Smart Aircon Integration", "Boutique Installations", "Wifi Units", "Servicing"],
      "reviewData": [{ "author": "Cameron J.", "rating": 5, "comment": "The mobile app integration they set up is amazing." }, { "author": "Neo M.", "rating": 5, "comment": "Very modern approach and very clean installation." }, { "author": "Samantha Q.", "rating": 5, "comment": "Best service in Fourways. They really know their tech." }, { "author": "Elias O.", "rating": 5, "comment": "Top class from start to finish. Highly recommended." }],
      "qa": [
        {
          "question": "Describe a recent project that you have completed.",
          "answer": "I have recently done an extension on a verandah; we leveled the ground built it up, filled it then cemented it."
        },
        {
          "question": "Who are some of your customers and can you provide traceable references?",
          "answer": "Sweetmart; Cherry Lane"
        },
        {
          "question": "Do you provide any guarantee of your workmanship and/or services. If yes, please share the details here.",
          "answer": "We offer a 6 month guarantee on newly installed units."
        }
      ]
    }
  ],
  "plumber": [
    {
      "id": "pro-plumber-1",
      "name": "Joburg Plumbing Pros",
      "location": "Sandton, Johannesburg",
      "description": "24/7 emergency {service} for leaks, blocked drains, and geyser repairs. Fast, reliable, and affordable.",
      "rating": 4.8,
      "reviews": 125,
      "avatarSeed": "plumber-logo-1",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "serviceCategory": "Plumber",
      "yearsInBusiness": 10,
      "employees": 8,
      "reviewData": [{ "author": "Sarah J.", "rating": 5, "comment": "Quick to respond and fixed my burst pipe in no time. Highly recommended!" }]
    }
  ],
  "electrician": [
     {
      "id": "pro-electrician-1",
      "name": "Cape Town Sparkies",
      "location": "Sea Point, Cape Town",
      "description": "Certified {service} for all your electrical needs. Installations, repairs, and Certificates of Compliance (CoC).",
      "rating": 4.9,
      "reviews": 210,
      "avatarSeed": "electrician-logo-1",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "serviceCategory": "Electrician",
      "yearsInBusiness": 15,
      "employees": 12,
      "reviewData": [{ "author": "Mike R.", "rating": 5, "comment": "Very professional and knowledgeable. They sorted out my wiring issues safely." }]
    }
  ],
  "painter": [
      {
        "id": "pro-painter-1",
        "name": "Durban Paint Masters",
        "location": "Umhlanga, Durban",
        "description": "High-quality interior and exterior painting services. We use premium paints for a long-lasting, beautiful finish.",
        "rating": 4.7,
        "reviews": 88,
        "avatarSeed": "painter-logo-1",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "serviceCategory": "Painter",
        "yearsInBusiness": 8,
        "employees": 5
      }
  ],
   "builders": [
    {
      "id": "pro-builder-1",
      "name": "Gauteng Construction",
      "location": "Pretoria, Gauteng",
      "description": "From foundations to finishes, we are your trusted partner for new builds and renovations. NHBRC registered.",
      "rating": 4.8,
      "reviews": 95,
      "avatarSeed": "builder-logo-1",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "serviceCategory": "Builders",
      "yearsInBusiness": 20,
      "employees": 25
    }
  ],
  "movers": [
    {
      "id": "pro-mover-1",
      "name": "City Logistics Movers",
      "location": "Johannesburg, Gauteng",
      "description": "Your reliable partner for local and long-distance moves. We handle your belongings with care, ensuring a stress-free relocation for homes and offices.",
      "rating": 4.9,
      "reviews": 150,
      "avatarSeed": "mover-logo-1",
      "serviceCategory": "Movers",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 12,
      "employees": 20,
      "services": ["Local Moving", "Long Distance Moving", "Office Relocation", "Packing & Unpacking"],
      "reviewData": [{ "author": "Thabo M.", "rating": 5, "comment": "On time, professional, and very careful with our furniture. Made our move stress-free!" }]
    },
    {
      "id": "pro-mover-2",
      "name": "Cape Town Relocations",
      "location": "Cape Town, Western Cape",
      "description": "Specializing in residential and office moves within the Western Cape. Our experienced team offers comprehensive packing services to protect your valuables.",
      "rating": 4.8,
      "reviews": 95,
      "avatarSeed": "mover-logo-2",
      "serviceCategory": "Movers",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 8,
      "employees": 15,
      "services": ["Residential Moving", "Office Moving", "Packing Services", "Storage Solutions"],
      "reviewData": [{ "author": "Emily F.", "rating": 5, "comment": "The team was fantastic! So efficient and friendly. They took great care of our fragile items." }]
    },
    {
      "id": "pro-mover-3",
      "name": "Durban Express Movers",
      "location": "Durban, KwaZulu-Natal",
      "description": "Fast and affordable moving services for homes and offices in and around Durban. We also offer shared loads for long-distance moves to save you money.",
      "rating": 4.7,
      "reviews": 75,
      "avatarSeed": "mover-logo-3",
      "serviceCategory": "Movers",
      "isProVerified": false,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 5,
      "employees": 10,
      "services": ["Local Moving", "Shared Loads", "Office Moving", "Furniture Assembly"],
      "reviewData": [{ "author": "John P.", "rating": 4, "comment": "Good service for the price. They were quick and got the job done without any issues." }]
    }
  ],
  "rubble-removal": [
    {
        "id": "pro-rubble-1",
        "name": "Jozi Rubble Kings",
        "location": "Johannesburg, Gauteng",
        "description": "Fast and efficient rubble removal for construction sites and home renovations across Johannesburg.",
        "rating": 4.9,
        "reviews": 180,
        "avatarSeed": "rubble-logo-1",
        "serviceCategory": "Rubble Removal",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 10,
        "employees": 15,
        "services": ["Building Rubble", "Garden Refuse", "Site Clearing"],
        "reviewData": [{ "author": "David B.", "rating": 5, "comment": "They were on-site within an hour and cleared everything faster than I expected. Great service." }]
    },
    {
        "id": "pro-rubble-2",
        "name": "PTA Waste Warriors",
        "location": "Pretoria, Gauteng",
        "description": "Your go-to for reliable waste management and rubble disposal in Pretoria. We handle everything from garden refuse to demolition waste.",
        "rating": 4.8,
        "reviews": 130,
        "avatarSeed": "rubble-logo-2",
        "serviceCategory": "Rubble Removal",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 8,
        "employees": 10,
        "services": ["Building Rubble", "Household Refuse", "Scrap Metal"],
        "reviewData": [{ "author": "Lindiwe N.", "rating": 5, "comment": "Professional and friendly team. They left the site spotless." }]
    },
    {
        "id": "pro-rubble-3",
        "name": "Sandton Site Clearers",
        "location": "Sandton, Gauteng",
        "description": "Specializing in quick and discreet rubble removal for upmarket residential and commercial properties in Sandton.",
        "rating": 4.9,
        "reviews": 95,
        "avatarSeed": "rubble-logo-3",
        "serviceCategory": "Rubble Removal",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 7,
        "employees": 8,
        "services": ["Building Rubble", "Old Furniture", "Garden Refuse"],
        "reviewData": [{ "author": "Chloe V.", "rating": 5, "comment": "Very professional service, perfect for our complex." }]
    },
    {
        "id": "pro-rubble-4",
        "name": "Randburg Rubble Removers",
        "location": "Randburg, Gauteng",
        "description": "Affordable and dependable rubble removal services in the Randburg area. No job is too big or too small.",
        "rating": 4.7,
        "reviews": 210,
        "avatarSeed": "rubble-logo-4",
        "serviceCategory": "Rubble Removal",
        "isProVerified": false,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 12,
        "employees": 18,
        "services": ["General Waste", "Building Rubble", "Garden Refuse"],
        "reviewData": [{ "author": "Mark D.", "rating": 4, "comment": "They get the job done at a fair price. Would use them again." }]
    },
    {
        "id": "pro-rubble-5",
        "name": "Midrand Waste Away",
        "location": "Midrand, Gauteng",
        "description": "Your local Midrand experts for all types of waste and rubble removal. We pride ourselves on quick turnaround times.",
        "rating": 4.8,
        "reviews": 155,
        "avatarSeed": "rubble-logo-5",
        "serviceCategory": "Rubble Removal",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 6,
        "employees": 7,
        "services": ["Site Clearing", "Building Rubble", "Scrap Metal"],
        "reviewData": [{ "author": "Palesa M.", "rating": 5, "comment": "Fast, friendly, and efficient. Exactly what I needed." }]
    },
    {
        "id": "pro-rubble-6",
        "name": "East Rand Clean-Up Crew",
        "location": "Boksburg, Gauteng",
        "description": "Serving the entire East Rand, we offer comprehensive clean-up services for residential, commercial, and industrial sites.",
        "rating": 4.7,
        "reviews": 190,
        "avatarSeed": "rubble-logo-6",
        "serviceCategory": "Rubble Removal",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 15,
        "employees": 22,
        "services": ["Building Rubble", "Industrial Waste", "Garden Refuse"],
        "reviewData": [{ "author": "Brian P.", "rating": 5, "comment": "A very thorough and professional crew. They handle large jobs with ease." }]
    },
    {
        "id": "pro-rubble-7",
        "name": "West Rand Disposal",
        "location": "Roodepoort, Gauteng",
        "description": "Your trusted partner for responsible waste disposal and rubble removal in the West Rand.",
        "rating": 4.8,
        "reviews": 140,
        "avatarSeed": "rubble-logo-7",
        "serviceCategory": "Rubble Removal",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 9,
        "employees": 11,
        "services": ["Old Furniture", "Appliances", "Building Rubble"],
        "reviewData": [{ "author": "Fatima A.", "rating": 5, "comment": "So glad I found them. They took away all my old junk without any hassle." }]
    },
    {
        "id": "pro-rubble-8",
        "name": "Gauteng Green Projects",
        "location": "Edenvale, Gauteng",
        "description": "Eco-friendly rubble and garden refuse removal. We recycle and dispose of waste responsibly.",
        "rating": 4.9,
        "reviews": 110,
        "avatarSeed": "rubble-logo-8",
        "serviceCategory": "Rubble Removal",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 5,
        "employees": 6,
        "services": ["Garden Refuse", "Recyclable Materials", "Building Rubble"],
        "reviewData": [{ "author": "Samantha K.", "rating": 5, "comment": "I love that they focus on being environmentally friendly. A great company with great service." }]
    }
],
  "aluminium-doors-and-windows": [
    {
      "id": "pro-alu-1",
      "name": "Auto Glass & Aluminium Works",
      "location": "Randburg, Johannesburg",
      "description": "Premier manufacturers of high-quality aluminium window frames and sliding doors in Gauteng. We specialize in custom-built stack-away doors, shopfronts, and double-glazed windows for improved insulation. Our products are powder-coated to your specifications, ensuring durability and a modern aesthetic for both residential and commercial projects.",
      "rating": 4.8,
      "reviews": 64,
      "avatarSeed": "alu-logo-1",
      "serviceCategory": "Aluminium Doors And Windows",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 15,
      "employees": 22,
      "services": ["Sliding Doors", "Stack Doors", "Aluminium Windows", "Shopfronts"],
      "reviewData": [
        { "author": "Pieter H.", "rating": 5, "comment": "Excellent quality stack doors. They transformed my patio." },
        { "author": "Lerato M.", "rating": 5, "comment": "Professional installation and the team was very neat." },
        { "author": "Sizwe D.", "rating": 4, "comment": "Great product, lead time was a bit long but worth the wait." },
        { "author": "Jane S.", "rating": 5, "comment": "Best prices in Randburg for aluminium window replacements." }
      ],
      "qa": [
        { "question": "Do you provide a guarantee on your products?", "answer": "Yes, we offer a 10-year guarantee on our aluminium frames and a 2-year guarantee on workmanship." }
      ]
    },
    {
      "id": "pro-alu-2",
      "name": "P Elite Aluminium",
      "location": "Pretoria East, Pretoria",
      "description": "Leading specialists in aluminium and glass solutions across Pretoria. From stylish pivot doors to energy-efficient casement windows, we provide end-to-end service from measurement to installation. We use AAAMSA-approved materials to ensure your home security and weatherproofing are never compromised.",
      "rating": 4.7,
      "reviews": 41,
      "avatarSeed": "alu-logo-2",
      "serviceCategory": "Aluminium Doors And Windows",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 10,
      "employees": 14,
      "services": ["Pivot Doors", "Casement Windows", "Folding Doors", "Glass Replacement"],
      "reviewData": [
        { "author": "Johan V.", "rating": 5, "comment": "The new pivot door looks amazing. Very high-end finish." },
        { "author": "Mpho K.", "rating": 4, "comment": "Good service, they helped me choose the right glass for heat control." },
        { "author": "Annatjie S.", "rating": 5, "comment": "Friendly staff and quick installation of my kitchen windows." },
        { "author": "David B.", "rating": 5, "comment": "Highly recommend for anyone in Pretoria East." }
      ],
       "qa": [
        { "question": "Do you provide a guarantee on your products?", "answer": "Yes, we offer a 10-year guarantee on our aluminium frames and a 2-year guarantee on workmanship." }
      ]
    },
    {
      "id": "pro-alu-3",
      "name": "Rossa Premium Frames",
      "location": "Sandton, Johannesburg",
      "description": "Luxury aluminium door and window installations for high-end residential estates in Sandton. We focus on slimline profiles and architectural glazing that maximizes natural light. Our team handles complex installations including automated sliding doors and oversized glass panels for modern architectural designs.",
      "rating": 4.9,
      "reviews": 28,
      "avatarSeed": "alu-logo-3",
      "serviceCategory": "Aluminium Doors And Windows",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 8,
      "employees": 10,
      "services": ["Slimline Profiles", "Architectural Glazing", "Automated Doors", "Enclosures"],
      "reviewData": [
        { "author": "Bradley W.", "rating": 5, "comment": "Stunning results on our Bryanston renovation." },
        { "author": "Jessica R.", "rating": 5, "comment": "Professional, punctual, and the quality is unmatched." },
        { "author": "Thabo N.", "rating": 4, "comment": "Expensive, but you definitely get what you pay for." },
        { "author": "Sarah G.", "rating": 5, "comment": "The slimline frames look incredible. Very happy." }
      ],
       "qa": [
        { "question": "Do you provide a guarantee on your products?", "answer": "Yes, we offer a 10-year guarantee on our aluminium frames and a 2-year guarantee on workmanship." }
      ]
    },
    {
      "id": "pro-alu-4",
      "name": "East Aluminium & Shopfronts",
      "location": "Boksburg, Ekurhuleni",
      "description": "Trusted providers of aluminium doors and windows for the East Rand community. We specialize in patio enclosures and commercial shopfronts. Our aluminium products are low-maintenance, rust-proof, and designed to enhance the security and value of your property.",
      "rating": 4.6,
      "reviews": 55,
      "avatarSeed": "alu-logo-4",
      "serviceCategory": "Aluminium Doors And Windows",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 12,
      "employees": 18,
      "services": ["Patio Enclosures", "Commercial Shopfronts", "Sliding Windows", "Security Bars"],
      "reviewData": [
        { "author": "Kevin L.", "rating": 5, "comment": "They did a great job on my shopfront in Boksburg." },
        { "author": "Nadine D.", "rating": 5, "comment": "Our patio enclosure looks like a new room in the house!" },
        { "author": "Sipho Z.", "rating": 4, "comment": "Reliable service and the quality of the aluminium is top-notch." },
        { "author": "Gary M.", "rating": 4, "comment": "Good prices and very helpful sales staff." }
      ],
       "qa": [
        { "question": "Do you provide a guarantee on your products?", "answer": "Yes, we offer a 10-year guarantee on our aluminium frames and a 2-year guarantee on workmanship." }
      ]
    },
    {
      "id": "pro-alu-5",
      "name": "West Rand Glass & Aluminium Pros",
      "location": "Roodepoort, Johannesburg",
      "description": "Family-run business offering affordable aluminium window and door solutions in the West Rand. We offer a wide range of colors and finishes, including wood-look aluminium. Whether you are replacing old steel frames or building a new home, we provide expert advice and precision installation.",
      "rating": 4.5,
      "reviews": 33,
      "avatarSeed": "alu-logo-5",
      "serviceCategory": "Aluminium Doors And Windows",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 7,
      "employees": 8,
      "services": ["Steel-to-Aluminium Conversions", "Wood-look Aluminium", "Folding Doors", "Side-hung Windows"],
      "reviewData": [
        { "author": "Charmaine B.", "rating": 5, "comment": "Changed my old steel windows to aluminium. What a difference!" },
        { "author": "Andries P.", "rating": 4, "comment": "Very happy with the service and the price was very fair." },
        { "author": "Lindiwe S.", "rating": 5, "comment": "Great communication from the owner. Highly recommended." },
        { "author": "Robert H.", "rating": 4, "comment": "Neat installation and they cleaned up everything afterwards." }
      ],
       "qa": [
        { "question": "Do you provide a guarantee on your products?", "answer": "Yes, we offer a 10-year guarantee on our aluminium frames and a 2-year guarantee on workmanship." }
      ]
    },
    {
      "id": "pro-alu-6",
      "name": "Rand Modern Aluminium",
      "location": "Midrand, Johannesburg",
      "description": "Specialists in contemporary aluminium designs for the growing Midrand and Waterfall areas. We offer high-performance sliding systems and custom-shaped windows. Our focus is on sustainable building practices, offering thermal-break aluminium technology to reduce energy costs in your home.",
      "rating": 4.7,
      "reviews": 19,
      "avatarSeed": "alu-logo-6",
      "serviceCategory": "Aluminium Doors And Windows",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 6,
      "employees": 12,
      "services": ["Thermal Break Aluminium", "Custom Windows", "High-Performance Sliders", "Balcony Doors"],
      "reviewData": [
        { "author": "Zanele T.", "rating": 5, "comment": "Perfect for our new house in Waterfall. Very modern." },
        { "author": "Chris J.", "rating": 5, "comment": "The thermal break windows really help with the winter cold." },
        { "author": "Musa W.", "rating": 4, "comment": "Excellent technical knowledge and professional team." },
        { "author": "Claire V.", "rating": 5, "comment": "Fast and efficient service in Kyalami." }
      ],
       "qa": [
        { "question": "Do you provide a guarantee on your products?", "answer": "Yes, we offer a 10-year guarantee on our aluminium frames and a 2-year guarantee on workmanship." }
      ]
    },
    {
      "id": "pro-alu-7",
      "name": "Jozi Glass & Frame",
      "location": "Centurion, Pretoria",
      "description": "Providing comprehensive aluminium and glazing services across Centurion. We focus on residential upgrades, replacing old timber frames with durable, low-maintenance aluminium. We offer a 5-year guarantee on our workmanship and use only the highest quality hardware and rollers for our doors.",
      "rating": 4.4,
      "reviews": 27,
      "avatarSeed": "alu-logo-7",
      "serviceCategory": "Aluminium Doors And Windows",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 9,
      "employees": 9,
      "services": ["Window Replacement", "Door Servicing", "Glazing Service", "Sliding Fold Doors"],
      "reviewData": [
        { "author": "Willem D.", "rating": 5, "comment": "Reliable and honest company. The sliding doors work perfectly." },
        { "author": "Nomsa L.", "rating": 4, "comment": "Good turnaround time for the quote and the install." },
        { "author": "Henk S.", "rating": 5, "comment": "The best value for money I found in Centurion." },
        { "author": "Teboho M.", "rating": 4, "comment": "Quality workmanship on our bedroom windows." }
      ],
       "qa": [
        { "question": "Do you provide a guarantee on your products?", "answer": "Yes, we offer a 10-year guarantee on our aluminium frames and a 2-year guarantee on workmanship." }
      ]
    },
    {
      "id": "pro-alu-8",
      "name": "Vaal Aluminium Specialists",
      "location": "Vereeniging, Gauteng",
      "description": "Expert aluminium fabricators serving the Vaal Triangle and Southern Gauteng. We specialize in industrial-strength aluminium windows, large-scale sliding doors, and specialized glass for factories and residential estates. Our products are designed to withstand the harsh South African climate while looking beautiful.",
      "rating": 4.3,
      "reviews": 48,
      "avatarSeed": "alu-logo-8",
      "serviceCategory": "Aluminium Doors And Windows",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 2,
      "yearsInBusiness": 20,
      "employees": 25,
      "services": ["Industrial Windows", "Residential Sliders", "Safety Glass", "Frameless Systems"],
      "reviewData": [
        { "author": "Ockert R.", "rating": 5, "comment": "Been using them for years. Always consistent quality." },
        { "author": "Mariaan G.", "rating": 4, "comment": "Professional service for our home in Vanderbijlpark." },
        { "author": "Thane B.", "rating": 4, "comment": "Solid products and very good installation team." },
        { "author": "Petrus K.", "rating": 4, "comment": "Reliable local business with a great reputation." }
      ],
       "qa": [
        { "question": "Do you provide a guarantee on your products?", "answer": "Yes, we offer a 10-year guarantee on our aluminium frames and a 2-year guarantee on workmanship." }
      ]
    },
    {
      "id": "pro-alu-9",
      "name": "Jozi CBD Aluminium & Maintenance",
      "location": "Johannesburg CBD",
      "description": "Specialized in commercial aluminium maintenance and new installations in the Johannesburg city center. We handle shopfront repairs, office partitioning, and high-rise window replacements. Our teams are trained for high-access work and adhere to strict safety regulations for urban environments.",
      "rating": 4.6,
      "reviews": 21,
      "avatarSeed": "alu-logo-9",
      "serviceCategory": "Aluminium Doors And Windows",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 11,
      "employees": 15,
      "services": ["Commercial Repairs", "Office Partitions", "High-Access Glazing", "Safety Doors"],
      "reviewData": [
        { "author": "Alan F.", "rating": 5, "comment": "Excellent service for our office renovation in Braamfontein." },
        { "author": "Sizwe M.", "rating": 5, "comment": "They fixed our broken shopfront glass within hours." },
        { "author": "Busi P.", "rating": 4, "comment": "Very professional and followed all safety protocols." },
        { "author": "Daniel S.", "rating": 5, "comment": "Great partner for building managers in the CBD." }
      ],
       "qa": [
        { "question": "Do you provide a guarantee on your products?", "answer": "Yes, we offer a 10-year guarantee on our aluminium frames and a 2-year guarantee on workmanship." }
      ]
    },
    {
      "id": "pro-alu-10",
      "name": "A TO Z Doors & Windows",
      "location": "Alberton, Ekurhuleni",
      "description": "Your local destination for custom aluminium doors and windows in the South of Johannesburg. We pride ourselves on quick turnaround times and affordable pricing. Specializing in folding-stacking doors that create a seamless flow between your indoor and outdoor living areas.",
      "rating": 4.9,
      "reviews": 15,
      "avatarSeed": "alu-logo-10",
      "serviceCategory": "Aluminium Doors And Windows",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 5,
      "employees": 6,
      "services": ["Custom Aluminium", "Folding-Stacking Doors", "Window Repairs", "Insect Screens"],
      "reviewData": [
        { "author": "Sonia P.", "rating": 5, "comment": "Lovely service and beautiful doors. My lounge looks so much bigger." },
        { "author": "Jason K.", "rating": 5, "comment": "Best prices in Alberton. No hidden costs." },
        { "author": "Fatima H.", "rating": 5, "comment": "The installation was quick and very neat." },
        { "author": "Neil O.", "rating": 4, "comment": "Good quality and very friendly team." }
      ],
       "qa": [
        { "question": "Do you provide a guarantee on your products?", "answer": "Yes, we offer a 10-year guarantee on our aluminium frames and a 2-year guarantee on workmanship." }
      ]
    }
  ],
  "awnings": [
    {
      "id": "pro-awning-1",
      "name": "Abo Shade & Awning",
      "location": "Sandton, Johannesburg",
      "description": "Premier providers of patio shade solutions in Gauteng. We offer a wide range of canvas awnings, retractable systems, and fixed polycarbonate covers. Protect your outdoor furniture from the South African sun and rain with our durable, UV-resistant products tailored for residential and commercial properties.",
      "rating": 4.7,
      "reviews": 39,
      "avatarSeed": "awning-logo-1",
      "serviceCategory": "Awnings",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 14,
      "employees": 12,
      "services": ["Retractable Awnings", "Canvas Awnings", "Patio Covers", "UV Protection"],
      "reviewData": [
        { "author": "Mark S.", "rating": 5, "comment": "The retractable awning is perfect for our deck." },
        { "author": "Lerato N.", "rating": 5, "comment": "Great quality canvas and very professional installation." },
        { "author": "David L.", "rating": 4, "comment": "Good service, the team arrived on time and finished quickly." },
        { "author": "Michelle W.", "rating": 4, "comment": "Sturdy products that really help with the afternoon sun." }
      ],
      "qa": [
        { "question": "What is the warranty on your awnings?", "answer": "We offer a 5-year warranty on all our awning structures and a 3-year warranty on the fabric." }
      ]
    },
    {
      "id": "pro-awning-2",
      "name": "Pretoria East Louvre Solutions",
      "location": "Pretoria East, Pretoria",
      "description": "Specialists in adjustable louvre awnings and aluminium patio covers in Pretoria. Our adjustable systems allow you to control sunlight and ventilation at the touch of a button or a simple manual crank. Made from high-grade aluminium, our awnings are built to last and require zero maintenance.",
      "rating": 4.9,
      "reviews": 24,
      "avatarSeed": "awning-logo-2",
      "serviceCategory": "Awnings",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 9,
      "employees": 10,
      "services": ["Adjustable Louvres", "Aluminium Awnings", "Waterproof Covers", "Outdoor Living"],
      "reviewData": [
        { "author": "Johan P.", "rating": 5, "comment": "The louvre system is brilliant. Best investment for our patio." },
        { "author": "Sarah K.", "rating": 5, "comment": "Excellent workmanship and the team was very professional." },
        { "author": "Andre B.", "rating": 5, "comment": "Really happy with the result. Looks very modern." },
        { "author": "Mpho G.", "rating": 4, "comment": "Good value for money and reliable service." }
      ],
      "qa": [
        { "question": "What is the warranty on your awnings?", "answer": "We offer a 5-year warranty on all our awning structures and a 3-year warranty on the fabric." }
      ]
    },
    {
      "id": "pro-awning-3",
      "name": "Sandton Sun Control",
      "location": "Sandton, Johannesburg",
      "description": "Luxury shading solutions for high-end homes and businesses in Sandton. We specialize in designer folding-arm awnings, motorized shade systems, and elegant window canopies. Our products combine functionality with high-end European aesthetics to complement modern architectural styles.",
      "rating": 4.8,
      "reviews": 18,
      "avatarSeed": "awning-logo-3",
      "serviceCategory": "Awnings",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 7,
      "employees": 8,
      "services": ["Motorized Awnings", "Folding-Arm Awnings", "Window Canopies", "Designer Shades"],
      "reviewData": [
        { "author": "Bradley T.", "rating": 5, "comment": "The motorized system is so convenient. Highly recommend." },
        { "author": "Jessica M.", "rating": 5, "comment": "Beautiful design that matches our house perfectly." },
        { "author": "Simon V.", "rating": 4, "comment": "Premium service and product. Very satisfied." },
        { "author": "Nthabiseng L.", "rating": 5, "comment": "The team was very helpful in choosing the right fabric." }
      ],
      "qa": [
        { "question": "What is the warranty on your awnings?", "answer": "We offer a 5-year warranty on all our awning structures and a 3-year warranty on the fabric." }
      ]
    },
    {
      "id": "pro-awning-4",
      "name": "East Rand Patio & Shade",
      "location": "Boksburg, Ekurhuleni",
      "description": "Affordable and reliable awning installations for the East Rand area. We provide everything from traditional dome awnings to modern polycarbonate sheets for carports and patios. Our products are designed to withstand heavy rain and hail, protecting your home and vehicles year-round.",
      "rating": 4.6,
      "reviews": 42,
      "avatarSeed": "awning-logo-4",
      "serviceCategory": "Awnings",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 11,
      "employees": 15,
      "services": ["Polycarbonate Awnings", "Carports", "Dome Awnings", "Hail Protection"],
      "reviewData": [
        { "author": "Kevin D.", "rating": 5, "comment": "Great price for a double carport awning. Very sturdy." },
        { "author": "Michelle B.", "rating": 5, "comment": "Fixed our leaking patio cover quickly and professionally." },
        { "author": "Gary H.", "rating": 4, "comment": "Good local service in Benoni. Highly recommended." },
        { "author": "Sizwe M.", "rating": 4, "comment": "Reliable guys, they did exactly what they promised." }
      ],
      "qa": [
        { "question": "What is the warranty on your awnings?", "answer": "We offer a 5-year warranty on all our awning structures and a 3-year warranty on the fabric." }
      ]
    },
    {
      "id": "pro-awning-5",
      "name": "Centurion All-Weather Awnings",
      "location": "Centurion, Pretoria",
      "description": "Dedicated to providing year-round outdoor comfort for Centurion residents. We offer custom-made shade sails, drop-down outdoor blinds, and fixed aluminium awnings. Our 'All-Weather' guarantee means our products are engineered to handle the Gauteng climate, from scorching sun to summer thunderstorms.",
      "rating": 4.7,
      "reviews": 31,
      "avatarSeed": "awning-logo-5",
      "serviceCategory": "Awnings",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 6,
      "employees": 7,
      "services": ["Shade Sails", "Outdoor Blinds", "Fixed Awnings", "Weatherproofing"],
      "reviewData": [
        { "author": "Willem H.", "rating": 5, "comment": "The drop-down blinds have made our patio usable in winter." },
        { "author": "Nadia E.", "rating": 5, "comment": "Excellent service from start to finish. Very neat." },
        { "author": "Teboho R.", "rating": 4, "comment": "Good quality shade sail. Professional installation." },
        { "author": "Dirk V.", "rating": 5, "comment": "Best prices I found for outdoor blinds in Centurion." }
      ],
      "qa": [
        { "question": "What is the warranty on your awnings?", "answer": "We offer a 5-year warranty on all our awning structures and a 3-year warranty on the fabric." }
      ]
    },
    {
      "id": "pro-awning-6",
      "name": "West Rand Shade Masters",
      "location": "Roodepoort, Johannesburg",
      "description": "Family-owned business specializing in carports and patio awnings in the West Rand. We offer durable steel and aluminium structures with various roofing options. Our mission is to provide cost-effective shade solutions that enhance the functionality and curb appeal of your home.",
      "rating": 4.5,
      "reviews": 28,
      "avatarSeed": "awning-logo-6",
      "serviceCategory": "Awnings",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 13,
      "employees": 9,
      "services": ["Steel Carports", "Patio Awnings", "Roofing Sheets", "Maintenance"],
      "reviewData": [
        { "author": "Charmaine J.", "rating": 5, "comment": "The new carport looks great and is very solid." },
        { "author": "Andries L.", "rating": 5, "comment": "Very happy with the patio awning. Great job guys." },
        { "author": "Sipho K.", "rating": 4, "comment": "Prompt service and fair pricing. Recommended." },
        { "author": "Brenda P.", "rating": 4, "comment": "Neat work and very friendly staff." }
      ],
      "qa": [
        { "question": "What is the warranty on your awnings?", "answer": "We offer a 5-year warranty on all our awning structures and a 3-year warranty on the fabric." }
      ]
    },
    {
      "id": "pro-awning-7",
      "name": "Fourways Outdoor Blinds & Awnings",
      "location": "Fourways, Johannesburg",
      "description": "Boutique awning company serving the northern suburbs of Johannesburg. We focus on stylish, high-quality outdoor blinds and retractable awnings that blend seamlessly with estate living. We offer a wide range of imported fabrics and locally manufactured hardware for the perfect balance of style and durability.",
      "rating": 5.0,
      "reviews": 14,
      "avatarSeed": "awning-logo-7",
      "serviceCategory": "Awnings",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 5,
      "employees": 6,
      "services": ["Boutique Awnings", "Estate Shades", "Outdoor Blinds", "Custom Designs"],
      "reviewData": [
        { "author": "Cameron J.", "rating": 5, "comment": "Fantastic service and a beautiful product. 5 stars." },
        { "author": "Neo M.", "rating": 5, "comment": "The blinds look amazing on our patio. Very professional." },
        { "author": "Samantha Q.", "rating": 5, "comment": "Top class service from a top class team." },
        { "author": "Elias O.", "rating": 5, "comment": "Highly recommend for anyone in Dainfern." }
      ],
      "qa": [
        { "question": "What is the warranty on your awnings?", "answer": "We offer a 5-year warranty on all our awning structures and a 3-year warranty on the fabric." }
      ]
    },
    {
      "id": "pro-awning-8",
      "name": "Midrand Industrial Shade",
      "location": "Midrand, Johannesburg",
      "description": "Specialized in large-scale shade solutions for commercial and industrial properties in Midrand. We provide shade ports for corporate parking lots, loading bay covers, and large retractable awnings for restaurants and hotels. Our structures are engineered for maximum durability and safety.",
      "rating": 4.4,
      "reviews": 22,
      "avatarSeed": "awning-logo-8",
      "serviceCategory": "Awnings",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 10,
      "employees": 20,
      "services": ["Commercial Shade Ports", "Industrial Awnings", "Loading Bay Covers", "Shade Structures"],
      "reviewData": [
        { "author": "Alan F.", "rating": 5, "comment": "Great job on our office parking shade ports." },
        { "author": "Lerato S.", "rating": 4, "comment": "Professional team and they worked around our business hours." },
        { "author": "Pieter B.", "rating": 4, "comment": "Solid structures and good technical support." },
        { "author": "Thane N.", "rating": 5, "comment": "The best commercial shade provider in Midrand." }
      ],
      "qa": [
        { "question": "What is the warranty on your awnings?", "answer": "We offer a 5-year warranty on all our awning structures and a 3-year warranty on the fabric." }
      ]
    },
    {
      "id": "pro-awning-9",
      "name": "Jozi Canvas & Shade",
      "location": "Johannesburg CBD",
      "description": "Traditional canvas awning specialists in the heart of Johannesburg. We specialize in classic stripe awnings, shopfront canopies, and bespoke canvas covers. Our team is expert at refurbishing old awning frames and providing high-quality replacement covers to give your property a fresh look.",
      "rating": 4.6,
      "reviews": 35,
      "avatarSeed": "awning-logo-9",
      "serviceCategory": "Awnings",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 25,
      "employees": 10,
      "services": ["Canvas Replacements", "Shop Canopies", "Fixed Canvas Awnings", "Refurbishment"],
      "reviewData": [
        { "author": "Zanele T.", "rating": 5, "comment": "They refurbished our old awnings and they look brand new!" },
        { "author": "Mark D.", "rating": 4, "comment": "Traditional craftsmanship at its best. Great service." },
        { "author": "Claire S.", "rating": 5, "comment": "Beautiful canvas work for our restaurant in Melville." },
        { "author": "Robert M.", "rating": 4, "comment": "Reliable and very experienced team." }
      ],
      "qa": [
        { "question": "What is the warranty on your awnings?", "answer": "We offer a 5-year warranty on all our awning structures and a 3-year warranty on the fabric." }
      ]
    },
    {
      "id": "pro-awning-10",
      "name": "Vaal Triangle Awning Pros",
      "location": "Vereeniging, Gauteng",
      "description": "Providing robust and reliable shade solutions for the Vaal Triangle area. We offer a variety of polycarbonate and metal awnings designed to protect your home from the elements. Whether it's a small window cover or a large entertainment area, we provide customized solutions to fit your needs and budget.",
      "rating": 4.3,
      "reviews": 19,
      "avatarSeed": "awning-logo-10",
      "serviceCategory": "Awnings",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 2,
      "yearsInBusiness": 8,
      "employees": 8,
      "services": ["Metal Awnings", "Polycarbonate Covers", "Window Protection", "Patio Shades"],
      "reviewData": [
        { "author": "Ockert V.", "rating": 5, "comment": "Excellent service and a very sturdy product." },
        { "author": "Maria M.", "rating": 4, "comment": "The team was very helpful and the price was right." },
        { "author": "Thabo K.", "rating": 4, "comment": "Good quality awnings and professional installation." },
        { "author": "Petrus S.", "rating": 4, "comment": "Happy with the result. No more rain on our patio." }
      ],
      "qa": [
        { "question": "What is the warranty on your awnings?", "answer": "We offer a 5-year warranty on all our awning structures and a 3-year warranty on the fabric." }
      ]
    }
  ]
};

export const getProfessionalById = (id: string): Professional | null => {
    for (const category in allProfessionals) {
        const pro = allProfessionals[category].find(p => p.id === id);
        if (pro) return pro;
    }
    return null;
};

    