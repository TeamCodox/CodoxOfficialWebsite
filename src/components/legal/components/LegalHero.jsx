import React from "react";
import Header from "../../common/Header";
import { SectionBadge } from "../../ui";
import { LEGAL_PAGE_METADATA } from "../../../constants/legal";

export default function LegalHero() {
  return (
    <section
      className="relative flex min-h-[380px] sm:min-h-[420px] items-center overflow-hidden bg-[#0e0e0e] px-margin-mobile pt-28 pb-16 sm:pt-32 sm:pb-20 md:py-24 md:pt-36 md:px-margin-desktop"
      style={{ backgroundColor: "rgb(14, 14, 14)" }}
    >
      <div className="pointer-events-none absolute -bottom-32 -right-32 z-0 h-[800px] w-[800px] rounded-full bg-primary/15 opacity-60 blur-[120px]" />
      <div className="pointer-events-none absolute -top-12 left-0 z-0 h-[600px] w-[600px] rounded-full bg-primary/25 opacity-45 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(65, 65, 65) 1px, transparent 1px), linear-gradient(rgb(56, 56, 56) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(173,198,255,0.2) 1px, transparent 1px), linear-gradient(rgba(173,198,255,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(173,198,255,0.15) 1px, transparent 0px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0e0e]" />
      </div>

      <Header position="absolute" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center pt-8 text-center">
        <SectionBadge
          label={LEGAL_PAGE_METADATA.eyebrow}
          className="mb-6 px-4 py-1.5 font-mono text-[10px] font-bold tracking-[0.3em] text-white/90"
        />

        <h1 className="mb-6 sm:mb-8 text-[clamp(2.25rem,1.25rem+4.5vw,4.5rem)] font-bold leading-[0.98] tracking-tighter text-white drop-shadow-[0_8px_32px_rgba(173,198,255,0.18)]">
          {LEGAL_PAGE_METADATA.title}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <span className="font-mono text-[12px] uppercase tracking-widest text-white/70">
            {LEGAL_PAGE_METADATA.version}
          </span>
          <span className="font-mono text-[12px] uppercase tracking-widest text-white/70">
            {LEGAL_PAGE_METADATA.lastUpdated}
          </span>
        </div>
      </div>
    </section>
  );
}
