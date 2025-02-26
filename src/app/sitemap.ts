import { API_URL, ROUTES, WEBSITE_HOST_URL } from "@/configs";
import type { MetadataRoute } from "next";

type changeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const changeFrequency = "daily" as changeFrequency;

  const routes = Object.values(ROUTES).map((page: string) => ({
    url: `${WEBSITE_HOST_URL}/${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes];
}
