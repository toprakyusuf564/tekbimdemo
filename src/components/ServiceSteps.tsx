import { PendingTag } from "@/components/PendingNote";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { FORMTAKIP_ACTIVE } from "@/content/site";

const steps = [
  { title: "Getir veya çağır", text: "Cihazınızı servise getirebilir ya da bizi arayarak talebinizi iletebilirsiniz.", pending: false },
  // Ücretsiz arıza tespiti taahhüdü firma sahibinden onay bekliyor (ONAY_LISTESI.md #3)
  { title: "Ücretsiz arıza tespiti", text: "Cihazın arızası tespit edilir ve size bildirilir.", pending: true },
  { title: "Onayınla onarım", text: "Onarım, sizin onayınızla başlar.", pending: false },
  FORMTAKIP_ACTIVE
    ? { title: "Online takip", text: "Cihazınızın durumunu formtakip.net üzerinden sorgulayabilirsiniz.", pending: false }
    : { title: "Durum bilgisi (WhatsApp / telefon)", text: "Cihazınızın durumunu WhatsApp veya telefonla sorabilirsiniz.", pending: false },
  { title: "Teslim", text: "Onarım tamamlanınca cihazınız size teslim edilir.", pending: false },
];

// "Servis nasıl işler?" — 5 adım
export default function ServiceSteps() {
  return (
    <Section labelledBy="servis-adimlari" tone="surface">
      <SectionTitle id="servis-adimlari" eyebrow="Teknik servis" title="Servis nasıl işler?" />
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.title} data-reveal className="rounded-xl border border-border bg-bg p-5">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-bold text-on-accent"
            >
              {i + 1}
            </span>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            {s.pending && (
              <p className="mt-1 text-xs">
                <PendingTag />
              </p>
            )}
            <p className="mt-2 text-sm text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
