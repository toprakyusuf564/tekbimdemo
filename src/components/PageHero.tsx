import type { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";
import Container from "./Container";

type Props = {
  title: string;
  description: string;
  eyebrow?: string;
  trail: { name: string; path: string }[];
  // Butonlar
  children?: ReactNode;
  // Sağ tarafta gösterilen süs (aria-hidden olmalı); dar ekranda gizlenir
  aside?: ReactNode;
};

// Alt sayfalar için lacivert giriş bandı: ekmek kırıntısı, tek h1, açıklama, butonlar
export default function PageHero({ title, description, eyebrow, trail, children, aside }: Props) {
  return (
    <section aria-labelledby="sayfa-baslik" className="bg-chrome text-on-chrome">
      <Container className="flex items-end justify-between gap-8 py-10 sm:py-14">
        <div>
          <Breadcrumb trail={trail} className="text-on-chrome-muted" />
          {eyebrow && <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent">{eyebrow}</p>}
          <h1 id="sayfa-baslik" className={`${eyebrow ? "mt-2" : "mt-6"} max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl`}>
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-on-chrome-muted">{description}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {aside && <div className="hidden shrink-0 md:block">{aside}</div>}
      </Container>
    </section>
  );
}
