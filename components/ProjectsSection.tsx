import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/20">
      <div className="relative z-20 container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    title: "AI-Powered E-Commerce",
    description:
      "Full-stack e-commerce platform with AI recommendation engine and natural language search",
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Smart Task Management",
    description:
      "Collaborative task management with AI-powered priority suggestions and automated scheduling",
    technologies: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Computer Vision Dashboard",
    description:
      "Real-time object detection and analysis dashboard for security and monitoring applications",
    technologies: ["Python", "OpenCV", "FastAPI", "React"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "NLP Chatbot Platform",
    description:
      "Multi-language chatbot platform with sentiment analysis and intent recognition",
    technologies: ["Python", "Transformers", "FastAPI", "React"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "ML Model Deployment",
    description:
      "MLOps platform for automated model training, validation, and deployment with monitoring",
    technologies: ["Python", "MLflow", "Docker", "Kubernetes"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Predictive Analytics App",
    description:
      "Mobile app for predictive analytics in business intelligence with interactive visualizations",
    technologies: ["React Native", "Python", "scikit-learn", "Charts"],
    githubUrl: "#",
    liveUrl: "#",
  },
]

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
            onClick={() => window.open(githubUrl, "_blank")}
            className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white transform hover:scale-110 transition-all duration-500 text-xs sm:text-sm"
          >
            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Code
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(liveUrl, "_blank")}
            className="border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white transform hover:scale-110 transition-all duration-500 text-xs sm:text-sm"
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Live
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
