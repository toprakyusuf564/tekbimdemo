import type { CSSProperties } from "react";

const words = ["Bilgisayarınız", "Mağazanız", "Restoranınız", "İşletmenizin ağı"];
const CYCLE = 3; // saniye / kelime (toplam 12 sn, globals.css'teki kelime-degis ile uyumlu)

// Hero'daki süs satırı: değişen kelime + sabit kapanış. Ekran okuyucudan gizlidir, anlam h1'de tamdır.
// Kelimeler aynı grid hücresinde üst üste durur; hücre genişliği en uzun kelimeye göre sabit kalır (CLS 0).
export default function RotatingWord() {
  return (
    <p aria-hidden="true" className="mt-4 text-[clamp(1.125rem,5.5vw,1.5rem)] font-bold">
      <span className="grid text-accent">
        {words.map((w, i) => (
          <span
            key={w}
            className="degisen-kelime"
            // İlk kelime ilk boyamada görünür olsun diye yarım saniye ilerden başlar
            style={{ "--gecikme": `${i * CYCLE - 0.5}s` } as CSSProperties}
          >
            {w}
          </span>
        ))}
      </span>
      <span className="block text-on-chrome-muted">için yanınızdayız.</span>
    </p>
  );
}
