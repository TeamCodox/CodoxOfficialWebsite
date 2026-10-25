import React from "react";

export default function FaqSection() {
  return (
    <section id="faq" className="relative py-section-gap px-margin-mobile md:px-margin-desktop bg-black overflow-hidden" style={{fontFamily: "Poppins, sans-serif"}}>
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40" style={{backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(circle, black, transparent 80%)"}}></div>
      <div className="relative z-10 max-w-container-max mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 py-1.5 rounded-full border border-white/20 shadow-lg bg-surface-container/80 backdrop-blur-xl mb-6 w-fit px-5 mx-auto">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
            <span className="text-on-surface font-bold text-[11px] uppercase tracking-[0.1em]">FAQs</span>
          </div>
          <h2 className="text-white font-bold leading-tight tracking-tighter text-4xl md:text-5xl max-w-2xl">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">Explore answers to our</span>
            <div>
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                <span className="relative inline-block">
                  
                  <span className="italic font-medium text-primary" style={{fontFamily: "\"Playfair Display\", serif"}}>asked questions</span>
                  
                  <svg className="absolute -bottom-3 left-0 w-full h-6 pointer-events-none overflow-visible" viewBox="0 0 300 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 25C60 22 180 18 298 32" stroke="#adc6ff" strokeWidth="3" strokeLinecap="round" className="opacity-80" style={{strokeDasharray: "400", strokeDashoffset: "400", animation: "draw-organic-line-faq 2s ease-in-out forwards"}}></path>
                  </svg>
                  
                </span>
              </span>
            </div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="backdrop-blur-3xl bg-surface-container/60 border border-white/20 rounded-3xl p-10 flex flex-col gap-10 sticky top-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-primary/40 group/kickoff overflow-hidden">
              
              
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                
                <span className="relative flex h-2 w-2">
                  
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
                  
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
                  
                </span>
                
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/80">Available for New Projects</span>
                
              </div>
              
              <div className="space-y-4 relative z-10">
                
                <h3 className="text-white text-4xl font-bold leading-tight tracking-tighter font-display-lg">
                Ready to 
                  <span className="text-primary italic" style={{fontFamily: "\"Playfair Display\", serif"}}>Architect</span>
                   Your Vision?
            
                </h3>
                
                <p className="text-secondary/60 text-body-md leading-relaxed">
                Initiate the alpha phase of your next digital breakthrough with our elite engineering squad.
            </p>
                
              </div>
              
              <div className="flex flex-col gap-4 relative z-10">
                
                <a href="#" className="group/btn relative bg-white text-surface px-6 py-4 rounded-full font-display-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)] overflow-hidden z-10" style={{boxShadow: "rgba(255, 255, 255, 0.4) 0px 1px 1px inset, rgba(0, 0, 0, 0.2) 0px -1px 1px inset, rgba(173, 198, 255, 0.15) 0px 4px 12px", background: "linear-gradient(rgb(226, 226, 226) 0%, rgb(198, 198, 199) 100%)"}}>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                  
                  <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
                Launch Project
            
                </a>
                
                <a href="#" className="px-6 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all duration-300 border border-white/10 text-on-surface backdrop-blur-xl bg-white/5 hover:bg-white/10 hover:border-white/30 hover:text-primary">
                Explore Capabilities
                
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  
                </a>
                
              </div>
              
              
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none group-hover/kickoff:bg-primary/20 transition-colors duration-700"></div>
              
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/5 blur-[60px] rounded-full pointer-events-none"></div>
              
              
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            <div className="faq-item group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-container-low/40 backdrop-blur-md transition-all duration-500 hover:bg-surface-container-low/60">
              <div className="absolute -left-4 -top-8 pointer-events-none select-none z-0">
                <span className="font-display-lg text-[64px] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white/5 to-transparent opacity-40">01</span>
              </div>
              <button className="relative z-10 w-full flex items-center justify-between p-8 text-left">
                <div className="flex items-center gap-8">
                  <span className="text-white font-bold text-xl tracking-tight">How much does a typical project cost?</span>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50">
                  <span className="material-symbols-outlined transition-transform duration-500 text-primary" style={{transform: "rotate(0deg)"}}>add</span>
                </div>
              </button>
              <div className="faq-answer overflow-hidden max-h-0 transition-all duration-500 ease-in-out" style={{maxHeight: "0px"}}>
                <div className="px-8 pb-8 pt-0 ml-16">
                  <div className="h-[1px] w-12 bg-primary/20 mb-6"></div>
                  <p className="text-secondary/70 leading-relaxed text-body-lg">Our project costs vary based on scope and complexity. We offer tailored solutions starting from ₹5,000 for basic implementations to bespoke enterprise quotes. Contact us for a detailed breakdown.</p>
                </div>
              </div>
            </div>
            <div className="faq-item group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-container-low/40 backdrop-blur-md transition-all duration-500 hover:bg-surface-container-low/60 mt-4">
              <div className="absolute -left-4 -top-8 pointer-events-none select-none z-0">
                <span className="font-display-lg text-[64px] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white/5 to-transparent opacity-40">02</span>
              </div>
              <button className="relative z-10 w-full flex items-center justify-between p-8 text-left">
                <div className="flex items-center gap-8">
                  <span className="text-white font-bold text-xl tracking-tight">Do you work with startups or only established companies?</span>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50">
                  <span className="material-symbols-outlined transition-transform duration-500 text-primary" style={{transform: "rotate(0deg)"}}>add</span>
                </div>
              </button>
              <div className="faq-answer overflow-hidden max-h-0 transition-all duration-500 ease-in-out" style={{maxHeight: "0px"}}>
                <div className="px-8 pb-8 pt-0 ml-16">
                  <div className="h-[1px] w-12 bg-primary/20 mb-6"></div>
                  <p className="text-secondary/70 leading-relaxed text-body-lg">We partner with visionaries at every stage. Whether you are a seed-stage startup or a Fortune 500 enterprise, our workflow is designed to scale with your needs.</p>
                </div>
              </div>
            </div>
            <div className="faq-item group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-container-low/40 backdrop-blur-md transition-all duration-500 hover:bg-surface-container-low/60 mt-4">
              <div className="absolute -left-4 -top-8 pointer-events-none select-none z-0">
                <span className="font-display-lg text-[64px] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white/5 to-transparent opacity-40">03</span>
              </div>
              <button className="relative z-10 w-full flex items-center justify-between p-8 text-left">
                <div className="flex items-center gap-8">
                  <span className="text-white font-bold text-xl tracking-tight">What makes your agency different?</span>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50">
                  <span className="material-symbols-outlined transition-transform duration-500 text-primary" style={{transform: "rotate(0deg)"}}>add</span>
                </div>
              </button>
              <div className="faq-answer overflow-hidden max-h-0 transition-all duration-500 ease-in-out" style={{maxHeight: "0px"}}>
                <div className="px-8 pb-8 pt-0 ml-16">
                  <div className="h-[1px] w-12 bg-primary/20 mb-6"></div>
                  <p className="text-secondary/70 leading-relaxed text-body-lg">We blend crystalline aesthetics with military-grade engineering. Our AI-native approach ensures that we don't just build interfaces, but architect high-performance digital ecosystems.</p>
                </div>
              </div>
            </div>
            <div className="faq-item group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-container-low/40 backdrop-blur-md transition-all duration-500 hover:bg-surface-container-low/60 mt-4">
              <div className="absolute -left-4 -top-8 pointer-events-none select-none z-0">
                <span className="font-display-lg text-[64px] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white/5 to-transparent opacity-40">04</span>
              </div>
              <button className="relative z-10 w-full flex items-center justify-between p-8 text-left">
                <div className="flex items-center gap-8">
                  <span className="text-white font-bold text-xl tracking-tight">Will my website be optimized for SEO and performance?</span>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50">
                  <span className="material-symbols-outlined transition-transform duration-500 text-primary" style={{transform: "rotate(0deg)"}}>add</span>
                </div>
              </button>
              <div className="faq-answer overflow-hidden max-h-0 transition-all duration-500 ease-in-out" style={{maxHeight: "0px"}}>
                <div className="px-8 pb-8 pt-0 ml-16">
                  <div className="h-[1px] w-12 bg-primary/20 mb-6"></div>
                  <p className="text-secondary/70 leading-relaxed text-body-lg">Absolutely. Performance is at the core of our engineering. Every project undergoes rigorous testing for pixel-perfect performance and search engine visibility.</p>
                </div>
              </div>
            </div>
            <div className="faq-item group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-container-low/40 backdrop-blur-md transition-all duration-500 hover:bg-surface-container-low/60 mt-4">
              <div className="absolute -left-4 -top-8 pointer-events-none select-none z-0">
                <span className="font-display-lg text-[64px] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white/5 to-transparent opacity-40">05</span>
              </div>
              <button className="relative z-10 w-full flex items-center justify-between p-8 text-left">
                <div className="flex items-center gap-8">
                  <span className="text-white font-bold text-xl tracking-tight">How long does it take to build a website?</span>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50">
                  <span className="material-symbols-outlined transition-transform duration-500 text-primary" style={{transform: "rotate(0deg)"}}>add</span>
                </div>
              </button>
              <div className="faq-answer overflow-hidden max-h-0 transition-all duration-500 ease-in-out" style={{maxHeight: "0px"}}>
                <div className="px-8 pb-8 pt-0 ml-16">
                  <div className="h-[1px] w-12 bg-primary/20 mb-6"></div>
                  <p className="text-secondary/70 leading-relaxed text-body-lg">A typical project timeline ranges from 4 to 12 weeks depending on complexity. Our agile development process ensures high-impact results from day one.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
