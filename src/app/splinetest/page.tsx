'use client';

import { Navbar } from '@/components/layout/Navbar';
import { SplineScene } from '@/components/3d/SplineScene';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SplineTestPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#000' }}>
            <Navbar />

            {/* Back nav */}
            <div className="container mx-auto px-6 pt-24 pb-4 relative z-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors uppercase tracking-widest font-mono"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>

            {/* Spline scene — explicit height */}
            <div style={{
                flex: 1,
                position: 'relative',
                minHeight: '80vh',
                width: '100%',
            }}>
                <div className="absolute inset-0" style={{ transform: 'scale(1.5)', transformOrigin: 'center center' }}>
                    <SplineScene
                        scene="https://prod.spline.design/13hUBQ6WPaSGm2Zk/scene.splinecode"
                    />
                </div>
            </div>
        </div>
    );
}
