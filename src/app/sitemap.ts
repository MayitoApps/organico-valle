import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.organicohotelboutiquevalle.com";
  const now = new Date();

  const routes = [
    "",
    "/nuestras-habitaciones",
    "/quienes-somos",
    "/restaurante",
    "/mixologia",
    "/momentos",
    "/nuestros-espacios",
    "/eventos",
    "/conoce-valle",
    "/contacto",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/nuestras-habitaciones" ? 0.9 : 0.8,
  }));
}
