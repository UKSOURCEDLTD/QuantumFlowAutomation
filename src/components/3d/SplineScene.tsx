'use client';

import { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const SplineLazy = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

interface SplineSceneProps {
    scene: string;
    className?: string;
    interactive?: boolean;
    onLoad?: (app: any) => void;
    /** Pixels before entering viewport to start loading. Default "300px" */
    rootMargin?: string;
}

/**
 * Production-ready Spline 3D scene component.
 * Uses IntersectionObserver to defer loading until near the viewport,
 * lazy-loads the ~500KB Spline runtime, shows a loading spinner, and
 * fades in once the scene is ready.
 *
 * Usage:
 *   <SplineScene scene="https://prod.spline.design/xxx/scene.splinecode" />
 */
export function SplineScene({
    scene,
    className = '',
    interactive = true,
    onLoad,
    rootMargin = '300px',
}: SplineSceneProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // Only mount Spline when container is near the viewport
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [rootMargin]);

    const handleLoad = (app: any) => {
        setLoaded(true);
        onLoad?.(app);
    };

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full overflow-hidden ${className}`}
            style={{ pointerEvents: interactive ? 'auto' : 'none' }}
        >
            {/* Loading indicator — shown until scene is fully loaded */}
            {!loaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                            Loading 3D Scene
                        </span>
                    </div>
                </div>
            )}

            {/* Only render Spline when in/near viewport */}
            {isInView && (
                <SplineLazy
                    scene={scene}
                    onLoad={handleLoad}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: loaded ? 1 : 0,
                        transition: 'opacity 0.6s ease-out',
                    }}
                />
            )}
        </div>
    );
}
