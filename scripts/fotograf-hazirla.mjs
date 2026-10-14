// Ham fotoğrafları (public/images/ham/) site için WebP'ye çevirir ve boyutlandırır.
// Kullanım: node scripts/fotograf-hazirla.mjs
// Ham dosya adı, src/content/photos.json içindeki anahtarla aynı olmalı (ör. dukkan-dis.jpg, dukkan-dis.heic).
// Çıktı: public/images/<anahtar>.webp (belirlenen en x boy ölçüsüne ortadan kırpılarak sığdırılır).
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";

const kok = path.resolve(import.meta.dirname, "..");
const hamDizin = path.join(kok, "public/images/ham");
const cikisDizin = path.join(kok, "public/images");
const alanlar = JSON.parse(fs.readFileSync(path.join(kok, "src/content/photos.json"), "utf8"));
const desteklenen = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif"]);

if (!fs.existsSync(hamDizin)) {
  console.log(`Klasör yok: ${hamDizin}\nHam fotoğrafları bu klasöre koyup betiği yeniden çalıştırın.`);
  process.exit(0);
}

let islenen = 0;
for (const dosya of fs.readdirSync(hamDizin)) {
  const { name, ext } = path.parse(dosya);
  const uzanti = ext.toLowerCase();
  if (!desteklenen.has(uzanti)) continue;
  const alan = alanlar[name.toLowerCase()];
  if (!alan) {
    console.warn(`Atlandı: ${dosya} (beklenen adlar: ${Object.keys(alanlar).join(", ")})`);
    continue;
  }

  let kaynak = path.join(hamDizin, dosya);
  let gecici = null;
  if (uzanti === ".heic" || uzanti === ".heif") {
    // sharp'ın hazır sürümü HEIC çözmez; macOS'taki sips ile geçici JPG'ye çevrilir
    gecici = path.join(os.tmpdir(), `${name}-${Date.now()}.jpg`);
    try {
      execFileSync("sips", ["-s", "format", "jpeg", kaynak, "--out", gecici], { stdio: "ignore" });
    } catch {
      console.warn(`Atlandı: ${dosya} (HEIC için macOS gerekir; JPG olarak dışa aktarıp tekrar deneyin)`);
      continue;
    }
    kaynak = gecici;
  }

  const hedef = path.join(cikisDizin, alan.dosya);
  const bilgi = await sharp(kaynak)
    .rotate() // telefon fotoğraflarının yön bilgisini uygula
    .resize(alan.en, alan.boy, { fit: "cover", position: "centre", withoutEnlargement: false })
    .webp({ quality: 78 })
    .toFile(hedef);
  if (gecici) fs.rmSync(gecici, { force: true });

  const kucuk = (await sharp(kaynak).metadata().catch(() => null))?.width ?? 0;
  if (kucuk && kucuk < alan.en) console.warn(`Uyarı: ${dosya} genişliği ${kucuk}px; önerilen en az ${alan.en}px (görüntü bulanık olabilir).`);
  console.log(`Tamam: ${dosya} -> ${path.relative(kok, hedef)} (${alan.en}x${alan.boy}, ${(bilgi.size / 1024).toFixed(0)} KB)`);
  islenen++;
}
console.log(islenen ? `${islenen} fotoğraf hazırlandı.` : "İşlenecek uygun dosya bulunamadı.");
