import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Mail, Send, MessageCircle, Github, Linkedin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import Image from "next/image";

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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const toastId = toast.loading("Sending message...");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          message,
          title: "Portfolio Contact",
        },
        publicKey
      );

      toast.success("Message sent successfully!", { id: toastId });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Email error:", error);
      toast.error("Failed to send message. Please try again.", { id: toastId });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi, I saw your portfolio and wanted to connect."
    );
    window.open(`https://wa.me/923226382191?text=${message}`, "_blank");
  };

  return (
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
        <h2 className="text-3xl sm:text-4xl pb-2 font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-lg sm:text-xl text-center mb-8 sm:mb-12 bg-gradient-to-r from-gray-300 via-indigo-200 to-violet-200 bg-clip-text text-transparent px-4">
          I'm always interested in new opportunities and exciting projects
        </p>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
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
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                />
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
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-500"
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Start WhatsApp Chat
                </Button>
                <Button
                  className="w-full bg-[#24292f] hover:bg-[#1b1f23] text-white transform hover:scale-105 transition-all duration-500"
                  onClick={() =>
                    window.open("https://github.com/Sherazwaseem1", "_blank")
                  }
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Profile
                </Button>
                <Button
                  className="w-full bg-[#0a66c2] hover:bg-[#004182] text-white transform hover:scale-105 transition-all duration-500"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/sheraz-waseem/",
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
  );
}
