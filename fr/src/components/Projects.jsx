import { BarChart3 } from 'lucide-react';
import ScrollFloat from './ScrollFloat';
import SpotlightCard from './SpotlightCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Smart Farming Assistant",
      description: "Smart AI assistant for farmers offering crop recommendations, disease diagnostics, weather insights, market trends, and a multilingual chatbot.",
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TensorFlow.js', 'Python'],

      impact: "Empowering farmers with data-driven insights",
      accuracy: "92% accuracy",
      imageUrl: "/project-images/farming-assistant.jpg"
    },
    {
      id: 2,
      title: "Medi Link - Intel Unnati",
      description: "AI-powered medical assistant chatbot that performs OCR on ingredient lists and analyzes health conditions through conversational queries.",
      technologies: ['Llama-3-8B-V1', 'OCR', 'NLP', 'Sentiment Analysis'],

      impact: "Responsible AI practices in healthcare accessibility",
      accuracy: "92% accuracy",
      imageUrl: "/project-images/medilink.jpg"
    },
    {
      id: 3,
      title: "Embedding-Based Resume Shortlisting & Job Recommendation System",
      description: "AI-driven resume screening system using Mini LLM embedding models to semantically match resumes with job descriptions beyond keyword-based filtering.",
      technologies: ['Mini LLM', 'Vector Embeddings', 'Cosine Similarity', 'Python'],

      impact: "Enhanced recruitment efficiency through intelligent matching",
      accuracy: "Improved precision",
      imageUrl: "/project-images/resume-system.jpg"
    },
    {
      id: 4,
      title: "Question Paper Generator",
      description: "AI-powered system that performs OCR on textbook PDFs and converts content into question papers with user-specified taxonomy levels.",
      technologies: ['MERN', 'Python', 'OCR', 'AI/ML'],

      impact: "Streamlined question paper creation for educational institutions",
      accuracy: "High precision OCR",
      imageUrl: "/project-images/question-generator.jpg"
    },
    {
      id: 5,
      title: "Zenith - Finance Tracker",
      description: "Comprehensive personal finance management application with AI-powered insights, budgeting tools, loan tracking, and location-based services.",
      technologies: ['React Native', 'Firebase', 'Node.js', 'AI/ML'],

      impact: "Enhanced personal financial literacy and management",
      accuracy: "Real-time tracking",
      imageUrl: "/project-images/zenith-finance.jpg"
    },
    {
      id: 6,
      title: "Library Management System",
      description: "Console-based library management application built in Java with database connectivity for managing books, members, and issue/return operations.",
      technologies: ['Java', 'JDBC', 'MySQL', 'OOP'],

      impact: "Academic project demonstrating core Java and database concepts",
      accuracy: "Reliable CRUD operations",
      imageUrl: "/project-images/library-management.jpg"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <ScrollFloat
          containerClassName="text-center mb-16"
          textClassName="text-4xl md:text-5xl font-bold text-yellow-100"
          scrollStart="top bottom-=10%"
          scrollEnd="center center"
        >
          Projects
        </ScrollFloat>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <SpotlightCard 
              key={project.id}
              className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 aspect-square flex flex-col"
              spotlightColor="rgba(234, 179, 8, 0.15)"
            >
              <div className="space-y-4 h-full flex flex-col">
                {/* Project Image Placeholder */}
                <div className="rounded-lg overflow-hidden bg-neutral-800 border border-neutral-700 h-32 flex items-center justify-center">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-neutral-500 text-sm">Project Dashboard Image</div>
                  )}
                </div>
                
                {/* Project Header */}
                <div className="space-y-2 flex-grow">
                  <h3 className="text-xl font-bold text-yellow-100 truncate">
                    {project.title}
                  </h3>
                  <p className="text-sm text-yellow-100/80 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Accuracy Badge */}
                  <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full">
                    <span className="text-amber-300 text-xs font-medium">{project.accuracy}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-neutral-800 text-yellow-100 rounded border border-neutral-700 truncate max-w-[80px]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-neutral-800 text-yellow-100 rounded border border-neutral-700">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    <p className="text-yellow-100/80 text-xs italic truncate">{project.impact}</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;