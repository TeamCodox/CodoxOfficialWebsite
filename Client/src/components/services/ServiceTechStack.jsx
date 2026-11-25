import React, { useMemo, useState } from "react";
import {
  Activity,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Laptop,
  Palette,
  PanelsTopLeft,
  PenTool,
  Search,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { TECH_STACK } from "../../constants/techstack";
import { SectionHeader } from "../ui";

const SERVICES = [
  { key: "webDevelopment" },
  { key: "mobileDevelopment" },
  { key: "uiUxDesign" },
  { key: "adminPanelDev" },
  { key: "seoServices" },
  { key: "brandIdentity" },
];

const GROUPS = [
  {
    key: "frontend",
    label: "Frontend",
    blurb: "The languages, frameworks, and tools used to build the user-facing experience.",
    icon: PanelsTopLeft,
    span: "md:col-span-2 lg:col-span-6",
  },
  {
    key: "backend",
    label: "Backend",
    blurb: "Server-side languages and frameworks that power application logic.",
    icon: Server,
    span: "md:col-span-2 lg:col-span-6",
  },
  {
    key: "programmingLanguages",
    label: "Programming languages",
    blurb: "Languages used to build and maintain the service.",
    icon: Code2,
    span: "lg:col-span-4",
  },
  {
    key: "webTechnologies",
    label: "Web technologies",
    blurb: "Core technologies used to build for the web.",
    icon: Globe,
    span: "lg:col-span-4",
  },
  {
    key: "frameworksAndLibraries",
    label: "Frameworks & libraries",
    blurb: "Frameworks and libraries selected for this service.",
    icon: Layers,
    span: "lg:col-span-4",
  },
  {
    key: "databases",
    label: "Databases",
    blurb: "Data stores used to support reliable applications.",
    icon: Database,
    span: "lg:col-span-4",
  },
  {
    key: "cloudAndDeployment",
    label: "Cloud & deployment",
    blurb: "Platforms for hosting, deployment, and connected services.",
    icon: Cloud,
    span: "lg:col-span-4",
  },
  {
    key: "versionControl",
    label: "Version control",
    blurb: "Tools for managing and collaborating on source code.",
    icon: GitBranch,
    span: "lg:col-span-4",
  },
  {
    key: "ciCdDevOps",
    label: "CI/CD & DevOps",
    blurb: "Automation tools for delivering software reliably.",
    icon: Workflow,
    span: "lg:col-span-4",
  },
  {
    key: "codeQualityAndSecurity",
    label: "Code quality & security",
    blurb: "Tools that help improve code quality and application security.",
    icon: ShieldCheck,
    span: "lg:col-span-4",
  },
  {
    key: "monitoringAndObservability",
    label: "Monitoring & observability",
    blurb: "Tools for understanding application health and behavior.",
    icon: Activity,
    span: "lg:col-span-4",
  },
  {
    key: "idesAndEditors",
    label: "IDEs & editors",
    blurb: "Developer environments used to build and maintain applications.",
    icon: Laptop,
    span: "lg:col-span-4",
  },
  {
    key: "creativeAndPlanning",
    label: "Design & planning",
    blurb: "Tools and methods for research, design, and prototyping.",
    icon: PenTool,
    span: "lg:col-span-6",
  },
  {
    key: "seoAndAnalytics",
    label: "Search & analytics",
    blurb: "Tools for improving search visibility and measuring performance.",
    icon: Search,
    span: "lg:col-span-6",
  },
  {
    key: "creativeAndDesign",
    label: "Creative & design",
    blurb: "Tools and foundations for creating a consistent visual identity.",
    icon: Palette,
    span: "lg:col-span-6",
  },
];

const CARD_SHADOW =
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.09),inset_0_0_0_1px_rgba(255,255,255,0.04),inset_0_-18px_32px_-20px_rgba(0,0,0,0.55),0_18px_40px_-20px_rgba(0,0,0,0.85)]";
const WELL_SHADOW =
  "shadow-[inset_0_2px_7px_rgba(0,0,0,0.85),inset_0_0_0_1px_rgba(255,255,255,0.06),0_1px_0_rgba(255,255,255,0.04)]";
const WELL_SHADOW_HOVER =
  "group-hover/chip:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_0_0_1px_rgba(255,255,255,0.16),0_14px_24px_-8px_rgba(0,0,0,0.9)] group-focus-visible/chip:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_0_0_1px_rgba(255,255,255,0.16),0_14px_24px_-8px_rgba(0,0,0,0.9)]";
const ICON_WELL_SHADOW =
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-6px_12px_rgba(0,0,0,0.65),0_6px_14px_-6px_rgba(0,0,0,0.85)]";

const normalizeTech = (tech) => (typeof tech === "string" ? { name: tech } : tech);

const uniqueByName = (list) => {
  const seen = new Set();
  return list.filter(({ name }) => !seen.has(name) && seen.add(name));
};

