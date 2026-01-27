
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
      "services": ["Commercial Cooling", "Inverter Technology", "Ducting", "Emergency Repairs"],
      "reviewData": [{ "author": "Johan S.", "rating": 5, "comment": "Best price I found for a Daikin inverter unit in Pretoria." }, { "author": "Mpho G.", "rating": 4, "comment": "Very knowledgeable about energy-saving options." }, { "author": "Annatjie B.", "rating": 5, "comment": "The technicians were very respectful and left the site clean." }, { "author": "David K.", "rating": 5, "comment": "Quick turnaround on my commercial office maintenance." }]
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
      "reviewData": [{ "author": "Bradley T.", "rating": 5, "comment": "High-end service for a high-end home. Very happy." }, { "author": "Jessica L.", "rating": 5, "comment": "They understood exactly where to place the units for best airflow." }, { "author": "Simon R.", "rating": 4, "comment": "Premium pricing but you definitely get what you pay for." }, { "author": "Nthabiseng M.", "rating": 5, "comment": "Fast, efficient, and the unit is whisper quiet." }]
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
      "reviewData": [{ "author": "Kevin D.", "rating": 5, "comment": "Great local service in Benoni. Fixed my old unit quickly." }, { "author": "Sizwe Z.", "rating": 4, "comment": "Honest guys, didn't try to upsell me on a new unit." }, { "author": "Michelle V.", "rating": 5, "comment": "My aircon is ice cold again! Thanks for the regas." }, { "author": "Gary H.", "rating": 4, "comment": "Reliable and affordable compared to the big franchises." }]
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
      "reviewData": [{ "author": "Alan F.", "rating": 5, "comment": "They manage our warehouse cooling perfectly. Very professional." }, { "author": "Lerato S.", "rating": 5, "comment": "Essential service for our server rooms. Highly dependable." }, { "author": "Pieter B.", "rating": 4, "comment": "Good technical knowledge of complex HVAC systems." }, { "author": "Thane N.", "rating": 4, "comment": "Excellent contract rates for corporate clients." }]
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
      "reviewData": [{ "author": "Charmaine J.", "rating": 5, "comment": "Such a lovely team. They were so careful in my house." }, { "author": "Andries L.", "rating": 5, "comment": "Best prices in Roodepoort by far. Workmanship is 10/10." }, { "author": "Sipho K.", "rating": 5, "comment": "Prompt service and great communication throughout." }, { "author": "Brenda P.", "rating": 4, "comment": "Very satisfied with the new unit installation." }]
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
      "reviewData": [{ "author": "Zanele T.", "rating": 5, "comment": "They came out on a Saturday and fixed my unit. Lifesavers!" }, { "author": "Mark D.", "rating": 4, "comment": "Fast diagnostics, had the parts in the van already." }, { "author": "Claire S.", "rating": 5, "comment": "Very impressive speed and technical skill." }, { "author": "Robert M.", "rating": 4, "comment": "A bit pricier for emergency call-outs but worth it." }]
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
      "reviewData": [{ "author": "Willem H.", "rating": 5, "comment": "The hybrid solar aircon is a game changer during power cuts." }, { "author": "Nadia E.", "rating": 5, "comment": "Expert advice on saving electricity while staying cool." }, { "author": "Teboho R.", "rating": 4, "comment": "Good installation, waiting to see the savings on my bill!" }, { "author": "Dirk V.", "rating": 5, "comment": "Very neat work and modern technology." }]
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
      "reviewData": [{ "author": "Sonia B.", "rating": 5, "comment": "Excellent service for our restaurant. The staff is much happier." }, { "author": "Petrus M.", "rating": 4, "comment": "Reliable and consistent maintenance every year." }, { "author": "Jabulani N.", "rating": 5, "comment": "They fixed a problem three other companies couldn't." }, { "author": "Anthea G.", "rating": 4, "comment": "Good communication and fair pricing." }]
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
      "reviewData": [{ "author": "Cameron J.", "rating": 5, "comment": "The mobile app integration they set up is amazing." }, { "author": "Neo M.", "rating": 5, "comment": "Very modern approach and very clean installation." }, { "author": "Samantha Q.", "rating": 5, "comment": "Best service in Fourways. They really know their tech." }, { "author": "Elias O.", "rating": 5, "comment": "Top class from start to finish. Highly recommended." }]
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
  ]
};

export const getProfessionalById = (id: string): Professional | null => {
    for (const category in allProfessionals) {
        const pro = allProfessionals[category].find(p => p.id === id);
        if (pro) return pro;
    }
    return null;
};
