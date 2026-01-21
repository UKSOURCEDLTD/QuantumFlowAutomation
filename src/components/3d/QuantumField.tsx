"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function StructuralGridNetwork() {
    const groupRef = useRef<THREE.Group>(null!);

    // Grid Config: 6x6x6 = 216 nodes (Less dense)
    const gridSize = 6;
    const spacing = 6.5; // Wider spacing
    const count = gridSize * gridSize * gridSize;
    const walkerCount = 10;

    // Generate Grid Positions
    const { positions, gridMap } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const map = new Map<string, number>();

        let i = 0;
        const offset = ((gridSize - 1) * spacing) / 2;

        for (let x = 0; x < gridSize; x++) {
            for (let y = 0; y < gridSize; y++) {
                for (let z = 0; z < gridSize; z++) {
                    const px = x * spacing - offset;
                    const py = y * spacing - offset;
                    const pz = z * spacing - offset;

                    pos[i * 3] = px;
                    pos[i * 3 + 1] = py;
                    pos[i * 3 + 2] = pz;

                    map.set(`${x},${y},${z}`, i);
                    i++;
                }
            }
        }
        return { positions: pos, gridMap: map };
    }, []);

    // Static Orthogonal Connections
    const { staticLinesPos, staticLinesColor, neighbors } = useMemo(() => {
        const lines: number[] = [];
        const colors: number[] = [];
        const neighborList: number[][] = Array.from({ length: count }, () => []);

        const addLine = (i1: number, i2: number) => {
            const p1x = positions[i1 * 3], p1y = positions[i1 * 3 + 1], p1z = positions[i1 * 3 + 2];
            const p2x = positions[i2 * 3], p2y = positions[i2 * 3 + 1], p2z = positions[i2 * 3 + 2];

            lines.push(p1x, p1y, p1z, p2x, p2y, p2z);

            // Faint default color
            const dim = 0.15;
            colors.push(0.8 * dim, 1.0 * dim, 0.0, 0.8 * dim, 1.0 * dim, 0.0);

            neighborList[i1].push(i2);
            neighborList[i2].push(i1);
        };

        for (let x = 0; x < gridSize; x++) {
            for (let y = 0; y < gridSize; y++) {
                for (let z = 0; z < gridSize; z++) {
                    const currentIdx = gridMap.get(`${x},${y},${z}`)!;
                    if (x < gridSize - 1) addLine(currentIdx, gridMap.get(`${x + 1},${y},${z}`)!);
                    if (y < gridSize - 1) addLine(currentIdx, gridMap.get(`${x},${y + 1},${z}`)!);
                    if (z < gridSize - 1) addLine(currentIdx, gridMap.get(`${x},${y},${z + 1}`)!);
                }
            }
        }

        return {
            staticLinesPos: new Float32Array(lines),
            staticLinesColor: new Float32Array(colors),
            neighbors: neighborList
        };
    }, [positions, gridMap]);

    // Walkers
    const walkers = useRef(
        Array.from({ length: walkerCount }).map(() => ({
            current: Math.floor(Math.random() * count),
            target: -1,
            progress: 0,
            speed: 0.02 + Math.random() * 0.02 // Faster data movement
        }))
    );

    const dynamicLinesGeometryRef = useRef<THREE.BufferGeometry>(null!);
    const dynamicPos = useMemo(() => new Float32Array(walkerCount * 2 * 3), []);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        // Faster rotation as requested
        groupRef.current.rotation.y += delta * 0.08;
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;

        // Update Walkers
        if (dynamicLinesGeometryRef.current) {
            let idx = 0;
            walkers.current.forEach(walker => {
                if (walker.target === -1) {
                    const n = neighbors[walker.current];
                    if (n && n.length > 0) {
                        walker.target = n[Math.floor(Math.random() * n.length)];
                    } else {
                        walker.current = Math.floor(Math.random() * count);
                        return;
                    }
                }

                walker.progress += walker.speed;

                const u = walker.current;
                const v = walker.target;

                const ux = positions[u * 3], uy = positions[u * 3 + 1], uz = positions[u * 3 + 2];
                const vx = positions[v * 3], vy = positions[v * 3 + 1], vz = positions[v * 3 + 2];

                dynamicPos[idx++] = ux;
                dynamicPos[idx++] = uy;
                dynamicPos[idx++] = uz;
                dynamicPos[idx++] = vx;
                dynamicPos[idx++] = vy;
                dynamicPos[idx++] = vz;

                if (walker.progress >= 1) {
                    walker.current = walker.target;
                    walker.target = -1;
                    walker.progress = 0;
                }
            });
            dynamicLinesGeometryRef.current.setDrawRange(0, idx / 3);
            dynamicLinesGeometryRef.current.attributes.position.needsUpdate = true;
        }
    });

    return (
        <group ref={groupRef}>
            <Points positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#CCFF00"
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>

            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[staticLinesPos, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        args={[staticLinesColor, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    vertexColors={true}
                    transparent
                    opacity={0.3}
                    linewidth={1}
                />
            </lineSegments>

            <lineSegments>
                <bufferGeometry ref={dynamicLinesGeometryRef}>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[dynamicPos, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#FFFFFF"
                    transparent
                    opacity={1.0}
                    linewidth={2}
                />
            </lineSegments>
        </group>
    );
}

export function QuantumField() {
    return (
        // Changed to absolute to fit inside relative containers
        <div className="absolute inset-0 z-[-1] opacity-50 mix-blend-screen pointer-events-none fade-in-scale">
            <Canvas camera={{ position: [0, 0, 45], fov: 50 }} gl={{ alpha: true, antialias: true }}>
                <StructuralGridNetwork />
            </Canvas>
        </div>
    );
}
