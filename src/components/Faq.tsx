import Link from "next/link";
import type { FaqEntry } from "@/lib/seo";
import { PendingTag } from "./PendingNote";

export type FaqItem = FaqEntry & {
  // Yanıtın altında gösterilen isteğe bağlı bağlantı
  action?: { label: string; href: string };
};

// Sık sorulan sorular: JS gerektirmeyen <details> akordeonu.
// Onaysız (approved: false) sorular etiketle gösterilir.
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-surface">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
            <span>
              {item.question}
              {!item.approved && <PendingTag className="ml-2 text-xs" />}
            </span>
            <span aria-hidden="true" className="shrink-0 text-accent-text transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-muted">{item.answer}</p>
          {item.action && (
            <p className="mt-3">
              {item.action.href.startsWith("/") ? (
                <Link href={item.action.href} className="font-semibold text-link underline-offset-2 hover:underline">
                  {item.action.label} →
                </Link>
              ) : (
                <a
                  href={item.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-link underline-offset-2 hover:underline"
                >
                  {item.action.label} →
                </a>
              )}
            </p>
          )}
        </details>
      ))}
    </div>
  );
}
