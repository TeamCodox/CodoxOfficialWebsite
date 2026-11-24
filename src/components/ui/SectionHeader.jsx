import React from "react";
import SectionBadge from "./SectionBadge";
import SectionTitle from "./SectionTitle";

/**
 * SectionHeader
 * Full recurring section header layout supporting both the two-column split variant
 * (with left badge/title + right border-l description) and centered layout variant.
 */
export default function SectionHeader({
  badge,
  titlePrefix,
  titleHighlight,
  titleSuffix = "",
  subtitleEyebrow,
  subtitleDescription,
  centered = false,
  titleSize = "normal",
  className = "",
  children,
}) {
  if (centered) {
    return (
      <div
        className={`relative z-10 mx-auto mb-10 flex max-w-container-max flex-col items-center text-center sm:mb-12 md:mb-16 ${className}`}
      >
        {badge && <SectionBadge label={badge} className="mb-4 sm:mb-5" />}
        <SectionTitle
          prefix={titlePrefix}
          highlight={titleHighlight}
          suffix={titleSuffix}
          size={titleSize}
          className="mb-4 sm:mb-5"
        />
        {subtitleDescription && (
          <p
            className="relative z-20 max-w-2xl text-sm leading-relaxed text-secondary/80 md:text-base"
            style={{ textWrap: "pretty" }}
          >
            {subtitleDescription}
          </p>
        )}
        {children}
      </div>
    );
  }

  return (
    <div className={`mb-10 sm:mb-12 md:mb-16 ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 lg:gap-12">
        <div className="min-w-0 flex-1">
          {badge && <SectionBadge label={badge} className="mb-4 sm:mb-5" />}
          <SectionTitle
            prefix={titlePrefix}
            highlight={titleHighlight}
            suffix={titleSuffix}
            size={titleSize}
          />
        </div>

        {(subtitleEyebrow || subtitleDescription) && (
          <div className="flex w-full md:w-[clamp(260px,36%,420px)] shrink-0 flex-col items-start border-l border-primary/30 pl-4 sm:pl-5 md:mb-1 md:pl-6">
            {subtitleEyebrow && (
              <p className="mb-1.5 sm:mb-2 text-primary/80 text-[10px] font-semibold tracking-[0.18em] uppercase">
                {subtitleEyebrow}
              </p>
            )}
            {subtitleDescription && (
              <p
                className="text-secondary/85 font-body-md text-sm md:text-base leading-relaxed"
                style={{ textWrap: "pretty" }}
              >
                {subtitleDescription}
              </p>
            )}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
