import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from "./components/Services.jsx";
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Footer />
      </BrowserRouter>  

  )
}

export default App