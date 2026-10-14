"use client";

// Açık/koyu tema düğmesi. İkon seçimi CSS ile yapılır (hydration farkı oluşmaz).
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("tema", next);
    } catch {
      // Depolama kapalıysa tercih sadece bu oturumda geçerli olur
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Açık/koyu temayı değiştir"
      className="inline-flex h-11 w-11 items-center justify-center rounded-md text-on-chrome hover:bg-white/10"
    >
      {/* Ay: açık temada görünür */}
      <svg className="block dark:hidden" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      {/* Güneş: koyu temada görünür */}
      <svg className="hidden dark:block" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
