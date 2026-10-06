// Bakım anlaşması paketleri. Fiyat ve kapsam firma sahibinden gelene kadar onay bekliyor.

export type MaintenancePlan = {
  slug: string;
  title: string;
  period: string;
  // null = henüz onaylanmadı; arayüzde "[ONAY BEKLİYOR]" yerine "Teklif alın" gösterilir
  price: string | null;
  features: string[];
};

export const maintenancePlans: MaintenancePlan[] = [
  { slug: "yillik", title: "Yıllık Bakım Anlaşması", period: "Yıllık", price: null, features: [] }, // [ONAY BEKLİYOR]
  { slug: "aylik", title: "Aylık Bakım Anlaşması", period: "Aylık", price: null, features: [] }, // [ONAY BEKLİYOR]
  { slug: "servis-basina", title: "Servis Başına", period: "Her servis", price: null, features: [] }, // [ONAY BEKLİYOR]
];
