import { MetadataRoute } from 'next';
import { getServices, getProjects, catalog } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trendy-taupe.vercel.app';

  // Static core routes
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/clients',
    '/contact',
    '/doors',
    '/windows',
    '/kitchens',
    '/wardrobes',
    '/catalog/shower',
    '/privacy',
    '/terms'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic catalog routes
  const catalogRoutes = catalog.map((item) => ({
    url: `${baseUrl}/${item.category}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...catalogRoutes];
}
