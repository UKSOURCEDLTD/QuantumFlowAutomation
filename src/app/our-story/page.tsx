'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AgencyHero } from "@/components/story/AgencyHero";
import { CTASection } from "@/components/home/CTASection";
import { BusinessVision } from "@/components/story/BusinessVision";
import { ProfessionalCapabilities } from "@/components/story/ProfessionalCapabilities";
import { ProfessionalMethodology } from "@/components/story/ProfessionalMethodology";
import { ProfessionalCommitment } from "@/components/story/ProfessionalCommitment";

export default function OurStoryPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            <main>
                <AgencyHero />

                <div className="relative">
                    {/* Professional Section Transition */}
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-zinc-900 z-10" />

                    <BusinessVision />

                    <ProfessionalCapabilities />

                    <ProfessionalMethodology />

                    <ProfessionalCommitment />

                    <CTASection />
                </div>
            </main>

            <Footer />
        </div>
    );
}
