'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckSquare, Square, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const checklistItems = [
    {
        question: "Does your team spend more than 5 hours a week on repetitive data entry?",
        detail: "If you're copying data between tools — spreadsheets to CRM, emails to project management, invoices to accounting — that's automation-ready work sitting on the table."
    },
    {
        question: "Do leads or customer enquiries ever go unanswered for more than 24 hours?",
        detail: "Slow response times kill deals. An AI employee can acknowledge, triage, and respond to enquiries instantly — even at 2am on a Sunday."
    },
    {
        question: "Is your team using more than 3 disconnected software tools daily?",
        detail: "CRM, email, calendar, invoicing, project management — if they don't talk to each other, your team is the glue. That's expensive, error-prone glue."
    },
    {
        question: "Does generating a weekly or monthly report take more than 30 minutes?",
        detail: "If someone has to manually pull data from multiple sources to build a report, that's a workflow begging to be automated into a live dashboard."
    },
    {
        question: "Have you hired (or considered hiring) someone primarily for admin work?",
        detail: "If the role is mostly data entry, scheduling, or follow-ups, an AI system can handle it for a fraction of the cost — and never take a sick day."
    },
    {
        question: "Do you have processes that work but depend on one person knowing how?",
        detail: "If critical workflows live in someone's head rather than in a system, you've got a single point of failure. Automation documents and standardises it."
    },
    {
        question: "Is your business growing but your margins aren't?",
        detail: "Revenue goes up but so do costs — usually because you're hiring linearly to handle linear growth. Automation lets you scale output without scaling headcount."
    },
    {
        question: "Are you curious about AI but unsure where it would actually help?",
        detail: "That's exactly what our free discovery call is for. We map your operations and show you the specific areas where automation would save you time and money."
    }
];

export function ReadinessChecklist() {
    const [checked, setChecked] = useState<Set<number>>(new Set());

    const toggle = (index: number) => {
        setChecked(prev => {
            const next = new Set(prev);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    const score = checked.size;

    const getMessage = () => {
        if (score === 0) return "Tick the statements that apply to your business.";
        if (score <= 2) return "You've got a few areas that could benefit from automation. A targeted approach would work well.";
        if (score <= 5) return "There's significant opportunity here. AI automation could save your team tens of hours every week.";
        return "Your business is a prime candidate for AI transformation. Let's talk — there's a lot we can do.";
    };

    return (
        <section className="py-16 md:py-32 bg-black relative overflow-hidden">
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <div className="text-center mb-12 md:mb-20">
                    <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                        Self Assessment
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        How Ready <span className="text-primary">Are You?</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
                        Honest questions to help you understand where AI fits in your business.
                        No jargon, no pressure — just clarity.
                    </p>
                </div>

                <div className="space-y-4">
                    {checklistItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => toggle(i)}
                            className={`group cursor-pointer rounded-xl border p-5 md:p-6 transition-all duration-300 ${checked.has(i)
                                ? 'bg-primary/5 border-primary/30'
                                : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                                }`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-0.5 shrink-0">
                                    {checked.has(i) ? (
                                        <CheckSquare className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Square className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                                    )}
                                </div>
                                <div>
                                    <p className={`font-semibold mb-1 transition-colors ${checked.has(i) ? 'text-white' : 'text-zinc-300'}`}>
                                        {item.question}
                                    </p>
                                    <AnimatePresence>
                                        {checked.has(i) && (
                                            <motion.p
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="text-sm text-zinc-400 leading-relaxed overflow-hidden"
                                            >
                                                {item.detail}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Score Feedback */}
                <motion.div
                    key={score}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 md:mt-12 p-6 md:p-8 rounded-2xl bg-zinc-900/50 border border-white/5 text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl font-bold text-primary">{score}</span>
                        <span className="text-zinc-500 font-mono text-sm">/ {checklistItems.length}</span>
                    </div>
                    <p className="text-zinc-300 mb-6 max-w-lg mx-auto">{getMessage()}</p>
                    {score >= 3 && (
                        <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-all">
                            Book a Free Discovery Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
