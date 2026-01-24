'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, GitMerge, Rocket } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "We audit your current manual workflows and identify high-impact automation targets.",
        icon: <Search className="w-6 h-6" />,
        color: "text-primary",
        border: "border-primary",
        bg: "bg-primary/20"
    },
    {
        id: "02",
        title: "Architecture",
        description: "Our engineers design a custom neural map tailored to your specific business logic.",
        icon: <PenTool className="w-6 h-6" />,
        color: "text-secondary",
        border: "border-secondary",
        bg: "bg-secondary/20"
    },
    {
        id: "03",
        title: "Integration",
        description: "We connect the systems, train the models, and stress-test the entire pipeline.",
        icon: <GitMerge className="w-6 h-6" />,
        color: "text-accent",
        border: "border-accent",
        bg: "bg-accent/20"
    },
    {
        id: "04",
        title: "Deployment",
        description: "Go live with full oversight. Your operations begin running autonomously.",
        icon: <Rocket className="w-6 h-6" />,
        color: "text-green-400",
        border: "border-green-400",
        bg: "bg-green-400/20"
    }
];

export function ProcessTimeline() {
    return (
        <section className="py-32 relative overflow-hidden bg-black/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">From Audit to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Autopilot</span></h2>
                    <p className="text-gray-400 text-lg">A structured path to operational efficiency.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className={`relative w-28 h-28 rounded-full bg-black border-2 ${step.border} flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500`}>
                                    <div className={`absolute inset-2 rounded-full ${step.bg} blur-md opacity-50 group-hover:opacity-100 transition-opacity`} />
                                    <div className={`relative z-10 ${step.color}`}>
                                        {step.icon}
                                    </div>
                                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black border ${step.border} flex items-center justify-center text-xs font-bold font-mono text-white`}>
                                        {step.id}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
