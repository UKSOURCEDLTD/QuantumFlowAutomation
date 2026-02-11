'use client';

import { BrainCircuit, Clock, TrendingUp, ShieldCheck, Zap, Users } from 'lucide-react';

export default function BenefitsOfAIPage() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-[#00d294]" />,
      title: "Reclaim Your Time",
      desc: "Stop doing the robot's job. AI handles repetitive tasks (data entry, scheduling, emails) instantly, freeing you for high-value strategy."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#00c2ff]" />,
      title: "Scale Without Hiring",
      desc: "Grow your output by 10x without adding headcount. AI agents work 24/7/365, don't take holidays, and scale instantly with demand."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-[#00d294]" />,
      title: "Precision & Consistency",
      desc: "Eliminate human error. Whether it's processing 10 orders or 10,000, AI executes with 100% accuracy every single time."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00c2ff]" />,
      title: "Instant Response",
      desc: "Leads go cold in minutes. AI responds in seconds. Qualify, book, and nurture prospects while you sleep."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00d294]" />,
      title: "Future-Proofing",
      desc: "The market is moving fast. Integrating AI now builds a data-driven foundation that keeps you ahead of competitors playing catch-up."
    },
    {
      icon: <Users className="w-8 h-8 text-[#00c2ff]" />,
      title: "Empower Your Team",
      desc: "AI removes the drudgery. Your staff gets to focus on creative, human-centric work that actually drives job satisfaction."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans pt-24 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Why <span className="text-[#00d294]">AI?</span> Why <span className="text-[#00c2ff]">Now?</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            AI isn't just a buzzword. It's the biggest leverage multiplier in business history.
            Here's how intelligent automation transforms your operations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#00d294]/30 transition-all hover:-translate-y-1 group">
              <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:bg-[#00d294]/10 transition-colors">
                {b.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#00d294]/10 to-[#00c2ff]/10 p-12 rounded-3xl border border-white/10">
          <h2 className="text-3xl font-bold mb-6">Ready to stop working like a robot?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a discovery call today and we'll show you exactly where AI can save you 20+ hours a week.
          </p>
          <a href="/contact" className="inline-block bg-[#00d294] text-black font-bold py-4 px-8 rounded-full hover:bg-[#00c2ff] transition-colors">
            Get Your Free Audit
          </a>
        </div>

      </div>
    </div>
  );
}
