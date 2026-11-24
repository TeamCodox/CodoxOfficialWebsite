import React from "react";
import { SectionHeader } from "../ui";

const steps = [
  ["01 / STRATEGIC DISCOVERY", "Strategic Discovery", "Deep architecture and content modeling to architect your digital foundation."],
  ["02 / SYSTEM ARCHITECTURE", "System Architecture", "Engineered for scale with robust, clean, and maintainable systems designed for future-proof growth."],
  ["03 / PRECISION ENGINEERING", "Precision Engineering", "Translating complex designs into high-performance code with pixel-perfect accuracy and technical rigor."],
  ["04 / GLOBAL LAUNCH", "Global Launch", "Seamless deployment with monitoring, optimization, and support - ensuring your product thrives post-launch."]
];

export default function ServiceProcess() {
  return (
    <section
      className="relative overflow-hidden bg-[#000000] px-margin-mobile py-20 md:px-margin-desktop md:py-20"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(173, 198, 255, 0.22) 1px, transparent 1.4px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at 50% 52%, black 0%, rgba(0, 0, 0, 0.65) 56%, transparent 92%)",
        }}
      />
      <div className="max-w-container-max mx-auto relative z-10">
        <SectionHeader
          badge="the process"
          titlePrefix="Our Strategic"
          titleHighlight="Process"
          subtitleEyebrow="From concept to launch"
          subtitleDescription="A clear, collaborative process designed to turn ambitious ideas into high-performance digital solutions."
        />

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent -translate-x-1/2 hidden md:block shadow-[0_0_20px_rgba(173,198,255,0.5),0_0_40px_rgba(173,198,255,0.2)] opacity-50" />
          <div className="flex flex-col gap-5 sm:gap-6">
            {steps.map(([eyebrow, title, copy], index) => (
              <div
                key={title}
                className={`relative md:flex md:items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-12 h-px ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-transparent to-primary/30 -translate-x-full"
                      : "bg-gradient-to-l from-transparent to-primary/30"
                  }`}
                >
                  <div
                    className={`absolute ${
                      index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                    } top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(173,198,255,0.8)] border border-white/20`}
                  />
                </div>
                <div
                  className={`md:w-1/2 relative ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="group relative bg-surface/40 backdrop-blur-xl rounded-2xl p-5 sm:p-7 md:p-8 border border-primary/20 shadow-2xl transition-all duration-500 hover:scale-[0.98] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4 sm:mb-6">
                        <span className="w-2 h-2 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(173,198,255,0.8)]" />
                        <span className="text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.35em] uppercase text-primary font-bold drop-shadow-[0_0_5px_rgba(173,198,255,0.5)]">
                          {eyebrow}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-display-lg text-on-surface mb-3 sm:mb-4 font-bold tracking-tight">
                        {title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-[17px] text-on-surface-variant/70 font-body-md leading-relaxed max-w-md">
                        {copy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
