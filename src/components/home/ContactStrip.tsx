import ButtonLink from "@/components/ButtonLink";
import Icon from "@/components/Icon";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { mapsUrl, site, whatsappLink } from "@/content/site";

// Sayfa sonu iletişim şeridi: adres, telefonlar, saatler, WhatsApp
export default function ContactStrip() {
  return (
    <Section labelledBy="iletisim-seridi" tone="surface">
      <SectionTitle id="iletisim-seridi" eyebrow="İletişim" title="Bize ulaşın" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-start gap-3">
          <Icon name="pin" size={20} className="mt-0.5 shrink-0 text-accent-text" />
          <address className="not-italic">{site.address.full}</address>
        </div>
        <div className="flex items-start gap-3">
          <Icon name="phone" size={20} className="mt-0.5 shrink-0 text-accent-text" />
          <p>
            <a className="font-semibold hover:underline" href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
            <br />
            <a className="hover:underline" href={`tel:${site.mobile.tel}`}>{site.mobile.display}</a>
            <br />
            <a className="text-link hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div className="flex items-start gap-3">
          <Icon name="clock" size={20} className="mt-0.5 shrink-0 text-accent-text" />
          <p>{site.hours.display}</p>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={whatsappLink()}>WhatsApp&apos;tan yazın</ButtonLink>
        <ButtonLink href={mapsUrl} variant="secondary">Yol tarifi al</ButtonLink>
      </div>
    </Section>
  );
}
