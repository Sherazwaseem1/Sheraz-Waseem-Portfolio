import { Briefcase } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/20"
    >
      <div className="relative z-20 container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    title: "Senior AI/ML Engineer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Lead development of AI-powered applications serving 1M+ users. Built machine learning pipelines and deployed models that improved user engagement by 40%. Mentored junior developers in AI/ML best practices.",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Full Stack Developer & ML Engineer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built end-to-end web applications with integrated ML features. Developed recommendation systems and natural language processing solutions. Collaborated with data science team to deploy ML models in production.",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "scikit-learn",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 - 2020",
    description:
      "Developed responsive websites and web applications for various clients. Focused on performance optimization and user experience. Started exploring machine learning applications in web development.",
    technologies: ["JavaScript", "React", "Vue.js", "SASS", "Webpack", "Git"],
  },
  {
    title: "Junior Developer",
    company: "Local Tech Company",
    period: "2018 - 2019",
    description:
      "Started my career working on internal tools and learning best practices. Contributed to bug fixes and feature implementations while building foundation in both web development and data science.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Python"],
  },
];

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
