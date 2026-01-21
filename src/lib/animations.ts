'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Hook for scroll-triggered reveal animations
 * @param threshold - Intersection threshold (0-1)
 * @returns ref to attach to element and isVisible state
 */
export function useScrollReveal(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return { ref, isVisible };
}

/**
 * Hook for glitch effect on component mount
 * @param duration - Duration of glitch effect in ms
 * @returns isGlitching state
 */
export function useGlitchEffect(duration = 1000) {
    const [isGlitching, setIsGlitching] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsGlitching(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    return isGlitching;
}
