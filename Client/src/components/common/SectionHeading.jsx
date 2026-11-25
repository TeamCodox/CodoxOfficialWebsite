import React from "react";

/** Shared heading wrapper for future sections and content updates. */
export default function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-on-surface md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-secondary md:text-lg">{description}</p>}
    </div>
  );
}
