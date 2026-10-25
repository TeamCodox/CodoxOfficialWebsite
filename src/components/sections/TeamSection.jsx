import React from "react";

export default function TeamSection() {
  return (
    <section id="team" className="relative py-section-gap px-margin-mobile md:px-margin-desktop bg-black overflow-hidden" style={{fontFamily: "Poppins, sans-serif"}}>
      
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
                <span className="text-on-surface font-bold text-[11px] uppercase tracking-[0.1em]">Behind the SCenes</span>
              </div>
              <h2 className="text-white font-bold leading-tight tracking-tighter relative group text-4xl md:text-5xl">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                  Meet our 
                  <span className="italic font-medium text-primary inline-block transform hover:scale-105 transition-transform duration-500 ml-2" style={{fontFamily: "\"Playfair Display\", serif"}}>Team Members</span>
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-start text-left max-w-lg">
              <p className="text-secondary font-body-md leading-relaxed">We are a collective of developers, designers, and strategists obsessed with crafting high-fidelity digital solutions.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          
          <div className="team-card-wrapper group relative h-[500px]" style={{perspective: "1000px", opacity: "1", transform: "translateY(0px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out"}}>
            
            <div className="team-card h-full w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] z-0 transition-opacity duration-500"></div>
              <div className="relative h-full w-full overflow-hidden z-10">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB0uHMtyWYjF-hT5SjHatjrwXd0nxWXYrofuATnBZyGakz_EqUHPo-2CQlr2fm65q12eY1ZVC62NwoAW6EaADIRmuzLZmAraIBmUiFsfl7g0ZnfLCQdabVgn8_Z4hGgBjsKp2WqKVk2aaQciUIFbQGv6m9DvHWJVaTc5sWIEAHJaHN9DKolhiHbZUe8DKYBVJ12XbPA9SZq6_x8Hk870YWsv1PpGdL8JWMwLgPLK6lb23xIfHWp79IuAxZI-LdTuvZCebTM1d06_z0znA" alt="Design Director" className="team-image w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between transition-all duration-300">
                  <div className="mt-auto transform transition-all duration-500 ease-out group-hover:-translate-y-[340px]">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <h3 className="text-white text-headline-md font-bold">Marcus Thorne</h3>
                        <p className="font-mono text-[12px] tracking-widest uppercase text-primary">Design Director</p>
                      </div>
                      <div className="flex gap-3 text-on-surface/50">
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                          </svg>
                        </a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                          </svg>
                        </a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 absolute bottom-8 left-8">
                    <p className="text-white text-[13px] leading-relaxed max-w-[240px]">Visionary design lead with over 12 years of experience crafting immersive digital ecosystems for Fortune 500 tech giants.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          
          <div className="team-card-wrapper group relative h-[500px]" style={{perspective: "1000px", opacity: "1", transform: "translateY(0px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out"}}>
            
            <div className="team-card h-full w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] z-0 transition-opacity duration-500"></div>
              <div className="relative h-full w-full overflow-hidden z-10">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1Ay-PdCnpzK42zYiO-ZJiCZ9K7P_DuUDC0PJKPmD2LfUF7ZfTXDVjX6MF6c1DXeyExNUiOmmKfaRoadwodIViypSkRAx7zoWqQMnPXiHmkrsJyGpDHDq9kIzpRZVXHwk65gx4inhnF8Jsmz3gOrZWF09Vc9v69U3cHToskJbOru2yP-F9k_GesTfNGEKXpP9bH3A5kD21_B9R8uoQdMx1g8PiQ_2jV1aaSp2sr-p7KbNPVTK8eo0TqiGhMV3Ml3BPRLDYaaMjSXrlZFs" alt="Creative Technologist" className="team-image w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between transition-all duration-300">
                  <div className="mt-auto transform transition-all duration-500 ease-out group-hover:-translate-y-[340px]">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <h3 className="text-white text-headline-md font-bold">Elena Vance</h3>
                        <p className="font-mono text-[12px] tracking-widest uppercase text-primary">Creative Technologist</p>
                      </div>
                      <div className="flex gap-3 text-on-surface/50">
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                          </svg>
                        </a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                          </svg>
                        </a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 absolute bottom-8 left-8">
                    <p className="text-white text-[13px] leading-relaxed max-w-[240px]">Specializing in the intersection of art and code, Elena brings complex interactive concepts to life through bleeding-edge web technologies.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          
          <div className="team-card-wrapper group relative h-[500px]" style={{perspective: "1000px", opacity: "1", transform: "translateY(0px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out"}}>
            
            <div className="team-card h-full w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg transition-all duration-500 ease-out overflow-hidden flex flex-col" style={{transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] z-0 transition-opacity duration-500"></div>
              <div className="relative h-full w-full overflow-hidden z-10">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDe1S0qmUx2LFGuK1LlScilKTQElJuJX6Amv1BHe5oGD5SZKNkIXmolJMlu7wyZE_kahxexFVOajU9HuQmovzK2FNwwx4pttd5lco7e2g2udS7qzduTKUyXMuDhBuii50hesox62N408rDP7cO2B_RKsFFyAu0aM2AXdMUSMV2KcCScWs2u_7EN4jYzg-0V4-PhGDyBuyA_Qq4-_WlSJuJaa7yw8LA7bYmDTDfdTtzE56ovdmpiSziL3Jvt1R9PgZWMPaBk2_LxwB4YgI" alt="Lead Engineer" className="team-image w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between transition-all duration-300">
                  <div className="mt-auto transform transition-all duration-500 ease-out group-hover:-translate-y-[340px]">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <h3 className="text-white text-headline-md font-bold">Julian Kross</h3>
                        <p className="font-mono text-[12px] tracking-widest uppercase text-primary">Lead Engineer</p>
                      </div>
                      <div className="flex gap-3 text-on-surface/50">
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                          </svg>
                        </a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                          </svg>
                        </a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 absolute bottom-8 left-8">
                    <p className="text-white text-[13px] leading-relaxed max-w-[240px]">Architecture specialist focused on scalable decentralized infrastructure and high-performance engineering for the next generation of the web.</p>
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
