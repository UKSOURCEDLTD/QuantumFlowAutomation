'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";

// Mock Data
const BLOG_POSTS = [
    {
        slug: "agentic-ai-revolution",
        title: "The Agentic AI Revolution: Why Chatbots Are Dead",
        excerpt: "We are moving beyond simple Q&A. Autonomous agents that can plan, execute, and correct their own actions are the new standard for business automation.",
        date: "October 12, 2025",
        tag: "Strategy",
        readTime: "5 min read"
    },
    {
        slug: "google-unified-stack",
        title: "Why We Bet on the Google Unified Stack",
        excerpt: "From Gemini Pro 3 to Vertex AI, Google's ecosystem provides the only enterprise-grade infrastructure capable of supporting true agentic workflows at scale.",
        date: "November 5, 2025",
        tag: "Tech",
        readTime: "8 min read"
    },
    {
        slug: "neural-enterprise",
        title: "Building the Neural Enterprise",
        excerpt: "How to structure your organization so that humans make decisions and software executes them. A guide to the modern business architecture.",
        date: "January 15, 2026",
        tag: "Philosophy",
        readTime: "6 min read"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="mb-24 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-primary font-mono text-sm uppercase tracking-widest">Intelligence Log</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl font-bold tracking-tighter mb-6"
                        >
                            Thoughts from the <br />
                            <span className="text-zinc-500">Autonomous Frontier</span>.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-zinc-400 max-w-2xl"
                        >
                            Deep dives into Agentic AI, business automation, and the future of work.
                        </motion.p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className="group relative bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-primary/50 transition-colors duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <Link href={`/blog/${post.slug}`} className="block p-8 relative z-10 h-full flex flex-col">
                                    <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-6 uppercase tracking-wider">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </div>
                                        <div className="w-px h-3 bg-zinc-800" />
                                        <div className="flex items-center gap-1.5 text-primary">
                                            <Tag className="w-3 h-3" />
                                            {post.tag}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                                        {post.title}
                                    </h2>

                                    <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
