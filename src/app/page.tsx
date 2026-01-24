'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/ui/Marquee";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection"; // New
import { ProcessTimeline } from "@/components/home/ProcessTimeline"; // New
import { CTASection } from "@/components/home/CTASection";
import Link from "next/link";
import { ArrowRight, Sparkles, Database, Users, Shield } from "lucide-react"; // Updated Icons
import { BookingButton } from "@/components/ui/BookingButton";
import dynamic from 'next/dynamic';

const QuantumField = dynamic(() => import('@/components/3d/QuantumField').then(mod => mod.QuantumField), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
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

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 tracking-tighter uppercase">
            Bring your company<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">into 2026</span>
          </h1>

          <div className="flex flex-col md:flex-row items-start gap-12 mt-12">
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              We build AI systems that run your critical business processes.
              While you focus on strategy, our automation handles the execution.
            </p>

            <BookingButton
              className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest flex items-center gap-4 hover:bg-white transition-all neon-glow-primary hover:btn-glow-pulse cursor-pointer"
            >
              See How It Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </BookingButton>
          </div>
        </div>


        {/* Info Cards Section - UPDATED */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32 relative z-10">
          {/* Card 1: Intelligent Automation */}
          <div className="glass-card p-8 group hover:border-primary/50 transition-all hover:neon-glow-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Intelligent Automation</h3>
              <p className="text-gray-400 text-sm">Streamline complex operations with autonomous agents.</p>
            </div>
          </div>

          {/* Card 2: Data Synergy */}
          <div className="glass-card p-8 group hover:border-secondary/50 transition-all hover:neon-glow-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors"></div>
            <div className="relative z-10">
              <Database className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2">Data Synergy</h3>
              <p className="text-gray-400 text-sm">Unify your data sources for real-time strategic insights.</p>
            </div>
          </div>

          {/* Card 3: Human-Centric AI */}
          <div className="glass-card p-8 group hover:border-accent/50 transition-all hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors"></div>
            <div className="relative z-10">
              <Users className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2">Human-Centric AI</h3>
              <p className="text-gray-400 text-sm">Technology that amplifies your team's capabilities.</p>
            </div>
          </div>

          {/* Card 4: Multi-Modal Intelligence */}
          <div className="glass-card p-8 group hover:border-primary/50 transition-all hover:neon-glow-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative z-10">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Multi-Modal Intelligence</h3>
              <p className="text-gray-400 text-sm">Agents that see, hear, and understand your business context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Sections */}
      <ComparisonSection />
      <CapabilitiesSection />
      <ProcessTimeline />

      <CTASection />

      <Footer />
    </div>
  );
}
