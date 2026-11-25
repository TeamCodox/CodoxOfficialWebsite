import React from "react";

/**
 * Button
 * Universal Action Button / Link component supporting primary gradient, glass secondary, and custom styles.
 */
export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  style = {},
  icon,
  iconPosition = "right",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-body-md font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

  const variantStyles = {
    primary: {
      classes:
        "rounded-full bg-on-surface text-surface px-5 py-2.5 text-[15px] hover:scale-105 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)]",
      style: {
        boxShadow:
          "rgba(255, 255, 255, 0.4) 0px 1px 1px inset, rgba(0, 0, 0, 0.2) 0px -1px 1px inset, rgba(173, 198, 255, 0.15) 0px 4px 12px",
        background:
          "linear-gradient(rgb(226, 226, 226) 0%, rgb(198, 198, 199) 100%)",
      },
    },
    secondary: {
      classes:
        "rounded-full border border-white/10 bg-surface-container/40 text-on-surface px-5 py-2.5 text-[15px] backdrop-blur-xl hover:bg-surface-container/60 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]",
      style: {
        boxShadow:
          "rgba(255, 255, 255, 0.1) 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px -1px 1px inset",
      },
    },
    ghost: {
      classes:
        "rounded-full border border-white/10 bg-white/[0.035] px-5 py-2.5 text-sm text-secondary/80 hover:border-white/25 hover:bg-white/[0.07] hover:text-white",
      style: {},
    },
    raw: {
      classes: "",
      style: {},
    },
  };

  const currentVariant = variantStyles[variant] || variantStyles.raw;
  const mergedClasses = `${baseClasses} ${currentVariant.classes} ${className}`.trim();
  const mergedStyles = { ...currentVariant.style, ...style };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-1.5">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-1.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={mergedClasses} style={mergedStyles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={mergedClasses} style={mergedStyles} {...props}>
      {content}
    </button>
  );
}
