"use client";

import { useEffect, useState, useRef } from "react";
import { AlertCircle, Clock, Keyboard, Share2, TrendingUp, XCircle, ThumbsDown, GitPullRequest, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: AlertCircle,
    title: "Missed Leads",
    description: "Inquiries slip through the cracks when team members are offline or occupied.",
  },
  {
    icon: Clock,
    title: "Slow Follow Ups",
    description: "Delayed responses kill close rates. Speed-to-lead is critical for scaling sales.",
  },
  {
    icon: Keyboard,
    title: "Manual Data Entry",
    description: "Sales representatives spend hours typing leads instead of actually pitching.",
  },
  {
    icon: Share2,
    title: "Disconnected Systems",
    description: "Customer data is scattered across email, WhatsApp, sheets, and CRM databases.",
  },
  {
    icon: TrendingUp,
    title: "High Operational Costs",
    description: "Scaling support or outreach requires linear hiring and continuous training.",
  },
  {
    icon: XCircle,
    title: "Human Errors",
    description: "Manual errors in pipeline tracking, scheduling dates, and routing client information.",
  },
  {
    icon: ThumbsDown,
    title: "Lost Opportunities",
    description: "A complete lack of automated nurturing means prospects are forgotten forever.",
  },
  {
    icon: GitPullRequest,
    title: "Inefficient Workflows",
    description: "Repetitive tasks drag down team morale and slow down service delivery.",
  },
];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProblem, setActiveProblem] = useState(0);
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
      setActiveProblem((prev) => (prev + 1) % problems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            The Operational Challenge
          </span>
          
          {/* Title */}
          <h2 className={`text-5xl md:text-7xl lg:text-[90px] font-display tracking-tight leading-[0.9] mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Your Team Is Doing Work
            <br />
            <span className="text-muted-foreground">AI Should Handle.</span>
          </h2>
          
          {/* Description */}
          <div className={`transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Manual tasks drag down efficiency and bleed conversions. SimplyyGrow designs autonomous ecosystems that handle lead capturing, routing, and operations 24/7.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Large visual card */}
          <div className={`lg:col-span-6 relative p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.01] flex flex-col justify-between overflow-hidden transition-all duration-700 min-h-[460px] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            
            <div className="relative z-10">
              <span className="font-mono text-sm text-[#eca8d6] uppercase tracking-wider">The Automation Gap</span>
              <div className="mt-8">
                <span className="text-7xl lg:text-9xl font-display leading-none">80%+</span>
                <span className="block text-muted-foreground mt-4 text-lg">
                  of standard administrative and sales follow-up workflows are fully repetitive and easily automatable.
                </span>
              </div>
            </div>
            
            {/* CTA action button */}
            <div className="relative z-10 mt-12">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black px-8 h-14 text-base rounded-full font-semibold group cursor-pointer"
                >
                  Let's Fix That
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>

            {/* Target highlights */}
            <div className="absolute bottom-8 right-8 flex flex-wrap gap-2 justify-end max-w-[50%]">
              {["Eliminate Friction", "Maximize ROI"].map((highlight) => (
                <span
                  key={highlight}
                  className="px-3 py-1 border border-foreground/10 text-[10px] font-mono text-muted-foreground uppercase"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Problem cards stack */}
          <div className="lg:col-span-6 grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className={`p-6 border transition-all duration-500 cursor-default flex flex-col justify-between ${
                  activeProblem === index 
                    ? "border-foreground/30 bg-foreground/[0.04]" 
                    : "border-foreground/10 hover:border-foreground/20"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setActiveProblem(index)}
                onMouseEnter={() => setActiveProblem(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-10 h-10 flex items-center justify-center border transition-colors ${
                    activeProblem === index 
                      ? "border-foreground bg-foreground text-background" 
                      : "border-foreground/20"
                  }`}>
                    <problem.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{problem.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
