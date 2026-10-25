import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-section-gap px-margin-mobile md:px-margin-desktop bg-black overflow-hidden" style={{fontFamily: "Poppins, sans-serif"}}>
      <div className="absolute inset-0 pointer-events-none flex justify-center overflow-hidden select-none z-0 items-start">
        <span className="text-[180px] md:text-[300px] font-bold tracking-tighter uppercase leading-none bg-gradient-to-b from-white/[0.03] to-transparent bg-clip-text text-transparent">CONTACT</span>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 py-1.5 rounded-full border border-white/20 shadow-lg bg-surface-container/80 backdrop-blur-xl w-fit px-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </div>
              <span className="text-on-surface font-bold text-[11px] uppercase tracking-[0.1em]">say hello</span>
            </div>
            <h2 className="text-white font-bold leading-tight tracking-tighter text-5xl md:text-6xl">Get in touch</h2>
            <p className="text-secondary/70 text-body-lg max-w-md">Have questions or ready to transform your business with AI automation?</p>
          </div>
          <div className="grid grid-cols-1 gap-8 relative z-10">
            
            <div className="group/connect relative overflow-hidden rounded-3xl border border-primary/20 bg-[#0a0a0a] backdrop-blur-2xl p-8 transition-all hover:border-primary/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(173,198,255,0.15)] duration-500" style={{animationDuration: "8s"}}>
              
              
              <div className="absolute inset-0 opacity-0 group-hover/connect:opacity-100 transition-opacity duration-700 pointer-events-none z-0" style={{background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 122, 255, 0.2) 0%, transparent 70%)"}}></div>
              
              
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/connect:animate-[shimmer_2s_infinite]" style={{transform: "skewX(-20deg)"}}></div>
                
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_15px_rgba(173,198,255,0.8)]"></span>
                    </span>
                  </div>
                  <h4 className="font-display-lg font-bold tracking-tight text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary/80">Join the Grid</h4>
                </div>
                <p className="text-secondary/80 text-body-md mb-10 leading-relaxed tracking-wide">Sync with our digital ecosystem for the latest breakthroughs in AI innovation and decentralized engineering.</p>
                <div className="flex gap-4">
                  <a href="#" className="group/icon relative w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)] hover:scale-[1.02]">
                    <svg className="w-6 h-6 text-secondary group-hover/icon:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                  <a href="#" className="group/icon relative w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)] hover:scale-[1.02]">
                    <svg className="w-6 h-6 text-secondary group-hover/icon:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a href="#" className="group/icon relative w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)] hover:scale-[1.02]">
                    <span className="material-symbols-outlined text-secondary group-hover/icon:text-primary transition-colors text-2xl">forum</span>
                  </a>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3 group/address">
                  
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 group-hover/address:border-primary/30 group-hover/address:bg-primary/5">
                    
                    <svg className="w-5 h-5 text-primary/60 group-hover/address:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                      
                    </svg>
                    
                  </div>
                  
                  <div>
                    
                    <p className="text-secondary/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">Headquarters</p>
                    
                    <p className="text-on-surface/80 text-body-md font-medium tracking-tight">Crosby Street, NY, US</p>
                    
                  </div>
                  
                </div>
              </div>
              
              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover/connect:bg-primary/25 transition-all duration-1000"></div>
              
            </div>
            
            
          </div>
        </div>
        <div className="relative">
          <form className="relative rounded-3xl p-8 md:p-12 shadow-2xl space-y-8 transition-all duration-500 bg-[#0a0a0a] border border-primary/20 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)]">
            
            <div className="space-y-6">
              
              
              <div className="space-y-2">
                
                <label className="text-secondary/50 text-[10px] font-bold uppercase tracking-[0.3em] ml-1 block">Full Name</label>
                
                <div className="relative group/input">
                  
                  <input type="text" placeholder="Enter your name" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white placeholder:text-secondary/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-body-md text-lg hover:border-white/20 duration-300" />
                  
                </div>
                
              </div>
              
              
              <div className="space-y-2">
                
                <label className="text-secondary/50 text-[10px] font-bold uppercase tracking-[0.3em] ml-1 block">Email Address</label>
                
                <div className="relative group/input">
                  
                  <input type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white placeholder:text-secondary/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-body-md text-lg hover:border-white/20 duration-300" />
                  
                </div>
                
              </div>
              
              
              <div className="space-y-2">
                
                <label className="text-secondary/50 text-[10px] font-bold uppercase tracking-[0.3em] ml-1 block">Message</label>
                
                <div className="relative group/input">
                  
                  <textarea rows="4" placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white placeholder:text-secondary/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-body-md text-lg hover:border-white/20 duration-300"></textarea>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="space-y-4">
              
              <button type="submit" className="w-full py-4 rounded-full font-display-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 bg-white text-surface hover:scale-105 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)] relative z-10 group/submit" style={{boxShadow: "rgba(255, 255, 255, 0.4) 0px 1px 1px inset, rgba(0, 0, 0, 0.2) 0px -1px 1px inset, rgba(173, 198, 255, 0.15) 0px 4px 12px", background: "linear-gradient(rgb(226, 226, 226) 0%, rgb(198, 198, 199) 100%)"}}>
                Submit Request 
                
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover/submit:translate-x-1">arrow_forward</span>
                
              </button>
              
              <p className="text-center text-secondary/60 text-[12px] font-body-md">
                By submitting, you agree to our 
                <a href="#" className="underline hover:text-primary transition-colors">Terms of Service</a>
                 and 
                <a href="#" className="underline hover:text-primary transition-colors">Privacy Policy</a>
                .
            
              </p>
              
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
}
