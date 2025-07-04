"use client";

import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="relative z-20 container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-start">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start order-1">
            <div className="relative group w-56 h-56 sm:w-72 sm:h-72 rounded-2xl shadow-xl shadow-indigo-800/30 ring-2 ring-indigo-400/30 hover:ring-indigo-500/50 transition duration-500">
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

          {/* Text & Buttons */}
          <div className="text-gray-300 order-2 flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <p className="text-base sm:text-lg leading-relaxed transform hover:translate-x-2 transition-all duration-500">
                I'm a Computer Science senior at LUMS and a passionate
                full-stack developer and AI/ML enthusiast. With hands-on
                experience building web and mobile applications, integrating
                APIs, and training deep learning models, I love turning ideas
                into real-world products.
              </p>
              <p className="text-base sm:text-lg leading-relaxed transform hover:translate-x-2 transition-all duration-500">
                Beyond coding, I enjoy exploring cutting-edge AI architectures,
                contributing to impactful research projects, and building
                intelligent systems—from fire detection to medical imaging. I'm
                always curious, always building.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4 pt-6 justify-center md:justify-start">
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
