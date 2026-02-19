"use client";

import { PricingCard } from "@/components/services/PricingCard";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { SplineScene } from "@/components/3d/SplineScene";
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
    HeadphonesIcon,
    Layers,
    Code2,
    Sparkles,
    Monitor
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";


export function ServicesContent() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary/30 font-sans">

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#050510] via-black to-black">
                {/* Spline 3D Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0" style={{ transform: 'scale(1.15)', transformOrigin: 'center center' }}>
                        <SplineScene
                            scene="https://prod.spline.design/QYEJMLhOC333ohDS/scene.splinecode"
                            interactive={false}
                        />
                    </div>
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black pointer-events-none" />
                </div>
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
                            AI Audits. AI Websites. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                                AI Employees for Your Business.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                            We build and deploy AI that automates your operations — from intelligent websites that convert, to AI assistants that handle your admin 24/7.
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
                            <h3 className="text-2xl font-bold mb-2">Websites & Apps</h3>
                            <p className="text-gray-400 mb-6 min-h-[48px]">From a clean business site to a full custom platform. Info, style, or function.</p>
                            <div className="text-sm font-mono text-purple-400">From £1,000</div>
                        </Link>

                        {/* Pillar 3 */}
                        <Link href="#employee" className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <Bot className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">AI Employees & Automations</h3>
                            <p className="text-gray-400 mb-6 min-h-[48px]">AI assistants and automated workflows that handle your admin 24/7.</p>
                            <div className="text-sm font-mono text-green-400">From £1,000</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- DETAILED SECTION 1: AI READINESS & STRATEGIC GROWTH --- */}
            <section id="audit" className="relative py-32 border-t border-white/5 bg-gradient-to-b from-[#060612] to-black">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2 block">Pillar 01</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Readiness & Strategic Growth</h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Diagnosis before the prescription. We identify exactly where AI will save you <span className="text-white font-medium">time</span> and <span className="text-white font-medium">money</span> — then guide you through adopting it safely and effectively.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1: AI Readiness Audit */}
                        <div className="relative flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1">
                            <div className="mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <Search className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-1">AI Readiness Audit</h3>
                                <div className="flex items-baseline gap-2 mb-3">
                                    <span className="text-3xl font-bold text-white">£500</span>
                                    <span className="text-sm text-gray-500">one-time</span>
                                </div>
                                <p className="text-gray-400 italic">The &ldquo;Diagnosis before the Prescription.&rdquo;</p>
                            </div>

                            <p className="text-sm text-gray-300 mb-6">
                                We identify exactly where AI will save you time and money before you spend a penny on building anything.
                            </p>

                            <div className="flex-grow mb-6">
                                <h4 className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4">Deliverables</h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-white">90-Minute Strategy Session</span>
                                            <p className="text-sm text-gray-400 mt-1">Deep dive into your current operations, bottlenecks, and tech stack.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-white">The &ldquo;Money Map&rdquo; Report</span>
                                            <p className="text-sm text-gray-400 mt-1">A prioritised list of high-ROI automation opportunities tailored to your business.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-white">Implementation Roadmap</span>
                                            <p className="text-sm text-gray-400 mt-1">A step-by-step plan — what to build, which tools to use, and who should build it.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <Link href="/contact" className="w-full py-3 rounded-lg font-bold text-sm bg-white/10 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                                Book Your Audit <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Card 2: Strategic Growth Partner */}
                        <div className="relative flex flex-col p-8 rounded-3xl border border-primary/50 bg-white/10 shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:border-primary/70 transition-all duration-300 group hover:-translate-y-1">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-black text-xs font-bold rounded-full uppercase tracking-wider">
                                Recommended
                            </div>

                            <div className="mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-1">Strategic Growth Partner</h3>
                                <div className="flex items-baseline gap-2 mb-3">
                                    <span className="text-3xl font-bold text-white">£750</span>
                                    <span className="text-sm text-gray-500">/ month</span>
                                </div>
                                <p className="text-gray-400 italic">Your Fractional Head of AI. We guide, you execute.</p>
                            </div>

                            <p className="text-sm text-gray-300 mb-6">
                                Ensure your business adopts AI safely and effectively. We act as your safety net and navigator.
                            </p>

                            <div className="flex-grow mb-6">
                                <h4 className="text-xs font-mono text-primary tracking-widest uppercase mb-4">Deliverables</h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-white">Proactive Strategy (Monthly)</span>
                                            <p className="text-sm text-gray-400 mt-1">60-minute video call to review progress, set the tech roadmap, and ensure you&apos;re ahead of competitors.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-white">Unlimited Advisory Access</span>
                                            <p className="text-sm text-gray-400 mt-1">Message us anytime (WhatsApp/Email) for a second opinion on tools, hires, or ideas. We stop you from making expensive mistakes.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-white">Architecture & Workflow Design</span>
                                            <p className="text-sm text-gray-400 mt-1">We review software choices and engineer workflows before you buy — ensuring they fit the architecture.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <Link href="/contact" className="w-full py-3 rounded-lg font-bold text-sm bg-primary text-black hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                                Become a Partner <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DETAILED SECTION 2: WEBSITES & APPS --- */}
            <section id="websites" className="py-32 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#08060e] to-black">
                {/* Background glow for this section */}
                <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2 block">Pillar 02</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Websites & Apps</h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            From a clean online presence to a full software platform.
                            Three tiers, one philosophy: <span className="text-white font-medium">build what you actually need</span>.
                        </p>
                    </div>

                    {/* Tier split visual */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
                        <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-sm font-mono text-gray-500">£1k</span>
                            <p className="text-xs text-gray-400 mt-1">Info</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                            <span className="text-sm font-mono text-purple-400">£3k</span>
                            <p className="text-xs text-purple-300/60 mt-1">Style</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-sm font-mono text-gray-500">£5k+</span>
                            <p className="text-xs text-gray-400 mt-1">Function</p>
                        </div>
                    </div>

                    {/* 3-Tier Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                        {/* Tier 1: Business Site */}
                        <div className="relative flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1">
                            <div className="mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-gray-300 group-hover:bg-white group-hover:text-black transition-colors">
                                    <Monitor className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-1">Business Site</h3>
                                <div className="flex items-baseline gap-2 mb-3">
                                    <span className="text-3xl font-bold text-white">£1,000</span>
                                </div>
                                <p className="text-gray-400 italic">Get online. Clean, fast, professional.</p>
                            </div>

                            <p className="text-sm text-gray-300 mb-6">
                                A polished 2D website that gets your business online with everything you need — nothing you don&apos;t.
                            </p>

                            <div className="flex-grow mb-6">
                                <ul className="space-y-3">
                                    {[
                                        "3–5 pages, fully responsive",
                                        "Clean, modern design",
                                        "Contact form & map",
                                        "SEO optimised",
                                        "Fast hosting setup",
                                        "Google Analytics"
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact" className="w-full py-3 rounded-lg font-bold text-sm bg-white/10 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                                Get Started <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Tier 2: Interactive Site — Featured */}
                        <div className="relative flex flex-col p-8 rounded-3xl border border-purple-500/50 bg-gradient-to-b from-purple-900/20 to-white/5 shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:border-purple-400/70 transition-all duration-300 group hover:-translate-y-2 md:-mt-4">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>

                            <div className="mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                    <Sparkles className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-1">Interactive Site</h3>
                                <div className="flex items-baseline gap-2 mb-3">
                                    <span className="text-3xl font-bold text-white">£3,000</span>
                                </div>
                                <p className="text-purple-300/80 italic">Look like a million-dollar brand.</p>
                            </div>

                            <p className="text-sm text-gray-300 mb-6">
                                The &ldquo;wow&rdquo; factor. 3D elements, smooth animations, and a CMS so you can update it yourself. This is the one that turns heads.
                            </p>

                            <div className="flex-grow mb-6">
                                <ul className="space-y-3">
                                    {[
                                        "Everything in Business Site",
                                        "3D elements & animations",
                                        "CMS (edit your own content)",
                                        "Smart contact forms",
                                        "Premium visual design",
                                        "AI chat widget",
                                        "Booking integration"
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact" className="w-full py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-400 hover:to-pink-400 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                                Build My Site <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Tier 3: Custom App / Platform */}
                        <div className="relative flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1">
                            <div className="mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <Code2 className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-1">Custom App / Platform</h3>
                                <div className="flex items-baseline gap-2 mb-3">
                                    <span className="text-3xl font-bold text-white">£5,000+</span>
                                </div>
                                <p className="text-gray-400 italic">Run your business on it.</p>
                            </div>

                            <p className="text-sm text-gray-300 mb-6">
                                Full software. Dashboards, client portals, complex logic, and integrations. This isn&apos;t a website — it&apos;s a platform.
                            </p>

                            <div className="flex-grow mb-6">
                                <ul className="space-y-3">
                                    {[
                                        "Web application (not a site)",
                                        "User authentication & roles",
                                        "Database & API integrations",
                                        "Dashboards & analytics",
                                        "Client / customer portals",
                                        "Custom business logic",
                                        "Ongoing support options"
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact" className="w-full py-3 rounded-lg font-bold text-sm bg-white/10 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                                Discuss My Project <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DETAILED SECTION 3: AI EMPLOYEES & AUTOMATIONS --- */}
            <section id="employee" className="py-32 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#060e08] to-black">
                {/* Background glow for this section */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Hero Row — Spline + Intro */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <span className="text-green-400 font-mono text-sm tracking-widest uppercase mb-2 block">Pillar 03</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Employees & Automations</h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Like hiring a brilliant assistant who costs less than a part-time hire, never takes a sick day, and gets <span className="text-white font-medium">smarter the longer they work with you</span>.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <div className="px-4 py-2 bg-green-500/15 text-green-400 rounded-full text-sm font-mono border border-green-500/20">WhatsApp</div>
                                <div className="px-4 py-2 bg-blue-500/15 text-blue-400 rounded-full text-sm font-mono border border-blue-500/20">Slack</div>
                                <div className="px-4 py-2 bg-purple-500/15 text-purple-400 rounded-full text-sm font-mono border border-purple-500/20">Teams</div>
                                <div className="px-4 py-2 bg-gray-700/40 text-gray-300 rounded-full text-sm font-mono border border-white/10">Email</div>
                            </div>
                        </div>
                        <div className="relative aspect-square max-w-[420px] mx-auto w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/5 rounded-3xl" />
                            <div className="w-full h-full rounded-3xl border border-green-500/20 overflow-hidden relative">
                                <SplineScene
                                    scene="https://prod.spline.design/hUyqwd5GoR1ulQXz/scene.splinecode"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tier split visual */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
                        <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-sm font-mono text-gray-500">£1k + £200/mo</span>
                            <p className="text-xs text-gray-400 mt-1">Single-Player</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                            <span className="text-sm font-mono text-green-400">£3k + £750/mo</span>
                            <p className="text-xs text-green-300/60 mt-1">Multi-Player</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-sm font-mono text-gray-500">£6k+</span>
                            <p className="text-xs text-gray-400 mt-1">Infrastructure</p>
                        </div>
                    </div>

                    {/* 3-Tier Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                        {/* Tier 1: Personal AI Assistant */}
                        <div className="relative flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-green-500/30 transition-all duration-300 group hover:-translate-y-1">
                            <div className="mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-green-500/15 flex items-center justify-center mb-6 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <MessageSquare className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-1">Personal AI Assistant</h3>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-3xl font-bold text-white">£1,000</span>
                                    <span className="text-sm text-gray-500">setup</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-lg font-semibold text-green-400">+ £200</span>
                                    <span className="text-sm text-gray-500">/ month</span>
                                </div>
                                <p className="text-gray-400 italic mt-3">Single-player mode. Your own AI right-hand.</p>
                            </div>

                            <p className="text-sm text-gray-300 mb-6">
                                A personal AI assistant that lives in your pocket. Handles your messages, manages your calendar, and runs your daily tasks — so you don&apos;t have to.
                            </p>

                            <div className="flex-grow mb-6">
                                <ul className="space-y-3">
                                    {[
                                        "WhatsApp / Telegram channel",
                                        "Calendar management",
                                        "Task & reminder system",
                                        "Email drafting & triage",
                                        "Personalised AI personality",
                                        "30 days onboarding support"
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-green-500/60 shrink-0 mt-0.5" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact" className="w-full py-3 rounded-lg font-bold text-sm bg-white/10 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                                Get Started <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Tier 2: Team AI Assistant — Featured */}
                        <div className="relative flex flex-col p-8 rounded-3xl border border-green-500/50 bg-gradient-to-b from-green-900/20 to-white/5 shadow-[0_0_40px_rgba(34,197,94,0.12)] hover:border-green-400/70 transition-all duration-300 group hover:-translate-y-2 md:-mt-4">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-500 to-emerald-400 text-black text-xs font-bold rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>

                            <div className="mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-1">Team AI Assistant</h3>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-3xl font-bold text-white">£3,000</span>
                                    <span className="text-sm text-gray-500">setup</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-lg font-semibold text-green-400">+ £750</span>
                                    <span className="text-sm text-gray-500">/ month</span>
                                </div>
                                <p className="text-green-300/80 italic mt-3">Multi-player mode. AI for the whole team.</p>
                            </div>

                            <p className="text-sm text-gray-300 mb-6">
                                Deploy an AI teammate into your group chats. It learns your company knowledge base, supports your whole team, and scales as you grow.
                            </p>

                            <div className="flex-grow mb-6">
                                <ul className="space-y-3">
                                    {[
                                        "Everything in Personal",
                                        "Slack / Teams integration",
                                        "Group chat channels",
                                        "Company knowledge base",
                                        "Multi-user access & roles",
                                        "Team onboarding & training",
                                        "Priority support"
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact" className="w-full py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-green-500 to-emerald-400 text-black hover:from-green-400 hover:to-emerald-300 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 shadow-[0_0_20px_rgba(34,197,94,0.25)]">
                                Build My Team AI <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Tier 3: Custom Solutions */}
                        <div className="relative flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-green-500/30 transition-all duration-300 group hover:-translate-y-1">
                            <div className="mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-6 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                    <Layers className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-1">Custom Solutions</h3>
                                <div className="flex items-baseline gap-2 mb-3">
                                    <span className="text-3xl font-bold text-white">£6,000+</span>
                                </div>
                                <p className="text-gray-400 italic">Infrastructure mode. Enterprise-grade AI.</p>
                            </div>

                            <p className="text-sm text-gray-300 mb-6">
                                Deep workflow automation and enterprise integrations. We architect AI systems that plug directly into your operations and scale with your business.
                            </p>

                            <div className="flex-grow mb-6">
                                <ul className="space-y-3">
                                    {[
                                        "Bespoke AI architecture",
                                        "Deep workflow automation",
                                        "CRM / ERP integrations",
                                        "Multi-agent orchestration",
                                        "Custom API development",
                                        "Dedicated project manager",
                                        "Ongoing support options"
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact" className="w-full py-3 rounded-lg font-bold text-sm bg-white/10 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                                Discuss My Project <ArrowRight className="w-4 h-4" />
                            </Link>
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

            {/* --- AI GROWTH PARTNER — PREMIUM OFFER --- */}
            <section className="relative py-32 border-t border-white/5 overflow-hidden bg-gradient-to-b from-[#0a0806] to-black">
                {/* Background glow */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">Premium Engagement</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Growth Partner</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A full-spectrum AI transformation. We don&apos;t just advise — we <span className="text-white font-medium">build, deploy, and manage</span> an entire AI infrastructure tailored to your business.
                        </p>
                    </div>

                    {/* Main card */}
                    <div className="max-w-4xl mx-auto">
                        <div className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-900/10 via-white/5 to-white/[0.02] p-10 md:p-14 shadow-[0_0_60px_rgba(245,158,11,0.08)]">
                            {/* Price header */}
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 pb-10 border-b border-white/10">
                                <div>
                                    <p className="text-sm text-amber-400 font-mono tracking-widest uppercase mb-2">Full AI Transformation</p>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-2">AI Growth Partner</h3>
                                    <p className="text-gray-400 max-w-md">
                                        Everything we offer, engineered into one cohesive system. Strategy, build, and ongoing management — all handled.
                                    </p>
                                </div>
                                <div className="text-right shrink-0">
                                    <div className="flex items-baseline gap-2 justify-end">
                                        <span className="text-4xl md:text-5xl font-bold text-white">£15,000</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">One-time investment + ongoing support</p>
                                </div>
                            </div>

                            {/* Key stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                    <div className="text-2xl font-bold text-amber-400 mb-1">360°</div>
                                    <p className="text-xs text-gray-400">Full AI audit & strategy</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                    <div className="text-2xl font-bold text-amber-400 mb-1">Custom</div>
                                    <p className="text-xs text-gray-400">AI website or app</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                    <div className="text-2xl font-bold text-amber-400 mb-1">Team</div>
                                    <p className="text-xs text-gray-400">AI assistant deployed</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                    <div className="text-2xl font-bold text-amber-400 mb-1">180 Days</div>
                                    <p className="text-xs text-gray-400">Growth partnership</p>
                                </div>
                            </div>

                            {/* Deliverables */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mb-10">
                                {[
                                    "Comprehensive AI Readiness Audit",
                                    "Custom AI-powered website or app",
                                    "Team AI Assistant (Slack/Teams/WhatsApp)",
                                    "CRM & workflow automations",
                                    "Ongoing strategic advisory (12 months)",
                                    "Monthly strategy & performance calls",
                                    "Priority support & dedicated Slack channel",
                                    "Quarterly roadmap reviews & optimisation",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 py-2">
                                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                                        <span className="text-sm text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]">
                                    Apply for Growth Partnership <ArrowRight className="w-5 h-5" />
                                </Link>
                                <span className="text-sm text-gray-500">Limited availability — max 3 partners per quarter</span>
                            </div>
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
