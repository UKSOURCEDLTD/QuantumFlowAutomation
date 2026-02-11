'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { BookOpen } from "lucide-react";
import type { BlogPost } from "@/lib/cms";

// Mock Data — will be replaced by CMS fetch
const BLOG_POSTS: BlogPost[] = [
    {
        slug: "agentic-ai-revolution",
        title: "The Agentic AI Revolution: Why Chatbots Are Dead",
        excerpt: "We are moving beyond simple Q&A. Autonomous agents that can plan, execute, and correct their own actions are the new standard for business automation.",
        date: "2026-02-10",
        category: "AI Strategy",
        image: "",
        author: "Luke Needham",
        readTime: "5 min read",
        content: ""
    },
    {
        slug: "google-unified-stack",
        title: "Why We Bet on the Google Unified Stack",
        excerpt: "From Gemini to Vertex AI, Google's ecosystem provides the only enterprise-grade infrastructure capable of supporting true agentic workflows at scale.",
        date: "2026-02-05",
        category: "Engineering",
        image: "",
        author: "Luke Needham",
        readTime: "8 min read",
        content: ""
    },
    {
        slug: "neural-enterprise",
        title: "Building the Neural Enterprise",
        excerpt: "How to structure your organisation so that humans make decisions and software executes them. A guide to the modern business architecture.",
        date: "2026-01-28",
        category: "AI Strategy",
        image: "",
        author: "Luke Needham",
        readTime: "6 min read",
        content: ""
    },
    {
        slug: "ai-readiness-assessment",
        title: "Is Your Business Ready for AI? The 5-Point Checklist",
        excerpt: "Before you invest in AI, you need to know if your business is ready. Here are the five critical factors that determine AI readiness.",
        date: "2026-01-20",
        category: "Tutorials",
        image: "",
        author: "Luke Needham",
        readTime: "4 min read",
        content: ""
    },
    {
        slug: "cost-of-waiting",
        title: "The Hidden Cost of Waiting: Why Q1 2026 is the AI Tipping Point",
        excerpt: "Every month you delay AI adoption, your competitors gain ground. Here's the data on why early 2026 is the moment to move.",
        date: "2026-01-15",
        category: "Industry News",
        image: "",
        author: "Luke Needham",
        readTime: "7 min read",
        content: ""
    },
    {
        slug: "ai-website-case-study",
        title: "Case Study: How We Built an AI-Powered Website in 48 Hours",
        excerpt: "A behind-the-scenes look at how we used agentic AI to design, develop, and deploy a complete business website in just two days.",
        date: "2026-01-08",
        category: "Case Studies",
        image: "",
        author: "Luke Needham",
        readTime: "10 min read",
        content: ""
    }
];

const ALL_CATEGORIES = ["All", "AI Strategy", "Engineering", "Industry News", "Tutorials", "Case Studies"];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const featuredPost = BLOG_POSTS[0];
    const remainingPosts = BLOG_POSTS.slice(1);

    const filteredPosts = useMemo(() => {
        if (activeCategory === "All") return remainingPosts;
        return remainingPosts.filter(post => post.category === activeCategory);
    }, [activeCategory, remainingPosts]);

    return (
        <div className="blog-theme min-h-screen bg-white text-gray-900">
            <Navbar />

            <main className="pt-20">
                {/* Hero — Featured Post */}
                <BlogHero post={featuredPost} />

                {/* Category Filter + Posts Grid */}
                <section className="container mx-auto px-6 py-16 lg:py-20">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <BookOpen className="w-5 h-5 text-emerald-600" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                                Latest Insights
                            </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                            Explore Our Knowledge Hub
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Deep dives into Agentic AI, business automation strategy, engineering, and the future of work.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-12">
                        <BlogCategoryFilter
                            categories={ALL_CATEGORIES}
                            activeCategory={activeCategory}
                            onCategoryChange={setActiveCategory}
                        />
                    </div>

                    {/* Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                        >
                            {filteredPosts.map((post, index) => (
                                <BlogCard key={post.slug} post={post} index={index} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
                                <BookOpen className="w-8 h-8 text-gray-400" />
                            </div>
                            <p className="text-gray-500 text-lg">No articles in this category yet.</p>
                            <p className="text-gray-400 text-sm mt-2">Check back soon — we publish new content every week.</p>
                        </motion.div>
                    )}
                </section>

                {/* Newsletter CTA */}
                <BlogNewsletter />
            </main>

            <Footer />
        </div>
    );
}
