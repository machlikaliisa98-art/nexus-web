import type { MetadataRoute } from "next";

const baseUrl = "https://nexus-web-nu-eight.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}