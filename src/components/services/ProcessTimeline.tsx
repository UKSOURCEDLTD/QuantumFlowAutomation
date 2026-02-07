"use client";

import { motion } from "framer-motion";
import {
    PhoneCall,
    FileText,
    CreditCard,
    Hammer,
    Rocket,
    HeadphonesIcon
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discovery Call",
        description: "Free 30-min call to understand your needs",
        icon: PhoneCall,
    },
    {
        number: "02",
        title: "Proposal",
        description: "Clear scope, timeline, and pricing",
        icon: FileText,
    },
    {
        number: "03",
        title: "Payment",
        description: "50% to begin work",
        icon: CreditCard,
    },
    {
        number: "04",
        title: "Build",
        description: "1-4 weeks with regular updates",
        icon: Hammer,
    },
    {
        number: "05",
        title: "Launch",
        description: "Go live with full handover",
        icon: Rocket,
    },
    {
        number: "06",
        title: "Support",
        description: "Included period + ongoing options",
        icon: HeadphonesIcon,
    },
];

export function ProcessTimeline() {
    return (
        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[4rem] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex flex-col items-center text-center group"
                    >
                        {/* Step Number Badge */}
                        <div className="w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-xs font-mono text-gray-500 mb-4 z-10 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                            {step.number}
                        </div>

                        {/* Icon Circle */}
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300 shadow-[0_0_0_1px_rgba(0,0,0,0)] group-hover:shadow-[0_0_20px_rgba(0,229,160,0.3)]">
                            <step.icon className="w-7 h-7 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                        </div>

                        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-400">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
