import { showPending } from "@/lib/env";

// Satır içi onay etiketi. NEXT_PUBLIC_SHOW_PENDING=false iken hiçbir şey çizmez.
export function PendingTag({ className = "" }: { className?: string }) {
  if (!showPending) return null;
  return <span className={`font-semibold text-accent-text ${className}`}>[ONAY BEKLİYOR]</span>;
}

// Firma sahibinden onay bekleyen içeriğin görünür notu (ONAY_LISTESI.md ile eşleşir).
// NEXT_PUBLIC_SHOW_PENDING=false iken gizlenir.
export default function PendingNote({ children }: { children: string }) {
  if (!showPending) return null;
  return (
    <p className="mt-2 text-sm">
      <PendingTag /> <span className="font-semibold text-accent-text">{children}</span>
    </p>
  );
}
