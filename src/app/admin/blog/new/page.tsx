"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CmsAPI } from "@/lib/cms";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewPostPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        excerpt: "",
        content: "",
        category: "AI Strategy",
        date: new Date().toISOString().split('T')[0],
        image: "",
        author: "Luke Needham",
        readTime: "5 min read",
        slug: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const slug = formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            await CmsAPI.createPost({ ...formData, slug });
            router.push("/admin");
        } catch (error) {
            console.error(error);
            alert("Failed to create post. Check console.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-12">
            <div className="max-w-4xl mx-auto">
                <Link href="/admin" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
                    <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                </Link>

                <h1 className="text-4xl font-bold mb-12">NEW INTELLIGENCE ENTRY</h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Title</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-mono"
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Category</label>
                            <select
                                className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-mono"
                                value={formData.category}
                                onChange={e => setFormData({ ...formData, category: e.target.value })}
                            >
                                <option value="AI Strategy">AI Strategy</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Industry News">Industry News</option>
                                <option value="Tutorials">Tutorials</option>
                                <option value="Case Studies">Case Studies</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Excerpt</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-mono"
                            value={formData.excerpt}
                            onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Content</label>
                        <textarea
                            rows={12}
                            required
                            className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-mono"
                            value={formData.content}
                            onChange={e => setFormData({ ...formData, content: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="px-12 py-4 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50"
                    >
                        {loading ? "Publishing..." : "Publish to Network"}
                    </button>
                </form>
            </div>
        </div>
    );
}
