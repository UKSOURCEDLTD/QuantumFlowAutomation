'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingUp, DollarSign } from 'lucide-react';

const benefits = [
    {
        icon: Clock,
        title: "Reclaim Your Time",
        description: "What would you do with an extra 20 hours a week? AI handles the admin, scheduling, and repetitive tasks so you can focus on high-value strategy.",
        color: "text-blue-400"
    },
    {
        icon: DollarSign,
        title: "Increase Profit",
        description: "Automated systems cost pennies to run compared to human hours. Scale your output without increasing your payroll.",
        color: "text-green-400"
    },
    {
        icon: TrendingUp,
        title: "Scale Without Chaos",
        description: "Growth usually means more complexity and more management. AI allows you to handle 10x the volume with the same team size.",
        color: "text-purple-400"
    }
];

export function AgenticImpact() {
    return (
        <section className="py-24 bg-black border-b border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Do It Now?</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        This isn't about being "cool" or "techy." It's about efficiency.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-primary/50 transition-all duration-300 group"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${benefit.color}`}>
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
