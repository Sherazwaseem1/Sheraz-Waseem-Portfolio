"use client";

import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
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
