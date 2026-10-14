# Tekbim Bilgisayar — Site Fotoğraf Listesi

Sitede 4 yerde fotoğraf alanı hazır. Fotoğraflar gelene kadar bu alanlarda sade bir görsel kutu görünür; fotoğraf eklenince otomatik olarak yerine geçer.

| # | Dosya adı | Sitede nerede | Ne çekilmeli | Oran |
|---|---|---|---|---|
| 1 | `dukkan-ic` | Ana sayfa, "Biz kimiz" bölümü | Dükkânın içi: ürün rafları, tezgâh veya karşılama alanı. Düzenli ve aydınlık bir kadraj | 4:3 yatay |
| 2 | `servis-tezgahi` | Teknik servis sayfası | Servis tezgâhı veya atölye: çalışma masası, açık bir cihaz, aletler. Müşteri cihazının ekranında kişisel bilgi görünmesin | 4:3 yatay |
| 3 | `pos-kurulum` | Restoran / cafe otomasyonu sayfası | Dokunmatik POS ekranı ve fiş yazıcısı kurulu hâlde (ekranda satış arayüzü açık) | 4:3 yatay |
| 4 | `dukkan-dis` | İletişim sayfası | Dükkânın dış cephesi, tabela görünsün; müşteri yeri bulabilsin | 4:3 yatay |

## Çekim önerileri

- **Telefonla çekebilirsiniz.** Telefonu **yatay** tutun.
- Gün ışığında, mümkünse hava açıkken çekin; flaşsız.
- Kalabalık olmayan, toplu bir kadraj seçin. Müşteri yüzü ve kişisel bilgi (isim, telefon, ekranda müşteri verisi) görünmesin.
- Lensi silin; fotoğrafı kırpmadan, telefonun kendi çözünürlüğünde gönderin.
- Her fotoğraf **en az 1600 piksel genişlikte** olmalı (güncel telefonlar zaten bunun üstünde çeker).
- Dosya adı yukarıdaki gibi olsun (örn. `dukkan-dis.jpg`). JPG ve iPhone HEIC kabul edilir.

## Yusuf için (teknik)

1. Ham dosyaları `public/images/ham/` klasörüne koy (klasör Git'e girmez).
2. `node scripts/fotograf-hazirla.mjs` çalıştır: dosyalar 1600x1200 WebP olarak `public/images/` altına yazılır.
3. Build al; alanlar yer tutucu yerine fotoğrafı gösterir. Ölçüler `src/content/photos.json` içindedir.
