import Navbar from "./components/navbar/Navbar"
import Home from "./components/pages/Home"
import About from './components/pages/About'
import {Routes,Route } from "react-router-dom"
import Skill from "./components/pages/Skill"
import Contact from "./components/pages/Contact"
import Projects from "./components/pages/Projects"
import MyCv from "./components/pages/MyCv"


function App() {
  

  return (
    <>
   <Navbar></Navbar>
   <Routes>
      
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/skill" element={<Skill></Skill>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/mycv" element={<MyCv></MyCv>}></Route>
    </Routes>
    
   
      
    </>
  )
}

export default App
