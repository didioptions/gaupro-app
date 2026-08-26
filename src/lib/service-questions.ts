'use server';

export type Question = {
  id: string;
  text: string;
  type: 'radio' | 'textarea' | 'text' | 'date' | 'checkbox' | 'location';
  options?: { value: string; label: string }[];
  placeholder?: string;
};

export type QuestionSet = {
  service: string;
  questions: Question[];
};

export const allServices = [
    { value: 'access-control', label: 'Access Control' },
    { value: 'accounting', label: 'Accounting' },
    { value: 'agricultural', label: 'Agricultural' },
    { value: 'agricultural-equipment', label: 'Agricultural Equipment' },
    { value: 'agricultural-services', label: 'Agricultural Services' },
    { value: 'air-conditioning', label: 'Air Conditioning' },
    { value: 'alarm-systems', label: 'Alarm Systems' },
    { value: 'aluminium-doors-and-windows', label: 'Aluminium Doors And Windows' },
    { value: 'appliance-repairs', label: 'Appliance Repairs' },
    { value: 'architects', label: 'Architects' },
    { value: 'armed-response', label: 'Armed Response' },
    { value: 'auditors', label: 'Auditors' },
    { value: 'auto-electricians', label: 'Auto Electricians' },
    { value: 'auto-glass', label: 'Auto Glass' },
    { value: 'awnings', label: 'Awnings' },
    { value: 'baby-sitters', label: 'Baby Sitters' },
    { value: 'balustrades', label: 'Balustrades' },
    { value: 'bathroom-renovations', label: 'Bathroom Renovations' },
    { value: 'batteries', label: 'Batteries' },
    { value: 'beauty-salons', label: 'Beauty Salons' },
    { value: 'blinds', label: 'Blinds' },
    { value: 'borehole-drillers', label: 'Borehole Drillers' },
    { value: 'brakes-and-clutches', label: 'Brakes and Clutches' },
    { value: 'builders', label: 'Builders' },
    { value: 'building-materials', label: 'Building Materials' },
    { value: 'burglar-bars', label: 'Burglar Bars' },
    { value: 'business-consultants', label: 'Business Consultants' },
    { value: 'cake-shops', label: 'Cake Shops' },
    { value: 'car-aircon-regassing', label: 'Car Aircon Regassing' },
    { value: 'car-alarms', label: 'Car Alarms' },
    { value: 'car-tracking', label: 'Car Tracking' },
    { value: 'car-window-tinting', label: 'Car Window Tinting' },
    { value: 'carpet-cleaning', label: 'Carpet Cleaning' },
    { value: 'carpeting', label: 'Carpeting' },
    { value: 'carports', label: 'Carports' },
    { value: 'carpenters', label: 'Carpenters' },
    { value: 'caterers', label: 'Caterers' },
    { value: 'cctv', label: 'Cctv' },
    { value: 'ceiling-installers', label: 'Ceiling Installers' },
    { value: 'cellphone-repairs', label: 'Cellphone Repairs' },
    { value: 'chiropractors', label: 'Chiropractors' },
    { value: 'cleaning-service', label: 'Cleaning Services' },
    { value: 'company-registrations', label: 'Company Registrations' },
    { value: 'computer-courses', label: 'Computer Courses' },
    { value: 'computer-repairs', label: 'Computer Repairs' },
    { value: 'concrete-slabs', label: 'Concrete Slabs' },
    { value: 'conveyancers', label: 'Conveyancers' },
    { value: 'counsellors', label: 'Counsellors' },
    { value: 'couriers', label: 'Couriers' },
    { value: 'creches', label: 'Creches' },
    { value: 'curtains', label: 'Curtains' },
    { value: 'day-care-centres', label: 'Day Care Centres' },
    { value: 'debt-collection', label: 'Debt Collection' },
    { value: 'debt-counsellors', label: 'Debt Counsellors' },
    { value: 'demolition', label: 'Demolition' },
    { value: 'dentists', label: 'Dentists' },
    { value: 'dermatologists', label: 'Dermatologists' },
    { value: 'dieticians', label: 'Dieticians' },
    { value: 'divorce-lawyers', label: 'Divorce Lawyers' },
    { value: 'djs', label: 'Djs' },
    { value: 'doors', label: 'Doors' },
    { value: 'dressmakers', label: 'Dressmakers' },
    { value: 'driving-schools', label: 'Driving Schools' },
    { value: 'drywalls', label: 'Drywalls' },
    { value: 'dstv-installers', label: 'Dstv Installers' },
    { value: 'electric-fencing', label: 'Electric Fencing' },
    { value: 'electrician', label: 'Electricians' },
    { value: 'embroidery', label: 'Embroidery' },
    { value: 'engine-overhauls', label: 'Engine Overhauls' },
    { value: 'estate-agents', label: 'Estate Agents' },
    { value: 'event-decorations', label: 'Event Decorations' },
    { value: 'event-planners', label: 'Event Planners' },
    { value: 'family-care', label: 'Family Care' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'fashion-accessories', label: 'Fashion Accessories' },
    { value: 'fashion-clothing-stores', label: 'Fashion Clothing Stores' },
    { value: 'fashion-shoes', label: 'Fashion Shoes' },
    { value: 'fencing', label: 'Fencing' },
    { value: 'financial-advisors', label: 'Financial Advisors' },
    { value: 'fire-safety', label: 'Fire Safety' },
    { value: 'firearm-training', label: 'Firearm Training' },
    { value: 'first-aid', label: 'First Aid' },
    { value: 'florists', label: 'Florists' },
    { value: 'flooring', label: 'Flooring' },
    { value: 'forklift-training', label: 'Forklift Training' },
    { value: 'fridge-repairs', label: 'Fridge Repairs' },
    { value: 'fuels', label: 'Fuels' },
    { value: 'garage-doors', label: 'Garage Doors' },
    { value: 'garage-door-motors', label: 'Garage Door Motors' },
    { value: 'gardeners', label: 'Gardeners' },
    { value: 'gas-installers', label: 'Gas Installers' },
    { value: 'gas-suppliers', label: 'Gas Suppliers' },
    { value: 'gates', label: 'Gates' },
    { value: 'gate-motors', label: 'Gate Motors' },
    { value: 'gearboxes', label: 'Gearboxes' },
    { value: 'generators', label: 'Generators' },
    { value: 'glass-works', label: 'Glass Works' },
    { value: 'graphic-designers', label: 'Graphic Designers' },
    { value: 'groomers', label: 'Groomers' },
    { value: 'guttering', label: 'Guttering' },
    { value: 'gynaecologists', label: 'Gynaecologists' },
    { value: 'hair-stylists', label: 'Hair Stylists' },
    { value: 'handyman', label: 'Handymen' },
    { value: 'high-pressure-cleaning', label: 'High Pressure Cleaning' },
    { value: 'holiday-accommodation', label: 'Holiday Accommodation' },
    { value: 'home-improvements', label: 'Home Improvements' },
    { value: 'home-loans', label: 'Home Loans' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'interior-designing', label: 'Interior Designing' },
    { value: 'internet-solutions', label: 'Internet Solutions' },
    { value: 'irrigation', label: 'Irrigation' },
    { value: 'jumping-castle-hire', label: 'Jumping Castle Hire' },
    { value: 'kitchen-renovations', label: 'Kitchen Renovations' },
    { value: 'labour-lawyers', label: 'Labour Lawyers' },
    { value: 'laminate-flooring', label: 'Laminate Flooring' },
    { value: 'landscaping', label: 'Landscaping' },
    { value: 'laptop-repairs', label: 'Laptop Repairs' },
    { value: 'laser-clinics', label: 'Laser Clinics' },
    { value: 'laundry-services', label: 'Laundry Services' },
    { value: 'lawyers', label: 'Lawyers' },
    { value: 'life-coaches', label: 'Life Coaches' },
    { value: 'loans', label: 'Loans' },
    { value: 'locksmiths', label: 'Locksmiths' },
    { value: 'logo-design', label: 'Logo Design' },
    { value: 'make-up-artists', label: 'Make Up Artists' },
    { value: 'marble-and-granite-suppliers', label: 'Marble and Granite Suppliers' },
    { value: 'marriage-counsellors', label: 'Marriage Counsellors' },
    { value: 'massage-therapists', label: 'Massage Therapists' },
    { value: 'mechanics', label: 'Mechanics' },
    { value: 'medical-aid', label: 'Medical Aid' },
    { value: 'movers', label: 'Movers' },
    { value: 'networking', label: 'Networking' },
    { value: 'office-cleaning', label: 'Office Cleaning' },
    { value: 'office-equipment', label: 'Office Equipment' },
    { value: 'palisade-fencing', label: 'Palisade Fencing' },
    { value: 'panel-beaters', label: 'Panel Beaters' },
    { value: 'painter', label: 'Painters' },
    { value: 'party-planners', label: 'Party Planners' },
    { value: 'paving', label: 'Paving' },
    { value: 'personal-protection-equipment', label: 'Personal Protection Equipment' },
    { value: 'personal-trainers', label: 'Personal Trainers' },
    { value: 'pest-control', label: 'Pest Control' },
    { value: 'pet-sitters', label: 'Pet Sitters' },
    { value: 'pets', label: 'Pets' },
    { value: 'photographers', label: 'Photographers' },
    { value: 'physiotherapists', label: 'Physiotherapists' },
    { value: 'plant-hire', label: 'Plant Hire' },
    { value: 'plastering', label: 'Plastering' },
    { value: 'plastic-surgeons', label: 'Plastic Surgeons' },
    { value: 'plumber', label: 'Plumbers' },
    { value: 'pool-cleaning', label: 'Pool Cleaning' },
    { value: 'precast-fencing', label: 'Precast Fencing' },
    { value: 'pre-schools', label: 'Pre-Schools' },
    { value: 'prepaid-electricity-meters', label: 'Prepaid Electricity Meters' },
    { value: 'printing', label: 'Printing' },
    { value: 'private-investigators', label: 'Private Investigators' },
    { value: 'psychologists', label: 'Psychologists' },
    { value: 'recruitment-agencies', label: 'Recruitment Agencies' },
    { value: 'roofer', label: 'Roofer' },
    { value: 'roofing', label: 'Roofing' },
    { value: 'rubble-removal', label: 'Rubble Removal' },
    { value: 'school-transport', label: 'School Transport' },
    { value: 'security', label: 'Security' },
    { value: 'security-gates', label: 'Security Gates' },
    { value: 'security-training', label: 'Security Training' },
    { value: 'shadeports', label: 'Shadeports' },
    { value: 'shower-doors', label: 'Shower Doors' },
    { value: 'shuttle-services', label: 'Shuttle Services' },
    { value: 'signs', label: 'Signs' },
    { value: 'site-clearance', label: 'Site Clearance' },
    { value: 'skip-hire', label: 'Skip Hire' },
    { value: 'solar-geysers', label: 'Solar Geysers' },
    { value: 'solar-systems', label: 'Solar Systems' },
    { value: 'stationery', label: 'Stationery' },
    { value: 'swimming-lessons', label: 'Swimming Lessons' },
    { value: 'swimming-pool-builders', label: 'Swimming Pool Builders' },
    { value: 'swimming-pool-demolition', label: 'Swimming Pool Demolition' },
    { value: 'swimming-pool-supplies', label: 'Swimming Pool Supplies' },
    { value: 'tar-surfacing', label: 'Tar Surfacing' },
    { value: 'taxis', label: 'Taxis' },
    { value: 'team-building', label: 'Team Building' },
    { value: 'thatched-roofing', label: 'Thatched Roofing' },
    { value: 'tent-hire', label: 'Tent Hire' },
    { value: 'tiler', label: 'Tiler' },
    { value: 'tiling', label: 'Tiling' },
    { value: 'toilet-hire', label: 'Toilet Hire' },
    { value: 'tour-operators', label: 'Tour Operators' },
    { value: 'town-planners', label: 'Town Planners' },
    { value: 'tow-bars', label: 'Tow Bars' },
    { value: 'towing', label: 'Towing' },
    { value: 'tracing', label: 'Tracing' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'travel-agents', label: 'Travel Agents' },
    { value: 'tree-felling', label: 'Tree Felling' },
    { value: 'tlb-hire', label: 'TLB Hire' },
    { value: 'tv-installers', label: 'Tv Installers' },
    { value: 'tv-repairs', label: 'Tv Repairs' },
    { value: 'upholsterers', label: 'Upholsterers' },
    { value: 'upholstery-cleaning', label: 'Upholstery Cleaning' },
    { value: 'venues', label: 'Venues' },
    { value: 'videographers', label: 'Videographers' },
    { value: 'waterproofing', label: 'Waterproofing' },
    { value: 'website-designers', label: 'Website Designers' },
    { value: 'wedding-photographers', label: 'Wedding Photographers' },
    { value: 'wedding-venues', label: 'Wedding Venues' },
    { value: 'welders', label: 'Welders' },
    { value: 'wendy-houses', label: 'Wendy Houses' },
    { value: 'window-cleaning', label: 'Window Cleaning' },
    { value: 'window-tinting', label: 'Window Tinting' },
    { value: 'wire-mesh-fencing', label: 'Wire Mesh Fencing' },
    { value: 'wooden-decking', label: 'Wooden Decking' },
].sort((a, b) => a.label.localeCompare(b.label));


