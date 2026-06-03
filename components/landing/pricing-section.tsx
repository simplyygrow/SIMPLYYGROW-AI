"use client";

import { useState, useEffect, useRef } from "react";
import { Check, Calendar, MessageSquare, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Free AI Audit of your current workflows",
  "Tailored Automation Roadmap for your business",
  "Custom LLM & Voice Agent Recommendations",
  "100% Free Consultation with No Obligation",
];

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 lg:py-40 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Bioluminescent abstract node lines or gradient glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#eca8d6]/[0.02] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.01] blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-12 h-px bg-foreground/30" />
              Get Started
            </span>
            <h2 className={`text-5xl md:text-7xl lg:text-[90px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Let's Build Your
              <br />
              <span className="text-muted-foreground">AI Workforce.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mt-6">
              Book a free strategy session and discover exactly how custom AI agents and workflow automations can scale your business.
            </p>
          </div>
        </div>

        {/* Contact/Booking Portal Container */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Left Column: Benefits checklist */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 lg:p-12 border border-white/10 bg-white/[0.01] backdrop-blur-md rounded-lg">
            <div>
              <span className="font-mono text-xs text-[#eca8d6] uppercase tracking-widest block mb-8">What You'll Receive</span>
              <ul className="space-y-6">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#eca8d6]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#eca8d6]" />
                    </div>
                    <span className="text-base text-muted-foreground leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4">
              <span className="text-xs font-mono text-muted-foreground">PREFER INSTANT CHAT?</span>
              <a 
                href="https://wa.me/919166422005" 
                target="_blank" 
                rel="noreferrer"
                className="w-full"
              >
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-14 rounded-full border-white/20 hover:bg-white/5 text-white flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-green-400 fill-green-400/20" />
                  Talk On WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Contact form/Calendly Booking mockup */}
          <div className="lg:col-span-7 p-8 lg:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-lg flex flex-col justify-center">
            {formSubmitted ? (
              <div className="text-center py-16 animate-fadeSlideIn">
                <div className="w-16 h-16 rounded-full bg-[#eca8d6]/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-[#eca8d6]" />
                </div>
                <h3 className="text-3xl font-display mb-3">Consultation Requested!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you. Our lead architect will review your company and reach out via email within 24 hours to schedule your session.
                </p>
                <Button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-8 bg-white text-black hover:bg-white/90 rounded-full px-6 cursor-pointer"
                >
                  Request another session
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-4">Request Free Strategy Consultation</span>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-muted-foreground">YOUR NAME *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 px-4 rounded border border-white/10 bg-black/40 focus:border-white/30 outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-muted-foreground">WORK EMAIL *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 px-4 rounded border border-white/10 bg-black/40 focus:border-white/30 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-muted-foreground">COMPANY NAME</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12 px-4 rounded border border-white/10 bg-black/40 focus:border-white/30 outline-none text-sm transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-muted-foreground">WHAT WOULD YOU LIKE TO AUTOMATE?</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your current manual tasks, team size, or target outcomes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="p-4 rounded border border-white/10 bg-black/40 focus:border-white/30 outline-none text-sm transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-white hover:bg-white/90 text-black rounded-full font-semibold flex items-center justify-center gap-3 cursor-pointer"
                >
                  {loading ? (
                    <span className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Schedule Free Consultation
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
