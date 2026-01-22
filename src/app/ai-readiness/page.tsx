'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StoryHero } from "@/components/story/StoryHero";
import { EvolutionTimeline } from "@/components/story/EvolutionTimeline";
import { PhilosophyRead } from "@/components/story/PhilosophyRead";
import { AgenticImpact } from "@/components/story/AgenticImpact";
import { ImpactGraph } from "@/components/story/ImpactGraph";
import { CTASection } from "@/components/home/CTASection";

export default function AiReadinessPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="pt-20">
                <StoryHero />
                <EvolutionTimeline />
                <PhilosophyRead />
                <AgenticImpact />
                <ImpactGraph />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
