import { useState } from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievement' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'stat', label: 'Stat' },
    { id: 'contact', label: 'Contact' }
  ];

  const { activeSection, scrollToSection } = useSmoothScroll(navItems);

  // Close mobile menu when clicking a link
  const handleLinkClick = (sectionId) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav className="bg-black bg-opacity-30 backdrop-blur-sm text-amber-100 p-4 fixed w-full z-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-amber-100">
          PRABAKARAN S B
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleLinkClick(item.id)}
                className={`transition-all duration-300 ease-out transform hover:scale-105 py-1 px-2 rounded-md ${
                  activeSection === item.id 
                    ? 'text-[#E8E3B1] font-medium' 
                    : 'hover:text-[#E8E3B1] hover:opacity-90'
                }`}
              >
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-amber-100 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul 
          className="md:hidden mt-4 space-y-4 bg-black bg-opacity-90 py-4 px-4 rounded-lg"
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleLinkClick(item.id)}
                className={`block w-full text-left py-2 transition-all duration-300 ease-out transform hover:scale-[1.02] ${
                  activeSection === item.id 
                    ? 'text-[#E8E3B1] font-medium' 
                    : 'hover:text-[#E8E3B1] hover:opacity-90'
                }`}
              >
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;