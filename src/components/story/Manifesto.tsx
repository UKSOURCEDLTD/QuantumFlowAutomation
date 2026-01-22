'use client';

import { motion } from 'framer-motion';

export function Manifesto() {
    return (
        <section className="bg-black text-white py-40 selection:bg-primary selection:text-black relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

            {/* Interference Lines */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" />
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 flex items-center gap-4"
                    >
                        <div className="w-12 h-12 bg-primary text-black flex items-center justify-center font-black text-xl select-none">
                            Q
                        </div>
                        <span className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
                            Our Promise
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-16 uppercase"
                    >
                        We make AI{' '}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                work for you.
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary blur-sm animate-pulse" />
                        </span>
                    </motion.h1>

                    <div className="grid md:grid-cols-2 gap-12 text-xl leading-relaxed text-zinc-300">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            <p className="font-serif">
                                We believe every business, no matter the size, deserves access to world-class intelligence.
                                You don't need a PhD in Machine Learning. You just need a partner who understands your business
                                and knows how to use the tools.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="space-y-6"
                        >
                            <p className="font-serif">
                                Whether you need a custom web platform, an automated customer service agent, or a complete digital transformation,
                                Quantum Flow is here to build it. We turn the "Idea of AI" into a functioning reality that prints value.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
