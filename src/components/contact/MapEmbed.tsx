"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { mapsEmbedUrl } from "@/content/site";

// Harita sayfa açılırken yüklenmez; "Haritayı göster" ile Google Maps iframe'i yüklenir
// (performans ve gizlilik için). Kutu boyutu sabit olduğundan düzen kaymaz.
export default function MapEmbed() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-surface sm:aspect-[16/7]">
      {show ? (
        <iframe
          title="Tekbim Bilgisayar konumu (Google Haritalar)"
          src={mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
          <Icon name="pin" size={32} className="text-accent-text" />
          <p className="max-w-sm text-sm text-muted">
            Harita, siz isteyene kadar yüklenmez. Göster derseniz Google Haritalar&apos;a bağlanılır.
          </p>
          <button
            type="button"
            onClick={() => setShow(true)}
            className="rounded-md bg-accent px-5 py-2.5 font-semibold text-on-accent hover:brightness-95"
          >
            Haritayı göster
          </button>
        </div>
      )}
    </div>
  );
}
