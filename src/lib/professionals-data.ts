
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
            "priorityRank": 99,
             "reviewData": [
                {"author": "Thabo M.", "rating": 5, "comment": "Quick, efficient, and left the site spotless. Highly recommend!"},
                {"author": "Sarah P.", "rating": 5, "comment": "Called them for garden refuse and they were here within two hours. Great service."},
                {"author": "Mike R.", "rating": 4, "comment": "Did the job well, but arrived a bit later than scheduled."},
                {"author": "Lindiwe G.", "rating": 5, "comment": "Very professional team. They cleared a huge amount of building rubble for us."}
            ]
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
            "priorityRank": 99,
             "reviewData": [
                {"author": "David F.", "rating": 5, "comment": "Their commitment to recycling is what made me choose them. Excellent service."},
                {"author": "Fatima A.", "rating": 5, "comment": "Needed old furniture removed. They were careful and quick."},
                {"author": "Pieter V.", "rating": 4, "comment": "Good service, fair price. Would use them again."},
                {"author": "Emily C.", "rating": 5, "comment": "A very professional operation from the first call to the final sweep-up."}
            ]
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
            "priorityRank": 99,
             "reviewData": [
                {"author": "Rajesh K.", "rating": 5, "comment": "The skip was delivered and collected on time. Made our renovation so much easier."},
                {"author": "Brenda S.", "rating": 4, "comment": "Friendly team, but they missed a small pile of rubble which they came back for."},
                {"author": "Kevin N.", "rating": 5, "comment": "Excellent communication and very reliable. I highly recommend them."},
                {"author": "Nokuthula Z.", "rating": 5, "comment": "Affordable and efficient. What more could you ask for?"}
            ]
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
            "priorityRank": 99,
            "reviewData": [
                {"author": "Annelise V.", "rating": 5, "comment": "They handle all our site clearing. Always professional and on time."},
                {"author": "Chris B.", "rating": 5, "comment": "Made a huge mess during a DIY project, and they cleared it all in an afternoon. Lifesavers!"},
                {"author": "Jabulani M.", "rating": 4, "comment": "Good service, but communication could be a little clearer on pricing."},
                {"author": "Susan D.", "rating": 5, "comment": "I've used them multiple times and they are always fantastic."}
            ]
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
            "priorityRank": 99,
            "reviewData": [
                {"author": "Mark W.", "rating": 5, "comment": "They live up to their name! So quick and efficient."},
                {"author": "Portia N.", "rating": 5, "comment": "Fair pricing and a very friendly team. I was impressed."},
                {"author": "Ben J.", "rating": 4, "comment": "Did a good job, just wish they could give a more specific arrival time."},
                {"author": "Kelly T.", "rating": 5, "comment": "I use them for all my garden refuse removal. Always reliable."}
            ]
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
            "priorityRank": 99,
            "reviewData": [
                {"author": "Mr. Henderson", "rating": 5, "comment": "A seamless experience from start to finish. The epitome of professionalism."},
                {"author": "Legacy Inc.", "rating": 5, "comment": "They manage all our commercial site waste. Discreet, efficient, and reliable."},
                {"author": "Victoria L.", "rating": 5, "comment": "The only rubble removers I trust in Sandton. Impeccable service."},
                {"author": "James P.", "rating": 5, "comment": "Worth every cent. They left my property cleaner than when they arrived."}
            ]
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
            "priorityRank": 99,
             "reviewData": [
                {"author": "Thabo M.", "rating": 5, "comment": "They took down a massive blue gum right next to my house without a single issue. True professionals."},
                {"author": "Sarah P.", "rating": 5, "comment": "Safe, fast, and they cleaned up everything. It's like the tree was never there."},
                {"author": "Mike R.", "rating": 4, "comment": "Excellent work, but they are very busy so book in advance!"},
                {"author": "Lindiwe G.", "rating": 5, "comment": "The stump grinding service was fantastic. My lawn is finally level."}
            ]
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
            "priorityRank": 99,
            "reviewData": [
                {"author": "David F.", "rating": 5, "comment": "Their knowledge of trees is incredible. They saved my old oak tree with careful pruning."},
                {"author": "Fatima A.", "rating": 5, "comment": "I had a dangerously leaning pine tree. They removed it with such precision it was amazing to watch."},
                {"author": "Pieter V.", "rating": 5, "comment": "The best in the business. Don't risk it with anyone else in Cape Town."},
                {"author": "Emily C.", "rating": 5, "comment": "Absolutely top-tier service. Professional, safe, and surprisingly affordable for the level of expertise."}
            ]
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
            "priorityRank": 99,
            "reviewData": [
                {"author": "Rajesh K.", "rating": 5, "comment": "They cleared my overgrown property quickly and professionally. Great team."},
                {"author": "Brenda S.", "rating": 4, "comment": "Did a good job, but the clean-up could have been a little more thorough."},
                {"author": "Kevin N.", "rating": 5, "comment": "Highly recommend them for palm tree removal. It's a tricky job and they are experts."},
                {"author": "Nokuthula Z.", "rating": 5, "comment": "Fair price and excellent work. I was very impressed with their safety measures."}
            ]
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
            "priorityRank": 99,
             "reviewData": [
                {"author": "Annelise V.", "rating": 5, "comment": "Great value for money. They did a fantastic job on our property."},
                {"author": "Chris B.", "rating": 4, "comment": "The felling was perfect, but the stump grinding was scheduled for the next day."},
                {"author": "Jabulani M.", "rating": 5, "comment": "Very friendly and hardworking team. I'd definitely use them again."},
                {"author": "Susan D.", "rating": 5, "comment": "They removed a tree that was damaging my wall. Quick and effective."}
            ]
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
            "priorityRank": 99,
             "reviewData": [
                {"author": "Mark W.", "rating": 5, "comment": "Gave me a very competitive quote and stuck to it. The work was flawless."},
                {"author": "Portia N.", "rating": 5, "comment": "So professional. They even chopped the wood into smaller logs for my fireplace."},
                {"author": "Ben J.", "rating": 5, "comment": "You can tell they have been doing this for a long time. Very skilled team."},
                {"author": "Kelly T.", "rating": 4, "comment": "A great job overall. Just a small delay in starting due to weather."}
            ]
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
            "priorityRank": 99,
            "reviewData": [
                {"author": "Kobus V.", "rating": 5, "comment": "I had a tree growing into power lines. These guys handled it with incredible skill and safety."},
                {"author": "Leanne S.", "rating": 5, "comment": "They use cranes and advanced rigging. It's impressive and very safe."},
                {"author": "Sipho R.", "rating": 4, "comment": "Not the cheapest, but you pay for peace of mind. The job was complex and they nailed it."},
                {"author": "Cheryl E.", "rating": 5, "comment": "If you have a dangerous or difficult tree, these are the only people to call."}
            ]
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
