import { Canvas } from "@react-three/fiber";
import { Code, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";

export default function AboutSection() {
  function AboutBackground() {
    const groupRef = useRef<THREE.Group>(null);
    const { mouse } = useThree();

    const codeParticles = useMemo(() => {
      const temp = [];
      for (let i = 0; i < 800; i++) {
        temp.push((Math.random() - 0.5) * 15);
        temp.push((Math.random() - 0.5) * 15);
        temp.push((Math.random() - 0.5) * 15);
      }
      return new Float32Array(temp);
    }, []);

    useFrame((state) => {
      const time = state.clock.getElapsedTime();
      if (groupRef.current) {
        groupRef.current.rotation.x =
          Math.sin(time * 0.2) * 0.1 + mouse.y * 0.0002;
        groupRef.current.rotation.y = time * 0.03 + mouse.x * 0.0002;
        groupRef.current.rotation.z = Math.cos(time * 0.1) * 0.05;
      }
    });

    return (
      <group ref={groupRef}>
        <Points positions={codeParticles} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#8b5cf6"
            size={0.012}
            sizeAttenuation
            depthWrite={false}
            blending={2}
            opacity={0.6}
          />
        </Points>
      </group>
    );
  }

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <AboutBackground />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
        </Canvas>
      </div>
      <div className="relative z-20 container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="transform hover:scale-105 transition-all duration-700 order-2 md:order-1">
            <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center animate-pulse-slow">
              <div className="w-40 h-40 sm:w-56 sm:h-56 bg-black/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-indigo-400/30">
                <Code className="w-16 h-16 sm:w-24 sm:h-24 text-indigo-400 animate-spin-slow" />
              </div>
            </div>
          </div>
          <div className="text-gray-300 space-y-4 sm:space-y-6 order-1 md:order-2">
            <p className="text-base sm:text-lg leading-relaxed transform hover:translate-x-2 transition-all duration-500">
              I'm a passionate software engineer and AI/ML specialist with 5+
              years of experience building scalable web applications and
              intelligent systems. I love turning complex problems into simple,
              beautiful solutions.
            </p>
            <p className="text-base sm:text-lg leading-relaxed transform hover:translate-x-2 transition-all duration-500">
              When I'm not coding, you can find me exploring new AI
              technologies, contributing to open source projects, or sharing
              knowledge with the developer community about machine learning and
              web development.
            </p>
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <Button
                variant="outline"
                size="icon"
                className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white transform hover:scale-110 hover:rotate-12 transition-all duration-500"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white transform hover:scale-110 hover:rotate-12 transition-all duration-500"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transform hover:scale-110 hover:rotate-12 transition-all duration-500"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
