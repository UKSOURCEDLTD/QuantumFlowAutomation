'use client';

import { useEffect, useState } from 'react';

export function StatusIndicator() {
    const statuses = ['Online', 'Optimized', 'Cutting Edge'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % statuses.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center gap-3">
            {/* LED Indicator */}
            <div className="relative w-2 h-2">
                <div className="absolute inset-0 bg-primary rounded-full animate-[blink-led_2s_ease-in-out_infinite]" />
                <div className="absolute inset-0 bg-primary rounded-full blur-sm opacity-50" />
            </div>

            {/* Status Text */}
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] text-mono">
                Status: {statuses[currentIndex]}
            </span>

            <div className="w-12 h-[1px] bg-primary" />
        </div>
    );
}
