'use client';

import { motion } from 'framer-motion';
import { Bot, Layers, Zap, Code2, Cpu, BarChart3, Globe, Shield } from 'lucide-react';

const capabilities = [
    {
        title: "Agentic AI Ops",
        description: "Autonomous agents that orchestrate entire departments, from customer ops to complex data pipeline management.",
        tag: "AUTONOMY",
        icon: Bot,
        color: "from-blue-400 to-cyan-500",
        glow: "rgba(34, 211, 238, 0.2)"
    },
    {
        title: "Vertex AI Native",
        description: "Deep integration with Google's Vertex AI ecosystem for production-grade LLM scaling and multi-modal intelligence.",
        tag: "INFRASTRUCTURE",
        icon: Cpu,
        color: "from-purple-500 to-indigo-600",
        glow: "rgba(168, 85, 247, 0.2)"
    },
    {
        title: "Smart UX Systems",
        description: "AI-first interfaces that adapt to user behavior in real-time, built with high-performance React and Next.js stacks.",
        tag: "EXPERIENCE",
        icon: Code2,
        color: "from-pink-500 to-rose-600",
        glow: "rgba(244, 114, 182, 0.2)"
    },
    {
        title: "Flux Architecture",
        description: "Digital process modularity that allows your business to pivot at the speed of code. No more legacy bottlenecks.",
        tag: "STRATEGY",
        icon: Layers,
        color: "from-amber-400 to-orange-500",
        glow: "rgba(251, 191, 36, 0.2)"
    },
    {
        title: "Real-time Analytics",
        description: "Live streaming data flows into BigQuery with Gemini-powered insights delivered straight to your dashboard.",
        tag: "INTELLIGENCE",
        icon: BarChart3,
        color: "from-green-400 to-emerald-600",
        glow: "rgba(52, 211, 153, 0.2)"
    },
    {
        title: "Global Scale",
        description: "Serverless deployments across Google Cloud Regions ensuring sub-100ms latency globally.",
        tag: "PERFORMANCE",
        icon: Globe,
        color: "from-sky-400 to-blue-600",
        glow: "rgba(56, 189, 248, 0.2)"
    },
    {
        title: "Secure Identity",
        description: "Enterprise-grade Firebase Auth and IAM policies protecting every byte of your proprietary intelligence.",
        tag: "SECURITY",
        icon: Shield,
        color: "from-red-500 to-orange-600",
        glow: "rgba(239, 68, 68, 0.2)"
    },
    {
        title: "Unified Hubs",
        description: "Consolidate every tool in your stack into a single, AI-powered control center for total business visibility.",
        tag: "ECOSYSTEM",
        icon: Zap,
        color: "from-yellow-400 to-lime-500",
        glow: "rgba(163, 230, 53, 0.2)"
    }
];

export function RedesignedCapabilities() {
    return (
        <section className="bg-zinc-950 text-white py-32 relative overflow-hidden">
            {/* Background Text Overlay */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] flex items-center justify-center overflow-hidden">
                <span className="text-[20rem] font-black uppercase tracking-tighter whitespace-nowrap">
                    CAPABILITIES • CAPABILITIES • CAPABILITIES
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4"
                    >
                        Our Tech <span className="text-primary italic">Arsenal</span>
                    </motion.h2>
                    <p className="text-zinc-500 font-mono tracking-widest uppercase text-sm">Engineered for absolute performance.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {capabilities.map((cap, index) => {
                        const Icon = cap.icon;
                        return (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" style={{ backgroundColor: cap.glow }} />

                                <div className="relative bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 h-full flex flex-col hover:border-white/20 transition-colors">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.color} p-[1px] mb-6 mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                        <div className="w-full h-full bg-zinc-900 rounded-[15px] flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <span className="text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase mb-2 block">{cap.tag}</span>
                                        <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all duration-300">
                                            {cap.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                        {cap.description}
                                    </p>

                                    {/* Accent Decoration */}
                                    <div className={`mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                                        <div className={`h-1 w-8 bg-gradient-to-r ${cap.color} rounded-full`} />
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
