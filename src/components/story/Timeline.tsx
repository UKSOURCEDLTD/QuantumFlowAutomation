'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
    {
        year: "2019",
        title: "The Genesis",
        description: "Founded with a singular vision: to automate the un-automatable. We started by manually mapping enterprise workflows to identify friction points.",
        color: "text-gray-500"
    },
    {
        year: "2022",
        title: "First Deployment",
        description: "Launched our first autonomous agent swarm for a chaotic logistics network. It reduced processing time by 80% in week one.",
        color: "text-primary"
    },
    {
        year: "2024",
        title: "Neural Scale",
        description: "Expanded to 50+ enterprise clients. Our systems began learning from each other, creating a shared intelligence layer.",
        color: "text-secondary"
    },
    {
        year: "2026",
        title: "The Present",
        description: "We now architect full-stack intelligence. Biological strategy. Silicon execution. Total equilibrium.",
        color: "text-accent"
    }
];

export function Timeline() {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-primary text-sm font-bold uppercase tracking-widest mb-16"
                >
                    Evolution Log
                </motion.h2>

                <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-24">
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={event.year}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-16"
                        >
                            {/* Dot */}
                            <div className={`absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-black border ${event.year === '2026' ? 'border-accent animate-pulse' : 'border-gray-600'}`} />

                            <div className="grid md:grid-cols-12 gap-6 items-start">
                                <div className="md:col-span-2">
                                    <span className={`text-4xl font-bold font-mono ${event.color} opacity-80`}>{event.year}</span>
                                </div>
                                <div className="md:col-span-10">
                                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">{event.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
