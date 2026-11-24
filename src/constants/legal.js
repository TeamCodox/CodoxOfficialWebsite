/**
 * Legal Documentation Constants (Privacy Policy).
 */

export const LEGAL_PAGE_METADATA = {
  eyebrow: "Legal Documentation",
  title: "Privacy Policy",
  version: "Version 2.1",
  lastUpdated: "Last Updated: May 24, 2024",
};

export const PRIVACY_POLICY_SECTIONS = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Welcome to Codox. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.",
    ],
  },
  {
    title: "2. Data Collection",
    paragraphs: [
      "We collect information that you provide directly to us, as well as information collected automatically through your use of our services:",
    ],
    items: [
      {
        label: "Personal Information:",
        text: "Name, email address, and contact details provided via forms.",
      },
      {
        label: "Usage Data:",
        text: "IP address, browser type, and interaction patterns on our site.",
      },
      {
        label: "Device Information:",
        text: "Operating system and hardware model.",
      },
    ],
  },
  {
    title: "3. How We Use Your Data",
    paragraphs: ["Your data helps us provide and improve our services. Specifically, we use it to:"],
    items: [
      { text: "Personalize your experience and respond to individual needs." },
      {
        text: "Improve our website based on the information and feedback we receive.",
      },
      {
        text: "Send periodic emails regarding your inquiries or other products and services.",
      },
    ],
  },
  {
    title: "4. Cookies",
    paragraphs: [
      "We use cookies to enhance your experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser that enables the site's systems to recognize your browser and capture certain information.",
    ],
  },
  {
    title: "5. Third-Party Sharing",
    paragraphs: [
      "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, so long as those parties agree to keep this information confidential.",
    ],
  },
  {
    title: "6. Security",
    paragraphs: [
      "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
];

export const PRIVACY_CONTACT = {
  heading: "7. Contact Information",
  introduction:
    "If you have any questions regarding this Privacy Policy, you may contact us using the information below:",
  team: "Codox Legal Team",
  emailLabel: "Email",
  email: "privacy@codox.design",
  officeLabel: "Office",
  officeLines: ["123 Design Street,", "Creative Suite 101"],
};
