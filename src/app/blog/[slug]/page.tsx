'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, User, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";
import type { BlogPost } from "@/lib/cms";

// Mock Content Database — will be replaced by CMS fetch
const POSTS: Record<string, BlogPost> = {
    "agentic-ai-revolution": {
        slug: "agentic-ai-revolution",
        title: "The Agentic AI Revolution: Why Chatbots Are Dead",
        date: "2026-02-10",
        category: "AI Strategy",
        image: "",
        author: "Luke Needham",
        readTime: "5 min read",
        excerpt: "We are moving beyond simple Q&A. Autonomous agents that can plan, execute, and correct their own actions are the new standard for business automation.",
        content: `<p>The era of the simple chatbot is over. We are entering the age of the <strong>Autonomous Agent</strong>.</p>
<p>For the last two years, businesses have been obsessed with "chatting" to their data. RAG (Retrieval Augmented Generation) became the standard. But chatting is passive. You ask a question, you get an answer. Then <em>you</em> have to do the work.</p>
<p><strong>Agentic AI</strong> flips this model. Instead of waiting for a prompt, an agent is given a goal. "Increase leads by 20%," "Reconcile these invoices," or "Monitor this server log."</p>
<h2>The Shift to Agency</h2>
<p>Agents have agency. They can:</p>
<ul>
<li><strong>Plan</strong>: Break a complex goal into steps.</li>
<li><strong>Execute</strong>: Use tools (APIs, browsers, databases) to perform actions.</li>
<li><strong>Observe</strong>: See the result of their action.</li>
<li><strong>Correct</strong>: If the result isn't what they expected, they try a different approach.</li>
</ul>
<p>This loop — Plan, Execute, Observe, Correct — is what separates a toy from an employee.</p>
<h2>What This Means for Your Business</h2>
<p>The businesses that adopt agentic AI earliest will have an exponential advantage. While competitors are still asking chatbots questions and copying answers into spreadsheets, agentic organisations will have software that executes entire workflows autonomously.</p>
<p>Imagine an agent that monitors your inbox, identifies supplier invoices, cross-references them against purchase orders, flags discrepancies, and drafts a response — all before you've had your morning coffee.</p>
<h2>Getting Started</h2>
<p>The key to successfully deploying agentic AI is starting with well-defined, repeatable processes. Look for tasks that:</p>
<ul>
<li>Follow a clear sequence of steps</li>
<li>Involve data from multiple systems</li>
<li>Currently require a human to copy-paste between tools</li>
<li>Have clear success criteria</li>
</ul>
<p>These are your quick wins. Start here, prove the ROI, then expand.</p>`
    },
    "google-unified-stack": {
        slug: "google-unified-stack",
        title: "Why We Bet on the Google Unified Stack",
        date: "2026-02-05",
        category: "Engineering",
        image: "",
        author: "Luke Needham",
        readTime: "8 min read",
        excerpt: "From Gemini to Vertex AI, Google's ecosystem provides the only enterprise-grade infrastructure capable of supporting true agentic workflows at scale.",
        content: `<p>When building enterprise-grade AI, you need infrastructure that doesn't blink. That's why we chose Google.</p>
<p>Gemini offers an industry-leading context window. That's not just a spec; it's a fundamental change in capability. It means an agent can read your entire codebase, your entire customer history, or your entire legal archive in a single prompt.</p>
<h2>The Unified Advantage</h2>
<p>Google's stack isn't just about one model. It's about how everything connects:</p>
<ul>
<li><strong>Vertex AI</strong> — Model hosting, fine-tuning, and serving at scale</li>
<li><strong>Cloud Run</strong> — Serverless compute that scales to zero</li>
<li><strong>BigQuery</strong> — Petabyte-scale analytics with built-in ML</li>
<li><strong>Firebase</strong> — Real-time databases and authentication</li>
</ul>
<p>When your entire stack speaks the same language, you eliminate the integration tax that kills most AI projects.</p>
<h2>Why Not OpenAI?</h2>
<p>OpenAI builds incredible models. But models are just one piece of the puzzle. When you need to deploy agents at enterprise scale, you need:</p>
<ul>
<li>Reliable, low-latency infrastructure</li>
<li>Data residency and compliance controls</li>
<li>Seamless integration with databases, storage, and compute</li>
<li>Monitoring, logging, and observability built in</li>
</ul>
<p>Google provides all of this in a single, unified platform. That's the difference between a demo and a production system.</p>`
    },
    "neural-enterprise": {
        slug: "neural-enterprise",
        title: "Building the Neural Enterprise",
        date: "2026-01-28",
        category: "AI Strategy",
        image: "",
        author: "Luke Needham",
        readTime: "6 min read",
        excerpt: "How to structure your organisation so that humans make decisions and software executes them. A guide to the modern business architecture.",
        content: `<p>Most businesses are structured like factories. Information flows down, decisions flow up. It's slow, lossy, and inefficient.</p>
<p>The Neural Enterprise is different. It's structured like a brain. Small, autonomous units (agents) operate independently but share a common nervous system (data layer).</p>
<h2>The Architecture</h2>
<p>Think of your business as three layers:</p>
<ul>
<li><strong>Decision Layer</strong> — Humans set strategy, approve budgets, handle exceptions</li>
<li><strong>Orchestration Layer</strong> — AI agents coordinate workflows, route tasks, manage state</li>
<li><strong>Execution Layer</strong> — Specialised tools and APIs perform atomic actions</li>
</ul>
<p>The magic happens in the orchestration layer. This is where agentic AI lives.</p>
<h2>From Hierarchy to Network</h2>
<p>In a traditional org, if the sales team needs marketing data, they submit a request. Marketing tasks someone. That person runs a report. Emails it. Sales interprets it. The whole process takes days.</p>
<p>In a Neural Enterprise, the sales agent queries the marketing data layer directly. It gets what it needs in milliseconds. Humans are only involved when a decision is required — not for data shuffling.</p>`
    },
    "ai-readiness-assessment": {
        slug: "ai-readiness-assessment",
        title: "Is Your Business Ready for AI? The 5-Point Checklist",
        date: "2026-01-20",
        category: "Tutorials",
        image: "",
        author: "Luke Needham",
        readTime: "4 min read",
        excerpt: "Before you invest in AI, you need to know if your business is ready. Here are the five critical factors that determine AI readiness.",
        content: `<p>AI is the most powerful business tool since the internet. But deploying it without preparation is like installing a jet engine on a bicycle — impressive, but ultimately destructive.</p>
<h2>The 5-Point AI Readiness Checklist</h2>
<h3>1. Data Infrastructure</h3>
<p>Do you have clean, accessible, structured data? AI models are only as good as the data they consume. If your data lives in disconnected spreadsheets, you need to fix that first.</p>
<h3>2. Process Documentation</h3>
<p>Can you describe your business processes step-by-step? If a process lives only in someone's head, an AI agent can't execute it.</p>
<h3>3. Integration Capability</h3>
<p>Do your tools have APIs? Agents need to connect to your existing systems — CRM, ERP, email, databases.</p>
<h3>4. Team Buy-In</h3>
<p>Is your team excited or terrified? Successful AI adoption requires champions, not resistors.</p>
<h3>5. Clear Success Metrics</h3>
<p>What does success look like? "Implement AI" is not a goal. "Reduce invoice processing time by 60%" is.</p>`
    },
    "cost-of-waiting": {
        slug: "cost-of-waiting",
        title: "The Hidden Cost of Waiting: Why Q1 2026 is the AI Tipping Point",
        date: "2026-01-15",
        category: "Industry News",
        image: "",
        author: "Luke Needham",
        readTime: "7 min read",
        excerpt: "Every month you delay AI adoption, your competitors gain ground. Here's the data on why early 2026 is the moment to move.",
        content: `<p>There's a reason every tech giant is racing to deploy AI at scale — the returns are exponential, not linear.</p>
<h2>The Compounding Advantage</h2>
<p>Businesses that adopted AI in 2024 are now 18 months ahead. That's 18 months of:</p>
<ul>
<li>Training models on proprietary data</li>
<li>Building institutional knowledge about what works</li>
<li>Automating repetitive tasks and redeploying human talent</li>
<li>Compounding efficiency gains</li>
</ul>
<p>The gap widens every quarter. And it's not linear — it's exponential.</p>
<h2>What Changed in 2026</h2>
<p>Three things converged to make Q1 2026 the tipping point:</p>
<ul>
<li><strong>Model capability</strong> — Agents can now handle multi-step, multi-tool workflows reliably</li>
<li><strong>Cost reduction</strong> — Token prices dropped 90% in 18 months</li>
<li><strong>Infrastructure maturity</strong> — Cloud providers now offer turnkey agentic platforms</li>
</ul>
<p>The barrier to entry has never been lower. The cost of waiting has never been higher.</p>`
    },
    "ai-website-case-study": {
        slug: "ai-website-case-study",
        title: "Case Study: How We Built an AI-Powered Website in 48 Hours",
        date: "2026-01-08",
        category: "Case Studies",
        image: "",
        author: "Luke Needham",
        readTime: "10 min read",
        excerpt: "A behind-the-scenes look at how we used agentic AI to design, develop, and deploy a complete business website in just two days.",
        content: `<p>When a client came to us needing a complete website overhaul on an impossibly tight deadline, we saw it as the perfect opportunity to put our agentic workflow to the test.</p>
<h2>The Challenge</h2>
<p>The client needed:</p>
<ul>
<li>A complete redesign of their 12-page website</li>
<li>SEO-optimised content for each page</li>
<li>Integration with their existing CRM</li>
<li>Deployment to production — all in 48 hours</li>
</ul>
<h2>Our Approach</h2>
<p>We deployed a team of specialised AI agents, each responsible for a different aspect of the build:</p>
<ul>
<li><strong>Design Agent</strong> — Generated layout options based on competitor analysis</li>
<li><strong>Content Agent</strong> — Wrote and optimised copy for each page</li>
<li><strong>Development Agent</strong> — Built components and implemented designs</li>
<li><strong>QA Agent</strong> — Tested every page across devices and browsers</li>
</ul>
<h2>The Result</h2>
<p>The site went live in 41 hours. Page load time: 1.2s. Lighthouse score: 98. The client's organic traffic increased by 340% in the first month.</p>`
    }
};

