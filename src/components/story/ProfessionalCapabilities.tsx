'use client';

import { motion } from 'framer-motion';
import { Brain, Workflow, BarChart3, Shield, Zap, Users } from 'lucide-react';

const capabilities = [
    {
        title: "Agentic AI Systems",
        description: "Deploy autonomous AI agents that handle complex business processes from end to end, reducing operational overhead and human error.",
        icon: Brain,
        metrics: "Up to 70% efficiency gain"
    },
    {
        title: "Enterprise Integration",
        description: "Seamlessly connect your existing technology stack with intelligent middleware that orchestrates data flow across platforms.",
        icon: Workflow,
        metrics: "Single source of truth"
    },
    {
        title: "Analytics & Insights",
        description: "Transform raw data into actionable intelligence with AI-powered dashboards and predictive analytics tailored to your KPIs.",
        icon: BarChart3,
        metrics: "Real-time decision support"
    },
    {
        title: "Security & Compliance",
        description: "Enterprise-grade security architecture with SOC 2 compliance, ensuring your data and operations meet regulatory standards.",
        icon: Shield,
        metrics: "99.9% uptime SLA"
    },
    {
        title: "Scalable Infrastructure",
        description: "Cloud-native solutions built on Google Cloud Platform, designed to scale with your business growth without performance degradation.",
        icon: Zap,
        metrics: "Auto-scaling by demand"
    },
    {
        title: "Workforce Augmentation",
        description: "Empower your teams with AI co-pilots that enhance productivity while maintaining human oversight and decision-making authority.",
        icon: Users,
        metrics: "Enhanced team capacity"
    }
];

export function ProfessionalCapabilities() {
    return (
        <section className="py-32 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Enterprise-Grade <span className="text-primary">AI Solutions</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl">
                        Our comprehensive suite of AI services is designed for businesses seeking measurable
                        transformation with minimal disruption to existing operations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((capability, index) => {
                        const Icon = capability.icon;
                        return (
                            <motion.div
                                key={capability.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 border border-white/10 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider">
                                        {capability.metrics}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {capability.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
