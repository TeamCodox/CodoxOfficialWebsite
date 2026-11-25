import React from "react";

/**
 * SectionBadge
 * Glowing rounded pill badge with animated ping pulse dot.
 */
export default function SectionBadge({
  label,
  pulseColor = "bg-primary",
  className = "",
  children,
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-surface-container/70 px-4 py-2 shadow-lg backdrop-blur-xl w-fit ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pulseColor}`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${pulseColor}`}
        />
      </span>
      {label && (
        <span className="text-on-surface font-semibold text-[10px] tracking-[0.16em] uppercase">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
