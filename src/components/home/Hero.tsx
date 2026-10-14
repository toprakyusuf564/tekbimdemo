import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import HeroCircuit from "./HeroCircuit";
import RotatingWord from "./RotatingWord";
import { site } from "@/content/site";

// Ana sayfa girişi: tek h1, iki ana buton, yanda iletişim özeti
export default function Hero() {
  return (
    <section aria-labelledby="hero-baslik" className="relative overflow-hidden bg-chrome text-on-chrome">
      <HeroCircuit />
      <Container className="relative z-10 grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Aydın / Efeler</p>
          <h1 id="hero-baslik" className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            {site.tagline}
          </h1>
          <RotatingWord />
          <p className="mt-4 max-w-xl text-lg text-on-chrome-muted">
            Bilgisayar satışı, teknik servis, ağ ve güvenlik çözümleri ile barkod, depo ve restoran otomasyonu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.serviceRequestHref}>Servis Talebi</ButtonLink>
            <ButtonLink href={`tel:${site.phone.tel}`} variant="outline">
              Bizi Arayın
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-xl border border-white/15 bg-white/5 p-6">
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Icon name="phone" size={20} className="mt-0.5 shrink-0 text-accent" />
              {/* Dokunma hedefleri en az 44px yüksekliğinde */}
              <span>
                <a className="flex min-h-11 items-center font-semibold hover:underline" href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                <a className="flex min-h-11 items-center text-on-chrome-muted hover:underline" href={`tel:${site.mobile.tel}`}>{site.mobile.display}</a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="clock" size={20} className="mt-0.5 shrink-0 text-accent" />
              <span>{site.hours.display}</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="pin" size={20} className="mt-0.5 shrink-0 text-accent" />
              <span>{site.address.full}</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
