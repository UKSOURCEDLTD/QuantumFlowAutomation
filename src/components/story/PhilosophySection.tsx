'use client';

import { motion } from 'framer-motion';
import { StarField } from '@/components/ui/StarField';

export function PhilosophySection() {
    return (
        <section className="relative py-32 overflow-hidden bg-black">
            <StarField />

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            The Vision
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                            Intelligence Is The New <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                                Infinite Leverage.
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-zinc-300 leading-relaxed font-light">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <p>
                                We are witnessing the single biggest shift in business leverage since the industrial revolution.
                                <strong className="text-white"> Agentic AI</strong> isn't just another tool; it's a fundamental rewrite
                                of how work gets done.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <p>
                                At Quantum Flow, we don't just "implement" AI. We architect autonomous systems that decouple
                                your growth from your headcount. Your business shouldn't be limited by your time—it should be
                                limited only by your vision.
                            </p>
                        </motion.div>
                    </div>

                    {/* Decorative Element */}
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 0.5, width: '100%' }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-20"
                    />
                </div>
            </div>
        </section>
    );
}
