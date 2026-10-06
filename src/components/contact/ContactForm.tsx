"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, type FormEvent } from "react";
import { PendingTag } from "@/components/PendingNote";
import { isRequestType, requestTypes, type RequestTypeId } from "@/content/contact";
import { site, whatsappLink } from "@/content/site";

type Values = { ad: string; telefon: string; tur: RequestTypeId | ""; konu: string; mesaj: string; kvkk: boolean };
type Errors = Partial<Record<keyof Values, string>>;

// Alanların sırası: ilk hatalı alana odaklanmak için
const fieldOrder: (keyof Values)[] = ["ad", "telefon", "tur", "mesaj", "kvkk"];

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (v.ad.trim().length < 3) errors.ad = "Lütfen adınızı ve soyadınızı yazın.";
  const digits = v.telefon.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 12) errors.telefon = "Lütfen geçerli bir telefon numarası yazın (örn. 0 5xx xxx xx xx).";
  if (!v.tur) errors.tur = "Lütfen talep türünü seçin.";
  if (v.mesaj.trim().length < 5) errors.mesaj = "Lütfen mesajınızı yazın.";
  if (!v.kvkk) errors.kvkk = "Devam etmek için aydınlatma metni onay kutusunu işaretleyin.";
  return errors;
}

// Alan altı hata mesajı (aria-describedby ile alana bağlanır)
function FieldError({ name, text }: { name: string; text?: string }) {
  if (!text) return null;
  return (
    <p id={`hata-${name}`} className="mt-1 text-sm font-semibold text-accent-text">
      {text}
    </p>
  );
}

const inputClass = "mt-1 w-full rounded-md border border-border bg-bg px-3 py-2.5 aria-[invalid=true]:border-accent-text";

