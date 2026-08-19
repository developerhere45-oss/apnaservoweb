import type { MetadataRoute } from 'next';
import { absoluteUrl } from './site';
import { servicePages } from './service-data';

const publicPaths = [
  '/',
  '/services',
  '/our-story',
  '/contact-us',
  '/legal-support',
  '/privacy-policy',
  '/terms-and-conditions',
  '/partner-terms-and-conditions',
  '/refund-policy',
  '/delete-account'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitePages: MetadataRoute.Sitemap = publicPaths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.6
  }));
  const serviceUrls = servicePages.map(({ slug }) => ({ url: absoluteUrl(`/services/${slug}`), changeFrequency: 'monthly' as const, priority: 0.8 }));
  return [...sitePages, ...serviceUrls];
}
