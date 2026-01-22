"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { InlineWidget } from "react-calendly";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                        className="fixed inset-0 pointer-events-none z-[101] flex items-center justify-center p-4 sm:p-6"
                    >
                        {/* Modal Content */}
                        <div
                            className="pointer-events-auto relative w-full max-w-5xl h-[85vh] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button Mobile */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white/70 hover:text-white rounded-full md:hidden"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Left Panel: Context & Info */}
                            <div className="md:w-1/3 bg-white/5 border-r border-white/5 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />

                                <div className="space-y-6 relative z-10">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            Free Consultation
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Discovery Call</h2>
                                        <p className="text-gray-400 text-sm font-mono">Duration: 30 Minutes</p>
                                    </div>

                                    <div className="h-px w-12 bg-white/10" />

                                    <div className="space-y-4">
                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            This is a high-level strategic audit. We will analyze your current infrastructure and identify immediate opportunities for AI automation.
                                        </p>

                                        <div className="space-y-3">
                                            <h4 className="text-white font-medium text-sm uppercase tracking-widest">Agenda</h4>
                                            <ul className="space-y-2 text-sm text-gray-400">
                                                <li className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                                    Current Bottleneck Analysis
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                                    AI Feasibility Assessment
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                                    Implementation Roadmap
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Background decoration */}
                                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                            </div>

                            {/* Right Panel: Calendar */}
                            <div className="flex-1 bg-white relative">
                                {/* Close Button Desktop */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-50 p-2 hover:bg-black/5 text-gray-500 hover:text-black rounded-full transition-colors hidden md:block"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="w-full h-full">
                                    <InlineWidget
                                        url="https://calendly.com/enquiries-uksourcedltd/30min"
                                        styles={{ height: '100%', minHeight: '100%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
