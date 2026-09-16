import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/pro/dashboard', 
        '/pro/admin', 
        '/pro/account-settings', 
        '/pro/verify',
        '/pro/leads/*/pass', // Prevent crawling of lead actions
        '/pro/login',
        '/pro/register',
        '/pro/forgot-password',
        '/pro/reset-password',
        '/api/', // Disallow API routes
        '/*?*', // Disallow all query strings by default except those handled in sitemap
      ],
    },
    sitemap: 'https://www.gaupro.co.za/sitemap.xml',
  };
}
