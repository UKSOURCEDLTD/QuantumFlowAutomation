'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Users } from 'lucide-react';

const commitments = [
    {
        icon: Target,
        title: "Results-Driven",
        description: "Every implementation is measured against clear KPIs and business outcomes. We don't succeed unless you succeed."
    },
    {
        icon: TrendingUp,
        title: "Continuous Innovation",
        description: "We stay at the forefront of AI technology, continuously evolving our solutions to maintain your competitive advantage."
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Your data security and regulatory compliance are non-negotiable. We build trust through transparency and proven safeguards."
    },
    {
        icon: Users,
        title: "Partnership Mindset",
        description: "We're not vendors—we're strategic partners invested in your long-term success and sustainable growth."
    }
];

export function ProfessionalCommitment() {
    return (
        <section className="py-40 bg-black relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Our Commitment to <span className="text-primary">Excellence</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                        We hold ourselves to the highest standards because your business transformation
                        demands nothing less than exceptional execution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                    {commitments.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 border border-white/10 rounded-2xl bg-zinc-900/30"
                            >
                                <Icon className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <p className="text-2xl font-medium text-zinc-300 leading-relaxed mb-8">
                        We believe that AI is not about replacing human potential—it's about amplifying it.
                        Our mission is to empower your organization and your people to achieve more than
                        you thought possible.
                    </p>
                    <div className="inline-flex items-center gap-4 text-sm text-zinc-500 font-mono">
                        <div className="w-8 h-px bg-zinc-700" />
                        <span>QUANTUM FLOW AUTOMATION</span>
                        <div className="w-8 h-px bg-zinc-700" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
