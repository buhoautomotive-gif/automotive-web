import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  // Activar cuando se confirme el dominio público; nunca inventar URLs canónicas.
  if (!site.url) return [];
  return [
    "",
    "/como-funciona",
    "/servicios",
    "/sobre-buho",
    "/calculadora",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
