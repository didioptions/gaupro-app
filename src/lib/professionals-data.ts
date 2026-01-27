
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
        { "author": "Sizwe M.", "rating": 5, "comment": "Fast and efficient repair for our office block." },
        { "author": "Alan F.", "rating": 5, "comment": "Very professional and followed all safety protocols." },
        { "author": "Busi P.", "rating": 4, "comment": "Reliable partner for property managers." },
        { "author": "Daniel S.", "rating": 5, "comment": "Great service in the city center." }
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
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "serviceCategory": "Balustrades",
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
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "serviceCategory": "Bathroom Renovations",
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
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "serviceCategory": "Bathroom Renovations",
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
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "serviceCategory": "Bathroom Renovations",
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
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "serviceCategory": "Bathroom Renovations",
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
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "serviceCategory": "Bathroom Renovations",
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
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "serviceCategory": "Bathroom Renovations",
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
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "serviceCategory": "Bathroom Renovations",
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
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 2,
      "serviceCategory": "Bathroom Renovations",
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
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "serviceCategory": "Bathroom Renovations",
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
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "serviceCategory": "Bathroom Renovations",
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
  "builders": [
    {
      "id": "pro-builder-1",
      "name": "Eli-con Constructors",
      "location": "Sandton, Johannesburg",
      "description": "NHBRC-registered home builders specializing in turnkey residential projects. From luxury mansion construction in Sandton to modern home extensions, we manage the entire building process including architecture, foundations, and final finishes. Our expert team ensures high-quality structural integrity and modern design.",
      "rating": 4.8,
      "reviews": 62,
      "avatarSeed": "builder-logo-1",
      "serviceCategory": "Builders",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 15,
      "employees": 45,
      "services": ["New Home Construction", "Home Extensions", "Double Storey Building", "Project Management"],
      "reviewData": [{ "author": "Thabo M.", "rating": 5, "comment": "Built our dream home from scratch. Professional and transparent." }, { "author": "Sarah K.", "rating": 5, "comment": "The best contractors in Sandton. No hidden costs." }, { "author": "Chris P.", "rating": 4, "comment": "Solid building work, though finishing took a week longer than planned." }, { "author": "Lindiwe N.", "rating": 5, "comment": "Excellent communication throughout the whole build." }]
    },
    {
      "id": "pro-builder-2",
      "name": "Tshwa Builders",
      "location": "Pretoria East, Pretoria",
      "description": "Leading residential and commercial builders in Pretoria. We specialize in contemporary estate homes and office renovations. Our team is known for precision masonry, concrete work, and structural alterations. We pride ourselves on meeting strict deadlines and adhering to all South African building regulations.",
      "rating": 4.7,
      "reviews": 45,
      "avatarSeed": "builder-logo-2",
      "serviceCategory": "Builders",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 12,
      "employees": 30,
      "services": ["Estate Home Building", "Commercial Renovations", "Structural Alterations", "Concrete Work"],
      "reviewData": [{ "author": "Johan V.", "rating": 5, "comment": "Very high standard of work on our new office block." }, { "author": "Mpho G.", "rating": 4, "comment": "Reliable builders, great attention to detail on the brickwork." }, { "author": "Annatjie S.", "rating": 5, "comment": "Transformed our old house with a beautiful new wing." }, { "author": "David B.", "rating": 5, "comment": "Professional, clean site, and very hardworking crew." }]
    },
    {
      "id": "pro-builder-3",
      "name": "Zambezi Heritage Builders",
      "location": "Midrand, Johannesburg",
      "description": "Specialists in high-end residential construction and heritage-style home builds. Serving the Midrand and Waterfall areas, we focus on sustainable building practices and premium finishes. Our services include multi-unit developments and bespoke private residences with a focus on energy efficiency.",
      "rating": 4.9,
      "reviews": 28,
      "avatarSeed": "builder-logo-3",
      "serviceCategory": "Builders",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 9,
      "employees": 25,
      "services": ["Bespoke Home Building", "Multi-Unit Development", "Green Building", "Civil Works"],
      "reviewData": [{ "author": "Bradley W.", "rating": 5, "comment": "World-class service in Waterfall. The finish is impeccable." }, { "author": "Jessica R.", "rating": 5, "comment": "Creative solutions for our eco-friendly home." }, { "author": "Simon V.", "rating": 5, "comment": "Very professional project managers. Highly recommend." }, { "author": "Nthabiseng L.", "rating": 4, "comment": "Excellent quality, though the quote was on the higher side." }]
    },
    {
      "id": "pro-builder-4",
      "name": "Cit-con Contractors",
      "location": "Soweto, Johannesburg",
      "description": "Reliable building contractors serving the south of Johannesburg and the CBD. We specialize in affordable housing projects, boundary walls, and large-scale renovations. Our team is equipped for both small residential fixes and large industrial building maintenance.",
      "rating": 4.5,
      "reviews": 89,
      "avatarSeed": "builder-logo-4",
      "serviceCategory": "Builders",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 20,
      "employees": 50,
      "services": ["Affordable Housing", "Boundary Walls", "Industrial Maintenance", "Tiling & Plastering"],
      "reviewData": [{ "author": "Sizwe Z.", "rating": 5, "comment": "Great team, they built our boundary wall in record time." }, { "author": "Kevin L.", "rating": 4, "comment": "Reliable and honest. Good value for money." }, { "author": "Nomsa D.", "rating": 5, "comment": "They handled our complex renovation with total ease." }, { "author": "Gary M.", "rating": 4, "comment": "Solid workmanship. Will definitely use them again." }]
    },
    {
      "id": "pro-builder-5",
      "name": "Highveld Structural Pros",
      "location": "Boksburg, Ekurhuleni",
      "description": "Expert structural builders focusing on heavy-duty construction and home foundations in the East Rand. We specialize in fixing structural cracks, sub-floor installations, and second-story additions. Our engineering-first approach ensures your building is safe and durable.",
      "rating": 4.6,
      "reviews": 17,
      "avatarSeed": "builder-logo-5",
      "serviceCategory": "Builders",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 14,
      "employees": 20,
      "services": ["Foundation Specialist", "Second Story Additions", "Structural Repairs", "Roofing"],
      "reviewData": [{ "author": "Michelle B.", "rating": 5, "comment": "They fixed our foundation issues perfectly. Very knowledgeable." }, { "author": "Andries L.", "rating": 5, "comment": "Expert advice on our double-story extension." }, { "author": "Sipho K.", "rating": 4, "comment": "Great technical skills. Very professional team." }, { "author": "Robert H.", "rating": 4, "comment": "Good quality work, very thorough with safety." }]
    },
    {
      "id": "pro-builder-6",
      "name": "First River Construction",
      "location": "Vereeniging, Gauteng",
      "description": "The leading construction company in the Vaal Triangle. We specialize in riverside property development, holiday homes, and industrial steel structures. We provide a full range of building services from site clearing to final painting and electrical COC.",
      "rating": 4.4,
      "reviews": 24,
      "avatarSeed": "builder-logo-6",
      "serviceCategory": "Builders",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 22,
      "employees": 60,
      "services": ["Steel Structures", "Riverside Homes", "Site Clearing", "Industrial Building"],
      "reviewData": [{ "author": "Ockert V.", "rating": 5, "comment": "They built our river house. Exceptional service and quality." }, { "author": "Maria M.", "rating": 4, "comment": "Reliable and well-known in the Vaal area." }, { "author": "Thane B.", "rating": 5, "comment": "Very professional handling of our factory extension." }, { "author": "Petrus S.", "rating": 4, "comment": "Good workers, very dedicated and honest." }]
    },
    {
      "id": "pro-builder-7",
      "name": "Egoli Extension Experts",
      "location": "Randburg, Johannesburg",
      "description": "Specialized in residential extensions and cottage building in the Randburg area. We help homeowners maximize their property value by building high-quality granny flats, garden cottages, and extra rooms. We handle all municipal approvals and building plans.",
      "rating": 4.8,
      "reviews": 21,
      "avatarSeed": "builder-logo-7",
      "serviceCategory": "Builders",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 8,
      "employees": 15,
      "services": ["Granny Flats", "Garden Cottages", "Municipal Approvals", "Home Improvements"],
      "reviewData": [{ "author": "Claire S.", "rating": 5, "comment": "Built a beautiful cottage for us. Highly recommended." }, { "author": "Mark D.", "rating": 5, "comment": "They took care of all the paperwork with the council. Stress-free!" }, { "author": "Zanele T.", "rating": 5, "comment": "Fast, clean, and very professional builders." }, { "author": "Robert M.", "rating": 4, "comment": "Great quality work at a very fair price." }]
    },
    {
      "id": "pro-builder-8",
      "name": "Jacaranda Home Builders",
      "location": "Pretoria North, Pretoria",
      "description": "Family-owned building company serving the greater Pretoria North region. We specialize in traditional family homes and outdoor entertainment areas (lapas and braai rooms). Our goal is to provide high-quality building at affordable prices with a personal touch.",
      "rating": 4.7,
      "reviews": 13,
      "avatarSeed": "builder-logo-8",
      "serviceCategory": "Builders",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 11,
      "employees": 12,
      "services": ["Residential Building", "Braai Rooms", "Renovations", "Roofing"],
      "reviewData": [{ "author": "Willem D.", "rating": 5, "comment": "Wonderful team. They made our renovation so easy." }, { "author": "Nomsa L.", "rating": 5, "comment": "The best price and quality in the Moot area." }, { "author": "Henk S.", "rating": 4, "comment": "Reliable and honest builders. Very happy." }, { "author": "Teboho M.", "rating": 5, "comment": "Excellent workmanship on our new entertainment area." }]
    },
    {
      "id": "pro-builder-9",
      "name": "Wise Masonry & Build",
      "location": "Roodepoort, Johannesburg",
      "description": "Brickwork and masonry specialists in the West Rand. We provide high-quality structural building, face-brick finishes, and plastering. Whether you are building a new garage or a complex multi-story home, our master masons ensure a perfect finish every time.",
      "rating": 4.6,
      "reviews": 25,
      "avatarSeed": "builder-logo-9",
      "serviceCategory": "Builders",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 18,
      "employees": 18,
      "services": ["Face-brick Specialist", "Masonry Work", "Garage Building", "Plastering"],
      "reviewData": [{ "author": "Charmaine J.", "rating": 5, "comment": "Their brickwork is an art form. Truly beautiful finish." }, { "author": "Andries P.", "rating": 4, "comment": "Solid builders who really know their craft." }, { "author": "Sipho K.", "rating": 5, "comment": "Professional and punctual. Highly recommend." }, { "author": "Brenda P.", "rating": 4, "comment": "Good quality and very sturdy construction." }]
    },
    {
      "id": "pro-builder-10",
      "name": "Plat Project Managers",
      "location": "Fourways, Johannesburg",
      "description": "High-end building and project management service for luxury estates in Fourways. We bridge the gap between architects and contractors, ensuring that your high-spec home is built to exact standards, on time, and within budget. We specialize in modern, high-tech homes.",
      "rating": 5,
      "reviews": 12,
      "avatarSeed": "builder-logo-10",
      "serviceCategory": "Builders",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 6,
      "employees": 10,
      "services": ["Project Management", "Luxury Home Building", "Contractor Oversight", "High-Spec Finishes"],
      "reviewData": [{ "author": "Cameron J.", "rating": 5, "comment": "They took the stress out of our build in Dainfern." }, { "author": "Neo M.", "rating": 5, "comment": "Expert management. Everything was perfect." }, { "author": "Samantha Q.", "rating": 5, "comment": "Highly professional and very detailed oriented." }, { "author": "Elias O.", "rating": 5, "comment": "The only company I would trust with a high-end project." }]
    }
  ],
  "building-materials": [
    {
      "id": "pro-materials-1",
      "name": "Sama Brick & Sand Wholesalers",
      "location": "Randburg, Johannesburg",
      "description": "Major suppliers of bulk building materials across Johannesburg. We supply cement, plaster sand, river sand, and crushed stone at wholesale prices. With a large fleet of delivery trucks, we ensure your construction site never runs out of the essentials. Perfect for large-scale builders and DIY enthusiasts.",
      "rating": 4.7,
      "reviews": 42,
      "avatarSeed": "materials-logo-1",
      "serviceCategory": "Building Materials",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 25,
      "employees": 20,
      "services": ["Bulk Cement", "River Sand", "Crushed Stone", "Face Bricks"],
      "reviewData": [{ "author": "Pieter H.", "rating": 5, "comment": "Always on time with deliveries. Best bulk prices." }, { "author": "Lerato M.", "rating": 5, "comment": "Very helpful staff and great quality sand." }, { "author": "Sizwe D.", "rating": 4, "comment": "Reliable supply for my construction projects." }, { "author": "Jane S.", "rating": 5, "comment": "Quick turnaround on a bulk cement order." }]
    },
    {
      "id": "pro-materials-2",
      "name": "K.K. Hardware Haven",
      "location": "Pretoria East, Pretoria",
      "description": "Your one-stop shop for building hardware and materials in Pretoria. We stock everything from power tools and plumbing supplies to roofing sheets and timber. Our expert staff provides technical advice for home renovations and professional building projects alike.",
      "rating": 4.6,
      "reviews": 78,
      "avatarSeed": "materials-logo-2",
      "serviceCategory": "Building Materials",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 15,
      "employees": 22,
      "services": ["Building Hardware", "Power Tools", "Plumbing Supplies", "Timber"],
      "reviewData": [{ "author": "Johan S.", "rating": 5, "comment": "Huge variety and very knowledgeable staff." }, { "author": "Mpho G.", "rating": 4, "comment": "Good prices on plumbing and electrical hardware." }, { "author": "Annatjie B.", "rating": 5, "comment": "The only place I go for my DIY supplies." }, { "author": "David K.", "rating": 5, "comment": "Excellent service and convenient location." }]
    },
    {
      "id": "pro-materials-3",
      "name": "Jozi Timber & Truss",
      "location": "Midrand, Johannesburg",
      "description": "Specialized suppliers of structural timber and custom roof trusses in Gauteng. We provide high-quality, SABS-approved timber for all building needs. Our engineering team designs and manufactures roof trusses for residential homes and commercial buildings, including delivery and installation support.",
      "rating": 4.8,
      "reviews": 23,
      "avatarSeed": "materials-logo-3",
      "serviceCategory": "Building Materials",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 20,
      "employees": 35,
      "services": ["Structural Timber", "Roof Trusses", "Laminated Beams", "Decking Timber"],
      "reviewData": [{ "author": "Bradley T.", "rating": 5, "comment": "The trusses were perfectly engineered and delivered on time." }, { "author": "Jessica R.", "rating": 5, "comment": "High-quality timber and great technical support." }, { "author": "Simon V.", "rating": 4, "comment": "Excellent variety of decking options." }, { "author": "Nthabiseng M.", "rating": 5, "comment": "Professional service from a very experienced team." }]
    },
    {
      "id": "pro-materials-4",
      "name": "Cent Supply Yard",
      "location": "Centurion, Pretoria",
      "description": "Providing a comprehensive range of building materials for the Centurion area. We specialize in bricks, blocks, and lintels. Our yard is easily accessible, and we offer a reliable crane-truck delivery service for heavy loads directly onto your site or slab.",
      "rating": 4.5,
      "reviews": 32,
      "avatarSeed": "materials-logo-4",
      "serviceCategory": "Building Materials",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 10,
      "employees": 15,
      "services": ["Cement Blocks", "Stock Bricks", "Lintels", "Crane Delivery"],
      "reviewData": [{ "author": "Willem H.", "rating": 5, "comment": "The crane delivery was very efficient. Saved us a lot of work." }, { "author": "Nadia E.", "rating": 4, "comment": "Good local supplier with competitive pricing." }, { "author": "Teboho R.", "rating": 5, "comment": "The best place for stock bricks in Centurion." }, { "author": "Dirk V.", "rating": 4, "comment": "Solid service and friendly staff." }]
    },
    {
      "id": "pro-materials-5",
      "name": "East Bulk Materials",
      "location": "Boksburg, Ekurhuleni",
      "description": "Specialized in bulk aggregates and civil construction materials in the East Rand. We supply road-base materials, filling sand, and large-scale concrete stone. Our fleet handles high-volume orders for commercial developments and infrastructure projects across Gauteng.",
      "rating": 4.4,
      "reviews": 41,
      "avatarSeed": "materials-logo-5",
      "serviceCategory": "Building Materials",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 18,
      "employees": 28,
      "services": ["Aggregate Supply", "Filling Sand", "Concrete Stone", "Civil Materials"],
      "reviewData": [{ "author": "Kevin D.", "rating": 5, "comment": "Reliable partner for our road-building project." }, { "author": "Michelle V.", "rating": 4, "comment": "Great prices on bulk aggregate orders." }, { "author": "Gary H.", "rating": 5, "comment": "Professional team and they handle large volumes easily." }, { "author": "Sizwe Z.", "rating": 4, "comment": "Essential supplier for the East Rand area." }]
    },
    {
      "id": "pro-materials-6",
      "name": "Tops Cement Hub",
      "location": "Roodepoort, Johannesburg",
      "description": "Dedicated cement and concrete product specialists serving the West Rand. We stock all major brands of cement (PPC, Afrisam, Lafarge) and offer ready-mix concrete delivery. Our hub also provides concrete pavers and garden walling solutions for residential landscaping.",
      "rating": 4.7,
      "reviews": 56,
      "avatarSeed": "materials-logo-6",
      "serviceCategory": "Building Materials",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 12,
      "employees": 14,
      "services": ["Cement Sales", "Ready-Mix Concrete", "Concrete Pavers", "Retaining Walls"],
      "reviewData": [{ "author": "Charmaine J.", "rating": 5, "comment": "Excellent prices on cement. Delivery was very prompt." }, { "author": "Andries L.", "rating": 5, "comment": "The ready-mix was exactly on time and high quality." }, { "author": "Sipho K.", "rating": 4, "comment": "Good advice on the right cement for our project." }, { "author": "Brenda P.", "rating": 5, "comment": "Friendly service and very reliable local supplier." }]
    },
    {
      "id": "pro-materials-7",
      "name": "Sando Luxury Finishes",
      "location": "Sandton, Johannesburg",
      "description": "Boutique supplier of high-end building finishes in Sandton. We specialize in imported tiles, designer taps, luxury flooring, and premium architectural hardware. Our showroom is designed for architects and homeowners looking for the highest quality materials for luxury renovations.",
      "rating": 4.9,
      "reviews": 19,
      "avatarSeed": "materials-logo-7",
      "serviceCategory": "Building Materials",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 5,
      "yearsInBusiness": 7,
      "employees": 10,
      "services": ["Imported Tiles", "Luxury Flooring", "Architectural Hardware", "Sanitaryware"],
      "reviewData": [{ "author": "Bradley W.", "rating": 5, "comment": "Stunning selection of tiles. Nothing else like it in Jozi." }, { "author": "Jessica R.", "rating": 5, "comment": "The best finishes for a high-end renovation." }, { "author": "Thabo N.", "rating": 4, "comment": "Expensive but the quality and style are worth it." }, { "author": "Sarah G.", "rating": 5, "comment": "Fantastic service and very exclusive products." }]
    },
    {
      "id": "pro-materials-8",
      "name": "Grace Construction Supplies",
      "location": "Midrand, Johannesburg",
      "description": "Conveniently located to serve the booming Midrand and Waterfall construction sectors. We provide a broad range of site essentials, including scaffolding hire, safety gear (PPE), fencing, and general building materials. We focus on getting supplies to your site fast so you never lose a day of work.",
      "rating": 4.6,
      "reviews": 24,
      "avatarSeed": "materials-logo-8",
      "serviceCategory": "Building Materials",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 6,
      "employees": 12,
      "services": ["Scaffolding Hire", "PPE & Safety Gear", "Temporary Fencing", "Site Essentials"],
      "reviewData": [{ "author": "Alan F.", "rating": 5, "comment": "Excellent service and very fast delivery to Midrand sites." }, { "author": "Lerato S.", "rating": 5, "comment": "The scaffolding was in great condition and very safe." }, { "author": "Pieter B.", "rating": 4, "comment": "Reliable supplier for all our site safety needs." }, { "author": "Thane N.", "rating": 4, "comment": "Good local hardware and very helpful staff." }]
    },
    {
      "id": "pro-materials-9",
      "name": "Triangle Building Depot",
      "location": "Vereeniging, Gauteng",
      "description": "The largest building material depot in the Vaal Triangle. We supply everything from foundations to roof tiles. Our extensive yard features a wide selection of bricks, cement, sand, and stone, along with a full-service hardware store for all your finishing needs.",
      "rating": 4.3,
      "reviews": 42,
      "avatarSeed": "materials-logo-9",
      "serviceCategory": "Building Materials",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 3,
      "yearsInBusiness": 30,
      "employees": 45,
      "services": ["Full-Service Depot", "Roof Tiles", "Foundation Materials", "Hardware Store"],
      "reviewData": [{ "author": "Ockert R.", "rating": 5, "comment": "They have everything you need for a building project." }, { "author": "Mariaan G.", "rating": 4, "comment": "The go-to place in the Vaal for building supplies." }, { "author": "Thane B.", "rating": 4, "comment": "Reliable and well-established with good local prices." }, { "author": "Petrus K.", "rating": 5, "comment": "Always consistent and the delivery drivers are great." }]
    },
    {
      "id": "pro-materials-10",
      "name": "Alro Aggregate & Stone",
      "location": "Alberton, Ekurhuleni",
      "description": "Specialized suppliers of decorative stone, building sand, and gravel in the South of Johannesburg. We provide materials for both construction and landscaping. Whether you need a truckload of building sand or decorative pebbles for a garden, we offer competitive rates and fast local delivery.",
      "rating": 4.7,
      "reviews": 35,
      "avatarSeed": "materials-logo-10",
      "serviceCategory": "Building Materials",
      "isProVerified": true,
      "isDemo": true,
      "priorityRank": 4,
      "yearsInBusiness": 9,
      "employees": 10,
      "services": ["Decorative Stone", "Building Sand", "Gravel", "Landscaping Materials"],
      "reviewData": [{ "author": "Sonia P.", "rating": 5, "comment": "Beautiful stone for our garden. Very happy with the service." }, { "author": "Jason K.", "rating": 5, "comment": "Best prices for building sand in Alberton." }, { "author": "Fatima H.", "rating": 4, "comment": "Prompt delivery and very friendly service." }, { "author": "Neil O.", "rating": 5, "comment": "Excellent quality aggregates and very reliable." }]
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
