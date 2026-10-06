import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

// Sayfa genişliğini sınırlayan ortak kapsayıcı
export default function Container({ children, as: Tag = "div", className = "" }: Props) {
  return <Tag className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</Tag>;
}
