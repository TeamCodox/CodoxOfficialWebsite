import React from "react";
import SiteFooter from "../components/sections/SiteFooter";
import ServiceDetailHero from "../components/services/ServiceDetailHero";
import ServiceFeatureGrid from "../components/services/ServiceFeatureGrid";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceTechStack from "../components/services/ServiceTechStack";
import { SERVICE_CONTENT, SERVICE_STACK_KEYS } from "../constants/services";
import FaqSection from "../components/sections/FaqSection";
import ContactSection from "../components/sections/ContactSection";

export default function ServiceDetailPage({ slug, isLoading }) {
  const service = SERVICE_CONTENT[slug];

  if (!service) {
    return (
      <main className="min-h-screen bg-black px-6 py-32 text-center text-on-surface">
        <h1 className="mb-4 text-4xl">Service not found</h1>
        <a className="text-primary hover:underline" href="/#services">
          Back to services
        </a>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-black text-on-surface">
      <ServiceDetailHero service={service} isLoading={isLoading} />
      <ServiceFeatureGrid service={service} />
      <ServiceProcess />
      <ServiceTechStack serviceKey={SERVICE_STACK_KEYS[slug]} />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
