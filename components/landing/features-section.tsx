"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Phone, Database, Cpu, MessageSquare, Users, GitBranch, Video } from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI Agents",
    description: "Custom AI employees trained specifically on your business data and workflows to perform complex operations autonomously.",
    stats: { value: "24/7", label: "Autonomous operation" },
    icon: Brain,
  },
  {
    number: "02",
    title: "Voice AI Agents",
    description: "Human-like, ultra-low latency conversational callers available 24/7 for inbound support and outbound lead qualification.",
    stats: { value: "<1.2s", label: "Voice response latency" },
    icon: Phone,
  },
  {
    number: "03",
    title: "CRM Systems",
    description: "Custom-built CRM platforms engineered around your specific sales pipelines, automatic follow-ups, and live reporting.",
    stats: { value: "100%", label: "Lead tracking accuracy" },
    icon: Database,
  },
  {
    number: "04",
    title: "Workflow Automation",
    description: "Eliminate repetitive administrative, marketing, or operations work by bridging tools into automated background pipelines.",
    stats: { value: "10x", label: "Processing speed" },
    icon: Cpu,
  },
  {
    number: "05",
    title: "WhatsApp Automation",
    description: "Instant lead engagement, appointment booking calendars, and customer support chat powered by automated LLM brains.",
    stats: { value: "62%", label: "Lead conversion increase" },
    icon: MessageSquare,
  },
  {
    number: "06",
    title: "Multi-Agent Systems",
    description: "Coordinate networks of specialized AI agents that communicate, delegate, and collaborate to achieve complex project goals.",
    stats: { value: "0", label: "Human supervision needed" },
    icon: Users,
  },
  {
    number: "07",
    title: "API Integrations",
    description: "Connect HubSpot, Salesforce, OpenAI, Meta Ads, Google Sheets, and custom endpoints into one unified ecosystem.",
    stats: { value: "Secure", label: "End-to-end data encryption" },
    icon: GitBranch,
  },
  {
    number: "08",
    title: "AI Video Production",
    description: "Generate studio-grade marketing videos, localized ads, and product tutorials featuring lifelike digital avatars.",
    stats: { value: "90%", label: "Video creation cost saved" },
    icon: Video,
  },
];

// Floating dot particles visualization for the premium bento card
function ParticleVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Generate stable particle positions
    const COUNT = 70;
    const particles = Array.from({ length: COUNT }, (_, i) => {
      const seed = i * 1.618;
      return {
        bx: ((seed * 127.1) % 1),
        by: ((seed * 311.7) % 1),
        phase: seed * Math.PI * 2,
        speed: 0.4 + (seed % 0.4),
        radius: 1.2 + (seed % 2.2),
      };
    });

    let time = 0;
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        const flowX = Math.sin(time * p.speed * 0.4 + p.phase) * 38;
        const flowY = Math.cos(time * p.speed * 0.3 + p.phase * 0.7) * 24;

        const bx = p.bx * w;
        const by = p.by * h;
        const dx = p.bx - mx;
        const dy = p.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist * 2.8);

        const x = bx + flowX + influence * Math.cos(time + p.phase) * 36;
        const y = by + flowY + influence * Math.sin(time + p.phase) * 36;

        const pulse = Math.sin(time * p.speed + p.phase) * 0.5 + 0.5;
        const alpha = 0.08 + pulse * 0.18 + influence * 0.3;

        ctx.beginPath();
        ctx.arc(x, y, p.radius + pulse * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      time += 0.016;
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export function FeaturesSection() {
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

  const FlagshipIcon = services[0].icon;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-black"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header - Full width with diagonal layout */}
        <div className="relative mb-20 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-12 h-px bg-foreground/30" />
                Services
              </span>
              <h2
                className={`text-5xl md:text-7xl lg:text-[90px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Everything Your Business
                <br />
                <span className="text-muted-foreground">Needs To Run On AI.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                We build fully customized, production-grade AI infrastructure, workflows, and automated voice channels that act as a scaling virtual workforce for your operations.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Card 1: AI Agents (spans 12 columns, Flagship feature) */}
          <div 
            className={`lg:col-span-12 relative bg-black border border-foreground/10 min-h-[480px] overflow-hidden group transition-all duration-700 flex ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Left: text content */}
            <div className="relative flex-1 p-8 lg:p-12 bg-black flex flex-col justify-between">
              <ParticleVisualization />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-muted-foreground">{services[0].number}</span>
                  <FlagshipIcon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl lg:text-5xl font-display mt-6 mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {services[0].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
                  {services[0].description}
                </p>
              </div>
              <div className="relative z-10 border-t border-foreground/10 pt-6 mt-6 flex items-baseline gap-4">
                <span className="text-5xl lg:text-7xl font-display leading-none">{services[0].stats.value}</span>
                <span className="text-sm text-muted-foreground font-mono uppercase tracking-wider">{services[0].stats.label}</span>
              </div>
            </div>

            {/* Right: premium organic visual image */}
            <div className="hidden lg:block relative w-[42%] shrink-0 overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2812%29-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png"
                alt="AI Agents"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ transform: "scaleX(-1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
            </div>
          </div>

          {/* Cards 2, 3, 4: Voice AI, CRM, Workflow (spans 4 columns each) */}
          {services.slice(1, 4).map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.title}
                className={`lg:col-span-4 relative bg-black border border-foreground/10 p-8 flex flex-col justify-between overflow-hidden group transition-all duration-700 hover:border-foreground/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm text-muted-foreground">{service.number}</span>
                    <ServiceIcon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="border-t border-foreground/10 pt-6 mt-8">
                  <span className="text-3xl lg:text-4xl font-display block">{service.stats.value}</span>
                  <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider block mt-1">{service.stats.label}</span>
                </div>
              </div>
            );
          })}

          {/* Cards 5, 6: WhatsApp, Multi-Agent (spans 6 columns each) */}
          {services.slice(4, 6).map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.title}
                className={`lg:col-span-6 relative bg-black border border-foreground/10 p-8 flex flex-col justify-between overflow-hidden group transition-all duration-700 hover:border-foreground/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm text-muted-foreground">{service.number}</span>
                    <ServiceIcon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
                <div className="border-t border-foreground/10 pt-6 mt-8 flex items-baseline gap-4">
                  <span className="text-4xl lg:text-5xl font-display">{service.stats.value}</span>
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{service.stats.label}</span>
                </div>
              </div>
            );
          })}

          {/* Cards 7, 8: API, Video (spans 6 columns each) */}
          {services.slice(6, 8).map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.title}
                className={`lg:col-span-6 relative bg-black border border-foreground/10 p-8 flex flex-col justify-between overflow-hidden group transition-all duration-700 hover:border-foreground/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm text-muted-foreground">{service.number}</span>
                    <ServiceIcon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
                <div className="border-t border-foreground/10 pt-6 mt-8 flex items-baseline gap-4">
                  <span className="text-4xl lg:text-5xl font-display">{service.stats.value}</span>
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{service.stats.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
