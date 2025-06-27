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
          <div className="transform hover:scale-105 transition-all duration-700 order-2 md:order-1 -mt-8">
            <div className="relative group w-56 h-56 sm:w-72 sm:h-72 mx-auto rounded-2xl shadow-xl shadow-indigo-800/30 ring-2 ring-indigo-400/30 hover:ring-indigo-500/50 transition duration-500">
              <img
                src="/Profile-Pic.jpg"
                alt="Sheraz Waseem"
                className="w-full h-full rounded-2xl object-cover"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 backdrop-blur-sm bg-black/40 px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-500 bg-clip-text text-transparent text-xs sm:text-sm font-medium">
                  Sheraz Waseem
                </span>
              </div>
            </div>
          </div>

          <div className="text-gray-300 space-y-4 sm:space-y-6 order-1 md:order-2">
            <p className="text-base sm:text-lg leading-relaxed transform hover:translate-x-2 transition-all duration-500">
              I'm a Computer Science senior at LUMS and a passionate full-stack
              developer and AI/ML enthusiast. With hands-on experience building
              web and mobile applications, integrating APIs, and training deep
              learning models, I love turning ideas into real-world products.
            </p>
            <p className="text-base sm:text-lg leading-relaxed transform hover:translate-x-2 transition-all duration-500">
              Beyond coding, I enjoy exploring cutting-edge AI architectures,
              contributing to impactful research projects, and building
              intelligent systems - from fire detection to medical imaging. I'm
              always curious, always building.
            </p>
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <Button
                variant="outline"
                size="icon"
                className="border-black text-black hover:bg-black hover:text-white transform hover:scale-110 hover:rotate-12 transition-all duration-500"
                onClick={() =>
                  window.open("https://github.com/Sherazwaseem1", "_blank")
                }
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white transform hover:scale-110 hover:rotate-12 transition-all duration-500"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/sheraz-waseem/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
