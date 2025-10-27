
import { CheckCircle, Shield, Sparkles, Star, Users, MapPin, Building, Wrench, Lightbulb, DollarSign, HelpCircle, LifeBuoy, Zap } from 'lucide-react';

export const trustBadges = [
  { icon: DollarSign, text: '100% Free' },
  { icon: CheckCircle, text: 'Verified Pros' },
  { icon: Users, text: '500K+ Users' },
  { icon: Star, text: '4.9★ Rating' },
];

export const gauproNumbers = [
  { number: 15000, label: 'Verified Professionals', suffix: '+' },
  { number: 500000, label: 'Successful Jobs Completed', suffix: '+' },
  { number: 2, label: 'Average Posting Time', suffix: ' mins' },
  { number: 0, label: 'Cost to Customers', prefix: 'R' },
];

export const serviceCategories = [
    { icon: Wrench, name: "Home Services", description: "Plumbing, Electrical, Painting" },
    { icon: Building, name: "Maintenance", description: "Appliance Repair, Pool Services" },
    { icon: Zap, name: "Construction", description: "Building, Renovations, Roofing" },
    { icon: Lightbulb, name: "Professional", description: "IT Support, Accounting, Legal" },
    { icon: Sparkles, name: "Personal", description: "Beauty, Fitness, Tutoring" },
    { icon: Shield, name: "Security", description: "Alarm Systems, CCTV, Guards" },
];

export const featureComparison = [
  { feature: 'Smart Adaptive Forms', benefit: 'Questions adjust based on your service type', keywords: 'Gaupro smart booking system' },
  { feature: 'Photo Upload Feature', benefit: 'Get 40% more accurate quotes with visuals', keywords: 'Gaupro photo quotes' },
  { feature: 'GPS Location Detection', benefit: 'Automatically finds professionals near you', keywords: 'Gaupro near me' },
  { feature: 'Emergency Service Options', benefit: 'Priority listing for urgent needs', keywords: 'Gaupro emergency services' },
  { feature: 'Budget Range Selector', benefit: 'Filter responses within your price range', keywords: 'Gaupro pricing estimates' },
];

export const faqItems = [
    {
        question: "Is Gaupro really free for customers?",
        answer: "Yes, 100%. Posting a job, receiving quotes, and comparing professionals is completely free for customers. You only pay the professional you decide to hire for their services."
    },
    {
        question: "How does Gaupro verify its professionals?",
        answer: "Every professional on Gaupro goes through a multi-step verification process, which includes ID verification, business registration checks (where applicable), and a review of their qualifications and past work. Look for the 'Verified' badge on their profile."
    },
    {
        question: "What areas does Gaupro cover in South Africa?",
        answer: "Gaupro has a nationwide network of professionals, with a strong presence in all major cities like Johannesburg, Cape Town, Durban, Pretoria, and surrounding suburbs. We are continuously expanding to cover more rural areas as well."
    },
    {
        question: "How quickly will I receive quotes?",
        answer: "Most users receive their first few quotes within 1-2 hours of posting a job. For popular services in major cities, it can be as fast as 30 minutes."
    }
];

export const successStoriesData = [
  {
    name: 'Thandi M.',
    location: 'Johannesburg',
    quote: '“Gaupro saved my wedding! Our caterer cancelled last minute, and we found a new, higher-rated one on Gaupro within an hour. The food was incredible!”',
    avatarSeed: 'testimonial1',
    review: '(Verified Review)'
  },
  {
    name: 'John S.',
    location: 'Cape Town',
    quote: '“Best platform for home repairs. I’ve used it for a plumber, an electrician, and a painter. Every pro was vetted, professional, and did great work. No more endless searching.”',
    avatarSeed: 'testimonial2',
    review: '(Verified Review)'
  },
  {
    name: 'Mohammed R.',
    location: 'Durban',
    quote: '“As a service provider, Gaupro has been essential for growing my business. The leads are genuine, and the review system helps me build trust with new clients.”',
    avatarSeed: 'testimonial3',
    review: '(Service Provider)'
  },
];
