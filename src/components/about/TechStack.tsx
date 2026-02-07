'use client';

import { motion } from 'framer-motion';

const technologies = [
    { name: 'Google Cloud', category: 'Infrastructure', size: 'lg' },
    { name: 'Vertex AI', category: 'AI/ML', size: 'lg' },
    { name: 'Cloud Run', category: 'Compute', size: 'md' },
    { name: 'Next.js', category: 'Frontend', size: 'md' },
    { name: 'Python', category: 'Backend', size: 'md' },
    { name: 'Firestore', category: 'Database', size: 'md' },
    { name: 'BigQuery', category: 'Analytics', size: 'sm' },
    { name: 'Gemini', category: 'AI Models', size: 'lg' },
    { name: 'LangChain', category: 'Orchestration', size: 'sm' },
    { name: 'TypeScript', category: 'Language', size: 'sm' },
    { name: 'Pub/Sub', category: 'Messaging', size: 'sm' },
    { name: 'Docker', category: 'DevOps', size: 'sm' },
];

const sizeClasses: Record<string, string> = {
    lg: 'px-8 py-4 text-lg font-bold',
    md: 'px-6 py-3 text-base font-semibold',
    sm: 'px-5 py-2.5 text-sm font-medium',
};

export function TechStack() {
    return (
        <section className="py-32 md:py-40 bg-zinc-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,160,0.03),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Constellation dots */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-primary/20 animate-pulse"
                        style={{
                            top: `${10 + (i * 37) % 80}%`,
                            left: `${5 + (i * 53) % 90}%`,
                            animationDuration: `${3 + (i % 4)}s`,
                            animationDelay: `${(i * 0.3) % 3}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                        Our Stack
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Enterprise Tech</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        We use the same infrastructure that powers the world&apos;s largest companies —
                        scaled for your business.
                    </p>
                </motion.div>

                {/* Tech Badges Cloud */}
                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4, type: 'spring', stiffness: 200 }}
                            whileHover={{ scale: 1.08, y: -4 }}
                            className="group relative"
                        >
                            <div className={`relative ${sizeClasses[tech.size]} rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm cursor-default transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_30px_rgba(0,229,160,0.12)]`}>
                                {/* Glow on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-300" />

                                <div className="relative z-10 flex items-center gap-3">
                                    <span className="text-white group-hover:text-primary transition-colors duration-300">
                                        {tech.name}
                                    </span>
                                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-wider hidden sm:inline">
                                        {tech.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Google Cloud Partner badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-primary/20 bg-primary/5">
                        <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,229,160,0.5)]" />
                        <span className="font-mono text-sm text-zinc-400 uppercase tracking-widest">
                            Google Cloud Partner
                        </span>
                        <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,229,160,0.5)]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
