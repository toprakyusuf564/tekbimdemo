import type { Metadata } from "next";
import { site } from "@/content/site";

// Mutlak URL üretir (canonical, OG, JSON-LD için)
export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

type PageSeo = {
  // title ≤60, description ≤155 karakter; her sayfa özgün yazar
  title: string;
  description: string;
  path: string;
};

// Sayfa başına metadata: canonical + Open Graph + Twitter kartı
export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "tr_TR",
      type: "website",
    },
    twitter: { card: "summary", title, description },
  };
}

// Tüm sitede geçerli LocalBusiness (ComputerStore) yapısal verisi
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    name: site.name,
    url: site.url,
    description: site.description,
    foundingDate: String(site.foundingYear),
    telephone: [site.phone.tel, site.mobile.tel],
    email: site.email,
    sameAs: Object.values(site.social),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.hours.days,
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    areaServed: { "@type": "City", name: site.address.city },
  };
}

// Hizmet / yazılım çözümü sayfaları için Service
export function serviceJsonLd(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@type": "ComputerStore", name: site.name, url: site.url },
    areaServed: { "@type": "City", name: site.address.city },
  };
}

// SSS girdisi. approved: false olanlar sayfada etiketli görünür ama yapısal veriye girmez.
export type FaqEntry = { question: string; answer: string; approved: boolean };

// SSS bölümleri için FAQPage. Yalnızca onaylı sorular dahil edilir; hiç yoksa null döner.
export function faqJsonLd(items: FaqEntry[]) {
  const approved = items.filter((i) => i.approved);
  if (approved.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: approved.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

// Tüm alt sayfalar için BreadcrumbList (ana sayfa otomatik eklenir)
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  const items = [{ name: "Ana Sayfa", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

// İletişim sayfası için ContactPage (LocalBusiness zaten tüm sitede var)
export function contactPageJsonLd(opts: { name: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: opts.name,
    url: absoluteUrl(opts.path),
    mainEntity: { "@type": "ComputerStore", name: site.name, url: site.url },
  };
}
