'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black font-sans">
            <Navbar />

            <main className="pt-32 pb-24 relative overflow-hidden">
                {/* Background Atmosphere */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-24">

                        {/* Left Column: The Signal */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-12"
                        >
                            <div>
                                <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
                                    Initiate <br />
                                    <span className="text-zinc-500">Signal.</span>
                                </h1>
                                <p className="text-xl text-zinc-400 font-light max-w-md leading-relaxed">
                                    Ready to deploy Agentic AI? We are currently accepting new enterprise partners for Q3 2026.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="group">
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">Direct Line</h3>
                                    <a href="mailto:hello@quantumflow.ai" className="text-2xl font-light hover:text-white transition-colors flex items-center gap-2 group-hover:gap-4 duration-300">
                                        hello@quantumflow.ai
                                        <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Base of Operations</h3>
                                    <p className="text-2xl font-light text-zinc-300">
                                        Lancashire, UK <br />
                                        <span className="text-lg text-zinc-500">Serving Global</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: The Transmission */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-zinc-900/30 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-2xl"
                        >
                            <form className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest ml-1">Identity</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-primary transition-colors placeholder:text-zinc-700"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest ml-1">Coordinates</label>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-primary transition-colors placeholder:text-zinc-700"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest ml-1">Transmission</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-primary transition-colors placeholder:text-zinc-700 resize-none"
                                    />
                                </div>

                                <button type="button" className="w-full bg-white text-black font-bold uppercase tracking-widest py-6 hover:bg-primary transition-colors duration-300 mt-8">
                                    Send Transmission
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
