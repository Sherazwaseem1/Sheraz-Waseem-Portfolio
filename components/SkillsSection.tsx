import {
  BarChart3,
  Brain,
  Cpu,
  Globe,
  Monitor,
  Server,
  Smartphone,
  Zap,
} from "lucide-react";

function SkillCard({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; icon: string }[];
}) {
  return (
    <div className="bg-black/70 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-indigo-500/40 transition-all duration-500 transform hover:scale-105">
      <div className="flex items-center gap-2 text-indigo-400 mb-4 text-lg font-semibold">
        {icon} <span>{title}</span>
      </div>
      <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-center gap-2">
            <span>{skill.icon}</span> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsSection() {
  return (
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
  );
}
