'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowUpRight, Sparkles } from "lucide-react";
import type { BlogPost } from "@/lib/cms";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
    // Generate a deterministic gradient for posts without images
    const gradients = [
        'from-emerald-800 via-teal-900 to-cyan-900',
        'from-violet-800 via-purple-900 to-indigo-900',
        'from-amber-800 via-orange-900 to-red-900',
        'from-sky-800 via-blue-900 to-indigo-900',
        'from-rose-800 via-pink-900 to-fuchsia-900',
        'from-teal-800 via-emerald-900 to-green-900',
    ];
    const gradient = gradients[index % gradients.length];

    const categoryColors: Record<string, string> = {
        'AI Strategy': 'bg-emerald-100 text-emerald-700',
        'Engineering': 'bg-sky-100 text-sky-700',
        'Industry News': 'bg-amber-100 text-amber-700',
        'Tutorials': 'bg-violet-100 text-violet-700',
        'Case Studies': 'bg-rose-100 text-rose-700',
    };

    const badgeClass = categoryColors[post.category] || 'bg-gray-100 text-gray-700';

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group"
        >
            <Link href={`/blog/${post.slug}`} className="block">
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 shadow-md shadow-gray-200">
                    {post.image ? (
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${gradient} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}>
                            <div className="text-center opacity-60">
                                <Sparkles className="w-10 h-10 text-white/50 mx-auto mb-2" />
                                <span className="text-white/40 text-xs font-mono tracking-widest">QFA</span>
                            </div>
                        </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm ${badgeClass}`}>
                            {post.category}
                        </span>
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-gray-900" />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="font-medium text-gray-600">{post.author}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </time>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300 leading-snug">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-500 leading-relaxed text-sm line-clamp-2">
                        {post.excerpt}
                    </p>
                </div>
            </Link>
        </motion.article>
    );
}
