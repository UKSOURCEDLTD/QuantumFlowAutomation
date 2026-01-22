'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";

const QuantumField = dynamic(() => import('@/components/3d/QuantumField').then(mod => mod.QuantumField), {
    ssr: false,
});

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-20">
            <Navbar />
            <QuantumField />

            <main className="container mx-auto px-6 py-20 relative z-10">
                {/* Header Section */}
                <div className="mb-24 text-center animate-fade-in-up">
                    <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
                        <span className="text-primary text-xs font-mono tracking-[0.2em] uppercase">Contact Us</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        READY TO TRANSFORM <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">
                            YOUR BUSINESS?
                        </span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        We are currently accepting new enterprise partners for Q1 2026.
                        Let's discuss how we can help you scale.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Left Column: Contact Info */}
                    <div className="space-y-12">
                        <div className="p-8 glass-card rounded-xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>

                            <div className="space-y-8">
                                <div className="group">
                                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Email</h4>
                                    <a href="mailto:info@quantumflowautomation.ai" className="text-xl font-medium text-primary hover:text-white transition-colors flex items-center gap-2 group-hover:gap-4 duration-300">
                                        info@quantumflowautomation.ai
                                        <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                                    </a>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Location</h4>
                                    <p className="text-xl font-medium text-white">
                                        Lancashire, UK <br />
                                        <span className="text-base text-gray-500 font-normal">Serving Global Clients</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
                            <h3 className="text-lg font-bold text-primary mb-3">Why Partner with Us?</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                    Dedicated AI Implementation Team
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                    Enterprise-Grade Security & Privacy
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                    24/7 Support & Monitoring
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Key Form */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                        <div className="relative p-8 md:p-12 glass-card rounded-xl border border-white/10">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg py-4 px-5 text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg py-4 px-5 text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        className="w-full bg-black/50 border border-white/10 rounded-lg py-4 px-5 text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 text-white resize-none"
                                    />
                                </div>

                                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-black font-bold text-lg py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] mt-4 shadow-lg shadow-primary/20">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
