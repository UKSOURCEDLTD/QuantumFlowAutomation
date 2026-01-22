'use client';

import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    brightness: number;
    twinkleSpeed: number;
}

export function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let stars: Star[] = [];
        let animationFrameId: number;
        let width = 0;
        let height = 0;

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // Increased density: divide area by 1500 (was 3000)
            const starCount = Math.floor((width * height) / 1500);
            stars = [];

            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1.5 + 0.5, // Slightly larger base size
                    speed: Math.random() * 0.4 + 0.1, // Increased speed
                    brightness: Math.random(),
                    twinkleSpeed: Math.random() * 0.03 + 0.005
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Subtle nebula background gradient
            const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
            gradient.addColorStop(0, 'rgba(20, 20, 40, 0.4)'); // Slightly clearer background
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Draw connections first (behind stars)
            ctx.lineWidth = 0.5;
            for (let i = 0; i < stars.length; i++) {
                const star1 = stars[i];
                // Connect to neighbors
                for (let j = i + 1; j < stars.length; j++) {
                    const star2 = stars[j];
                    const dx = star1.x - star2.x;
                    const dy = star1.y - star2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Connection threshold
                    if (distance < 100) {
                        const opacity = (1 - distance / 100) * 0.2 * star1.brightness;
                        ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`; // Cyan tint for "data" feel
                        ctx.beginPath();
                        ctx.moveTo(star1.x, star1.y);
                        ctx.lineTo(star2.x, star2.y);
                        ctx.stroke();
                    }
                }
            }

            stars.forEach(star => {
                // Update
                star.y -= star.speed;
                // Wrap around with randomization to break patterns
                if (star.y < -10) {
                    star.y = height + 10;
                    star.x = Math.random() * width;
                }

                // Twinkle
                star.brightness += star.twinkleSpeed;
                if (star.brightness > 1 || star.brightness < 0.2) {
                    star.twinkleSpeed = -star.twinkleSpeed;
                }

                // Draw Star
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, star.brightness))})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        init();
        draw();

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-80"
        />
    );
}
