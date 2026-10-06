import ButtonLink from "./ButtonLink";
import Container from "./Container";
import { site, whatsappLink } from "@/content/site";

type Props = { title: string; text?: string };

// Sayfa sonu çağrı bandı: Servis Talebi, Bizi Arayın, WhatsApp
export default function CtaBand({ title, text }: Props) {
  return (
    <section aria-labelledby="cta-baslik" className="bg-chrome text-on-chrome">
      <Container className="py-12 sm:py-14">
        <h2 id="cta-baslik" className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        {text && <p className="mt-3 max-w-2xl text-on-chrome-muted">{text}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={site.serviceRequestHref}>Servis Talebi</ButtonLink>
          <ButtonLink href={`tel:${site.phone.tel}`} variant="outline">Bizi Arayın</ButtonLink>
          <ButtonLink href={whatsappLink()} variant="outline">WhatsApp</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
