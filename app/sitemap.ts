import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://zenzebra.in/sitemap.xml',
    host: 'https://zenzebra.in',
  };
}