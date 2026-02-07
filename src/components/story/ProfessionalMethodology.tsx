'use client';

import { motion } from 'framer-motion';

const phases = [
    {
        phase: "Discovery & Assessment",
        timeline: "Week 1-2",
        activities: [
            "Comprehensive business process audit",
            "Technology stack evaluation",
            "ROI modeling and opportunity identification",
            "Stakeholder alignment workshops"
        ]
    },
    {
        phase: "Strategy & Design",
        timeline: "Week 3-4",
        activities: [
            "Custom AI architecture design",
            "Integration roadmap development",
            "Security and compliance planning",
            "Change management strategy"
        ]
    },
    {
        phase: "Build & Deploy",
        timeline: "Week 5-12",
        activities: [
            "Agile development sprints",
            "Continuous testing and validation",
            "Phased rollout to minimize disruption",
            "Team training and knowledge transfer"
        ]
    },
    {
        phase: "Optimize & Scale",
        timeline: "Ongoing",
        activities: [
            "Performance monitoring and optimization",
            "Continuous improvement based on metrics",
            "Expansion to additional use cases",
            "Dedicated support and maintenance"
        ]
    }
];

export function ProfessionalMethodology() {
    return (
        <section className="py-32 bg-zinc-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Our Proven <span className="text-primary">Methodology</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                        A structured, repeatable framework that ensures successful AI implementation
                        with measurable business impact.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {phases.map((item, index) => (
                        <motion.div
                            key={item.phase}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative mb-12 last:mb-0"
                        >
                            {/* Connection Line */}
                            {index < phases.length - 1 && (
                                <div className="absolute left-6 top-24 w-px h-16 bg-primary/20" />
                            )}

                            <div className="flex items-start gap-8">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                                        <span className="text-primary font-bold">{index + 1}</span>
                                    </div>
                                </div>

                                <div className="flex-1 pb-8">
                                    <div className="flex items-baseline justify-between mb-4">
                                        <h3 className="text-2xl font-bold">{item.phase}</h3>
                                        <span className="text-sm font-mono text-primary">{item.timeline}</span>
                                    </div>

                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {item.activities.map((activity) => (
                                            <li key={activity} className="flex items-start gap-2 text-zinc-400">
                                                <span className="text-primary mt-1.5">→</span>
                                                <span>{activity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