function Fields({ initialType }: { initialType: RequestTypeId | "" }) {
  const [values, setValues] = useState<Values>({ ad: "", telefon: "", tur: initialType, konu: "", mesaj: "", kvkk: false });
  const [errors, setErrors] = useState<Errors>({});
  // aria-live bölgesinde okunan durum mesajı
  const [status, setStatus] = useState("");

  const set = <K extends keyof Values>(key: K, value: Values[K]) => setValues((v) => ({ ...v, [key]: value }));

  // Doğrular; hata varsa ilk hatalı alana odaklanır
  const check = () => {
    const errs = validate(values);
    setErrors(errs);
    const first = fieldOrder.find((k) => errs[k]);
    if (first) {
      const count = Object.keys(errs).length;
      setStatus(`Formda ${count} eksik veya hatalı alan var: ${Object.values(errs).join(" ")}`);
      document.getElementById(`alan-${first}`)?.focus();
      return false;
    }
    return true;
  };

  const message = () => {
    const label = requestTypes.find((t) => t.id === values.tur)?.label ?? "";
    const lines = [
      `Merhaba, "${label}" için yazıyorum.`,
      `Ad soyad: ${values.ad.trim()}`,
      `Telefon: ${values.telefon.trim()}`,
      values.konu.trim() && `Cihaz / konu: ${values.konu.trim()}`,
      `Mesaj: ${values.mesaj.trim()}`,
    ].filter(Boolean);
    return { label, text: lines.join("\n") };
  };

  // Ana gönderim: WhatsApp mesajı hazırlar
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!check()) return;
    window.open(whatsappLink(message().text), "_blank", "noopener,noreferrer");
    setStatus("WhatsApp açıldı. Mesajı WhatsApp'ta göndermeyi unutmayın.");
  };

  // Alternatif: e-posta taslağı hazırlar
  const onMail = () => {
    if (!check()) return;
    const { label, text } = message();
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${label} - ${values.ad.trim()}`)}&body=${encodeURIComponent(text)}`;
    setStatus("E-posta taslağı açıldı. Göndermeyi unutmayın.");
  };

  const describedBy = (k: keyof Values) => (errors[k] ? `hata-${k}` : undefined);
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="alan-ad" className="font-semibold">Ad soyad</label>
        <input id="alan-ad" name="ad" type="text" autoComplete="name" required value={values.ad}
          onChange={(e) => set("ad", e.target.value)} aria-invalid={!!errors.ad} aria-describedby={describedBy("ad")} className={inputClass} />
        <FieldError name="ad" text={errors.ad} />
      </div>
      <div>
        <label htmlFor="alan-telefon" className="font-semibold">Telefon</label>
        <input id="alan-telefon" name="telefon" type="tel" autoComplete="tel" required inputMode="tel" value={values.telefon}
          onChange={(e) => set("telefon", e.target.value)} aria-invalid={!!errors.telefon} aria-describedby={describedBy("telefon")} className={inputClass} />
        <FieldError name="telefon" text={errors.telefon} />
      </div>
      <div>
        <label htmlFor="alan-tur" className="font-semibold">Talep türü</label>
        <select id="alan-tur" name="tur" required value={values.tur}
          onChange={(e) => set("tur", e.target.value as RequestTypeId | "")} aria-invalid={!!errors.tur} aria-describedby={describedBy("tur")} className={inputClass}>
          <option value="">Seçin</option>
          {requestTypes.map((t) => (
            <option key={t.id} value={t.id}>{t.label}</option>
          ))}
        </select>
        <FieldError name="tur" text={errors.tur} />
      </div>
      <div>
        <label htmlFor="alan-konu" className="font-semibold">
          Cihaz veya konu <span className="font-normal text-muted">(isteğe bağlı)</span>
        </label>
        <input id="alan-konu" name="konu" type="text" value={values.konu} onChange={(e) => set("konu", e.target.value)} className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="alan-mesaj" className="font-semibold">Mesaj</label>
        <textarea id="alan-mesaj" name="mesaj" rows={5} required value={values.mesaj}
          onChange={(e) => set("mesaj", e.target.value)} aria-invalid={!!errors.mesaj} aria-describedby={describedBy("mesaj")} className={inputClass} />
        <FieldError name="mesaj" text={errors.mesaj} />
      </div>
      <div className="sm:col-span-2">
        <div className="flex items-start gap-3">
          <input id="alan-kvkk" name="kvkk" type="checkbox" required checked={values.kvkk}
            onChange={(e) => set("kvkk", e.target.checked)} aria-invalid={!!errors.kvkk} aria-describedby={describedBy("kvkk")}
            className="mt-1 h-5 w-5 shrink-0 accent-[var(--accent)]" />
          <label htmlFor="alan-kvkk" className="text-sm">
            Kişisel verilerimin işlenmesine ilişkin{" "}
            {site.kvkkUrl ? (
              <a href={site.kvkkUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-link underline">Aydınlatma Metni</a>
            ) : (
              <span className="font-semibold underline decoration-dotted">Aydınlatma Metni</span>
            )}
            &apos;ni okudum ve onaylıyorum. <PendingTag />
          </label>
        </div>
        <FieldError name="kvkk" text={errors.kvkk} />
      </div>

      {/* Ekran okuyucular için canlı bölge: hata özeti ve gönderim durumu burada okunur */}
      <div aria-live="polite" role="status" className="sm:col-span-2 text-sm font-semibold">
        {status}
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
        <button type="submit" className="rounded-md bg-accent px-6 py-3 font-semibold text-on-accent hover:brightness-95">
          WhatsApp ile gönder
        </button>
        <button type="button" onClick={onMail} className="rounded-md border border-border bg-surface px-6 py-3 font-semibold hover:bg-border/40">
          E-posta ile gönder
        </button>
      </div>
      <p className="text-sm text-muted sm:col-span-2">Demo sürüm — canlıda talep doğrudan servis sistemine kaydedilecek.</p>
    </form>
  );
}

// ?konu= parametresini okur; Suspense içinde olmalı (statik export)
function FormWithParam() {
  const konu = useSearchParams().get("konu");
  const initial = isRequestType(konu) ? konu : "";
  // Parametre değişirse form baştan kurulur
  return <Fields key={initial} initialType={initial} />;
}

export default function ContactForm() {
  return (
    <Suspense fallback={<Fields initialType="" />}>
      <FormWithParam />
    </Suspense>
  );
}
