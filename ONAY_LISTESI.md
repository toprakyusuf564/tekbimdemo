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
| 8 | Marka listesi (Berqnet, Dahua, Epson) ve resmi iş ortaklığı durumu. Not: eski sitede "PSON" yazıyordu, doğrusu Epson olarak düzeltildi; AnyDesk iş ortağı değil uzak destek aracı olduğu için rozetlerden çıkarıldı | Ana sayfa, Markalar | [ONAY BEKLİYOR] |
| 9 | Ana sayfa giriş metni ve hizmet/servis adımı açıklamaları | `Hero.tsx`, `ServiceSteps.tsx` | [ONAY BEKLİYOR] |
| 10 | SSS: "Arıza tespiti ücretli mi?" yanıtı | `/hizmetler/teknik-servis` SSS | [ONAY BEKLİYOR] |
| 11 | SSS: "Onarım öncesi onayım alınıyor mu?" yanıtı (süreç adımlarıyla tutarlı olmalı) | `/hizmetler/teknik-servis` SSS | [ONAY BEKLİYOR] |
| 12 | formtakip.net doğrudan adresleri: `/default.asp` (cihaz sorgulama), `/yetkili.asp` (kurumsal giriş). Eski sitede bu linkler http. https desteklenmiyorsa firma sahibine güvenlik notu iletilecek. Protokol `site.ts` içinde tek sabit (`FORMTAKIP_PROTOCOL`) | `site.ts`, teknik servis sayfası, footer, ana sayfa | Yusuf https'i kontrol edip bildirecek |
| 13 | Bakım anlaşmalı müşterilerin web servis üzerinden arıza kaydı oluşturması ve web servisin bakım anlaşmalılara ücretsiz olması | `/hizmetler/teknik-servis` | Eski siteden doğrulandı (tekbim.net/service/laptop-repair/) |
| 14 | Yazılımın adı "ERP12 Restoran" (eski sayfadan) ve Tekbim'in kendi ürünü mü yoksa satılan bir ürün mü olduğu | `/yazilim/restoran-cafe-otomasyonu`, `restaurant.ts` | [ONAY BEKLİYOR] |
| 15 | "Adisyon, mutfak/bar yazıcısına sipariş, kasa ve ödeme" özellik kategorileri (eski sayfada geçmiyor) | `restaurant.ts` | [ONAY BEKLİYOR] |
| 16 | Yazar kasa entegrasyonu (eski sayfada geçiyor, firma sahibi teyit edecek) ve OT-VT donanımlarının (dokunmatik POS, fiş yazıcı, el terminali, yeni nesil yazar kasa) yazılımla uyumu | Restoran otomasyonu sayfası | [ONAY BEKLİYOR] |
| 17 | Kurulum ve destek süreci ayrıntıları | Restoran otomasyonu sayfası | [ONAY BEKLİYOR] |
| 18 | SSS'de onaysız yanıtlar: yazar kasa, donanım, kurulum ve destek (JSON-LD'ye girmez, sayfada etiketli) | Restoran otomasyonu sayfası | [ONAY BEKLİYOR] |
| 19 | Ana sayfadaki restoran/cafe kartı özet cümlesi yeniden yazıldı (eski sayfada geçen özelliklere göre) | `software.ts` | [ONAY BEKLİYOR] |
