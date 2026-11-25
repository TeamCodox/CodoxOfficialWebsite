import React from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { PRIVACY_CONTACT } from "../constants";

export default function LegalContactInformation() {
  return (
    <section
      id="privacy-contact"
      className="scroll-mt-28 border-t border-white/[0.08] py-10 md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 md:py-12"
    >
      <div className="mb-7 md:mb-0">
        <span className="mb-4 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/60">
          07
        </span>
        <h2 className="max-w-none md:max-w-[180px] text-[22px] font-semibold leading-[1.15] tracking-tight text-on-surface md:text-[24px]">
          {PRIVACY_CONTACT.heading.replace(/^\d+\.\s*/, "")}
        </h2>
      </div>

      <div className="mt-6 min-w-0 md:mt-0">
        <p className="mb-8 max-w-xl text-[16px] leading-7 text-secondary/75 md:text-[17px] md:leading-8">
          {PRIVACY_CONTACT.introduction}
        </p>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-[15px] font-semibold text-on-surface">
            {PRIVACY_CONTACT.team}
          </p>
          <span
            className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(173,198,255,0.7)]"
            aria-hidden="true"
          />
        </div>

        <div className="border-y border-white/[0.09]">
          <a
            href={`mailto:${PRIVACY_CONTACT.email}`}
            className="group/email grid grid-cols-[44px_minmax(0,1fr)_40px] items-center gap-4 border-b border-white/[0.09] py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:grid-cols-[48px_minmax(0,1fr)_40px]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.025] text-primary/80 transition-colors duration-300 group-hover/email:border-primary/30 group-hover/email:bg-primary/[0.08]">
              <Mail aria-hidden="true" size={17} strokeWidth={1.7} />
            </span>
            <span className="min-w-0">
              <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-secondary/45">
                {PRIVACY_CONTACT.emailLabel}
              </span>
              <span className="block truncate text-[15px] font-medium text-on-surface transition-colors duration-300 group-hover/email:text-primary md:text-[16px]">
                {PRIVACY_CONTACT.email}
              </span>
            </span>
            <span className="flex h-9 w-9 items-center justify-center justify-self-end text-secondary/45 transition-colors duration-300 group-hover/email:text-primary">
              <ArrowUpRight
                aria-hidden="true"
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover/email:-translate-y-0.5 group-hover/email:translate-x-0.5"
              />
            </span>
          </a>

          <div className="grid grid-cols-[44px_minmax(0,1fr)] items-start gap-4 py-5 md:grid-cols-[48px_minmax(0,1fr)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.025] text-primary/80">
              <MapPin aria-hidden="true" size={17} strokeWidth={1.7} />
            </span>
            <div>
              <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-secondary/45">
                {PRIVACY_CONTACT.officeLabel}
              </span>
              <p className="text-[15px] leading-6 text-on-surface md:text-[16px]">
                {PRIVACY_CONTACT.officeLines.map((line, index) => (
                  <React.Fragment key={line}>
                    {index > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
