"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingFeature {
    text: string;
    included: boolean;
}

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    delay?: number;
    className?: string;
}

export function PricingCard({
    title,
    price,
    description,
    features,
    isPopular = false,
    delay = 0,
    className,
}: PricingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "relative flex flex-col p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1",
                isPopular
                    ? "bg-white/10 border-primary/50 shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)]"
                    : "bg-white/5 border-white/10 hover:border-white/20",
                className
            )}
        >
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-black text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                </div>
            )}

            <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-white">{price}</span>
                </div>
                <p className="text-sm text-gray-400 min-h-[40px]">{description}</p>
            </div>

            <div className="flex-grow mb-6">
                <ul className="space-y-3">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="leading-tight">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                className={cn(
                    "w-full py-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3",
                    isPopular
                        ? "bg-primary text-black hover:bg-primary/90"
                        : "bg-white/10 text-white hover:bg-white/20"
                )}
            >
                Select Plan <ArrowRight className="w-4 h-4" />
            </button>
        </motion.div>
    );
}
