"use client";

import { useEffect, useState, useRef } from "react";
import { Sparkles, Users, Building } from "lucide-react";

const buildList = [
  "Single AI Agents",
  "Multi-Agent Systems",
  "Voice AI Agents",
  "WhatsApp Automation Systems",
  "Lead Generation Systems",
  "Customer Support Automation",
  "Appointment Booking Systems",
  "CRM Automation",
  "Follow-Up Automation",
  "Custom Business Workflows",
  "AI Sales Systems",
  "AI Receptionists",
  "Enterprise Automation Solutions",
];

const agentsList = [
  "Lead Qualification",
  "Appointment Scheduling",
  "Customer Support",
  "Sales Automation",
  "Follow-Up Automation",
  "Quotation Generation",
  "Recruitment Automation",
  "Internal Operations",
  "WhatsApp Communication",
  "Voice Calling",
  "Review Collection",
  "Client Onboarding",
];

const industriesList = [
  "Real Estate",
  "Schools & Colleges",
  "Coaching Institutes",
  "Hospitals & Clinics",
  "Automobile Showrooms",
  "Manufacturers & Suppliers",
  "Travel & Tourism",
  "Hotels & Restaurants",
  "Gyms & Salons",
  "Construction Companies",
  "Interior Designers",
  "Digital Marketing Agencies",
  "E-commerce Businesses",
  "Finance & Insurance",
  "Service Businesses",
];

export function AdditionalServicesContent() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden bg-black text-white"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Block 1: What We Build */}
          <div
            className={`p-8 border border-white/10 bg-white/[0.01] backdrop-blur-md rounded-lg flex flex-col justify-between transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#eca8d6]/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#eca8d6]" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Capabilities</span>
              </div>
              <h3 className="text-3xl font-display mb-6">What We Build</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                At SimplyyGrow, we build intelligent AI systems that help businesses automate repetitive work, improve customer experience, increase response speed, and scale operations efficiently.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {buildList.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-white/10 pt-4 mt-8">
              <p className="text-xs font-mono text-[#eca8d6]">
                Every system is custom-built according to the client's business requirements.
              </p>
            </div>
          </div>

          {/* Block 2: Popular AI Agents */}
          <div
            className={`p-8 border border-white/10 bg-white/[0.01] backdrop-blur-md rounded-lg flex flex-col justify-between transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#eca8d6]/10 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#eca8d6]" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Use Cases</span>
              </div>
              <h3 className="text-3xl font-display mb-6">Popular AI Agents</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Our custom AI employees act as full-time digital team members to solve common administrative and commercial challenges.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {agentsList.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-white/10 pt-4 mt-8">
              <p className="text-xs font-mono text-[#eca8d6]">
                These agents can work independently or as part of a complete multi-agent ecosystem.
              </p>
            </div>
          </div>

          {/* Block 3: Industries We Serve */}
          <div
            className={`p-8 border border-white/10 bg-white/[0.01] backdrop-blur-md rounded-lg flex flex-col justify-between transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#eca8d6]/10 flex items-center justify-center shrink-0">
                  <Building className="w-4 h-4 text-[#eca8d6]" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Verticals</span>
              </div>
              <h3 className="text-3xl font-display mb-6">Industries We Serve</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                SimplyyGrow automation infrastructure is versatile and engineered to support specific workflows across multiple sectors.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {industriesList.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-white/10 pt-4 mt-8">
              <p className="text-xs font-mono text-[#eca8d6]">
                And any business that wants to automate operations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
