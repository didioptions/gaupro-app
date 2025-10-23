
export type Question = {
  id: string;
  text: string;
  type: 'radio' | 'textarea' | 'text';
  options?: { value: string; label: string }[];
  placeholder?: string;
};

export type QuestionSet = {
  service: string;
  questions: Question[];
};

export const allServices = [
  { value: 'plumber', label: 'Plumber' },
  { value: 'plumbing-repair', label: 'Plumbing Repair' },
  { value: 'plumbing-maintenance', label: 'Plumbing Maintenance' },
  { value: 'electrician', label: 'Electrician' },
  { value: 'carpenter', label: 'Carpenter' },
  { value: 'painter', label: 'Painter' },
  { value: 'builder', label: 'Builder' },
  { value: 'mover', label: 'Mover' },
  { value: 'cleaning-service', label: 'Cleaning Service' },
  { value: 'website-designer', label: 'Website Designer' },
  { value: 'architect', label: 'Architect' },
  { value: 'dstv-installer', label: 'DSTV Installer' },
  { value: 'security', label: 'Security' },
  { value: 'caterer', label: 'Caterer' },
  { value: 'handyman', label: 'Handyman' },
  { value: 'roofer', label: 'Roofer' },
  { value: 'tiler', label: 'Tiler' },
  { value: 'welder', label: 'Welder' },
];

export const serviceQuestionSets: QuestionSet[] = [
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
    ]
  },
  {
    service: 'builder',
    questions: [
      {
        id: 'project_type',
        text: 'What type of project is it?',
        type: 'radio',
        options: [
          { value: 'renovation', label: 'Renovation' },
          { value: 'new_build', label: 'New Build' },
          { value: 'repair', label: 'Repair' },
          { value: 'boundary_wall', label: 'Boundary Wall' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        id: 'project_size',
        text: 'What is the estimated size or budget?',
        type: 'textarea',
        placeholder: 'e.g. A 20sqm room, or a budget of R50,000'
      },
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
    ],
  },
];
