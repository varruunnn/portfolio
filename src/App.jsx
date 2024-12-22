import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="main">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
    </div>
  );
}

export default App;
