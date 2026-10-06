// Hizmetler. `available: false` olanlar Faz 2'de yapılacak; sayfa yokken link verilmez.

export type Service = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  available: boolean;
};

export const services: Service[] = [
  {
    slug: "teknik-servis",
    title: "Teknik Servis",
    summary: "Notebook ve masaüstü bilgisayar arıza tespiti ve onarımı.",
    href: "/hizmetler/teknik-servis",
    available: true,
  },
  {
    slug: "donanim",
    title: "Donanım",
    summary: "Donanım yenileme, yükseltme ve veri yedekleme çözümleri.",
    href: "/hizmetler/donanim",
    available: false,
  },
  {
    slug: "guvenlik-kamera",
    title: "Güvenlik Kamera Sistemleri",
    summary: "Güvenlik kamerası kurulumu ve bakımı.",
    href: "/hizmetler/guvenlik-kamera",
    available: false,
  },
  {
    slug: "ag-kablolama",
    title: "Ağ ve Kablolama",
    summary: "Ağ altyapısı, kablolama ve ağ sorunlarının çözümü.",
    href: "/hizmetler/ag-kablolama",
    available: false,
  },
  {
    slug: "veri-kurtarma",
    title: "Virüs Taraması ve Veri Kurtarma",
    summary: "Virüs temizliği ve kaybolan verilerin kurtarılması.",
    href: "/hizmetler/veri-kurtarma",
    available: false,
  },
  {
    slug: "kurumsal",
    title: "Kurumsal Çözümler",
    summary: "Firmalara yönelik bilgi işlem destek ve donanım çözümleri.",
    href: "/hizmetler/kurumsal",
    available: false,
  },
];

// Teknik servis sayfasındaki kapsam kartları (genel ifadeler; firma sahibi gözden geçirmeli)
export const technicalServiceScope = [
  { title: "Notebook ve masaüstü onarımı", text: "Açılmayan, yavaşlayan veya hata veren bilgisayarların sorununu bulur ve onarırız." },
  { title: "Arıza tespiti", text: "Sorunun kaynağını belirler, yapılacak işlemi size anlatırız." },
  { title: "Parça değişimi ve donanım yükseltme", text: "Gerektiğinde arızalı parçayı değiştirir, cihazınızı donanım yükseltmeyle güçlendiririz." },
  { title: "İşletim sistemi ve yazılım kurulumu", text: "İşletim sistemi ve ihtiyacınız olan programların kurulumunu yaparız." },
  { title: "Virüs temizliği", text: "Virüs ve zararlı yazılımları temizler, cihazı tekrar güvenle kullanmanız için hazırlarız." },
  { title: "Veri yedekleme", text: "Önemli verilerinizin yedeklenmesinde destek veririz." },
  { title: "Kurumsal firmalara yerinde servis", text: "Bakım anlaşması bulunan firmalarımıza işletmelerinde destek veririz." },
];
