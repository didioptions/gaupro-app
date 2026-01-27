
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
};

type ProfessionalsByCategory = { [key: string]: Professional[] };

export const allProfessionals: ProfessionalsByCategory = {
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
