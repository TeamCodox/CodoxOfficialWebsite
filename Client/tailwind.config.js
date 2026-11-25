import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed-variant": "#474746", "secondary-fixed": "#e2e2e2", secondary: "#c6c6c7",
        "surface-container": "#1f1f1f", primary: "#adc6ff", "on-primary": "#002e69", "primary-container": "#4b8eff",
        "on-secondary": "#2f3131", outline: "#8b90a0", "secondary-fixed-dim": "#c6c6c7", "primary-fixed": "#d8e2ff",
        "inverse-surface": "#e2e2e2", "surface-container-high": "#2a2a2a", "on-primary-fixed": "#001a41",
        tertiary: "#c8c6c5", "surface-variant": "#353535", "on-secondary-fixed": "#1a1c1c", "inverse-primary": "#005bc1",
        "surface-container-lowest": "#0e0e0e", "surface-tint": "#adc6ff", "on-error": "#690005", "surface-bright": "#393939",
        "on-secondary-fixed-variant": "#454747", "outline-variant": "#414755", "on-primary-container": "#00285c",
        "surface-dim": "#131313", "primary-fixed-dim": "#adc6ff", "on-surface-variant": "#c1c6d7",
        "secondary-container": "#454747", "on-tertiary-container": "#2a2a2a", "tertiary-fixed-dim": "#c8c6c5",
        "on-background": "#e2e2e2", "error-container": "#93000a", "on-surface": "#e2e2e2", "on-tertiary": "#313030",
        background: "#131313", "on-tertiary-fixed": "#1c1b1b", "surface-container-highest": "#353535",
        "surface-container-low": "#1b1b1b", "tertiary-container": "#929090", "tertiary-fixed": "#e5e2e1",
        "on-secondary-container": "#b4b5b5", surface: "#131313", "on-error-container": "#ffdad6", error: "#ffb4ab",
        "on-primary-fixed-variant": "#004493", "inverse-on-surface": "#303030"
      },
      borderRadius: { DEFAULT: "1rem", lg: "2rem", xl: "3rem", full: "9999px" },
      spacing: {
        unit: "8px",
        "margin-mobile": "clamp(1.125rem, 4vw, 2rem)",
        "section-gap": "clamp(4.25rem, 8vw, 7.5rem)",
        "margin-desktop": "clamp(1.75rem, 4.5vw, 4rem)",
        gutter: "24px",
        "container-max": "1280px"
      },
      fontFamily: { "display-lg": ["Hanken Grotesk", "sans-serif"], "body-md": ["Hanken Grotesk", "sans-serif"], "body-lg": ["Hanken Grotesk", "sans-serif"], "headline-lg": ["Hanken Grotesk", "sans-serif"], "label-sm": ["Geist", "sans-serif"], "headline-md": ["Hanken Grotesk", "sans-serif"], "label-md": ["Geist", "sans-serif"], "display-lg-mobile": ["Hanken Grotesk", "sans-serif"] },
      fontSize: { "display-lg": ["72px", { lineHeight: "80px", letterSpacing: "-0.04em", fontWeight: "700" }], "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }], "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }], "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "600" }], "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }], "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }], "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "500" }], "display-lg-mobile": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }] }
    }
  },
  plugins: [forms]
};
