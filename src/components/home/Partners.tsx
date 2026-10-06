import PendingNote from "@/components/PendingNote";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

// Marka adları tekbim.net'te geçenlerdir (eski sitedeki "PSON" yazım hatası, doğrusu Epson; ERP12 eski sitedeki "ERP12 ile tanışın" duyurusundan).
// AnyDesk iş ortağı değil uzak destek aracıdır; rozetlerde yer almaz. Logo kullanılmaz, sade metin rozeti.
const brands = ["Berqnet", "Dahua", "Epson", "ERP12"];

export default function Partners() {
  return (
    <Section labelledBy="markalar">
      <SectionTitle id="markalar" eyebrow="Markalar" title="Birlikte çalıştığımız markalar" />
      <ul className="mt-8 flex flex-wrap gap-3">
        {brands.map((b) => (
          <li key={b} data-reveal className="rounded-full border border-border bg-surface px-5 py-2 font-semibold">
            {b}
          </li>
        ))}
      </ul>
      {/* Resmi iş ortaklığı durumu firma sahibinden onay bekliyor (ONAY_LISTESI.md #8) */}
      <PendingNote>Marka listesi ve resmi iş ortaklığı durumu</PendingNote>
    </Section>
  );
}
