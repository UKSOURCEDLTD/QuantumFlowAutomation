import type { Metadata } from "next";
import { BlogListContent } from "@/components/blog/BlogListContent";
import { WebPageSchema, BreadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
    title: "AI Blog & Insights — Agentic AI, Automation Strategy & Engineering",
    description:
        "Expert insights on agentic AI, business automation, workflow engineering, and the future of AI in UK businesses. Tutorials, case studies, and strategic guides from Quantum Flow Automation.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "AI Blog & Insights | Quantum Flow Automation",
        description:
            "Expert insights on agentic AI, business automation, and workflow engineering. Tutorials, case studies, and strategic guides.",
        url: "https://quantumflowautomation.ai/blog",
    },
};

export default function BlogPage() {
    return (
        <>
            <WebPageSchema
                title="AI Blog & Insights"
                description="Expert insights on agentic AI, business automation, workflow engineering, and the future of AI."
                url="/blog"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "/" },
                    { name: "Blog", url: "/blog" },
                ]}
            />
            <BlogListContent />
        </>
    );
}
