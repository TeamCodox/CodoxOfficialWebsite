import React from "react";
import LegalContent from "../components/legal/components/LegalContent";
import LegalHero from "../components/legal/components/LegalHero";
import SiteFooter from "../components/sections/SiteFooter";

export default function PrivacyPolicyPage() {
  return (
    <main
      className="min-h-screen bg-black text-on-surface"
      style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
    >
      <LegalHero />
      <LegalContent />
      <SiteFooter />
    </main>
  );
}
