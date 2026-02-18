import type { Metadata } from "next";
import { IntelligenceContent } from "@/components/layout/IntelligenceContent";
import { WebPageSchema, BreadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
    title: "AI Intelligence — Insights, Analysis & Forecasts",
    description:
        "Stay ahead with Quantum Flow Automation's intelligence hub. AI industry analysis, automation forecasts, and technical breakdowns for UK business leaders.",
    alternates: {
        canonical: "/intelligence",
    },
    openGraph: {
        title: "AI Intelligence Hub | Quantum Flow Automation",
        description:
            "Industry analysis, automation forecasts, and technical breakdowns from our AI team.",
        url: "https://quantumflowautomation.ai/intelligence",
    },
};

export default function IntelligencePage() {
    return (
        <>
            <WebPageSchema
                title="AI Intelligence — Insights, Analysis & Forecasts"
                description="AI industry analysis, automation forecasts, and technical breakdowns."
                url="/intelligence"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "/" },
                    { name: "Intelligence", url: "/intelligence" },
                ]}
            />
            <IntelligenceContent />
        </>
    );
}
