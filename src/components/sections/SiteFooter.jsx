import React from "react";
import { FOOTER_SECTIONS, FOOTER_SOCIAL_LINKS } from "../../constants/navigation";

export default function SiteFooter() {
  return (
    <footer
      className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5 bg-surface-container-lowest"
      style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
    >
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none z-0 pt-12 sm:pt-16 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <span className="text-[clamp(4rem,18vw,20rem)] font-bold tracking-tighter uppercase leading-none opacity-[0.03] text-white whitespace-nowrap bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent from-white/10 via-white/5">
          CODOX
        </span>
      </div>

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 mb-14 sm:mb-20 md:mb-24">
          <div className="md:col-span-5 space-y-6 sm:space-y-8 md:space-y-9">
            <div className="flex items-center gap-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDWclpyHfRyXLWpeA4eRsRCh_PFFHFxTzioJgWiQbX47IHvBot6WHgQpTYjZl5jZ2a0autUR9A_Vl-uo2GiDSFVl28SRSV4o-EB6heCfjwrs_iPshiq56vcERU860ryO9kepnsjIhpv5I621z6CziuOoOK_zaAB2U7anoWmq503lLLzLwFkzR8b27mP_U2zV2gp5kW1M132DneiGbtWyjavGJ3u1SUUElF0aJHOzSLwmy5W09HmGnYwy45L2UxkNbC4Q6GBjVcgmMd"
                alt="Codox Logo"
                className="h-10 w-auto"
              />
              <span className="text-white font-bold text-3xl tracking-tighter font-display-lg">
                Codox
              </span>
            </div>

            <p className="text-secondary/60 font-body-md text-base md:text-lg leading-relaxed max-w-sm">
              Architecting the next generation of decentralized digital infrastructure.
            </p>

            <div className="flex gap-5">
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  {social.type === "svg" ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  ) : (
                    <span className="material-symbols-outlined text-[24px]">
                      {social.iconName}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:contents">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="md:col-span-2 space-y-5 md:space-y-7">
                <h5 className="text-white/40 text-xs font-bold uppercase tracking-widest font-display-lg">
                  {section.title}
                </h5>
                <ul className="space-y-3 md:space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-secondary/70 hover:text-primary transition-colors duration-300 text-sm sm:text-base font-body-md"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/40 text-xs md:text-sm font-body-md">
            © {new Date().getFullYear()} Codox. All rights reserved.
          </p>
          <p className="text-secondary/40 text-xs md:text-sm font-body-md tracking-wide">
            Designed for the decentralized future
          </p>
        </div>
      </div>
    </footer>
  );
}
