import Link from "next/link";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { mainNav, site } from "@/content/site";

// Sticky üst menü. Logo dosyası gelene kadar metin logo kullanılır.
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-chrome text-on-chrome shadow-sm">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-h-11 items-baseline gap-1.5 rounded-md py-2">
          <span className="text-xl font-extrabold tracking-tight">tekbim</span>
          <span className="text-sm font-medium text-accent">Bilgisayar</span>
          {/* Erişilebilir ad görünür metni içerir: "tekbim Bilgisayar ana sayfa" */}
          <span className="sr-only">ana sayfa</span>
        </Link>

        <nav aria-label="Ana menü" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone.tel}`}
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-on-accent hover:brightness-95 lg:inline-block"
          >
            Bizi Arayın
          </a>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
