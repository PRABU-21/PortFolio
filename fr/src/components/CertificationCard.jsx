import { useState, useRef, useEffect } from "react";
import SpotlightCard from "./SpotlightCard";

const CertificationCard = ({ certification, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Scroll-triggered fade-in with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Generate floating particles on hover
  useEffect(() => {
    if (isHovered) {
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 2,
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isHovered]);

  // 3D Tilt effect based on mouse position
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SpotlightCard
        className="border-neutral-800 aspect-square flex flex-col relative overflow-visible"
        spotlightColor="rgba(212, 175, 55, 0.25)"
      >
        <div
          className="h-full flex flex-col bg-[#000000] transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Floating Particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-amber-400/30 pointer-events-none animate-float"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                zIndex: 5,
              }}
            />
          ))}

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
              <h3 className="font-bold text-[#E8E3B1]">
                {certification.company}
              </h3>
              <p className="text-sm text-[#E8E3B1] font-medium">
                {certification.title}
              </p>
            </div>
          </div>

          {/* Certificate Description */}
          <p className="text-xs text-[#E8E3B1]/80 mb-4">
            {certification.description}
          </p>

          {/* Certificate Image with Zoom on Hover */}
          <div className="rounded-lg overflow-hidden bg-[#000000] border border-neutral-700 mb-4 flex-grow flex items-center justify-center relative">
            {certification.imageUrl ? (
              <img
                src={certification.imageUrl}
                alt={certification.title}
                className={`w-full h-full object-contain p-2 transition-all duration-500 ease-out ${
                  isHovered
                    ? "scale-110 brightness-110"
                    : "scale-100 brightness-100"
                }`}
              />
            ) : (
              <div className="text-neutral-500 text-sm">Certificate Image</div>
            )}
            {/* Overlay gradient on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Skills */}
          <div className="mb-3">
            <p className="text-xs text-[#E8E3B1] font-medium mb-1">Skills:</p>
            <div className="flex flex-wrap gap-1">
              {certification.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
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
    </div>
  );
};

export default CertificationCard;
