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

### Adım 3 — `/hizmetler/teknik-servis`
- [x] PageHero, Breadcrumb (+JSON-LD), Faq (`<details>`), CtaBand ortak bileşenleri; `ServiceSteps` yeniden kullanıldı
- [x] Kapsam kartları, servis takibi, bakım anlaşması bölümü, SSS (FAQPage), Service + BreadcrumbList JSON-LD
- [x] Onay bekleyenler `ONAY_LISTESI.md` #10–#13
- [x] Doğrulama: `tsc --noEmit` ve lint temiz; sayfa 200, tek h1, title 53 / description 147 karakter
- [ ] formtakip.net doğrudan adresleri doğrulanacak (Yusuf)

### Düzeltmeler (Adım 3 sonrası)
- [x] Süreç kuralı güncellendi (3001: Yusuf, 3002: Claude), apostrof kuralı (bölüm 4)
- [x] formtakip linkleri: `/default.asp` ve `/yetkili.asp`, protokol `site.ts` sabitinde (`FORMTAKIP_PROTOCOL`)
- [x] FAQPage JSON-LD'ye sadece `approved: true` sorular girer (`faqJsonLd` içinde genel kural)
- [x] Bakım anlaşması/web servis metni eski siteden doğrulandı (ONAY #13 kapandı)

### Adım 4 — `/yazilim/restoran-cafe-otomasyonu`
- [x] İçerik eski sayfadan (tekbim.net/portfolio/our-project-01/): ERP12 Restoran, hedef sektörler, özellikler; eski sayfada olmayan iddia yok
- [x] PageHero (barkod süsü), kimler için, özellikler, donanım, kurulum/destek, SSS, CtaBand ("Demo / Teklif İste")
- [x] JSON-LD: Service + FAQPage (3 onaylı soru) + BreadcrumbList
- [x] Onay bekleyenler `ONAY_LISTESI.md` #14–#19
- [x] Doğrulama: `tsc --noEmit` ve lint temiz; sayfa 200, tek h1, title 50 / description 141 karakter
- [ ] formtakip https desteği Yusuf tarafından kontrol edilecek

### Kalan
- [ ] Adım 5 — `/bakim-anlasmalari`
- [ ] Adım 6 — `/iletisim`
- [ ] Adım 7 — Build + Lighthouse kontrolü

## Faz 2
Faz 1 onaylandıktan sonra (CLAUDE.md bölüm 5).
