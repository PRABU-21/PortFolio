import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Stats from './components/Stats'
import CometBackground from './components/CometBackground'
import './App.css'
function App() {
  return (
    <div className="min-h-screen relative">
      <CometBackground />
      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Stats />
      </div>
    </div>
  )
}
export default App
