"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Services", href: "/services" },
    { name: "Intelligence", href: "/intelligence" },
    { name: "Network", href: "/network" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-3 h-3 bg-primary group-hover:shadow-[0_0_10px_#ccff00] transition-all duration-300" />
                    <span className="font-bold tracking-wider text-xl">QUANTUM FLOW</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm uppercase tracking-widest hover:text-primary transition-colors",
                                pathname === item.href ? "text-primary" : "text-gray-400"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/network"
                        className="px-6 py-2 bg-primary text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
                    >
                        Book Call
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
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
                    className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-lg uppercase tracking-widest text-gray-400 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/network"
                        className="w-full text-center py-3 bg-primary text-black font-bold text-sm uppercase tracking-widest"
                        onClick={() => setIsOpen(false)}
                    >
                        Book Call
                    </Link>
                </motion.div>
            )}
        </header>
    );
}
