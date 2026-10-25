import React from "react";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-section-gap px-margin-mobile md:px-margin-desktop bg-[#0d0d0d] overflow-hidden" style={{fontFamily: "Poppins, sans-serif"}}>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[180px] font-bold pointer-events-none select-none z-0 uppercase bg-gradient-to-b from-white/5 to-transparent bg-clip-text text-transparent tracking-tighter" style={{fontFamily: "\"Hanken Grotesk\", sans-serif"}}>Pricing</div>
      
      <div className="relative z-10 max-w-container-max mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          
          <div className="flex-grow">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,122,255,0.8)]"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">get started</span>
            </div>
            
            <h2 className="text-white font-bold leading-tight tracking-tighter text-4xl md:text-5xl">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                Ready to launch? 
                <font color="#adc6ff" face="Playfair Display, serif" style={{ marginLeft: "0.12em" }}>
                  <span style={{fontWeight: "500"}} className="">
                    <i>Lets Build</i>
                  </span>
                </font>
              </span>
            </h2>
            
          </div>
          
          <div className="flex flex-col items-start gap-4">
            <p className="text-secondary/70 text-[13px] max-w-xs text-left">Here are three different plans tailored to Beginner, Professional, and Enterprise levels for your AI solution:</p>
          </div>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          
          <div className="pricing-card-wrapper group relative h-full" style={{perspective: "2000px", opacity: "1", transform: "translateY(0px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out"}}>
            
            <div className="pricing-card relative h-full backdrop-blur-3xl bg-[#0d0d0d] border border-white/10 rounded-3xl p-10 transition-all duration-500 ease-out flex flex-col group overflow-hidden" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
              <div className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-500 group-hover:opacity-50" style={{background: "radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)"}}></div>
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{backgroundImage: "url(\"https://grainy-gradients.vercel.app/noise.svg\")"}}></div>
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="z-10">
                  <span className="absolute -top-8 -left-8 font-display-lg text-[180px] font-bold tracking-tighter select-none pointer-events-none z-0 bg-clip-text text-transparent bg-gradient-to-b from-white/10 via-white/5 to-transparent">01</span>
                </div>
                <div className="text-right">
                  <div className="text-white text-5xl font-bold tracking-tighter font-display-lg flex items-baseline gap-1" style={{fontFamily: "\"Hanken Grotesk\", sans-serif", letterSpacing: "-0.05em"}}>
                    <span className="text-3xl font-medium text-secondary/70 mr-1">₹</span>
                    5,000
                    <span className="text-3xl font-bold text-primary/80 ml-1 self-center">+</span>
                  </div>
                  <div className="text-secondary/50 text-[11px] uppercase tracking-widest mt-1 opacity-60 font-mono">/ Project</div>
                </div>
              </div>
              <h3 className="text-white text-headline-md font-bold mb-3 tracking-tight relative z-10">Beginner</h3>
              <p className="text-secondary/70 text-body-md mb-10 leading-relaxed relative z-10">Perfect for small businesses and startups looking to explore AI capabilities.</p>
              <div className="space-y-5 mb-10 flex-grow relative z-10">
                <p className="text-primary/50 font-bold text-[10px] uppercase tracking-[0.25em] mb-6">Core Features</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    Basic Predictive Analytics
                  </li>
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    Automated Workflows
                  </li>
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    Standard NLP
                  </li>
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    Real-Time Data Analysis
                  </li>
                </ul>
              </div>
              <a href="#" className="bg-surface-container/40 text-white border border-white/10 w-full py-4 rounded-full font-body-md font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-surface-container/60 hover:scale-[0.98] relative z-10" style={{fontFamily: "Poppins, sans-serif"}}>
                Get Started 
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </a>
              <a href="#" className="mt-4 w-full py-3 rounded-full font-body-md font-medium text-secondary/70 flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:bg-white/5 group/view relative z-10" style={{fontFamily: "Poppins, sans-serif"}}>
                View Examples 
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover/view:translate-x-1">arrow_right_alt</span>
              </a>
            </div>
            
          </div>
          
          
          <div className="pricing-card-wrapper group relative h-full" style={{perspective: "2000px", opacity: "1", transform: "translateY(0px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out"}}>
            
            <div className="pricing-card relative h-full backdrop-blur-3xl bg-[#0d0d0d] border border-white/10 rounded-3xl p-10 transition-all duration-500 ease-out flex flex-col group border-primary/40 shadow-[0_0_30px_rgba(173,198,255,0.15)] hover:scale-[0.95] overflow-visible" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)", boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px 1px inset"}}>
              <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 z-50" style={{top: "-8px", right: "12px"}}>
                <div className="bg-primary text-on-primary px-4 py-1.5 rounded-full shadow-lg flex items-center justify-center transition-transform duration-500 hover:scale-105 rotate-6 py-2.5">
                  
                  <span className="font-bold text-[10px] uppercase tracking-[0.15em] leading-none">Most Common</span>
                  
                </div>
              </div>
              
              
              <div className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-500 group-hover:opacity-50" style={{background: "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.08) 0%, transparent 50%)"}}></div>
              
              
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{backgroundImage: "url(\"https://grainy-gradients.vercel.app/noise.svg\")"}}></div>
              
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                
                <div className="z-10">
                  <span className="absolute -top-8 -left-8 font-display-lg text-[180px] font-bold tracking-tighter select-none pointer-events-none z-0 bg-clip-text text-transparent bg-gradient-to-b from-primary/20 via-primary/5 to-transparent">02</span>
                </div>
                
                <div className="text-right">
                  
                  <div className="text-white text-5xl font-bold tracking-tighter font-display-lg flex items-baseline gap-1" style={{fontFamily: "\"Hanken Grotesk\", sans-serif", letterSpacing: "-0.05em"}}>
                    <span className="text-3xl font-medium text-secondary/70 mr-1">₹</span>
                    15,000
                  </div>
                  
                  <div className="text-secondary/50 text-[11px] uppercase tracking-widest mt-1 opacity-60 font-mono">/ project</div>
                  
                </div>
                
              </div>
              
              <h3 className="text-white text-headline-md font-bold mb-3 tracking-tight relative z-10">Professional</h3>
              
              <p className="text-secondary/70 text-body-md mb-10 leading-relaxed relative z-10">Ideal for growing businesses that need more advanced tools to enhance productivity.</p>
              
              <div className="space-y-5 mb-10 flex-grow relative z-10">
                
                <p className="text-primary/50 font-bold text-[10px] uppercase tracking-[0.25em] mb-6">Advanced Features</p>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    Advanced Predictive Analytics
                  </li>
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    Automated Workflows
                  </li>
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    Enhanced NLP
                  </li>
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    Priority Email Support
                  </li>
                </ul>
                
              </div>
              
              <a href="#" className="bg-white text-black w-full py-4 rounded-full font-body-md font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[0.98] relative z-10" style={{fontFamily: "Poppins, sans-serif"}}>
                Get Started 
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </a>
              <a href="#" className="mt-4 w-full py-3 rounded-full font-body-md font-medium text-secondary/70 flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:bg-white/5 group/view relative z-10" style={{fontFamily: "Poppins, sans-serif"}}>
                View Examples 
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover/view:translate-x-1">arrow_right_alt</span>
              </a>
              
            </div>
            
          </div>
          
          
          <div className="pricing-card-wrapper group relative h-full" style={{perspective: "2000px", opacity: "1", transform: "translateY(0px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out"}}>
            
            <div className="pricing-card relative h-full backdrop-blur-3xl bg-[#0d0d0d] border border-white/10 rounded-3xl p-10 transition-all duration-500 ease-out flex flex-col group overflow-hidden" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
              <div className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-500 group-hover:opacity-50" style={{background: "radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)"}}></div>
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{backgroundImage: "url(\"https://grainy-gradients.vercel.app/noise.svg\")"}}></div>
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="z-10">
                  <span className="absolute -top-8 -left-8 font-display-lg text-[180px] font-bold tracking-tighter select-none pointer-events-none z-0 bg-clip-text text-transparent bg-gradient-to-b from-white/10 via-white/5 to-transparent">03</span>
                </div>
                <div className="text-right">
                  <div className="text-white text-5xl font-bold tracking-tighter font-display-lg">Quote</div>
                  <div className="text-secondary/50 text-[11px] uppercase tracking-widest mt-1 font-mono">/ bespoke</div>
                </div>
              </div>
              <h3 className="text-white text-headline-md font-bold mb-3 tracking-tight relative z-10">Enterprise</h3>
              <p className="text-secondary/70 text-body-md mb-10 leading-relaxed relative z-10">Designed for enterprises requiring comprehensive AI solutions.</p>
              <div className="space-y-5 mb-10 flex-grow relative z-10">
                <p className="text-primary/50 font-bold text-[10px] uppercase tracking-[0.25em] mb-6">Full Suite</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    Comprehensive Analytics
                  </li>
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    Premium NLP
                  </li>
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    Fully Customizable Dashboards
                  </li>
                  <li className="flex items-center gap-4 text-white/90 text-[14px] group/item transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    24/7 Dedicated Support
                  </li>
                </ul>
              </div>
              <a href="#" className="bg-surface-container/40 text-white border border-white/10 w-full py-4 rounded-full font-body-md font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-surface-container/60 hover:scale-[0.98] relative z-10" style={{fontFamily: "Poppins, sans-serif"}}>
                Get Started 
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </a>
              <a href="#" className="mt-4 w-full py-3 rounded-full font-body-md font-medium text-secondary/70 flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:bg-white/5 group/view relative z-10" style={{fontFamily: "Poppins, sans-serif"}}>
                View Examples 
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover/view:translate-x-1">arrow_right_alt</span>
              </a>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
      
    </section>
  );
}
