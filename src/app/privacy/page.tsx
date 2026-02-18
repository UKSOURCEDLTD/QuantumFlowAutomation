import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WebPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Quantum Flow Automation's privacy policy. Learn how we collect, use, and safeguard your personal information when using our website and AI automation services.",
    alternates: {
        canonical: "/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <>
            <WebPageSchema
                title="Privacy Policy"
                description="How Quantum Flow Automation collects, uses, and safeguards your personal information."
                url="/privacy"
            />
            <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
                <Navbar />

                <main className="pt-32 pb-24">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h1 className="text-4xl font-bold mb-12 tracking-tight">Privacy Policy</h1>

                        <div className="prose prose-invert prose-zinc max-w-none">
                            <p className="lead text-xl text-zinc-400">
                                Effective Date: January 1, 2026
                            </p>

                            <h3>1. Introduction</h3>
                            <p>
                                Quantum Flow Automation (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website, products, and services.
                            </p>

                            <h3>2. Data Collection</h3>
                            <p>
                                We collect information necessary to provide our services, including:
                            </p>
                            <ul>
                                <li><strong>Personal Information:</strong> Name, email address, and company details provided via contact forms.</li>
                                <li><strong>Usage Data:</strong> Analytics on how you interact with our website to improve performance and user experience.</li>
                            </ul>

                            <h3>3. How We Use Your Data</h3>
                            <p>
                                We use your data to:
                            </p>
                            <ul>
                                <li>Provide and maintain our AI automation services.</li>
                                <li>Communicate with you regarding project updates and support.</li>
                                <li>Comply with legal obligations.</li>
                            </ul>

                            <h3>4. Data Security</h3>
                            <p>
                                We employ enterprise-grade security measures, including encryption and strict access controls, to protect your data. However, no data transmission is completely secure.
                            </p>

                            <h3>5. Your Rights</h3>
                            <p>
                                You have the right to access, correct, or delete your personal data. Contact us at <a href="mailto:info@quantumflowautomation.ai" className="text-primary hover:underline">info@quantumflowautomation.ai</a> to exercise these rights.
                            </p>

                            <h3>6. Updates</h3>
                            <p>
                                We may update this policy periodically. Changes will be posted on this page with an updated effective date.
                            </p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
