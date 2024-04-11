import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Navbar from "./components/navbar"
import Footer from "./components/Footer"



function App() {


  return (
    <BrowserRouter>
    <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="about"  element={<About />}/>
        <Route path="services"  element={<Services />}/>
      </Routes>
      <Footer />
      <p class="tracking-tight text-base text-center border border-gray-300 bg-white py-10 lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
        Copyright © Redesign Luxury | Site Created by 
    </p>
    </BrowserRouter>
  )
}

export default App
