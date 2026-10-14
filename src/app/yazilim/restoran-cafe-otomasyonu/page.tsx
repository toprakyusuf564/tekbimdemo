import BarcodeScan from "@/components/home/BarcodeScan";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Faq, { type FaqItem } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PhotoSlot from "@/components/PhotoSlot";
import PageHero from "@/components/PageHero";
import PendingNote from "@/components/PendingNote";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import {
  restaurantFeatures,
  restaurantHardware,
  restaurantProduct,
  restaurantSegments,
} from "@/content/restaurant";
import { contactFormHref, site, whatsappLink } from "@/content/site";
import { buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";

const path = "/yazilim/restoran-cafe-otomasyonu";

// Odak arama: "Aydın restoran cafe otomasyonu"
export const metadata = buildMetadata({
  title: "Aydın Restoran Cafe Otomasyonu | Tekbim Bilgisayar",
  description:
    "Aydın'da restoran, cafe, pastane ve fast food için otomasyon: masa yönetimi, stok kontrolü ve raporlama. Tekbim Bilgisayar.",
  path,
});

// approved: false olanlar ONAY_LISTESI.md #14-#18'de takip edilir; JSON-LD'ye girmez
const faqItems: FaqItem[] = [
  {
    question: "Hangi işletmeler için uygun?",
    approved: true,
    answer:
      "Cafeler, restoranlar, zincir ve franchise işletmeler, pastaneler, fast food restoranları, pizzacılar, barlar ve paket servis yapan işletmeler kullanabilir.",
  },
  {
    question: "Hangi özellikleri içeriyor?",
    approved: true,
    answer:
      "Masa yönetimi, stok kontrolü, veresiye takibi, personel ve müşteri takibi, rezervasyon ve puan kart uygulaması, çoklu dil ve para birimi desteği, Android garson sipariş ve tablet menü uygulamaları, Caller ID entegrasyonu ile X/Z raporları, satış analitiği ve karlılık raporları.",
  },
  {
    question: "Yemeksepeti entegrasyonu var mı?",
    approved: false,
    answer: "Yemeksepeti entegrasyonu konusunda güncel bilgi için bizi arayabilirsiniz.",
    action: { label: "Bizi arayın", href: `tel:${site.phone.tel}` },
  },
  {
    question: "Yazar kasa ile entegre çalışıyor mu?",
    approved: false,
    answer: "Yazar kasa entegrasyonu konusunda net bilgi için bizi arayabilirsiniz.",
    action: { label: "Bizi arayın", href: `tel:${site.phone.tel}` },
  },
  {
    question: "Hangi donanımlara ihtiyacım olur?",
    approved: false,
    answer:
      "Dokunmatik POS, fiş yazıcı, el terminali ve yeni nesil yazar kasa ürünlerimiz var. Hangi donanımın işletmenize uygun olduğu konusunda bizi arayabilirsiniz.",
  },
  {
    question: "Kurulum ve destek nasıl işliyor?",
    approved: false,
    answer:
      "Kurulum ve sonrasındaki destek süreci işletmenize göre planlanır; ayrıntılar için bizi arayabilirsiniz. Teknik destek için servis ekibimize ulaşabilirsiniz.",
    action: { label: "Teknik servis", href: "/hizmetler/teknik-servis" },
  },
  {
    question: "Demo veya teklif nasıl alırım?",
    approved: true,
    answer: "Bizi arayabilir, WhatsApp'tan yazabilir veya iletişim formunu doldurabilirsiniz.",
    action: { label: "İletişim formu", href: contactFormHref("demo") },
  },
];

export default function RestoranCafeOtomasyonuPage() {
  return (
    <>
      <PageHero
        eyebrow={restaurantProduct.name}
        title="Aydın restoran ve cafe otomasyonu"
        description="Cafe, restoran, pastane ve fast food işletmeleri için otomasyon sistemi. Teklif için bizi arayın."
        trail={[{ name: "Restoran / Cafe Otomasyonu", path }]}
        aside={<BarcodeScan className="text-on-chrome" />}
      >
        <ButtonLink href={contactFormHref("demo")}>Demo / Teklif İste</ButtonLink>
        <ButtonLink href={`tel:${site.phone.tel}`} variant="outline">Bizi Arayın</ButtonLink>
        <ButtonLink href={whatsappLink("Merhaba, restoran/cafe otomasyonu hakkında bilgi almak istiyorum.")} variant="outline">
          WhatsApp
        </ButtonLink>
      </PageHero>

      <Section labelledBy="kimler-icin">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionTitle id="kimler-icin" eyebrow="Kimler için" title="Gıda sektöründeki işletmeler için" description={restaurantProduct.intro} />
            <PendingNote>Yazılım büyük ihtimalle ERP12&apos;ye ait; Tekbim&apos;in çözüm ortağı olduğu teyit edilecek</PendingNote>
          </div>
          <PhotoSlot slot="pos-kurulum" />
        </div>
        <ul className="mt-8 flex flex-wrap gap-3">
          {restaurantSegments.map((s) => (
            <li key={s} data-reveal className="rounded-full border border-border bg-surface px-5 py-2 font-semibold">
              {s}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="ozellikler" tone="surface">
        <SectionTitle id="ozellikler" eyebrow="Özellikler" title="Neler sunuyor?" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {restaurantFeatures.map((f) => (
            <li key={f.title} data-reveal className="rounded-xl border border-border bg-bg p-5">
              <h3 className="font-semibold">{f.title}</h3>
              {f.text && <p className="mt-2 text-sm text-muted">{f.text}</p>}
              {f.pending && <PendingNote>{f.pendingNote ?? "Onay bekliyor"}</PendingNote>}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="donanim">
        <SectionTitle
          id="donanim"
          eyebrow="Donanım"
          title="Tekbim donanım ürünleri"
          description="Tekbim'in OT-VT ürün grubunda restoran ve cafe işletmeleri için donanımlar bulunur."
        />
        <ul className="mt-8 flex flex-wrap gap-3">
          {restaurantHardware.map((h) => (
            <li key={h} data-reveal className="rounded-full border border-border bg-surface px-5 py-2 font-semibold">
              {h}
            </li>
          ))}
        </ul>
        <PendingNote>Bu donanımların yazılımla uyumu ve yazar kasa entegrasyonu</PendingNote>
      </Section>

      <Section labelledBy="kurulum" tone="surface">
        <SectionTitle
          id="kurulum"
          eyebrow="Kurulum ve destek"
          title="Yanınızda bir teknik servis var"
          description="Tekbim'in teknik servisi, cihaz ve yazılım sorunlarınızda ulaşabileceğiniz ekiptir. Uygun sorunlarda AnyDesk ile uzaktan destek de verilir."
        />
        <PendingNote>Kurulum ve destek süreci ayrıntıları</PendingNote>
        <div className="mt-6">
          <ButtonLink href="/hizmetler/teknik-servis" variant="secondary">Teknik servis hizmetlerimiz</ButtonLink>
        </div>
      </Section>

      <Section labelledBy="sss">
        <SectionTitle id="sss" eyebrow="SSS" title="Sık sorulan sorular" />
        <div className="mt-8 max-w-3xl">
          <Faq items={faqItems} />
        </div>
      </Section>

      <CtaBand
        title="Restoran veya cafeniz için teklif alın"
        text={site.hours.display}
        primaryLabel="Demo / Teklif İste"
        primaryHref={contactFormHref("demo")}
      />

      <JsonLd
        data={serviceJsonLd({
          name: "Restoran ve cafe otomasyonu",
          description:
            "Aydın'da restoran, cafe, pastane ve fast food işletmeleri için ERP12 Restoran otomasyon sistemi.",
          path,
        })}
      />
      <JsonLd data={faqJsonLd(faqItems)} />
    </>
  );
}
