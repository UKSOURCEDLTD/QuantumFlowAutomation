'use client';

import dynamic from 'next/dynamic';

const SplineLazy = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

interface SplineSceneProps {
    scene: string;
    className?: string;
    interactive?: boolean;
    onLoad?: (app: any) => void;
}

/**
 * Thin wrapper around the Spline runtime.
 * Lazy-loads the ~500KB JS bundle (no SSR) but renders immediately.
 */
export function SplineScene({
    scene,
    className = '',
    interactive = true,
    onLoad,
}: SplineSceneProps) {
    return (
        <div
            className={`relative w-full h-full overflow-hidden ${className}`}
            style={{ pointerEvents: interactive ? 'auto' : 'none' }}
        >
            <SplineLazy
                scene={scene}
                onLoad={onLoad}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            />
        </div>
    );
}
