'use client';

import { motion } from 'framer-motion';

export function AgencyHero() {
    return (
        <section className="bg-black text-white py-40 selection:bg-primary selection:text-black relative overflow-hidden h-[90vh] flex items-center">

            {/* CSS Nebula Background */}
            <div className="absolute inset-0 bg-black">
                {/* Deep Void Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),transparent_70%)]" />

                {/* Nebula Glow Orbs */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            </div>

            {/* Cyber Grid - Enhanced */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,black_100%)]" />

            {/* Interference Lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-pulse" />
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 flex items-center justify-center gap-4"
                    >
                        <div className="w-12 h-12 bg-primary text-black flex items-center justify-center font-black text-xl select-none rounded">
                            Q
                        </div>
                        <span className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
                            Our Promise
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12 uppercase"
                    >
                        We make AI{' '}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                                work for you.
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500 blur-sm animate-pulse" />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-serif text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        We believe every business deserves access to world-class machine intelligence.
                        You don't need a PhD. You just need a partner who understands your business.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
