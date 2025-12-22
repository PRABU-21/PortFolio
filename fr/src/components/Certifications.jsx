import ScrollFloat from './ScrollFloat';
import SpotlightCard from './SpotlightCard';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      company: "Microsoft",
      title: "Microsoft Azure AI Engineer Associate",
      description: "Microsoft Azure AI Engineer Associate certificate badge",
      technologies: ['Azure AI services', 'Machine Learning', 'Cognitive Services', 'MLOps'],
      pdfUrl: "/certification-images/AZURE CERTIFICATE.pdf",
      logoUrl: "/logo/microsoft.webp",
      imageUrl: "/certification-images/azure.png"
    },
    {
      id: 2,
      company: "MongoDB",
      title: "MongoDB Certified Developer Associate",
      description: "MongoDB Certified Developer Associate certificate badge",
      technologies: ['MongoDB data modeling', 'querying', 'aggregation', 'indexing'],
      pdfUrl: "/certification-images/mongo db prabu.pdf",
      logoUrl: "/logo/mongodb-icon-1.svg",
      imageUrl: "/certification-images/mongodb.png"
    }
  ];

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <ScrollFloat
          containerClassName="text-center mb-16"
          textClassName="text-4xl md:text-5xl font-bold text-[#E8E3B1]"
          scrollStart="top bottom-=10%"
          scrollEnd="center center"
        >
          Certifications
        </ScrollFloat>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((certification) => (
            <SpotlightCard 
              key={certification.id}
              className="border-neutral-800 aspect-square flex flex-col"
              spotlightColor="rgba(212, 175, 55, 0.25)"
            >
              <div className="h-full flex flex-col bg-[#000000]">
                {/* Company Logo and Title */}
                <div className="flex items-start gap-3 mb-4">
                  {certification.logoUrl && (
                    <img 
                      src={certification.logoUrl} 
                      alt={`${certification.company} logo`} 
                      className="w-10 h-10 object-contain"
                    />
                  )}
                  <div>
                    <h3 className="font-bold text-[#E8E3B1]">{certification.company}</h3>
                    <p className="text-sm text-[#E8E3B1] font-medium">{certification.title}</p>
                  </div>
                </div>
                
                {/* Certificate Description */}
                <p className="text-xs text-[#E8E3B1]/80 mb-4">
                  {certification.description}
                </p>
                
                {/* Certificate Image */}
                <div className="rounded-lg overflow-hidden bg-[#000000] border border-neutral-700 mb-4 flex-grow flex items-center justify-center">
                  {certification.imageUrl ? (
                    <img 
                      src={certification.imageUrl} 
                      alt={certification.title}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <div className="text-neutral-500 text-sm">Certificate Image</div>
                  )}
                </div>
                
                {/* Skills */}
                <div className="mb-3">
                  <p className="text-xs text-[#E8E3B1] font-medium mb-1">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {certification.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-[#000000] text-[#E8E3B1] rounded border border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* View Credential Link */}
                <div className="mt-auto pt-2">
                  <a 
                    href={certification.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-[#E8E3B1] hover:underline"
                  >
                    View Credential
                  </a>
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