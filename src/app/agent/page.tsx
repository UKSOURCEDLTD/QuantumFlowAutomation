'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

export default function AgentPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am the Quantum Flow Agent. How can I automate your business today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botMessage = { 
        role: 'assistant', 
        content: "I'm a demo agent right now, but soon I'll be connected to the real Quantum brain! 🧠✨" 
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a0a]/50 backdrop-blur-md p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="p-2 bg-[#00d294]/10 rounded-lg">
            <Bot className="w-6 h-6 text-[#00d294]" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Quantum Agent</h1>
            <p className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
              Online
            </p>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#00d294]/20 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-[#00d294]" />
                </div>
              )}
              
              <div 
                className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-[#00c2ff] text-black rounded-tr-sm' 
                    : 'bg-[#1a1a1a] border border-white/10 rounded-tl-sm'
                }`}
              >
                <p className="leading-relaxed">{msg.content}</p>
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#00c2ff]/20 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-[#00c2ff]" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#00d294]/20 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-[#00d294]" />
              </div>
              <div className="bg-[#1a1a1a] border border-white/10 p-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}/>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}/>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}/>
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>
      </main>

      {/* Input Area */}
      <footer className="p-4 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="relative group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Quantum anything..."
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-4 pr-12 
                         focus:outline-none focus:border-[#00d294] focus:ring-1 focus:ring-[#00d294]
                         transition-all placeholder:text-gray-600"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#00d294] rounded-lg 
                         text-black hover:bg-[#00d294]/90 disabled:opacity-50 disabled:cursor-not-allowed
                         transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-center mt-3">
            <p className="text-[10px] text-gray-600 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              Powered by Quantum Flow Automation AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
