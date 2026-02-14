'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Database, Server, Cpu, Network } from 'lucide-react';

export function ComparisonSection() {
    return (
        <section className="py-12 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">The <span className="text-zinc-400">Old Way</span> vs The <span className="text-primary">Quantum Way</span></h2>
                    <p className="text-gray-400 text-base md:text-lg">Most businesses are still running on manual processes that cost hours every day. Here&apos;s what changes when you work with us.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 relative">
                    {/* Legacy Node */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-zinc-500/5 rounded-3xl blur-xl transition-opacity opacity-50 group-hover:opacity-100" />
                        <div className="relative h-full bg-white/[0.03] border border-zinc-700/40 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-zinc-800/80 rounded-xl text-zinc-400">
                                    <Server className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">How Most Businesses Run Today</h3>
                            </div>

                            <ul className="space-y-5">
                                {[
                                    { title: "Copy-pasting between spreadsheets", desc: "Staff spend hours moving data from emails into spreadsheets, from spreadsheets into CRMs, and from CRMs into invoicing tools — all by hand." },
                                    { title: "Chasing replies and follow-ups", desc: "Leads go cold because no one had time to respond. Client emails sit unanswered for days. Appointments get missed." },
                                    { title: "Hiring to handle admin", desc: "Instead of hiring people to grow the business, you're hiring people just to keep up with the paperwork." },
                                    { title: "No visibility on what's working", desc: "Revenue, costs, and performance data lives in five different places. Getting a clear picture means hours of manual reporting." },
                                    { title: "Your team is stretched thin", desc: "Good people are burned out on repetitive tasks they shouldn't be doing, and the work that actually matters keeps getting pushed back." },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400">
                                        <XCircle className="w-5 h-5 text-red-500/60 shrink-0 mt-1" />
                                        <div>
                                            <span className="font-semibold text-gray-300 block">{item.title}</span>
                                            <span className="text-sm leading-relaxed">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Quantum Node */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl transition-opacity opacity-70 group-hover:opacity-100 animate-pulse-slow" />
                        <div className="relative h-full bg-black/60 border border-primary/30 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-md overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-primary/20 rounded-xl text-primary neon-glow-primary">
                                        <Cpu className="w-8 h-8 " />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">How It Works With Us</h3>
                                </div>

                                <ul className="space-y-5">
                                    {[
                                        { title: "Your systems talk to each other", desc: "We connect your CRM, email, calendar, and invoicing into one automated pipeline. Data flows where it needs to go — no copying, no errors." },
                                        { title: "AI handles your inbox and scheduling", desc: "A digital employee reads emails, replies to enquiries, books appointments, and follows up — 24 hours a day, 7 days a week." },
                                        { title: "You see everything in one place", desc: "Live dashboards show revenue, pipeline, and operational data pulled automatically from every tool you use. No more manual reports." },
                                        { title: "You scale without hiring for admin", desc: "The busywork is handled. When you hire next, it's for someone who drives growth — not someone to manage a spreadsheet." },
                                        { title: "Your team focuses on what matters", desc: "With the repetitive work automated, your people spend their time on clients, strategy, and the work that actually moves the needle." },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white">
                                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1 shadow-[0_0_10px_rgba(0,255,255,0.5)] rounded-full" />
                                            <div>
                                                <span className="font-semibold block">{item.title}</span>
                                                <span className="text-sm text-gray-400 leading-relaxed">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
