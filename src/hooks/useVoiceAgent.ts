import { useState, useEffect, useCallback, useRef } from 'react';

type AgentState = 'idle' | 'listening' | 'thinking' | 'speaking';

interface VoiceAgent {
    state: AgentState;
    transcript: string;
    startSession: () => void;
    endSession: () => void;
}

export function useVoiceAgent(): VoiceAgent {
    const [state, setState] = useState<AgentState>('idle');
    const [transcript, setTranscript] = useState('');

    // Refs for speech capabilities
    const recognitionRef = useRef<any>(null);
    const synthesisRef = useRef<SpeechSynthesis | null>(null);

    useEffect(() => {
        // Initialize Web Speech API
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = 'en-US';

                recognition.onstart = () => setState('listening');

                recognition.onresult = (event: any) => {
                    const text = event.results[0][0].transcript;
                    setTranscript(text);
                    handleUserQuery(text);
                };

                recognition.onend = () => {
                    if (state === 'listening') {
                        // If we stopped listening but weren't transitioning to thinking (e.g. silence), go back to idle
                        // logic handled in handleUserQuery for success case
                        // setState('idle'); 
                    }
                };

                recognitionRef.current = recognition;
            }

            synthesisRef.current = window.speechSynthesis;
        }
    }, []);

    const speak = useCallback((text: string) => {
        if (!synthesisRef.current) return;

        setState('speaking');
        const utterance = new SpeechSynthesisUtterance(text);

        // Select a futuristic voice if available (optional)
        const voices = synthesisRef.current.getVoices();
        // Try to find a nice English voice
        const preferredVoice = voices.find(v => v.name.includes('Google US English')) || voices.find(v => v.lang === 'en-US');
        if (preferredVoice) utterance.voice = preferredVoice;

        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        utterance.onend = () => {
            setState('idle');
        };

        synthesisRef.current.speak(utterance);
    }, []);

    const handleUserQuery = useCallback((text: string) => {
        setState('thinking');

        // SIMULATED AI LATENCY & RESPONSE
        // In a real app, this would call Vapi / OpenAI
        setTimeout(() => {
            const response = generateMockResponse(text);
            speak(response);
        }, 1200);
    }, [speak]);

    const startSession = useCallback(() => {
        if (recognitionRef.current && state === 'idle') {
            try {
                recognitionRef.current.start();
            } catch (e) {
                console.error("Speech recognition error:", e);
                setState('idle');
            }
        }
    }, [state]);

    const endSession = useCallback(() => {
        if (recognitionRef.current) recognitionRef.current.stop();
        if (synthesisRef.current) synthesisRef.current.cancel();
        setState('idle');
    }, []);

    return {
        state,
        transcript,
        startSession,
        endSession
    };
}

// Simple rule-based responses for the demo
function generateMockResponse(input: string): string {
    const text = input.toLowerCase();

    if (text.includes('hello') || text.includes('hi')) return "Greetings. I am the Quantum Flow interface. How can I assist you?";
    if (text.includes('service') || text.includes('offer')) return "We offer AI-First architectures, cognitive audits, and digital employee fleets. Which protocol interests you?";
    if (text.includes('cost') || text.includes('price')) return "Our solutions are bespoke. I recommend initializing a consultation for a precise audit.";
    if (text.includes('who are you')) return "I am a synthesized agent designed to bridge the gap between human intent and digital execution.";

    return "I processed that input. Would you like to schedule a deep-dive consultation?";
}
