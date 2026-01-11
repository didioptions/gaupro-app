
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
    "carpenters": [
        {
            "id": "carpenter-jhb-1",
            "name": "Jozi Woodworks",
            "serviceCategory": "carpenters",
            "location": "Johannesburg",
            "description": "Custom cabinetry, furniture, and decking. We bring your wooden dreams to life with precision and passion.",
            "rating": 4.9,
            "reviews": 88,
            "avatarSeed": "jozi-woodworks-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["johannesburg", "sandton"],
            "reviewData": [
                {"author": "Thabo M.", "rating": 5, "comment": "Absolutely brilliant work on our kitchen cupboards. The finish is flawless."},
                {"author": "Sarah P.", "rating": 5, "comment": "Built a custom bookshelf for us. It's the centerpiece of our living room now. Highly recommend!"},
                {"author": "Mike R.", "rating": 5, "comment": "Professional, on time, and the quality is outstanding. Will use them again for our decking."},
                {"author": "Lindiwe G.", "rating": 4, "comment": "Good work, but the project took a little longer than expected. Still happy with the result."}
            ]
        },
        {
            "id": "carpenter-cpt-1",
            "name": "Cape Timber Craftsmen",
            "serviceCategory": "carpenters",
            "location": "Cape Town",
            "description": "Bespoke carpentry services in Cape Town. From wooden gates to custom furniture, quality is our guarantee.",
            "rating": 4.8,
            "reviews": 102,
            "avatarSeed": "cape-timber-craftsmen-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["cape-town"],
            "reviewData": [
                {"author": "David F.", "rating": 5, "comment": "Installed beautiful wooden floors for us. The team was professional and clean."},
                {"author": "Fatima A.", "rating": 5, "comment": "They restored an old family heirloom chair. It looks better than new!"},
                {"author": "Pieter V.", "rating": 4, "comment": "Solid work on our new pergola. Communication could have been slightly better."},
                {"author": "Emily C.", "rating": 5, "comment": "I'm so in love with my new kitchen cabinets. They understood my vision perfectly."}
            ]
        },
        {
            "id": "carpenter-dbn-1",
            "name": "Durban Deck & Door",
            "serviceCategory": "carpenters",
            "location": "Durban",
            "description": "Specialists in outdoor decking, pergolas, and custom wooden doors. We use marine-grade timber for durability.",
            "rating": 4.7,
            "reviews": 76,
            "avatarSeed": "durban-deck-door-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["durban"],
            "reviewData": [
                {"author": "Rajesh K.", "rating": 5, "comment": "Our new deck is amazing! Perfect for braais. The team worked fast and efficiently."},
                {"author": "Brenda S.", "rating": 4, "comment": "Good quality door, but the installation was delayed by a day."},
                {"author": "Kevin N.", "rating": 5, "comment": "Highly skilled carpenters. They built custom benches for our garden and they are solid."},
                {"author": "Nokuthula Z.", "rating": 5, "comment": "Fantastic service and excellent craftsmanship. I am very happy."}
            ]
        },
        {
            "id": "carpenter-pta-1",
            "name": "Pretoria Precision Carpentry",
            "serviceCategory": "carpenters",
            "location": "Pretoria",
            "description": "From built-in cupboards to custom office furniture, we provide high-end carpentry services with attention to detail.",
            "rating": 4.9,
            "reviews": 95,
            "avatarSeed": "pta-precision-carpentry-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["pretoria"],
            "reviewData": [
                {"author": "Annelise V.", "rating": 5, "comment": "Their work is meticulous. Our new study looks incredible. Worth every cent."},
                {"author": "Chris B.", "rating": 5, "comment": "Built and installed new kitchen units. The quality is top-notch. Very professional team."},
                {"author": "Jabulani M.", "rating": 5, "comment": "I needed custom shelving for my garage, and they delivered exactly what I asked for. Strong and neat."},
                {"author": "Susan D.", "rating": 4, "comment": "Happy with the final product. The project just took a bit longer to start than we'd hoped."}
            ]
        },
        {
            "id": "carpenter-gqe-1",
            "name": "The Wood Wizard PE",
            "serviceCategory": "carpenters",
            "location": "Gqeberha",
            "description": "Your local carpenter for repairs, installations, and custom projects in Gqeberha. No job too small.",
            "rating": 4.6,
            "reviews": 65,
            "avatarSeed": "wood-wizard-pe-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["gqeberha"],
            "reviewData": [
                {"author": "Mark W.", "rating": 5, "comment": "Fixed my squeaky staircase and hung a few doors. Great, friendly service."},
                {"author": "Portia N.", "rating": 4, "comment": "Did a good job on the cupboard repairs. Was a bit late on the first day."},
                {"author": "Ben J.", "rating": 5, "comment": "Quick, efficient, and affordable. Exactly what you want from a local handyman carpenter."},
                {"author": "Kelly T.", "rating": 5, "comment": "Helped assemble some flatpack furniture. Saved me hours of frustration!"}
            ]
        },
        {
            "id": "carpenter-blm-1",
            "name": "Bloem Build & Fit",
            "serviceCategory": "carpenters",
            "location": "Bloemfontein",
            "description": "Quality carpentry and joinery services for Bloemfontein and surrounds. We do everything from roofing timber to BIC's.",
            "rating": 4.7,
            "reviews": 58,
            "avatarSeed": "bloem-build-fit-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["bloemfontein"],
            "reviewData": [
                {"author": "Johan P.", "rating": 5, "comment": "Excellent work on the roof trusses for our new build. Very reliable."},
                {"author": "Lerato K.", "rating": 5, "comment": "They installed my new kitchen cupboards and did a fantastic job."},
                {"author": "Frans S.", "rating": 4, "comment": "Good quality, but a little pricey for the work done."},
                {"author": "Tumi M.", "rating": 5, "comment": "Very happy with their service. The team was professional and the results are great."}
            ]
        }
    ],
    "ceiling-installers": [
        {
            "id": "ceiling-jhb-1",
            "name": "Top-Tier Ceilings JHB",
            "serviceCategory": "ceiling-installers",
            "location": "Johannesburg",
            "description": "Specialists in suspended ceilings, skimmed rhino-board ceilings, and custom bulkhead designs.",
            "rating": 4.8,
            "reviews": 112,
            "avatarSeed": "top-tier-ceilings-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["johannesburg"],
            "reviewData": [
                {"author": "Alex R.", "rating": 5, "comment": "Transformed our living room with a beautiful bulkhead ceiling. Excellent work!"},
                {"author": "Fatima I.", "rating": 5, "comment": "Very professional and clean work. They repaired our water-damaged ceiling perfectly."},
                {"author": "Greg S.", "rating": 4, "comment": "The suspended ceiling in our office looks great. The job took a day longer than quoted."},
                {"author": "Nomusa D.", "rating": 5, "comment": "Fast, efficient, and the plastering is so smooth. Highly recommended."}
            ]
        },
        {
            "id": "ceiling-cpt-1",
            "name": "Cape Ceiling & Partition",
            "serviceCategory": "ceiling-installers",
            "location": "Cape Town",
            "description": "Your go-to for all ceiling and drywall partitioning needs in Cape Town. Quality materials and expert installation.",
            "rating": 4.9,
            "reviews": 98,
            "avatarSeed": "cape-ceiling-partition-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["cape-town"],
            "reviewData": [
                {"author": "Brendon L.", "rating": 5, "comment": "Did a fantastic job on our home office partitioning and ceiling. Looks amazing."},
                {"author": "Samantha J.", "rating": 5, "comment": "Repaired a large hole in our ceiling, and you can't even tell it was there. Magic!"},
                {"author": "David P.", "rating": 5, "comment": "Professional from start to finish. The team was courteous and tidy."},
                {"author": "Zanele M.", "rating": 4, "comment": "Great work, but a bit of a wait to get them booked. Clearly in high demand."}
            ]
        },
        {
            "id": "ceiling-dbn-1",
            "name": "Durban Ceiling Solutions",
            "serviceCategory": "ceiling-installers",
            "location": "Durban",
            "description": "We install, repair, and paint all types of ceilings. Specializing in mould-resistant solutions for the coast.",
            "rating": 4.7,
            "reviews": 81,
            "avatarSeed": "durban-ceiling-solutions-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["durban"],
            "reviewData": [
                {"author": "Jason P.", "rating": 5, "comment": "Fixed our mouldy bathroom ceiling and installed an extractor. Great advice and service."},
                {"author": "Priya G.", "rating": 5, "comment": "Fast and efficient installation of new ceilings in our extension."},
                {"author": "Mike T.", "rating": 4, "comment": "The work was good, but the final clean-up could have been a bit better."},
                {"author": "Thandiwe N.", "rating": 5, "comment": "Very happy with the cornice installation. It adds a touch of class."}
            ]
        },
        {
            "id": "ceiling-pta-1",
            "name": "Pretoria Ceiling Masters",
            "serviceCategory": "ceiling-installers",
            "location": "Pretoria",
            "description": "Expert ceiling installers and repairers in Pretoria. We pride ourselves on quality finishes and reliability.",
            "rating": 4.8,
            "reviews": 105,
            "avatarSeed": "pta-ceiling-masters-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["pretoria"],
            "reviewData": [
                {"author": "Kobus V.", "rating": 5, "comment": "Excellent skimmed ceilings. The finish is perfectly smooth for painting."},
                {"author": "Leanne S.", "rating": 5, "comment": "They came out quickly to fix a leak-damaged ceiling. Very professional and helpful."},
                {"author": "Sipho R.", "rating": 5, "comment": "Installed beautiful decorative ceiling roses for us. A real touch of class."},
                {"author": "Cheryl E.", "rating": 4, "comment": "The job was well done, but scheduling the initial quote took a few calls."}
            ]
        },
        {
            "id": "ceiling-gqe-1",
            "name": "Bay Ceiling & Drywall",
            "serviceCategory": "ceiling-installers",
            "location": "Gqeberha",
            "description": "Local Gqeberha experts for new ceilings, repairs, and drywall installations. Free, friendly quotes.",
            "rating": 4.7,
            "reviews": 68,
            "avatarSeed": "bay-ceiling-drywall-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["gqeberha"],
            "reviewData": [
                {"author": "Shaun M.", "rating": 5, "comment": "Did a great job partitioning our office space. Fast and affordable."},
                {"author": "Natasha B.", "rating": 5, "comment": "Replaced our old, sagging ceilings. The house feels brand new!"},
                {"author": "Wayne L.", "rating": 4, "comment": "Good, solid work. The team was friendly and professional."},
                {"author": "Amy V.", "rating": 5, "comment": "Quick to respond and did a neat repair job on our ceiling."}
            ]
        },
        {
            "id": "ceiling-blm-1",
            "name": "Central Ceiling & Interior",
            "serviceCategory": "ceiling-installers",
            "location": "Bloemfontein",
            "description": "Providing quality ceiling installation and repair services to the Bloemfontein area. We cover all ceiling types.",
            "rating": 4.6,
            "reviews": 55,
            "avatarSeed": "central-ceiling-interior-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["bloemfontein"],
            "reviewData": [
                {"author": "Pieter H.", "rating": 5, "comment": "Installed suspended ceilings in our shop. Looks very professional."},
                {"author": "Mpho T.", "rating": 5, "comment": "They fixed our ceiling quickly after a burst geyser. Lifesavers!"},
                {"author": "Elize F.", "rating": 4, "comment": "The team did a good job, but they were a bit messy."},
                {"author": "Bongani S.", "rating": 5, "comment": "Happy with the service. The new cornices look great."}
            ]
        }
    ],
    "demolition": [
        {
            "id": "demo-jhb-1",
            "name": "Jozi Demolition Crew",
            "serviceCategory": "demolition",
            "location": "Johannesburg",
            "description": "Safe, controlled demolition services for residential and commercial projects. Site clearing and rubble removal included.",
            "rating": 4.9,
            "reviews": 75,
            "avatarSeed": "jozi-demolition-crew-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["johannesburg"],
            "reviewData": [
                {"author": "Build It Right Dev", "rating": 5, "comment": "Our go-to team for site clearing. They are professional, safe, and always on schedule."},
                {"author": "Home Reno Projects", "rating": 5, "comment": "Handled the demolition of our interior walls cleanly and without any issues."},
                {"author": "Mark S.", "rating": 5, "comment": "Took down an old garage for us. Very efficient and left the site spotless."},
                {"author": "Linda F.", "rating": 4, "comment": "The job was done well, but getting the final invoice took some time."}
            ]
        },
        {
            "id": "demo-cpt-1",
            "name": "Cape Deconstruction",
            "serviceCategory": "demolition",
            "location": "Cape Town",
            "description": "Precision demolition and deconstruction services. We focus on recycling and salvaging materials where possible.",
            "rating": 4.8,
            "reviews": 62,
            "avatarSeed": "cape-deconstruction-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["cape-town"],
            "reviewData": [
                {"author": "Green Builders", "rating": 5, "comment": "Appreciate their focus on salvaging reusable materials. A very responsible company."},
                {"author": "Susan H.", "rating": 5, "comment": "They removed an old wall and were incredibly careful not to damage the rest of the house."},
                {"author": "Peter J.", "rating": 4, "comment": "Good service, though a bit more expensive than other quotes we received. Quality was worth it."},
                {"author": "Anita K.", "rating": 5, "comment": "They demolished our old swimming pool. A tough job, but they handled it professionally."}
            ]
        },
        {
            "id": "demo-dbn-1",
            "name": "Durban Demolishers",
            "serviceCategory": "demolition",
            "location": "Durban",
            "description": "Fast and effective demolition services in Durban. We have the heavy machinery for jobs of any size.",
            "rating": 4.7,
            "reviews": 55,
            "avatarSeed": "durban-demolishers-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["durban"],
            "reviewData": [
                {"author": "Coastal Const.", "rating": 5, "comment": "Reliable and have the right equipment. They make quick work of any demolition job."},
                {"author": "Raj M.", "rating": 5, "comment": "Demolished a fire-damaged building for us. They were safe and professional throughout."},
                {"author": "Wendy P.", "rating": 4, "comment": "The demolition was quick, but rubble removal took an extra day to complete."},
                {"author": "Trevor L.", "rating": 5, "comment": "Very impressive team. They cleared my site in record time."}
            ]
        },
        {
            "id": "demo-pta-1",
            "name": "Pretoria Wrecking & Removal",
            "serviceCategory": "demolition",
            "location": "Pretoria",
            "description": "Your trusted demolition and site-clearing partner in Pretoria. We handle everything from permits to final clearing.",
            "rating": 4.8,
            "reviews": 68,
            "avatarSeed": "pta-wrecking-removal-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["pretoria"],
            "reviewData": [
                {"author": "Jannie V.", "rating": 5, "comment": "Took down an old outbuilding safely and quickly. Great service."},
                {"author": "Mega Developers", "rating": 5, "comment": "They are a key part of our development process. Always reliable."},
                {"author": "Lize M.", "rating": 4, "comment": "A professional service. The initial quote was a bit vague but was clarified upon request."},
                {"author": "Bennie G.", "rating": 5, "comment": "Very satisfied with their work. They left the property neat and tidy."}
            ]
        },
        {
            "id": "demo-gqe-1",
            "name": "Bay Demolition Services",
            "serviceCategory": "demolition",
            "location": "Gqeberha",
            "description": "Local demolition experts in Gqeberha. We offer residential and light commercial demolition services.",
            "rating": 4.7,
            "reviews": 49,
            "avatarSeed": "bay-demolition-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["gqeberha"],
            "reviewData": [
                {"author": "Shane W.", "rating": 5, "comment": "Great to work with a local company that gets the job done right."},
                {"author": "Coastal Homes", "rating": 5, "comment": "They handle all our internal strip-outs for renovations. Always a clean job."},
                {"author": "Michelle A.", "rating": 4, "comment": "The job was completed successfully, but there were some scheduling changes."},
                {"author": "Riaan C.", "rating": 5, "comment": "They removed an old concrete slab from my backyard. Hard work, well done."}
            ]
        },
        {
            "id": "demo-blm-1",
            "name": "Central Site Clearers",
            "serviceCategory": "demolition",
            "location": "Bloemfontein",
            "description": "Demolition and site clearing services in Bloemfontein. We have the equipment and expertise for your project.",
            "rating": 4.6,
            "reviews": 41,
            "avatarSeed": "central-site-clearers-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["bloemfontein"],
            "reviewData": [
                {"author": "Frikkie P.", "rating": 5, "comment": "They demolished my old farmhouse safely. A very professional operation."},
                {"author": "Bloem Dev Co", "rating": 5, "comment": "Reliable demolition partners for our new housing projects."},
                {"author": "Corne R.", "rating": 4, "comment": "Good work, but the final site clearing took longer than expected."},
                {"author": "Tebogo S.", "rating": 5, "comment": "Very happy with the service. They took care of everything."}
            ]
        }
    ],
    "air-conditioning": [
        {
            "id": "ac-demo-1",
            "name": "CoolBreeze AC Cape Town",
            "serviceCategory": "air-conditioning",
            "location": "Cape Town",
            "description": "Expert {service} installation and repair services. We keep you cool in the Cape Town heat.",
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
            "description": "Your trusted partner for all {service} needs in Johannesburg. Sales, service, and repairs.",
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
            "description": "Fighting the Durban humidity one AC unit at a time. Fast, reliable, and affordable {service} services.",
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
            "description": "Professional {service} services for homes and offices in Pretoria. Stay comfortable all year round.",
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
            "description": "The Eastern Cape's choice for {service}. We provide quality installations and prompt repair services.",
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
            "description": "Reliable and efficient {service} solutions for the Free State. Quality service you can trust.",
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
            "description": "Modern {service} to enhance your home's aesthetic and security. Custom designs available.",
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
            "description": "High-quality {service} installations for residential and commercial properties in Johannesburg.",
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
            "description": "Durable and stylish {service} solutions built to withstand the coastal climate. Free quotes.",
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
            "description": "Custom {service}, and enclosures for the Pretoria market. Quality craftsmanship guaranteed.",
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
            "description": "Your local experts for all {service} and glass installations in the Friendly City.",
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
            "description": "Providing Bloemfontein with quality {service} for over 10 years. Reliable and affordable.",
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
            "description": "Custom {service} and shade solutions to protect you from the Cape sun. Retractable and fixed options available.",
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
            "description": "Protect your patio and vehicles with our durable and stylish {service} and carports.",
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
            "description": "High-quality {service} designed for the Durban climate. Enhance your outdoor living space.",
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
            "description": "Pretoria's specialists in custom-made {service} for residential and commercial properties.",
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
            "description": "Beat the wind and sun in Gqeberha with our robust and attractive {service} solutions.",
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
            "description": "Providing quality shade solutions, from {service} to shadeports, for the Free State community.",
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
            "description": "Modern stainless steel and frameless glass {service}. Perfect for balconies and staircases with a view.",
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
            "description": "Custom {service} designs for safety and style. We work with steel, glass, and wood.",
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
            "description": "Marine-grade stainless steel {service} that are built to last in the humid Durban climate.",
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
            "description": "Specialists in steel {service} and staircase railings for homes and businesses in Pretoria.",
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
            "description": "Safe, stylish, and durable {service} for the Windy City. Contact us for a free quote.",
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
            "description": "Creating custom {service} to add a touch of class and safety to your property.",
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
            "description": "From concept to completion, we create stunning {service} that add value to your home.",
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
            "description": "Modern and stylish {service}. We handle all plumbing, tiling, and electrical work.",
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
            "description": "Affordable and quality {service} for the Durban area. No job too big or small.",
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
            "description": "High-quality {service} with a focus on premium finishes and waterproofing.",
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
            "description": "Complete {service} services in Gqeberha, from simple updates to full remodels.",
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
            "description": "We specialize in beautiful and functional {service}. Expert tiling and plumbing.",
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
            "description": "A wide range of stylish and functional {service} for your home or office. Free measurement and quotes.",
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
            "description": "Venetian, roller, vertical, and custom {service}. Professional installation services across Johannesburg.",
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
            "description": "Quality {service} and shutters designed to withstand the Durban climate. Enhance your privacy and style.",
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
            "description": "Affordable, high-quality {service} supplied and installed in the greater Pretoria area.",
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
            "description": "Your one-stop shop for all types of {service} in Gqeberha. Quality products and expert installation.",
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
            "description": "Complete your home's look with our beautiful range of custom-made {service}. Free consultations.",
            "rating": 4.7,
            "reviews": 16,
            "avatarSeed": "bloem-blinds-decor-logo",
            "isDemo": true,
            "priorityRank": 99,
            "serviceLocations": ["bloemfontein"]
        }
    ],
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
            "priorityRank": 99
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
            "priorityRank": 99
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
            "priorityRank": 99
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
            "priorityRank": 99
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
            "priorityRank": 99
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
            "priorityRank": 99
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
            "priorityRank": 99
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
            "priorityRank": 99
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
            "priorityRank": 99
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
            "priorityRank": 99
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
            "priorityRank": 99
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
            "priorityRank": 99
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
