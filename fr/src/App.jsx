import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#000000] relative">
      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
      </div>
    </div>
  )
}

export default App
