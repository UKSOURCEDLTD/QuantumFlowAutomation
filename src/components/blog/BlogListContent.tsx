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
import { BLOG_POSTS_LIST } from "@/lib/blogData";

const ALL_CATEGORIES = ["All", "AI Strategy", "Engineering", "Industry News", "Tutorials", "Case Studies"];

export function BlogListContent() {
    const [activeCategory, setActiveCategory] = useState("All");

    const featuredPost = BLOG_POSTS_LIST[0];
    const remainingPosts = BLOG_POSTS_LIST.slice(1);

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
                            <BookOpen className="w-5 h-5 text-emerald-600" aria-hidden="true" />
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
                                <BookOpen className="w-8 h-8 text-gray-400" aria-hidden="true" />
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
