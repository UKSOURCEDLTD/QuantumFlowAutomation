"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Services", href: "/services", id: "NAV_01" },
    { name: "Intelligence", href: "/intelligence", id: "NAV_02" },
    { name: "Network", href: "/network", id: "NAV_03" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 segmented-border backdrop-blur-md bg-black/50 scanlines">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between relative corner-brackets">
                <Link href="/" className="flex items-center gap-2 group relative z-10">
                    <div className="w-3 h-3 bg-primary status-pulse" />
                    <span className="font-bold tracking-wider text-xl text-mono">QUANTUM FLOW</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 relative z-10">
                    {navItems.map((item) => (
                        <div key={item.href} className="relative">
                            <span className="nav-link-id">[{item.id}]</span>
                            <Link
                                href={item.href}
                                className={cn(
                                    "nav-link text-sm",
                                    pathname === item.href ? "text-primary" : "text-gray-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                    <Link
                        href="/network"
                        className="px-6 py-2 bg-primary text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all neon-glow-primary hover:btn-glow-pulse text-mono"
                    >
                        Book Call
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white relative z-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 p-6 flex flex-col gap-4 scanlines"
                >
                    {navItems.map((item) => (
                        <div key={item.href} className="relative">
                            <span className="nav-link-id">[{item.id}]</span>
                            <Link
                                href={item.href}
                                className="nav-link text-lg text-gray-400 hover:text-primary block mt-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                    <Link
                        href="/network"
                        className="w-full text-center py-3 bg-primary text-black font-bold text-sm uppercase tracking-widest hover:btn-glow-pulse transition-all text-mono"
                        onClick={() => setIsOpen(false)}
                    >
                        Book Call
                    </Link>
                </motion.div>
            )}
        </header>
    );
}
