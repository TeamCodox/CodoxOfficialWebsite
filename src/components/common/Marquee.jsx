import React from "react";

const DEFAULT_ITEMS = [
  "Brand Systems",
  "Digital Products",
  "Creative Engineering",
  "Immersive Experiences",
  "Motion & 3D",
];

export default function Marquee({ items = DEFAULT_ITEMS }) {
  return (
    <div
      className="absolute bottom-0 inset-x-0 z-30 h-11 overflow-hidden border-t border-white/[0.08]"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="hero-marquee-track flex h-full w-max items-center">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {[...items, ...items].map((item, index) => (
              <li key={`${item}-${index}`} className="flex items-center">
                <span className="px-5 sm:px-8 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/45 transition-colors duration-300 hover:text-white/90 whitespace-nowrap">
                  {item}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
