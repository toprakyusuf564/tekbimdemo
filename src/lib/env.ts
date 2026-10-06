// Ortam ayrımı: "production" dışında (varsayılan "preview") site arama motorlarına kapalıdır.
// Değer build sırasında gömülür; canlıya çıkarken NEXT_PUBLIC_SITE_ENV=production verilmelidir.
export const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";
