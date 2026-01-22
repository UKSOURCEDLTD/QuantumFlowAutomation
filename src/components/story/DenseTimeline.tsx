'use client';

import { motion } from 'framer-motion';

const timelineData = [
    {
        year: "2019",
        event: "PROTOCOL_INIT",
        details: "Foundation established. Manual analysis of Amazon heuristics.",
        metric: "0% AUTO",
        status: "COMPLETE"
    },
    {
        year: "2021",
        event: "NEURAL_UPLINK",
        details: "First proprietary algo deployed. Replaced 3 FTEs.",
        metric: "15% AUTO",
        status: "COMPLETE"
    },
    {
        year: "2023",
        event: "SYNTHETIC_SCALE",
        details: "Swarm architecture live. Cross-client learning active.",
        metric: "65% AUTO",
        status: "COMPLETE"
    },
    {
        year: "2025",
        event: "TOTAL_CONVERGENCE",
        details: "Full stack integration. Biological oversight only.",
        metric: "94% AUTO",
        status: "ACTIVE"
    },
    {
        year: "2026",
        event: "THE_SINGULARITY",
        details: "[REDACTED] - Autonomous Market Dominance.",
        metric: "100% AUTO",
        status: "PENDING"
    }
];

export function DenseTimeline() {
    return (
        <section className="bg-zinc-950 py-32 border-y border-zinc-900 overflow-x-hidden relative">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-12 flex justify-between items-end border-b border-zinc-800 pb-4">
                    <h2 className="text-zinc-400 font-mono text-xs uppercase tracking-[0.2em]">Operational History</h2>
                    <span className="text-zinc-600 font-mono text-xs">LOG_ID: 884-29X</span>
                </div>

                {/* Timeline Track */}
                <div className="relative">
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-primary/30 to-zinc-800" />

                    <div className="space-y-0">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                                className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-zinc-900 items-baseline hover:bg-zinc-900/30 transition-all duration-300 cursor-crosshair relative pl-12 md:pl-20"
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-[13px] md:left-[29px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 ${item.status === 'ACTIVE' ? 'border-green-400 bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.6)] animate-pulse' :
                                        item.status === 'PENDING' ? 'border-zinc-600 bg-zinc-900' :
                                            'border-primary bg-black group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(0,255,255,0.4)]'
                                    }`} />

                                <div className="md:col-span-2 font-mono text-zinc-500 text-lg group-hover:text-primary transition-colors">
                                    {item.year}
                                </div>
                                <div className="md:col-span-3 font-bold text-white text-xl tracking-tight uppercase group-hover:text-primary transition-colors">
                                    {item.event}
                                </div>
                                <div className="md:col-span-4 text-zinc-400 font-mono text-sm leading-relaxed">
                                    {item.details}
                                </div>
                                <div className="md:col-span-2 font-mono text-right text-zinc-500 group-hover:text-white transition-colors">
                                    {item.metric}
                                </div>
                                <div className="md:col-span-1 text-right">
                                    <span className={`inline-block px-2 py-1 text-[10px] font-mono rounded-sm ${item.status === 'COMPLETE' ? 'bg-zinc-800 text-zinc-400' :
                                            item.status === 'ACTIVE' ? 'bg-green-900/30 text-green-400 animate-pulse' :
                                                'bg-zinc-900 text-zinc-600 border border-zinc-800 border-dashed'
                                        }`}>
                                        {item.status}
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
