'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const SplineLazy = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
    ),
});

interface SplineSceneProps {
    scene: string;
    className?: string;
    interactive?: boolean;
    onLoad?: (app: any) => void;
}

/**
 * Production-ready Spline 3D scene component.
 * Lazy-loads the ~500KB Spline runtime, shows a loading spinner, and
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
}: SplineSceneProps) {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = (app: any) => {
        setLoaded(true);
        onLoad?.(app);
    };

    return (
        <div
            className={`relative w-full h-full overflow-hidden ${className}`}
            style={{ pointerEvents: interactive ? 'auto' : 'none' }}
        >
            {/* Loading indicator */}
            {!loaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/80">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                            Loading 3D Scene
                        </span>
                    </div>
                </div>
            )}

            {/* Dynamically-loaded Spline scene */}
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
        </div>
    );
}
