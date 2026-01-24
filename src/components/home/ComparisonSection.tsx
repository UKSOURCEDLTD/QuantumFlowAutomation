'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Database, Server, Cpu, Network } from 'lucide-react';

export function ComparisonSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">The <span className="text-red-500">Old Way</span> vs The <span className="text-primary">Quantum Way</span></h2>
                    <p className="text-gray-400 text-lg">Stop relying on fragmented manual processes. Upgrade to a unified, intelligent infrastructure.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                    {/* Legacy Node */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-red-500/5 rounded-3xl blur-xl transition-opacity opacity-50 group-hover:opacity-100" />
                        <div className="relative h-full bg-black/40 border border-red-900/30 rounded-3xl p-8 backdrop-blur-sm grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-red-900/20 rounded-xl text-red-500">
                                    <Server className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-300">Legacy Operations</h3>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Fragmented Data Silos",
                                    "Manual Data Entry Errors",
                                    "Reactive Problem Solving",
                                    "Linear Scaling Costs",
                                    "Employee Burnout"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-500">
                                        <XCircle className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Quantum Node */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl transition-opacity opacity-70 group-hover:opacity-100 animate-pulse-slow" />
                        <div className="relative h-full bg-black/60 border border-primary/30 rounded-3xl p-8 backdrop-blur-md overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-primary/20 rounded-xl text-primary neon-glow-primary">
                                        <Cpu className="w-8 h-8 " />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Quantum Automated</h3>
                                </div>

                                <ul className="space-y-4">
                                    {[
                                        "Unified Data Ecosystem",
                                        "Zero-Error Automated Processing",
                                        "Predictive Analytics & Actions",
                                        "Exponential Efficiency",
                                        "Strategic Human Focus"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white">
                                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5 shadow-[0_0_10px_rgba(0,255,255,0.5)] rounded-full" />
                                            <span className="font-medium tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
