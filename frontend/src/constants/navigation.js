/**
 * Navigation and Link Constants
 * Central source of truth for header and footer navigation structures.
 */

export const NAV_ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#testimonials", label: "Clients" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const FOOTER_SECTIONS = [
  {
    title: "Products",
    links: [
      { label: "Studio", href: "/#services" },
      { label: "Clients", href: "/#testimonials" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Infrastructure", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#team" },
      { label: "Careers", href: "/#contact" },
      { label: "Brand Assets", href: "/portfolio" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export const FOOTER_SOCIAL_LINKS = [
  {
    name: "X",
    href: "https://x.com",
    type: "svg",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    type: "svg",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    type: "icon",
    iconName: "photo_camera",
  },
];
