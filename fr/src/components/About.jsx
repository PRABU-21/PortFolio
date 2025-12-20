import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiTypescript, 
  SiMongodb, 
  SiGit, 
  SiDocker,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiCplusplus,
  SiMysql,
  SiRedis,
  SiLinux
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import ScrollFloat from './ScrollFloat';
import FadeInSection from './FadeInSection';

const About = () => {
  // Tech stack data with professional icons from react-icons
  const techSkills = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title with ScrollFloat */}
        <ScrollFloat
          containerClassName="text-center mb-16"
          textClassName="text-4xl md:text-5xl font-bold text-yellow-100"
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
              <h3 className="text-2xl md:text-3xl font-semibold text-yellow-100">
                Hi, I'm Prabakaran S B
              </h3>
            </FadeInSection>
            
            <FadeInSection delay={300}>
              <p className="text-lg text-yellow-100/80 leading-relaxed">
                I'm a passionate Software Development Engineer specializing in AI-Driven Systems and Full-Stack Development. I love building scalable, production-ready systems that solve real-world problems.
              </p>
            </FadeInSection>

            <FadeInSection delay={400}>
              <p className="text-lg text-yellow-100/80 leading-relaxed">
                With strong problem-solving fundamentals and a keen eye for detail, I focus on creating efficient, maintainable code and delivering exceptional user experiences.
              </p>
            </FadeInSection>

            {/* Quick Info */}
            <FadeInSection delay={500}>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-200">📍</span>
                  <span className="text-yellow-100/80">Location: Your City, Country</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-200">🎓</span>
                  <span className="text-yellow-100/80">Education: Your Degree/University</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-200">💼</span>
                  <span className="text-yellow-100/80">Open to: Full-time Opportunities</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Tech Skills Section */}
        <div className="mt-20">
          <ScrollFloat
            containerClassName="text-center mb-10"
            textClassName="text-3xl font-bold text-yellow-100"
            scrollStart="top bottom"
            scrollEnd="center center"
          >
            Tech Skills
          </ScrollFloat>
          
          <FadeInSection delay={200}>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-8">
            {techSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-125 cursor-pointer"
                >
                  <IconComponent 
                    className="text-3xl md:text-4xl transition-all duration-300 group-hover:drop-shadow-lg" 
                    style={{ color: skill.color }}
                  />
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
