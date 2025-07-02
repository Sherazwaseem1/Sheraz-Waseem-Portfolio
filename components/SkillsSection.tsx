import Image from "next/image";
import { Globe, Cpu, Wrench } from "lucide-react";

const skills = {
  web: [
    {
      name: "React.js",
      logo: "react/react-original.svg",
      color: "bg-indigo-50",
    },
    {
      name: "Next.js",
      logo: "nextjs/nextjs-original.svg",
      color: "bg-indigo-50",
    },
    {
      name: "Node.js",
      logo: "nodejs/nodejs-original.svg",
      color: "bg-green-50",
    },
    {
      name: "Express",
      logo: "express/express-original.svg",
      color: "bg-gray-100",
    },
    {
      name: "MongoDB",
      logo: "mongodb/mongodb-original.svg",
      color: "bg-green-50",
    },
    {
      name: "MERN Stack",
      logo: "react/react-original.svg",
      color: "bg-indigo-100",
    },
    {
      name: "Flask",
      logo: "python/python-original.svg",
      color: "bg-indigo-50",
    },
    {
      name: "PostgreSQL",
      logo: "postgresql/postgresql-original.svg",
      color: "bg-orange-50",
    },
    {
      name: "JavaScript",
      logo: "javascript/javascript-original.svg",
      color: "bg-yellow-50",
    },
    {
      name: "TypeScript",
      logo: "typescript/typescript-original.svg",
      color: "bg-indigo-100",
    },
    {
      name: "FastAPI",
      logo: "fastapi/fastapi-original.svg",
      color: "bg-green-100",
    },
    {
      name: "Tailwind CSS",
      logo: "/Tailwind_CSS_Logo.png",
      color: "bg-blue-100",
    },
  ],
  ai: [
    {
      name: "PyTorch",
      logo: "pytorch/pytorch-original.svg",
      color: "bg-orange-50",
    },
    { name: "Keras", logo: "keras/keras-original.svg", color: "bg-pink-50" },
    {
      name: "TensorFlow",
      logo: "tensorflow/tensorflow-original.svg",
      color: "bg-orange-100",
    },
    {
      name: "Scikit-learn",
      logo: "scikitlearn/scikitlearn-original.svg",
      color: "bg-indigo-100",
    },
    {
      name: "OpenCV",
      logo: "opencv/opencv-original.svg",
      color: "bg-green-50",
    },
    {
      name: "NLP",
      logo: "pytorch/pytorch-original.svg",
      color: "bg-violet-100",
    },
    {
      name: "Computer Vision",
      logo: "opencv/opencv-original.svg",
      color: "bg-indigo-200",
    },
    {
      name: "Deep Learning",
      logo: "tensorflow/tensorflow-original.svg",
      color: "bg-pink-100",
    },
    {
      name: "Data Analysis",
      logo: "pandas/pandas-original.svg",
      color: "bg-blue-100",
    },
    {
      name: "Python",
      logo: "python/python-original.svg",
      color: "bg-indigo-100",
    },
  ],
  tools: [
    { name: "Git", logo: "git/git-original.svg", color: "bg-orange-100" },
    {
      name: "GitHub",
      logo: "github/github-original.svg",
      color: "bg-gray-100",
    },
    { name: "Jira", logo: "jira/jira-original.svg", color: "bg-blue-50" },
    {
      name: "Docker",
      logo: "docker/docker-original.svg",
      color: "bg-blue-100",
    },
    {
      name: "Postman",
      logo: "postman/postman-original.svg",
      color: "bg-orange-200",
    },
    { name: "Figma", logo: "figma/figma-original.svg", color: "bg-pink-100" },
    {
      name: "pgAdmin",
      logo: "postgresql/postgresql-original.svg",
      color: "bg-orange-50",
    },
  ],
};

function SkillBox({
  name,
  logo,
  color,
}: {
  name: string;
  logo: string;
  color: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-md ${color} shadow-md transition duration-300 hover:scale-[1.03]`}
    >
      <Image
        src={
          logo.startsWith("/")
            ? logo
            : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logo}`
        }
        alt={name}
        width={20}
        height={20}
        className="object-contain"
      />

      <span className="text-sm font-medium text-gray-800 whitespace-nowrap leading-tight">
        {name}
      </span>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 bg-black/90">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-snug">
          Skills & Technologies
        </h2>

        {/* First row: Web & AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Web Development */}
          <div className="bg-gradient-to-br from-black/70 to-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-indigo-500/20 transition duration-300">
            <div className="flex items-center gap-3 mb-6 text-2xl font-semibold text-indigo-300">
              <Globe className="w-7 h-7 text-indigo-400" />{" "}
              <span>Web Development</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.web.map((skill, i) => (
                <SkillBox key={i} {...skill} />
              ))}
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="bg-gradient-to-br from-black/70 to-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-pink-500/20 transition duration-300">
            <div className="flex items-center gap-3 mb-6 text-2xl font-semibold text-pink-300">
              <Cpu className="w-7 h-7 text-pink-400" />{" "}
              <span>AI & Machine Learning</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.ai.map((skill, i) => (
                <SkillBox key={i} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Second row: Developer Tools */}
        <div className="bg-gradient-to-br from-black/70 to-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-teal-500/20 transition duration-300">
          <div className="flex items-center gap-3 mb-6 text-2xl font-semibold text-teal-300">
            <Wrench className="w-7 h-7 text-teal-400" />{" "}
            <span>Developer Tools</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.tools.map((skill, i) => (
              <SkillBox key={i} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
