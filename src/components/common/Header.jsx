import React, { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { NAV_ITEMS } from "../../constants/navigation";
import logoIMG from "../../assets/logo.png";

/**
 * Header
 * Global navigation header with glass pill navigation, scroll elevation,
 * quick contact action, and an accessible mobile navigation drawer.
 */
export default function Header({ position = "fixed" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerId = useId();
  const menuButtonRef = useRef(null);
  const containerRef = useRef(null);

  const positionClassName =
    position === "fixed" ? "fixed top-0 left-0" : "absolute top-0 left-0";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const resolveHref = (href) => (position === "fixed" ? href : `/${href}`);
  const contactHref = resolveHref("#contact");

  return (
    <header
      ref={containerRef}
      className={`${positionClassName} w-full z-50 pt-3 sm:pt-4 md:pt-5 px-margin-mobile md:px-margin-desktop bg-transparent pointer-events-none`}
    >
      <nav
        aria-label="Primary navigation"
        className={`max-w-container-max mx-auto flex items-center justify-between gap-2 sm:gap-4 px-3.5 sm:px-5 lg:px-6 rounded-full transition-all duration-300 backdrop-blur-md bg-surface/40 shadow-[0_4px_24px_rgba(0,0,0,0.25)] py-1.5 sm:py-2 pointer-events-auto border ${
          scrolled
            ? "nav-scrolled border-white/10 bg-[#131313]/85"
            : "border-white/[0.06]"
        }`}
      >
        <div className="flex-shrink-0">
          <a
            href="/"
            aria-label="Codox home"
            className="font-display-lg text-headline-md font-bold text-on-surface tracking-tight flex items-center"
          >
            <img
              src={logoIMG}
              alt="Codox logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </a>
        </div>

        <div
          className="hidden md:flex items-center glass-pill rounded-full bg-surface-container/40 backdrop-blur-xl border border-white/5 px-2.5 lg:px-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 py-2 lg:py-2.5"
          style={{
            boxShadow:
              "rgba(255, 255, 255, 0.15) 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px -1px 1px inset, rgba(0, 0, 0, 0.6) 0px 4px 20px, rgba(255, 255, 255, 0.05) 0px 0px 12px inset",
          }}
        >
          <ul className="flex items-center space-x-0.5 lg:space-x-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={resolveHref(item.href)}
                  className={`px-2.5 lg:px-4 py-1.5 text-[13.5px] lg:text-[15px] font-body-md transition-all duration-300 tracking-tight cursor-pointer relative whitespace-nowrap ${
                    item.active
                      ? "text-primary nav-link-active"
                      : "text-secondary hover:text-primary hover:-translate-y-0.5"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Button
            href={contactHref}
            variant="primary"
            className="!px-3.5 !py-2 sm:!px-4 sm:!py-2.5 lg:!px-5 text-[13px] sm:text-[14px] lg:text-[15px] whitespace-nowrap"
            icon={
              <span className="material-symbols-outlined text-[15px] sm:text-[16px]">
                north_east
              </span>
            }
            iconPosition="right"
          >
            Let&apos;s Chat
          </Button>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={drawerId}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-on-surface transition-colors duration-200 hover:border-primary/40 hover:bg-white/10 active:scale-95"
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        id={drawerId}
        hidden={!menuOpen}
        className={`md:hidden pointer-events-auto mx-auto mt-2.5 max-w-container-max overflow-hidden rounded-3xl border border-white/15 bg-[#111113]/95 p-4 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.75)] transition-all duration-200 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="grid grid-cols-1 gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={resolveHref(item.href)}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center justify-between rounded-2xl px-4 py-2.5 text-[15px] font-medium text-on-surface/90 transition-colors hover:bg-white/[0.06] hover:text-primary"
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[16px] text-secondary/50">
                  arrow_forward
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="/portfolio"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] items-center justify-between rounded-2xl px-4 py-2.5 text-[15px] font-medium text-primary transition-colors hover:bg-primary/10"
            >
              <span>All Projects</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
