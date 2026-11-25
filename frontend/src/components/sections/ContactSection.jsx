import React from "react";
import { SectionBadge } from "../ui";
import { CONTACT_INFO, CONTACT_SOCIALS } from "../../constants/contact";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-section-gap px-margin-mobile md:px-margin-desktop bg-black overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="absolute inset-0 pointer-events-none flex justify-center overflow-hidden select-none z-0 items-start">
        <span className="text-[clamp(4.5rem,22vw,18.75rem)] font-bold tracking-tighter uppercase leading-none bg-gradient-to-b from-white/[0.03] to-transparent bg-clip-text text-transparent">
          CONTACT
        </span>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-5 sm:space-y-6">
            <SectionBadge label={CONTACT_INFO.badge} className="px-5" />
            <h2
              className="text-white font-bold leading-[1.08] tracking-tighter text-[clamp(2.35rem,1.25rem+4.5vw,4rem)]"
              style={{ textWrap: "balance" }}
            >
              {CONTACT_INFO.title}
            </h2>
            <p className="text-secondary/70 text-sm sm:text-base md:text-body-lg max-w-md">
              {CONTACT_INFO.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 relative z-10">
            <div
              className="group/connect relative overflow-hidden rounded-3xl border border-primary/20 bg-[#0a0a0a] backdrop-blur-2xl p-5 sm:p-7 md:p-8 transition-all hover:border-primary/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(173,198,255,0.15)] duration-500"
              style={{ animationDuration: "8s" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover/connect:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 122, 255, 0.2) 0%, transparent 70%)",
                }}
              />

              <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/connect:animate-[shimmer_2s_infinite]"
                  style={{ transform: "skewX(-20deg)" }}
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_15px_rgba(173,198,255,0.8)]" />
                    </span>
                  </div>
                  <h4 className="font-display-lg font-bold tracking-tight text-xl sm:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary/80">
                    {CONTACT_INFO.gridTitle}
                  </h4>
                </div>

                <p className="text-secondary/80 text-sm sm:text-body-md mb-6 sm:mb-8 md:mb-10 leading-relaxed tracking-wide">
                  {CONTACT_INFO.gridDescription}
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {CONTACT_SOCIALS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="group/icon relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)] hover:scale-[1.02]"
                    >
                      {social.type === "svg" ? (
                        <svg
                          className="w-6 h-6 text-secondary group-hover/icon:text-primary transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={social.path} />
                        </svg>
                      ) : (
                        <span className="material-symbols-outlined text-secondary group-hover/icon:text-primary transition-colors text-2xl">
                          {social.iconName}
                        </span>
                      )}
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3 group/address">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 group-hover/address:border-primary/30 group-hover/address:bg-primary/5">
                    <svg
                      className="w-5 h-5 text-primary/60 group-hover/address:text-primary transition-colors"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-secondary/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">
                      {CONTACT_INFO.headquarters.label}
                    </p>
                    <p className="text-on-surface/80 text-body-md font-medium tracking-tight">
                      {CONTACT_INFO.headquarters.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover/connect:bg-primary/25 transition-all duration-1000" />
            </div>
          </div>
        </div>

        <div className="relative">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12 shadow-2xl space-y-6 sm:space-y-8 transition-all duration-500 bg-[#0a0a0a] border border-primary/20 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)]"
          >
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-secondary/50 text-[10px] font-bold uppercase tracking-[0.3em] ml-1 block"
                >
                  Full Name
                </label>
                <div className="relative group/input">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter your name"
                    className="w-full min-h-[48px] bg-white/5 border border-white/10 p-3.5 sm:p-4 md:p-5 rounded-xl text-white placeholder:text-secondary/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-body-md text-base sm:text-lg hover:border-white/20 duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-secondary/50 text-[10px] font-bold uppercase tracking-[0.3em] ml-1 block"
                >
                  Email Address
                </label>
                <div className="relative group/input">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="your@email.com"
                    className="w-full min-h-[48px] bg-white/5 border border-white/10 p-3.5 sm:p-4 md:p-5 rounded-xl text-white placeholder:text-secondary/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-body-md text-base sm:text-lg hover:border-white/20 duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-secondary/50 text-[10px] font-bold uppercase tracking-[0.3em] ml-1 block"
                >
                  Message
                </label>
                <div className="relative group/input">
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    required
                    placeholder="How can we help you?"
                    className="w-full bg-white/5 border border-white/10 p-3.5 sm:p-4 md:p-5 rounded-xl text-white placeholder:text-secondary/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-body-md text-base sm:text-lg hover:border-white/20 duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full py-4 rounded-full font-display-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 bg-white text-surface hover:scale-105 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)] relative z-10 group/submit"
                style={{
                  boxShadow:
                    "rgba(255, 255, 255, 0.4) 0px 1px 1px inset, rgba(0, 0, 0, 0.2) 0px -1px 1px inset, rgba(173, 198, 255, 0.15) 0px 4px 12px",
                  background:
                    "linear-gradient(rgb(226, 226, 226) 0%, rgb(198, 198, 199) 100%)",
                }}
              >
                Submit Request
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover/submit:translate-x-1">
                  arrow_forward
                </span>
              </button>

              <p className="text-center text-secondary/60 text-[12px] font-body-md">
                By submitting, you agree to our{" "}
                <a href="#" className="underline hover:text-primary transition-colors">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  className="underline hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
