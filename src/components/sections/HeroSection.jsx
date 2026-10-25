import React from "react";
import Button from "../common/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      <header className="absolute top-0 left-0 w-full z-50 pt-8 px-margin-mobile md:px-margin-desktop bg-transparent">

        <nav className="max-w-container-max mx-auto flex items-center justify-between px-gutter rounded-full transition-all duration-300 backdrop-blur-xl bg-transparent py-2">

          <div className="flex-shrink-0">

            <a href="/" className="font-display-lg text-headline-md font-bold text-on-surface tracking-tight flex items-center gap-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDWclpyHfRyXLWpeA4eRsRCh_PFFHFxTzioJgWiQbX47IHvBot6WHgQpTYjZl5jZ2a0autUR9A_Vl-uo2GiDSFVl28SRSV4o-EB6heCfjwrs_iPshiq56vcERU860ryO9kepnsjIhpv5I621z6CziuOoOK_zaAB2U7anoWmq503lLLzLwFkzR8b27mP_U2zV2gp5kW1M132DneiGbtWyjavGJ3u1SUUElF0aJHOzSLwmy5W09HmGnYwy45L2UxkNbC4Q6GBjVcgmMd" alt="codox logo" className="h-12 w-auto object-cover" />
            </a>

          </div>

          <div className="hidden md:flex items-center glass-pill rounded-full bg-surface-container/40 backdrop-blur-xl border border-white/5 px-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 py-4" style={{ boxShadow: "rgba(255, 255, 255, 0.15) 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px -1px 1px inset, rgba(0, 0, 0, 0.6) 0px 4px 20px, rgba(255, 255, 255, 0.05) 0px 0px 12px inset" }}>
            <ul className="flex items-center space-x-1">
              <li className="">
                <a href="#services" className="px-5 py-2 font-body-md transition-all duration-300 tracking-tight cursor-pointer relative text-primary nav-link-active">Services</a>
              </li>
              <li className="">
                <a href="#projects" className="px-5 py-2 font-body-md transition-all duration-300 tracking-tight cursor-pointer relative text-secondary hover:text-primary hover:-translate-y-0.5">Work</a>
              </li>
              <li className="">
                <a href="#pricing" className="px-5 py-2 font-body-md transition-all duration-300 tracking-tight cursor-pointer relative text-secondary hover:text-primary hover:-translate-y-0.5">Pricing</a>
              </li>
              <li className="">
                <a href="#contact" className="px-5 py-2 font-body-md transition-all duration-300 tracking-tight cursor-pointer relative text-secondary hover:text-primary hover:-translate-y-0.5">Contact</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <Button href="#contact" className="bg-on-surface text-surface px-6 py-2.5 rounded-full font-body-md font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)]" style={{ boxShadow: "rgba(255, 255, 255, 0.4) 0px 1px 1px inset, rgba(0, 0, 0, 0.2) 0px -1px 1px inset, rgba(173, 198, 255, 0.15) 0px 4px 12px", background: "linear-gradient(rgb(226, 226, 226) 0%, rgb(198, 198, 199) 100%)" }}>
              Let's Chat
      
              <span className="material-symbols-outlined text-[18px]">north_east</span>

            </Button>
          </div>

        </nav>

      </header>


      <div className="absolute inset-0 z-0">

        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbrzyiHm_JvAy4xXk5Yhmh2uTVv2FcjQiuJh0NPVL1B16nf9v2PkXOte-dW-wnxeMT8oLA4Cbok5Lj-mVusjjvwZ2YZ6MSMCImVX41SnSmEv2uMHA_PVcjo7FndcS8YpBm7TlR_hx7aP5ItWadvxtO7Mr5Jv53ZQSzz1WW4OcmYufBnSudp2oS81ptYtabEavNLkIu1E1HOqRIp8GV874RbRR2w_HA2_mpTg6MMGAyPmKzCURJ2q86J6OjHkoM2jZgpV1f3Cb9sorNJiQ" alt="Aurora Blend Background" className="w-full h-full object-cover transition-opacity duration-700" />

      </div>


      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 border border-primary/20">

        <div className="absolute -top-3 -left-3 z-10 text-primary drop-shadow-[0_0_8px_rgba(173,198,255,0.6)]">

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">

            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>

            <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>

          </svg>

        </div>


        <div className="absolute -top-3 -right-3 z-10 text-primary drop-shadow-[0_0_8px_rgba(173,198,255,0.6)]">

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">

            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>

            <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>

          </svg>

        </div>


        <div className="absolute -bottom-3 -left-3 z-10 text-primary drop-shadow-[0_0_8px_rgba(173,198,255,0.6)]">

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">

            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>

            <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>

          </svg>

        </div>


        <div className="absolute -bottom-3 -right-3 z-10 text-primary drop-shadow-[0_0_8px_rgba(173,198,255,0.6)]">

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">

            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>

            <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>

          </svg>

        </div>


        <div className="flex justify-center mb-6">

          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/20 shadow-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] bg-surface-container/40 backdrop-blur-xl mt-8" style={{ boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px -1px 1px inset, rgba(0, 0, 0, 0.4) 0px 4px 20px" }}>

            <div className="flex items-center gap-2">

              <span className="relative flex h-2 w-2">

                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>

                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>

              </span>

            </div>

            <span className="text-on-surface font-medium text-[11px] tracking-[0.1em] uppercase" style={{ fontFamily: "Poppins, sans-serif" }}>Pioneering Next-Gen Digital Infrastructure</span>

          </div>

        </div>

        <div className="text-center mx-auto max-w-container-max mt-6">

          <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">

            <div className="absolute -translate-y-1/2 flex items-center gap-2 animate-bounce -left-3 top-1/2" style={{ animationDuration: "3s" }}>

              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]">

                <path d="M4 4L14.5 29.5L18.5 18.5L29.5 14.5L4 4Z" fill="#007aff" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>

              </svg>

              <div className="px-5 py-2 rounded-full bg-[#f97316]/90 text-white text-[13px] font-bold tracking-widest uppercase backdrop-blur-xl border-white/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_8px_24px_rgba(0,0,0,0.4)]" style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "rgba(0, 122, 255, 0.9)" }}>Agency</div>

            </div>


            <div className="absolute -top-3 right-24 flex items-center gap-2 animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>

              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">

                <path d="M4 4L14.5 29.5L18.5 18.5L29.5 14.5L4 4Z" fill="white" stroke="#e2e2e2" strokeWidth="1.5" strokeLinejoin="round"></path>

              </svg>

              <div className="px-5 py-2 rounded-full bg-surface-container/80 text-on-surface text-[13px] font-bold tracking-widest uppercase backdrop-blur-2xl border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.4)]" style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "rgb(31, 31, 31)", color: "rgb(226, 226, 226)", backdropFilter: "blur(24px)" }}>Expert</div>

            </div>


            <div className="absolute -bottom-8 right-48 flex items-center gap-2 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>

              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]">

                <path d="M4 4L14.5 29.5L18.5 18.5L29.5 14.5L4 4Z" fill="#6366f1" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>

              </svg>

              <div className="px-5 py-2 rounded-full bg-[#facc15]/90 text-black text-[13px] font-bold tracking-widest uppercase backdrop-blur-xl border-white/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_8px_24px_rgba(0,0,0,0.4)]" style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "rgb(99, 102, 241)", color: "white" }}>Innovate</div>

            </div>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[84px] text-on-surface tracking-tight mb-8 leading-tight" style={{ textShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px", fontFamily: "Poppins, sans-serif", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
            Building the next

            <span className="relative inline-block">

              <span className="italic font-medium text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-fixed-dim to-primary-container" style={{ fontFamily: "\"Playfair Display\", serif", marginLeft: "0.16em", paddingRight: "0.1em", paddingBottom: "0.15em", display: "inline-block" }}>generation</span>

              <span className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 bottom-1"></span>

            </span>

            <div className="mt-2">
              <span style={{ letterSpacing: "-0.025em", fontFamily: "Poppins, sans-serif" }} className="">of digital excellence</span>
            </div>

          </h1>

          <p className="mt-6 text-secondary font-body-md text-body-lg max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>Empowering the next generation of decentralized innovation with codox's premium design and engineering.</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

            <a href="#contact" className="bg-on-surface text-surface px-8 py-4 rounded-full font-body-md font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)]" style={{ boxShadow: "rgba(255, 255, 255, 0.4) 0px 1px 1px inset, rgba(0, 0, 0, 0.2) 0px -1px 1px inset, rgba(173, 198, 255, 0.15) 0px 4px 12px", background: "linear-gradient(rgb(226, 226, 226) 0%, rgb(198, 198, 199) 100%)", fontFamily: "Poppins, sans-serif" }}>
              Explore Services

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path>
                <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path>
              </svg>

            </a>

            <a href="#contact" className="px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2.5 transition-all duration-300 border border-white/10 text-on-surface backdrop-blur-xl bg-surface-container/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:bg-surface-container/60 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]" style={{ fontFamily: "Poppins, sans-serif" }}>

              <span className="material-symbols-outlined text-[20px]">event</span>
              Book Demo

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
