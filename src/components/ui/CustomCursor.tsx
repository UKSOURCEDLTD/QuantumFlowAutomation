'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only show custom cursor on desktop
        const isDesktop = window.matchMedia('(min-width: 768px)').matches;
        if (!isDesktop) {
            document.body.style.cursor = 'auto';
            return;
        }

        setIsVisible(true);
        let trailId = 0;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, input, textarea, select, [role="button"], [onclick]');
            setIsHovering(!!isClickable);

            // Add trail point
            setTrails(prev => {
                const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
                const updated = [...prev, newTrail];
                // Keep only last 5 trail points
                return updated.slice(-5);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Remove old trail points
        const trailCleanup = setInterval(() => {
            setTrails(prev => prev.slice(1));
        }, 50);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(trailCleanup);
            document.body.style.cursor = 'auto';
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor with hover state */}
            <div
                className={`custom-cursor cursor-crosshair transition-transform duration-200 ${isHovering ? 'scale-150' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />

            {/* Outer pulsing ring when hovering */}
            {isHovering && (
                <div
                    className="custom-cursor animate-[ping_1s_ease-in-out_infinite]"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        width: '40px',
                        height: '40px',
                        border: '2px solid var(--primary)',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.5,
                    }}
                />
            )}

            {/* Trail cursors */}
            {trails.map((trail, index) => (
                <div
                    key={trail.id}
                    className="custom-cursor cursor-trail"
                    style={{
                        left: `${trail.x}px`,
                        top: `${trail.y}px`,
                        opacity: 0.5 - (index * 0.1),
                    }}
                />
            ))}
        </>
    );
}
