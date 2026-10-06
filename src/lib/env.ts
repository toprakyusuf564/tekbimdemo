// Ortam ayrımı: "production" dışında (varsayılan "preview") site arama motorlarına kapalıdır.
// Değer build sırasında gömülür; canlıya çıkarken NEXT_PUBLIC_SITE_ENV=production verilmelidir.
export const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

// Onay etiketleri ([ONAY BEKLİYOR]) görünürlüğü. Varsayılan true; "false" ise yalnızca etiketler gizlenir.
// Etiket gizli olsa da onaysız SSS'ler FAQPage JSON-LD'ye girmez.
export const showPending = process.env.NEXT_PUBLIC_SHOW_PENDING !== "false";
