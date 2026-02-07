"use client";

import { PricingCard } from "@/components/services/PricingCard";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import {
    Bot,
    Globe,
    Search,
    CheckCircle2,
    ArrowRight,
    Clock,
    Zap,
    ShieldCheck,
    MessageSquare,
    Calendar,
    Mail,
    Database,
    BarChart3,
    Users,
    HeadphonesIcon
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ServicesContent() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary/30 font-sans">

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#050510] via-black to-black">
                {/* Mesh gradient blobs */}
                <div className="absolute top-[-200px] left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="absolute bottom-[-100px] right-1/4 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[140px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-mono text-primary/80 tracking-widest uppercase">Quantum Flow Automation</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Stop Drowning in Admin. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                                Start Running Your Business.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                            We build AI that handles the work you shouldn't be doing yourself.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <Link
                                href="#pillars"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- WHY US SECTION --- */}
            <section className="relative py-20 border-y border-white/5 bg-gradient-to-b from-[#0a0a12] to-[#080810]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,229,160,0.04),transparent)] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "We Actually Use AI",
                                desc: "Our own operations run on the tools we build for you.",
                                icon: Bot
                            },
                            {
                                title: "Local & Personal",
                                desc: "Talk directly to the people doing the work in Burnley, UK.",
                                icon: Users
                            },
                            {
                                title: "No Agency Fluff",
                                desc: "Clear pricing, clear deliverables, no detailed BS.",
                                icon: ShieldCheck
                            },
                            {
                                title: "End-to-End",
                                desc: "Strategy → Build → Support, all under one roof.",
                                icon: Zap
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                                <item.icon className="w-8 h-8 text-primary mb-4" />
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            "You know AI is important. You just don't know where to start.<br />
                            <span className="text-primary">That's exactly where we come in.</span>"
                        </h2>
                    </div>
                </div>
            </section>

            {/* --- THREE PILLARS OVERVIEW --- */}
            <section id="pillars" className="relative py-32 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Three Pillars</h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Simple, scalable solutions designed to solve specific business problems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <Link href="#audit" className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Search className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">AI Audit</h3>
                            <p className="text-gray-400 mb-6 min-h-[48px]">Find out exactly where AI will save you time before you invest.</p>
                            <div className="text-sm font-mono text-blue-400">From £500</div>
                        </Link>

                        {/* Pillar 2 */}
                        <Link href="#websites" className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <Globe className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">AI Websites</h3>
                            <p className="text-gray-400 mb-6 min-h-[48px]">Websites that answer questions, capture leads, and book meetings.</p>
                            <div className="text-sm font-mono text-purple-400">From £1,000</div>
                        </Link>

                        {/* Pillar 3 */}
                        <Link href="#employee" className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <Bot className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">AI Employee</h3>
                            <p className="text-gray-400 mb-6 min-h-[48px]">A 24/7 assistant that handles email, scheduling, and research.</p>
                            <div className="text-sm font-mono text-green-400">From £1,000</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- DETAILED SECTION 1: AUDIT --- */}
            <section id="audit" className="relative py-32 border-t border-white/5 bg-gradient-to-b from-[#060612] to-black">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2 block">Pillar 01</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Audit & Consulting</h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Find out exactly where AI can transform your business before you invest.
                            We identify <span className="text-white font-medium">repetitive tasks</span>, <span className="text-white font-medium">wasteful processes</span>, and <span className="text-white font-medium">missed opportunities</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { label: "Repetitive Tasks", desc: "Identify work that could be automated" },
                                { label: "Communication Flows", desc: "Email, chat, customer enquiries" },
                                { label: "Data & Documents", desc: "Processing, extraction, analysis" },
                                { label: "Decision Points", desc: "Where AI could assist or automate" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">{item.label}</h4>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/20 to-transparent p-8 rounded-3xl border border-blue-500/20">
                            <h3 className="text-xl font-bold mb-6">Who It's For</h3>
                            <ul className="space-y-4">
                                {["Business owners confused by AI hype", "Managers drowning in manual processes", "Companies considering hiring more staff"].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PricingCard
                            title="Discovery Session"
                            price="£500"
                            description="90-min deep dive call + written report."
                            features={["90 Minute Call", "Written Report", "Top 5 Opportunities", "Implementation Roadmap"]}
                        />
                        <PricingCard
                            title="Strategic Retainer"
                            price="£750/mo"
                            description="Your ongoing AI strategy partner."
                            features={["Monthly Strategy Call", "Priority Advisor Access", "First Look at Tools", "Reactive Support"]}
                            isPopular
                        />
                        <PricingCard
                            title="Full Audit"
                            price="£2,000"
                            description="Comprehensive operational analysis."
                            features={["Everything in Discovery", "Staff Interviews", "Process Documentation", "90-Day Plan", "Vendor Comparisons"]}
                        />
                    </div>
                </div>
            </section>

            {/* --- DETAILED SECTION 2: WEBSITES --- */}
            <section id="websites" className="py-32 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#08060e] to-black">
                {/* Background glow for this section */}
                <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2 block">Pillar 02</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">AI-First Websites & Apps</h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Not just a website. A website that works for you.
                            We build high-performance digital assets that <span className="text-white font-medium">convert visitors</span> and <span className="text-white font-medium">automate service</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <MessageSquare className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="font-bold mb-2">AI Chat</h3>
                            <p className="text-sm text-gray-400">Answer customer questions 24/7 (not a dumb chatbot).</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Zap className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="font-bold mb-2">Dynamic Content</h3>
                            <p className="text-sm text-gray-400">Personalise based on visitor behaviour.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Database className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="font-bold mb-2">Smart Capture</h3>
                            <p className="text-sm text-gray-400">Qualify prospects automatically before you talk to them.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Calendar className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="font-bold mb-2">Auto-Booking</h3>
                            <p className="text-sm text-gray-400">AI-powered availability management and scheduling.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <PricingCard
                            title="Static Site"
                            price="£1,000"
                            description="Clean, modern presence."
                            features={["3-5 Pages", "Mobile Responsive", "Contact Form", "Basic SEO", "No AI Features"]}
                        />
                        <PricingCard
                            title="Starter Site"
                            price="£3,000"
                            description="Basic AI integration."
                            features={["5 Pages", "AI Chat Widget", "Smart Contact Form", "Mobile Optimised", "Fast Hosting"]}
                            isPopular
                        />
                        <PricingCard
                            title="Business Site"
                            price="£6,000"
                            description="Full AI powerhouse."
                            features={["10+ Pages", "Booking Integration", "CRM Connection", "AI Blog Generation", "Advanced Analytics"]}
                        />
                        <PricingCard
                            title="Custom App"
                            price="£10k+"
                            description="Bespoke application."
                            features={["Web Application", "Complex AI Models", "User Auth", "Database", "API Integrations"]}
                        />
                    </div>
                </div>
            </section>

            {/* --- DETAILED SECTION 3: EMPLOYEE --- */}
            <section id="employee" className="py-32 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#060e08] to-black">
                {/* Background glow for this section */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-green-500/4 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <span className="text-green-400 font-mono text-sm tracking-widest uppercase mb-2 block">Pillar 03</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Employee</h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Like hiring a brilliant assistant who costs less than a part-time hire, never takes a sick day, and gets smarter the longer they work with you.
                        </p>
                    </div>

                    {/* Feature Highlight */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-4">Lives Where You Work</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Your AI employee doesn't need a login. They live in <span className="text-white">WhatsApp</span>, <span className="text-white">Telegram</span>, or <span className="text-white">Slack</span>. You communicate with them just like a real person.
                                </p>
                                <div className="flex gap-4">
                                    <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-mono">WhatsApp</div>
                                    <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono">Telegram</div>
                                    <div className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-mono">Email</div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 aspect-square bg-black/50 rounded-2xl border border-white/5 flex items-center justify-center">
                                <Bot className="w-20 h-20 text-green-500 opacity-80" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h4 className="font-bold flex items-center gap-2 mb-2">
                                    <Mail className="w-5 h-5 text-green-400" /> Handles Email
                                </h4>
                                <p className="text-sm text-gray-400">Reads, summarises, drafts, and manages your inbox.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h4 className="font-bold flex items-center gap-2 mb-2">
                                    <Calendar className="w-5 h-5 text-green-400" /> Manages Calendar
                                </h4>
                                <p className="text-sm text-gray-400">Scheduling, reminders, and conflict resolution.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h4 className="font-bold flex items-center gap-2 mb-2">
                                    <Clock className="w-5 h-5 text-green-400" /> 24/7 Response
                                </h4>
                                <p className="text-sm text-gray-400">Instant answers to customer questions and leads.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <PricingCard
                            title="Basic"
                            price="£1,000"
                            description="Quick start solution."
                            features={["WhatsApp Channel", "Branded AI Assistant", "Basic Personality", "30 Days Support"]}
                        />
                        <PricingCard
                            title="Starter"
                            price="£2,000"
                            description="Configured & Ready."
                            features={["Everything in Basic", "Calendar Integration", "Custom Skills", "Key Workflow Setup", "30 Days Support"]}
                            isPopular
                        />
                        <PricingCard
                            title="Professional"
                            price="£4,000"
                            description="Deep business integration."
                            features={["Everything in Starter", "Multi-channel", "Daily Automations", "Proactive Tasks", "60 Days Support"]}
                        />
                        <PricingCard
                            title="Enterprise"
                            price="Bespoke"
                            description="Fully custom solution."
                            features={["Website Chat", "CRM Integration", "Custom APIs", "Advanced Skills", "120 Days Support"]}
                        />
                    </div>

                    {/* Support Add-on Strip */}
                    <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <HeadphonesIcon className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                                <h4 className="font-bold">Ongoing Support Plans</h4>
                                <p className="text-sm text-gray-400">Keep your AI employee optimized.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                                <span className="block font-bold">Standard • £150/mo</span>
                                <span className="text-xs text-gray-500">Updates & Bug Fixes</span>
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-green-900/20 border border-green-500/30">
                                <span className="block font-bold text-green-400">Growth • £500/mo</span>
                                <span className="text-xs text-green-500/60">Strategy Call + New Workflows</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- GROWTH PARTNER --- */}
            <section className="relative py-20 bg-gradient-to-b from-black to-[#0e0a04]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(245,158,11,0.04),transparent)] pointer-events-none" />
                <div className="container mx-auto px-6">
                    <div className="relative rounded-3xl overflow-hidden border border-amber-500/30">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-black"></div>
                        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

                        <div className="relative z-10 p-12 md:p-20 flex flex-col lg:flex-row gap-12 items-center">
                            <div className="flex-1">
                                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs tracking-widest uppercase">
                                    Total Transformation
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold mb-6">AI Growth Partner</h2>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    Not just a project — a partnership. We embed AI into your operations, train your team, and keep optimising until it's running like clockwork.
                                </p>
                                <div className="text-3xl font-bold text-amber-400 mb-2">£15,000</div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest mb-10">6 Month Program</div>

                                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-colors">
                                    Apply for Partnership <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Full AI Audit + Strategy",
                                    "Custom Website / Dashboard",
                                    "Team Training Sessions",
                                    "Enterprise AI Employee",
                                    "6 Months Growth Support",
                                    "Priority Direct Access"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-white/5">
                                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- HOW WE WORK --- */}
            <section className="relative py-32 bg-gradient-to-b from-black to-[#050508]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,229,160,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,229,160,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">Protocol</span>
                        <h2 className="text-4xl font-bold mb-4">How We Work</h2>
                        <p className="text-gray-400">Simple, transparent, no surprises.</p>
                    </div>

                    <ProcessTimeline />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center">
                        <div>
                            <h4 className="font-bold flex items-center justify-center gap-2 mb-2">
                                <MessageSquare className="w-5 h-5 text-primary" /> Clear Communication
                            </h4>
                            <p className="text-sm text-gray-400">Regular updates, no radio silence.</p>
                        </div>
                        <div>
                            <h4 className="font-bold flex items-center justify-center gap-2 mb-2">
                                <ShieldCheck className="w-5 h-5 text-primary" /> No Hidden Costs
                            </h4>
                            <p className="text-sm text-gray-400">If scope changes, we discuss it first.</p>
                        </div>
                        <div>
                            <h4 className="font-bold flex items-center justify-center gap-2 mb-2">
                                <BarChart3 className="w-5 h-5 text-primary" /> Real Results
                            </h4>
                            <p className="text-sm text-gray-400">Measurable impact on your time and operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="container mx-auto px-6 mb-20">
                <div className="relative rounded-3xl overflow-hidden p-12 md:p-24 text-center border border-white/10 bg-white/5">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
                        <p className="text-gray-400 text-xl mb-10">
                            Scan to message us on WhatsApp, or book a free 30 minute discovery call.
                            No obligation, no sales pressure.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <button className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20bd5a] transition-colors">
                                <MessageSquare className="w-6 h-6" />
                                Speak to our Team
                            </button>
                            <Link href="/contact" className="text-sm text-gray-400 hover:text-white underline underline-offset-4">
                                Or book a discovery call
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
