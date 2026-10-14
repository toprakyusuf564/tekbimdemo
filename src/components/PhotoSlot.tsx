import fs from "node:fs";
import path from "node:path";
import Icon, { type IconName } from "@/components/Icon";
import photos from "@/content/photos.json";

export type PhotoKey = keyof typeof photos;

// Tek fotoğraf alanı: public/images/ altında dosya varsa onu gösterir, yoksa marka renklerinde yer tutucu çizer.
// Dosya adı, oran ve çözünürlük src/content/photos.json içinde sabittir (fotograf-hazirla betiği de aynı dosyayı okur).
// Sunucu bileşenidir; dosya varlığı build sırasında kontrol edilir (statik çıktıda JS gerekmez).
export default function PhotoSlot({ slot, className = "" }: { slot: PhotoKey; className?: string }) {
  const p = photos[slot];
  const var_mi = fs.existsSync(path.join(process.cwd(), "public", "images", p.dosya));
  // Aspect-ratio her iki durumda da sabit: yükleme sırasında kayma (CLS) olmaz
  const stil = { aspectRatio: `${p.en} / ${p.boy}` };

  if (var_mi) {
    return (
      <figure className={`overflow-hidden rounded-xl border border-border bg-surface ${className}`} style={stil}>
        {/* Statik export'ta next/image optimizer çalışmaz; dosya betikle önceden boyutlandırılır */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/${p.dosya}`}
          alt={p.alt}
          width={p.en}
          height={p.boy}
          loading="lazy"
          decoding="async"
          className="h-full w-full max-w-full object-cover"
        />
      </figure>
    );
  }

  // Yer tutucu: süs olarak ekran okuyuculardan gizlenir, "eksik" gibi bir yazı içermez
  return (
    <div
      aria-hidden="true"
      className={`flex flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[var(--chrome)] to-[color-mix(in_srgb,var(--chrome),white_14%)] p-6 text-center text-on-chrome ${className}`}
      style={stil}
    >
      <Icon name={p.ikon as IconName} size={40} className="text-accent" />
      <p className="text-lg font-semibold">{p.baslik}</p>
    </div>
  );
}
