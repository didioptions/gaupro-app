

export const jobRequests = [
  {
    id: 1,
    category: 'Plumbing',
    location: 'Sandton, Johannesburg',
    title: 'Leaky kitchen sink faucet',
    description: 'The faucet under my kitchen sink has a steady drip. Need a plumber to diagnose and fix the issue. It seems to be coming from the base of the faucet itself.',
    posted: '1 hour ago',
    needed: 'As soon as possible',
    budget: 'R500 - R1000',
    quotes: 2,
    credits: 3,
    customer: {
      name: 'Jane Doe',
      phone: '082 123 4567',
    },
    questionsAndAnswers: [
      {
        question: 'What do you need help with?',
        answer: 'Burst or leaking pipe'
      },
      {
        question: 'Is this an emergency?',
        answer: 'Yes, it is'
      }
    ]
  },
  {
    id: 8,
    category: 'Solar Systems',
    location: 'Durbanville, Cape Town',
    title: 'Quote for residential solar installation',
    description: 'I\'m looking for quotes for a 5kW hybrid solar system for my home. Please include pricing for panels, inverter, and battery storage. My monthly electricity usage is around 600 kWh.',
    posted: '2 hours ago',
    needed: 'Within a month',
    budget: 'Quote Required',
    quotes: 1,
    credits: 5,
    customer: {
      name: 'David Miller',
      phone: '081 222 3333',
    },
    questionsAndAnswers: [
      {
        question: 'What is your main goal for installing a solar system?',
        answer: 'Beat Loadshedding'
      }
    ]
  },
  {
    id: 9,
    category: 'Website Designers',
    location: 'Umhlanga, Durban',
    title: 'Build a new e-commerce website for a small boutique',
    description: 'I need a clean and modern e-commerce website built on Shopify or a similar platform. The site should have around 20 products, a payment gateway, and a simple blog section.',
    posted: '8 hours ago',
    needed: 'In the next 2 months',
    budget: 'R10000 - R20000',
    quotes: 0,
    credits: 4,
    customer: {
      name: 'Priya Naidoo',
      phone: '072 444 5555',
    },
    questionsAndAnswers: [
      {
        question: 'What type of website do you need?',
        answer: 'E-commerce (Online Store)'
      }
    ]
  },
  {
    id: 2,
    category: 'Painting',
    location: 'Rosebank, Johannesburg',
    title: 'Paint interior of 2-bedroom apartment',
    description: 'Looking to repaint the interior walls of a 2-bedroom apartment (living room, two bedrooms). All paint will be supplied. Walls are in good condition, just need a color change.',
    posted: '1 day ago',
    needed: 'In the next few days',
    budget: 'Quote Required',
    quotes: 4,
    credits: 3,
    customer: {
      name: 'John Smith',
      phone: '083 987 6543',
    },
    questionsAndAnswers: [
        {
          question: 'What needs painting?',
          answer: 'Interior'
        }
    ]
  },
  {
    id: 3,
    category: 'Electrical',
    location: 'Germiston, Gauteng',
    title: 'Fix flickering lights in living room',
    description: 'The main ceiling lights in my living room have started flickering. It happens intermittently. Suspecting a wiring issue or a problem with the dimmer switch.',
    posted: '3 days ago',
    needed: 'I\'m flexible',
    budget: 'Quote Required',
    quotes: 1,
    credits: 4,
    customer: {
      name: 'Peter Jones',
      phone: '071 234 5678',
    },
    questionsAndAnswers: [
        {
          question: 'What is the issue?',
          answer: 'Lighting Installation / Repair'
        },
        {
          question: 'Is this an emergency?',
          answer: 'No, it is not'
        },
        {
          question: 'What is the property type?',
          answer: 'Home / Residential'
        }
    ]
  },
  {
    id: 4,
    category: 'Gardening',
    location: 'Randburg, Johannesburg',
    title: 'Garden clean-up and lawn mowing',
    description: 'My garden is overgrown and needs a major clean-up, including mowing the lawn, weeding the flowerbeds, and trimming the hedges. It\'s a medium-sized garden.',
    posted: '5 days ago',
    needed: 'As soon as possible',
    budget: 'R800 - R1500',
    quotes: 3,
    credits: 2,
    customer: {
      name: 'Susan Williams',
      phone: '060 111 2222',
    },
    questionsAndAnswers: [
        {
          question: 'What gardening service do you need?',
          answer: 'Once-off garden clean-up'
        }
    ]
  },
  {
    id: 5,
    category: 'Building',
    location: 'Pretoria, Gauteng',
    title: 'Build a new boundary wall',
    description: 'I need a new brick boundary wall built on one side of my property. The length is approximately 20 meters. Please include foundation work in the quote.',
    posted: '1 week ago',
    needed: 'Within a month',
    budget: 'R25000 - R40000',
    quotes: 4,
    credits: 5,
    customer: {
      name: 'Michael Brown',
      phone: '072 333 4444',
    },
    questionsAndAnswers: [
      {
        question: 'What kind of building works do you need?',
        answer: 'Other'
      }
    ]
  },
  {
    id: 6,
    category: 'Cleaning',
    location: 'Sea Point, Cape Town',
    title: 'Deep clean of 3-bedroom house',
    description: 'End-of-lease deep cleaning required for a 3-bedroom, 2-bathroom house. Includes oven, windows, and carpets. Must be completed by the end of the week.',
    posted: '1 week ago',
    needed: 'By this weekend',
    budget: 'R1500 - R2500',
    quotes: 5,
    credits: 2,
    customer: {
      name: 'Emily Davis',
      phone: '084 555 6666',
    },
    questionsAndAnswers: [
      {
        question: 'What type of cleaning do you need?',
        answer: 'House Cleaning'
      }
    ]
  },
  {
    id: 7,
    category: 'Handyman',
    location: 'Ballito, KwaZulu-Natal',
    title: 'Hang pictures and assemble flat-pack furniture',
    description: 'I have 5 large pictures to hang on various walls and a new bookshelf from a flat-pack that needs to be assembled. Need someone with their own tools.',
    posted: '2 weeks ago',
    needed: 'I\'m flexible',
    budget: 'R400 - R700',
    quotes: 3,
    credits: 1,
    customer: {
      name: 'Chris Green',
      phone: '076 777 8888',
    },
    questionsAndAnswers: [
      {
        question: 'What type of work do you need done?',
        answer: 'Installation, Assembly'
      }
    ]
  },
   {
    id: 10,
    category: 'CCTV',
    location: 'Centurion, Gauteng',
    title: 'Install 4 security cameras on my property',
    description: 'I need 4 outdoor CCTV cameras installed around my house. I have already purchased a Hikvision system but need a professional to run the cables and set up the DVR.',
    posted: '3 weeks ago',
    needed: 'Within two weeks',
    budget: 'R2000 - R3500',
    quotes: 2,
    credits: 4,
    customer: {
      name: 'Ben Kruger',
      phone: '083 654 3210',
    },
    questionsAndAnswers: [
      {
        question: 'What CCTV service do you need?',
        answer: 'New System Installation'
      },
      {
        question: 'How many cameras do you need?',
        answer: '1-4 Cameras'
      }
    ]
  }
];
