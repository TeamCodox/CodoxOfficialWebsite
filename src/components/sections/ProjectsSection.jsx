import React from "react";

export default function ProjectsSection() {
  return (
    <section className="bg-black pt-14 pb-14 relative overflow-hidden flex flex-col items-center text-center px-margin-mobile md:px-margin-desktop" style={{backgroundColor: "rgb(13, 13, 13)"}} id="projects">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      
      
      <div className="flex items-center gap-3 py-1.5 rounded-full border border-white/20 shadow-lg bg-surface-container/80 backdrop-blur-xl mb-6 w-auto inline-flex justify-center px-5 z-20" style={{boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px -1px 1px inset, rgba(0, 0, 0, 0.4) 0px 4px 20px"}}>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
        </div>
        <span className="text-on-surface font-medium text-[11px] tracking-[0.1em] uppercase leading-none" style={{fontFamily: "Poppins, sans-serif"}}>Built, Not promised</span>
      </div>
      <h2 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-6 font-display-lg tracking-tight relative z-10 z-20">
        
        <span className="text-white">Case Studies</span>
        <span className="italic text-primary/80 relative inline-block ml-3" style={{fontFamily: "\"Playfair Display\", serif", fontWeight: "500"}}>
          <span className="text-[1.1em] leading-none inline-block transform -translate-y-1 text-white">&</span>{" "}
           Projects
          <svg className="absolute bottom-[-8px] left-0 w-full h-6 pointer-events-none overflow-visible" viewBox="0 0 300 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 25C60 22 180 18 298 32" stroke="#a0b4e8" strokeWidth="3" strokeLinecap="round" className="opacity-80" style={{strokeDasharray: "400", strokeDashoffset: "400", animation: "draw-organic-line 2s ease-in-out forwards"}}></path>
          </svg>
        </span>
        
      </h2>
      
      
      <p className="max-w-2xl text-body-md text-secondary/80 leading-relaxed relative z-10 z-20" style={{fontFamily: "Poppins, sans-serif"}}>A collection of high-impact digital products and experiences we've delivered for visionary brands.</p>
      
      <div className="max-w-container-max mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left relative z-10 z-20">
        
        <div className="project-card-wrapper group relative" style={{perspective: "2000px", opacity: "1", transform: "translateY(0px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out"}}>
          
          <div className="project-card relative backdrop-blur-md border border-white/10 rounded-lg p-8 transition-all duration-500 ease-out overflow-hidden h-full flex flex-col bg-surface-container/40" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
            
            <div className="project-spotlight absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 z-20" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)", opacity: "0", "--mouse-x": "58.333333333333336%", "--mouse-y": "98.9613626921479%"}}></div>
            
            <div className="relative h-72 mb-8 rounded-lg overflow-hidden bg-surface-container-lowest/50 border border-white/5 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]">
              
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoiSOHZfhkusm27MFCmOTr1MDktDytooR8gm_6l5aL-yb1gpyQ983CX7DjLzcYSMUAez7BbOSRoSaZwr-x-9CppuW-7r9b4tm2m_-NssVm5lOgEIPytBvSWm3z5LzorPue_8HAVT8FtN-Kt7SjQTvSbXoON3MnGOWYz-IXtS7-GE5sKtw2AnJJsmzvk7QTUrDHyoTsBrfqq1opNVmj9QNSJBMZLn7d3r_UCcQsiMojT6r6NKw8ApvcusJvCFMVjLOFoKxzXingVSRLyPw" alt="rivvl.ai" className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{transform: "translate(0px, 0px) scale(1)"}} />
              
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] pointer-events-none"></div>
              
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              
              <span className="font-mono text-primary text-[11px] tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(173,198,255,0.5)]">/ 01</span>
              
              <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/20 to-transparent"></div>
              
            </div>
            
            <div className="flex items-center justify-between mb-4">
              
              <h3 className="text-white text-4xl font-bold tracking-tight tracking-tighter" style={{fontFamily: "\"Hanken Grotesk\", sans-serif", letterSpacing: "-0.04em"}}>rivvl.ai</h3>
              
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] group-hover:border-primary">
                
                <span className="material-symbols-outlined text-[22px] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">north_east</span>
                
              </div>
              
            </div>
            
            <p className="text-secondary/70 font-body-md text-[15px] leading-relaxed mb-8 flex-grow">An intelligent comparison platform helping buyers compare any vehicle or real estate side-by-side with comprehensive data reports.</p>
            
            <div className="flex flex-wrap gap-2.5">
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Next.js</span>
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Tailwind CSS v4</span>
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Comparison Reports</span>
              
            </div>
            
          </div>
          
        </div>
        
        
        <div className="project-card-wrapper group relative" style={{perspective: "2000px", opacity: "1", transform: "translateY(0px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out"}}>
          
          <div className="project-card relative backdrop-blur-md border border-white/10 rounded-lg p-8 transition-all duration-500 ease-out overflow-hidden h-full flex flex-col bg-surface-container/40" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
            
            <div className="project-spotlight absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 z-20" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)", opacity: "0", "--mouse-x": "99.67948717948718%", "--mouse-y": "3.9052762775238885%"}}></div>
            
            <div className="relative h-72 mb-8 rounded-lg overflow-hidden bg-surface-container-lowest/50 border border-white/5 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]">
              
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDooHpwcuLPwDrgjGGhqCdL7uxy_Y9M-5WdxOKZeLr46E51Au07i7z32NiH7bm3nKtsccWBrgCKZvULNi03srDRETYoEsS4HMZmw1D5JI0FrsJhKHrTfUt9RERukQ5dw9fmxAjK9AfDMKFPVmrzewj1t6TbSRCAjzZOK5Jbj83HUK-OqKZxWob_UqDc8RZQ5n6CJ3joYsNHTJnEOG3gWlXHs9-l2VBvdYrEbpHw1QI4hG4Bdr6iKFR6VNG3QJ-X0mJ-Yk61kanL2dAwOL0" alt="Pathway" className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{objectPosition: "right center", transform: "translate(0px, 0px) scale(1)"}} />
              
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] pointer-events-none"></div>
              
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              
              <span className="font-mono text-primary text-[11px] tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(173,198,255,0.5)]">/ 02</span>
              
              <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/20 to-transparent"></div>
              
            </div>
            
            <div className="flex items-center justify-between mb-4">
              
              <h3 className="text-white text-4xl font-bold tracking-tight tracking-tighter" style={{fontFamily: "\"Hanken Grotesk\", sans-serif", letterSpacing: "-0.04em"}}>Pathway</h3>
              
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] group-hover:border-primary">
                
                <span className="material-symbols-outlined text-[22px] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">north_east</span>
                
              </div>
              
            </div>
            
            <p className="text-secondary/70 font-body-md text-[15px] leading-relaxed mb-8 flex-grow">An elegant, motion-heavy landing page showcasing a task tracking and productivity application with floating metallic 3D shapes.</p>
            
            <div className="flex flex-wrap gap-2.5">
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Framer Motion</span>
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Landing Page Design</span>
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Tailwind</span>
              
            </div>
            
          </div>
          
        </div>
        
        
        <div className="project-card-wrapper group relative" style={{perspective: "2000px", opacity: "1", transform: "translateY(0px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out"}}>
          
          <div className="project-card relative backdrop-blur-md border border-white/10 rounded-lg p-8 transition-all duration-500 ease-out overflow-hidden h-full flex flex-col bg-surface-container/40" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
            
            <div className="project-spotlight absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 z-20" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)", opacity: "0", "--mouse-x": "98.71794871794873%", "--mouse-y": "88.03489821354383%"}}></div>
            
            <div className="relative h-72 mb-8 rounded-lg overflow-hidden bg-surface-container-lowest/50 border border-white/5 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]">
              
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNGTfIbZQlzfak4RCMvir1vN5a4xu0CLJdKYBVXJ6vKDxJxwHYcoxFD-l7bM3CapxDRGmpekY4IjY5_1baTjtxA8v8h8Mi85FVjqZKToo5hwqcn4ybBJW067kmbXesUaW9C6bk4UVcKwIYqfFhKAZXGBPnZCjT2t51Bhp8wlN_JQihaDxuK7DSKhmfKmfUKrVXqKZ1tEVF_XvjptUw5l81dCIj2w6PSD3d1fA4WLc6HWH1ehsbpi3d9zd5cUgwM7oCKQJSPG4Yek1jHm0" alt="Nebula DeFi Protocol" className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{transform: "translate(0px, 0px) scale(1)"}} />
              
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] pointer-events-none"></div>
              
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              
              <span className="font-mono text-primary text-[11px] tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(173,198,255,0.5)]">/ 03</span>
              
              <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/20 to-transparent"></div>
              
            </div>
            
            <div className="flex items-center justify-between mb-4">
              
              <h3 className="text-white text-4xl font-bold tracking-tight tracking-tighter" style={{fontFamily: "\"Hanken Grotesk\", sans-serif", letterSpacing: "-0.04em"}}>Nebula DeFi Protocol</h3>
              
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] group-hover:border-primary">
                
                <span className="material-symbols-outlined text-[22px] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">north_east</span>
                
              </div>
              
            </div>
            
            <p className="text-secondary/70 font-body-md text-[15px] leading-relaxed mb-8 flex-grow">A revolutionary decentralized liquidity engine built for the next era of finance, featuring high-performance yield optimization and military-grade security.</p>
            
            <div className="flex flex-wrap gap-2.5">
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Solidity</span>
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Rust</span>
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Zero Knowledge</span>
              
            </div>
            
          </div>
          
        </div>
        
        
        <div className="project-card-wrapper group relative" style={{perspective: "2000px", opacity: "1", transform: "translateY(0px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out"}}>
          
          <div className="project-card relative backdrop-blur-md border border-white/10 rounded-lg p-8 transition-all duration-500 ease-out overflow-hidden h-full flex flex-col bg-surface-container/40" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
            
            <div className="project-spotlight absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 z-20" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)", opacity: "0", "--mouse-x": "98.71794871794873%", "--mouse-y": "91.69090153718321%"}}></div>
            
            <div className="relative h-72 mb-8 rounded-lg overflow-hidden bg-surface-container-lowest/50 border border-white/5 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]">
              
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaT0Ahz7mV8QWrXBM5tjhL0wk6_IApFDXo29KmxMNhrm_gnC4Y2PtFtxAVN4-PZ-jVOetMcJ3dVGh5KT6rjlKHXrb9A3aCGowKumHSnv4wRHgJxN4l-zlXZzLMvhDE-ACINPPB1VNHcIm_OiERj6dxbtPD3NVQdbxWf4FeEl3R-nrJ2QXGjDFn-PbSVpIhYiljXNX8P4Lz3u_HjQlA1HzDNa4mi5vp-Pr0OPdgOcX6whILraM056toe8bFmRo9zVhUGvSskR3JVwmsNUo" alt="Lumina Brand Identity" className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{transform: "translate(0px, 0px) scale(1)"}} />
              
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] pointer-events-none"></div>
              
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              
              <span className="font-mono text-primary text-[11px] tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(173,198,255,0.5)]">/ 04</span>
              
              <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/20 to-transparent"></div>
              
            </div>
            
            <div className="flex items-center justify-between mb-4">
              
              <h3 className="text-white text-4xl font-bold tracking-tight tracking-tighter" style={{fontFamily: "\"Hanken Grotesk\", sans-serif", letterSpacing: "-0.04em"}}>Lumina Brand Identity</h3>
              
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] group-hover:border-primary">
                
                <span className="material-symbols-outlined text-[22px] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">north_east</span>
                
              </div>
              
            </div>
            
            <p className="text-secondary/70 font-body-md text-[15px] leading-relaxed mb-8 flex-grow">Crafting a timeless visual language for a global leader in sustainable energy, blending high-fidelity design with strategic brand positioning.</p>
            
            <div className="flex flex-wrap gap-2.5">
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Brand Strategy</span>
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Visual Identity</span>
              
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-secondary/80 transition-all hover:bg-white/10 hover:text-white hover:border-white/20">Design Systems</span>
              
            </div>
            
          </div>
          
        </div>
      </div>
      <div className="mt-16 flex justify-center relative z-20">
        
        <a href="/portfolio" className="group/view-more px-10 py-4 rounded-full border border-white/10 text-on-surface font-bold flex items-center gap-3 transition-all duration-500 hover:border-primary/50 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(173,198,255,0.15)] hover:-translate-y-1">
          
          <span className="font-body-md tracking-tight">View More</span>
          
          <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover/view-more:translate-x-1">arrow_forward</span>
          
        </a>
        
      </div>
      
    </section>
  );
}
