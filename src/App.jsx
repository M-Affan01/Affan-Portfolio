import Navbar from './Components/navbar/navbar'
import './App.css'
import Hero from './Components/Hero-Section/hero'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/experience'
import Project from './Components/Project/project'
import Certifications from './Components/Certifications/certificate'
import Contact from './Components/Contact/contact'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'


function App() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Project />
      <Certifications />
      <Contact />
      <ScrollToTop />
    </>
  )
}

export default App
