'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight, ShieldCheck, Activity, Lock } from 'lucide-react';
import { BookingButton } from "@/components/ui/BookingButton";

export function CTASection() {
    return (
        <section className="py-16 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse-slow" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[3rem] p-8 sm:p-12 md:p-24 overflow-hidden group"
                >
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out" />

                    <div className="relative z-10 flex flex-col items-center text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                            <span className="relative flex w-2 h-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium tracking-wide text-gray-300">Accepting New Partners Q1 2026</span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 uppercase tracking-tighter max-w-4xl leading-none">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Transform?</span>
                        </h2>

                        <p className="text-gray-400 max-w-xl mx-auto mb-8 md:mb-12 text-base md:text-lg leading-relaxed">
                            Don't let legacy systems hold you back. Deploy your dedicated AI infrastructure today and secure your market leadership.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <BookingButton
                                className="group relative inline-flex items-center gap-3 md:gap-4 px-8 py-4 md:px-12 md:py-6 bg-white text-black rounded-full font-bold uppercase tracking-widest text-sm md:text-base hover:bg-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                            >
                                <span>Start Deployment</span>
                                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </BookingButton>
                        </div>

                        {/* Trust Signals */}
                        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-gray-500 font-mono uppercase tracking-widest">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-4 h-4 text-green-500" />
                                <span>Google Cloud Partner</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Activity className="w-4 h-4 text-primary" />
                                <span>99.9% Uptime SLA</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Lock className="w-4 h-4 text-gray-400" />
                                <span>Vertex AI Powered</span>
                            </div>
                        </div>

                    </div>

                    {/* Abstract Grid Background inside Card */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
