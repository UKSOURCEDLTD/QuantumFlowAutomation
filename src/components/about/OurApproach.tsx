'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Search,
        title: 'Discover',
        description: 'We deep-dive into your business processes, tech stack, and pain points to identify the highest-impact AI opportunities.',
        color: 'primary',
    },
    {
        number: '02',
        icon: Lightbulb,
        title: 'Strategise',
        description: 'We design a custom AI roadmap with clear milestones, ROI projections, and a phased implementation plan.',
        color: 'secondary',
    },
    {
        number: '03',
        icon: Rocket,
        title: 'Build',
        description: 'Our engineers build and deploy your AI systems using enterprise-grade infrastructure on Google Cloud Platform.',
        color: 'primary',
    },
    {
        number: '04',
        icon: TrendingUp,
        title: 'Scale',
        description: 'We continuously optimise, monitor, and expand your AI capabilities as your business grows.',
        color: 'secondary',
    },
];

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string; line: string }> = {
    primary: {
        border: 'border-primary/20 group-hover:border-primary/50',
        bg: 'bg-primary/10 group-hover:bg-primary/20',
        text: 'text-primary',
        glow: 'shadow-[0_0_30px_rgba(0,229,160,0.15)] group-hover:shadow-[0_0_40px_rgba(0,229,160,0.25)]',
        line: 'from-primary/50 to-secondary/50',
    },
    secondary: {
        border: 'border-secondary/20 group-hover:border-secondary/50',
        bg: 'bg-secondary/10 group-hover:bg-secondary/20',
        text: 'text-secondary',
        glow: 'shadow-[0_0_30px_rgba(0,184,255,0.15)] group-hover:shadow-[0_0_40px_rgba(0,184,255,0.25)]',
        line: 'from-secondary/50 to-primary/50',
    },
};

export function OurApproach() {
    return (
        <section className="py-32 md:py-40 bg-zinc-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
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
                        Our Process
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Work</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        A proven four-stage methodology that delivers measurable results,
                        every time.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-6xl mx-auto relative">
                    {/* Connection line — desktop only */}
                    <div className="hidden lg:block absolute top-[72px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px">
                        <motion.div
                            className="w-full h-full bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            viewport={{ once: true }}
                            style={{ transformOrigin: 'left' }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const colors = colorMap[step.color];
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    className="group relative"
                                >
                                    {/* Step number circle */}
                                    <div className="relative z-10 mb-8 flex justify-center">
                                        <div className={`w-14 h-14 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center transition-all duration-500 ${colors.glow}`}>
                                            <span className={`font-mono font-bold text-sm ${colors.text}`}>
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className={`p-8 rounded-2xl border ${colors.border} bg-white/[0.02] backdrop-blur-sm text-center transition-all duration-500 ${colors.glow} hover:bg-white/[0.04]`}>
                                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-6 transition-colors duration-500`}>
                                            <Icon className={`w-6 h-6 ${colors.text}`} />
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{step.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed text-sm">{step.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
