import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Faq, { type FaqItem } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import ServiceSteps from "@/components/ServiceSteps";
import { technicalServiceScope } from "@/content/services";
import { site, whatsappLink } from "@/content/site";
import { buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";

const path = "/hizmetler/teknik-servis";

// Odak arama: "Aydın / Efeler notebook ve bilgisayar tamiri"
export const metadata = buildMetadata({
  title: "Aydın / Efeler Notebook ve Bilgisayar Tamiri | Tekbim",
  description:
    "Efeler/Aydın’da notebook ve masaüstü bilgisayar tamiri, arıza tespiti, yazılım kurulumu ve kurumsal teknik servis. 1994’ten beri Tekbim Bilgisayar.",
  path,
});

// [ONAY BEKLİYOR] işaretli yanıtlar ONAY_LISTESI.md #10 ve #11'de takip edilir
const faqItems: FaqItem[] = [
  {
    question: "Arıza tespiti ücretli mi?",
    answer: "[ONAY BEKLİYOR] Arıza tespiti ücreti konusunda net bilgi için bizi arayabilirsiniz.",
    action: { label: "Bizi arayın", href: `tel:${site.phone.tel}` },
  },
  {
    question: "Onarım ne kadar sürer?",
    answer:
      "Süre arızanın türüne ve gerekli parçaya göre değişir. Arıza tespitinden sonra süreç hakkında size bilgi veririz.",
  },
  {
    question: "Cihazımın durumunu nasıl takip ederim?",
    answer: "Servisteki cihazınızın durumunu Tekbim’in online takip sistemi formtakip.net üzerinden sorgulayabilirsiniz.",
    action: { label: "formtakip.net", href: site.serviceTrackUrl },
  },
  {
    question: "Uzaktan destek veriyor musunuz?",
    answer:
      "Uygun sorunlarda AnyDesk ile bilgisayarınıza uzaktan bağlanarak destek verebiliriz. Önce bizi arayın, size yol gösterelim.",
    action: { label: "AnyDesk’i indirin", href: site.remoteSupportUrl },
  },
  {
    question: "İşletmeme yerinde servis veriyor musunuz?",
    answer:
      "Bakım anlaşması bulunan firmalarımıza işletmelerinde destek veriyoruz. Ayrıntılar için bakım anlaşmaları sayfasına bakabilirsiniz.",
    action: { label: "Bakım anlaşmaları", href: "/bakim-anlasmalari" },
  },
  {
    question: "Onarım öncesi onayım alınıyor mu?",
    answer:
      "[ONAY BEKLİYOR] Süreç adımlarımızda onarım, sizin onayınızla başlar; işleyişin ayrıntısı için bizi arayabilirsiniz.",
  },
];

export default function TeknikServisPage() {
  return (
    <>
      <PageHero
        eyebrow="Teknik servis"
        title="Aydın / Efeler notebook ve bilgisayar tamiri"
        description="Bireysel kullanıcılar ve işletmeler için teknik servis. Arızayı tespit eder, onarımı ve takibi sade bir süreçle yürütürüz."
        trail={[{ name: "Teknik Servis", path }]}
      >
        <ButtonLink href={site.serviceRequestHref}>Servis Talebi</ButtonLink>
        <ButtonLink href={`tel:${site.phone.tel}`} variant="outline">Bizi Arayın</ButtonLink>
        <ButtonLink href={whatsappLink()} variant="outline">WhatsApp</ButtonLink>
      </PageHero>

      <Section labelledBy="kapsam">
        <SectionTitle id="kapsam" eyebrow="Kapsam" title="Neler yapıyoruz?" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technicalServiceScope.map((s) => (
            <li key={s.title} data-reveal className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <ServiceSteps />

      <Section labelledBy="servis-takip">
        <SectionTitle
          id="servis-takip"
          eyebrow="Servis takibi"
          title="Cihazınızı online takip edin"
          description="formtakip.net, Tekbim’in kendi online takip sistemidir."
        />
        <ul className="mt-6 list-disc space-y-1 pl-5 text-muted">
          <li>Servisteki cihazınızın durumunu sorgulayabilirsiniz.</li>
          <li>Kurumsal müşteriler için kurumsal giriş bulunur.</li>
        </ul>
        <div className="mt-6">
          <ButtonLink href={site.serviceTrackUrl} variant="secondary">formtakip.net’e git</ButtonLink>
        </div>
      </Section>

      <Section labelledBy="bakim" tone="surface">
        <SectionTitle
          id="bakim"
          eyebrow="Kurumsal müşteriler"
          title="Bakım anlaşmasıyla yanınızdayız"
          description="Bakım anlaşması bulunan müşterilerimiz kendi arıza kayıtlarını web servis üzerinden oluşturabilir."
        />
        <div className="mt-6">
          <ButtonLink href="/bakim-anlasmalari" variant="secondary">Bakım anlaşmalarını inceleyin</ButtonLink>
        </div>
      </Section>

      <Section labelledBy="sss">
        <SectionTitle id="sss" eyebrow="SSS" title="Sık sorulan sorular" />
        <div className="mt-8 max-w-3xl">
          <Faq items={faqItems} />
        </div>
      </Section>

      <CtaBand title="Cihazınız için servis talebi oluşturun" text={site.hours.display} />

      <JsonLd
        data={serviceJsonLd({
          name: "Notebook ve bilgisayar teknik servisi",
          description:
            "Efeler/Aydın’da notebook ve masaüstü bilgisayar onarımı, arıza tespiti, yazılım kurulumu ve kurumsal teknik servis.",
          path,
        })}
      />
      <JsonLd data={faqJsonLd(faqItems.map(({ question, answer }) => ({ question, answer })))} />
    </>
  );
}
