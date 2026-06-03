import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <Navigation />
      <HeroSection />
      <FeaturesSection /> {/* SERVICES SECTION: Everything Your Business Needs To Run On AI */}
      <SecuritySection /> {/* PROBLEM SECTION: Your Team Is Doing Work AI Should Handle */}
      <InfrastructureSection /> {/* WHY SIMPLYYGROW SECTION: Why Businesses Choose SimplyyGrow */}
      <TestimonialsSection /> {/* CASE STUDIES SECTION: 4 premium project cards */}
      <HowItWorksSection /> {/* PROCESS SECTION: How We Build Your AI System */}
      <MetricsSection /> {/* STATS SECTION: 25+ AI Systems Delivered, etc. */}
      <IntegrationsSection /> {/* API Integrations */}
      <PricingSection /> {/* BOOK STRATEGY CALL SECTION */}
      <FooterSection />
    </main>
  );
}
