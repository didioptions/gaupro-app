

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
    ],
    "awnings": [
        { "id": "awn-001", "name": "Jozi Awnings & Shade", "location": "Johannesburg", "description": "Custom {service} and shade sails for patios, carports, and businesses. Durable materials and expert installation.", "rating": 4.8, "reviews": 112, "avatarSeed": "jozi-awnings-logo", "serviceCategory": "awnings", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Peter J.", "rating": 5, "comment": "The new patio awning is fantastic. It's made our outdoor area usable all year round."}, {"author": "Samantha D.", "rating": 5, "comment": "Professional and quick. They designed and installed a perfect shade sail for our pool."}, {"author": "Michael B.", "rating": 4, "comment": "Good quality awning, though the installation was postponed by a day due to rain."}, {"author": "Fiona H.", "rating": 5, "comment": "They replaced our old, torn awning with a much better quality one. Great service."}] },
        { "id": "awn-002", "name": "Cape Shade Systems", "location": "Cape Town", "description": "Weather-proof {service} designed for the Cape's wind and sun. We offer retractable and fixed options.", "rating": 4.9, "reviews": 145, "avatarSeed": "cape-shade-logo", "serviceCategory": "awnings", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Andrew G.", "rating": 5, "comment": "Their retractable awning is incredibly sturdy, even in the South-Easter. Very impressed."}, {"author": "Lize V.", "rating": 5, "comment": "The consultation was very helpful. They recommended the perfect product for our needs."}, {"author": "David L.", "rating": 4, "comment": "Excellent product. The team was professional, just a bit of a wait for the custom order."}, {"author": "Thandi N.", "rating": 5, "comment": "Our restaurant's outdoor seating is so much better now. Thank you, Cape Shade!"}] },
        { "id": "awn-003", "name": "Durban Outdoor Living", "location": "Durban", "description": "Enhance your outdoor space with our stylish {service} and pergolas. We focus on creating comfortable, shaded areas.", "rating": 4.7, "reviews": 98, "avatarSeed": "durban-outdoor-logo", "serviceCategory": "awnings", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Kevin P.", "rating": 5, "comment": "The new awning has completely changed our entertainment area. It's fantastic."}, {"author": "Nonhle M.", "rating": 4, "comment": "Happy with the result, but the installation took a bit longer than quoted."}, {"author": "Richard S.", "rating": 5, "comment": "Great service and a high-quality product. It's holding up well in the coastal weather."}, {"author": "Zandile C.", "rating": 5, "comment": "They did a beautiful job. Our patio is now our favourite spot."}] },
        { "id": "awn-004", "name": "Pretoria Shade Solutions", "location": "Pretoria", "description": "Affordable and durable {service} for homes and businesses in Pretoria. Quick installation and friendly service.", "rating": 4.8, "reviews": 105, "avatarSeed": "pretoria-shade-logo", "serviceCategory": "awnings", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Jannie K.", "rating": 5, "comment": "Goeie prys en goeie diens. Die afdak lyk pragtig."}, {"author": "Grace M.", "rating": 5, "comment": "They were so fast! The new carport shade was up in just a few hours."}, {"author": "Ben F.", "rating": 4, "comment": "The awning is great, just a minor issue with a bracket that they came back to fix promptly."}, {"author": "Lethabo P.", "rating": 5, "comment": "I'm very happy with the quality and the price. Would recommend."}] },
        { "id": "awn-005", "name": "The Awning Warehouse", "location": "Sandton", "description": "Premium, motorized retractable {service} for luxury homes and businesses. We offer the latest European designs.", "rating": 5.0, "reviews": 85, "avatarSeed": "awning-warehouse-logo", "serviceCategory": "awnings", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Mrs. Davenport", "rating": 5, "comment": "The motorized awning is a game-changer. So easy to use and it looks incredibly elegant."}, {"author": "Jonathan H.", "rating": 5, "comment": "Top quality product and flawless installation. You get what you pay for."}, {"author": "Isabelle D.", "rating": 5, "comment": "The remote control functionality is fantastic. The team was highly professional."}, {"author": "Mr. Chen", "rating": 5, "comment": "A premium service from start to finish. Highly recommended for high-end installations."}] },
        { "id": "awn-006", "name": "All-Weather Awnings", "location": "Gqeberha", "description": "Tough and durable {service} built to withstand the windy city. We provide practical and long-lasting shade solutions.", "rating": 4.7, "reviews": 75, "avatarSeed": "all-weather-awnings-logo", "serviceCategory": "awnings", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Barry W.", "rating": 5, "comment": "This awning has handled the wind with no problems. Very solid construction."}, {"author": "Denise R.", "rating": 4, "comment": "Good, sturdy product. The team worked hard to get it installed right."}, {"author": "Siyabonga T.", "rating": 5, "comment": "Happy with the service and the quality of the awning. It provides great shade."}, {"author": "Megan L.", "rating": 5, "comment": "They gave me good advice on the best type of awning for my windy patio. It's perfect."}] }
    ],
    "balustrades": [
        { "id": "bal-001", "name": "Jozi Steel & Glass", "location": "Johannesburg", "description": "Modern stainless steel and glass {service} for staircases, balconies, and pools. Clean lines, flawless installation.", "rating": 4.9, "reviews": 95, "avatarSeed": "jozi-steel-glass-logo", "serviceCategory": "balustrades", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Alex F.", "rating": 5, "comment": "Our new glass balustrade is stunning. It's completely opened up the staircase."}, {"author": "Candice M.", "rating": 5, "comment": "Very professional and precise work. The end result is a testament to their skill."}, {"author": "Ryan G.", "rating": 4, "comment": "The project took a little longer than expected, but the quality is undeniable."}, {"author": "Tumi K.", "rating": 5, "comment": "They did an amazing job on our balcony. It feels so much safer and looks incredible."}] },
        { "id": "bal-002", "name": "Cape Balustrade Co.", "location": "Cape Town", "description": "Marine-grade stainless steel and frameless glass {service} designed to withstand the coastal environment.", "rating": 5.0, "reviews": 120, "avatarSeed": "cape-balustrade-logo", "serviceCategory": "balustrades", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Greg W.", "rating": 5, "comment": "The frameless glass around our pool is perfect. Uninterrupted views and top-notch safety."}, {"author": "Jenna B.", "rating": 5, "comment": "They use high-quality 316-grade steel, which is essential near the sea. True professionals."}, {"author": "Mark R.", "rating": 5, "comment": "Expensive, but the quality is absolutely worth it. Flawless installation."}, {"author": "Susan P.", "rating": 5, "comment": "Our balcony balustrade is a work of art. I couldn't be happier with the result."}] },
        { "id": "bal-003", "name": "Durban Stainless Designs", "location": "Durban", "description": "Affordable and elegant stainless steel {service}. We offer a range of modern designs for homes and offices.", "rating": 4.7, "reviews": 88, "avatarSeed": "durban-stainless-logo", "serviceCategory": "balustrades", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Neil S.", "rating": 5, "comment": "Great price and the final product looks fantastic. Very happy with the value."}, {"author": "Ashika J.", "rating": 4, "comment": "Good work, but the installation was delayed by a day. The team was apologetic and professional."}, {"author": "Brendon T.", "rating": 5, "comment": "They did all the balustrades for our new office block. Looked great and met all safety standards."}, {"author": "Zanele M.", "rating": 5, "comment": "I love the clean, modern look of my new staircase balustrade."}] },
        { "id": "bal-004", "name": "Pretoria Balustrade Kings", "location": "Pretoria", "description": "Specialists in custom {service} and handrails. We work with steel, glass, and wood to create the perfect look.", "rating": 4.8, "reviews": 92, "avatarSeed": "pta-balustrade-logo", "serviceCategory": "balustrades", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Francois L.", "rating": 5, "comment": "They created a custom wooden handrail that perfectly matches my home's style."}, {"author": "Mpho L.", "rating": 5, "comment": "Excellent craftsmanship. The attention to detail was impressive."}, {"author": "Carla S.", "rating": 4, "comment": "The final product is beautiful, just took some time to get the design right."}, {"author": "Paul N.", "rating": 5, "comment": "Very happy with the glass balustrade they installed on our patio."}] },
        { "id": "bal-005", "name": "Value Balustrades SA", "location": "Randburg", "description": "Cost-effective balustrade solutions without compromising on safety or style. Ideal for developers and homeowners.", "rating": 4.6, "reviews": 150, "avatarSeed": "value-balustrades-logo", "serviceCategory": "balustrades", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Deon M.", "rating": 5, "comment": "Best prices I could find for SANS-compliant balustrades. Great for my development project."}, {"author": "Tracy B.", "rating": 4, "comment": "Good value. It's not the highest-end finish, but it's safe, strong, and looks good."}, {"author": "Kevin R.", "rating": 5, "comment": "They installed balustrades for my whole townhouse complex. Very efficient and well-priced."}, {"author": "Linda F.", "rating": 5, "comment": "I needed a simple, safe balustrade for my loft and they delivered exactly that at a great price."}] },
        { "id": "bal-006", "name": "Elegant Edges", "location": "Sandton", "description": "High-end, architectural {service} for the discerning client. We specialize in bespoke frameless glass and minimalist designs.", "rating": 5.0, "reviews": 78, "avatarSeed": "elegant-edges-logo", "serviceCategory": "balustrades", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Mrs. van Zyl", "rating": 5, "comment": "Their work is simply exquisite. The frameless glass balustrade is almost invisible."}, {"author": "Architectural Innovations", "rating": 5, "comment": "We use Elegant Edges for all our high-end residential projects. Their work is unparalleled."}, {"author": "Daniel C.", "rating": 5, "comment": "The pinnacle of quality and design. A truly premium service."}, {"author": "Chloe S.", "rating": 5, "comment": "If you want the absolute best, look no further. The attention to detail is breathtaking."}] }
    ],
    "bathroom-renovations": [
        { "id": "br-001", "name": "Dream Bathrooms JHB", "location": "Johannesburg", "description": "Complete {service} from design to completion. We handle plumbing, tiling, and all fixtures for a turnkey solution.", "rating": 4.9, "reviews": 125, "avatarSeed": "dream-bathrooms-logo", "serviceCategory": "bathroom-renovations", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Michelle R.", "rating": 5, "comment": "They turned my old, dated bathroom into a modern spa. I am thrilled with the result!"}, {"author": "Gareth M.", "rating": 5, "comment": "The project management was excellent. Everything ran on schedule and on budget."}, {"author": "Lisa C.", "rating": 4, "comment": "Beautiful work, but a few small snag list items to sort out at the end."}, {"author": "Thabo P.", "rating": 5, "comment": "Professional team, great quality finishes. Highly recommended."}] },
        { "id": "br-002", "name": "Cape Bathroom Co.", "location": "Cape Town", "description": "Stylish and functional {service}. We specialize in water-saving fixtures and beautiful, easy-to-clean finishes.", "rating": 4.8, "reviews": 160, "avatarSeed": "cape-bathroom-logo", "serviceCategory": "bathroom-renovations", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Jessica S.", "rating": 5, "comment": "I love my new water-wise bathroom. It's beautiful and environmentally friendly."}, {"author": "Brian F.", "rating": 5, "comment": "The team was fantastic. They were neat, tidy, and respectful of our home."}, {"author": "Emily K.", "rating": 4, "comment": "The renovation looks great. There was just a small delay getting the custom vanity."}, {"author": "Shaun D.", "rating": 5, "comment": "From the 3D design to the final tile, everything was perfect."}] },
        { "id": "br-003", "name": "Durban Bathroom Pros", "location": "Durban", "description": "Affordable {service} and makeovers. We can work within your budget to give your bathroom a fresh new look.", "rating": 4.7, "reviews": 110, "avatarSeed": "durban-bathroom-pros-logo", "serviceCategory": "bathroom-renovations", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Jason P.", "rating": 5, "comment": "They did an amazing job on a tight budget. It looks like a brand new bathroom!"}, {"author": "Naledi M.", "rating": 4, "comment": "Good value for money. The team worked hard and did a decent job."}, {"author": "Chris L.", "rating": 5, "comment": "I was impressed with how they transformed my bathroom with just new tiles and fixtures."}, {"author": "Preya G.", "rating": 5, "comment": "Friendly service and they gave me great advice on how to save money on the reno."}] },
        { "id": "br-004", "name": "PTA Premier Bathrooms", "location": "Pretoria", "description": "High-end {service} with a focus on quality craftsmanship and luxury finishes. We create bespoke bathrooms.", "rating": 5.0, "reviews": 90, "avatarSeed": "pta-premier-logo", "serviceCategory": "bathroom-renovations", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Elna V.", "rating": 5, "comment": "Absolute perfection. Their attention to detail is second to none."}, {"author": "Mr. Botha", "rating": 5, "comment": "They created a true sanctuary for us. The quality of the finishes is outstanding."}, {"author": "Katlego R.", "rating": 5, "comment": "A premium service that is worth every cent. My bathroom is now my favourite room."}, {"author": "Johan D.", "rating": 5, "comment": "If you are looking for luxury and quality, this is the company to use."}] },
        { "id": "br-005", "name": "The Bathroom Boutique", "location": "Sandton", "description": "Luxury {service} and design. We source exclusive international fixtures and finishes for a truly unique space.", "rating": 5.0, "reviews": 75, "avatarSeed": "bathroom-boutique-logo", "serviceCategory": "bathroom-renovations", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Mrs. Oppenheimer", "rating": 5, "comment": "The design was inspired and the execution flawless. A world-class experience."}, {"author": "Charles W.", "rating": 5, "comment": "They handled the entire project with absolute professionalism and discretion."}, {"author": "Victoria B.", "rating": 5, "comment": "My bathroom looks like it's out of a magazine. Simply stunning."}, {"author": "Marcus S.", "rating": 5, "comment": "The quality of the imported fittings is exceptional. A truly high-end service."}] },
        { "id": "br-006", "name": "All About Bathrooms", "location": "Randburg", "description": "Full-service {service} provider. We cover everything from small updates to complete overhauls. Free consultations and quotes.", "rating": 4.8, "reviews": 140, "avatarSeed": "all-about-bathrooms-logo", "serviceCategory": "bathroom-renovations", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Debbie M.", "rating": 5, "comment": "They were great to work with. They listened to my ideas and delivered a fantastic result."}, {"author": "Sipho T.", "rating": 4, "comment": "The work is good, but the project took a week longer than planned."}, {"author": "Karen F.", "rating": 5, "comment": "I just wanted to replace my old bath with a shower, and they did it quickly and neatly."}, {"author": "John P.", "rating": 5, "comment": "Reliable, honest, and the quality of their work is excellent."}] }
    ],
    "blinds": [
        { "id": "bld-001", "name": "Joburg Blind Co.", "location": "Johannesburg", "description": "Your one-stop shop for all types of {service}. We supply and install Venetian, Roller, Vertical, and Wooden blinds.", "rating": 4.8, "reviews": 142, "avatarSeed": "joburg-blind-co-logo", "serviceCategory": "blinds", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Jessica M.", "rating": 5, "comment": "The new wooden blinds have added so much warmth to our home. Great service."}, {"author": "David C.", "rating": 5, "comment": "Quick installation and a very professional team. The blinds fit perfectly."}, {"author": "Lerato N.", "rating": 4, "comment": "Good quality product. The color was slightly different from the sample, but still looks good."}, {"author": "Paul S.", "rating": 5, "comment": "They have a huge selection. Found the perfect roller blinds for our office."}] },
        { "id": "bld-002", "name": "Cape Window Dressings", "location": "Cape Town", "description": "Stylish and functional {service} to suit the Cape Town lifestyle. We offer blockout and light-filtering options.", "rating": 4.9, "reviews": 178, "avatarSeed": "cape-window-dressings-logo", "serviceCategory": "blinds", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Sarah W.", "rating": 5, "comment": "The blockout blinds for our bedroom are a lifesaver. Excellent quality and installation."}, {"author": "James P.", "rating": 5, "comment": "Their advice on which blinds would work best for our sea-facing windows was spot on."}, {"author": "Chloe T.", "rating": 5, "comment": "A very pleasant experience. The team was friendly, professional, and efficient."}, {"author": "Mr. van Wyk", "rating": 4, "comment": "The blinds are perfect, but I had to wait a bit for my custom order."}] },
        { "id": "bld-003", "name": "Durban Blinds Direct", "location": "Durban", "description": "Get high-quality {service} direct from the factory. We offer competitive prices on a wide range of styles.", "rating": 4.7, "reviews": 110, "avatarSeed": "durban-blinds-direct-logo", "serviceCategory": "blinds", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Ravi N.", "rating": 5, "comment": "Excellent prices and the quality is great. I did my whole house with them."}, {"author": "Kim G.", "rating": 4, "comment": "The blinds are good, but the installation team was a bit late on the day."}, {"author": "Brenda J.", "rating": 5, "comment": "Saved a lot of money by going direct. The service was still very professional."}, {"author": "Thabo Z.", "rating": 5, "comment": "They have a great range of vertical blinds for sliding doors. Very happy."}] },
        { "id": "bld-004", "name": "Pretoria Blind Solutions", "location": "Pretoria", "description": "Professional supply and installation of all types of {service}. We offer free measurements and quotes in the Pretoria area.", "rating": 4.8, "reviews": 135, "avatarSeed": "pretoria-blind-solutions-logo", "serviceCategory": "blinds", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Marelize F.", "rating": 5, "comment": "The free consultation was very helpful, and the final installation was perfect."}, {"author": "Sibusiso M.", "rating": 5, "comment": "The team was professional and the installation was surprisingly quick."}, {"author": "Hennie P.", "rating": 4, "comment": "Good service, fair price. I would use them again for sure."}, {"author": "Fatima A.", "rating": 5, "comment": "They did a great job installing blinds throughout our new office space."}] },
        { "id": "bld-005", "name": "The Blind Factory", "location": "East Rand", "description": "Manufacturers and installers of a wide range of {service}. We offer custom solutions for any window size.", "rating": 4.7, "reviews": 205, "avatarSeed": "the-blind-factory-logo", "serviceCategory": "blinds", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Wendy T.", "rating": 5, "comment": "They made custom-sized blinds for my unusually shaped windows and they fit perfectly."}, {"author": "George L.", "rating": 4, "comment": "The price was excellent because I bought directly. A bit of a wait, but worth it."}, {"author": "Patricia K.", "rating": 5, "comment": "Great quality blinds and a very helpful sales team."}, {"author": "Siyanda N.", "rating": 5, "comment": "I recommend them to all my friends. You can't beat the quality for the price."}] },
        { "id": "bld-006", "name": "Budget Blinds SA", "location": "National", "description": "Affordable {service} for every home. We have a simple online ordering process and a network of installers nationwide.", "rating": 4.6, "reviews": 310, "avatarSeed": "budget-blinds-sa-logo", "serviceCategory": "blinds", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Liam J.", "rating": 5, "comment": "The online ordering was easy and the blinds arrived quickly. Installation was straightforward."}, {"author": "Nicolette D.", "rating": 4, "comment": "Good value for money. The blinds are not super high-end, but they look good and do the job."}, {"author": "Trevor S.", "rating": 5, "comment": "I was skeptical about ordering online, but the measurements were perfect and the quality is good."}, {"author": "Megan V.", "rating": 5, "comment": "A great option if you are on a budget. I am very happy with my purchase."}] }
    ],
    "builders": [
        { "id": "bldrs-001", "name": "Gauteng Master Builders", "location": "Johannesburg", "description": "NHBRC registered {service} for new homes, extensions, and large-scale renovations. Quality craftsmanship guaranteed.", "rating": 4.9, "reviews": 180, "avatarSeed": "gauteng-builders-logo", "serviceCategory": "builders", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Chris V.", "rating": 5, "comment": "They built our dream home from the ground up. Their attention to detail and project management was superb."}, {"author": "Themba S.", "rating": 5, "comment": "Professional, reliable, and the quality of their work is excellent. Highly recommend."}, {"author": "Dr. Naidoo", "rating": 4, "comment": "The project ran a few weeks over schedule, but the final result was outstanding."}, {"author": "Sarah-Jane W.", "rating": 5, "comment": "They handled our complex extension flawlessly. A great team to work with."}] },
        { "id": "bldrs-002", "name": "Cape Construction Group", "location": "Cape Town", "description": "Specialists in luxury home building and high-end {service} in the Western Cape. We work with top architects and designers.", "rating": 5.0, "reviews": 125, "avatarSeed": "cape-construction-logo", "serviceCategory": "builders", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Mark B.", "rating": 5, "comment": "Their workmanship is on another level. True masters of their craft."}, {"author": "Jenna L.", "rating": 5, "comment": "If you are looking for the best in Cape Town, this is the company to use. Impeccable work."}, {"author": "Richard H.", "rating": 5, "comment": "They delivered our project on time and the quality exceeded our expectations."}, {"author": "Isabelle F.", "rating": 5, "comment": "A pleasure to work with. They made the building process stress-free and enjoyable."}] },
        { "id": "bldrs-003", "name": "KZN Building Projects", "location": "Durban", "description": "Reliable and affordable {service} for residential and commercial projects in KwaZulu-Natal. Free quotes and consultations.", "rating": 4.7, "reviews": 215, "avatarSeed": "kzn-building-logo", "serviceCategory": "builders", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Sean M.", "rating": 5, "comment": "Great value and solid work. They built our boundary wall and did a fantastic job."}, {"author": "Priya G.", "rating": 4, "comment": "Good team, but the project was slightly delayed by weather. The communication was excellent though."}, {"author": "Bheki Z.", "rating": 5, "comment": "I've used them for a few small projects. They are always reliable and the work is good."}, {"author": "Tanya E.", "rating": 5, "comment": "They renovated our offices and did a great job with minimal disruption to our business."}] },
        { "id": "bldrs-004", "name": "Jacaranda Construction", "location": "Pretoria", "description": "Trusted {service} in Pretoria for over 20 years. We specialize in home renovations, additions, and outdoor entertainment areas.", "rating": 4.8, "reviews": 190, "avatarSeed": "jacaranda-construction-logo", "serviceCategory": "builders", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Willem de Klerk", "rating": 5, "comment": "'n Baie professionele span. Ek sal hulle enige tyd aanbeveel."}, {"author": "Nthabiseng M.", "rating": 5, "comment": "They built us a beautiful new patio and braai area. We love it!"}, {"author": "David R.", "rating": 4, "comment": "The project was well-managed and the quality is great. Just a few minor snags at the end."}, {"author": "Elsa B.", "rating": 5, "comment": "A family business that really cares about their clients. Wonderful experience."}] },
        { "id": "bldrs-005", "name": "Reliable Renos", "location": "Randburg", "description": "Your local {service} for home improvements and renovations. We handle everything from bathrooms and kitchens to painting and tiling.", "rating": 4.7, "reviews": 160, "avatarSeed": "reliable-renos-logo", "serviceCategory": "builders", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Jenny S.", "rating": 5, "comment": "They did a complete renovation of our bathroom and it looks amazing."}, {"author": "Sipho D.", "rating": 4, "comment": "Good work, but they can be a bit slow to respond to messages at times."}, {"author": "Karen T.", "rating": 5, "comment": "Very happy with their work. They are reliable and their pricing is fair."}, {"author": "Mike A.", "rating": 5, "comment": "I use them for all my home maintenance and repair jobs. Always a good experience."}] },
        { "id": "bldrs-006", "name": "Summit Builders Inc.", "location": "Sandton", "description": "A full-service construction company for discerning clients. We offer project management and high-quality {service} for bespoke homes.", "rating": 4.9, "reviews": 115, "avatarSeed": "summit-builders-logo", "serviceCategory": "builders", "isDemo": true, "priorityRank": 99, "reviewData": [{"author": "Mr. Davies", "rating": 5, "comment": "Their project management is exceptional. They handle everything with professionalism."}, {"author": "The Design Arch", "rating": 5, "comment": "As architects, we need builders who can execute complex designs flawlessly. Summit always delivers."}, {"author": "Victoria M.", "rating": 5, "comment": "They built our guesthouse and the quality is outstanding. A pleasure to work with."}, {"author": "James C.", "rating": 4, "comment": "A top-quality builder. Be prepared to pay for the premium service, but it's worth it."}] }
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
