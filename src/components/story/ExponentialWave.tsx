'use client';

import { motion } from 'framer-motion';

export function ExponentialWave() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Block - The Curve */}
                    <div className="order-1 relative h-[500px] w-full border border-zinc-800/60 rounded-xl bg-zinc-900/20 backdrop-blur-sm flex items-end overflow-hidden px-8 pb-12">
                        {/* Precise Grids */}
                        <div className="absolute inset-x-0 bottom-0 h-px bg-zinc-800" />
                        <div className="absolute inset-y-0 left-0 w-px bg-zinc-800" />

                        {/* Subtle Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                        {/* The Curve SVG */}
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 500">
                            <defs>
                                <linearGradient id="solidGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#22c55e" />
                                    <stop offset="100%" stopColor="#22c55e" />
                                </linearGradient>
                            </defs>

                            {/* The Path - Hockey Stick Geometry. Flat until ~700, then SHOOTS up. */}
                            {/* M0,480 (Start bottom left) -> L600,480 (Stay flat longer) -> Curve up sharply */}
                            <motion.path
                                d="M0,480 L600,480 C750,480 800,450 850,250 C880,120 920,50 1000,20"
                                fill="none"
                                stroke="#22c55e"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ opacity: 0, pathLength: 0 }}
                                whileInView={{ opacity: 1, pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            />

                            {/* 2026 Vertical Line Marker - Moved to the "Knee" (x=700 approx area where lift starts) */}
                            {/* Actually, let's put it exactly where the curve breaks upward, around 650-700 */}
                            <motion.line
                                x1="680" y1="480" x2="680" y2="440"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.5, y2: 400 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            />

                            {/* 2026 Single Sharp Dot - The Moment of Lift */}
                            <motion.circle
                                cx="680" cy="480" r="8"
                                fill="#fff"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 1.2, duration: 0.3 }}
                            />

                            {/* 2026 Label - Large and Explicit */}
                            <motion.text
                                x="680" y="420"
                                textAnchor="middle"
                                fill="white"
                                fontSize="24"
                                fontFamily="var(--font-mono)"
                                fontWeight="bold"
                                letterSpacing="0.05em"
                                initial={{ opacity: 0, y: 440 }}
                                whileInView={{ opacity: 1, y: 420 }}
                                transition={{ delay: 1.3 }}
                            >
                                2026
                            </motion.text>

                            <motion.text
                                x="680" y="445"
                                textAnchor="middle"
                                fill="#22c55e"
                                fontSize="14"
                                fontFamily="var(--font-mono)"
                                letterSpacing="0.1em"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.4 }}
                            >
                                AGENTIC SHIFT
                            </motion.text>
                        </svg>

                        {/* Minimal Axis Labels */}
                        <div className="absolute left-8 bottom-4 text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Time &rarr;</div>
                    </div>

                    {/* Copy Block */}
                    <div className="order-2 text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-green-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4"
                        >
                            Market Trajectory
                        </motion.h2>

                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
                        >
                            The Vertical <br />
                            Inflection Point.
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4 text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg font-light"
                        >
                            <p>
                                The era of linear software—incremental updates, manual inputs—ended with the <span className="text-white font-medium">Google Unified AI Stack</span>.
                            </p>
                            <p>
                                2026 is the event horizon. <span className="text-green-500 font-medium">Agentic Development</span> means software now writes itself. Value doesn't just compound; it goes vertical.
                            </p>
                            <div className="pt-4 border-l border-green-500/30 pl-4 mt-6">
                                <p className="text-white text-sm font-mono tracking-wide">
                                    // AUTOMATION_STATUS: <span className="text-green-400 animate-pulse">UNBOUNDED</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
