import type { CSSProperties } from "react";

// Hero süsü. Tamamen süstür (aria-hidden), içerikle asla çakışmaz:
// - Mobil (md altı): hat ve animasyon yok; sağ üst köşede durağan, çok hafif turuncu ışık.
// - Masaüstü (md ve üstü): devre hatları yalnızca hero'nun üst ve alt şeritlerinde (padding alanı) akar.
//   Şerit yüksekliği (h-16 = 64px) hero dikey padding'inden (sm:py-20 = 80px) küçüktür; metin, buton
//   ve kartlar bu şeritlere giremez.
type Trace = { d: string; node: readonly [number, number]; sure: number; gecikme: number };

// Her şerit viewBox 1200x64; tüm koordinatlar y: 8..56 aralığında kalır
const ust: readonly Trace[] = [
  { d: "M0 40 H220 L250 16 H480 L510 40 H700", node: [700, 40], sure: 9, gecikme: 0 },
  { d: "M1200 20 H980 L950 44 H820 L795 20 H640", node: [640, 20], sure: 10, gecikme: -5 },
  { d: "M300 8 V24 L330 48 H560", node: [560, 48], sure: 8, gecikme: -2 },
];
const alt: readonly Trace[] = [
  { d: "M1200 44 H1020 L990 20 H760 L730 44 H560", node: [560, 44], sure: 12, gecikme: -7 },
  { d: "M0 24 H140 L170 48 H420 L450 24 H640", node: [640, 24], sure: 11, gecikme: -3 },
  { d: "M900 56 V40 L870 16 H800", node: [800, 16], sure: 7, gecikme: -4 },
];

function Serit({ traces, className }: { traces: readonly Trace[]; className: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1200 64"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-x-0 hidden h-16 w-full max-w-full text-white md:block ${className}`}
      fill="none"
    >
      {traces.map((t) => (
        <g key={t.d}>
          {/* Sabit hat */}
          <path d={t.d} stroke="currentColor" strokeOpacity="0.14" strokeWidth="1.5" />
          <circle cx={t.node[0]} cy={t.node[1]} r="5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
          {/* Hat boyunca akan ışık noktası */}
          <path
            d={t.d}
            pathLength={100}
            className="devre-nokta"
            stroke="var(--accent)"
            strokeOpacity="0.85"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{ "--sure": `${t.sure}s`, "--gecikme": `${t.gecikme}s` } as CSSProperties}
          />
        </g>
      ))}
    </svg>
  );
}

export default function HeroCircuit() {
  return (
    <>
      {/* Mobil: durağan, animasyonsuz, düşük opaklıkta ışık */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 max-w-full md:hidden"
        style={{ background: "radial-gradient(circle at 100% 0%, rgb(242 140 40 / 0.2), transparent 70%)" }}
      />
      <Serit traces={ust} className="top-0" />
      <Serit traces={alt} className="bottom-0" />
    </>
  );
}
