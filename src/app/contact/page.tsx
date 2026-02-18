import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";
import { WebPageSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
    title: "Contact Us — Book a Free AI Consultation",
    description:
        "Get in touch with Quantum Flow Automation. Book a free AI consultation to discuss workflow automation, digital employees, and AI-powered solutions for your business. Based in Lancashire, UK.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Quantum Flow Automation",
        description:
            "Book a free AI consultation. We build workflow automation, digital employees, and AI websites for UK businesses.",
        url: "https://quantumflowautomation.ai/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <WebPageSchema
                title="Contact Us — Book a Free AI Consultation"
                description="Get in touch with Quantum Flow Automation for a free AI consultation."
                url="/contact"
            />
            <LocalBusinessSchema />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "/" },
                    { name: "Contact", url: "/contact" },
                ]}
            />
            <ContactContent />
        </>
    );
}
