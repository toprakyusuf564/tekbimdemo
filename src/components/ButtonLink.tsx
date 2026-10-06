import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  // primary: turuncu zemin / outline: açık çerçeve (koyu zemin üstünde) / secondary: yüzey zemini
  variant?: "primary" | "outline" | "secondary";
  className?: string;
};

const variants = {
  primary: "bg-accent text-on-accent hover:brightness-95",
  outline: "border border-white/60 text-on-chrome hover:bg-white/10",
  secondary: "border border-border bg-surface text-fg hover:bg-border/40",
};

// Link görünümlü buton. Site içi adresler next/link, dış adres ve tel: düz <a> olur.
export default function ButtonLink({ href, children, variant = "primary", className = "" }: Props) {
  const classes = `inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold ${variants[variant]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
