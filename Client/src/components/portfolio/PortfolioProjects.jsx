import React, { useState, useRef, useLayoutEffect } from "react";
import { ProjectCard } from "../sections/ProjectsSection";
import { PROJECTS } from "../../constants/projects";

const ALL_CATEGORY = "All Projects";
const PROJECTS_PER_PAGE = 6;
const USE_SAMPLE_DATA = true;
const SAMPLE_PROJECT_COUNT = 24;

const SAMPLE_PROJECTS =
  PROJECTS.length > 0
    ? Array.from(
        { length: SAMPLE_PROJECT_COUNT },
        (_, i) => PROJECTS[i % PROJECTS.length]
      )
    : [];

const ALL_PROJECTS = USE_SAMPLE_DATA ? SAMPLE_PROJECTS : PROJECTS;

function getPageItems(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const items = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) items.push("start-ellipsis");
  for (let page = start; page <= end; page += 1) items.push(page);
  if (end < total - 1) items.push("end-ellipsis");
  items.push(total);
  return items;
}

export default function PortfolioProjects() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    ALL_CATEGORY,
    ...new Set(ALL_PROJECTS.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === ALL_CATEGORY
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((project) => project.category === activeCategory);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  );
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );
  const rangeStart = filteredProjects.length === 0 ? 0 : startIndex + 1;
  const rangeEnd = startIndex + visibleProjects.length;
  const pageItems = getPageItems(safePage, totalPages);

  const filterRef = useRef(null);

  const selectCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const goToPage = (target) => {
    const next = Math.min(Math.max(target, 1), totalPages);
    if (next === safePage) return;
    setCurrentPage(next);
    filterRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const btnRefs = useRef({});
  const [thumb, setThumb] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    const measure = () => {
      const el = btnRefs.current[activeCategory];
      if (el) setThumb({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();

    if (!isFirstRender.current) {
      const el = btnRefs.current[activeCategory];
      const nav = navRef.current;
      if (el && nav) {
        const targetLeft =
          el.offsetLeft - nav.clientWidth / 2 + el.offsetWidth / 2;
        nav.scrollTo({
          left: Math.max(0, targetLeft),
          behavior: "smooth",
        });
      }
    } else {
      isFirstRender.current = false;
    }

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeCategory]);

  const raisedSurface =
    "border border-white/[0.07] bg-gradient-to-b from-[#34343a] to-[#232327] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.4),0_1px_1px_rgba(0,0,0,0.7),0_3px_6px_-1px_rgba(0,0,0,0.55)]";
  const focusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40";

  return (
    <section
      className="bg-black py-section-gap relative overflow-hidden flex flex-col px-margin-mobile md:px-margin-desktop text-left"
      id="projects"
      style={{ backgroundColor: "rgb(13, 13, 13)" }}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-[360px] opacity-25 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 20%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 20%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-20 w-full max-w-container-max mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-primary/60" />
            <span className="text-primary font-mono text-[10px] sm:text-[12px] tracking-[0.22em] sm:tracking-[0.38em] uppercase">
              Built, Not Promised
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.25em] text-white/40 uppercase">
            <span>INDEX // 01—04</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:inline text-white/60">2025 — 2026</span>
          </div>
        </div>

        <div className="relative py-1">
          <span
            aria-hidden="true"
            className="absolute -top-4 md:-top-7 -left-1 text-[clamp(3.25rem,12vw,7.75rem)] font-bold pointer-events-none select-none tracking-tighter leading-none z-0 bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent bg-clip-text text-transparent"
            style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
          >
            PROJECTS
          </span>

          <h2
            className="relative z-10 tracking-tighter leading-[1.02] select-none"
            style={{ fontFamily: '"Hanken Grotesk", sans-serif', textWrap: "balance" }}
          >
            <span className="block text-[clamp(2.25rem,1.2rem+4vw,4.125rem)] font-semibold text-white">
              Selected Works<span className="text-primary">.</span>
            </span>
          </h2>
        </div>

        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p
            className="max-w-xl text-[14px] md:text-[16px] leading-relaxed text-white/75"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            A curated archive of{" "}
            <span className="text-white font-medium">high-impact digital products</span>
            , engineered systems, and brand experiences delivered for visionary teams.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 shrink-0">
            <div className="flex flex-col text-right">
              <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
                Deliverables
              </span>
              <span
                className="text-white text-base md:text-lg font-medium tracking-tight"
                style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
              >
                04 Featured Builds
              </span>
            </div>

            <div className="h-7 w-[1px] bg-white/10" />

            <div className="flex items-center gap-3">
              <div className="h-[1px] w-14 md:w-20 bg-gradient-to-r from-transparent via-primary/60 to-primary" />
              <span className="font-mono text-[11px] text-primary tracking-widest uppercase">
                Scroll ↓
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={filterRef}
        className="relative z-20 mx-auto mt-10 w-full max-w-container-max scroll-mt-6"
      >
        <nav
          ref={navRef}
          aria-label="Filter projects by category"
          className="mx-auto w-fit max-w-full overflow-x-auto rounded-[14px] border border-white/[0.06] bg-black/50 p-1 shadow-[inset_0_2px_6px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.05)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="relative flex min-w-max items-center">
            {thumb.width > 0 && (
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-y-0 left-0 rounded-[10px] transition-[transform,width] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${raisedSurface}`}
                style={{
                  width: thumb.width,
                  transform: `translateX(${thumb.left}px)`,
                }}
              />
            )}

            {categories.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === ALL_CATEGORY
                  ? ALL_PROJECTS.length
                  : ALL_PROJECTS.filter((project) => project.category === category).length;

              return (
                <button
                  key={category}
                  ref={(el) => (btnRefs.current[category] = el)}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => selectCategory(category)}
                  className={`relative z-10 inline-flex items-center gap-2.5 rounded-[10px] px-4 py-2.5 text-xs transition-colors duration-200 sm:text-[13px] ${focusRing} ${
                    isActive ? "text-white" : "text-white/45 hover:text-white/80"
                  }`}
                >
                  <span className="whitespace-nowrap font-medium tracking-tight">
                    {category}
                  </span>
                  <span
                    className={`font-mono text-[10px] transition-colors duration-200 ${
                      isActive ? "text-white/50" : "text-white/20"
                    }`}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      <div className="max-w-container-max mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left relative z-20 md:items-start">
        {visibleProjects.map((project, index) => (
          <div
            key={`${activeCategory}-${safePage}-${startIndex + index}`}
            className="portfolio-project-enter"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Page switching"
          className="relative z-20 mx-auto mt-12 flex w-full max-w-container-max flex-col items-center gap-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage === 1}
              aria-label="Previous page"
              className={`inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-medium text-white/80 transition-colors duration-200 hover:text-white active:translate-y-px disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:text-white/80 disabled:active:translate-y-0 ${raisedSurface} ${focusRing}`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 3 5 8l5 5" />
              </svg>
              Previous
            </button>

            <ol className="flex items-center gap-1 rounded-[14px] border border-white/[0.06] bg-black/50 p-1 shadow-[inset_0_2px_6px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.05)]">
              {pageItems.map((item) => {
                if (typeof item === "string") {
                  return (
                    <li
                      key={item}
                      aria-hidden="true"
                      className="flex h-9 min-w-6 items-center justify-center px-1 font-mono text-[12px] text-white/25"
                    >
                      …
                    </li>
                  );
                }
                const isCurrent = item === safePage;
                return (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => goToPage(item)}
                      aria-label={`Page ${item}`}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`flex h-9 min-w-9 items-center justify-center rounded-[10px] px-3 font-mono text-[13px] transition-colors duration-200 ${focusRing} ${
                        isCurrent
                          ? `text-white ${raisedSurface}`
                          : "border border-transparent text-white/45 hover:text-white/85"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ol>

            <button
              type="button"
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage === totalPages}
              aria-label="Next page"
              className={`inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-medium text-white/80 transition-colors duration-200 hover:text-white active:translate-y-px disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:text-white/80 disabled:active:translate-y-0 ${raisedSurface} ${focusRing}`}
            >
              Next
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 3 5 5-5 5" />
              </svg>
            </button>
          </div>

          <p className="font-mono text-[11px] text-white/35" aria-live="polite">
            Showing {rangeStart}–{rangeEnd} of {filteredProjects.length}
          </p>
        </nav>
      )}
    </section>
  );
}
