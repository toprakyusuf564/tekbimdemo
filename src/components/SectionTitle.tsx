type Props = {
  title: string;
  eyebrow?: string;
  description?: string;
  // Sayfanın tek h1'i hero'da kullanılır; bölüm başlıkları varsayılan olarak h2
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
};

// Bölüm başlığı: küçük üst etiket + başlık + açıklama
export default function SectionTitle({ title, eyebrow, description, as: Tag = "h2", id, className = "" }: Props) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-text">{eyebrow}</p>}
      <Tag id={id} className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</Tag>
      {description && <p className="mt-3 text-muted">{description}</p>}
    </div>
  );
}
