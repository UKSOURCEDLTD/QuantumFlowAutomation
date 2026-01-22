'use client';

import { motion } from 'framer-motion';
import { Brain, Eraser, TrendingUp, Lock, Zap, RefreshCcw } from 'lucide-react';

const philosophyItems = [
    {
        id: 1,
        title: "Technical Debt Liquidation",
        description: "Legacy code is a liability. We don't just patch it; we eliminate it, rebuilding on neural foundations.",
        icon: <Eraser className="w-6 h-6 text-primary" />,
        colSpan: "md:col-span-6 lg:col-span-8",
        bgClass: "bg-black/50"
    },
    {
        id: 2,
        title: "Neural Foundation",
        description: "Systems designed to think, not just compute.",
        icon: <Brain className="w-6 h-6 text-secondary" />,
        colSpan: "md:col-span-6 lg:col-span-4",
        bgClass: "bg-black/80"
    },
    {
        id: 3,
        title: "Market Dominance",
        description: "Efficiency isn't the goal. Winning is. We automate to give you an unfair advantage.",
        icon: <TrendingUp className="w-6 h-6 text-accent" />,
        colSpan: "md:col-span-6 lg:col-span-4",
        bgClass: "bg-black/80"
    },
    {
        id: 4,
        title: "Zero-Trust Security",
        description: "AI requires ironclad boundaries. Our agents operate in strictly sandboxed environments.",
        icon: <Lock className="w-6 h-6 text-gray-300" />,
        colSpan: "md:col-span-6 lg:col-span-4",
        bgClass: "bg-black/60"
    },
    {
        id: 5,
        title: "Speed as a Feature",
        description: "Latency kills conversion. We optimize for millisecond response times.",
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        colSpan: "md:col-span-12 lg:col-span-4",
        bgClass: "bg-black/40"
    }
];

export function PhilosophyGrid() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Core Protocol</h2>
                    <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Our Philosophy</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {philosophyItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${item.colSpan} ${item.bgClass} backdrop-blur-md border border-white/10 p-8 rounded-2xl group hover:border-white/30 transition-all duration-300`}
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
