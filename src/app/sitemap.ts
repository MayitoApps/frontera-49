import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.frontera49.com';
  const lastModified = new Date();

  const routes = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/habitaciones`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/espacios`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/restaurante`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/eventos`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/momentos`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/quienes-somos`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hagamos-equipo`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/aviso-de-privacidad`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return routes;
}
