import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { maintenancePlans } from "@/content/maintenance";

// Bakım anlaşmaları özeti: sadece paket adları; fiyat ve kapsam onay bekliyor
export default function MaintenanceSummary() {
  return (
    <Section labelledBy="bakim-ozet" tone="surface">
      <SectionTitle
        id="bakim-ozet"
        eyebrow="Bakım anlaşmaları"
        title="Cihazlarınız düzenli bakımda kalsın"
        description="İşletmenizin ihtiyacına göre yıllık, aylık veya servis başına seçenekler."
      />
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {maintenancePlans.map((p) => (
          <li key={p.slug} className="rounded-xl border border-border bg-bg p-5">
            <p className="text-sm font-semibold text-accent-text">{p.period}</p>
            <h3 className="mt-1 font-semibold">{p.title}</h3>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink href="/bakim-anlasmalari" variant="secondary">
          Paketleri inceleyin
        </ButtonLink>
      </div>
    </Section>
  );
}
