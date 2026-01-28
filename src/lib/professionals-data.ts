
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
      ]
    },
    {
      "id": "pro-alu-4",
      "name": "East  Aluminium & Shopfronts",
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
        { "author": "Andries P.", "rating": 4, "comment": "Very happy with the service and the price was fair." },
        { "author": "Lindiwe S.", "rating": 5, "comment": "Great communication from the owner. Highly recommended." },
        { "author": "Robert H.", "rating": 4, "comment": "Neat installation and they cleaned up everything afterwards." }
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
      ]
    },
    {
      "id": "pro-awning-7",
      "name": "Fourways Outdoor Blinds & Awnings",
      "location": "Fourways, Johannesburg",
      "description": "Boutique awning company serving the northern suburbs of Johannesburg. We focus on stylish, high-quality outdoor blinds and retractable awnings that blend seamlessly with estate living. We offer a wide range of imported fabrics and locally manufactured hardware for the perfect balance of style and durability.",
      "rating": 5,
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
      ]
    }
  ],
  "balustrades": [
    {
      "id": "pro-balustrade-1",
      "name": "Grace Balustrade & Glass",
      "location": "Sandton, Johannesburg",
      "description": "Specialists in modern frameless glass and stainless steel balustrades for staircases, balconies, and pool areas. We provide SANS-compliant safety installations across Gauteng. Our designs prioritize sleek aesthetics and maximum durability, using high-grade materials that enhance property value for both residential and commercial clients.",
      "rating": 4.9,
      "reviews": 38,
      "avatarSeed": "balustrade-logo-1",
      "serviceCategory": "Balustrades",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 12,
      "employees": 15,
      "services": ["Frameless Glass Balustrades", "Stainless Steel Railings", "Pool Fencing", "Staircase Balustrades"],
      "reviewData": [
        { "author": "Thabo N.", "rating": 5, "comment": "The frameless glass looks incredible on our balcony." },
        { "author": "Sarah J.", "rating": 5, "comment": "Professional team and very neat installation." },
        { "author": "Chris M.", "rating": 4, "comment": "High quality finish, definitely worth the investment." },
        { "author": "Lindiwe D.", "rating": 5, "comment": "Best balustrade company in Sandton, highly recommended." }
      ]
    },
    {
      "id": "pro-balustrade-2",
      "name": "Team Steel & Railing",
      "location": "Pretoria East, Pretoria",
      "description": "Premier providers of custom-made steel and wrought iron balustrades in Pretoria. We focus on traditional and contemporary designs that offer superior security and style. From custom gate designs to intricate indoor railings, our Pretoria-based team ensures precision engineering and expert welding for every project.",
      "rating": 4.7,
      "reviews": 52,
      "avatarSeed": "balustrade-logo-2",
      "serviceCategory": "Balustrades",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 18,
      "employees": 22,
      "services": ["Wrought Iron Balustrades", "Custom Railings", "Security Gates", "Industrial Handrails"],
      "reviewData": [
        { "author": "Johan S.", "rating": 5, "comment": "Solid craftsmanship and excellent service in Pretoria East." },
        { "author": "Mpho G.", "rating": 4, "comment": "Beautiful custom design for our internal staircase." },
        { "author": "Annatjie B.", "rating": 5, "comment": "Sturdy and safe. Great peace of mind for our family." },
        { "author": "David K.", "rating": 5, "comment": "Very professional from quote to completion." }
      ]
    },
    {
      "id": "pro-balustrade-3",
      "name": "Hope Frameless Specialists",
      "location": "Sandton, Johannesburg",
      "description": "Luxury frameless glass balustrade installations for high-end properties in Sandton. We specialize in minimalist architectural glass solutions that offer unobstructed views. Our glass is toughened and heat-soaked to meet the highest South African safety standards (AAAMSA), ensuring elegance without compromising safety.",
      "rating": 4.8,
      "reviews": 25,
      "avatarSeed": "balustrade-logo-3",
      "serviceCategory": "Balustrades",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 7,
      "employees": 9,
      "services": ["Architectural Glass", "Glass Balconies", "Pool Enclosures", "Mezzanine Railings"],
      "reviewData": [
        { "author": "Bradley T.", "rating": 5, "comment": "The view from our patio is perfect now with the glass railings." },
        { "author": "Jessica L.", "rating": 5, "comment": "Elite service for a luxury finish. Very impressed." },
        { "author": "Simon R.", "rating": 4, "comment": "Premium pricing but the quality is unmatched." },
        { "author": "Nthabiseng M.", "rating": 5, "comment": "Clean, modern, and very safe." }
      ]
    },
    {
      "id": "pro-balustrade-4",
      "name": "M & M Railing Pros",
      "location": "Boksburg, Ekurhuleni",
      "description": "Affordable balustrade solutions for the East Rand community. We offer a variety of materials including timber, stainless steel, and wire balustrades. Whether you're renovating a home or building a new office, our mobile teams provide fast quotes and reliable installations tailored to your budget.",
      "rating": 4.6,
      "reviews": 41,
      "avatarSeed": "balustrade-logo-4",
      "serviceCategory": "Balustrades",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 10,
      "employees": 11,
      "services": ["Wire Balustrades", "Timber Railings", "Patio Railings", "Home Renovations"],
      "reviewData": [
        { "author": "Kevin D.", "rating": 5, "comment": "Great prices for the East Rand. Very happy with the result." },
        { "author": "Michelle V.", "rating": 4, "comment": "They fixed my old balcony railing quickly and professionally." },
        { "author": "Gary H.", "rating": 5, "comment": "Honest advice and solid workmanship." },
        { "author": "Sizwe Z.", "rating": 5, "comment": "Excellent communication and timely delivery." }
      ]
    },
    {
      "id": "pro-balustrade-5",
      "name": "Roy Modern Railings",
      "location": "Roodepoort, Johannesburg",
      "description": "Leading balustrade and staircase specialists in the West Rand. We offer contemporary designs in powder-coated steel and glass. Our focus is on providing robust, low-maintenance railing systems for residential estates and apartment blocks across Roodepoort and Krugersdorp.",
      "rating": 4.5,
      "reviews": 29,
      "avatarSeed": "balustrade-logo-5",
      "serviceCategory": "Balustrades",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 6,
      "employees": 8,
      "services": ["Powder-Coated Balustrades", "Steel Staircases", "Balcony Fencing", "Estate Solutions"],
      "reviewData": [
        { "author": "Charmaine J.", "rating": 5, "comment": "The new railings look so modern. Love the black finish." },
        { "author": "Andries L.", "rating": 4, "comment": "Professional team and they left everything very clean." },
        { "author": "Sipho K.", "rating": 5, "comment": "Reliable service and the price was exactly as quoted." },
        { "author": "Brenda P.", "rating": 4, "comment": "Good quality product and friendly staff." }
      ]
    },
    {
      "id": "pro-balustrade-6",
      "name": "Glass & Railing Hub",
      "location": "Midrand, Johannesburg",
      "description": "Innovative balustrade designs for the modern architecture of Midrand and Waterfall Estate. We specialize in glass and stainless steel combinations that suit contemporary office parks and smart homes. Our team provides technical drawings and engineering certificates for all large-scale installations.",
      "rating": 4.7,
      "reviews": 33,
      "avatarSeed": "balustrade-logo-6",
      "serviceCategory": "Balustrades",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 9,
      "employees": 14,
      "services": ["Commercial Balustrades", "Glass Handrails", "Engineering Certificates", "Custom Railing"],
      "reviewData": [
        { "author": "Alan F.", "rating": 5, "comment": "Highly professional and technical. Great for commercial sites." },
        { "author": "Lerato S.", "rating": 5, "comment": "Stunning glass work in our Waterfall home." },
        { "author": "Pieter B.", "rating": 4, "comment": "Good lead times and solid installation team." },
        { "author": "Thane N.", "rating": 5, "comment": "The best technical balustrade team in Midrand." }
      ]
    },
    {
      "id": "pro-balustrade-7",
      "name": "Cena Safety Balustrades",
      "location": "Centurion, Pretoria",
      "description": "Family-owned balustrade company serving the Centurion area with a focus on child and pet safety. We provide SABS-approved pool fencing and staircase railings. Our materials are treated to resist rust and weathering, making them ideal for outdoor entertainment areas in Gauteng.",
      "rating": 4.4,
      "reviews": 22,
      "avatarSeed": "balustrade-logo-7",
      "serviceCategory": "Balustrades",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 11,
      "employees": 7,
      "services": ["Safety Balustrades", "Pet Fencing", "Pool Safety Gates", "Patio Railing"],
      "reviewData": [
        { "author": "Willem H.", "rating": 5, "comment": "Excellent safety gates for our pool. Very sturdy." },
        { "author": "Nadia E.", "rating": 4, "comment": "Efficient service and the team was very friendly." },
        { "author": "Teboho R.", "rating": 5, "comment": "High quality stainless steel. No signs of rust." },
        { "author": "Dirk V.", "rating": 4, "comment": "Reliable local business in Centurion." }
      ]
    },
    {
      "id": "pro-balustrade-8",
      "name": "Stainless Steel Projects",
      "location": "Vereeniging, Gauteng",
      "description": "Heavy-duty stainless steel balustrade fabricators for the Vaal Triangle. We provide industrial handrails and residential balcony systems. Using 304 and 316-grade stainless steel, we ensure your balustrades remain pristine even in demanding environments.",
      "rating": 4.3,
      "reviews": 45,
      "avatarSeed": "balustrade-logo-8",
      "serviceCategory": "Balustrades",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 2,
      "yearsInBusiness": 20,
      "employees": 18,
      "services": ["Industrial Handrails", "Stainless Fabrication", "Balcony Systems", "Marine-Grade Steel"],
      "reviewData": [
        { "author": "Ockert R.", "rating": 5, "comment": "Strong, durable work. They know their steel." },
        { "author": "Mariaan G.", "rating": 4, "comment": "Great service for our river property railings." },
        { "author": "Thane B.", "rating": 4, "comment": "Reliable and local. Good value for money." },
        { "author": "Petrus K.", "rating": 5, "comment": "Best steelwork in the Vaal area." }
      ]
    },
    {
      "id": "pro-balustrade-9",
      "name": "CBD Balustrade Maintenance",
      "location": "Johannesburg CBD",
      "description": "Specialized in the maintenance, repair, and installation of balustrades for high-rise buildings and commercial centers in the Johannesburg CBD. We handle everything from replacing broken glass panels to re-securing loose handrails, ensuring urban properties remain safe and compliant.",
      "rating": 4.6,
      "reviews": 19,
      "avatarSeed": "balustrade-logo-9",
      "serviceCategory": "Balustrades",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 8,
      "employees": 12,
      "services": ["Balustrade Repairs", "Glass Panel Replacement", "Building Maintenance", "Urban Handrails"],
      "reviewData": [
        { "author": "Sizwe M.", "rating": 5, "comment": "Fast and efficient repair for our office block." },
        { "author": "Alan F.", "rating": 5, "comment": "Very professional and followed all safety protocols." },
        { "author": "Busi P.", "rating": 4, "comment": "Reliable partner for property managers." },
        { "author": "Daniel S.", "rating": 5, "comment": "Great service in the city center." }
      ]
    },
    {
      "id": "pro-balustrade-10",
      "name": "J.J Balustrade Designs",
      "location": "Alberton, Ekurhuleni",
      "description": "Bespoke balustrade designs for homeowners in Alberton and the South of Johannesburg. We offer a mix of wood, glass, and steel to create unique staircase and balcony features. Our mission is to combine art with safety, providing custom solutions that fit your home's unique style.",
      "rating": 4.9,
      "reviews": 14,
      "avatarSeed": "balustrade-logo-10",
      "serviceCategory": "Balustrades",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 5,
      "employees": 6,
      "services": ["Bespoke Designs", "Wood & Steel Railing", "Interior Balustrades", "Modern Glass"],
      "reviewData": [
        { "author": "Sonia P.", "rating": 5, "comment": "Beautiful custom staircase. It's the highlight of our home." },
        { "author": "Jason K.", "rating": 5, "comment": "Friendly team and very creative designs." },
        { "author": "Fatima H.", "rating": 5, "comment": "The installation was quick and very neat." },
        { "author": "Neil O.", "rating": 4, "comment": "Good quality and very fair pricing." }
      ]
    }
  ],
  "bathroom-renovations": [
    {
      "id": "pro-bath-reno-1",
      "name": "Siya Bathroom Remodelers",
      "location": "Sandton, Johannesburg",
      "description": "Premier turn-key bathroom renovation services in Johannesburg. We handle everything from demolition and plumbing to tiling and luxury fixture installation. Specializing in modern walk-in showers, freestanding tubs, and custom vanities that transform your bathroom into a private spa.",
      "rating": 4.9,
      "reviews": 52,
      "avatarSeed": "bath-reno-logo-1",
      "serviceCategory": "Bathroom Renovations",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 13,
      "employees": 15,
      "services": ["Full Bathroom Remodeling", "Walk-in Showers", "Plumbing", "Custom Tiling"],
      "reviewData": [
        { "author": "Amy S.", "rating": 5, "comment": "Transformed my old bathroom into a modern masterpiece." },
        { "author": "Lerato K.", "rating": 4, "comment": "Professional team, finished exactly on schedule." },
        { "author": "Mark D.", "rating": 5, "comment": "The quality of the tiling is outstanding." },
        { "author": "Sarah G.", "rating": 5, "comment": "Highly recommend for anyone in Sandton." }
      ]
    },
    {
      "id": "pro-bath-reno-2",
      "name": "Pre Elite Bathrooms",
      "location": "Pretoria East, Pretoria",
      "description": "High-end bathroom renovations in Pretoria. We focus on luxury finishes, Hansgrohe fittings, and bespoke cabinetry. Our team provides detailed 3D designs before starting work, ensuring your vision comes to life. Expert waterproofing and precision plumbing are the foundation of our work.",
      "rating": 4.8,
      "reviews": 38,
      "avatarSeed": "bath-reno-logo-2",
      "serviceCategory": "Bathroom Renovations",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 10,
      "employees": 12,
      "services": ["Luxury Renovations", "Bathroom Design", "Waterproofing", "Cabinetry"],
      "reviewData": [
        { "author": "Johan V.", "rating": 5, "comment": "The 3D design helped us visualize the perfect bathroom." },
        { "author": "Mpho K.", "rating": 5, "comment": "Elite service and the finish is perfect." },
        { "author": "Annatjie S.", "rating": 4, "comment": "Great attention to detail, very satisfied." },
        { "author": "David B.", "rating": 5, "comment": "Best bathroom renovators in Pretoria East." }
      ]
    },
    {
      "id": "pro-bath-reno-3",
      "name": "Sons Designer En-Suites",
      "location": "Sandton, Johannesburg",
      "description": "Specializing in boutique en-suite renovations for Sandton's luxury homes. We offer the latest in smart bathroom technology, heated towel rails, and floor heating. Our team prides itself on minimal disruption to your home while delivering world-class results.",
      "rating": 4.7,
      "reviews": 29,
      "avatarSeed": "bath-reno-logo-3",
      "serviceCategory": "Bathroom Renovations",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 8,
      "employees": 10,
      "services": ["En-Suite Renovations", "Underfloor Heating", "Smart Bathrooms", "Tiling"],
      "reviewData": [
        { "author": "Bradley W.", "rating": 5, "comment": "Professional and discreet. The results are stunning." },
        { "author": "Jessica R.", "rating": 5, "comment": "The heated floors are a game changer in winter!" },
        { "author": "Thabo N.", "rating": 4, "comment": "Top-tier service for a top-tier price." },
        { "author": "Simon V.", "rating": 5, "comment": "Excellent project management from start to finish." }
      ]
    },
    {
      "id": "pro-bath-reno-4",
      "name": "Mpho Bathroom & Tile",
      "location": "Boksburg, Ekurhuleni",
      "description": "Affordable and reliable bathroom renovations in the East Rand. We specialize in converting old baths into modern walk-in showers. Our comprehensive service includes electrical work for lighting and exhaust fans, ensuring a complete upgrade for your family bathroom.",
      "rating": 4.6,
      "reviews": 45,
      "avatarSeed": "bath-reno-logo-4",
      "serviceCategory": "Bathroom Renovations",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 11,
      "employees": 14,
      "services": ["Bath-to-Shower Conversions", "Tiling", "Electrical Services", "General Renovations"],
      "reviewData": [
        { "author": "Kevin L.", "rating": 5, "comment": "They converted my old bath to a shower in 3 days. Amazing!" },
        { "author": "Nadine D.", "rating": 4, "comment": "Good local service and very competitive pricing." },
        { "author": "Sizwe Z.", "rating": 5, "comment": "Reliable guys, they did exactly what they promised." },
        { "author": "Gary M.", "rating": 4, "comment": "Very happy with the tiling and the new vanity." }
      ]
    },
    {
      "id": "pro-bath-reno-5",
      "name": "New West Bath Pros",
      "location": "Roodepoort, Johannesburg",
      "description": "Family-run bathroom renovation business serving the West Rand. We pride ourselves on personalized service and attention to detail. From small guest bathrooms to large family restrooms, we provide quality workmanship and use the best local materials to ensure longevity.",
      "rating": 4.5,
      "reviews": 31,
      "avatarSeed": "bath-reno-logo-5",
      "serviceCategory": "Bathroom Renovations",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 7,
      "employees": 8,
      "services": ["Small Bathroom Specialist", "Family Bathrooms", "Guest Toilets", "Plumbing"],
      "reviewData": [
        { "author": "Charmaine B.", "rating": 5, "comment": "Lovely team and they did a great job on our guest toilet." },
        { "author": "Andries P.", "rating": 4, "comment": "Very happy with the service and the price was fair." },
        { "author": "Lindiwe S.", "rating": 5, "comment": "Great communication throughout the renovation." },
        { "author": "Robert H.", "rating": 4, "comment": "Neat work and they finished ahead of schedule." }
      ]
    },
    {
      "id": "pro-bath-reno-6",
      "name": "Rand Modern Bathrooms",
      "location": "Midrand, Johannesburg",
      "description": "Modern bathroom solutions for the growing Midrand area. We focus on water-saving fixtures and eco-friendly designs. Whether it's a sleek minimalist look or a classic aesthetic, our Midrand-based team delivers high-quality bathroom upgrades that last.",
      "rating": 4.7,
      "reviews": 22,
      "avatarSeed": "bath-reno-logo-6",
      "serviceCategory": "Bathroom Renovations",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 6,
      "employees": 11,
      "services": ["Eco-Friendly Bathrooms", "Modern Fixtures", "Water Saving Systems", "Tiling"],
      "reviewData": [
        { "author": "Zanele T.", "rating": 5, "comment": "Perfect for our new home in Waterfall. Very modern." },
        { "author": "Chris J.", "rating": 5, "comment": "The eco-friendly fixtures are great and look amazing." },
        { "author": "Musa W.", "rating": 4, "comment": "Excellent technical knowledge and professional team." },
        { "author": "Claire V.", "rating": 5, "comment": "Fast and efficient service in Kyalami." }
      ]
    },
    {
      "id": "pro-bath-reno-7",
      "name": "Cerion Plumbing & Bath Renovators",
      "location": "Centurion, Pretoria",
      "description": "Experts in solving plumbing issues while renovating your bathroom in Centurion. We specialize in leak detection, re-piping, and full bathroom overhauls. Our focus is on ensuring the 'behind-the-scenes' plumbing is as perfect as the visible tiles and fixtures.",
      "rating": 4.4,
      "reviews": 28,
      "avatarSeed": "bath-reno-logo-7",
      "serviceCategory": "Bathroom Renovations",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 9,
      "employees": 9,
      "services": ["Plumbing-Focused Reno", "Leak Detection", "Re-piping", "Bathroom Overhauls"],
      "reviewData": [
        { "author": "Willem D.", "rating": 5, "comment": "They fixed our leaks and gave us a beautiful new bathroom." },
        { "author": "Nomsa L.", "rating": 4, "comment": "Good turnaround time for the quote and the install." },
        { "author": "Henk S.", "rating": 5, "comment": "The best value for money I found in Centurion." },
        { "author": "Teboho M.", "rating": 4, "comment": "Quality workmanship and very professional." }
      ]
    },
    {
      "id": "pro-bath-reno-8",
      "name": "Vaal Bathroom Concepts",
      "location": "Vereeniging, Gauteng",
      "description": "Serving the Vaal Triangle with creative and durable bathroom renovation concepts. We offer a range of styles from industrial to farmhouse. Our team is expert at working with various materials like concrete, stone, and traditional ceramics to create a unique space.",
      "rating": 4.3,
      "reviews": 51,
      "avatarSeed": "bath-reno-logo-8",
      "serviceCategory": "Bathroom Renovations",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 2,
      "yearsInBusiness": 15,
      "employees": 18,
      "services": ["Custom Concepts", "Concrete Bathrooms", "Stone Tiling", "Traditional Styles"],
      "reviewData": [
        { "author": "Ockert V.", "rating": 5, "comment": "Excellent service and a very creative design." },
        { "author": "Maria M.", "rating": 4, "comment": "The team was very helpful and the price was right." },
        { "author": "Thane B.", "rating": 4, "comment": "Good quality work and professional installation." },
        { "author": "Petrus S.", "rating": 5, "comment": "Happy with the result. Best bathroom in the Vaal." }
      ]
    },
    {
      "id": "pro-bath-reno-9",
      "name": "Jozi Luxury Bath & Spa",
      "location": "Parkhurst, Johannesburg",
      "description": "Specialized in high-end, spa-like bathroom renovations in Johannesburg's northern suburbs. We focus on relaxation and luxury, incorporating features like steam showers, soaking tubs, and ambient lighting. Our designs are bespoke, ensuring your bathroom is a one-of-a-kind sanctuary.",
      "rating": 4.9,
      "reviews": 35,
      "avatarSeed": "bath-reno-logo-9",
      "serviceCategory": "Bathroom Renovations",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 12,
      "employees": 10,
      "services": ["Spa Bathrooms", "Steam Showers", "Soaking Tubs", "Ambient Lighting"],
      "reviewData": [
        { "author": "Zanele T.", "rating": 5, "comment": "They created a sanctuary in my home. Simply amazing." },
        { "author": "Mark D.", "rating": 5, "comment": "The steam shower is incredible. Top class work." },
        { "author": "Claire S.", "rating": 5, "comment": "Beautiful design and the lighting is perfect." },
        { "author": "Robert M.", "rating": 4, "comment": "Reliable and very experienced team." }
      ]
    },
    {
      "id": "pro-bath-reno-10",
      "name": "Alton Bath & Kitchen Renovators",
      "location": "Alberton, Ekurhuleni",
      "description": "Your local experts for bathroom and kitchen renovations in Alberton. We offer combined packages for homeowners looking to upgrade both spaces at once. Our team is known for efficiency, cleanliness, and delivering high-quality results on a budget.",
      "rating": 4.6,
      "reviews": 18,
      "avatarSeed": "bath-reno-logo-10",
      "serviceCategory": "Bathroom Renovations",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 5,
      "employees": 6,
      "services": ["Combined Renovations", "Kitchen Upgrades", "Bathroom Tiling", "Plumbing"],
      "reviewData": [
        { "author": "Sonia P.", "rating": 5, "comment": "Great service and the package deal was excellent." },
        { "author": "Jason K.", "rating": 5, "comment": "Best prices in Alberton. Very neat workers." },
        { "author": "Fatima H.", "rating": 4, "comment": "The installation was quick and the quality is good." },
        { "author": "Neil O.", "rating": 5, "comment": "Highly recommend for anyone on the East/South Rand." }
      ]
    }
  ],
  "blinds": [
    {
        "id": "pro-blind-1",
        "name": "Aura Window Interiors",
        "location": "Sandton, Johannesburg",
        "description": "Luxury window treatment specialists offering bespoke fabric blinds and automated shading. We specialize in sophisticated textures and high-end motorization for Sandton’s premier homes. Our collection includes exclusive imported fabrics for Roman and Roller blinds that combine elegance with smart-home connectivity.",
        "rating": 4.9,
        "reviews": 28,
        "avatarSeed": "blinds-logo-1",
        "serviceCategory": "Blinds",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 12,
        "employees": 10,
        "services": ["Bespoke Fabric Blinds", "Automated Shading", "Roman Blinds", "Smart-Home Integration"],
        "reviewData": [{ "author": "Cathy S.", "rating": 5, "comment": "The automated system is flawless. Highly recommend Aura." }, { "author": "Thabo L.", "rating": 5, "comment": "Beautiful fabrics and very professional installation." }, { "author": "Mark R.", "rating": 4, "comment": "Great quality, lead time was a bit long but worth it." }, { "author": "Linda M.", "rating": 5, "comment": "Excellent service and attention to detail." }]
    },
    {
        "id": "pro-blind-2",
        "name": "Capital City Blind Works",
        "location": "Pretoria East, Pretoria",
        "description": "The go-to supplier for durable and affordable window blinds in the Pretoria area. We offer bulk discounts for office blocks and competitive pricing for residential homes. Our range features heavy-duty aluminium venetians and easy-to-clean PVC shutters designed for the busy South African lifestyle.",
        "rating": 4.6,
        "reviews": 54,
        "avatarSeed": "blinds-logo-2",
        "serviceCategory": "Blinds",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 15,
        "employees": 18,
        "services": ["Aluminium Venetians", "PVC Shutters", "Office Window Coverings", "Bulk Installations"],
        "reviewData": [{ "author": "Johan P.", "rating": 5, "comment": "Best prices in Pretoria for our office renovation." }, { "author": "Annatjie D.", "rating": 5, "comment": "The PVC shutters look great and are so easy to clean." }, { "author": "Sipho M.", "rating": 4, "comment": "Reliable service and the quality is very consistent." }, { "author": "David S.", "rating": 4, "comment": "Professional team and quick turnaround time." }]
    },
    {
        "id": "pro-blind-3",
        "name": "Highveld Vista Shades",
        "location": "Midrand, Johannesburg",
        "description": "Specialized in large-scale window solutions for the modern estates of Midrand. We focus on 'Vision' zebra blinds and sun-filtering rollers that protect your furniture from UV damage without losing your view. Our expert consultants help you choose the perfect density and style for your north-facing rooms.",
        "rating": 4.8,
        "reviews": 22,
        "avatarSeed": "blinds-logo-3",
        "serviceCategory": "Blinds",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 6,
        "employees": 8,
        "services": ["Zebra Blinds", "Sun-Filtering Rollers", "UV Protection", "Estate Consultations"],
        "reviewData": [{ "author": "Neo R.", "rating": 5, "comment": "The Zebra blinds in our Waterfall home look amazing." }, { "author": "Chris H.", "rating": 5, "comment": "Finally, we can keep the sun out but still see the garden!" }, { "author": "Lindiwe Z.", "rating": 5, "comment": "Very knowledgeable about UV protection fabrics." }, { "author": "Sam G.", "rating": 4, "comment": "Great service and very neat installation." }]
    },
    {
        "id": "pro-blind-4",
        "name": "Urban Blind Studio",
        "location": "Randburg, Johannesburg",
        "description": "Contemporary blinds for trendy Johannesburg homes. We offer a curated selection of minimalist bamboo and wooden venetians. Our studio specializes in custom-colored blinds that match your interior paint exactly. We are the preferred choice for decorators and architects in the Randburg area.",
        "rating": 4.7,
        "reviews": 31,
        "avatarSeed": "blinds-logo-4",
        "serviceCategory": "Blinds",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 8,
        "employees": 7,
        "services": ["Custom Colored Blinds", "Wooden Venetians", "Bamboo Shades", "Design Consultations"],
        "reviewData": [{ "author": "Zanele T.", "rating": 5, "comment": "The color match was perfect. Exceptional service." }, { "author": "Bradley F.", "rating": 4, "comment": "Lovely wooden blinds, really warmed up our lounge." }, { "author": "Sarah B.", "rating": 5, "comment": "Creative and professional. Love their design eye." }, { "author": "Kevin J.", "rating": 5, "comment": "Best boutique blind shop in Randburg." }]
    },
    {
        "id": "pro-blind-5",
        "name": "E & K Blind Emporium",
        "location": "Boksburg, Ekurhuleni",
        "description": "Serving the East Rand for over two decades with quality window coverings. We manufacture our own vertical and roller blinds locally, ensuring the highest quality control and the best prices in Ekurhuleni. We offer a 24-month warranty on all mechanisms and fabrics.",
        "rating": 4.5,
        "reviews": 68,
        "avatarSeed": "blinds-logo-5",
        "serviceCategory": "Blinds",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 22,
        "employees": 15,
        "services": ["Vertical Blinds", "Roller Blind Manufacturing", "Warranty Repairs", "Local Supply"],
        "reviewData": [{ "author": "Michelle V.", "rating": 5, "comment": "Quality you can trust. Been using them for years." }, { "author": "Gary H.", "rating": 5, "comment": "Support local! Great prices and even better service." }, { "author": "Nadine S.", "rating": 4, "comment": "Sturdy blinds that really last. Very happy." }, { "author": "Sizwe D.", "rating": 4, "comment": "Good turnaround on a custom order." }]
    },
    {
        "id": "pro-blind-6",
        "name": "Tinum Shutter & Blind",
        "location": "Fourways, Johannesburg",
        "description": "Premium security shutters and elegant blinds for the Fourways area. We specialize in aluminium security shutters that act as both a window covering and a burglar bar. Our high-end finish and seamless integration make us the top choice for secure estate living in Gauteng.",
        "rating": 4.9,
        "reviews": 19,
        "avatarSeed": "blinds-logo-6",
        "serviceCategory": "Blinds",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 9,
        "employees": 12,
        "services": ["Security Shutters", "Aluminium Blinds", "Estate Security", "Integrated Solutions"],
        "reviewData": [{ "author": "Cameron D.", "rating": 5, "comment": "Beautiful shutters that make me feel safe. Exceptional." }, { "author": "Samantha Q.", "rating": 5, "comment": "Top class from quote to installation." }, { "author": "Elias O.", "rating": 5, "comment": "The security shutters are worth every cent." }, { "author": "Jessica K.", "rating": 4, "comment": "Expensive but the quality is unmatched." }]
    },
    {
        "id": "pro-blind-7",
        "name": "Eco-Blinds",
        "location": "Roodepoort, Johannesburg",
        "description": "Environmentally conscious window solutions in the West Rand. We offer solar-reflective blinds and recycled fabric rollers that help insulate your home. Our mission is to reduce your energy bills while providing stylish, sustainable window decor for the modern eco-friendly home.",
        "rating": 4.6,
        "reviews": 14,
        "avatarSeed": "blinds-logo-7",
        "serviceCategory": "Blinds",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 5,
        "employees": 6,
        "services": ["Solar-Reflective Blinds", "Recycled Fabric Rollers", "Insulation Solutions", "Eco-Friendly Decor"],
        "reviewData": [{ "author": "Andries L.", "rating": 5, "comment": "Our house is noticeably cooler. Great product." }, { "author": "Charmaine J.", "rating": 5, "comment": "Love the eco-friendly focus. The fabric looks great." }, { "author": "Robert H.", "rating": 4, "comment": "Good service and very helpful staff." }, { "author": "Brenda P.", "rating": 4, "comment": "Professional install and very neat." }]
    },
    {
        "id": "pro-blind-8",
        "name": "City Blind Boutique",
        "location": "Centurion, Pretoria",
        "description": "Personalized window styling in Centurion. We offer an exclusive range of Roman and Honeycomb blinds. Our 'Mobile Showroom' comes to your home or office, allowing you to see samples in your own lighting. We pride ourselves on boutique service and expert craftsmanship.",
        "rating": 4.8,
        "reviews": 27,
        "avatarSeed": "blinds-logo-8",
        "serviceCategory": "Blinds",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 7,
        "employees": 5,
        "services": ["Honeycomb Blinds", "Roman Shades", "Mobile Showroom", "Interior Styling"],
        "reviewData": [{ "author": "Willem H.", "rating": 5, "comment": "The mobile showroom was so convenient. Great selection." }, { "author": "Nadia E.", "rating": 5, "comment": "Beautiful Roman blinds. The finish is perfect." }, { "author": "Teboho R.", "rating": 5, "comment": "Personal service you don't find elsewhere." }, { "author": "Henk S.", "rating": 4, "comment": "Very satisfied with the quality and the price." }]
    },
    {
        "id": "pro-blind-9",
        "name": "Vaal River Shading",
        "location": "Vereeniging, Gauteng",
        "description": "The Vaal Triangle's experts in outdoor and indoor shading. We specialize in heavy-duty outdoor roller blinds for patios and moisture-resistant blinds for river-facing homes. Our products are built to handle the humidity and sun of the Vaal area while looking stylish and modern.",
        "rating": 4.4,
        "reviews": 38,
        "avatarSeed": "blinds-logo-9",
        "serviceCategory": "Blinds",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 11,
        "employees": 10,
        "services": ["Outdoor Patio Blinds", "Moisture-Resistant Blinds", "River-Facing Solutions", "Sun Protection"],
        "reviewData": [{ "author": "Ockert V.", "rating": 5, "comment": "The patio blinds are perfect for summer. Very strong." }, { "author": "Maria M.", "rating": 4, "comment": "Good local service and very reliable team." }, { "author": "Thane B.", "rating": 5, "comment": "Finally have privacy on our deck! Great job." }, { "author": "Petrus S.", "rating": 4, "comment": "Reliable and the price was fair." }]
    },
    {
        "id": "pro-blind-10",
        "name": "Ai Blind Solutions",
        "location": "Alberton, Ekurhuleni",
        "description": "Your local window treatment experts in Alberton. We specialize in a combination of custom blinds and window safety/decorative tinting. Our 'Double-Deco' service allows you to combine blinds with heat-reduction film for the ultimate in-home comfort and privacy.",
        "rating": 5,
        "reviews": 11,
        "avatarSeed": "blinds-logo-10",
        "serviceCategory": "Blinds",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 4,
        "employees": 5,
        "services": ["Custom Blinds", "Window Tinting", "Heat-Reduction Film", "Privacy Film"],
        "reviewData": [{ "author": "Sonia P.", "rating": 5, "comment": "The combination of tints and blinds made a huge difference." }, { "author": "Jason K.", "rating": 5, "comment": "Best prices in Alberton. Very professional." }, { "author": "Fatima H.", "rating": 5, "comment": "The installation was quick and the quality is excellent." }, { "author": "Neil O.", "rating": 5, "comment": "Top class service from a very local team." }]
    }
  ],
  "burglar-bars": [
    {
        "id": "pro-burglar-1",
        "name": "G.S.O Security Gates & Bars",
        "location": "Randburg, Johannesburg",
        "description": "Gauteng's trusted choice for home security. We manufacture and install high-strength steel burglar bars and retractable security gates. Our products are powder-coated for longevity and designed to provide a high-level deterrent against intruders while maintaining the aesthetic appeal of your home.",
        "rating": 4.8,
        "reviews": 64,
        "avatarSeed": "burglar-logo-1",
        "serviceCategory": "Burglar Bars",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 15,
        "employees": 20,
        "services": ["Retractable Gates", "Fixed Burglar Bars", "Security Swing Gates", "Steel Fabrication"],
        "reviewData": [
            { "author": "Thabo M.", "rating": 5, "comment": "Very strong bars and the installation was very neat." },
            { "author": "Sarah W.", "rating": 5, "comment": "Peace of mind at last. Excellent service." },
            { "author": "Chris P.", "rating": 4, "comment": "Great product, slightly long wait for installation." },
            { "author": "Lindiwe N.", "rating": 5, "comment": "Professional team and the bars look great." }
        ]
    },
    {
        "id": "pro-burglar-2",
        "name": "Tshwane Steel Barriers",
        "location": "Pretoria East, Pretoria",
        "description": "Leading specialists in custom-welded burglar bars and security doors in Pretoria. We offer a variety of designs from classic Spanish bars to modern minimalist steel grids. All our products are SABS approved and come with a lifetime guarantee against rust and structural failure.",
        "rating": 4.7,
        "reviews": 45,
        "avatarSeed": "burglar-logo-2",
        "serviceCategory": "Burglar Bars",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 12,
        "employees": 15,
        "services": ["Spanish Bars", "Modern Steel Grids", "Security Doors", "SABS Approved Bars"],
        "reviewData": [
            { "author": "Johan S.", "rating": 5, "comment": "The Spanish bars look great on our old Pretoria house." },
            { "author": "Mpho G.", "rating": 4, "comment": "Good service and very sturdy steelwork." },
            { "author": "Annatjie B.", "rating": 5, "comment": "Very professional and left the site clean." },
            { "author": "David K.", "rating": 5, "comment": "The best security company in Pretoria East." }
        ]
    },
    {
        "id": "pro-burglar-3",
        "name": "Ton Safe Guard",
        "location": "Sandton, Johannesburg",
        "description": "Premium security solutions for the Sandton area. We specialize in 'Invisibar' polycarbonate burglar bars and high-end trellis systems. Our focus is on providing maximum security without compromising your view. Ideal for luxury homes and estates where aesthetics and security are equally important.",
        "rating": 4.9,
        "reviews": 28,
        "avatarSeed": "burglar-logo-3",
        "serviceCategory": "Burglar Bars",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 8,
        "employees": 10,
        "services": ["Polycarbonate Bars", "Trellis Gates", "Estate Security", "Invisibars"],
        "reviewData": [
            { "author": "Bradley T.", "rating": 5, "comment": "The polycarbonate bars are invisible! So happy." },
            { "author": "Jessica L.", "rating": 5, "comment": "High-end service for a high-end home. Very professional." },
            { "author": "Simon R.", "rating": 4, "comment": "Premium pricing but the quality is unmatched." },
            { "author": "Nthabiseng M.", "rating": 5, "comment": "Clean, modern, and very safe." }
        ]
    },
    {
        "id": "pro-burglar-4",
        "name": "East Rand Trellis & Bars",
        "location": "Boksburg, Ekurhuleni",
        "description": "Affordable security for the East Rand community. We manufacture slam-lock security gates and custom-fitted burglar bars for all window types. Our mobile units provide on-site quotes and fast installation, ensuring your home is secured quickly and at a price you can afford.",
        "rating": 4.6,
        "reviews": 55,
        "avatarSeed": "burglar-logo-4",
        "serviceCategory": "Burglar Bars",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 11,
        "employees": 18,
        "services": ["Slam-Lock Gates", "Custom Window Bars", "Mobile Quoting", "Rapid Installation"],
        "reviewData": [
            { "author": "Kevin D.", "rating": 5, "comment": "Best price for slam-lock gates in Benoni." },
            { "author": "Michelle V.", "rating": 4, "comment": "They secured my whole house in one day." },
            { "author": "Gary H.", "rating": 5, "comment": "Honest guys and very reliable service." },
            { "author": "Sizwe Z.", "rating": 4, "comment": "Good local service and solid steel products." }
        ]
    },
    {
        "id": "pro-burglar-5",
        "name": "Vikha Secure Solutions",
        "location": "Midrand, Johannesburg",
        "description": "Providing comprehensive security barriers for residential and industrial properties in Midrand. We offer heavy-duty industrial burglar proofing, driveway gates, and domestic security bars. Our team is expert at integrating security bars with existing alarm systems for maximum protection.",
        "rating": 4.7,
        "reviews": 33,
        "avatarSeed": "burglar-logo-5",
        "serviceCategory": "Burglar Bars",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 9,
        "employees": 12,
        "services": ["Industrial Proofing", "Driveway Gates", "Domestic Security", "Alarm Integration"],
        "reviewData": [
            { "author": "Alan F.", "rating": 5, "comment": "They secured our warehouse perfectly. Very professional." },
            { "author": "Lerato S.", "rating": 5, "comment": "Sturdy bars and great service in Kyalami." },
            { "author": "Pieter B.", "rating": 4, "comment": "Good technical knowledge and solid installation." },
            { "author": "Thane N.", "rating": 5, "comment": "The best security team in the Midrand area." }
        ]
    },
    {
        "id": "pro-burglar-6",
        "name": "Fortress Steel",
        "location": "Centurion, Pretoria",
        "description": "Family-owned security business serving the Centurion area. We specialize in custom-designed security features, including ornate burglar bars and heavy-duty front door gates. We focus on providing a personal touch and ensuring every customer feels safe in their home.",
        "rating": 4.4,
        "reviews": 22,
        "avatarSeed": "burglar-logo-6",
        "serviceCategory": "Burglar Bars",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 6,
        "employees": 7,
        "services": ["Ornate Bars", "Heavy-Duty Gates", "Custom Security", "Home Protection"],
        "reviewData": [
            { "author": "Willem H.", "rating": 5, "comment": "Very sturdy bars and the design is beautiful." },
            { "author": "Nadia E.", "rating": 4, "comment": "Efficient service and the team was very friendly." },
            { "author": "Teboho R.", "rating": 5, "comment": "High quality steel and very professional install." },
            { "author": "Dirk V.", "rating": 4, "comment": "Reliable local business in Centurion." }
        ]
    },
    {
        "id": "pro-burglar-7",
        "name": "Peter Ironworks",
        "location": "Roodepoort, Johannesburg",
        "description": "Master blacksmiths and security specialists in the West Rand. We create handmade wrought iron burglar bars that are both artistic and incredibly strong. From vintage styles to modern geometric patterns, our bars are built to last a lifetime and provide ultimate security.",
        "rating": 4.9,
        "reviews": 37,
        "avatarSeed": "burglar-logo-7",
        "serviceCategory": "Burglar Bars",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 20,
        "employees": 10,
        "services": ["Wrought Iron Bars", "Artistic Security", "Geometric Patterns", "Lifetime Guarantee"],
        "reviewData": [
            { "author": "Charmaine J.", "rating": 5, "comment": "Their ironwork is beautiful. It actually adds to the house." },
            { "author": "Andries L.", "rating": 5, "comment": "The strongest bars I have ever seen. Exceptional work." },
            { "author": "Sipho K.", "rating": 5, "comment": "Prompt service and great communication." },
            { "author": "Brenda P.", "rating": 4, "comment": "Very satisfied with the quality and the price." }
        ]
    },
    {
        "id": "pro-burglar-8",
        "name": "iView Bars Gauteng",
        "location": "Randburg, Johannesburg",
        "description": "Specialized in the installation of high-tensile polycarbonate transparent burglar bars. Our 'ClearView' system provides a modern alternative to traditional steel bars, allowing you to enjoy your garden view without feeling 'caged in.' Completely rust-proof and virtually unbreakable.",
        "rating": 4.5,
        "reviews": 19,
        "avatarSeed": "burglar-logo-8",
        "serviceCategory": "Burglar Bars",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 5,
        "employees": 8,
        "services": ["Transparent Bars", "Polycarbonate Security", "Rust-Proof Bars", "Window Protection"],
        "reviewData": [
            { "author": "Zanele T.", "rating": 5, "comment": "You can't even see them from the outside. Love it!" },
            { "author": "Mark D.", "rating": 4, "comment": "Great alternative to steel. Very professional install." },
            { "author": "Claire S.", "rating": 5, "comment": "Finally, I can see my garden and feel safe." },
            { "author": "Robert M.", "rating": 4, "comment": "Good product, though a bit more expensive than steel." }
        ]
    },
    {
        "id": "pro-burglar-9",
        "name": "VIP Security",
        "location": "Vereeniging, Gauteng",
        "description": "Serving the Vaal with robust security gates and window bars. We offer a full range of security barriers for homes, shops, and factories. Our Vaal-based team is known for rapid response and high-quality welding, ensuring your property is protected against the toughest conditions.",
        "rating": 4.3,
        "reviews": 51,
        "avatarSeed": "burglar-logo-9",
        "serviceCategory": "Burglar Bars",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 2,
        "yearsInBusiness": 15,
        "employees": 15,
        "services": ["Factory Security", "Shopfront Gates", "Residential Bars", "Heavy Welding"],
        "reviewData": [
            { "author": "Ockert V.", "rating": 5, "comment": "Solid steelwork. They secured our whole factory." },
            { "author": "Maria M.", "rating": 4, "comment": "The team was very helpful and the price was fair." },
            { "author": "Thane B.", "rating": 4, "comment": "Good quality and professional installation." },
            { "author": "Petrus S.", "rating": 5, "comment": "The strongest bars in the Vaal triangle." }
        ]
    },
    {
        "id": "pro-burglar-10",
        "name": "Alban Home Shields",
        "location": "Alberton, Ekurhuleni",
        "description": "Your local security experts in the South. We specialize in custom-fit burglar bars and sliding security doors. Our focus is on providing high-quality, locally manufactured security products that are designed specifically for the needs of Alberton and Germiston homeowners.",
        "rating": 4.6,
        "reviews": 14,
        "avatarSeed": "burglar-logo-10",
        "serviceCategory": "Burglar Bars",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 5,
        "employees": 6,
        "services": ["Custom-Fit Bars", "Sliding Security Doors", "Home Protection", "Local Manufacturing"],
        "reviewData": [
            { "author": "Sonia P.", "rating": 5, "comment": "Excellent service and a very sturdy product." },
            { "author": "Jason K.", "rating": 5, "comment": "Best prices in Alberton. Very neat workers." },
            { "author": "Fatima H.", "rating": 4, "comment": "The installation was quick and the quality is good." },
            { "author": "Neil O.", "rating": 5, "comment": "Highly recommend for anyone in the South Rand." }
        ]
    }
  ],
  "curtains": [
    {
        "id": "pro-curtain-1",
        "name": "Curtains & Linens Gauteng",
        "location": "Sandton, Johannesburg",
        "description": "Premier suppliers of luxury custom-made curtains and high-end linens in Sandton. We specialize in sophisticated window treatments, including ripple fold, eyelet, and pleated styles. Our professional team provides expert on-site measurements and installation, ensuring a perfect fit for luxury residential homes and corporate boardrooms.",
        "rating": 4.9,
        "reviews": 42,
        "avatarSeed": "curtain-logo-1",
        "serviceCategory": "Curtains",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 14,
        "employees": 12,
        "services": ["Custom Curtains", "Ripple Fold Drapes", "Window Measurement", "Fabric Supply"],
        "reviewData": [{ "author": "Lerato M.", "rating": 5, "comment": "The ripple fold curtains look absolutely stunning in our lounge." }, { "author": "Chris P.", "rating": 5, "comment": "Excellent service and high-quality fabrics. Highly recommend." }, { "author": "Sarah W.", "rating": 4, "comment": "Great installation, though the lead time was slightly long." }, { "author": "Thabo N.", "rating": 5, "comment": "Professional and very helpful with fabric selection." }]
    },
    {
        "id": "pro-curtain-2",
        "name": "Window Decor",
        "location": "Pretoria East, Pretoria",
        "description": "Leading window decor specialists in Pretoria East. We offer a vast range of local and imported fabrics for custom curtain manufacturing. From classic drapes to modern sheer curtains, we provide comprehensive solutions including rods, tracks, and motorized curtain systems for smart homes.",
        "rating": 4.7,
        "reviews": 38,
        "avatarSeed": "curtain-logo-2",
        "serviceCategory": "Curtains",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 10,
        "employees": 15,
        "services": ["Motorized Curtains", "Curtain Rods & Tracks", "Sheer Curtains", "Installation"],
        "reviewData": [{ "author": "Johan S.", "rating": 5, "comment": "The motorized system works perfectly with our home automation." }, { "author": "Mpho K.", "rating": 4, "comment": "Good variety of fabrics and very friendly staff." }, { "author": "Annatjie B.", "rating": 5, "comment": "Beautiful curtains and very neat installation." }, { "author": "David K.", "rating": 5, "comment": "The best curtain shop in Pretoria East." }]
    },
    {
        "id": "pro-curtain-3",
        "name": "The Curtain Workshop",
        "location": "Randburg, Johannesburg",
        "description": "Specialized workshop offering bespoke curtain making and upholstery services in Randburg. We work closely with interior designers and homeowners to create unique window treatments. Our services include valances, pelmets, and tie-backs, all handcrafted to the highest standards.",
        "rating": 4.8,
        "reviews": 25,
        "avatarSeed": "curtain-logo-3",
        "serviceCategory": "Curtains",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 18,
        "employees": 8,
        "services": ["Bespoke Curtain Making", "Pelmets & Valances", "Upholstery", "Tie-backs"],
        "reviewData": [{ "author": "Bradley T.", "rating": 5, "comment": "True craftsmanship. The curtains are perfectly made." }, { "author": "Jessica L.", "rating": 5, "comment": "They also upholstered my chairs to match. Brilliant work." }, { "author": "Simon R.", "rating": 4, "comment": "Excellent quality, very professional workshop." }, { "author": "Nthabiseng M.", "rating": 5, "comment": "Helpful advice and a beautiful final product." }]
    },
    {
        "id": "pro-curtain-4",
        "name": "Drapes & Rods",
        "location": "Boksburg, Ekurhuleni",
        "description": "Your local destination for affordable curtains and hardware in the East Rand. We supply and fit a wide range of ready-made and custom curtains, along with high-quality steel and wooden curtain rods. We pride ourselves on fast turnaround times and budget-friendly pricing for families in Ekurhuleni.",
        "rating": 4.6,
        "reviews": 51,
        "avatarSeed": "curtain-logo-4",
        "serviceCategory": "Curtains",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 12,
        "employees": 10,
        "services": ["Ready-made Curtains", "Wooden Rods", "Steel Tracks", "Home Fitting"],
        "reviewData": [{ "author": "Kevin D.", "rating": 5, "comment": "Great prices and they installed everything in one day." }, { "author": "Michelle V.", "rating": 4, "comment": "Good local service, very satisfied with the drapes." }, { "author": "Gary H.", "rating": 5, "comment": "Honest advice and very reliable team." }, { "author": "Sizwe Z.", "rating": 5, "comment": "Excellent communication and the rods are very sturdy." }]
    },
    {
        "id": "pro-curtain-5",
        "name": "Mi Motorized Curtains",
        "location": "Midrand, Johannesburg",
        "description": "Specialized in high-tech window treatments for the modern Midrand market. We focus on automated and motorized curtain tracks that can be controlled via smartphone or remote. Our expert technicians ensure seamless integration with your home security and lighting systems.",
        "rating": 4.9,
        "reviews": 19,
        "avatarSeed": "curtain-logo-5",
        "serviceCategory": "Curtains",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 6,
        "employees": 9,
        "services": ["Smart Curtain Systems", "Motorized Tracks", "Integration Services", "Luxury Drapes"],
        "reviewData": [{ "author": "Alan F.", "rating": 5, "comment": "The smart home integration is amazing. Top service." }, { "author": "Lerato S.", "rating": 5, "comment": "Expert knowledge on motorization. Highly recommend." }, { "author": "Pieter B.", "rating": 4, "comment": "Very professional and the tracks are whisper quiet." }, { "author": "Thane N.", "rating": 5, "comment": "The best tech-focused curtain company in Midrand." }]
    },
    {
        "id": "pro-curtain-6",
        "name": "West & North Interior Textiles",
        "location": "Roodepoort, Johannesburg",
        "description": "Family-owned business providing custom curtains and soft furnishings in the West Rand. We offer a curated collection of local textiles and designer fabrics. Our mission is to provide personalized service and high-quality workmanship to enhance the beauty and comfort of your home.",
        "rating": 4.5,
        "reviews": 29,
        "avatarSeed": "curtain-logo-6",
        "serviceCategory": "Curtains",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 7,
        "employees": 6,
        "services": ["Soft Furnishings", "Custom Textiles", "Curtain Installation", "Fabric Sourcing"],
        "reviewData": [{ "author": "Charmaine J.", "rating": 5, "comment": "Lovely fabrics and very professional service." }, { "author": "Andries L.", "rating": 4, "comment": "Very happy with the new curtains. Great quality." }, { "author": "Sipho K.", "rating": 5, "comment": "Reliable service and the team was very friendly." }, { "author": "Brenda P.", "rating": 5, "comment": "Great attention to detail and beautiful results." }]
    },
    {
        "id": "pro-curtain-7",
        "name": "Deal Custom Curtains",
        "location": "Centurion, Pretoria",
        "description": "Dedicated to providing elegant window solutions for Centurion residents. We specialize in classic blackout curtains, lace sheers, and heavy winter drapes. Our focus is on providing functional and stylish window coverings that provide privacy and temperature control for your home.",
        "rating": 4.4,
        "reviews": 33,
        "avatarSeed": "curtain-logo-7",
        "serviceCategory": "Curtains",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 11,
        "employees": 7,
        "services": ["Blackout Curtains", "Winter Drapes", "Privacy Sheers", "On-site Fitting"],
        "reviewData": [{ "author": "Willem H.", "rating": 5, "comment": "The blackout curtains are perfect for the nursery." }, { "author": "Nadia E.", "rating": 4, "comment": "Efficient service and the team was very professional." }, { "author": "Teboho R.", "rating": 5, "comment": "High quality fabric and very neat installation." }, { "author": "Dirk V.", "rating": 4, "comment": "Reliable local business in Centurion." }]
    },
    {
        "id": "pro-curtain-8",
        "name": "Jozi Fabric Studio",
        "location": "Johannesburg CBD",
        "description": "A creative hub for fabrics and curtains in the heart of Johannesburg. We offer an eclectic mix of designer fabrics and artisanal curtain making services. We cater to the trendy suburbs of Jozi, providing bold and unique window treatments for homes, cafes, and creative studios.",
        "rating": 4.8,
        "reviews": 12,
        "avatarSeed": "curtain-logo-8",
        "serviceCategory": "Curtains",
        "isProVerified": false,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 5,
        "employees": 5,
        "services": ["Artisanal Curtains", "Designer Fabrics", "Unique Patterns", "Creative Consultations"],
        "reviewData": [{ "author": "Zanele T.", "rating": 5, "comment": "The most creative curtain shop in Jozi! Love it." }, { "author": "Mark D.", "rating": 5, "comment": "Incredible patterns and very high-quality work." }, { "author": "Claire S.", "rating": 5, "comment": "They helped me create a very unique look for my studio." }, { "author": "Robert M.", "rating": 4, "comment": "Professional service and very fast turnaround." }]
    },
    {
        "id": "pro-curtain-9",
        "name": "Vaal Decor & Drapes",
        "location": "Vereeniging, Gauteng",
        "description": "Providing the Vaal Triangle with affordable and stylish curtain solutions. We offer a full range of window treatments, from simple rods to complex pleated drapes. We are known for our friendly service and for being the go-to supplier for large residential projects in the Vaal area.",
        "rating": 4.3,
        "reviews": 45,
        "avatarSeed": "curtain-logo-9",
        "serviceCategory": "Curtains",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 2,
        "yearsInBusiness": 20,
        "employees": 14,
        "services": ["Residential Drapes", "Pleated Curtains", "Full-House Packages", "Local Supply"],
        "reviewData": [{ "author": "Ockert R.", "rating": 5, "comment": "Excellent service and a very wide selection of fabrics." }, { "author": "Maria M.", "rating": 4, "comment": "Great service for our home in Vanderbijlpark." }, { "author": "Thane B.", "rating": 4, "comment": "Reliable and local. Good value for money." }, { "author": "Petrus K.", "rating": 5, "comment": "Best curtain service in the Vaal triangle." }]
    },
    {
        "id": "pro-curtain-10",
        "name": "Alberton Blind & Curtain Hub",
        "location": "Alberton, Ekurhuleni",
        "description": "Your local window treatment experts in the South. We offer a combined service of custom blinds and curtains, allowing you to create the perfect layered look for your windows. Our team is known for efficiency and professional advice, ensuring you get the best look for your budget.",
        "rating": 4.6,
        "reviews": 19,
        "avatarSeed": "curtain-logo-10",
        "serviceCategory": "Curtains",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 9,
        "employees": 6,
        "services": ["Layered Window Decor", "Custom Curtains", "Window Blinds", "Professional Advice"],
        "reviewData": [{ "author": "Sonia P.", "rating": 5, "comment": "Excellent service and the layered look is beautiful." }, { "author": "Jason K.", "rating": 5, "comment": "Best prices in Alberton. No hidden costs." }, { "author": "Fatima H.", "rating": 4, "comment": "The installation was quick and very neat." }, { "author": "Neil O.", "rating": 5, "comment": "Highly recommend for any home window work." }]
    }
  ],
  "demolition": [
    {
        "id": "pro-demo-1",
        "name": "Go Demolition Professionals",
        "location": "Randburg, Johannesburg",
        "description": "Premier demolition contractors in Gauteng specializing in industrial and commercial building demolition. We provide controlled implosions, structural dismantling, and site clearing services. Our team is fully licensed and adheres to the strictest safety and environmental regulations in South Africa.",
        "rating": 4.9,
        "reviews": 72,
        "avatarSeed": "demo-logo-1",
        "serviceCategory": "Demolition",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 25,
        "employees": 60,
        "services": ["Building Demolition", "Structural Dismantling", "Site Clearing", "Hazardous Waste Removal"],
        "reviewData": [{ "author": "Alan F.", "rating": 5, "comment": "Highly professional and technical. Great for large sites." }, { "author": "Lerato S.", "rating": 5, "comment": "Excellent safety standards and project management." }, { "author": "Pieter B.", "rating": 4, "comment": "Good lead times and very capable heavy machinery." }, { "author": "Thane N.", "rating": 5, "comment": "The most reliable demolition team in Gauteng." }]
    },
    {
        "id": "pro-demo-2",
        "name": "P Site Prep & Demolition",
        "location": "Pretoria East, Pretoria",
        "description": "Leading specialists in residential and light commercial demolition in Pretoria. We focus on preparing sites for new construction, including the removal of old foundations, swimming pools, and outbuildings. We provide cost-effective and efficient rubble removal and land leveling services.",
        "rating": 4.7,
        "reviews": 48,
        "avatarSeed": "demo-logo-2",
        "serviceCategory": "Demolition",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 15,
        "employees": 25,
        "services": ["Residential Demolition", "Foundation Removal", "Pool Removal", "Land Leveling"],
        "reviewData": [{ "author": "Johan V.", "rating": 5, "comment": "They cleared our old house site in record time." }, { "author": "Mpho K.", "rating": 4, "comment": "Very professional and left the site perfectly level." }, { "author": "Annatjie S.", "rating": 5, "comment": "Great communication and very competitive pricing." }, { "author": "David B.", "rating": 5, "comment": "Highly recommend for anyone building in Pretoria." }]
    },
    {
        "id": "pro-demo-3",
        "name": "JHB Wreckers & Rubble",
        "location": "Johannesburg CBD",
        "description": "Comprehensive demolition and rubble removal services across Johannesburg South and the CBD. We specialize in interior strip-outs for renovations and the safe demolition of derelict structures. Our fleet of tipper trucks ensures rapid waste removal and eco-friendly disposal.",
        "rating": 4.6,
        "reviews": 55,
        "avatarSeed": "demo-logo-3",
        "serviceCategory": "Demolition",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 12,
        "employees": 20,
        "services": ["Interior Strip-outs", "Rubble Removal", "Derelict Building Demo", "Waste Disposal"],
        "reviewData": [{ "author": "Sizwe Z.", "rating": 5, "comment": "Fast and efficient service for our office renovation." }, { "author": "Kevin L.", "rating": 4, "comment": "Reliable and honest. Good value for money." }, { "author": "Nomsa D.", "rating": 5, "comment": "They handled the strip-out with total ease." }, { "author": "Gary M.", "rating": 4, "comment": "Solid workmanship. Will definitely use them again." }]
    },
    {
        "id": "pro-demo-4",
        "name": "Daily Industrial Demolition",
        "location": "Germiston, Ekurhuleni",
        "description": "Specialized demolition services for the industrial sector in the East Rand. We handle factory dismantling, warehouse demolition, and the safe removal of steel structures. Our team is expert at working in active industrial environments with minimal disruption to surrounding operations.",
        "rating": 4.8,
        "reviews": 31,
        "avatarSeed": "demo-logo-4",
        "serviceCategory": "Demolition",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 20,
        "employees": 35,
        "services": ["Factory Dismantling", "Steel Structure Removal", "Warehouse Demolition", "Industrial Demo"],
        "reviewData": [{ "author": "Bradley W.", "rating": 5, "comment": "Expert handling of our warehouse demolition." }, { "author": "Jessica R.", "rating": 5, "comment": "Professional, punctual, and very safety conscious." }, { "author": "Thabo N.", "rating": 4, "comment": "Excellent technical skills for steel removal." }, { "author": "Simon V.", "rating": 5, "comment": "The best industrial demolition team in Ekurhuleni." }]
    },
    {
        "id": "pro-demo-5",
        "name": "Sandton Residential Demo",
        "location": "Sandton, Johannesburg",
        "description": "High-end residential demolition and 'de-construction' services in Sandton. We specialize in the careful dismantling of luxury homes to salvage valuable materials like timber and stone. We provide a clean, quiet, and professional service tailored for exclusive estates.",
        "rating": 4.9,
        "reviews": 21,
        "avatarSeed": "demo-logo-5",
        "serviceCategory": "Demolition",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 5,
        "yearsInBusiness": 8,
        "employees": 15,
        "services": ["De-construction", "Material Salvage", "Luxury Home Demo", "Site Preparation"],
        "reviewData": [{ "author": "Bradley T.", "rating": 5, "comment": "Professional and discreet. The site was left spotless." }, { "author": "Jessica L.", "rating": 5, "comment": "They salvaged so much timber for our new build. Great!" }, { "author": "Simon R.", "rating": 4, "comment": "Premium pricing but the service is unmatched." }, { "author": "Nthabiseng M.", "rating": 5, "comment": "The best choice for demolition in Sandton estates." }]
    },
    {
        "id": "pro-demo-6",
        "name": "Rubble & Wrecking",
        "location": "Roodepoort, Johannesburg",
        "description": "Family-run demolition business serving the West Rand community. We offer affordable demolition of small structures, garages, and walls. Our comprehensive service includes rubble removal and site cleaning, ensuring your property is ready for its next project.",
        "rating": 4.5,
        "reviews": 34,
        "avatarSeed": "demo-logo-6",
        "serviceCategory": "Demolition",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 10,
        "employees": 12,
        "services": ["Small Structure Demo", "Wall Removal", "Garage Demolition", "Rubble Removal"],
        "reviewData": [{ "author": "Charmaine J.", "rating": 5, "comment": "They removed our old garage quickly and cleanly." }, { "author": "Andries L.", "rating": 4, "comment": "Professional team and they left everything very tidy." }, { "author": "Sipho K.", "rating": 5, "comment": "Reliable service and the price was very fair." }, { "author": "Brenda P.", "rating": 4, "comment": "Good quality work and very friendly staff." }]
    },
    {
        "id": "pro-demo-7",
        "name": "Midrand Site Clearing Specialists",
        "location": "Midrand, Johannesburg",
        "description": "Experts in land clearing and bulk earthworks for the growing Midrand area. We provide the demolition of existing structures and the clearing of vegetation to prepare land for residential and commercial development. Our modern fleet of excavators and dozers ensures rapid results.",
        "rating": 4.7,
        "reviews": 27,
        "avatarSeed": "demo-logo-7",
        "serviceCategory": "Demolition",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 9,
        "employees": 20,
        "services": ["Land Clearing", "Bulk Earthworks", "Vegetation Removal", "Site Prep"],
        "reviewData": [{ "author": "Alan F.", "rating": 5, "comment": "Professional and fast. Great for our new development site." }, { "author": "Lerato S.", "rating": 5, "comment": "Sturdy equipment and great service in Kyalami." }, { "author": "Pieter B.", "rating": 4, "comment": "Good technical knowledge and solid site work." }, { "author": "Thane N.", "rating": 5, "comment": "The best site clearing team in Midrand." }]
    },
    {
        "id": "pro-demo-8",
        "name": "KIM Demolition Experts",
        "location": "Centurion, Pretoria",
        "description": "Providing precise and safe demolition services for the Centurion area. We specialize in the removal of unsafe structures and the careful demolition of residential extensions. Our team is committed to safety and ensures minimal impact on neighboring properties.",
        "rating": 4.4,
        "reviews": 18,
        "avatarSeed": "demo-logo-8",
        "serviceCategory": "Demolition",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 3,
        "yearsInBusiness": 11,
        "employees": 10,
        "services": ["Precise Demolition", "Extension Removal", "Unsafe Structure Demo", "Safety Audits"],
        "reviewData": [{ "author": "Willem H.", "rating": 5, "comment": "Very precise work. No damage to the main house." }, { "author": "Nadia E.", "rating": 4, "comment": "Efficient service and the team was very friendly." }, { "author": "Teboho R.", "rating": 5, "comment": "High standards of safety and very professional." }, { "author": "Dirk V.", "rating": 4, "comment": "Reliable local demolition business in Centurion." }]
    },
    {
        "id": "pro-demo-9",
        "name": "J.J Demolitions Services",
        "location": "Vereeniging, Gauteng",
        "description": "Serving the Vaal with heavy-duty demolition and site clearing. We specialize in the demolition of old industrial sites and large residential properties. Our Vaal-based team is mobile and equipped with high-capacity machinery to tackle any demolition challenge.",
        "rating": 4.3,
        "reviews": 41,
        "avatarSeed": "demo-logo-9",
        "serviceCategory": "Demolition",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 2,
        "yearsInBusiness": 18,
        "employees": 30,
        "services": ["Industrial Site Demo", "Heavy Demolition", "Site Clearing", "Machinery Hire"],
        "reviewData": [{ "author": "Ockert V.", "rating": 5, "comment": "Strong, durable work. They handled the factory demo well." }, { "author": "Maria M.", "rating": 4, "comment": "The team was very helpful and the price was fair." }, { "author": "Thane B.", "rating": 4, "comment": "Good quality work and professional installation." }, { "author": "Petrus S.", "rating": 5, "comment": "The best heavy demolition team in the Vaal triangle." }]
    },
    {
        "id": "pro-demo-10",
        "name": "Siya Waste Demolitions",
        "location": "Alberton, Ekurhuleni",
        "description": "Your local demolition and rubble removal experts in the South. We provide rapid and affordable demolition of small buildings, walls, and paving. Our focus is on getting your site cleared quickly and efficiently, so you can move forward with your renovation or build.",
        "rating": 4.6,
        "reviews": 14,
        "avatarSeed": "demo-logo-10",
        "serviceCategory": "Demolition",
        "isProVerified": true,
        "isDemo": true,
        "priorityRank": 4,
        "yearsInBusiness": 5,
        "employees": 8,
        "services": ["Rapid Demolition", "Wall Removal", "Paving Removal", "Rubble Disposal"],
        "reviewData": [{ "author": "Sonia P.", "rating": 5, "comment": "Fast service and a very clean site afterwards." }, { "author": "Jason K.", "rating": 5, "comment": "Best prices in Alberton. Very neat workers." }, { "author": "Fatima H.", "rating": 4, "comment": "The demolition was quick and the price was good." }, { "author": "Neil O.", "rating": 5, "comment": "Highly recommend for any small demolition job." }]
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

    