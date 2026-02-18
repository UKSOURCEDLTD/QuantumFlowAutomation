'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Spline = dynamic(
    () => import('@splinetool/react-spline').then((mod) => mod.default),
    {
        ssr: false,
        loading: () => (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#000',
            }}>
                <div style={{
                    width: 40,
                    height: 40,
                    border: '2px solid rgba(0,229,160,0.3)',
                    borderTop: '2px solid #00E5A0',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                }} />
            </div>
        ),
    }
);

export default function SplineTestPage() {
    const [loaded, setLoaded] = useState(false);

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
                <Spline
                    scene="https://prod.spline.design/QYEJMLhOC333ohDS/scene.splinecode"
                    onLoad={() => setLoaded(true)}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        transform: 'scale(1.5)',
                        transformOrigin: 'center center',
                    }}
                />
            </div>
        </div>
    );
}
