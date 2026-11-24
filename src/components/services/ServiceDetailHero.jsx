import React, { useEffect, useRef, useState } from "react";
import Header from "../common/Header";
import Marquee from "../common/Marquee";
import { CalendarDays, Rocket } from "lucide-react";
import { useLoading } from "../../context/LoadingContext";

/* Resize-handle positions: 4 corners + 4 edge midpoints (relative to the selection box) */
const HANDLES = [
  "left-0 top-0",
  "left-1/2 top-0",
  "left-full top-0",
  "left-0 top-1/2",
  "left-full top-1/2",
  "left-0 top-full",
  "left-1/2 top-full",
  "left-full top-full",
];

/**
 * Second headline line, shown as an object selected on a design canvas.
 *
 * - The text itself sits flush with the first headline line (no indent).
 * - The selection box is a separate overlay that extends outside the text,
 *   so it never changes the text layout.
 * - The W x H readout is measured from that overlay, so it is always accurate.
 * - A cursor lands on the bottom-right handle once on load, then the box
 *   becomes selected. Skipped for visitors who prefer reduced motion.
 */
function SelectedTitle({ children, isLoading = false }) {
  const boxRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [cursorIn, setCursorIn] = useState(false);
  const [selected, setSelected] = useState(false);

  // Measure size
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return undefined;

    const measure = () => {
      const r = el.getBoundingClientRect();
      setSize({ w: Math.round(r.width), h: Math.round(r.height) });
    };
    measure();

    let observer;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(measure);
      observer.observe(el);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Trigger animations once page loading is complete
  useEffect(() => {
    if (isLoading) {
      setCursorIn(false);
      setSelected(false);
      return;
    }

    const reduce =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setCursorIn(true);
      setSelected(true);
      return;
    }

    // Remeasure once loader is removed to guarantee pixel-accurate size
    if (boxRef.current) {
      const r = boxRef.current.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        setSize({ w: Math.round(r.width), h: Math.round(r.height) });
      }
    }

    // Start cursor entry immediately so there's no dead wait
    const cursorTimer = setTimeout(() => {
      setCursorIn(true);
    }, 40);

    // Right as cursor hits the bottom-right corner (~350ms), snap selection on
    const selectTimer = setTimeout(() => {
      setSelected(true);
    }, 380);

    return () => {
      clearTimeout(cursorTimer);
      clearTimeout(selectTimer);
    };
  }, [isLoading]);

  return (
    <span className="relative inline-flex max-w-full items-baseline pb-[0.06em] pr-[0.04em] align-baseline">
      <span
        className="block font-serif italic pr-2 pb-1 pl-2 leading-[1] text-primary"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {children}
      </span>

      {/* Decoration only, hidden from assistive tech */}
      <span
        ref={boxRef}
        aria-hidden="true"
        className={`pointer-events-none absolute -left-1 -right-[0.04em] -top-1 -bottom-[0.06em] outline outline-1 transition-[outline-color] duration-150 motion-reduce:transition-none ${
          selected ? "outline-primary" : "outline-transparent"
        }`}
      >
        {/* Resize handles */}
        {HANDLES.map((pos, i) => (
          <span
            key={pos}
            className={`absolute h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 border border-primary bg-[#0e0e0e] transition-opacity duration-150 motion-reduce:transition-none ${pos} ${
              selected ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: selected ? `${i * 12}ms` : "0ms" }}
          />
        ))}

        {/* Live size readout, centred under the box */}
        <span
          className={`absolute left-1/2 top-full mt-2.5 -translate-x-1/2 whitespace-nowrap rounded-sm bg-primary px-1.5 py-0.5 text-[11px] font-medium leading-4 tracking-normal text-[#0e0e0e] transition-opacity duration-150 motion-reduce:transition-none ${
            selected ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontVariantNumeric: "tabular-nums", fontStyle: "normal", fontFamily: "Poppins, sans-serif" }}
        >
          {size.w} × {size.h}
        </span>

        {/* Cursor that lands on the bottom-right handle */}
        <span
          className={`absolute left-full top-full flex items-start transition-all duration-350 ease-out motion-reduce:transition-none ${
            cursorIn
              ? "translate-x-0 translate-y-0 opacity-100"
              : "translate-x-14 translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <svg
            width="14"
            height="18"
            viewBox="0 0 18 22"
            className="-mt-0.5 shrink-0"
            fill="none"
          >
            <path
              d="M1.5 1.2 1.5 17.4 5.7 13.5 8.6 20.2 11.4 19 8.5 12.4 14.4 12.2 1.5 1.2Z"
              fill="#e2e2e2"
              stroke="#0e0e0e"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="-ml-0.5 mt-3 hidden whitespace-nowrap rounded-md rounded-tl-none bg-on-surface px-2 py-0.5 text-[11px] font-medium leading-4 tracking-normal text-surface sm:block"
            style={{ fontStyle: "normal", fontFamily: "Poppins, sans-serif" }}
          >
            Your project
          </span>
        </span>
      </span>
    </span>
  );
}

export default function ServiceDetailHero({ service, isLoading: propLoading }) {
  const { isLoading: contextLoading } = useLoading();
  const isLoading = propLoading !== undefined ? propLoading : contextLoading;

  return (
    <section
      className="relative flex items-center overflow-hidden bg-[#0e0e0e] pt-28 pb-28 sm:pb-32 md:min-h-[80dvh]"
      style={{ backgroundColor: "rgb(14, 14, 14)" }}
    >
      {/* Flat canvas grid, fading out toward the bottom. No glows, no blur. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(65, 71, 85, 0.25) 1px, transparent 1px), linear-gradient(rgba(65, 71, 85, 0.25) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          backgroundPosition: "left top",
          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 95%)",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 95%)",
        }}
      />

      <Header position="absolute" />

      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0e0e0e] py-1 pl-2.5 pr-3.5">
          <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
          <span className="text-xs leading-none text-secondary">{service.eyebrow}</span>
        </div>

        {/* Service title: wraps cleanly on small screens, single line on wide viewports */}
        <h1 className="flex flex-wrap items-baseline gap-x-[0.28em] gap-y-2 font-display-lg text-[clamp(2.25rem,1.15rem+4.5vw,4.5rem)] leading-[1.05] tracking-tighter text-on-surface">
          <span>{service.title1}</span>
          <span>
            <SelectedTitle isLoading={isLoading}>{service.title2}</SelectedTitle>
          </span>
        </h1>

        {/* Intro (left) and actions (right) on one hairline-separated row */}
        <div className="mt-12 sm:mt-16 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-start md:justify-between md:gap-10">
          <p className="max-w-md font-body-md text-sm leading-relaxed text-secondary/75 md:text-base">
            {service.intro}
          </p>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-on-surface px-5 py-2.5 text-sm font-bold text-surface shadow-[0_3px_10px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.32)] active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              href="/#contact"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span>Start Project</span>
              <Rocket
                aria-hidden="true"
                size={16}
                className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </a>
            <a
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[#0e0e0e] px-5 py-2.5 text-sm font-bold text-on-surface shadow-[0_3px_10px_rgba(0,0,0,0.12)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.28)] active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              href="/#contact"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <CalendarDays
                aria-hidden="true"
                size={16}
                className="transition-transform duration-300 ease-out group-hover:-rotate-6 motion-reduce:transition-none"
              />
              Schedule a Call
            </a>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}