import React from 'react';
import './About.css';

const About = () => {
  return (
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hi there! 
          I'm a Full Stack Developer with a passion for building end-to-end applications and exploring cutting-edge technologies. With a strong foundation in both frontend and backend development, I thrive on turning ideas into functional, user-centric web applications. My current interests lie in Web3 and Machine Learning, and I'm always excited to dive deeper into these rapidly evolving fields.
        </p>
        
        <div className="skills-category">
          <h3 className="skills-category-title">Frontend</h3>
          <div className="skills-list">
            <div className="skill-item">HTML5</div>
            <div className="skill-item">CSS3</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">React.js</div>
            <div className="skill-item">Tailwind CSS</div>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Backend</h3>
          <div className="skills-list">
            <div className="skill-item">Node.js</div>
            <div className="skill-item">Express.js</div>
            <div className="skill-item">REST APIs</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">MySQL</div>
          </div>
        </div>
      </section>

  );
};

export default About;
