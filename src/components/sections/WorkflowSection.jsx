import React from "react";

export default function WorkflowSection() {
  return (
    <section id="how-we-work" className="relative py-section-gap px-margin-mobile md:px-margin-desktop bg-black overflow-hidden" style={{fontFamily: "Poppins, sans-serif"}}>
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
                <span className="text-on-surface font-bold text-[11px] uppercase tracking-[0.1em]">the workflow</span>
              </div>
              <h2 className="text-white font-bold leading-tight tracking-tighter relative group text-4xl md:text-5xl">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                  Our Strategic 
                  <span className="ml-[0.30em] italic font-medium text-primary inline-block transform hover:scale-105 transition-transform duration-500" style={{fontFamily: "\"Playfair Display\", serif"}}>Workflow</span>
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-start text-left max-w-lg">
              <p className="text-secondary font-body-md leading-relaxed">Outcome-focused delivery: expect high-impact results from day one with a streamlined process designed to scale.</p>
            </div>
          </div>
        </div>
        <div className="relative mt-16">
          
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-30" style={{zIndex: "0"}}>
            
            <defs>
              
              <linearGradient id="wire-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                
                <stop offset="0%" stopColor="#adc6ff" stopOpacity="0"></stop>
                
                <stop offset="50%" stopColor="#adc6ff" stopOpacity="1"></stop>
                
                <stop offset="100%" stopColor="#adc6ff" stopOpacity="0"></stop>
                
              </linearGradient>
              
            </defs>
            
            <path d="M 10% 50% Q 20% 20%, 30% 50% T 50% 50% T 70% 50% T 90% 50%" stroke="url(#wire-grad)" strokeWidth="2" fill="none" className="animate-pulse"></path>
            
          </svg>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
            
            
            
            <div className="md:col-span-4 bento-card-wrapper group relative min-h-[320px]" style={{perspective: "1000px"}}>
              
              <div className="bento-card h-full w-full backdrop-blur-xl bg-surface-container/40 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between px-8 py-8" style={{transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", transformStyle: "preserve-3d", transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
                
                <div className="absolute -bottom-8 -right-8 text-[120px] font-bold pointer-events-none select-none z-0" style={{color: "rgba(53, 53, 53, 0.2)", maskImage: "linear-gradient(black, transparent)"}}>01</div>
                
                <div className="bento-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)", opacity: "0", "--mouse-x": "97.40358422182621%", "--mouse-y": "9.906158447265625%"}}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  
                  <div className="flex justify-between items-start mb-6">
                    
                    <span className="material-symbols-outlined text-primary text-5xl">search_insights</span>
                    
                    <span className="font-mono text-primary/60 text-[12px] tracking-widest uppercase">// strategy.discovery()</span>
                    
                  </div>
                  
                  <div className="mt-auto">
                    
                    <h3 className="text-white text-headline-md font-bold mb-2">
                      Discovery & 
                      <span className="ml-[0.30em] italic font-medium text-primary" style={{fontFamily: "\"Playfair Display\", serif"}}>Strategy</span>
                    </h3>
                    
                    <p className="text-secondary/70 text-body-md">Deep diving into your vision to architect the perfect roadmap for your digital infrastructure.</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
            
            <div className="md:col-span-4 bento-card-wrapper group relative min-h-[320px]" style={{perspective: "1000px"}}>
              
              <div className="bento-card h-full w-full backdrop-blur-xl bg-surface-container/40 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between px-8 py-8" style={{transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", transformStyle: "preserve-3d", transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
                
                <div className="absolute -bottom-8 -right-8 text-[120px] font-bold pointer-events-none select-none z-0" style={{color: "rgba(53, 53, 53, 0.2)", maskImage: "linear-gradient(black, transparent)"}}>02</div>
                
                <div className="bento-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)", opacity: "0", "--mouse-x": "98.21628646011258%", "--mouse-y": "78.03115844726562%"}}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  
                  <div className="flex justify-between items-start mb-6">
                    
                    <span className="material-symbols-outlined text-primary text-5xl">architecture</span>
                    
                    <span className="font-mono text-primary/60 text-[12px] tracking-widest uppercase">// digital.engineering()</span>
                    
                  </div>
                  
                  <div className="mt-auto">
                    
                    <h3 className="text-white text-headline-md font-bold mb-2">
                      Creative 
                      <span className="ml-[0.30em] italic font-medium text-primary" style={{fontFamily: "\"Playfair Display\", serif"}}>Engineering</span>
                    </h3>
                    
                    <p className="text-secondary/70 text-body-md">Blending crystalline aesthetics with functional precision and technical excellence.</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
            
            <div className="md:col-span-4 bento-card-wrapper group relative min-h-[320px]" style={{perspective: "1000px"}}>
              
              <div className="bento-card h-full w-full backdrop-blur-xl bg-surface-container/40 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between px-8 py-8" style={{transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", transformStyle: "preserve-3d", transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
                
                <div className="absolute -bottom-8 -right-8 text-[120px] font-bold pointer-events-none select-none z-0" style={{color: "rgba(53, 53, 53, 0.2)", maskImage: "linear-gradient(black, transparent)"}}>03</div>
                
                <div className="bento-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)", opacity: "0", "--mouse-x": "99.26948794452612%", "--mouse-y": "66.15615844726562%"}}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  
                  <div className="flex justify-between items-start mb-6">
                    
                    <span className="material-symbols-outlined text-primary text-5xl">code_blocks</span>
                    
                    <span className="font-mono text-primary/60 text-[12px] tracking-widest uppercase">// product.dev()</span>
                    
                  </div>
                  
                  <div className="mt-auto">
                    
                    <h3 className="text-white text-headline-md font-bold mb-2">
                      Agile 
                      <span className="ml-[0.30em] italic font-medium text-primary" style={{fontFamily: "\"Playfair Display\", serif"}}>Development</span>
                    </h3>
                    
                    <p className="text-secondary/70 text-body-md">Building robust foundations with clean, scalable code and modern tech stacks.</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
            
            
            <div className="md:col-span-6 bento-card-wrapper group relative min-h-[320px]" style={{perspective: "1000px"}}>
              
              <div className="bento-card h-full w-full backdrop-blur-xl bg-surface-container/40 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between px-8 py-8" style={{transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", transformStyle: "preserve-3d", transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
                
                <div className="absolute -bottom-8 -right-8 text-[120px] font-bold pointer-events-none select-none z-0" style={{color: "rgba(53, 53, 53, 0.2)", maskImage: "linear-gradient(black, transparent)"}}>04</div>
                
                <div className="bento-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)", opacity: "0", "--mouse-x": "97.29299363057325%", "--mouse-y": "42.093658447265625%"}}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  
                  <div className="flex justify-between items-start mb-6">
                    
                    <span className="material-symbols-outlined text-primary text-5xl">verified_user</span>
                    
                    <span className="font-mono text-primary/60 text-[12px] tracking-widest uppercase">// quality.testing()</span>
                    
                  </div>
                  
                  <div className="mt-auto">
                    
                    <h3 className="text-white text-headline-md font-bold mb-2">
                      Quality 
                      <span className="ml-[0.30em] italic font-medium text-primary" style={{fontFamily: "\"Playfair Display\", serif"}}>Assurance</span>
                    </h3>
                    
                    <p className="text-secondary/70 text-body-md max-w-md">Rigorous testing for pixel-perfect performance and military-grade security protocols.</p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
            
            <div className="md:col-span-6 bento-card-wrapper group relative min-h-[320px]" style={{perspective: "1000px"}}>
              
              <div className="bento-card h-full w-full backdrop-blur-xl bg-surface-container/40 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between px-8 py-8" style={{transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", transformStyle: "preserve-3d", transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
                
                <div className="absolute -bottom-8 -right-8 text-[120px] font-bold pointer-events-none select-none z-0" style={{color: "rgba(53, 53, 53, 0.2)", maskImage: "linear-gradient(black, transparent)"}}>05</div>
                
                <div className="bento-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(173,198,255,0.15) 0%, transparent 60%)", opacity: "0", "--mouse-x": "93.78980891719745%", "--mouse-y": "40.843658447265625%"}}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  
                  <div className="flex justify-between items-start mb-6">
                    
                    <span className="material-symbols-outlined text-primary text-5xl">rocket_launch</span>
                    
                    <span className="font-mono text-primary/60 text-[12px] tracking-widest uppercase">// growth.optimization()</span>
                    
                  </div>
                  
                  <div className="mt-auto">
                    
                    <h3 className="text-white text-headline-md font-bold mb-2">
                      Launch & 
                      <span className="ml-[0.30em] italic font-medium text-primary" style={{fontFamily: "\"Playfair Display\", serif"}}>Optimize</span>
                    </h3>
                    
                    <p className="text-secondary/70 text-body-md max-w-md">Seamless deployment and data-driven impact for next-gen digital excellence and scaling.</p>
                    
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
