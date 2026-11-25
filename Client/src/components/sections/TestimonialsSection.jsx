import React from "react";
import { SectionHeader } from "../ui";
import { TESTIMONIALS } from "../../constants/testimonials";

function TestimonialCard({ item }) {
  return (
    <div className="group relative isolate flex w-[300px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 before:absolute before:right-7 before:top-2 before:font-serif before:text-8xl before:leading-none before:text-primary/10 before:content-['“'] hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:w-[400px] sm:p-8">
      <p className="relative z-10 mb-8 text-base leading-7 text-white/85">
        "{item.quotePrefix}
        <span className="bg-primary/20 text-primary px-1 rounded-sm">
          {item.highlight}
        </span>
        {item.quoteSuffix}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">
          {item.initials}
        </div>
        <div>
          <h4 className="text-white font-bold text-[14px]">{item.name}</h4>
          <p className="text-secondary/50 text-[12px]">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  // Repeating array twice for smooth infinite marquee looping
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black px-margin-mobile py-20 md:px-margin-desktop md:py-28"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(173,198,255,0.15)_0%,transparent_70%)] blur-[100px] duration-[8s] ease-in-out infinite" />
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(173,198,255,0.12)_0%,transparent_70%)] blur-[100px] duration-[10s] ease-in-out infinite delay-1000" />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <SectionHeader
        centered
        badge="CLIENT STORIES"
        titlePrefix="Voice of our"
        titleHighlight="Clients"
        subtitleDescription="Hear from the visionary leaders and engineering teams we've partnered with to build the future of digital excellence."
      />

      <div className="relative z-10 mx-auto max-w-container-max space-y-4">
        {/* Row 1: Forward Marquee */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-fit gap-6 py-2">
            <div className="flex gap-6">
              {marqueeItems.map((item, idx) => (
                <TestimonialCard key={`track1-a-${item.id}-${idx}`} item={item} />
              ))}
            </div>
            <div className="flex gap-6">
              {marqueeItems.map((item, idx) => (
                <TestimonialCard key={`track1-b-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Reverse Marquee */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] w-fit gap-6 py-2">
            <div className="flex gap-6">
              {marqueeItems.map((item, idx) => (
                <TestimonialCard key={`track2-a-${item.id}-${idx}`} item={item} />
              ))}
            </div>
            <div className="flex gap-6">
              {marqueeItems.map((item, idx) => (
                <TestimonialCard key={`track2-b-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
