'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Workflow, Activity, Globe, Zap, Sliders, ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Neural Networks",
        description: "Custom model training on your proprietary data.",
        icon: <BrainCircuit className="w-8 h-8 text-primary" />,
        colSpan: "md:col-span-8",
        bg: "bg-primary/5",
        border: "border-primary/20",
        glow: "group-hover:neon-glow-primary"
    },
    {
        id: 2,
        title: "Workflow Orchestration",
        description: "End-to-end automation of complex business logic.",
        icon: <Workflow className="w-8 h-8 text-secondary" />,
        colSpan: "md:col-span-4",
        bg: "bg-secondary/5",
        border: "border-secondary/20",
        glow: "group-hover:neon-glow-secondary"
    },
    {
        id: 3,
        title: "Real-time Analytics",
        description: "Live dashboards that feel alive.",
        icon: <Activity className="w-8 h-8 text-accent" />,
        colSpan: "md:col-span-4",
        bg: "bg-accent/5",
        border: "border-accent/20",
        glow: "group-hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]"
    },
    {
        id: 4,
        title: "API Integration",
        description: "Connecting over 100+ enterprise services.",
        icon: <Globe className="w-8 h-8 text-blue-400" />,
        colSpan: "md:col-span-4",
        bg: "bg-blue-400/5",
        border: "border-blue-400/20",
        glow: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]"
    },
    {
        id: 5,
        title: "Low-Latency Execution",
        description: "Sub-millisecond processing for critical paths.",
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        colSpan: "md:col-span-4",
        bg: "bg-yellow-400/5",
        border: "border-yellow-400/20",
        glow: "group-hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
    }
];

export function ServicesBento() {
    return (
        <section className="py-32 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Capabilities</h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Our stack covers the entire automation lifecycle, from model training to production deployment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative ${service.colSpan} ${service.bg} backdrop-blur-sm border ${service.border} rounded-3xl p-8 group hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-default`}
                        >
                            {/* Hover content */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex justify-between items-start">
                                <div className={`p-4 rounded-2xl bg-black/40 border border-white/5 ${service.glow} transition-all duration-300`}>
                                    {service.icon}
                                </div>
                                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