const jobDetailsQuestion: Question = {
    id: 'job_details',
    text: 'Describe the work you need done in detail. The more info you provide, the better quotes you’ll get.',
    type: 'textarea',
    placeholder: 'e.g. I need building rubble removed from a residential site in Sandton...'
};

const locationQuestion: Question = {
    id: 'location',
    text: 'Where do you need this service?',
    type: 'location',
};

const urgencyQuestion: Question = {
    id: 'urgency',
    text: 'When do you need this service?',
    type: 'radio',
    options: [
        { value: 'asap', label: 'As soon as possible' },
        { value: 'within_a_week', label: 'Within a week' },
        { value: 'flexible', label: 'Flexible' },
        { value: 'specific_date', label: 'Specific date' },
    ]
};

const budgetQuestion: Question = {
    id: 'budget',
    text: 'What’s your estimated budget?',
    type: 'radio',
    options: [
        { value: 'under_1000', label: 'Under R1,000' },
        { value: '1000_5000', label: 'R1,000–R5,000' },
        { value: '5000_10000', label: 'R5,000–R10,000' },
        { value: 'above_10000', label: 'Above R10,000' },
        { value: 'not_sure', label: 'Not sure yet' },
    ]
};

const commonQuestions: Question[] = [
    jobDetailsQuestion,
    locationQuestion,
    urgencyQuestion,
    budgetQuestion
];

