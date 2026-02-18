import type { Metadata } from "next";
import { OurStoryContent } from "@/components/about/OurStoryContent";
import { WebPageSchema, BreadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
    title: "Our Story — About Quantum Flow Automation",
    description:
        "Meet the team behind Quantum Flow Automation. Founded by Luke Needham in Lancashire, UK, we build AI systems that automate business operations for growing companies.",
    alternates: {
        canonical: "/our-story",
    },
    openGraph: {
        title: "Our Story | Quantum Flow Automation",
        description:
            "Founded in Lancashire, UK — we build AI employees, automated workflows, and intelligent web platforms for businesses ready to scale.",
        url: "https://quantumflowautomation.ai/our-story",
    },
};

export default function OurStoryPage() {
    return (
        <>
            <WebPageSchema
                title="Our Story — About Quantum Flow Automation"
                description="Meet the team behind Quantum Flow Automation. We build AI systems that automate business operations."
                url="/our-story"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "/" },
                    { name: "Our Story", url: "/our-story" },
                ]}
            />
            <OurStoryContent />
        </>
    );
}
