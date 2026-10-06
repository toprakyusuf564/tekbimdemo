import type { MetadataRoute } from "next";
import { isProduction } from "@/lib/env";
import { absoluteUrl } from "@/lib/seo";

// Statik export için zorunlu
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Canlı dışındaki ortamlarda (demo/preview) tüm site engellenir
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
