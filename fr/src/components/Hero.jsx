import { Mail, Github, Linkedin, Download, Code } from 'lucide-react';
import ShinyText from './ShinyText';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Name with ShinyText */}
        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
          <ShinyText 
            text="PRABAKARAN S B" 
            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100"
            speed={3}
          />
        </h1>
        
        {/* Title */}
        <h2 className="text-xl md:text-2xl text-amber-100/90 mb-6 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Software Development Engineer | AI-Driven Systems & Full-Stack Development
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-amber-100/70 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Building scalable, production-ready systems with strong problem-solving fundamentals.
        </p>
        
        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:prabakarancodes@gmail.com"
            className="flex items-center gap-2 px-6 py-3 text-amber-100 rounded-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={20} style={{ color: 'rgb(187,165,61)' }} />
            <span className="hover:text-yellow-400">Email</span>
          </a>
          
          {/* GitHub */}
          <a
            href="https://github.com/PRABU-21"
            className="flex items-center gap-2 px-6 py-3 text-amber-100 rounded-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} style={{ color: 'rgb(187,165,61)' }} />
            <span className="hover:text-yellow-400">GitHub</span>
          </a>
          
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/prabakaransb"
            className="flex items-center gap-2 px-6 py-3 text-amber-100 rounded-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} style={{ color: 'rgb(187,165,61)' }} />
            <span className="hover:text-yellow-400">LinkedIn</span>
          </a>
          
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/PRABAKARAN_S_B_/"
            className="flex items-center gap-2 px-6 py-3 text-amber-100 rounded-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code size={20} style={{ color: 'rgb(187,165,61)' }} />
            <span className="hover:text-yellow-400">LeetCode</span>
          </a>
          
          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 text-yellow-100 rounded-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105"
          >
            <Download size={20} style={{ color: 'rgb(187,165,61)' }} />
            <span className="hover:text-yellow-400">Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
