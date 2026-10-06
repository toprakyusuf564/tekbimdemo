import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/content/site";
import { localBusinessJsonLd } from "@/lib/seo";
import { isProduction } from "@/lib/env";

// Türkçe karakterler için latin-ext dahil; font build sırasında indirilip kendi sunucumuzdan servis edilir
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `Aydın Bilgisayar Servisi | ${site.name}`,
  description: site.description,
  // Canlı dışında indekslenmesin
  ...(isProduction ? {} : { robots: { index: false, follow: false } }),
};

// Sayfa çizilmeden önce temayı uygular (kayıtlı tercih yoksa sistem tercihi) — yanıp sönmeyi önler
const temaScripti = `(function(){try{var t=localStorage.getItem("tema");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaScripti }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-on-accent"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
