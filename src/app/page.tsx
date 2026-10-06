import BarcodeScan from "@/components/home/BarcodeScan";
import ContactStrip from "@/components/home/ContactStrip";
import Hero from "@/components/home/Hero";
import MaintenanceSummary from "@/components/home/MaintenanceSummary";
import Partners from "@/components/home/Partners";
import QuickActions from "@/components/home/QuickActions";
import ServiceSteps from "@/components/ServiceSteps";
import SolutionGrid from "@/components/home/SolutionGrid";
import { services } from "@/content/services";
import { software } from "@/content/software";
import { buildMetadata } from "@/lib/seo";

// Odak arama: "Aydın bilgisayar servisi"
export const metadata = buildMetadata({
  title: "Aydın Bilgisayar Servisi | Tekbim Bilgisayar",
  description:
    "Aydın Efeler'de 1994'ten beri bilgisayar servisi: notebook ve masaüstü tamiri, ağ, güvenlik kamerası ve ticari yazılım. Hemen arayın.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <ServiceSteps />
      <SolutionGrid id="hizmetler" eyebrow="Hizmetler" title="Hizmetlerimiz" items={services} />
      <SolutionGrid
        id="yazilim"
        eyebrow="Yazılım"
        title="Yazılım çözümlerimiz"
        items={software}
        tone="surface"
        aside={<BarcodeScan />}
      />
      <MaintenanceSummary />
      <Partners />
      <ContactStrip />
    </>
  );
}
