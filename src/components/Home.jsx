import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <h1 className="typewriter">Hi, I'm Varun Choudhary</h1>
      <p>Welcome to my portfolio website!</p>
      <a href="#projects" className="btn">View My Work</a>
    </section>
  );
};

export default Home;
