
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
  ]
};

export const getProfessionalById = (id: string): Professional | null => {
    for (const category in allProfessionals) {
        const pro = allProfessionals[category].find(p => p.id === id);
        if (pro) return pro;
    }
    return null;
};
