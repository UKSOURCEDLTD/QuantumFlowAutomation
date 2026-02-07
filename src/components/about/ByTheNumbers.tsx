'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
    from: number;
    to: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    decimals?: number;
}

function Counter({ from, to, suffix = '', prefix = '', duration = 2, decimals = 0 }: CounterProps) {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (v) => {
        if (decimals > 0) return v.toFixed(decimals);
        return Math.round(v).toLocaleString();
    });
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animate(count, to, { duration, ease: 'easeOut' });
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [count, to, duration, hasAnimated]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

const stats = [
    {
        value: 50,
        suffix: '+',
        label: 'AI Systems Deployed',
        description: 'Custom solutions live in production',
    },
    {
        value: 10000,
        suffix: '+',
        label: 'Hours Automated',
        description: 'Manual work eliminated per month',
    },
    {
        value: 99.9,
        suffix: '%',
        label: 'Uptime SLA',
        description: 'Enterprise-grade reliability',
        decimals: 1,
    },
    {
        value: 3,
        suffix: 'x',
        label: 'Average ROI',
        description: 'Return on AI investment',
    },
];

export function ByTheNumbers() {
    return (
        <section className="py-32 md:py-40 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,229,160,0.08),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,184,255,0.06),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                        Impact
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        By The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Numbers</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            {/* Big number */}
                            <div className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 group-hover:from-primary group-hover:to-emerald-300 transition-all duration-500">
                                <Counter
                                    from={0}
                                    to={stat.value}
                                    suffix={stat.suffix}
                                    duration={2.5}
                                    decimals={stat.decimals || 0}
                                />
                            </div>

                            {/* Label */}
                            <h3 className="text-sm md:text-base font-bold uppercase tracking-widest mb-2">
                                {stat.label}
                            </h3>
                            <p className="text-xs md:text-sm text-zinc-500 font-mono">
                                {stat.description}
                            </p>

                            {/* Bottom accent */}
                            <div className="mt-6 mx-auto w-12 h-0.5 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 group-hover:via-primary/80 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
