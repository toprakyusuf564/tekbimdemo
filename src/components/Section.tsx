import type { ReactNode } from "react";
import Container from "./Container";

type Props = {
  children: ReactNode;
  // Bölüm başlığının id'si; ekran okuyucular için aria-labelledby olarak bağlanır
  labelledBy?: string;
  // Dönüşümlü zemin: bg (düz) / surface (hafif gri)
  tone?: "bg" | "surface";
};

// Sayfa bölümü: dikey boşluk + zemin + Container
export default function Section({ children, labelledBy, tone = "bg" }: Props) {
  return (
    <section aria-labelledby={labelledBy} className={tone === "surface" ? "bg-surface" : "bg-bg"}>
      <Container className="py-14 sm:py-16">{children}</Container>
    </section>
  );
}
