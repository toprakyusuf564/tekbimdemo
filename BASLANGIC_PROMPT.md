# Claude Code — İlk Prompt (tekbimdemo)

Aşağıdaki metni Claude Code'a ilk mesaj olarak yapıştır.

---

Bu klasör (tekbimdemo) Tekbim Bilgisayar'ın yeni web sitesi demosu. Projenin tüm planı ve kuralları CLAUDE.md dosyasında. Önce CLAUDE.md'yi baştan sona oku ve kurallara harfiyen uy.

**Model ve alt ajan kuralları:** Bu oturumda varsayılan model Sonnet. Basit/tekrarlı işler için Haiku kullan. Opus'a sadece bir mimari sorun 2 denemede çözülemezse ve benden onay aldıktan sonra geç. Fable KULLANMA. Bu kurallar alt ajanlar, fork'lar, workflow'lar ve derin analiz görevleri için de geçerli; alt ajan başlatırsan modelini açıkça `sonnet` veya `haiku` olarak belirt ve bu kuralları ona da ilet. Gereksiz token harcama: node_modules/.next/out okuma, gereksiz build alma.

**Bugünkü görev — Faz 1, Adım 1: Proje iskeleti**

1. Bu klasörde Next.js (App Router, TypeScript, Tailwind, ESLint, `src/` dizini) projesini kur. Kurulumu mevcut klasöre yap, yeni alt klasör oluşturma.
2. `next.config` içinde `output: 'export'` ayarla.
3. Klasör yapısını oluştur:
   - `src/app/` (sayfalar)
   - `src/components/` (Header, Footer, WhatsAppButton, ThemeToggle, Container, SectionTitle)
   - `src/content/` (site.ts → firma bilgileri; services.ts; software.ts; maintenance.ts — CLAUDE.md'deki gerçek bilgilerle)
   - `src/lib/seo.ts` (metadata yardımcıları ve JSON-LD üreticileri)
   - `public/_redirects` (CLAUDE.md bölüm 6'daki listeyle)
4. Ortak düzeni yap: `layout.tsx` (lang="tr", next/font, açık/koyu tema değişkenleri, LocalBusiness JSON-LD), sticky Header + mobil menü, Footer, sabit WhatsApp butonu.
5. `sitemap.ts` ve `robots.ts` dosyalarını ekle.
6. `ILERLEME.md` ve `ONAY_LISTESI.md` dosyalarını oluştur.
7. `npx tsc --noEmit` ve lint çalıştır, hataları düzelt. Sonra `npm run dev` ile çalıştığını doğrula.

Bu adım bitince DUR. Bana kısa bir özet ver: oluşturulan dosyalar, verdiğin tasarım kararları (renk paleti, font) ve sıradaki adım. Ana sayfaya ben onay verince geçeceğiz.

Tasarım yönü: kurumsal ama sıcak, güven veren, sade. 30 yıllık yerel firma hissi + modern teknoloji. Abartılı gradyan, slider ve gereksiz animasyon yok. Kod içi yorumlar Türkçe.

---

## Sonraki adımlar için kısa prompt'lar

**Adım 2 — Ana sayfa:**
> CLAUDE.md bölüm 5'teki ana sayfayı yap. Hero, hızlı aksiyon kartları, "Servis nasıl işler" adımları, hizmetler, yazılım çözümleri, bakım özeti, markalar, iletişim şeridi. Uydurma veri yok; onay gerekenleri [ONAY BEKLİYOR] ile işaretle ve ONAY_LISTESI.md'ye ekle. Bitince dur ve özetle. (Model: Sonnet. Alt ajan açarsan model kurallarını ona da ilet, Fable yok.)

**Adım 3 — Teknik servis sayfası:**
> /hizmetler/teknik-servis sayfasını yap: süreç, kapsam, bakım anlaşmalarına bağlantı, SSS (FAQPage JSON-LD), BreadcrumbList, CTA. Odak arama: "Aydın / Efeler notebook ve bilgisayar tamiri". Bitince dur. (Model: Sonnet; Fable yok.)

**Adım 4 — Restoran/cafe otomasyonu sayfası:**
> /yazilim/restoran-cafe-otomasyonu sayfasını yap: kimler için, özellikler, donanım uyumu (OT-VT ürünleri), SSS, "Demo/teklif iste" CTA. Bitince dur. (Model: Sonnet; Fable yok.)

**Adım 5 — Bakım anlaşmaları:**
> /bakim-anlasmalari sayfasını yap: yıllık / aylık / servis başına paket karşılaştırma tablosu (fiyatlar [ONAY BEKLİYOR]), SSS. Bitince dur. (Model: Sonnet; Fable yok.)

**Adım 6 — İletişim:**
> /iletisim sayfasını yap: adres, telefonlar, saatler, "Yol tarifi al" Google Maps linki, demo form (CLAUDE.md bölüm 8). Bitince dur. (Model: Sonnet; Fable yok.)

**Adım 7 — Kontrol:**
> `npm run build` al, `out/` klasörünü yerelde servis et ve tüm Faz 1 sayfaları için Lighthouse (mobil) sonuçlarını raporla. Hedeflerin altındaki maddeleri düzelt. ILERLEME.md'yi güncelle. (Model: Sonnet; basit düzeltmeler için Haiku alt ajanı kullanabilirsin; Fable yok.)
