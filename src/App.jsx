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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about"  element={<About />}/>
        <Route path="services"  element={<Services />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
