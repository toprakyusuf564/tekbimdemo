import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `Aydın Bilgisayar Servisi | ${site.name}`,
  description:
    "1994'ten beri Efeler/Aydın'da bilgisayar satışı, teknik servis, ağ/güvenlik ve ticari yazılım çözümleri. Tekbim Bilgisayar.",
  path: "/",
});

// Geçici ana sayfa iskeleti — asıl içerik Adım 2'de yapılacak
export default function HomePage() {
  return (
    <Container className="py-16">
      <SectionTitle as="h1" eyebrow="Tekbim Bilgisayar" title={site.tagline} description="Ana sayfa içeriği bir sonraki adımda hazırlanacak." />
      <a
        href={`tel:${site.phone.tel}`}
        className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-on-accent hover:brightness-95"
      >
        Bizi Arayın
      </a>
    </Container>
  );
}
