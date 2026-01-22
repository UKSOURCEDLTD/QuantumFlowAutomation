'use client';

import { useVoiceAgent } from '@/hooks/useVoiceAgent';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Sparkles, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

export function VoiceOrb() {
    const { state, startSession, endSession, transcript } = useVoiceAgent();
    const [isHovered, setIsHovered] = useState(false);

    // Auto-close transcript after delay
    const [showTranscript, setShowTranscript] = useState(false);
    useEffect(() => {
        if (transcript) {
            setShowTranscript(true);
            const timer = setTimeout(() => setShowTranscript(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [transcript]);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 pointer-events-none">
            {/* Transcript Bubble */}
            <AnimatePresence>
                {/* Show status text depending on state */}
                {(state !== 'idle' || showTranscript) && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="bg-black/80 backdrop-blur-md border border-primary/20 p-4 rounded-xl rounded-br-none max-w-xs shadow-2xl pointer-events-auto"
                    >
                        <p className="text-white/80 text-sm font-mono">
                            {state === 'listening' && <span className="text-primary animate-pulse">Listening...</span>}
                            {state === 'thinking' && <span className="text-secondary animate-pulse">Processing...</span>}
                            {state === 'speaking' && <span className="text-accent">Responding...</span>}
                            {state === 'idle' && showTranscript && <span className="text-gray-400">"{transcript}"</span>}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Orb */}
            <div
                className="relative pointer-events-auto cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => state === 'idle' ? startSession() : endSession()}
            >
                {/* Core Glow */}
                <motion.div
                    animate={{
                        scale: state === 'listening' ? [1, 1.2, 1] : 1,
                        opacity: state === 'idle' ? 0.5 : 1
                    }}
                    transition={{
                        scale: { repeat: Infinity, duration: 2 },
                        opacity: { duration: 0.3 }
                    }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border transition-colors duration-500
                        ${state === 'idle' ? 'bg-black/40 border-primary/20' : ''}
                        ${state === 'listening' ? 'bg-primary/20 border-primary shadow-[0_0_30px_rgba(0,255,163,0.3)]' : ''}
                        ${state === 'thinking' ? 'bg-secondary/20 border-secondary shadow-[0_0_30px_rgba(0,194,255,0.3)]' : ''}
                        ${state === 'speaking' ? 'bg-accent/20 border-accent shadow-[0_0_30px_rgba(255,0,255,0.3)]' : ''}
                    `}
                >
                    {/* Icon State */}
                    <div className={`relative z-10 transition-colors duration-300
                        ${state === 'idle' ? 'text-primary/70' : 'text-white'}
                    `}>
                        {state === 'idle' && <Mic className="w-6 h-6" />}
                        {state === 'listening' && <Mic className="w-6 h-6 animate-pulse" />}
                        {state === 'thinking' && <Sparkles className="w-6 h-6 animate-spin-slow" />}
                        {state === 'speaking' && <Activity className="w-6 h-6" />}
                    </div>
                </motion.div>

                {/* Orbital Rings (Decoration) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="absolute inset-[-4px] rounded-full border border-primary/10 border-t-primary/30 pointer-events-none"
                    style={{ opacity: isHovered || state !== 'idle' ? 1 : 0 }}
                />

                {/* Particles/Waveform effect during speaking */}
                {state === 'speaking' && (
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-accent/50"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    />
                )}
            </div>
        </div>
    );
}
