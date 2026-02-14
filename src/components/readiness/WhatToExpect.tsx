'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Wrench, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        icon: Phone,
        number: "01",
        title: "Free Discovery Call",
        description: "A relaxed 30-minute conversation. We learn about your business, how you work day-to-day, and what's eating up your time. No pitch, no pressure — just an honest chat about whether AI makes sense for you.",
        color: "text-primary",
        border: "border-primary/20",
        bg: "bg-primary/5",
    },
    {
        icon: MessageCircle,
        number: "02",
        title: "We Tell You What We Think",
        description: "After the call, we'll give you a straight answer. If we can help, we'll explain how. If AI isn't the right fit for your situation, we'll say that too. Some clients want a full audit, others already know what they need — either way, you'll know your options.",
        color: "text-secondary",
        border: "border-secondary/20",
        bg: "bg-secondary/5",
    },
    {
        icon: Wrench,
        number: "03",
        title: "We Build It",
        description: "Once we agree on the scope — whether that's a single automation, a website, an AI employee, or a full operational overhaul — we get to work. You'll get regular updates and a clear timeline throughout.",
        color: "text-emerald-400",
        border: "border-emerald-400/20",
        bg: "bg-emerald-400/5",
    },
    {
        icon: Rocket,
        number: "04",
        title: "You See the Results",
        description: "We don't deliver and disappear. We make sure everything works, train your team if needed, and offer ongoing support. The goal is that you genuinely save time and money — not just tick a box.",
        color: "text-amber-400",
        border: "border-amber-400/20",
        bg: "bg-amber-400/5",
    },
];

export function WhatToExpect() {
    return (
        <section className="py-16 md:py-32 bg-black relative overflow-hidden">
            <div className="absolute top-[40%] left-[5%] w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <div className="text-center mb-12 md:mb-20">
                    <span className="inline-block px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
                        How It Works
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        What to <span className="text-emerald-400">Expect</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
                        No hard sell, no lengthy onboarding. Just a straightforward process
                        that starts with a conversation and ends with real results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-6 md:p-8 rounded-2xl border ${step.border} ${step.bg} relative group hover:border-opacity-50 transition-all duration-300`}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`p-3 rounded-xl bg-black/30 ${step.color} shrink-0`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-4xl font-bold text-white/5 absolute top-4 right-6 font-mono select-none">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center mt-10 md:mt-14">
                    <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary transition-all">
                        Book a Free Discovery Call
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <p className="text-zinc-600 text-sm mt-4">30 minutes. No obligation. No sales pitch.</p>
                </div>
            </div>
        </section>
    );
}
