import React, { useRef } from "react";
import { Magnetic } from "../ui";

export default function PortfolioCta({
  onStartProject,
  onScheduleDemo,
  startHref = "#contact",
}) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const handleSectionMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - r.left}px`);
    el.style.setProperty("--sy", `${e.clientY - r.top}px`);
  };

  const handleCardMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--cx", `${x}px`);
    el.style.setProperty("--cy", `${y}px`);
    const rx = (y / r.height - 0.5) * -4;
    const ry = (x / r.width - 0.5) * 4;
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const handleCardLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleSectionMove}
      className="relative isolate overflow-hidden bg-black px-margin-mobile py-16 md:px-margin-desktop md:py-24"
      style={{ "--sx": "50%", "--sy": "50%" }}
    >
      <style>{`
        @keyframes cta-spin { to { transform: rotate(360deg); } }
        @keyframes cta-float {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(0,-24px,0) scale(1.06); }
        }
        @keyframes cta-scan {
          0% { transform: translateY(-120%); }
          100% { transform: translateY(520%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-anim { animation: none !important; }
        }
      `}</style>

      {/* Grid backgrounds */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 75% 70% at 50% 50%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 70% at 50% 50%, #000 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(260px circle at var(--sx) var(--sy), #000, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(260px circle at var(--sx) var(--sy), #000, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage:
            "radial-gradient(ellipse 50% 45% at 50% 50%, #000, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 45% at 50% 50%, #000, transparent 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="cta-anim pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-white/[0.07] blur-[100px]"
        style={{ animation: "cta-float 9s ease-in-out infinite" }}
      />
      <div
        aria-hidden="true"
        className="cta-anim pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-primary/20 blur-[110px]"
        style={{ animation: "cta-float 11s ease-in-out infinite reverse" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div
          ref={cardRef}
          onMouseMove={handleCardMove}
          onMouseLeave={handleCardLeave}
          className="group/card relative overflow-hidden rounded-[28px] p-px transition-transform duration-200 ease-out will-change-transform"
          style={{
            "--cx": "50%",
            "--cy": "50%",
            transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
          }}
        >
          <div
            aria-hidden="true"
            className="cta-anim absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(255,255,255,0.0) 270deg, rgba(255,255,255,0.9) 330deg, transparent 360deg)",
              animation: "cta-spin 6s linear infinite",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[28px] border border-white/10"
          />

          <div className="relative overflow-hidden rounded-[27px] bg-black px-5 py-10 text-center sm:px-10 sm:py-12 md:px-16 md:py-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                maskImage:
                  "radial-gradient(ellipse 70% 80% at 50% 0%, #000 20%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 80% at 50% 0%, #000 20%, transparent 80%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
              style={{
                background:
                  "radial-gradient(420px circle at var(--cx) var(--cy), rgba(255,255,255,0.10), transparent 60%)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
            <div
              aria-hidden="true"
              className="cta-anim pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent"
              style={{ animation: "cta-scan 7s linear infinite" }}
            />

            {[
              "left-4 top-4 border-l border-t",
              "right-4 top-4 border-r border-t",
              "left-4 bottom-4 border-l border-b",
              "right-4 bottom-4 border-r border-b",
            ].map((pos) => (
              <span
                key={pos}
                aria-hidden="true"
                className={`absolute h-3 w-3 border-white/30 ${pos}`}
              />
            ))}

            <div className="relative">
              <div className="mb-7 flex justify-center">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">
                    Next-Gen Delivery
                  </span>
                </div>
              </div>

              <div className="mx-auto mb-8 sm:mb-10 max-w-4xl">
                <h2
                  className="mb-4 sm:mb-5 text-[clamp(2.25rem,1.25rem+4.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-on-surface"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif", textWrap: "balance" }}
                >
                  Ready to{" "}
                  <span
                    className="font-serif italic text-primary"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Architect
                  </span>
                  <span className="block bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                    Your Vision?
                  </span>
                </h2>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-secondary/70 md:text-lg">
                  Initiate the alpha phase of your project. We combine strategic design with elite engineering to build what&apos;s next.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-5">
                <Magnetic>
                  <a
                    href={startHref}
                    onClick={onStartProject}
                    className="group/btn relative inline-flex w-full sm:w-auto justify-center items-center gap-2.5 overflow-hidden rounded-full px-7 sm:px-8 py-3.5 sm:py-4 font-body-md font-bold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_8px_24px_-12px_rgba(255,255,255,0.25)] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_10px_28px_-12px_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.96]"
                    style={{
                      background:
                        "linear-gradient(rgb(236, 236, 236) 0%, rgb(198, 198, 199) 100%)",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 ease-out group-hover/btn:left-[130%] group-hover/btn:opacity-100"
                    />
                    <span className="relative">Start Project</span>
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined relative text-[20px] transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    >
                      north_east
                    </span>
                  </a>
                </Magnetic>

                <Magnetic>
                  <button
                    type="button"
                    onClick={onScheduleDemo}
                    className="group/btn2 relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-full border border-white/15 bg-white/[0.04] px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-on-surface backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-[0_4px_20px_-12px_rgba(255,255,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.96]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-white/[0.07] to-transparent transition-transform duration-500 group-hover/btn2:translate-y-0"
                    />
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined relative text-[18px] text-white transition-transform duration-300 group-hover/btn2:scale-105"
                    >
                      calendar_today
                    </span>
                    <span className="relative">Schedule a Demo</span>
                  </button>
                </Magnetic>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-secondary/60">
                {["Reply within 24 hours", "Weekly demos", "Fixed-scope pricing"].map(
                  (item) => (
                    <span key={item} className="inline-flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined text-[14px] text-primary"
                      >
                        check_circle
                      </span>
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
