import React, { useEffect } from "react";
import PortfolioCta from "../components/portfolio/PortfolioCta";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioProjects from "../components/portfolio/PortfolioProjects";
import FaqSection from "../components/sections/FaqSection";
import ContactSection from "../components/sections/ContactSection";
import SiteFooter from "../components/sections/SiteFooter";

export default function PortfolioPage({ isLoading }) {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-on-surface">
      <PortfolioHero isLoading={isLoading} />
      <PortfolioProjects />
      <PortfolioCta />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
