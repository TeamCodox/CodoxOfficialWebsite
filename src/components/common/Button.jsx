import React from "react";

/** Reusable link-style button used for calls to action. */
export default function Button({ href = "#contact", children, className = "", ...props }) {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}
