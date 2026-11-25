import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../ui";
import { PROJECTS } from "../../constants/projects";

export { PROJECTS };

export function ProjectCard({ project }) {
  const { number, title, category, code, image, imagePosition, description, tags } =
    project;

  return (
    <div
      className="project-card-wrapper group relative h-full"
      style={{ perspective: "1800px" }}
    >
      <article
        className="project-card relative isolate flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c0c0c]/95 p-4 sm:p-5 lg:p-6 backdrop-blur-xl transition-all duration-500 ease-out group-hover:border-white/20 group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
        style={{
          transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transformStyle: "preserve-3d",
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-4 -right-1 sm:-bottom-5 sm:-right-2 z-0 select-none text-[clamp(5rem,10vw,8.25rem)] font-bold leading-none tracking-tighter"
          style={{
            color: "rgba(255, 255, 255, 0.02)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
          }}
        >
          {number}
        </span>

        <div
          className="project-spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.03) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 flex h-full flex-col">
          <div className="relative mb-4 sm:mb-5 aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-[#050505]">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="project-image h-full w-full object-cover brightness-[0.95] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-100"
              style={{
                objectPosition: imagePosition,
                transform: "translate(0px, 0px) scale(1)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

            <span className="absolute right-2.5 top-2.5 sm:right-3.5 sm:top-3.5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/10 bg-black/65 text-white backdrop-blur-xl transition-all duration-500 group-hover:border-primary/35 group-hover:bg-primary/15 group-hover:text-primary">
              <ArrowUpRight
                aria-hidden="true"
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="font-mono italic text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.3em] text-primary whitespace-nowrap">
              {code}
            </span>
            <div className="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-[10px] font-medium text-secondary/50 whitespace-nowrap">{category}</span>
          </div>

          <div className="mt-auto pt-3.5 sm:pt-4">
            <h3 className="mb-2 sm:mb-2.5 text-lg sm:text-xl font-bold tracking-tight text-white/95 md:text-2xl">
              {title}
            </h3>
            <p className="max-w-lg text-sm leading-6 sm:leading-7 text-secondary/70 md:text-[15px]">
              {description}
            </p>
            <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 sm:px-3.5 sm:py-1.5 text-[10px] font-medium text-secondary/75 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#080808] px-margin-mobile pt-14 pb-16 sm:pt-16 sm:pb-20 md:px-margin-desktop md:pt-20 md:pb-24"
      style={{ fontFamily: "Poppins, sans-serif" }}
      id="projects"
    >
      {/* Radial fading dot pattern background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, #000 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, #000 25%, transparent 100%)",
        }}
      />

      {/* Subtle ambient depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(173, 198, 255, 0.025), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-container-max">
        <SectionHeader
          badge="selected work"
          titlePrefix="Case Studies"
          titleHighlight="& Projects"
          subtitleEyebrow="Built, not promised"
          subtitleDescription="A closer look at digital products and brand experiences built to make a lasting impact."
        />

        <div className="relative z-10 grid auto-rows-fr grid-cols-1 gap-5 text-left md:grid-cols-2 md:gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        <div className="relative z-10 mt-12 flex flex-col items-center sm:mt-14 md:mt-16">
          <div className="flex w-full items-center justify-center gap-4 sm:gap-6">
            <div
              aria-hidden="true"
              className="hidden h-px max-w-[140px] flex-grow bg-gradient-to-r from-transparent to-white/10 sm:block"
            />

            <a
              href="/portfolio"
              className="group/view-more relative inline-flex max-w-full items-center gap-3 sm:gap-4 overflow-hidden rounded-full border border-white/10 bg-[#0d0d0d] py-2 sm:py-2.5 pl-5 sm:pl-7 pr-2 sm:pr-2.5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-[#121212]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60 transition-opacity duration-500 group-hover/view-more:via-primary/60 group-hover/view-more:opacity-100"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(173,198,255,0.12),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover/view-more:opacity-100"
              />

              <span className="relative z-10 flex items-center gap-2.5">
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary/70 transition-colors duration-300 group-hover/view-more:text-primary">
                  04+
                </span>
                <span className="text-sm font-semibold tracking-tight text-white/90 transition-colors duration-300 group-hover/view-more:text-white md:text-[15px]">
                  Explore All Projects
                </span>
              </span>

              <span className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] text-white/85 transition-all duration-500 group-hover/view-more:border-primary/40 group-hover/view-more:bg-primary group-hover/view-more:text-[#080808]">
                <ArrowRight
                  aria-hidden="true"
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-500 ease-out group-hover/view-more:translate-x-7"
                />
                <ArrowUpRight
                  aria-hidden="true"
                  size={17}
                  strokeWidth={2.2}
                  className="absolute -translate-x-7 translate-y-7 transition-transform duration-500 ease-out group-hover/view-more:translate-x-0 group-hover/view-more:translate-y-0"
                />
              </span>
            </a>

            <div
              aria-hidden="true"
              className="hidden h-px max-w-[140px] flex-grow bg-gradient-to-l from-transparent to-white/10 sm:block"
            />
          </div>

          <span className="mt-3.5 font-mono text-[10px] uppercase tracking-[0.22em] text-secondary/40">
            Full Archive &bull; 2023 &mdash; 2026
          </span>
        </div>
      </div>
    </section>
  );
}