// Related posts (all posts except current)
const ALL_POSTS: BlogPost[] = Object.values(POSTS);

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug as string;
    const post = POSTS[slug];

    if (!post) {
        return (
            <div className="blog-theme min-h-screen bg-white text-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-7xl font-bold text-gray-200 mb-4">404</h1>
                    <p className="text-gray-500 mb-8 text-lg">This article doesn&apos;t exist.</p>
                    <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-emerald-600 transition-colors font-semibold">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const relatedPosts = ALL_POSTS.filter(p => p.slug !== slug).slice(0, 3);

    const categoryColors: Record<string, string> = {
        'AI Strategy': 'bg-emerald-100 text-emerald-700',
        'Engineering': 'bg-sky-100 text-sky-700',
        'Industry News': 'bg-amber-100 text-amber-700',
        'Tutorials': 'bg-violet-100 text-violet-700',
        'Case Studies': 'bg-rose-100 text-rose-700',
    };
    const badgeClass = categoryColors[post.category] || 'bg-gray-100 text-gray-700';

    return (
        <div className="blog-theme min-h-screen bg-white text-gray-900">
            <Navbar />

            <main className="pt-20">
                {/* Hero Header */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full blur-3xl" />

                    <div className="relative container mx-auto px-6 pt-12 pb-16 lg:pt-16 lg:pb-20">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                            <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
                            <ChevronRight className="w-3.5 h-3.5" />
                            <span className="text-gray-600 truncate max-w-xs">{post.title}</span>
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl"
                        >
                            {/* Category badge */}
                            <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6 ${badgeClass}`}>
                                {post.category}
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-gray-900">
                                {post.title}
                            </h1>

                            {/* Meta bar */}
                            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white text-xs font-bold">
                                        {post.author?.charAt(0) || 'Q'}
                                    </div>
                                    <span className="font-medium text-gray-700">{post.author}</span>
                                </div>
                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </time>
                                </div>
                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="container mx-auto px-6 -mt-4 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50">
                            {post.image ? (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-gray-900 via-emerald-900 to-sky-900 flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="text-white/40 text-sm font-mono tracking-widest">QFA // {post.category.toUpperCase()}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Article Body */}
                <div className="container mx-auto px-6 pb-20">
                    <motion.article
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div
                            className="blog-article-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </motion.article>

                    {/* Author card */}
                    <div className="max-w-3xl mx-auto mt-16 pt-10 border-t border-gray-200">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white text-lg font-bold shrink-0">
                                {post.author?.charAt(0) || 'Q'}
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Written by {post.author}</p>
                                <p className="text-sm text-gray-500">Founder at Quantum Flow Automation — building AI systems that work.</p>
                            </div>
                        </div>
                    </div>

                    {/* Back CTA */}
                    <div className="max-w-3xl mx-auto mt-10">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to all articles
                        </Link>
                    </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="border-t border-gray-100 bg-gray-50/50">
                        <div className="container mx-auto px-6 py-16 lg:py-20">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
                                Continue Reading
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                                {relatedPosts.map((relPost, index) => (
                                    <BlogCard key={relPost.slug} post={relPost} index={index} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Newsletter */}
                <BlogNewsletter />
            </main>

            <Footer />
        </div>
    );
}
