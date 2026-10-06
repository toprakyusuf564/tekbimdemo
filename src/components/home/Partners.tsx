import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

// Marka adları tekbim.net ana sayfasında geçenlerdir. Logo kullanılmaz, sade metin rozeti.
const brands = ["Berqnet", "Dahua", "PSON", "AnyDesk"];

export default function Partners() {
  return (
    <Section labelledBy="markalar">
      <SectionTitle id="markalar" eyebrow="Markalar" title="Birlikte çalıştığımız markalar" />
      <ul className="mt-8 flex flex-wrap gap-3">
        {brands.map((b) => (
          <li key={b} className="rounded-full border border-border bg-surface px-5 py-2 font-semibold">
            {b}
          </li>
        ))}
      </ul>
      {/* Resmi iş ortaklığı durumu firma sahibinden onay bekliyor (ONAY_LISTESI.md #8) */}
      <p className="mt-4 text-sm font-semibold text-accent-text">
        [ONAY BEKLİYOR] Marka listesi ve resmi iş ortaklığı durumu
      </p>
    </Section>
  );
}
