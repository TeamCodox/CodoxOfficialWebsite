import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeader, BentoCard, WatermarkNumber } from "../ui";
import { SERVICES } from "../../constants/services";

export default function ServicesSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#000000] px-margin-mobile py-16 sm:py-20 md:px-margin-desktop md:py-28"
      style={{ fontFamily: "Poppins, sans-serif" }}
      id="services"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/[0.07] blur-[120px]"
      />

      <div className="relative z-10 max-w-container-max mx-auto">
        <SectionHeader
          badge="our services"
          titlePrefix="Solutions We"
          titleHighlight="Provide"
          subtitleEyebrow="Made for what's next"
          subtitleDescription="From first sketch to final launch, we build polished digital products that move your business forward."
        />

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-12 md:gap-6">
          {SERVICES.map(({ slug, number, colSpan, icon: Icon, code, title, description }) => (
            <BentoCard key={number} colSpan={colSpan}>
              <WatermarkNumber number={number} />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.08] text-primary transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/[0.14] group-hover:shadow-[0_0_24px_rgba(173,198,255,0.12)]">
                    <Icon
                      aria-hidden="true"
                      size={22}
                      strokeWidth={1.7}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-secondary/55">
                    {code}
                  </span>
                </div>

                <div className="mt-auto pt-8 sm:pt-10">
                  <h3 className="mb-2.5 sm:mb-3 text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {title}
                  </h3>
                  <p className="max-w-sm text-sm leading-6 sm:leading-7 text-secondary/75 md:text-[15px]">
                    {description}
                  </p>
                </div>

                <a
                  href={`/services/${slug}`}
                  className="group/btn mt-5 sm:mt-6 inline-flex w-fit min-h-[36px] items-center gap-2 text-sm font-medium text-primary/90 transition-colors hover:text-white"
                >
                  Learn More
                  <ArrowRight
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
