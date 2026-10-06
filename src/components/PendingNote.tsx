// Firma sahibinden onay bekleyen içeriğin görünür etiketi (ONAY_LISTESI.md ile eşleşir)
export default function PendingNote({ children }: { children: string }) {
  return <p className="mt-2 text-sm font-semibold text-accent-text">[ONAY BEKLİYOR] {children}</p>;
}
