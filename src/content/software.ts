// Ticari yazılım çözümleri. `available: false` olanlar Faz 2'de yapılacak.

export type SoftwareSolution = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  available: boolean;
};

export const software: SoftwareSolution[] = [
  {
    slug: "restoran-cafe-otomasyonu",
    title: "Restoran / Cafe Otomasyonu",
    summary: "Restoran ve cafeler için masa yönetimi, stok ve raporlama özellikli otomasyon sistemi.",
    href: "/yazilim/restoran-cafe-otomasyonu",
    available: true,
  },
  {
    slug: "depo-otomasyonu",
    title: "Depo Otomasyonu",
    summary: "Barkodlu depo giriş-çıkış ve stok takip sistemi.",
    href: "/yazilim/depo-otomasyonu",
    available: false,
  },
  {
    slug: "ticari-otomasyon",
    title: "Ticari Otomasyon",
    summary: "Ticari işletmeler için satış, stok ve cari takip yazılımı.",
    href: "/yazilim/ticari-otomasyon",
    available: false,
  },
  {
    slug: "magaza-barkod",
    title: "Mağaza Barkod Sistemi",
    summary: "Mağazalar için barkodlu satış ve stok yönetimi.",
    href: "/yazilim/magaza-barkod",
    available: false,
  },
];
