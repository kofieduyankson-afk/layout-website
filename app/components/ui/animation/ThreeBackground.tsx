// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// import { useRef } from "react";
// import * as THREE from "three";

// function FloatingParticles() {
//     const ref = useRef<THREE.Points>(null!);

//     // Rotate slowly for subtle motion
//     useFrame((state, delta) => {
//         ref.current.rotation.y += delta * 0.05;
//         ref.current.rotation.x += delta * 0.02;
//     });

//     // Generate particles
//     const positions = new Float32Array(
//         Array.from({ length: 1500 }, () => (Math.random() - 0.5) * 10)
//     );

//     return (
//         <Points ref={ref} positions={positions} stride={3}>
//             <PointMaterial
//                 transparent
//                 color="#17a28f"
//                 size={0.03}
//                 sizeAttenuation
//                 depthWrite={false}
//                 opacity={0.5}
//             />
//         </Points>
//     );
// }

// export default function ThreeBackground() {
//     return (
//         <div className="absolute inset-0 -z-10 pointer-events-none">
//             <Canvas camera={{ position: [0, 0, 5] }}>
//                 <ambientLight intensity={0.5} />
//                 <FloatingParticles />
//             </Canvas>
//         </div>
//     );
// }
