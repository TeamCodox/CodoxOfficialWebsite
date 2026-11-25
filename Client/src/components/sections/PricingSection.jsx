import React from "react";
import { SectionHeader, CheckIcon } from "../ui";
import { PRICING_PLANS } from "../../constants/pricing";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-section-gap px-margin-mobile md:px-margin-desktop bg-[#0d0d0d] overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div
        aria-hidden="true"
        className="absolute top-2 left-1/2 -translate-x-1/2 text-[clamp(4.25rem,18vw,11.25rem)] font-bold pointer-events-none select-none z-0 uppercase bg-gradient-to-b from-white/5 to-transparent bg-clip-text text-transparent tracking-tighter whitespace-nowrap"
        style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
      >
        Pricing
      </div>

      <div className="relative z-10 max-w-container-max mx-auto">
        <SectionHeader
          badge="pricing plans"
          titlePrefix="Plans built for"
          titleHighlight="your growth"
          subtitleEyebrow="Choose your level"
          subtitleDescription="Simple, transparent plans for bringing the right AI capabilities to your business."
          titleSize="compact"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.number}
              className="pricing-card-wrapper group relative h-full md:last:col-span-2 md:last:w-full md:last:max-w-[calc(50%-0.75rem)] md:last:justify-self-center lg:last:col-span-1 lg:last:max-w-none"
              style={{
                perspective: "2000px",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <div
                className={
                  plan.highlighted
                    ? "pricing-card relative isolate h-full overflow-visible rounded-2xl border border-primary/30 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-white/[0.015] p-5 sm:p-7 md:p-8 xl:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col"
                    : "pricing-card relative isolate h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-white/[0.015] p-5 sm:p-7 md:p-8 xl:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col"
                }
                style={{
                  transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                }}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 right-4 sm:right-5 z-50">
                    <div className="bg-primary text-on-primary px-3.5 py-2 rounded-full shadow-lg flex items-center justify-center transition-transform duration-500 hover:scale-105 rotate-2">
                      <span className="font-bold text-[10px] uppercase tracking-[0.14em] leading-none whitespace-nowrap">
                        {plan.badge}
                      </span>
                    </div>
                  </div>
                )}

                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-15 transition-opacity duration-500 group-hover:opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.03] mix-blend-overlay"
                  style={{
                    backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                  }}
                />

                <div className="flex justify-between items-start mb-8 sm:mb-10 relative z-10">
                  <div className="z-10">
                    <span
                      aria-hidden="true"
                      className={
                        plan.highlighted
                          ? "absolute -top-5 -left-4 sm:-top-7 sm:-left-6 font-display-lg text-[clamp(5.5rem,9vw,9.5rem)] font-bold leading-none tracking-tighter select-none pointer-events-none z-0 bg-clip-text text-transparent bg-gradient-to-b from-primary/20 via-primary/5 to-transparent"
                          : "absolute -top-5 -left-4 sm:-top-7 sm:-left-6 font-display-lg text-[clamp(5.5rem,9vw,9.5rem)] font-bold leading-none tracking-tighter select-none pointer-events-none z-0 bg-clip-text text-transparent bg-gradient-to-b from-white/10 via-white/5 to-transparent"
                      }
                    >
                      {plan.number}
                    </span>
                  </div>

                  <div className="text-right ml-auto relative z-10">
                    {plan.currency ? (
                      <div
                        className="text-white text-[clamp(1.875rem,1.25rem+2.2vw,2.75rem)] leading-none font-bold tracking-tighter font-display-lg flex items-baseline justify-end gap-1"
                        style={{
                          fontFamily: '"Hanken Grotesk", sans-serif',
                          letterSpacing: "-0.05em",
                        }}
                      >
                        <span className="text-lg sm:text-xl font-medium text-secondary/70 mr-0.5">
                          {plan.currency}
                        </span>
                        {plan.price}
                        {plan.plus && (
                          <span className="text-lg sm:text-xl font-bold text-primary/80 ml-0.5 self-center">
                            +
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="text-white text-[clamp(1.875rem,1.25rem+2.2vw,2.75rem)] leading-none font-bold tracking-tighter font-display-lg">
                        {plan.price}
                      </div>
                    )}
                    <div
                      className={
                        plan.highlighted
                          ? "text-secondary/50 text-[11px] uppercase tracking-widest mt-1.5 opacity-60 font-mono"
                          : "text-secondary/50 text-[11px] uppercase tracking-widest mt-1.5 font-mono"
                      }
                    >
                      {plan.period}
                    </div>
                  </div>
                </div>

                <h3 className="text-white text-xl sm:text-headline-md font-bold mb-2.5 sm:mb-3 tracking-tight relative z-10">
                  {plan.title}
                </h3>
                <p className="text-secondary/70 text-sm sm:text-body-md mb-8 sm:mb-10 leading-relaxed relative z-10">
                  {plan.description}
                </p>

                <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 flex-grow relative z-10">
                  <p className="text-primary/50 font-bold text-[10px] uppercase tracking-[0.22em] mb-4 sm:mb-6">
                    {plan.featuresLabel}
                  </p>
                  <ul className="space-y-3 sm:space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3.5 text-white/90 text-[13.5px] sm:text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]"
                      >
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={plan.getStartedHref}
                  className={
                    plan.highlighted
                      ? "bg-white text-black w-full py-3.5 sm:py-4 rounded-full font-body-md font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[0.98] relative z-10 text-sm sm:text-base"
                      : "bg-surface-container/40 text-white border border-white/10 w-full py-3.5 sm:py-4 rounded-full font-body-md font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-surface-container/60 hover:scale-[0.98] relative z-10 text-sm sm:text-base"
                  }
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Get Started
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>

                <a
                  href={plan.examplesHref}
                  className="mt-3 sm:mt-4 w-full py-2.5 sm:py-3 rounded-full font-body-md font-medium text-secondary/70 flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:bg-white/5 group/view relative z-10 text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  View Examples
                  <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover/view:translate-x-1">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
