// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://zenzebra.in/', lastModified: new Date() },
    { url: 'https://zenzebra.in/brands', lastModified: new Date() },
    { url: 'https://zenzebra.in/partners', lastModified: new Date() },
    { url: 'https://zenzebra.in/catalog' , lastModified: new Date() },
  ];
}