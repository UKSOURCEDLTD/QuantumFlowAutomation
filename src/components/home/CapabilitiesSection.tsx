'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Globe, ChevronRight, Cpu, Network, Layers } from 'lucide-react';

const capabilities = [
    {
        id: "workflows",
        title: "Custom AI Workflows",
        subtitle: "End-to-End Business Automation",
        description: "We map your manual processes — data entry, invoice chasing, report generation, lead routing, onboarding sequences — and replace them with intelligent automated workflows. Your CRM talks to your email. Your email triggers your invoicing. Your invoicing feeds your dashboards. Everything connects, everything flows, and your team stops wasting time on tasks a machine should handle.",
        icon: <Network className="w-10 h-10" />,
        features: [
            "CRM, email, calendar, and invoicing connected into one pipeline",
            "Automated lead routing, follow-ups, and client onboarding sequences",
            "Live operational dashboards built from your connected data sources",
        ],
        color: "from-emerald-500/20 to-green-600/5",
        accent: "text-emerald-400",
        border: "border-emerald-500/30",
        glow: "bg-emerald-500/20",
    },
    {
        id: "web-arch",
        title: "AI-First Websites",
        subtitle: "Websites That Work For You",
        description: "Most websites are digital brochures — they sit there and wait. Ours actively engage visitors, understand what they're looking for, and guide them toward a conversion. Built on Next.js with embedded AI, every page adapts to user behaviour in real time. Leads get qualified through conversational interfaces, meetings get booked directly into your calendar, and follow-ups happen automatically. Your website becomes your hardest-working employee.",
        icon: <Globe className="w-10 h-10" />,
        features: [
            "Conversational AI that qualifies leads and books meetings automatically",
            "Real-time user behaviour tracking to optimise conversion paths",
            "Built on Next.js and Vercel for instant load times and SEO performance",
        ],
        color: "from-purple-500/20 to-pink-600/5",
        accent: "text-purple-400",
        border: "border-purple-500/30",
        glow: "bg-purple-500/20",
    },
    {
        id: "digital-employees",
        title: "Digital Employees",
        subtitle: "AI Agents That Handle the Day-to-Day",
        description: "Think of these as team members who never clock off. Our AI employees handle customer enquiries via email and chat, manage appointment scheduling, triage support tickets, process incoming documents, and update your CRM — all following your specific business rules. They learn your tone of voice, escalate edge cases to a human, and get better over time. You get back 20+ hours a week without hiring anyone.",
        icon: <BrainCircuit className="w-10 h-10" />,
        features: [
            "Email triage, auto-replies, and intelligent inbox management",
            "Appointment booking and calendar management across your team",
            "Customer support handling with human escalation for complex issues",
        ],
        color: "from-rose-500/20 to-pink-500/5",
        accent: "text-rose-400",
        border: "border-rose-500/30",
        glow: "bg-rose-500/20",
    },
    {
        id: "tech-stack",
        title: "Enterprise AI Stack",
        subtitle: "Best-in-Class Tools, One Unified Platform",
        description: "We don't lock you into a single vendor. We pick the best tool for every job — Gemini and Vertex AI for reasoning and agent orchestration, OpenAI for advanced language tasks, n8n for workflow automation, Next.js for web applications, and BigQuery for analytics. Everything is stitched together into one reliable platform managed entirely by us. You get enterprise-grade AI infrastructure without the enterprise price tag or complexity.",
        icon: <Layers className="w-10 h-10" />,
        features: [
            "Gemini, OpenAI, and open-source models — chosen per use case for best results",
            "n8n, Vertex AI, and custom orchestration for multi-step automation",
            "Google Cloud, BigQuery, and Vercel for scalable, production-grade hosting",
        ],
        color: "from-blue-500/20 to-blue-600/5",
        accent: "text-blue-400",
        border: "border-blue-500/30",
        glow: "bg-blue-500/20",
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
                        Four pillars that power everything we build. Each one is designed to solve a specific operational problem — and together, they transform how your business runs.
                    </p>
                </div>

                {/* Desktop: Expanding Pillars */}
                <div className="hidden lg:flex gap-4 min-h-[550px]">
                    {capabilities.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            onHoverStart={() => setActiveId(item.id)}
                            onClick={() => setActiveId(item.id)}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeId === item.id ? 'flex-[4]' : 'flex-[1]'} group border bg-black/40 backdrop-blur-md ${activeId === item.id ? item.border : 'border-white/5 hover:border-white/10'}`}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 transition-opacity duration-500 ${activeId === item.id ? 'opacity-100' : 'group-hover:opacity-30'}`} />

                            {/* Glow */}
                            {activeId === item.id && (
                                <div className={`absolute -top-20 -right-20 w-60 h-60 ${item.glow} rounded-full blur-[100px]`} />
                            )}

                            {/* Content */}
                            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                                {/* Header */}
                                <div className="flex items-start justify-between">
                                    <div className={`p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${item.accent}`}>
                                        {item.icon}
                                    </div>
                                    <div className={`p-2 rounded-full border border-white/10 ${activeId === item.id ? 'bg-white text-black rotate-0' : 'text-gray-500 -rotate-90'} transition-all duration-500`}>
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Collapsed: Vertical Text */}
                                {activeId !== item.id && (
                                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center rotate-[-90deg]">
                                        <h3 className="text-xl font-bold whitespace-nowrap tracking-widest text-gray-500 group-hover:text-white transition-colors uppercase">{item.title}</h3>
                                    </div>
                                )}

                                {/* Expanded Content */}
                                <AnimatePresence mode="wait">
                                    {activeId === item.id && (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                                            transition={{ delay: 0.15, duration: 0.4 }}
                                            className="mt-auto"
                                        >
                                            <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{item.title}</h3>
                                            <p className="text-lg font-medium text-gray-300 mb-5 font-mono">{item.subtitle}</p>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">
                                                {item.description}
                                            </p>

                                            <div className="space-y-3">
                                                {item.features.map((feature, i) => (
                                                    <div key={i} className="flex items-start gap-3">
                                                        <div className={`w-1.5 h-1.5 rounded-full bg-current ${item.accent} mt-2 shrink-0`} />
                                                        <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
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

                {/* Mobile: Stacked Accordion */}
                <div className="lg:hidden space-y-4">
                    {capabilities.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setActiveId(activeId === item.id ? '' : item.id)}
                            className={`relative rounded-2xl overflow-hidden cursor-pointer border bg-black/40 backdrop-blur-md transition-all duration-500 ${activeId === item.id ? item.border : 'border-white/5'}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-b ${item.color} transition-opacity duration-500 ${activeId === item.id ? 'opacity-100' : 'opacity-0'}`} />

                            <div className="relative z-10 p-6">
                                {/* Header — always visible */}
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.accent} shrink-0`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold truncate">{item.title}</h3>
                                        <p className="text-sm text-gray-500 font-mono">{item.subtitle}</p>
                                    </div>
                                    <div className={`p-2 rounded-full border border-white/10 shrink-0 ${activeId === item.id ? 'bg-white text-black rotate-90' : 'text-gray-500'} transition-all duration-300`}>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Expanded content */}
                                <AnimatePresence>
                                    {activeId === item.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-5 space-y-4">
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                                <div className="space-y-2.5">
                                                    {item.features.map((feature, i) => (
                                                        <div key={i} className="flex items-start gap-3">
                                                            <div className={`w-1.5 h-1.5 rounded-full bg-current ${item.accent} mt-1.5 shrink-0`} />
                                                            <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
