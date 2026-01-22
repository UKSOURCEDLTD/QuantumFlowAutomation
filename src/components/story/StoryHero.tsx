'use client';

import { motion } from 'framer-motion';
import { QuantumField } from '@/components/3d/QuantumField';
import { StatusIndicator } from '@/components/ui/StatusIndicator';

export function StoryHero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <QuantumField />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 flex justify-center"
                >
                    <StatusIndicator />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold leading-none tracking-tighter uppercase mb-6"
                >
                    The Age of<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">Agentic AI</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    Intelligence is no longer just a tool you use.<br />
                    It is a workforce you deploy.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/50">Scroll to Explore</span>
            </motion.div>
        </section>
    );
}
