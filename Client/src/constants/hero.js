/**
 * Hero Section configuration and constants.
 */

export const CORNER_POSITIONS = [
  "-top-2.5 -left-2.5",
  "-top-2.5 -right-2.5",
  "-bottom-2.5 -left-2.5",
  "-bottom-2.5 -right-2.5",
];

export const FRAME_EDGES = [
  [{ x: 0, y: 0 }, { x: 100, y: 0 }],
  [{ x: 100, y: 0 }, { x: 100, y: 100 }],
  [{ x: 100, y: 100 }, { x: 0, y: 100 }],
  [{ x: 0, y: 100 }, { x: 0, y: 0 }],
];

export const FRAME_EDGE_NORMALS = [
  { x: 0, y: 1 },
  { x: -1, y: 0 },
  { x: 0, y: -1 },
  { x: 1, y: 0 },
];

export const FRAME_CORNER_GAP = 0.08;
export const MAX_HOVER_PULL = 38;
export const MAX_STRETCH = 72;

export const CURSOR_LABELS = [
  {
    className: "hidden lg:flex -left-4 top-1/2 -translate-y-1/2",
    label: "Agency",
    duration: "3s",
    cursorFill: "#007aff",
    cursorStroke: "white",
    labelStyle: { fontFamily: "Poppins, sans-serif", backgroundColor: "rgba(0, 122, 255, 0.9)" },
  },
  {
    className: "hidden md:flex -top-5 right-6 lg:right-20",
    label: "Expert",
    duration: "4s",
    delay: "0.5s",
    cursorFill: "white",
    cursorStroke: "#e2e2e2",
    labelClassName: "bg-surface-container/80 text-on-surface",
    labelStyle: {
      fontFamily: "Poppins, sans-serif",
      backgroundColor: "rgb(31, 31, 31)",
      color: "rgb(226, 226, 226)",
      backdropFilter: "blur(24px)",
    },
  },
  {
    className: "hidden md:flex -bottom-5 right-8 lg:right-40",
    label: "Innovate",
    duration: "3.5s",
    delay: "1s",
    cursorFill: "#6366f1",
    cursorStroke: "white",
    labelClassName: "bg-[#facc15]/90 text-black",
    labelStyle: {
      fontFamily: "Poppins, sans-serif",
      backgroundColor: "rgb(99, 102, 241)",
      color: "white",
    },
  },
];

export const HERO_ACTIONS = [
  {
    href: "#services",
    label: "Explore Services",
    className:
      "w-full sm:w-auto justify-center bg-on-surface text-surface px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] rounded-full font-body-md font-bold flex items-center gap-2 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(173,198,255,0.4)]",
    style: {
      boxShadow:
        "rgba(255, 255, 255, 0.4) 0px 1px 1px inset, rgba(0, 0, 0, 0.2) 0px -1px 1px inset, rgba(173, 198, 255, 0.15) 0px 4px 12px",
      background: "linear-gradient(rgb(226, 226, 226) 0%, rgb(198, 198, 199) 100%)",
      fontFamily: "Poppins, sans-serif",
    },
    icon: "rocket",
  },
  {
    href: "#contact",
    label: "Book Demo",
    className:
      "w-full sm:w-auto justify-center px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] rounded-full font-bold flex items-center gap-2 transition-all duration-300 border border-white/10 text-on-surface backdrop-blur-xl bg-surface-container/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:bg-surface-container/60 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]",
    style: { fontFamily: "Poppins, sans-serif" },
    icon: "event",
  },
];
