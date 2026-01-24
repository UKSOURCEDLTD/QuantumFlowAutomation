"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Story", href: "/our-story", id: "NAV_01" },
    { name: "Services", href: "/services", id: "NAV_02" },
    { name: "AI Readiness", href: "/ai-readiness", id: "NAV_03" },
    { name: "Blog", href: "/blog", id: "NAV_04" },
    { name: "Contact", href: "/contact", id: "NAV_05" },
];

import { BookingButton } from "@/components/ui/BookingButton";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 segmented-border backdrop-blur-md bg-black/50 scanlines">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
                <Link href="/" className="flex items-center gap-2 group relative z-10">
                    <div className="w-3 h-3 bg-primary status-pulse" />
                    <span className="font-bold tracking-wider text-xl text-mono">QUANTUM FLOW</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 relative z-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "nav-link text-base font-bold",
                                pathname === item.href ? "text-primary" : "text-gray-100"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <BookingButton className="px-6 py-2 bg-primary text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all neon-glow-primary hover:btn-glow-pulse text-mono cursor-pointer">
                        Book Call
                    </BookingButton>
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
                        <Link
                            key={item.href}
                            href={item.href}
                            className="nav-link text-lg font-bold text-gray-100 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <BookingButton
                        onOpen={() => setIsOpen(false)}
                        className="w-full text-center py-3 bg-primary text-black font-bold text-sm uppercase tracking-widest hover:btn-glow-pulse transition-all text-mono cursor-pointer"
                    >
                        Book Call
                    </BookingButton>
                </motion.div>
            )}
        </header>
    );
}
