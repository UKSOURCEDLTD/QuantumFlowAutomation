'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, RefreshCw, Layers, ArrowUpRight } from 'lucide-react';

const bentoItems = [
    {
        id: 1,
        title: "Bespoke Architecture",
        description: "We don't sell templates. Every system is architected for your specific business logic.",
        icon: <Layers className="w-8 h-8 text-primary" />,
        colSpan: "md:col-span-8",
        bgGradient: "from-primary/10 to-transparent",
        borderGlow: "group-hover:neon-glow-primary",
    },
    {
        id: 2,
        title: "Rapid Deploy",
        description: "Production-ready in weeks.",
        icon: <Zap className="w-8 h-8 text-secondary" />,
        colSpan: "md:col-span-4",
        bgGradient: "from-secondary/10 to-transparent",
        borderGlow: "group-hover:neon-glow-secondary",
    },
    {
        id: 3,
        title: "Continuous Evolution",
        description: "Your systems update automatically as new AI models release.",
        icon: <RefreshCw className="w-8 h-8 text-accent" />,
        colSpan: "md:col-span-4",
        bgGradient: "from-accent/10 to-transparent",
        borderGlow: "group-hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]",
    },
    {
        id: 4,
        title: "Full Integration",
        description: "Seamlessly connects with your existing ERP, CRM, and databases.",
        icon: <Cpu className="w-8 h-8 text-primary" />,
        colSpan: "md:col-span-8",
        bgGradient: "from-primary/10 to-transparent",
        borderGlow: "group-hover:neon-glow-primary",
    }
];

export function ValueProps() {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="mb-16 md:flex justify-between items-end">
                    <div className="max-w-xl">
                        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Why We're Different</h2>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                            We build intelligent systems<br />
                            <span className="text-gray-500">not just websites.</span>
                        </h3>
                    </div>
                    <div className="hidden md:block">
                        <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {bentoItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative ${item.colSpan} bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl group hover:border-white/30 transition-all duration-500 overflow-hidden`}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Tech Grid Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                                </div>

                                <div>
                                    <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-gray-400 leading-relaxed max-w-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
