import { Briefcase } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  logo: string; // path to logo image
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  logo,
}: Experience) {
  return (
    <div className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-indigo-500/30 last:border-l-0 group">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:translate-x-2"></div>

      <Card className="bg-black/80 border-gray-800 hover:border-indigo-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-indigo-400">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm">{period}</span>
            </div>
            <Image
              src={logo}
              alt={`${company} Logo`}
              width={32}
              height={32}
              className="rounded-md object-contain"
            />
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

const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Parcel2Ship",
    period: "May 2025 - Present",
    description:
      "Working on Parcel2Ship, a smart shipping marketplace that enables users to compare rates, delivery times, and services across top courier companies for both local and international shipments. As part of the development team, I am building a scalable full-stack platform using React + Tailwind CSS for a responsive and intuitive frontend, and Node.js with a SQL database for a robust backend. The goal is to empower users to make informed shipping decisions - quickly, reliably, and affordably - all through a unified and user-friendly interface.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Firebase",
      "Redux",
    ],
    logo: "/logos/netsol.png", // place logo in public/logos/
  },
  {
    title: "Software Engineering Intern",
    company: "NETSOL Technologies Inc.",
    period: "Jul 2024 - Aug 2024",
    description:
      "Created a full-stack property listing application using React (TypeScript) and Tailwind CSS on the frontend, and FastAPI with PostgreSQL on the backend. Integrated Firebase for image uploads and real-time updates, and implemented secure CRUD operations using RESTful APIs and Redux for state management.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Firebase",
      "Redux",
    ],
    logo: "/logos/netsol.png", // place logo in public/logos/
  },
  {
    title: "MIS Intern",
    company: "Pioneer Cement Limited",
    period: "Aug 2023 - Sep 2023",
    description:
      "Worked with Oracle RDBMS and Microsoft Power BI to extract, query, and visualize production and business data. Developed strong SQL querying skills and gained firsthand experience with enterprise data systems in a manufacturing environment.",
    technologies: ["Oracle RDBMS", "SQL", "Power BI"],
    logo: "/logos/pioneer.png",
  },
  {
    title: "Intern - Plan9",
    company: "Punjab Information Technology Board (PITB)",
    period: "Jul 2022 - Aug 2022",
    description:
      "Engaged with startups in the Plan9 incubation program. Supported digital marketing efforts and helped enhance startup visibility through strategic content and outreach.",
    technologies: ["Canva", "Digital Marketing", "Startup Ecosystem"],
    logo: "/logos/pitb.png",
  },
  {
    title: "Associate Consultant",
    company: "LUMS Consultancy Group",
    period: "Sep 2022 - Sep 2023",
    description:
      "Collaborated with the Bank of Punjab on a research project analyzing consumer and merchant adoption of POS systems. Contributed to survey design, data collection, and sentiment analysis to shape POS deployment strategy.",
    technologies: ["Market Research", "Survey Tools", "Data Analysis"],
    logo: "/logos/lcg.png",
  },
];
