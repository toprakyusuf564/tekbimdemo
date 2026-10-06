import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Faq, { type FaqItem } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PendingNote, { PendingTag } from "@/components/PendingNote";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { comparisonRows, maintenanceAudience, maintenancePlans } from "@/content/maintenance";
import { contactFormHref, site, whatsappLink } from "@/content/site";
import { showPending } from "@/lib/env";
import { buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";

const path = "/bakim-anlasmalari";
const quoteHref = contactFormHref("bakim");

// Odak arama: "Aydın kurumsal bilgisayar bakım anlaşması"
export const metadata = buildMetadata({
  title: "Aydın Kurumsal Bilgisayar Bakım Anlaşması | Tekbim",
  description:
    "Aydın'da ofis, mağaza ve restoranlar için yıllık, aylık veya servis başına bilgisayar bakım anlaşması. Web servisle arıza kaydı ücretsiz. Teklif alın.",
  path,
});

// approved: false olanlar ONAY_LISTESI.md #23'te takip edilir; JSON-LD'ye girmez
const faqItems: FaqItem[] = [
  {
    question: "Hangi bakım anlaşması türleri var?",
    approved: true,
    answer: "Üç tür var: yıllık destek anlaşması, aylık anlaşma ve servis başına anlaşma.",
  },
  {
    question: "Web servis nedir?",
    approved: true,
    answer:
      "Bakım anlaşmalı müşterilerimiz web servis üzerinden kendi arıza kaydını oluşturur; kayıt sistemimize otomatik olarak düşer. Bakım anlaşmasından yararlananlar web servisi ücretsiz kullanabilir.",
  },
  {
    question: "Bakım anlaşmasının fiyatı nedir?",
    approved: false,
    answer: "Fiyat bilgisi için teklif isteyebilirsiniz.",
    action: { label: "Teklif iste", href: quoteHref },
  },
  {
    question: "Müdahale süresi ne kadar?",
    approved: false,
    answer: "Müdahale süresi konusunda net bilgi için bizi arayabilirsiniz.",
    action: { label: "Bizi arayın", href: `tel:${site.phone.tel}` },
  },
  {
    question: "Yerinde servis anlaşmaya dahil mi?",
    approved: false,
    answer: "Yerinde servis kapsamı anlaşma türüne göre netleştirilir; ayrıntı için bizi arayabilirsiniz.",
    action: { label: "Teknik servis", href: "/hizmetler/teknik-servis" },
  },
  {
    question: "Teklif nasıl alırım?",
    approved: true,
    answer: "Bizi arayabilir, WhatsApp'tan yazabilir veya iletişim formunu doldurabilirsiniz.",
    action: { label: "İletişim formu", href: quoteHref },
  },
];

// Tablo hücresi: bilinen değer olduğu gibi; bilinmeyen hücre onay etiketi (etiket gizliyse nötr ifade)
function Cell({ value }: { value?: string }) {
  if (value) return <>{value}</>;
  return showPending ? <PendingTag /> : <span className="text-muted">Teklif aşamasında netleşir</span>;
}

export default function BakimAnlasmalariPage() {
  return (
    <>
      <PageHero
        eyebrow="Bakım anlaşmaları"
        title="Aydın kurumsal bilgisayar bakım anlaşması"
        description="Ofisler, mağazalar ve restoranlar için yıllık, aylık veya servis başına bakım anlaşması."
        trail={[{ name: "Bakım Anlaşmaları", path }]}
      >
        <ButtonLink href={quoteHref}>Teklif İste</ButtonLink>
        <ButtonLink href={`tel:${site.phone.tel}`} variant="outline">Bizi Arayın</ButtonLink>
        <ButtonLink href={whatsappLink("Merhaba, bakım anlaşması hakkında bilgi almak istiyorum.")} variant="outline">
          WhatsApp
        </ButtonLink>
      </PageHero>

      <Section labelledBy="paketler">
        <SectionTitle id="paketler" eyebrow="Anlaşma türleri" title="Üç anlaşma türü" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {maintenancePlans.map((p) => (
            <li key={p.slug} data-reveal className="flex flex-col rounded-xl border border-border bg-surface p-5">
              <p className="text-sm font-semibold text-accent-text">{p.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{p.summary}</p>
              <div className="mt-5">
                <ButtonLink href={quoteHref} variant="secondary">Teklif iste</ButtonLink>
              </div>
            </li>
          ))}
        </ul>
        <PendingNote>Fiyatlar ve paket kapsamları</PendingNote>
      </Section>

      <Section labelledBy="web-servis" tone="surface">
        <SectionTitle
          id="web-servis"
          eyebrow="Web servis"
          title="Arıza kaydını kendiniz oluşturun"
          description="Bakım anlaşmalı müşterilerimiz web servis üzerinden kendi arıza kaydını oluşturur; kayıt sistemimize otomatik olarak düşer. Bakım anlaşmasından yararlananlar bu hizmeti ücretsiz kullanabilir."
        />
      </Section>

      <Section labelledBy="karsilastirma">
        <SectionTitle id="karsilastirma" eyebrow="Karşılaştırma" title="Anlaşma türlerini karşılaştırın" />
        <div
          role="region"
          aria-label="Anlaşma türleri karşılaştırma tablosu"
          tabIndex={0}
          className="mt-8 overflow-x-auto rounded-xl border border-border"
        >
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="sr-only">Yıllık, aylık ve servis başına bakım anlaşmalarının karşılaştırması</caption>
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="p-4 font-semibold">Özellik</th>
                {maintenancePlans.map((p) => (
                  <th key={p.slug} scope="col" className="p-4 font-semibold">{p.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r) => (
                <tr key={r.label} className="border-t border-border">
                  <th scope="row" className="p-4 font-semibold">{r.label}</th>
                  {r.cells.map((c, i) => (
                    <td key={maintenancePlans[i].slug} className="p-4">
                      <Cell value={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PendingNote>Tablodaki işaretli hücreler paket bazında teyit edilecek</PendingNote>
      </Section>

      <Section labelledBy="kimler-icin" tone="surface">
        <SectionTitle id="kimler-icin" eyebrow="Kimler için?" title="Düzenli desteğe ihtiyaç duyan işletmeler" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {maintenanceAudience.map((a) => (
            <li key={a.title} data-reveal className="rounded-xl border border-border bg-bg p-5">
              <h3 className="font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted">{a.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="sss">
        <SectionTitle id="sss" eyebrow="SSS" title="Sık sorulan sorular" />
        <div className="mt-8 max-w-3xl">
          <Faq items={faqItems} />
        </div>
      </Section>

      <CtaBand
        title="Bakım anlaşması için teklif alın"
        text={site.hours.display}
        primaryLabel="Teklif İste"
        primaryHref={quoteHref}
      />

      <JsonLd
        data={serviceJsonLd({
          name: "Kurumsal bilgisayar bakım anlaşması",
          description:
            "Aydın'da yıllık destek, aylık ve servis başına bilgisayar bakım anlaşmaları. Bakım anlaşmalı müşteriler web servisle arıza kaydı oluşturabilir.",
          path,
        })}
      />
      <JsonLd data={faqJsonLd(faqItems)} />
    </>
  );
}
