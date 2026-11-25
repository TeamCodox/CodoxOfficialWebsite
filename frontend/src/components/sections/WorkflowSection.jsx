import React, { useState } from "react";
import { SectionHeader } from "../ui";
import { WORKFLOW } from "../../constants/workflow";

export default function WorkflowSection() {
  const [selectedStep, setSelectedStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section
      className="relative overflow-hidden bg-[#000000] px-margin-mobile py-20 md:px-margin-desktop md:py-28"
      style={{ fontFamily: "Poppins, sans-serif" }}
      id="how-we-work"
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

      <div className="relative z-10 max-w-container-max mx-auto">
        <SectionHeader
          badge="the workflow"
          titlePrefix="Our Strategic"
          titleHighlight="Workflow"
          subtitleEyebrow="From idea to impact"
          subtitleDescription="Outcome-focused delivery with a clear, collaborative process designed to turn ambitious ideas into lasting results."
        />

        <div className="relative mt-12 md:mt-16">
          <svg
            aria-hidden="true"
            className="workflow-connector pointer-events-none absolute inset-y-0 left-0 z-0 h-full w-14 md:left-1/2 md:w-[88px] md:-translate-x-1/2"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient
                id="workflow-line-gradient"
                x1="50"
                y1="0"
                x2="50"
                y2="1000"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#adc6ff" stopOpacity="0" />
                <stop offset="0.15" stopColor="#adc6ff" stopOpacity="0.55" />
                <stop offset="0.5" stopColor="#adc6ff" stopOpacity="0.9" />
                <stop offset="0.85" stopColor="#adc6ff" stopOpacity="0.55" />
                <stop offset="1" stopColor="#adc6ff" stopOpacity="0" />
              </linearGradient>
              <path
                id="workflow-route"
                d="M50 0 C50 50 20 50 50 100 S80 150 50 200 S20 250 50 300 S80 350 50 400 S20 450 50 500 S80 550 50 600 S20 650 50 700 S80 750 50 800 S20 850 50 900 S50 950 50 1000"
              />
            </defs>
            <use href="#workflow-route" stroke="#adc6ff" strokeOpacity="0.1" strokeWidth="8" />
            <use href="#workflow-route" stroke="url(#workflow-line-gradient)" strokeWidth="1.5" />
            <use
              href="#workflow-route"
              className="workflow-flow-glow"
              stroke="#adc6ff"
              strokeOpacity="0.28"
              strokeWidth="6"
              strokeDasharray="34 82"
            />
            <use
              href="#workflow-route"
              className="workflow-flow"
              stroke="#adc6ff"
              strokeOpacity="0.95"
              strokeWidth="2"
              strokeDasharray="34 82"
            />
          </svg>

          <ol className="relative z-10">
            {WORKFLOW.map(({ number, icon: Icon, code, title, description }, index) => {
              const isLeft = index % 2 === 0;
              const isActive = selectedStep === index || hoveredStep === index;

              return (
                <li key={number} className="min-h-[160px] sm:min-h-[180px] md:min-h-[200px]">
                  <button
                    type="button"
                    aria-label={`Highlight step ${number}: ${title}`}
                    aria-pressed={selectedStep === index}
                    onClick={() => setSelectedStep(index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    onFocus={() => setHoveredStep(index)}
                    onBlur={() => setHoveredStep(null)}
                    className="group grid min-h-[160px] sm:min-h-[180px] w-full grid-cols-[56px_minmax(0,1fr)] items-center gap-x-4 gap-y-4 py-5 sm:py-6 text-left outline-none md:min-h-[200px] md:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] md:gap-x-5"
                  >
                    <span className="relative col-start-1 row-start-1 flex h-14 w-14 items-center justify-center md:col-start-2">
                      <span
                        aria-hidden="true"
                        className={`absolute inset-[-9px] rounded-full bg-primary/[0.12] blur-lg transition-all duration-500 ${
                          isActive ? "scale-100 opacity-100" : "scale-75 opacity-0"
                        }`}
                      />
                      <span
                        className={`relative flex h-14 w-14 items-center justify-center rounded-full border bg-[#080a0f]/95 text-primary shadow-[0_0_0_6px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-500 ${
                          isActive
                            ? "border-primary/50 bg-primary/[0.12] shadow-[0_0_28px_rgba(173,198,255,0.2),0_0_0_6px_rgba(0,0,0,0.7)]"
                            : "border-white/15"
                        }`}
                      >
                        <Icon
                          aria-hidden="true"
                          size={22}
                          strokeWidth={1.7}
                          className="transition-transform duration-500 group-hover:scale-110"
                        />
                      </span>
                    </span>

                    <span
                      className={`col-start-2 row-start-1 flex max-w-[560px] flex-col md:row-start-1 ${
                        isLeft
                          ? "md:col-start-1 md:ml-auto md:items-end md:text-right"
                          : "md:col-start-3 md:items-start md:text-left"
                      }`}
                    >
                      <span className="mb-2 flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-primary/65">
                        {isLeft && (
                          <span className="hidden h-px w-8 bg-gradient-to-l from-primary/60 to-transparent md:block" />
                        )}
                        <span>{number}</span>
                        <span>{code}</span>
                        {!isLeft && (
                          <span className="hidden h-px w-8 bg-gradient-to-r from-primary/60 to-transparent md:block" />
                        )}
                      </span>
                      <span
                        className={`text-xl sm:text-2xl font-semibold tracking-tight text-white transition-colors duration-300 md:text-[28px] ${
                          isActive ? "text-primary" : ""
                        }`}
                      >
                        {title}
                      </span>
                      <span className="mt-2 text-sm sm:text-base leading-relaxed text-secondary/80 md:text-[17px] md:leading-7">
                        {description}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
