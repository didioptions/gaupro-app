
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
        id: 'plumbing_issue',
        text: 'What needs fixing?',
        type: 'radio',
        options: [
          { value: 'toilet', label: 'Toilet' },
          { value: 'geyser', label: 'Geyser' },
          { value: 'pipes', label: 'Pipes' },
          { value: 'taps', label: 'Taps / Faucets' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        id: 'urgency',
        text: 'How soon do you need it?',
        type: 'radio',
        options: [
          { value: 'today', label: 'Urgently / Today' },
          { value: 'this_week', label: 'Within this week' },
          { value: 'flexible', label: 'I\'m flexible' },
        ],
      },
      {
        id: 'description',
        text: 'Can you describe the issue in more detail?',
        type: 'textarea',
        placeholder: 'e.g. The toilet is constantly running, or the geyser is not heating up.'
      }
    ],
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
        id: 'urgency',
        text: 'How urgent is this request?',
        type: 'radio',
        options: [
          { value: 'emergency', label: 'Emergency - need help now' },
          { value: 'soon', label: 'Soon' },
          { value: 'flexible', label: 'Flexible' },
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
