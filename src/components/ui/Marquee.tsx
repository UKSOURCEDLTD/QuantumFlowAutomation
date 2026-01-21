'use client';

export function Marquee() {
    const messages = [
        "LIVE METRICS",
        "ZERO-LATENCY",
        "GLOBAL NODES",
        "AUTONOMOUS SYSTEMS",
        "QUANTUM PROCESSING",
        "EDGE COMPUTING"
    ];

    const content = messages.join(" // ");

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-primary/10 border-b border-primary/20 overflow-hidden">
            <div className="flex whitespace-nowrap text-mono">
                <div className="animate-[marquee_30s_linear_infinite] flex">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] px-4 py-2">
                        {content} // {content}
                    </span>
                </div>
            </div>
        </div>
    );
}
