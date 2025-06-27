import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  function HeroParticles() {
    const mesh = useRef<THREE.Points>(null);
    const { mouse, viewport } = useThree();

    const particles = useMemo(() => {
      const temp = [];
      for (let i = 0; i < 1500; i++) {
        temp.push((Math.random() - 0.5) * 10);
        temp.push((Math.random() - 0.5) * 10);
        temp.push((Math.random() - 0.5) * 10);
      }
      return new Float32Array(temp);
    }, []);

    const targetRotation = useRef({ x: 0, y: 0 });

    useFrame((state) => {
      const time = state.clock.getElapsedTime();
      const mX = mouse.x * viewport.width * 0.0005;
      const mY = mouse.y * viewport.height * 0.0005;

      targetRotation.current.x = time * 0.1 + mY;
      targetRotation.current.y = time * 0.05 + mX;

      if (mesh.current) {
        mesh.current.rotation.x = THREE.MathUtils.lerp(
          mesh.current.rotation.x,
          targetRotation.current.x,
          0.05
        );
        mesh.current.rotation.y = THREE.MathUtils.lerp(
          mesh.current.rotation.y,
          targetRotation.current.y,
          0.05
        );
      }
    });

    return (
      <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.008}
          sizeAttenuation
          depthWrite={false}
          blending={2}
        />
      </Points>
    );
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <HeroParticles />
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>

      <div className="relative z-20 text-center text-white px-4 sm:px-6">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 via-violet-400 to-white bg-clip-text text-transparent animate-fade-in drop-shadow-2xl">
          Sheraz Waseem
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 bg-gradient-to-r from-violet-400 via-indigo-400 to-white bg-clip-text text-transparent min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
          <Typewriter
            words={[
              "Software Engineer",
              "AI/ML Engineer",
              "Full Stack Developer",
              "Web Developer",
              "App Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </div>


        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in px-4">
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-indigo-500/25"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg transform hover:scale-105 transition-all duration-500"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
