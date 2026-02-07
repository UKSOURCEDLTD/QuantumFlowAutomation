'use client';

import { motion } from 'framer-motion';

export function WhoWeAre() {
    return (
        <section className="py-32 md:py-40 bg-zinc-950 relative overflow-hidden">
            {/* Subtle gradient accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left: Mission Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-8">
                            Who We Are
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-8 uppercase">
                            An AI agency built for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                real businesses
                            </span>
                        </h2>

                        {/* Neon accent divider */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/0" />
                            <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,229,160,0.6)]" />
                        </div>

                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Quantum Flow Automation isn&apos;t just another tech consultancy. We&apos;re a
                            next-generation AI agency that bridges the gap between cutting-edge machine
                            intelligence and everyday business operations.
                        </p>
                    </motion.div>

                    {/* Right: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-2xl border border-white/8 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
                            <p className="text-zinc-300 leading-relaxed relative z-10 text-lg">
                                We started with a simple observation: the businesses that need AI most are
                                the ones least equipped to adopt it. Enterprise solutions are too expensive.
                                DIY tools are too complex. There&apos;s a massive gap in the market — and
                                that&apos;s exactly where we operate.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border border-white/8 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group hover:border-secondary/20 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-500" />
                            <p className="text-zinc-300 leading-relaxed relative z-10 text-lg">
                                We build, deploy, and manage AI systems that handle your critical business
                                processes — from intelligent automation and data analytics to custom AI
                                employees that work 24/7. No jargon. No fluff. Just measurable results.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(0,229,160,0.5)]" />
                                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">UK Based</span>
                            </div>
                            <div className="w-px h-4 bg-zinc-700" />
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_12px_rgba(0,184,255,0.5)]" />
                                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Global Reach</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
