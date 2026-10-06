import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

// Statik export için zorunlu
export const dynamic = "force-static";

// Yalnızca var olan (Faz 1) sayfalar; Faz 2 sayfaları yapıldıkça eklenecek
const paths = [
  "/",
  "/hizmetler/teknik-servis",
  "/yazilim/restoran-cafe-otomasyonu",
  "/bakim-anlasmalari",
  "/iletisim",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
