import React from "react";

export default function LegalSection({ section, isLast = false, sectionNumber }) {
  const number = sectionNumber ?? section.title.match(/^(\d+)/)?.[1];
  const title = section.title.replace(/^\d+\.\s*/, "");

  return (
    <section
      id={number ? `privacy-section-${number}` : undefined}
      className={`scroll-mt-28 border-t border-white/[0.08] py-10 first:border-t-0 first:pt-0 md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 md:py-12 ${
        isLast ? "pb-12 md:pb-14" : ""
      }`}
    >
      <div className="mb-6 md:mb-0">
        <span className="mb-4 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/60">
          {String(number).padStart(2, "0")}
        </span>
        <h2 className="max-w-none md:max-w-[180px] text-[22px] font-semibold leading-[1.15] tracking-tight text-on-surface md:text-[24px]">
          {title}
        </h2>
      </div>
      <div className="max-w-2xl text-[15px] sm:text-base leading-7 text-secondary/75 md:text-[17px] md:leading-8">
        {section.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={
              section.items && index === section.paragraphs.length - 1
                ? "mb-6"
                : undefined
            }
          >
            {paragraph}
          </p>
        ))}
        {section.items && (
          <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-5">
            {section.items.map((item) => (
              <li
                key={item.label || item.text}
                className="grid grid-cols-[16px_minmax(0,1fr)] gap-3"
              >
                <span className="mt-[13px] h-px w-3 bg-primary/50" />
                <span>
                  {item.label && (
                    <strong className="font-semibold text-on-surface">
                      {item.label}{" "}
                    </strong>
                  )}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
