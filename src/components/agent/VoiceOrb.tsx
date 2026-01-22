'use client';

import { useVoiceAgent } from '@/hooks/useVoiceAgent';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Sparkles, Activity, MessageSquare, Send, X, ArrowUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function VoiceOrb() {
    const { state, startSession, endSession, transcript, messages, processQuery } = useVoiceAgent();
    // Default to closed
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        if (isChatOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isChatOpen]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        processQuery(inputValue);
        setInputValue("");
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 pointer-events-none">

            {/* Chat Interface */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="pointer-events-auto bg-black/80 backdrop-blur-xl border border-primary/20 w-[350px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 relative"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-white font-mono text-sm tracking-widest">QUANTUM AGENT</span>
                            </div>
                            <button
                                onClick={() => setIsChatOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${msg.isUser
                                                ? 'bg-primary/20 text-primary-foreground border border-primary/20 rounded-tr-none'
                                                : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 bg-black/40">
                            <form
                                onSubmit={handleSendMessage}
                                className="relative flex items-center gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Execute command..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-primary/50 text-white placeholder:text-gray-500 transition-all font-mono"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-1 top-1 p-1.5 bg-primary/20 hover:bg-primary text-primary hover:text-black rounded-full transition-all disabled:opacity-0 disabled:scale-75"
                                >
                                    <ArrowUp className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                        {/* Background Deco */}
                        <div className="absolute inset-0 pointer-events-none z-[-1] opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Orb / Toggle Button */}
            <div
                className="relative pointer-events-auto cursor-pointer group"
                onClick={() => setIsChatOpen(!isChatOpen)}
            >
                {/* Core Glow */}
                <motion.div
                    animate={{
                        scale: state === 'listening' ? [1, 1.2, 1] : 1,
                        opacity: 1
                    }}
                    transition={{
                        scale: { repeat: Infinity, duration: 2 },
                        opacity: { duration: 0.3 }
                    }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border transition-colors duration-500
                        ${state === 'idle' ? 'bg-black/80 border-primary/50 shadow-[0_0_15px_rgba(0,255,163,0.15)]' : ''}
                        ${state === 'listening' ? 'bg-primary/20 border-primary shadow-[0_0_30px_rgba(0,255,163,0.3)]' : ''}
                        ${state === 'thinking' ? 'bg-secondary/20 border-secondary shadow-[0_0_30px_rgba(0,194,255,0.3)]' : ''}
                        ${state === 'speaking' ? 'bg-accent/20 border-accent shadow-[0_0_30px_rgba(255,0,255,0.3)]' : ''}
                    `}
                >
                    {/* Icon State */}
                    <div className={`relative z-10 transition-colors duration-300
                        ${state === 'idle' ? 'text-primary' : 'text-white'}
                    `}>
                        {state === 'idle' ? (
                            isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />
                        ) : (
                            <>
                                {state === 'listening' && <Mic className="w-6 h-6 animate-pulse" />}
                                {state === 'thinking' && <Sparkles className="w-6 h-6 animate-spin-slow" />}
                                {state === 'speaking' && <Activity className="w-6 h-6" />}
                            </>
                        )}
                    </div>
                </motion.div>

                {/* Orbital Rings (Decoration) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="absolute inset-[-4px] rounded-full border border-primary/10 border-t-primary/30 pointer-events-none"
                    style={{ opacity: state !== 'idle' ? 1 : 0.5 }}
                />

                {/* Mic Toggle (Only visible when chat is open or hovered, separate button logic could serve here but keeping it simple) */}
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            state === 'idle' ? startSession() : endSession();
                        }}
                        className="p-3 bg-black/80 border border-white/10 rounded-full text-white hover:text-primary hover:border-primary/50 transition-all shadow-lg"
                    >
                        {state === 'listening' ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </div>
    );
}
