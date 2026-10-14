# Firma Sahibi Onay Listesi

`[ONAY BEKLİYOR]` etiketli her içerik burada toplanır. Onaylanmadan canlıya çıkmaz.

| # | Konu | Nerede | Durum |
|---|---|---|---|
| 1 | Bakım anlaşması fiyatları (yıllık / aylık / servis başına) | `src/content/maintenance.ts` | [ONAY BEKLİYOR] |
| 2 | Bakım anlaşması paket kapsamları | `src/content/maintenance.ts` | [ONAY BEKLİYOR] |
| 3 | "Ücretsiz arıza tespiti" taahhüdü | Ana sayfa, "Servis nasıl işler?" 2. adım | [ONAY BEKLİYOR] |
| 4 | Sosyal medya hesapları (Facebook, Instagram) | `site.ts`, Footer | Yusuf sağladı; firma sahibi doğrulamalı |
| 5 | Logo dosyası (`public/logo/`) — yoksa metin logo | `Header.tsx`, `site.ts` | Yusuf getirecek |
| 6 | Enlem/boylam (harita için; JSON-LD'de geo alanı şimdilik yok) | `site.ts` | [ONAY BEKLİYOR] |
| 7 | Hizmet/yazılım kısa açıklama metinleri ve teknik servis kapsam kartları (genel ifadeler, firma sahibi gözden geçirmeli) | `src/content/services.ts`, `software.ts` | [ONAY BEKLİYOR] |
| 8 | Marka listesi (Berqnet, Dahua, Epson, ERP12; ERP12 eski sitedeki "ERP12 ile tanışın" duyurusundan) ve resmi iş ortaklığı durumu. Not: eski sitede "PSON" yazıyordu, doğrusu Epson olarak düzeltildi; AnyDesk iş ortağı değil uzak destek aracı olduğu için rozetlerden çıkarıldı | Ana sayfa, Markalar | [ONAY BEKLİYOR] |
| 9 | Ana sayfa giriş metni ve hizmet/servis adımı açıklamaları | `Hero.tsx`, `ServiceSteps.tsx` | [ONAY BEKLİYOR] |
| 10 | SSS: "Arıza tespiti ücretli mi?" yanıtı | `/hizmetler/teknik-servis` SSS | [ONAY BEKLİYOR] |
| 11 | SSS: "Onarım öncesi onayım alınıyor mu?" yanıtı (süreç adımlarıyla tutarlı olmalı) | `/hizmetler/teknik-servis` SSS | [ONAY BEKLİYOR] |
| 12 | **formtakip.net erişilemiyor** (8.8.8.8 ve 1.1.1.1 SERVFAIL, curl "Could not resolve host", 6 Ekim 2026). Sitede `FORMTAKIP_ACTIVE = false`: "Cihazımı sorgula" WhatsApp'a (hazır mesaj) ve telefona yönlenir, "Kurumsal giriş" gizlidir, servis takibi metni online sistemden söz etmez, "Online takip" adımı "Durum bilgisi (WhatsApp / telefon)" olur. Adresler (`/default.asp`, `/yetkili.asp`) `site.ts` içinde duruyor; sistem çalışınca `FORMTAKIP_ACTIVE = true` yapmak yeterli. Alan adı süresi/DNS kontrol edilmeli; yeni sitede entegre modül olarak yeniden kurulsun mu? | `site.ts`, teknik servis sayfası, footer, ana sayfa | Firma sahibine sorulacak (FIRMA_SORULARI.md, ilk madde) |
| 13 | Bakım anlaşmalı müşterilerin web servis üzerinden arıza kaydı oluşturması ve web servisin bakım anlaşmalılara ücretsiz olması | `/hizmetler/teknik-servis` | Eski siteden doğrulandı ama formtakip'e bağlı. `FORMTAKIP_ACTIVE=false` iken sayfada "kapsam teklif aşamasında netleşir" yazar ve [ONAY BEKLİYOR] etiketlidir; tablo satırı "Arıza kaydı oluşturma" olarak onay bekler |
| 14 | Yazılımın adı "ERP12 Restoran" (eski sayfadan) ve Tekbim'in kendi ürünü mü yoksa satılan bir ürün mü olduğu | `/yazilim/restoran-cafe-otomasyonu`, `restaurant.ts` | [ONAY BEKLİYOR] Not: Ürün büyük ihtimalle ERP12'ye ait, Tekbim çözüm ortağı; teyit edilecek. |
| 15 | "Adisyon, mutfak/bar yazıcısına sipariş, kasa ve ödeme" özellik kategorileri (eski sayfada geçmiyor) | `restaurant.ts` | [ONAY BEKLİYOR] |
| 16 | Yazar kasa entegrasyonu (eski sayfada geçiyor, firma sahibi teyit edecek) ve OT-VT donanımlarının (dokunmatik POS, fiş yazıcı, el terminali, yeni nesil yazar kasa) yazılımla uyumu | Restoran otomasyonu sayfası | [ONAY BEKLİYOR] |
| 17 | Kurulum ve destek süreci ayrıntıları | Restoran otomasyonu sayfası | [ONAY BEKLİYOR] |
| 18 | SSS'de onaysız yanıtlar: yazar kasa, donanım, kurulum ve destek (JSON-LD'ye girmez, sayfada etiketli) | Restoran otomasyonu sayfası | [ONAY BEKLİYOR] |
| 19 | Ana sayfadaki restoran/cafe kartı özet cümlesi yeniden yazıldı (eski sayfada geçen özelliklere göre) | `software.ts` | [ONAY BEKLİYOR] |
| 20 | Yemeksepeti entegrasyonu: eski sayfada geçiyor ama güncelliği belirsiz. Özelliklerden ve onaylı SSS yanıtından çıkarıldı; onaysız olarak etiketli | Restoran otomasyonu sayfası, `restaurant.ts` | [ONAY BEKLİYOR — güncelliği teyit edilecek] |
| 21 | Bakım anlaşması paket açıklamaları (eski sitedeki üç tür adından türetildi, ek iddia yok) | `maintenance.ts` | [ONAY BEKLİYOR] |
| 22 | Karşılaştırma tablosu: ödeme şekli, müdahale süresi, yerinde servis, uzaktan destek (AnyDesk), periyodik bakım — her paket için. Tahmin yazılmadı; hücreler etiketli. Web servis satırı eski siteden doğrulandı | `/bakim-anlasmalari`, `maintenance.ts` | [ONAY BEKLİYOR] |
| 23 | Bakım anlaşmaları SSS'de onaysız yanıtlar: fiyat, müdahale süresi, yerinde servis (JSON-LD'ye girmez) | `/bakim-anlasmalari` | [ONAY BEKLİYOR] |
| 24 | "Kimler için?" bölümü genel anlatım (ofis, mağaza, restoran, çok bilgisayarlı işletme) | `maintenance.ts` | [ONAY BEKLİYOR] |
| 25 | KVKK Aydınlatma Metni: formdaki "Aydınlatma Metni" şimdilik linksiz yer tutucu; firma metni hazırlamalı, sonra `site.ts` içindeki `kvkkUrl` doldurulacak | `/iletisim`, `site.ts` | [ONAY BEKLİYOR] |
| 26 | Form gönderimi demo: WhatsApp (wa.me) veya e-posta (mailto) taslağı hazırlar; canlıda servis sistemine kaydedilecek | `ContactForm.tsx` | Canlıya geçişte yapılacak |
| 27 | Logo: tekbim.net'teki logo dosyaları yalnızca 160x46 px (saydam PNG). 2x ekranda net görünmediği ve header lacivert olduğu için kullanılmadı, metin logo kaldı. **Yüksek çözünürlüklü veya vektörel (SVG/PDF/AI) logo dosyası istenecek.** | Header, footer, favicon, Open Graph | Firma sahibinden dosya beklenir |
| 28 | Fotoğraflar: dükkân içi, dükkân dış cephe, servis tezgâhı, POS kurulum fotoğrafları firmadan alınacak (liste: `FOTOGRAF_LISTESI.md`). Gelene kadar sade yer tutucu görünür | Ana sayfa, teknik servis, restoran otomasyonu, iletişim | Firma sahibinden dosya beklenir |
| 29 | Ana sayfa "Biz kimiz" metni: ilk cümle eski siteden (1994'te bilgisayar ve yan ürünleri satışı ve servis amacıyla kuruldu), ikinci cümle (hizmet özeti) bu sitede yazıldı | Ana sayfa `AboutStrip.tsx` | [ONAY BEKLİYOR] |
