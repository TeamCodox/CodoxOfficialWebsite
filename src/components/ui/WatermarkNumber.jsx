import React from "react";

/**
 * WatermarkNumber
 * Stylized large watermark number displayed in the corner of cards.
 */
export default function WatermarkNumber({
  number,
  position = "-bottom-4 -right-1 sm:-bottom-5 sm:-right-2",
  className = "",
  style = {},
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none text-[clamp(5.25rem,11vw,8.25rem)] font-bold leading-none tracking-tighter ${position} ${className}`}
      style={{
        color: "rgba(255, 255, 255, 0.035)",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
        ...style,
      }}
    >
      {number}
    </div>
  );
}
