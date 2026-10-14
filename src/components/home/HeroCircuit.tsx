import type { CSSProperties } from "react";

// Hero arka planı: ince devre kartı hatları ve hatlar üzerinde akan turuncu ışık noktaları.
// Tamamen süstür (aria-hidden); düşük opaklıkta ve soldan sağa güçlenen maske ile metni bozmaz.
// İki ayrı çizim vardır: geniş ekran (yatay kart) ve mobil (dikey, sadeleştirilmiş, kenarlara yakın hatlar).
type Trace = { d: string; node: readonly [number, number]; sure: number; gecikme: number };

const wide: readonly Trace[] = [
  { d: "M0 80 H220 L260 120 H480 L520 80 H700", node: [700, 80], sure: 9, gecikme: 0 },
  { d: "M0 250 H140 L190 300 H420 V380 H640", node: [640, 380], sure: 11, gecikme: -3 },
  { d: "M1200 120 H980 L940 160 H820 V260 H600", node: [600, 260], sure: 10, gecikme: -5 },
  { d: "M1200 400 H1020 L980 360 H760 L720 400 H560", node: [560, 400], sure: 12, gecikme: -7 },
  { d: "M300 0 V60 L340 100 H560", node: [560, 100], sure: 8, gecikme: -2 },
  { d: "M900 500 V430 L860 390 H800", node: [800, 390], sure: 7, gecikme: -4 },
];

// Mobil: viewBox 360x720; hatlar sayfa kenarlarında kalır, metnin ortasından geçmez
const narrow: readonly Trace[] = [
  { d: "M0 90 H40 L70 120 V300", node: [70, 300], sure: 10, gecikme: 0 },
  { d: "M360 330 H320 L290 360 V560", node: [290, 560], sure: 12, gecikme: -4 },
  { d: "M0 600 H50 L80 630 H200", node: [200, 630], sure: 9, gecikme: -6 },
];

function Hatlar({ traces, sw }: { traces: readonly Trace[]; sw: number }) {
  return traces.map((t) => (
    <g key={t.d}>
      {/* Sabit hat */}
      <path d={t.d} stroke="currentColor" strokeOpacity="0.14" strokeWidth={sw} />
      <circle cx={t.node[0]} cy={t.node[1]} r="5" stroke="currentColor" strokeOpacity="0.25" strokeWidth={sw} />
      {/* Hat boyunca akan ışık noktası */}
      <path
        d={t.d}
        pathLength={100}
        className="devre-nokta"
        stroke="var(--accent)"
        strokeOpacity="0.85"
        strokeWidth={sw * 2.3}
        strokeLinecap="round"
        style={{ "--sure": `${t.sure}s`, "--gecikme": `${t.gecikme}s` } as CSSProperties}
      />
    </g>
  ));
}

export default function HeroCircuit() {
  return (
    <>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 hidden h-full w-full max-w-full text-white [mask-image:linear-gradient(90deg,rgba(0,0,0,0.25),rgba(0,0,0,1)_60%)] sm:block"
        fill="none"
      >
        <Hatlar traces={wide} sw={1.5} />
      </svg>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 360 720"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full max-w-full text-white opacity-70 sm:hidden"
        fill="none"
      >
        <Hatlar traces={narrow} sw={1.25} />
      </svg>
    </>
  );
}
