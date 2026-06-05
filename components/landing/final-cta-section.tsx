"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function FinalCtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground bg-foreground/[0.01] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl lg:text-[64px] font-display tracking-tight mb-8 leading-[0.95] text-white">
                  Ready To Build
                  <br />
                  Your AI Workforce?
                </h2>

                <p className="text-base lg:text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                  Let SimplyyGrow automate your sales, support, lead management, customer communication, and business operations with intelligent AI systems that work 24/7. Contact our team today and discover how automation can transform your business.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a href="#contact">
                    <Button
                      size="lg"
                      className="bg-white hover:bg-white/90 text-black px-8 h-14 text-base rounded-full group cursor-pointer w-full sm:w-auto"
                    >
                      Book Free Strategy Call
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                  <a 
                    href="https://wa.me/919166422005" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 text-base rounded-full border-white/20 text-white hover:bg-white/5 flex items-center justify-center gap-3 cursor-pointer w-full sm:w-auto"
                    >
                      <MessageSquare className="w-5 h-5 text-green-400 fill-green-400/20" />
                      Talk On WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              {/* Decorative side corner lines */}
              <div className="hidden lg:flex items-center justify-center w-[300px] h-[300px] shrink-0 opacity-20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain animate-[spin_100s_linear_infinite]"
                />
              </div>
            </div>
          </div>

          {/* Decorative corner lines */}
          <div className="absolute top-0 right-0 w-16 h-16 border-b border-l border-white/10" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-t border-r border-white/10" />
        </div>
      </div>
    </section>
  );
}
