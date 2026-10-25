import React from "react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-section-gap bg-black overflow-hidden" style={{fontFamily: "Poppins, sans-serif"}}>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(173,198,255,0.15)_0%,transparent_70%)] blur-[100px] duration-[8s] ease-in-out infinite"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(173,198,255,0.12)_0%,transparent_70%)] blur-[100px] duration-[10s] ease-in-out infinite delay-1000"></div>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(173,198,255,0.15)_0%,transparent_70%)] blur-[100px] duration-[8s] ease-in-out infinite"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(173,198,255,0.12)_0%,transparent_70%)] blur-[100px] duration-[10s] ease-in-out infinite delay-1000"></div>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-margin-mobile md:px-margin-desktop mb-16">
        <div className="flex items-center gap-3 py-1.5 rounded-full border border-white/20 shadow-lg bg-surface-container/80 backdrop-blur-xl mb-6 w-auto inline-flex justify-center px-5 z-20">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          </div>
          <span className="text-on-surface font-medium text-[11px] tracking-[0.1em] uppercase leading-none">CLIENT STORIES</span>
        </div>
        <h2 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-6 font-display-lg tracking-tight relative z-20">
          <span className="text-white">Voice of our</span>
          <span className="italic text-primary/80 relative inline-block ml-3" style={{fontFamily: "\"Playfair Display\", serif", fontWeight: "500"}}>
            Clients
            <svg className="absolute bottom-[-8px] left-0 w-full h-4 pointer-events-none overflow-visible" viewBox="0 0 300 20" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15C70 12 210 10 295 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-60" style={{strokeDasharray: "400", strokeDashoffset: "400", animation: "draw-underline 1.5s ease-out forwards"}}></path>
            </svg>
          </span>
        </h2>
        <p className="max-w-2xl text-body-md text-secondary/80 leading-relaxed relative z-20">Hear from the visionary leaders and engineering teams we've partnered with to build the future of digital excellence.</p>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-fit py-8 gap-6">
            <div className="flex gap-6">
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "The level of precision and strategic depth is unmatched. They don't just build, they 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">architect excellence</span>
                  ."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">MT</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Marcus Thorne</h4>
                    <p className="text-secondary/50 text-[12px]">CTO at Aether</p>
                  </div>
                </div>
              </div>
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "Transformative results from the first week. Their 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">AI-native approach</span>
                   redefined our entire digital workflow."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">EV</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Elena Vance</h4>
                    <p className="text-secondary/50 text-[12px]">Product Head at Lumina</p>
                  </div>
                </div>
              </div>
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "A partner that actually delivers on the promise of innovation. The 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">interactive craft</span>
                   is simply world-class."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">JK</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Julian Kross</h4>
                    <p className="text-secondary/50 text-[12px]">Lead Engineer at Synaptic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "The level of precision and strategic depth is unmatched. They don't just build, they 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">architect excellence</span>
                  ."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">MT</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Marcus Thorne</h4>
                    <p className="text-secondary/50 text-[12px]">CTO at Aether</p>
                  </div>
                </div>
              </div>
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "Transformative results from the first week. Their 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">AI-native approach</span>
                   redefined our entire digital workflow."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">EV</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Elena Vance</h4>
                    <p className="text-secondary/50 text-[12px]">Product Head at Lumina</p>
                  </div>
                </div>
              </div>
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "A partner that actually delivers on the promise of innovation. The 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">interactive craft</span>
                   is simply world-class."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">JK</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Julian Kross</h4>
                    <p className="text-secondary/50 text-[12px]">Lead Engineer at Synaptic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] mt-2">
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] w-fit py-8 gap-6">
            <div className="flex gap-6">
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "The level of precision and strategic depth is unmatched. They don't just build, they 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">architect excellence</span>
                  ."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">MT</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Marcus Thorne</h4>
                    <p className="text-secondary/50 text-[12px]">CTO at Aether</p>
                  </div>
                </div>
              </div>
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "Transformative results from the first week. Their 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">AI-native approach</span>
                   redefined our entire digital workflow."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">EV</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Elena Vance</h4>
                    <p className="text-secondary/50 text-[12px]">Product Head at Lumina</p>
                  </div>
                </div>
              </div>
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "A partner that actually delivers on the promise of innovation. The 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">interactive craft</span>
                   is simply world-class."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">JK</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Julian Kross</h4>
                    <p className="text-secondary/50 text-[12px]">Lead Engineer at Synaptic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "The level of precision and strategic depth is unmatched. They don't just build, they 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">architect excellence</span>
                  ."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">MT</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Marcus Thorne</h4>
                    <p className="text-secondary/50 text-[12px]">CTO at Aether</p>
                  </div>
                </div>
              </div>
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "Transformative results from the first week. Their 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">AI-native approach</span>
                   redefined our entire digital workflow."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">EV</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Elena Vance</h4>
                    <p className="text-secondary/50 text-[12px]">Product Head at Lumina</p>
                  </div>
                </div>
              </div>
              <div className="w-[480px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 p-10 rounded-lg flex flex-col justify-between shadow-lg">
                <p className="text-white/90 leading-relaxed mb-8 text-body-lg">
                  "A partner that actually delivers on the promise of innovation. The 
                  <span className="bg-primary/20 text-primary px-1 rounded-sm">interactive craft</span>
                   is simply world-class."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-bold">JK</div>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Julian Kross</h4>
                    <p className="text-secondary/50 text-[12px]">Lead Engineer at Synaptic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
