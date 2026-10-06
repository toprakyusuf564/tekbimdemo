import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import Section from "@/components/Section";
import { mapsUrl, site, whatsappLink } from "@/content/site";

type Action = { title: string; text: string; href: string; icon: IconName };

const actions: Action[] = [
  { title: "Servis talebi oluştur", text: "Cihazınız için servis kaydı açın.", href: site.serviceRequestHref, icon: "wrench" },
  { title: "Cihazımı sorgula", text: "Servisteki cihazınızın durumunu görün.", href: site.serviceTrack.query, icon: "search" },
  { title: "Uzak destek", text: "AnyDesk ile bilgisayarınıza uzaktan bağlanalım.", href: site.remoteSupportUrl, icon: "monitor" },
  { title: "WhatsApp", text: "Bize WhatsApp'tan yazın.", href: whatsappLink(), icon: "chat" },
  { title: "Yol tarifi", text: "Adresimize Google Haritalar'dan ulaşın.", href: mapsUrl, icon: "pin" },
];

// Sık kullanılan işlemler için hızlı erişim kartları
export default function QuickActions() {
  const cardClass =
    "group flex h-full flex-col rounded-xl border border-border bg-surface p-5 hover:border-accent";
  return (
    <Section labelledBy="hizli-islemler">
      <h2 id="hizli-islemler" className="sr-only">Hızlı işlemler</h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {actions.map((a) => {
          const inner = (
            <>
              <Icon name={a.icon} className="text-accent-text" />
              <h3 className="mt-3 font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-muted">{a.text}</p>
            </>
          );
          return (
            <li key={a.title} data-reveal>
              {a.href.startsWith("/") ? (
                <Link href={a.href} className={cardClass}>{inner}</Link>
              ) : (
                <a href={a.href} target="_blank" rel="noopener noreferrer" className={cardClass}>{inner}</a>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
