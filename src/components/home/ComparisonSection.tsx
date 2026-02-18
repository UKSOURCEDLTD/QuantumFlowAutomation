'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Server, Cpu } from 'lucide-react';

const comparisonData = [
    {
        area: "Data Handling",
        oldWay: "Copy-pasting between spreadsheets — staff spend hours moving data from emails into spreadsheets, from spreadsheets into CRMs, and from CRMs into invoicing tools.",
        newWay: "Your systems talk to each other — CRM, email, calendar, and invoicing connected into one automated pipeline. Data flows where it needs to go.",
    },
    {
        area: "Communication",
        oldWay: "Chasing replies and follow-ups — leads go cold because no one had time to respond. Client emails sit unanswered for days.",
        newWay: "AI handles your inbox and scheduling — a digital employee reads emails, replies to enquiries, books appointments, and follows up 24/7.",
    },
    {
        area: "Staffing",
        oldWay: "Hiring to handle admin — instead of hiring people to grow the business, you're hiring people just to keep up with the paperwork.",
        newWay: "You scale without hiring for admin — the busywork is handled. When you hire next, it's for someone who drives growth.",
    },
    {
        area: "Reporting",
        oldWay: "No visibility on what's working — revenue, costs, and performance data lives in five different places. Getting a clear picture means hours of manual reporting.",
        newWay: "You see everything in one place — live dashboards show revenue, pipeline, and operational data pulled automatically from every tool you use.",
    },
    {
        area: "Team Capacity",
        oldWay: "Your team is stretched thin — good people are burned out on repetitive tasks they shouldn't be doing.",
        newWay: "Your team focuses on what matters — with the repetitive work automated, your people spend their time on clients and strategy.",
    },
];

export function ComparisonSection() {
    return (
        <section className="py-12 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">The <span className="text-zinc-400">Old Way</span> vs The <span className="text-primary">Quantum Way</span></h2>
                    <p className="text-gray-400 text-base md:text-lg">Most businesses are still running on manual processes that cost hours every day. Here&apos;s what changes when you work with us.</p>
                </div>

                {/* Comparison Table — structured for AI Overview citation */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse" role="table">
                        <thead>
                            <tr>
                                <th className="text-left p-4 text-xs uppercase tracking-widest text-gray-500 font-bold border-b border-white/10 w-[15%]">Area</th>
                                <th className="text-left p-4 border-b border-white/10 w-[42.5%]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-zinc-800/80 rounded-lg text-zinc-400">
                                            <Server className="w-5 h-5" aria-hidden="true" />
                                        </div>
                                        <span className="text-lg font-bold text-zinc-400">How Most Businesses Run</span>
                                    </div>
                                </th>
                                <th className="text-left p-4 border-b border-primary/30 w-[42.5%]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/20 rounded-lg text-primary neon-glow-primary">
                                            <Cpu className="w-5 h-5" aria-hidden="true" />
                                        </div>
                                        <span className="text-lg font-bold text-primary">How It Works With Us</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, i) => (
                                <motion.tr
                                    key={row.area}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group hover:bg-white/[0.02] transition-colors"
                                >
                                    <td className="p-4 border-b border-white/5 align-top">
                                        <span className="text-sm font-bold text-gray-300">{row.area}</span>
                                    </td>
                                    <td className="p-4 border-b border-white/5 align-top">
                                        <div className="flex items-start gap-3">
                                            <XCircle className="w-5 h-5 text-red-500/60 shrink-0 mt-0.5" aria-hidden="true" />
                                            <span className="text-sm text-gray-400 leading-relaxed">{row.oldWay}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-primary/10 align-top bg-primary/[0.02]">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5 shadow-[0_0_10px_rgba(0,255,255,0.5)] rounded-full" aria-hidden="true" />
                                            <span className="text-sm text-gray-300 leading-relaxed">{row.newWay}</span>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
