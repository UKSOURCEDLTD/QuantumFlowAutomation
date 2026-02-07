'use client';

import { motion } from 'framer-motion';

const milestones = [
    {
        year: "2024",
        title: "The Genesis",
        desc: "Quantum Flow was founded on a simple premise: Agentic AI will change everything. We began building our core automation frameworks.",
        color: "bg-blue-500"
    },
    {
        year: "2025",
        title: "Rapid Scale",
        desc: "Successfully deployed our first multi-agent systems for enterprise partners, achieving 40% reduction in operational overhead.",
        color: "bg-purple-500"
    },
    {
        year: "2026",
        title: "The Intelligence Frontier",
        desc: "Pioneering unified AI hubs that allow CEOs to talk to their entire business operations in real-time. The era of the intelligent business is here.",
        color: "bg-pink-500"
    }
];

export function EvolutionRoadmap() {
    return (
        <section className="bg-black py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6"
                        >
                            The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-500 italic">Evolution</span>
                        </motion.h2>
                        <p className="text-zinc-500 leading-relaxed max-w-sm">
                            Our journey is defined by one goal: making complex technology simple and powerful for our partners.
                            We don't just follow the roadmap; we build it.
                        </p>
                    </div>

                    <div className="md:w-2/3 grid gap-8">
                        {milestones.map((ms, index) => (
                            <motion.div
                                key={ms.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-zinc-900 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: '100%' }}
                                        transition={{ duration: 1, delay: index * 0.3 }}
                                        viewport={{ once: true }}
                                        className={`w-full ${ms.color}`}
                                    />
                                </div>

                                <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm group-hover:border-white/10 transition-colors">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className={`text-xs font-black tracking-widest px-3 py-1 rounded-full ${ms.color} text-black`}>
                                            {ms.year}
                                        </span>
                                        <h3 className="text-2xl font-bold uppercase tracking-tight text-white">{ms.title}</h3>
                                    </div>
                                    <p className="text-zinc-400 leading-relaxed font-light italic">
                                        "{ms.desc}"
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
