import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesContent } from "@/components/services/ServicesContent";
import { WebPageSchema, ServiceSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
    title: "AI Services — Automation, Digital Employees & AI Websites",
    description:
        "Explore our AI services: workflow automation, digital employees, AI-powered websites, and strategic AI consulting. Fixed pricing, clear deliverables, real results for UK businesses.",
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "AI Services | Quantum Flow Automation",
        description:
            "Workflow automation, digital employees, AI websites, and strategic consulting — with fixed pricing and clear deliverables.",
        url: "https://quantumflowautomation.ai/services",
    },
};

export default function ServicesPage() {
    return (
        <>
            <WebPageSchema
                title="AI Services — Automation, Digital Employees & AI Websites"
                description="Explore our AI services: workflow automation, digital employees, AI-powered websites, and strategic AI consulting."
                url="/services"
            />
            <ServiceSchema
                services={[
                    {
                        name: "AI Audit & Readiness Assessment",
                        description: "Comprehensive analysis of your business processes to identify AI automation opportunities with a clear ROI roadmap.",
                        url: "/ai-readiness",
                    },
                    {
                        name: "AI-Powered Websites",
                        description: "Next.js websites with embedded AI that qualify leads, book meetings, and convert visitors automatically.",
                        url: "/services",
                    },
                    {
                        name: "Digital AI Employees",
                        description: "AI agents that handle email, scheduling, customer support, and CRM management 24/7.",
                        url: "/services",
                    },
                    {
                        name: "AI Growth Partner",
                        description: "Ongoing strategic AI consulting and implementation partnership for continuous business optimisation.",
                        url: "/services",
                    },
                ]}
            />
            <Navbar />
            <ServicesContent />
            <Footer />
        </>
    );
}
