import { 
  SiJavascript, 
  SiPython, 
  SiCplusplus,
  SiC,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiGithub,
  SiPostman
} from 'react-icons/si';
import { FaJava, FaRocket } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollFloat from './ScrollFloat';
import FadeInSection from './FadeInSection';

const About = () => {
  // Tech stack data with professional icons from react-icons
  const techSkills = [
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'C', icon: SiC, color: '#A8B9CC' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#444444' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Hugging Face', icon: '🤗', color: '#FFD43B' },
    { name: 'Vite', icon: '/vite.svg', color: '#646CFF' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title with ScrollFloat */}
        <ScrollFloat
          containerClassName="text-center mb-16"
          textClassName="text-4xl md:text-5xl font-bold text-[#E8E3B1]"
          scrollStart="top bottom-=10%"
          scrollEnd="center center"
        >
          About Me
        </ScrollFloat>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <FadeInSection delay={100}>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  {/* Replace with your actual photo */}
                  <img 
                    src="/profile.jpg" 
                    alt="Prabakaran S B" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative glow effect */}
                <div className="absolute -inset-4 bg-white/5 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </FadeInSection>

          {/* Right Side - Details */}
          <div className="text-white space-y-6">
            <FadeInSection delay={200}>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#E8E3B1]">
                Hi, I'm PRABAKARAN S B
              </h3>
            </FadeInSection>
            <FadeInSection delay={400}>
              <p className="text-lg text-[#E8E3B1]/80 leading-relaxed">
                AI & Software Developer crafting intelligent systems with LLMs, ML, and modern web technologies — turning ideas into impactful, real-world products.
              </p>
            </FadeInSection>
            {/* Quick Info */}
            <FadeInSection delay={500}>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[#E8E3B1]/80">
                    Hosur, Tamil Nadu, India
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[#E8E3B1]/80">
                    prabakarancodes@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[#E8E3B1]/80">
                    +91 70103 84271
                  </span>
                </div>
              </div>
            </FadeInSection>

            {/* Areas of Interest */}
            <FadeInSection delay={600}>
              <div className="pt-6">
                <h4 className="text-2xl font-bold text-[#E8E3B1] mb-6">
                  Areas of Interest
                </h4>
                <p className="text-[#E8E3B1]/80">AI & Machine Learning, Full-Stack Web Development, Large Language Models (LLMs), Scalable Software Engineering</p>
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Tech Skills Section */}
        <div className="mt-20">
          <ScrollFloat
            containerClassName="text-center mb-10"
            textClassName="text-3xl font-bold text-[#E8E3B1]"
            scrollStart="top bottom"
            scrollEnd="center center"
          >
            Tech Skills
          </ScrollFloat>
          
          <FadeInSection delay={200}>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-8">
            {techSkills.map((skill, index) => {
              // Check if icon is a string (path or emoji) or a React component
              const isStringIcon = typeof skill.icon === 'string';
              
              return (
                <div 
                  key={index}
                  className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-125 cursor-pointer"
                >
                  {isStringIcon ? (
                    skill.icon.startsWith('/') ? (
                      // If it starts with '/', it's an image path
                      <img 
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:drop-shadow-lg"
                        style={{ filter: `drop-shadow(0 0 2px ${skill.color})` }}
                      />
                    ) : (
                      // Otherwise, it's an emoji
                      <span 
                        className="text-3xl md:text-4xl transition-all duration-300 group-hover:drop-shadow-lg"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </span>
                    )
                  ) : (
                    // It's a React component icon
                    <skill.icon
                      className="text-3xl md:text-4xl transition-all duration-300 group-hover:drop-shadow-lg" 
                      style={{ color: skill.color }}
                    />
                  )}
                  <span className="text-white text-[10px] font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </span>
                </div>
              );
            })}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;
