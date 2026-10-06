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

### Düzeltmeler (Adım 4 sonrası)
- [x] ERP12 marka rozetine eklendi (ONAY #14 notu), "Yemeksepeti" yazımı + güncelliği belirsiz olduğu için onaysız (ONAY #20)
- [x] `NEXT_PUBLIC_SHOW_PENDING` (varsayılan true), `PendingTag`/`PendingNote`; `.env.example` ve CLAUDE.md bölüm 4

### Adım 5 — `/bakim-anlasmalari`
- [x] 3 paket kartı ("Teklif iste" → `/iletisim?konu=bakim#servis-talebi`), web servis bölümü, karşılaştırma tablosu (yatay kaydırılabilir, bilinmeyen hücreler onay etiketli), kimler için, SSS, CtaBand
- [x] JSON-LD: Service (fiyat yok) + FAQPage (onaylı sorular) + BreadcrumbList
- [x] Onay bekleyenler `ONAY_LISTESI.md` #21–#24

### Adım 6 — `/iletisim`
- [x] İletişim bilgileri (site.ts'ten), harita (sadece "Haritayı göster" ile yüklenir, adresle arama) + "Yol tarifi al"
- [x] Form (`id="servis-talebi"`): doğrulama, `?konu=` ile tür seçimi (Suspense + useSearchParams), WhatsApp + mailto, KVKK onayı (Aydınlatma Metni yer tutucu), aria-live hata/durum
- [x] Tüm "Servis Talebi" butonları `?konu=servis`, restoran "Demo / Teklif İste" `?konu=demo`, bakım "Teklif iste" `?konu=bakim`
- [x] JSON-LD: ContactPage + BreadcrumbList
- [x] Onay bekleyenler `ONAY_LISTESI.md` #25–#26
- [x] Doğrulama: `tsc --noEmit` ve lint temiz; 5 Faz 1 sayfası + sitemap + robots 200, sayfalardaki tüm iç linkler 200
- [ ] Formun tarayıcıda elle denenmesi (curl ile etkileşim test edilemedi): ?konu= ön seçimi, doğrulama mesajları, WhatsApp/mailto

### Faz 1 durumu
Beş sayfa tamam. Faz 1 onayı ve Adım 7 (build + Lighthouse) sırada.

### Düzeltme — iletişim formu tek render
- [x] Suspense/useSearchParams kaldırıldı; `?konu=` mount sonrası `window.location.search`'ten okunuyor (lint `setState in effect` kuralı yüzünden `useSyncExternalStore`, sunucu snapshot'ı `null`)
- [x] `id="servis-talebi"` formda değil, saran `<section>`'da; `out/iletisim.html`'de tek `<form>` ve tek id doğrulandı
- [x] Form mantığı `src/lib/contactForm.ts`'e çıktı (node ile test edildi): KVKK işaretsizken hata, harfli telefon reddi, `encodeURIComponent` ile ğ/ü/ş/ı/ö/ç/İ ve satır sonları kayıpsız; mailto gövdesi CRLF

### Adım 7 — Build ve Lighthouse
- [x] `npm audit`: 5 high, hepsi `eslint-config-next` → `braces` zincirinde (yalnızca geliştirme bağımlılığı, çıktıya girmez); `--omit=dev` ile 0 açık. `npm audit fix` (force'suz) bir şey değiştirmedi. Tek çözüm `--force` (eslint-config-next 14'e düşüyor), uygulanmadı
- [x] `NEXT_PUBLIC_SITE_ENV=production npm run build` → 10 statik sayfa; `out/_redirects` `public/_redirects` ile aynı (15 satır)
- [x] `out/` 3002'de `npx serve` ile servis edildi, Lighthouse 12.8.2 mobil, 5 sayfa; JSON raporlar repo dışında: `../tekbimdemo-raporlar/`; 3002 sunucusu PID ile kapatıldı
- [x] Düzeltilen gerçek bulgular: `target-size` (hero/iletişim şeridindeki `tel:` linkleri 17px yüksekti → `py-1`), `label-content-name-mismatch` (logo `aria-label` kaldırıldı, görünür metin + `sr-only` "ana sayfa"). Sonuç: 5 sayfada Erişilebilirlik 100
- [x] Kullanılmayan create-next-app şablon SVG'leri `public/`'ten silindi
- [x] Varsayılan (preview) ayarla yeniden build alındı; `out/robots.txt` `Disallow: /`

**Önce / sonra**

| | Eski tekbim.net (6 Ekim 2026) | Yeni demo (Lighthouse mobil, yerel) |
|---|---|---|
| PageSpeed | Zaman aşımı (`net::ERR_TIMED_OUT`), ölçülemedi | Aşağıdaki tablo |

| Sayfa | Perf (medyan, aralık) | A11y | BP | SEO | LCP (medyan) | CLS | TBT (medyan) |
|---|---|---|---|---|---|---|---|
| / | 96 (96–97) | 100 | 100 | 100 | 2.00 s | 0.000 | 191 ms |
| /hizmetler/teknik-servis | 94 (75–97) | 100 | 100 | 100 | 2.26 s | 0.000 | 254 ms |
| /yazilim/restoran-cafe-otomasyonu | 95 (81–97) | 100 | 100 | 100 | 2.00 s | 0.000 | 242 ms |
| /bakim-anlasmalari | 90 (89–94) | 100 | 100 | 100 | 2.12 s | 0.000 | 298 ms |
| /iletisim | 90 (64–98) | 100 | 100 | 100 | 2.70 s | 0.000 | 280 ms |

Not: Perf/LCP/TBT, makine yükünün makul olduğu ilk 3 turun medyanıdır (a11y düzeltmesinden önce; düzeltme sadece `py-1` ve logo adı, performansı etkilemez). A11y/BP/SEO/CLS düzeltme sonrası değerlerdir.

**Ölçüm güvenilirliği:** Aynı sayfa aynı build'de 53–98 arası puan aldı. Lighthouse'un kaydettiği `benchmarkIndex` (CPU hızı) turlar arasında ~1900'den ~300'e düştü, sistem yükü 8–45 arasında salındı (yük bu projeye ait değil). Düzeltme sonrası turlarda ana sayfa 60–85 çıktı (script değerlendirme süresi 544 ms → 700–2600 ms, kod aynı). Bu yüzden Performans/LCP için kesin sonuç **canlıya çıkınca PageSpeed Insights ile** doğrulanmalı.

Hedefin altında kalanlar: `/iletisim` LCP medyanı 2.70 s (en iyi tur 2.01 s, en kötü 3.45 s); `/bakim-anlasmalari` Perf medyanı sınırda (90). LCP öğesi hero açıklama metni (görsel yok, TBT/CPU kaynaklı render gecikmesi 125–330 ms). Kalan JS maliyeti Next/React çerçeve parçalarından (~115 KB gzip, `legacy-javascript` ~13 KB Next'in kendi polyfill'i), bu projenin kodundan değil.

### Kalan
- [ ] Canlıya çıkınca PageSpeed Insights ile doğrulama

## Faz 2
Faz 1 onaylandıktan sonra (CLAUDE.md bölüm 5).
