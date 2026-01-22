import { useState, useEffect, useCallback, useRef } from 'react';

type AgentState = 'idle' | 'listening' | 'thinking' | 'speaking';

export interface RequestData {
    text: string;
    isUser: boolean;
    timestamp: number;
}

interface VoiceAgent {
    state: AgentState;
    transcript: string;
    messages: RequestData[];
    startSession: () => void;
    endSession: () => void;
    processQuery: (text: string) => void;
}

export function useVoiceAgent(): VoiceAgent {
    const [state, setState] = useState<AgentState>('idle');
    const [transcript, setTranscript] = useState('');
    const [messages, setMessages] = useState<RequestData[]>([]);

    // Refs for speech capabilities
    const recognitionRef = useRef<any>(null);
    const synthesisRef = useRef<SpeechSynthesis | null>(null);

    // Initial greeting
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{
                text: "Greetings. I am the Quantum Flow interface. How can I assist you?",
                isUser: false,
                timestamp: Date.now()
            }]);
        }
    }, []);

    const addMessage = (text: string, isUser: boolean) => {
        setMessages(prev => [...prev, { text, isUser, timestamp: Date.now() }]);
    };

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

    const handleUserQuery = useCallback(async (text: string) => {
        setState('thinking');
        addMessage(text, true);

        try {
            // Transform local message history to Gemini format (user/model)
            const history = messages.map(m => ({
                role: m.isUser ? "user" : "model",
                parts: [{ text: m.text }]
            }));

            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    history: history
                })
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Failed to fetch");

            const responseText = data.response;

            addMessage(responseText, false);
            speak(responseText);

        } catch (error) {
            console.error("Agent Error:", error);
            const errorMsg = "Connectivity Error. Please check your neural link configuration (API Key).";
            addMessage(errorMsg, false);
            speak(errorMsg);
        }
    }, [speak, messages]);

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
        messages,
        startSession,
        endSession,
        processQuery: handleUserQuery
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
