"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import {
    Clock,
    Shield,
    Lightbulb,
    Target,
    Zap,
    CheckCircle2,
    Calendar,
    ArrowRight,
} from "lucide-react";

const agendaItems = [
    { icon: Target, label: "Current Bottleneck Analysis" },
    { icon: Lightbulb, label: "AI Feasibility Assessment" },
    { icon: Zap, label: "Implementation Roadmap" },
];

const benefits = [
    "No obligation — just value",
    "Actionable insights in 30 minutes",
    "Tailored to your specific challenges",
];

export function CalendlyBooking() {
    const [widgetLoaded, setWidgetLoaded] = useState(false);

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Ambient background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            {/* Schematic grid lines */}
            <div className="absolute inset-0 schematic-grid opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary text-xs font-mono tracking-[0.2em] uppercase">
                            Direct Booking
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Book a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">
                            Free Consultation
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Skip the forms. Pick a time that works for you and let's
                        explore how AI can transform your business.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-[380px_1fr] gap-8">
                    {/* Left Column — Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-6"
                    >
                        {/* Discovery Call Card */}
                        <div className="relative group">
                            <div className="absolute -inset-px bg-gradient-to-b from-primary/20 via-transparent to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative p-8 glass-card rounded-2xl border border-white/10">
                                {/* Top accent bar */}
                                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            Discovery Call
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span className="font-mono">
                                                30 Minutes
                                            </span>
                                            <span className="text-primary/60">
                                                •
                                            </span>
                                            <span className="text-primary font-medium">
                                                Free
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    A strategic deep-dive into your business.
                                    We'll identify the highest-impact automation
                                    opportunities and map out a clear path
                                    forward.
                                </p>

                                {/* Agenda */}
                                <div className="space-y-3 mb-6">
                                    <h4 className="text-xs font-bold text-white/60 uppercase tracking-[0.15em] flex items-center gap-2">
                                        <div className="w-4 h-px bg-primary/40" />
                                        What We'll Cover
                                    </h4>
                                    {agendaItems.map((item, i) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.3 + i * 0.1,
                                            }}
                                            className="flex items-center gap-3 group/item"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:border-primary/30 group-hover/item:bg-primary/5 transition-all duration-300">
                                                <item.icon className="w-4 h-4 text-primary/70 group-hover/item:text-primary transition-colors" />
                                            </div>
                                            <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                                                {item.label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                                {/* Benefits */}
                                <div className="space-y-2.5">
                                    {benefits.map((benefit) => (
                                        <div
                                            key={benefit}
                                            className="flex items-center gap-2.5"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-primary/60 shrink-0" />
                                            <span className="text-xs text-gray-400">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="relative p-5 rounded-xl bg-white/[0.02] border border-white/5">
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <Shield className="w-4 h-4 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white mb-1">
                                        100% Confidential
                                    </h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        Your data and business details are
                                        protected under NDA by default. We never
                                        share client information.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Prefer Email CTA */}
                        <div className="text-center pt-2">
                            <p className="text-xs text-gray-600 mb-2">
                                Prefer email instead?
                            </p>
                            <a
                                href="mailto:info@quantumflowautomation.ai"
                                className="inline-flex items-center gap-1.5 text-sm text-primary/80 hover:text-primary transition-colors font-medium group"
                            >
                                info@quantumflowautomation.ai
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column — Calendly Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="relative group"
                    >
                        {/* Glow border effect */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary/15 via-transparent to-secondary/10 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />

                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white">
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl z-10 pointer-events-none" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl z-10 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary/30 rounded-bl-2xl z-10 pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-2xl z-10 pointer-events-none" />

                            <InlineWidget
                                url="https://calendly.com/enquiries-uksourcedltd/30min"
                                styles={{
                                    height: "700px",
                                    minWidth: "320px",
                                }}
                                pageSettings={{
                                    hideEventTypeDetails: false,
                                    hideLandingPageDetails: false,
                                    primaryColor: "00E5A0",
                                    textColor: "1a1a1a",
                                    backgroundColor: "ffffff",
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
