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
import './App.css'
function App() {
  return (
    <div className="min-h-screen relative">
      <CometBackground />
      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="achievements">
          <Achievements />
        </div>        <div id="certifications">
          <Certifications />
        </div>
        <div id="stat">
          <Stats />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  )
}
export default App