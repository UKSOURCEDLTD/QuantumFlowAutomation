'use client';

import { motion } from 'framer-motion';
import { Quote, Linkedin, Globe } from 'lucide-react';

const founders = [
    {
        name: 'Luke Needham',
        initials: 'LN',
        role: 'Co-Founder & CEO',
        quote: "I built Quantum Flow because I saw too many businesses missing out on AI — not because the tech wasn't ready, but because nobody was making it accessible. My mission is simple: bring the power of enterprise AI to every ambitious business, regardless of size.",
        gradient: 'from-primary via-emerald-400 to-secondary',
        glowColor: 'rgba(0,229,160,0.4)',
    },
    {
        name: 'Codie Simpson',
        initials: 'CS',
        role: 'Co-Founder & COO',
        quote: "Operations is the backbone of every great business. I'm obsessed with building systems that don't just work — they scale. At Quantum Flow, we combine operational excellence with cutting-edge AI to give businesses a genuine competitive edge.",
        gradient: 'from-secondary via-blue-400 to-accent',
        glowColor: 'rgba(0,184,255,0.4)',
    },
];

export function FounderSpotlight() {
    return (
        <section className="py-32 md:py-40 bg-black relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                        Leadership
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Meet the <span className="text-primary">Founders</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden group">
                                {/* Animated border glow */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    style={{
                                        background: `linear-gradient(135deg, ${founder.glowColor.replace('0.4', '0.1')}, rgba(0,184,255,0.1))`,
                                    }}
                                />

                                <div className="relative z-10 p-10 md:p-12 flex flex-col items-center text-center">
                                    {/* Avatar with gradient ring */}
                                    <div className="relative mb-8">
                                        {/* Outer glow ring */}
                                        <div className={`absolute -inset-2 bg-gradient-to-br ${founder.gradient} rounded-full blur-md opacity-40 animate-pulse`} style={{ animationDuration: '4s' }} />
                                        {/* Avatar container */}
                                        <div className={`relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br ${founder.gradient} p-[2px]`}>
                                            <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)]" />
                                                <span className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${founder.gradient} select-none`}>
                                                    {founder.initials}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name & Role */}
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{founder.name}</h3>
                                    <p className={`font-mono text-sm uppercase tracking-widest mb-8 text-transparent bg-clip-text bg-gradient-to-r ${founder.gradient}`}>
                                        {founder.role}
                                    </p>

                                    {/* Quote */}
                                    <div className="relative mb-8">
                                        <Quote className="w-7 h-7 text-primary/20 mb-4 mx-auto" />
                                        <p className="text-base md:text-lg text-zinc-300 leading-relaxed italic">
                                            {founder.quote}
                                        </p>
                                    </div>

                                    {/* Social links */}
                                    <div className="flex items-center gap-4">
                                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group/icon">
                                            <Linkedin className="w-4 h-4 text-zinc-400 group-hover/icon:text-primary transition-colors" />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group/icon">
                                            <Globe className="w-4 h-4 text-zinc-400 group-hover/icon:text-primary transition-colors" />
                                        </a>
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r ${founder.gradient} opacity-30`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
