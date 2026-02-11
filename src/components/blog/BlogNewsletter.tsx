'use client';

import { motion } from "framer-motion";
import { Send, Zap } from "lucide-react";
import { useState } from "react";

export function BlogNewsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-emerald-950 to-gray-900" />
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                }}
            />

            {/* Glow orbs */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl" />

            <div className="relative container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Zap className="w-5 h-5 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                            Stay Ahead
                        </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Get AI insights delivered to your inbox
                    </h2>

                    <p className="text-gray-400 mb-10 text-lg">
                        Join forward-thinking business leaders who receive our latest articles on AI strategy, automation, and the future of work.
                    </p>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-emerald-500/20 border border-emerald-500/30 rounded-2xl px-8 py-6"
                        >
                            <p className="text-emerald-300 font-semibold text-lg">
                                ✓ You&apos;re in! We&apos;ll send you the good stuff.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all backdrop-blur"
                            />
                            <button
                                type="submit"
                                className="px-7 py-3.5 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-400 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-emerald-500/25"
                            >
                                Subscribe
                                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </form>
                    )}

                    <p className="text-gray-600 text-xs mt-5">
                        No spam. Unsubscribe anytime. We respect your inbox.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
