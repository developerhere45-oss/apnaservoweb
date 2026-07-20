import type { MetadataRoute } from 'next';
import { absoluteUrl } from './site';

const publicPaths = [
  '/',
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
  return publicPaths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.6
  }));
}
