"use client";

import { useEffect, useState } from "react";
import { CmsAPI, BlogPost, Message } from "@/lib/cms";
import { Navbar } from "@/components/layout/Navbar"; // Reuse Nav for now or make custom Admin Nav
import { LayoutDashboard, FileText, MessageSquare, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<"posts" | "messages">("posts");
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        CmsAPI.getPosts().then(setPosts);
        CmsAPI.getMessages().then(setMessages);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 p-6 fixed h-full bg-black">
                <div className="text-xl font-bold text-primary mb-12">QFA // ADMIN</div>

                <nav className="space-y-4">
                    <button
                        onClick={() => setActiveTab("posts")}
                        className={cn("flex items-center gap-3 w-full p-3 rounded text-sm font-bold uppercase tracking-wider transition-colors", activeTab === "posts" ? "bg-primary text-black" : "text-gray-400 hover:text-white")}
                    >
                        <FileText className="w-4 h-4" /> Intelligence
                    </button>
                    <button
                        onClick={() => setActiveTab("messages")}
                        className={cn("flex items-center gap-3 w-full p-3 rounded text-sm font-bold uppercase tracking-wider transition-colors", activeTab === "messages" ? "bg-primary text-black" : "text-gray-400 hover:text-white")}
                    >
                        <MessageSquare className="w-4 h-4" /> Messages
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex-1 p-12">
                <header className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-bold">{activeTab === "posts" ? "INTELLIGENCE DATABASE" : "INCOMING TRANSMISSIONS"}</h1>
                    {activeTab === "posts" && (
                        <Link href="/admin/blog/new" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary transition-colors">
                            <Plus className="w-4 h-4" /> New Entry
                        </Link>
                    )}
                </header>

                <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    {activeTab === "posts" ? (
                        <div className="divide-y divide-white/10">
                            {posts.map(post => (
                                <div key={post.id} className="p-6 hover:bg-white/5 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                            <p className="text-gray-400 text-sm mb-2">{post.excerpt}</p>
                                            <span className="text-primary text-xs uppercase tracking-wider">{post.category}</span>
                                        </div>
                                        <span className="text-gray-500 text-xs font-mono">{post.date}</span>
                                    </div>
                                </div>
                            ))}
                            {posts.length === 0 && <div className="p-12 text-center text-gray-500">No entries found.</div>}
                        </div>
                    ) : (
                        <div className="divide-y divide-white/10">
                            {messages.map(msg => (
                                <div key={msg.id} className="p-6 hover:bg-white/5 transition-colors">
                                    <div className="flex justify-between mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold">{msg.name}</h3>
                                            <div className="text-primary text-sm">{msg.org}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-gray-400 text-xs">{msg.email}</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 bg-black/30 p-4 rounded border border-white/5 font-mono text-sm">
                                        {msg.message}
                                    </p>
                                </div>
                            ))}
                            {messages.length === 0 && <div className="p-12 text-center text-gray-500">No messages found.</div>}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
