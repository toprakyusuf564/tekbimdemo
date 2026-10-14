This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Fotoğraf hazırlama

Firmadan gelen ham fotoğraflar (JPG/PNG/HEIC) `public/images/ham/` klasörüne konur (Git'e girmez).
Dosya adı `src/content/photos.json` içindeki anahtarlardan biri olmalı (örn. `dukkan-dis.jpg`).

```bash
node scripts/fotograf-hazirla.mjs
```

Betik (sharp) dosyaları `public/images/<ad>.webp` olarak 1600x1200 ölçüsüne kırpıp yazar; `PhotoSlot` bileşeni dosyayı build'de bulup yer tutucunun yerine koyar. HEIC dönüşümü macOS `sips` ile yapılır. Liste ve çekim önerileri: `FOTOGRAF_LISTESI.md`.
