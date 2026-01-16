import { BarChart3 } from "lucide-react";
import ScrollFloat from "./ScrollFloat";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Smart Farming Assistant",
      description:
        "Smart AI assistant for farmers offering crop recommendations, disease diagnostics, weather insights, market trends, and a multilingual chatbot.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "TensorFlow.js",
        "Python",
      ],

      impact: "Empowering farmers with data-driven insights",
      accuracy: "92% accuracy",
      imageUrl: "/project-images/farmora.png",
    },
    {
      id: 2,
      title: "Medi Link - Intel Unnati",
      description:
        "AI-powered medical assistant chatbot that performs OCR on ingredient lists and analyzes health conditions through conversational queries.",
      technologies: ["Llama-3-8B-V1", "OCR", "NLP", "Sentiment Analysis"],

      impact: "Responsible AI practices in healthcare accessibility",
      accuracy: "92% accuracy",
      imageUrl: "/project-images/intel-medilink.png",
    },
    {
      id: 3,
      title: "Embedding-Based Resume Shortlisting & Job Recommendation System",
      description:
        "AI-driven resume screening system using Mini LLM embedding models to semantically match resumes with job descriptions beyond keyword-based filtering.",
      technologies: [
        "Mini LLM",
        "Vector Embeddings",
        "Cosine Similarity",
        "Python",
      ],

      impact: "Enhanced recruitment efficiency through intelligent matching",
      accuracy: "Improved precision",
      imageUrl: "/project-images/internodyssy.png",
    },
    {
      id: 4,
      title: "Question Paper Generator",
      description:
        "AI-powered system that performs OCR on textbook PDFs and converts content into question papers with user-specified taxonomy levels.",
      technologies: ["MERN", "Python", "OCR", "AI/ML"],

      impact:
        "Streamlined question paper creation for educational institutions",
      accuracy: "High precision OCR",
      imageUrl: "/project-images/paperproctor.png",
    },
    {
      id: 5,
      title: "Zenith - Finance Tracker",
      description:
        "Comprehensive personal finance management application with AI-powered insights, budgeting tools, loan tracking, and location-based services.",
      technologies: ["React Native", "Firebase", "Node.js", "AI/ML"],

      impact: "Enhanced personal financial literacy and management",
      accuracy: "Real-time tracking",
      imageUrl: "/project-images/zenith.png",
    },
    {
      id: 6,
      title: "Library Management System",
      description:
        "Console-based library management application built in Java with database connectivity for managing books, members, and issue/return operations.",
      technologies: ["Java", "JDBC", "MySQL", "OOP"],

      impact: "Academic project demonstrating core Java and database concepts",
      accuracy: "Reliable CRUD operations",
      imageUrl: "",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <ScrollFloat
          containerClassName="text-center mb-16"
          textClassName="text-4xl md:text-5xl font-bold text-[#E8E3B1]"
          scrollStart="top bottom-=10%"
          scrollEnd="center center"
        >
          Projects
        </ScrollFloat>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
