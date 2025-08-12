"use client";

import { FC, useEffect, useState } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type BackToTopProps = SliceComponentProps<Content.BackToTopSlice>;

const BackToTop: FC<BackToTopProps> = ({ slice }) => {
  // Champs Prismic
  const enabled = slice.primary.enabled ?? true;
  const label = slice.primary.back_to_top || "Back to top";

  // Afficher le bouton après un certain scroll
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!enabled) return null;

  // Scroll plus lent vers le haut (ou vers l'élément #top s'il existe)
  const goTop = () => {
    // Accessibilité : respecter la préférence utilisateur
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: 0 });
      return;
    }

    const targetEl = document.getElementById("top");
    const startY = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = targetEl ? startY + targetEl.getBoundingClientRect().top : 0;

    const distance = targetY - startY;

    // Durée ajustable (ms)
    const DURATION = 1200;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let startTime: number | null = null;

    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (elapsed < DURATION) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <div aria-hidden className="pointer-events-none fixed bottom-6 right-6 z-[60]">
      <button
        onClick={goTop}
        title={label}
        className={[
          "pointer-events-auto flex items-center gap-2 rounded-full px-4 py-3 shadow-xl",
          "bg-white/90 hover:bg-white text-gray-900 border border-gray-200",
          "backdrop-blur-md transition-all duration-300",
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ].join(" ")}
        aria-label={label}
      >
        {/* Icône flèche */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 19V5M12 5l-6 6M12 5l6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm font-medium">{label}</span>
      </button>
    </div>
  );
};

export default BackToTop;
