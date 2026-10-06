"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Sayfadaki [data-reveal] öğelerini kaydırınca yumuşakça belirtir.
// Gizleme sınıfı burada (JS ile) eklenir; JS yüklenmezse içerik görünür kalır.
// İlk ekranda zaten görünen öğelere dokunulmaz. Sayfa değişince yeniden çalışır.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("reveal-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      // Aynı gruptaki kartlar sırayla belirsin (en fazla 4 basamak)
      const index = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--reveal-delay", `${Math.min(index, 4) * 70}ms`);
      el.classList.add("reveal-init");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
