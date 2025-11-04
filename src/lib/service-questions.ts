
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
    { value: 'accounting', label: 'Accounting' },
    { value: 'air-conditioning', label: 'Air Conditioning' },
    { value: 'alarm-systems', label: 'Alarm Systems' },
    { value: 'aluminium-doors-and-windows', label: 'Aluminium Doors And Windows' },
    { value: 'appliance-repairs', label: 'Appliance Repairs' },
    { value: 'architects', label: 'Architects' },
    { value: 'auditors', label: 'Auditors' },
    { value: 'auto-glass', label: 'Auto Glass' },
    { value: 'awnings', label: 'Awnings' },
    { value: 'bathroom-renovations', label: 'Bathroom Renovations' },
    { value: 'blinds', label: 'Blinds' },
    { value: 'borehole-drillers', label: 'Borehole Drillers' },
    { value: 'builders', label: 'Builders' },
    { value: 'building-materials', label: 'Building Materials' },
    { value: 'business-consultants', label: 'Business Consultants' },
    { value: 'car-alarms', label: 'Car Alarms' },
    { value: 'car-tracking', label: 'Car Tracking' },
    { value: 'car-window-tinting', label: 'Car Window Tinting' },
    { value: 'carpet-cleaning', label: 'Carpet Cleaning' },
    { value: 'carpeting', label: 'Carpeting' },
    { value: 'carports', label: 'Carports' },
    { value: 'carpenter', label: 'Carpenters' },
    { value: 'caterers', label: 'Caterers' },
    { value: 'cctv', label: 'Cctv' },
    { value: 'ceiling-installers', label: 'Ceiling Installers' },
    { value: 'cleaning-service', label: 'Cleaning Services' },
    { value: 'company-registrations', label: 'Company Registrations' },
    { value: 'computer-courses', label: 'Computer Courses' },
    { value: 'computer-repairs', label: 'Computer Repairs' },
    { value: 'couriers', label: 'Couriers' },
    { value: 'debt-counsellors', label: 'Debt Counsellors' },
    { value: 'demolition', label: 'Demolition' },
    { value: 'dentists', label: 'Dentists' },
    { value: 'dieticians', label: 'Dieticians' },
    { value: 'divorce-lawyers', label: 'Divorce Lawyers' },
    { value: 'djs', label: 'Djs' },
    { value: 'driving-schools', label: 'Driving Schools' },
    { value: 'dstv-installers', label: 'Dstv Installers' },
    { value: 'electric-fencing', label: 'Electric Fencing' },
    { value: 'electrician', label: 'Electricians' },
    { value: 'event-decorations', label: 'Event Decorations' },
    { value: 'fencing', label: 'Fencing' },
    { value: 'financial-advisors', label: 'Financial Advisors' },
    { value: 'garage-door-motors', label: 'Garage Door Motors' },
    { value: 'gardeners', label: 'Gardeners' },
    { value: 'gas-installers', label: 'Gas Installers' },
    { value: 'gate-motors', label: 'Gate Motors' },
    { value: 'generators', label: 'Generators' },
    { value: 'glass-works', label: 'Glass Works' },
    { value: 'graphic-designers', label: 'Graphic Designers' },
    { value: 'guttering', label: 'Guttering' },
    { value: 'handyman', label: 'Handyman' },
    { value: 'home-improvements', label: 'Home Improvements' },
    { value: 'home-loans', label: 'Home Loans' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'interior-designing', label: 'Interior Designing' },
    { value: 'irrigation', label: 'Irrigation' },
    { value: 'kitchen-renovations', label: 'Kitchen Renovations' },
    { value: 'laminate-flooring', label: 'Laminate Flooring' },
    { value: 'landscaping', label: 'Landscaping' },
    { value: 'laptop-repairs', label: 'Laptop Repairs' },
    { value: 'lawyers', label: 'Lawyers' },
    { value: 'locksmiths', label: 'Locksmiths' },
    { value: 'marriage-counsellors', label: 'Marriage Counsellors' },
    { value: 'massage-therapists', label: 'Massage Therapists' },
    { value: 'mechanics', label: 'Mechanics' },
    { value: 'movers', label: 'Movers' },
    { value: 'palisade-fencing', label: 'Palisade Fencing' },
    { value: 'panel-beaters', label: 'Panel Beaters' },
    { value: 'painter', label: 'Painters' },
    { value: 'party-planners', label: 'Party Planners' },
    { value: 'paving', label: 'Paving' },
    { value: 'pest-control', label: 'Pest Control' },
    { value: 'photographers', label: 'Photographers' },
    { value: 'plant-hire', label: 'Plant Hire' },
    { value: 'plastic-surgeons', label: 'Plastic Surgeons' },
    { value: 'plumber', label: 'Plumbers' },
    { value: 'pool-cleaning', label: 'Pool Cleaning' },
    { value: 'printing', label: 'Printing' },
    { value: 'private-investigators', label: 'Private Investigators' },
    { value: 'psychologists', label: 'Psychologists' },
    { value: 'roofer', label: 'Roofer' },
    { value: 'roofing', label: 'Roofing' },
    { value: 'rubble-removal', label: 'Rubble Removals' },
    { value: 'security', label: 'Security' },
    { value: 'shadeports', label: 'Shadeports' },
    { value: 'shuttle-services', label: 'Shuttle Services' },
    { value: 'signs', label: 'Signs' },
    { value: 'skip-hire', label: 'Skip Hire' },
    { value: 'solar-geysers', label: 'Solar Geysers' },
    { value: 'solar-systems', label: 'Solar Systems' },
    { value: 'swimming-lessons', label: 'Swimming Lessons' },
    { value: 'swimming-pool-builders', label: 'Swimming Pool Builders' },
    { value: 'tar-surfacing', label: 'Tar Surfacing' },
    { value: 'tent-hire', label: 'Tent Hire' },
    { value: 'tiler', label: 'Tiler' },
    { value: 'tiling', label: 'Tiling' },
    { value: 'toilet-hire', label: 'Toilet Hire' },
    { value: 'tow-bars', label: 'Tow Bars' },
    { value: 'towing', label: 'Towing' },
    { value: 'tree-felling', label: 'Tree Felling' },
    { value: 'tlb-hire', label: 'Tlb Hire' },
    { value: 'upholsterers', label: 'Upholsterers' },
    { value: 'upholstery-cleaning', label: 'Upholstery Cleaning' },
    { value: 'videographers', label: 'Videographers' },
    { value: 'waterproofing', label: 'Waterproofing' },
    { value: 'website-designers', label: 'Website Designers' },
    { value: 'welder', label: 'Welder' },
    { value: 'window-tinting', label: 'Window Tinting' },
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
        id: 'handyman_tasks',
        text: 'What do you need a handyman for?',
        type: 'checkbox',
        options: [
          { value: 'general_repairs', label: 'General repairs & maintenance' },
          { value: 'hanging', label: 'Hanging pictures, shelves, or TVs' },
          { value: 'assembly', label: 'Furniture assembly' },
          { value: 'minor_plumbing', label: 'Minor plumbing (e.g., leaky tap)' },
          { value: 'minor_electrical', label: 'Minor electrical (e.g., changing light fittings)' },
          { value: 'painting', label: 'Painting touch-ups' },
          { value: 'door_window_repair', label: 'Door or window repairs' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
];
