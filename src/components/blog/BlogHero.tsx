'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import type { BlogPost } from "@/lib/cms";

interface BlogHeroProps {
    post: BlogPost;
}

export function BlogHero({ post }: BlogHeroProps) {
    return (
        <section className="relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-100/40 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-100/30 to-transparent rounded-full blur-3xl" />

            <div className="relative container mx-auto px-6 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                Featured Article
                            </span>
                        </div>

                        <Link href={`/blog/${post.slug}`} className="group block">
                            <span className="inline-block text-xs font-medium uppercase tracking-wider text-emerald-600 mb-3">
                                {post.category}
                            </span>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 group-hover:text-emerald-700 transition-colors duration-300">
                                {post.title}
                            </h1>
                            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                                {post.excerpt}
                            </p>
                        </Link>

                        <div className="flex items-center gap-6">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all duration-300 group"
                            >
                                Read Article
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="font-medium text-gray-700">{post.author}</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    {post.readTime}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/10">
                            {post.image ? (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-gray-900 via-emerald-900 to-sky-900 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                                            <Sparkles className="w-8 h-8 text-emerald-400" />
                                        </div>
                                        <span className="text-white/60 text-sm font-mono tracking-wider">QFA // AI INSIGHTS</span>
                                    </div>
                                </div>
                            )}
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-emerald-200 rounded-2xl -z-10" />
                        <div className="absolute -top-3 -left-3 w-16 h-16 border-2 border-sky-200 rounded-xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
