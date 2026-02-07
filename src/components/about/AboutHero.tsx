'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function AboutHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Deep Nebula Background */}
            <div className="absolute inset-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,229,160,0.08),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(0,184,255,0.06),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(76,29,149,0.1),transparent_70%)]" />

                {/* Floating Orbs */}
                <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '6s' }} />
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
                <div className="absolute top-[50%] left-[60%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />
            </div>

            {/* Cyber Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,black_100%)]" />

            {/* Vertical Interference Lines */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute top-0 left-[45%] w-px h-full bg-gradient-to-b from-transparent via-secondary/30 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                <div className="absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
            </div>

            {/* Horizontal scan line */}
            <motion.div
                className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-5xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-10 flex items-center justify-center gap-4"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                            <span className="relative flex w-2 h-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                                About Us
                            </span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-10 uppercase"
                    >
                        We make AI{' '}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-secondary">
                                work for you.
                            </span>
                            <motion.span
                                className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                                style={{ transformOrigin: 'left' }}
                            />
                            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary blur-md opacity-60" />
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        We believe every business deserves access to world-class machine intelligence.
                        You don&apos;t need a PhD. You just need a partner who understands your business.
                    </motion.p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ChevronDown className="w-5 h-5 text-zinc-600" />
                </motion.div>
            </motion.div>
        </section>
    );
}
