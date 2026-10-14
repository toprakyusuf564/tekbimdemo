import ButtonLink from "@/components/ButtonLink";
import ContactForm from "@/components/contact/ContactForm";
import MapEmbed from "@/components/contact/MapEmbed";
import Icon, { type IconName } from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { mapsUrl, site, whatsappLink } from "@/content/site";
import { buildMetadata, contactPageJsonLd } from "@/lib/seo";

const path = "/iletisim";

export const metadata = buildMetadata({
  title: "İletişim ve Adres | Tekbim Bilgisayar Efeler / Aydın",
  description:
    "Tekbim Bilgisayar: Güzelhisar Mah. 47. Sok. No:9/A Efeler/Aydın. Telefon, WhatsApp, çalışma saatleri, yol tarifi ve servis talep formu.",
  path,
});

type Info = { title: string; icon: IconName; lines: { text: string; href?: string; external?: boolean }[] };

// Tüm bilgiler site.ts'ten gelir
const infoCards: Info[] = [
  { title: "Adres", icon: "pin", lines: [{ text: site.address.full }] },
  {
    title: "Telefon",
    icon: "phone",
    lines: [
      { text: `Sabit: ${site.phone.display}`, href: `tel:${site.phone.tel}` },
      { text: `Mobil: ${site.mobile.display}`, href: `tel:${site.mobile.tel}` },
    ],
  },
  { title: "E-posta", icon: "mail", lines: [{ text: site.email, href: `mailto:${site.email}` }] },
  { title: "Çalışma saatleri", icon: "clock", lines: [{ text: site.hours.display }] },
  { title: "WhatsApp", icon: "chat", lines: [{ text: site.mobile.display, href: whatsappLink(), external: true }] },
  { title: "Uzak destek", icon: "monitor", lines: [{ text: "AnyDesk'i indirin", href: site.remoteSupportUrl, external: true }] },
];

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Tekbim Bilgisayar iletişim"
        description="Efeler/Aydın'daki adresimize uğrayabilir, bizi arayabilir veya aşağıdaki formdan talebinizi iletebilirsiniz."
        trail={[{ name: "İletişim", path }]}
      >
        <ButtonLink href={`tel:${site.phone.tel}`}>Bizi Arayın</ButtonLink>
        <ButtonLink href={whatsappLink()} variant="outline">WhatsApp</ButtonLink>
      </PageHero>

      <Section labelledBy="bilgiler">
        <SectionTitle id="bilgiler" eyebrow="Bilgiler" title="Bize nasıl ulaşırsınız?" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {infoCards.map((c) => (
            <li key={c.title} data-reveal className="flex gap-4 rounded-xl border border-border bg-surface p-5">
              <Icon name={c.icon} size={22} className="mt-0.5 shrink-0 text-accent-text" />
              <div>
                <h3 className="font-semibold">{c.title}</h3>
                <div className="mt-1 space-y-1 text-sm text-muted">
                  {c.lines.map((l) =>
                    l.href ? (
                      <p key={l.text}>
                        <a
                          href={l.href}
                          className="inline-flex min-h-11 items-center text-link underline-offset-2 hover:underline"
                          {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {l.text}
                        </a>
                      </p>
                    ) : (
                      <p key={l.text}>{l.text}</p>
                    ),
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="harita" tone="surface">
        <SectionTitle id="harita" eyebrow="Harita" title="Adresimiz" />
        <div className="mt-8">
          <MapEmbed />
        </div>
        <div className="mt-4">
          <ButtonLink href={mapsUrl} variant="secondary">Yol tarifi al</ButtonLink>
        </div>
      </Section>

      {/* Servis talebi, demo/teklif ve bakım anlaşması butonları bu bölüme gelir (?konu= ile tür seçilir) */}
      <Section id="servis-talebi" labelledBy="talep-formu">
        <SectionTitle
          id="talep-formu"
          eyebrow="Form"
          title="Talebinizi iletin"
          description="Formu doldurun; mesajınız WhatsApp veya e-posta ile bize ulaşsın."
        />
        <div className="mt-8 max-w-3xl">
          <ContactForm />
        </div>
      </Section>

      <JsonLd data={contactPageJsonLd({ name: "İletişim", path })} />
    </>
  );
}
