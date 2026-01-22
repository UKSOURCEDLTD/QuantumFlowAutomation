import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuantumField } from "@/components/3d/QuantumField";
import { Database, Bot, BrainCircuit, Globe, Code2, Server, Cpu, Network, Zap, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-20">
            <Navbar />
            <QuantumField />

            <main className="container mx-auto px-6 py-20 relative z-10">
                {/* Hero Section */}
                <div className="mb-32 text-center animate-fade-in-up">
                    <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
                        <span className="text-primary text-xs font-mono tracking-[0.2em] uppercase">Future-Proof Your Business</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        BRING YOUR BUSINESS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">
                            INTO THE AI ERA
                        </span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        You don't need to understand code to use AI. We build the tools that save you time,
                        cut your costs, and grow your sales—so you can focus on running your business.
                    </p>
                </div>

                {/* Service 01: AI First Website */}
                <div className="mb-32 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                    <div className="relative p-8 md:p-12 glass-card rounded-xl overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 text-primary">
                                        <Globe className="w-8 h-8" />
                                    </div>
                                    <span className="text-gray-500 font-mono text-sm tracking-wider">SERVICE // 01</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">A Website That Actually Sells</h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    We build <strong>AI-First</strong> websites that bring your business into 2026.
                                    Stop relying on the dusty tech of the last decade. Put yourself on the right side of the paradigm shift
                                    with modern, intelligent infrastructure.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                        <Bot className="w-5 h-5 text-primary mb-2" />
                                        <h4 className="text-white font-semibold mb-1">24/7 AI Sales Rep</h4>
                                        <p className="text-xs text-gray-400">Books meetings while you sleep</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                        <Zap className="w-5 h-5 text-secondary mb-2" />
                                        <h4 className="text-white font-semibold mb-1">Google-Grade Tech</h4>
                                        <p className="text-xs text-gray-400">Future-proof infrastructure</p>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {["Understands human questions, not just keywords", "Personalizes content for each visitor", "Never misses a lead (even at 3 AM)", "Optimized for the new AI search engines"].map((item) => (
                                        <li key={item} className="flex items-center text-gray-300">
                                            <ChevronRight className="w-4 h-4 text-primary mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="order-1 md:order-2 h-full min-h-[400px] relative rounded-lg border border-white/10 bg-black/50 overflow-hidden">
                                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full bg-primary/20 blur-[60px] animate-pulse"></div>
                                    <Code2 className="w-24 h-24 text-primary/50 relative z-10" />
                                </div>
                                {/* Technical UI Elements */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="absolute bottom-4 right-4 font-mono text-xs text-primary/50">
                                    STATUS: ONLINE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service 02: AI Business Audits */}
                <div className="mb-32 relative group">
                    <div className="relative p-8 md:p-12 glass-card rounded-xl overflow-hidden border-l-4 border-l-secondary">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="h-full min-h-[400px] relative rounded-lg border border-white/10 bg-black/50 overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-black to-black"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Network className="w-24 h-24 text-secondary/50 relative z-10 animate-pulse" />
                                </div>
                                <div className="absolute inset-0 font-mono text-[10px] text-secondary/10 p-4 break-all overflow-hidden leading-none">
                                    {Array(50).fill("01011001 PROCESS MINING ").join("")}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20 text-secondary">
                                        <Database className="w-8 h-8" />
                                    </div>
                                    <span className="text-gray-500 font-mono text-sm tracking-wider">SERVICE // 02</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Find Where You're Wasting Money</h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    You're likely paying staff to do repetitive tasks that a computer could do for free.
                                    We look at how your business runs and show you exactly where AI can handle the boring stuff.
                                </p>

                                <div className="border-l border-white/10 pl-6 my-8 space-y-6">
                                    <div className="relative">
                                        <h4 className="text-white font-bold mb-2">Step 1: The Look Inside</h4>
                                        <p className="text-gray-400 text-sm">We map out everything your team does on a daily basis.</p>
                                    </div>
                                    <div className="relative">
                                        <h4 className="text-white font-bold mb-2">Step 2: Spot the Waste</h4>
                                        <p className="text-gray-400 text-sm">We identify where human time is being wasted on robot work.</p>
                                    </div>
                                    <div className="relative">
                                        <h4 className="text-white font-bold mb-2">Step 3: The Savings Plan</h4>
                                        <p className="text-gray-400 text-sm">We give you a simple roadmap to automate the repetitive tasks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service 03: AI Agentic Workflows */}
                <div className="mb-32 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                    <div className="relative p-8 md:p-12 glass-card rounded-xl overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-accent/10 rounded-lg border border-accent/20 text-accent">
                                        <Bot className="w-8 h-8" />
                                    </div>
                                    <span className="text-gray-500 font-mono text-sm tracking-wider">SERVICE // 03</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Digital Employees</h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Imagine having an employee who works 24/7, never sleeps, never complains, and costs a fraction of a salary.
                                    We build "Digital Workers" to handle your customer support, data entry, and sales outreach.
                                </p>

                                <div className="grid grid-cols-3 gap-2 mb-8">
                                    {["Customer Support", "Sales Emails", "Data Entry", "Social Media", "Market Research", "Scheduling"].map((tag) => (
                                        <span key={tag} className="px-2 py-2 bg-white/5 border border-white/10 text-[10px] text-gray-300 text-center rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-lg border border-accent/20">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Shield className="w-5 h-5 text-accent" />
                                        <span className="font-bold text-accent">Totally Secure & Private</span>
                                    </div>
                                    <p className="text-sm text-gray-400">Your business data stays yours. We build safe, private systems.</p>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 h-full min-h-[400px] relative rounded-lg border border-white/10 bg-black/50 overflow-hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 blur-[80px]"></div>
                                {/* Simple "Swarm" visualization */}
                                <div className="absolute inset-0 flex flex-wrap content-center justify-center p-8 gap-4">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                                            <Bot className="w-6 h-6 text-gray-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold mb-6">Ready to make your life easier?</h3>
                    <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-black transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        Book a Free Consultation
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
