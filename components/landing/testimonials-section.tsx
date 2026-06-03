"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    quote: "We engineered an autonomous multi-channel campaign engine that pulls prospect data, drafts customized value propositions, and routes qualified leads directly to the sales pipeline.",
    author: "AI Lead Generation System",
    role: "B2B Outreach System",
    company: "System 01",
    metric: { value: "5000+", label: "Leads Processed Monthly" },
  },
  {
    quote: "An intelligent WhatsApp agent trained on product data that qualifies incoming website traffic, answers technical questions, and books demo slots automatically 24/7.",
    author: "WhatsApp AI Sales Agent",
    role: "Conversational Commerce",
    company: "System 02",
    metric: { value: "62%", label: "Lead Conversion Increase" },
  },
  {
    quote: "A custom CRM infrastructure connecting ads, call logs, and WhatsApp, which triggers immediate follow-ups and synchronizes pipelines dynamically with live visual dashboards.",
    author: "CRM Automation Platform",
    role: "Pipeline Architecture",
    company: "System 03",
    metric: { value: "100%", label: "Lead Tracking & Visibility" },
  },
  {
    quote: "A multi-agent team designed to scrape leads, verify email deliverability, write copy, and run cold outreach, functioning as a full-time automated sales department.",
    author: "Multi-Agent Sales Ecosystem",
    role: "Autonomous Digital Team",
    company: "System 04",
    metric: { value: "71%", label: "Revenue Growth Delivered" },
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
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
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  const goPrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const activeCase = caseStudies[activeIndex];

  return (
    <section id="case-studies" ref={sectionRef} className="relative py-32 lg:py-40 bg-white text-black overflow-hidden">
      {/* ASCII background pattern */}
      <div className="absolute inset-0 font-mono text-[10px] text-black/[0.01] leading-tight overflow-hidden whitespace-pre select-none">
        {Array.from({ length: 60 }, (_, i) => 
          Array.from({ length: 100 }, () => 
            Math.random() > 0.7 ? '"' : ' '
          ).join("")
        ).join("\n")}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-20">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-black/40 mb-4">
              <span className="w-12 h-px bg-black/20" />
              Case Studies
            </span>
            <h2 className={`text-4xl lg:text-5xl font-display transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Premium projects
              <span className="text-black/40"> & systems delivered.</span>
            </h2>
          </div>
          
          {/* Navigation arrows */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={goPrev}
              className="p-4 border border-black/20 hover:bg-black/5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={goNext}
              className="p-4 border border-black/20 hover:bg-black/5 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Main content - Split layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Quote/Description side */}
          <div className="lg:col-span-7 relative">
            <span className="absolute -left-4 -top-8 text-[200px] font-display text-black/5 leading-none select-none">
              &ldquo;
            </span>
            
            <div className="relative">
              <blockquote 
                key={activeIndex}
                className="text-3xl lg:text-4xl xl:text-5xl font-display leading-[1.2] tracking-tight text-black animate-fadeSlideIn"
              >
                {activeCase.quote}
              </blockquote>

              {/* System Info */}
              <div className="mt-12 flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-black/10 flex items-center justify-center">
                  <span className="font-display text-xl text-black">
                    {activeIndex + 1}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-black">{activeCase.author}</p>
                  <p className="text-black/60">
                    {activeCase.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metric cards side */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            {/* Active metric - Large */}
            <div 
              key={`metric-${activeIndex}`}
              className="p-10 border border-black/20 bg-black/5 animate-fadeSlideIn"
            >
              <span className="text-7xl lg:text-8xl font-display block mb-4 text-black">
                {activeCase.metric.value}
              </span>
              <span className="text-lg text-black/60 font-semibold">
                {activeCase.metric.label}
              </span>
            </div>

            {/* Progress indicators */}
            <div className="flex gap-2">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="flex-1 h-1 bg-black/20 overflow-hidden cursor-pointer"
                >
                  <div 
                    className={`h-full bg-black transition-all duration-300 ${
                      idx === activeIndex ? "w-full" : idx < activeIndex ? "w-full opacity-50" : "w-0"
                    }`}
                    style={idx === activeIndex ? { animation: "progress 8s linear forwards" } : {}}
                  />
                </button>
              ))}
            </div>

            {/* System select list */}
            <div className="mt-4 pt-6 border-t border-black/10">
              <span className="text-xs font-mono text-black/30 uppercase tracking-widest block mb-4">
                Select System
              </span>
              <div className="flex flex-wrap gap-3">
                {caseStudies.map((t, idx) => (
                  <button
                    key={t.company}
                    onClick={() => goTo(idx)}
                    className={`px-4 py-2 text-sm border transition-all cursor-pointer ${
                      idx === activeIndex 
                        ? "border-black text-black bg-black/5 font-semibold" 
                        : "border-black/10 text-black/40 hover:border-black/30"
                    }`}
                  >
                    {t.author}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
