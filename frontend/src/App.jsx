import React, { useCallback, useEffect, useState } from "react";
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
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import LoadingBar from "./components/ui/LoadingBar";
import { LoadingProvider } from "./context/LoadingContext";
import "./styles/index.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );
  useSiteInteractions(currentPath);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Synchronize route on browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const nextPath = window.location.pathname;
      setCurrentPath((previousPath) => {
        if (previousPath !== nextPath) {
          setIsLoading(true);
        }
        return nextPath;
      });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Ensure hash links (e.g. /#pricing from the portfolio page) scroll smoothly after mount, or reset scroll on route change
  useEffect(() => {
    const scrollToHashTarget = () => {
      const targetId = window.location.hash.slice(1);
      if (!targetId) {
        window.scrollTo(0, 0);
        return;
      }
      document.getElementById(decodeURIComponent(targetId))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    requestAnimationFrame(scrollToHashTarget);
  }, [currentPath]);

  const normalizedPath = currentPath.replace(/\/$/, "");

  const renderContent = () => {
    if (normalizedPath === "/privacy-policy") {
      return <PrivacyPolicyPage />;
    }

    if (normalizedPath === "/portfolio") {
      return <PortfolioPage isLoading={isLoading} />;
    }

    const serviceMatch = currentPath.match(/^\/services\/([^/]+)\/?$/);
    if (serviceMatch) {
      return <ServiceDetailPage slug={serviceMatch[1]} isLoading={isLoading} />;
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
  };

  return (
    <LoadingProvider isLoading={isLoading}>
      {isLoading && <LoadingBar onComplete={handleLoadingComplete} />}
      {renderContent()}
    </LoadingProvider>
  );
}
