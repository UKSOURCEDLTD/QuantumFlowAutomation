'use client';

import { motion } from 'framer-motion';
import { Coffee, MessageCircle, Sparkles, Clock, Layout, Fingerprint } from 'lucide-react';

const tools = [
    {
        title: "Digital Extra Hands",
        desc: "We build clever AI helpers that take over the repetitive tasks you're tired of doing.",
        icon: Coffee,
        color: "bg-blue-500/10 text-blue-400"
    },
    {
        title: "Apps that Talk",
        desc: "We connect your favorite tools so they share information automatically.",
        icon: MessageCircle,
        color: "bg-green-500/10 text-green-400"
    },
    {
        title: "Clear Dashboards",
        desc: "We turn your messy data into simple, beautiful charts you can actually understand.",
        icon: Layout,
        color: "bg-purple-500/10 text-purple-400"
    },
    {
        title: "Time Recovery",
        desc: "Through smart workflows, we find hours of lost time every single week.",
        icon: Clock,
        color: "bg-orange-500/10 text-orange-400"
    },
    {
        title: "Custom Solutions",
        desc: "No off-the-shelf stuff. We build exactly what your unique business needs.",
        icon: Fingerprint,
        color: "bg-pink-500/10 text-pink-400"
    },
    {
        title: "Friendly Support",
        desc: "We're real people. You can call us, chat with us, and we'll speak plain English.",
        icon: Sparkles,
        color: "bg-teal-500/10 text-teal-400"
    }
];

export function HumanToolkit() {
    return (
        <section className="py-32 bg-zinc-900/30">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Our Practical Toolkit</h2>
                    <p className="text-zinc-500 max-w-xl">
                        We don't just use tech for the sake of it. We use these tools to solve real problems for real people.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tools.map((tool, index) => {
                        const Icon = tool.icon;
                        return (
                            <motion.div
                                key={tool.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group"
                            >
                                <div className={`w-12 h-12 rounded-2xl ${tool.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                                <p className="text-zinc-500 leading-relaxed font-light">
                                    {tool.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
