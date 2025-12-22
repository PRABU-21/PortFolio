import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Stats from './components/Stats'
import Contact from './components/Contact'
import CometBackground from './components/CometBackground'
import './App.css';
function App() {
  return (
    <div className="min-h-screen relative">
      <CometBackground />
      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <div id="home" className="min-h-screen">
          <Hero />
        </div>
        <div id="about" className="min-h-screen">
          <About />
        </div>
        <div id="experience" className="min-h-screen">
          <Experience />
        </div>
        <div id="projects" className="min-h-screen">
          <Projects />
        </div>
        <div id="achievements" className="min-h-screen">
          <Achievements />
        </div>
        <div id="certifications" className="min-h-screen">
          <Certifications />
        </div>
        <div id="stat" className="min-h-screen">
          <Stats />
        </div>
        <div id="contact" className="min-h-screen">
          <Contact />
        </div>
      </div>
    </div>
  )
}
export default App