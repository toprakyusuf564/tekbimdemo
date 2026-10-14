# Tekbim Bilgisayar — Yeni Site Demosu (tekbimdemo)

Bu dosya projenin ana planı ve kurallarıdır. Her oturumda ve her alt ajanda geçerlidir.

## 1. Proje özeti

- **Müşteri:** Tekbim Bilgisayar — 1994'ten beri Aydın/Efeler'de bilgisayar satış, teknik servis, ağ/güvenlik ve ticari yazılım (barkod, depo, restoran otomasyonu) firması.
- **Mevcut site:** https://tekbim.net — eski WordPress (Slider Revolution 6.2.22 + Redux). Çok yavaş; PageSpeed testi zaman aşımına düşüyor (net::ERR_TIMED_OUT).
- **Amaç:** Firma sahibine gösterilecek hızlı, modern, yerel SEO'ya uygun bir demo. Mevcut sitedeki iyi şeyler korunur, kusurlar alınmaz.
- **Geliştirici:** Yusuf Toprak. İletişim dili Türkçe.

## 2. Teknik yığın

- Next.js (App Router, güncel kararlı sürüm) + TypeScript + Tailwind CSS
- **Statik çıktı:** `output: 'export'` → Cloudflare Pages'e yüklenecek
- Demo aşamasında **veritabanı yok**. İçerik `src/content/` altında TypeScript dosyalarında durur. (PostgreSQL ileride form/blog yönetimi için eklenecek; şimdi kurma.)
- `next/font` ile font kendi sunucudan (Google Fonts CDN çağrısı yok)
- Görseller `next/image` ile değil (statik export'ta optimizer çalışmaz). Bunun yerine `public/` altında önceden optimize edilmiş WebP/SVG kullan, `width`/`height` her zaman belirtilsin.
- Yönlendirmeler `next.config` ile değil, `public/_redirects` dosyası ile (Cloudflare Pages formatı).

## 3. Kod kuralları

- **Kod içi yorumlar Türkçe** olacak.
- Bileşenler küçük ve tekrar kullanılabilir olsun (`src/components/`).
- Harici script, analytics, slider kütüphanesi, jQuery **yok**. Animasyon gerekiyorsa sadece CSS.
- Erişilebilirlik: anlamlı `alt` metinleri, buton/link ayrımı, klavye ile gezinme, yeterli renk kontrastı.
- Açık/koyu tema desteği (CSS değişkenleri ile).
- Mobil öncelikli tasarım.

## 4. İçerik kuralları (çok önemli)

- Gerçek bilgiler tekbim.net'ten alınır ve **yazım hataları düzeltilerek** yazılır:
  - Adres: Güzelhisar Mahallesi 47. Sokak No:9/A Efeler / Aydın
  - Telefon: 0 256 214 44 10 — Mobil: 0 555 520 19 84 — E-posta: info@tekbim.net
  - Çalışma saatleri: Pazartesi–Cumartesi 09.00–19.00
  - Uzak destek: AnyDesk (https://anydesk.com/tr/downloads/windows)
  - Servis takip: formtakip.net (Tekbim markası) — kurumsal giriş ve ürün durumu sorgulama
- **Uydurma veri YOK:** Sahte müşteri yorumu, sahte sayaç rakamı ("5000+ memnun müşteri" vb.), sahte fiyat, sahte sertifika yazılmaz.
- Firma sahibinin onaylaması gereken her şey `[ONAY BEKLİYOR]` etiketiyle yazılır ve `ONAY_LISTESI.md` dosyasına eklenir (ör. fiyat aralıkları, "aynı gün yerinde servis" taahhüdü, iş ortağı listesi, gerçek rakamlar).
- Eski siteden **alınmayacaklar:** slider, 2020 kampanyaları, 0 gösteren sayaçlar, "All" gibi İngilizce kalıntılar, boş menü linkleri, ayrı Instagram sayfası.
- **Onay etiketi görünürlüğü:** `NEXT_PUBLIC_SHOW_PENDING` (varsayılan `true`). `true` iken `[ONAY BEKLİYOR]` etiketleri ve `PendingNote` görünür; `false` iken sadece etiketler gizlenir, içerik metni kalır. Etiket gizli olsa da onaysız (`approved: false`) SSS'ler FAQPage JSON-LD'ye girmez. Etiketler `PendingTag`/`PendingNote` bileşenleriyle çizilir; elle `[ONAY BEKLİYOR]` yazılmaz. Örnek değer `.env.example` içinde.
- **Apostrof:** Tüm içerikte düz apostrof (`'`) kullanılır; tipografik (`’`) kullanılmaz.
- **Eski siteden görsel alınmaz:** tekbim.net'teki hizmet kartı fotoğrafları (service-*.jpg), proje görselleri (project-*.jpg), yazılım/duyuru görselleri ve marka logoları indirilmez, kullanılmaz (tema demo görselleri veya başka sitelerden alınmış, telif durumu belirsiz). Marka logoları yerine metin rozetleri kalır (ortaklık onayı bekleniyor). Fotoğraflar `PhotoSlot` alanlarına firmanın kendi çektiği dosyalarla konur (bkz. `FOTOGRAF_LISTESI.md`). Tek istisna firmanın kendi logosudur ve yeterli kalitedeyse kullanılır.
- Stok görsel indirme. Görsel gereken yerlerde sade SVG illüstrasyon/ikon veya nötr yer tutucu kullan. Logo dosyasını Yusuf `public/logo/` altına koyacak; yoksa metin logo kullan.

## 5. Site haritası

### Faz 1 (demo — önce bunlar tamamlanır)
1. `/` — Ana sayfa
   - Hero: "1994'ten beri Aydın'ın teknoloji ortağı" + iki buton (Servis Talebi, Bizi Arayın)
   - Hızlı aksiyon kartları: Servis talebi oluştur · Cihazımı sorgula · Uzak destek · WhatsApp · Yol tarifi
   - "Servis nasıl işler?" 5 adım: Getir/çağır → Ücretsiz arıza tespiti `[ONAY BEKLİYOR]` → Onayınla onarım → Online takip → Teslim
   - Hizmetler grid'i, yazılım çözümleri, bakım anlaşmaları özeti, markalar/iş ortakları, son duyurular, iletişim şeridi
2. `/hizmetler/teknik-servis` — örnek hizmet detay sayfası (süreç, kapsam, SSS, CTA)
3. `/yazilim/restoran-cafe-otomasyonu` — örnek yazılım çözümü sayfası
4. `/bakim-anlasmalari` — yıllık / aylık / servis başına paket karşılaştırma tablosu
5. `/iletisim` — adres, telefonlar, saatler, harita (iframe yerine statik harita görseli + "Yol tarifi al" Google Maps linki), iletişim formu

Ortak: Header (sticky, mobil menü), Footer (iletişim, sosyal ikonlar, banka bilgileri linki, © güncel yıl), sabit WhatsApp butonu.

### Faz 2 (Faz 1 onaylandıktan sonra)
- `/hizmetler/` altında: donanim, guvenlik-kamera, ag-kablolama, veri-kurtarma, kurumsal
- `/yazilim/` altında: depo-otomasyonu, ticari-otomasyon, magaza-barkod
- `/urunler/` (OT-VT: barkod okuyucu, barkod yazıcı, fiş yazıcı, dokunmatik POS, el terminali, yeni nesil yazar kasa, terazi, fiyatgör/kiosk — her birinde "Teklif iste")
- `/servis-talebi`, `/servis-takip`, `/sss`, `/kurumsal`, `/blog`, `/banka-hesap-bilgileri`

## 6. SEO gereksinimleri

- Her sayfada `generateMetadata`/`metadata` ile **özgün** title (≤60 karakter) ve description (≤155 karakter). Anahtar kelime doldurma yok.
- Sayfa başına bir odak arama:
  - Ana sayfa → "Aydın bilgisayar servisi"
  - Teknik servis → "Aydın / Efeler notebook ve bilgisayar tamiri"
  - Restoran otomasyonu → "Aydın restoran cafe otomasyonu"
  - Bakım anlaşmaları → "Aydın kurumsal bilgisayar bakım anlaşması"
- Tek `h1`, mantıklı başlık hiyerarşisi.
- JSON-LD yapısal veri:
  - Tüm sitede `LocalBusiness` (tip: `ComputerStore`) — ad, adres, telefon, çalışma saatleri, `areaServed: Aydın`
  - Hizmet sayfalarında `Service`, SSS bölümlerinde `FAQPage`, tüm alt sayfalarda `BreadcrumbList`
- **Ortam ayrımı:** `NEXT_PUBLIC_SITE_ENV` değeri `production` değilse (varsayılan `preview`) `robots.ts` tüm siteyi engeller (`Disallow: /`) ve layout metadata'sında `robots: { index: false, follow: false }` olur. Canlıya çıkarken `production` yapılır. Örnek değerler `.env.example` içinde.
- `src/app/sitemap.ts`, `src/app/robots.ts`, canonical URL'ler (`https://tekbim.net` taban alınır), Open Graph ve Twitter kartı.
- `lang="tr"`.
- **301 yönlendirmeler** `public/_redirects` içinde (eski → yeni):
  ```
  /service/laptop-repair/            /hizmetler/teknik-servis           301
  /teknik-servis-cozumleri/          /hizmetler/teknik-servis           301
  /service/data-backup-recovery/     /hizmetler/donanim                 301
  /service/apple-products-repair/    /hizmetler/guvenlik-kamera         301
  /service/hardware-update/          /hizmetler/kurumsal                301
  /service/networking-issues-solving/ /hizmetler/ag-kablolama          301
  /service/virus-taramasi-veri-kurtarma/ /hizmetler/veri-kurtarma       301
  /portfolio/our-project-01/         /yazilim/restoran-cafe-otomasyonu  301
  /portfolio/depo-otomasyon-sistemleri/ /yazilim/depo-otomasyonu       301
  /portfolio/ticari-otomasyon-sistemleri/ /yazilim/ticari-otomasyon    301
  /portfolio/magaza-barkod-sistemi/  /yazilim/magaza-barkod             301
  /ot-vt/                            /urunler                           301
  /destek-talebi/                    /servis-talebi                     301
  /iletisim/                         /iletisim                          301
  /hakkimizda/                       /kurumsal                          301
  /duyurular/                        /blog                              301
  ```
  (Faz 2 sayfaları henüz yoksa yönlendirme yine yazılır; demo sırasında 404 normaldir.)

## 7. Performans hedefleri

- Lighthouse (mobil): Performans 90+, Erişilebilirlik 95+, En İyi Uygulamalar 95+, SEO 100
- LCP < 2.5 sn, INP < 200 ms, CLS < 0.1
- İlk yüklemede JS mümkün olduğunca az: bileşenler varsayılan olarak sunucu bileşeni; `"use client"` sadece gerçekten gerekli yerlerde (mobil menü, form, tema düğmesi).

## 8. Formlar (demo davranışı)

Statik site olduğu için sunucu yok. Demo formları:
- İstemci tarafında doğrulama yapar.
- Gönderimde WhatsApp mesajı (`https://wa.me/905555201984?text=...`) veya `mailto:` bağlantısı hazırlar.
- Formun altında küçük not: "Demo sürüm — canlıda form doğrudan servis sistemine kaydedilecek."

## 9. Model ve token kuralları (alt ajanlar dahil HER YERDE geçerli)

Bu bölümdeki kurallar ana oturum, **alt ajanlar (subagent), fork'lar, workflow'lar ve derin analiz görevleri** için de aynen geçerlidir. Alt ajan başlatırken bu kurallar ona açıkça iletilmelidir.

| İş türü | Model |
|---|---|
| Kod yazma, bileşen/sayfa geliştirme, hata ayıklama (varsayılan) | **Sonnet** (`sonnet`) |
| Basit/tekrarlı işler: metin düzeltme, dosya taşıma, içerik dosyası doldurma, lint düzeltme, `_redirects` güncelleme | **Haiku** (`haiku`) |
| Mimari bir problem 2 denemede çözülemediyse | **Opus** (`opus`) — önce Yusuf'a sor |
| **Fable** | **KULLANILMAZ.** Derin analiz veya alt ajanlar Fable'a geçmemeli. Yusuf açıkça izin vermedikçe Fable yok. |

- Alt ajan tanımlarında `model:` alanı açıkça `sonnet` veya `haiku` yazılır; `inherit` veya boş bırakılmaz.
- Alt ajanlar sadece kendine verilen görevi yapar, kapsamı genişletmez.
- `node_modules`, `.next`, `out`, lock dosyaları okunmaz.
  - **İstisna:** Bir Next.js özelliği bu projede ilk kez kullanılacaksa, sadece o konuya ait belge dosyası `node_modules/next/dist/docs/` altından okunabilir. Klasör taranmaz, aynı belge tekrar okunmaz. Bu istisna alt ajanlar için de geçerlidir.
- Gereksiz tam build çalıştırma; önce `tsc --noEmit` ve lint, build sadece faz sonunda veya Lighthouse öncesi.
- Aynı dosyayı tekrar tekrar baştan okuma; değişiklikleri hedefli yap.
- Uzun açıklama yazma; yapılanı kısa özetle.

## 10. Çalışma şekli

- Her adımdan önce kısa plan, sonra uygulama, sonra kısa özet.
- Faz 1'deki her sayfa bitince dur ve Yusuf'a göster; onay almadan sonraki sayfaya geçme.
- Yapılan işler ve kalan işler `ILERLEME.md` dosyasında tutulur (kısa maddeler).
- Onay gerektiren içerikler `ONAY_LISTESI.md` dosyasına eklenir.
- **Süreç kuralı:** Bu makinede 3000 portu başka bir projeye (Uşak Sanal AVM) ait. Yusuf tekbimdemo'yu kendi terminalinde 3001 portunda çalıştırır. Claude Code testleri bu sunucuya `curl` ile yapar. Sunucu kapalıysa 3002 portunda kendi sunucusunu başlatır (`npm run dev -- -p 3002`) ve işi bitince sadece onu PID ile kapatır. Başkasının başlattığı süreçleri kapatmak (`pkill`/`killall`) yasaktır. Bu kural alt ajanlar için de geçerlidir.

@AGENTS.md
