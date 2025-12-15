import Navbar from './components/Navbar'
import LightRays from './components/LightRays'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Global Background Light Rays */}
      <div className="fixed inset-0 w-full h-full z-0">
        <LightRays 
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={1}
          rayLength={2}
          pulsating={false}
          fadeDistance={1.0}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.0}
          distortion={0.0}
        />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
