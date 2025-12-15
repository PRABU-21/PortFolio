const Navbar = () => {
  return (
    <nav className="bg-transparent text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          PRABAKARAN S B
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="#home" className="hover:text-gray-300 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-300 transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#achievement" className="hover:text-gray-300 transition-colors">
              Achievement
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-gray-300 transition-colors">
              Certifications
            </a>
          </li>
          <li>
            <a href="#stat" className="hover:text-gray-300 transition-colors">
              Stat
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
