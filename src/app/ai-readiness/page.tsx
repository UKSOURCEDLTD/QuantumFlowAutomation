import type { Metadata } from "next";
import { AIReadinessContent } from "@/components/readiness/AIReadinessContent";
import { WebPageSchema, FAQSchema, BreadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
    title: "AI Readiness Assessment — Is Your Business Ready for AI?",
    description:
        "Take our AI readiness assessment to discover if your business is prepared for automation. Learn about common AI myths, what to expect from an AI audit, and how to get started with AI integration.",
    alternates: {
        canonical: "/ai-readiness",
    },
    openGraph: {
        title: "AI Readiness Assessment | Quantum Flow Automation",
        description:
            "Discover if your business is ready for AI. Free readiness checklist, myth-busting guide, and clear next steps.",
        url: "https://quantumflowautomation.ai/ai-readiness",
    },
};

export default function AiReadinessPage() {
    return (
        <>
            <WebPageSchema
                title="AI Readiness Assessment"
                description="Discover if your business is ready for AI automation with our comprehensive readiness checklist."
                url="/ai-readiness"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "/" },
                    { name: "AI Readiness", url: "/ai-readiness" },
                ]}
            />
            <FAQSchema
                questions={[
                    {
                        question: "Is my business ready for AI automation?",
                        answer: "Most businesses with repetitive manual processes like data entry, email management, or report generation are strong candidates for AI automation. Our AI readiness assessment evaluates five key areas: data maturity, process documentation, technical infrastructure, team readiness, and budget allocation.",
                    },
                    {
                        question: "How much does an AI audit cost?",
                        answer: "Our comprehensive AI audit costs £500 and includes a full analysis of your business processes, identification of automation opportunities, ROI projections, and a clear implementation roadmap.",
                    },
                    {
                        question: "Will AI replace my employees?",
                        answer: "No. AI employees handle repetitive tasks like email triage, scheduling, and data entry — freeing your human team to focus on strategy, relationships, and work that requires creativity and judgement.",
                    },
                    {
                        question: "How long does it take to implement AI automation?",
                        answer: "Most workflow automations are live within 2-4 weeks. More complex AI employee deployments typically take 4-8 weeks, including testing and training on your specific business rules.",
                    },
                    {
                        question: "Do I need technical expertise to use AI tools?",
                        answer: "No. We handle all technical implementation, deployment, and maintenance. You interact with your AI systems through simple interfaces — email, chat, dashboards — that require no technical knowledge.",
                    },
                ]}
            />
            <AIReadinessContent />
        </>
    );
}
