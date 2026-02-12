'use client';

import { motion } from 'framer-motion';

export function ImpactGraph() {
    return (
        <section className="py-24 bg-zinc-900/50 border-b border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Copy Side */}
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Break the<br />
                            <span className="text-primary">Admin Trap</span>
                        </h2>
                        <div className="space-y-6 text-zinc-400">
                            <p>
                                Traditionally, if you wanted to do more, you had to hire more. Revenue grew, but costs grew right alongside it.
                            </p>
                            <p>
                                <span className="text-white font-medium">Automation</span> breaks this link. Once a system is built, it costs nearly nothing to run it 100 times or 1,000 times.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-1 bg-zinc-600 rounded-full" />
                                    <span className="text-xs uppercase tracking-wider text-zinc-500">Manual Work</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-1 bg-primary rounded-full" />
                                    <span className="text-xs uppercase tracking-wider text-primary">Automated Scale</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Graph Side */}
                    <div className="md:w-2/3 w-full h-[400px] relative bg-black/40 rounded-xl border border-white/5 backdrop-blur-sm p-8">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-50" />

                        {/* Axes */}
                        <div className="absolute left-8 bottom-8 top-8 w-px bg-zinc-800" />
                        <div className="absolute left-8 bottom-8 right-8 h-px bg-zinc-800" />

                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 300">

                            {/* Linear Line (Human) */}
                            <motion.path
                                d="M0,300 L600,100" // Straight line up
                                fill="none"
                                stroke="#52525b" // zinc-600
                                strokeWidth="2"
                                strokeDasharray="5 5"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5 }}
                            />

                            {/* Exponential Curve (Agentic) */}
                            {/* Starts with linear, then curves up sharply */}
                            <motion.path
                                d="M0,300 C200,240 300,240 600,0"
                                fill="none"
                                stroke="#22c55e" // primary/green
                                strokeWidth="4"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />

                            {/* Interaction/Divergence Point */}
                            <motion.circle
                                cx="250" cy="216" r="6"
                                className="fill-black stroke-primary stroke-2"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                            />

                            <motion.text
                                x="270" y="210"
                                fill="white"
                                fontSize="12"
                                fontFamily="monospace"
                                initial={{ opacity: 0, x: 260 }}
                                whileInView={{ opacity: 1, x: 270 }}
                                transition={{ delay: 1.2 }}
                            >
                                DECISION: AUTOMATE
                            </motion.text>

                        </svg>

                        {/* Labels */}
                        <span className="absolute bottom-4 right-4 text-[10px] uppercase text-zinc-600 font-mono">Time &rarr;</span>
                        <span className="absolute top-4 left-4 text-[10px] uppercase text-zinc-600 font-mono">Output &uarr;</span>

                    </div>
                </div>
            </div>
        </section>
    );
}
