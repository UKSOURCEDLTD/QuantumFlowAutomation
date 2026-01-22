'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AgencyHero } from "@/components/story/AgencyHero";
import { TeamDossier } from "@/components/story/TeamDossier";
import { CTASection } from "@/components/home/CTASection";

export default function OurStoryPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="pt-20">
                <AgencyHero />

                {/* The Opportunity Section */}
                <section className="py-24 bg-zinc-900 border-y border-white/5">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide">The Opportunity</h2>
                        <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
                            <p>
                                We are witnessing the single biggest shift in business leverage since the internet. <strong className="text-white">Agentic AI</strong> has just become available, creating a massive opportunity for companies to decouple growth from headcount.
                            </p>
                            <p>
                                But there is a gap. While the technology is ready, most businesses are stuck wondering how to use it.
                            </p>
                            <p>
                                We formed Quantum Flow to close that gap. We are a team of builders and automation experts dedicated to one mission: helping you adopt these new workflows to save time, save money, and drive unprecedented growth.
                            </p>
                        </div>
                    </div>
                </section>

                <TeamDossier />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
