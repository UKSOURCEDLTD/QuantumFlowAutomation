import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WebPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Quantum Flow Automation's terms of service. Understand the terms governing the use of our AI automation, consulting, and software development services.",
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsPage() {
    return (
        <>
            <WebPageSchema
                title="Terms of Service"
                description="Terms governing the use of Quantum Flow Automation's AI automation services."
                url="/terms"
            />
            <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
                <Navbar />

                <main className="pt-32 pb-24">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h1 className="text-4xl font-bold mb-12 tracking-tight">Terms of Service</h1>

                        <div className="prose prose-invert prose-zinc max-w-none">
                            <p className="lead text-xl text-zinc-400">
                                Last Updated: January 1, 2026
                            </p>

                            <h3>1. Agreement to Terms</h3>
                            <p>
                                By accessing or using the services provided by Quantum Flow Automation, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                            </p>

                            <h3>2. Services</h3>
                            <p>
                                We provide AI automation, consulting, and software development services. Use of these services is subject to the specific contracts and Service Level Agreements (SLAs) signed with each client.
                            </p>

                            <h3>3. Intellectual Property</h3>
                            <p>
                                Unless otherwise agreed in writing, all original code, designs, and systems created by us remain the intellectual property of Quantum Flow Automation until full payment is received and rights are transferred.
                            </p>

                            <h3>4. Limitation of Liability</h3>
                            <p>
                                To the maximum extent permitted by law, Quantum Flow Automation shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or software.
                            </p>

                            <h3>5. Governing Law</h3>
                            <p>
                                These terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                            </p>

                            <h3>6. Contact</h3>
                            <p>
                                Questions about these Terms should be sent to <a href="mailto:info@quantumflowautomation.ai" className="text-primary hover:underline">info@quantumflowautomation.ai</a>.
                            </p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
