const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

// The production domain is also the fallback so SEO URLs never use a placeholder.
export const siteUrl = (configuredSiteUrl || 'https://apnaservo.com').replace(/\/+$/, '');

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}
