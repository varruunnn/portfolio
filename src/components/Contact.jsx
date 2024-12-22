import React from 'react';
import './Contact.css';
const handleclick = () => { alert('Email: varun.choudhary2512@gmail.com'); };

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Social/Contact</h2>
      <div className="slider-container">
        <div className="slider">
          <a href="https://github.com/varruunnn" target="_blank" rel="noopener noreferrer" className="slider-item github">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://x.com/_vaarruunn_" target="_blank" rel="noopener noreferrer" className="slider-item twitter">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.instagram.com/_varunchoudhary_/" target="_blank" rel="noopener noreferrer" className="slider-item instagram">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a onClick={handleclick} className="slider-item email">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://leetcode.com/u/varruun/" target="_blank" rel="noopener noreferrer" className="slider-item twitter">
            <i className="fab fa-twitter"></i> Leetcode
          </a> 
        </div>
      </div>
    </section>
  );
};

export default Contact;
