'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import { useParams } from "next/navigation";

// Mock Content Database
const POSTS: Record<string, any> = {
    "agentic-ai-revolution": {
        title: "The Agentic AI Revolution: Why Chatbots Are Dead",
        date: "October 12, 2025",
        tag: "Strategy",
        readTime: "5 min read",
        content: `
            <p className="mb-6">The era of the simple chatbot is over. We are entering the age of the <strong>Autonomous Agent</strong>.</p>
            <p className="mb-6">For the last two years, businesses have been obsessed with "chatting" to their data. RAG (Retrieval Augmented Generation) became the standard. But chatting is passive. You ask a question, you get an answer. Then <em>you</em> have to do the work.</p>
            <p className="mb-6"><strong>Agentic AI</strong> flips this model. Instead of waiting for a prompt, an agent is given a goal. "Increase leads by 20%," "Reconcile these invoices," or "Monitor this server log."</p>
            <h3 className="text-2xl font-bold text-white mt-12 mb-6">The Shift to Agency</h3>
            <p className="mb-6">Agents have agency. They can:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Plan</strong>: Break a complex goal into steps.</li>
                <li><strong>Execute</strong>: Use tools (APIs, browsers, databases) to perform actions.</li>
                <li><strong>Observe</strong>: See the result of their action.</li>
                <li><strong>Correct</strong>: If the result isn't what they expected, they try a different approach.</li>
            </ul>
            <p className="mb-6">This loop—Plan, Execute, Observe, Correct—is what separates a toy from an employee.</p>
        `
    },
    "google-unified-stack": {
        title: "Why We Bet on the Google Unified Stack",
        date: "November 5, 2025",
        tag: "Tech",
        readTime: "8 min read",
        content: `
            <p className="mb-6">When building enterprise-grade AI, you need infrastructure that doesn't blink. That's why we chose Google.</p>
            <p className="mb-6">Gemini 1.5 Pro has a context window of 2 million tokens. That's not just a spec; it's a fundamental change in capability. It means an agent can read your entire codebase, your entire customer history, or your entire legal archive in a single prompt.</p>
        `
    },
    "neural-enterprise": {
        title: "Building the Neural Enterprise",
        date: "January 15, 2026",
        tag: "Philosophy",
        readTime: "6 min read",
        content: `
            <p className="mb-6">Most businesses are structured like factories. Information flows down, decisions flow up. It's slow, lossy, and inefficient.</p>
            <p className="mb-6">The Neural Enterprise is different. It's structured like a brain. Small, autonomous units (agents) operate independently but share a common nervous system (data layer).</p>
        `
    }
};

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug as string;
    const post = POSTS[slug];

    if (!post) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-zinc-500 mb-8">Signal Lost. Post not found.</p>
                    <Link href="/blog" className="text-primary hover:underline">Return to Log</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            <main className="pt-32 pb-24">
                <article className="container mx-auto px-6 max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-12 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Log
                    </Link>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 border-b border-white/10 pb-12"
                    >
                        <div className="flex gap-6 text-sm font-mono text-zinc-500 uppercase tracking-wider mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2 text-primary">
                                <Tag className="w-4 h-4" />
                                {post.tag}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                            {post.title}
                        </h1>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-invert prose-lg max-w-none text-zinc-300 [&>h3]:text-white [&>strong]:text-white"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </main>

            <Footer />
        </div>
    );
}
