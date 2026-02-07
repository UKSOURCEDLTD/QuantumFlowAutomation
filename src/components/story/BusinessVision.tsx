'use client';

import { motion } from 'framer-motion';

export function BusinessVision() {
    return (
        <section className="py-32 bg-zinc-900">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            Our Vision
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                            Empowering Businesses Through <span className="text-primary">Intelligent Automation</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">Business Transformation</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                We partner with forward-thinking organizations to implement enterprise-grade AI solutions
                                that drive measurable business outcomes. Our focus is on delivering sustainable competitive
                                advantage through strategic automation and intelligent systems integration.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">Employee Empowerment</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                By automating repetitive operational tasks, we free your workforce to focus on high-value
                                activities that require human creativity, strategic thinking, and relationship building.
                                Our solutions amplify human capability rather than replace it.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 border border-white/10 rounded-2xl bg-black/30"
                    >
                        <p className="text-xl text-zinc-300 leading-relaxed font-medium text-center">
                            "AI represents the most significant productivity shift since the industrial revolution.
                            Organizations that strategically adopt these technologies today will define the competitive
                            landscape of tomorrow."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
