import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import MilitaryService from './components/MilitaryService';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import '../src/styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Education />
      <Experience />
      <MilitaryService />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
