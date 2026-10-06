import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages için statik çıktı (out/ klasörü)
  output: "export",
  // Statik export'ta görsel optimizer çalışmaz; görseller public/ altından hazır servis edilir
  images: { unoptimized: true },
};

export default nextConfig;
