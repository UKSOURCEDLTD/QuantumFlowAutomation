"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuantumField } from "@/components/3d/QuantumField";
import { useState } from "react";
import { Send, Terminal } from "lucide-react";

export default function NetworkPage() {
    const [formState, setFormState] = useState({
        name: "",
        org: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate network latency for effect
        setTimeout(() => {
            setStatus("sent");
            // Here we would call the Firebase API
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-20">
            <Navbar />
            <QuantumField />

            <main className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h1 className="text-6xl font-bold mb-4">Let's Connect</h1>
                        <p className="text-gray-400 text-xl mb-12">
                            Ready to upgrade your infrastructure? Start the conversation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4 items-center text-gray-300">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full border border-white/10">
                                    <Terminal className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Contact Info</div>
                                    <div className="font-mono text-lg">info@quantumflowautomation.ai</div>
                                </div>
                            </div>

                            <div className="p-6 border border-primary/20 bg-primary/5 rounded-lg">
                                <h3 className="text-primary font-bold mb-2">Priority Access</h3>
                                <p className="text-sm text-gray-400">
                                    We are currently accepting a limited number of new enterprise partners for Q1 2026.
                                    Response times are currently under 4 hours for qualified leads.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md p-10 border border-white/10">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary animate-pulse" />
                            Send a Message
                        </h2>

                        {status === "sent" ? (
                            <div className="text-center py-20 text-green-500">
                                <Send className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold">Message Sent</h3>
                                <p className="mt-2 text-gray-400">We will review your message shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-mono"
                                        placeholder="Your Name"
                                        value={formState.name}
                                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Company</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-mono"
                                        placeholder="Company Name"
                                        value={formState.org}
                                        onChange={e => setFormState({ ...formState, org: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-mono"
                                        placeholder="your@email.com"
                                        value={formState.email}
                                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        required
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-mono"
                                        placeholder="Tell us about your project..."
                                        value={formState.message}
                                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full py-4 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50"
                                >
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
