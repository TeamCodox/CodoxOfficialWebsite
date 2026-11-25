/**
 * Transparent Pricing Plans and Tiers.
 */
export const PRICING_PLANS = [
  {
    number: "01",
    currency: "₹",
    price: "5,000",
    plus: true,
    period: "/ Project",
    title: "Beginner",
    description:
      "Perfect for small businesses and startups looking to explore AI capabilities.",
    featuresLabel: "Core Features",
    features: [
      "Basic Predictive Analytics",
      "Automated Workflows",
      "Standard NLP",
      "Real-Time Data Analysis",
    ],
    highlighted: false,
    badge: null,
    getStartedHref: "#contact",
    examplesHref: "#projects",
  },
  {
    number: "02",
    currency: "₹",
    price: "15,000",
    plus: false,
    period: "/ project",
    title: "Professional",
    description:
      "Ideal for growing businesses that need more advanced tools to enhance productivity.",
    featuresLabel: "Advanced Features",
    features: [
      "Advanced Predictive Analytics",
      "Automated Workflows",
      "Enhanced NLP",
      "Priority Email Support",
    ],
    highlighted: true,
    badge: "Most Common",
    getStartedHref: "#contact",
    examplesHref: "#projects",
  },
  {
    number: "03",
    currency: "",
    price: "Quote",
    plus: false,
    period: "/ bespoke",
    title: "Enterprise",
    description:
      "Designed for enterprises requiring comprehensive AI solutions.",
    featuresLabel: "Full Suite",
    features: [
      "Comprehensive Analytics",
      "Premium NLP",
      "Fully Customizable Dashboards",
      "24/7 Dedicated Support",
    ],
    highlighted: false,
    badge: null,
    getStartedHref: "#contact",
    examplesHref: "#projects",
  },
];
