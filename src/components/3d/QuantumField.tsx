"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// import * as random from "math/rand/dist/random/random.js"; // Removed invalid import
import * as THREE from "three";

function Particles(props: any) {
    const ref = useRef<THREE.Points>(null!);

    // Generate 2000 random points in a sphere
    const sphere = useMemo(() => {
        const temp = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);
            const x = 20 * Math.sin(theta) * Math.cos(phi);
            const y = 20 * Math.sin(theta) * Math.sin(phi);
            const z = 20 * Math.cos(theta);

            // Better distribution: filling a box roughly
            temp[i * 3] = (Math.random() - 0.5) * 30;
            temp[i * 3 + 1] = (Math.random() - 0.5) * 30;
            temp[i * 3 + 2] = (Math.random() - 0.5) * 30;
        }
        return temp;
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#CCFF00"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export function QuantumField() {
    return (
        <div className="fixed inset-0 z-[-1] opacity-40">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <Particles />
            </Canvas>
        </div>
    );
}
