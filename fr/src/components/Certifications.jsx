import ScrollFloat from './ScrollFloat';
import SpotlightCard from './SpotlightCard';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Microsoft Certified: Azure AI Engineer Associate",
      description: "Certification validating expertise in implementing Azure AI solutions including natural language processing, computer vision, and generative AI services.",
      technologies: ['Azure', 'AI', 'Machine Learning', 'Cloud'],
      impact: "Demonstrated proficiency in Microsoft Azure AI technologies",
      accuracy: "Associate Level",
      imageUrl: "/certification-images/azure-ai-engineer.jpg"
    },
    {
      id: 2,
      title: "MongoDB Certified Associate Developer",
      description: "Certification validating skills in MongoDB database design, querying, and application development with MongoDB technologies.",
      technologies: ['MongoDB', 'NoSQL', 'Database', 'Development'],
      impact: "Proven expertise in document-oriented database technologies",
      accuracy: "Associate Level",
      imageUrl: "/certification-images/mongodb-developer.jpg"
    }
  ];

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <ScrollFloat
          containerClassName="text-center mb-16"
          textClassName="text-4xl md:text-5xl font-bold text-yellow-100"
          scrollStart="top bottom-=10%"
          scrollEnd="center center"
        >
          Certifications
        </ScrollFloat>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification) => (
            <SpotlightCard 
              key={certification.id}
              className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 aspect-square flex flex-col"
              spotlightColor="rgba(234, 179, 8, 0.15)"
            >
              <div className="space-y-4 h-full flex flex-col">
                {/* Certification Image Placeholder */}
                <div className="rounded-lg overflow-hidden bg-neutral-800 border border-neutral-700 h-32 flex items-center justify-center">
                  {certification.imageUrl ? (
                    <img 
                      src={certification.imageUrl} 
                      alt={certification.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-neutral-500 text-sm">Certification Badge</div>
                  )}
                </div>
                
                {/* Certification Header */}
                <div className="space-y-2 flex-grow">
                  <h3 className="text-xl font-bold text-yellow-100 truncate">
                    {certification.title}
                  </h3>
                  <p className="text-sm text-yellow-100/80 leading-relaxed line-clamp-2">
                    {certification.description}
                  </p>
                  
                  {/* Level Badge */}
                  <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full">
                    <span className="text-amber-300 text-xs font-medium">{certification.accuracy}</span>
                  </div>
                </div>

                {/* Skills/Tags */}
                <div>
                  <div className="flex flex-wrap gap-1">
                    {certification.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-neutral-800 text-yellow-100 rounded border border-neutral-700 truncate max-w-[80px]"
                      >
                        {tech}
                      </span>
                    ))}
                    {certification.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-neutral-800 text-yellow-100 rounded border border-neutral-700">
                        +{certification.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    <p className="text-yellow-100/80 text-xs italic truncate">{certification.impact}</p>
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

export default Certifications;