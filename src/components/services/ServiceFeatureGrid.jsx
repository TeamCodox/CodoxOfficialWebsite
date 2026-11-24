import React from "react";

function FeatureTitle({ value }) {
  return value.split("<br/>").map((line, index, lines) => (
    <React.Fragment key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 && <br />}
    </React.Fragment>
  ));
}

function StatusBadge({ label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-xl">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
      </span>
      <span className="text-[10px] font-mono tracking-widest uppercase text-secondary">
        {label}
      </span>
    </div>
  );
}

export default function ServiceFeatureGrid({ service }) {
  return (
    <section className="bg-[#000000] px-margin-mobile py-16 md:px-margin-desktop md:py-20">
      <div className="mx-auto max-w-container-max">
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          <article className="group rounded-[16px] border border-white/5 bg-[#0e0e0e] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:col-span-2 md:rounded-[20px] md:p-8 lg:p-10">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-2">
              <StatusBadge label={service.mainlabel} />
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary blink">Latency: 12ms</div>
            </div>
            <div className="max-w-xl">
              <h2 className="mb-4 font-display-lg text-[clamp(1.625rem,1.1rem+2.2vw,3rem)] font-normal leading-[1.1] tracking-tighter text-on-surface">
                <FeatureTitle value={service.main} />
              </h2>
              <p className="mb-6 sm:mb-8 text-sm sm:text-[15px] leading-relaxed text-secondary/70 font-body-md md:text-base">
                {service.maincopy}
              </p>
            </div>
            <div className="text-[10px] font-mono text-secondary/40 uppercase tracking-widest">01 / Core Offering</div>
          </article>

          <article className="rounded-[16px] border border-white/5 bg-[#0e0e0e] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:rounded-[20px] md:p-8">
            <div className="mb-5"><StatusBadge label={service.label2} /></div>
            <h3 className="mb-4 font-display-lg text-[clamp(1.5rem,1.05rem+1.8vw,2.25rem)] font-normal leading-[1.12] tracking-tighter text-on-surface">
              <FeatureTitle value={service.title2b} />
            </h3>
            <p className="mb-6 sm:mb-8 text-sm sm:text-[15px] leading-relaxed text-secondary/70 font-body-md md:text-base">{service.copy2}</p>
            <div className="text-[10px] font-mono text-secondary/40 uppercase tracking-widest">02 / Infrastructure</div>
          </article>

          <article className="rounded-[16px] border border-white/5 bg-[#0e0e0e] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:rounded-[20px] md:p-8">
            <div className="mb-5"><StatusBadge label={service.label3} /></div>
            <h3 className="mb-4 font-display-lg text-[clamp(1.5rem,1.05rem+1.8vw,2.25rem)] font-normal leading-[1.12] tracking-tighter text-on-surface">
              <FeatureTitle value={service.title3} />
            </h3>
            <p className="mb-6 sm:mb-8 text-sm sm:text-[15px] leading-relaxed text-secondary/70 font-body-md md:text-base">{service.copy3}</p>
            <div className="text-[10px] font-mono text-secondary/40 uppercase tracking-widest">03 / Engineering</div>
          </article>
        </div>
      </div>
    </section>
  );
}
