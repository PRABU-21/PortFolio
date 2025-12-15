import { Mail, Github, Linkedin, Download, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          PRABAKARAN S B
        </h1>
        
        {/* Title */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
          Software Development Engineer | AI-Driven Systems & Full-Stack Development
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Building scalable, production-ready systems with strong problem-solving fundamentals.
        </p>
        
        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:prabakarancodes@gmail.com"
            className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          
          {/* GitHub */}
          <a
            href="https://github.com/PRABU-21"
            className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/prabakaransb"
            className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/PRABAKARAN_S_B_/"
            className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code size={20} />
            <span>LeetCode</span>
          </a>
          
          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:text-gray-300"
          >
            <Download size={20} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
