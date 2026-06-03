"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    subtitle: "Map your goals",
    description: "We analyze your current operations, identify manual bottlenecks, and map out the highest-impact AI automation opportunities.",
  },
  {
    number: "02",
    title: "AI Blueprint",
    subtitle: "Custom architecture",
    description: "We design a detailed technical blueprint outlining integrations, AI agent roles, data flows, and expected business ROI.",
  },
  {
    number: "03",
    title: "Development",
    subtitle: "Engineering your brain",
    description: "Our engineers build your custom CRM, connect APIs, program LLMs, and train voice agents specifically for your brand.",
  },
  {
    number: "04",
    title: "Deployment",
    subtitle: "Launch your workforce",
    description: "We deploy the system onto secure cloud infrastructure, integrate channels (WhatsApp, voice, etc.), and train your team.",
  },
  {
    number: "05",
    title: "Optimization",
    subtitle: "Continuous refinement",
    description: "We monitor agent logs, refine prompts, upgrade LLM models, and continuously scale output to maximize your business growth.",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[oklch(0.09_0.01_260)] text-white overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header — title + tree image */}
        <div className="relative mb-12 grid lg:grid-cols-2 gap-4 lg:gap-12 items-end">
          {/* Title column */}
          <div className="overflow-hidden pb-0 lg:pb-16">
            <div className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-8">
                <span className="w-12 h-px bg-white/20" />
                Our Process
              </span>
            </div>
            
            <h2 className={`text-5xl md:text-7xl lg:text-[80px] font-display tracking-tight leading-[0.85] transition-all duration-1000 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}>
              <span className="block">Blueprint.</span>
              <span className="block text-white/30">Build.</span>
              <span className="block text-white/10">Optimize.</span>
            </h2>
          </div>

          {/* Tree image */}
          <div className={`relative h-[240px] lg:h-[400px] overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png"
              alt="Tree of growth"
              className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom"
            />
            {/* Fade edge */}
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.09_0.01_260)] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`relative text-left p-6 lg:p-8 border transition-all duration-500 cursor-pointer ${
                activeStep === index 
                  ? "bg-[#000000] border-white/60" 
                  : "bg-[#000000] border-white/15 hover:border-white/40"
              }`}
            >
              {/* Step number with progress bar */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-2xl font-display transition-colors duration-300 ${
                  activeStep === index ? "text-[#eca8d6]" : "text-white/20"
                }`}>
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-white/10 overflow-hidden">
                  {activeStep === index && (
                    <div className="h-full bg-[#eca8d6]/50 animate-progress" />
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-display mb-1">
                {step.title}
              </h3>
              <span className="text-sm text-white/40 font-display block mb-4">
                {step.subtitle}
              </span>

              {/* Description */}
              <p className={`text-xs text-white/60 leading-relaxed transition-opacity duration-300 ${
                activeStep === index ? "opacity-100" : "opacity-60"
              }`}>
                {step.description}
              </p>

              {/* Active indicator line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#eca8d6] transition-transform duration-500 origin-left ${
                activeStep === index ? "scale-x-100" : "scale-x-0"
              }`} />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 6s linear forwards;
        }
      `}</style>
    </section>
  );
}
