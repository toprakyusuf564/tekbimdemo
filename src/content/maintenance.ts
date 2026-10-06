// Bakım anlaşması paketleri. Kaynak: tekbim.net/service/laptop-repair/ (üç anlaşma türü).
// Fiyat ve paket bazlı kapsam firma sahibinden gelene kadar onay bekliyor (ONAY_LISTESI.md #1, #2, #21, #22).

export type MaintenancePlan = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  // null = onaylanmadı; sayfada fiyat gösterilmez
  price: string | null;
};

export const maintenancePlans: MaintenancePlan[] = [
  { slug: "yillik", title: "Yıllık Destek Anlaşması", period: "Yıllık", summary: "Yıl boyunca geçerli destek anlaşması.", price: null },
  { slug: "aylik", title: "Aylık Anlaşma", period: "Aylık", summary: "Aylık dönemli anlaşma.", price: null },
  { slug: "servis-basina", title: "Servis Başına Anlaşma", period: "Servis başına", summary: "Her servis için ayrı yapılan anlaşma.", price: null },
];

// Karşılaştırma tablosu. cells sırası maintenancePlans ile aynıdır.
// undefined = bilinmiyor / onay bekliyor (tahmin yazılmaz).
export const comparisonRows: { label: string; cells: (string | undefined)[] }[] = [
  { label: "Ödeme şekli", cells: [undefined, undefined, undefined] },
  { label: "Müdahale süresi", cells: [undefined, undefined, undefined] },
  { label: "Yerinde servis", cells: [undefined, undefined, undefined] },
  { label: "Uzaktan destek (AnyDesk)", cells: [undefined, undefined, undefined] },
  // Eski siteden doğrulandı: bakım anlaşmalı müşteriler web servisi ücretsiz kullanır
  { label: "Web servis ile arıza kaydı", cells: ["Var, ücretsiz", "Var, ücretsiz", "Var, ücretsiz"] },
  { label: "Periyodik bakım", cells: [undefined, undefined, undefined] },
];

// "Kimler için?" — genel anlatım, iddia içermez
export const maintenanceAudience = [
  { title: "Ofisler", text: "Bilgisayar ve ağ cihazlarının düzenli desteğe ihtiyaç duyduğu çalışma alanları." },
  { title: "Mağazalar", text: "Satış noktasındaki bilgisayar ve cihazların kesintisiz çalışmasını isteyen işletmeler." },
  { title: "Restoranlar", text: "Kasa ve sipariş sistemlerinin güvenilir çalışmasına ihtiyaç duyan işletmeler." },
  { title: "Çok bilgisayarlı işletmeler", text: "Birden fazla cihazı tek bir destek düzeni altında yönetmek isteyen firmalar." },
];
