// Restoran / cafe otomasyonu içeriği. Kaynak: tekbim.net/portfolio/our-project-01/ (eski sayfada geçenler).
// pending: true olanlar eski sayfada geçmiyor veya firma sahibinden onay bekliyor (ONAY_LISTESI.md #14-#18).

export const restaurantProduct = {
  // Ürünün Tekbim'e ait mi yoksa satılan bir ürün mü olduğu onay bekliyor
  name: "ERP12 Restoran",
  intro:
    "ERP12 Restoran, gıda sektöründeki işletmeler için üretimden masa sipariş sürecine kadar tüm aşamalarda yardımcı olmak üzere tasarlanmış bir yazılım çözümüdür.",
};

export const restaurantSegments = [
  "Cafeler",
  "Restoranlar",
  "Zincir ve franchise işletmeler",
  "Pastaneler",
  "Fast food restoranları",
  "Pizzacılar",
  "Barlar",
  "Paket servis yapan işletmeler",
];

// pending: onay bekliyor; pendingNote: etiketin yanındaki açıklama
export type RestaurantFeature = { title: string; text?: string; pending?: boolean; pendingNote?: string };

export const restaurantFeatures: RestaurantFeature[] = [
  { title: "Masa yönetimi" },
  { title: "Stok kontrolü" },
  { title: "Veresiye takibi" },
  { title: "Personel ve müşteri takibi" },
  { title: "Android garson sipariş uygulaması" },
  { title: "Tablet menü uygulaması" },
  { title: "Yemeksepeti entegrasyonu", pending: true, pendingNote: "Güncelliği teyit edilecek" },
  { title: "Caller ID entegrasyonu" },
  { title: "Rezervasyon ve puan kart uygulaması" },
  { title: "Çoklu dil ve para birimi desteği" },
  { title: "Raporlama", text: "X/Z raporları, satış analitiği ve karlılık raporları." },
  { title: "Yazar kasa entegrasyonu", pending: true, pendingNote: "Firma sahibi teyit edecek" },
  {
    title: "Adisyon, mutfak/bar yazıcısına sipariş, kasa ve ödeme",
    pending: true,
    pendingNote: "Eski sayfada geçmiyor",
  },
];

// Tekbim'in OT-VT ürün grubundan; yazılımla uyum ve yazar kasa entegrasyonu onay bekliyor
export const restaurantHardware = [
  "Dokunmatik POS",
  "Fiş yazıcı",
  "El terminali",
  "Yeni nesil yazar kasa",
];
