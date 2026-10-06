# İlerleme

## Faz 1

### Adım 1 — Proje iskeleti
- [x] Next.js (App Router, TS, Tailwind, ESLint, `src/`) kuruldu
- [x] `output: 'export'` + `images.unoptimized`
- [x] `src/content/` (site, services, software, maintenance)
- [x] `src/lib/seo.ts` (metadata + JSON-LD üreticileri)
- [x] Ortak bileşenler: Header, MobileMenu, Footer, WhatsAppButton, ThemeToggle, Container, SectionTitle, JsonLd
- [x] `layout.tsx` (lang="tr", Inter latin + latin-ext, açık/koyu tema, LocalBusiness JSON-LD)
- [x] `sitemap.ts`, `robots.ts`, `public/_redirects`
- [x] Doğrulama: `tsc --noEmit` temiz, lint temiz, `npm run dev` ile /, sitemap.xml, robots.txt 200 döndü

### Adım 2 — Ana sayfa
- [x] Karar uygulamaları: `@AGENTS.md` + node_modules istisnası (CLAUDE.md), sosyal hesaplar + footer ikonları, Servis Talebi → `/iletisim#servis-talebi`
- [x] Ortam ayrımı: `NEXT_PUBLIC_SITE_ENV` (varsayılan `preview` → robots Disallow + noindex), `.env.example`
- [x] Ana sayfa: Hero, hızlı işlemler, servis adımları, hizmetler, yazılım, bakım özeti, markalar, iletişim şeridi
- [x] Onay bekleyenler `ONAY_LISTESI.md`'ye eklendi (#3, #8, #9)
- [x] Doğrulama: `tsc --noEmit` ve lint temiz; dev'de tek h1, noindex ve `Disallow: /` (preview), robots `Allow` (production) görüldü

### Adım 2b — Ana sayfa animasyonları
- [x] Süreç kuralı CLAUDE.md bölüm 10'a eklendi; marka rozetleri düzeltildi (PSON→Epson, AnyDesk rozetten çıkarıldı)
- [x] Hero devre kartı SVG + akan ışık noktaları, değişen kelime (CLS'siz grid yığını, h1 sabit), barkod lazer taraması, kaydırınca beliren kartlar (`ScrollReveal`)
- [x] `prefers-reduced-motion`: tüm animasyonlar durur; JS yoksa içerik görünür
- [ ] Görsel kontrol Yusuf'ta

### Kalan
- [ ] Adım 3 — `/hizmetler/teknik-servis`
- [ ] Adım 4 — `/yazilim/restoran-cafe-otomasyonu`
- [ ] Adım 5 — `/bakim-anlasmalari`
- [ ] Adım 6 — `/iletisim`
- [ ] Adım 7 — Build + Lighthouse kontrolü

## Faz 2
Faz 1 onaylandıktan sonra (CLAUDE.md bölüm 5).
