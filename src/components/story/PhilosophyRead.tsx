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
                            The Technology is Here.<br />
                            <span className="text-zinc-500">The Expertise is Not.</span>
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
                            Agentic AI isn't just a software update. It's a fundamental shift in how business is conducted.
                            Most companies are still trying to figure out how to write a good ChatGPT prompt, while the market leaders are deploying autonomous workforces.
                        </p>
                        <p>
                            We built <span className="text-white font-semibold">Quantum Flow Automation</span> to close this gap.
                            We don't just consult; we install. We take the most advanced autonomous agents available and weave them into your existing infrastructure.
                        </p>
                        <p className="text-primary font-medium">
                            We are your bridge to the Agentic Era.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
