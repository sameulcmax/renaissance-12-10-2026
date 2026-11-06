"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const CONSENT_COOKIE = "renaissance-cookie-consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = document.cookie
      .split("; ")
      .some((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=`));

    setVisible(!hasConsent);
  }, []);

  const saveConsent = (choice: "all" | "essential") => {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${CONSENT_COOKIE}=${choice}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-20 z-[100] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#06369c]/95 p-5 text-white shadow-2xl backdrop-blur-xl sm:inset-x-6 sm:flex sm:items-center sm:gap-6 sm:p-6"
    >
      <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 sm:mb-0">
        <Cookie aria-hidden="true" size={22} strokeWidth={1.7} />
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="text-base font-semibold">Your privacy matters</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          We use cookies to support essential website functionality. You can
          choose whether to allow optional cookies.
        </p>
      </div>

      <div className="mt-4 flex shrink-0 flex-wrap gap-2 sm:mt-0">
        <button
          type="button"
          onClick={() => saveConsent("essential")}
          className="rounded-full border border-white/35 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Essential only
        </button>
        <button
          type="button"
          onClick={() => saveConsent("all")}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#06369c] transition-colors hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Accept all
        </button>
      </div>
    </aside>
  );
}
