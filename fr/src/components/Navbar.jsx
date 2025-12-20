const Navbar = () => {
  return (
    <nav className="bg-transparent text-amber-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-amber-100">
          PRABAKARAN S B
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-yellow-400 transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#achievement" className="hover:text-yellow-400 transition-colors">
              Achievement
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-yellow-400 transition-colors">
              Certifications
            </a>
          </li>
          <li>
            <a href="#stat" className="hover:text-yellow-400 transition-colors">
              Stat
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
