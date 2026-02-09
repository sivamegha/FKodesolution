import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function ExpandingParticles({ isExpanded }) {
  const particlesRef = useRef();
  const count = 500;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * (isExpanded ? 15 : 5);
    positions[i + 1] = (Math.random() - 0.5) * (isExpanded ? 15 : 5);
    positions[i + 2] = (Math.random() - 0.5) * (isExpanded ? 10 : 3);
    
    const colorChoice = Math.random();
    if (colorChoice < 0.5) {
      colors[i] = 0;
      colors[i + 1] = 0.83;
      colors[i + 2] = 1;
    } else {
      colors[i] = 1;
      colors[i + 1] = 0.27;
      colors[i + 2] = 0;
    }
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isExpanded ? 0.08 : 0.05}
        vertexColors={true}
        transparent
        opacity={isExpanded ? 0.9 : 0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function ExpandableSection({ 
  children, 
  expandedContent, 
  sectionId,
  imageUrl 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {children}
      
      {/* Explore More Button */}
      <div className="flex justify-center mt-8 mb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.4), 0 0 20px rgba(255, 69, 0, 0.4)' }}
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </>
          ) : (
            <>
              <span>Explore More</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Expanded Content with Animation */}
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isExpanded && (
          <div className="relative mt-8 bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-3xl border border-gray-800">
            {/* Three.js Background */}
            <div className="absolute inset-0 opacity-30">
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} intensity={1} color="#00d4ff" />
                <pointLight position={[-5, -5, 5]} intensity={1} color="#ff4500" />
                <ExpandingParticles isExpanded={isExpanded} />
              </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {imageUrl && (
                <div className="mb-8 rounded-2xl overflow-hidden">
                  <img
                    src={imageUrl}
                    alt="Section"
                    className="w-full h-64 md:h-96 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="text-white prose prose-invert max-w-none">
                {expandedContent}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

