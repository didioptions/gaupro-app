import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/pro/dashboard', '/pro/admin', '/pro/account-settings', '/pro/verify'],
    },
    sitemap: 'https://www.gaupro.co.za/sitemap.xml',
  };
}
