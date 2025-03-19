import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './styles/style.css';

function App() {
  return (
    <Router>
      <>
        <GalaxyBackground />
        <section className="main-part">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </>
    </Router>
  );
}

export default App;