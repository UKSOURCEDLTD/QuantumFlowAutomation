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
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] cursor-pointer"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="fixed inset-0 pointer-events-none z-[101] flex items-center justify-center p-4 sm:p-6"
                    >
                        {/* Modal Content */}
                        <div
                            className="pointer-events-auto relative w-full max-w-4xl h-[85vh] bg-black border border-primary/20 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-primary/10 bg-black/50 relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/5 scanlines opacity-50 pointer-events-none" />
                                <h3 className="text-xl font-bold text-white tracking-widest relative z-10 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    SECURE CONNECTION // BOOKING
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="relative z-10 p-2 text-primary/70 hover:text-primary transition-colors hover:bg-primary/10 rounded-full group"
                                >
                                    <X className="w-6 h-6" />
                                    <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-full transition-all scale-110" />
                                </button>
                            </div>

                            {/* Calendly Widget Container */}
                            <div className="flex-1 bg-black relative overflow-hidden">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />

                                <div className="w-full h-full overflow-y-auto custom-scrollbar">
                                    <InlineWidget
                                        url="https://calendly.com/enquiries-uksourcedltd/30min"
                                        styles={{ height: '100%', minHeight: '100%' }}
                                    />
                                </div>
                            </div>

                            {/* Footer decorative line */}
                            <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
