import { useState, useEffect, useRef } from 'react';
import ScrollFloat from './ScrollFloat';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const timelineRef = useRef(null);
  const cardRefs = useRef([]);
  const dotRefs = useRef([]);
  
  const experiences = [
    {
      id: 1,
      period: 'Nov 2024 - Jan 2025',
      company: 'Gen AI Consortium',
      location: 'Remote',
      role: 'Industrial Training',
      description: 'Analyzed datasets using Python libraries (Pandas, NumPy) to explore patterns and prepare data for machine learning model implementation.',
      skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Analysis']
    },
    {
      id: 2,
      period: 'Feb 2025 - Apr 2025',
      company: 'Intel Unnati',
      location: 'Remote',
      role: 'Industrial Training',
      description: 'Completed a structured industry training program with phased deliverables and mentor evaluations, gaining experience in global collaboration, professional reporting, and disciplined project delivery.',
      skills: ['Project Management', 'Global Collaboration', 'Professional Reporting', 'Mentorship']
    }
  ];

  useEffect(() => {
    // Timeline animation
    const timelineAnimation = gsap.fromTo(timelineRef.current, 
      { height: 0 },
      {
        height: '100%',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Card animations
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { 
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            rotate: index % 2 === 0 ? -2 : 2
          },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.9,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Dot animations
    dotRefs.current.forEach((dot, index) => {
      if (dot) {
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    return () => {
      timelineAnimation.scrollTrigger?.kill();
      cardRefs.current.forEach(card => {
        if (card) gsap.killTweensOf(card);
      });
      dotRefs.current.forEach(dot => {
        if (dot) gsap.killTweensOf(dot);
      });
    };
  }, []);

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <ScrollFloat
          containerClassName="text-center mb-16"
          textClassName="text-4xl md:text-5xl font-bold text-[#E8E3B1]"
          scrollStart="top bottom-=10%"
          scrollEnd="center center"
        >
          Experience
        </ScrollFloat>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line with Draw Animation */}
          <div ref={timelineRef} className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#E8E3B1]/40 via-[#E8E3B1]/60 to-[#E8E3B1]/40"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                ref={el => cardRefs.current[index] = el}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot with Pop Animation */}
                <div 
                  ref={el => dotRefs.current[index] = el}
                  className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#E8E3B1] rounded-full border-4 border-black shadow-lg"
                ></div>

                {/* Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="group relative bg-[#000000] backdrop-blur-sm border border-[#E8E3B1]/20 rounded-xl p-6 hover:bg-[#000000] hover:border-[#E8E3B1]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E8E3B1]/10">
                    {/* Period */}
                    <div className="flex items-center gap-2 text-[#E8E3B1] mb-3" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <Calendar size={16} style={{ color: 'rgb(187,165,61)' }} />
                      <span className="text-sm font-medium text-[#E8E3B1]">{exp.period}</span>
                    </div>

                    {/* Company & Role */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-[#E8E3B1] mb-2 animate-fade-in-up" style={{ animationDelay: `${1.4 + index * 0.4}s` }}>
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 text-[#E8E3B1]/80 mb-1 animate-fade-in-up" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start', animationDelay: `${1.5 + index * 0.4}s` }}>
                        <Briefcase size={16} style={{ color: 'rgb(187,165,61)' }} />
                        <span className="text-sm font-medium text-[#E8E3B1]">{exp.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#E8E3B1]/70 animate-fade-in-up" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start', animationDelay: `${1.6 + index * 0.4}s` }}>
                        <MapPin size={16} style={{ color: 'rgb(187,165,61)' }} />
                        <span className="text-sm text-[#E8E3B1]">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#E8E3B1]/80 leading-relaxed mb-4 animate-fade-in-up" style={{ animationDelay: `${1.7 + index * 0.4}s` }}>
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-[#000000] text-[#E8E3B1] rounded-full border border-[#E8E3B1]/20 animate-fade-in-up hover:bg-[#E8E3B1]/20 hover:border-[#E8E3B1]/30 hover:scale-110 transition-all duration-300"
                          style={{ animationDelay: `${1.5 + index * 0.3 + idx * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Hover Effect Gradient */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E8E3B1]/0 via-[#E8E3B1]/5 to-[#E8E3B1]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
