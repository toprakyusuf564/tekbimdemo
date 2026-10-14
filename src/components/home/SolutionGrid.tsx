import Link from "next/link";
import type { ReactNode } from "react";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

type Item = { slug: string; title: string; summary: string; href: string; available: boolean };

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  items: Item[];
  tone?: "bg" | "surface";
  // Başlığın sağında gösterilen süs (aria-hidden olmalı); dar ekranda gizlenir
  aside?: ReactNode;
};

// Hizmetler ve yazılım çözümleri için ortak kart grid'i.
// Sayfası henüz olmayan (available: false) kartlar linksiz gösterilir.
export default function SolutionGrid({ id, eyebrow, title, items, tone = "bg", aside }: Props) {
  // Kart zemini bölüm zemininin tersi olsun
  const cardBg = tone === "surface" ? "bg-bg" : "bg-surface";
  return (
    <Section labelledBy={id} tone={tone}>
      <div className="flex items-end justify-between gap-6">
        <SectionTitle id={id} eyebrow={eyebrow} title={title} />
        {aside && <div className="hidden shrink-0 sm:block">{aside}</div>}
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.slug} data-reveal className={`rounded-xl border border-border p-5 ${cardBg}`}>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.summary}</p>
            {item.available && (
              <Link
                href={item.href}
                className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-link underline-offset-2 hover:underline"
              >
                Detaylar<span className="sr-only">: {item.title}</span> →
              </Link>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
