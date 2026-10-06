// İletişim formunun saf (React'siz) mantığı: doğrulama ve mesaj/bağlantı üretimi.
// Çalışma zamanı importu yoktur, bu yüzden node ile doğrudan test edilebilir.

export type FormValues = {
  ad: string;
  telefon: string;
  tur: string;
  konu: string;
  mesaj: string;
  kvkk: boolean;
};
export type FormErrors = Partial<Record<keyof FormValues, string>>;

export function validateForm(v: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (v.ad.trim().length < 3) errors.ad = "Lütfen adınızı ve soyadınızı yazın.";
  const digits = v.telefon.replace(/\D/g, "");
  // Rakam, boşluk, +, -, ( ) ve . dışında karakter kabul edilmez
  if (!/^[+\d\s().-]+$/.test(v.telefon) || digits.length < 10 || digits.length > 12) {
    errors.telefon = "Lütfen geçerli bir telefon numarası yazın (örn. 0 5xx xxx xx xx).";
  }
  if (!v.tur) errors.tur = "Lütfen talep türünü seçin.";
  if (v.mesaj.trim().length < 5) errors.mesaj = "Lütfen mesajınızı yazın.";
  if (!v.kvkk) errors.kvkk = "Devam etmek için aydınlatma metni onay kutusunu işaretleyin.";
  return errors;
}

// Gönderilecek düz metin (satır sonları \n)
export function buildMessage(v: FormValues, typeLabel: string): string {
  return [
    `Merhaba, "${typeLabel}" için yazıyorum.`,
    `Ad soyad: ${v.ad.trim()}`,
    `Telefon: ${v.telefon.trim()}`,
    v.konu.trim() && `Cihaz / konu: ${v.konu.trim()}`,
    `Mesaj: ${v.mesaj.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");
}

// wa.me bağlantısı: metin encodeURIComponent ile kodlanır (Türkçe karakterler ve satır sonları dahil)
export function buildWhatsappUrl(number: string, text: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

// mailto bağlantısı: e-posta istemcileri için satır sonları CRLF (%0D%0A) yapılır
export function buildMailtoUrl(email: string, subject: string, text: string): string {
  const body = text.replace(/\n/g, "\r\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
