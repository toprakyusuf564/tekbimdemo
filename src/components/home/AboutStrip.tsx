import PendingNote from "@/components/PendingNote";
import PhotoSlot from "@/components/PhotoSlot";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

// Ana sayfa "Biz kimiz" bölümü: kısa tanıtım + dükkân fotoğrafı
export default function AboutStrip() {
  return (
    <Section labelledBy="biz-kimiz" tone="surface">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionTitle id="biz-kimiz" eyebrow="Biz kimiz" title="1994'ten beri Efeler'de" />
          <p className="mt-4 max-w-xl text-muted">
            Tekbim Bilgisayar, 1994 yılında bilgisayar ve yan ürünlerinin satışı ile servis hizmeti vermek amacıyla
            kuruldu. Bugün Aydın / Efeler&apos;deki dükkânımızda satış, teknik servis, ağ ve güvenlik çözümleri ile
            ticari yazılım hizmetlerini bir arada sunuyoruz.
          </p>
          <PendingNote>&quot;Biz kimiz&quot; metninin ikinci cümlesi (hizmet özeti) onaylanacak</PendingNote>
        </div>
        <PhotoSlot slot="dukkan-ic" />
      </div>
    </Section>
  );
}
