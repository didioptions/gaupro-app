
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
    { value: 'rubble-removal', label: 'Rubble Removals' },
    { value: 'school-transport', label: 'School Transport' },
    { value: 'security', label: 'Security' },
    { value: 'security-gates', label: 'Security Gates' },
    { value: 'security-training', label: 'Security Training' },
    { value: 'shadeports', label: 'Shadeports' },
    { value: 'shower-doors', label: 'Shower Doors' },
    { value: 'shuttle-services', label: 'Shuttle Services' },
    { value: 'signs', label: 'Signs' },
    { value: 'skip-hire', label: 'Skip Hire' },
    { value: 'solar-geysers', label: 'Solar Geysers' },
    { value: 'solar-systems', label: 'Solar Systems' },
    { value: 'stationery', label: 'Stationery' },
    { value: 'swimming-lessons', label: 'Swimming Lessons' },
    { value: 'swimming-pool-builders', label: 'Swimming Pool Builders' },
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
    { value: 'tlb-hire', label: 'Tlb Hire' },
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
];


const jobDetailsQuestion: Question = {
    id: 'job_details',
    text: 'Describe the work you need done in detail. The more info you provide, the better quotes you’ll get.',
    type: 'textarea',
    placeholder: 'e.g. My geyser is leaking from the top valve. It is a 150L Kwikot geyser...'
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
          { value: 'installation', label: 'Generator Installation' },
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
    questions: plantHireQuestions,
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
      ...commonQuestions
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
      ...commonQuestions
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
      ...commonQuestions
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
      ...commonQuestions
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
      ...commonQuestions
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
      ...commonQuestions
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
      ...commonQuestions
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
      ...commonQuestions
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
    service: 'doors',
    questions: [
      {
        id: 'door_service_type',
        text: 'What kind of door service do you need?',
        type: 'radio',
        options: [
          { value: 'installation', label: 'New door installation' },
          { value: 'repair', label: 'Door repair' },
          { value: 'frame', label: 'Door frame installation/repair' },
          { value: 'hanging', label: 'Hanging doors' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'drywalls',
    questions: [
      {
        id: 'drywall_service_type',
        text: 'What kind of drywall service do you need?',
        type: 'radio',
        options: [
          { value: 'installation', label: 'New drywall installation' },
          { value: 'repair', label: 'Drywall repair (cracks/holes)' },
          { value: 'partition', label: 'Room partitioning' },
          { value: 'skimming', label: 'Skimming' },
          { value: 'soundproofing', label: 'Soundproofing' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'balustrades',
    questions: [
      {
        id: 'balustrade_type',
        text: 'What type of balustrade are you looking for?',
        type: 'radio',
        options: [
          { value: 'stainless_steel', label: 'Stainless Steel' },
          { value: 'glass', label: 'Glass' },
          { value: 'wood', label: 'Wood' },
          { value: 'wrought_iron', label: 'Wrought Iron' },
          { value: 'repair', label: 'Repair existing balustrade' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'burglar-bars',
    questions: [
      {
        id: 'burglar_bars_type',
        text: 'What type of burglar bars do you need?',
        type: 'radio',
        options: [
          { value: 'standard', label: 'Standard bars (interior/exterior)' },
          { value: 'clear', label: 'Clear polycarbonate bars' },
          { value: 'expandable', label: 'Expandable / Trellis style' },
          { value: 'repair', label: 'Repairs to existing bars' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'concrete-slabs',
    questions: [
      {
        id: 'slab_purpose',
        text: 'What is the purpose of the concrete slab?',
        type: 'radio',
        options: [
          { value: 'foundation', label: 'Foundation for a house/building' },
          { value: 'driveway', label: 'Driveway or Paving' },
          { value: 'patio', label: 'Patio or Entertainment area' },
          { value: 'wendy_house', label: 'Floor for a wendy house/shed' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'curtains',
    questions: [
      {
        id: 'curtain_service',
        text: 'What do you need help with?',
        type: 'radio',
        options: [
          { value: 'custom_made', label: 'Custom-made curtains' },
          { value: 'installation', label: 'Curtain installation (hanging)' },
          { value: 'cleaning', label: 'Curtain cleaning' },
          { value: 'repair', label: 'Curtain repairs/alterations' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'high-pressure-cleaning',
    questions: [
      {
        id: 'hpc_surface',
        text: 'What needs to be cleaned?',
        type: 'radio',
        options: [
          { value: 'paving', label: 'Paving / Driveway' },
          { value: 'roof', label: 'Roof' },
          { value: 'walls', label: 'Exterior walls' },
          { value: 'decking', label: 'Decking' },
          { value: 'gutters', label: 'Gutters' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'upholstery-cleaning',
    questions: [
      {
        id: 'upholstery_item',
        text: 'What needs to be cleaned?',
        type: 'checkbox',
        options: [
          { value: 'couch', label: 'Couch/Sofa' },
          { value: 'chair', label: 'Armchair/Dining Chair' },
          { value: 'mattress', label: 'Mattress' },
          { value: 'rug', label: 'Rug' },
          { value: 'car_seats', label: 'Car Seats' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'window-tinting',
    questions: [
      {
        id: 'tint_location',
        text: 'Where do you need the tinting?',
        type: 'radio',
        options: [
          { value: 'vehicle', label: 'Vehicle Windows' },
          { value: 'home', label: 'Home Windows' },
          { value: 'office', label: 'Office/Commercial Windows' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'shadeports',
    questions: [
      {
        id: 'shadeport_service',
        text: 'What service do you need?',
        type: 'radio',
        options: [
          { value: 'new_install', label: 'New Installation' },
          { value: 'repair', label: 'Repair Existing Shadeport' },
          { value: 'replace_net', label: 'Replace Shade Net' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'pest-control',
    questions: [
      {
        id: 'pest_type',
        text: 'What type of pest are you dealing with?',
        type: 'radio',
        options: [
          { value: 'insects', label: 'Crawling Insects (Ants, Cockroaches)' },
          { value: 'rodents', label: 'Rodents (Rats, Mice)' },
          { value: 'termites', label: 'Termites' },
          { value: 'birds', label: 'Birds' },
          { value: 'not_sure', label: 'Not Sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'laminate-flooring',
    questions: [
      {
        id: 'area_size',
        text: 'What is the approximate size of the area (in square meters)?',
        type: 'radio',
        options: [
          { value: 'small', label: 'Small (Under 20sqm)' },
          { value: 'medium', label: 'Medium (20-50sqm)' },
          { value: 'large', label: 'Large (50-100sqm)' },
          { value: 'extra_large', label: 'Extra Large (100sqm+)' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'gate-motors',
    questions: [
      {
        id: 'gate_motor_service',
        text: 'What service do you need for your gate motor?',
        type: 'radio',
        options: [
          { value: 'new_install', label: 'New Motor Installation' },
          { value: 'repair', label: 'Repair Existing Motor' },
          { value: 'maintenance', label: 'General Maintenance' },
          { value: 'not_sure', label: 'I\'m not sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'garage-door-motors',
    questions: [
      {
        id: 'garage_motor_service',
        text: 'What service do you need for your garage door motor?',
        type: 'radio',
        options: [
          { value: 'new_install', label: 'New Motor Installation' },
          { value: 'repair', label: 'Repair Existing Motor' },
          { value: 'maintenance', label: 'General Maintenance' },
          { value: 'not_sure', label: 'I\'m not sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'kitchen-renovations',
    questions: [
      {
        id: 'kitchen_scope',
        text: 'What is the scope of your kitchen renovation?',
        type: 'radio',
        options: [
          { value: 'full', label: 'Full Renovation (Cabinets, Counters, etc.)' },
          { value: 'countertops', label: 'Countertops Only' },
          { value: 'cabinets', label: 'Cabinets Only (New or Refacing)' },
          { value: 'layout_change', label: 'Layout Change / Remodeling' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'locksmiths',
    questions: [
      {
        id: 'locksmith_service',
        text: 'What locksmith service do you need?',
        type: 'radio',
        options: [
          { value: 'lockout_home', label: 'Locked out of my home' },
          { value: 'lockout_car', label: 'Locked out of my car' },
          { value: 'change_locks', label: 'Change/Replace locks' },
          { value: 'key_cutting', label: 'Key cutting' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'paving',
    questions: [
      {
        id: 'paving_area',
        text: 'What area needs paving?',
        type: 'radio',
        options: [
          { value: 'driveway', label: 'Driveway' },
          { value: 'patio', label: 'Patio/Entertainment Area' },
          { value: 'walkway', label: 'Walkway/Pathway' },
          { value: 'pool_surround', label: 'Pool Surround' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'pool-cleaning',
    questions: [
      {
        id: 'pool_cleaning_service',
        text: 'What kind of pool service do you need?',
        type: 'radio',
        options: [
          { value: 'regular', label: 'Regular Weekly Service' },
          { value: 'once_off', label: 'Once-off Clean (e.g., green pool)' },
          { value: 'equipment_repair', label: 'Equipment Repair (Pump, Filter)' },
          { value: 'acid_wash', label: 'Acid Wash' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'tiling',
    questions: [
      {
        id: 'tiling_area',
        text: 'Which area needs tiling?',
        type: 'radio',
        options: [
          { value: 'floor', label: 'Floor' },
          { value: 'wall', label: 'Wall (e.g., bathroom, kitchen splashback)' },
          { value: 'indoor', label: 'Indoor' },
          { value: 'outdoor', label: 'Outdoor' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'waterproofing',
    questions: [
      {
        id: 'waterproofing_area',
        text: 'What area needs waterproofing?',
        type: 'radio',
        options: [
          { value: 'roof', label: 'Roof (Flat or Tiled)' },
          { value: 'balcony', label: 'Balcony' },
          { value: 'basement', label: 'Basement/Foundation' },
          { value: 'shower', label: 'Shower' },
          { value: 'not_sure', label: 'I\'m not sure where the leak is' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
      service: 'aluminium-doors-and-windows',
      questions: [
          {
              id: 'aluminium_service',
              text: 'What do you need?',
              type: 'radio',
              options: [
                  { value: 'new_windows', label: 'New Windows' },
                  { value: 'new_doors', label: 'New Doors (Sliding, Folding, etc.)' },
                  { value: 'repair', label: 'Repair existing windows/doors' },
                  { value: 'replacement', label: 'Replace old windows/doors' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'blinds',
      questions: [
          {
              id: 'blinds_type',
              text: 'What type of blinds are you interested in?',
              type: 'radio',
              options: [
                  { value: 'venetian', label: 'Venetian (Aluminium or Wood)' },
                  { value: 'roller', label: 'Roller Blinds' },
                  { value: 'vertical', label: 'Vertical Blinds' },
                  { value: 'roman', label: 'Roman Blinds' },
                  { value: 'not_sure', label: 'Not sure / Need advice' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'carpeting',
      questions: [
          {
              id: 'carpeting_area',
              text: 'Which area needs carpeting?',
              type: 'radio',
              options: [
                  { value: 'bedroom', label: 'Bedroom(s)' },
                  { value: 'living_area', label: 'Living Area' },
                  { value: 'office', label: 'Office/Commercial Space' },
                  { value: 'full_house', label: 'Entire House' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'gas-installers',
      questions: [
          {
              id: 'gas_appliance',
              text: 'What do you need installed?',
              type: 'radio',
              options: [
                  { value: 'hob', label: 'Gas Hob/Stove' },
                  { value: 'geyser', label: 'Gas Geyser' },
                  { value: 'fireplace', label: 'Gas Fireplace' },
                  { value: 'coc', label: 'Certificate of Compliance (CoC) inspection' },
                  { value: 'repair', label: 'Repair/Service existing installation' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'interior-designing',
      questions: [
          {
              id: 'design_scope',
              text: 'What is the scope of your project?',
              type: 'radio',
              options: [
                  { value: 'single_room', label: 'Single Room Design' },
                  { value: 'full_home', label: 'Full Home Interior Design' },
                  { value: 'consultation', label: 'Design Consultation' },
                  { value: 'commercial', label: 'Commercial Space (Office, Retail)' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'palisade-fencing',
      questions: [
          {
              id: 'palisade_service',
              text: 'What do you need for your palisade fencing?',
              type: 'radio',
              options: [
                  { value: 'new_install', label: 'New Installation' },
                  { value: 'repair', label: 'Repair existing fence' },
                  { value: 'painting', label: 'Painting/Maintenance' },
                  { value: 'gate', label: 'Matching Gate' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'roofing',
      questions: [
          {
              id: 'roofing_service',
              text: 'What is the main issue with your roof?',
              type: 'radio',
              options: [
                  { value: 'leak_repair', label: 'Leak Repair' },
                  { value: 'new_roof', label: 'New Roof Installation / Replacement' },
                  { value: 'waterproofing', label: 'Waterproofing' },
                  { value: 'maintenance', label: 'General Maintenance/Inspection' },
                  { value: 'painting', label: 'Roof Painting' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'solar-geysers',
      questions: [
          {
              id: 'geyser_service',
              text: 'What service do you need for a solar geyser?',
              type: 'radio',
              options: [
                  { value: 'new_install', label: 'New Installation' },
                  { value: 'repair', label: 'Repair existing system' },
                  { value: 'service', label: 'General Service/Maintenance' },
                  { value: 'quote_advice', label: 'Just getting quotes/advice' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'upholsterers',
      questions: [
          {
              id: 'upholstery_item',
              text: 'What item needs upholstery work?',
              type: 'radio',
              options: [
                  { value: 'couch', label: 'Couch/Sofa' },
                  { value: 'chair', label: 'Armchair/Dining Chairs' },
                  { value: 'headboard', label: 'Headboard' },
                  { value: 'outdoor', label: 'Outdoor Furniture Cushions' },
                  { value: 'other', label: 'Other' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'tar-surfacing',
      questions: [
          {
              id: 'tar_area',
              text: 'What area needs tar surfacing?',
              type: 'radio',
              options: [
                  { value: 'driveway', label: 'Driveway' },
                  { value: 'parking_lot', label: 'Parking Lot' },
                  { value: 'road', label: 'Small Road/Access Way' },
                  { value: 'repair', label: 'Pothole/Crack Repair' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'painter',
      questions: [
          {
              id: 'paint_area',
              text: 'What needs painting?',
              type: 'radio',
              options: [
                  { value: 'interior', label: 'Interior' },
                  { value: 'exterior', label: 'Exterior' },
                  { value: 'both', label: 'Interior and Exterior' },
                  { value: 'roof', label: 'Roof' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'home-improvements',
      questions: [
          {
              id: 'improvement_type',
              text: 'What type of home improvement are you planning?',
              type: 'radio',
              options: [
                  { value: 'kitchen', label: 'Kitchen Renovation' },
                  { value: 'bathroom', label: 'Bathroom Renovation' },
                  { value: 'extension', label: 'Building Extension' },
                  { value: 'general', label: 'General Repairs and Maintenance' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'glass-works',
      questions: [
          {
              id: 'glass_service',
              text: 'What glass service do you need?',
              type: 'radio',
              options: [
                  { value: 'window_replace', label: 'Window pane replacement' },
                  { value: 'shower_door', label: 'Frameless Shower Door' },
                  { value: 'table_top', label: 'Custom Glass Table Top' },
                  { value: 'mirror', label: 'Custom Mirror' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'gardeners',
      questions: [
          {
              id: 'gardening_service',
              text: 'What gardening service do you need?',
              type: 'radio',
              options: [
                  { value: 'once_off', label: 'Once-off garden clean-up' },
                  { value: 'regular', label: 'Regular maintenance (weekly/bi-weekly)' },
                  { value: 'landscaping', label: 'Landscaping design/installation' },
                  { value: 'tree_felling', label: 'Tree felling/pruning' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'fencing',
      questions: [
          {
              id: 'fencing_type',
              text: 'What type of fencing do you need?',
              type: 'radio',
              options: [
                  { value: 'electric', label: 'Electric Fence' },
                  { value: 'palisade', label: 'Palisade (Steel)' },
                  { value: 'wire', label: 'Wire Mesh' },
                  { value: 'precast', label: 'Precast Concrete Wall' },
                  { value: 'repair', label: 'Repair existing fence' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'ceiling-installers',
      questions: [
          {
              id: 'ceiling_service',
              text: 'What do you need?',
              type: 'radio',
              options: [
                  { value: 'new_ceiling', label: 'New ceiling installation' },
                  { value: 'repair', label: 'Ceiling repair (e.g., water damage)' },
                  { value: 'cornice', label: 'Cornice installation/repair' },
                  { value: 'suspended', label: 'Suspended ceiling (for offices)' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'carpentry',
      questions: [
          {
              id: 'carpentry_work',
              text: 'What carpentry work do you need?',
              type: 'radio',
              options: [
                  { value: 'cupboards', label: 'Built-in Cupboards' },
                  { value: 'kitchen', label: 'Kitchen Cabinets' },
                  { value: 'decking', label: 'Wooden Decking' },
                  { value: 'doors_windows', label: 'Hanging Doors / Window Frames' },
                  { value: 'custom', label: 'Custom Furniture' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'air-conditioning',
      questions: [
          {
              id: 'ac_service',
              text: 'What service do you need for your air conditioner?',
              type: 'radio',
              options: [
                  { value: 'installation', label: 'New unit installation' },
                  { value: 'repair', label: 'Repair (not cooling, leaking, etc.)' },
                  { value: 'service', label: 'General service/maintenance' },
                  { value: 'regas', label: 'Regassing' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'awnings',
      questions: [
          {
              id: 'awning_type',
              text: 'What type of awning are you looking for?',
              type: 'radio',
              options: [
                  { value: 'retractable', label: 'Retractable Awning' },
                  { value: 'fixed', label: 'Fixed Awning' },
                  { value: 'shade_sail', label: 'Shade Sail' },
                  { value: 'repair', label: 'Repair existing awning' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'carports',
      questions: [
          {
              id: 'carport_type',
              text: 'What type of carport do you need?',
              type: 'radio',
              options: [
                  { value: 'shade_net', label: 'Shade Net Carport' },
                  { value: 'steel_ibr', label: 'Steel (IBR) Carport' },
                  { value: 'repair', label: 'Repair existing carport' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
      service: 'carpet-cleaning',
      questions: [
          {
              id: 'carpet_cleaning_area',
              text: 'What needs to be cleaned?',
              type: 'checkbox',
              options: [
                  { value: 'loose_rugs', label: 'Loose Rugs' },
                  { value: 'fitted_carpets', label: 'Fitted Carpets' },
                  { value: 'upholstery', label: 'Upholstery (Couches, Chairs)' },
                  { value: 'mattress', label: 'Mattress' },
              ],
          },
          ...commonQuestions,
      ],
  },
  {
    service: 'djs',
    questions: [
        { id: 'event_type', text: 'What type of event is it?', type: 'radio', options: [{ value: 'wedding', label: 'Wedding' }, { value: 'corporate', label: 'Corporate Event' }, { value: 'party', label: 'Birthday Party / Private Function' }, { value: 'club', label: 'Club / Bar' }] },
        ...commonQuestions,
    ],
},
{
    service: 'event-decorations',
    questions: [
        { id: 'event_type', text: 'What type of event are you decorating?', type: 'radio', options: [{ value: 'wedding', label: 'Wedding' }, { value: 'party', label: 'Party' }, { value: 'corporate', label: 'Corporate Event' }] },
        ...commonQuestions,
    ],
},
{
    service: 'event-planners',
    questions: [
        { id: 'event_type', text: 'What type of event are you planning?', type: 'radio', options: [{ value: 'wedding', label: 'Wedding' }, { value: 'corporate', label: 'Corporate' }, { value: 'party', label: 'Private Party' }] },
        ...commonQuestions,
    ],
},
{
    service: 'florists',
    questions: [
        { id: 'occasion', text: 'What is the occasion?', type: 'radio', options: [{ value: 'wedding', label: 'Wedding' }, { value: 'event', label: 'Event' }, { value: 'gift', label: 'Gift / Bouquet Delivery' }] },
        ...commonQuestions,
    ],
},
{
    service: 'party-planners',
    questions: [
        { id: 'party_type', text: 'What type of party is it?', type: 'radio', options: [{ value: 'birthday', label: 'Birthday' }, { value: 'anniversary', label: 'Anniversary' }, { value: 'kids_party', label: 'Kids Party' }] },
        ...commonQuestions,
    ],
},
{
    service: 'photographers',
    questions: [
        { id: 'photo_type', text: 'What type of photography do you need?', type: 'radio', options: [{ value: 'event', label: 'Event' }, { value: 'portrait', label: 'Portrait / Headshots' }, { value: 'product', label: 'Product' }, { value: 'family', label: 'Family Shoot' }] },
        ...commonQuestions,
    ],
},
{
    service: 'tent-hire',
    questions: [
        { id: 'tent_type', text: 'What type of tent do you need?', type: 'radio', options: [{ value: 'marquee', label: 'Marquee Tent' }, { value: 'stretch', label: 'Stretch Tent' }, { value: 'pagoda', label: 'Pagoda / Frame Tent' }] },
        ...commonQuestions,
    ],
},
{
    service: 'toilet-hire',
    questions: [
        { id: 'num_toilets', text: 'How many portable toilets do you need?', type: 'radio', options: [{ value: '1_5', label: '1-5' }, { value: '6_10', label: '6-10' }, { value: '11_plus', label: '11+' }] },
        ...commonQuestions,
    ],
},
{
    service: 'videographers',
    questions: [
        { id: 'video_type', text: 'What type of videography do you need?', type: 'radio', options: [{ value: 'wedding', label: 'Wedding' }, { value: 'corporate', label: 'Corporate Video' }, { value: 'event', label: 'Event Coverage' }] },
        ...commonQuestions,
    ],
},
{
    service: 'wedding-photographers',
    questions: [
        { id: 'wedding_coverage', text: 'How many hours of coverage do you need?', type: 'radio', options: [{ value: 'half_day', label: 'Half Day (4-6 hours)' }, { value: 'full_day', label: 'Full Day (8-10 hours)' }, { value: 'custom', label: 'Custom Package' }] },
        ...commonQuestions,
    ],
},
{
    service: 'accounting',
    questions: [
        { id: 'accounting_service', text: 'What accounting service do you need?', type: 'radio', options: [{ value: 'bookkeeping', label: 'Bookkeeping' }, { value: 'tax_returns', label: 'Tax Returns (Personal or Business)' }, { value: 'financial_statements', label: 'Financial Statements' }] },
        ...commonQuestions,
    ],
},
{
    service: 'auditors',
    questions: [
        { id: 'audit_type', text: 'What type of audit do you need?', type: 'radio', options: [{ value: 'internal', label: 'Internal Audit' }, { value: 'external', label: 'External/Statutory Audit' }, { value: 'forensic', label: 'Forensic Audit' }] },
        ...commonQuestions,
    ],
},
{
    service: 'business-consultants',
    questions: [
        { id: 'consulting_area', text: 'What area of your business needs consulting?', type: 'radio', options: [{ value: 'strategy', label: 'Business Strategy' }, { value: 'marketing', label: 'Marketing' }, { value: 'operations', label: 'Operations' }] },
        ...commonQuestions,
    ],
},
{
    service: 'company-registrations',
    questions: [
        { id: 'registration_type', text: 'What do you need?', type: 'radio', options: [{ value: 'new_pty', label: 'New Company (Pty) Ltd Registration' }, { value: 'amendments', label: 'Amendments to existing company' }] },
        ...commonQuestions,
    ],
},
{
    service: 'debt-collection',
    questions: [
        { id: 'debt_type', text: 'What type of debt needs to be collected?', type: 'radio', options: [{ value: 'consumer', label: 'Consumer Debt' }, { value: 'commercial', label: 'Commercial/Business Debt' }] },
        ...commonQuestions,
    ],
},
{
    service: 'debt-counsellors',
    questions: [
        { id: 'debt_help', text: 'What do you need help with?', type: 'radio', options: [{ value: 'assessment', label: 'Debt Assessment' }, { value: 'debt_review', label: 'Start Debt Review' }] },
        ...commonQuestions,
    ],
},
{
    service: 'financial-advisors',
    questions: [
        { id: 'advice_type', text: 'What do you need financial advice on?', type: 'radio', options: [{ value: 'investment', label: 'Investment Planning' }, { value: 'retirement', label: 'Retirement Planning' }, { value: 'estate', label: 'Estate Planning' }] },
        ...commonQuestions,
    ],
},
{
    service: 'insurance',
    questions: [
        { id: 'insurance_type', text: 'What type of insurance are you looking for?', type: 'radio', options: [{ value: 'life', label: 'Life Insurance' }, { value: 'car', label: 'Car Insurance' }, { value: 'home', label: 'Home/Building Insurance' }, { value: 'business', label: 'Business Insurance' }] },
        ...commonQuestions,
    ],
},
{
    service: 'loans',
    questions: [
        { id: 'loan_type', text: 'What type of loan are you looking for?', type: 'radio', options: [{ value: 'personal', label: 'Personal Loan' }, { value: 'business', label: 'Business Loan' }, { value: 'home', label: 'Home Loan / Bond' }] },
        ...commonQuestions,
    ],
},
{
    service: 'medical-aid',
    questions: [
        { id: 'medical_aid_need', text: 'What do you need?', type: 'radio', options: [{ value: 'new_plan', label: 'Get quotes for a new plan' }, { value: 'review_plan', label: 'Review my existing plan' }] },
        ...commonQuestions,
    ],
},
{
    service: 'recruitment-agencies',
    questions: [
        { id: 'recruitment_need', text: 'Are you looking to hire or find a job?', type: 'radio', options: [{ value: 'hiring', label: 'I am hiring for my company' }, { value: 'job_seeker', label: 'I am looking for a job' }] },
        ...commonQuestions,
    ],
},
{
    service: 'graphic-designers',
    questions: [
        { id: 'design_need', text: 'What do you need designed?', type: 'radio', options: [{ value: 'logo', label: 'Logo & Brand Identity' }, { value: 'brochure', label: 'Brochure / Flyer' }, { value: 'social_media', label: 'Social Media Graphics' }] },
        ...commonQuestions,
    ],
},
{
    service: 'logo-design',
    questions: [
        { id: 'business_type', text: 'What type of business do you have?', type: 'radio', options: [{ value: 'startup', label: 'New Startup' }, { value: 'existing', label: 'Existing Business (Rebrand)' }, { value: 'personal', label: 'Personal Brand' }] },
        ...commonQuestions,
    ],
},
{
    service: 'printing',
    questions: [
        { id: 'print_item', text: 'What do you need printed?', type: 'radio', options: [{ value: 'business_cards', label: 'Business Cards' }, { value: 'flyers', label: 'Flyers / Brochures' }, { value: 'banners', label: 'Banners / Posters' }] },
        ...commonQuestions,
    ],
},
{
    service: 'signs',
    questions: [
        { id: 'sign_type', text: 'What type of sign do you need?', type: 'radio', options: [{ value: 'shopfront', label: 'Shopfront Signage' }, { value: 'vehicle', label: 'Vehicle Branding / Wraps' }, { value: 'illuminated', label: 'Illuminated / Lightbox Sign' }] },
        ...commonQuestions,
    ],
},
{
    service: 'website-designers',
    questions: [
        { id: 'website_type', text: 'What type of website do you need?', type: 'radio', options: [{ value: 'brochure', label: 'Brochure Website (Info only)' }, { value: 'ecommerce', label: 'E-commerce (Online Store)' }, { value: 'custom', label: 'Custom Web Application' }] },
        ...commonQuestions,
    ],
},
{
    service: 'beauty-salons',
    questions: [
        { id: 'beauty_service', text: 'What treatment are you looking for?', type: 'radio', options: [{ value: 'facial', label: 'Facial' }, { value: 'nails', label: 'Manicure / Pedicure' }, { value: 'waxing', label: 'Waxing' }, { value: 'massage', label: 'Massage' }] },
        ...commonQuestions,
    ],
},
{
    service: 'chiropractors',
    questions: [
        { id: 'chiro_issue', text: 'What is your main concern?', type: 'radio', options: [{ value: 'back_pain', label: 'Back Pain' }, { value: 'neck_pain', label: 'Neck Pain' }, { value: 'headaches', label: 'Headaches' }, { value: 'sports_injury', label: 'Sports Injury' }] },
        ...commonQuestions,
    ],
},
{
    service: 'counsellors',
    questions: [
        { id: 'counselling_type', text: 'What type of counselling are you looking for?', type: 'radio', options: [{ value: 'individual', label: 'Individual' }, { value: 'couples', label: 'Couples / Marriage' }, { value: 'family', label: 'Family' }, { value: 'trauma', label: 'Trauma' }] },
        ...commonQuestions,
    ],
},
{
    service: 'dentists',
    questions: [
        { id: 'dental_service', text: 'What dental service do you need?', type: 'radio', options: [{ value: 'checkup', label: 'Check-up and Cleaning' }, { value: 'filling', label: 'Filling' }, { value: 'whitening', label: 'Teeth Whitening' }, { value: 'emergency', label: 'Emergency (Pain, broken tooth)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'dermatologists',
    questions: [
        { id: 'derma_issue', text: 'What is your primary skin concern?', type: 'radio', options: [{ value: 'acne', label: 'Acne' }, { value: 'eczema', label: 'Eczema / Rashes' }, { value: 'mole_check', label: 'Mole Screening' }, { value: 'cosmetic', label: 'Cosmetic (Anti-aging, Scars)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'dieticians',
    questions: [
        { id: 'diet_goal', text: 'What is your primary goal?', type: 'radio', options: [{ value: 'weight_loss', label: 'Weight Loss' }, { value: 'sports', label: 'Sports Nutrition' }, { value: 'medical', label: 'Medical Condition Management (e.g., Diabetes)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'gynaecologists',
    questions: [
        { id: 'gynae_service', text: 'What type of consultation do you need?', type: 'radio', options: [{ value: 'annual', label: 'Annual Check-up / Pap Smear' }, { value: 'pregnancy', label: 'Pregnancy / Maternity Care' }, { value: 'problem', label: 'Specific Problem / Concern' }] },
        ...commonQuestions,
    ],
},
{
    service: 'hair-stylists',
    questions: [
        { id: 'hair_service', text: 'What service are you looking for?', type: 'radio', options: [{ value: 'cut', label: 'Cut and Blow-dry' }, { value: 'colour', label: 'Colour / Highlights' }, { value: 'treatment', label: 'Treatment' }, { value: 'styling', label: 'Event Styling / Up-do' }] },
        ...commonQuestions,
    ],
},
{
    service: 'laser-clinics',
    questions: [
        { id: 'laser_service', text: 'What treatment are you interested in?', type: 'radio', options: [{ value: 'hair_removal', label: 'Laser Hair Removal' }, { value: 'skin_rejuvenation', label: 'Skin Rejuvenation' }, { value: 'tattoo_removal', label: 'Tattoo Removal' }] },
        ...commonQuestions,
    ],
},
{
    service: 'make-up-artists',
    questions: [
        { id: 'makeup_occasion', text: 'What is the occasion?', type: 'radio', options: [{ value: 'wedding', label: 'Wedding' }, { value: 'matric_dance', label: 'Matric Dance' }, { value: 'photoshoot', label: 'Photoshoot' }, { value: 'special_event', label: 'Special Event' }] },
        ...commonQuestions,
    ],
},
{
    service: 'marriage-counsellors',
    questions: [
        { id: 'counselling_focus', text: 'What is the main area you want to focus on?', type: 'radio', options: [{ value: 'communication', label: 'Improving Communication' }, { value: 'conflict', label: 'Conflict Resolution' }, { value: 'pre_marital', label: 'Pre-marital Counselling' }] },
        ...commonQuestions,
    ],
},
{
    service: 'massage-therapists',
    questions: [
        { id: 'massage_type', text: 'What type of massage are you looking for?', type: 'radio', options: [{ value: 'swedish', label: 'Swedish / Relaxation' }, { value: 'deep_tissue', label: 'Deep Tissue' }, { value: 'sports', label: 'Sports Massage' }] },
        ...commonQuestions,
    ],
},
{
    service: 'personal-trainers',
    questions: [
        { id: 'fitness_goal', text: 'What is your primary fitness goal?', type: 'radio', options: [{ value: 'weight_loss', label: 'Weight Loss' }, { value: 'muscle_gain', label: 'Build Muscle' }, { value: 'general_fitness', label: 'General Fitness & Toning' }] },
        ...commonQuestions,
    ],
},
{
    service: 'physiotherapists',
    questions: [
        { id: 'physio_issue', text: 'What area of the body is affected?', type: 'radio', options: [{ value: 'back_neck', label: 'Back / Neck' }, { value: 'shoulder_arm', label: 'Shoulder / Arm' }, { value: 'hip_leg', label: 'Hip / Leg' }, { value: 'sports_injury', label: 'Sports Injury' }] },
        ...commonQuestions,
    ],
},
{
    service: 'plastic-surgeons',
    questions: [
        { id: 'procedure_type', text: 'What type of procedure are you interested in?', type: 'radio', options: [{ value: 'breast', label: 'Breast (Augmentation, Reduction, Lift)' }, { value: 'body', label: 'Body (Tummy Tuck, Liposuction)' }, { value: 'face', label: 'Face (Facelift, Rhinoplasty)' }, { value: 'non_surgical', label: 'Non-surgical (Botox, Fillers)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'psychologists',
    questions: [
        { id: 'psychology_reason', text: 'What is the main reason for seeking therapy?', type: 'radio', options: [{ value: 'anxiety', label: 'Anxiety / Stress' }, { value: 'depression', label: 'Depression / Low Mood' }, { value: 'relationship', label: 'Relationship Issues' }, { value: 'assessment', label: 'Psycho-educational Assessment' }] },
        ...commonQuestions,
    ],
},
{
    service: 'access-control',
    questions: [
        { id: 'access_system', text: 'What type of access control system do you need?', type: 'radio', options: [{ value: 'biometric', label: 'Biometric (Fingerprint)' }, { value: 'card_tag', label: 'Card / Tag System' }, { value: 'intercom', label: 'Intercom System' }] },
        ...commonQuestions,
    ],
},
{
    service: 'alarm-systems',
    questions: [
        { id: 'alarm_service', text: 'What do you need?', type: 'radio', options: [{ value: 'new_install', label: 'New Alarm System Installation' }, { value: 'repair_service', label: 'Repair / Service Existing System' }, { value: 'upgrade', label: 'Upgrade Existing System' }] },
        ...commonQuestions,
    ],
},
{
    service: 'armed-response',
    questions: [
        { id: 'response_need', text: 'What do you need?', type: 'radio', options: [{ value: 'new_contract', label: 'New Armed Response Contract' }, { value: 'get_quotes', label: 'Get competitive quotes' }] },
        ...commonQuestions,
    ],
},
{
    service: 'car-alarms',
    questions: [
        { id: 'car_alarm_service', text: 'What service do you need?', type: 'radio', options: [{ value: 'new_install', label: 'New Car Alarm Installation' }, { value: 'repair', label: 'Repair Existing Alarm' }] },
        ...commonQuestions,
    ],
},
{
    service: 'car-tracking',
    questions: [
        { id: 'tracking_purpose', text: 'What is the main purpose for the tracker?', type: 'radio', options: [{ value: 'theft_recovery', label: 'Stolen Vehicle Recovery' }, { value: 'fleet_management', label: 'Fleet Management' }] },
        ...commonQuestions,
    ],
},
{
    service: 'fire-safety',
    questions: [
        { id: 'fire_service', text: 'What fire safety service do you need?', type: 'radio', options: [{ value: 'extinguisher', label: 'Fire Extinguisher Servicing / Supply' }, { value: 'detection', label: 'Fire Detection System' }, { value: 'coc', label: 'Compliance Certificate' }] },
        ...commonQuestions,
    ],
},
{
    service: 'private-investigators',
    questions: [
        { id: 'investigation_type', text: 'What type of investigation do you need?', type: 'radio', options: [{ value: 'matrimonial', label: 'Matrimonial / Infidelity' }, { value: 'corporate', label: 'Corporate / Employee' }, { value: 'missing_person', label: 'Missing Person' }] },
        ...commonQuestions,
    ],
},
{
    service: 'security',
    questions: [
        { id: 'security_need', text: 'What type of security service do you need?', type: 'radio', options: [{ value: 'guarding', label: 'Guarding Services (Residential/Commercial)' }, { value: 'event', label: 'Event Security' }, { value: 'bodyguard', label: 'Close Protection / Bodyguard' }] },
        ...commonQuestions,
    ],
},
{
    service: 'tracing',
    questions: [
        { id: 'trace_subject', text: 'Who or what needs to be traced?', type: 'radio', options: [{ value: 'person', label: 'Person' }, { value: 'asset', label: 'Asset (e.g., Vehicle)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'auto-electricians',
    questions: [
        { id: 'auto_elec_issue', text: 'What is the issue?', type: 'radio', options: [{ value: 'starting', label: 'Car not starting' }, { value: 'battery', label: 'Battery draining' }, { value: 'wiring', label: 'Wiring problem' }, { value: 'lights', label: 'Lights not working' }] },
        ...commonQuestions,
    ],
},
{
    service: 'auto-glass',
    questions: [
        { id: 'glass_type', text: 'What needs to be replaced?', type: 'radio', options: [{ value: 'windscreen', label: 'Windscreen' }, { value: 'side_window', label: 'Side Window' }, { value: 'rear_window', label: 'Rear Window' }] },
        ...commonQuestions,
    ],
},
{
    service: 'batteries',
    questions: [
        { id: 'battery_for', text: 'What do you need a battery for?', type: 'radio', options: [{ value: 'car', label: 'Car' }, { value: 'inverter', label: 'Inverter / Backup Power' }, { value: 'gate_motor', label: 'Gate Motor' }] },
        ...commonQuestions,
    ],
},
{
    service: 'brakes-and-clutches',
    questions: [
        { id: 'brake_clutch_service', text: 'What service do you need?', type: 'radio', options: [{ value: 'brakes', label: 'Brake Replacement / Skimming' }, { value: 'clutch', label: 'Clutch Replacement / Repair' }] },
        ...commonQuestions,
    ],
},
{
    service: 'car-aircon-regassing',
    questions: [
        { id: 'car_ac_issue', text: 'What is the problem with your car\'s aircon?', type: 'radio', options: [{ value: 'not_cooling', label: 'Not cooling' }, { value: 'service', label: 'Regular Service / Regas' }] },
        ...commonQuestions,
    ],
},
{
    service: 'engine-overhauls',
    questions: [
        { id: 'engine_issue', text: 'What is the reason for the overhaul?', type: 'radio', options: [{ value: 'high_mileage', label: 'High Mileage / Preventative' }, { value: 'damage', label: 'Engine Damage (e.g., overheating)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'fuels',
    questions: [
        { id: 'fuel_type', text: 'What type of fuel do you need?', type: 'radio', options: [{ value: 'diesel', label: 'Diesel' }, { value: 'petrol', label: 'Petrol' }, { value: 'paraffin', label: 'Paraffin' }] },
        ...commonQuestions,
    ],
},
{
    service: 'gearboxes',
    questions: [
        { id: 'gearbox_issue', text: 'What is the gearbox issue?', type: 'radio', options: [{ value: 'repair', label: 'Repair' }, { value: 'replacement', label: 'Replacement' }] },
        ...commonQuestions,
    ],
},
{
    service: 'mechanics',
    questions: [
        { id: 'mechanic_service', text: 'What service do you need?', type: 'radio', options: [{ value: 'major_service', label: 'Major Service' }, { value: 'minor_service', label: 'Minor Service' }, { value: 'repair', label: 'Specific Repair' }] },
        ...commonQuestions,
    ],
},
{
    service: 'panel-beaters',
    questions: [
        { id: 'damage_type', text: 'What is the extent of the damage?', type: 'radio', options: [{ value: 'minor', label: 'Minor (Scratches, Dents)' }, { value: 'major', label: 'Major (Collision Damage)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'tow-bars',
    questions: [
        { id: 'vehicle_type', text: 'What is your vehicle type?', type: 'radio', options: [{ value: 'sedan', label: 'Sedan' }, { value: 'suv', label: 'SUV' }, { value: 'bakkie', label: 'Bakkie' }] },
        ...commonQuestions,
    ],
},
{
    service: 'towing',
    questions: [
        { id: 'towing_reason', text: 'Why do you need towing?', type: 'radio', options: [{ value: 'breakdown', label: 'Breakdown' }, { value: 'accident', label: 'Accident' }] },
        ...commonQuestions,
    ],
},
{
    service: 'computer-courses',
    questions: [
        { id: 'course_level', text: 'What is your current skill level?', type: 'radio', options: [{ value: 'beginner', label: 'Beginner' }, { value: 'intermediate', label: 'Intermediate' }, { value: 'advanced', label: 'Advanced' }] },
        ...commonQuestions,
    ],
},
{
    service: 'driving-schools',
    questions: [
        { id: 'license_code', text: 'What license code are you applying for?', type: 'radio', options: [{ value: 'code_8', label: 'Code 8 (B)' }, { value: 'code_10', label: 'Code 10 (C1)' }, { value: 'code_14', label: 'Code 14 (EC)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'firearm-training',
    questions: [
        { id: 'training_purpose', text: 'What is the purpose of the training?', type: 'radio', options: [{ value: 'competency', label: 'SAPS Competency Certificate' }, { value: 'advanced', label: 'Advanced / Tactical' }] },
        ...commonQuestions,
    ],
},
{
    service: 'first-aid',
    questions: [
        { id: 'level', text: 'What level of First Aid training do you need?', type: 'radio', options: [{ value: 'level_1', label: 'Level 1' }, { value: 'level_2_3', label: 'Level 2 & 3' }] },
        ...commonQuestions,
    ],
},
{
    service: 'forklift-training',
    questions: [
        { id: 'experience', text: 'Do you have previous forklift experience?', type: 'radio', options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }] },
        ...commonQuestions,
    ],
},
{
    service: 'life-coaches',
    questions: [
        { id: 'coaching_area', text: 'What area of your life do you want to focus on?', type: 'radio', options: [{ value: 'career', label: 'Career' }, { value: 'personal_growth', label: 'Personal Growth' }, { value: 'relationships', label: 'Relationships' }] },
        ...commonQuestions,
    ],
},
{
    service: 'security-training',
    questions: [
        { id: 'grade', text: 'What security grade are you training for?', type: 'radio', options: [{ value: 'e_d_c', label: 'Grade E, D, C' }, { value: 'b_a', label: 'Grade B, A' }] },
        ...commonQuestions,
    ],
},
{
    service: 'swimming-lessons',
    questions: [
        { id: 'age_group', text: 'What is the age group of the swimmer?', type: 'radio', options: [{ value: 'child', label: 'Child (Under 12)' }, { value: 'teen', label: 'Teenager' }, { value: 'adult', label: 'Adult' }] },
        ...commonQuestions,
    ],
},
{
    service: 'team-building',
    questions: [
        { id: 'group_size', text: 'How many people in your team?', type: 'radio', options: [{ value: 'small', label: 'Small (Under 15)' }, { value: 'medium', label: 'Medium (15-50)' }, { value: 'large', label: 'Large (50+)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'holiday-accommodation',
    questions: [
        { id: 'num_guests', text: 'How many guests?', type: 'radio', options: [{ value: '1_2', label: '1-2' }, { value: '3_4', label: '3-4' }, { value: '5_plus', label: '5+' }] },
        ...commonQuestions,
    ],
},
{
    service: 'venues',
    questions: [
        { id: 'event_type_venue', text: 'What type of event is it?', type: 'radio', options: [{ value: 'conference', label: 'Conference' }, { value: 'party', label: 'Party' }, { value: 'wedding', label: 'Wedding' }] },
        ...commonQuestions,
    ],
},
{
    service: 'wedding-venues',
    questions: [
        { id: 'num_guests_wedding', text: 'How many guests are you expecting?', type: 'radio', options: [{ value: 'small', label: 'Small (Under 50)' }, { value: 'medium', label: 'Medium (50-150)' }, { value: 'large', label: 'Large (150+)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'appliance-repairs',
    questions: [
        { id: 'appliance_type', text: 'What appliance needs repair?', type: 'radio', options: [{ value: 'fridge', label: 'Fridge / Freezer' }, { value: 'washing_machine', label: 'Washing Machine' }, { value: 'oven', label: 'Oven / Stove' }, { value: 'dishwasher', label: 'Dishwasher' }] },
        ...commonQuestions,
    ],
},
{
    service: 'fridge-repairs',
    questions: [
        { id: 'fridge_issue', text: 'What is the problem?', type: 'radio', options: [{ value: 'not_cooling', label: 'Not cooling' }, { value: 'leaking', label: 'Leaking water' }, { value: 'noisy', label: 'Making a strange noise' }] },
        ...commonQuestions,
    ],
},
{
    service: 'tv-installers',
    questions: [
        { id: 'tv_size', text: 'What is the size of your TV?', type: 'radio', options: [{ value: 'small', label: 'Small (Under 42")' }, { value: 'medium', label: 'Medium (42" - 65")' }, { value: 'large', label: 'Large (Over 65")' }] },
        ...commonQuestions,
    ],
},
{
    service: 'tv-repairs',
    questions: [
        { id: 'tv_issue', text: 'What is the issue with your TV?', type: 'radio', options: [{ value: 'no_power', label: 'No power' }, { value: 'no_picture', label: 'No picture (Sound is working)' }, { value: 'lines', label: 'Lines on the screen' }] },
        ...commonQuestions,
    ],
},
{
    service: 'conveyancers',
    questions: [
        { id: 'conveyancing_need', text: 'What do you need help with?', type: 'radio', options: [{ value: 'buying', label: 'Buying Property' }, { value: 'selling', label: 'Selling Property' }, { value: 'bond', label: 'Registering a Bond' }] },
        ...commonQuestions,
    ],
},
{
    service: 'divorce-lawyers',
    questions: [
        { id: 'divorce_type', text: 'Is the divorce contested or uncontested?', type: 'radio', options: [{ value: 'uncontested', label: 'Uncontested (We agree on terms)' }, { value: 'contested', label: 'Contested (We disagree)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'estate-agents',
    questions: [
        { id: 'agent_need', text: 'Are you looking to buy, sell, or rent?', type: 'radio', options: [{ value: 'buy', label: 'Buy a property' }, { value: 'sell', label: 'Sell my property' }, { value: 'rent', label: 'Rent a property' }] },
        ...commonQuestions,
    ],
},
{
    service: 'labour-lawyers',
    questions: [
        { id: 'labour_issue', text: 'What is the issue?', type: 'radio', options: [{ value: 'unfair_dismissal', label: 'Unfair Dismissal' }, { value: 'ccma', label: 'CCMA Case' }, { value: 'contract', label: 'Employment Contract Review' }] },
        ...commonQuestions,
    ],
},
{
    service: 'lawyers',
    questions: [
        { id: 'legal_area', text: 'What area of law do you need help with?', type: 'radio', options: [{ value: 'family', label: 'Family Law' }, { value: 'commercial', label: 'Commercial Law' }, { value: 'criminal', label: 'Criminal Law' }, { value: 'civil', label: 'Civil Litigation' }] },
        ...commonQuestions,
    ],
},
{
    service: 'couriers',
    questions: [
        { id: 'delivery_type', text: 'What type of delivery is it?', type: 'radio', options: [{ value: 'document', label: 'Document' }, { value: 'parcel', label: 'Parcel' }, { value: 'local', label: 'Local (Same City)' }, { value: 'national', label: 'National' }] },
        ...commonQuestions,
    ],
},
{
    service: 'school-transport',
    questions: [
        { id: 'num_children', text: 'How many children need transport?', type: 'radio', options: [{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3_plus', label: '3+' }] },
        ...commonQuestions,
    ],
},
{
    service: 'shuttle-services',
    questions: [
        { id: 'shuttle_type', text: 'What do you need a shuttle for?', type: 'radio', options: [{ value: 'airport', label: 'Airport Transfer' }, { value: 'corporate', label: 'Corporate Event' }, { value: 'tour', label: 'Tour / Sightseeing' }] },
        ...commonQuestions,
    ],
},
{
    service: 'taxis',
    questions: [
        { id: 'trip_type', text: 'Is this for a once-off trip or regular use?', type: 'radio', options: [{ value: 'once_off', label: 'Once-off' }, { value: 'regular', label: 'Regular / Account' }] },
        ...commonQuestions,
    ],
},
{
    service: 'transportation',
    questions: [
        { id: 'transport_need', text: 'What needs to be transported?', type: 'radio', options: [{ value: 'goods', label: 'Goods / Freight' }, { value: 'furniture', label: 'Furniture' }, { value: 'people', label: 'People' }] },
        ...commonQuestions,
    ],
},
{
    service: 'cellphone-repairs',
    questions: [
        { id: 'phone_issue', text: 'What is wrong with your phone?', type: 'radio', options: [{ value: 'screen', label: 'Cracked Screen' }, { value: 'battery', label: 'Battery not lasting' }, { value: 'water_damage', label: 'Water Damage' }, { value: 'not_charging', label: 'Not Charging' }] },
        ...commonQuestions,
    ],
},
{
    service: 'computer-repairs',
    questions: [
        { id: 'computer_type', text: 'What type of computer is it?', type: 'radio', options: [{ value: 'laptop', label: 'Laptop' }, { value: 'desktop', label: 'Desktop PC' }, { value: 'mac', label: 'Apple Mac' }] },
        ...commonQuestions,
    ],
},
{
    service: 'internet-solutions',
    questions: [
        { id: 'internet_need', text: 'What do you need help with?', type: 'radio', options: [{ value: 'fibre', label: 'Fibre Installation / Support' }, { value: 'lte', label: 'LTE / 5G Wireless' }, { value: 'wifi', label: 'Wi-Fi network setup / issues' }] },
        ...commonQuestions,
    ],
},
{
    service: 'laptop-repairs',
    questions: [
        { id: 'laptop_issue', text: 'What is the issue with your laptop?', type: 'radio', options: [{ value: 'not_turning_on', label: 'Not turning on' }, { value: 'slow', label: 'Running very slow' }, { value: 'screen', label: 'Broken Screen' }, { value: 'keyboard', label: 'Keyboard issue' }] },
        ...commonQuestions,
    ],
},
{
    service: 'networking',
    questions: [
        { id: 'network_env', text: 'Is this for a home or office?', type: 'radio', options: [{ value: 'home', label: 'Home Network' }, { value: 'office', label: 'Office Network' }] },
        ...commonQuestions,
    ],
},
{
    service: 'office-equipment',
    questions: [
        { id: 'equipment_type', text: 'What equipment do you need?', type: 'radio', options: [{ value: 'printer_copier', label: 'Printer / Copier' }, { value: 'pabx', label: 'PABX / Phone System' }] },
        ...commonQuestions,
    ],
},
{
    service: 'gas-suppliers',
    questions: [
        { id: 'gas_size', text: 'What size gas cylinder do you need?', type: 'radio', options: [{ value: '9kg', label: '9kg' }, { value: '19kg', label: '19kg' }, { value: '48kg', label: '48kg' }] },
        ...commonQuestions,
    ],
},
{
    service: 'marble-and-granite-suppliers',
    questions: [
        { id: 'stone_use', text: 'What will the stone be used for?', type: 'radio', options: [{ value: 'kitchen', label: 'Kitchen Countertops' }, { value: 'bathroom', label: 'Bathroom Vanities' }, { value: 'flooring', label: 'Flooring' }] },
        ...commonQuestions,
    ],
},
{
    service: 'personal-protection-equipment',
    questions: [
        { id: 'ppe_item', text: 'What PPE items do you need?', type: 'checkbox', options: [{ value: 'hard_hat', label: 'Hard Hats' }, { value: 'safety_boots', label: 'Safety Boots' }, { value: 'gloves', label: 'Gloves' }, { value: 'high_vis', label: 'High-Vis Clothing' }] },
        ...commonQuestions,
    ],
},
{
    service: 'stationery',
    questions: [
        { id: 'stationery_for', text: 'Is this for home, school, or office?', type: 'radio', options: [{ value: 'home_school', label: 'Home / School' }, { value: 'office', label: 'Office (Bulk)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'swimming-pool-supplies',
    questions: [
        { id: 'supply_type', text: 'What do you need?', type: 'radio', options: [{ value: 'chemicals', label: 'Chemicals (Chlorine, Acid)' }, { value: 'equipment', label: 'Equipment (Pump, Filter)' }, { value: 'cleaner', label: 'Pool Cleaner' }] },
        ...commonQuestions,
    ],
},
{
    service: 'agricultural-equipment',
    questions: [
        { id: 'agri_equip_type', text: 'What type of equipment do you need?', type: 'radio', options: [{ value: 'tractor', label: 'Tractor' }, { value: 'implement', label: 'Implement (e.g., Plough, Planter)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'agricultural-services',
    questions: [
        { id: 'agri_service_type', text: 'What service do you need?', type: 'radio', options: [{ value: 'soil_testing', label: 'Soil Testing' }, { value: 'crop_spraying', label: 'Crop Spraying' }, { value: 'consulting', label: 'General Consulting' }] },
        ...commonQuestions,
    ],
},
{
    service: 'irrigation',
    questions: [
        { id: 'irrigation_system_type', text: 'What type of irrigation system?', type: 'radio', options: [{ value: 'garden', label: 'Garden Sprinklers' }, { value: 'drip', label: 'Drip Irrigation' }, { value: 'farm', label: 'Farm / Agricultural' }] },
        ...commonQuestions,
    ],
},
{
    service: 'architects',
    questions: [
        { id: 'project_type_arch', text: 'What type of project is it?', type: 'radio', options: [{ value: 'new_house', label: 'New House' }, { value: 'renovation', label: 'Renovation / Extension' }, { value: 'commercial', label: 'Commercial Building' }] },
        ...commonQuestions,
    ],
},
{
    service: 'borehole-drillers',
    questions: [
        { id: 'property_type_borehole', text: 'What type of property is it?', type: 'radio', options: [{ value: 'residential', label: 'Residential' }, { value: 'farm', label: 'Farm / Smallholding' }] },
        ...commonQuestions,
    ],
},
{
    service: 'town-planners',
    questions: [
        { id: 'planning_need', text: 'What do you need assistance with?', type: 'radio', options: [{ value: 'rezoning', label: 'Rezoning' }, { value: 'subdivision', label: 'Subdivision' }, { value: 'consent', label: 'Consent Use' }] },
        ...commonQuestions,
    ],
},
{
    service: 'baby-sitters',
    questions: [
        { id: 'babysitting_need', text: 'When do you need a baby-sitter?', type: 'radio', options: [{ value: 'once_off', label: 'Once-off (e.g., date night)' }, { value: 'regular', label: 'Regular (e.g., weekly)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'creches',
    questions: [
        { id: 'child_age_creche', text: 'What is the age of your child?', type: 'radio', options: [{ value: 'under_1', label: 'Under 1 year' }, { value: '1_2', label: '1-2 years' }, { value: '2_3', label: '2-3 years' }, { value: '3_plus', label: '3+ years' }] },
        ...commonQuestions,
    ],
},
{
    service: 'day-care-centres',
    questions: [
        { id: 'child_age_daycare', text: 'What is the age of your child?', type: 'radio', options: [{ value: 'under_1', label: 'Under 1 year' }, { value: '1_2', label: '1-2 years' }, { value: '2_3', label: '2-3 years' }, { value: '3_plus', label: '3+ years' }] },
        ...commonQuestions,
    ],
},
{
    service: 'pre-schools',
    questions: [
        { id: 'child_age_preschool', text: 'What is the age of your child?', type: 'radio', options: [{ value: '3', label: '3 years old' }, { value: '4', label: '4 years old' }, { value: '5', label: '5 years old (Grade R)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'dressmakers',
    questions: [
        { id: 'dress_type', text: 'What needs to be made or altered?', type: 'radio', options: [{ value: 'wedding', label: 'Wedding Dress' }, { value: 'matric', label: 'Matric Dance Dress' }, { value: 'alteration', label: 'Alterations' }] },
        ...commonQuestions,
    ],
},
{
    service: 'embroidery',
    questions: [
        { id: 'embroidery_item', text: 'What needs to be embroidered?', type: 'radio', options: [{ value: 'shirts', label: 'Shirts / Polos' }, { value: 'caps', label: 'Caps' }, { value: 'towels', label: 'Towels / Gowns' }] },
        ...commonQuestions,
    ],
},
{
    service: 'cake-shops',
    questions: [
        { id: 'cake_occasion', text: 'What is the occasion?', type: 'radio', options: [{ value: 'birthday', label: 'Birthday' }, { value: 'wedding', label: 'Wedding' }, { value: 'corporate', label: 'Corporate' }] },
        ...commonQuestions,
    ],
},
{
    service: 'caterers',
    questions: [
        { id: 'catering_event_type', text: 'What type of event is it?', type: 'radio', options: [{ value: 'wedding', label: 'Wedding' }, { value: 'corporate', label: 'Corporate' }, { value: 'party', label: 'Private Party' }] },
        ...commonQuestions,
    ],
},
{
    service: 'groomers',
    questions: [
        { id: 'pet_type', text: 'What type of pet do you have?', type: 'radio', options: [{ value: 'dog', label: 'Dog' }, { value: 'cat', label: 'Cat' }] },
        ...commonQuestions,
    ],
},
{
    service: 'pet-sitters',
    questions: [
        { id: 'pet_sitting_service', text: 'What service do you need?', type: 'radio', options: [{ value: 'in_home', label: 'Pet sitting in my home' }, { value: 'dog_walking', label: 'Dog Walking' }] },
        ...commonQuestions,
    ],
},
{
    service: 'tour-operators',
    questions: [
        { id: 'tour_type', text: 'What kind of tour are you looking for?', type: 'radio', options: [{ value: 'safari', label: 'Safari / Wildlife' }, { value: 'city', label: 'City Tour' }, { value: 'adventure', label: 'Adventure (e.g., hiking, shark cage diving)' }] },
        ...commonQuestions,
    ],
},
{
    service: 'travel-agents',
    questions: [
        { id: 'travel_dest', text: 'Where are you planning to travel?', type: 'radio', options: [{ value: 'local', label: 'Local (Within South Africa)' }, { value: 'international', label: 'International' }] },
        ...commonQuestions,
    ],
},
{
    service: 'landscaping',
    questions: [
      { id: 'landscaping_service', text: 'What landscaping service do you need?', type: 'radio', options: [{ value: 'design', label: 'Garden Design' }, { value: 'installation', label: 'New Garden Installation' }, { value: 'maintenance', label: 'Garden Maintenance / Clean-up' }, { value: 'irrigation', label: 'Irrigation System' }] },
      ...commonQuestions,
    ],
  },
  {
    service: 'cctv',
    questions: [
      { id: 'cctv_service', text: 'What CCTV service do you need?', type: 'radio', options: [{ value: 'new_install', label: 'New System Installation' }, { value: 'repair', label: 'Repair Existing System' }, { value: 'upgrade', label: 'Upgrade System' }] },
      { id: 'num_cameras', text: 'How many cameras do you need?', type: 'radio', options: [{ value: '1_4', label: '1-4 Cameras' }, { value: '5_8', label: '5-8 Cameras' }, { value: '9_plus', label: '9+ Cameras' }] },
      ...commonQuestions,
    ],
  },
  {
    service: 'dstv-installers',
    questions: [
      { id: 'dstv_service', text: 'What DStv service do you need?', type: 'radio', options: [{ value: 'new_install', label: 'New Installation' }, { value: 'xtraview', label: 'Extra View Setup' }, { value: 'signal_repair', label: 'Signal Problems/Repairs' }, { value: 'relocation', label: 'Relocation' }] },
      ...commonQuestions,
    ],
  },
  {
    service: 'guttering',
    questions: [
      {
        id: 'guttering_service',
        text: 'What service do you need for your gutters?',
        type: 'radio',
        options: [
          { value: 'installation', label: 'New gutter installation' },
          { value: 'repair', label: 'Gutter repairs' },
          { value: 'cleaning', label: 'Gutter cleaning' },
          { value: 'replacement', label: 'Complete gutter replacement' },
        ],
      },
      {
        id: 'property_type',
        text: 'What type of property is it?',
        type: 'radio',
        options: [
          { value: 'single_story', label: 'Single-story house' },
          { value: 'double_story', label: 'Double-story or multi-level house' },
          { value: 'complex', label: 'Townhouse or complex' },
          { value: 'commercial', label: 'Commercial building' },
        ],
      },
      {
        id: 'gutter_material',
        text: 'What is the gutter material (if known)?',
        type: 'radio',
        options: [
          { value: 'aluminium', label: 'Aluminium' },
          { value: 'pvc', label: 'PVC/Plastic' },
          { value: 'steel', label: 'Steel' },
          { value: 'not_sure', label: 'I\'m not sure' },
        ],
      },
      ...commonQuestions
    ],
  },
  {
    service: 'solar-systems',
    questions: [
      {
        id: 'solar_goal',
        text: 'What is your main goal for installing a solar system?',
        type: 'radio',
        options: [
          { value: 'loadshedding', label: 'Beat Loadshedding' },
          { value: 'reduce_bill', label: 'Reduce my electricity bill' },
          { value: 'off_grid', label: 'Go completely off-grid' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
      service: 'demolition',
      questions: [
        {
          id: 'demolition_type',
          text: 'What needs to be demolished?',
          type: 'radio',
          options: [
            { value: 'full_house', label: 'Entire House / Building' },
            { value: 'interior_walls', label: 'Interior Walls' },
            { value: 'exterior_wall', label: 'Exterior Wall / Fence' },
            { value: 'swimming_pool', label: 'Swimming Pool' },
            { value: 'garage', label: 'Garage or Outbuilding' },
            { value: 'other', label: 'Other' },
          ],
        },
        ...commonQuestions,
      ],
  },
];




