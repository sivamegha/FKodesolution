import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Line } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* 🌍 Globe */
function Globe() {
  const ref = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    // slow rotation
    ref.current.rotation.y += 0.0008;

    // mouse interaction
    ref.current.rotation.x = mouse.y * 0.2;
    ref.current.rotation.y += mouse.x * 0.02;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2.6, 64, 64]} />
      <meshStandardMaterial
        color="#0a1aff"
        emissive="#1e40ff"
        emissiveIntensity={0.4}
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

/* 🌐 Dots (continents feel) */
function Dots() {
  const points = [];

  for (let i = 0; i < 500; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    const r = 2.6;

    points.push(
      new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      )
    );
  }

  return points.map((p, i) => (
    <mesh key={i} position={p}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshStandardMaterial emissive="#60a5fa" />
    </mesh>
  ));
}

/* 🔗 Network lines */
function Connections() {
  const connections = [
    [[-1, 1, 1], [1, -1, 1]],
    [[1, 1, -1], [-1, -1, 1]],
    [[-1, -1, -1], [1, 1, 1]],
  ];

  return connections.map((c, i) => (
    <Line
      key={i}
      points={c}
      color="#7c3aed"
      transparent
      opacity={0.4}
      lineWidth={1}
    />
  ));
}

export default function GlobeBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 7] }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} />
      <Stars radius={100} depth={50} count={4000} factor={4} />
      <Globe />
      <Dots />
      <Connections />
    </Canvas>
  );
}
