import { whatsappLink } from "@/content/site";

// Sağ altta sabit WhatsApp butonu. Mobilde yalnızca ikon, geniş ekranda ikon + yazı.
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-4 font-semibold text-white shadow-lg hover:brightness-110 sm:px-5"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z" />
        <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.3-1.3-1.9-1-.9.7a3.7 3.7 0 0 1-1.9-1.9l.7-.9-1-1.9z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
