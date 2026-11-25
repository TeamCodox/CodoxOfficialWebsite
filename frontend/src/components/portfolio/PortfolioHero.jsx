import React, { useRef } from "react";
import Header from "../common/Header";
import LiquidGlassMagnifier from "../common/LiquidGlassMagnifier";
import Marquee from "../common/Marquee";
import { CurvedUnderline, SectionBadge } from "../ui";
import { ArrowRight, Grid2X2 } from "lucide-react";
import { useLoading } from "../../context/LoadingContext";

export default function PortfolioHero({ isLoading: propLoading }) {
  const { isLoading: contextLoading } = useLoading();
  const isLoading = propLoading !== undefined ? propLoading : contextLoading;
  const isLoaded = !isLoading;

  const lensAreaRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <section
      ref={lensAreaRef}
      className="relative min-h-[540px] sm:min-h-[600px] md:min-h-[660px] py-24 sm:py-28 flex items-center overflow-hidden bg-[#0e0e0e] select-none"
      style={{ backgroundColor: "rgb(14, 14, 14)" }}
    >
      {/* Layered ambient lighting & architectural grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 65% at 50% 45%, black 35%, transparent 85%)",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 50% 45%, black 35%, transparent 85%)",
          }}
        />

        <div
          className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[min(780px,95vw)] h-[420px] rounded-full blur-[130px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(173,198,255,0.22) 0%, rgba(120,119,198,0.10) 45%, transparent 75%)",
          }}
        />

        <div className="absolute -top-[18%] -left-[10%] w-[42%] h-[42%] rounded-full bg-primary/15 blur-[130px]" />
        <div className="absolute -bottom-[22%] -right-[10%] w-[55%] h-[55%] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/40 via-transparent to-[#0e0e0e]" />
      </div>

      <Header position="absolute" />

      {/* Physics-based interactive glass magnifier */}
      <LiquidGlassMagnifier areaRef={lensAreaRef} anchorRef={titleRef} />

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-14 pt-12 md:pb-16 md:pt-14">
        <div className="text-center mx-auto max-w-4xl">
          <div className="flex justify-center mb-6 md:mb-7">
            <SectionBadge
              label="Pioneering Next-Gen Digital Infrastructure"
              className="px-3.5 py-2 font-mono tracking-[0.22em] text-white/85 text-[9px] sm:text-[10px]"
            />
          </div>

          <div className="max-w-4xl mx-auto mb-5 md:mb-6">
            <h1 className="font-display-lg text-[clamp(2.5rem,1.25rem+6.5vw,6rem)] leading-[0.95] tracking-tighter">
              <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                Selected{" "}
              </span>
              <span ref={titleRef} className="group/word relative inline-block">
                <span
                  className={`${
                    isLoaded ? "hero-highlight-word " : "opacity-0 "
                  }relative z-10 inline-block italic font-serif text-primary drop-shadow-[0_0_28px_rgba(173,198,255,0.28)] transition-transform duration-500 group-hover/word:scale-105`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Projects
                </span>
                {isLoaded && <CurvedUnderline animate={true} />}
              </span>
            </h1>
          </div>

          <p className="mt-6 md:mt-7 font-body-md text-[15px] sm:text-[17px] md:text-lg max-w-xl mx-auto leading-relaxed text-white/75">
            A curated gallery of high-impact digital products and experiences we&apos;ve engineered for visionary brands.
          </p>

          <div className="mt-7 md:mt-8 flex justify-center">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/25 transition-all duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Grid2X2 aria-hidden="true" size={18} className="text-white" />
              <span className="tracking-tight">View Case Studies</span>
              <ArrowRight
                aria-hidden="true"
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
