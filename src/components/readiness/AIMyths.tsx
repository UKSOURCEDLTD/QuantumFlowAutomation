'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, XCircle, CheckCircle } from 'lucide-react';

const myths = [
    {
        myth: "AI is only for big companies with big budgets.",
        reality: "The tools have changed. What cost hundreds of thousands to build three years ago can now be built for a fraction of that using pre-trained models, cloud infrastructure, and no-code orchestration. Most of our clients are small to mid-sized businesses with 5–50 employees.",
    },
    {
        myth: "We tried ChatGPT — it didn't really help.",
        reality: "Using ChatGPT to write emails is like using a Formula 1 engine to power a desk fan. The real value of AI isn't in chat — it's in automation. When AI is connected to your actual business systems (CRM, email, invoicing), it performs tasks, not tricks.",
    },
    {
        myth: "AI will replace our team.",
        reality: "We've never replaced a person with AI. What we do is remove the work that people shouldn't be doing — the copy-pasting, the chasing, the manual reporting. Your team gets to focus on the work that actually requires a human: relationships, decisions, strategy.",
    },
    {
        myth: "We need to sort out our data first.",
        reality: "You don't need perfect data to get started. Most businesses already have enough useful data across their email, CRM, and calendar. We start small, prove value fast, and build from there. Waiting for 'perfect data' just means waiting forever.",
    },
    {
        myth: "It's too complicated and we don't have a tech team.",
        reality: "That's exactly why agencies like us exist. We handle the entire build, integration, and maintenance. You don't need to hire a developer, learn a programming language, or even understand how the models work. You just need to know what problem you want solved.",
    },
];

export function AIMyths() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-16 md:py-32 bg-zinc-900/30 border-y border-white/5 relative overflow-hidden">
            <div className="absolute bottom-0 left-[20%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <div className="text-center mb-12 md:mb-20">
                    <span className="inline-block px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-bold tracking-widest uppercase mb-6">
                        Myth vs Reality
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        What Most Businesses <span className="text-secondary">Get Wrong</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
                        There's a lot of noise around AI. Here are the five biggest misconceptions
                        we hear — and the truth behind each one.
                    </p>
                </div>

                <div className="space-y-4">
                    {myths.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full text-left p-5 md:p-6 flex items-start gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                            >
                                <XCircle className="w-5 h-5 text-red-500/60 shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <p className="font-semibold text-zinc-200">
                                        &ldquo;{item.myth}&rdquo;
                                    </p>
                                </div>
                                <ChevronDown className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 mt-0.5 ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 flex items-start gap-4 border-t border-white/5 pt-5">
                                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <div>
                                                <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-2">The Reality</span>
                                                <p className="text-zinc-400 text-sm leading-relaxed">{item.reality}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
