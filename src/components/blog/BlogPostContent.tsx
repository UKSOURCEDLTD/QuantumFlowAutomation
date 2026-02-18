'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, User, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";
import { BLOG_POSTS_LIST, BLOG_POSTS_MAP } from "@/lib/blogData";

export function BlogPostContent() {
    const params = useParams();
    const slug = params.slug as string;
    const post = BLOG_POSTS_MAP[slug];

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

    const relatedPosts = BLOG_POSTS_LIST.filter(p => p.slug !== slug).slice(0, 3);

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
                        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                            <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
                            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
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
                                <span className="w-1 h-1 bg-gray-300 rounded-full" aria-hidden="true" />
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" aria-hidden="true" />
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </time>
                                </div>
                                <span className="w-1 h-1 bg-gray-300 rounded-full" aria-hidden="true" />
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" aria-hidden="true" />
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
                                    width={1200}
                                    height={514}
                                    loading="eager"
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