const getServiceGroups = (service = {}) =>
  GROUPS.map((group) => ({
    ...group,
    items: uniqueByName((service[group.key] ?? []).map(normalizeTech)),
  })).filter((group) => group.items.length > 0);

const getInitials = (name) =>
  name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase();

const trackPointer = (event) => {
  const { left, top } = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - top}px`);
};

function TechLogo({ tech }) {
  const [imgError, setImgError] = useState(false);
  const Icon = tech.icon;

  if (tech.image && !imgError) {
    return (
      <img
        src={tech.image}
        alt=""
        loading="lazy"
        draggable={false}
        onError={() => setImgError(true)}
        className="h-8 w-8 object-contain opacity-95 transition-all duration-300 group-hover/chip:scale-110 group-hover/chip:opacity-100"
      />
    );
  }

  if (Icon) {
    return (
      <Icon
        strokeWidth={1.6}
        className="h-7 w-7 text-neutral-400 transition-colors duration-300 group-hover/chip:text-white"
      />
    );
  }

  return (
    <span className="select-none text-sm font-bold tracking-tight text-neutral-300">
      {getInitials(tech.name)}
    </span>
  );
}

function TechChip({ tech }) {
  return (
    <div
      tabIndex={0}
      aria-label={tech.name}
      className="group/chip relative rounded-2xl outline-none"
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-[#070707] transition-all duration-300 group-hover/chip:-translate-y-1 group-hover/chip:bg-[#161616] group-focus-visible/chip:-translate-y-1 group-focus-visible/chip:bg-[#161616] ${WELL_SHADOW} ${WELL_SHADOW_HOVER}`}
      >
        <TechLogo tech={tech} />
      </div>

      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3.5 -translate-x-1/2 translate-y-1.5 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.8)] transition-all duration-200 group-hover/chip:translate-y-0 group-hover/chip:opacity-100 group-focus-visible/chip:translate-y-0 group-focus-visible/chip:opacity-100"
      >
        {tech.name}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-white"
        />
      </span>
    </div>
  );
}

function BentoTile({ group }) {
  const Icon = group.icon;

  return (
    <article
      onMouseMove={trackPointer}
      className={`group/tile relative z-0 rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#131313] via-[#0b0b0b] to-[#060606] p-5 sm:p-6 hover:z-20 md:p-8 ${CARD_SHADOW} ${group.span}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]"
      >
        <div
          className="absolute -bottom-8 -right-6 h-56 w-56"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.35) 55%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.35) 55%, transparent 95%)",
          }}
        >
          <Icon
            strokeWidth={1}
            className="h-full w-full -rotate-12 text-white opacity-[0.05] transition-all duration-500 group-hover/tile:-rotate-6 group-hover/tile:opacity-[0.08]"
          />
        </div>

        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/tile:opacity-100"
          style={{
            background:
              "radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgba(255,255,255,0.06), transparent 70%)",
          }}
        />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <div className="relative">
        <header className="mb-6 sm:mb-7 flex flex-wrap sm:flex-nowrap items-start justify-between gap-3 sm:gap-4">
          <div className="flex items-start gap-3 sm:gap-4 min-w-0">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-[#222222] to-[#0f0f0f] text-white ${ICON_WELL_SHADOW}`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {group.label}
              </h3>
              <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-neutral-400">
                {group.blurb}
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-neutral-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.07)]">
            {group.items.length} tools
          </span>
        </header>

        <div className="flex flex-wrap gap-3.5">
          {group.items.map((tech) => (
            <TechChip key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ServiceTechStack({
  stack = TECH_STACK,
  services = SERVICES,
  serviceKey,
  title = "Technical",
  highlightedTitle = "expertise",
  eyebrow = "tech ecosystem",
  description = "A battle-tested stack architected for speed, modular longevity, and effortless high-scale growth.",
}) {
  const tiles = useMemo(
    () =>
      services
        .filter((service) => !serviceKey || service.key === serviceKey)
        .flatMap((service) =>
          getServiceGroups(stack[service.key]).map((group) => ({
            ...group,
            serviceKey: service.key,
          }))
        ),
    [stack, services, serviceKey]
  );

  const totalTools = useMemo(
    () => new Set(tiles.flatMap((group) => group.items.map((tech) => tech.name))).size,
    [tiles]
  );

  return (
    <section className="relative overflow-hidden bg-[#000000] px-margin-mobile py-20 md:px-margin-desktop md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-[480px] w-[min(500px,90vw)] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1.4px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 0%, rgba(0, 0, 0, 0.4) 60%, transparent 90%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-container-max">
        <SectionHeader
          badge={eyebrow}
          titlePrefix={title}
          titleHighlight={highlightedTitle}
          subtitleEyebrow="Built to scale without limits"
          subtitleDescription={description}
        >
          <div className="hidden">
            <span className="ml-1 rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold text-primary">
              {totalTools}+ Tools
            </span>
          </div>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {tiles.map((group) => (
            <BentoTile key={`${group.serviceKey}-${group.key}`} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
