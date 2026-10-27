import { MetadataRoute } from 'next';
import { allServices } from '@/lib/services-list';
import { allLocations } from '@/lib/locations';

/**
 * Generates the sitemap for GauPro South Africa.
 * Includes static routes, dynamic service categories, and city listings.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.gaupro.co.za';

  // 1. Static Core Pages
  const staticPaths = [
    '',
    '/about',
    '/how-it-works',
    '/how-it-works-for-pros',
    '/contact',
    '/faq',
    '/blog',
    '/our-mission',
    '/pro-centre',
    '/pro-success-stories',
    '/trust-and-safety',
    '/browse-leads',
    '/browse-categories',
    '/privacy',
    '/terms',
    '/cookie-policy',
  ];

  const staticRoutes = staticPaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Service Categories (Canonical base pages)
  const serviceRoutes = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.value}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Location Listing Pages (Canonical base pages)
  const locationRoutes = allLocations.map((loc) => ({
    url: `${baseUrl}/services/in/${loc.value}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 4. Blog Post Routes
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

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...blogRoutes,
  ];
}
