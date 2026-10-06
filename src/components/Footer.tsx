import Link from "next/link";
import Container from "./Container";
import Icon, { type IconName } from "./Icon";
import { mainNav, site } from "@/content/site";

// Alt bilgi: sosyal ikonlar, iletişim, çalışma saatleri, hızlı bağlantılar.
// Banka bilgileri linki: sayfa Faz 2'de gelince eklenecek.
export default function Footer() {
  const linkClass = "rounded-sm underline-offset-2 hover:underline";
  return (
    <footer className="mt-auto bg-chrome text-on-chrome-muted">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold text-on-chrome">{site.name}</p>
          <p className="mt-2 text-sm">{site.tagline}</p>
          <ul className="mt-4 flex gap-2">
            {[
              { name: "Facebook", href: site.social.facebook, icon: "facebook" },
              { name: "Instagram", href: site.social.instagram, icon: "instagram" },
            ].map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} ${s.name} sayfası`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-on-chrome hover:bg-white/10"
                >
                  <Icon name={s.icon as IconName} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-on-chrome">İletişim</h2>
          <address className="mt-3 space-y-1 text-sm not-italic">
            <p>{site.address.full}</p>
            <p>
              Tel: <a className={linkClass} href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
            </p>
            <p>
              Mobil: <a className={linkClass} href={`tel:${site.mobile.tel}`}>{site.mobile.display}</a>
            </p>
            <p>
              <a className={linkClass} href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-on-chrome">Çalışma saatleri</h2>
          <p className="mt-3 text-sm">{site.hours.display}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-on-chrome">Bağlantılar</h2>
          <ul className="mt-3 space-y-1 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link className={linkClass} href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <a className={linkClass} href={site.remoteSupportUrl} target="_blank" rel="noopener noreferrer">
                Uzak destek (AnyDesk)
              </a>
            </li>
            <li>
              <a className={linkClass} href={site.serviceTrack.home} target="_blank" rel="noopener noreferrer">
                Servis takip (formtakip.net)
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-4 text-sm">
          © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
        </Container>
      </div>
    </footer>
  );
}
