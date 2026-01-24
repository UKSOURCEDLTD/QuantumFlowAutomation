'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Globe, Zap, Shield, ChevronRight, Cpu, Network, Layers } from 'lucide-react';

const capabilities = [
    {
        id: "google-stack",
        title: "Unified Google Stack",
        subtitle: "Gemini & Vertex AI Native",
        description: "Built on the industry's most robust infrastructure. We leverage Gemini for reasoning, Vertex AI for agent orchestration, and Google Cloud for limitless scalability.",
        icon: <Layers className="w-10 h-10" />,
        features: ["Gemini 1.5 Pro Models", "Vertex AI Architecture", "BigQuery Data Logic"],
        color: "from-blue-500/20 to-blue-600/20",
        accent: "text-blue-400",
        border: "border-blue-500/30"
    },
    {
        id: "web-arch",
        title: "AI-First Web Architecture",
        subtitle: "Next-Gen Digital Presence",
        description: "We don't just build websites; we design intelligent interfaces where every interaction is optimized for user intent in real-time.",
        icon: <Globe className="w-10 h-10" />,
        features: ["Generative UI Components", "Context-Aware Adaptation", "Adaptive User Flows"],
        color: "from-purple-500/20 to-pink-600/20",
        accent: "text-purple-400",
        border: "border-purple-500/30"
    },
    {
        id: "digital-employees",
        title: "Digital Employees",
        subtitle: "Autonomous AI Agents",
        description: "Deploy swarms of digital workers that operate 24/7. They handle complex tasks, learn from feedback, and collaborate to execute your business logic.",
        icon: <BrainCircuit className="w-10 h-10" />,
        features: ["24/7 Autonomous Operation", "Task Auto-Correction", "Human-Like Reasoning"],
        color: "from-amber-500/20 to-orange-600/20",
        accent: "text-amber-400",
        border: "border-amber-500/30"
    },
    {
        id: "workflows",
        title: "Custom AI Workflows",
        subtitle: "Multi-Purpose Automation",
        description: "Tailored automation for any business function. From sales pipelines to complex surveys, we build workflows that adapt to your specific operational needs.",
        icon: <Network className="w-10 h-10" />,
        features: ["Multi-Purpose Orchestration", "Sales & Ops Automation", "Adaptive Logic Paths"],
        color: "from-emerald-500/20 to-green-600/20",
        accent: "text-emerald-400",
        border: "border-emerald-500/30"
    }
];

export function CapabilitiesSection() {
    const [activeId, setActiveId] = useState<string>(capabilities[0].id);

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Capabilities</span></h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Our infrastructure is built for high-scale, mission-critical autonomy.
                    </p>
                </div>

                {/* Expanding Pillars Container */}
                <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[600px]">
                    {capabilities.map((item) => (
                        <motion.div
                            key={item.id}
                            onHoverStart={() => setActiveId(item.id)}
                            onClick={() => setActiveId(item.id)}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeId === item.id ? 'flex-[3]' : 'flex-[1]'} group border bg-black/40 backdrop-blur-md ${activeId === item.id ? item.border : 'border-white/5'}`}
                        >
                            {/* Animated Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 transition-opacity duration-500 ${activeId === item.id ? 'opacity-100' : 'group-hover:opacity-30'}`} />

                            {/* Content Container */}
                            <div className="relative z-10 h-full p-8 flex flex-col justify-between">

                                {/* Header / Icon */}
                                <div className="flex items-start justify-between">
                                    <div className={`p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${item.accent}`}>
                                        {item.icon}
                                    </div>
                                    <div className={`p-2 rounded-full border border-white/10 ${activeId === item.id ? 'bg-white text-black rotate-90' : 'text-gray-500 -rotate-90'} transition-all duration-500`}>
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Vertical Text (Collapsed State) */}
                                {activeId !== item.id && (
                                    <div className="absolute inset-x-0 bottom-24 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 flex items-center justify-center lg:rotate-[-90deg]">
                                        <h3 className="text-2xl font-bold whitespace-nowrap tracking-widest text-gray-500 group-hover:text-white transition-colors">{item.title}</h3>
                                    </div>
                                )}

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {activeId === item.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="mt-auto"
                                        >
                                            <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">{item.title}</h3>
                                            <p className="text-xl md:text-2xl font-medium text-gray-300 mb-6 font-mono">{item.subtitle}</p>

                                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                                                {item.description}
                                            </p>

                                            <div className="space-y-3">
                                                {item.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className={`w-1.5 h-1.5 rounded-full bg-current ${item.accent}`} />
                                                        <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
