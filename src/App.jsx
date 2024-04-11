import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Navbar from "./components/navbar"
import Footer from "./components/Footer"
import Contact from "./Pages/Contact"



function App() {


  return (
    <BrowserRouter>
    <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="about"  element={<About />}/>
        <Route path="services"  element={<Services />}/>
        <Route path="contact"  element={<Contact />}/>
      </Routes>
      <Footer />
      <p class="tracking-tight text-base text-center border border-gray-300 bg-white py-10 lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
        Copyright © Redesign Luxury | Site Created by <a href="https://www.linkedin.com/in/seymzr/" target="_blank" className="font-serif">seymzr</a>
    </p>
    </BrowserRouter>
  )
}

export default App
