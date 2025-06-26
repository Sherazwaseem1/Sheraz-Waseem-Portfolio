"use client";

import type React from "react";

import { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Globe,
  Smartphone,
  Briefcase,
  Send,
  MessageCircle,
  Brain,
  Cpu,
  BarChart3,
  Zap,
  Server,
  Monitor,
  Menu,
  X,
} from "lucide-react";
import * as THREE from "three";
import HeroSection from "@/components/HeroSection";

function GlobalStarsBackground() {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.01;
      mesh.current.rotation.y = time * 0.005;
    }
  });

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.003}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={2}
      />
    </Points>
  );
}

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setMobileMenuOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(
      `mailto:your.email@example.com?subject=${subject}&body=${body}`
    );
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in discussing a project with you."
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Global Stars Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <GlobalStarsBackground />
        </Canvas>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800 transition-all duration-500">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div
              className="text-xl sm:text-2xl font-bold text-indigo-400 cursor-pointer transition-all duration-300 hover:text-indigo-300"
              onClick={() => scrollToSection("home")}
            >
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  className={`no-focus-outline px-2 py-2 text-white hover:text-indigo-400 ${
                    activeSection === item.id ? "text-indigo-400" : ""
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-indigo-400 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-3 pt-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-2 py-2 text-white hover:text-indigo-400 transition-all duration-300 ${
                      activeSection === item.id ? "text-indigo-400" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* About Section */}
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
                intelligent systems. I love turning complex problems into
                simple, beautiful solutions.
              </p>
              <p className="text-base sm:text-lg leading-relaxed transform hover:translate-x-2 transition-all duration-500">
                When I'm not coding, you can find me exploring new AI
                technologies, contributing to open source projects, or sharing
                knowledge with the developer community about machine learning
                and web development.
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

      {/* Experience Section */}
      <section
        id="experience"
        className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/20"
      >
        <div className="relative z-20 container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <ExperienceCard
              title="Senior AI/ML Engineer"
              company="TechCorp Inc."
              period="2022 - Present"
              description="Lead development of AI-powered applications serving 1M+ users. Built machine learning pipelines and deployed models that improved user engagement by 40%. Mentored junior developers in AI/ML best practices."
              technologies={[
                "Python",
                "TensorFlow",
                "PyTorch",
                "AWS",
                "Docker",
                "Kubernetes",
              ]}
            />
            <ExperienceCard
              title="Full Stack Developer & ML Engineer"
              company="StartupXYZ"
              period="2020 - 2022"
              description="Built end-to-end web applications with integrated ML features. Developed recommendation systems and natural language processing solutions. Collaborated with data science team to deploy ML models in production."
              technologies={[
                "React",
                "Node.js",
                "Python",
                "scikit-learn",
                "PostgreSQL",
                "Redis",
              ]}
            />
            <ExperienceCard
              title="Frontend Developer"
              company="Digital Agency"
              period="2019 - 2020"
              description="Developed responsive websites and web applications for various clients. Focused on performance optimization and user experience. Started exploring machine learning applications in web development."
              technologies={[
                "JavaScript",
                "React",
                "Vue.js",
                "SASS",
                "Webpack",
                "Git",
              ]}
            />
            <ExperienceCard
              title="Junior Developer"
              company="Local Tech Company"
              period="2018 - 2019"
              description="Started my career working on internal tools and learning best practices. Contributed to bug fixes and feature implementations while building foundation in both web development and data science."
              technologies={[
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "MySQL",
                "Python",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-16 sm:py-20 px-4 sm:px-6">
        <div className="relative z-20 container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Web Development Skills */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-center text-indigo-400 mb-6 sm:mb-8">
                Web Development
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <SkillCard
                  icon={<Monitor className="w-6 h-6 sm:w-8 sm:h-8" />}
                  title="Frontend"
                  skills={[
                    { name: "React", icon: "⚛️" },
                    { name: "Next.js", icon: "▲" },
                    { name: "TypeScript", icon: "📘" },
                    { name: "Tailwind CSS", icon: "🎨" },
                    { name: "Three.js", icon: "🎮" },
                  ]}
                />
                <SkillCard
                  icon={<Server className="w-6 h-6 sm:w-8 sm:h-8" />}
                  title="Backend"
                  skills={[
                    { name: "Node.js", icon: "🟢" },
                    { name: "Express", icon: "🚀" },
                    { name: "PostgreSQL", icon: "🐘" },
                    { name: "MongoDB", icon: "🍃" },
                    { name: "Redis", icon: "🔴" },
                  ]}
                />
                <SkillCard
                  icon={<Globe className="w-6 h-6 sm:w-8 sm:h-8" />}
                  title="Cloud & DevOps"
                  skills={[
                    { name: "AWS", icon: "☁️" },
                    { name: "Docker", icon: "🐳" },
                    { name: "Kubernetes", icon: "⚙️" },
                    { name: "CI/CD", icon: "🔄" },
                    { name: "Terraform", icon: "🏗️" },
                  ]}
                />
                <SkillCard
                  icon={<Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />}
                  title="Mobile"
                  skills={[
                    { name: "React Native", icon: "📱" },
                    { name: "Flutter", icon: "🦋" },
                    { name: "iOS", icon: "🍎" },
                    { name: "Android", icon: "🤖" },
                    { name: "PWA", icon: "📲" },
                  ]}
                />
              </div>
            </div>

            {/* AI/ML Skills */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-center text-violet-400 mb-6 sm:mb-8">
                AI & Machine Learning
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <SkillCard
                  icon={<Brain className="w-6 h-6 sm:w-8 sm:h-8" />}
                  title="ML Frameworks"
                  skills={[
                    { name: "TensorFlow", icon: "🧠" },
                    { name: "PyTorch", icon: "🔥" },
                    { name: "scikit-learn", icon: "📊" },
                    { name: "Keras", icon: "🎯" },
                    { name: "OpenCV", icon: "👁️" },
                  ]}
                />
                <SkillCard
                  icon={<Cpu className="w-6 h-6 sm:w-8 sm:h-8" />}
                  title="AI Technologies"
                  skills={[
                    { name: "NLP", icon: "💬" },
                    { name: "Computer Vision", icon: "📷" },
                    { name: "Deep Learning", icon: "🕳️" },
                    { name: "LLMs", icon: "🤖" },
                    { name: "MLOps", icon: "⚡" },
                  ]}
                />
                <SkillCard
                  icon={<BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />}
                  title="Data Science"
                  skills={[
                    { name: "Python", icon: "🐍" },
                    { name: "Pandas", icon: "🐼" },
                    { name: "NumPy", icon: "🔢" },
                    { name: "Jupyter", icon: "📓" },
                    { name: "Matplotlib", icon: "📈" },
                  ]}
                />
                <SkillCard
                  icon={<Zap className="w-6 h-6 sm:w-8 sm:h-8" />}
                  title="AI Tools"
                  skills={[
                    { name: "Hugging Face", icon: "🤗" },
                    { name: "OpenAI API", icon: "🎭" },
                    { name: "LangChain", icon: "⛓️" },
                    { name: "Weights & Biases", icon: "⚖️" },
                    { name: "MLflow", icon: "🌊" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/20"
      >
        <div className="relative z-20 container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ProjectCard
              title="AI-Powered E-Commerce"
              description="Full-stack e-commerce platform with AI recommendation engine and natural language search"
              technologies={["React", "Python", "TensorFlow", "PostgreSQL"]}
              githubUrl="#"
              liveUrl="#"
            />
            <ProjectCard
              title="Smart Task Management"
              description="Collaborative task management with AI-powered priority suggestions and automated scheduling"
              technologies={["Next.js", "OpenAI API", "PostgreSQL", "Prisma"]}
              githubUrl="#"
              liveUrl="#"
            />
            <ProjectCard
              title="Computer Vision Dashboard"
              description="Real-time object detection and analysis dashboard for security and monitoring applications"
              technologies={["Python", "OpenCV", "FastAPI", "React"]}
              githubUrl="#"
              liveUrl="#"
            />
            <ProjectCard
              title="NLP Chatbot Platform"
              description="Multi-language chatbot platform with sentiment analysis and intent recognition"
              technologies={["Python", "Transformers", "FastAPI", "React"]}
              githubUrl="#"
              liveUrl="#"
            />
            <ProjectCard
              title="ML Model Deployment"
              description="MLOps platform for automated model training, validation, and deployment with monitoring"
              technologies={["Python", "MLflow", "Docker", "Kubernetes"]}
              githubUrl="#"
              liveUrl="#"
            />
            <ProjectCard
              title="Predictive Analytics App"
              description="Mobile app for predictive analytics in business intelligence with interactive visualizations"
              technologies={[
                "React Native",
                "Python",
                "scikit-learn",
                "Charts",
              ]}
              githubUrl="#"
              liveUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
      >
        <div className="absolute inset-0 z-10">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <ContactBackground />
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={0.6} />
          </Canvas>
        </div>
        <div className="relative z-20 container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-center mb-8 sm:mb-12 bg-gradient-to-r from-gray-300 via-indigo-200 to-violet-200 bg-clip-text text-transparent px-4">
            I'm always interested in new opportunities and exciting projects
          </p>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <Card className="bg-black/80 border-gray-800 hover:border-indigo-500/40 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  Send Email
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and I'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transform hover:scale-105 transition-all duration-500"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="space-y-6">
              <Card className="bg-black/80 border-gray-800 hover:border-violet-500/40 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-violet-400" />
                    Quick Contact
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Get in touch instantly through these platforms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-500"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white transform hover:scale-105 transition-all duration-500"
                    onClick={() =>
                      window.open("https://github.com/yourusername", "_blank")
                    }
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white transform hover:scale-105 transition-all duration-500"
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/yourusername",
                        "_blank"
                      )
                    }
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-gray-800">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      Response Time
                    </h3>
                    <p className="text-gray-300">
                      I typically respond within 24 hours
                    </p>
                    <div className="flex justify-center space-x-4 mt-4">
                      <div className="text-center">
                        <div className="text-indigo-400 font-bold">Email</div>
                        <div className="text-sm text-gray-400">24 hours</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-bold">WhatsApp</div>
                        <div className="text-sm text-gray-400">2-4 hours</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800">
        <div className="relative z-20 container mx-auto text-center text-gray-400">
          <p className="text-sm sm:text-base">
            &copy; 2024 John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

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

function ContactBackground() {
  const systemRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  const starField = useMemo(() => {
    const stars = [];
    for (let i = 0; i < 2000; i++) {
      stars.push((Math.random() - 0.5) * 30);
      stars.push((Math.random() - 0.5) * 30);
      stars.push((Math.random() - 0.5) * 30);
    }
    return new Float32Array(stars);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (systemRef.current) {
      systemRef.current.rotation.y = time * 0.005 + mouse.x * 0.0001;
      systemRef.current.rotation.x += mouse.y * 0.0001;
    }
  });

  return (
    <group ref={systemRef}>
      <Points positions={starField} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>

      <Points
        positions={
          new Float32Array(
            Array.from({ length: 500 }, () => [
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
            ]).flat()
          )
        }
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.008}
          sizeAttenuation
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  );
}

function ExperienceCard({ title, company, period, description, technologies }) {
  return (
    <div className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-indigo-500/30 last:border-l-0 group">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full group-hover:scale-150 transition-all duration-500"></div>
      <Card className="bg-black/80 border-gray-800 hover:border-indigo-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
        <CardHeader>
          <div className="flex items-center gap-2 text-indigo-400 mb-2">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm">{period}</span>
          </div>
          <CardTitle className="text-white text-lg sm:text-xl">
            {title}
          </CardTitle>
          <CardDescription className="text-violet-300 font-medium">
            {company}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-white transition-all duration-500 text-xs sm:text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <Card className="bg-black/80 border-gray-800 hover:border-indigo-500/40 transition-all duration-500 hover:transform hover:scale-105">
      <CardHeader className="text-center pb-3 sm:pb-4">
        <div className="mx-auto mb-3 sm:mb-4 text-indigo-400 transform hover:scale-110 hover:rotate-12 transition-all duration-500">
          {icon}
        </div>
        <CardTitle className="text-white text-sm sm:text-base">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs sm:text-sm"
            >
              <span className="text-base sm:text-lg">{skill.icon}</span>
              <span className="text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ title, description, technologies, githubUrl, liveUrl }) {
  return (
    <Card className="bg-black/80 border-gray-800 hover:border-indigo-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 group overflow-hidden">
      {/* Project Image */}
      <div className="relative h-40 sm:h-48 bg-gradient-to-br from-indigo-900/50 to-violet-900/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img
          src="/placeholder.svg?height=200&width=400"
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
          <Badge variant="secondary" className="bg-black/70 text-white text-xs">
            Featured
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-white group-hover:text-indigo-400 transition-colors duration-500 text-lg sm:text-xl">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-300 text-sm sm:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-violet-400 text-violet-300 hover:bg-violet-400 hover:text-white transition-all duration-500 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white transform hover:scale-110 transition-all duration-500 text-xs sm:text-sm"
          >
            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Code
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white transform hover:scale-110 transition-all duration-500 text-xs sm:text-sm"
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Live
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
