import React, { useState } from "react";
import { SectionHeader } from "../ui";
import { TEAM_MEMBERS } from "../../constants/team";

const SOCIAL_ICONS = [
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: (
      <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    key: "github",
    label: "GitHub",
    icon: (
      <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    key: "website",
    label: "Website",
    icon: (
      <svg
        className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function TeamSection() {
  const [activeMemberId, setActiveMemberId] = useState(null);

  const toggleMember = (id) => {
    setActiveMemberId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-black px-margin-mobile py-16 sm:py-20 md:px-margin-desktop md:py-28"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Layered Neutral Dark Radial Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-black">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(18, 18, 21, 0.5) 0%, rgba(8, 8, 10, 0.88) 45%, rgba(0, 0, 0, 1) 78%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 68% 48% at 50% 24%, rgba(255, 255, 255, 0.035) 0%, rgba(28, 28, 32, 0.18) 38%, rgba(0, 0, 0, 0) 72%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 45% at 50% 68%, rgba(24, 24, 28, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black via-black/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/75 to-transparent" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto">
        <SectionHeader
          badge="behind the scenes"
          titlePrefix="Meet Our"
          titleHighlight="Team Members"
          subtitleEyebrow="People behind the work"
          subtitleDescription="We are a collective of developers, designers, and strategists obsessed with crafting high-fidelity digital solutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TEAM_MEMBERS.map((member) => {
            const isRevealed = activeMemberId === member.id;

            return (
              <div
                key={member.id}
                className="team-card-wrapper group relative sm:last:col-span-2 sm:last:w-full sm:last:max-w-[calc(50%-0.75rem)] sm:last:justify-self-center lg:last:col-span-1 lg:last:max-w-none"
                style={{
                  perspective: "1000px",
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                }}
              >
                <div
                  className="team-card relative aspect-[4/5] min-h-[360px] sm:min-h-[390px] max-h-[460px] w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 ease-out overflow-hidden flex flex-col"
                  style={{
                    transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] z-0 transition-opacity duration-500" />

                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    className={`team-image absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
                      isRevealed
                        ? "opacity-15"
                        : "opacity-100 group-hover:opacity-15 group-focus-within:opacity-15"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 ${
                      isRevealed
                        ? "opacity-95"
                        : "opacity-85 group-hover:opacity-95 group-focus-within:opacity-95"
                    }`}
                  />

                  <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => toggleMember(member.id)}
                        aria-expanded={isRevealed}
                        aria-label={isRevealed ? `Hide bio for ${member.name}` : `View bio for ${member.name}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[11px] font-medium text-white/85 backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary lg:opacity-80 lg:group-hover:opacity-100"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{isRevealed ? "Photo" : "Bio"}</span>
                      </button>

                      <div className="flex gap-2.5 text-on-surface/75">
                        {SOCIAL_ICONS.map(({ key, label, icon }) =>
                          member.socials[key] ? (
                            <a
                              key={key}
                              href={member.socials[key]}
                              aria-label={`${member.name} ${label}`}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/45 backdrop-blur-md hover:border-primary/40 hover:text-primary transition-colors duration-300"
                            >
                              {icon}
                            </a>
                          ) : null
                        )}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isRevealed
                            ? "max-h-44 opacity-100 mb-4"
                            : "max-h-0 opacity-0 group-hover:max-h-44 group-hover:opacity-100 group-hover:mb-4 group-focus-within:max-h-44 group-focus-within:opacity-100 group-focus-within:mb-4"
                        }`}
                      >
                        <p className="text-white/90 text-[13px] sm:text-sm leading-relaxed">
                          {member.bio}
                        </p>
                      </div>

                      <div className="border-t border-white/10 pt-3.5">
                        <h3 className="text-white text-xl sm:text-headline-md font-bold leading-tight">
                          {member.name}
                        </h3>
                        <p className="mt-1 font-mono italic text-[11px] sm:text-[12px] tracking-widest uppercase text-primary">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
