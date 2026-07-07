import { MetadataRoute } from 'next';
import { allServices } from '@/lib/service-questions';

/**
 * Generates the sitemap for GauPro South Africa.
 * Includes static routes, dynamic service categories, and blog posts.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.gaupro.co.za';

  // 1. Static Core Pages
  const staticRoutes = [
    '',
    '/about',
    '/how-it-works',
    '/how-it-works-for-pros',
    '/contact',
    '/faq',
    '/blog',
    '/careers',
    '/our-mission',
    '/pro-centre',
    '/pro-success-stories',
    '/trust-and-safety',
    '/browse-leads',
    '/browse-categories',
    '/pro/signup',
    '/pro/register',
    '/privacy',
    '/terms',
    '/cookie-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Service Categories (e.g., /services/plumber)
  const serviceRoutes = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.value}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Blog Post Routes (Hardcoded based on existing posts)
  const blogSlugs = [
    'how-to-succeed-on-gaupro',
    'gaupro-difference',
    'how-gaupro-works',
    'service-costs-south-africa',
    'why-choose-gaupro',
    'gaupro-vs-others',
  ];
  
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 4. Top Companies (Industry Landing Pages)
  const topCompanySlugs = [
    'access-control', 'accounting', 'agricultural', 'agricultural-equipment',
    'agricultural-services', 'air-conditioning', 'alarm-systems', 'aluminium-doors-and-windows',
    'architects', 'armed-response', 'auditors', 'auto-electricians', 'auto-glass',
    'awnings', 'baby-sitters', 'balustrades', 'bathroom-renovations', 'batteries',
    'beauty-salons', 'blinds', 'borehole-drillers', 'brakes-and-clutches', 'builders',
    'building-materials', 'burglar-bars', 'business-consultants', 'cake-shops',
    'car-aircon-regassing', 'car-alarms', 'car-tracking', 'car-window-tinting',
    'carpenters', 'carpet-cleaning', 'carpeting', 'carports', 'ceiling-installers',
    'cellphone-repairs', 'chiropractors', 'cleaning-services', 'computer-courses',
    'computer-repairs', 'concrete-slabs', 'conveyancers', 'counsellors', 'couriers',
    'creches', 'curtains', 'day-care-centres', 'debt-collection', 'debt-counsellors',
    'demolition', 'dentists', 'dermatologists', 'dieticians', 'divorce-lawyers',
    'doors', 'dressmakers', 'driving-schools', 'drywalls', 'electric-fencing',
    'electricians', 'embroidery', 'engine-overhauls', 'estate-agents', 'event-decorations',
    'event-planners', 'family-care', 'fashion', 'fashion-accessories', 'fashion-clothing-stores',
    'fashion-shoes', 'fencing', 'financial-advisors', 'fire-safety', 'firearm-training',
    'first-aid', 'flooring', 'florists', 'forklift-training', 'fridge-repairs',
    'fuels', 'garage-door-motors', 'garage-doors', 'gardeners', 'gas-installers',
    'gas-suppliers', 'gate-motors', 'gates', 'gearboxes', 'generators', 'glass-works',
    'graphic-designers', 'groomers', 'guttering', 'gynaecologists', 'hair-stylists',
    'handymen', 'high-pressure-cleaning', 'holiday-accommodation', 'home-improvements',
    'home-loans', 'insurance', 'interior-designing', 'internet-solutions', 'irrigation',
    'jumping-castle-hire', 'kitchen-renovations', 'labour-lawyers', 'laminate-flooring',
    'landscaping', 'laptop-repairs', 'laser-clinics', 'laundry-services', 'lawyers',
    'life-coaches', 'locksmiths', 'logo-design', 'make-up-artists', 'marble-and-granite-suppliers',
    'marriage-counsellors', 'massage-therapists', 'medical-aid', 'networking',
    'office-cleaning', 'office-equipment', 'palisade-fencing', 'panel-beaters',
    'painters', 'party-planners', 'paving', 'personal-protection-equipment',
    'personal-trainers', 'pest-control', 'pet-sitters', 'pets', 'physiotherapists',
    'plant-hire', 'plastering', 'plastic-surgeons', 'plumbers', 'pool-cleaning',
    'precast-fencing', 'prepaid-electricity-meters', 'printing', 'private-investigators',
    'psychologists', 'recruitment-agencies', 'roofing', 'rubble-removal', 'school-transport',
    'security-training', 'shadeports', 'shower-doors', 'shuttle-services', 'signs',
    'skip-hire', 'solar-geysers', 'solar-systems', 'stationery', 'swimming-lessons',
    'swimming-pool-builders', 'tar-surfacing', 'taxis', 'team-building', 'thatched-roofing',
    'tiler', 'tiling', 'toilet-hire', 'tour-operators', 'town-planners', 'tow-bars',
    'tracing', 'transportation', 'travel-agents', 'tree-felling', 'tlb-hire',
    'tv-installers', 'tv-repairs', 'upholsterers', 'upholstery-cleaning', 'venues',
    'videographers', 'waterproofing', 'wedding-photographers', 'wedding-venues',
    'welders', 'wendy-houses', 'window-cleaning', 'window-tinting', 'wire-mesh-fencing',
    'wooden-decking'
  ];

  const topCompanyRoutes = topCompanySlugs.map((slug) => ({
    url: `${baseUrl}/top-companies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
    ...topCompanyRoutes,
  ];
}
