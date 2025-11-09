
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
    { value: 'carpenter', label: 'Carpenters' },
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
    { value: 'kitchen-renovations', label: 'Kitchen Renovations' },
    { value: 'labour-lawyers', label: 'Labour Lawyers' },
    { value: 'laminate-flooring', label: 'Laminate Flooring' },
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
    service: 'event-planners',
    questions: [
      {
        id: 'event_type',
        text: 'What type of event are you planning?',
        type: 'radio',
        options: [
          { value: 'wedding', label: 'Wedding' },
          { value: 'corporate', label: 'Corporate Event' },
          { value: 'private_party', label: 'Private Party (Birthday, Anniversary)' },
          { value: 'conference', label: 'Conference or Seminar' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'florists',
    questions: [
      {
        id: 'occasion',
        text: 'What is the occasion for the flowers?',
        type: 'radio',
        options: [
          { value: 'wedding', label: 'Wedding' },
          { value: 'event', label: 'Event (Corporate, Party)' },
          { value: 'gift', label: 'Gift or Special Occasion' },
          { value: 'funeral', label: 'Funeral or Sympathy' },
          { value: 'subscription', label: 'Regular Subscription (Home/Office)' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'wedding-photographers',
    questions: [
      {
        id: 'wedding_budget',
        text: 'What is your approximate wedding photography budget?',
        type: 'radio',
        options: [
          { value: '5k_10k', label: 'R5,000 - R10,000' },
          { value: '10k_20k', label: 'R10,000 - R20,000' },
          { value: '20k_30k', label: 'R20,000 - R30,000' },
          { value: '30k_plus', label: 'R30,000+' },
          { value: 'not_sure', label: 'I\'m not sure yet' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'debt-collection',
    questions: [
      {
        id: 'debt_type',
        text: 'What type of debt needs to be collected?',
        type: 'radio',
        options: [
          { value: 'personal', label: 'Personal/Individual Debt' },
          { value: 'commercial', label: 'Commercial/Business Debt' },
          { value: 'rental', label: 'Rental Arrears' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'loans',
    questions: [
      {
        id: 'loan_type',
        text: 'What type of loan are you looking for?',
        type: 'radio',
        options: [
          { value: 'personal', label: 'Personal Loan' },
          { value: 'business', label: 'Business Loan' },
          { value: 'home_loan', label: 'Home Loan / Bond' },
          { value: 'vehicle', label: 'Vehicle Finance' },
          { value: 'consolidation', label: 'Debt Consolidation Loan' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'medical-aid',
    questions: [
      {
        id: 'coverage_for',
        text: 'Who needs medical aid cover?',
        type: 'radio',
        options: [
          { value: 'myself', label: 'Just myself' },
          { value: 'spouse', label: 'Myself and my spouse/partner' },
          { value: 'family', label: 'My family (including children)' },
          { value: 'business', label: 'My business/employees' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'recruitment-agencies',
    questions: [
      {
        id: 'user_type',
        text: 'Are you looking to hire an employee or find a job?',
        type: 'radio',
        options: [
          { value: 'company', label: 'I\'m a company looking to hire' },
          { value: 'candidate', label: 'I\'m a candidate looking for a job' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'logo-design',
    questions: [
      {
        id: 'business_stage',
        text: 'What stage is your business at?',
        type: 'radio',
        options: [
          { value: 'new', label: 'New business/brand (starting from scratch)' },
          { value: 'refresh', label: 'Existing business needing a logo refresh' },
          { value: 'idea', label: 'Just an idea, exploring options' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'beauty-salons',
    questions: [
      {
        id: 'treatment_type',
        text: 'What beauty treatment are you looking for?',
        type: 'radio',
        options: [
          { value: 'facial', label: 'Facial' },
          { value: 'manicure_pedicure', label: 'Manicure/Pedicure' },
          { value: 'waxing', label: 'Waxing' },
          { value: 'massage', label: 'Massage' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'dermatologists',
    questions: [
      {
        id: 'visit_reason',
        text: 'What is the primary reason for your visit?',
        type: 'radio',
        options: [
          { value: 'acne', label: 'Acne Treatment' },
          { value: 'screening', label: 'Skin Cancer Screening' },
          { value: 'eczema', label: 'Eczema/Psoriasis' },
          { value: 'cosmetic', label: 'Cosmetic Dermatology' },
          { value: 'consultation', label: 'General Consultation' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'laser-clinics',
    questions: [
      {
        id: 'laser_treatment_type',
        text: 'What type of laser treatment are you interested in?',
        type: 'radio',
        options: [
          { value: 'hair_removal', label: 'Hair Removal' },
          { value: 'tattoo_removal', label: 'Tattoo Removal' },
          { value: 'skin_rejuvenation', label: 'Skin Rejuvenation' },
          { value: 'scar_vein_treatment', label: 'Scar/Vein Treatment' },
          { value: 'not_sure', label: 'Not Sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'personal-trainers',
    questions: [
      {
        id: 'fitness_goal',
        text: 'What is your main fitness goal?',
        type: 'radio',
        options: [
          { value: 'weight_loss', label: 'Weight Loss' },
          { value: 'muscle_gain', label: 'Muscle Gain' },
          { value: 'general_fitness', label: 'Improve General Fitness' },
          { value: 'sport_specific', label: 'Sport-specific Training' },
          { value: 'rehabilitation', label: 'Post-injury Rehabilitation' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'chiropractors',
    questions: [
      {
        id: 'concern_area',
        text: 'What is the main area of concern?',
        type: 'radio',
        options: [
          { value: 'back_pain', label: 'Back Pain' },
          { value: 'neck_pain', label: 'Neck Pain' },
          { value: 'headaches', label: 'Headaches/Migraines' },
          { value: 'joint_pain', label: 'Joint Pain (e.g., shoulder, knee)' },
          { value: 'wellness', label: 'General Wellness/Adjustment' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'make-up-artists',
    questions: [
      {
        id: 'makeup_occasion',
        text: 'What is the occasion for the makeup?',
        type: 'radio',
        options: [
          { value: 'wedding', label: 'Wedding' },
          { value: 'formal_event', label: 'Matric Dance/Formal Event' },
          { value: 'photoshoot', label: 'Photoshoot/Filming' },
          { value: 'lesson', label: 'Personal Lesson' },
          { value: 'party', label: 'Special Occasion Party' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'physiotherapists',
    questions: [
      {
        id: 'physio_reason',
        text: 'What are you seeking physiotherapy for?',
        type: 'radio',
        options: [
          { value: 'sports_injury', label: 'Sports Injury' },
          { value: 'rehab', label: 'Post-surgery Rehabilitation' },
          { value: 'chronic_pain', label: 'Chronic Pain Management' },
          { value: 'assessment', label: 'General Assessment' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'counsellors',
    questions: [
      {
        id: 'counselling_type',
        text: 'What type of counselling are you looking for?',
        type: 'radio',
        options: [
          { value: 'individual', label: 'Individual Counselling' },
          { value: 'couples', label: 'Couples/Marriage Counselling' },
          { value: 'family', label: 'Family Counselling' },
          { value: 'trauma', label: 'Trauma/Grief Counselling' },
          { value: 'not_sure', label: 'Not Sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'gynaecologists',
    questions: [
      {
        id: 'gynae_reason',
        text: 'What is the reason for your appointment?',
        type: 'radio',
        options: [
          { value: 'checkup', label: 'Annual Check-up' },
          { value: 'pregnancy', label: 'Pregnancy/Maternity Care' },
          { value: 'menstrual', label: 'Menstrual Issues' },
          { value: 'contraception', label: 'Contraception' },
          { value: 'concern', label: 'Specific Concern' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'hair-stylists',
    questions: [
      {
        id: 'hair_service',
        text: 'What hair service do you need?',
        type: 'radio',
        options: [
          { value: 'cut_blowdry', label: 'Cut & Blow-dry' },
          { value: 'colour', label: 'Colour/Highlights' },
          { value: 'styling', label: 'Special Occasion Styling (Updo)' },
          { value: 'treatment', label: 'Treatment' },
          { value: 'consultation', label: 'Consultation' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'access-control',
    questions: [
      {
        id: 'access_control_type',
        text: 'What type of access control system do you need?',
        type: 'radio',
        options: [
          { value: 'biometric', label: 'Biometric (Fingerprint/Face)' },
          { value: 'card_tag', label: 'Card/Tag System' },
          { value: 'keypad', label: 'Keypad System' },
          { value: 'intercom', label: 'Intercom System' },
          { value: 'repair', label: 'Repair/Maintenance' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'cctv',
    questions: [
      {
        id: 'cctv_requirement',
        text: 'What is your CCTV requirement?',
        type: 'radio',
        options: [
          { value: 'installation', label: 'New Installation' },
          { value: 'add_cameras', label: 'Add more cameras to existing system' },
          { value: 'repair', label: 'Repair/Maintenance' },
          { value: 'upgrade', label: 'Upgrade System' },
          { value: 'remote_viewing', label: 'Remote Viewing Setup' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'tracing',
    questions: [
      {
        id: 'tracing_type',
        text: 'What type of tracing service do you require?',
        type: 'radio',
        options: [
          { value: 'trace_person', label: 'Trace a Person' },
          { value: 'trace_debtor', label: 'Trace a Debtor' },
          { value: 'trace_witness', label: 'Trace a Witness' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'armed-response',
    questions: [
      {
        id: 'property_type_security',
        text: 'What type of property needs armed response?',
        type: 'radio',
        options: [
          { value: 'residential', label: 'Residential Home' },
          { value: 'business', label: 'Business/Commercial Property' },
          { value: 'complex', label: 'Complex/Estate' },
          { value: 'farm', label: 'Farm/Plot' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'fire-safety',
    questions: [
      {
        id: 'fire_safety_service',
        text: 'What fire safety service do you need?',
        type: 'radio',
        options: [
          { value: 'extinguisher', label: 'Fire Extinguisher Supply/Service' },
          { value: 'alarm_system', label: 'Fire Detection/Alarm System' },
          { value: 'certificate', label: 'Fire Safety Certificate (Compliance)' },
          { value: 'consultation', label: 'Fire Escape Plan/Consultation' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'auto-electricians',
    questions: [
      {
        id: 'auto_electric_issue',
        text: "What issue are you experiencing with your vehicle's electronics?",
        type: 'radio',
        options: [
          { value: 'battery_starting', label: 'Battery/Starting issues' },
          { value: 'faulty_lights', label: 'Faulty lights' },
          { value: 'wiring_problems', label: 'Wiring problems' },
          { value: 'warning_lights', label: 'Warning lights on dashboard' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'car-aircon-regassing',
    questions: [
      {
        id: 'aircon_service',
        text: "What service do you need for your car's aircon?",
        type: 'radio',
        options: [
          { value: 'regassing', label: 'Regassing' },
          { value: 'repair', label: 'Repair (not cooling)' },
          { value: 'leak_detection', label: 'Leak detection' },
          { value: 'general_service', label: 'General service' },
          { value: 'not_sure', label: 'Not sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'gearboxes',
    questions: [
      {
        id: 'gearbox_service',
        text: 'What service do you need for your gearbox?',
        type: 'radio',
        options: [
          { value: 'repair', label: 'Repair' },
          { value: 'replacement', label: 'Replacement' },
          { value: 'service_oil_change', label: 'Service/Oil change' },
          { value: 'diagnostics', label: 'Diagnostics' },
          { value: 'not_sure', label: 'Not sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'batteries',
    questions: [
      {
        id: 'battery_help',
        text: 'What do you need help with regarding your battery?',
        type: 'radio',
        options: [
          { value: 'new_battery', label: 'New battery purchase' },
          { value: 'testing', label: 'Battery testing' },
          { value: 'fitting', label: 'Battery fitting/installation' },
          { value: 'flat', label: "Battery is flat/car won't start" },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'engine-overhauls',
    questions: [
      {
        id: 'overhaul_reason',
        text: 'What is the reason for the engine overhaul?',
        type: 'radio',
        options: [
          { value: 'high_mileage', label: 'High mileage/wear' },
          { value: 'failure', label: 'Specific failure (e.g., blown gasket)' },
          { value: 'performance', label: 'Performance upgrade' },
          { value: 'diagnostics', label: 'Diagnostics/Quote' },
          { value: 'not_sure', label: 'Not sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'brakes-and-clutches',
    questions: [
      {
        id: 'brake_clutch_service',
        text: 'What service do you need?',
        type: 'radio',
        options: [
          { value: 'brake', label: 'Brake replacement/repair' },
          { value: 'clutch', label: 'Clutch replacement/repair' },
          { value: 'both', label: 'Both brake and clutch' },
          { value: 'inspection', label: 'Inspection/Diagnostics' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'fuels',
    questions: [
      {
        id: 'fuel_service',
        text: 'What fuel service do you need?',
        type: 'radio',
        options: [
          { value: 'emergency_delivery', label: 'Emergency fuel delivery' },
          { value: 'bulk_supply', label: 'Bulk fuel supply' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'forklift-training',
    questions: [
      {
        id: 'forklift_training_type',
        text: 'What type of forklift training do you need?',
        type: 'radio',
        options: [
          { value: 'certification', label: 'New operator certification' },
          { value: 'refresher', label: 'Refresher course' },
          { value: 'group_training', label: 'On-site group training' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'team-building',
    questions: [
      {
        id: 'team_size',
        text: 'What is the approximate size of your team?',
        type: 'radio',
        options: [
          { value: 'small', label: 'Small (1-10 people)' },
          { value: 'medium', label: 'Medium (11-30 people)' },
          { value: 'large', label: 'Large (31-100 people)' },
          { value: 'very_large', label: 'Very Large (101+ people)' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'life-coaches',
    questions: [
      {
        id: 'coaching_area',
        text: 'What area are you seeking coaching for?',
        type: 'radio',
        options: [
          { value: 'career', label: 'Career development' },
          { value: 'personal_growth', label: 'Personal growth' },
          { value: 'relationships', label: 'Relationships' },
          { value: 'health_wellness', label: 'Health and wellness' },
          { value: 'balance', label: 'General life balance' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'firearm-training',
    questions: [
      {
        id: 'firearm_training_type',
        text: 'What type of firearm training are you looking for?',
        type: 'radio',
        options: [
          { value: 'competency', label: 'Competency training (for license)' },
          { value: 'advanced', label: 'Advanced/Tactical training' },
          { value: 'sport', label: 'Sport shooting' },
          { value: 'self_defense', label: 'Self-defense' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'security-training',
    questions: [
      {
        id: 'security_training_grade',
        text: 'What grade of security training are you interested in?',
        type: 'radio',
        options: [
          { value: 'e_to_c', label: 'Grade E to C (Basic)' },
          { value: 'b_to_a', label: 'Grade B to A (Supervisory)' },
          { value: 'specialized', label: 'Specialized (e.g., Armed Response, CIT)' },
          { value: 'not_sure', label: 'Not sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'first-aid',
    questions: [
      {
        id: 'first_aid_level',
        text: 'What level of First Aid training do you need?',
        type: 'radio',
        options: [
          { value: 'level_1', label: 'Level 1 (Basic)' },
          { value: 'level_2', label: 'Level 2' },
          { value: 'level_3', label: 'Level 3' },
          { value: 'group', label: 'Group/Corporate training' },
          { value: 'not_sure', label: 'Not sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'holiday-accommodation',
    questions: [
      {
        id: 'accommodation_type',
        text: 'What type of holiday accommodation are you looking for?',
        type: 'radio',
        options: [
          { value: 'self_catering', label: 'Self-Catering' },
          { value: 'b_and_b', label: 'Bed & Breakfast' },
          { value: 'hotel', label: 'Hotel' },
          { value: 'guest_house', label: 'Guest House' },
          { value: 'lodge', label: 'Lodge' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'venues',
    questions: [
      {
        id: 'venue_event_type',
        text: 'What type of event are you planning?',
        type: 'radio',
        options: [
          { value: 'conference', label: 'Conference/Meeting' },
          { value: 'party', label: 'Party (Birthday, etc.)' },
          { value: 'corporate', label: 'Corporate Function' },
          { value: 'wedding', label: 'Wedding' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'wedding-venues',
    questions: [
      {
        id: 'guest_count',
        text: 'How many guests are you expecting?',
        type: 'radio',
        options: [
          { value: 'intimate', label: 'Intimate (1-50)' },
          { value: 'medium', label: 'Medium (51-120)' },
          { value: 'large', label: 'Large (121-200)' },
          { value: 'very_large', label: 'Very Large (201+)' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'tv-repairs',
    questions: [
      {
        id: 'tv_problem',
        text: 'What seems to be the problem with your TV?',
        type: 'radio',
        options: [
          { value: 'no_power', label: 'No power' },
          { value: 'blank_screen', label: 'Screen is blank or has lines' },
          { value: 'sound_issue', label: 'Sound issues' },
          { value: 'other', label: 'Other issue' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'dstv-installers',
    questions: [
      {
        id: 'dstv_service',
        text: 'What DSTV service do you need?',
        type: 'radio',
        options: [
          { value: 'new_installation', label: 'New installation' },
          { value: 'realignment', label: 'Re-alignment or signal issue' },
          { value: 'extra_view', label: 'Extra view setup' },
          { value: 'upgrade', label: 'Upgrade' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'fridge-repairs',
    questions: [
      {
        id: 'fridge_issue',
        text: 'What is the issue with your fridge?',
        type: 'radio',
        options: [
          { value: 'not_cooling', label: 'Not cooling' },
          { value: 'leaking', label: 'Leaking water' },
          { value: 'noise', label: 'Making strange noises' },
          { value: 'freezer_issue', label: 'Freezer not working' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'tv-installers',
    questions: [
      {
        id: 'tv_installation_type',
        text: 'What kind of TV installation do you need?',
        type: 'radio',
        options: [
          { value: 'wall_mount', label: 'Wall mounting' },
          { value: 'setup_tuning', label: 'Initial setup & tuning' },
          { value: 'home_theatre', label: 'Home theatre setup' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'conveyancers',
    questions: [
      {
        id: 'conveyancing_need',
        text: 'What type of property transaction do you need assistance with?',
        type: 'radio',
        options: [
          { value: 'buying', label: 'Buying a property' },
          { value: 'selling', label: 'Selling a property' },
          { value: 'bond_registration', label: 'Bond registration' },
          { value: 'property_transfer', label: 'Property transfer' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'estate-agents',
    questions: [
      {
        id: 'estate_agent_need',
        text: 'Are you looking to buy, sell, or rent a property?',
        type: 'radio',
        options: [
          { value: 'sell', label: 'I want to sell my property' },
          { value: 'buy', label: 'I\'m looking to buy a property' },
          { value: 'rent', label: 'I\'m looking for a property to rent' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'labour-lawyers',
    questions: [
      {
        id: 'labour_law_query',
        text: 'What is the nature of your labour law query?',
        type: 'radio',
        options: [
          { value: 'unfair_dismissal', label: 'Unfair dismissal' },
          { value: 'contract_review', label: 'Employment contract review' },
          { value: 'ccma_case', label: 'CCMA case' },
          { value: 'general_advice', label: 'General advice' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'taxis',
    questions: [
      {
        id: 'taxi_service_type',
        text: 'What kind of taxi service do you need?',
        type: 'radio',
        options: [
          { value: 'once_off', label: 'Once-off trip' },
          { value: 'airport_transfer', label: 'Airport transfer' },
          { value: 'regular_commute', label: 'Regular commute' },
          { value: 'event_transport', label: 'Event transport' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'school-transport',
    questions: [
      {
        id: 'child_count',
        text: 'For how many children do you need transport?',
        type: 'radio',
        options: [
          { value: '1', label: '1 child' },
          { value: '2', label: '2 children' },
          { value: '3', label: '3 children' },
          { value: '4_plus', label: '4+ children' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'transportation',
    questions: [
      {
        id: 'transport_need',
        text: 'What do you need to transport?',
        type: 'radio',
        options: [
          { value: 'goods', label: 'Goods/Parcels' },
          { value: 'furniture', label: 'Furniture' },
          { value: 'people', label: 'People (Shuttle Service)' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'cellphone-repairs',
    questions: [
      {
        id: 'cellphone_issue',
        text: 'What is the issue with your cellphone?',
        type: 'radio',
        options: [
          { value: 'screen', label: 'Cracked screen' },
          { value: 'battery', label: 'Battery replacement' },
          { value: 'water_damage', label: 'Water damage' },
          { value: 'no_power', label: 'Not turning on' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'networking',
    questions: [
      {
        id: 'networking_service',
        text: 'What kind of networking service do you need?',
        type: 'radio',
        options: [
          { value: 'wifi', label: 'Home WiFi setup/troubleshooting' },
          { value: 'office_network', label: 'Office network setup' },
          { value: 'cabling', label: 'Cabling installation' },
          { value: 'security', label: 'Network security' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'office-equipment',
    questions: [
      {
        id: 'office_equipment_service',
        text: 'What kind of office equipment service do you need?',
        type: 'radio',
        options: [
          { value: 'repair', label: 'Printer/Copier repair' },
          { value: 'purchase', label: 'Equipment purchase' },
          { value: 'rental', label: 'Equipment rental' },
          { value: 'maintenance', label: 'General maintenance' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'internet-solutions',
    questions: [
      {
        id: 'internet_solution_need',
        text: 'What internet solution are you looking for?',
        type: 'radio',
        options: [
          { value: 'fibre', label: 'Fibre installation' },
          { value: 'adsl', label: 'ADSL/VDSL' },
          { value: 'mobile', label: 'LTE/5G Mobile internet' },
          { value: 'troubleshooting', label: 'General troubleshooting' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'gas-suppliers',
    questions: [
      {
        id: 'gas_service_type',
        text: 'What type of gas service do you need?',
        type: 'radio',
        options: [
          { value: 'new_bottle', label: 'New gas bottle/cylinder' },
          { value: 'refill', label: 'Gas refill/exchange' },
          { value: 'coc', label: 'Gas installation compliance certificate (COC)' },
          { value: 'appliance_servicing', label: 'Gas appliance servicing' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'marble-and-granite-suppliers',
    questions: [
      {
        id: 'marble_granite_need',
        text: 'What are you looking for?',
        type: 'radio',
        options: [
          { value: 'kitchen_countertops', label: 'Kitchen countertops' },
          { value: 'bathroom_vanities', label: 'Bathroom vanities' },
          { value: 'flooring', label: 'Flooring' },
          { value: 'wall_cladding', label: 'Wall cladding' },
          { value: 'other', label: 'Other custom work' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'personal-protection-equipment',
    questions: [
      {
        id: 'job_details',
        text: 'What type of PPE are you looking for?',
        type: 'textarea',
        placeholder: 'e.g., Safety boots, hard hats, high-visibility vests, gloves, masks, etc. Please specify quantities if known.',
      },
      locationQuestion,
      urgencyQuestion,
      budgetQuestion,
    ],
  },
  {
    service: 'stationery',
    questions: [
      {
        id: 'stationery_type',
        text: 'What type of stationery do you need? (Select all that apply)',
        type: 'checkbox',
        options: [
          { value: 'office_basics', label: 'Office Basics (Pens, Paper, Staples)' },
          { value: 'printing', label: 'Printing Supplies (Ink, Toner, Paper)' },
          { value: 'filing', label: 'Filing & Storage (Files, Folders, Labels)' },
          { value: 'scholastic', label: 'Scholastic/School Supplies' },
          { value: 'art_craft', label: 'Art & Craft Supplies' },
          { value: 'bulk_order', label: 'Bulk Office Order' },
        ],
      },
      {
        id: 'job_details',
        text: 'Please provide more details about the items and quantities you need.',
        type: 'textarea',
        placeholder: 'e.g., 10 boxes of A4 paper, 5 black ink cartridges for HP Deskjet, 50 blue pens...',
      },
      locationQuestion,
      urgencyQuestion,
      budgetQuestion,
    ],
  },
  {
    service: 'swimming-pool-supplies',
    questions: [
      {
        id: 'pool_supplies_need',
        text: 'What swimming pool supplies are you looking for?',
        type: 'radio',
        options: [
          { value: 'chemicals', label: 'Chemicals (Chlorine, Acid)' },
          { value: 'pool_cleaner', label: 'Pool cleaner/kreepy' },
          { value: 'pump_filter', label: 'Pump/Filter' },
          { value: 'pool_cover', label: 'Pool cover' },
          { value: 'maintenance_equipment', label: 'General maintenance equipment' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'agricultural-equipment',
    questions: [
      {
        id: 'agri_equipment_service',
        text: 'What kind of agricultural equipment service do you need?',
        type: 'radio',
        options: [
          { value: 'purchase', label: 'Purchase new equipment' },
          { value: 'repair', label: 'Repair existing equipment' },
          { value: 'hire', label: 'Equipment hire' },
          { value: 'servicing', label: 'Servicing/Maintenance' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'agricultural-services',
    questions: [
      {
        id: 'agri_service',
        text: 'What agricultural service are you looking for?',
        type: 'radio',
        options: [
          { value: 'crop_spraying', label: 'Crop spraying' },
          { value: 'soil_analysis', label: 'Soil analysis' },
          { value: 'livestock_services', label: 'Livestock services' },
          { value: 'farm_planning', label: 'Farm planning/consulting' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'borehole-drillers',
    questions: [
      {
        id: 'borehole_reason',
        text: 'What is the primary reason for drilling a borehole?',
        type: 'radio',
        options: [
          { value: 'home_use', label: 'New borehole for home/garden use' },
          { value: 'agri_use', label: 'New borehole for agricultural use' },
          { value: 'yield_testing', label: 'Borehole yield testing' },
          { value: 'maintenance', label: 'Borehole cleaning/maintenance' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'baby-sitters',
    questions: [
      {
        id: 'babysitter_need',
        text: 'When do you need a baby sitter?',
        type: 'radio',
        options: [
          { value: 'once_off_day', label: 'Once-off (daytime)' },
          { value: 'once_off_evening', label: 'Once-off (evening)' },
          { value: 'regularly', label: 'Regularly (e.g., weekly)' },
          { value: 'full_time', label: 'Full-time' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'creches',
    questions: [
      {
        id: 'child_age',
        text: 'What age is your child?',
        type: 'radio',
        options: [
          { value: '0_1', label: '0-1 year' },
          { value: '1_2', label: '1-2 years' },
          { value: '3_4', label: '3-4 years' },
          { value: '5_6', label: '5-6 years' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'day-care-centres',
    questions: [
      {
        id: 'child_age',
        text: 'What age is your child?',
        type: 'radio',
        options: [
          { value: '0_1', label: '0-1 year' },
          { value: '1_2', label: '1-2 years' },
          { value: '3_4', label: '3-4 years' },
          { value: '5_6', label: '5-6 years' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'pre-schools',
    questions: [
      {
        id: 'child_age',
        text: 'What age is your child?',
        type: 'radio',
        options: [
          { value: '3_4', label: '3-4 years' },
          { value: '4_5', label: '4-5 years' },
          { value: '5_6', label: '5-6 years (Grade R)' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'dressmakers',
    questions: [
      {
        id: 'dressmaker_need',
        text: 'What do you need a dressmaker for?',
        type: 'radio',
        options: [
          { value: 'custom_outfit', label: 'Custom-made outfit (e.g., wedding, matric dance)' },
          { value: 'alterations', label: 'Alterations to existing clothing' },
          { value: 'repairs', label: 'Repairs' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'embroidery',
    questions: [
      {
        id: 'embroidery_need',
        text: 'What do you need embroidered?',
        type: 'radio',
        options: [
          { value: 'corporate_wear', label: 'Corporate wear (logos on shirts)' },
          { value: 'personal_items', label: 'Personal items (gifting)' },
          { value: 'team_uniforms', label: 'Team/School uniforms' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'cake-shops',
    questions: [
      {
        id: 'cake_occasion',
        text: 'What is the occasion for the cake?',
        type: 'radio',
        options: [
          { value: 'birthday', label: 'Birthday' },
          { value: 'wedding', label: 'Wedding' },
          { value: 'corporate_event', label: 'Corporate Event' },
          { value: 'special_treat', label: 'Special Treat' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'caterers',
    questions: [
      {
        id: 'catering_event_type',
        text: 'What type of event are you catering for?',
        type: 'radio',
        options: [
          { value: 'wedding', label: 'Wedding' },
          { value: 'corporate_function', label: 'Corporate Function' },
          { value: 'private_party', label: 'Private Party' },
          { value: 'funeral', label: 'Funeral' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'groomers',
    questions: [
      {
        id: 'pet_type',
        text: 'What pet do you need groomed?',
        type: 'radio',
        options: [
          { value: 'dog', label: 'Dog' },
          { value: 'cat', label: 'Cat' },
          { value: 'other', label: 'Other' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'pet-sitters',
    questions: [
      {
        id: 'pet_sitting_type',
        text: 'What kind of pet sitting do you need?',
        type: 'radio',
        options: [
          { value: 'at_my_home', label: "At my home (while I'm away)" },
          { value: 'daily_visits', label: 'Daily visits' },
          { value: 'dog_walking', label: 'Dog walking' },
          { value: 'boarding', label: "Boarding at sitter's home" },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'tour-operators',
    questions: [
      {
        id: 'tour_type',
        text: 'What kind of tour are you looking for?',
        type: 'radio',
        options: [
          { value: 'safari', label: 'Safari/Wildlife tour' },
          { value: 'city_cultural', label: 'City/Cultural tour' },
          { value: 'adventure', label: 'Adventure tour' },
          { value: 'custom_private', label: 'Custom private tour' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'travel-agents',
    questions: [
      {
        id: 'travel_assistance_need',
        text: 'What type of travel assistance do you need?',
        type: 'radio',
        options: [
          { value: 'international_package', label: 'International holiday package' },
          { value: 'local_package', label: 'Local holiday package' },
          { value: 'flights_accommodation', label: 'Flights and accommodation booking' },
          { value: 'visa_assistance', label: 'Visa assistance' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'town-planners',
    questions: [
      {
        id: 'town_planner_service',
        text: 'What service do you need from a town planner?',
        type: 'radio',
        options: [
          { value: 'rezoning', label: 'Rezoning application' },
          { value: 'subdivision', label: 'Subdivision or consolidation of land' },
          { value: 'consent_use', label: 'Consent use application' },
          { value: 'building_plans', label: 'Building plan submissions' },
          { value: 'consultation', label: 'General consultation/feasibility' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'djs',
    questions: [
        {
            id: 'dj_event_type',
            text: 'What type of event is the DJ for?',
            type: 'radio',
            options: [
                { value: 'wedding', label: 'Wedding' },
                { value: 'corporate_event', label: 'Corporate Event' },
                { value: 'birthday_party', label: 'Birthday Party' },
                { value: 'club_or_bar', label: 'Club or Bar' },
                { value: 'other', label: 'Other' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'tent-hire',
    questions: [
        {
            id: 'tent_type',
            text: 'What type of tent do you need?',
            type: 'radio',
            options: [
                { value: 'peg_and_pole', label: 'Peg and Pole Tent' },
                { value: 'frame', label: 'Frame Tent' },
                { value: 'stretch', label: 'Stretch Tent' },
                { value: 'not_sure', label: 'Not Sure / Need Advice' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'toilet-hire',
    questions: [
        {
            id: 'toilet_type',
            text: 'What type of portable toilets do you need?',
            type: 'radio',
            options: [
                { value: 'standard', label: 'Standard Portable Toilets' },
                { value: 'luxury', label: 'Luxury/VIP Toilets' },
                { value: 'disabled_access', label: 'Disabled Access Toilets' },
                { value: 'construction_site', label: 'Construction Site Toilets' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'videographers',
    questions: [
        {
            id: 'video_event_type',
            text: 'What type of event do you need filmed?',
            type: 'radio',
            options: [
                { value: 'wedding', label: 'Wedding' },
                { value: 'corporate', label: 'Corporate Event/Video' },
                { value: 'music_video', label: 'Music Video' },
                { value: 'personal_event', label: 'Personal Event (e.g., Birthday)' },
                { value: 'real_estate', label: 'Real Estate' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'party-planners',
    questions: [
        {
            id: 'party_type',
            text: 'What type of party are you planning?',
            type: 'radio',
            options: [
                { value: 'birthday', label: 'Birthday Party' },
                { value: 'anniversary', label: 'Anniversary' },
                { value: 'baby_shower', label: 'Baby Shower' },
                { value: 'themed_party', label: 'Themed Party' },
                { value: 'other', label: 'Other' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'insurance',
    questions: [
        {
            id: 'insurance_type',
            text: 'What type of insurance are you looking for?',
            type: 'radio',
            options: [
                { value: 'car', label: 'Car Insurance' },
                { value: 'home', label: 'Home Insurance' },
                { value: 'life', label: 'Life Insurance' },
                { value: 'business', label: 'Business Insurance' },
                { value: 'medical_aid', label: 'Medical Aid' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'dentists',
    questions: [
        {
            id: 'dentist_reason',
            text: 'What is the reason for your dental visit?',
            type: 'radio',
            options: [
                { value: 'checkup', label: 'General Check-up and Cleaning' },
                { value: 'pain', label: 'Pain or Emergency' },
                { value: 'cosmetic', label: 'Cosmetic (Whitening, Veneers)' },
                { value: 'filling_extraction', label: 'Filling or Extraction' },
                { value: 'braces', label: 'Braces/Orthodontics' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'massage-therapists',
    questions: [
        {
            id: 'massage_type',
            text: 'What type of massage are you looking for?',
            type: 'radio',
            options: [
                { value: 'swedish', label: 'Swedish/Relaxation' },
                { value: 'deep_tissue', label: 'Deep Tissue' },
                { value: 'sports', label: 'Sports Massage' },
                { value: 'couples', label: 'Couples Massage' },
                { value: 'not_sure', label: 'Not Sure / Recommendation' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'psychologists',
    questions: [
        {
            id: 'psychologist_reason',
            text: 'What are you seeking help for?',
            type: 'radio',
            options: [
                { value: 'anxiety_depression', label: 'Anxiety or Depression' },
                { value: 'relationship_issues', label: 'Relationship Issues' },
                { value: 'trauma', label: 'Trauma' },
                { value: 'personal_growth', label: 'Personal Growth' },
                { value: 'child_adolescent', label: 'Child or Adolescent Issues' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'plastic-surgeons',
    questions: [
        {
            id: 'plastic_surgery_area',
            text: 'What area are you interested in?',
            type: 'radio',
            options: [
                { value: 'face', label: 'Face (e.g., Rhinoplasty, Facelift)' },
                { value: 'breast', label: 'Breast (e.g., Augmentation, Reduction)' },
                { value: 'body', label: 'Body (e.g., Liposuction, Tummy Tuck)' },
                { value: 'non_surgical', label: 'Non-surgical (e.g., Botox, Fillers)' },
                { value: 'consultation', label: 'General Consultation' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'dieticians',
    questions: [
        {
            id: 'dietician_goal',
            text: 'What is your primary goal?',
            type: 'radio',
            options: [
                { value: 'weight_loss', label: 'Weight Loss' },
                { value: 'medical_condition', label: 'Managing a Medical Condition (e.g., Diabetes)' },
                { value: 'sports_nutrition', label: 'Sports Nutrition' },
                { value: 'healthy_eating', label: 'General Healthy Eating Plan' },
                { value: 'child_nutrition', label: 'Child Nutrition' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'panel-beaters',
    questions: [
        {
            id: 'panel_beating_service',
            text: 'What service do you need?',
            type: 'radio',
            options: [
                { value: 'dent_repair', label: 'Dent and Scratch Repair' },
                { value: 'major_repair', label: 'Major Accident Repair' },
                { value: 'spray_painting', label: 'Spray Painting' },
                { value: 'hail_damage', label: 'Hail Damage Repair' },
                { value: 'assessment_quote', label: 'Assessment for Insurance Quote' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'mechanics',
    questions: [
        {
            id: 'mechanic_service',
            text: 'What service does your car need?',
            type: 'radio',
            options: [
                { value: 'major_service', label: 'Major Service' },
                { value: 'minor_service', label: 'Minor Service / Oil Change' },
                { value: 'specific_repair', label: 'Specific Repair (e.g., Brakes, Engine)' },
                { value: 'diagnostics', label: 'Diagnostics (Warning light on)' },
                { value: 'not_sure', label: 'I\'m not sure' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'auto-glass',
    questions: [
        {
            id: 'auto_glass_service',
            text: 'What do you need?',
            type: 'radio',
            options: [
                { value: 'windscreen_replacement', label: 'Windscreen Replacement' },
                { value: 'chip_repair', label: 'Windscreen Chip Repair' },
                { value: 'side_window', label: 'Side or Rear Window Replacement' },
                { value: 'quote_for_insurance', label: 'Quote for Insurance' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'tow-bars',
    questions: [
        {
            id: 'tow_bar_service',
            text: 'What service do you need?',
            type: 'radio',
            options: [
                { value: 'installation', label: 'New Tow Bar Installation' },
                { value: 'repair', label: 'Repair Existing Tow Bar' },
                { value: 'wiring', label: 'Wiring and Electrics' },
                { value: 'quote', label: 'Just getting a quote' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'towing',
    questions: [
        {
            id: 'towing_reason',
            text: 'Why do you need a tow?',
            type: 'radio',
            options: [
                { value: 'breakdown', label: 'Vehicle Breakdown' },
                { value: 'accident', label: 'Accident Scene' },
                { value: 'transport', label: 'Vehicle Transport (non-emergency)' },
                { value: 'roadside_assistance', label: 'Roadside Assistance (e.g., flat battery, flat tyre)' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'computer-courses',
    questions: [
        {
            id: 'course_level',
            text: 'What is your current skill level?',
            type: 'radio',
            options: [
                { value: 'beginner', label: 'Beginner (Basic computer skills)' },
                { value: 'intermediate', label: 'Intermediate (e.g., Office Suite)' },
                { value: 'advanced', label: 'Advanced (e.g., Programming, Networking)' },
                { value: 'specific_software', label: 'Specific Software (e.g., Adobe, AutoCAD)' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'driving-schools',
    questions: [
        {
            id: 'license_code',
            text: 'What license code are you going for?',
            type: 'radio',
            options: [
                { value: 'learners', label: 'Learner\'s License' },
                { value: 'code_8', label: 'Code 8 (B) - Light Motor Vehicle' },
                { value: 'code_10', label: 'Code 10 (C1) - Heavy Vehicle' },
                { value: 'motorcycle', label: 'Motorcycle License (A)' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'swimming-lessons',
    questions: [
        {
            id: 'swimmer_age',
            text: 'Who are the lessons for?',
            type: 'radio',
            options: [
                { value: 'infant_toddler', label: 'Infant/Toddler' },
                { value: 'child', label: 'Child (4-12 years)' },
                { value: 'teenager', label: 'Teenager' },
                { value: 'adult', label: 'Adult' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'appliance-repairs',
    questions: [
        {
            id: 'appliance_type',
            text: 'Which appliance needs repair?',
            type: 'radio',
            options: [
                { value: 'fridge_freezer', label: 'Fridge / Freezer' },
                { value: 'washing_machine', label: 'Washing Machine' },
                { value: 'dishwasher', label: 'Dishwasher' },
                { value: 'oven_stove', label: 'Oven / Stove' },
                { value: 'other', label: 'Other' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'lawyers',
    questions: [
        {
            id: 'legal_area',
            text: 'What area of law do you need assistance with?',
            type: 'radio',
            options: [
                { value: 'family', label: 'Family Law (Divorce, Custody)' },
                { value: 'criminal', label: 'Criminal Law' },
                { value: 'commercial', label: 'Commercial/Business Law' },
                { value: 'property', label: 'Property Law/Conveyancing' },
                { value: 'labour', label: 'Labour Law' },
                { value: 'other', label: 'Other/Not Sure' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'divorce-lawyers',
    questions: [
      {
        id: 'divorce_type',
        text: 'What best describes your situation?',
        type: 'radio',
        options: [
          { value: 'uncontested', label: 'Uncontested Divorce (Both parties agree)' },
          { value: 'contested', label: 'Contested Divorce' },
          { value: 'consultation', label: 'Just need legal advice/consultation' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'couriers',
    questions: [
      {
        id: 'delivery_type',
        text: 'What type of delivery service do you need?',
        type: 'radio',
        options: [
          { value: 'local_sameday', label: 'Local Same-Day' },
          { value: 'overnight', label: 'Overnight to another city' },
          { value: 'international', label: 'International' },
          { value: 'bulk', label: 'Bulk/Freight' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'shuttle-services',
    questions: [
      {
        id: 'shuttle_service_type',
        text: 'What type of shuttle service do you need?',
        type: 'radio',
        options: [
          { value: 'airport', label: 'Airport Transfer' },
          { value: 'point_to_point', label: 'Point-to-Point Transfer' },
          { value: 'event', label: 'Event/Group Transport' },
          { value: 'tour', label: 'Tour/Sightseeing' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'marriage-counsellors',
    questions: [
      {
        id: 'counselling_format',
        text: 'What format of counselling are you looking for?',
        type: 'radio',
        options: [
          { value: 'couples', label: 'Couples sessions' },
          { value: 'individual', label: 'Individual sessions' },
          { value: 'pre_marital', label: 'Pre-marital counselling' },
          { value: 'not_sure', label: 'Not sure' },
        ],
      },
      ...commonQuestions,
    ],
  },
  {
    service: 'auditors',
    questions: [
        {
            id: 'audit_type',
            text: 'What type of audit service do you need?',
            type: 'radio',
            options: [
                { value: 'internal', label: 'Internal Audit' },
                { value: 'external', label: 'External/Statutory Audit' },
                { value: 'forensic', label: 'Forensic Audit' },
                { value: 'compliance', label: 'Compliance Audit' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'printing',
    questions: [
        {
            id: 'printing_need',
            text: 'What do you need printed?',
            type: 'radio',
            options: [
                { value: 'business_cards', label: 'Business Cards' },
                { value: 'flyers', label: 'Flyers/Brochures' },
                { value: 'banners', label: 'Banners/Posters' },
                { value: 'documents', label: 'Documents' },
                { value: 'other', label: 'Other' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'signs',
    questions: [
        {
            id: 'sign_type',
            text: 'What type of sign do you need?',
            type: 'radio',
            options: [
                { value: 'shop_front', label: 'Shop Front Signage' },
                { value: 'vehicle', label: 'Vehicle Branding/Signage' },
                { value: 'event', label: 'Event Banners/Signs' },
                { value: 'safety', label: 'Safety Signs' },
                { value: 'other', label: 'Other' },
            ],
        },
        ...commonQuestions,
    ],
  },
  {
    service: 'car-window-tinting',
    questions: [
        {
            id: 'tinting_type',
            text: 'What type of tint are you looking for?',
            type: 'radio',
            options: [
                { value: 'smash_grab', label: 'Smash and Grab' },
                { value: 'standard', label: 'Standard Tint' },
                { value: 'removal', label: 'Removal of old tint' },
                { value: 'not_sure', label: 'Not Sure / Need advice' },
            ],
        },
        ...commonQuestions,
    ],
  },
];

