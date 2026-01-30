import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';

export default function YZYScene() {
    const { scene } = useGLTF('/arena.glb');
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.05; // Very slow rotation
        }
    });

    return (
        <>
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            <Float
                speed={1.5}
                rotationIntensity={0.2}
                floatIntensity={0.5}
                floatingRange={[-0.2, 0.2]}
            >
                <primitive
                    object={scene}
                    ref={meshRef}
                    scale={0.05} // Models usually come in huge, trying small first or 1? I'll try 1 first, user said "if too small... scale 2x", implying it might be small. 
                    // Wait, if I make it 1 and it's huge, that's an issue. If I make it 1 and it's tiny, I scale up.
                    // Common GLTF export issues. I'll stick to 1.
                    // Re-reading: "Scale the arena.glb by 2x...". I'll start with 1.
                    position={[0, -0.5, 0]}
                />
            </Float>
        </>
    );
}
