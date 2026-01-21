import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuantumField } from "@/components/3d/QuantumField";
import { CmsAPI } from "@/lib/cms";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Next.js 15/16 params are async
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await CmsAPI.getPost(id);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-20">
            <Navbar />
            <QuantumField />

            <main className="container mx-auto px-6 py-20">
                <Link href="/intelligence" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 uppercase tracking-widest text-xs">
                    <ArrowLeft className="w-4 h-4" /> Return to Feed
                </Link>

                <article className="max-w-3xl mx-auto">
                    <header className="mb-12 border-b border-white/10 pb-12">
                        <div className="flex gap-4 items-center mb-6">
                            <span className="px-3 py-1 bg-primary text-black font-bold text-xs uppercase tracking-wider">{post.category}</span>
                            <span className="text-gray-500 font-mono text-sm">{post.date}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">{post.title}</h1>
                        <p className="text-xl text-gray-300 leading-relaxed font-light">{post.excerpt}</p>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none">
                        {/* Simple text rendering for now, could add Markdown support later */}
                        <div className="whitespace-pre-wrap font-light text-gray-300">
                            {post.content}
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
