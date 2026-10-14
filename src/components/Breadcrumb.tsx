import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

type Props = { trail: { name: string; path: string }[]; className?: string };

// Görünür ekmek kırıntısı + BreadcrumbList JSON-LD (ana sayfa otomatik eklenir)
export default function Breadcrumb({ trail, className = "" }: Props) {
  return (
    <>
      <nav aria-label="Sayfa yolu" className={`text-sm ${className}`}>
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="inline-flex min-h-11 items-center rounded-sm underline-offset-2 hover:underline">Ana Sayfa</Link>
          </li>
          {trail.map((t, i) => (
            <li key={t.path} className="flex items-center gap-2">
              <span aria-hidden="true">›</span>
              {i === trail.length - 1 ? (
                <span aria-current="page" className="font-semibold">{t.name}</span>
              ) : (
                <Link href={t.path} className="inline-flex min-h-11 items-center rounded-sm underline-offset-2 hover:underline">{t.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(trail)} />
    </>
  );
}
