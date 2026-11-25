import React from "react";

/**
 * BentoCard
 * High-fidelity frosted glass card container with glare gradient and hover elevation.
 */
export default function BentoCard({
  colSpan = "",
  className = "",
  style = {},
  children,
}) {
  return (
    <div
      className={`${colSpan} bento-card-wrapper group relative h-full`}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`bento-card relative isolate flex min-h-[240px] sm:min-h-[270px] lg:min-h-[300px] h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-white/[0.015] p-5 sm:p-6 md:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.1)] ${className}`}
        style={{
          transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transformStyle: "preserve-3d",
          ...style,
        }}
      >
        {/* Soft top-right ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full bg-primary/[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Dynamic glare follower */}
        <div
          className="bento-glare absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.12) 0%, transparent 60%)",
          }}
        />

        {children}
      </div>
    </div>
  );
}
