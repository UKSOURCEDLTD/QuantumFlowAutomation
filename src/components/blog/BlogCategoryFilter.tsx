'use client';

import { motion } from "framer-motion";

interface BlogCategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export function BlogCategoryFilter({ categories, activeCategory, onCategoryChange }: BlogCategoryFilterProps) {
    return (
        <div className="relative">
            {/* Fade edges for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden" />

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide md:flex-wrap md:justify-center">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            relative px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap
                            transition-all duration-300 cursor-pointer
                            ${activeCategory === category
                                ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                            }
                        `}
                    >
                        {activeCategory === category && (
                            <motion.div
                                layoutId="activeCategoryPill"
                                className="absolute inset-0 bg-gray-900 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{category}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
