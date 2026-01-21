"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuantumField } from "@/components/3d/QuantumField";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CmsAPI, BlogPost } from "@/lib/cms";

export default function IntelligencePage() {
    const [articles, setArticles] = useState<BlogPost[]>([]);

    useEffect(() => {
        CmsAPI.getPosts().then(setArticles);
    }, []);

    return (
        <div className="min-h-screen pt-20">
            <Navbar />
            <QuantumField />

            <main className="container mx-auto px-6 py-20">
                <h1 className="text-6xl font-bold mb-4">INTELLIGENCE FEED</h1>
                <p className="text-gray-400 text-xl max-w-2xl mb-20">
                    Transmissions from the edge of automation.
                    Analysis, forecasts, and technical breakdowns.
                </p>

                <div className="space-y-4">
                    {articles.map((article) => (
                        <Link href={`/intelligence/${article.id}`} key={article.id} className="block group">
                            <div className="flex flex-col md:flex-row gap-8 p-8 border-t border-white/10 hover:bg-white/5 transition-colors items-baseline">
                                <div className="w-32 shrink-0">
                                    <span className="text-primary text-xs font-bold uppercase tracking-widest">{article.category}</span>
                                    <div className="text-gray-600 text-xs mt-2 font-mono">{article.date}</div>
                                </div>

                                <div className="max-w-3xl">
                                    <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{article.title}</h2>
                                    <p className="text-gray-400">{article.excerpt}</p>
                                </div>

                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary font-mono text-xs">
                                    Read Transmission -&gt;
                                </div>
                            </div>
                        </Link>
                    ))}
                    {articles.length === 0 && (
                        <div className="text-gray-500 font-mono">Loading transmission...</div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
