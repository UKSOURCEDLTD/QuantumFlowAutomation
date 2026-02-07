'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "A Friendly Chat",
        desc: "We start with a simple conversation. No high-pressure sales, just listening to what you need.",
        theme: "blue"
    },
    {
        num: "02",
        title: "The Plan",
        desc: "We show you exactly how we can help, in plain English. You'll know what to expect, and what it costs.",
        theme: "teal"
    },
    {
        num: "03",
        title: "Relax & Watch",
        desc: "We handle the build, the testing, and the maintenance. You just enjoy your new, better workflows.",
        theme: "purple"
    }
];

export function SimpleSteps() {
    return (
        <section className="py-32 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">How we work together</h2>
                    <p className="text-zinc-500">A low-stress process built on transparency and trust.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            <span className="text-8xl font-black text-white/5 absolute -top-10 -left-4 select-none">
                                {step.num}
                            </span>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-zinc-500 leading-relaxed font-light">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
