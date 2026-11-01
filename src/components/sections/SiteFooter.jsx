import React from "react";

export default function SiteFooter() {
  return (
    <footer className="relative pt-32 pb-16 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5 bg-surface-container-lowest" style={{fontFamily: "\"Hanken Grotesk\", sans-serif"}}>
      
      
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none z-0 pt-16 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <span className="text-[15vw] md:text-[22vw] font-bold tracking-tighter uppercase leading-none opacity-[0.03] text-white whitespace-nowrap bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent from-white/10 via-white/5">CODOX</span>
      </div>
      
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-20">
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDWclpyHfRyXLWpeA4eRsRCh_PFFHFxTzioJgWiQbX47IHvBot6WHgQpTYjZl5jZ2a0autUR9A_Vl-uo2GiDSFVl28SRSV4o-EB6heCfjwrs_iPshiq56vcERU860ryO9kepnsjIhpv5I621z6CziuOoOK_zaAB2U7anoWmq503lLLzLwFkzR8b27mP_U2zV2gp5kW1M132DneiGbtWyjavGJ3u1SUUElF0aJHOzSLwmy5W09HmGnYwy45L2UxkNbC4Q6GBjVcgmMd" alt="NxtAlpha Logo" className="h-8 w-auto" />
              <span className="text-white font-bold text-2xl tracking-tighter font-display-lg">Codox</span>
            </div>
            <p className="text-secondary/60 font-body-md leading-relaxed max-w-xs">Architecting the next generation of decentralized digital infrastructure.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300">
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h5 className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-display-lg">Products</h5>
            <ul className="space-y-3">
              <li className="">
                <a href="#" className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm font-body-md">Studio</a>
              </li>
              <li className="">
                <a href="#" className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm font-body-md">Clients</a>
              </li>
              <li className="">
                <a href="#" className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm font-body-md">Pricing</a>
              </li>
              <li className="">
                <a href="#" className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm font-body-md">Infrastructure</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h5 className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-display-lg">Company</h5>
            <ul className="space-y-3">
              <li className="">
                <a href="#" className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm font-body-md">About</a>
              </li>
              <li className="">
                <a href="#" className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm font-body-md">Careers</a>
              </li>
              <li className="">
                <a href="#" className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm font-body-md">Brand Assets</a>
              </li>
              <li className="">
                <a href="#" className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm font-body-md">Contact</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h5 className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-display-lg">Legal</h5>
            <ul className="space-y-3">
              <li className="">
                <a href="/privacy-policy" className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm font-body-md">Privacy Policy</a>
              </li>
              <li className="">
                <a href="#" className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm font-body-md">Terms of Service</a>
              </li>
              <li className="">
                <a href="#" className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm font-body-md">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/40 text-[11px] font-body-md">© 2024 Codox. All rights reserved.</p>
          <p className="text-secondary/40 text-[11px] font-body-md tracking-wide">Designed for the decentralized future</p>
        </div>
      </div>
      
    </footer>
  );
}
