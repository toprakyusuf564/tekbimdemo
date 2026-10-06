"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/content/site";

// Mobil menü: sadece md altında görünür; Escape ve link tıklamasıyla kapanır
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobil-menu"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-on-chrome hover:bg-white/10"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav
          id="mobil-menu"
          aria-label="Mobil menü"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-chrome px-4 pb-4 pt-2 shadow-lg"
        >
          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-medium text-on-chrome hover:bg-white/10"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${site.phone.tel}`}
            className="mt-3 block rounded-md bg-accent px-4 py-3 text-center font-semibold text-on-accent"
          >
            Bizi Arayın: {site.phone.display}
          </a>
        </nav>
      )}
    </div>
  );
}
