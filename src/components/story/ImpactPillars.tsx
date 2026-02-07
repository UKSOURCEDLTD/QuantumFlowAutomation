'use client';

import { motion } from 'framer-motion';
import { Rocket, Brain, BarChart } from 'lucide-react';

const pillars = [
    {
        title: "Velocity",
        value: "10x",
        label: "Faster Deployment",
        desc: "From idea to autonomous agent in days, not months. We build at the speed of the market.",
        color: "from-orange-500 to-rose-600",
        icon: Rocket,
        delay: 0.1
    },
    {
        title: "Intelligence",
        value: "95%",
        label: "Task Accuracy",
        desc: "Precision-engineered agentic workflows that outperform human-led manual processes.",
        color: "from-blue-600 to-indigo-700",
        icon: Brain,
        delay: 0.2
    },
    {
        title: "Scale",
        value: "Infinite",
        label: "Growth Capacity",
        desc: "Scale your revenue without scaling your overhead. Digital humans don't sleep.",
        color: "from-emerald-500 to-cyan-600",
        icon: BarChart,
        delay: 0.3
    }
];

export function ImpactPillars() {
    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((p) => {
                        const Icon = p.icon;
                        return (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: p.delay }}
                                className="group relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-[2rem]`} />

                                <div className="relative p-10 border border-white/5 rounded-[2rem] bg-black/40 backdrop-blur-xl h-full flex flex-col items-center text-center hover:border-white/10 transition-colors">
                                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>

                                    <h3 className="text-zinc-500 font-mono tracking-widest uppercase text-sm mb-2">{p.title}</h3>

                                    <div className="mb-4">
                                        <span className={`text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${p.color}`}>
                                            {p.value}
                                        </span>
                                        <div className="text-white font-bold text-lg mt-1 uppercase tracking-tight">{p.label}</div>
                                    </div>

                                    <p className="text-zinc-500 leading-relaxed font-light italic">
                                        {p.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
        </section>
    );
}
