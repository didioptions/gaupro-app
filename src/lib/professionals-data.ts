
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
};

type ProfessionalsByCategory = {
  [key: string]: Professional[];
};

export const allProfessionals: ProfessionalsByCategory = {
  "plumber": [
    {
      id: "jhb-plumb-pros",
      name: "JHB Plumb Pros",
      location: "Johannesburg",
      description: "Your go-to experts for all {service} needs. From emergency leak repairs to full bathroom installations, we provide fast, reliable, and affordable services across Johannesburg.",
      rating: 4.9,
      reviews: 15,
      isProVerified: true,
      yearsInBusiness: 15,
      employees: 10,
      businessHours: "Open 24/7",
      serviceCategory: "plumber",
      serviceLocations: ["johannesburg", "sandton", "randburg"],
      tags: ["Emergency Plumbing", "Geyser Repair", "Blocked Drains", "CoC"],
      reviewData: [
        { author: "S. Naidoo", rating: 5, comment: "Called them at 2 AM for a burst pipe. They were here within 30 minutes and fixed it. Lifesavers!" },
        { author: "Mike B.", rating: 5, comment: "Excellent service. Replaced my geyser quickly and for a fair price." },
        { author: "Linda F.", rating: 4, comment: "Cleared a very stubborn drain. The team was professional and friendly." },
        { author: "Tom G.", rating: 5, comment: "Their COC inspection was thorough and they explained everything clearly. Highly recommend." },
        { author: "Grace M.", rating: 5, comment: "I've used them for years for all my plumbing needs. Always reliable." },
        { author: "Peter Z.", rating: 5, comment: "Fast, efficient, and they cleaned up after themselves. Great job." },
        { author: "Anna K.", rating: 5, comment: "Fixed my leaking toilet. Very happy with the service." },
        { author: "Ben S.", rating: 4, comment: "Good service, though they were a bit late. The work was top-notch." },
        { author: "Lerato P.", rating: 5, comment: "The best plumbers in Joburg. I wouldn't call anyone else." },
        { author: "Chris H.", rating: 5, comment: "Professional, knowledgeable, and honest. A pleasure to deal with." },
        { author: "Zanele D.", rating: 5, comment: "They were recommended by a friend and I can see why. Excellent service." },
        { author: "Mr. Jacobs", rating: 5, comment: "Efficient and professional. Solved a problem two other plumbers couldn't." },
        { author: "Sandton Office", rating: 5, comment: "They handle all the plumbing maintenance for our office park. Always reliable." },
        { author: "Maria V.", rating: 5, comment: "Quick to respond and the plumber who came was very helpful." },
        { author: "D. Chen", rating: 5, comment: "A quality service you can trust. Fair pricing as well." }
      ],
      photos: ["https://picsum.photos/seed/plumb1/600/400"],
      avatarSeed: "plumber-hero-image"
    }
  ],
  "movers": [
    {
      id: "cpt-move-it",
      name: "Cape Move-It",
      location: "Cape Town",
      description: "Stress-free moving services in and around Cape Town. Whether you're moving homes or offices, our team of professional {service} ensures a smooth transition for your belongings.",
      rating: 4.8,
      reviews: 14,
      isProVerified: true,
      yearsInBusiness: 12,
      employees: 25,
      businessHours: "Mon-Sat, 7am-6pm",
      serviceCategory: "movers",
      serviceLocations: ["cape-town", "stellenbosch", "bellville"],
      tags: ["Local Moving", "Office Relocation", "Packing Services", "Long Distance"],
      reviewData: [
        { author: "Jane D.", rating: 5, comment: "The team was incredible. Fast, efficient, and so careful with our things. Made our move so easy." },
        { author: "Tech Startup", rating: 5, comment: "Moved our office of 20 people over a weekend. Not a single thing was broken. Highly professional." },
        { author: "The Wilsons", rating: 5, comment: "Best moving experience we've ever had. The team was friendly and worked so hard." },
        { author: "David L.", rating: 4, comment: "Good service. They were a bit late starting but made up the time. Would use them again." },
        { author: "Emily R.", rating: 5, comment: "Their packing service is a game-changer. Saved us so much time and stress." },
        { author: "Stellenbosch Move", rating: 5, comment: "They handled our move from Cape Town to Stellenbosch perfectly. Great communication." },
        { author: "Long Distance", rating: 5, comment: "Moved us all the way to George. Everything arrived safely. Thank you!" },
        { author: "Sarah B.", rating: 5, comment: "I've used them twice now. Consistently excellent service." },
        { author: "M. Patel", rating: 5, comment: "The crew was amazing. So polite and professional." },
        { author: "Last Minute Move", rating: 5, comment: "They managed to fit us in at short notice and were brilliant." },
        { author: "Complex Move", rating: 4, comment: "It was a tricky move with lots of stairs, but they handled it well." },
        { author: "J. Foster", rating: 5, comment: "From the first call to the last box, everything was handled professionally." },
        { author: "Apartment Move", rating: 5, comment: "Made moving out of my third-floor apartment look easy. Very strong team!" },
        { author: "G. Adams", rating: 5, comment: "Fair pricing and excellent service. I recommend them to everyone." }
      ],
      photos: ["https://picsum.photos/seed/move1/600/400"],
      avatarSeed: "movers-image"
    }
  ],
  "caterers": [
    {
      id: "soweto-feasts",
      name: "Soweto Feasts Catering",
      location: "Soweto",
      description: "Authentic South African cuisine for any event. Specializing in traditional dishes and braais for weddings, parties, and corporate functions.",
      rating: 4.9,
      reviews: 14,
      isProVerified: true,
      serviceLocations: ["soweto", "johannesburg"],
      yearsInBusiness: 12,
      employees: 10,
      businessHours: "By Appointment",
      serviceCategory: "caterers",
      tags: ["Traditional Cuisine", "Braai Catering", "Shisanyama", "Event Catering"],
      reviewData: [
        { author: "Thabo M.", rating: 5, comment: "The best traditional food I've had at an event. Our international guests loved it!" },
        { author: "Lerato's Wedding", rating: 5, comment: "They catered our wedding and the food was incredible. Proper, delicious home-style cooking." },
        { author: "Corporate Year-End", rating: 5, comment: "The braai they did for our year-end function was a huge success. Everyone loved it." },
        { author: "Jabu's 50th", rating: 5, comment: "Authentic, flavourful, and plenty of it! The perfect food for a celebration." },
        { author: "S. Gumede", rating: 4, comment: "Very good food. The setup took a little longer than planned but they made up for it." },
        { author: "Community Event", rating: 5, comment: "They are our go-to caterers for all our community events. The food is always a hit." },
        { author: "Tourist Group", rating: 5, comment: "A fantastic introduction to South African food for our tour group. They loved the experience." },
        { author: "N. Cele", rating: 5, comment: "The flavour of their shisanyama is just perfect. You can taste the quality." },
        { author: "Family Gathering", rating: 5, comment: "It felt like a family celebration with their food. So much love and care goes into it." },
        { author: "Peter J.", rating: 5, comment: "Reliable, delicious, and generous portions. What more could you ask for?" },
        { author: "Sports Club", rating: 4, comment: "Great food for our awards evening. Everyone was happy." },
        { author: "Music Festival", rating: 5, comment: "They handled the catering for our VIP area. The food was amazing." },
        { author: "Gogo Dlamini", rating: 5, comment: "Tastes like home. Beautiful food." },
        { author: "Sipho's Tombstone Unveiling", rating: 5, comment: "They provided a respectful and wonderful catering service for our family. The food was perfect." }
      ],
      photos: ["https://picsum.photos/seed/soweto-cater/600/400"],
      avatarSeed: "gourmet-gatherings-logo"
    },
    {
      id: "gourmet-gatherings-cpt",
      name: "Gourmet Gatherings CPT",
      location: "Cape Town",
      description: "Boutique catering for corporate events, weddings, and private parties. We create bespoke menus using fresh, local ingredients to make your event unforgettable.",
      rating: 4.8,
      reviews: 13,
      isProVerified: true,
      yearsInBusiness: 9,
      employees: 12,
      businessHours: "By Appointment",
      serviceCategory: "caterers",
      serviceLocations: ["cape-town", "stellenbosch", "franschhoek"],
      tags: ["Corporate Catering", "Wedding Catering", "Private Parties", "Bespoke Menus"],
      reviewData: [
        { author: "XYZ Events", rating: 5, comment: "Their food is always a highlight at our corporate functions. Professional, creative, and delicious." },
        { author: "Happy Bride", rating: 5, comment: "The food at our wedding was exquisite. So many of our guests commented on it. Thank you!" },
        { author: "40th Birthday", rating: 5, comment: "The canapés were incredible. It really elevated my birthday party." },
        { author: "Product Launch", rating: 4, comment: "Great food and presentation. A few logistical hiccups but they were resolved quickly." },
        { author: "P. Adams", rating: 5, comment: "From the planning to the execution, everything was seamless. The food was divine." },
        { author: "Wine Estate", rating: 5, comment: "They understand food and wine pairing perfectly. A great partner for our events." },
        { author: "Art Gallery Opening", rating: 5, comment: "The food was as beautiful as the art. Elegant and delicious." },
        { author: "The Johnson Family", rating: 5, comment: "We hired them for a family reunion. The harvest table was a huge hit!" },
        { author: "Conference Organizer", rating: 4, comment: "Reliable service for our conference catering. The attendees enjoyed the food." },
        { author: "Film Shoot", rating: 5, comment: "Provided catering for our film crew. They were flexible and the food was great." },
        { author: "Charity Gala", rating: 5, comment: "Exceptional food and service for our fundraising gala. A pleasure to work with." },
        { author: "T. Ndlovu", rating: 5, comment: "The quality of the ingredients and the presentation is always top-class." },
        { author: "International Delegation", rating: 5, comment: "They showcased the best of South African cuisine for our guests. Everyone was impressed." }
      ],
      photos: ["https://picsum.photos/seed/cater1/600/400"],
      avatarSeed: "gourmet-gatherings-logo"
    }
  ],
  "builders": [
    {
      id: "soweto-building-solutions",
      name: "Soweto Building Solutions",
      location: "Soweto, Johannesburg",
      description: "Your trusted local {service} for quality home extensions, renovations, and new builds. We pride ourselves on quality workmanship and reliable service.",
      rating: 4.8,
      reviews: 14,
      isProVerified: true,
      serviceLocations: ["soweto", "johannesburg"],
      yearsInBusiness: 15,
      employees: 12,
      businessHours: "Mon-Sat, 7am-6pm",
      serviceCategory: "builders",
      tags: ["Home Renovations", "Building Extensions", "New Builds", "Foundations"],
      reviewData: [
        { author: "Thandi J.", rating: 5, comment: "They built our extension and did a fantastic job. The team was professional and always on time." },
        { author: "Michael P.", rating: 5, comment: "Reliable and honest builders. They finished our project on schedule and on budget." },
        { author: "The Dlamini Family", rating: 5, comment: "We are so happy with our new home. Thank you for your excellent work." },
        { author: "S. Nkosi", rating: 4, comment: "Good quality work. The project took a little longer than expected but the result is great." },
        { author: "Jabu's Reno", rating: 5, comment: "They renovated my kitchen and bathroom. I am so impressed with the quality." },
        { author: "Boundary Wall", rating: 5, comment: "Built a new boundary wall for us. The work is very neat and strong." },
        { author: "Local Project", rating: 5, comment: "Great to work with a local company that understands the community." },
        { author: "A. Molefe", rating: 5, comment: "I would recommend them to anyone. Their work speaks for itself." },
        { author: "First-time Builder", rating: 5, comment: "They guided me through the whole process. Very helpful and patient." },
        { author: "Quality Workmanship", rating: 5, comment: "The quality of their brickwork and plastering is excellent." },
        { author: "Clean Site", rating: 4, comment: "They kept the building site surprisingly clean and tidy." },
        { author: "P. Sithole", rating: 5, comment: "A trustworthy team of builders. Very happy with their service." },
        { author: "Garage Conversion", rating: 5, comment: "They converted our garage into a beautiful granny flat." },
        { author: "Mr. Gumede", rating: 5, comment: "Honest, reliable, and their prices are fair. A great company." }
      ],
      photos: ["https://picsum.photos/seed/build1/600/400"],
      avatarSeed: "soweto-builders-logo"
    },
    {
      id: "ndlovu-construction",
      name: "Ndlovu Construction",
      location: "Johannesburg",
      description: "High-end residential and commercial {service}. We specialize in luxury homes, modern renovations, and commercial developments across Gauteng.",
      rating: 4.9,
      reviews: 12,
      isProVerified: true,
      serviceLocations: ["johannesburg", "sandton", "midrand"],
      yearsInBusiness: 20,
      employees: 45,
      businessHours: "Mon-Fri, 8am-5pm",
      serviceCategory: "builders",
      tags: ["Luxury Homes", "Commercial Developments", "Modern Renovations"],
      reviewData: [
        { author: "Architect Partner", rating: 5, comment: "I've worked with Ndlovu on several projects. Their quality and professionalism are second to none." },
        { author: "Sandton Homeowner", rating: 5, comment: "The attention to detail in our new home is incredible. Worth every cent." },
        { author: "Corporate Client", rating: 5, comment: "They built our new office park. The project was managed exceptionally well." },
        { author: "The Hamiltons", rating: 5, comment: "Our renovation was a huge project, and they handled it with absolute professionalism." },
        { author: "Interior Designer", rating: 5, comment: "It's a pleasure working with a building team that has such high standards." },
        { author: "Property Developer", rating: 4, comment: "Excellent quality, though there were some delays due to materials. The end result is superb." },
        { author: "Dream Home", rating: 5, comment: "They literally built our dream home. We couldn't be happier." },
        { author: "High-End Finishes", rating: 5, comment: "If you want high-end finishes and quality, this is the company to use." },
        { author: "Project Manager", rating: 5, comment: "Their project management is excellent. Always kept us in the loop." },
        { author: "Investor", rating: 5, comment: "A great return on investment. The quality of their build attracts premium tenants." },
        { author: "C. van der Bijl", rating: 5, comment: "You get what you pay for. And with Ndlovu, you get excellence." },
        { author: "Modern Renovation", rating: 5, comment: "They transformed our old house into a modern masterpiece." }
      ],
      photos: ["https://picsum.photos/seed/build2/600/400"],
      avatarSeed: "ndlovu-construction-logo"
    }
  ],
  "electrician": [
    {
      id: "spark-squad-cpt",
      name: "Spark Squad CPT",
      location: "Cape Town",
      description: "Your reliable {service} for everything from emergency call-outs to full house re-wiring and CoC inspections. We are fast, certified, and available 24/7.",
      rating: 4.9,
      reviews: 15,
      isProVerified: true,
      yearsInBusiness: 10,
      employees: 15,
      businessHours: "Open 24/7",
      serviceCategory: "electrician",
      serviceLocations: ["cape-town", "bellville", "table-view"],
      tags: ["Emergency Electrician", "CoC Inspections", "Rewiring", "Fault Finding"],
      reviewData: [
        { author: "Susan B.", rating: 5, comment: "Our power kept tripping. They found the fault in 10 minutes and fixed it. Brilliant service." },
        { author: "Home Seller", rating: 5, comment: "Needed a CoC urgently to sell my house. They were fast and very professional." },
        { author: "Mark D.", rating: 5, comment: "Had a major wiring issue. They rewired half the house neatly and efficiently." },
        { author: "Late Night Call", rating: 5, comment: "Called them at 11 PM and they actually answered! The electrician was a lifesaver." },
        { author: "Renovator", rating: 4, comment: "Good work on our new kitchen wiring. A bit more expensive than other quotes, but worth it for the peace of mind." },
        { author: "Mrs. Williams", rating: 5, comment: "Very polite and knowledgeable electrician. Explained everything he was doing." },
        { author: "New Lights", rating: 5, comment: "Installed new downlights for us. The work is perfect." },
        { author: "Safety First", rating: 5, comment: "I trust them completely with the safety of my home's electrical system." },
        { author: "Quick and Tidy", rating: 5, comment: "They work quickly and are very tidy. You wouldn't know they were here." },
        { author: "Fair Price", rating: 5, comment: "Their pricing is fair and they are very transparent about costs." },
        { author: "The Best", rating: 5, comment: "Simply the best electricians in Cape Town. I recommend them to everyone." },
        { author: "Complex Fault", rating: 5, comment: "They traced a very complex fault that others had missed. Very impressive." },
        { author: "Landlord", rating: 5, comment: "I use them for all my rental properties. They are always reliable." },
        { author: "G. Patel", rating: 4, comment: "Good service. Had to wait a bit as they were busy, but the work was good." },
        { author: "Happy Customer", rating: 5, comment: "Very happy with the service. Will definitely use them again." }
      ],
      photos: ["https://picsum.photos/seed/elec1/600/400"],
      avatarSeed: "tech-savvy-logo"
    }
  ],
  "handyman": [
    {
      id: "durban-handy-helpers",
      name: "Durban Handy Helpers",
      location: "Durban",
      description: "No job is too small for our team of friendly {service}. We do everything from hanging pictures and assembling furniture to minor plumbing and electrical fixes.",
      rating: 4.7,
      reviews: 13,
      isProVerified: true,
      yearsInBusiness: 8,
      employees: 5,
      businessHours: "Mon-Sat, 8am-5pm",
      serviceCategory: "handyman",
      serviceLocations: ["durban", "umhlanga", "pinetown"],
      tags: ["General Repairs", "Furniture Assembly", "Picture Hanging", "Minor Fixes"],
      reviewData: [
        { author: "Mrs. Pillay", rating: 5, comment: "Assembled all my new flatpack furniture perfectly. Saved me so much time and frustration!" },
        { author: "Busy Dad", rating: 5, comment: "Fixed a whole list of small things around the house in one afternoon. So efficient." },
        { author: "Anna L.", rating: 5, comment: "Hung all my pictures and mirrors. Everything is perfectly straight. Very professional." },
        { author: "Rental Agent", rating: 5, comment: "I use them for all the maintenance at my rental properties. Always reliable and trustworthy." },
        { author: "Mr. Singh", rating: 4, comment: "Did a good job fixing my leaking tap. He was a little late, but the work was good." },
        { author: "First-time Homeowner", rating: 5, comment: "So helpful for all the little jobs I didn't know how to do. A great service." },
        { author: "Elderly Couple", rating: 5, comment: "The handyman was so kind and patient. He helped us with so many things." },
        { author: "Odd Jobs", rating: 5, comment: "Perfect for all those odd jobs you never get around to." },
        { author: "Fair Price", rating: 5, comment: "Their hourly rate is very fair and they work quickly." },
        { author: "Durban Resident", rating: 5, comment: "My go-to for any small repairs around the house." },
        { author: "A. Khumalo", rating: 5, comment: "Very neat work. I'm very happy with the service." },
        { author: "C. Botha", rating: 4, comment: "Good service, they are just very busy so you have to book in advance." },
        { author: "So Handy!", rating: 5, comment: "Literally so handy to have their number. They can fix anything!" }
      ],
      photos: ["https://picsum.photos/seed/handy1/600/400"],
      avatarSeed: "handyman-image"
    }
  ],
  "security": [
    {
      id: "titan-security-services",
      name: "Titan Security Services",
      location: "Johannesburg",
      description: "Your trusted partner in safety. We offer a full range of {service}, including 24/7 armed response, alarm system installations, and VIP protection.",
      rating: 4.9,
      reviews: 12,
      isProVerified: true,
      yearsInBusiness: 18,
      employees: 250,
      businessHours: "Open 24/7",
      serviceCategory: "security",
      serviceLocations: ["johannesburg", "sandton", "randburg"],
      tags: ["Armed Response", "Alarm Systems", "VIP Security", "Security Solutions"],
      reviewData: [
        { author: "Sandton Resident", rating: 5, comment: "Their response time is incredible. I feel so much safer knowing they are in the area." },
        { author: "Business Owner", rating: 5, comment: "Installed a new alarm system at our warehouse. The team was professional and the system works perfectly." },
        { author: "Mrs. Davies", rating: 5, comment: "The guards are always so polite and vigilant. A very professional service." },
        { author: "Event Organizer", rating: 5, comment: "We used their VIP protection for a high-profile guest. The team was discreet and highly professional." },
        { author: "G. Molefe", rating: 4, comment: "Good service. My only issue is that the call centre can be a bit slow to answer sometimes." },
        { author: "Community Forum", rating: 5, comment: "Titan has made a real difference in our neighbourhood. Crime is down since they started patrolling." },
        { author: "New System", rating: 5, comment: "The alarm system they installed is so easy to use and gives me great peace of mind." },
        { author: "P. Singh", rating: 5, comment: "I've been with them for 5 years. Consistently excellent service." },
        { author: "R. van Jaarsveld", rating: 5, comment: "When we had a break-in, their response was immediate. They caught the suspect. I can't thank them enough." },
        { author: "Body Corporate", rating: 5, comment: "They provide guarding services for our complex. The residents are very happy with them." },
        { author: "Safe and Sound", rating: 5, comment: "I sleep better at night knowing Titan is watching over us." },
        { author: "Highly Recommend", rating: 5, comment: "I would recommend Titan Security to anyone. They are the best." }
      ],
      photos: ["https://picsum.photos/seed/sec1/600/400"],
      avatarSeed: "titan-security-logo"
    }
  ],
  "cleaning-service": [
    {
      id: "sparkle-clean-pros",
      name: "SparkleClean Pros",
      location: "Johannesburg",
      description: "Professional and reliable {service} for homes and offices. We offer once-off deep cleans, regular maintenance cleaning, and specialized services like carpet and window cleaning.",
      rating: 4.8,
      reviews: 13,
      isProVerified: true,
      yearsInBusiness: 7,
      employees: 20,
      businessHours: "Mon-Sat, 8am-5pm",
      serviceCategory: "cleaning-service",
      serviceLocations: ["johannesburg", "sandton", "rosebank"],
      tags: ["Home Cleaning", "Office Cleaning", "Deep Cleaning", "Carpet Cleaning"],
      reviewData: [
        { author: "Busy Mom", rating: 5, comment: "They are a lifesaver! My house is spotless every time they leave. I can't live without them." },
        { author: "Office Manager", rating: 5, comment: "Our office has never been cleaner. The team is professional, trustworthy, and very thorough." },
        { author: "End of Lease", rating: 5, comment: "Needed an end-of-lease deep clean. The place looked better than when we moved in. Got my full deposit back!" },
        { author: "Mr. Botha", rating: 4, comment: "Very good cleaning service. They missed one or two small spots but were happy to come back and fix it." },
        { author: "Anna S.", rating: 5, comment: "The carpet cleaning service was amazing. My old carpets look brand new." },
        { author: "J. Peterson", rating: 5, comment: "I've tried a few cleaning services, and SparkleClean is by far the best. Consistent quality." },
        { author: "Post-Party Clean", rating: 5, comment: "They cleaned up after my 30th birthday party. The house was a mess, and they made it look perfect again." },
        { author: "Regular Client", rating: 5, comment: "My weekly cleaning team is fantastic. They are so reliable and do a great job." },
        { author: "T. Khumalo", rating: 5, comment: "Very professional and easy to book. I highly recommend their services." },
        { author: "Deep Clean", rating: 5, comment: "The deep clean was intense! They cleaned places I didn't even know were dirty." },
        { author: "Mrs. Williams", rating: 4, comment: "Happy with the service. Booking can be a bit tricky as they are very popular." },
        { author: "Great Team", rating: 5, comment: "The cleaning team is always so friendly and professional." },
        { author: "Worth it", rating: 5, comment: "Totally worth the money for the time it saves me. And my house is always clean!" }
      ],
      photos: ["https://picsum.photos/seed/clean1/600/400"],
      avatarSeed: "sparkle-clean-logo"
    }
  ],
  "default": []
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
