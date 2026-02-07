'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { FounderSpotlight } from "@/components/about/FounderSpotlight";
import { OurApproach } from "@/components/about/OurApproach";
import { ValuesSection } from "@/components/about/ValuesSection";
import { TechStack } from "@/components/about/TechStack";
import { ByTheNumbers } from "@/components/about/ByTheNumbers";
import { CTASection } from "@/components/home/CTASection";

export default function OurStoryPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            <main>
                <AboutHero />

                <div className="relative">
                    {/* Smooth transition from hero */}
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-zinc-950 z-10" />

                    <WhoWeAre />

                    <FounderSpotlight />

                    <OurApproach />

                    <ValuesSection />

                    <TechStack />

                    <ByTheNumbers />

                    <CTASection />
                </div>
            </main>

            <Footer />
        </div>
    );
}
