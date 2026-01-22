'use client';

import { motion } from 'framer-motion';
import { Bot, Layers, Zap, Code2 } from 'lucide-react';

const capabilities = [
    {
        title: "Agentic Workflows",
        description: "We build autonomous agents that plan, execute, and learn. They handle complex tasks so your team doesn't have to.",
        tag: "AUTOMATION",
        icon: Bot,
        color: "primary"
    },
    {
        title: "Web & App Dev",
        description: "We build high-performance, AI-integrated web applications and digital experiences using the latest tech stacks.",
        tag: "DEVELOPMENT",
        icon: Code2,
        color: "secondary"
    },
    {
        title: "Process Architecture",
        description: "We map your business processes and identify exactly where AI can save you the most time and money.",
        tag: "STRATEGY",
        icon: Layers,
        color: "accent"
    },
    {
        title: "Google Unified Stack",
        description: "We allow you to leverage the full power of Google's AI ecosystem for enterprise-grade reliability and scale.",
        tag: "INFRASTRUCTURE",
        icon: Zap,
        color: "primary"
    }
];

export function TeamDossier() {
    return (
        <section className="bg-zinc-900 text-white py-32 border-b border-zinc-800">
            <div className="container mx-auto px-6">
                <div className="mb-16 flex items-baseline justify-between border-b border-zinc-700 pb-6">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2">Technical Capabilities</h2>
                        <p className="text-zinc-500 font-mono text-sm">The tools we use to build your future.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap, index) => {
                        const Icon = cap.icon;
                        return (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group border border-zinc-800 bg-black/50 p-6 hover:border-primary transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    {/* Icon Placeholder */}
                                    <div className="aspect-square w-full bg-zinc-900 mb-4 relative overflow-hidden border border-zinc-800 group-hover:border-primary transition-colors">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Icon className="w-16 h-16 text-zinc-700 group-hover:text-primary transition-colors duration-300" />
                                        </div>
                                        {/* Scan Line Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-full w-full translate-y-full group-hover:translate-y-[-100%] transition-transform duration-[2s]" />
                                    </div>

                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="font-bold text-lg leading-none group-hover:text-primary transition-colors">{cap.title}</h3>
                                    </div>

                                    <p className="text-sm font-medium text-zinc-400 mb-4 min-h-[60px]">{cap.description}</p>

                                    <div className="border-t border-zinc-800 pt-3">
                                        <span className="block text-[10px] uppercase text-zinc-600 mb-1 tracking-wider">Discipline</span>
                                        <span className="font-mono text-xs text-primary border border-primary/20 px-2 py-1 rounded bg-primary/5">
                                            {cap.tag}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
