import React from "react";

export default function ServicesSection() {
  return (
    <section className="relative py-section-gap px-margin-mobile md:px-margin-desktop bg-[#000000] overflow-hidden" style={{fontFamily: "Poppins, sans-serif"}} id="services">
      <div className="relative z-10 max-w-container-max mx-auto">
        
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="flex-grow">
              <div className="flex items-center gap-3 py-1.5 rounded-full border border-white/20 shadow-lg bg-surface-container/80 backdrop-blur-xl mb-6 w-fit px-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                </div>
                <span className="text-on-surface font-bold text-[11px] uppercase">our services</span>
              </div>
              <h2 className="text-white font-bold leading-tight tracking-tighter relative group text-4xl md:text-5xl">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                  Solutions We
                  {" "}
                  <span className="ml-[0.12em] italic font-medium text-primary inline-block transform hover:scale-105 transition-transform duration-500" style={{fontFamily: "\"Playfair Display\", serif"}}>Provide</span>
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-start text-left max-w-lg">
              <p className="text-secondary font-body-md leading-relaxed">Forging next-gen foundations through meticulous engineering and visionary design.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-7 bento-card-wrapper group relative min-h-[200px]" style={{perspective: "1000px"}}>
            
            <div className="bento-card h-full w-full backdrop-blur-xl bg-surface-container/40 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between px-10 py-10" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
              <div className="absolute -bottom-8 -right-8 text-[180px] font-bold text-white/5 pointer-events-none select-none z-0" style={{color: "rgba(53, 53, 53, 0.2)", maskImage: "linear-gradient(black, transparent)"}}>01</div>
              <div className="bento-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)"}}></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <span className="material-symbols-outlined text-primary text-5xl">terminal</span>
                  <span className="font-mono text-primary/60 text-[12px] tracking-widest">// services.web()</span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-white text-headline-md font-bold mb-2">Web Development</h3>
                  <p className="text-secondary/70 text-body-md max-w-md">Architecting high-performance decentralized foundations for next-gen digital experiences.</p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-medium group/btn">
                    Learn More 
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-2">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          
          
          <div className="md:col-span-5 bento-card-wrapper group relative min-h-[200px]" style={{perspective: "1000px"}}>
            
            <div className="bento-card h-full w-full backdrop-blur-xl bg-surface-container/40 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between px-10 py-10" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
              <div className="absolute -bottom-8 -right-8 text-[180px] font-bold text-white/5 pointer-events-none select-none z-0" style={{color: "rgba(53, 53, 53, 0.2)", maskImage: "linear-gradient(black, transparent)"}}>02</div>
              <div className="bento-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)"}}></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <span className="material-symbols-outlined text-primary text-5xl">smartphone</span>
                  <span className="font-mono text-primary/60 text-[12px] tracking-widest">// services.mobile()</span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-white text-headline-md font-bold mb-2 mt-auto">Mobile Development</h3>
                  <p className="text-secondary/70 text-body-md">Fortifying your assets with translucent shield protocols and rigorous verification.</p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-medium group/btn">
                    Learn More 
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-2">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          
          
          <div className="md:col-span-4 bento-card-wrapper group relative min-h-[200px]" style={{perspective: "1000px"}}>
            
            <div className="bento-card h-full w-full backdrop-blur-xl bg-surface-container/40 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between px-10 py-10" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
              <div className="absolute -bottom-8 -right-8 text-[180px] font-bold text-white/5 pointer-events-none select-none z-0" style={{color: "rgba(53, 53, 53, 0.2)", maskImage: "linear-gradient(black, transparent)"}}>03</div>
              <div className="bento-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)"}}></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <span className="material-symbols-outlined text-primary text-5xl">draw</span>
                  <span className="font-mono text-primary/60 text-[12px] tracking-widest">// services.ui()</span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-white text-headline-md font-bold mb-2 mt-auto">UI/UX Design</h3>
                  <p className="text-secondary/70 text-body-md">Crafting intuitive interfaces that bridge the gap between human and machine.</p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-medium group/btn">
                    Learn More 
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-2">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          
          
          <div className="md:col-span-8 bento-card-wrapper group relative min-h-[200px]" style={{perspective: "1000px"}}>
            
            <div className="bento-card h-full w-full backdrop-blur-xl bg-surface-container/40 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between px-10 py-10" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
              <div className="absolute -bottom-8 -right-8 text-[180px] font-bold text-white/5 pointer-events-none select-none z-0" style={{color: "rgba(53, 53, 53, 0.2)", maskImage: "linear-gradient(black, transparent)"}}>04</div>
              <div className="bento-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)"}}></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <span className="material-symbols-outlined text-primary text-5xl">dashboard</span>
                  <span className="font-mono text-primary/60 text-[12px] tracking-widest">// services.backend()</span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-white text-headline-md font-bold mb-2 mt-auto">Admin Panel Dev</h3>
                  <p className="text-secondary/70 text-body-md max-w-lg">Engineering secure, gas-optimized protocols for the next generation of decentralized finance.</p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-medium group/btn">
                    Learn More 
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-2">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          
          
          <div className="md:col-span-6 bento-card-wrapper group relative min-h-[200px]" style={{perspective: "1000px"}}>
            
            <div className="bento-card h-full w-full backdrop-blur-xl bg-surface-container/40 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between px-10 py-10" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
              <div className="absolute -bottom-8 -right-8 text-[180px] font-bold text-white/5 pointer-events-none select-none z-0" style={{color: "rgba(53, 53, 53, 0.2)", maskImage: "linear-gradient(black, transparent)"}}>05</div>
              <div className="bento-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)"}}></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <span className="material-symbols-outlined text-primary text-5xl">search</span>
                  <span className="font-mono text-primary/60 text-[12px] tracking-widest">// services.seo()</span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-white text-headline-md font-bold mb-2 mt-auto">SEO Services</h3>
                  <p className="text-secondary/70 text-body-md">Architecting transparent and efficient decision-making frameworks for digital communities.</p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-medium group/btn">
                    Learn More 
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-2">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          
          
          <div className="md:col-span-6 bento-card-wrapper group relative min-h-[200px]" style={{perspective: "1000px"}}>
            
            <div className="bento-card h-full w-full backdrop-blur-xl bg-surface-container/40 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between px-10 py-10" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
              <div className="absolute -bottom-8 -right-8 text-[180px] font-bold text-white/5 pointer-events-none select-none z-0" style={{color: "rgba(53, 53, 53, 0.2)", maskImage: "linear-gradient(black, transparent)"}}>06</div>
              <div className="bento-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)"}}></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <span className="material-symbols-outlined text-primary text-5xl">auto_awesome</span>
                  <span className="font-mono text-primary/60 text-[12px] tracking-widest">// services.branding()</span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-white text-headline-md font-bold mb-2">Brand Identity</h3>
                  <p className="text-secondary/70 text-body-md">Crafting iconic visual languages that resonate across the evolving digital landscape.</p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-medium group/btn">
                    Learn More 
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-2">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      
    </section>
  );
}
