import React from "react";

/**
 * CheckIcon
 * Glowing circular primary checkmark used in pricing feature lists.
 */
export default function CheckIcon({ className = "" }) {
  return (
    <div
      className={`flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_rgba(173,198,255,0.2)] group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all duration-300 ${className}`}
    >
      <svg
        className="w-3 h-3 text-primary"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5L4.5 8.5L11 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
