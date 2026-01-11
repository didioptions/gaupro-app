
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
    ],
    "air-conditioning": [
      {
        "id": "ac-001",
        "name": "CoolBreeze SA",
        "location": "Johannesburg",
        "description": "Expert {service} installation, repair, and maintenance for residential and commercial properties. We service all major brands.",
        "rating": 4.9,
        "reviews": 185,
        "avatarSeed": "coolbreeze-sa-logo",
        "serviceCategory": "air-conditioning",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "Brenda T.", "rating": 5, "comment": "Fast, professional, and my AC has never worked better. Highly recommended!"},
          {"author": "Mark D.", "rating": 5, "comment": "They diagnosed the issue with my office aircon quickly and fixed it the same day."},
          {"author": "Zanele M.", "rating": 4, "comment": "Good service, but had to wait a day for the part to arrive."},
          {"author": "Tom P.", "rating": 5, "comment": "Very knowledgeable technicians. They explained everything clearly."}
        ]
      },
      {
        "id": "ac-002",
        "name": "Cape Airflow Solutions",
        "location": "Cape Town",
        "description": "Your go-to for {service} in Cape Town. We offer new installations, regular servicing, and emergency repairs at competitive rates.",
        "rating": 4.8,
        "reviews": 210,
        "avatarSeed": "cape-airflow-logo",
        "serviceCategory": "air-conditioning",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "Jane S.", "rating": 5, "comment": "Fantastic service from start to finish. The installation was neat and professional."},
          {"author": "Peter V.", "rating": 5, "comment": "Called them for an emergency repair on a hot day and they were lifesavers."},
          {"author": "Nadia F.", "rating": 4, "comment": "The team was great, just a bit of a delay on the initial appointment time."},
          {"author": "Gareth B.", "rating": 5, "comment": "I use them for all my rental properties. Always reliable and fair."}
        ]
      },
      {
        "id": "ac-003",
        "name": "Durban Climate Control",
        "location": "Durban",
        "description": "Stay cool in the Durban heat with our expert {service} services. We specialize in high-wall, cassette, and ducted systems.",
        "rating": 4.7,
        "reviews": 150,
        "avatarSeed": "durban-climate-logo",
        "serviceCategory": "air-conditioning",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "Sarah J.", "rating": 5, "comment": "Very happy with our new ducted system. The team was efficient and cleaned up perfectly."},
          {"author": "Mike L.", "rating": 4, "comment": "Good job on the repair, but took a while to get a quote back."},
          {"author": "Thandiwe N.", "rating": 5, "comment": "Excellent service. My AC is working like new again."},
          {"author": "Chris P.", "rating": 5, "comment": "Knowledgeable and friendly technicians. Would definitely recommend."}
        ]
      },
      {
        "id": "ac-004",
        "name": "Pretoria Air Kings",
        "location": "Pretoria",
        "description": "Leading providers of {service} solutions in Pretoria. From homes to large offices, we ensure optimal climate control.",
        "rating": 4.9,
        "reviews": 195,
        "avatarSeed": "pretoria-air-kings-logo",
        "serviceCategory": "air-conditioning",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "Koos van der Merwe", "rating": 5, "comment": "Baie goeie diens. Hulle weet wat hulle doen."},
          {"author": "Lerato M.", "rating": 5, "comment": "The installation was quick and the unit works perfectly. Very satisfied."},
          {"author": "James H.", "rating": 4, "comment": "Efficient service, though a bit pricey."},
          {"author": "Priya S.", "rating": 5, "comment": "I called them for a service and they were very thorough. Great job."}
        ]
      },
      {
        "id": "ac-005",
        "name": "Eco-Cool",
        "location": "Gqeberha",
        "description": "Energy-efficient {service} solutions. We focus on eco-friendly units that save you money and keep you comfortable.",
        "rating": 4.8,
        "reviews": 120,
        "avatarSeed": "eco-cool-logo",
        "serviceCategory": "air-conditioning",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "David R.", "rating": 5, "comment": "Loved their focus on energy efficiency. They helped me choose the perfect unit."},
          {"author": "Nolwazi Z.", "rating": 5, "comment": "Great service and my electricity bill has already gone down!"},
          {"author": "Frank G.", "rating": 4, "comment": "Installation went well. Took a bit longer than expected but the result is good."},
          {"author": "Amy T.", "rating": 5, "comment": "Very professional and helped me understand the benefits of an inverter unit."}
        ]
      },
      {
        "id": "ac-006",
        "name": "24/7 Aircon Rescue",
        "location": "Johannesburg",
        "description": "Emergency {service} repairs, available 24/7. When your aircon gives up, we show up. Fast, reliable service day or night.",
        "rating": 4.9,
        "reviews": 250,
        "avatarSeed": "247-aircon-rescue-logo",
        "serviceCategory": "air-conditioning",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "Sipho M.", "rating": 5, "comment": "My aircon died in the middle of a heatwave. They came out at 10pm and fixed it. Lifesavers!"},
          {"author": "Karen W.", "rating": 5, "comment": "Incredibly fast response time. I was so impressed."},
          {"author": "Leo D.", "rating": 5, "comment": "A bit more expensive for the call-out, but worth it for the speed and service."},
          {"author": "Jessica B.", "rating": 5, "comment": "The only company that answered their phone after hours. Excellent service."}
        ]
      }
    ],
    "aluminium-doors-and-windows": [
      {
        "id": "adw-001",
        "name": "Alu-Solutions JHB",
        "location": "Johannesburg",
        "description": "Modern and durable {service}. We custom-manufacture and install sliding doors, folding doors, and stylish window frames.",
        "rating": 4.8,
        "reviews": 130,
        "avatarSeed": "alu-solutions-jhb-logo",
        "serviceCategory": "aluminium-doors-and-windows",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "Greg S.", "rating": 5, "comment": "The new stacking doors have transformed our living area. The quality is superb."},
          {"author": "Michelle V.", "rating": 5, "comment": "Very professional from measurement to installation. The windows look amazing."},
          {"author": "Brian T.", "rating": 4, "comment": "There was a slight delay in manufacturing, but the final product was worth the wait."},
          {"author": "Nomsa K.", "rating": 5, "comment": "Excellent workmanship and very clean installation. I'm very happy."}
        ]
      },
      {
        "id": "adw-002",
        "name": "Cape Glass & Aluminium",
        "location": "Cape Town",
        "description": "Leaders in high-quality {service} in Cape Town. We provide solutions that are both stylish and weather-resistant for coastal conditions.",
        "rating": 4.9,
        "reviews": 165,
        "avatarSeed": "cape-glass-alu-logo",
        "serviceCategory": "aluminium-doors-and-windows",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "Richard P.", "rating": 5, "comment": "Their advice on which frames to use for the sea-facing side was invaluable. Great quality."},
          {"author": "Linda M.", "rating": 5, "comment": "I am so pleased with my new windows. They look fantastic and the installation was seamless."},
          {"author": "John D.", "rating": 4, "comment": "Good product, but the quoting process was a bit slow."},
          {"author": "Feroza I.", "rating": 5, "comment": "They replaced all my old wooden frames with aluminium. The house looks so modern now."}
        ]
      },
      {
        "id": "adw-003",
        "name": "Durban Frame & Glass",
        "location": "Durban",
        "description": "Affordable and stylish {service} for the greater Durban area. We offer a wide range of standard and custom sizes.",
        "rating": 4.7,
        "reviews": 115,
        "avatarSeed": "durban-frame-glass-logo",
        "serviceCategory": "aluminium-doors-and-windows",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "Kyle R.", "rating": 5, "comment": "Great value for money and the installation team was very professional."},
          {"author": "Samantha N.", "rating": 4, "comment": "The doors are great, but there was a small scratch which they came back to fix."},
          {"author": "Trevor G.", "rating": 5, "comment": "I would recommend them to anyone. Good price and good quality."},
          {"author": "Ayanda Z.", "rating": 5, "comment": "My new shopfront looks amazing thanks to them. Very happy customer."}
        ]
      },
      {
        "id": "adw-004",
        "name": "Pretoria Aluminium Masters",
        "location": "Pretoria",
        "description": "Your trusted specialists for premium {service} in Pretoria. We pride ourselves on precision manufacturing and perfect installation.",
        "rating": 4.9,
        "reviews": 140,
        "avatarSeed": "pta-alu-masters-logo",
        "serviceCategory": "aluminium-doors-and-windows",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "Elize de Villiers", "rating": 5, "comment": "Die kwaliteit van die werk is uitstekend. Baie dankie."},
          {"author": "Tebogo S.", "rating": 5, "comment": "From start to finish, a very professional experience. The windows are perfect."},
          {"author": "Carl B.", "rating": 4, "comment": "The installation was perfect, just a bit of a wait for the manufacturing."},
          {"author": "Maryna P.", "rating": 5, "comment": "I love my new folding doors. They have completely opened up my patio area."}
        ]
      },
      {
        "id": "adw-005",
        "name": "Alu-Style Centurion",
        "location": "Centurion",
        "description": "Custom designs for {service}. We work with architects and homeowners to create unique, high-quality installations.",
        "rating": 4.8,
        "reviews": 95,
        "avatarSeed": "alu-style-centurion-logo",
        "serviceCategory": "aluminium-doors-and-windows",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "Jason F.", "rating": 5, "comment": "They helped me design a custom window for a difficult space. It came out perfectly."},
          {"author": "Nthabi M.", "rating": 5, "comment": "Very creative and professional. They understood my vision completely."},
          {"author": "Dirk V.", "rating": 4, "comment": "The design process was great. Installation took a day longer than planned."},
          {"author": "Lianne K.", "rating": 5, "comment": "If you want something special, these are the guys to call. Highly skilled."}
        ]
      },
      {
        "id": "adw-006",
        "name": "Value Aluminium",
        "location": "East Rand",
        "description": "Get the best value on standard {service}. We offer competitive pricing on quality products for housing projects and renovations.",
        "rating": 4.6,
        "reviews": 220,
        "avatarSeed": "value-aluminium-logo",
        "serviceCategory": "aluminium-doors-and-windows",
        "isDemo": true, "priorityRank": 99,
        "reviewData": [
          {"author": "Paul G.", "rating": 5, "comment": "Best prices I could find for the quality. Very happy with my purchase."},
          {"author": "Sannie R.", "rating": 4, "comment": "The windows are good. The communication could have been a bit better during the process."},
          {"author": "Willie T.", "rating": 5, "comment": "I've used them for multiple projects. They always deliver good value."},
          {"author": "Thoko D.", "rating": 5, "comment": "Great service and great prices. I will definitely use them again."}
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
