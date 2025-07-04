"use client";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  type: "web" | "ai-ml";
}

const projectTypes = [
  { label: "All Projects", value: "all" },
  { label: "Web Development", value: "web" },
  { label: "AI / ML", value: "ai-ml" },
];

export default function ProjectsSection() {
  const [selectedType, setSelectedType] = useState<"all" | "web" | "ai-ml">(
    "all"
  );

  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/20"
    >
      <div className="relative z-20 container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {projectTypes.map(({ label, value }) => {
            const isSelected = selectedType === value;
            return (
              <button
                key={value}
                onClick={() =>
                  setSelectedType(value as "all" | "web" | "ai-ml")
                }
                className={`px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-300 transform
                  ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-105 shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  type,
}: Project) {
  return (
    <Card className="h-full flex flex-col bg-black/80 border-gray-800 hover:border-blue-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 group overflow-hidden relative">
      {/* Top image */}
      <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-900/50 to-purple-900/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Title and description */}
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-500 text-lg sm:text-xl">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-300 text-sm sm:text-base mt-2">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Tech stack, buttons, and type */}
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white transition-all duration-500 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          <Button
            size="sm"
            onClick={() => window.open(githubUrl, "_blank")}
            className="bg-white text-black border border-gray-300 transform transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white"
          >
            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Code
          </Button>
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(liveUrl, "_blank")}
              className="border-purple-400 text-purple-400 transform transition-all duration-300 hover:scale-110 hover:bg-purple-500 hover:text-white"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Website
            </Button>
          )}
        </div>

        {/* Project Type Badge */}
        <div className="flex justify-end">
          <Badge
            className={`text-xs px-2 py-0.5 rounded-full ${
              type === "web"
                ? "bg-blue-500 text-white"
                : "bg-purple-600 text-white"
            }`}
          >
            {type === "web" ? "Web Dev" : "AI / ML"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

const projects: Project[] = [
  {
    title: "Forest Fire Detection",
    type: "ai-ml",
    description:
      "Swin Transformer + Faster R-CNN experts for satellite, indoor, and outdoor fire detection. Uses self-attention gating and Weighted Box Fusion.",
    technologies: ["PyTorch", "Faster R-CNN", "Swin-T", "WBF", "CNN", "YOLO"],
    githubUrl: "https://github.com/Sherazwaseem1/Forest-Fire-Detection",
    imageUrl: "/Fire_detection_pic.png",
  },
  {
    title: "Alzheimer's MRI Classification",
    type: "ai-ml",
    description:
      "Dementia classification using Swin Transformers and Enhanced SE Modules. Worked on OASIS-2 dataset for 4-class severity detection.",
    technologies: ["PyTorch", "ViT", "Swin-T", "SE Module", "OASIS", "MRI"],
    githubUrl: "https://github.com/Sherazwaseem1/Alzheimer-Classification",
    imageUrl: "/Alzheimer_Pic.png",
  },
  {
    title: "Fleet Management & Reimbursement System",
    type: "web",
    description:
      "End-to-end React Native + Node.js system with AWB Labeling, Firebase Cloudinary uploads, and AI-based expense prediction.",
    technologies: ["React Native", "Node.js", "MongoDB", "Cloudinary", "AI"],
    githubUrl: "https://github.com/Sherazwaseem1/fleet-management",
    imageUrl: "/FleetManagement_pic.png",
  },
  {
    title: "Real Estate Management System",
    type: "web",
    description:
      "Internship project using React + FastAPI. CRUD listings, Redux state, PostgreSQL DB, and Firebase for media uploads.",
    technologies: ["React", "FastAPI", "Redux", "PostgreSQL", "Firebase"],
    githubUrl: "https://github.com/Sherazwaseem1/real-estate",
    imageUrl: "/EstateHub_pic.png",
  },
  {
    title: "Spotify Clone",
    type: "web",
    description:
      "A responsive Spotify web clone built using HTML, CSS, and JavaScript. Includes features like dynamic song play/pause, seek bar, and real-time UI updates.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Sherazwaseem1/real-estate",
    imageUrl: "/spotify_pic.png",
  },
  {
    title: "Gym Website",
    type: "web",
    description:
      "A gym website built with Express.js and Pug templating engine. Includes pages for membership plans, contact forms, and class schedules with clean responsive UI.",
    technologies: ["Express.js", "Pug", "Node.js", "HTML", "CSS"],
    githubUrl: "https://github.com/Sherazwaseem1/gym-website",
    imageUrl: "/gym_pic.png",
  },
  {
    title: "Taskify - ToDo App",
    type: "web",
    description:
      "A clean and responsive ToDo list application built using React.js and Tailwind CSS. Allows users to add, manage, and delete tasks with a sleek UI and local state management.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/Sherazwaseem1/taskify",
    imageUrl: "/Todolist_pic.png",
  },
  {
    title: "ColorGrid - Multiplayer Color Conquest",
    type: "web",
    description:
      "A real-time 2-player color conquest game built with React, Node, and Socket.IO. Players take turns filling a 5x5 grid, aiming to form the largest connected island of their color.",
    technologies: ["React.js", "CSS", "Socket.IO", "Express", "Node.js"],
    githubUrl: "https://github.com/Sherazwaseem1/colorgrid",
    imageUrl: "/Colorgrid_pic_2.png",
  },
  {
    title: "FoodSync - Local Food Donation Platform",
    type: "web",
    description:
      "A full-stack MERN application enabling restaurants to donate excess food to nearby NGOs and shelters. Built with React and Tailwind CSS for a responsive UI, and Node.js with MongoDB for scalable data handling.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Sherazwaseem1/foodsync",
    liveUrl: "https://food-sync.vercel.app/",
    imageUrl: "/FoodSync_Pic.png",
  },
  {
    title: "Urdu News Article Classifier",
    type: "ai-ml",
    description:
      "A multiclass text classification system for Urdu news articles using custom machine learning models. Articles from top Urdu news sites were scraped, cleaned, tokenized using GPT-2 Urdu tokenizer, and classified into 5 categories using Logistic Regression, Multinomial Naive Bayes, and a Fully Connected Neural Network. The FCNN achieved the highest accuracy of 96.58%.",
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "PyTorch",
      "FCNN",
      "Naive Bayes",
      "Logistic Regression",
    ],
    githubUrl: "https://github.com/Sherazwaseem1/urdu-news-classifier", // Replace with actual repo if available
    imageUrl: "/UrduArticles-Pic.png", // Replace with your project image
  },
];
