import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Computer } from "./Models/Computer-optimized";

const ContactExperience = () => {
  const [canvasKey, setCanvasKey] = useState(0);
  const [contextLost, setContextLost] = useState(false);

  const handleOnCreated = ({ gl }) => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    gl.setPixelRatio(dpr);

    try {
      const onLost = (e) => {
        e.preventDefault();
        console.warn('ContactExperience: WebGL context lost');
        setContextLost(true);
      };
      const onRestored = () => {
        console.info('ContactExperience: WebGL context restored');
        setContextLost(false);
        setCanvasKey((k) => k + 1);
      };

      gl.domElement.addEventListener('webglcontextlost', onLost, false);
      gl.domElement.addEventListener('webglcontextrestored', onRestored, false);
    } catch (err) {
      // ignore
    }
  };

  return (
    <div className="h-96 md:h-[50vh] lg:h-[60vh] rounded-lg overflow-hidden relative">
      {contextLost && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 text-white">
          WebGL context lost — attempting to restore...
        </div>
      )}

      <Canvas
        key={canvasKey}
        shadows
        camera={{ position: [0, 3, 7], fov: 45 }}
        onCreated={handleOnCreated}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} color="#fff4e6" />

        <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

        <directionalLight
          position={[5, 9, 1]}
          castShadow
          intensity={2.5}
          color="#ffd9b3"
        />

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <group scale={[1, 1, 1]}>
          <mesh
            receiveShadow
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#a46b2d" />
          </mesh>
        </group>

        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <Computer />
        </group>
      </Canvas>
    </div>
  );
};

export default ContactExperience;
