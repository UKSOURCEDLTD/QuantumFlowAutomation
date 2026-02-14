'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StoryHero } from "@/components/story/StoryHero";
import { EvolutionTimeline } from "@/components/story/EvolutionTimeline";
import { PhilosophyRead } from "@/components/story/PhilosophyRead";
import { AgenticImpact } from "@/components/story/AgenticImpact";
import { ReadinessChecklist } from "@/components/readiness/ReadinessChecklist";
import { AIMyths } from "@/components/readiness/AIMyths";
import { WhatToExpect } from "@/components/readiness/WhatToExpect";
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
                <ReadinessChecklist />
                <AIMyths />
                <WhatToExpect />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
