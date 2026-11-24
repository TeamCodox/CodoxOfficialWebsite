import React from "react";
import { PRIVACY_POLICY_SECTIONS } from "../../../constants/legal";
import LegalContactInformation from "./LegalContactInformation";
import LegalSection from "./LegalSection";

export default function LegalContent() {
  return (
    <section className="relative bg-[#0e0e0e] px-margin-mobile py-14 sm:py-20 font-body-md text-on-surface md:px-margin-desktop md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.08]"
      />
      <div className="mx-auto max-w-container-max">
        <div className="mb-12 grid items-end gap-5 border-b border-white/[0.08] pb-7 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/80">
              Privacy / 02
            </p>
            <p className="max-w-xl text-sm leading-6 text-secondary/65 md:text-[15px]">
              Plain-language details about the information we collect and how it is handled.
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary/45">
            Effective May 24, 2024
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_190px] lg:gap-16">
          <div className="min-w-0">
            {PRIVACY_POLICY_SECTIONS.map((section, index) => (
              <LegalSection
                key={section.title}
                section={section}
                sectionNumber={index + 1}
                isLast={index === PRIVACY_POLICY_SECTIONS.length - 1}
              />
            ))}
            <LegalContactInformation />
          </div>

          <aside
            className="hidden self-start lg:sticky lg:top-28 lg:block"
            aria-label="Privacy policy sections"
          >
            <nav className="border-l border-white/[0.08] py-1 pl-5">
              <p className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/45">
                On this page
              </p>
              <ol className="space-y-3">
                {PRIVACY_POLICY_SECTIONS.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#privacy-section-${index + 1}`}
                      className="group flex items-baseline gap-3 text-[13px] leading-5 text-secondary/55 transition-colors duration-300 hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      <span className="font-mono text-[9px] text-primary/55">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.title.replace(/^\d+\.\s*/, "")}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#privacy-contact"
                    className="group flex items-baseline gap-3 text-[13px] leading-5 text-secondary/55 transition-colors duration-300 hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <span className="font-mono text-[9px] text-primary/55">07</span>
                    <span>Contact</span>
                  </a>
                </li>
              </ol>
            </nav>
          </aside>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-[11px] text-secondary/40 sm:flex-row sm:items-center sm:justify-between">
          <span>Codox Privacy Policy</span>
          <span>© {new Date().getFullYear()} Codox</span>
        </div>
      </div>
    </section>
  );
}
