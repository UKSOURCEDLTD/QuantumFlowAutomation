'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuantumField } from "@/components/3d/QuantumField";
import { Marquee } from "@/components/ui/Marquee";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { useScrollReveal } from "@/lib/animations";
import Link from "next/link";
import { ArrowRight, Cpu, Zap, Globe, Shield } from "lucide-react";

export default function Home() {
  const featureGridReveal = useScrollReveal(0.2);
  const valuePropsReveal = useScrollReveal(0.2);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <CustomCursor />
      <Marquee />
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-40 relative overflow-hidden">
        {/* 3D Background confined to Hero */}
        <QuantumField />

        <div className="max-w-4xl relative z-10">
          <div className="mb-8">
            <StatusIndicator />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 tracking-tighter">
            Make your company<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">2026 ready</span>
          </h1>

          <div className="flex flex-col md:flex-row items-start gap-12 mt-12">
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              We build AI systems that run your critical business processes.
              While you focus on strategy, our automation handles the execution.
            </p>

            <Link
              href="/network"
              className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest flex items-center gap-4 hover:bg-white transition-all neon-glow-primary hover:btn-glow-pulse"
            >
              See How It Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Feature Grid Placeholders */}
        <div
          ref={featureGridReveal.ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-32 relative z-10 transition-all duration-1000 ${featureGridReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative aspect-video bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden hover:border-primary/50 transition-all hover:neon-glow-primary">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
              {/* Scanline effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity z-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 229, 160, 0.1) 2px, rgba(0, 229, 160, 0.1) 4px)' }}></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/vis${i}.png`}
                alt="Quantum Data Vis"
                className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 z-20">
                <div className="w-1 h-1 bg-primary animate-[blink-led_1.5s_ease-in-out_infinite]"></div>
                <span className="text-[10px] uppercase text-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">SYS_0{i}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Props */}
      <section
        ref={valuePropsReveal.ref}
        className="container mx-auto px-6 py-32 border-t border-white/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Why We're Different</h2>
            <p className="text-gray-400">Three reasons companies choose us to build their AI infrastructure.</p>
          </div>

          <div className="md:col-span-8 grid gap-8">
            <div className={`p-8 glass-card group hover:border-primary/50 transition-all duration-700 hover:neon-glow-primary ${valuePropsReveal.isVisible ? 'animate-[float-in-up_0.8s_ease-out]' : 'opacity-0'}`}>
              <div className="flex items-start gap-6">
                <span className="text-4xl font-bold text-primary opacity-50 text-mono">01.</span>
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Built for Your Business</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We don't sell one-size-fits-all solutions.
                    Every system we build is custom-designed for your specific workflows and goals.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-8 glass-card group hover:border-secondary/50 transition-all duration-700 hover:neon-glow-secondary ${valuePropsReveal.isVisible ? 'animate-[float-in-up_0.8s_ease-out_0.2s]' : 'opacity-0'}`} style={{ animationFillMode: 'both' }}>
              <div className="flex items-start gap-6">
                <span className="text-4xl font-bold text-secondary opacity-50 text-mono">02.</span>
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">Fast to Deploy</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Most agencies take months to deliver.
                    We ship working systems in weeks, not quarters.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-8 glass-card group hover:border-accent/50 transition-all duration-700 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] ${valuePropsReveal.isVisible ? 'animate-[float-in-up_0.8s_ease-out_0.4s]' : 'opacity-0'}`} style={{ animationFillMode: 'both' }}>
              <div className="flex items-start gap-6">
                <span className="text-4xl font-bold text-accent opacity-50 text-mono">03.</span>
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">Always Improving</h3>
                  <p className="text-gray-400 leading-relaxed">
                    AI moves fast. We update your systems continuously
                    so you're always using the latest capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-32">
        <div className="relative border border-primary/20 rounded-3xl p-12 md:p-24 text-center overflow-hidden group hover:border-primary/50 transition-all hover:neon-glow-primary">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">
              Ready to Start?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-12">
              Book a call to see how AI automation can transform your operations.
              No sales pitch—just a clear plan for your business.
            </p>
            <Link
              href="/network"
              className="inline-flex px-12 py-5 bg-white text-black font-bold uppercase tracking-widest items-center gap-2 hover:bg-primary transition-all neon-glow-secondary hover:btn-glow-pulse"
            >
              Book a Call
              <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
