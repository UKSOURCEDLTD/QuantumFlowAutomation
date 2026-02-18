'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/ui/Marquee";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { CTASection } from "@/components/home/CTASection";
import Link from "next/link";
import { ArrowRight, Bot, Zap, Globe, BrainCircuit } from "lucide-react";
import { BookingButton } from "@/components/ui/BookingButton";
import dynamic from 'next/dynamic';

const QuantumField = dynamic(() => import('@/components/3d/QuantumField').then(mod => mod.QuantumField), {
    ssr: false,
});

export function HomeContent() {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <Marquee />
            <Navbar />
            {/* Hero Section */}
            <section className="container mx-auto px-6 pt-20 pb-20 md:pt-32 md:pb-40 relative overflow-hidden">
                {/* 3D Background confined to Hero */}
                <QuantumField />

                <div className="max-w-4xl relative z-10">
                    <div className="mb-8">
                        <StatusIndicator />
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight mb-6 md:mb-8 tracking-tighter uppercase">
                        AI Automation Agency<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">for UK Businesses</span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 mt-8 md:mt-12">
                        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                            Quantum Flow Automation builds AI employees, automated workflows, and intelligent websites that run your business operations 24/7 — so you can focus on growth, not admin.
                        </p>

                        <BookingButton
                            className="group relative px-6 py-3 md:px-8 md:py-4 bg-primary text-black font-bold uppercase tracking-widest flex items-center gap-4 hover:bg-white transition-all neon-glow-primary hover:btn-glow-pulse cursor-pointer text-sm md:text-base"
                        >
                            See How It Works
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </BookingButton>
                    </div>
                </div>


                {/* Info Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-32 relative z-10">
                    {/* Card 1: AI Employees */}
                    <div className="glass-card p-8 group hover:border-primary/50 transition-all hover:neon-glow-primary relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                        <div className="relative z-10">
                            <Bot className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                            <h3 className="text-lg font-bold mb-2">AI Employees</h3>
                            <p className="text-gray-400 text-sm">Digital workers that handle emails, scheduling, and support 24/7.</p>
                        </div>
                    </div>

                    {/* Card 2: Workflow Automation */}
                    <div className="glass-card p-8 group hover:border-secondary/50 transition-all hover:neon-glow-secondary relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors"></div>
                        <div className="relative z-10">
                            <Zap className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                            <h3 className="text-lg font-bold mb-2">Workflow Automation</h3>
                            <p className="text-gray-400 text-sm">Connect your tools. Eliminate manual data entry. Let systems run themselves.</p>
                        </div>
                    </div>

                    {/* Card 3: AI-First Web & Apps */}
                    <div className="glass-card p-8 group hover:border-accent/50 transition-all hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors"></div>
                        <div className="relative z-10">
                            <Globe className="w-8 h-8 text-accent mb-4" aria-hidden="true" />
                            <h3 className="text-lg font-bold mb-2">AI-First Web & Apps</h3>
                            <p className="text-gray-400 text-sm">Websites that don&apos;t just sit there—they capture, qualify, and convert leads.</p>
                        </div>
                    </div>

                    {/* Card 4: Strategic Consulting */}
                    <div className="glass-card p-8 group hover:border-primary/50 transition-all hover:neon-glow-primary relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                        <div className="relative z-10">
                            <BrainCircuit className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                            <h3 className="text-lg font-bold mb-2">Strategic Consulting</h3>
                            <p className="text-gray-400 text-sm">Clear roadmaps to cut through the hype and implement ROI-positive AI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sections */}
            <ComparisonSection />
            <CapabilitiesSection />
            <ProcessTimeline />

            <CTASection />

            <Footer />
        </div>
    );
}
