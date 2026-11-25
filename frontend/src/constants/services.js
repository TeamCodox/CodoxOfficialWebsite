import {
  Code2,
  LayoutDashboard,
  PencilRuler,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";

/**
 * Primary Services displayed on the Homepage Bento Grid.
 */
export const SERVICES = [
  {
    slug: "web-development",
    number: "01",
    colSpan: "lg:col-span-7",
    icon: Code2,
    code: "// services.web()",
    title: "Web Development",
    description:
      "Fast, accessible websites and web apps built to turn great ideas into lasting digital experiences.",
  },
  {
    slug: "mobile-development",
    number: "02",
    colSpan: "lg:col-span-5",
    icon: Smartphone,
    code: "// services.mobile()",
    title: "Mobile Development",
    description:
      "Intuitive iOS and Android apps that feel right at home in your customers' hands.",
  },
  {
    slug: "ui-ux-design",
    number: "03",
    colSpan: "lg:col-span-5",
    icon: PencilRuler,
    code: "// services.ui()",
    title: "UI/UX Design",
    description:
      "Thoughtful, research-led interfaces that make every interaction clear, useful, and enjoyable.",
  },
  {
    slug: "admin-panel-development",
    number: "04",
    colSpan: "lg:col-span-7",
    icon: LayoutDashboard,
    code: "// services.backend()",
    title: "Admin Panel Dev",
    description:
      "Powerful dashboards that bring your workflows, data, and day-to-day operations together.",
  },
  {
    slug: "seo-services",
    number: "05",
    colSpan: "lg:col-span-6",
    icon: Search,
    code: "// services.seo()",
    title: "SEO Services",
    description:
      "Technical SEO and content strategy to help the right people find you and choose you.",
  },
  {
    slug: "brand-identity",
    number: "06",
    colSpan: "lg:col-span-6",
    icon: Sparkles,
    code: "// services.branding()",
    title: "Brand Identity",
    description:
      "Crafting iconic visual languages that resonate across the evolving digital landscape.",
  },
];

/**
 * Service Stack Mapping for Detail Pages.
 */
export const SERVICE_STACK_KEYS = {
  "web-development": "webDevelopment",
  "mobile-development": "mobileDevelopment",
  "ui-ux-design": "uiUxDesign",
  "admin-panel-development": "adminPanelDev",
  "seo-services": "seoServices",
  "brand-identity": "brandIdentity",
};

/**
 * Detailed service content for individual service detail pages.
 */
export const SERVICE_CONTENT = {
  "web-development": {
    title1: "Web",
    title2: "Development",
    intro:
      "Clean code meets robust infrastructure. We build scalable products while eliminating technical debt.",
    eyebrow: "Core Service Offering",
    mainlabel: "Performance First",
    main: "High-Performance<br/>Web Engineering",
    maincopy:
      "We craft lightning-fast, secure, and SEO-optimized web applications using Next.js and TypeScript. Our architecture is built for speed and conversion.",
    label2: "Scalability",
    title2b: "Scalable<br/>Architecture",
    copy2:
      "Clean code meets robust infrastructure. We ensure your product scales seamlessly while eliminating technical debt. Our systems are built for growth.",
    label3: "Technical Excellence",
    title3: "Technical<br/>Excellence",
    copy3:
      "Next-Gen Infrastructure engineered for the future. We deliver pixel-perfect precision and industry-leading core web vitals for every project.",
  },
  "mobile-development": {
    title1: "Mobile",
    title2: "Development",
    intro:
      "We build mobile experiences that help people use your product with confidence, wherever they are.",
    eyebrow: "Core Service Offering",
    mainlabel: "Mobile First",
    main: "Mobile Applications<br/>Built for People",
    maincopy:
      "We create intuitive, responsive mobile applications with clear navigation, dependable performance, and useful features across modern devices.",
    label2: "User Experience",
    title2b: "Intuitive<br/>Interactions",
    copy2:
      "Thoughtful screen flows, familiar mobile patterns, and accessible interfaces make everyday tasks easier for your users.",
    label3: "Reliable Delivery",
    title3: "Secure &<br/>Connected",
    copy3:
      "We connect your app to the services it needs while focusing on data protection, stable integrations, and a smooth release process.",
  },
  "ui-ux-design": {
    title1: "UI/UX",
    title2: "Design",
    intro:
      "We turn complex ideas into clear, thoughtful interfaces that help people move through your product with ease.",
    eyebrow: "Product Design",
    mainlabel: "People First",
    main: "Thoughtful UI/UX<br/>Design Systems",
    maincopy:
      "We shape useful digital experiences through user research, clear information structure, and interfaces that connect user needs with business goals.",
    label2: "User Research",
    title2b: "Understand<br/>Your Users",
    copy2:
      "We explore user goals, tasks, and pain points to guide design decisions with evidence and a clear purpose.",
    label3: "Interface Systems",
    title3: "Consistent<br/>Experiences",
    copy3:
      "Reusable components, visual rules, and responsive layouts create a coherent experience across screens and devices.",
  },
  "admin-panel-development": {
    title1: "Admin Panel",
    title2: "Development",
    intro:
      "We build secure, practical admin panels that bring important data, workflows, and controls into one clear workspace.",
    eyebrow: "Business Tools",
    mainlabel: "Operational Clarity",
    main: "Powerful Admin<br/>Panel Development",
    maincopy:
      "We create dashboards and management tools that make business data easier to understand and daily operations easier to run.",
    label2: "Access Control",
    title2b: "Role-Based<br/>Permissions",
    copy2:
      "Structured roles and permissions help teams manage information and actions with the right level of access.",
    label3: "Data Workflows",
    title3: "Clear Data<br/>Management",
    copy3:
      "Dashboards, filters, and well-planned workflows make important information easier to find, review, and act on.",
  },
  "seo-services": {
    title1: "SEO",
    title2: "Services",
    intro:
      "We improve the structure, content, and technical health of your website so the right people can discover your business.",
    eyebrow: "Search Visibility",
    mainlabel: "Search Ready",
    main: "Technical SEO<br/>& Visibility",
    maincopy:
      "We strengthen your website foundations through technical reviews, useful content structure, and improvements that help search engines understand your pages.",
    label2: "Technical SEO",
    title2b: "Healthy Site<br/>Foundations",
    copy2:
      "We review crawlability, indexing, site structure, page speed, and technical issues that can affect discovery.",
    label3: "Content Strategy",
    title3: "Useful<br/>Content",
    copy3:
      "We organize pages around relevant topics, clear answers, and useful connections between your website content.",
  },
  "brand-identity": {
    title1: "Brand",
    title2: "Identity",
    intro:
      "We shape visual identity systems that help your business look consistent, feel recognizable, and communicate with purpose.",
    eyebrow: "Visual Identity",
    mainlabel: "Distinctive by Design",
    main: "Brand Identity<br/>& Direction",
    maincopy:
      "We bring together visual direction, typography, color, and practical brand rules to create a recognizable identity your team can use consistently.",
    label2: "Brand Direction",
    title2b: "Find Your<br/>Point of View",
    copy2:
      "We clarify your audience, positioning, and personality to guide the identity in a meaningful direction.",
    label3: "Visual System",
    title3: "Consistent<br/>Recognition",
    copy3:
      "Logo, color, typography, and graphic elements work together as one flexible visual language across touchpoints.",
  },
};
