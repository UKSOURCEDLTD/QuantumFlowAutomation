import type { Metadata } from "next";
import { NetworkContent } from "@/components/contact/NetworkContent";
import { WebPageSchema, BreadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
    title: "Connect With Us — Enterprise AI Partnerships",
    description:
        "Connect with Quantum Flow Automation for enterprise AI partnerships. We are accepting new partners for Q1 2026. Based in Lancashire, UK — serving businesses globally.",
    alternates: {
        canonical: "/network",
    },
    openGraph: {
        title: "Connect With Us | Quantum Flow Automation",
        description:
            "Enterprise AI partnerships — we are currently accepting new partners for Q1 2026.",
        url: "https://quantumflowautomation.ai/network",
    },
};

export default function NetworkPage() {
    return (
        <>
            <WebPageSchema
                title="Connect With Us — Enterprise AI Partnerships"
                description="Connect with Quantum Flow Automation for enterprise AI partnerships."
                url="/network"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "/" },
                    { name: "Network", url: "/network" },
                ]}
            />
            <NetworkContent />
        </>
    );
}