const plantHireQuestions: Question[] = [
  {
    id: 'hire_type',
    text: 'What would you like to hire? (Select all that apply)',
    type: 'checkbox',
    options: [
      { value: 'crane', label: 'Crane' },
      { value: 'forklift', label: 'Forklift' },
      { value: 'grader', label: 'Grader' },
      { value: 'excavator', label: 'Excavator' },
      { value: 'dump_truck', label: 'Dump Truck / Tipper' },
      { value: 'tlb', label: 'TLB' },
      { value: 'lhd_scoop', label: 'LHD Scoop' },
      { value: 'cement_mixer', label: 'Cement Mixer' },
      { value: 'loader', label: 'Loader' },
      { value: 'honeysucker', label: 'Honeysucker Tank' },
      { value: 'payloader', label: 'Payloader' },
      { value: 'other', label: 'Other' },
    ],
  },
  ...commonQuestions,
];

export const serviceQuestionSets: QuestionSet[] = [
  {
      service: 'default', // Fallback question set
      questions: [
        {
          id: 'project_type',
          text: 'What best describes your project?',
          type: 'radio',
          options: [
            { value: 'new_project', label: 'New Project' },
            { value: 'repair', label: 'Repair or Maintenance' },
            { value: 'consultation', label: 'Consultation' },
            { value: 'other', label: 'Other' },
          ],
        },
        ...commonQuestions,
      ],
  },
  {
    service: 'rubble-removal',
    questions: [
      {
        id: 'removal_type',
        text: 'What would you like removed? (Select all that apply)',
        type: 'checkbox',
        options: [
          { value: 'garden_refuse', label: 'Garden Refuse' },
          { value: 'building_rubble', label: 'Building rubble' },
          { value: 'household_refuse', label: 'Household refuse' },
          { value: 'old_furniture', label: 'Old Furniture' },
          { value: 'appliances', label: 'Appliances, electronics or old computers' },
          { value: 'scrap_metal', label: 'Scrap Metal' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'plumber',
    questions: [
      {
        id: 'plumbing_help',
        text: 'What do you need help with?',
        type: 'radio',
        options: [
          { value: 'emergency', label: 'Emergency Plumbing' },
          { value: 'blocked_drain', label: 'Blocked Drain' },
          { value: 'burst_pipe', label: 'Burst or leaking pipe' },
          { value: 'toilet_repair', label: 'Toilet repairs' },
          { value: 'pipe_install_repair', label: 'Plumbing pipe installation or repair' },
          { value: 'tap_sink_shower_install', label: 'Tap, sink, bath, shower or other water fixture installation' },
          { value: 'tap_sink_shower_repair', label: 'Tap, sink, bath, shower or other water fixture repair' },
          { value: 'geyser_repair', label: 'Geyser repair' },
          { value: 'geyser_install', label: 'Geyser installation' },
          { value: 'washing_machine_install', label: 'Washing Machine and Dishwasher Installation' },
          { value: 'coc', label: 'Plumbing certificate of compliance' },
        ],
      },
       {
        id: 'is_emergency_plumber',
        text: 'Is this an emergency?',
        type: 'radio',
        options: [
          { value: 'yes', label: 'Yes, it is' },
          { value: 'no', label: 'No, it is not' },
        ],
      },
      ...commonQuestions
    ],
  },
   {
    service: 'bathroom-renovations',
    questions: [
      {
        id: 'work_type',
        text: 'What kind of work would you like done?',
        type: 'radio',
        options: [
          { value: 'complete_remodel', label: 'Complete bathroom remodel' },
          { value: 'partial_remodel', label: 'Partial bathroom remodel' },
          { value: 'repairs_replacements', label: 'Simple bathroom repairs and replacements' },
          { value: 'new_bathroom', label: 'Addition of new bathroom' },
        ],
      },
      ...commonQuestions
    ],
  },
   {
    service: 'swimming-pool-builders',
    questions: [
      {
        id: 'pool_service_type',
        text: 'What type of service do you require?',
        type: 'radio',
        options: [
          { value: 'repairs', label: 'Repairs to swimming pool' },
          { value: 'new_installation', label: 'New swimming pool installation' },
          { value: 'maintenance', label: 'Cleaning and maintenance of swimming pool' },
          { value: 'heating', label: 'Swimming Pool Heating' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'movers',
    questions: [
      {
        id: 'moving_type',
        text: 'What type of service do you need?',
        type: 'radio',
        options: [
          { value: 'local', label: 'Local Moving (Under 50kms)' },
          { value: 'long_distance', label: 'Long Distance Moving' },
          { value: 'office', label: 'Office Moving' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'skip-hire',
    questions: [
      {
        id: 'waste_type',
        text: 'What type of waste do you need to dispose of?',
        type: 'radio',
        options: [
          { value: 'general', label: 'General & Mixed Waste' },
          { value: 'garden', label: 'Garden Waste' },
          { value: 'rubble', label: 'Building Rubble' },
          { value: 'sand_soil', label: 'Sand, Stone & Soil' },
        ],
      },
      ...commonQuestions,
    ],
  },
   {
    service: 'tree-felling',
    questions: [
      {
        id: 'tree_service_type',
        text: 'What tree services do you need?',
        type: 'radio',
        options: [
          { value: 'felling', label: 'Tree felling (complete removal)' },
          { value: 'stump_removal', label: 'Stump grinding / removal' },
          { value: 'trimming', label: 'Tree trimming / pruning' },
          { value: 'emergency', label: 'Emergency tree service' },
          { value: 'clearing', label: 'Site clearing' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'cleaning-service',
    questions: [
      {
        id: 'cleaning_type',
        text: 'What type of cleaning do you need?',
        type: 'radio',
        options: [
            { value: 'house_cleaning', label: 'House Cleaning' },
            { value: 'office_cleaning', label: 'Office Cleaning' },
            { value: 'window_cleaning', label: 'Window Cleaning' },
            { value: 'blinds_cleaning', label: 'Blinds Cleaning' },
            { value: 'curtain_cleaning', label: 'Curtain Cleaning' },
            { value: 'sanitisation', label: 'Sanitisation' },
        ]
      },
      ...commonQuestions
    ]
  },
  {
    service: 'builders',
    questions: [
      {
        id: 'building_works_type',
        text: 'What kind of building works do you need?',
        type: 'radio',
        options: [
          { value: 'new_construction', label: 'New construction' },
          { value: 'extensions', label: 'Extensions or addition to a building' },
          { value: 'conversion', label: 'Building conversion e.g. double garage to flat' },
          { value: 'renovation', label: 'Renovation & remodelling' },
          { value: 'repair', label: 'Repair & maintenance' },
          { value: 'paving', label: 'Paving and driveways' },
          { value: 'roofing', label: 'Roofing' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'electrician',
    questions: [
      {
        id: 'issue_type',
        text: 'What is the issue?',
        type: 'radio',
        options: [
          { value: 'wiring', label: 'Wiring or Rewiring' },
          { value: 'lighting', label: 'Lighting Installation / Repair' },
          { value: 'installation', label: 'Appliance or Fixture Installation' },
          { value: 'power_failure', label: 'No Power / Tripping' },
          { value: 'coc', label: 'Certificate of Compliance (CoC)' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        id: 'is_emergency',
        text: 'Is this an emergency?',
        type: 'radio',
        options: [
          { value: 'yes', label: 'Yes, it is' },
          { value: 'no', label: 'No, it is not' },
        ],
      },
       {
        id: 'property_type',
        text: 'What is the property type?',
        type: 'radio',
        options: [
          { value: 'home', label: 'Home / Residential' },
          { value: 'office', label: 'Office / Commercial' },
          { value: 'industrial', label: 'Industrial' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'generators',
    questions: [
      {
        id: 'generator_service_type',
        text: 'What type of service do you need?',
        type: 'radio',
        options: [
          { value: 'installation', label: 'New Generator Installation' },
          { value: 'repairs', label: 'Generator Repairs' },
          { value: 'hire', label: 'Generator Hire' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'building-materials',
    questions: [
      {
        id: 'job_details',
        text: 'What building materials do you need?',
        type: 'textarea',
        placeholder: 'Please enter all the products you need and the quantity (e.g., 500 stock bricks, 10 bags of cement, 1 ton of river sand).',
      },
      locationQuestion,
      urgencyQuestion,
      budgetQuestion,
    ],
  },
  {
    service: 'plant-hire',
    questions: plantHireQuestions,
  },
  {
    service: 'tlb-hire',
    questions: [
        {
            id: 'hire_duration',
            text: 'How long do you need the TLB for?',
            type: 'radio',
            options: [
                { value: 'one_day', label: 'One Day' },
                { value: 'few_days', label: '2-5 Days' },
                { value: 'week_plus', label: 'More than a week' },
                { value: 'monthly', label: 'Monthly Rental' },
            ]
        },
        {
            id: 'operator_required',
            text: 'Do you require a certified operator?',
            type: 'radio',
            options: [
                { value: 'yes', label: 'Yes (Wet Hire)' },
                { value: 'no', label: 'No (Dry Hire)' },
            ]
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'handyman',
    questions: [
      {
        id: 'handyman_work_type',
        text: 'What type of work do you need done?',
        type: 'checkbox',
        options: [
          { value: 'installation', label: 'Installation' },
          { value: 'repairs', label: 'Repairs' },
          { value: 'maintenance', label: 'Maintenance' },
          { value: 'assembly', label: 'Assembly' },
          { value: 'painting', label: 'Painting' },
          { value: 'cleaning', label: 'Cleaning' },
          { value: 'plastering', label: 'Plastering' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'gates',
    questions: [
      {
        id: 'gate_service_type',
        text: 'What service do you need for your gate?',
        type: 'radio',
        options: [
          { value: 'installation', label: 'New Gate Installation' },
          { value: 'repair', label: 'Gate Repair' },
          { value: 'motor_installation', label: 'Gate Motor Installation' },
          { value: 'motor_repair', label: 'Gate Motor Repair' },
          { value: 'maintenance', label: 'General Maintenance' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'flooring',
    questions: [
      {
        id: 'flooring_type',
        text: 'What type of flooring service do you need?',
        type: 'radio',
        options: [
          { value: 'tiling', label: 'Tiling' },
          { value: 'laminate', label: 'Laminate Flooring' },
          { value: 'vinyl', label: 'Vinyl Flooring' },
          { value: 'wood', label: 'Hardwood Flooring' },
          { value: 'carpets', label: 'Carpets' },
          { value: 'screeding', label: 'Screeding' },
          { value: 'epoxy', label: 'Epoxy Coating' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'laundry-services',
    questions: [
      {
        id: 'laundry_service_type',
        text: 'What laundry services do you require?',
        type: 'checkbox',
        options: [
          { value: 'wash_fold', label: 'Wash & Fold' },
          { value: 'ironing', label: 'Ironing only' },
          { value: 'dry_cleaning', label: 'Dry Cleaning' },
          { value: 'stain_removal', label: 'Specialized Stain Removal' },
          { value: 'collection_delivery', label: 'Collection & Delivery' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'prepaid-electricity-meters',
    questions: [
      {
        id: 'meter_service',
        text: 'What service do you need for your prepaid meter?',
        type: 'radio',
        options: [
          { value: 'installation', label: 'New Meter Installation' },
          { value: 'repair', label: 'Meter is faulty or not working' },
          { value: 'query', label: 'General query or assistance' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'shower-doors',
    questions: [
      {
        id: 'door_type',
        text: 'What type of shower door are you looking for?',
        type: 'radio',
        options: [
          { value: 'framed', label: 'Framed Shower Door' },
          { value: 'frameless', label: 'Frameless Shower Door' },
          { value: 'sliding', label: 'Sliding Door' },
          { value: 'pivot', label: 'Pivot Door' },
          { value: 'custom', label: 'Custom Design / Not sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'wendy-houses',
    questions: [
      {
        id: 'wendy_house_use',
        text: 'What will be the primary use for the Wendy house?',
        type: 'radio',
        options: [
          { value: 'storage', label: 'Storage or Tool Shed' },
          { value: 'office', label: 'Home Office or Studio' },
          { value: 'living_space', label: 'Living space / Accommodation' },
          { value: 'playhouse', label: 'Kids Playhouse' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'wooden-decking',
    questions: [
      {
        id: 'decking_service',
        text: 'What kind of wooden decking project is this?',
        type: 'radio',
        options: [
          { value: 'new_deck', label: 'New Deck Installation' },
          { value: 'repair', label: 'Deck Repair or Maintenance' },
          { value: 'extension', label: 'Deck Extension' },
          { value: 'restoration', label: 'Sanding and Sealing' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'thatched-roofing',
    questions: [
      {
        id: 'thatch_service',
        text: 'What service do you need for your thatched roof?',
        type: 'radio',
        options: [
          { value: 'new_roof', label: 'New Thatched Roof' },
          { value: 're_thatching', label: 'Complete Re-thatching' },
          { value: 'repair', label: 'Repairs or Patching' },
          { value: 'maintenance', label: 'General Maintenance (Brushing, Combing)' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'window-cleaning',
    questions: [
      {
        id: 'property_type_cleaning',
        text: 'What type of property needs window cleaning?',
        type: 'radio',
        options: [
          { value: 'house', label: 'House (Single Story)' },
          { value: 'house_multi', label: 'House (Multi-Story)' },
          { value: 'apartment', label: 'Apartment / Flat' },
          { value: 'office', label: 'Office / Shopfront' },
          { value: 'high_rise', label: 'High-Rise Building' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'security-gates',
    questions: [
      {
        id: 'security_gate_type',
        text: 'What type of security gate do you need?',
        type: 'radio',
        options: [
          { value: 'swing', label: 'Swing Gate (Single or Double)' },
          { value: 'sliding', label: 'Sliding Gate' },
          { value: 'pedestrian', label: 'Pedestrian Gate' },
          { value: 'expandable', label: 'Expandable / Trellis Gate' },
          { value: 'repair', label: 'Repair an existing gate' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'plastering',
    questions: [
      {
        id: 'plastering_type',
        text: 'What kind of plastering work do you need?',
        type: 'radio',
        options: [
          { value: 'interior', label: 'Interior plastering' },
          { value: 'exterior', label: 'Exterior plastering' },
          { value: 'skimming', label: 'Skimming' },
          { value: 'repair', label: 'Plaster repair (cracks/holes)' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'garage-doors',
    questions: [
      {
        id: 'garage_door_service',
        text: 'What service do you need for your garage door?',
        type: 'radio',
        options: [
          { value: 'installation', label: 'New door installation' },
          { value: 'repair', label: 'Repair existing door' },
          { value: 'motor', label: 'Motor installation or repair' },
          { value: 'maintenance', label: 'General maintenance' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'office-cleaning',
    questions: [
      {
        id: 'office_size',
        text: 'What is the approximate size of your office space?',
        type: 'radio',
        options: [
          { value: 'small', label: 'Small (1-5 employees)' },
          { value: 'medium', label: 'Medium (6-20 employees)' },
          { value: 'large', label: 'Large (21+ employees)' },
          { value: 'retail', label: 'Retail space' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'precast-fencing',
    questions: [
      {
        id: 'precast_service',
        text: 'What do you need done with your precast fencing?',
        type: 'radio',
        options: [
          { value: 'installation', label: 'New installation' },
          { value: 'repair', label: 'Repair broken panels' },
          { value: 'raise', label: 'Raise existing fence height' },
          { value: 'painting', label: 'Painting' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'welders',
    questions: [
      {
        id: 'welding_service',
        text: 'What type of welding service do you need?',
        type: 'radio',
        options: [
          { value: 'repairs', label: 'General metal repairs' },
          { value: 'gate_fence', label: 'Gate or fence welding' },
          { value: 'fabrication', label: 'Custom fabrication (e.g., burglar bars)' },
          { value: 'structural', label: 'Structural welding' },
          { value: 'onsite', label: 'On-site welding service' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'wire-mesh-fencing',
    questions: [
      {
        id: 'wire_mesh_purpose',
        text: 'What is the primary purpose of the wire mesh fence?',
        type: 'radio',
        options: [
          { value: 'security', label: 'Security / Boundary' },
          { value: 'animal', label: 'Animal enclosure' },
          { value: 'garden', label: 'Garden or plot division' },
          { value: 'temporary', label: 'Temporary fencing' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
      service: 'site-clearance',
      questions: [
          {
              id: 'clearance_type',
              text: 'What type of clearance do you need?',
              type: 'radio',
              options: [
                  { value: 'vegetation', label: 'Vegetation & Trees' },
                  { value: 'builders_debris', label: 'Builders Debris' },
                  { value: 'land_leveling', label: 'Land Leveling & Clearing' },
                  { value: 'full_site', label: 'Complete Site Preparation' },
              ]
          },
          ...commonQuestions,
      ]
  },
  {
      service: 'swimming-pool-demolition',
      questions: [
          {
              id: 'pool_material',
              text: 'What is the material of the pool?',
              type: 'radio',
              options: [
                  { value: 'concrete', label: 'Concrete / Gunite' },
                  { value: 'fiberglass', label: 'Fiberglass' },
                  { value: 'vinyl', label: 'Vinyl Liner' },
                  { value: 'not_sure', label: 'I’m not sure' },
              ]
          },
          {
              id: 'demolition_scope',
              text: 'What is the preferred demolition method?',
              type: 'radio',
              options: [
                  { value: 'full_removal', label: 'Full Removal & Backfill' },
                  { value: 'partial_fill', label: 'Partial Demolition (Deck removal & fill)' },
                  { value: 'not_sure', label: 'Need expert advice' },
              ]
          },
          ...commonQuestions,
      ]
  }
];