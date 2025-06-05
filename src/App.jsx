import Navbar from "./components/navbar/Navbar"
import Home from "./components/pages/Home"
import About from './components/pages/About'
import { Routes, Route } from "react-router-dom"
import Skill from "./components/pages/Skill"
import Contact from "./components/pages/Contact"
import Projects from "./components/pages/Projects"
import MyCv from "./components/pages/MyCv"
import Footer from "./components/pages/Footer"
import FloatingIcons from "./components/pages/FloatingIcons"
// import SocialSidebar from "./components/pages/SocialSidebar"
import Persona from "./components/pages/Persona"


function App() {
  return (
    <>
      <Navbar />
      {/* <SocialSidebar /> */}
      <FloatingIcons />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/persona" element={<Persona />} /> 
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mycv" element={<MyCv />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
