// Yazılım çözümleri bölümünün süsü: barkod çizgileri ve üzerinden geçen kırmızı lazer.
// Süstür (aria-hidden). Barkod rengi temaya uyar (currentColor), lazer iki temada da kırmızıdır.
const widths = [2, 1, 3, 1, 2, 2, 1, 1, 3, 2, 1, 2, 3, 1, 1, 2, 1, 3, 2, 1, 2];

// Çubuk konumları modül yüklenirken bir kez hesaplanır (render sırasında değişken atanmaz)
const bars = widths.reduce<{ x: number; w: number }[]>((acc, w) => {
  const prev = acc[acc.length - 1];
  const x = prev ? prev.x + prev.w + 3 : 6;
  return [...acc, { x, w: w * 2 }];
}, []);
const last = bars[bars.length - 1];
const width = last.x + last.w + 6;

// className ile barkod rengi zemine göre değiştirilir (varsayılan: yazı rengi)
export default function BarcodeScan({ className = "text-fg" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={width}
      height="84"
      viewBox={`0 0 ${width} 84`}
      className={className}
    >
      {bars.map((b) => (
        <rect key={b.x} x={b.x} y="6" width={b.w} height="72" fill="currentColor" opacity="0.75" />
      ))}
      {/* Lazer: ince çizgi + yumuşak ışıma, transform ile hareket eder */}
      <g className="lazer-cizgi" style={{ ["--tarama" as string]: "66px" }}>
        <rect x="0" y="3" width={width} height="8" fill="#e5322d" opacity="0.22" />
        <rect x="0" y="6" width={width} height="2" fill="#e5322d" />
      </g>
    </svg>
  );
}
