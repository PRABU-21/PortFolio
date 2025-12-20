import { useState } from 'react';
import ScrollFloat from './ScrollFloat';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState([]);
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

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <ScrollFloat
          containerClassName="text-center mb-16"
          textClassName="text-4xl md:text-5xl font-bold text-yellow-100"
          scrollStart="top bottom-=10%"
          scrollEnd="center center"
        >
          Experience
        </ScrollFloat>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line with Draw Animation */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-yellow-200/40 via-yellow-300/60 to-yellow-200/40 animate-line-draw" style={{ animationDelay: '0.5s' }}></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
                style={{ animationDelay: `${0.8 + index * 0.3}s` }}
                onAnimationEnd={() => {
                  if (!visibleCards.includes(index)) {
                    setVisibleCards([...visibleCards, index]);
                  }
                }}
              >
                {/* Timeline Dot with Pop Animation */}
                <div 
                  className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full border-4 border-black shadow-lg animate-dot-pop"
                  style={{ animationDelay: `${1.0 + index * 0.3}s` }}
                ></div>

                {/* Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="group relative bg-yellow-100/5 backdrop-blur-sm border border-yellow-100/20 rounded-xl p-6 hover:bg-yellow-100/10 hover:border-yellow-100/30 transition-all duration-300 hover:scale-105">
                    {/* Period */}
                    <div className="flex items-center gap-2 text-yellow-200 mb-3" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <Calendar size={16} className="text-yellow-300" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    {/* Company & Role */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-yellow-100 mb-2 animate-fade-in-up" style={{ animationDelay: `${1.2 + index * 0.3}s` }}>
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 text-yellow-100/80 mb-1 animate-fade-in-up" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start', animationDelay: `${1.3 + index * 0.3}s` }}>
                        <Briefcase size={16} className="text-yellow-300" />
                        <span className="text-sm font-medium">{exp.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-yellow-100/70 animate-fade-in-up" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start', animationDelay: `${1.4 + index * 0.3}s` }}>
                        <MapPin size={16} className="text-yellow-300" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-yellow-100/80 leading-relaxed mb-4 animate-fade-in-up" style={{ animationDelay: `${1.5 + index * 0.3}s` }}>
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-yellow-100/10 text-yellow-100 rounded-full border border-yellow-100/20 animate-fade-in-up"
                          style={{ animationDelay: `${1.5 + index * 0.3 + idx * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Hover Effect Gradient */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-100/0 via-yellow-100/5 to-yellow-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
