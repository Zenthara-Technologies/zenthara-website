import type { MetadataRoute } from 'next';
import { posts } from '@/content/posts';
import { cases } from '@/content/case-studies';

const SITE_URL = 'https://zentharatechnologies.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const caseRoutes: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${SITE_URL}/portfolio/${c.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...caseRoutes, ...postRoutes];
}
