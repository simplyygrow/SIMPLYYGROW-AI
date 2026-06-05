"use client";

import { useEffect, useState, useRef } from "react";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic Plan",
    subtitle: "For businesses looking for a ready-to-use AI Agent.",
    features: [
      "Single AI Agent",
      "Initial Setup",
      "Deployment",
      "Basic Customization",
      "Documentation",
      "Ownership Transfer",
    ],
    note: "Once delivered, the system belongs to the client. Future API costs, hosting costs, maintenance, upgrades, and modifications are managed by the client.",
    bestFor: "Startups, Small Businesses, Agencies",
    highlight: false,
  },
  {
    name: "Premium Plan",
    subtitle: "For businesses looking for managed AI automation.",
    features: [
      "Single AI Agent",
      "Complete Setup",
      "Ongoing Monitoring",
      "Maintenance Support",
      "Bug Fixes",
      "Performance Optimization",
      "Technical Assistance",
    ],
    note: "Monthly API and infrastructure costs apply. SimplyyGrow manages the technical side while you focus on your business.",
    bestFor: "Growing Businesses",
    highlight: true,
  },
  {
    name: "Premium Plus Plan",
    subtitle: "Complete AI Workforce Solution",
    features: [
      "Multi-Agent Systems",
      "Voice AI Agents",
      "WhatsApp Automation",
      "CRM Integrations",
      "Custom Dashboards",
      "Advanced Workflows",
      "Dedicated Support",
      "Continuous Improvements",
      "Enterprise-Level Automation",
    ],
    note: "Everything is built around your business process. No templates. No limitations. Completely custom.",
    bestFor: "Enterprises, Real Estate, Schools, Hospitals, Large Businesses",
    highlight: false,
  },
];

export function NewPricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing-options" ref={sectionRef} className="relative py-32 lg:py-40 bg-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-12 h-px bg-foreground/30" />
              Pricing & Plans
            </span>
            <h2 className={`text-5xl md:text-7xl lg:text-[80px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Choose The Right AI Solution
              <br />
              <span className="text-muted-foreground">For Your Business.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mt-6">
              Whether you need a single AI employee or a complete AI workforce, we have a solution designed to fit your scale and operations.
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch relative z-10">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-background border flex flex-col justify-between transition-all duration-700 ${
                plan.highlight 
                  ? "border-foreground lg:scale-105 lg:z-10 shadow-2xl shadow-white/[0.02]" 
                  : "border-foreground/10"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Highlight badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-8 right-8 flex justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-1 bg-white text-black text-[10px] font-mono uppercase tracking-widest font-semibold">
                    <Star className="w-3 h-3 fill-black" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 lg:p-10 flex-1 flex flex-col justify-between">
                <div>
                  {/* Plan header */}
                  <div className="mb-8 pb-8 border-b border-foreground/10">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-3xl font-display mt-2 text-white">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{plan.subtitle}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#eca8d6] mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important Notes */}
                <div className="border-t border-foreground/10 pt-6 mt-auto">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block mb-2">Notice:</span>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed mb-6 italic">{plan.note}</p>
                  
                  <div className="bg-foreground/[0.02] border border-foreground/5 p-4 rounded mb-8">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block mb-1">Best For:</span>
                    <span className="text-xs text-white font-medium">{plan.bestFor}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-0 lg:p-10 lg:pt-0">
                <a href="#contact" className="w-full block">
                  <Button
                    className={`w-full py-6 flex items-center justify-center gap-2 text-sm font-semibold rounded-none transition-all group cursor-pointer ${
                      plan.highlight
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-white/20 text-white hover:bg-white/5"
                    }`}
                  >
                    Select Plan
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
