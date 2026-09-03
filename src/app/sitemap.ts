import type { MetadataRoute } from "next";

const baseUrl = "https://nexusinc.rw";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/leadership`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/board`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/products/ai-studio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/products/nexus-link`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/research`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/technologies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}