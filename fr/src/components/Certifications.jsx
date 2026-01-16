import ScrollFloat from "./ScrollFloat";
import CertificationCard from "./CertificationCard";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      company: "Microsoft",
      title: "Microsoft Azure AI Engineer Associate",
      description: "Microsoft Azure AI Engineer Associate certificate badge",
      technologies: [
        "Azure AI services",
        "Machine Learning",
        "Cognitive Services",
        "MLOps",
      ],
      pdfUrl: "/certification-images/AZURE CERTIFICATE.pdf",
      logoUrl: "/logo/microsoft.webp",
      imageUrl: "/certification-images/azure.png",
    },
    {
      id: 2,
      company: "MongoDB",
      title: "MongoDB Certified Developer Associate",
      description: "MongoDB Certified Developer Associate certificate badge",
      technologies: [
        "MongoDB data modeling",
        "querying",
        "aggregation",
        "indexing",
      ],
      pdfUrl: "/certification-images/mongo db prabu.pdf",
      logoUrl: "/logo/mongodb-icon-1.svg",
      imageUrl: "/certification-images/mongodb.png",
    },
  ];

  return (
    <section
      id="certifications"
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
          Certifications
        </ScrollFloat>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
