import React from "react";
import CurvedUnderline from "./CurvedUnderline";

/**
 * SectionTitle
 * Standardized display heading with gradient text, italic Playfair Display highlight, and SVG underline.
 */
export default function SectionTitle({
  prefix,
  highlight,
  suffix = "",
  size = "normal",
  className = "",
}) {
  const sizeClass =
    size === "compact"
      ? "text-[clamp(2.15rem,1.15rem+3.8vw,3.75rem)]"
      : "text-[clamp(2.35rem,1.25rem+4.6vw,4.5rem)]";

  return (
    <h2
      className={`relative font-bold leading-[1.08] tracking-[-0.035em] text-white ${sizeClass} ${className}`}
      style={{ textWrap: "balance" }}
    >
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
        {prefix}{" "}
        {highlight && (
          <span className="group/word relative inline-block">
            <span
              className="relative z-10 inline-block transform italic font-medium text-primary transition-transform duration-500 group-hover/word:scale-105"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {highlight}
            </span>
            <CurvedUnderline />
          </span>
        )}
        {suffix}
      </span>
    </h2>
  );
}
