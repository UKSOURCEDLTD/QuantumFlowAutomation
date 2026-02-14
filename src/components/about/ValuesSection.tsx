'use client';

import { motion } from 'framer-motion';
import { Sparkles, Eye, Handshake, Award } from 'lucide-react';

const values = [
    {
        icon: Sparkles,
        title: 'Innovation',
        description: 'We push boundaries relentlessly. Every solution we build leverages the cutting edge of AI — from agentic systems to multi-modal intelligence.',
        gradient: 'from-primary to-emerald-400',
        borderHover: 'hover:border-primary/40',
        glowColor: 'group-hover:shadow-[0_0_40px_rgba(0,229,160,0.15)]',
    },
    {
        icon: Eye,
        title: 'Transparency',
        description: 'No black boxes, no hidden costs. We explain every decision, share every metric, and give you full visibility into how your AI systems perform.',
        gradient: 'from-secondary to-blue-400',
        borderHover: 'hover:border-secondary/40',
        glowColor: 'group-hover:shadow-[0_0_40px_rgba(0,184,255,0.15)]',
    },
    {
        icon: Handshake,
        title: 'Partnership',
        description: 'Whether it\'s a single project or an ongoing partnership, we treat every client like part of the team — invested in your growth, your goals, and your long-term success.',
        gradient: 'from-accent to-pink-400',
        borderHover: 'hover:border-accent/40',
        glowColor: 'group-hover:shadow-[0_0_40px_rgba(255,0,255,0.15)]',
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'Enterprise-grade quality is our baseline. We build on Google Cloud, follow security best practices, and obsess over reliability and performance.',
        gradient: 'from-amber-400 to-orange-400',
        borderHover: 'hover:border-amber-400/40',
        glowColor: 'group-hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]',
    },
];

export function ValuesSection() {
    return (
        <section className="py-32 md:py-40 bg-black relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] bg-primary/3 rounded-full blur-[200px]" />
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[180px]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                        Our Values
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        What Drives <span className="text-primary">Us</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        The principles that guide every decision, every line of code,
                        and every client relationship.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`group relative p-8 md:p-10 rounded-2xl border border-white/8 bg-white/[0.02] backdrop-blur-sm ${value.borderHover} ${value.glowColor} transition-all duration-500`}
                            >
                                {/* Gradient top accent */}
                                <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} bg-opacity-10 flex items-center justify-center mb-6 relative`}>
                                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${value.gradient} opacity-15`} />
                                    <Icon className="w-7 h-7 text-white relative z-10" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">{value.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
