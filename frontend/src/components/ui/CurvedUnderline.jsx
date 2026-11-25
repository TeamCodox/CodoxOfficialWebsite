import React from "react";

/**
 * CurvedUnderline
 * The signature dual-stroke expressive SVG underline for section highlight words.
 */
export default function CurvedUnderline({ className = "", animate = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 28"
      fill="none"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -bottom-2.5 left-0 w-full h-4 md:-bottom-3.5 md:h-5 text-primary overflow-visible ${className}`}
    >
      {/* Primary expressive arch */}
      <path
        d="M3 13.5C58 5.5 168 3.5 254 11.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        className={`${
          animate ? "hero-underline-primary" : ""
        } opacity-95 transition-all duration-500 group-hover/word:translate-x-0.5`}
      />
      {/* Secondary shorter counter-swoosh */}
      <path
        d="M28 21.5C88 16.5 162 16 226 19.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={`${
          animate ? "hero-underline-secondary" : ""
        } opacity-55 transition-all duration-500 group-hover/word:-translate-x-1`}
      />
    </svg>
  );
}
