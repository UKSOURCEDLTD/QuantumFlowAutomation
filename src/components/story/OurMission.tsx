'use client';

import { motion } from 'framer-motion';

export function OurMission() {
    return (
        <section className="py-40 bg-zinc-950 relative overflow-hidden">
            {/* Soft Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12 italic">
                            Building a <span className="text-primary">Kinder</span> <br />
                            AI Future.
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-lg text-zinc-400 font-light leading-relaxed">
                            <p>
                                We didn't start Quantum Flow to build robots. We started it to build a better way of life
                                for the people behind the businesses. We believe that when technology handles the mundane,
                                humans are finally free to do the work they actually care about.
                            </p>
                            <p>
                                Whether you're a small team or a solo founder, we're here to make sure you're not left
                                behind in the AI shift. We're your partners, your builders, and your biggest fans.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
