"use client";

import { useEffect, useState, useRef } from "react";

const benefits = [
  { 
    name: "Bespoke Engineering", 
    points: ["Custom-Built Solutions", "Zero Templates Used"],
    description: "Every AI employee and CRM system we build is custom-tailored to your exact business workflow and goals.",
    status: "bespoke"
  },
  { 
    name: "Full Lifecycle Development", 
    points: ["End-To-End Development", "24/7 Support"],
    description: "We handle everything from strategy and API integrations to deployment, maintenance, and ongoing optimizations.",
    status: "managed"
  },
  { 
    name: "Enterprise Architecture", 
    points: ["Enterprise-Level Design", "Scalable Infrastructure"],
    description: "Built on robust cloud architectures like AWS to ensure secure data handling, redundancy, and peak volumes.",
    status: "secure"
  },
  { 
    name: "High ROI Velocity", 
    points: ["Fast Deployment", "Business-Focused ROI"],
    description: "We focus on quick turnarounds that yield immediate, measurable gains in automation efficiency and lead conversion.",
    status: "roi-focused"
  },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeBenefit, setActiveBenefit] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Why Choose Us
          </span>
          
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-stretch">
            {/* Image globe */}
            <div className={`w-48 lg:w-72 xl:w-80 shrink-0 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png"
                alt="Global network sphere"
                className="w-full h-full object-contain object-center animate-[spin_60s_linear_infinite]"
              />
            </div>

            {/* Title + description */}
            <div className="flex flex-col justify-center">
              <h2 className={`text-5xl md:text-7xl lg:text-[90px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                Why Businesses
                <br />
                <span className="text-muted-foreground">Choose SimplyyGrow.</span>
              </h2>

              <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
                We build the custom systems that bridge your tools, automate manual tasks, and deploy human-like AI agents, backed by robust enterprise architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large stat card */}
          <div className={`lg:col-span-2 relative p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02] overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Animated dots background with connecting lines */}
            <div className="absolute inset-0 opacity-40">
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: "none" }}
              >
                <defs>
                  <style>{`
                    @keyframes drawLine {
                      0%   { stroke-dashoffset: 1000; opacity: 0; }
                      15%  { opacity: 1; }
                      70%  { opacity: 0.7; }
                      100% { stroke-dashoffset: 0; opacity: 0; }
                    }
                    .connecting-line {
                      stroke: #eca8d6;
                      stroke-width: 1.2;
                      fill: none;
                      stroke-dasharray: 1000;
                      animation: drawLine 3s ease-in-out infinite;
                    }
                  `}</style>
                </defs>
                {[...Array(19)].map((_, i) => {
                  const x1 = 10 + (i % 5) * 20;
                  const y1 = 10 + Math.floor(i / 5) * 25;
                  const x2 = 10 + ((i + 1) % 5) * 20;
                  const y2 = 10 + Math.floor((i + 1) / 5) * 25;
                  return (
                    <line
                      key={`line-${i}`}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      className="connecting-line"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  );
                })}
              </svg>

              {/* Dots */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#eca8d6]"
                  style={{
                    left: `${10 + (i % 5) * 20}%`,
                    top: `${10 + Math.floor(i / 5) * 25}%`,
                    animation: `pulse 2s ease-in-out ${i * 0.1}s infinite`,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Our Standard</span>
                <div className="flex items-baseline gap-2 mt-4 mb-4">
                  <span className="text-6xl lg:text-8xl font-display leading-none">100%</span>
                  <span className="text-xl text-muted-foreground">Custom Architecture</span>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md">
                No templates or cookie-cutter solutions. We build secure, customized codebase integrations built precisely around your operational flows.
              </p>
            </div>
          </div>

          {/* Stacked stat cards */}
          <div className="flex flex-col gap-6">
            <div className={`p-8 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 delay-100 flex flex-col justify-between h-1/2 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <div>
                <span className="text-4xl lg:text-5xl font-display">24/7/365</span>
                <span className="block text-xs font-mono text-muted-foreground mt-2 uppercase tracking-wider">Dedicated Support</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Active monitoring and optimization updates for all client channels.</p>
            </div>
            
            <div className={`p-8 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 delay-200 flex flex-col justify-between h-1/2 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <div>
                <span className="text-4xl lg:text-5xl font-display">99.9%</span>
                <span className="block text-xs font-mono text-muted-foreground mt-2 uppercase tracking-wider">System Uptime SLA</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Hosted on high-redundancy, scalable cloud hosting networks.</p>
            </div>
          </div>
        </div>

        {/* Benefit list */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          {benefits.map((benefit, index) => (
            <div
              key={benefit.name}
              className={`p-6 border transition-all duration-300 cursor-default flex flex-col justify-between ${
                activeBenefit === index 
                  ? "border-foreground/30 bg-foreground/[0.04]" 
                  : "border-foreground/10"
              }`}
              onMouseEnter={() => setActiveBenefit(index)}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full transition-colors ${
                    activeBenefit === index ? "bg-[#eca8d6]" : "bg-foreground/20"
                  }`} />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    {benefit.status}
                  </span>
                </div>
                <span className="font-semibold block mb-2 text-lg font-display">{benefit.name}</span>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{benefit.description}</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-foreground/10 pt-3 mt-auto">
                {benefit.points.map((pt) => (
                  <span key={pt} className="text-[11px] font-mono text-[#eca8d6]">✓ {pt}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
