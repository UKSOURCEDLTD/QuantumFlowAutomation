'use client';

import { motion } from 'framer-motion';

export function PhilosophyRead() {
    return (
        <section className="bg-zinc-900 border-y border-white/5 py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
                            AI isn't Magic.<br />
                            <span className="text-zinc-500">It's Leverage.</span>
                        </h2>
                        <div className="w-20 h-1 bg-primary mb-8" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg text-zinc-300 leading-relaxed"
                    >
                        <p>
                            Most businesses are stuck in "Chatbot Mode"—using AI to write emails or generate images. That's fine, but it doesn't move the needle.
                        </p>
                        <p>
                            Real value comes when AI takes over entire workflows. When it doesn't just "help" you do the work, but actually <span className="text-white font-semibold">does the work</span>.
                        </p>
                        <p>
                            At Quantum Flow, we don't sell "AI Consulting." We engineer systems that give you your time back. We turn manual labor into automated profit.
                        </p>
                        <p className="text-primary font-medium">
                            Practical tools. Measurable results. No magic required.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
