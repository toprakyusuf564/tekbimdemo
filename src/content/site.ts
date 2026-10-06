// Firma bilgileri — tek kaynak. Kaynak: tekbim.net (yazım hataları düzeltilmiş)

// formtakip.net protokolü tek yerden yönetilir (https desteğini Yusuf doğrulayacak; ONAY_LISTESI.md #12)
const FORMTAKIP_PROTOCOL = "https";
const formtakipBase = `${FORMTAKIP_PROTOCOL}://formtakip.net`;

export const site = {
  name: "Tekbim Bilgisayar",
  shortName: "Tekbim",
  url: "https://tekbim.net",
  foundingYear: 1994,
  tagline: "1994'ten beri Aydın'ın teknoloji ortağı",
  description:
    "1994'ten beri Aydın/Efeler'de bilgisayar satışı, teknik servis, ağ/güvenlik ve ticari yazılım çözümleri.",
  address: {
    street: "Güzelhisar Mahallesi 47. Sokak No:9/A",
    district: "Efeler",
    city: "Aydın",
    country: "TR",
    // Tek satırlık gösterim
    full: "Güzelhisar Mahallesi 47. Sokak No:9/A Efeler / Aydın",
  },
  phone: { display: "0 256 214 44 10", tel: "+902562144410" },
  mobile: { display: "0 555 520 19 84", tel: "+905555201984" },
  email: "info@tekbim.net",
  // wa.me için ülke kodlu, boşluksuz numara
  whatsapp: "905555201984",
  hours: {
    display: "Pazartesi–Cumartesi 09.00–19.00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  social: {
    facebook: "https://www.facebook.com/tekbimbilgisayar",
    instagram: "https://www.instagram.com/tekbimbilgisayar",
  },
  // Servis talebi formu iletişim sayfasında (Adım 6) #servis-talebi bölümünde olacak
  serviceRequestHref: "/iletisim#servis-talebi",
  remoteSupportUrl: "https://anydesk.com/tr/downloads/windows",
  // Servis takip sistemi (Tekbim markası)
  serviceTrack: {
    home: formtakipBase,
    query: `${formtakipBase}/default.asp`, // Cihaz durumu sorgulama
    corporate: `${formtakipBase}/yetkili.asp`, // Kurumsal giriş
  },
  // Logo dosyası gelene kadar metin logo kullanılır (public/logo/ altına konacak)
  logo: null as string | null,
} as const;

// Google Maps adres araması (yol tarifi için)
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`;

// Faz 1'de var olan sayfalar. Faz 2 sayfaları eklendikçe buraya girer.
export const mainNav = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Teknik Servis", href: "/hizmetler/teknik-servis" },
  { label: "Yazılım Çözümleri", href: "/yazilim/restoran-cafe-otomasyonu" },
  { label: "Bakım Anlaşmaları", href: "/bakim-anlasmalari" },
  { label: "İletişim", href: "/iletisim" },
] as const;

// Tüm sitede kullanılan ortak yardımcılar
export const whatsappLink = (text = "Merhaba, bilgi almak istiyorum.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
