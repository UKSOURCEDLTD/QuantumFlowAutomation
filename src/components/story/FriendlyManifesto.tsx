'use client';

import { motion } from 'framer-motion';

export function FriendlyManifesto() {
    return (
        <section className="py-32 bg-zinc-950/50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8">
                            A simpler approach to AI
                        </h2>

                        <p className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-white mb-10">
                            We believe technology should fit your life, not the other way around.
                            <span className="text-zinc-500 italic block mt-4">
                                No hype, just help.
                            </span>
                        </p>

                        <div className="space-y-6 text-xl text-zinc-400 font-light leading-relaxed">
                            <p>
                                The world of AI is moving fast. It's noisy, complex, and honestly, a bit overwhelming.
                                We started Quantum Flow to be the bridge. We're a small team of builders who happen
                                to love the technical stuff so much that we want to handle it for you.
                            </p>
                            <p>
                                Our goal isn't just "automation." It's giving you your weekends back.
                                It's making sure your business grows without you having to stay up until 2 AM.
                            </p>
                        </div>

                        {/* Soft Decorative Bridge */}
                        <div className="mt-16 flex items-center justify-center gap-4">
                            <div className="w-12 h-px bg-zinc-800" />
                            <div className="w-2 h-2 rounded-full bg-primary/20" />
                            <div className="w-12 h-px bg-zinc-800" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
