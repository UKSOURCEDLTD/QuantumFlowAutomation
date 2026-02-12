'use client';

import { motion } from 'framer-motion';

const timelineData = [
    {
        year: "2023",
        title: "The Hype",
        description: "ChatGPT launched. Everyone talked about it. Most businesses treated it like a toy or a trick.",
        tag: "Awareness"
    },
    {
        year: "2024",
        title: "The Tools",
        description: "Software started integrating AI. Copilots for coding, writing, and design became standard.",
        tag: "Adoption"
    },
    {
        year: "2026",
        title: "The Workforce",
        description: "AI is no longer just a tool—it's a teammate. Autonomous agents now handle entire workflows, from sales to operations.",
        tag: "Integration"
    }
];

export function EvolutionTimeline() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <h2 className="text-primary font-mono text-sm uppercase tracking-widest mb-3">The Shift</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        From Novelty <br /> to <span className="text-primary">Necessity</span>
                    </h3>
                </div>

                <div className="relative mt-20">
                    {/* Horizontal Connector Line */}
                    <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[2px] bg-zinc-800">
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary/20 via-primary to-primary/20"
                            initial={{ scaleX: 0, originX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            viewport={{ once: true }}
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Node on the timeline */}
                                <div className="relative z-10 mb-8">
                                    <div className={`w-12 h-12 rounded-full border-4 ${index === 2 ? 'border-primary bg-black shadow-[0_0_30px_rgba(34,197,94,0.4)]' : 'border-zinc-800 bg-black group-hover:border-zinc-600'} transition-all duration-500 flex items-center justify-center`}>
                                        <div className={`w-3 h-3 rounded-full ${index === 2 ? 'bg-primary animate-pulse' : 'bg-zinc-600'}`} />
                                    </div>
                                    {index === 2 && (
                                        <div className="absolute inset-0 border-4 border-primary rounded-full animate-ping opacity-20" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="max-w-xs">
                                    <span className="text-5xl font-bold text-zinc-800 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none opacity-50">{item.year}</span>
                                    <h4 className="text-xl font-bold text-white mb-3 mt-2">{item.title}</h4>

                                    <div className="h-px w-12 bg-zinc-800 mx-auto mb-4 group-hover:w-full group-hover:bg-primary/50 transition-all duration-500" />

                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>

                                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border ${index === 2 ? 'border-primary/30 text-primary bg-primary/5' : 'border-zinc-800 text-zinc-500'}`}>
                                        {item.tag}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
