import React, { useEffect } from "react";
import useSiteInteractions from "./hooks/useSiteInteractions";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import TeamSection from "./components/sections/TeamSection";
import PricingSection from "./components/sections/PricingSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import WorkflowSection from "./components/sections/WorkflowSection";
import FaqSection from "./components/sections/FaqSection";
import ContactSection from "./components/sections/ContactSection";
import SiteFooter from "./components/sections/SiteFooter";
import PortfolioPage from "./pages/PortfolioPage";
import "./styles/index.css";

export default function App() {
  useSiteInteractions();

  // Ensure hash links (for example /#pricing from the portfolio page)
  // scroll after the homepage sections have mounted.
  useEffect(() => {
    const scrollToHashTarget = () => {
      const targetId = window.location.hash.slice(1);
      if (!targetId) return;
      document.getElementById(decodeURIComponent(targetId))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    // Run after React has committed the page to the DOM.
    requestAnimationFrame(scrollToHashTarget);
  }, []);

  if (window.location.pathname.replace(/\/$/, "") === "/portfolio") {
    return <PortfolioPage />;
  }

  return (
    <main className="min-h-screen bg-black text-on-surface">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <PricingSection />
      <TestimonialsSection />
      <WorkflowSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
